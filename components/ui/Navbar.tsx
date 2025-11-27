// src/components/ui/Navbar.tsx (or wherever you keep it)
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleLinkClick = () => setOpen(false);

  return (
    <>
      <header className="flex items-center justify-between py-4">
        {/* Logo side (unchanged) */}
        <motion.div
          className="flex items-center gap-2"
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-indigo-400 to-emerald-400 shadow-lg shadow-emerald-500/20" />
          <span className="text-sm font-semibold tracking-[0.25em] text-slate-200">
            ASK STUDIOS
          </span>
        </motion.div>

        {/* Desktop nav (original) */}
        <motion.nav
          className="hidden items-center gap-8 text-sm text-slate-200/80 md:flex"
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-white">
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-full border border-slate-500/50 bg-white/5 px-4 py-1.5 text-sm font-medium hover:border-emerald-400 hover:bg-emerald-400/10"
          >
            Work with us
          </Link>
        </motion.nav>

        {/* Mobile hamburger (new) */}
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-700 bg-slate-900/80 text-slate-200 md:hidden"
          aria-label={open ? "Close navigation" : "Open navigation"}
        >
          {/* Simple icon – could swap for SVG later */}
          <span className="text-lg leading-none">
            {open ? "✕" : "☰"}
          </span>
        </button>
      </header>

      {/* Mobile menu dropdown */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mb-2 rounded-2xl border border-slate-700/70 bg-slate-900/90 p-3 text-sm text-slate-100 shadow-xl backdrop-blur md:hidden"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="rounded-lg px-2 py-2 text-slate-200/90 hover:bg-slate-800 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}

              <Link
                href="/contact"
                onClick={handleLinkClick}
                className="mt-2 inline-flex items-center justify-center rounded-full border border-emerald-400/70 bg-emerald-400/10 px-3 py-2 text-xs font-semibold text-emerald-200 hover:bg-emerald-400/20"
              >
                Work with us
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
