"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionProps {
  id: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  showDivider?: boolean;
}

export function Section({
  id,
  title,
  subtitle,
  children,
  className = "",
  showDivider = true,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`py-16 sm:py-20 ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto px-4 sm:px-6"
      >
        {(title || subtitle) && (
          <div className="mb-10 sm:mb-12">
            {title && (
              <h2 className="text-2xl sm:text-3xl font-bold mb-2">{title}</h2>
            )}
            {subtitle && (
              <p className="text-neutral-400">
                {subtitle}
              </p>
            )}
            {showDivider && (
              <div className="mt-4 w-12 h-1 bg-white rounded-full" />
            )}
          </div>
        )}
        {children}
      </motion.div>
    </section>
  );
}
