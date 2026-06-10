import type { Technology } from '../../types/profile'

interface TechIconProps {
  technology: Technology
  className?: string
}

const WIDE_TECH_IDS = new Set(['datahub', 'pentaho', 'qlik', 'langchain', 'aws', 'pytorch', 'nodejs', 'terraform'])

const normalizeTechIconPath = (technology: Technology) => {
  const safeId = technology.id.trim().toLowerCase()

  if (!safeId) {
    return technology.icon
  }

  return `/tech/${safeId}.svg`
}

export default function TechIcon({ technology, className = '' }: TechIconProps) {
  const isWide = WIDE_TECH_IDS.has(technology.id.toLowerCase())
  const classes = [
    'tech-icon-img',
    isWide ? 'tech-icon-img--wide' : 'tech-icon-img--square',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <img
      src={normalizeTechIconPath(technology)}
      alt=""
      loading="lazy"
      decoding="async"
      className={classes}
    />
  )
}
