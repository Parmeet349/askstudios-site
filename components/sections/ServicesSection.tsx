// src/components/sections/ServicesSection.tsx
"use client";

import SectionHeader from "../ui/SectionHeader";
import GlassCard from "../ui/GlassCard";
import { services } from "./content";

export default function ServicesSection() {
  return (
    <section id="services" className="mt-20">
      <SectionHeader
        eyebrow="For teams & founders"
        title="Services"
        description="Beyond our own products, ASK Studios partners with founders and teams to design, build, and ship software that actually ships."
      />

      <div className="mt-6 grid gap-5 md:grid-cols-3">
        {services.map((service, i) => (
          <GlassCard key={service.title} delay={0.05 * i}>
            <h3 className="text-sm font-semibold text-slate-50">
              {service.title}
            </h3>
            <p className="mt-2 text-sm text-slate-300/80">{service.description}</p>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
