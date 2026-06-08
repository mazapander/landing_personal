import profileData from './data/profile.json'
import ProfileHeader from './components/Profile/ProfileHeader'
import LinkList from './components/Links/LinkList'
import ProjectList from './components/Projects/ProjectList'
import Footer from './components/Footer/Footer'
import UmamiScript from './components/Analytics/UmamiScript'
import PageContainer from './components/Layout/PageContainer'
import GitHubWidget from './components/Widgets/GitHubWidget'
import WidgetGrid from './components/Widgets/WidgetGrid'

function App() {
  const { profile, socialLinks, projects, widgets } = profileData

  const publicWidgets = widgets?.filter(w => w.public) || []

  return (
    <>
      <UmamiScript />
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
                  if (widget.type === 'github' && widget.config.username) {
                    return (
                      <GitHubWidget
                        key={widget.id}
                        username={widget.config.username}
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