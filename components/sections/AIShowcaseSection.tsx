// src/components/sections/AIShowcaseSection.tsx
"use client";

import { motion } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";
import GlassCard from "../ui/GlassCard";

export default function AIShowcaseSection() {
  return (
    <section className="mt-20">
      <SectionHeader
        eyebrow="AI & automation"
        title="Custom AI assistants and chatbots"
        description="The AI assistant you see on this site is the same pattern we can use for your product—support bots, onboarding assistants, internal tools, and more."
      />

      <div className="mt-6 grid gap-5 md:grid-cols-3">
        <GlassCard delay={0.05}>
          <h3 className="text-sm font-semibold text-slate-50">
            Site & product assistants
          </h3>
          <p className="mt-2 text-sm text-slate-300/80">
            Embed AI assistants into your website or app to answer questions, guide users,
            and reduce support workload—trained on your docs, FAQs, and product copy.
          </p>
        </GlassCard>

        <GlassCard delay={0.1}>
          <h3 className="text-sm font-semibold text-slate-50">
            Internal tools & workflows
          </h3>
          <p className="mt-2 text-sm text-slate-300/80">
            Build internal chat tools that sit on top of your data, so your team can query
            dashboards, documentation, and processes conversationally.
          </p>
        </GlassCard>

        <GlassCard delay={0.15}>
          <h3 className="text-sm font-semibold text-slate-50">
            Fully managed backend
          </h3>
          <p className="mt-2 text-sm text-slate-300/80">
            We handle the full stack: chat UI, Next.js API routes, LLM integration, and
            future enhancements like vector search and knowledge bases.
          </p>
        </GlassCard>
      </div>

      <motion.div
        className="mt-6 rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-4 text-xs text-slate-200"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.4 }}
      >
        💬 <span className="font-semibold">Live example:</span> The{" "}
        <span className="text-emerald-300">ASK Studios AI assistant</span> in the bottom-right
        corner, a custom <code>API</code> route, and
        an LLM. We can adapt the same pattern for your product or team.
      </motion.div>
    </section>
  );
}
