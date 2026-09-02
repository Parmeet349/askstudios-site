// src/app/before-you-go/support/page.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import SiteShell from "@/components/layout/SiteShell";
import SectionHeader from "@/components/ui/SectionHeader";
import GlassCard from "@/components/ui/GlassCard";

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
      <section className="mt-10 mb-16">
        <SectionHeader
          eyebrow="App Support"
          title="Before You Go Support & Help Center"
          description="Have questions about departure rituals, lockscreen reminders, or need help? We're here to help you leave stress-free."
        />

        <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:items-start">
          {/* FAQ Column (7 cols) */}
          <div className="space-y-6 lg:col-span-7">
            <h3 className="text-lg font-semibold text-slate-100 mb-4 flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 text-emerald-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
                />
              </svg>
              Frequently Asked Questions
            </h3>

            <div className="space-y-3">
              {faqs.map((faq, idx) => {
                const isOpen = openFAQIndex === idx;
                return (
                  <div
                    key={idx}
                    className="overflow-hidden rounded-xl border border-slate-800/80 bg-slate-900/40 transition-colors duration-200 hover:border-slate-700/60"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFAQ(idx)}
                      className="flex w-full items-center justify-between px-5 py-4 text-left font-medium text-slate-200 transition-colors hover:text-slate-50"
                    >
                      <span className="text-sm">{faq.question}</span>
                      <span className="ml-4 shrink-0 text-slate-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className={`h-4 w-4 transform transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
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
                          <div className="border-t border-slate-800/80 px-5 pb-4 pt-3 text-sm text-slate-300/85 leading-relaxed bg-slate-950/20">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* Quick Email Notice & Links */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/20 p-4 text-xs text-slate-400/90 leading-relaxed space-y-2">
              <div>
                <span className="font-semibold text-slate-300">Direct Support:</span> You can also email us directly at{" "}
                <a
                  href="mailto:contact@askstudios.net"
                  className="font-medium text-emerald-300 hover:text-emerald-200 hover:underline"
                >
                  contact@askstudios.net
                </a>. We typically reply within 1–2 business days.
              </div>
              <div className="pt-2 border-t border-slate-800/60 flex flex-wrap gap-3 text-slate-400">
                <Link href="/before-you-go/privacy" className="text-emerald-300 hover:underline">
                  Privacy Policy
                </Link>
                <span>•</span>
                <Link href="/before-you-go/terms" className="text-emerald-300 hover:underline">
                  Terms &amp; Conditions
                </Link>
                <span>•</span>
                <Link href="/products/before-you-go" className="text-slate-400 hover:underline">
                  Product Overview
                </Link>
              </div>
            </div>
          </div>

          {/* Form Column (5 cols) */}
          <div className="lg:col-span-5">
            <GlassCard className="border border-slate-800/80 bg-slate-900/40 p-6">
              <h3 className="text-lg font-semibold text-slate-100 mb-2 flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 text-emerald-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>
                Contact Support
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Fill out the form below and we will respond as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label htmlFor="byg-support-name" className="block text-xs font-medium text-slate-300">
                    Your Name
                  </label>
                  <input
                    id="byg-support-name"
                    type="text"
                    required
                    className="mt-1.5 w-full rounded-lg border border-slate-850 bg-slate-950/65 px-3 py-2 text-sm text-slate-50 outline-none transition-colors duration-200 focus:border-emerald-500/80 focus:ring-1 focus:ring-emerald-500/20"
                    placeholder="e.g. Alex Smith"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="byg-support-email" className="block text-xs font-medium text-slate-300">
                    Email Address
                  </label>
                  <input
                    id="byg-support-email"
                    type="email"
                    required
                    className="mt-1.5 w-full rounded-lg border border-slate-850 bg-slate-950/65 px-3 py-2 text-sm text-slate-50 outline-none transition-colors duration-200 focus:border-emerald-500/80 focus:ring-1 focus:ring-emerald-500/20"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                {/* Platform & Inquiry Type grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="byg-support-platform" className="block text-xs font-medium text-slate-300">
                      App Platform
                    </label>
                    <select
                      id="byg-support-platform"
                      className="mt-1.5 w-full rounded-lg border border-slate-850 bg-slate-950/65 px-3 py-2 text-sm text-slate-100 outline-none focus:border-emerald-500/80"
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
                    <label htmlFor="byg-support-inquiry" className="block text-xs font-medium text-slate-300">
                      Inquiry Type
                    </label>
                    <select
                      id="byg-support-inquiry"
                      className="mt-1.5 w-full rounded-lg border border-slate-850 bg-slate-950/65 px-3 py-2 text-sm text-slate-100 outline-none focus:border-emerald-500/80"
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
                  <label htmlFor="byg-support-subject" className="block text-xs font-medium text-slate-300">
                    Subject
                  </label>
                  <input
                    id="byg-support-subject"
                    type="text"
                    required
                    className="mt-1.5 w-full rounded-lg border border-slate-850 bg-slate-950/65 px-3 py-2 text-sm text-slate-50 outline-none transition-colors duration-200 focus:border-emerald-500/80 focus:ring-1 focus:ring-emerald-500/20"
                    placeholder="Short description of your question or issue"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="byg-support-message" className="block text-xs font-medium text-slate-300">
                    How can we help?
                  </label>
                  <textarea
                    id="byg-support-message"
                    required
                    rows={4}
                    className="mt-1.5 w-full rounded-lg border border-slate-850 bg-slate-950/65 px-3 py-2 text-sm text-slate-50 outline-none transition-colors duration-200 focus:border-emerald-500/80 focus:ring-1 focus:ring-emerald-500/20"
                    placeholder="Please details your question, suggestion, or describe the steps to reproduce the issue..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full rounded-full bg-emerald-400 py-2.5 text-sm font-semibold text-slate-950 transition-all duration-200 hover:bg-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-slate-900 disabled:cursor-not-allowed disabled:opacity-75"
                >
                  {status === "submitting" ? "Sending..." : "Submit Support Request"}
                </button>

                {/* Status messages */}
                {status === "success" && (
                  <p className="text-xs text-emerald-400 bg-emerald-950/30 border border-emerald-900/50 rounded-lg p-3 text-center">
                    Thank you! Your support request has been submitted successfully. We&apos;ll be in touch soon.
                  </p>
                )}
                {status === "error" && (
                  <p className="text-xs text-red-400 bg-red-950/30 border border-red-900/50 rounded-lg p-3 text-center">
                    {errorMessage || "An error occurred. Please try again."}
                  </p>
                )}
              </form>
            </GlassCard>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
