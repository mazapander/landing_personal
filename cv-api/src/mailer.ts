import nodemailer from 'nodemailer'
import { config } from './config.js'

const transport = nodemailer.createTransport({
  host: config.smtpHost,
  port: config.smtpPort,
  secure: config.isSmtpSecure,
  auth: {
    user: config.smtpUser,
    pass: config.smtpPassword,
  },
})

interface CvEmailInput {
  to: string
  name: string
  downloadUrl: string
  expiresAt: Date
  maxDownloads: number
}

export async function sendCvEmail({ to, name, downloadUrl, expiresAt, maxDownloads }: CvEmailInput) {
  const subject = 'Tu CV privado de AnderData'
  const expiresText = expiresAt.toLocaleString('es-ES', {
    dateStyle: 'medium',
    timeStyle: 'short',
  })

  const text = [
    `Hola ${name},`,
    '',
    'Gracias por solicitar el CV.',
    `Puedes descargarlo desde este enlace temporal: ${downloadUrl}`,
    `Caduca el: ${expiresText}`,
    `Límite de descargas: ${maxDownloads}`,
    '',
    'Si el enlace deja de funcionar, puedes volver a solicitarlo desde la landing.',
  ].join('\n')

  const html = `
    <div style="font-family: Arial, sans-serif; color: #111827; line-height: 1.6;">
      <h2 style="margin: 0 0 12px;">Tu CV privado de AnderData</h2>
      <p style="margin: 0 0 12px;">Hola ${escapeHtml(name)},</p>
      <p style="margin: 0 0 12px;">Gracias por solicitar el CV. El enlace es temporal y tiene un límite de descargas.</p>
      <p style="margin: 0 0 16px;">
        <a href="${downloadUrl}" style="display:inline-block;background:#2563eb;color:#fff;text-decoration:none;padding:12px 18px;border-radius:9999px;font-weight:700;">Descargar CV</a>
      </p>
      <p style="margin: 0 0 6px;">Caduca el: <strong>${escapeHtml(expiresText)}</strong></p>
      <p style="margin: 0 0 6px;">Límite de descargas: <strong>${maxDownloads}</strong></p>
      <p style="margin: 18px 0 0;color:#4b5563;font-size:14px;">Si el enlace deja de funcionar, puedes volver a solicitarlo desde la landing.</p>
    </div>
  `

  await transport.sendMail({
    from: config.fromEmail,
    to,
    subject,
    text,
    html,
  })
}

const escapeHtml = (value: string) =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
