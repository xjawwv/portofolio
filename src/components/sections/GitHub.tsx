"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Star } from "lucide-react";
import { Section } from "@/components/Section";
import { profile, type GitHubRepo } from "@/data/profile";

interface GitHubSectionProps {
  repos?: GitHubRepo[];
}

export function GitHub({ repos }: GitHubSectionProps) {
  const displayRepos = repos && repos.length > 0 ? repos : profile.pinnedRepos;

  return (
    <Section
      id="github"
      title="GitHub"
      subtitle="Open source contributions and projects"
    >
      {/* Profile Link */}
      <div className="flex items-center gap-4 mb-8 p-4 bg-neutral-800/50 rounded-xl">
        <div className="p-3 bg-white rounded-full">
          <Github className="h-6 w-6 text-neutral-900" />
        </div>
        <div className="flex-1">
          <a
            href={`https://github.com/${profile.githubUsername}`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-lg hover:underline underline-offset-2"
          >
            @{profile.githubUsername}
          </a>
          <p className="text-sm text-neutral-400">
            View full profile on GitHub
          </p>
        </div>
        <a
          href={`https://github.com/${profile.githubUsername}`}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 hover:bg-neutral-700 rounded-lg transition-colors"
          aria-label="Open GitHub profile"
        >
          <ExternalLink className="h-5 w-5 text-neutral-500" />
        </a>
      </div>

      {/* Pinned Repos */}
      <h3 className="text-lg font-medium mb-4">Pinned Repositories</h3>
      <div className="grid gap-4 sm:grid-cols-2">
        {displayRepos.map((repo, index) => (
          <motion.a
            key={repo.name}
            href={repo.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="p-5 bg-neutral-800/50 rounded-xl hover:bg-neutral-800 transition-colors group"
          >
            <div className="flex items-start justify-between mb-2">
              <h4 className="font-medium group-hover:underline underline-offset-2">
                {repo.name}
              </h4>
              {repo.stars !== undefined && (
                <span className="inline-flex items-center gap-1 text-sm text-neutral-400">
                  <Star className="h-3.5 w-3.5" />
                  {repo.stars}
                </span>
              )}
            </div>
            <p className="text-sm text-neutral-400 mb-3 line-clamp-2">
              {repo.description}
            </p>
            {repo.language && (
              <span className="inline-flex items-center gap-1.5 text-xs text-neutral-400">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                {repo.language}
              </span>
            )}
          </motion.a>
        ))}
      </div>
    </Section>
  );
}
