import Header from '@/components/Header'
import ProjectCard from '@/components/ProjectCard'
import Link from 'next/link'
import { getProfile, getFeaturedProjects, getSkills } from '@/lib/supabase'
import { Download } from 'lucide-react'

export default async function Home() {
  const profile = await getProfile()
  const featuredProjects = await getFeaturedProjects()
  const skills = await getSkills()

  return (
    <>
      <Header profile={profile} />

      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        {/* Hero Section */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {profile?.name || 'Developer'}
              </h1>
              <p className="text-xl text-blue-600 font-semibold mb-4">
                {profile?.title || 'Full Stack Developer'}
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {profile?.bio || 'Welcome to my portfolio'}
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold"
                >
                  Get In Touch
                </Link>
                {profile?.resume_url && (
                  <a
                    href={profile.resume_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 border-2 border-gray-300 text-gray-900 rounded-lg hover:border-gray-400 transition font-semibold inline-flex items-center gap-2"
                  >
                    <Download size={18} />
                    Download Resume
                  </a>
                )}
              </div>
            </div>

            {profile?.profile_image && (
              <div className="flex-shrink-0">
                <img
                  src="/profile_picture.png"
                  alt={profile.name}
                  className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover"
                />
              </div>
            )}
          </div>
        </section>

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <section className="bg-white py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-12">Featured Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {featuredProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
              <div className="text-center">
                <Link
                  href="/projects"
                  className="inline-block px-6 py-3 text-blue-600 hover:text-blue-700 font-semibold"
                >
                  View All Projects →
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* Skills Section */}
        {skills.length > 0 && (
          <section className="py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-12">Skills</h2>

              {/* Group skills by category */}
              {Object.entries(
                skills.reduce(
                  (acc, skill) => {
                    if (!acc[skill.category]) acc[skill.category] = []
                    acc[skill.category].push(skill)
                    return acc
                  },
                  {} as Record<string, typeof skills>
                )
              ).map(([category, categorySkills]) => (
                <div key={category} className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">{category}</h3>
                  <div className="flex flex-wrap gap-3">
                    {categorySkills.map((skill) => (
                      <span
                        key={skill.id}
                        className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="bg-blue-600 text-white py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Let&apos;s Work Together</h2>
            <p className="text-lg mb-8 text-blue-100">
              Have a project in mind? Let&apos;s talk about it.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition font-semibold"
            >
              Send Me a Message
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; {new Date().getFullYear()} {profile?.name || 'Developer'}. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}
