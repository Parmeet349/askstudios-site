import { Metadata } from "next";
import SiteShell from "@/components/layout/SiteShell";
import Interactive3DHeading from "@/components/ui/Interactive3DHeading";
import Link from "next/link";
import {
  ExternalLink,
  CheckCircle2,
  Calendar,
  Layers,
  ArrowUpRight,
  Code2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Portfolio & Case Studies | ASK Studios",
  description:
    "Selected software systems, mobile applications, and AI platforms architected and launched by ASK Studios.",
  alternates: {
    canonical: "/portfolio",
  },
};

const portfolioItems = [
  {
    title: "ASK Studios AI Assistant",
    category: "AI Engineering & Realtime Web",
    role: "AI Architecture · Edge Backend · Kinetic UX",
    timeframe: "2025",
    summary:
      "A site-wide autonomous AI concierge embedded into the ASK Studios platform. Built with edge API route runtimes and LLM model reasoning to answer product specs and qualify incoming client briefs.",
    impactPoints: [
      "Engineered floating responsive chat console with custom spring-physics animations and instant token streaming.",
      "Custom Edge backend with prompt-engineered system directives grounded in studio capabilities.",
      "Serves as a live showcase demonstrating real-world conversational AI integrations for enterprise clients.",
    ],
    techStack: ["Next.js App Router", "React 19", "Framer Motion", "LLM APIs", "TypeScript", "Tailwind CSS"],
    status: "Live in Production",
  },
  {
    title: "AutoLog – Smart Vehicle Logbook",
    category: "Consumer Mobile & Fleet Utility",
    role: "End-to-End Mobile Dev · Node.js Backend · UX",
    timeframe: "2024 – Ongoing",
    summary:
      "A mobile-first vehicle logbook and fuel tracking ecosystem, built to automate tax-compliant mileage logs, maintenance schedules, and ownership analytics for daily drivers.",
    impactPoints: [
      "Architected cross-platform React Native codebase with offline-first SQLite synchronization.",
      "Designed high-contrast dark dashboard for rapid one-thumb receipt and odometer entry.",
      "Engineered backend API on Node.js and PostgreSQL with analytics pipelines and exportable IRS/CRA tax reports.",
    ],
    techStack: ["React Native", "Node.js", "PostgreSQL", "REST APIs", "Expo", "Analytics"],
    status: "Live on iOS & Android",
  },
  {
    title: "Intervue.AI – AI Interview Practice",
    category: "AI SaaS & EdTech",
    role: "Full-Stack Architecture · AI Pipelines · Product",
    timeframe: "2024 – In Development",
    summary:
      "An automated interview simulator featuring conversational AI avatars, behavioral analysis, and instant scoring rubrics for tech candidates and hiring bootcamps.",
    impactPoints: [
      "Defined decoupled architecture connecting Next.js frontend with low-latency LLM evaluation pipelines.",
      "Designed telemetry dashboard tracking pacing, filler words, and technical depth across simulated questions.",
      "Engineered multi-tenant organization support for enterprise training cohorts.",
    ],
    techStack: ["Next.js", "React", "PostgreSQL", "AI Voice APIs", "Tailwind CSS", "Prisma"],
    status: "Private Beta",
  },
  {
    title: "DripReel – Short-Form Video Automation",
    category: "Media Tech & Content Automation",
    role: "System Architecture · FFmpeg Pipeline · Cloud",
    timeframe: "2024 – In Development",
    summary:
      "An automated video generation engine that transforms long-form transcripts into viral vertical reels for YouTube Shorts, TikTok, and Instagram with automated dynamic subtitles.",
    impactPoints: [
      "Architected asynchronous headless rendering worker pipeline utilizing FFmpeg and GPU cloud workers.",
      "Automated audio waveform transcription and word-by-word kinetic typography positioning.",
      "Engineered zero-friction UX: drop script or audio file, receive rendered vertical video package in 60s.",
    ],
    techStack: ["Next.js", "Node.js", "FFmpeg", "Cloud Storage", "ElevenLabs API", "Python Workers"],
    status: "Alpha Prototype",
  },
  {
    title: "Tambola Caller – Modern Event Companion",
    category: "Interactive Mobile Utility",
    role: "Mobile UI/UX · React Native Development",
    timeframe: "2023 – 2024",
    summary:
      "A slick, modern number-calling companion for Tambola / Housie events, designed for fluid high-framerate number animations and external TV display mirroring.",
    impactPoints: [
      "Engineered lightweight RNG calling logic with voice synthesizer callouts in multiple languages.",
      "Responsive big-screen layout optimized for HDMI and AirPlay casting to venue televisions.",
      "Over 10,000+ family game nights and community events powered with zero crash reports.",
    ],
    techStack: ["React Native", "Expo", "TTS Synthesizer", "Mobile State Engine"],
    status: "Live on App Stores",
  },
];

export default function PortfolioPage() {
  return (
    <SiteShell>
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="pt-6 pb-12">
          <Interactive3DHeading
            eyebrow="SELECTED CASE STUDIES"
            badgeTelemetry="SHIPPED WORK · 05 BUILDS"
            title="Engineering Portfolio &"
            highlight="Production Deliveries"
            variant="cyan"
            description="Explore our track record of shipping production software—from high-velocity consumer mobile apps and automated AI media pipelines to custom edge web applications."
            align="center"
          />
        </section>

        {/* Portfolio Cards Grid */}
        <section className="mt-6 space-y-8">
          {portfolioItems.map((item, index) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-[#070514]/85 p-8 shadow-2xl backdrop-blur-2xl transition-all duration-300 hover:border-cyan-500/35 hover:bg-[#0b081e]/90 sm:p-10"
            >
              {/* Specular border accent */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/25 to-transparent" />

              <div className="grid gap-8 lg:grid-cols-12">
                {/* Left Overview Column */}
                <div className="lg:col-span-5 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-0.5 font-tech text-[10px] uppercase tracking-wider text-cyan-300">
                        {item.category}
                      </span>
                      <span className="font-tech text-xs text-zinc-500">
                        {item.timeframe}
                      </span>
                    </div>

                    <h2 className="mt-4 font-display text-2xl font-bold text-white sm:text-3xl">
                      {item.title}
                    </h2>

                    <div className="mt-2 font-tech text-xs text-violet-300">
                      {item.role}
                    </div>

                    <p className="mt-4 text-sm leading-relaxed text-zinc-400">
                      {item.summary}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between font-tech text-xs">
                    <span className="inline-flex items-center gap-1.5 text-emerald-400">
                      <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                      {item.status}
                    </span>
                    <span className="text-zinc-500">CASE #0{index + 1}</span>
                  </div>
                </div>

                {/* Right Impact & Tech Column */}
                <div className="lg:col-span-7 flex flex-col justify-between border-t border-white/[0.06] pt-6 lg:border-t-0 lg:border-l lg:border-white/[0.08] lg:pl-8 lg:pt-0">
                  <div>
                    <span className="font-tech text-xs uppercase tracking-wider text-zinc-400">
                      Engineering Impact & Highlights
                    </span>
                    <div className="mt-4 space-y-3">
                      {item.impactPoints.map((point) => (
                        <div key={point} className="flex items-start gap-3">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />
                          <span className="text-sm leading-relaxed text-zinc-300">
                            {point}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 border-t border-white/[0.06] pt-5">
                    <span className="font-tech text-[11px] uppercase tracking-wider text-zinc-500">
                      Technologies & Stack
                    </span>
                    <div className="mt-2.5 flex flex-wrap gap-2">
                      {item.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-1 font-tech text-xs text-zinc-300 transition-colors group-hover:border-cyan-500/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Bottom CTA Card */}
        <section className="mt-24">
          <div className="relative overflow-hidden rounded-3xl border border-cyan-500/30 bg-gradient-to-r from-cyan-950/40 via-[#070514]/90 to-violet-950/40 p-8 shadow-2xl backdrop-blur-2xl md:p-10">
            <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <span className="font-tech text-xs uppercase tracking-wider text-cyan-400">
                  BUILD YOUR SYSTEM
                </span>
                <h3 className="mt-2 font-display text-2xl font-bold text-white sm:text-3xl">
                  Ready to add your project to this list?
                </h3>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-zinc-400">
                  Let&apos;s build an MVP or production platform with high-velocity engineering, clean architecture, and modern UX design.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row shrink-0">
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-teal-400 px-6 py-3 text-xs font-semibold text-black shadow-lg shadow-cyan-500/25 transition-all hover:from-cyan-300 hover:to-teal-300 active:scale-95"
                >
                  <span>Start Your Project</span>
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
