// src/components/sections/content.ts

export type Product = {
  slug: string;
  name: string;
  tag: string;
  shortDescription: string;
  status: "live" | "beta" | "coming-soon";
  platforms: string[];
  href: string;
  cta: string;
  badge?: string;
  links?: {
    website?: string;
    playStore?: string;
    appStore?: string;
    sourceCode?: string;
  };
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
    links: {
      website: "https://brieflyca.com",
      playStore:
        "https://play.google.com/store/apps/details?id=com.askstudios.brieflyca",
      sourceCode: "https://github.com/Parmeet349/BrieflyCA",
      appStore: "https://apps.apple.com/us/app/brieflyca/id6757092055",
    },
  },
  {
    slug: "autolog",
    name: "AutoLog",
    tag: "Mobile · Productivity",
    shortDescription:
      "Smart vehicle logbook for tracking fuel, maintenance, and ownership costs.",
    status: "live",
    platforms: ["Mobile", "Backend API"],
    href: "/products/autolog",
    cta: "View details",
    links: {
      website: "https://autolog.ca",
      playStore: "https://play.google.com/store/apps/details?id=com.parmeet.AutoLog",
      appStore: "https://apps.apple.com/us/app/autolog-vehicle-manager/id6757113052",
    },
  },
  {
    slug: "tambola-caller",
    name: "Tambola Caller",
    tag: "Mobile · Entertainment",
    shortDescription:
      "Modern Tambola / Housie number caller designed for events and live games.",
    status: "live",
    platforms: ["Mobile"],
    href: "/products/tambola-caller",
    cta: "View details",
    links: {
      playStore:
        "https://play.google.com/store/apps/details?id=com.geekypajis.tambolanumbers",
      appStore: "https://apps.apple.com/us/app/tambola-number-caller-housie/id6757088103",
    },
  },
  {
    slug: "managerly",
    name: "Managerly",
    tag: "Mobile · Security",
    shortDescription:
      "Privacy-focused password manager built with an encryption-first approach.",
    status: "beta",
    platforms: ["Mobile"],
    href: "/products/managerly",
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
      "BrieflyCA is a Canada-only, mobile-first news application designed to reduce information overload. It automatically fetches Canadian headlines at regular intervals and rewrites them using AI into short, easy-to-read summaries, allowing users to stay informed without endless scrolling.",
    features: [
      "AI-generated news summaries readable in under 60 seconds.",
      "Swipe-based, dark-themed interface optimized for speed.",
      "Automated news fetching every 6 hours.",
      "Category-based prioritization of important stories.",
      "Smart push notifications using Firebase schedulers.",
      "Freemium model with ads and optional premium experience.",
      "Bookmark support for saving important stories.",
    ],
    idealFor: [
      "Busy professionals who want quick news updates.",
      "Students and commuters with limited reading time.",
      "Canadians looking for a clean, clutter-free news experience.",
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
      "Smart vehicle logbook and fuel tracking for everyday drivers and small fleets.",
    overview:
      "AutoLog is a mobile-first vehicle management application that helps users track fuel usage, maintenance history, and expenses in one place. It transforms scattered receipts and notes into structured, searchable data that provides real insights into vehicle ownership costs.",
    features: [
      "Quick fuel, service, and expense logging.",
      "Vehicle-wise dashboards and cost trends.",
      "OCR-based receipt scanning to reduce manual entry.",
      "Support for multiple vehicles and user profiles.",
      "Backend APIs ready for reporting and analytics.",
    ],
    idealFor: [
      "Everyday drivers who want visibility into fuel spending.",
      "Small businesses managing a few vehicles.",
      "Freelancers tracking vehicle expenses for tax purposes.",
    ],
    techStack: [
      "React Native",
      "Node.js",
      "REST APIs",
      "PostgreSQL",
      "MongoDB",
      "Firebase Authentication",
    ],
  },

  "tambola-caller": {
    heroTagline:
      "A smooth, modern Tambola / Housie caller for parties and live games.",
    overview:
      "Tambola Caller is a mobile utility application designed to host Tambola (Housie) games with ease. It automates number calling and visual display, making games faster, error-free, and more engaging for both in-person and online events.",
    features: [
      "Automatic randomized number calling with no repeats.",
      "Clear visual board showing called numbers.",
      "Smooth gameplay flow with minimal distractions.",
      "Offline-friendly support for live events.",
      "Ad placement optimized to avoid breaking gameplay.",
    ],
    idealFor: [
      "Hosts running Tambola / Housie nights.",
      "Families and community events.",
      "Content creators hosting live or streamed games.",
    ],
    techStack: [
      "React Native",
      "Mobile UI frameworks",
      "Ad monetization SDKs",
      "Performance optimization",
    ],
  },

  managerly: {
    heroTagline:
      "A secure, minimal password manager built with privacy at its core.",
    overview:
      "Managerly is a password and sensitive data management application focused on strong encryption and simplicity. It is designed for users who want secure storage without unnecessary complexity or hidden data handling.",
    features: [
      "Encrypted password and sensitive data storage.",
      "Minimal, distraction-free mobile interface.",
      "Cross-platform mobile support.",
      "Security-first design with modern encryption standards.",
    ],
    idealFor: [
      "Privacy-conscious individuals.",
      "Users managing multiple credentials securely.",
      "Anyone looking for a simple and trustworthy password manager.",
    ],
    techStack: [
      "React Native",
      "Node.js",
      "Encryption libraries",
      "Secure local storage",
    ],
  },
};

export const services = [
  {
    title: "Product & MVP Development",
    description:
      "End-to-end web and mobile product development using React, React Native, Node.js, and modern tooling.",
  },
  {
    title: "AI & Automation",
    description:
      "Practical AI integrations and automation pipelines that reduce manual work and improve efficiency.",
  },
  {
    title: "Client Apps & Dashboards",
    description:
      "Clean, high-performance user interfaces with dashboards, analytics, and responsive design.",
  },
  {
    title: "SaaS Platforms",
    description:
      "Scalable SaaS applications with authentication, subscriptions, dashboards, and admin panels.",
  },
  {
    title: "API & Backend Development",
    description:
      "Secure, well-structured REST APIs and backend systems built for growth and maintainability.",
  },
  {
    title: "Technical Consulting",
    description:
      "Architecture planning, code reviews, and technical guidance with a product-focused mindset.",
  },
];
