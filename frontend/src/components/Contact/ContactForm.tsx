import { useRef, useState, type FormEvent } from 'react'
import { contactMailto } from '@/lib/contact-mailto.mjs'
import { trackEvent } from '@/lib/analytics.mjs'

const topics = ['Datos e IA', 'Automatización y software', 'Producto y arquitectura', 'Colaboración / idea']

interface Props { placement: string }

export default function ContactForm({ placement }: Props) {
  const dialog = useRef<HTMLDialogElement>(null)
  const [sent, setSent] = useState(false)

  const open = () => {
    setSent(false)
    dialog.current?.showModal()
  }

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const fields = new FormData(event.currentTarget)
    const service = String(fields.get('service'))
    trackEvent('contact_submit', { placement, service }, window.location, window.umami)
    window.location.href = contactMailto({
      name: String(fields.get('name')),
      email: String(fields.get('email')),
      service,
      message: String(fields.get('message')),
    })
    setSent(true)
  }

  return <>
    <button className="conversion-button" type="button" onClick={open} data-track-event="contact_open" data-track-location={placement}>Escríbeme</button>
    <dialog className="contact-dialog" ref={dialog} aria-labelledby="contact-title">
      {sent ? <div className="contact-dialog__content"><h2 id="contact-title">Correo preparado</h2><p>Se ha abierto tu aplicación de correo con el mensaje. Revísalo y envíalo cuando quieras.</p><button type="button" onClick={() => dialog.current?.close()}>Cerrar</button></div> :
        <form className="contact-dialog__content" onSubmit={submit}>
          <div className="contact-dialog__heading"><h2 id="contact-title">Hablemos</h2><button type="button" onClick={() => dialog.current?.close()} aria-label="Cerrar formulario">×</button></div>
          <label>Nombre<input name="name" autoComplete="name" required /></label>
          <label>Email<input name="email" type="email" autoComplete="email" required /></label>
          <label>¿Sobre qué quieres hablar?<select name="service" defaultValue=""><option value="">Elige una opción</option>{topics.map((topic) => <option key={topic}>{topic}</option>)}</select></label>
          <label>Contexto<textarea name="message" rows={5} required placeholder="Cuéntame la idea, el problema o el contexto que creas útil." /></label>
          <button className="conversion-button" type="submit">Preparar correo</button>
          <p className="contact-dialog__note">No se almacenan datos en esta web.</p>
        </form>}
    </dialog>
  </>
}
