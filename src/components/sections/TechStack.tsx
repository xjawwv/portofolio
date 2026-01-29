"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { TechBadge } from "@/components/TechBadge";
import { profile } from "@/data/profile";

export function TechStack() {
  return (
    <Section
      id="tech-stack"
      title="Tech Stack"
      subtitle="Technologies I work with regularly"
    >
      <div className="grid gap-8 sm:grid-cols-2">
        {profile.techStack.map((category, categoryIndex) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: categoryIndex * 0.1 }}
            className="p-6 bg-neutral-50 dark:bg-neutral-800/50 rounded-xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-white dark:bg-neutral-700 rounded-lg shadow-sm">
                <category.icon className="h-5 w-5 text-neutral-700 dark:text-neutral-300" />
              </div>
              <h3 className="font-semibold">{category.name}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {category.items.map((item) => (
                <TechBadge key={item.name} name={item.name} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
