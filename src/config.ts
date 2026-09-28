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

// The only frontend location for the Worker endpoint. Local navigation works
// without it; set VITE_AGENT_API_URL after the Worker is deployed.
export const agentConfig = {
  // The Worker URL is public by design; secrets remain exclusively in the
  // Worker. An environment variable can still override this for staging.
  apiUrl: import.meta.env.VITE_AGENT_API_URL || 'https://kartik-portfolio-agent.kartikaidev.workers.dev',
  apiPath: '/agent',
} as const;

export const portfolioContext = {
  name: 'Kartik Soni',
  role: 'Member of Technical Staff-1 at Oracle Cloud Infrastructure',
  summary: 'Software engineer focused on AI-driven workflows and cloud-scale metering systems.',
  education: 'Computer Science & Engineering, IIT Kanpur.',
  skills: ['Python', 'TypeScript', 'React', 'FastAPI', 'LangGraph', 'LLM orchestration', 'RAG', 'AWS', 'Docker', 'Kubernetes'],
} as const;

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
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
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
  // GitHub README/API data is curated here to avoid a client-side GitHub dependency; refresh this block when the repos change.
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
    {
      title: "Multi-Hop RAG Benchmark",
      year: "2026",
      discipline: "Retrieval Evaluation",
      summary:
        "A multi-hop retrieval-augmented generation benchmark for evaluating whether a system can connect evidence across documents before producing a grounded answer.",
      repoDescription: "Benchmarking multi-hop reasoning and retrieval quality",
      language: "Python",
      techStack: ["Python", "RAG", "LLMs", "Information Retrieval", "Evaluation"],
      highlights: [
        "Measures multi-hop question answering across linked pieces of evidence",
        "Built to expose the gap between single-document retrieval and compositional reasoning",
        "Current benchmark accuracy: 74 / 100",
      ],
      imagePath: "/images/project-redwood.jpg",
      websiteHref: "https://github.com/Kartik-soni18/Mutli-Hop-rag",
      websiteLabel: "74 / 100 accuracy",
      githubHref: "https://github.com/Kartik-soni18/Mutli-Hop-rag",
      githubLabel: "View benchmark",
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
