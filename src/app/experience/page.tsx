import Header from '@/components/Header'
import MobileNav from '@/components/MobileNav'
import { getProfile, getExperience } from '@/lib/data'

export default async function ExperiencePage() {
  const profile = await getProfile()
  const experience = await getExperience()

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
    })
  }

  return (
    <>
      <Header profile={profile} />
      <MobileNav />

      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-950 dark:to-gray-900">
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Experience</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">
            My professional journey and roles.
          </p>

          {experience.length > 0 ? (
            <div className="space-y-6 md:space-y-8">
              {experience.map((exp, index) => (
                <div key={exp.id} className="relative pl-6 md:pl-24">
                  {/* Timeline line - connects dots */}
                  {index !== experience.length && (
                    <div className="absolute left-1.5 md:left-2 top-8 md:top-10 w-0.5 md:w-1 h-42 md:h-32 bg-gradient-to-b from-blue-400 via-blue-300 to-blue-200 dark:from-blue-600 dark:via-blue-500 dark:to-blue-400" />
                  )}

                  {/* Timeline dot */}
                  <div className="absolute -left-1 md:-left-1.5 top-1 md:top-2">
                    <div className="relative w-5 h-5 md:w-7 md:h-7 flex items-center justify-center">
                      <div className="absolute w-5 h-5 md:w-7 md:h-7 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full shadow-lg" />
                      <div className="absolute w-3 h-3 md:w-4 md:h-4 bg-white dark:bg-gray-800 rounded-full" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="bg-white dark:bg-gray-800 rounded-2xl border-2 border-blue-100 dark:border-gray-700 shadow-md hover:shadow-lg transition-all duration-300 p-4 md:p-6">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-0 mb-4">
                      <div>
                        <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white">{exp.role}</h3>
                        <p className="text-blue-600 dark:text-blue-400 font-semibold text-base md:text-lg">{exp.company}</p>
                      </div>
                      <div className="text-left md:text-right text-sm text-gray-500 dark:text-gray-400 flex flex-row">
                        <div className="bg-blue-50 dark:bg-gray-700 rounded-lg flex flex-row gap-2 px-3 py-2">
                          <p className="font-medium">{formatDate(exp.start_date)}</p>
                          <p> - </p>
                          <p>{exp.end_date ? formatDate(exp.end_date) : 'Present'}</p>
                        </div>
                      </div>
                    </div>

                    {exp.description && (
                      <ul className="text-gray-600 dark:text-gray-300 mb-4 space-y-2 list-disc list-inside text-sm md:text-base">
                        {exp.description.map((point, idx) => (
                          <li key={idx}>{point.trim()}</li>
                        ))}
                      </ul>
                    )}

                    {exp.tech_stack && exp.tech_stack.length > 0 && (
                      <div className="flex flex-wrap gap-2 pt-2">
                        {exp.tech_stack.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-gray-700 dark:to-gray-600 text-blue-700 dark:text-blue-300 text-xs rounded-full font-medium border border-blue-200 dark:border-gray-600"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 dark:text-gray-400">No experience entries yet.</p>
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
