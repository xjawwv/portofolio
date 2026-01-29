"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { ProjectCard } from "@/components/ProjectCard";
import { profile, getProjectsByCategory, getFeaturedProjects } from "@/data/profile";

const categories = [
  { id: "all", label: "All" },
  { id: "web", label: "Web" },
  { id: "mobile", label: "Mobile" },
  { id: "backend", label: "Backend" },
];

export function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [showAll, setShowAll] = useState(false);

  const featuredProjects = getFeaturedProjects();
  const filteredProjects = getProjectsByCategory(activeCategory);
  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);

  return (
    <Section
      id="projects"
      title="Projects"
      subtitle="A selection of projects I've worked on"
    >
      {/* Featured Projects */}
      {activeCategory === "all" && featuredProjects.length > 0 && !showAll && (
        <div className="mb-12">
          <h3 className="text-lg font-medium mb-4">Featured</h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => {
              setActiveCategory(category.id);
              setShowAll(false);
            }}
            className={`px-4 py-2 text-sm rounded-lg transition-colors ${
              activeCategory === category.id
                ? "bg-neutral-900 dark:bg-white text-white dark:text-neutral-900"
                : "bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700"
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {displayedProjects.map((project, index) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>

      {/* Show More Button */}
      {filteredProjects.length > 6 && !showAll && (
        <div className="mt-8 text-center">
          <button
            onClick={() => setShowAll(true)}
            className="px-6 py-2.5 text-sm font-medium border border-neutral-300 dark:border-neutral-700 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
          >
            Show All Projects ({filteredProjects.length})
          </button>
        </div>
      )}

      {/* Empty State */}
      {displayedProjects.length === 0 && (
        <p className="text-center text-neutral-500 dark:text-neutral-400 py-8">
          No projects found in this category.
        </p>
      )}
    </Section>
  );
}
