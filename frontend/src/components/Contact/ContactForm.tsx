import { useRef, useState, type FormEvent } from 'react'
import { contactMailto } from '@/lib/contact-mailto.mjs'

const services = ['Productos de datos e IA', 'Automatización de procesos', 'Delivery y arquitectura de producto']

export default function ContactForm() {
  const dialog = useRef<HTMLDialogElement>(null)
  const [sent, setSent] = useState(false)

  const open = () => {
    setSent(false)
    dialog.current?.showModal()
  }

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const fields = new FormData(event.currentTarget)
    window.location.href = contactMailto({
      name: String(fields.get('name')),
      email: String(fields.get('email')),
      service: String(fields.get('service')),
      message: String(fields.get('message')),
    })
    setSent(true)
  }

  return <>
    <button className="conversion-button" type="button" onClick={open}>Cuéntame qué quieres resolver</button>
    <dialog className="contact-dialog" ref={dialog} aria-labelledby="contact-title">
      {sent ? <div className="contact-dialog__content"><h2 id="contact-title">Correo preparado</h2><p>Se ha abierto tu aplicación de correo con el mensaje. Revísalo y envíalo cuando quieras.</p><button type="button" onClick={() => dialog.current?.close()}>Cerrar</button></div> :
        <form className="contact-dialog__content" onSubmit={submit}>
          <div className="contact-dialog__heading"><h2 id="contact-title">Hablemos de tu proyecto</h2><button type="button" onClick={() => dialog.current?.close()} aria-label="Cerrar formulario">×</button></div>
          <label>Nombre<input name="name" autoComplete="name" required /></label>
          <label>Email<input name="email" type="email" autoComplete="email" required /></label>
          <label>¿En qué puedo ayudarte?<select name="service" defaultValue=""><option value="">Elige una opción</option>{services.map((service) => <option key={service}>{service}</option>)}</select></label>
          <label>Contexto<textarea name="message" rows={5} required placeholder="Qué quieres conseguir, dónde estás ahora y cualquier restricción útil." /></label>
          <button className="conversion-button" type="submit">Preparar correo</button>
          <p className="contact-dialog__note">No se almacenan datos en esta web.</p>
        </form>}
    </dialog>
  </>
}
