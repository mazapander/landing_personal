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
    </a>
  )
}