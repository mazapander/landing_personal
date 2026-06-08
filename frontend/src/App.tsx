import profileData from './data/profile.json'
import ProfileHeader from './components/Profile/ProfileHeader'
import LinkList from './components/Links/LinkList'
import ProjectList from './components/Projects/ProjectList'
import Footer from './components/Footer/Footer'
import PageContainer from './components/Layout/PageContainer'
import GitHubHeatmap from './components/Widgets/GitHubHeatmap'
import TechStackTimeline from './components/Widgets/TechStackTimeline'
import WidgetGrid from './components/Widgets/WidgetGrid'

function App() {
  const { profile, socialLinks, projects, widgets } = profileData

  const publicWidgets = widgets?.filter(w => w.public) || []

  return (
    <>
      <main>
        <PageContainer>
          <ProfileHeader profile={profile} />
          <LinkList links={socialLinks} />
          <ProjectList projects={projects.filter(p => p.public)} />
          {publicWidgets.length > 0 && (
            <section className="section">
              <h2 className="section-title">Actividad</h2>
              <WidgetGrid>
                {publicWidgets.map(widget => {
                  if (widget.type === 'github-heatmap' && widget.config.username) {
                    return (
                      <GitHubHeatmap
                        key={widget.id}
                        username={widget.config.username}
                        githubToken={widget.config.githubToken}
                        includePrivate={widget.config.includePrivate}
                      />
                    )
                  }
                  if (widget.type === 'tech-stack' && widget.config.items) {
                    return (
                      <TechStackTimeline
                        key={widget.id}
                        items={widget.config.items}
                      />
                    )
                  }
                  return null
                })}
              </WidgetGrid>
            </section>
          )}
        </PageContainer>
      </main>
      <Footer />
    </>
  )
}

export default App
