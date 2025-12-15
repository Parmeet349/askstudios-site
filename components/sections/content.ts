// src/components/sections/content.ts

export type Product = {
  slug: string;
  name: string;
  tag: string;
  shortDescription: string;
  status: "live" | "beta" | "coming-soon";
  platforms: string[];
  href: string; // internal link to product page
  cta: string;
  badge?: string; // optional highlight badge (e.g. Flagship product)
};

export const products: Product[] = [
  {
    slug: "brieflyca",
    name: "BrieflyCA",
    tag: "Mobile · AI · News",
    shortDescription:
      "Canada-only mobile news app delivering AI-generated summaries in under 60 seconds.",
    status: "live",
    platforms: ["Mobile"],
    href: "/products/brieflyca",
    cta: "View details",
    badge: "Flagship product",
  },
  {
    slug: "autolog",
    name: "AutoLog",
    tag: "Mobile · Productivity",
    shortDescription:
      "Smart vehicle logbook with fuel tracking, insights, and automation-ready data.",
    status: "live",
    platforms: ["Mobile", "Backend API"],
    href: "/products/autolog",
    cta: "View details",
  },
  {
    slug: "intervue-ai",
    name: "Intervue.AI",
    tag: "Web · AI",
    shortDescription:
      "AI-powered mock interviews with real-time feedback, analytics, and progress tracking.",
    status: "beta",
    platforms: ["Web", "AI"],
    href: "/products/intervue-ai",
    cta: "View details",
  },
  {
    slug: "dripreel",
    name: "DripReel",
    tag: "SaaS · Automation",
    shortDescription:
      "From text to viral-ready short-form videos for YouTube Shorts, TikTok, and Reels.",
    status: "coming-soon",
    platforms: ["Web", "SaaS"],
    href: "/products/dripreel",
    cta: "View details",
  },
  {
    slug: "tambola-caller",
    name: "Tambola Caller",
    tag: "Mobile · Entertainment",
    shortDescription:
      "Modern Tambola / Housie number caller with smooth UX and creator-friendly controls.",
    status: "live",
    platforms: ["Mobile"],
    href: "/products/tambola-caller",
    cta: "View details",
  },
];

export const productDetails: Record<
  string,
  {
    heroTagline: string;
    overview: string;
    features: string[];
    idealFor: string[];
    techStack: string[];
  }
> = {
  brieflyca: {
    heroTagline: "Canadian news, simplified into 60-second reads.",
    overview:
      "BrieflyCA is a Canada-only, mobile-first news app built to reduce information overload. Every 6 hours, it automatically fetches the latest Canadian headlines and rewrites them using AI into short, easy-to-read summaries—so users stay informed without endless scrolling.",
    features: [
      "Swipe-based, dark-themed UI optimized for fast consumption.",
      "AI-generated news summaries under 60 seconds.",
      "Automated news fetching every 6 hours.",
      "Category-based prioritization of important stories.",
      "Smart push notifications using Firebase schedulers.",
      "Freemium model with ads and premium ad-free experience.",
      "Bookmark support for saving important stories.",
    ],
    idealFor: [
      "Busy professionals who want quick news updates.",
      "Students and commuters with limited reading time.",
      "Canadians looking for clean, clutter-free news.",
    ],
    techStack: [
      "React Native",
      "Firebase Functions",
      "SerpApi",
      "AI summarization",
      "Push notifications",
    ],
  },

  autolog: {
    heroTagline:
      "Smart vehicle logbook and fuel tracking for everyday drivers and fleets.",
    overview:
      "AutoLog keeps every trip, fill-up, and expense organized. It turns your fuel receipts and odometer readings into clean, searchable data you can actually use—whether it's for tax, fleet management, or just understanding your car better.",
    features: [
      "Log fuel entries in seconds with structured fields.",
      "Track fuel economy and spending over time.",
      "Support for multiple vehicles and profiles.",
      "API-ready backend for future dashboard and reporting.",
      "Secure storage with room to extend into cloud sync.",
    ],
    idealFor: [
      "Everyday drivers who want visibility on fuel spend.",
      "Small businesses with a few vehicles.",
      "Freelancers tracking vehicle expenses for tax purposes.",
    ],
    techStack: ["React Native", "Node.js", "REST APIs", "PostgreSQL / SQL"],
  },

  "intervue-ai": {
    heroTagline:
      "Practice job interviews with an AI that talks, listens, and gives feedback.",
    overview:
      "Intervue.AI simulates real interview scenarios with an AI avatar and structured questions. It analyzes your responses over time, helping you improve clarity, confidence, and domain knowledge for your next big opportunity.",
    features: [
      "AI avatar that conducts mock interviews in real-time.",
      "Dynamic question generation by role, level, and tech stack.",
      "Session recording with optional video analysis.",
      "Performance analytics and improvement tracking.",
      "Future roadmap for B2B hiring and training teams.",
    ],
    idealFor: [
      "Job seekers preparing for tech or product roles.",
      "Students practicing behavioral and technical interviews.",
      "Bootcamps and training programs.",
    ],
    techStack: [
      "Next.js",
      "React",
      "AI APIs",
      "PostgreSQL",
      "Cloud storage",
    ],
  },

  dripreel: {
    heroTagline:
      "Short-form videos on autopilot: from script to export-ready clips.",
    overview:
      "DripReel turns written scripts or ideas into vertical videos ready for YouTube Shorts, TikTok, and Instagram Reels. It handles visuals, voice-over, pacing, and rendering so creators can focus on ideas instead of timelines.",
    features: [
      "Input text and generate a 9:16 short-form video.",
      "Template-based visual styles for different niches.",
      "Voice-over via AI text-to-speech.",
      "Automated rendering pipeline with MP4 exports.",
      "Future integrations for direct social publishing.",
    ],
    idealFor: [
      "Creators scaling short-form content.",
      "Businesses repurposing blogs into video.",
      "Agencies managing multiple social accounts.",
    ],
    techStack: [
      "Next.js",
      "Node.js",
      "FFmpeg",
      "Cloud storage",
      "AI APIs",
    ],
  },

  "tambola-caller": {
    heroTagline:
      "A smooth, modern Tambola / Housie caller for parties and streams.",
    overview:
      "Tambola Caller is a beautifully designed number caller for Housie / Tambola games. It focuses on readability, pacing, and animation so events feel fun and professional—whether at home or live-streamed.",
    features: [
      "Randomized number calling with no repeats.",
      "Clean number board with highlights.",
      "Configurable pace and audio feedback.",
      "Offline-friendly for events.",
      "Designed for casting and screen sharing.",
    ],
    idealFor: [
      "Hosts running Tambola / Housie nights.",
      "Content creators streaming live games.",
      "Community events and family gatherings.",
    ],
    techStack: [
      "React Native",
      "Mobile UI frameworks",
      "Local state management",
    ],
  },
};

export const services = [
  {
    title: "Product & MVP Development",
    description:
      "Full-stack web and mobile builds using React, React Native, Node.js, and modern tooling.",
  },
  {
    title: "AI & Automation",
    description:
      "Integrations with AI APIs, workflow automation, and tooling to save hours every week.",
  },
  {
    title: "Client Apps & Dashboards",
    description:
      "Beautiful, performant interfaces with dashboards, analytics, and responsive design.",
  },
  {
    title: "SaaS Platforms",
    description:
      "Subscription-based apps with auth, billing, dashboards, and admin panels.",
  },
  {
    title: "API & Backend Development",
    description:
      "REST/GraphQL APIs, integrations, and secure backends ready for scale.",
  },
  {
    title: "Technical Consulting",
    description:
      "Architecture, code audits, and roadmap planning with a builder’s mindset.",
  },
];
