"use client";

import { motion } from "framer-motion";
import {
  Terminal,
  Compass,
  HeartHandshake,
  CheckCircle2,
  Cpu,
  ShieldCheck,
  Zap,
  Globe2,
  Code2,
} from "lucide-react";
import Interactive3DHeading from "@/components/ui/Interactive3DHeading";

const principles = [
  {
    title: "Production-First Discipline",
    tagline: "Zero theoretical slides · Live hardware code from Week 1",
    description:
      "We don't deal in 40-page PDFs or speculative Figma comps. We write production-ready TypeScript, test on real iPhone & Android hardware, and push to TestFlight early so you see tangible velocity.",
    icon: Terminal,
    accent: "#34d399",
    metaSnippet: "git commit -m 'feat(engine): zero mockups, live build'",
  },
  {
    title: "Tactile Craft & 60fps Physics Standard",
    tagline: "Instant offline state recovery · Zero AI bloat",
    description:
      "Users immediately feel the distinction between a generic template and crafted software. We obsess over fluid gestures, sub-second SQLite queries, native haptics, and responsive typography that feels alive.",
    icon: Compass,
    accent: "#38bdf8",
    metaSnippet: "target: 60fps | latency: < 16.6ms | offline: 100%",
  },
  {
    title: "Direct Engineering Partnership",
    tagline: "Collaborate directly with senior architects who own the code",
    description:
      "Eliminating the agency middleman. You speak directly with the builders designing your architecture, database schemas, and AI pipelines—ensuring zero communication distortion and unmatched speed.",
    icon: HeartHandshake,
    accent: "#c4b5fd",
    metaSnippet: "partners: select founders | overhead: zero layers",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative scroll-mt-24 py-28">
      {/* Ambient background glow */}
      <div
        className="pointer-events-none absolute -right-40 top-1/2 -translate-y-1/2 h-[550px] w-[500px] rounded-full opacity-20"
        style={{
          background:
            "radial-gradient(circle, rgba(124,58,237,0.7) 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
        aria-hidden
      />

      {/* Header & Dossier Meta */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14 border-b border-white/[0.08] pb-8">
        <Interactive3DHeading
          badge="Studio Dossier"
          badgeTelemetry="Operating Ethos"
          badgeVariant="amber"
          leadText="Built by builders,"
          highlightText="for builders."
          variant="amber"
          description="ASK Studios is an independent engineering and product lab based in Ontario, Canada. We exist to ship software that sets the benchmark in usability, engineering rigor, and real-world commercial utility."
          size="section"
          className="max-w-2xl"
        />

        {/* Studio Location & Telemetry Badge */}
        <div className="flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.025] p-3.5 backdrop-blur-md">
          <div className="h-10 w-10 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-lg">
            🇨🇦
          </div>
          <div className="text-xs font-tech">
            <span className="text-white font-semibold block">
              Ontario, Canada HQ
            </span>
            <span className="text-zinc-500 text-[11px]">
              43.6532° N · 79.3832° W
            </span>
          </div>
        </div>
      </div>

      {/* Operating Pillars Matrix */}
      <div className="grid gap-6 lg:grid-cols-3">
        {principles.map((p, i) => {
          const Icon = p.icon;
          return (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="group relative flex flex-col justify-between rounded-3xl border border-white/[0.08] bg-white/[0.02] p-7 transition-all duration-400 hover:border-violet-500/35 hover:bg-white/[0.04] backdrop-blur-md"
            >
              {/* Card top */}
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div
                    className="flex h-11 w-11 items-center justify-center rounded-2xl"
                    style={{
                      background: `${p.accent}15`,
                      border: `1px solid ${p.accent}35`,
                    }}
                  >
                    <Icon className="h-5 w-5" style={{ color: p.accent }} />
                  </div>
                  <span className="font-mono text-xs text-zinc-600">
                    RULE 0{i + 1}
                  </span>
                </div>

                <span
                  className="font-mono text-[10px] uppercase tracking-wider block mb-1"
                  style={{ color: p.accent }}
                >
                  {p.tagline}
                </span>

                <h3 className="text-lg font-bold text-white tracking-tight">
                  {p.title}
                </h3>

                <p className="mt-3 text-xs leading-relaxed text-zinc-400">
                  {p.description}
                </p>
              </div>

              {/* Card Bottom Meta Terminal Pill */}
              <div className="mt-6 pt-4 border-t border-white/[0.06]">
                <div className="rounded-xl bg-black/50 border border-white/[0.04] px-3 py-2 font-mono text-[10px] text-zinc-400 flex items-center gap-2">
                  <Code2
                    className="h-3 w-3 shrink-0"
                    style={{ color: p.accent }}
                  />
                  <span className="truncate">{p.metaSnippet}</span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Studio Heritage & Proof Grid */}
      <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
        <div className="rounded-2xl border border-white/[0.06] bg-black/30 p-4 text-center">
          <span className="text-zinc-500 block text-[10px] uppercase mb-1">
            Ownership Model
          </span>
          <span className="text-emerald-400 font-semibold text-sm">
            100% IP Transfer
          </span>
        </div>
        <div className="rounded-2xl border border-white/[0.06] bg-black/30 p-4 text-center">
          <span className="text-zinc-500 block text-[10px] uppercase mb-1">
            App Store Record
          </span>
          <span className="text-cyan-400 font-semibold text-sm">
            Zero Rejections
          </span>
        </div>
        <div className="rounded-2xl border border-white/[0.06] bg-black/30 p-4 text-center">
          <span className="text-zinc-500 block text-[10px] uppercase mb-1">
            Sprint Velocity
          </span>
          <span className="text-violet-300 font-semibold text-sm">
            3–6 Wk Ship Cycle
          </span>
        </div>
        <div className="rounded-2xl border border-white/[0.06] bg-black/30 p-4 text-center">
          <span className="text-zinc-500 block text-[10px] uppercase mb-1">
            Global Deployments
          </span>
          <span className="text-amber-400 font-semibold text-sm">
            US · CA · India
          </span>
        </div>
      </div>
    </section>
  );
}
