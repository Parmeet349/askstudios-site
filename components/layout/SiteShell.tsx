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
    <div className="min-h-screen bg-slate-950 text-slate-50 antialiased">
      {/* gradient background */}
      <div className="pointer-events-none fixed inset-0 bg-gradient-to-br from-indigo-500/10 via-slate-900 to-emerald-500/10" />
      <div className="pointer-events-none fixed inset-0 mix-blend-overlay opacity-40" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col px-4 pb-10 pt-6 sm:px-6 lg:px-8">
        <Navbar />

        {/* page transition wrapper */}
        <motion.main
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1"
        >
          {children}
        </motion.main>

        <Footer />
      </div>
      {/* Global chat widget */}
      <ChatWidget />
    </div>
  );
}
