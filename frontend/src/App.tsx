import profileData from './data/profile.json'
import ProfileHeader from './components/Profile/ProfileHeader'
import LinkList from './components/Links/LinkList'
import ProjectList from './components/Projects/ProjectList'
import Footer from './components/Footer/Footer'
import PageContainer from './components/Layout/PageContainer'
import GitHubHeatmap from './components/Widgets/GitHubHeatmap'
import TechStackTimeline from './components/Widgets/TechStackTimeline'

function App() {
  const { profile, socialLinks, projects, technologies, widgets } = profileData

  const publicWidgets = widgets?.filter(w => w.public) || []
  const githubWidget = publicWidgets.find(widget => widget.type === 'github-heatmap' && widget.config.username)

  return (
    <>
      <main>
        <PageContainer>
          <ProfileHeader profile={profile} />
          <LinkList links={socialLinks} />
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
      </main>
      <Footer />
    </>
  )
}

export default App
