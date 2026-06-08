import profileData from './data/profile.json'
import ProfileHeader from './components/Profile/ProfileHeader'
import LinkList from './components/Links/LinkList'
import ProjectList from './components/Projects/ProjectList'
import Footer from './components/Footer/Footer'
import UmamiScript from './components/Analytics/UmamiScript'
import PageContainer from './components/Layout/PageContainer'

function App() {
  const { profile, socialLinks, projects } = profileData

  return (
    <>
      <UmamiScript />
      <main>
        <PageContainer>
          <ProfileHeader profile={profile} />
          <LinkList links={socialLinks} />
          <ProjectList projects={projects.filter(p => p.public)} />
        </PageContainer>
      </main>
      <Footer />
    </>
  )
}

export default App