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

export interface WidgetConfig {
  username?: string
  githubToken?: string
  includePrivate?: boolean
}

export interface TechItem {
  name: string
  logo: string
  since: string
  category?: string
  description?: string
}

export interface TechStackConfig {
  items: TechItem[]
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
  widgets?: Widget[]
}