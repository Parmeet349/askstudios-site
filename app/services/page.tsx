import SiteShell from "@/components/layout/SiteShell";
import SectionHeader from "@/components/ui/SectionHeader";
import GlassCard from "@/components/ui/GlassCard";
import { services } from "@/components/sections/content";

export default function ServicesPage() {
  return (
    <SiteShell>
      <section className="mt-10">
        <SectionHeader
          eyebrow="For teams & founders"
          title="Services"
          description="ASK Studios partners with founders and teams to design, build, and ship software that actually ships—mobile apps, web platforms, automations, and more."
        />

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

        <div className="mt-10 max-w-xl text-sm text-slate-300/80">
          <p>
            Whether you&apos;re validating a new idea or extending an existing product, ASK Studios
            can help with architecture, implementation, and launch. Most projects start with a
            short discovery call to unpack your goals, timeline, and constraints.
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
