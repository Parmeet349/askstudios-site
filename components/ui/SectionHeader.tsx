// src/components/ui/SectionHeader.tsx
"use client";

import { motion } from "framer-motion";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  telemetryCode?: string;
  gradientVariant?: "prismatic" | "emerald" | "violet" | "cyan" | "amber";
};

const dotColors: Record<string, string> = {
  prismatic: "bg-cyan-400",
  emerald: "bg-emerald-400",
  violet: "bg-violet-400",
  cyan: "bg-cyan-400",
  amber: "bg-amber-400",
};

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  telemetryCode,
  gradientVariant = "violet",
}: Props) {
  const alignment =
    align === "center"
      ? "items-center text-center mx-auto"
      : "items-start text-left";

  const dotColor = dotColors[gradientVariant] || "bg-violet-400";

  return (
    <motion.div
      className={`flex flex-col ${alignment}`}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      {eyebrow && (
        <div className="inline-flex items-center gap-2.5 rounded-full border border-white/[0.08] bg-white/[0.02] px-3.5 py-1 text-[11px] font-tech uppercase tracking-[0.18em] text-zinc-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span
              className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 ${dotColor}`}
            />
            <span
              className={`relative inline-flex h-2 w-2 rounded-full ${dotColor}`}
            />
          </span>
          <span>{eyebrow}</span>
          {telemetryCode && (
            <>
              <span className="text-zinc-600">/</span>
              <span className="text-zinc-400">{telemetryCode}</span>
            </>
          )}
        </div>
      )}

      <h2 className="mt-3.5 font-display text-2xl font-bold tracking-tight text-chiseled-titanium sm:text-3xl lg:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-400/90 sm:text-base">
          {description}
        </p>
      )}
    </motion.div>
  );
}
