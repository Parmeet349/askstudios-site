// src/components/sections/ContactSection.tsx
"use client";

import { motion } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";

export default function ContactSection() {
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
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-300/90">
              What do you want to build?
            </label>
            <select
              className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-50 outline-none focus:border-emerald-400"
            >
              <option>Mobile app</option>
              <option>Web app / dashboard</option>
              <option>AI / automation</option>
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
            />
          </div>
          <button
            type="button"
            className="w-full rounded-full bg-emerald-400 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-emerald-300"
          >
            Send message
          </button>
          <p className="text-[11px] text-slate-400">
            This is a static form for now. Later, we&apos;ll wire it up to email or a backend.
          </p>
        </motion.form>
      </div>
    </section>
  );
}
