import type { SocialLink } from '../../types/profile'
import { useAnalytics } from '../../hooks/useAnalytics'

interface LinkCardProps {
  link: SocialLink
}

export default function LinkCard({ link }: LinkCardProps) {
  const { trackEvent } = useAnalytics()

  const handleClick = () => {
    trackEvent('click_link', {
      id: link.id,
      label: link.label,
      url: link.url,
    })
  }

  return (
    <a
      href={link.url}
      onClick={handleClick}
      target="_blank"
      rel="noopener noreferrer"
      className="card link-card"
    >
      <div className="link-label">{link.label}</div>
      <div className="link-description">{link.description}</div>
    </a>
  )
}