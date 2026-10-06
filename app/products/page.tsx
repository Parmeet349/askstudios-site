import { Metadata } from "next";
import SiteShell from "@/components/layout/SiteShell";
import Interactive3DHeading from "@/components/ui/Interactive3DHeading";
import { products } from "@/components/sections/content";
import Link from "next/link";
import {
  ArrowUpRight,
  Sparkles,
  Smartphone,
  Globe,
  Terminal,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Products Suite | ASK Studios",
  description:
    "Explore the proprietary mobile apps, AI tools, and platforms built and operated by ASK Studios.",
  alternates: {
    canonical: "/products",
  },
};

export default function ProductsPage() {
  return (
    <SiteShell>
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="pt-6 pb-12">
          <Interactive3DHeading
            eyebrow="PROPRIETARY SOFTWARE"
            badgeTelemetry="SUITE · LIVE CATALOG"
            title="Product Ecosystem &"
            highlight="Live Applications"
            variant="emerald"
            description="Explore our active portfolio of consumer utilities, mobile applications, and intelligent platforms—designed, engineered, and maintained by ASK Studios."
            align="center"
          />
        </section>

        {/* Products Grid */}
        <section className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {products.map((product, index) => {
            const isLive = product.status === "live";
            const isBeta = product.status === "beta";

            return (
              <div
                key={product.slug}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/[0.08] bg-[#070514]/85 p-8 shadow-2xl backdrop-blur-2xl transition-all duration-300 hover:border-emerald-500/35 hover:bg-[#0b081e]/90"
              >
                {/* Specular border glow */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/25 to-transparent" />

                <div>
                  {/* Top Metadata Bar */}
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <span className="font-tech text-xs uppercase tracking-wider text-emerald-400">
                        {product.tag}
                      </span>
                      {product.badge && (
                        <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 font-tech text-[10px] uppercase text-emerald-300">
                          {product.badge}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-1.5 font-tech text-xs">
                      {isLive ? (
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-emerald-300">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          Live
                        </span>
                      ) : isBeta ? (
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 px-2.5 py-0.5 text-violet-300">
                          <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
                          Beta
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-2.5 py-0.5 text-amber-300">
                          <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                          Coming Soon
                        </span>
                      )}
                    </div>
                  </div>

                  <h2 className="mt-4 font-display text-2xl font-bold text-white transition-colors group-hover:text-emerald-200 sm:text-3xl">
                    {product.name}
                  </h2>

                  <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                    {product.shortDescription}
                  </p>
                </div>

                <div className="mt-8 border-t border-white/[0.06] pt-6 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    {product.platforms.map((platform) => (
                      <span
                        key={platform}
                        className="rounded-lg border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 font-tech text-xs text-zinc-300"
                      >
                        {platform}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={product.href}
                    className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.06] border border-white/10 px-4 py-2 font-tech text-xs font-semibold text-white transition-all hover:bg-emerald-500/20 hover:border-emerald-400/40 hover:text-emerald-200"
                  >
                    <span>{product.cta}</span>
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </section>

        {/* Bottom Custom Software CTA */}
        <section className="mt-24">
          <div className="relative overflow-hidden rounded-3xl border border-emerald-500/30 bg-gradient-to-r from-emerald-950/40 via-[#070514]/90 to-violet-950/40 p-8 shadow-2xl backdrop-blur-2xl md:p-10">
            <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <span className="font-tech text-xs uppercase tracking-wider text-emerald-400">
                  CUSTOM SOFTWARE ENGINEERING
                </span>
                <h3 className="mt-2 font-display text-2xl font-bold text-white sm:text-3xl">
                  Need a product like this built for your venture?
                </h3>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-zinc-400">
                  ASK Studios engineers tailored mobile apps, SaaS dashboards, and automation tools for founders and teams worldwide.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row shrink-0">
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-400 to-teal-400 px-6 py-3 text-xs font-semibold text-black shadow-lg shadow-emerald-500/25 transition-all hover:from-emerald-300 hover:to-teal-300 active:scale-95"
                >
                  <span>Build with Us</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-xs font-medium text-zinc-300 hover:bg-white/[0.08] transition-colors"
                >
                  View Services
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </SiteShell>
  );
}
