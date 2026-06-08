import type { Project, Technology } from '../../types/profile'
import ProjectCard from './ProjectCard'

interface ProjectListProps {
  projects: Project[]
  technologies: Technology[]
}

export default function ProjectList({ projects, technologies }: ProjectListProps) {
  return (
    <section className="section">
      <h2 className="section-title">Proyectos públicos</h2>
      <div className="widget-grid">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} technologies={technologies} />
        ))}
      </div>
    </section>
  )
}
