// src/app/contact/page.tsx
"use client";

import { useState } from "react";
import SiteShell from "@/components/layout/SiteShell";
import Interactive3DHeading from "@/components/ui/Interactive3DHeading";
import {
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

type FormState = "idle" | "submitting" | "success" | "error";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [projectType, setProjectType] = useState("Mobile app");
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
        setErrorMessage(data?.error || "Something went wrong.");
        return;
      }

      setStatus("success");
      setName("");
      setEmail("");
      setProjectType("Mobile app");
      setMessage("");
    } catch (err) {
      console.error(err);
      setStatus("error");
      setErrorMessage("Network error. Please try again.");
    }
  };

  return (
    <SiteShell>
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Hero Header */}
        <section className="pt-6 pb-12">
          <Interactive3DHeading
            eyebrow="COMMENCE PROJECT"
            badgeTelemetry="SECURE INTAKE · SSL"
            title="Start Engineering with"
            highlight="ASK Studios"
            variant="prismatic"
            description="Share what you are building—an MVP, mobile product, internal automation, or an applied AI platform. We analyze incoming parameters and respond with a scoping assessment within 24 business hours."
            align="center"
          />
        </section>

        {/* Content Grid */}
        <section className="mt-6 grid gap-8 lg:grid-cols-12">
          {/* Left Column: Studio Parameters & SLA */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="rounded-3xl border border-white/[0.08] bg-[#070514]/85 p-8 shadow-2xl backdrop-blur-2xl">
              <div className="flex items-center gap-2 font-tech text-xs tracking-wider uppercase text-cyan-400">
                <ShieldCheck className="h-4 w-4" />
                <span>DIRECT CHANNELS</span>
              </div>

              <h2 className="mt-4 font-display text-2xl font-bold text-white">
                Direct Communication
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                Every inquiry is reviewed directly by our engineering leadership. We respect your confidentiality and can execute an NDA prior to architectural discussions.
              </p>

              <div className="mt-8 space-y-4 border-t border-white/[0.06] pt-6 font-tech text-xs">
                <div className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-4 w-4 text-violet-400 shrink-0" />
                  <div>
                    <span className="text-zinc-500 block">Official Inquiry Inbox</span>
                    <a
                      href="mailto:info@askstudios.net"
                      className="text-sm font-medium text-white hover:text-violet-300 transition-colors"
                    >
                      info@askstudios.net
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-4 w-4 text-emerald-400 shrink-0" />
                  <div>
                    <span className="text-zinc-500 block">Response Turnaround</span>
                    <span className="text-sm font-medium text-emerald-300">
                      Within 24 business hours
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 text-amber-400 shrink-0" />
                  <div>
                    <span className="text-zinc-500 block">Studio Location</span>
                    <span className="text-sm font-medium text-zinc-200">
                      Ontario, Canada (UTC-5 / EST)
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Next Steps Card */}
            <div className="rounded-3xl border border-white/[0.08] bg-[#070514]/85 p-8 shadow-2xl backdrop-blur-2xl">
              <div className="font-tech text-xs uppercase tracking-wider text-zinc-400">
                What happens after you send:
              </div>
              <div className="mt-4 space-y-3 font-tech text-xs">
                <div className="flex items-start gap-2.5">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-violet-500/20 text-[10px] text-violet-300">
                    1
                  </span>
                  <span className="text-zinc-300 leading-relaxed">
                    Technical feasibility review of your project requirements.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-500/20 text-[10px] text-cyan-300">
                    2
                  </span>
                  <span className="text-zinc-300 leading-relaxed">
                    Introductory 25-minute architecture & scoping video call.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-[10px] text-emerald-300">
                    3
                  </span>
                  <span className="text-zinc-300 leading-relaxed">
                    Detailed scope document, timeline, and fixed sprint milestone plan.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: High-Craft Intake Console */}
          <div className="lg:col-span-7">
            <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-[#070514]/90 p-8 shadow-2xl backdrop-blur-2xl sm:p-10">
              <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-violet-600/10 blur-3xl" />
              <div className="pointer-events-none absolute -left-20 -bottom-20 h-56 w-56 rounded-full bg-cyan-500/10 blur-3xl" />

              <div className="flex items-center justify-between pb-6 border-b border-white/[0.06]">
                <div>
                  <span className="font-tech text-xs uppercase tracking-wider text-violet-400">
                    SPECIFICATION FORM
                  </span>
                  <h3 className="mt-1 font-display text-xl font-bold text-white sm:text-2xl">
                    Submit Project Parameters
                  </h3>
                </div>
                <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 font-tech text-[11px] text-emerald-300">
                  SLOTS AVAILABLE
                </span>
              </div>

              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label className="block font-tech text-xs uppercase tracking-wider text-zinc-300">
                      Your Name <span className="text-violet-400">*</span>
                    </label>
                    <input
                      type="text"
                      className="mt-2 w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-zinc-500 outline-none transition-colors focus:border-violet-400 focus:bg-white/[0.05]"
                      placeholder="e.g. Alex Mercer"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <label className="block font-tech text-xs uppercase tracking-wider text-zinc-300">
                      Work Email <span className="text-violet-400">*</span>
                    </label>
                    <input
                      type="email"
                      className="mt-2 w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-zinc-500 outline-none transition-colors focus:border-violet-400 focus:bg-white/[0.05]"
                      placeholder="alex@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-tech text-xs uppercase tracking-wider text-zinc-300">
                    What are you looking to build?
                  </label>
                  <select
                    className="mt-2 w-full rounded-xl border border-white/[0.08] bg-[#0c091f] px-4 py-3 text-sm text-white outline-none transition-colors focus:border-violet-400 cursor-pointer"
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                  >
                    <option value="Mobile app">Mobile Application (iOS / Android)</option>
                    <option value="Web app / dashboard">Web Platform / Admin Dashboard</option>
                    <option value="AI / automation">AI Integration / Autonomous Pipelines</option>
                    <option value="SaaS product">End-to-End SaaS MVP</option>
                    <option value="AutoLog App">Inquiry regarding AutoLog</option>
                    <option value="BrieflyCA App">Inquiry regarding BrieflyCA</option>
                    <option value="Tambola Number App">Inquiry regarding Tambola</option>
                    <option value="ResumeRail App">Inquiry regarding ResumeRail</option>
                    <option value="Something else">Custom / Multi-platform architecture</option>
                  </select>
                </div>

                <div>
                  <label className="block font-tech text-xs uppercase tracking-wider text-zinc-300">
                    Project Overview & Goals <span className="text-violet-400">*</span>
                  </label>
                  <textarea
                    rows={5}
                    className="mt-2 w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-zinc-500 outline-none transition-colors focus:border-violet-400 focus:bg-white/[0.05] leading-relaxed"
                    placeholder="Briefly describe what you're building, key features, target timeline, or existing infrastructure..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 via-indigo-600 to-violet-600 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white shadow-xl shadow-violet-500/25 transition-all hover:shadow-violet-500/40 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === "submitting" ? (
                    <span>Transmitting Parameters...</span>
                  ) : (
                    <>
                      <span>Transmit Project Parameters</span>
                      <Send className="h-3.5 w-3.5" />
                    </>
                  )}
                </button>

                {status === "success" && (
                  <div className="flex items-center gap-2.5 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-xs font-tech text-emerald-300">
                    <CheckCircle2 className="h-4 w-4 shrink-0" />
                    <span>Inquiry transmitted successfully. We will follow up via email shortly.</span>
                  </div>
                )}

                {status === "error" && (
                  <div className="flex items-center gap-2.5 rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-xs font-tech text-red-300">
                    <AlertCircle className="h-4 w-4 shrink-0" />
                    <span>{errorMessage || "Transmission failed. Please reach us at info@askstudios.net directly."}</span>
                  </div>
                )}

                {status === "idle" && (
                  <p className="font-tech text-[11px] text-zinc-500 text-center">
                    SSL 256-Bit Encrypted · Zero spam guarantee · Direct engineering contact
                  </p>
                )}
              </form>
            </div>
          </div>
        </section>
      </div>
    </SiteShell>
  );
}
