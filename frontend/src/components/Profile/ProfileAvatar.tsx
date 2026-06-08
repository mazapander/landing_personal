import type { Profile } from '../../types/profile'

interface ProfileAvatarProps {
  profile: Profile
}

export default function ProfileAvatar({ profile }: ProfileAvatarProps) {
  return (
    <img
      src={profile.avatar}
      alt={profile.name}
      style={{
        width: '120px',
        height: '120px',
        borderRadius: '50%',
        objectFit: 'cover',
      }}
    />
  )
}