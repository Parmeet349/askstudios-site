// src/components/ui/Navbar.tsx
"use client";

import { motion } from "framer-motion";

const navLinks = [
  { label: "Products", href: "#products" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="flex items-center justify-between py-4">
      <motion.div
        className="flex items-center gap-2"
        initial={{ opacity: 0, x: -16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-indigo-400 to-emerald-400 shadow-lg shadow-emerald-500/20" /> */}
            {/* Add Logo */}
            <img src="/logo.png" alt="ASK Studios Logo" className="h-8 w-8 rounded-xl shadow-lg shadow-emerald-500/20" />
        <span className="text-sm font-semibold tracking-[0.25em] text-slate-200">

          ASK STUDIOS
        </span>
      </motion.div>

      <motion.nav
        className="hidden items-center gap-8 text-sm text-slate-200/80 md:flex"
        initial={{ opacity: 0, x: 16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
      >
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} className="hover:text-white">
            {link.label}
          </a>
        ))}
        <a
          href="#contact"
          className="rounded-full border border-slate-500/50 bg-white/5 px-4 py-1.5 text-sm font-medium hover:border-emerald-400 hover:bg-emerald-400/10"
        >
          Work with us
        </a>
      </motion.nav>
    </header>
  );
}
