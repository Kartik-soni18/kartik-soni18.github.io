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
  summary: string;
  repoDescription: string;
  language: string;
  techStack: string[];
  highlights: string[];
  imagePath: string;
  websiteHref: string;
  websiteLabel: string;
  githubHref: string;
  githubLabel: string;
}

export interface ResearchConfig {
  sectionLabel: string;
  projects: ResearchProject[];
}

export const researchConfig: ResearchConfig = {
  sectionLabel: "Projects",
  // ponytail: GitHub README/API data is curated here to avoid a client-side GitHub dependency; refresh this block when the repos change.
  projects: [
    {
      title: "GuardianHealth",
      year: "2026",
      discipline: "AI Health Triage",
      summary:
        "AI-powered symptom triage for Indian healthcare contexts, with emergent, urgent, routine, and self-care guidance backed by structured symptom-disease data.",
      repoDescription: "Frontend for the health agent",
      language: "Python",
      techStack: ["React 19", "FastAPI", "LangGraph", "MongoDB", "Upstash Redis", "AWS Lambda"],
      highlights: [
        "LangGraph clinical reasoning with Together.ai Llama 3.3 70B",
        "React/Vite/TypeScript frontend deployed to GitHub Pages",
        "FastAPI backend designed for AWS Lambda Function URLs",
      ],
      imagePath: "/images/project-guardian.jpg",
      websiteHref: "https://kartik-soni18.github.io/Guardian-health/",
      websiteLabel: "Open website",
      githubHref: "https://github.com/Kartik-soni18/Guardian-health",
      githubLabel: "GitHub",
    },
    {
      title: "JEE Advanced Math Solver",
      year: "2026",
      discipline: "Symbolic AI Agent",
      summary:
        "LangGraph-powered agent for JEE Advanced mathematics that decomposes problems, executes SymPy steps in a sandbox, and verifies answers before formatting the result.",
      repoDescription:
        "Made a sandboxed python agent you can use your llm api key for solving jee questions",
      language: "Python",
      techStack: ["Python", "LangGraph", "SymPy", "Streamlit", "Together AI", "LaTeX"],
      highlights: [
        "Analyze, plan, solve, verify, and reflect pipeline with retries",
        "Structured agent vs raw LLM comparison",
        "Curated JEE benchmark and Streamlit problem-solving interface",
      ],
      imagePath: "/images/project-jee.jpg",
      websiteHref:
        "https://jee-solver-agent-kxctqfgargwmbqd5oierjk.streamlit.app",
      websiteLabel: "Open app",
      githubHref: "https://github.com/Kartik-soni18/Jee-Solver-Agent",
      githubLabel: "GitHub",
    },
    {
      title: "Spur AI Live Chat Agent",
      year: "2026",
      discipline: "AI Support Chat",
      summary:
        "Mini AI customer support widget with persistent conversations, FAQ-grounded responses, Redis-backed caching, input guardrails, and a responsive SvelteKit UI.",
      repoDescription: "Spurr-Task",
      language: "TypeScript",
      techStack: ["TypeScript", "SvelteKit", "Express", "SQLite", "Redis", "Zod", "Tailwind CSS"],
      highlights: [
        "OpenAI GPT-4o-mini or Together AI backend provider support",
        "SQLite conversation persistence with localStorage session resume",
        "Sanitization, prompt-injection logging, token budgets, and timeouts",
      ],
      imagePath: "/images/project-vbstudio.jpg",
      websiteHref: "https://spur-chat-frontend-wnpt.onrender.com",
      websiteLabel: "Open demo",
      githubHref: "https://github.com/Kartik-soni18/Spurr-Task",
      githubLabel: "GitHub",
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
  heading: "",
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
  ],
  copyright: "\u00A9 2026 Kartik Soni. All rights reserved.",
  bottomLinks: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/kartik-soni-380476167" },
    { label: "GitHub", href: "https://github.com/Kartik-soni18" },
  ],
};
