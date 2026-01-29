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
  avatarUrl: "/avatar.png",
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
      slug: "topup-game",
      title: "PRIMEDIAMOND",
      description:
      "A complete game top-up e-commerce website with integrated payment and admin management features.",
      longDescription:
      "Developed a modular e-commerce platform specifically for game top-ups that unifies product catalog management, shopping cart, Sakurupiah payment integration, inventory control through an admin panel, transaction tracking, and notification systems. The frontend was built using Next.js while the backend utilized a lightweight Go service, designed for easy customization and fast deployment by non-technical users and small merchants.",
      problem:
      "Small businesses and game resellers needed an affordable and customizable top-up platform without the complexity and high cost of enterprise-level solutions, making it difficult to launch their own online store.",
      solution:
      "Built a modular platform combining Next.js, Sakurupiah payments, a simple backend API, and an intuitive admin dashboard, accompanied by step-by-step documentation so non-technical merchants can quickly set up, customize, and run their stores.",
      outcomes: [
      "99.9% uptime achieved",
      "Average load time under 2s",
      ],
      tags: ["Next.js", "Go", "Tailwind", "MySQL", "Framer Motion"],
      category: "web",
      year: 2025,
      role: "Full-Stack Developer",
      featured: true,
      liveUrl: "https://primediamond.store",
    },
    {
      slug: "kantak-ecommerce",
      title: "Kantak E-commerce Platform",
      description:
      "Marketplace dan sistem pemesanan cepat dengan dukungan pengantaran lokal.",
      longDescription:
      "Aplikasi e-commerce end-to-end untuk toko lokal dan layanan pengantaran cepat. Menyediakan katalog produk, upload multi-gambar, keranjang belanja, checkout dengan Stripe, manajemen pesanan untuk admin, serta notifikasi status pengiriman secara realtime. Sistem dirancang fokus pada performa, kemudahan penggunaan, dan skalabilitas untuk merchant kecil hingga menengah.",
      problem:
      "Pedagang lokal kesulitan menjual secara online dan melacak pesanan secara efisien, sementara pelanggan tidak memiliki visibilitas realtime terhadap status pengiriman dan progres pesanan.",
      solution:
      "Membangun platform all-in-one yang menggabungkan storefront modern menggunakan Next.js dan TypeScript, penyimpanan produk dengan Prisma dan PostgreSQL, upload gambar teroptimasi, integrasi pembayaran Stripe, serta sinkronisasi status pengiriman realtime melalui Firebase dan WebSocket.",
      outcomes: [
      "Meningkatkan konversi penjualan toko lokal sebesar 35%",
      "Waktu pengiriman rata-rata turun 20%",
      "Admin memproses pesanan 2x lebih cepat berkat dashboard terpusat",
      ],
      tags: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Stripe",
      "Firebase",
      ],
      category: "web",
      year: 2025,
      role: "Full-Stack Developer",
      featured: true,
      liveUrl: "https://food.pplgtwo.my.id",
      githubUrl: "https://github.com/xjawwv/kantak",
  },
  ],

  // ============================================================================
  // SOCIAL LINKS
  // ============================================================================
  socialLinks: [
    { name: "GitHub", url: "https://github.com/xjawwv", icon: "github" },
    { name: "LinkedIn", url: "no yet", icon: "linkedin" },
    { name: "Twitter", url: "https://twitter.com/xjawww_me", icon: "twitter" },
    { name: "Instagram", url: "https://instagram.com/xjaww.v", icon: "instagram" },
    { name: "YouTube", url: "https://youtube.com/@nexsacloud", icon: "youtube" },
    { name: "Email", url: "mailto:jawira252@gmail.com", icon: "mail" },
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
