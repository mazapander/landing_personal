interface ProfileBioProps {
  name: string
  headline: string
  description: string
  location?: string
}

export default function ProfileBio({ name, headline, description, location }: ProfileBioProps) {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1 style={{ fontSize: '1.75rem', fontWeight: 700 }}>{name}</h1>
      <p style={{ fontSize: '1.125rem', color: '#666', marginTop: '0.25rem' }}>{headline}</p>
      <p style={{ fontSize: '1rem', color: '#444', maxWidth: '480px', margin: '1rem auto 0' }}>
        {description}
      </p>
      {location && (
        <p style={{ fontSize: '0.875rem', color: '#888', marginTop: '0.5rem' }}>{location}</p>
      )}
    </div>
  )
}