import Header from '@/components/Header'
import { getProfile, getExperience } from '@/lib/supabase'

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

      <main className="min-h-screen bg-gray-50">
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Experience</h1>
          <p className="text-lg text-gray-600 mb-12">
            My professional journey and roles.
          </p>

          {experience.length > 0 ? (
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <div key={exp.id} className="relative">
                  {/* Timeline line */}
                  {index !== experience.length - 1 && (
                    <div className="absolute left-8 top-20 w-1 h-12 bg-blue-200" />
                  )}

                  {/* Timeline dot */}
                  <div className="absolute left-0 top-0 w-16 flex justify-center">
                    <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-md" />
                  </div>

                  {/* Content */}
                  <div className="ml-32 bg-white p-6 rounded-lg border border-gray-200">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">{exp.role}</h3>
                        <p className="text-blue-600 font-medium">{exp.company}</p>
                      </div>
                      <div className="text-right text-sm text-gray-500">
                        <p>{formatDate(exp.start_date)}</p>
                        <p>{exp.end_date ? formatDate(exp.end_date) : 'Present'}</p>
                      </div>
                    </div>

                    {exp.description && (
                      <ul className="text-gray-600 mb-4 space-y-1 list-disc list-inside">
                        {exp.description.split('.').filter(point => point.trim()).map((point, idx) => (
                          <li key={idx}>{point.trim()}</li>
                        ))}
                      </ul>
                    )}

                    {exp.tech_stack && exp.tech_stack.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {exp.tech_stack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
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
              <p className="text-gray-500">No experience entries yet.</p>
            </div>
          )}
        </section>
      </main>

      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; {new Date().getFullYear()} {profile?.name || 'Developer'}. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}
