// src/components/sections/ProductsSection.tsx
"use client";

import Link from "next/link";
import GlassCard from "../ui/GlassCard";
import SectionHeader from "../ui/SectionHeader";
import { products } from "./content";

export default function ProductsSection() {
  return (
    <section id="products" className="mt-20">
      <SectionHeader
        eyebrow="Product suite"
        title="Products"
        description="A growing suite of apps and tools built by ASK Studios—from consumer apps to creator platforms and automation engines."
      />

      <div className="mt-6 grid gap-5 md:grid-cols-2">
        {products.map((product, i) => (
          <GlassCard key={product.name} delay={0.05 * i}>
            <div className="flex items-center justify-between gap-3">
              <div>
                <div className="text-xs font-medium uppercase tracking-wide text-emerald-300/80">
                  {product.tag}
                </div>
                <h3 className="mt-1 text-lg font-semibold text-slate-50">
                  {product.name}
                </h3>
              </div>
            </div>
            <p className="mt-3 text-sm text-slate-300/80">{product.shortDescription}</p>
            <div className="mt-4">
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
  );
}
