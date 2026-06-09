import fs from 'node:fs'

const requiredEnv = (name: string) => {
  const value = process.env[name]?.trim()
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`)
  }
  return value
}

const parseNumber = (value: string | undefined, fallback: number) => {
  const parsed = Number(value)
  return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback
}

export const config = {
  port: parseNumber(process.env.PORT, 3000),
  databaseUrl: requiredEnv('DATABASE_URL'),
  smtpHost: requiredEnv('SMTP_HOST'),
  smtpPort: parseNumber(process.env.SMTP_PORT, 587),
  smtpUser: requiredEnv('SMTP_USER'),
  smtpPassword: requiredEnv('SMTP_PASSWORD'),
  fromEmail: process.env.CV_FROM_EMAIL?.trim() || process.env.SMTP_USER?.trim() || 'no-reply@anderdata.es',
  publicBaseUrl: (process.env.CV_PUBLIC_BASE_URL?.trim() || 'https://anderdata.es').replace(/\/$/, ''),
  filePath: requiredEnv('CV_FILE_PATH'),
  tokenTtlHours: parseNumber(process.env.CV_TOKEN_TTL_HOURS, 72),
  maxDownloads: parseNumber(process.env.CV_MAX_DOWNLOADS, 5),
  requestLimit: parseNumber(process.env.CV_REQUEST_LIMIT_PER_HOUR, 5),
  requestWindowMs: parseNumber(process.env.CV_REQUEST_WINDOW_MINUTES, 60) * 60_000,
  isSmtpSecure: process.env.SMTP_SECURE === 'true' || parseNumber(process.env.SMTP_PORT, 587) === 465,
}

if (!fs.existsSync(config.filePath)) {
  console.warn(`[cv-api] CV file not found at ${config.filePath}. Download route will return 404 until mounted.`)
}
