import type { Project } from '../../types/profile'
import { useAnalytics } from '../../hooks/useAnalytics'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { trackEvent } = useAnalytics()

  const handleClick = () => {
    trackEvent('click_project', {
      id: project.id,
      title: project.title,
      url: project.url,
    })
  }

  return (
    <a
      href={project.url}
      onClick={handleClick}
      target="_blank"
      rel="noopener noreferrer"
      className="project-card"
    >
      <div className="project-header">
        <h3 className="project-title">{project.title}</h3>
        <span className="project-status">{project.status}</span>
      </div>
      <p className="project-description">{project.description}</p>
      <div className="project-footer">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
          <polyline points="15 3 21 3 21 9"/>
          <line x1="10" y1="14" x2="21" y2="3"/>
        </svg>
        Ver proyecto
      </div>
    </a>
  )
}