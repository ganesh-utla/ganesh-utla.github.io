export interface Profile {
  id: string
  name: string
  title: string
  bio: string | null
  email: string
  github: string | null
  linkedin: string | null
  twitter: string | null
  resume_url: string | null
  profile_image: string | null
  updated_at: string
}

export interface Project {
  id: string
  title: string
  description: string[]
  tech_stack: string[] | null
  github_url: string | null
  live_url: string | null
  image_url: string | null
  featured: boolean
  order_index: number
  created_at: string
}

export interface Experience {
  id: string
  company: string
  company_url: string | null
  role: string
  start_date: string
  end_date: string | null
  description: string[]
  tech_stack: string[] | null
  image: string | null
  order_index: number
  created_at: string
}

export interface Skill {
  id: string
  name: string
  category: string
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert'
  order_index: number
  created_at: string
}

export interface ContactMessage {
  id?: string
  name: string
  email: string
  message: string
  created_at?: string
}

export interface CodingProfile {
  id: string
  name: string
  url: string
  image: string
  order_index: number
}
