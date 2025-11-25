// src/components/ui/SectionHeader.tsx
"use client";

import { motion } from "framer-motion";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: Props) {
  const alignment = align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <motion.div
      className={`flex flex-col ${alignment}`}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
    >
      {eyebrow && (
        <div className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300/80">
          {eyebrow}
        </div>
      )}
      <h2 className="mt-1 text-2xl font-semibold text-slate-50 sm:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="mt-2 max-w-xl text-sm text-slate-300/80">{description}</p>
      )}
    </motion.div>
  );
}
