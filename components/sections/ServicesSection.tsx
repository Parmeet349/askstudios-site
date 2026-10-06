"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Smartphone,
  Cpu,
  Globe,
  Workflow,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  Terminal,
  Activity,
  Zap,
  Code2,
} from "lucide-react";
import Interactive3DHeading from "@/components/ui/Interactive3DHeading";

interface Capability {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  icon: typeof Smartphone;
  accent: string;
  accentBg: string;
  accentBorder: string;
  highlights: string[];
  deliverables: string[];
  specs: { label: string; value: string }[];
  blueprint: {
    title: string;
    codeSnippet?: string;
    flowNodes: string[];
  };
}

const capabilities: Capability[] = [
  {
    id: "mobile",
    number: "01",
    title: "Native Mobile Engineering",
    tagline: "iOS & Android without cross-platform compromises",
    description:
      "Full-cycle mobile engineering using React Native and Expo. We architect offline-first SQLite databases, native device sensor bridges, fluid 60fps gesture physics, and handle strict Apple App Store & Google Play compliance.",
    icon: Smartphone,
    accent: "#34d399",
    accentBg: "rgba(52,211,153,0.08)",
    accentBorder: "rgba(52,211,153,0.25)",
    highlights: [
      "Offline-first local caching & SQLite",
      "Native device APIs (OCR, Haptics, Camera, Biometrics)",
      "Guaranteed Apple App Store & Google Play approvals",
      "Over-the-air (EAS) push update pipelines",
    ],
    deliverables: [
      "Production iOS & Android IPA/AAB builds",
      "Complete TypeScript source code & CI/CD",
      "Store listing metadata & privacy compliance",
    ],
    specs: [
      { label: "Target FPS", value: "60fps native thread" },
      { label: "Data Engine", value: "SQLite + Local Storage" },
      { label: "Tooling", value: "Expo · React Native · EAS" },
      { label: "Approval Rate", value: "100% first-pass" },
    ],
    blueprint: {
      title: "OFFLINE_FIRST_RUNTIME_ARCHITECTURE",
      flowNodes: [
        "Native Device Input",
        "Encrypted SQLite DB",
        "Optimistic UI Cache",
        "Background Delta Sync",
      ],
      codeSnippet: `// ASK Studios Mobile Sync Engine
export async function syncMobileLogbook(entry: TelemetryRecord) {
  await localDb.executeAsync('INSERT INTO logs VALUES (?)', [entry]);
  enqueueBackgroundWorker({ queue: 'cloud-delta', payload: entry });
  return { status: 'persisted_offline', latencyMs: 4 };
}`,
    },
  },
  {
    id: "ai",
    number: "02",
    title: "Autonomous AI & LLM Systems",
    tagline: "Deterministic, low-latency pipelines that do real work",
    description:
      "We build practical AI systems that eliminate human bottlenecks: automated news and content ingestion, document OCR structuring, conversational studio assistants, and sub-60ms streaming LLM APIs.",
    icon: Cpu,
    accent: "#38bdf8",
    accentBg: "rgba(56,189,248,0.08)",
    accentBorder: "rgba(56,189,248,0.25)",
    highlights: [
      "Streaming Edge routes with Next.js & WebSockets",
      "Autonomous ETL news ingestion & summarizers",
      "Grounded RAG architecture with structured output validation",
      "Cost-optimized hybrid routing (Claude, GPT, Local)",
    ],
    deliverables: [
      "Zero-maintenance autonomous cron pipelines",
      "Custom system prompts & JSON validation guards",
      "Streaming UI components & telemetry analytics",
    ],
    specs: [
      { label: "Pipeline Latency", value: "< 60 seconds total" },
      { label: "Validation", value: "100% strict JSON schema" },
      { label: "Execution", value: "Vercel Edge / Serverless" },
      { label: "Hallucination Guard", value: "Context Ingestion" },
    ],
    blueprint: {
      title: "AUTONOMOUS_MULTI_AGENT_PIPELINE",
      flowNodes: [
        "Raw Feed / Document Ingestion",
        "Deterministic Cleaner",
        "Multi-Agent Prompt Guard",
        "Sub-60s Validated Output",
      ],
      codeSnippet: `// ASK Studios Realtime AI Worker
export async function processPipeline(feed: RawFeedStream) {
  const sanitized = sanitizePayload(feed);
  const validated = await runSchemaGuard(sanitized, SystemSchema);
  return streamEdgeResponse(validated, { latencyBudgetMs: 50 });
}`,
    },
  },
  {
    id: "web",
    number: "03",
    title: "High-Performance Web Architecture",
    tagline: "Cinematic, Awwwards-level interactive web platforms",
    description:
      "Modern web flagships engineered with Next.js 16, React 19, Three.js, and Tailwind CSS. We craft 60fps canvas animations, sub-second initial load speeds, and rock-solid SEO performance that turns visitors into high-ticket clients.",
    icon: Globe,
    accent: "#a78bfa",
    accentBg: "rgba(167,139,250,0.08)",
    accentBorder: "rgba(167,139,250,0.25)",
    highlights: [
      "Next.js App Router with Server Components",
      "Three.js 3D web experiences with mouse physics",
      "Perfect Core Web Vitals (LCP < 0.8s, CLS 0)",
      "Tailored micro-interactions and Framer Motion",
    ],
    deliverables: [
      "Full production Next.js repository & assets",
      "Global CDN edge deployment setup",
      "Complete responsive design from 320px to 4K",
    ],
    specs: [
      { label: "Lighthouse Score", value: "98 - 100 / 100" },
      { label: "LCP Benchmark", value: "< 0.8s Global CDN" },
      { label: "Graphics Engine", value: "WebGL / Three.js" },
      { label: "Framework", value: "Next.js 16 · React 19" },
    ],
    blueprint: {
      title: "EDGE_RENDER_THREE_PIPELINE",
      flowNodes: [
        "Server Component HTML",
        "Hydrated Three.js Canvas",
        "Fluid GSAP / Motion Hook",
        "Sub-second First Paint",
      ],
      codeSnippet: `// ASK Studios Performance Layer
export default function EdgeLayout({ children }: LayoutProps) {
  return (
    <Suspense fallback={<TelemetrySkeleton />}>
      <WebGLCanvasLayer priority="high" />
      <main className="content-layer">{children}</main>
    </Suspense>
  );
}`,
    },
  },
  {
    id: "automation",
    number: "04",
    title: "Automation & Custom Cloud Infrastructure",
    tagline: "Reliable background plumbing for scaling ventures",
    description:
      "Behind every great software product is invisible, flawless infrastructure. We engineer resilient cron schedules, automated transactional communication, webhook routers, and zero-maintenance PostgreSQL/Supabase databases.",
    icon: Workflow,
    accent: "#fbbf24",
    accentBg: "rgba(251,191,36,0.08)",
    accentBorder: "rgba(251,191,36,0.25)",
    highlights: [
      "Scheduled serverless cron functions & monitors",
      "Transactional email pipelines with Resend",
      "Automated WhatsApp & customer webhooks",
      "Custom authentication & rate-limiting gateways",
    ],
    deliverables: [
      "Fully automated background cron jobs",
      "Database schemas, indexes & migration scripts",
      "Failover telemetry & error alerting channels",
    ],
    specs: [
      { label: "Uptime SLA", value: "99.9% Serverless" },
      { label: "Email Gateway", value: "Resend Verified DKIM" },
      { label: "Database", value: "PostgreSQL · Prisma · Redis" },
      { label: "Telemetry", value: "Realtime Discord/Slack Alerts" },
    ],
    blueprint: {
      title: "RESILIENT_WORKER_INFRASTRUCTURE",
      flowNodes: [
        "Inbound Webhook Event",
        "Idempotency Gate",
        "Transactional Job Queue",
        "Instant Customer Trigger",
      ],
      codeSnippet: `// ASK Studios Webhook Gateway
export async function handleWebhookEvent(event: WebhookPayload) {
  const verified = verifySignature(event.headers);
  if (!verified) throw new AuthError("signature_mismatch");
  await dispatchQueueJob('transactional', event.body);
  return { status: 'acknowledged', ts: Date.now() };
}`,
    },
  },
];

const techStack = [
  "React Native",
  "Expo",
  "Next.js 16",
  "React 19",
  "TypeScript",
  "Three.js",
  "Node.js",
  "Tailwind CSS",
  "OpenAI / Claude",
  "PostgreSQL",
  "SQLite",
  "Framer Motion",
  "Docker",
  "Vercel Edge",
  "Resend",
  "Prisma",
];

export default function ServicesSection() {
  const [selectedId, setSelectedId] = useState<string>("mobile");

  const activeCap =
    capabilities.find((c) => c.id === selectedId) || capabilities[0];

  return (
    <section id="services" className="relative scroll-mt-24 py-28">
      {/* Section Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14 border-b border-white/[0.08] pb-8">
        <Interactive3DHeading
          badge="Engineering Lab Capabilities"
          badgeTelemetry="Senior Direct Ownership"
          badgeVariant="violet"
          leadText="Engineered for teams"
          highlightText="who need to ship."
          variant="violet"
          description="We partner with ambitious founders and enterprises to architect, design, and launch production software without layers of agency bureaucracy."
          size="section"
          className="max-w-2xl"
        />

        <div className="hidden lg:flex items-center gap-2 font-tech text-xs text-zinc-400 bg-white/[0.03] border border-white/[0.08] rounded-full px-4 py-2">
          <Terminal className="h-4 w-4 text-violet-400" />
          <span>Interactive Architecture Workbench</span>
        </div>
      </div>

      {/* Capabilities Interactive Matrix (2-Column Architecture Workbench) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Capability Selectors */}
        <div className="lg:col-span-5 flex flex-col gap-3">
          {capabilities.map((cap) => {
            const Icon = cap.icon;
            const isSelected = selectedId === cap.id;

            return (
              <button
                key={cap.id}
                type="button"
                onClick={() => setSelectedId(cap.id)}
                className={`group relative text-left p-5 rounded-2xl transition-all duration-300 border ${
                  isSelected
                    ? "shadow-2xl"
                    : "border-white/[0.07] bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]"
                }`}
                style={{
                  background: isSelected ? cap.accentBg : undefined,
                  borderColor: isSelected ? cap.accentBorder : undefined,
                  boxShadow: isSelected
                    ? `0 12px 32px -12px ${cap.accentBorder}`
                    : undefined,
                }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3.5">
                    <div
                      className="h-10 w-10 rounded-xl flex items-center justify-center transition-colors"
                      style={{
                        background: isSelected
                          ? cap.accent
                          : "rgba(255,255,255,0.05)",
                        color: isSelected ? "#000" : "rgb(161,161,170)",
                      }}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <span
                        className="text-[10px] font-mono tracking-widest uppercase block"
                        style={{
                          color: isSelected ? cap.accent : "rgb(113,113,122)",
                        }}
                      >
                        {cap.number} // CAPABILITY
                      </span>
                      <h3 className="text-base font-bold text-white tracking-tight">
                        {cap.title}
                      </h3>
                    </div>
                  </div>

                  <span
                    className={`h-6 w-6 rounded-full flex items-center justify-center text-xs transition-transform ${
                      isSelected
                        ? "rotate-0 text-white font-bold"
                        : "-rotate-45 text-zinc-600 group-hover:text-zinc-400"
                    }`}
                    style={{
                      background: isSelected ? cap.accentBorder : "transparent",
                    }}
                  >
                    →
                  </span>
                </div>

                <p className="mt-3 text-xs leading-relaxed text-zinc-400 line-clamp-2">
                  {cap.tagline}
                </p>
              </button>
            );
          })}
        </div>

        {/* Right Column: Dynamic Architecture Blueprint & Deliverables Inspector */}
        <div className="lg:col-span-7">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCap.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35 }}
              className="rounded-3xl border p-7 sm:p-9 shadow-2xl relative overflow-hidden backdrop-blur-xl"
              style={{
                background:
                  "linear-gradient(155deg, rgba(8,5,22,0.92) 0%, rgba(3,1,10,0.98) 100%)",
                borderColor: activeCap.accentBorder,
                boxShadow: `0 20px 50px -25px ${activeCap.accentBorder}`,
              }}
            >
              {/* Header inside the inspector */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.08] pb-5">
                <div>
                  <span
                    className="font-mono text-[10px] uppercase tracking-widest block"
                    style={{ color: activeCap.accent }}
                  >
                    {activeCap.number} · SYSTEM ARCHITECTURE
                  </span>
                  <h3 className="text-2xl font-black text-white tracking-tight mt-1">
                    {activeCap.title}
                  </h3>
                </div>

                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold text-black transition-all hover:scale-105"
                  style={{ background: activeCap.accent }}
                >
                  <span>Build This With Us</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>

              {/* Description */}
              <p className="mt-5 text-sm leading-relaxed text-zinc-300">
                {activeCap.description}
              </p>

              {/* Technical Blueprint Visual / Flow */}
              <div className="mt-6 rounded-2xl bg-black/60 border border-white/[0.08] p-4.5">
                <div className="flex items-center justify-between mb-3 text-[11px] font-mono text-zinc-400">
                  <div className="flex items-center gap-2">
                    <span
                      className="h-2 w-2 rounded-full animate-ping"
                      style={{ background: activeCap.accent }}
                    />
                    <span className="text-zinc-200">
                      {activeCap.blueprint.title}
                    </span>
                  </div>
                  <span className="text-zinc-500">RUNTIME FLOW</span>
                </div>

                {/* Node flow diagram */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
                  {activeCap.blueprint.flowNodes.map((node, i) => (
                    <div
                      key={node}
                      className="rounded-xl border border-white/[0.06] bg-white/[0.025] p-2.5 text-center relative"
                    >
                      <span className="text-[9px] font-mono text-zinc-500 block mb-1">
                        STEP 0{i + 1}
                      </span>
                      <span className="text-[11px] font-mono text-zinc-200 font-medium leading-tight block">
                        {node}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Code snippet preview */}
                {activeCap.blueprint.codeSnippet && (
                  <div className="rounded-xl bg-[#030109] border border-white/[0.05] p-3.5 font-mono text-xs overflow-x-auto text-zinc-300 leading-relaxed">
                    <div className="flex items-center gap-1.5 pb-2 mb-2 border-b border-white/[0.05] text-[10px] text-zinc-500">
                      <Code2 className="h-3.5 w-3.5" />
                      <span>SOURCE IMPLEMENTATION PRIMITIVE</span>
                    </div>
                    <pre className="text-[11px] text-emerald-300/90 whitespace-pre">
                      {activeCap.blueprint.codeSnippet}
                    </pre>
                  </div>
                )}
              </div>

              {/* Key Specs Grid */}
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-[11px] font-mono border-t border-white/[0.08] pt-5">
                {activeCap.specs.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-xl bg-white/[0.025] border border-white/[0.06] p-3"
                  >
                    <span className="text-zinc-500 block text-[9px] uppercase tracking-wider mb-0.5">
                      {s.label}
                    </span>
                    <span
                      className="font-semibold"
                      style={{ color: activeCap.accent }}
                    >
                      {s.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Highlights & Deliverables */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-white/[0.08] pt-5">
                <div>
                  <h4 className="text-xs font-mono font-semibold text-zinc-400 uppercase tracking-wider mb-2.5">
                    Core Capabilities
                  </h4>
                  <ul className="space-y-2">
                    {activeCap.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-start gap-2 text-xs text-zinc-300 leading-snug"
                      >
                        <CheckCircle2
                          className="h-3.5 w-3.5 mt-0.5 shrink-0"
                          style={{ color: activeCap.accent }}
                        />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-mono font-semibold text-zinc-400 uppercase tracking-wider mb-2.5">
                    What We Ship (3-6 Wks)
                  </h4>
                  <ul className="space-y-2">
                    {activeCap.deliverables.map((d) => (
                      <li
                        key={d}
                        className="flex items-start gap-2 text-xs text-zinc-300 leading-snug"
                      >
                        <ShieldCheck className="h-3.5 w-3.5 mt-0.5 shrink-0 text-violet-400" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Tech Stack Toolchain Ribbon */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-16 overflow-hidden"
      >
        <div className="mb-4 flex items-center gap-3">
          <div
            className="h-px flex-1"
            style={{
              background:
                "linear-gradient(to right, transparent, rgba(124,58,237,0.4), transparent)",
            }}
          />
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-400">
            Verified Production Toolchain
          </span>
          <div
            className="h-px flex-1"
            style={{
              background:
                "linear-gradient(to right, transparent, rgba(124,58,237,0.4), transparent)",
            }}
          />
        </div>
        <div className="flex gap-2.5 marquee-track">
          {[...techStack, ...techStack].map((tech, i) => (
            <span
              key={i}
              className="shrink-0 rounded-full px-4 py-2 font-mono text-xs text-zinc-300 whitespace-nowrap transition-colors hover:text-white"
              style={{
                background: "rgba(255,255,255,0.025)",
                border: "1px solid rgba(124,58,237,0.18)",
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
