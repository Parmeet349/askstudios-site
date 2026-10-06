"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import AskLogo from "./AskLogo";

const navLinks = [
  { label: "Products", href: "/#products" },
  { label: "Services", href: "/#services" },
  { label: "AI Tech", href: "/#ai-showcase" },
  { label: "About", href: "/#about" },
  { label: "Blog", href: "/blog" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => setOpen(false);

  return (
    <header className="sticky top-4 z-50 w-full transition-all duration-300">
      <div
        className={`mx-auto flex items-center justify-between rounded-full border px-4 py-2.5 transition-all duration-300 ${
          scrolled
            ? "border-violet-500/20 bg-[#06040f]/92 shadow-2xl shadow-black/60 backdrop-blur-2xl"
            : "border-white/[0.07] bg-[#06040f]/60 backdrop-blur-xl"
        }`}
      >
        {/* Logo */}
        <AskLogo />

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center gap-1 lg:gap-2 text-xs font-medium text-zinc-400 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="rounded-full px-3.5 py-1.5 transition-colors duration-200 hover:bg-violet-500/10 hover:text-violet-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right Action & Status */}
        <div className="hidden items-center gap-3 md:flex">
          <div className="flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-3 py-1 text-[11px] font-tech text-emerald-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="tracking-wide">Available for Q2/Q3</span>
          </div>

          <Link
            href="/#contact"
            className="group inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 px-4 py-1.5 text-xs font-semibold text-white shadow-sm shadow-violet-500/30 transition-all duration-200 hover:from-violet-500 hover:to-indigo-500 hover:shadow-violet-400/40 hover:shadow-md active:scale-95"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-zinc-200 transition-colors hover:bg-violet-500/15 md:hidden"
          aria-label={open ? "Close navigation" : "Open navigation"}
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-2 overflow-hidden rounded-2xl border border-violet-500/15 bg-[#06040f]/96 p-4 shadow-2xl backdrop-blur-2xl md:hidden"
          >
            <div className="flex flex-col gap-1.5">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="rounded-xl px-3 py-2.5 text-sm font-medium text-zinc-300 transition-colors hover:bg-violet-500/10 hover:text-violet-200"
                >
                  {link.label}
                </Link>
              ))}

              <div className="my-2 border-t border-white/[0.08]" />

              <div className="flex items-center justify-between py-1 px-1">
                <span className="text-[11px] font-tech text-zinc-500">
                  Studio Status
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs text-emerald-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Available for new projects
                </span>
              </div>

              <Link
                href="/#contact"
                onClick={handleLinkClick}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-4 py-2.5 text-xs font-semibold text-white transition-all hover:from-violet-500 hover:to-indigo-500 shadow-lg shadow-violet-500/25"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
