"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Smartphone,
  ShieldCheck,
  Zap,
} from "lucide-react";

// Dynamically import Three.js background canvas to avoid SSR issues
const HeroOrbBg = dynamic(() => import("@/components/ui/HeroOrbBg"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-48 h-48 rounded-full border border-violet-500/20 animate-pulse bg-violet-950/20" />
    </div>
  ),
});

const proofStats = [
  {
    code: "01",
    value: "6+",
    title: "Shipped Products",
    desc: "Live across iOS, Android & Web",
    icon: Smartphone,
    color: "#c4b5fd",
  },
  {
    code: "02",
    value: "100%",
    title: "Store Approval",
    desc: "Apple & Google Play compliance",
    icon: ShieldCheck,
    color: "#34d399",
  },
  {
    code: "03",
    value: "<60s",
    title: "AI Pipeline Latency",
    desc: "Autonomous ingestion to summary",
    icon: Zap,
    color: "#38bdf8",
  },
  {
    code: "04",
    value: "2+",
    title: "Years in Production",
    desc: "Ontario studio shipping worldwide",
    icon: Sparkles,
    color: "#fbbf24",
  },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] lg:min-h-screen w-full flex flex-col justify-between pt-16 lg:pt-20 pb-6 overflow-hidden">
      {/* --- Fullscreen Three.js 3D Background Canvas --- */}
      <div className="absolute inset-0 z-0">
        <HeroOrbBg />

        {/* Ambient radial vignette for text contrast and seamless blending */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 75% 45%, rgba(4,4,12,0.15) 0%, rgba(4,4,12,0.65) 55%, rgba(4,4,12,0.95) 100%)",
          }}
        />

        {/* Left-side subtle shadow curtain to guarantee typography readability */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-full lg:w-3/5"
          style={{
            background:
              "linear-gradient(to right, rgba(4,4,12,0.92) 0%, rgba(4,4,12,0.75) 50%, rgba(4,4,12,0) 100%)",
          }}
        />

        {/* Bottom smooth fade into next section */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-44"
          style={{
            background:
              "linear-gradient(to top, #04040c 15%, rgba(4,4,12,0.6) 65%, transparent 100%)",
          }}
        />
      </div>

      {/* --- Main Content Layer --- */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 lg:pt-4 flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-8 xl:col-span-8 flex flex-col items-start">
            {/* Eyebrow Status Capsule */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex flex-wrap items-center gap-2.5 rounded-full border border-violet-500/30 bg-violet-950/40 px-4 py-1.5 text-xs font-tech tracking-wide text-violet-300 backdrop-blur-md shadow-lg shadow-violet-950/40"
              style={{
                boxShadow:
                  "0 4px 20px -2px rgba(124, 58, 237, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.15)",
              }}
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span className="font-semibold text-white tracking-wider">
                INDEPENDENT PRODUCT LAB
              </span>
              <span className="text-violet-500/50">/</span>
              <span className="text-zinc-300">ONTARIO, CANADA</span>
              <span className="text-violet-500/50 hidden sm:inline">/</span>
              <span className="text-emerald-300 font-mono hidden sm:inline">
                Q2/Q3 AVAILABLE
              </span>
            </motion.div>

            {/* Cinematic Sculptural 3D Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.12 }}
              className="mt-6 font-display font-extrabold tracking-[-0.035em] leading-[1.04]"
              style={{
                fontSize: "clamp(2.4rem, 4.4vw, 4.6rem)",
              }}
            >
              <span className="text-chiseled-titanium block sm:inline">
                Architecting digital flagships,
              </span>{" "}
              <br className="hidden sm:inline" />
              <span className="relative inline-block my-1 sm:my-0 group cursor-default">
                <span className="text-prismatic-chrome font-black">
                  intelligent AI engines
                </span>
                {/* Refractive ambient back-glow behind the highlight phrase */}
                <span
                  className="pointer-events-none absolute -inset-3 -z-10 rounded-2xl opacity-40 blur-2xl transition-opacity duration-500 group-hover:opacity-75"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(56,189,248,0.4) 0%, rgba(192,132,252,0.3) 50%, transparent 80%)",
                  }}
                />
              </span>{" "}
              <br className="hidden sm:inline" />
              <span className="text-chiseled-titanium block sm:inline">
                & category-defining apps.
              </span>
            </motion.h1>

            {/* Narrative Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-5 max-w-2xl text-base sm:text-lg leading-relaxed text-zinc-400 font-normal"
            >
              ASK Studios is an independent engineering lab based in Ontario,
              Canada. We build production-grade mobile ecosystems, autonomous AI
              pipelines, and resilient digital infrastructure—operating our own
              software fleet and partnering with ambitious teams worldwide.
            </motion.p>

            {/* CTAs & Micro-interaction Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.38 }}
              className="mt-6 flex flex-wrap items-center gap-3.5"
            >
              <Link
                href="#products"
                className="group inline-flex items-center gap-2.5 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black shadow-xl shadow-white/10 transition-all duration-300 hover:bg-violet-200 hover:shadow-violet-400/30 hover:scale-105"
              >
                <span>Explore Products</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="#contact"
                className="group inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/[0.04] px-6 py-3 text-sm font-medium text-white backdrop-blur-md transition-all duration-300 hover:border-violet-400/50 hover:bg-violet-500/15 hover:shadow-lg hover:shadow-violet-500/20"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="h-4 w-4 opacity-70 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              {/* 3D Interactivity Hint */}
              <div className="hidden sm:inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-black/40 px-3.5 py-2 text-[11px] font-mono text-zinc-400 backdrop-blur-md">
                <span className="text-violet-400 animate-pulse">✦</span>
                <span>Drag 3D core in background to rotate</span>
              </div>
            </motion.div>

            {/* Tech Badges Row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-6 flex flex-wrap items-center gap-2 text-[11px] font-mono text-zinc-400"
            >
              <span className="text-zinc-400 uppercase tracking-widest text-[10px]">
                Stack:
              </span>
              {[
                "React Native",
                "Next.js",
                "Three.js",
                "OpenAI",
                "TypeScript",
                "Expo",
                "PostgreSQL",
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-white/[0.06] bg-white/[0.025] px-2 py-0.5 text-zinc-300"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Floating Telemetry HUD Cards (Visible on lg+) */}
          <div className="hidden lg:col-span-4 xl:col-span-4 lg:flex flex-col gap-4 items-end pointer-events-none">
            {/* Card 1: Live Fleet Flagship */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="pointer-events-auto w-72 rounded-2xl border border-white/10 bg-[#06040f]/75 p-4 shadow-2xl backdrop-blur-xl hover:border-violet-500/30 transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
                  Live in Stores
                </span>
                <span className="text-[10px] font-mono text-zinc-400">
                  iOS · Android
                </span>
              </div>
              <p className="mt-2 text-sm font-semibold text-white">
                BrieflyCA News App
              </p>
              <p className="mt-1 text-xs text-zinc-400 leading-snug">
                Canada-first AI news platform with sub-60s autonomous ETL
                pipeline.
              </p>
              <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-violet-300 border-t border-white/[0.06] pt-2">
                <span>4.9★ Rating</span>
                <Link
                  href="#products"
                  className="inline-flex items-center gap-1 hover:text-white transition-colors"
                >
                  Inspect <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </motion.div>

            {/* Card 2: Engineering Telemetry */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="pointer-events-auto w-72 rounded-2xl border border-white/10 bg-[#06040f]/75 p-4 shadow-2xl backdrop-blur-xl hover:border-cyan-500/30 transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400">
                  Telemetry
                </span>
                <span className="text-[10px] font-mono text-zinc-400">
                  All Systems Nominal
                </span>
              </div>
              <div className="mt-2.5 space-y-2 text-xs font-mono">
                <div className="flex justify-between text-zinc-400">
                  <span>Architecture</span>
                  <span className="text-zinc-200">Offline-First + Edge</span>
                </div>
                <div className="flex justify-between text-zinc-400">
                  <span>AI Latency</span>
                  <span className="text-emerald-300 font-semibold">
                    &lt; 60ms Streaming
                  </span>
                </div>
                <div className="flex justify-between text-zinc-400">
                  <span>Store Rejections</span>
                  <span className="text-white font-semibold">0 (Zero)</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* --- Bottom Hero Telemetry / Proof Points Strip --- */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 mb-2"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {proofStats.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.code}
                className="group relative rounded-2xl border border-white/[0.08] bg-white/[0.025] p-4.5 backdrop-blur-md transition-all duration-300 hover:border-violet-500/30 hover:bg-white/[0.045]"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] text-zinc-400">
                    {item.code}
                  </span>
                  <Icon
                    className="h-4 w-4 opacity-50 transition-opacity group-hover:opacity-100"
                    style={{ color: item.color }}
                  />
                </div>
                <div className="mt-2">
                  <span
                    className="font-mono text-2xl sm:text-3xl font-extrabold tracking-tight"
                    style={{ color: item.color }}
                  >
                    {item.value}
                  </span>
                </div>
                <p className="mt-1 text-xs font-semibold text-white">
                  {item.title}
                </p>
                <p className="mt-0.5 text-[11px] text-zinc-400 leading-tight">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
