import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github, Copy, Check } from "lucide-react";
import { profile, getProjectBySlug } from "@/data/profile";
import { CopyLinkButton } from "./copy-link-button";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return profile.projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: `${project.title} | ${profile.name}`,
      description: project.description,
      type: "article",
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Back Link */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Projects
        </Link>

        {/* Header */}
        <header className="mb-8">
          <div className="flex items-start justify-between gap-4 mb-4">
            <h1 className="text-3xl sm:text-4xl font-bold">{project.title}</h1>
            <CopyLinkButton />
          </div>
          <div className="flex flex-wrap items-center gap-3 text-sm text-neutral-600 dark:text-neutral-400">
            {project.role && <span>{project.role}</span>}
            {project.role && <span>•</span>}
            <span>{project.year}</span>
            {project.category && (
              <>
                <span>•</span>
                <span className="px-2 py-0.5 bg-neutral-100 dark:bg-neutral-800 rounded capitalize">
                  {project.category}
                </span>
              </>
            )}
          </div>
        </header>

        {/* Description */}
        <section className="mb-8">
          <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
            {project.longDescription || project.description}
          </p>
        </section>

        {/* Links */}
        <div className="flex flex-wrap gap-3 mb-10">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              <ExternalLink className="h-4 w-4" />
              Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-lg font-medium hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            >
              <Github className="h-4 w-4" />
              View Code
            </a>
          )}
        </div>

        {/* Details Grid */}
        <div className="space-y-8">
          {/* Problem */}
          {project.problem && (
            <section>
              <h2 className="text-xl font-semibold mb-3">The Problem</h2>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {project.problem}
              </p>
            </section>
          )}

          {/* Solution */}
          {project.solution && (
            <section>
              <h2 className="text-xl font-semibold mb-3">The Solution</h2>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {project.solution}
              </p>
            </section>
          )}

          {/* Tech Stack */}
          <section>
            <h2 className="text-xl font-semibold mb-3">Tech Stack</h2>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 text-sm bg-neutral-100 dark:bg-neutral-800 rounded-lg"
                >
                  {tag}
                </span>
              ))}
            </div>
          </section>

          {/* Outcomes */}
          {project.outcomes && project.outcomes.length > 0 && (
            <section>
              <h2 className="text-xl font-semibold mb-3">Key Outcomes</h2>
              <ul className="space-y-2">
                {project.outcomes.map((outcome, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-neutral-600 dark:text-neutral-400"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 bg-neutral-400 rounded-full shrink-0" />
                    {outcome}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Screenshots Placeholder */}
          <section>
            <h2 className="text-xl font-semibold mb-3">Screenshots</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="aspect-video bg-neutral-100 dark:bg-neutral-800 rounded-xl flex items-center justify-center text-neutral-400">
                Screenshot 1
              </div>
              <div className="aspect-video bg-neutral-100 dark:bg-neutral-800 rounded-xl flex items-center justify-center text-neutral-400">
                Screenshot 2
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
