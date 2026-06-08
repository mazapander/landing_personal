import type { Project } from '../../types/profile'
import ProjectCard from './ProjectCard'

interface ProjectListProps {
  projects: Project[]
}

export default function ProjectList({ projects }: ProjectListProps) {
  return (
    <section className="section">
      <h2 className="section-title">Proyectos públicos</h2>
      <div className="widget-grid">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}