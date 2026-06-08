import type { Profile } from '../../types/profile'
import ProfileAvatar from './ProfileAvatar'
import ProfileBio from './ProfileBio'

interface ProfileHeaderProps {
  profile: Profile
}

export default function ProfileHeader({ profile }: ProfileHeaderProps) {
  return (
    <header className="profile-header">
      <ProfileAvatar profile={profile} />
      <ProfileBio
        name={profile.name}
        headline={profile.headline}
        description={profile.description}
        location={profile.location}
      />
    </header>
  )
}