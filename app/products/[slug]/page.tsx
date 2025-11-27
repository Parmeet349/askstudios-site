// src/app/products/[slug]/page.tsx

import SiteShell from "@/components/layout/SiteShell";
import SectionHeader from "@/components/ui/SectionHeader";
import GlassCard from "@/components/ui/GlassCard";
import {
  products,
  productDetails,
} from "@/components/sections/content";
import { notFound } from "next/navigation";

type ProductPageProps = {
  // 👇 params is a Promise in your Next version
  params: Promise<{ slug: string }>;
};

export default async function ProductDetailPage({ params }: ProductPageProps) {
  // ✅ unwrap the Promise
  const { slug } = await params;

  // Find the product from the central config
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const details = productDetails[product.slug];

  return (
    <SiteShell>
      <section className="mt-10 space-y-10">
        {/* Hero */}
        <div className="grid gap-8 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] md:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300/80">
              {product.tag}
            </p>
            <h1 className="mt-3 text-3xl font-semibold text-slate-50 sm:text-4xl">
              {product.name}
            </h1>
            {details?.heroTagline && (
              <p className="mt-3 max-w-xl text-sm text-slate-300/80">
                {details.heroTagline}
              </p>
            )}

            <div className="mt-5 flex flex-wrap gap-2 text-[11px] text-slate-300/80">
              {product.platforms.map((platform) => (
                <span
                  key={platform}
                  className="rounded-full bg-slate-900/80 px-3 py-1"
                >
                  {platform}
                </span>
              ))}

              <span className="rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1">
                {product.status === "live"
                  ? "Live"
                  : product.status === "beta"
                  ? "In beta"
                  : "Coming soon"}
              </span>
            </div>
          </div>

          {/* Side CTA card */}
          <GlassCard className="bg-slate-900/70">
            <h2 className="text-sm font-semibold text-slate-50">
              Work with ASK Studios
            </h2>
            <p className="mt-2 text-xs text-slate-300/80">
              Want something like{" "}
              <span className="font-semibold">{product.name}</span> for your
              own business or use case? ASK Studios can design and build a
              version tailored to you.
            </p>
            <a
              href="/contact"
              className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-emerald-400 px-4 py-2 text-xs font-semibold text-slate-950 hover:bg-emerald-300"
            >
              Start a project
            </a>
            <p className="mt-2 text-[11px] text-slate-400">
              Mention <span className="font-semibold">{product.name}</span> in
              your message.
            </p>
          </GlassCard>
        </div>

        {/* Overview + features + side info */}
        <div className="grid gap-8 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
          <div>
            <SectionHeader
              eyebrow="Overview"
              title={`What is ${product.name}?`}
            />
            <p className="mt-3 text-sm text-slate-300/80">
              {details?.overview ?? product.shortDescription}
            </p>

            {details?.features && (
              <div className="mt-6 space-y-2">
                <h3 className="text-sm font-semibold text-slate-50">
                  Key features
                </h3>
                <ul className="mt-2 space-y-1.5 text-sm text-slate-300/80">
                  {details.features.map((feature) => (
                    <li key={feature} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="space-y-5">
            {details?.idealFor && (
              <GlassCard>
                <h3 className="text-sm font-semibold text-slate-50">
                  Who is this for?
                </h3>
                <ul className="mt-2 space-y-1.5 text-sm text-slate-300/80">
                  {details.idealFor.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            )}

            {details?.techStack && (
              <GlassCard>
                <h3 className="text-sm font-semibold text-slate-50">
                  Tech stack
                </h3>
                <div className="mt-2 flex flex-wrap gap-2 text-xs text-slate-300/80">
                  {details.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-slate-900/80 px-3 py-1"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </GlassCard>
            )}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
