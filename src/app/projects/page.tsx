import Header from '@/components/Header'
import MobileNav from '@/components/MobileNav'
import ProjectCard from '@/components/ProjectCard'
import { getProfile, getProjects } from '@/lib/data'

export default function ProjectsPage() {
  const profile = getProfile()
  const projects = getProjects()

  return (
    <>
      <Header profile={profile} />
      <MobileNav />

      <main className="min-h-screen bg-gray-50 dark:bg-gray-950 pb-20 md:pb-0">
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Projects</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">
            A collection of projects I&apos;ve built and contributed to.
          </p>

          {projects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 dark:text-gray-400">No projects yet. Check back soon!</p>
            </div>
          )}
        </section>
      </main>

      <footer className="bg-gray-900 dark:bg-gray-950 text-gray-300 py-12 mb-16 sm:mb-0">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; {new Date().getFullYear()} {profile?.name || 'Developer'}. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}
