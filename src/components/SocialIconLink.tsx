import { Github, Linkedin, Twitter, Instagram, Youtube, Mail } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  instagram: Instagram,
  youtube: Youtube,
  mail: Mail,
};

interface SocialIconLinkProps {
  name: string;
  url: string;
  icon: string;
}

export function SocialIconLink({ name, url, icon }: SocialIconLinkProps) {
  const Icon = iconMap[icon] || Mail;

  return (
    <a
      href={url}
      target={url.startsWith("mailto:") ? undefined : "_blank"}
      rel={url.startsWith("mailto:") ? undefined : "noopener noreferrer"}
      className="group flex items-center gap-3 p-4 bg-neutral-800/50 rounded-xl hover:bg-neutral-800 transition-colors"
      aria-label={name}
    >
      <div className="p-2 bg-neutral-700 rounded-lg shadow-sm group-hover:shadow transition-shadow">
        <Icon className="h-5 w-5 text-neutral-300" />
      </div>
      <div>
        <p className="font-medium">{name}</p>
        <p className="text-sm text-neutral-400 truncate max-w-[200px]">
          {url.replace(/^(https?:\/\/)?(www\.)?/, "").replace(/\/$/, "")}
        </p>
      </div>
    </a>
  );
}
