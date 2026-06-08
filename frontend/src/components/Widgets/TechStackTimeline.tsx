import type { CSSProperties } from 'react'
import type { Technology } from '../../types/profile'

interface TechStackTimelineProps {
  technologies: Technology[]
}

const getYear = (since: string) => new Date(since).getFullYear()

const getExperienceLabel = (since: string) => {
  const diffMs = Date.now() - new Date(since).getTime()
  const years = diffMs / (1000 * 60 * 60 * 24 * 365.25)

  if (years < 1) {
    const months = Math.max(1, Math.round(years * 12))
    return `${months} mes${months === 1 ? '' : 'es'}`
  }

  const roundedYears = years >= 3 ? Math.round(years) : Number(years.toFixed(1))
  return `${roundedYears} año${roundedYears === 1 ? '' : 's'}`
}

const getCardStyle = (accent?: string): CSSProperties => ({
  '--tech-accent': accent ?? 'var(--color-accent)',
} as CSSProperties)

export default function TechStackTimeline({ technologies }: TechStackTimelineProps) {
  const sortedTechnologies = [...technologies].sort(
    (a, b) => new Date(a.since).getTime() - new Date(b.since).getTime(),
  )

  const topTechnologies = sortedTechnologies.filter(technology => technology.top)
  const supportingTechnologies = sortedTechnologies.filter(technology => !technology.top)

  const firstStackYear = sortedTechnologies[0] ? getYear(sortedTechnologies[0].since) : new Date().getFullYear()
  const lastTechnology = sortedTechnologies[sortedTechnologies.length - 1]
  const lastStackYear = lastTechnology ? getYear(lastTechnology.since) : firstStackYear

  return (
    <div className="tech-stack-timeline">
      <div className="tech-stack-hero">
        <div className="tech-stack-hero-copy">
          <p className="tech-stack-kicker">Stack principal</p>
          <h2 className="tech-stack-title">Tecnología que uso de verdad para construir producto</h2>
          <p className="tech-stack-description">
            Un recorrido horizontal por las herramientas con más peso en mi trabajo.
            Las marcadas como top son las que más aparecen en proyectos reales y decisiones de arquitectura.
          </p>
        </div>

        <div className="tech-stack-metrics" aria-label="Resumen del stack">
          <article className="tech-stack-metric">
            <span className="tech-stack-metric-value">{topTechnologies.length}</span>
            <span className="tech-stack-metric-label">Tecnologías top</span>
          </article>
          <article className="tech-stack-metric">
            <span className="tech-stack-metric-value">{technologies.length}</span>
            <span className="tech-stack-metric-label">Total en uso</span>
          </article>
          <article className="tech-stack-metric">
            <span className="tech-stack-metric-value">{firstStackYear} - {lastStackYear}</span>
            <span className="tech-stack-metric-label">Evolución</span>
          </article>
        </div>
      </div>

      <div className="tech-stack-block">
        <div className="tech-stack-block-header">
          <span>Top technologies</span>
          <span className="tech-stack-block-hint">Lo que más define mi stack</span>
        </div>

        <div className="tech-stack-scroll tech-stack-scroll--top">
          {topTechnologies.map(technology => (
            <article
              key={technology.id}
              className="tech-stack-pill tech-stack-pill--top"
              style={getCardStyle(technology.accent)}
              title={`${technology.name} · ${technology.description ?? technology.category ?? ''}`.trim()}
            >
              <div className="tech-stack-pill-icon">
                <img src={technology.icon} alt="" loading="lazy" />
              </div>
              <div className="tech-stack-pill-copy">
                <span className="tech-stack-pill-name">{technology.name}</span>
                <span className="tech-stack-pill-meta">
                  {technology.category ?? 'Tecnología'} · {getExperienceLabel(technology.since)}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="tech-stack-block">
        <div className="tech-stack-block-header">
          <span>Línea temporal</span>
          <span className="tech-stack-block-hint">Ordenada por el momento en que la fui incorporando</span>
        </div>

        <div className="tech-stack-scroll tech-stack-scroll--timeline">
          <div className="tech-stack-rail" aria-hidden="true" />
          {sortedTechnologies.map(technology => (
            <article
              key={technology.id}
              className={`tech-stack-event${technology.top ? ' tech-stack-event--top' : ''}`}
              style={getCardStyle(technology.accent)}
              title={`${technology.name} · ${technology.description ?? technology.category ?? ''}`.trim()}
            >
              <div className="tech-stack-event-marker" />
              <div className="tech-stack-event-year">{getYear(technology.since)}</div>
              <div className="tech-stack-event-card">
                <div className="tech-stack-event-logo">
                  <img src={technology.icon} alt="" loading="lazy" />
                </div>
                <div className="tech-stack-event-copy">
                  <div className="tech-stack-event-title-row">
                    <span className="tech-stack-event-name">{technology.name}</span>
                    {technology.top && <span className="tech-stack-event-badge">Top</span>}
                  </div>
                  <span className="tech-stack-event-meta">{technology.category ?? 'Stack'} · {getExperienceLabel(technology.since)}</span>
                  {technology.description && <p className="tech-stack-event-description">{technology.description}</p>}
                </div>
              </div>
            </article>
          ))}
          {supportingTechnologies.length === 0 && (
            <div className="tech-stack-empty">Todavía no hay tecnologías secundarias configuradas.</div>
          )}
        </div>
      </div>
    </div>
  )
}
