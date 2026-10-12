// src/app/before-you-go/support/page.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import SiteShell from "@/components/layout/SiteShell";
import SectionHeader from "@/components/ui/SectionHeader";
import { HelpCircle, Mail, Send, CheckCircle2, AlertCircle } from "lucide-react";

type FormState = "idle" | "submitting" | "success" | "error";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How do departure reminders and notifications work?",
    answer:
      "Before You Go schedules local reminders directly on your device based on your planned departure times. You can set notifications to alert you 5, 15, 30, or 60 minutes before leaving. Lockscreen notifications show an instant checklist preview so you can verify your essentials at a glance without opening the app.",
  },
  {
    question: "Why am I not receiving departure notifications?",
    answer:
      "Please check that notifications are enabled for Before You Go in your device's System Settings. On iOS, verify that Focus modes (such as Do Not Disturb) are not silencing alerts. On Android, ensure battery optimization / background restrictions are disabled for the app so timed alarms trigger accurately.",
  },
  {
    question: "What is the difference between 'Always Bring' and place-specific items?",
    answer:
      "'Always Bring' items are universal essentials (like keys, phone, and wallet) that automatically attach to every departure checklist. Place-specific items only show up when preparing for a specific destination (e.g., gym shoes for Gym, work badge for Office, or passport for Travel).",
  },
  {
    question: "Is any of my personal data, routines, or checklists stored online?",
    answer:
      "No. Before You Go is built 100% offline-first and private. We have no user accounts, no external servers, and no trackers or analytics. All your checklists, places, and notification settings reside entirely on your device's local storage.",
  },
  {
    question: "What happens if I uninstall the app or change phones?",
    answer:
      "Because all data is stored strictly on your local device for complete privacy, uninstalling the application or clearing its app storage will erase your saved checklists. We recommend noting down custom routines before reinstalling or switching devices.",
  },
  {
    question: "How do I report a bug or request a new feature?",
    answer:
      "You can submit a ticket using the contact form on this page or email us directly at contact@askstudios.net. Please mention your device OS version and describe the behavior or requested feature so we can help promptly.",
  },
];

export default function BeforeYouGoSupportPage() {
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

    const projectType = `Before You Go Support - ${inquiryType}`;
    const compiledMessage = `Platform: ${platform}\nSubject: ${subject}\n\nUser Message:\n${message}`;

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          projectType,
          message: compiledMessage,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.ok) {
        setStatus("error");
        setErrorMessage(data?.error || "Failed to send support request. Please try again.");
        return;
      }

      setStatus("success");
      setName("");
      setEmail("");
      setPlatform("iOS");
      setInquiryType("Bug Report");
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
            eyebrow="APP SUPPORT"
            telemetryCode="BEFORE-YOU-GO · HELP DESK"
            title="Before You Go Support & Help Center"
            description="Have questions about departure rituals, lockscreen reminders, or need help? We're here to help you leave stress-free."
            gradientVariant="cyan"
          />

          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            {/* FAQ Column (7 cols) */}
            <div className="space-y-6 lg:col-span-7">
              <h3 className="flex items-center gap-2 font-display text-lg font-bold text-white">
                <HelpCircle className="h-5 w-5 text-cyan-400" />
                Frequently Asked Questions
              </h3>

              <div className="space-y-3">
                {faqs.map((faq, idx) => {
                  const isOpen = openFAQIndex === idx;
                  return (
                    <div
                      key={idx}
                      className="overflow-hidden rounded-2xl border border-white/[0.08] bg-[#070514]/85 backdrop-blur-xl transition-colors duration-200 hover:border-cyan-500/35"
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
                              isOpen ? "rotate-180 text-cyan-400" : ""
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
                  <strong className="text-zinc-200">Direct Engineering Support:</strong> You can also email us directly at{" "}
                  <a
                    href="mailto:contact@askstudios.net"
                    className="font-medium text-cyan-400 hover:text-cyan-300 hover:underline"
                  >
                    contact@askstudios.net
                  </a>. We typically reply within 24 business hours.
                </div>
                <div className="pt-2 border-t border-white/[0.06] flex flex-wrap gap-4 text-zinc-500">
                  <Link href="/before-you-go/privacy" className="text-cyan-400 hover:underline">
                    Privacy Policy
                  </Link>
                  <span>•</span>
                  <Link href="/before-you-go/terms" className="text-cyan-400 hover:underline">
                    Terms &amp; Conditions
                  </Link>
                  <span>•</span>
                  <Link href="/products/before-you-go" className="text-zinc-400 hover:underline">
                    Product Overview
                  </Link>
                </div>
              </div>
            </div>

            {/* Form Column (5 cols) */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-white/[0.08] bg-[#070514]/85 p-6 sm:p-8 shadow-2xl backdrop-blur-2xl">
                <h3 className="flex items-center gap-2 font-display text-lg font-bold text-white mb-2">
                  <Mail className="h-5 w-5 text-cyan-400" />
                  Contact Support
                </h3>
                <p className="text-xs text-zinc-400 mb-6">
                  Fill out the form below and we will respond promptly.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name */}
                  <div>
                    <label htmlFor="byg-support-name" className="block text-xs font-medium text-zinc-300">
                      Your Name
                    </label>
                    <input
                      id="byg-support-name"
                      type="text"
                      required
                      className="mt-1.5 w-full rounded-xl border border-white/[0.1] bg-[#03020a]/80 px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 outline-none transition-colors duration-200 focus:border-cyan-500/80 focus:ring-1 focus:ring-cyan-500/20"
                      placeholder="e.g. Jane Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="byg-support-email" className="block text-xs font-medium text-zinc-300">
                      Email Address
                    </label>
                    <input
                      id="byg-support-email"
                      type="email"
                      required
                      className="mt-1.5 w-full rounded-xl border border-white/[0.1] bg-[#03020a]/80 px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 outline-none transition-colors duration-200 focus:border-cyan-500/80 focus:ring-1 focus:ring-cyan-500/20"
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  {/* Platform & Inquiry Type */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="byg-support-platform" className="block text-xs font-medium text-zinc-300">
                        Platform
                      </label>
                      <select
                        id="byg-support-platform"
                        className="mt-1.5 w-full rounded-xl border border-white/[0.1] bg-[#03020a]/80 px-3 py-2.5 text-sm text-zinc-200 outline-none focus:border-cyan-500/80"
                        value={platform}
                        onChange={(e) => setPlatform(e.target.value)}
                      >
                        <option value="iOS">iOS / iPhone</option>
                        <option value="Android">Android</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="byg-support-inquiry" className="block text-xs font-medium text-zinc-300">
                        Category
                      </label>
                      <select
                        id="byg-support-inquiry"
                        className="mt-1.5 w-full rounded-xl border border-white/[0.1] bg-[#03020a]/80 px-3 py-2.5 text-sm text-zinc-200 outline-none focus:border-cyan-500/80"
                        value={inquiryType}
                        onChange={(e) => setInquiryType(e.target.value)}
                      >
                        <option value="Bug Report">Bug Report</option>
                        <option value="Feature Request">Suggestion</option>
                        <option value="Question">Question</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="byg-support-subject" className="block text-xs font-medium text-zinc-300">
                      Subject
                    </label>
                    <input
                      id="byg-support-subject"
                      type="text"
                      required
                      className="mt-1.5 w-full rounded-xl border border-white/[0.1] bg-[#03020a]/80 px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 outline-none transition-colors duration-200 focus:border-cyan-500/80 focus:ring-1 focus:ring-cyan-500/20"
                      placeholder="Brief summary of your question"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="byg-support-message" className="block text-xs font-medium text-zinc-300">
                      Message
                    </label>
                    <textarea
                      id="byg-support-message"
                      required
                      rows={4}
                      className="mt-1.5 w-full rounded-xl border border-white/[0.1] bg-[#03020a]/80 px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 outline-none transition-colors duration-200 focus:border-cyan-500/80 focus:ring-1 focus:ring-cyan-500/20"
                      placeholder="Describe your question or issue in detail..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-cyan-400 py-3 text-sm font-bold text-slate-950 transition-all duration-200 hover:bg-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900 disabled:cursor-not-allowed disabled:opacity-75"
                  >
                    <Send className="h-4 w-4" />
                    {status === "submitting" ? "Transmitting..." : "Submit Support Request"}
                  </button>

                  {/* Status messages */}
                  {status === "success" && (
                    <div className="flex items-center gap-2 rounded-xl border border-cyan-500/30 bg-cyan-500/10 p-3 text-xs text-cyan-300">
                      <CheckCircle2 className="h-4 w-4 shrink-0" />
                      <span>Thank you! Your inquiry has been sent to our engineers.</span>
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
