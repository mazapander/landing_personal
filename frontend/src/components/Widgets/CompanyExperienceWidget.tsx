import { useEffect, useState } from 'react'
import type { CompanyExperience } from '../../types/profile'
import { useAnalytics } from '../../hooks/useAnalytics'

interface CompanyExperienceWidgetProps {
  companies: CompanyExperience[]
}

function getCompanyInitials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map(part => part[0]?.toUpperCase())
    .join('')
}

function CompanyLogo({ company }: { company: CompanyExperience }) {
  const [logoError, setLogoError] = useState(false)
  const initials = getCompanyInitials(company.company)

  return (
    <div className="company-logo-wrap" aria-hidden="true">
      {company.logo && !logoError ? (
        <img
          src={company.logo}
          alt=""
          className="company-logo"
          loading="lazy"
          onError={() => setLogoError(true)}
        />
      ) : (
        <span className="company-logo-fallback">{initials}</span>
      )}
    </div>
  )
}

export default function CompanyExperienceWidget({ companies }: CompanyExperienceWidgetProps) {
  const { trackEvent } = useAnalytics()
  const [selectedCompany, setSelectedCompany] = useState<CompanyExperience | null>(null)
  const visibleCompanies = companies.filter(company => company.public !== false)

  const closeModal = () => setSelectedCompany(null)

  const openCompanyModal = (company: CompanyExperience) => {
    setSelectedCompany(company)
    trackEvent(`open_company_${company.id}`, {
      company: company.company,
      role: company.role,
    })
  }

  useEffect(() => {
    if (!selectedCompany) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeModal()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedCompany])

  useEffect(() => {
    if (!selectedCompany) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [selectedCompany])

  const renderDetailList = (title: string, items?: string[]) => {
    if (!items?.length) return null

    return (
      <div className="company-modal-detail-block">
        <h4>{title}</h4>
        <ul>
          {items.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    )
  }

  if (visibleCompanies.length === 0) return null

  return (
    <section className="section company-experience-section" aria-labelledby="company-experience-title">
      <div className="section-heading-row">
        <div>
          <p className="section-kicker">Experiencia</p>
          <h2 className="section-title company-experience-title" id="company-experience-title">
            Empresas y responsabilidades
          </h2>
        </div>
        <span className="company-experience-count">{visibleCompanies.length} etapas</span>
      </div>

      <div className="company-experience-grid">
        {visibleCompanies.map(company => (
          <button
            type="button"
            className="company-card"
            key={company.id}
            onClick={() => openCompanyModal(company)}
            aria-label={`Abrir detalle de ${company.company}`}
          >
            <div className="company-card-topline">
              <CompanyLogo company={company} />
              <div className="company-card-main">
                <span className="company-card-period">{company.period}</span>
                <h3>{company.company}</h3>
                <p>{company.role}</p>
              </div>
            </div>

            <p className="company-card-description">{company.shortDescription}</p>

            {company.metrics && company.metrics.length > 0 && (
              <div className="company-metrics" aria-label={`Datos clave de ${company.company}`}>
                {company.metrics.slice(0, 3).map(metric => (
                  <div className="company-metric" key={`${company.id}-${metric.label}`}>
                    <strong>{metric.value}</strong>
                    <span>{metric.label}</span>
                  </div>
                ))}
              </div>
            )}

            <div className="company-card-highlights">
              {company.highlights.slice(0, 2).map(highlight => (
                <span key={highlight}>{highlight}</span>
              ))}
            </div>

            <span className="company-card-action">Ver detalle</span>
          </button>
        ))}
      </div>

      {selectedCompany && (
        <div
          className="company-modal-backdrop"
          role="presentation"
          onMouseDown={event => {
            if (event.target === event.currentTarget) {
              closeModal()
            }
          }}
        >
          <article
            className="company-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="company-modal-title"
          >
            <header className="company-modal-header">
              <div className="company-modal-heading">
                <CompanyLogo company={selectedCompany} />
                <div>
                  <span className="company-modal-kicker">{selectedCompany.period}</span>
                  <h3 id="company-modal-title">{selectedCompany.company}</h3>
                  <p>{selectedCompany.role}</p>
                  {selectedCompany.location && <small>{selectedCompany.location}</small>}
                </div>
              </div>
              <button
                type="button"
                className="company-modal-close"
                onClick={closeModal}
                aria-label="Cerrar detalle de empresa"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </header>

            <p className="company-modal-description">{selectedCompany.shortDescription}</p>

            {selectedCompany.metrics && selectedCompany.metrics.length > 0 && (
              <div className="company-modal-metrics">
                {selectedCompany.metrics.map(metric => (
                  <div className="company-modal-metric" key={`${selectedCompany.id}-${metric.label}`}>
                    <strong>{metric.value}</strong>
                    <span>{metric.label}</span>
                    {metric.detail && <small>{metric.detail}</small>}
                  </div>
                ))}
              </div>
            )}

            {selectedCompany.detail?.context && (
              <div className="company-modal-context">
                <h4>Contexto</h4>
                <p>{selectedCompany.detail.context}</p>
              </div>
            )}

            <div className="company-modal-detail-grid">
              {renderDetailList('Responsabilidades', selectedCompany.detail?.responsibilities)}
              {renderDetailList('Logros e impacto', selectedCompany.detail?.achievements)}
              {renderDetailList('Proyectos representativos', selectedCompany.detail?.projects)}
            </div>

            {selectedCompany.stack && selectedCompany.stack.length > 0 && (
              <div className="company-modal-stack" aria-label={`Stack usado en ${selectedCompany.company}`}>
                {selectedCompany.stack.map(item => (
                  <span key={`${selectedCompany.id}-${item}`}>{item}</span>
                ))}
              </div>
            )}
          </article>
        </div>
      )}
    </section>
  )
}
