interface ProfileBioProps {
  name: string
  headline: string
  description: string
  location?: string
}

export default function ProfileBio({ name, headline, description, location }: ProfileBioProps) {
  return (
    <div>
      <h1 className="profile-name">{name}</h1>
      <p className="profile-headline">{headline}</p>
      <p className="profile-description">{description}</p>
      {location && <p className="profile-location">{location}</p>}
    </div>
  )
}