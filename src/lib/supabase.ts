import { supabase } from '@/lib/supabaseClient'
import { Profile, Project, Experience, Skill, ContactMessage } from '@/types/database'

// Profile
export async function getProfile(): Promise<Profile | null> {
  try {
    const { data, error } = await supabase
      .from('profile')
      .select('*')
      .single()

    if (error) {
      console.error('Error fetching profile:', error)
      return null
    }

    return data
  } catch (error) {
    console.error('Error fetching profile:', error)
    return null
  }
}

// Projects
export async function getProjects(): Promise<Project[]> {
  try {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .order('order_index', { ascending: true })
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Error fetching projects:', error)
      return []
    }

    return data || []
  } catch (error) {
    console.error('Error fetching projects:', error)
    return []
  }
}

export async function getFeaturedProjects(): Promise<Project[]> {
  try {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .eq('featured', true)
      .order('order_index', { ascending: true })
      .limit(3)

    if (error) {
      console.error('Error fetching featured projects:', error)
      return []
    }

    return data || []
  } catch (error) {
    console.error('Error fetching featured projects:', error)
    return []
  }
}

// Experience
export async function getExperience(): Promise<Experience[]> {
  try {
    const { data, error } = await supabase
      .from('experience')
      .select('*')
      .order('order_index', { ascending: true })

    if (error) {
      console.error('Error fetching experience:', error)
      return []
    }

    return data || []
  } catch (error) {
    console.error('Error fetching experience:', error)
    return []
  }
}

// Skills
export async function getSkills(): Promise<Skill[]> {
  try {
    const { data, error } = await supabase
      .from('skills')
      .select('*')
      .order('order_index', { ascending: true })

    if (error) {
      console.error('Error fetching skills:', error)
      return []
    }

    return data || []
  } catch (error) {
    console.error('Error fetching skills:', error)
    return []
  }
}

// Contact
export async function submitContactMessage(
  message: ContactMessage
): Promise<boolean> {
  try {
    const { error } = await supabase
      .from('contact_messages')
      .insert([message])

    if (error) {
      console.error('Error submitting contact message:', error)
      return false
    }

    return true
  } catch (error) {
    console.error('Error submitting contact message:', error)
    return false
  }
}
