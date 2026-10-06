// src/components/layout/SiteShell.tsx
"use client";

import { motion } from "framer-motion";
import Navbar from "../ui/Navbar";
import Footer from "../ui/Footer";
import ChatWidget from "../chat/ChatWidget";

type Props = {
  children: React.ReactNode;
};

export default function SiteShell({ children }: Props) {
  return (
    <div
      className="min-h-screen text-[#f0f0f8] selection:bg-violet-500/30 selection:text-violet-200 antialiased relative overflow-x-hidden flex flex-col"
      style={{ background: "#04040c" }}
    >
      {/* Aurora animated background */}
      <div className="aurora-bg" aria-hidden />
      {/* Noise grain texture */}
      <div className="grain-overlay" aria-hidden />

      {/* Subtle dot grid overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-0 bg-dot-pattern"
        style={{ opacity: 0.35 }}
        aria-hidden
      />

      {/* Floating Navbar Container */}
      <div className="relative z-50 w-full max-w-7xl mx-auto px-4 pt-4 sm:px-6 lg:px-8">
        <Navbar />
      </div>

      {/* Main content wrapper - edge-to-edge capable */}
      <motion.main
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="flex-1 w-full"
      >
        {children}
      </motion.main>

      {/* Footer Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 pb-16 sm:px-6 lg:px-8">
        <Footer />
      </div>

      {/* Global chat widget */}
      <ChatWidget />
    </div>
  );
}
