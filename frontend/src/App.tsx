import { useState } from 'react'
import profileData from './data/profile.json'
import ProfileHeader from './components/Profile/ProfileHeader'
import LinkList from './components/Links/LinkList'
import ProjectList from './components/Projects/ProjectList'
import Footer from './components/Footer/Footer'
import PageContainer from './components/Layout/PageContainer'
import GitHubHeatmap from './components/Widgets/GitHubHeatmap'
import TechStackTimeline from './components/Widgets/TechStackTimeline'
import CvRequestModal from './components/CV/CvRequestModal'
import { useAnalytics } from './hooks/useAnalytics'

function App() {
  const { profile, socialLinks, projects, technologies, widgets } = profileData
  const { trackEvent } = useAnalytics()
  const [isCvModalOpen, setIsCvModalOpen] = useState(false)

  const publicWidgets = widgets?.filter(w => w.public) || []
  const githubWidget = publicWidgets.find(widget => widget.type === 'github-heatmap' && widget.config.username)

  const handleOpenCvModal = () => {
    setIsCvModalOpen(true)
    trackEvent('open_cv_modal', {
      source: 'profile_cta',
    })
  }

  return (
    <>
      <main>
        <PageContainer>
          <ProfileHeader profile={profile} />
          {/*
          <div className="profile-cta">
            <button type="button" className="button button-primary profile-cta-button" onClick={handleOpenCvModal}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3v12" />
                <path d="m7 10 5 5 5-5" />
                <path d="M5 21h14" />
              </svg>
              Descargar CV
            </button>
            <p className="profile-cta-note">
              Solicitud privada con enlace temporal. No hay PDF público indexable.
            </p>
          </div>
          */}
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
