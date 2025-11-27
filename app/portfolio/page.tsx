import SiteShell from "@/components/layout/SiteShell";
import SectionHeader from "@/components/ui/SectionHeader";
import GlassCard from "@/components/ui/GlassCard";

const portfolioItems = [
  {
    title: "ASK Studios AI Assistant (This Website)",
    role: "AI assistant · Backend · UX",
    timeframe: "2025",
    summary:
      "A site-wide AI assistant embedded into the ASK Studios website, built with a custom API route and LLM integration. It answers product and services questions and helps visitors explore what we can build for them.",
    impactPoints: [
      "Designed a floating chat UI that matches the site's brand with smooth animations and responsive behavior.",
      "Implemented a custom API backend that integrates with LLM-compatible models.",
      "Showcases to clients how we can build similar assistants for their products, support, or internal tools.",
    ],
    techStack: ["Next.js", "React", "Framer Motion", "LLM API", "TypeScript"],
  },
  {
    title: "AutoLog – Smart Vehicle Logbook",
    role: "Product design · Mobile development · Backend",
    timeframe: "2024 – ongoing",
    summary:
      "A mobile-first vehicle logbook and fuel tracking app, built to automate logging and make expense and mileage tracking painless.",
    impactPoints: [
      "Designed and built the core React Native app and Node.js backend.",
      "Implemented structured fuel and trip logging ready for analytics dashboards.",
      "Created a foundation for future OCR, automation, and fleet features.",
    ],
    techStack: ["React Native", "Node.js", "REST APIs", "PostgreSQL"],
  },
  {
    title: "Intervue.AI – AI Interview Practice",
    role: "Architecture · Backend · Product",
    timeframe: "2024 – in development",
    summary:
      "A web-based platform for mock interviews using an AI avatar, real-time feedback, and progress tracking.",
    impactPoints: [
      "Defined the backend architecture using Next.js, PostgreSQL, and AI APIs.",
      "Designed the flow for interactive sessions, analytics, and user progress tracking.",
      "Planned B2B extension for teams and bootcamps.",
    ],
    techStack: ["Next.js", "React", "PostgreSQL", "AI APIs"],
  },
  {
    title: "DripReel – Short-Form Content Automation",
    role: "System design · Backend · Automation",
    timeframe: "2024 – in development",
    summary:
      "A SaaS platform that turns text into short-form vertical videos for YouTube Shorts, TikTok, and Reels.",
    impactPoints: [
      "Architected a pipeline combining script generation, TTS, media composition, and rendering.",
      "Planned storage and publishing workflows for creators and agencies.",
      "Focused on a simple UX: 'text in, viral-ready video out'.",
    ],
    techStack: ["Next.js", "Node.js", "FFmpeg", "Cloud storage", "AI APIs"],
  },
  {
    title: "Tambola Caller – Modern Number Caller",
    role: "Design · Mobile development",
    timeframe: "2023 – 2024",
    summary:
      "A polished Tambola / Housie number caller app with smooth animations and a clean interface for events and live streams.",
    impactPoints: [
      "Built an easy-to-use interface for calling and tracking numbers.",
      "Optimized readability for big screens (TV/monitor casting).",
      "Explored monetization via ads in a lightweight, non-intrusive way.",
    ],
    techStack: ["React Native"],
  },
];


export default function PortfolioPage() {
  return (
    <SiteShell>
      <section className="mt-10">
        <SectionHeader
          eyebrow="Selected work"
          title="Portfolio & Case Studies"
          description="A snapshot of projects and products designed, built, or architected by ASK Studios."
        />

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {portfolioItems.map((item, index) => (
            <GlassCard key={item.title} delay={0.05 * index}>
              <div className="flex flex-col gap-2">
                <div>
                  <h3 className="text-sm font-semibold text-slate-50">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs text-emerald-300/90">
                    {item.role}
                  </p>
                  <p className="mt-1 text-[11px] text-slate-400">
                    {item.timeframe}
                  </p>
                </div>

                <p className="mt-2 text-sm text-slate-300/80">
                  {item.summary}
                </p>

                <div className="mt-3 space-y-1.5 text-sm text-slate-300/80">
                  {item.impactPoints.map((point) => (
                    <div key={point} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-3 flex flex-wrap gap-2 text-[11px] text-slate-300/80">
                  {item.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-slate-900/80 px-3 py-1"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
