// src/components/sections/AboutSection.tsx
"use client";

import { motion } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";

export default function AboutSection() {
  return (
    <section id="about" className="mt-20">
      <SectionHeader
        eyebrow="Studio"
        title="About ASK Studios"
      />
      <motion.p
        className="mt-3 max-w-2xl text-sm text-slate-300/80"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
      >
        ASK Studios is a product-focused studio based in Ontario, Canada. We combine strong
        engineering with a bias for shipping: from idea to deployed app, fast. Our work spans
        mobile apps, web platforms, AI tooling, and workflow automation for creators, teams, and
        everyday users.
      </motion.p>
    </section>
  );
}
