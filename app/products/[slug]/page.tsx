// src/app/products/[slug]/page.tsx

import SiteShell from "@/components/layout/SiteShell";
import {
  products,
  productDetails,
} from "@/components/sections/content";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  ExternalLink,
  Code2,
  Users,
  Layers,
  Sparkles,
} from "lucide-react";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  const details = productDetails[product.slug];
  const title = `${product.name} - ${product.tag}`;
  const description = details?.overview || product.shortDescription;

  return {
    title,
    description,
    alternates: {
      canonical: `/products/${product.slug}`,
    },
    openGraph: {
      title: `${product.name} | ASK Studios`,
      description,
      url: `https://www.askstudios.net/products/${product.slug}`,
    },
    twitter: {
      title: `${product.name} | ASK Studios`,
      description,
    },
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;

  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const details = productDetails[product.slug];
  const links = product.links;

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: product.name,
    description: details?.overview || product.shortDescription,
    applicationCategory: product.tag,
    operatingSystem: product.platforms.join(", "),
    url: `https://www.askstudios.net/products/${product.slug}`,
    author: {
      "@type": "Organization",
      name: "ASK Studios",
      url: "https://www.askstudios.net",
    },
  };

  return (
    <SiteShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 font-tech text-xs text-zinc-400 transition-colors hover:border-white/20 hover:text-white"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Back to Products</span>
          </Link>
        </div>

        {/* Hero Section */}
        <section className="grid gap-8 lg:grid-cols-12 lg:items-start">
          {/* Main Info */}
          <div className="lg:col-span-8 space-y-6">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="font-tech text-xs uppercase tracking-wider text-emerald-400">
                {product.tag}
              </span>
              {product.badge && (
                <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-0.5 font-tech text-[10px] uppercase text-emerald-300">
                  {product.badge}
                </span>
              )}
              <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-0.5 font-tech text-[10px] text-zinc-400">
                {product.status === "live"
                  ? "Live in Production"
                  : product.status === "beta"
                  ? "Beta Release"
                  : "Coming Soon"}
              </span>
            </div>

            <h1 className="font-display text-4xl font-bold tracking-tight text-chiseled-titanium sm:text-5xl lg:text-6xl">
              {product.name}
            </h1>

            {details?.heroTagline && (
              <p className="max-w-2xl text-lg leading-relaxed text-zinc-300/90">
                {details.heroTagline}
              </p>
            )}

            <div className="flex flex-wrap gap-2 pt-2">
              {product.platforms.map((platform) => (
                <span
                  key={platform}
                  className="rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-1 font-tech text-xs text-zinc-300"
                >
                  {platform}
                </span>
              ))}
            </div>
          </div>

          {/* Quick Actions & Live Links Panel */}
          <div className="lg:col-span-4">
            <div className="rounded-3xl border border-white/[0.08] bg-[#070514]/90 p-6 shadow-2xl backdrop-blur-2xl space-y-6">
              {links && (
                <div>
                  <span className="font-tech text-xs uppercase tracking-wider text-zinc-400">
                    Live Destinations
                  </span>
                  <div className="mt-3 flex flex-col gap-2">
                    {links.website && (
                      <a
                        href={links.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 font-tech text-xs font-medium text-white transition-all hover:bg-white/[0.08] hover:border-emerald-500/40"
                      >
                        <span>Visit Website</span>
                        <ArrowUpRight className="h-3.5 w-3.5 text-zinc-400" />
                      </a>
                    )}
                    {links.playStore && (
                      <a
                        href={links.playStore}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 font-tech text-xs font-medium text-white transition-all hover:bg-white/[0.08] hover:border-emerald-500/40"
                      >
                        <span>Google Play Store</span>
                        <ArrowUpRight className="h-3.5 w-3.5 text-zinc-400" />
                      </a>
                    )}
                    {links.appStore && (
                      <a
                        href={links.appStore}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 font-tech text-xs font-medium text-white transition-all hover:bg-white/[0.08] hover:border-emerald-500/40"
                      >
                        <span>Apple App Store</span>
                        <ArrowUpRight className="h-3.5 w-3.5 text-zinc-400" />
                      </a>
                    )}
                    {links.whatsapp && (
                      <a
                        href={links.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-2.5 font-tech text-xs font-medium text-emerald-300 transition-all hover:bg-emerald-500/20"
                      >
                        <span>Chat on WhatsApp</span>
                        <ArrowUpRight className="h-3.5 w-3.5 text-emerald-400" />
                      </a>
                    )}
                    {links.sourceCode && (
                      <a
                        href={links.sourceCode}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 font-tech text-xs font-medium text-zinc-300 transition-all hover:bg-white/[0.08]"
                      >
                        <span>View Source Code</span>
                        <ExternalLink className="h-3.5 w-3.5 text-zinc-400" />
                      </a>
                    )}
                  </div>
                </div>
              )}

              <div className="border-t border-white/[0.06] pt-5">
                <span className="font-tech text-xs uppercase tracking-wider text-violet-400">
                  Custom Build
                </span>
                <p className="mt-2 text-xs leading-relaxed text-zinc-400">
                  Want an application or automation with similar architecture for your company?
                </p>
                <Link
                  href="/#contact"
                  className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 py-2.5 text-xs font-semibold text-white shadow-lg shadow-violet-500/25 transition-all hover:from-violet-500 hover:to-indigo-500"
                >
                  <span>Build with ASK Studios</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Breakdown Grid */}
        <section className="mt-16 grid gap-8 lg:grid-cols-12">
          {/* Overview & Key Features */}
          <div className="lg:col-span-8 space-y-10">
            <div className="rounded-3xl border border-white/[0.08] bg-[#070514]/85 p-8 shadow-xl backdrop-blur-2xl">
              <span className="font-tech text-xs uppercase tracking-wider text-emerald-400">
                ARCHITECTURE & FUNCTION
              </span>
              <h2 className="mt-2 font-display text-2xl font-bold text-white">
                What is {product.name}?
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-zinc-300/90 sm:text-base">
                {details?.overview ?? product.shortDescription}
              </p>

              {details?.features && (
                <div className="mt-8 border-t border-white/[0.06] pt-6">
                  <span className="font-tech text-xs uppercase tracking-wider text-zinc-400">
                    Engineered Capabilities
                  </span>
                  <div className="mt-4 space-y-3">
                    {details.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                        <span className="text-sm leading-relaxed text-zinc-300">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Ideal For & Tech Stack */}
          <div className="lg:col-span-4 space-y-6">
            {details?.idealFor && (
              <div className="rounded-3xl border border-white/[0.08] bg-[#070514]/85 p-6 shadow-xl backdrop-blur-2xl">
                <div className="flex items-center gap-2 font-tech text-xs uppercase tracking-wider text-sky-400">
                  <Users className="h-4 w-4" />
                  <span>Target Audience</span>
                </div>
                <div className="mt-4 space-y-2.5">
                  {details.idealFor.map((item) => (
                    <div key={item} className="flex items-start gap-2.5 text-xs text-zinc-300">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {details?.techStack && (
              <div className="rounded-3xl border border-white/[0.08] bg-[#070514]/85 p-6 shadow-xl backdrop-blur-2xl">
                <div className="flex items-center gap-2 font-tech text-xs uppercase tracking-wider text-violet-400">
                  <Code2 className="h-4 w-4" />
                  <span>Tech Stack Specification</span>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {details.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-1 font-tech text-xs text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </SiteShell>
  );
}
