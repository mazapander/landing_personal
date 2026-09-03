const recipient = 'ander.fernandez.gonzalbo@gmail.com'

export function contactMailto({ name, email, service, message }) {
  const subject = service ? `Consulta web: ${service}` : 'Consulta desde la web'
  const body = ['Hola Ander,', '', `Soy ${name}.`, `Mi email es ${email}.`, service && `Me interesa: ${service}.`, '', message].filter(Boolean).join('\n')
  return `mailto:${recipient}?${new URLSearchParams({ subject, body })}`
}
