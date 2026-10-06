"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  Mail,
  Clock,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  MessageSquare,
  Sparkles,
  Lock,
} from "lucide-react";
import Interactive3DHeading from "@/components/ui/Interactive3DHeading";

type FormState = "idle" | "submitting" | "success" | "error";

const projectTypes = [
  "Mobile App (iOS/Android)",
  "Autonomous AI & LLMs",
  "High-Performance Web App",
  "AutoLog Inquiry",
  "BrieflyCA Inquiry",
  "Custom Architecture Sprint",
];

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [projectType, setProjectType] = useState(projectTypes[0]);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, projectType, message }),
      });

      const data = await res.json();

      if (!res.ok || !data.ok) {
        setStatus("error");
        setErrorMessage(
          data?.error ||
            "Failed to deliver message. Please contact us directly.",
        );
        return;
      }

      setStatus("success");
      setName("");
      setEmail("");
      setProjectType(projectTypes[0]);
      setMessage("");
    } catch (err) {
      console.error(err);
      setStatus("error");
      setErrorMessage(
        "Network error. Please try again or email info@askstudios.net directly.",
      );
    }
  };

  return (
    <section id="contact" className="relative mt-20 mb-16 scroll-mt-24">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute -bottom-16 -right-16 h-[500px] w-[500px] rounded-full bg-violet-600/10 blur-[140px]" />
      <div className="pointer-events-none absolute -top-16 -left-16 h-[400px] w-[400px] rounded-full bg-cyan-600/10 blur-[140px]" />

      <div
        className="rounded-3xl border border-white/[0.1] bg-[#060414]/90 p-8 sm:p-12 shadow-2xl backdrop-blur-2xl relative overflow-hidden"
        style={{
          boxShadow: "0 25px 70px -25px rgba(124,58,237,0.25)",
        }}
      >
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          {/* Left Column: Studio Partnership Narrative (5 cols) */}
          <div className="lg:col-span-5">
            <Interactive3DHeading
              badge="Project Intake"
              badgeTelemetry="Q2-Q3 Sprint Slots"
              badgeVariant="prismatic"
              leadText="Partner with"
              highlightText="ASK Studios."
              variant="prismatic"
              description="Tell us what you are building. Whether you need a native mobile app ready for the App Store, an autonomous AI pipeline, or high-performance web software, we review every technical requirement directly."
              size="compact"
              className="mb-8"
            />

            {/* Direct Commitments & Security Guarantees */}
            <div className="mt-8 space-y-4 border-t border-white/[0.08] pt-6 text-xs text-zinc-300">
              <div className="flex items-start gap-3.5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 border border-emerald-500/25 text-emerald-400">
                  <Clock className="h-4 w-4" />
                </div>
                <div>
                  <span className="font-semibold text-white block text-sm">
                    24-Hour Direct Response
                  </span>
                  <span className="text-zinc-400 text-xs leading-normal">
                    Every inquiry is reviewed directly by our engineering leads,
                    not business development reps.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 border border-cyan-500/25 text-cyan-400">
                  <ShieldCheck className="h-4 w-4" />
                </div>
                <div>
                  <span className="font-semibold text-white block text-sm">
                    Mutual NDA & Full IP Transfer
                  </span>
                  <span className="text-zinc-400 text-xs leading-normal">
                    We execute mutual NDAs upon request. 100% of code,
                    intellectual property, and credentials belong to you.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-violet-500/10 border border-violet-500/25 text-violet-400">
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                  <span className="font-semibold text-white block text-sm">
                    Direct Email Gateway
                  </span>
                  <a
                    href="mailto:info@askstudios.net"
                    className="font-mono text-emerald-400 hover:text-emerald-300 transition-colors text-xs"
                  >
                    info@askstudios.net
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: High-Craft Intake Console (7 cols) */}
          <div className="lg:col-span-7 rounded-2xl border border-white/[0.08] bg-black/50 p-6 sm:p-8 backdrop-blur-md">
            <form onSubmit={handleSubmit} className="space-y-4.5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Henderson"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-xl border border-white/[0.1] bg-white/[0.03] px-4 py-2.5 text-sm text-white placeholder-zinc-500 outline-none transition-all focus:border-violet-400 focus:bg-white/[0.06] focus:ring-1 focus:ring-violet-400/40"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-xl border border-white/[0.1] bg-white/[0.03] px-4 py-2.5 text-sm text-white placeholder-zinc-500 outline-none transition-all focus:border-violet-400 focus:bg-white/[0.06] focus:ring-1 focus:ring-violet-400/40"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-1.5">
                  Project Domain & Scope
                </label>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                  {projectTypes.map((type) => (
                    <button
                      type="button"
                      key={type}
                      onClick={() => setProjectType(type)}
                      className={`rounded-xl border px-3 py-2 text-left text-[11px] font-medium transition-all ${
                        projectType === type
                          ? "border-violet-400 bg-violet-600/20 text-white font-semibold shadow-sm shadow-violet-500/20"
                          : "border-white/[0.06] bg-white/[0.02] text-zinc-400 hover:border-white/20 hover:text-white"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-1.5">
                  Requirements & Timeline
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Describe your product architecture, target platforms (iOS/Android/Web), timeline expectations, or key technical challenges..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full rounded-xl border border-white/[0.1] bg-white/[0.03] px-4 py-2.5 text-sm text-white placeholder-zinc-500 outline-none transition-all focus:border-violet-400 focus:bg-white/[0.06] focus:ring-1 focus:ring-violet-400/40 leading-relaxed"
                />
              </div>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="group relative flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-xs font-bold text-black transition-all hover:bg-violet-200 hover:scale-[1.01] hover:shadow-xl hover:shadow-violet-500/20 disabled:opacity-60 cursor-pointer"
              >
                <span>
                  {status === "submitting"
                    ? "Transmitting to Engineering Leads..."
                    : "Send Project Inquiry"}
                </span>
                <Send className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </button>

              {status === "success" && (
                <div className="flex items-center gap-2.5 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-3.5 text-xs text-emerald-300">
                  <CheckCircle2 className="h-4 w-4 shrink-0" />
                  <span>
                    Inquiry confirmed! Our engineering leads will review your
                    specs and respond within 24 hours.
                  </span>
                </div>
              )}

              {status === "error" && (
                <div className="flex items-center gap-2.5 rounded-xl border border-red-500/30 bg-red-500/10 p-3.5 text-xs text-red-400">
                  <AlertCircle className="h-4 w-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
