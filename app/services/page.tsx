// src/app/services/page.tsx
import SiteShell from "@/components/layout/SiteShell";
import SectionHeader from "@/components/ui/SectionHeader";
import GlassCard from "@/components/ui/GlassCard";
import { services } from "@/components/sections/content";

const processSteps = [
  {
    title: "1. Discovery & alignment",
    description:
      "We start with a focused call or workshop to understand your idea, goals, constraints, and existing systems. This is where we define what success looks like—whether it’s a new app, an AI assistant, or an internal automation.",
    tag: "Understand",
  },
  {
    title: "2. Prototype & validate",
    description:
      "Next we shape a lean version of the solution: UX flows, clickable prototypes, or a working technical proof-of-concept. The goal is to validate the direction quickly before we invest in full build-out.",
    tag: "Explore",
  },
  {
    title: "3. Build, integrate & launch",
    description:
      "We then build the production-ready version, wire it into your existing tools and data, and handle deployment. After launch, we iterate based on real usage—optimizing performance, UX, and automation.",
    tag: "Ship",
  },
];

export default function ServicesPage() {
  return (
    <SiteShell>
      <section className="mt-10">
        <SectionHeader
          eyebrow="For teams & founders"
          title="Services"
          description="ASK Studios partners with founders and teams to design, build, and ship software that actually launches—mobile apps, web platforms, AI tools, and automations."
        />

        {/* Services grid */}
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {services.map((service, index) => (
            <GlassCard key={service.title} delay={0.05 * index}>
              <h3 className="text-sm font-semibold text-slate-50">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-slate-300/80">
                {service.description}
              </p>
            </GlassCard>
          ))}
        </div>

        {/* Process section */}
        <div className="mt-16">
          <SectionHeader
            eyebrow="How we work"
            title="From idea to launch in three clear steps"
            description="Whether it’s a mobile app, SaaS platform, AI assistant, or internal automation, the process stays the same: understand, validate, then build and integrate."
          />

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {processSteps.map((step, index) => (
              <GlassCard key={step.title} delay={0.06 * index}>
                <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-300/80">
                  {step.tag}
                </div>
                <h3 className="mt-2 text-sm font-semibold text-slate-50">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm text-slate-300/80">
                  {step.description}
                </p>
              </GlassCard>
            ))}
          </div>

          <p className="mt-6 max-w-xl text-sm text-slate-300/80">
            Most projects start small: a clear problem, a scoped first version, and a timeline
            that respects reality. From there, we iterate—adding features, refining UX, and
            layering in automation or AI where it actually helps.
          </p>

          <a
            href="/contact"
            className="mt-4 inline-flex rounded-full bg-emerald-400 px-5 py-2 text-xs font-semibold text-slate-950 hover:bg-emerald-300"
          >
            Talk about your project
          </a>
        </div>
      </section>
    </SiteShell>
  );
}
