'use client'

import { Profile } from '@/types/database'

interface ContactFormProps {
  profile: Profile | null
}

export default function ContactForm({ profile }: ContactFormProps) {
  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">Contact Info</h2>
      <div className="space-y-6">
        {profile?.email && (
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
            <span className="text-gray-500 dark:text-gray-400 font-medium min-w-[100px]">Email</span>
            <a
              href={`mailto:${profile.email}`}
              className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium break-all"
            >
              {profile.email}
            </a>
          </div>
        )}
        {profile?.github && (
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
            <span className="text-gray-500 dark:text-gray-400 font-medium min-w-[100px]">GitHub</span>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium break-all"
            >
              {profile.github}
            </a>
          </div>
        )}
        {profile?.linkedin && (
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
            <span className="text-gray-500 dark:text-gray-400 font-medium min-w-[100px]">LinkedIn</span>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium break-all"
            >
              {profile.linkedin}
            </a>
          </div>
        )}
        {profile?.twitter && (
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
            <span className="text-gray-500 dark:text-gray-400 font-medium min-w-[100px]">Twitter</span>
            <a
              href={profile.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium break-all"
            >
              {profile.twitter}
            </a>
          </div>
        )}
      </div>
    </div>
  )
}
