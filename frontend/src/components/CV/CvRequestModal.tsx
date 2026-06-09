import { useEffect, useState, type FormEvent } from 'react'
import { useAnalytics } from '../../hooks/useAnalytics'

interface CvRequestModalProps {
  open: boolean
  onClose: () => void
}

type FormState = {
  name: string
  email: string
  company: string
  linkedin: string
  reason: string
  privacyAccepted: boolean
}

type FormErrors = Partial<Record<keyof FormState, string>>

const initialForm: FormState = {
  name: '',
  email: '',
  company: '',
  linkedin: '',
  reason: '',
  privacyAccepted: false,
}

const API_ENDPOINT = '/api/cv/request'

export default function CvRequestModal({ open, onClose }: CvRequestModalProps) {
  const { trackEvent } = useAnalytics()
  const [form, setForm] = useState<FormState>(initialForm)
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [feedback, setFeedback] = useState('')

  useEffect(() => {
    if (!open) return

    setForm(initialForm)
    setErrors({})
    setStatus('idle')
    setFeedback('')
  }, [open])

  useEffect(() => {
    if (!open) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [open, onClose])

  if (!open) {
    return null
  }

  const updateField = <K extends keyof FormState>(field: K, value: FormState[K]) => {
    setForm(current => ({ ...current, [field]: value }))
    setErrors(current => {
      if (!current[field]) return current
      const next = { ...current }
      delete next[field]
      return next
    })
  }

  const validate = () => {
    const nextErrors: FormErrors = {}

    if (form.name.trim().length < 2) nextErrors.name = 'Indica tu nombre.'
    if (!isValidEmail(form.email)) nextErrors.email = 'Añade un email válido.'
    if (form.company.trim().length < 2) nextErrors.company = 'Indica tu empresa o compañía.'
    if (form.linkedin.trim() && !isValidOptionalUrl(form.linkedin.trim())) nextErrors.linkedin = 'Debe ser una URL válida.'
    if (form.reason.trim().length < 10) nextErrors.reason = 'Cuéntame para qué necesitas el CV.'
    if (!form.privacyAccepted) nextErrors.privacyAccepted = 'Debes aceptar la privacidad.'

    return nextErrors
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    trackEvent('submit_cv_request', {
      has_linkedin: Boolean(form.linkedin.trim()),
      company: form.company.trim(),
    })

    const nextErrors = validate()
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      setStatus('error')
      setFeedback('Revisa los campos marcados.')
      trackEvent('cv_request_error', {
        reason: 'validation',
      })
      return
    }

    setErrors({})
    setStatus('sending')
    setFeedback('')

    try {
      const response = await fetch(API_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      })

      const payload = await response.json().catch(() => ({})) as { error?: string }

      if (!response.ok) {
        throw new Error(payload.error || 'No se pudo enviar la solicitud.')
      }

      setStatus('success')
      setFeedback('Solicitud enviada. Revisa tu correo para el enlace temporal.')
      trackEvent('cv_request_success', {
        company: form.company.trim(),
        email_domain: form.email.split('@')[1] ?? '',
      })
    } catch (error) {
      const message = error instanceof Error ? error.message : 'No se pudo enviar la solicitud.'
      setStatus('error')
      setFeedback(message)
      trackEvent('cv_request_error', {
        reason: message,
      })
    }
  }

  const closeLabel = status === 'success' ? 'Cerrar' : 'Cancelar'

  return (
    <div
      className="cv-modal-backdrop"
      onMouseDown={event => {
        if (event.target === event.currentTarget) {
          onClose()
        }
      }}
    >
      <div
        className="cv-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cv-modal-title"
      >
        <div className="cv-modal-header">
          <div>
            <p className="cv-modal-kicker">CV privado</p>
            <h2 id="cv-modal-title" className="cv-modal-title">Solicitar descarga segura</h2>
          </div>
          <button type="button" className="cv-modal-close" onClick={onClose} aria-label="Cerrar modal">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>

        <p className="cv-modal-description">
          Deja tus datos profesionales y te enviaré un enlace temporal por correo.
          El PDF no está publicado en una URL pública.
        </p>

        {feedback && (
          <div className={`cv-modal-alert cv-modal-alert--${status}`}>
            {feedback}
          </div>
        )}

        {status === 'success' ? (
          <div className="cv-modal-success">
            <div className="cv-modal-success-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m20 6-11 11-5-5" />
              </svg>
            </div>
            <p>
              Ya está enviada la solicitud. Cuando recibas el email, usa el enlace temporal para descargar el CV.
            </p>
            <button type="button" className="button button-primary" onClick={onClose}>
              {closeLabel}
            </button>
          </div>
        ) : (
          <form className="cv-form" onSubmit={handleSubmit}>
            <div className="cv-form-grid">
              <label className="cv-field">
                <span>Nombre</span>
                <input
                  type="text"
                  value={form.name}
                  onChange={event => updateField('name', event.target.value)}
                  placeholder="Tu nombre"
                  disabled={status === 'sending'}
                />
                {errors.name && <small>{errors.name}</small>}
              </label>

              <label className="cv-field">
                <span>Email</span>
                <input
                  type="email"
                  value={form.email}
                  onChange={event => updateField('email', event.target.value)}
                  placeholder="tu@email.com"
                  disabled={status === 'sending'}
                />
                {errors.email && <small>{errors.email}</small>}
              </label>

              <label className="cv-field">
                <span>Empresa</span>
                <input
                  type="text"
                  value={form.company}
                  onChange={event => updateField('company', event.target.value)}
                  placeholder="Empresa / recruiter"
                  disabled={status === 'sending'}
                />
                {errors.company && <small>{errors.company}</small>}
              </label>

              <label className="cv-field">
                <span>LinkedIn o web</span>
                <input
                  type="url"
                  value={form.linkedin}
                  onChange={event => updateField('linkedin', event.target.value)}
                  placeholder="https://linkedin.com/in/..."
                  disabled={status === 'sending'}
                />
                {errors.linkedin && <small>{errors.linkedin}</small>}
              </label>
            </div>

            <label className="cv-field cv-field--full">
              <span>Motivo</span>
              <textarea
                value={form.reason}
                onChange={event => updateField('reason', event.target.value)}
                placeholder="Cuéntame brevemente por qué necesitas el CV y para qué contexto."
                rows={4}
                disabled={status === 'sending'}
              />
              {errors.reason && <small>{errors.reason}</small>}
            </label>

            <label className="cv-privacy">
              <input
                type="checkbox"
                checked={form.privacyAccepted}
                onChange={event => updateField('privacyAccepted', event.target.checked)}
                disabled={status === 'sending'}
              />
              <span>Acepto que mis datos se usen solo para gestionar esta solicitud y enviar el enlace temporal.</span>
            </label>
            {errors.privacyAccepted && <small className="cv-field-error">{errors.privacyAccepted}</small>}

            <div className="cv-form-actions">
              <button type="button" className="button button-secondary" onClick={onClose} disabled={status === 'sending'}>
                {closeLabel}
              </button>
              <button type="submit" className="button button-primary" disabled={status === 'sending'}>
                {status === 'sending' ? 'Enviando...' : 'Solicitar CV'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
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
