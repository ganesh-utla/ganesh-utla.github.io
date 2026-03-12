import { Project } from '@/types/database'
import Link from 'next/link'
import { Github, ExternalLink } from 'lucide-react'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition flex flex-col h-full">
      {project.image_url && (
        <div className="relative w-full h-48 bg-gray-200">
          <img
            src={project.image_url}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{project.title}</h3>
        
        {project.description && (
          <ul className="text-gray-600 text-sm mb-4 space-y-1 list-disc list-inside flex-1">
            {project.description.split('.').filter(point => point.trim()).map((point, index) => (
              <li key={index}>{point.trim()}</li>
            ))}
          </ul>
        )}

        <div className="space-y-4 mt-auto">
          {project.tech_stack && project.tech_stack.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {project.tech_stack.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          <div className="flex items-center gap-4">
            {project.github_url && (
              <a
                href={project.github_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition"
              >
                <Github size={18} />
              </a>
            )}
            {project.live_url && (
              <a
                href={project.live_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition"
              >
                <ExternalLink size={18} />
                <span className="text-sm">Live</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
