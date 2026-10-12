// src/app/flagquest-support/page.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SiteShell from "@/components/layout/SiteShell";
import SectionHeader from "@/components/ui/SectionHeader";
import Link from "next/link";
import { HelpCircle, Mail, Send, CheckCircle2, AlertCircle } from "lucide-react";

type FormState = "idle" | "submitting" | "success" | "error";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How do I play the local multiplayer (Pass & Play) mode?",
    answer: "From the main screen, tap 'Local Multiplayer'. You can configure the number of players (2 to 4), enter custom explorer names, and set the number of rounds. The game operates turn-by-turn. When a player completes their turn, the screen will prompt you to pass the phone to the next player. At the end of all rounds, a podium scoreboard highlights the champion!",
  },
  {
    question: "What do the hints do and how do they work?",
    answer: "If you're stuck on a flag in Classic Mode, you can use a Hint (you start with 3 per game). Using a hint triggers a 3D card flip animation, revealing an educational trivia clue, historical fact, or geographical detail about the country. You can flip the card back and forth as many times as you like before selecting your answer.",
  },
  {
    question: "Can I customize the game difficulty or filter by continent?",
    answer: "Absolutely! You can choose to play with the entire pool of 195 nations or filter flags by specific continents (Europe, Asia, North/South America, Africa, Oceania) to focus your learning. In Time Attack mode, you can also adjust the initial timer (30s, 60s, or 90s) in the settings menu.",
  },
  {
    question: "Is my career progress, explorer title, or high score saved online?",
    answer: "FlagQuest is built with privacy in mind. All game data—including your high scores, career progression, explorer titles, and audio/haptics preferences—is saved locally on your device. We do not store this data on external servers. Please note that uninstalling the app or clearing your device data will permanently erase your progress.",
  },
  {
    question: "How can I toggle the audio and haptic feedback?",
    answer: "Tap the gear icon on the main screen to open the Settings menu. There, you will find toggles for sound effects and tactile haptic feedback, allowing you to play silently or with a fully immersive sensory experience.",
  },
  {
    question: "How can I report a bug or request support?",
    answer: "You can use the dedicated support form on this page or email us directly at info@askstudios.net. When reporting an issue, please include details about your device (iOS/Android version) and describe the steps to reproduce the bug so we can resolve it quickly.",
  },
];

export default function FlagQuestSupportPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [platform, setPlatform] = useState("iOS");
  const [inquiryType, setInquiryType] = useState("Bug Report");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQIndex(openFAQIndex === index ? null : index);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          projectType: `FlagQuest Support: ${platform} - ${inquiryType}`,
          message: `Subject: ${subject}\n\n${message}`,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.ok) {
        setStatus("error");
        setErrorMessage(data?.error || "Failed to submit request.");
        return;
      }

      setStatus("success");
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (err) {
      console.error(err);
      setStatus("error");
      setErrorMessage("A network error occurred. Please check your connection and try again.");
    }
  };

  return (
    <SiteShell>
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <section className="space-y-8">
          <SectionHeader
            eyebrow="GAME SUPPORT"
            telemetryCode="FLAGQUEST · HELP DESK"
            title="FlagQuest Support & Help Center"
            description="Got questions about game modes, settings, or ran into a bug? We are here to help you get back to your quest of mastering the world's flags."
            gradientVariant="emerald"
          />

          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            {/* FAQ Column (7 cols) */}
            <div className="space-y-6 lg:col-span-7">
              <h3 className="flex items-center gap-2 font-display text-lg font-bold text-white">
                <HelpCircle className="h-5 w-5 text-emerald-400" />
                Frequently Asked Questions
              </h3>

              <div className="space-y-3">
                {faqs.map((faq, idx) => {
                  const isOpen = openFAQIndex === idx;
                  return (
                    <div
                      key={idx}
                      className="overflow-hidden rounded-2xl border border-white/[0.08] bg-[#070514]/85 backdrop-blur-xl transition-colors duration-200 hover:border-emerald-500/35"
                    >
                      <button
                        type="button"
                        onClick={() => toggleFAQ(idx)}
                        className="flex w-full items-center justify-between px-5 py-4 text-left font-medium text-zinc-200 transition-colors hover:text-white"
                      >
                        <span className="text-sm font-semibold">{faq.question}</span>
                        <span className="ml-4 shrink-0 text-zinc-400">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className={`h-4 w-4 transform transition-transform duration-300 ${
                              isOpen ? "rotate-180 text-emerald-400" : ""
                            }`}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m19.5 8.25-7.5 7.5-7.5-7.5"
                            />
                          </svg>
                        </span>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: "easeInOut" }}
                          >
                            <div className="border-t border-white/[0.06] bg-black/30 px-5 pb-4 pt-3 text-sm leading-relaxed text-zinc-300/90">
                              {faq.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>

              {/* Direct Support Notice & Legal Links */}
              <div className="rounded-2xl border border-white/[0.08] bg-[#070514]/70 p-5 text-xs leading-relaxed text-zinc-400 backdrop-blur-xl space-y-3">
                <div>
                  <strong className="text-zinc-200">Direct Engineering Support:</strong> If your issue requires sending screenshots or crash logs, please email us directly at{" "}
                  <a
                    href="mailto:info@askstudios.net"
                    className="font-medium text-emerald-400 hover:text-emerald-300 hover:underline"
                  >
                    info@askstudios.net
                  </a>. We reply to all queries within 24 business hours.
                </div>
                <div className="pt-2 border-t border-white/[0.06] flex flex-wrap gap-4 text-zinc-500">
                  <Link href="/flagquest-privacy-policy" className="text-emerald-400 hover:underline">
                    Privacy Policy
                  </Link>
                  <span>•</span>
                  <Link href="/flagquest-terms" className="text-emerald-400 hover:underline">
                    Terms of Service
                  </Link>
                  <span>•</span>
                  <Link href="/products/flagquest" className="text-zinc-400 hover:underline">
                    FlagQuest Overview
                  </Link>
                </div>
              </div>
            </div>

            {/* Form Column (5 cols) */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-white/[0.08] bg-[#070514]/85 p-6 sm:p-8 shadow-2xl backdrop-blur-2xl">
                <h3 className="flex items-center gap-2 font-display text-lg font-bold text-white mb-2">
                  <Mail className="h-5 w-5 text-emerald-400" />
                  Contact Support
                </h3>
                <p className="text-xs text-zinc-400 mb-6">
                  Submit a ticket directly to the ASK Studios engineering team.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name */}
                  <div>
                    <label htmlFor="support-name" className="block text-xs font-medium text-zinc-300">
                      Your Name
                    </label>
                    <input
                      id="support-name"
                      type="text"
                      required
                      className="mt-1.5 w-full rounded-xl border border-white/[0.1] bg-[#03020a]/80 px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 outline-none transition-colors duration-200 focus:border-emerald-500/80 focus:ring-1 focus:ring-emerald-500/20"
                      placeholder="e.g. Jane Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="support-email" className="block text-xs font-medium text-zinc-300">
                      Email Address
                    </label>
                    <input
                      id="support-email"
                      type="email"
                      required
                      className="mt-1.5 w-full rounded-xl border border-white/[0.1] bg-[#03020a]/80 px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 outline-none transition-colors duration-200 focus:border-emerald-500/80 focus:ring-1 focus:ring-emerald-500/20"
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  {/* Platform & Inquiry Type */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="support-platform" className="block text-xs font-medium text-zinc-300">
                        Platform
                      </label>
                      <select
                        id="support-platform"
                        className="mt-1.5 w-full rounded-xl border border-white/[0.1] bg-[#03020a]/80 px-3 py-2.5 text-sm text-zinc-200 outline-none focus:border-emerald-500/80"
                        value={platform}
                        onChange={(e) => setPlatform(e.target.value)}
                      >
                        <option value="iOS">iOS / iPhone</option>
                        <option value="Android">Android</option>
                        <option value="iPad">iPad</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="support-inquiry" className="block text-xs font-medium text-zinc-300">
                        Category
                      </label>
                      <select
                        id="support-inquiry"
                        className="mt-1.5 w-full rounded-xl border border-white/[0.1] bg-[#03020a]/80 px-3 py-2.5 text-sm text-zinc-200 outline-none focus:border-emerald-500/80"
                        value={inquiryType}
                        onChange={(e) => setInquiryType(e.target.value)}
                      >
                        <option value="Bug Report">Bug Report</option>
                        <option value="Feature Request">Suggestion</option>
                        <option value="Question">Gameplay Question</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="support-subject" className="block text-xs font-medium text-zinc-300">
                      Subject
                    </label>
                    <input
                      id="support-subject"
                      type="text"
                      required
                      className="mt-1.5 w-full rounded-xl border border-white/[0.1] bg-[#03020a]/80 px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 outline-none transition-colors duration-200 focus:border-emerald-500/80 focus:ring-1 focus:ring-emerald-500/20"
                      placeholder="Summary of question or issue"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="support-message" className="block text-xs font-medium text-zinc-300">
                      Message
                    </label>
                    <textarea
                      id="support-message"
                      required
                      rows={4}
                      className="mt-1.5 w-full rounded-xl border border-white/[0.1] bg-[#03020a]/80 px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 outline-none transition-colors duration-200 focus:border-emerald-500/80 focus:ring-1 focus:ring-emerald-500/20"
                      placeholder="Describe the issue, device model, or feature suggestion..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-emerald-400 py-3 text-sm font-bold text-slate-950 transition-all duration-200 hover:bg-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-slate-900 disabled:cursor-not-allowed disabled:opacity-75"
                  >
                    <Send className="h-4 w-4" />
                    {status === "submitting" ? "Transmitting..." : "Submit Support Request"}
                  </button>

                  {/* Status messages */}
                  {status === "success" && (
                    <div className="flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-3 text-xs text-emerald-300">
                      <CheckCircle2 className="h-4 w-4 shrink-0" />
                      <span>Thank you! Your ticket has been logged. We will follow up shortly.</span>
                    </div>
                  )}
                  {status === "error" && (
                    <div className="flex items-center gap-2 rounded-xl border border-rose-500/30 bg-rose-500/10 p-3 text-xs text-rose-300">
                      <AlertCircle className="h-4 w-4 shrink-0" />
                      <span>{errorMessage || "An error occurred. Please try again."}</span>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </SiteShell>
  );
}
