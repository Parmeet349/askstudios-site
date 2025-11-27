// src/app/services/page.tsx
"use client";

import SiteShell from "@/components/layout/SiteShell";
import SectionHeader from "@/components/ui/SectionHeader";
import GlassCard from "@/components/ui/GlassCard";
import { services } from "@/components/sections/content";
import { motion } from "framer-motion";

const processSteps = [
  {
    title: "1. Discovery & alignment",
    description:
      "We start with a focused call or workshop to understand your idea, goals, constraints, and existing systems. This is where we define what success looks like—whether it’s a new app, an AI assistant, or an internal automation.",
    tag: "Understand",
  },
  {
    title: "2. Prototype & validate",
    description:
      "Next we shape a lean version of the solution: UX flows, clickable prototypes, or a working technical proof-of-concept. The goal is to validate the direction quickly before we invest in full build-out.",
    tag: "Explore",
  },
  {
    title: "3. Build, integrate & launch",
    description:
      "We then build the production-ready version, wire it into your existing tools and data, and handle deployment. After launch, we iterate based on real usage—optimizing performance, UX, and automation.",
    tag: "Ship",
  },
];

const engagementModels = [
  {
    badge: "Most popular",
    badgeColor: "from-emerald-400 to-sky-400",
    label: "MVP Build",
    title: "Fixed-scope, fixed-price projects",
    description:
      "You bring the vision, we handle the full build. Ideal when you’re ready to ship a first version of a mobile app, web app, or AI-powered product.",
    bestFor: [
      "Startups launching a v1 product",
      "Businesses digitizing a manual workflow",
      "Founders who want a clear timeline and budget",
    ],
    hint: "Perfect when you know what you want and need it built the right way.",
  },
  {
    badge: "Ongoing",
    badgeColor: "from-indigo-400 to-violet-400",
    label: "Product Partnership",
    title: "Monthly retainer for continuous development",
    description:
      "We become your product and engineering partner—shipping features, improvements, and experiments every month.",
    bestFor: [
      "Teams without a full-time in-house dev team",
      "Evolving products that need steady iteration",
      "Companies that want a trusted long-term partner",
    ],
    hint: "The smoothest way to keep shipping without hiring a full internal team.",
  },
  {
    badge: "Low commitment",
    badgeColor: "from-sky-400 to-emerald-300",
    label: "Consulting & Strategy",
    title: "High-leverage sessions before you build",
    description:
      "Tactical calls focused on architecture, feature scoping, AI/automation opportunities, or roadmap planning.",
    bestFor: [
      "Founders validating ideas before investing",
      "Teams deciding between multiple technical options",
      "Businesses exploring AI and automation use cases",
    ],
    hint: "Start small, get clarity, and only then commit to a build.",
  },
];

export default function ServicesPage() {
  return (
    <SiteShell>
      <section className="mt-10">
        {/* Services overview */}
        <SectionHeader
          eyebrow="For teams & founders"
          title="Services"
          description="ASK Studios partners with founders and teams to design, build, and ship software that actually launches—mobile apps, web platforms, AI tools, and automations."
        />

        {/* Services grid */}
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {services.map((service, index) => (
            <GlassCard key={service.title} delay={0.05 * index}>
              <h3 className="text-sm font-semibold text-slate-50">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-slate-300/80">
                {service.description}
              </p>
            </GlassCard>
          ))}
        </div>

        {/* Process section */}
        <div className="mt-16">
          <SectionHeader
            eyebrow="How we work"
            title="From idea to launch in three clear steps"
            description="Whether it’s a mobile app, SaaS platform, AI assistant, or internal automation, the process stays the same: understand, validate, then build and integrate."
          />

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {processSteps.map((step, index) => (
              <GlassCard key={step.title} delay={0.06 * index}>
                <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-300/80">
                  {step.tag}
                </div>
                <h3 className="mt-2 text-sm font-semibold text-slate-50">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm text-slate-300/80">
                  {step.description}
                </p>
              </GlassCard>
            ))}
          </div>

          <p className="mt-6 max-w-xl text-sm text-slate-300/80">
            Most projects start small: a clear problem, a scoped first version, and a timeline
            that respects reality. From there, we iterate—adding features, refining UX, and
            layering in automation or AI where it actually helps.
          </p>
        </div>

        {/* Ultra premium engagement models */}
        <div className="mt-20">
          <SectionHeader
            eyebrow="Engagement models"
            title="Choose how you want to work with ASK Studios"
            description="Different projects need different shapes. Whether you want a one-off build, an ongoing partner, or a strategy-first approach, there’s a model that fits."
          />

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {engagementModels.map((model, index) => (
              <motion.div
                key={model.label}
                initial={{ opacity: 0, y: 18, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: 0.08 * index }}
                whileHover={{ y: -6, scale: 1.01 }}
                className="group relative"
              >
                {/* Glow border */}
                <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-400/10 via-sky-500/0 to-violet-500/10 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative h-full rounded-3xl border border-slate-700/80 bg-slate-900/80 p-5 shadow-xl backdrop-blur">
                  <div className="flex items-start justify-between gap-2">
                    <span className="inline-flex items-center rounded-full bg-slate-900 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-300">
                      {model.label}
                    </span>
                    <span
                      className={`inline-flex items-center rounded-full bg-gradient-to-r ${model.badgeColor} px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-950 shadow-sm`}
                    >
                      {model.badge}
                    </span>
                  </div>

                  <h3 className="mt-4 text-sm font-semibold text-slate-50">
                    {model.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-300/80">
                    {model.description}
                  </p>

                  <div className="mt-4 space-y-1.5 text-xs text-slate-300/80">
                    {model.bestFor.map((item) => (
                      <div key={item} className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <p className="mt-4 text-[11px] text-emerald-300/90">
                    {model.hint}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA panel */}
          <motion.div
            className="mt-10 flex flex-col gap-4 rounded-2xl border border-emerald-500/30 bg-gradient-to-r from-emerald-500/10 via-slate-950 to-sky-500/10 p-5 text-sm text-slate-100 md:flex-row md:items-center md:justify-between"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200">
                Ready when you are
              </div>
              <h3 className="mt-2 text-sm font-semibold text-slate-50">
                Not sure which model fits? We’ll help you pick one.
              </h3>
              <p className="mt-2 text-xs text-slate-200/80">
                Share what you&apos;re building and where you&apos;re at—idea, early prototype, or
                existing product. We’ll recommend a starting point that respects your timeline and
                budget.
              </p>
            </div>

            <div className="flex flex-col gap-2 md:items-end">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-5 py-2 text-xs font-semibold text-slate-950 hover:bg-emerald-300"
              >
                Talk about your project
              </a>
              <a
                href="mailto:info@askstudios.net"
                className="text-[11px] text-emerald-200 hover:text-emerald-100"
              >
                Or email us directly · info@askstudios.net
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </SiteShell>
  );
}
