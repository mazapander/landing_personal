import type { CSSProperties } from 'react'
import type { Technology } from '../../types/profile'

interface TechIconProps {
  technology: Technology
  className?: string
}

const WIDE_TECH_IDS = new Set([
  'datahub',
  'pentaho',
  'qlik',
  'langchain',
  'aws',
  'pytorch',
  'nodejs',
  'terraform',
])

const bundledTechIcons = import.meta.glob('../../assets/tech/*.svg', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>

const PUBLIC_SVG_CACHE_BUSTER = 'public-svg-fallback-v2'

const resolveTechIconSrc = (technology: Technology) => {
  const safeId = technology.id.trim().toLowerCase()

  if (!safeId) {
    return technology.icon
  }

  const bundledIconPath = `../../assets/tech/${safeId}.svg`
  const bundledIcon = bundledTechIcons[bundledIconPath]

  if (bundledIcon) {
    return bundledIcon
  }

  return `/tech/${safeId}.svg?v=${PUBLIC_SVG_CACHE_BUSTER}`
}

const getIconStyle = (isWide: boolean): CSSProperties => ({
  aspectRatio: isWide ? '2.4 / 1' : '1 / 1',
})

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
      src={resolveTechIconSrc(technology)}
      alt=""
      loading="lazy"
      decoding="async"
      className={classes}
      style={getIconStyle(isWide)}
    />
  )
}
