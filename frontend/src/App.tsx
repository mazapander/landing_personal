//import { useState } from 'react'
import profileData from './data/profile.json'
import ProfileHeader from './components/Profile/ProfileHeader'
import LinkButtons from './components/Links/LinkButtons'
import ProjectList from './components/Projects/ProjectList'
import Footer from './components/Footer/Footer'
import PageContainer from './components/Layout/PageContainer'
import GitHubHeatmap from './components/Widgets/GitHubHeatmap'
import TechStackTimeline from './components/Widgets/TechStackTimeline'
//import CvRequestModal from './components/CV/CvRequestModal'
//import { useAnalytics } from './hooks/useAnalytics'

function App() {
  const { profile, socialLinks, projects, technologies, widgets } = profileData
  //const { trackEvent } = useAnalytics()
  //const [isCvModalOpen, setIsCvModalOpen] = useState(false)

  const publicWidgets = widgets?.filter(w => w.public) || []
  const githubWidget = publicWidgets.find(widget => widget.type === 'github-heatmap' && widget.config.username)

  /*const handleOpenCvModal = () => {
    setIsCvModalOpen(true)
    trackEvent('open_cv_modal', {
      source: 'profile_cta',
    })
  }*/

  return (
    <>
      <main>
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
          {/*
          <CvRequestModal open={isCvModalOpen} onClose={() => setIsCvModalOpen(false)} />
          */}
        </PageContainer>
      </main>
      <Footer />
    </>
  )
}

export default App
