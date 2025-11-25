// src/components/ui/GlassCard.tsx
"use client";

import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export default function GlassCard({ children, className = "", delay = 0 }: Props) {
  return (
    <motion.div
      className={`group rounded-2xl border border-slate-700/70 bg-slate-900/60 p-5 shadow-sm ${className}`}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -4, scale: 1.01 }}
    >
      {children}
    </motion.div>
  );
}
