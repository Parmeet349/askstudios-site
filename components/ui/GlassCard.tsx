// src/components/ui/GlassCard.tsx
"use client";

import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export default function GlassCard({
  children,
  className = "",
  delay = 0,
}: Props) {
  return (
    <motion.div
      className={`group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#070514]/85 p-6 shadow-xl shadow-black/50 backdrop-blur-xl transition-all duration-300 hover:border-violet-500/30 hover:bg-[#0b081e]/90 hover:shadow-2xl hover:shadow-violet-950/20 ${className}`}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4, scale: 1.005 }}
    >
      {/* Specular top light */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
        aria-hidden
      />
      {children}
    </motion.div>
  );
}
