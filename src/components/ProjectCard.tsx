import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import type { Project } from "@/data/profile";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group h-64 p-6 bg-neutral-800/50 rounded-xl hover:bg-neutral-800 transition-colors flex flex-col">
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div>
          <Link
            href={`/projects/${project.slug}`}
            className="font-semibold text-lg hover:underline underline-offset-2"
          >
            {project.title}
          </Link>
          <div className="flex items-center gap-2 mt-1 text-sm text-neutral-400">
            {project.role && <span>{project.role}</span>}
            {project.role && <span>•</span>}
            <span>{project.year}</span>
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="text-neutral-400 mb-4 text-sm leading-relaxed line-clamp-2 flex-shrink-0">
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.tags.slice(0, 4).map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 text-xs bg-neutral-700 text-neutral-300 rounded"
          >
            {tag}
          </span>
        ))}
        {project.tags.length > 4 && (
          <span className="px-2 py-0.5 text-xs text-neutral-400">
            +{project.tags.length - 4}
          </span>
        )}
      </div>

      {/* Links */}
      <div className="flex items-center gap-3 mt-auto pt-2">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-neutral-400 hover:text-white transition-colors"
          >
            <ExternalLink className="h-3.5 w-3.5" />
            Live Demo
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-neutral-400 hover:text-white transition-colors"
          >
            <Github className="h-3.5 w-3.5" />
            GitHub
          </a>
        )}
        <Link
          href={`/projects/${project.slug}`}
          className="ml-auto text-sm text-neutral-400 hover:text-white transition-colors"
        >
          View Details →
        </Link>
      </div>
    </div>
  );
}
