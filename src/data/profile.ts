import {
  Code2,
  Server,
  Cloud,
  Wrench,
  type LucideIcon,
} from "lucide-react";

// ============================================================================
// TYPES
// ============================================================================

export interface TechItem {
  name: string;
}

export interface TechCategory {
  name: string;
  icon: LucideIcon;
  items: TechItem[];
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  problem?: string;
  solution?: string;
  outcomes?: string[];
  tags: string[];
  category: "web" | "mobile" | "backend" | "other";
  year: number;
  role?: string;
  featured: boolean;
  liveUrl?: string;
  githubUrl?: string;
  images?: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface GitHubRepo {
  name: string;
  description: string;
  url: string;
  language?: string;
  stars?: number;
}

export interface ProfileData {
  name: string;
  tagline: string;
  bio: string;
  location: string;
  email: string;
  availability: string;
  avatarUrl?: string;
  resumeUrl?: string;
  githubUsername: string;
  techStack: TechCategory[];
  projects: Project[];
  socialLinks: SocialLink[];
  pinnedRepos: GitHubRepo[];
}

// ============================================================================
// TECH STACK ICON MAPPING - Maps tech name to PNG path in public/icon/
// ============================================================================

export const techIcons: Record<string, string> = {
  // Frontend
  "React": "/icon/React.png",
  "Next.js": "/icon/Next-js.png",
  "JavaScript": "/icon/Javascript.png",
  "Tailwind CSS": "/icon/Tailwind CSS.png",
  
  // Backend
  "Node.js": "/icon/Node.js.png",
  "Express": "/icon/Express.png",
  "MongoDB": "/icon/MongoDB.png",
  "MySQL": "/icon/MySQL.png",
  "Golang": "/icon/GoLang.png",
  
  // DevOps
  "Docker": "/icon/Docker.png",
  "AWS": "/icon/AWS.png",
  "Vercel": "/icon/Vercel.png",
  "GitHub Actions": "/icon/GitHub.png",
  
  // Tools
  "Git": "/icon/Git.png",
  "VS Code": "/icon/VsCode.png",
  "Figma": "/icon/Figma.png",
  "Postman": "/icon/Postman.png",
};

// ============================================================================
// PROFILE DATA - Edit this to customize your portfolio
// ============================================================================

export const profile: ProfileData = {
  name: "JAWIRA",
  tagline: "Full-Stack Developer",
  bio: "Saya membuat sebuah website clean, performa, dan responsive dengan menggunakan Next.js dan Tailwind CSS.",
  location: "Serang, Banten",
  email: "jawira252@gmail.com",
  availability: "Open to freelance",
  githubUsername: "xjawwv",

  // ============================================================================
  // TECH STACK
  // ============================================================================
  techStack: [
    {
      name: "Frontend",
      icon: Code2,
      items: [
        { name: "React" },
        { name: "Next.js" },
        { name: "Tailwind CSS" },
      ],
    },
    {
      name: "Backend",
      icon: Server,
      items: [
        { name: "Node.js" },
        { name: "Express" },
        { name: "MongoDB" },
        { name: "Golang" },
      ],
    },
    {
      name: "DevOps",
      icon: Cloud,
      items: [
        { name: "Docker" },
        { name: "AWS" },
        { name: "Vercel" },
        { name: "GitHub Actions" },
      ],
    },
    {
      name: "Tools",
      icon: Wrench,
      items: [
        { name: "Git" },
        { name: "VS Code" },
        { name: "Figma" },
        { name: "Postman" },
      ],
    },
  ],

  // ============================================================================
  // PROJECTS
  // ============================================================================
  projects: [
    {
      slug: "ecommerce-platform",
      title: "E-Commerce Platform",
      description:
        "A full-featured online store with cart, payments, and admin dashboard.",
      longDescription:
        "Built a complete e-commerce solution featuring product catalog, shopping cart, Stripe integration, and a comprehensive admin panel for inventory management.",
      problem:
        "Small businesses needed an affordable, customizable e-commerce solution without the complexity of enterprise platforms.",
      solution:
        "Developed a modular platform with Next.js and Stripe that can be easily customized and deployed by non-technical users.",
      outcomes: [
        "50+ active stores launched",
        "99.9% uptime achieved",
        "Average load time under 2s",
      ],
      tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind"],
      category: "web",
      year: 2024,
      role: "Full-Stack Developer",
      featured: true,
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/yourusername/ecommerce",
    },
    {
      slug: "task-management-app",
      title: "Task Management App",
      description:
        "Collaborative task manager with real-time updates and team features.",
      longDescription:
        "A Notion-like productivity app with drag-and-drop kanban boards, real-time collaboration, and team workspaces.",
      problem:
        "Teams struggled with fragmented tools for task tracking and collaboration.",
      solution:
        "Created an all-in-one workspace with real-time sync using WebSockets and intuitive drag-and-drop interfaces.",
      outcomes: [
        "10K+ daily active users",
        "4.8★ average rating",
        "Featured on Product Hunt",
      ],
      tags: ["React", "Node.js", "Socket.io", "MongoDB", "Redis"],
      category: "web",
      year: 2024,
      role: "Lead Developer",
      featured: true,
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/yourusername/taskapp",
    },
    {
      slug: "fitness-mobile-app",
      title: "Fitness Tracking App",
      description: "Cross-platform mobile app for workout tracking and analytics.",
      longDescription:
        "A React Native fitness app with workout logging, progress charts, and personalized recommendations.",
      problem: "Fitness enthusiasts wanted a simple, clean app without subscription fees.",
      solution:
        "Built a free, open-source fitness tracker with offline-first architecture.",
      outcomes: [
        "25K+ downloads",
        "Featured in App Store Health category",
      ],
      tags: ["React Native", "Expo", "SQLite", "Charts"],
      category: "mobile",
      year: 2023,
      role: "Mobile Developer",
      featured: true,
      githubUrl: "https://github.com/yourusername/fitnessapp",
    },
    {
      slug: "api-gateway",
      title: "API Gateway Service",
      description: "High-performance API gateway with rate limiting and auth.",
      longDescription:
        "A production-ready API gateway handling authentication, rate limiting, request routing, and monitoring.",
      tags: ["Go", "Redis", "Docker", "Kubernetes"],
      category: "backend",
      year: 2023,
      role: "Backend Engineer",
      featured: false,
      githubUrl: "https://github.com/yourusername/api-gateway",
    },
    {
      slug: "portfolio-template",
      title: "Portfolio Template",
      description: "Minimalist developer portfolio built with Next.js.",
      tags: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
      category: "web",
      year: 2024,
      role: "Creator",
      featured: false,
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/yourusername/portfolio",
    },
    {
      slug: "chat-application",
      title: "Real-Time Chat App",
      description: "Encrypted messaging app with group chats and file sharing.",
      tags: ["React", "Firebase", "WebRTC", "E2E Encryption"],
      category: "web",
      year: 2023,
      featured: false,
      githubUrl: "https://github.com/yourusername/chatapp",
    },
    {
      slug: "weather-dashboard",
      title: "Weather Dashboard",
      description: "Beautiful weather app with 7-day forecasts and location search.",
      tags: ["Vue.js", "OpenWeather API", "Chart.js"],
      category: "web",
      year: 2022,
      featured: false,
      liveUrl: "https://example.com",
    },
    {
      slug: "inventory-system",
      title: "Inventory Management",
      description: "Enterprise inventory system with barcode scanning.",
      tags: ["Python", "FastAPI", "PostgreSQL", "React"],
      category: "backend",
      year: 2022,
      featured: false,
      githubUrl: "https://github.com/yourusername/inventory",
    },
  ],

  // ============================================================================
  // SOCIAL LINKS
  // ============================================================================
  socialLinks: [
    { name: "GitHub", url: "https://github.com/yourusername", icon: "github" },
    { name: "LinkedIn", url: "https://linkedin.com/in/yourusername", icon: "linkedin" },
    { name: "Twitter", url: "https://twitter.com/yourusername", icon: "twitter" },
    { name: "Instagram", url: "https://instagram.com/yourusername", icon: "instagram" },
    { name: "YouTube", url: "https://youtube.com/@yourusername", icon: "youtube" },
    { name: "Email", url: "mailto:hello@yourname.com", icon: "mail" },
  ],

  // ============================================================================
  // PINNED REPOS (fallback if GitHub API fails)
  // ============================================================================
  pinnedRepos: [
    {
      name: "ecommerce-platform",
      description: "Full-featured e-commerce solution with Next.js",
      url: "https://github.com/yourusername/ecommerce-platform",
      language: "TypeScript",
      stars: 128,
    },
    {
      name: "task-manager",
      description: "Real-time collaborative task management app",
      url: "https://github.com/yourusername/task-manager",
      language: "TypeScript",
      stars: 89,
    },
    {
      name: "api-gateway",
      description: "High-performance API gateway in Go",
      url: "https://github.com/yourusername/api-gateway",
      language: "Go",
      stars: 256,
    },
    {
      name: "fitness-tracker",
      description: "Cross-platform fitness app with React Native",
      url: "https://github.com/yourusername/fitness-tracker",
      language: "TypeScript",
      stars: 67,
    },
  ],
};

// Helper to get project by slug
export function getProjectBySlug(slug: string): Project | undefined {
  return profile.projects.find((p) => p.slug === slug);
}

// Helper to get featured projects
export function getFeaturedProjects(): Project[] {
  return profile.projects.filter((p) => p.featured);
}

// Helper to filter projects by category
export function getProjectsByCategory(category: string): Project[] {
  if (category === "all") return profile.projects;
  return profile.projects.filter((p) => p.category === category);
}
