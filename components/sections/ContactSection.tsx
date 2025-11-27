// src/components/sections/ContactSection.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";

type FormState = "idle" | "submitting" | "success" | "error";

export default function ContactSection() {
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
    <section id="contact" className="mt-20">
      <div className="grid gap-10 md:grid-cols-2 md:items-start">
        <div>
          <SectionHeader
            eyebrow="Let’s build"
            title="Start a project with ASK Studios"
            description="Tell us what you're building—an MVP, an internal tool, an AI integration, or something completely new. We’ll get back to you with next steps."
          />
          <motion.div
            className="mt-6 text-sm text-slate-300/80"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <div>Email</div>
            <a
              href="mailto:info@askstudios.net"
              className="font-medium text-emerald-300 hover:text-emerald-200"
            >
              info@askstudios.net
            </a>
          </motion.div>
        </div>

        <motion.form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-slate-700/70 bg-slate-900/60 p-5 space-y-4"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div>
            <label className="block text-xs font-medium text-slate-300/90">
              Name
            </label>
            <input
              type="text"
              className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-50 outline-none focus:border-emerald-400"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-300/90">
              Email
            </label>
            <input
              type="email"
              className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-50 outline-none focus:border-emerald-400"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-300/90">
              What do you want to build?
            </label>
            <select
              className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-50 outline-none focus:border-emerald-400"
              value={projectType}
              onChange={(e) => setProjectType(e.target.value)}
            >
              <option>Mobile app</option>
              <option>Web app / dashboard</option>
              <option>AI / automation</option>
              <option>SaaS product</option>
              <option>Something else</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-300/90">
              Project details
            </label>
            <textarea
              rows={4}
              className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-50 outline-none focus:border-emerald-400"
              placeholder="Tell us about your idea, timeline, and goals..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full rounded-full bg-emerald-400 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-emerald-300 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {status === "submitting" ? "Sending..." : "Send message"}
          </button>

          {status === "success" && (
            <p className="text-[11px] text-emerald-300">
              Thanks! Your message has been sent.
            </p>
          )}
          {status === "error" && (
            <p className="text-[11px] text-red-400">
              {errorMessage || "Something went wrong. Please try again."}
            </p>
          )}
          {status === "idle" && (
            <p className="text-[11px] text-slate-400">
              You’ll also receive a reply at the email you provided.
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
