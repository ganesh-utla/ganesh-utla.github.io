'use client'

import Link from 'next/link'
import { Github, Linkedin, Twitter, Mail } from 'lucide-react'
import { Profile } from '@/types/database'

interface HeaderProps {
  profile: Profile | null
}

export default function Header({ profile }: HeaderProps) {
  return (
    <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
      <nav className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-gray-900 hover:text-blue-600">
          {profile?.name || 'Portfolio'}
        </Link>

        <div className="flex items-center gap-6 hidden md:flex">
          <Link href="/projects" className="text-gray-600 hover:text-gray-900 transition">
            Projects
          </Link>
          <Link href="/experience" className="text-gray-600 hover:text-gray-900 transition">
            Experience
          </Link>
          <Link href="/contact" className="text-gray-600 hover:text-gray-900 transition">
            Contact
          </Link>

          <div className="flex items-center gap-4 ml-6 border-l pl-6">
            {profile?.github && (
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
            )}
            {profile?.linkedin && (
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            )}
            {profile?.twitter && (
              <a
                href={profile.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            )}
            {profile?.email && (
              <a
                href={`mailto:${profile.email}`}
                className="text-gray-600 hover:text-gray-900"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            )}
          </div>
        </div>
      </nav>
    </header>
  )
}
