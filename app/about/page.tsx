import { Metadata } from "next";
import SiteShell from "@/components/layout/SiteShell";
import Interactive3DHeading from "@/components/ui/Interactive3DHeading";
import Link from "next/link";
import {
  MapPin,
  Cpu,
  Layers,
  Sparkles,
  ShieldCheck,
  Zap,
  ArrowUpRight,
  Terminal,
  Code2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About ASK Studios | Canadian Product Studio",
  description:
    "An independent product studio based in Ontario, Canada—engineering apps, automations, and practical AI systems that launch.",
  alternates: {
    canonical: "/about",
  },
};

const ethosPillars = [
  {
    icon: Zap,
    title: "Production-First Velocity",
    desc: "We prioritize shipping working code into users' hands. No endless slide decks or speculative roadmaps—we validate with real software.",
  },
  {
    icon: ShieldCheck,
    title: "Architectural Hygiene",
    desc: "Clean component boundaries, rigorous TypeScript typings, and maintainable data contracts designed to scale gracefully as products grow.",
  },
  {
    icon: Sparkles,
    title: "Kinetic UX & Micro-Interactions",
    desc: "Every touchpoint is designed with tactile responsiveness, spatial depth, and micro-animations that make digital tools feel premium and alive.",
  },
  {
    icon: Cpu,
    title: "Pragmatic AI Integration",
    desc: "We embed artificial intelligence where it creates concrete user utility and automates friction, not as superficial marketing garnish.",
  },
];

const techPillars = [
  {
    category: "Mobile Platforms",
    technologies: ["React Native", "Expo", "iOS Native Bridges", "Android SDK", "Push Notifications"],
  },
  {
    category: "Web & Frontend",
    technologies: ["Next.js App Router", "React 19", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js / WebGL"],
  },
  {
    category: "Backend & Systems",
    technologies: ["Node.js", "PostgreSQL", "MongoDB", "Redis", "REST & GraphQL", "Prisma ORM"],
  },
  {
    category: "AI & Infrastructure",
    technologies: ["OpenAI / Anthropic APIs", "Vector Databases", "Firebase Functions", "Cloudflare Workers", "Vercel Edge"],
  },
];

export default function AboutPage() {
  return (
    <SiteShell>
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Hero Header */}
        <section className="pt-6 pb-12">
          <Interactive3DHeading
            eyebrow="STUDIO DOSSIER"
            badgeTelemetry="ONTARIO · CA · 43.65°N"
            title="Engineering Ethos &"
            highlight="The Studio Story"
            variant="amber"
            description="ASK Studios is an independent product studio founded in Ontario, Canada. We partner with ambitious founders and forward-looking teams to build mobile apps, web platforms, and applied AI systems that ship and endure."
            align="center"
          />
        </section>

        {/* Narrative & Studio Coordinates */}
        <section className="mt-6 grid gap-8 lg:grid-cols-12">
          {/* Main Narrative Card */}
          <div className="lg:col-span-7 flex flex-col justify-between rounded-3xl border border-white/[0.08] bg-[#070514]/85 p-8 shadow-2xl backdrop-blur-2xl">
            <div>
              <div className="flex items-center gap-2 font-tech text-xs tracking-wider uppercase text-amber-400">
                <Terminal className="h-4 w-4" />
                <span>ORIGIN & FOCUS</span>
              </div>

              <h2 className="mt-4 font-display text-2xl font-bold text-chiseled-titanium sm:text-3xl">
                Built by engineers who ship products, not corporate bureaucracy.
              </h2>

              <div className="mt-6 space-y-4 text-sm leading-relaxed text-zinc-300/90 sm:text-base">
                <p>
                  ASK Studios was built around a singular thesis: the best products emerge when design, engineering, and rapid prototyping are tightly coupled by builders who actually ship to production.
                </p>
                <p>
                  From autonomous Canada-focused news summarizers like{" "}
                  <span className="font-semibold text-white">BrieflyCA</span> and vehicle tracking utilities like{" "}
                  <span className="font-semibold text-white">AutoLog</span>, to custom AI integrations for private companies, we don&apos;t just consult from the sidelines—we build and maintain real systems in live store environments.
                </p>
                <p>
                  We combine modern spatial design sensibilities with rock-solid full-stack architectures. Whether you are validating a brand new idea or replacing brittle legacy workflows, our code is built to deliver immediate value.
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-white/[0.06] pt-6 font-tech text-xs text-zinc-400">
              <span className="inline-flex items-center gap-1.5 text-emerald-400">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                Active Studio Operations
              </span>
              <span>•</span>
              <span>Production Code Guaranteed</span>
              <span>•</span>
              <span>Zero Outsourcing</span>
            </div>
          </div>

          {/* Coordinates & Telemetry Box */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="rounded-3xl border border-amber-500/25 bg-gradient-to-b from-amber-500/10 via-[#070514]/90 to-[#070514]/90 p-8 shadow-2xl backdrop-blur-2xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 font-tech text-xs tracking-wider uppercase text-amber-300">
                  <MapPin className="h-4 w-4 text-amber-400" />
                  <span>HQ LOCATION</span>
                </div>
                <span className="rounded-full border border-amber-400/20 bg-amber-400/10 px-2.5 py-0.5 font-tech text-[10px] uppercase text-amber-300">
                  UTC-5 / EST
                </span>
              </div>

              <div className="mt-5">
                <div className="font-display text-2xl font-bold text-white">
                  Ontario, Canada
                </div>
                <div className="mt-1 font-tech text-xs text-zinc-400">
                  43.6532° N, 79.3832° W · North American Tech Corridor
                </div>
              </div>

              <div className="mt-6 space-y-3 border-t border-white/[0.08] pt-5 font-tech text-xs">
                <div className="flex justify-between py-1">
                  <span className="text-zinc-500">Principal Engineer</span>
                  <span className="font-medium text-zinc-200">Parmeet Singh Banga</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-zinc-500">Core Modality</span>
                  <span className="font-medium text-zinc-200">Mobile, Web & Applied AI</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-zinc-500">Response SLA</span>
                  <span className="font-medium text-emerald-300">&lt; 24 Business Hours</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-zinc-500">Direct Comms</span>
                  <a
                    href="mailto:info@askstudios.net"
                    className="font-medium text-amber-300 hover:underline"
                  >
                    info@askstudios.net
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-white/[0.08] bg-[#070514]/85 p-6 shadow-xl backdrop-blur-2xl">
              <div className="font-tech text-xs uppercase tracking-wider text-zinc-400">
                Studio Capabilities
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {["iOS & Android", "Full-Stack Web", "LLM Fine-Tuning & RAG", "Cloud API Automation", "Custom Dashboards", "Design Systems"].map((cap) => (
                  <span
                    key={cap}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-tech text-[11px] text-zinc-300"
                  >
                    {cap}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 4 Pillars of Ethos */}
        <section className="mt-28">
          <div className="flex items-center justify-between pb-6 border-b border-white/[0.06]">
            <div>
              <span className="font-tech text-xs tracking-[0.2em] uppercase text-amber-400">
                OPERATIONAL STANDARDS
              </span>
              <h2 className="mt-1 font-display text-2xl font-bold text-chiseled-titanium sm:text-3xl">
                What Guides Every Line of Code
              </h2>
            </div>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {ethosPillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#070514]/85 p-6 shadow-xl backdrop-blur-xl transition-all duration-300 hover:border-amber-500/30 hover:bg-[#0c091f]"
                >
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-400/20 to-transparent" />
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-amber-500/20 bg-amber-500/10 text-amber-400 transition-colors group-hover:bg-amber-500/20">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-display text-base font-bold text-white">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-zinc-400">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Modern Technical Stack Architecture Matrix */}
        <section className="mt-28">
          <div className="flex items-center justify-between pb-6 border-b border-white/[0.06]">
            <div>
              <span className="font-tech text-xs tracking-[0.2em] uppercase text-cyan-400">
                TECHNOLOGY MATRIX
              </span>
              <h2 className="mt-1 font-display text-2xl font-bold text-chiseled-titanium sm:text-3xl">
                Production-Tested Tools & Stacks
              </h2>
            </div>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {techPillars.map((pillar) => (
              <div
                key={pillar.category}
                className="rounded-2xl border border-white/[0.08] bg-[#070514]/85 p-6 shadow-xl backdrop-blur-xl"
              >
                <div className="flex items-center gap-2 font-tech text-xs font-semibold uppercase tracking-wider text-zinc-300">
                  <Code2 className="h-4 w-4 text-cyan-400" />
                  <span>{pillar.category}</span>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {pillar.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 font-tech text-xs text-zinc-300 transition-colors hover:border-cyan-500/30 hover:text-cyan-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA Card */}
        <section className="mt-24">
          <div className="relative overflow-hidden rounded-3xl border border-amber-500/30 bg-gradient-to-r from-amber-950/40 via-[#070514]/90 to-violet-950/40 p-8 shadow-2xl backdrop-blur-2xl md:p-10">
            <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <span className="font-tech text-xs uppercase tracking-wider text-amber-400">
                  GET IN TOUCH
                </span>
                <h3 className="mt-2 font-display text-2xl font-bold text-white sm:text-3xl">
                  Have an application or system to engineer?
                </h3>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-zinc-400">
                  Reach out with your goals and specs. We&apos;ll schedule an introductory architecture session and deliver an actionable technical proposal.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row shrink-0">
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-6 py-3 text-xs font-semibold text-black shadow-lg shadow-amber-500/25 transition-all hover:from-amber-400 hover:to-orange-400 active:scale-95"
                >
                  <span>Start a Project</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-xs font-medium text-zinc-300 hover:bg-white/[0.08] transition-colors"
                >
                  View Services
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </SiteShell>
  );
}
