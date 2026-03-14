import data from '@/data/data.json'
import { Profile, Project, Experience, Skill, ContactMessage, CodingProfile } from '@/types/database'

// Profile
export function getProfile(): Profile | null {
  return data.profile || null
}

// Projects
export function getProjects(): Project[] {
  return data.projects || []
}

export function getFeaturedProjects(): Project[] {
  return (data.projects || [])
    .filter((project) => project.featured)
    .sort((a, b) => a.order_index - b.order_index)
    .slice(0, 3)
}

// Experience
export function getExperience(): Experience[] {
  return (data.experience || []).sort((a, b) => a.order_index - b.order_index)
}

// Skills
export function getSkills(): Skill[] {
  return (data.skills || []).sort((a, b) => a.order_index - b.order_index)
}

// Contact
export function submitContactMessage(
  message: ContactMessage
): boolean {
  // In a static JSON setup, we can't actually store messages
  // This function logs the message and returns true to simulate success
  console.log('Contact message submitted:', message)
  return true
}

// Coding Profiles
export function getCodingProfiles(): CodingProfile[] {
  return (data.coding_profiles || []).sort((a, b) => a.order_index - b.order_index)
}
