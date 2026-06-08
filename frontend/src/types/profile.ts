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
  stack?: string[]
}

export interface WidgetConfig {
  username?: string
  githubToken?: string
  includePrivate?: boolean
}

export interface Technology {
  id: string
  name: string
  icon: string
  since: string
  category?: string
  description?: string
  top?: boolean
  accent?: string
}

export interface Widget {
  id: string
  type: string
  config: WidgetConfig
  public: boolean
}

export interface ProfileData {
  profile: Profile
  socialLinks: SocialLink[]
  projects: Project[]
  technologies: Technology[]
  widgets?: Widget[]
}
