import SiteShell from "@/components/layout/SiteShell";
import SectionHeader from "@/components/ui/SectionHeader";
import GlassCard from "@/components/ui/GlassCard";
import { products } from "@/components/sections/content";
import Link from "next/link";

export default function ProductsPage() {
  return (
    <SiteShell>
      <section className="mt-10">
        <SectionHeader
          eyebrow="Product suite"
          title="All ASK Studios products"
          description="Apps, tools, and platforms built by ASK Studios—ranging from mobile utilities to AI-powered SaaS."
        />

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {products.map((product, index) => (
            <GlassCard key={product.slug} delay={0.05 * index}>
              <div className="flex items-center justify-between gap-3">
                <div>
                  <div className="text-xs font-medium uppercase tracking-wide text-emerald-300/80">
                    {product.tag}
                  </div>
                  <h3 className="mt-1 text-lg font-semibold text-slate-50">
                    {product.name}
                  </h3>
                </div>
                <span className="rounded-full border border-slate-700 bg-slate-900/60 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-slate-300">
                  {product.status === "live"
                    ? "Live"
                    : product.status === "beta"
                    ? "In beta"
                    : "Coming soon"}
                </span>
              </div>

              <p className="mt-3 text-sm text-slate-300/80">
                {product.shortDescription}
              </p>

              <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-2 text-[11px] text-slate-300/80">
                  {product.platforms.map((platform) => (
                    <span
                      key={platform}
                      className="rounded-full bg-slate-800/80 px-2.5 py-1"
                    >
                      {platform}
                    </span>
                  ))}
                </div>

                <Link
                  href={product.href}
                  className="inline-flex items-center text-sm font-medium text-emerald-300 hover:text-emerald-200"
                >
                  {product.cta}
                  <span className="ml-1 text-base">↗</span>
                </Link>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
