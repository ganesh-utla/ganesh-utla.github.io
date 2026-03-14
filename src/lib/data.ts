import data from '@/data/data.json'
import { Profile, Project, Experience, Skill, ContactMessage } from '@/types/database'

// Profile
export async function getProfile(): Promise<Profile | null> {
  try {
    return data.profile || null
  } catch (error) {
    console.error('Error fetching profile:', error)
    return null
  }
}

// Projects
export async function getProjects(): Promise<Project[]> {
  try {
    return data.projects || []
  } catch (error) {
    console.error('Error fetching projects:', error)
    return []
  }
}

export async function getFeaturedProjects(): Promise<Project[]> {
  try {
    return data.projects
      .filter((project) => project.featured)
      .sort((a, b) => a.order_index - b.order_index)
      .slice(0, 3)
  } catch (error) {
    console.error('Error fetching featured projects:', error)
    return []
  }
}

// Experience
export async function getExperience(): Promise<Experience[]> {
  try {
    return (data.experience || []).sort((a, b) => a.order_index - b.order_index)
  } catch (error) {
    console.error('Error fetching experience:', error)
    return []
  }
}

// Skills
export async function getSkills(): Promise<Skill[]> {
  try {
    return (data.skills || []).sort((a, b) => a.order_index - b.order_index)
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
    // In a static JSON setup, we can't actually store messages
    // This function logs the message and returns true to simulate success
    console.log('Contact message submitted:', message)
    return true
  } catch (error) {
    console.error('Error submitting contact message:', error)
    return false
  }
}
