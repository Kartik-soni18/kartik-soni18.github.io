// ============================================================
// Site Configuration
// ============================================================

export interface SiteConfig {
  language: string;
  brandName: string;
}

export const siteConfig: SiteConfig = {
  language: "en",
  brandName: "Kartik Soni.",
};

// ============================================================
// Navigation
// ============================================================

export interface NavLink {
  label: string;
  href: string;
}

export interface NavigationConfig {
  links: NavLink[];
  ctaText: string;
}

export const navigationConfig: NavigationConfig = {
  links: [
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
  ],
  ctaText: "Get in touch",
};

// ============================================================
// Hero
// ============================================================

export interface HeroConfig {
  title: string;
  subtitleLine1: string;
  subtitleLine2: string;
  ctaText: string;
}

export const heroConfig: HeroConfig = {
  title: "Kartik Soni.",
  subtitleLine1:
    "Member of Technical Staff-1 at Oracle Cloud Infrastructure. Building AI-driven workflows and cloud-scale metering systems.",
  subtitleLine2: "IIT Kanpur. Computer Science & Engineering.",
  ctaText: "Explore my work",
};

// ============================================================
// Capabilities (Curriculum section) — DISABLED
// ============================================================

export interface CapabilityItem {
  title: string;
  slug: string;
  description: string;
  image: string;
}

export interface CapabilitiesConfig {
  sectionLabel: string;
  items: CapabilityItem[];
}

export const capabilitiesConfig: CapabilitiesConfig = {
  sectionLabel: "",
  items: [],
};

// ============================================================
// Capability Detail (sub-pages) — kept for routing
// ============================================================

export interface CapabilityDetailData {
  title: string;
  subtitle: string;
  paragraphs: string[];
}

export interface CapabilityDetailConfig {
  sectionLabel: string;
  backLinkText: string;
  prevLabel: string;
  nextLabel: string;
  notFoundText: string;
  capabilities: Record<string, CapabilityDetailData>;
}

export const capabilityDetailConfig: CapabilityDetailConfig = {
  sectionLabel: "",
  backLinkText: "Back to home",
  prevLabel: "Previous",
  nextLabel: "Next",
  notFoundText: "Capability not found.",
  capabilities: {},
};

// ============================================================
// Architecture (CinematicVision section) — DISABLED
// ============================================================

export interface ArchitectureConfig {
  sectionLabel: string;
  videoPath: string;
  title: string;
  description: string;
}

export const architectureConfig: ArchitectureConfig = {
  sectionLabel: "",
  videoPath: "",
  title: "",
  description: "",
};

// ============================================================
// Research (AlumniArchives / Projects section)
// ============================================================

export interface ResearchProject {
  title: string;
  year: string;
  discipline: string;
  image: string;
}

export interface ResearchConfig {
  sectionLabel: string;
  projects: ResearchProject[];
}

export const researchConfig: ResearchConfig = {
  sectionLabel: "Projects",
  projects: [
    {
      title: "GuardianHealth",
      year: "2025",
      discipline: "AI/ML + Full-Stack + AWS",
      image: "images/project-guardian.jpg",
    },
    {
      title: "JEE Math Reasoning Agent",
      year: "2024",
      discipline: "LLM + Symbolic AI",
      image: "images/project-jee.jpg",
    },
  ],
};

// ============================================================
// Footer
// ============================================================

export interface FooterLinkColumn {
  title: string;
  links: { label: string; href: string }[];
}

export interface FooterBottomLink {
  label: string;
  href: string;
}

export interface FooterConfig {
  heading: string;
  columns: FooterLinkColumn[];
  copyright: string;
  bottomLinks: FooterBottomLink[];
}

export const footerConfig: FooterConfig = {
  heading: "Building something extraordinary.",
  columns: [
    {
      title: "Connect",
      links: [
        { label: "kartik18badmera@gmail.com", href: "mailto:kartik18badmera@gmail.com" },
        { label: "+91-8690331948", href: "tel:+91-8690331948" },
        { label: "linkedin.com/in/kartik-soni-380476167", href: "https://www.linkedin.com/in/kartik-soni-380476167" },
        { label: "github.com/Kartik-soni18", href: "https://github.com/Kartik-soni18" },
      ],
    },
    {
      title: "Work",
      links: [
        { label: "Oracle Cloud Infrastructure", href: "#" },
        { label: "GuardianHealth", href: "#" },
        { label: "JEE Math Agent", href: "#" },
      ],
    },
  ],
  copyright: "\u00A9 2026 Kartik Soni. All rights reserved.",
  bottomLinks: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/kartik-soni-380476167" },
    { label: "GitHub", href: "https://github.com/Kartik-soni18" },
  ],
};
