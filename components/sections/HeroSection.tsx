// src/components/sections/HeroSection.tsx
"use client";

import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

export default function HeroSection() {
  return (
    <section className="mt-10 grid gap-12 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] md:items-center">
      {/* Left text */}
      {/* <motion.div variants={container} initial="hidden" animate="show"> */}
      <motion.div variants={item} initial="hidden" animate="show">
        <motion.div
          variants={item}
          className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/5 px-3 py-1 text-xs text-emerald-200"
        >
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          Building next-gen apps & AI solutions
        </motion.div>

        <motion.h1
          variants={item}
          className="mt-6 text-balance text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl lg:text-6xl"
        >
          Apps, automation, and AI
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-sky-300 to-emerald-300">
            crafted by ASK Studios.
          </span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-5 max-w-xl text-sm leading-relaxed text-slate-300/80 sm:text-base"
        >
          ASK Studios designs, builds, and ships product-grade experiences—from mobile apps and
          AI tools to automation systems that keep your workflows running on autopilot.
        </motion.p>

        <motion.div variants={item} className="mt-6 flex flex-wrap gap-3">
          <a
            href="#products"
            className="rounded-full bg-slate-50 px-5 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/20 hover:bg-emerald-200"
          >
            Explore products
          </a>
          <a
            href="#services"
            className="rounded-full border border-slate-500/50 bg-white/5 px-5 py-2 text-sm font-medium text-slate-100 hover:border-emerald-400 hover:bg-emerald-400/10"
          >
            View services
          </a>
        </motion.div>
      </motion.div>

      {/* Right visual */}
      <motion.div
        className="relative"
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="pointer-events-none absolute -inset-6 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_60%)] blur-2xl" />
        <div className="relative rounded-3xl border border-slate-700/80 bg-slate-900/70 p-5 shadow-2xl backdrop-blur">
          <div className="mb-3 flex items-center justify-between text-xs text-slate-400">
            <span>ASK Studios · Product stack</span>
            <span className="rounded-full bg-slate-800/80 px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-slate-300">
              Live · Beta · Upcoming
            </span>
          </div>
          <div className="grid gap-3 text-xs">
            {[
              {
                name: "AutoLog",
                subtitle: "Vehicle & fuel automation",
                badge: "Live",
                badgeColor: "bg-emerald-500/10 text-emerald-300",
              },
              {
                name: "Intervue.AI",
                subtitle: "AI interview practice",
                badge: "In beta",
                badgeColor: "bg-sky-500/10 text-sky-300",
              },
              {
                name: "DripReel",
                subtitle: "Short-form automation",
                badge: "Coming soon",
                badgeColor: "bg-indigo-500/10 text-indigo-300",
              },
            ].map((app, index) => (
              <motion.div
                key={app.name}
                className="flex items-center justify-between rounded-2xl bg-slate-800/60 px-4 py-3"
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.25 + index * 0.08 }}
              >
                <div>
                  <div className="font-medium text-slate-50">{app.name}</div>
                  <div className="text-slate-400">{app.subtitle}</div>
                </div>
                <span className={`rounded-full px-3 py-1 ${app.badgeColor}`}>
                  {app.badge}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
