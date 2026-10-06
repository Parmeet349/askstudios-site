// src/app/services/page.tsx
"use client";

import SiteShell from "@/components/layout/SiteShell";
import Interactive3DHeading from "@/components/ui/Interactive3DHeading";
import SectionHeader from "@/components/ui/SectionHeader";
import { services } from "@/components/sections/content";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Code2,
  Cpu,
  LayoutDashboard,
  Layers,
  Database,
  Compass,
  CheckCircle2,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

const serviceIcons = [Code2, Cpu, LayoutDashboard, Layers, Database, Compass];

const processSteps = [
  {
    step: "01",
    tag: "Understand",
    title: "Discovery & Alignment",
    description:
      "We unpack your vision, target users, technical constraints, and data infrastructure. We define explicit milestones and technical deliverables before writing a single line of production code.",
    deliverables: ["Product Specification", "Technical Architecture", "Milestone Roadmap"],
  },
  {
    step: "02",
    tag: "Validate",
    title: "Prototype & Architecture Proof",
    description:
      "We engineer a high-fidelity interactive prototype or targeted technical proof-of-concept. Real user flows and AI performance parameters are verified before scaling the full codebase.",
    deliverables: ["Interactive Flow / POC", "Design Token System", "API Schema Specs"],
  },
  {
    step: "03",
    tag: "Ship",
    title: "Production Build & Launch",
    description:
      "We build resilient, production-ready applications with test suites, CI/CD automation, and cloud deployments. We monitor telemetry and iterate based on real user behavior.",
    deliverables: ["Production Deployment", "Full Source Repository", "Post-Launch Monitoring"],
  },
];

const engagementModels = [
  {
    badge: "Most Popular",
    badgeColor: "border-emerald-500/30 bg-emerald-500/10 text-emerald-300",
    label: "Fixed Scope",
    title: "MVP Sprint & Launch",
    priceHint: "Fixed-budget milestone delivery",
    description:
      "You bring the vision, we engineer and ship the complete v1 release. Ideal for founders launching a mobile app, web platform, or AI-powered product.",
    bestFor: [
      "Founders launching a verified v1 product",
      "Businesses replacing manual operations with custom software",
      "Teams needing predictable budgets and hard deadlines",
    ],
    hint: "Guaranteed deliverable with weekly staging demos.",
    cta: "Book MVP Discovery",
    popular: true,
  },
  {
    badge: "Dedicated Partner",
    badgeColor: "border-violet-500/30 bg-violet-500/10 text-violet-300",
    label: "Continuous Dev",
    title: "Product Partnership",
    priceHint: "Monthly engineering retainer",
    description:
      "We function as your dedicated engineering and product strike team—shipping features, architectural refactors, and performance iterations every sprint.",
    bestFor: [
      "Startups needing senior engineering without hiring overhead",
      "Scaling apps with continuous feature backlogs",
      "Long-term systems requiring dedicated technical stewardship",
    ],
    hint: "Direct Slack channel, bi-weekly sprints, ongoing SLA.",
    cta: "Inquire About Partnership",
    popular: false,
  },
  {
    badge: "High Leverage",
    badgeColor: "border-sky-500/30 bg-sky-500/10 text-sky-300",
    label: "Strategic Audit",
    title: "Technical Advisory & Scoping",
    priceHint: "Intensive architecture sessions",
    description:
      "Tactical architecture blueprints, technical feasibility audits, and AI integration strategies before you commit engineering capital.",
    bestFor: [
      "Founders validating feasibility before fundraising",
      "Teams deciding between mobile, web, and LLM stacks",
      "Organizations evaluating internal automation pipelines",
    ],
    hint: "Actionable technical architecture document delivered in 5 days.",
    cta: "Schedule Advisory Session",
    popular: false,
  },
];

export default function ServicesPage() {
  return (
    <SiteShell>
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="pt-6 pb-12">
          <Interactive3DHeading
            eyebrow="CAPABILITIES & ENGAGEMENT"
            badgeTelemetry="SYS · 02-SVC"
            title="Modular Engineering &"
            highlight="Modern Product Delivery"
            variant="violet"
            description="ASK Studios partners with founders, high-velocity startups, and agile teams to architect and ship software that performs—from cross-platform mobile apps to autonomous AI pipelines and robust cloud infrastructure."
            align="center"
          />
        </section>

        {/* Services Grid */}
        <section className="mt-8">
          <div className="flex items-center justify-between pb-6 border-b border-white/[0.06]">
            <div>
              <span className="font-tech text-xs tracking-[0.2em] uppercase text-violet-400">
                CORE DISCIPLINES
              </span>
              <h2 className="mt-1 font-display text-2xl font-bold text-chiseled-titanium sm:text-3xl">
                What We Build & Deliver
              </h2>
            </div>
            <span className="hidden font-tech text-xs text-zinc-500 sm:block">
              06 ACTIVE SPECIALIZATIONS
            </span>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = serviceIcons[index % serviceIcons.length];
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: 0.05 * index }}
                  whileHover={{ y: -5, scale: 1.01 }}
                  className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#070514]/85 p-6 shadow-xl shadow-black/60 backdrop-blur-xl transition-all duration-300 hover:border-violet-500/35 hover:bg-[#0b081e]/90"
                >
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-400/20 to-transparent" />
                  
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-violet-500/20 bg-violet-500/10 text-violet-300 transition-colors duration-300 group-hover:border-violet-400/40 group-hover:bg-violet-500/20">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="font-tech text-[11px] text-zinc-500 group-hover:text-zinc-400">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-5 font-display text-lg font-bold text-white transition-colors duration-200 group-hover:text-violet-200">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Process Section */}
        <section className="mt-28">
          <SectionHeader
            eyebrow="EXECUTION PROTOCOL"
            telemetryCode="3-STAGE PIPELINE"
            title="From Concept to Deployment in Three Precise Cycles"
            description="Whether architecting a mobile utility or an autonomous AI integration, our production workflow is engineered to eliminate ambiguity and ship real software fast."
            gradientVariant="violet"
          />

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: 0.08 * index }}
                whileHover={{ y: -4 }}
                className="relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/[0.08] bg-[#070514]/85 p-6 shadow-xl shadow-black/50 backdrop-blur-xl transition-all duration-300 hover:border-violet-500/30"
              >
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-tech text-2xl font-bold text-violet-400/80">
                      {step.step}
                    </span>
                    <span className="rounded-full border border-violet-500/20 bg-violet-500/5 px-2.5 py-0.5 font-tech text-[10px] uppercase tracking-wider text-violet-300">
                      {step.tag}
                    </span>
                  </div>

                  <h3 className="mt-4 font-display text-lg font-bold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 border-t border-white/[0.06] pt-4">
                  <span className="font-tech text-[10px] uppercase tracking-wider text-zinc-500">
                    Key Outputs
                  </span>
                  <div className="mt-2 space-y-1.5">
                    {step.deliverables.map((d) => (
                      <div key={d} className="flex items-center gap-2 text-xs text-zinc-300">
                        <CheckCircle2 className="h-3.5 w-3.5 text-violet-400 shrink-0" />
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Engagement Models */}
        <section className="mt-28">
          <SectionHeader
            eyebrow="FLEXIBLE COLLABORATION"
            telemetryCode="CHOOSE FORMAT"
            title="Transparent Engagement Models"
            description="Different products require different structures. Whether you need a full v1 MVP built from scratch, an ongoing senior engineering partner, or tactical architecture advisory."
            gradientVariant="emerald"
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {engagementModels.map((model, index) => (
              <motion.div
                key={model.label}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: 0.08 * index }}
                whileHover={{ y: -6 }}
                className={`relative flex flex-col justify-between overflow-hidden rounded-2xl border p-7 shadow-2xl backdrop-blur-2xl transition-all duration-300 ${
                  model.popular
                    ? "border-emerald-500/40 bg-[#070918]/90 shadow-emerald-950/20"
                    : "border-white/[0.08] bg-[#070514]/85 shadow-black/60"
                }`}
              >
                {/* Popular ambient glow */}
                {model.popular && (
                  <div className="pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full bg-emerald-500/15 blur-3xl" />
                )}

                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-tech text-[11px] uppercase tracking-wider text-zinc-400">
                      {model.label}
                    </span>
                    <span
                      className={`rounded-full border px-2.5 py-0.5 font-tech text-[10px] font-semibold uppercase tracking-wider ${model.badgeColor}`}
                    >
                      {model.badge}
                    </span>
                  </div>

                  <h3 className="mt-4 font-display text-xl font-bold text-white">
                    {model.title}
                  </h3>
                  <div className="mt-1 font-tech text-xs text-zinc-400">
                    {model.priceHint}
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-zinc-400">
                    {model.description}
                  </p>

                  <div className="mt-6 space-y-2 border-t border-white/[0.06] pt-5">
                    <div className="font-tech text-[10px] uppercase tracking-wider text-zinc-500">
                      Ideal Scenario
                    </div>
                    {model.bestFor.map((item) => (
                      <div key={item} className="flex items-start gap-2 text-xs text-zinc-300">
                        <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 text-emerald-400 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-5 border-t border-white/[0.06]">
                  <p className="font-tech text-[11px] text-zinc-400 italic">
                    &ldquo;{model.hint}&rdquo;
                  </p>
                  <Link
                    href="/#contact"
                    className={`mt-4 flex w-full items-center justify-center gap-2 rounded-xl py-2.5 text-xs font-semibold transition-all ${
                      model.popular
                        ? "bg-gradient-to-r from-emerald-400 to-teal-400 text-black shadow-lg shadow-emerald-500/25 hover:from-emerald-300 hover:to-teal-300"
                        : "border border-white/10 bg-white/[0.04] text-white hover:bg-white/[0.08]"
                    }`}
                  >
                    <span>{model.cta}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom High-Craft CTA Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="mt-14 relative overflow-hidden rounded-3xl border border-violet-500/25 bg-gradient-to-r from-violet-950/40 via-[#070514]/90 to-emerald-950/40 p-8 shadow-2xl backdrop-blur-2xl"
          >
            <div className="pointer-events-none absolute -left-20 -top-20 h-52 w-52 rounded-full bg-violet-600/20 blur-3xl" />
            <div className="pointer-events-none absolute -right-20 -bottom-20 h-52 w-52 rounded-full bg-emerald-500/20 blur-3xl" />

            <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/10 px-3 py-0.5 font-tech text-[11px] uppercase tracking-wider text-violet-300">
                  <Sparkles className="h-3 w-3" />
                  <span>START THE CONVERSATION</span>
                </div>
                <h3 className="mt-3 font-display text-2xl font-bold text-white sm:text-3xl">
                  Not sure which model fits? Let&apos;s scope it together.
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  Tell us where you are—early idea, technical architecture review, or existing code in production. We&apos;ll advise a timeline and execution roadmap that respects your runway.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row shrink-0">
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 px-6 py-3 text-xs font-semibold text-white shadow-lg shadow-violet-500/30 transition-all hover:from-violet-500 hover:to-indigo-500 active:scale-95"
                >
                  <span>Talk About Your Project</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
                <a
                  href="mailto:info@askstudios.net"
                  className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-xs font-medium text-zinc-300 hover:bg-white/[0.08] hover:text-white transition-colors"
                >
                  info@askstudios.net
                </a>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </SiteShell>
  );
}
