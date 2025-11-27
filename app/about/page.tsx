import SiteShell from "@/components/layout/SiteShell";
import SectionHeader from "@/components/ui/SectionHeader";

export default function AboutPage() {
  return (
    <SiteShell>
      <section className="mt-10 space-y-8">
        <SectionHeader
          eyebrow="Studio"
          title="About ASK Studios"
          description="A product-focused studio based in Ontario, Canada—building apps, automations, and AI-powered tools."
        />

        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4 text-sm text-slate-300/80">
            <p>
              ASK Studios is led by a builder who actually ships. From solo apps and SaaS tools to
              automation systems and client projects, the focus is always the same: ship a working
              product that feels great to use.
            </p>
            <p>
              The studio works across mobile, web, and AI, with experience in React Native, Next.js,
              Node.js, cloud platforms, and API integrations. ASK Studios combines rapid iteration
              with thoughtful UX so your idea doesn&apos;t just exist—it works.
            </p>
          </div>

          <div className="space-y-4 text-sm text-slate-300/80">
            <h3 className="text-sm font-semibold text-slate-50">
              What ASK Studios cares about
            </h3>
            <ul className="mt-2 space-y-1.5">
              <li>• Shipping real products, not just slide decks.</li>
              <li>• Clean, maintainable code that can grow over time.</li>
              <li>• Simple, clear interfaces that users instantly understand.</li>
              <li>• Automation wherever it saves real time and effort.</li>
            </ul>

            <h3 className="mt-4 text-sm font-semibold text-slate-50">
              Core technologies
            </h3>
            <ul className="mt-2 space-y-1.5">
              <li>• React & React Native</li>
              <li>• Next.js & Node.js</li>
              <li>• PostgreSQL, MongoDB, REST APIs</li>
              <li>• AI APIs, automation tools, and cloud platforms</li>
            </ul>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
