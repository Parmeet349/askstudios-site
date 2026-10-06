"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bot,
  ArrowRight,
  Zap,
  ShieldCheck,
  Terminal,
  Sparkles,
  Activity,
  Play,
  RotateCcw,
  CheckCircle2,
  Clock,
  Layers,
} from "lucide-react";
import Interactive3DHeading from "@/components/ui/Interactive3DHeading";

interface PromptDemo {
  query: string;
  response: string;
  latencyMs: number;
  tokensSec: number;
  tokens: number;
  model: string;
}

const samplePrompts: PromptDemo[] = [
  {
    query: "What mobile apps has ASK Studios published to the App Store?",
    response:
      "ASK Studios has published multiple production apps to both the Apple App Store and Google Play:\n\n1. BrieflyCA — Canada-first AI news platform with sub-60s automated summarization (4.9★ rating).\n2. AutoLog — Smart vehicle logbook with 100% offline-first SQLite database for fuel & service tracking.\n3. Tambola Caller — Interactive voice-caller engine for live event gaming.\n4. ResumeRail (Beta) — Cross-platform ATS resume optimization engine.\n\nAll mobile apps are engineered with React Native, Expo, and strict native sandboxing.",
    latencyMs: 44,
    tokensSec: 168,
    tokens: 114,
    model: "claude-3.5-sonnet-edge",
  },
  {
    query:
      "How does AutoLog track fuel and maintenance without cloud dependency?",
    response:
      "AutoLog runs a 100% offline-first architecture powered by an embedded SQLite database running locally on the device.\n\n• Receipts and trip telemetry are written instantaneously with 0ms cloud lag.\n• When camera receipts are scanned, local OCR extract runs on-device.\n• No login, no telemetry phoning home, no recurring database server costs. Complete user privacy.",
    latencyMs: 38,
    tokensSec: 175,
    tokens: 92,
    model: "edge-sqlite-eval",
  },
  {
    query: "What is BrieflyCA's automated 60-second news engine?",
    response:
      "BrieflyCA runs an autonomous multi-agent pipeline on scheduled Edge cron workers:\n\n1. Ingestion: Reads Canadian municipal, tech, and sports news feeds.\n2. Deduplication: Eliminates clickbait and duplicate coverage.\n3. Multi-Agent Synthesis: Condenses multi-page articles into under 60-second bullet summaries.\n4. Audio Generation: Generates natural TTS voice briefs.\n\nZero manual editors required.",
    latencyMs: 51,
    tokensSec: 154,
    tokens: 106,
    model: "gpt-4o-pipeline-v2",
  },
  {
    query: "Can ASK Studios architect an MVP for our funded startup?",
    response:
      "Yes. ASK Studios partners with select founders for full-lifecycle architecture:\n\n• Scope: 3–6 week sprint from technical architecture to live App Store release.\n• Deliverables: Complete native mobile app or web platform, CI/CD pipeline, and full source IP transfer.\n• Team: You work directly with senior architects who own the code, without layers of agency account managers.",
    latencyMs: 42,
    tokensSec: 182,
    tokens: 98,
    model: "studio-architect-core",
  },
];

const features = [
  {
    icon: Zap,
    title: "Edge-Deployed & Low Latency",
    tagline: "< 60ms first-token response",
    description:
      "Built on Next.js serverless and Vercel edge handlers. AI requests stream instantly without cold-start penalties or infrastructure maintenance.",
    accent: "#34d399",
  },
  {
    icon: ShieldCheck,
    title: "Deterministic & Grounded",
    tagline: "Strict JSON schema validation",
    description:
      "Protected against hallucinations through context injection, structured output schema enforcement, and zero-temperature reasoning guards.",
    accent: "#38bdf8",
  },
  {
    icon: Layers,
    title: "Plug-and-Play for Your Stack",
    tagline: "Mobile, Web, & Automated APIs",
    description:
      "We deploy the exact same production AI architecture into your existing React Native app, customer portal, or internal operations dashboard.",
    accent: "#c4b5fd",
  },
];

export default function AIShowcaseSection() {
  const [activePromptIndex, setActivePromptIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const activeDemo = samplePrompts[activePromptIndex];

  // Typewriter effect simulation
  useEffect(() => {
    setIsTyping(true);
    setDisplayedText("");
    let currentIdx = 0;
    const fullText = activeDemo.response;
    const intervalTime = Math.max(6, Math.floor(1800 / fullText.length));

    const timer = setInterval(() => {
      if (currentIdx < fullText.length) {
        setDisplayedText(fullText.slice(0, currentIdx + 1));
        currentIdx++;
      } else {
        setIsTyping(false);
        clearInterval(timer);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [activePromptIndex]);

  const handleOpenGlobalChat = () => {
    if (typeof window !== "undefined") {
      const event = new CustomEvent("open-ask-chat", {
        detail: { prompt: activeDemo.query },
      });
      window.dispatchEvent(event);
    }
  };

  return (
    <section id="ai-showcase" className="relative scroll-mt-24 py-28">
      {/* Ambient background glow */}
      <div
        className="pointer-events-none absolute -left-40 top-1/4 h-[550px] w-[550px] rounded-full opacity-20"
        style={{
          background:
            "radial-gradient(circle, rgba(6,182,212,0.8) 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
        aria-hidden
      />

      {/* Section Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14 border-b border-white/[0.08] pb-8">
        <Interactive3DHeading
          badge="Production AI Engine"
          badgeTelemetry="Edge Streaming Console"
          badgeVariant="cyan"
          leadText="Intelligent systems that"
          highlightText="deliver real value."
          variant="cyan"
          description="We don't do AI for buzzwords. We engineer low-latency, deterministic, and cost-optimized workflows—test the live edge streaming simulator below."
          size="section"
          className="max-w-2xl"
        />

        <div className="hidden lg:flex items-center gap-3 font-tech text-xs text-zinc-400 bg-white/[0.03] border border-white/[0.08] rounded-full px-4 py-2">
          <Activity className="h-4 w-4 text-emerald-400 animate-pulse" />
          <span>Latency Budget: &lt; 60ms Edge SLA</span>
        </div>
      </div>

      {/* Main Grid: Interactive Terminal Runner & Architecture Cards */}
      <div className="grid gap-8 lg:grid-cols-12 items-start">
        {/* Left: Interactive Streaming Terminal Runner (7 cols) */}
        <div className="lg:col-span-7">
          <div
            className="rounded-3xl border border-cyan-500/25 bg-[#060414]/90 shadow-2xl overflow-hidden backdrop-blur-2xl"
            style={{
              boxShadow: "0 20px 60px -25px rgba(6,182,212,0.25)",
            }}
          >
            {/* Terminal Top Window Bar */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-cyan-500/15 bg-black/40">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                  <div className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                  <div className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex items-center gap-2 ml-1 text-xs font-mono font-semibold text-white">
                  <Bot className="h-3.5 w-3.5 text-cyan-400" />
                  <span>ASK_STUDIO_AI // EDGE_TERMINAL</span>
                </div>
              </div>

              {/* Status pill */}
              <div className="flex items-center gap-2 font-mono text-[11px]">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 px-2.5 py-0.5 text-emerald-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  ONLINE · {activeDemo.latencyMs}ms
                </span>
              </div>
            </div>

            {/* Clickable Prompts Row */}
            <div className="p-5 border-b border-white/[0.06] bg-white/[0.015]">
              <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-400 block mb-2.5">
                SELECT SIMULATION QUERY:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {samplePrompts.map((p, idx) => {
                  const isSelected = activePromptIndex === idx;
                  return (
                    <button
                      key={p.query}
                      type="button"
                      onClick={() => setActivePromptIndex(idx)}
                      className={`text-left p-2.5 rounded-xl text-xs transition-all border font-mono ${
                        isSelected
                          ? "bg-cyan-500/15 border-cyan-500/40 text-white shadow-sm shadow-cyan-500/20"
                          : "bg-black/30 border-white/[0.06] text-zinc-400 hover:text-white hover:border-white/20 hover:bg-white/[0.03]"
                      }`}
                    >
                      <div className="flex items-center gap-1.5 mb-1 text-[9px] uppercase tracking-wider">
                        <span
                          style={{ color: isSelected ? "#38bdf8" : "#71717a" }}
                        >
                          0{idx + 1}
                        </span>
                        <span className="text-zinc-400">· {p.model}</span>
                      </div>
                      <span className="line-clamp-1 block text-[11px] leading-tight">
                        &ldquo;{p.query}&rdquo;
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Active Query Display */}
            <div className="px-5 pt-4 pb-2 bg-black/25 flex items-center gap-2 border-b border-white/[0.04]">
              <span className="font-mono text-cyan-400 text-xs font-bold">
                &gt;
              </span>
              <span className="font-mono text-xs text-white font-medium">
                {activeDemo.query}
              </span>
            </div>

            {/* Terminal Output Body with Typewriter */}
            <div className="p-5 min-h-[260px] font-mono text-xs leading-relaxed text-zinc-200 whitespace-pre-line bg-[#04020a]/80">
              {displayedText}
              {isTyping && (
                <span className="inline-block w-2 h-4 ml-1 bg-cyan-400 animate-pulse align-middle" />
              )}
            </div>

            {/* Terminal Telemetry Footer Bar */}
            <div className="px-5 py-3 border-t border-white/[0.06] bg-black/50 flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono">
              <div className="flex items-center gap-4 text-zinc-400">
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3 text-cyan-400" />
                  <span>
                    Latency:{" "}
                    <strong className="text-white">
                      {activeDemo.latencyMs}ms
                    </strong>
                  </span>
                </span>
                <span className="flex items-center gap-1">
                  <Zap className="h-3 w-3 text-amber-400" />
                  <span>
                    Speed:{" "}
                    <strong className="text-white">
                      {activeDemo.tokensSec} tok/s
                    </strong>
                  </span>
                </span>
                <span className="hidden sm:inline text-zinc-400">
                  Tokens:{" "}
                  <strong className="text-white">{activeDemo.tokens}</strong>
                </span>
              </div>

              <button
                type="button"
                onClick={handleOpenGlobalChat}
                className="inline-flex items-center gap-1.5 rounded-full bg-cyan-500/20 border border-cyan-500/40 px-3 py-1 text-[11px] font-semibold text-cyan-300 hover:bg-cyan-500/30 transition-colors"
              >
                <span>Launch Full Assistant</span>
                <ArrowRight className="h-3 w-3" />
              </button>
            </div>
          </div>
        </div>

        {/* Right: Architecture Capability Cards (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl p-5 border border-white/[0.08] bg-white/[0.025] hover:border-cyan-500/30 hover:bg-white/[0.045] transition-all duration-300 backdrop-blur-md"
              >
                <div className="flex items-start gap-3.5">
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                    style={{
                      background: `${f.accent}15`,
                      border: `1px solid ${f.accent}35`,
                    }}
                  >
                    <Icon className="h-5 w-5" style={{ color: f.accent }} />
                  </div>
                  <div>
                    <span
                      className="font-mono text-[10px] uppercase tracking-wider block"
                      style={{ color: f.accent }}
                    >
                      {f.tagline}
                    </span>
                    <h3 className="text-base font-bold text-white tracking-tight mt-0.5">
                      {f.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-zinc-400">
                      {f.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}

          {/* Integration Specs Box */}
          <div className="rounded-2xl border border-white/[0.08] bg-black/40 p-5 font-mono text-xs">
            <div className="flex items-center justify-between text-zinc-400 mb-2 border-b border-white/[0.06] pb-2">
              <span className="text-[10px] uppercase tracking-wider text-cyan-400">
                ACTIVE PIPELINE SPECS
              </span>
              <span className="text-[10px] text-emerald-400">
                VERIFIED LIVE
              </span>
            </div>
            <div className="space-y-1.5 text-[11px] text-zinc-300">
              <div className="flex justify-between">
                <span className="text-zinc-500">Edge Gateway</span>
                <span>Next.js 16 Edge Runtime</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">Summarization ETL</span>
                <span>Autonomous Cron (6h cycle)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">Guard Validation</span>
                <span>Strict Zod Schema Enforcement</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">Store Sandbox Rate</span>
                <span>100% Policy Compliant</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
