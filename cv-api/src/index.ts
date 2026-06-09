import crypto from 'node:crypto'
import fs from 'node:fs'
import path from 'node:path'
import { pipeline } from 'node:stream/promises'
import express, { type NextFunction, type Request, type Response } from 'express'
import helmet from 'helmet'
import { config } from './config.js'
import { initDatabase, pool } from './db.js'
import { sendCvEmail } from './mailer.js'
import { allowRequest, cleanupRateLimitBuckets } from './rateLimit.js'

type CvRequestBody = {
  name?: string
  email?: string
  company?: string
  linkedin?: string
  reason?: string
  privacyAccepted?: boolean
}

const app = express()

app.set('trust proxy', 1)
app.use(helmet({ crossOriginResourcePolicy: false }))
app.use(express.json({ limit: '32kb' }))

app.get('/health', (_req, res) => {
  res.json({ ok: true })
})

app.post('/api/cv/request', async (req, res) => {
  const ip = req.ip ?? req.socket.remoteAddress ?? 'unknown'
  const limitKey = `cv-request:${ip}`
  const rateLimit = allowRequest(limitKey, config.requestWindowMs, config.requestLimit)

  if (!rateLimit.allowed) {
    res.status(429).json({
      error: 'Demasiadas solicitudes. Inténtalo de nuevo más tarde.',
      retryAfterSeconds: Math.ceil((rateLimit.resetAt - Date.now()) / 1000),
    })
    return
  }

  const body = req.body as CvRequestBody
  const validation = validateRequest(body)
  if (!validation.valid) {
    res.status(400).json({ error: validation.error })
    return
  }

  const token = crypto.randomBytes(32).toString('hex')
  const tokenHash = hashToken(token)
  const expiresAt = new Date(Date.now() + config.tokenTtlHours * 60 * 60 * 1000)
  const id = crypto.randomUUID()
  const downloadUrl = `${config.publicBaseUrl}/api/cv/download?token=${encodeURIComponent(token)}`

  try {
    await pool.query(
      `
        INSERT INTO cv_requests (
          id, name, email, company, linkedin, reason, privacy_accepted,
          request_ip, user_agent, token_hash, token_expires_at,
          download_count, max_downloads, created_at, updated_at
        )
        VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,0,$12,now(),now())
      `,
      [
        id,
        validation.data.name,
        validation.data.email,
        validation.data.company,
        validation.data.linkedin || null,
        validation.data.reason,
        true,
        ip,
        req.get('user-agent') ?? null,
        tokenHash,
        expiresAt,
        config.maxDownloads,
      ],
    )

    await sendCvEmail({
      to: validation.data.email,
      name: validation.data.name,
      downloadUrl,
      expiresAt,
      maxDownloads: config.maxDownloads,
    })

    await pool.query(
      'UPDATE cv_requests SET email_sent_at = now(), updated_at = now() WHERE id = $1',
      [id],
    )

    console.info(`[cv-api] CV request created id=${id} email=${validation.data.email} ip=${ip}`)
    res.status(201).json({ ok: true, message: 'Solicitud registrada. Revisa tu correo.' })
  } catch (error) {
    console.error('[cv-api] Failed to process CV request', error)
    res.status(500).json({ error: 'No se pudo procesar la solicitud ahora mismo.' })
  }
})

app.get('/api/cv/download', async (req, res) => {
  const token = typeof req.query.token === 'string' ? req.query.token.trim() : ''
  if (!token) {
    res.status(400).json({ error: 'Token de descarga requerido.' })
    return
  }

  const tokenHash = hashToken(token)
  const filePath = config.filePath

  if (!fs.existsSync(filePath)) {
    res.status(404).json({ error: 'CV no disponible.' })
    return
  }

  const client = await pool.connect()
  try {
    await client.query('BEGIN')

    const result = await client.query(
      `
        SELECT id, download_count, max_downloads, token_expires_at, name, email
        FROM cv_requests
        WHERE token_hash = $1
        FOR UPDATE
      `,
      [tokenHash],
    )

    if (result.rowCount === 0) {
      await client.query('ROLLBACK')
      res.status(404).json({ error: 'Enlace no encontrado.' })
      return
    }

    const requestRow = result.rows[0] as {
      id: string
      download_count: number
      max_downloads: number
      token_expires_at: Date
      name: string
      email: string
    }

    const now = new Date()
    if (new Date(requestRow.token_expires_at).getTime() <= now.getTime()) {
      await client.query('ROLLBACK')
      res.status(410).json({ error: 'El enlace ha caducado.' })
      return
    }

    if (requestRow.download_count >= requestRow.max_downloads) {
      await client.query('ROLLBACK')
      res.status(429).json({ error: 'Se alcanzó el límite de descargas.' })
      return
    }

    await client.query(
      `
        UPDATE cv_requests
        SET download_count = download_count + 1, updated_at = now()
        WHERE id = $1
      `,
      [requestRow.id],
    )

    await client.query('COMMIT')

    const stats = await fs.promises.stat(filePath)
    const fileName = path.basename(filePath)

    res.setHeader('Content-Type', 'application/pdf')
    res.setHeader('Content-Length', String(stats.size))
    res.setHeader('Content-Disposition', `attachment; filename="${sanitizeFilename(fileName)}"`)
    res.setHeader('Cache-Control', 'no-store')

    console.info(`[cv-api] CV downloaded requestId=${requestRow.id} email=${requestRow.email}`)

    const stream = fs.createReadStream(filePath)
    stream.on('error', async error => {
      console.error('[cv-api] Failed streaming CV', error)
      if (!res.headersSent) {
        res.status(500).json({ error: 'No se pudo entregar el CV.' })
      } else {
        res.destroy(error as Error)
      }
    })

    await pipeline(stream, res)
  } catch (error) {
    await client.query('ROLLBACK').catch(() => undefined)
    console.error('[cv-api] Failed to download CV', error)
    if (!res.headersSent) {
      res.status(500).json({ error: 'No se pudo descargar el CV.' })
    }
  } finally {
    client.release()
  }
})

app.use((error: unknown, _req: Request, res: Response, _next: NextFunction) => {
  console.error('[cv-api] Unhandled error', error)
  res.status(500).json({ error: 'Error interno del servidor.' })
})

setInterval(cleanupRateLimitBuckets, 15 * 60 * 1000).unref()

async function bootstrap() {
  await initDatabase()
  app.listen(config.port, () => {
    console.info(`[cv-api] listening on ${config.port}`)
  })
}

bootstrap().catch(error => {
  console.error('[cv-api] startup failed', error)
  process.exit(1)
})

function hashToken(token: string) {
  return crypto.createHash('sha256').update(token).digest('hex')
}

function sanitizeFilename(fileName: string) {
  return fileName.replace(/[^a-zA-Z0-9._-]+/g, '_')
}

function validateRequest(body: CvRequestBody):
  | { valid: true; data: { name: string; email: string; company: string; linkedin: string; reason: string } }
  | { valid: false; error: string } {
  const name = body.name?.trim() ?? ''
  const email = body.email?.trim().toLowerCase() ?? ''
  const company = body.company?.trim() ?? ''
  const linkedin = body.linkedin?.trim() ?? ''
  const reason = body.reason?.trim() ?? ''
  const privacyAccepted = Boolean(body.privacyAccepted)

  if (!name || name.length < 2) return { valid: false, error: 'El nombre es obligatorio.' }
  if (!isValidEmail(email)) return { valid: false, error: 'El email no es válido.' }
  if (!company || company.length < 2) return { valid: false, error: 'La empresa es obligatoria.' }
  if (!reason || reason.length < 10) return { valid: false, error: 'Indica un motivo más descriptivo.' }
  if (!privacyAccepted) return { valid: false, error: 'Debes aceptar la política de privacidad.' }
  if (linkedin && !isValidOptionalUrl(linkedin)) return { valid: false, error: 'El enlace opcional no es válido.' }

  return { valid: true, data: { name, email, company, linkedin, reason } }
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

function isValidOptionalUrl(value: string) {
  try {
    const url = new URL(value)
    return url.protocol === 'http:' || url.protocol === 'https:'
  } catch {
    return false
  }
}
