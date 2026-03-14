import Header from '@/components/Header'
import MobileNav from '@/components/MobileNav'
import ProjectCard from '@/components/ProjectCard'
import Link from 'next/link'
import { getProfile, getFeaturedProjects, getSkills, getCodingProfiles } from '@/lib/data'
import { Download, ExternalLink } from 'lucide-react'

export default function Home() {
  const profile = getProfile()
  const featuredProjects = getFeaturedProjects()
  const skills = getSkills()
  const codingProfiles = getCodingProfiles()

  return (
    <>
      <Header profile={profile} />
      <MobileNav />

      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 pb-20 md:pb-0">
        {/* Hero Section */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
          <div className="flex flex-col md:flex-row gap-8 items-start md:items-start">
            {/* Mobile: Show image first on smaller devices */}
            {profile?.profile_image && (
              <div className="flex justify-center w-full md:hidden mb-4">
                <img
                  src="/profile_picture.png"
                  alt={profile.name}
                  className="w-40 h-40 rounded-full object-cover shadow-2xl"
                />
              </div>
            )}

            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                {profile?.name || 'Developer'}
              </h1>
              <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold mb-4">
                {profile?.title || 'Full Stack Developer'}
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                {profile?.bio || 'Welcome to my portfolio'}
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold"
                >
                  Get In Touch
                </Link>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-lg hover:border-gray-400 dark:hover:border-gray-500 transition font-semibold inline-flex items-center gap-2"
                >
                  <Download size={18} />
                  Download Resume
                </a>
              </div>
            </div>

            {/* Desktop: Show image on the right */}
            {profile?.profile_image && (
              <div className="hidden md:flex flex-shrink-0">
                <img
                  src="/profile_picture.png"
                  alt={profile.name}
                  className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover"
                />
              </div>
            )}
          </div>
        </section>

        {/* Coding Profiles */}
        {codingProfiles.length > 0 && (
          <section className="py-16 bg-gradient-to-br from-gray-100 to-blue-50 dark:from-gray-900 dark:to-gray-800">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Coding Profiles</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {codingProfiles.map((profile) => (
                  <a
                    key={profile.id}
                    href={profile.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700 group"
                  >
                    <div className="w-16 h-16 rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
                      <img
                        src={profile.image}
                        alt={profile.name}
                        className="w-16 h-16 object-cover rounded-md"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {profile.name}
                      </h3>
                    </div>
                    <ExternalLink size={16} className="text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
                  </a>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <section className="bg-white dark:bg-gray-900 py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">Featured Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {featuredProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
              <div className="text-center">
                <Link
                  href="/projects"
                  className="inline-block px-6 py-3 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold"
                >
                  View All Projects →
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* Skills Section */}
        {skills.length > 0 && (
          <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">Skills</h2>

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
                <div key={category} className="mb-10 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md border border-blue-100 dark:border-gray-700">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                    <span className="inline-block w-1 h-6 bg-blue-600 rounded-full mr-3"></span>
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {categorySkills.map((skill) => (
                      <span
                        key={skill.id}
                        className="px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full text-sm font-medium hover:shadow-lg transition-all duration-300 cursor-default"
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
      <footer className="bg-gray-900 dark:bg-gray-950 text-gray-300 py-12 mb-16 sm:mb-0">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; {new Date().getFullYear()} {profile?.name || 'Developer'}. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}
