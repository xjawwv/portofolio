"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Github, Mail, Sparkles } from "lucide-react";
import { profile } from "@/data/profile";

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-20">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left: Profile Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 text-center lg:text-left"
          >
            {/* Availability Badge */}
            {profile.availability && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 text-sm bg-green-900/20 text-green-400 rounded-full border border-green-800"
              >
                <Sparkles className="h-3.5 w-3.5" />
                {profile.availability}
              </motion.div>
            )}

            {/* Name */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 tracking-tight">
              {profile.name}
            </h1>

            {/* Tagline */}
            <p className="text-xl sm:text-2xl text-neutral-400 mb-6">
              {profile.tagline}
            </p>

            {/* Bio */}
            <p className="max-w-xl text-neutral-400 mb-8 leading-relaxed">
              {profile.bio}
            </p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap justify-center lg:justify-start gap-3"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-neutral-900 rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                View Projects
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={`https://github.com/${profile.githubUsername}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-neutral-700 rounded-lg font-medium hover:bg-neutral-800 transition-colors"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-neutral-700 rounded-lg font-medium hover:bg-neutral-800 transition-colors"
              >
                <Mail className="h-4 w-4" />
                Contact
              </a>
            </motion.div>

            {/* Location */}
            {profile.location && (
              <p className="mt-8 text-sm text-neutral-500">
                📍 {profile.location}
              </p>
            )}
          </motion.div>

          {/* Right: Avatar */}
          {profile.avatarUrl && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="flex-shrink-0"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full blur-2xl opacity-30 scale-110" />
                <Image
                  src={profile.avatarUrl}
                  alt={profile.name}
                  width={280}
                  height={280}
                  className="relative rounded-full border-4 border-neutral-800 object-cover w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72"
                  priority
                />
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
