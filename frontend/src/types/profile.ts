export interface Profile {
  name: string
  headline: string
  description: string
  location?: string
  avatar: string
}

export interface SocialLink {
  id: string
  label: string
  description: string
  url: string
  type: string
  featured: boolean
}

export interface Project {
  id: string
  title: string
  description: string
  url: string
  status: string
  public: boolean
}

export interface ProfileData {
  profile: Profile
  socialLinks: SocialLink[]
  projects: Project[]
}