import type { Project } from '../../types/profile'
import { useAnalytics } from '../../hooks/useAnalytics'

interface ProjectWidgetProps {
  project: Project
}

export default function ProjectWidget({ project }: ProjectWidgetProps) {
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
      style={{
        display: 'block',
        padding: '1.25rem',
        backgroundColor: '#fff',
        borderRadius: '12px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <h3 style={{ fontWeight: 600, fontSize: '1rem', margin: 0 }}>{project.title}</h3>
        <span
          style={{
            fontSize: '0.75rem',
            padding: '0.25rem 0.5rem',
            backgroundColor: '#e8f5e9',
            borderRadius: '4px',
            color: '#2e7d32',
          }}
        >
          {project.status}
        </span>
      </div>
      <p style={{ fontSize: '0.875rem', color: '#666', marginTop: '0.5rem' }}>
        {project.description}
      </p>
    </a>
  )
}