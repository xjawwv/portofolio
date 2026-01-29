import Link from "next/link";
import { Github, Linkedin, Twitter, Instagram, Youtube, Mail } from "lucide-react";
import { profile } from "@/data/profile";

const iconMap: Record<string, React.ElementType> = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  instagram: Instagram,
  youtube: Youtube,
  mail: Mail,
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-sm text-neutral-400">
            © {currentYear} {profile.name}. All rights reserved.
          </p>

          {/* Quick Links */}
          <div className="flex items-center gap-6">
            <Link
              href="#projects"
              className="text-sm text-neutral-400 hover:text-white transition-colors"
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="text-sm text-neutral-400 hover:text-white transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-2">
            {profile.socialLinks.slice(0, 4).map((link) => {
              const Icon = iconMap[link.icon] || Mail;
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-neutral-400 hover:text-white transition-colors"
                  aria-label={link.name}
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
