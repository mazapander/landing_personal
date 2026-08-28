import { profile, socialLinks } from './data/profile'
import { projects, widgets } from './data/projects'
import { technologies } from './data/technologies'
import ProfileHeader from './components/Profile/ProfileHeader'
import LinkButtons from './components/Links/LinkButtons'
import ProjectList from './components/Projects/ProjectList'
import PageContainer from './components/Layout/PageContainer'
import GitHubHeatmap from './components/Widgets/GitHubHeatmap'
import TechStackTimeline from './components/Widgets/TechStackTimeline'

function App() {
  const publicWidgets = widgets?.filter(w => w.public) || []
  const githubWidget = publicWidgets.find(widget => widget.type === 'github-heatmap' && widget.config.username)

  return (
    <>
      <div>
        <PageContainer>
          <ProfileHeader profile={profile} />
          <LinkButtons links={socialLinks} />
          <section className="section tech-stack-section">
            <TechStackTimeline technologies={technologies} />
          </section>
          <ProjectList projects={projects.filter(p => p.public)} technologies={technologies} />
          {githubWidget && (
            <section className="section">
              <h2 className="section-title">Actividad</h2>
              <GitHubHeatmap
                username={githubWidget.config.username}
                githubToken={githubWidget.config.githubToken}
                includePrivate={githubWidget.config.includePrivate}
              />
            </section>
          )}
        </PageContainer>
      </div>
    </>
  )
}

export default App
