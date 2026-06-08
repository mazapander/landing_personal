import type { SocialLink } from '../../types/profile'
import LinkCard from './LinkCard'

interface LinkListProps {
  links: SocialLink[]
}

export default function LinkList({ links }: LinkListProps) {
  const sortedLinks = [...links].sort((a, b) => {
    if (a.featured && !b.featured) return -1
    if (!a.featured && b.featured) return 1
    return 0
  })

  return (
    <div className="link-list">
      {sortedLinks.map(link => (
        <LinkCard key={link.id} link={link} />
      ))}
    </div>
  )
}