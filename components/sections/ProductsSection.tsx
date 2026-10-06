"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  Smartphone,
  Globe,
  Sparkles,
  Volume2,
  Lock,
  CheckSquare,
  Star,
  ExternalLink,
  ChevronRight,
} from "lucide-react";
import Interactive3DHeading from "@/components/ui/Interactive3DHeading";
import { products } from "./content";

type FilterCategory = "all" | "mobile" | "ai" | "client";

const productVisuals: Record<
  string,
  {
    image?: string;
    imageAlt?: string;
    category: "mobile" | "ai" | "client";
    accent: {
      from: string;
      to: string;
      border: string;
      text: string;
      glow: string;
    };
    specs?: { label: string; value: string }[];
  }
> = {
  brieflyca: {
    image: "/images/blog/brieflyca-hero.png",
    imageAlt: "BrieflyCA Canadian News App Interface",
    category: "mobile",
    accent: {
      from: "#03281c",
      to: "#040d0a",
      border: "rgba(16,185,129,0.3)",
      text: "#34d399",
      glow: "rgba(16,185,129,0.15)",
    },
    specs: [
      { label: "ETL Pipeline", value: "< 60s autonomous" },
      { label: "Architecture", value: "React Native + Edge" },
      { label: "Target Region", value: "Canada-wide" },
    ],
  },
  autolog: {
    image: "/images/blog/autolog-vehicle-manager-hero.png",
    imageAlt: "AutoLog Smart Vehicle Logbook Interface",
    category: "mobile",
    accent: {
      from: "#071330",
      to: "#030814",
      border: "rgba(56,189,248,0.3)",
      text: "#38bdf8",
      glow: "rgba(56,189,248,0.15)",
    },
    specs: [
      { label: "Database", value: "100% Offline SQLite" },
      { label: "Telemetry", value: "Fuel, Trips, Services" },
      { label: "Platform", value: "iOS & Google Play" },
    ],
  },
  resumerail: {
    image: "/images/blog/resumerail-hero.png",
    imageAlt: "ResumeRail AI ATS Builder Interface",
    category: "ai",
    accent: {
      from: "#1e0b40",
      to: "#080312",
      border: "rgba(167,139,250,0.3)",
      text: "#c4b5fd",
      glow: "rgba(167,139,250,0.15)",
    },
    specs: [
      { label: "Engine", value: "ATS Keyword Scoring" },
      { label: "Renderer", value: "Instant PDF Engine" },
    ],
  },
  "before-you-go": {
    category: "mobile",
    accent: {
      from: "#2c1202",
      to: "#0e0501",
      border: "rgba(251,191,36,0.3)",
      text: "#fbbf24",
      glow: "rgba(251,191,36,0.15)",
    },
  },
  "tambola-caller": {
    category: "mobile",
    accent: {
      from: "#330310",
      to: "#100105",
      border: "rgba(251,113,133,0.3)",
      text: "#fb7185",
      glow: "rgba(251,113,133,0.15)",
    },
  },
  "jeet-auto-parts": {
    image: "/images/blog/jeet-auto-parts-hero.png",
    imageAlt: "Jeet Auto Parts Mumbai Hub",
    category: "client",
    accent: {
      from: "#0c233f",
      to: "#040e1a",
      border: "rgba(96,165,250,0.3)",
      text: "#60a5fa",
      glow: "rgba(96,165,250,0.15)",
    },
    specs: [
      { label: "Catalog", value: "10,000+ SKUs" },
      { label: "Integration", value: "Automated WhatsApp API" },
    ],
  },
  managerly: {
    category: "mobile",
    accent: {
      from: "#121038",
      to: "#050414",
      border: "rgba(129,140,248,0.3)",
      text: "#818cf8",
      glow: "rgba(129,140,248,0.15)",
    },
  },
};

export default function ProductsSection() {
  const [filter, setFilter] = useState<FilterCategory>("all");

  const filteredProducts = products.filter((p) => {
    if (filter === "all") return true;
    const meta = productVisuals[p.slug];
    if (!meta) return true;
    if (filter === "mobile")
      return (
        meta.category === "mobile" ||
        p.platforms.includes("Mobile") ||
        p.platforms.includes("iOS")
      );
    if (filter === "ai")
      return meta.category === "ai" || p.tag.toLowerCase().includes("ai");
    if (filter === "client")
      return meta.category === "client" || p.badge?.includes("Client");
    return true;
  });

  const counts = {
    all: products.length,
    mobile: products.filter(
      (p) =>
        productVisuals[p.slug]?.category === "mobile" ||
        p.platforms.includes("Mobile") ||
        p.platforms.includes("iOS"),
    ).length,
    ai: products.filter(
      (p) =>
        productVisuals[p.slug]?.category === "ai" ||
        p.tag.toLowerCase().includes("ai"),
    ).length,
    client: products.filter(
      (p) =>
        productVisuals[p.slug]?.category === "client" ||
        p.badge?.includes("Client"),
    ).length,
  };

  return (
    <section id="products" className="relative scroll-mt-24 py-28">
      {/* Editorial Header & Live Fleet Counter */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 border-b border-white/[0.08] pb-8">
        <Interactive3DHeading
          badge="Active Product Fleet"
          badgeTelemetry={`${products.length} Shipped Platforms`}
          badgeVariant="emerald"
          leadText="Software we architect,"
          highlightText="ship & operate."
          variant="emerald"
          description="From autonomous AI news feeds in Canada to zero-cloud vehicle trackers and high-volume commerce engines. Built on clean architecture, zero bloat."
          size="section"
          className="max-w-2xl"
        />

        {/* Filter Pills with Counts */}
        <div className="flex flex-wrap items-center gap-2 pb-2">
          {(
            [
              { id: "all", label: "All Fleet", count: counts.all },
              { id: "mobile", label: "Mobile Apps", count: counts.mobile },
              { id: "ai", label: "AI Platforms", count: counts.ai },
              { id: "client", label: "Client Systems", count: counts.client },
            ] as const
          ).map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-mono transition-all duration-300 ${
                filter === tab.id
                  ? "bg-white text-black font-semibold shadow-lg shadow-white/10"
                  : "border border-white/10 bg-white/[0.03] text-zinc-400 hover:border-violet-500/40 hover:text-white hover:bg-white/[0.06]"
              }`}
            >
              <span>{tab.label}</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  filter === tab.id
                    ? "bg-black/10 text-black font-bold"
                    : "bg-white/10 text-zinc-400"
                }`}
              >
                {tab.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filteredProducts.map((product, index) => {
            const visual = productVisuals[product.slug] || {
              category: "mobile",
              accent: {
                from: "#1a103a",
                to: "#08050f",
                border: "rgba(124,58,237,0.25)",
                text: "#c4b5fd",
                glow: "rgba(124,58,237,0.15)",
              },
            };
            const isFeatured =
              product.slug === "brieflyca" || product.slug === "autolog";

            return (
              <motion.div
                key={product.slug}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.45, delay: index * 0.04 }}
                className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl transition-all duration-500 hover:-translate-y-1 ${
                  isFeatured ? "md:col-span-2 lg:col-span-2" : "col-span-1"
                }`}
                style={{
                  background: `linear-gradient(155deg, ${visual.accent.from} 0%, ${visual.accent.to} 100%)`,
                  border: `1px solid ${visual.accent.border}`,
                  boxShadow: `0 10px 30px -15px ${visual.accent.glow}`,
                }}
              >
                {/* Featured Layout (2-Column Hero Card) */}
                {isFeatured && visual.image ? (
                  <div className="grid grid-cols-1 md:grid-cols-12 h-full">
                    {/* Left: Content & Specs */}
                    <div className="md:col-span-6 p-7 sm:p-9 flex flex-col justify-between">
                      <div>
                        {/* Top Pills */}
                        <div className="flex flex-wrap items-center gap-2 mb-4">
                          <span
                            className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-mono font-semibold"
                            style={{
                              background: "rgba(0,0,0,0.5)",
                              border: `1px solid ${visual.accent.border}`,
                              color: visual.accent.text,
                            }}
                          >
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
                            {product.badge || "Live Fleet"}
                          </span>
                          <span className="text-[11px] font-mono text-zinc-400">
                            {product.tag}
                          </span>
                        </div>

                        <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                          {product.name}
                        </h3>

                        <p className="mt-3 text-xs sm:text-sm leading-relaxed text-zinc-300/90 font-normal">
                          {product.shortDescription}
                        </p>

                        {/* Architecture Specs */}
                        {visual.specs && (
                          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] font-mono border-t border-white/[0.08] pt-4">
                            {visual.specs.map((s) => (
                              <div
                                key={s.label}
                                className="rounded-lg bg-black/40 p-2 border border-white/[0.04]"
                              >
                                <span className="text-zinc-500 block text-[9px] uppercase tracking-wider">
                                  {s.label}
                                </span>
                                <span
                                  className="font-medium"
                                  style={{ color: visual.accent.text }}
                                >
                                  {s.value}
                                </span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Action buttons */}
                      <div className="mt-7 flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-white/[0.08]">
                        <div className="flex flex-wrap items-center gap-2">
                          {product.links?.appStore && (
                            <a
                              href={product.links.appStore}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="rounded-full bg-white px-3 py-1 text-[11px] font-medium text-black hover:bg-zinc-200 transition-colors"
                            >
                              App Store ↗
                            </a>
                          )}
                          {product.links?.playStore && (
                            <a
                              href={product.links.playStore}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="rounded-full border border-white/20 bg-white/[0.05] px-3 py-1 text-[11px] font-medium text-white hover:bg-white/10 transition-colors"
                            >
                              Google Play ↗
                            </a>
                          )}
                          {product.links?.website && (
                            <a
                              href={product.links.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[11px] font-mono text-zinc-400 hover:text-white transition-colors"
                            >
                              Domain ↗
                            </a>
                          )}
                        </div>

                        <Link
                          href={product.href}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold hover:underline"
                          style={{ color: visual.accent.text }}
                        >
                          <span>Architecture Dossier</span>
                          <ChevronRight className="h-3.5 w-3.5" />
                        </Link>
                      </div>
                    </div>

                    {/* Right: Rich Image / Frame */}
                    <div className="md:col-span-6 relative min-h-[260px] md:min-h-full overflow-hidden border-t md:border-t-0 md:border-l border-white/[0.08]">
                      <Image
                        src={visual.image}
                        alt={visual.imageAlt || product.name}
                        fill
                        unoptimized
                        className="object-cover object-top opacity-85 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-100"
                      />
                      <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                          background: `linear-gradient(to right, ${visual.accent.from} 0%, transparent 40%)`,
                        }}
                      />
                    </div>
                  </div>
                ) : (
                  /* Standard Product Card */
                  <>
                    {visual.image ? (
                      <div className="relative h-48 overflow-hidden border-b border-white/[0.08]">
                        <Image
                          src={visual.image}
                          alt={visual.imageAlt || product.name}
                          fill
                          unoptimized
                          className="object-cover object-top opacity-80 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-100"
                        />
                        <div
                          className="absolute inset-0 pointer-events-none"
                          style={{
                            background: `linear-gradient(to bottom, transparent 40%, ${visual.accent.to} 100%)`,
                          }}
                        />
                        <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                          <span
                            className="rounded-full px-2 py-0.5 font-mono text-[10px] font-semibold backdrop-blur-md"
                            style={{
                              background: "rgba(0,0,0,0.65)",
                              border: `1px solid ${visual.accent.border}`,
                              color: visual.accent.text,
                            }}
                          >
                            {product.name}
                          </span>
                          {product.badge && (
                            <span className="rounded-full bg-black/60 border border-white/10 px-2 py-0.5 text-[10px] font-mono text-zinc-300 backdrop-blur-md">
                              {product.badge}
                            </span>
                          )}
                        </div>
                      </div>
                    ) : (
                      /* In-code Mini UI Preview */
                      <div className="p-5 border-b border-white/[0.08]">
                        {product.slug === "before-you-go" && (
                          <div className="rounded-xl p-3.5 space-y-2 bg-black/40 border border-amber-500/20">
                            <div className="flex items-center justify-between font-mono text-[11px] text-amber-300">
                              <span>DEPARTURE RITUAL</span>
                              <span className="text-zinc-500 text-[9px]">
                                Offline · Private
                              </span>
                            </div>
                            <div className="space-y-1.5 text-xs text-zinc-300 pt-1">
                              {[
                                "Passport & Visa",
                                "Universal Adapter",
                                "AirPods",
                              ].map((item, i) => (
                                <div
                                  key={item}
                                  className="flex items-center gap-2"
                                >
                                  <CheckSquare
                                    className={`h-3.5 w-3.5 ${
                                      i < 2 ? "text-amber-400" : "text-zinc-600"
                                    }`}
                                  />
                                  <span
                                    className={i === 2 ? "text-zinc-500" : ""}
                                  >
                                    {item}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                        {product.slug === "tambola-caller" && (
                          <div className="rounded-xl p-3.5 space-y-2 bg-black/40 border border-rose-500/20">
                            <div className="flex items-center gap-2 font-mono text-[11px] text-rose-300">
                              <Volume2 className="h-3.5 w-3.5" />
                              <span>VOICE CALLER ENGINE</span>
                            </div>
                            <div className="flex items-center gap-2 pt-1">
                              <div className="flex h-10 w-10 items-center justify-center rounded-lg font-mono text-lg font-bold text-white bg-rose-500/20 border border-rose-500/40">
                                47
                              </div>
                              <div className="grid grid-cols-4 gap-1 flex-1 font-mono text-[10px] text-zinc-400">
                                {["07", "19", "47*", "82"].map((n) => (
                                  <span
                                    key={n}
                                    className="rounded bg-black/50 p-1 text-center"
                                    style={{
                                      color:
                                        n === "47*" ? "#fb7185" : undefined,
                                    }}
                                  >
                                    {n}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}
                        {product.slug === "managerly" && (
                          <div className="rounded-xl p-3.5 space-y-2 bg-black/40 border border-indigo-500/20">
                            <div className="flex items-center gap-2 font-mono text-[11px] text-indigo-300">
                              <Lock className="h-3.5 w-3.5" />
                              <span>ENCRYPTION VAULT</span>
                              <span className="ml-auto text-zinc-500 text-[9px]">
                                AES-256
                              </span>
                            </div>
                            <div className="rounded border border-indigo-500/20 bg-black/40 px-3 py-1.5 font-mono text-[11px] text-zinc-300 flex items-center justify-between">
                              <span>••••••••••••••••</span>
                              <span className="text-[10px] text-indigo-400 font-semibold">
                                Encrypted
                              </span>
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Card Content Body */}
                    <div className="p-6 flex flex-1 flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between">
                          <span
                            className="font-mono text-[10px] uppercase tracking-wider"
                            style={{ color: visual.accent.text }}
                          >
                            {product.tag}
                          </span>
                          <span className="text-[10px] font-mono text-zinc-500 uppercase">
                            {product.status}
                          </span>
                        </div>
                        <h3 className="mt-1 text-xl font-bold tracking-tight text-white">
                          {product.name}
                        </h3>
                        <p className="mt-2 text-xs leading-relaxed text-zinc-400 line-clamp-2">
                          {product.shortDescription}
                        </p>

                        <div className="mt-3.5 flex flex-wrap gap-1.5">
                          {product.platforms.map((platform) => (
                            <span
                              key={platform}
                              className="rounded-md px-2 py-0.5 text-[10px] font-mono border border-white/[0.06] bg-white/[0.03] text-zinc-300"
                            >
                              {platform}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mt-5 flex items-center justify-between border-t border-white/[0.08] pt-4">
                        <div className="flex items-center gap-2.5">
                          {product.links?.appStore && (
                            <a
                              href={product.links.appStore}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[11px] text-zinc-400 hover:text-white transition-colors"
                            >
                              iOS ↗
                            </a>
                          )}
                          {product.links?.playStore && (
                            <a
                              href={product.links.playStore}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[11px] text-zinc-400 hover:text-white transition-colors"
                            >
                              Play ↗
                            </a>
                          )}
                          {product.links?.website && (
                            <a
                              href={product.links.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[11px] text-zinc-400 hover:text-white transition-colors"
                            >
                              Web ↗
                            </a>
                          )}
                        </div>

                        <Link
                          href={product.href}
                          className="inline-flex items-center gap-1 text-xs font-semibold hover:underline"
                          style={{ color: visual.accent.text }}
                        >
                          <span>Case Details</span>
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </Link>
                      </div>
                    </div>
                  </>
                )}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </section>
  );
}
