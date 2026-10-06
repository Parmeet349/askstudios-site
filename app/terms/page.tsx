import { Metadata } from "next";
import SiteShell from "@/components/layout/SiteShell";
import SectionHeader from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Terms of Service | ASK Studios",
  description: "The rules and conditions for using ASK Studios’ website, apps, and services.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  return (
    <SiteShell>
      <div className="relative z-10 mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <section className="space-y-8">
          <SectionHeader
            eyebrow="LEGAL & CONDITIONS"
            telemetryCode="TERMS OF USE"
            title="Terms of Service"
            description="The terms governing the use of ASK Studios websites, proprietary applications, and engineering services."
            gradientVariant="cyan"
          />

          <div className="rounded-3xl border border-white/[0.08] bg-[#070514]/85 p-8 shadow-2xl backdrop-blur-2xl sm:p-12">
            <div className="space-y-6 text-sm leading-relaxed text-zinc-300">
              <p>
                These Terms of Service (“Terms”) govern your use of ASK Studios (“we”, “us”, “our”)
                products, website, and related digital services (“Services”). By accessing or using our
                Services, you agree to these Terms.
              </p>

              <h3 className="font-display text-base font-bold text-white pt-2">
                1. Acceptable Use
              </h3>
              <ul className="list-disc pl-5 space-y-1.5 text-zinc-400">
                <li>You must use our Services in strict compliance with applicable regional and federal laws.</li>
                <li>You agree not to reverse engineer, disrupt, or attempt unauthorized entry into our server infrastructure.</li>
                <li>Commercial use of proprietary APIs requires written authorization or appropriate tier licensing.</li>
              </ul>

              <h3 className="font-display text-base font-bold text-white pt-2">
                2. Intellectual Property
              </h3>
              <p className="text-zinc-400">
                All source code, design systems, logos, trademarks, and media assets within our proprietary software remain the intellectual property of ASK Studios. Custom client deliverables are governed by separate master service agreements.
              </p>

              <h3 className="font-display text-base font-bold text-white pt-2">
                3. User Content & Submissions
              </h3>
              <p className="text-zinc-400">
                For interactive apps or AI tools, you retain ownership of any inputs or assets uploaded. You grant ASK Studios necessary processing rights strictly to execute the intended service functionality.
              </p>

              <h3 className="font-display text-base font-bold text-white pt-2">
                4. Warranty Disclaimer
              </h3>
              <p className="text-zinc-400">
                Our Services are provided “as is” without warranties of any kind. While we design for high availability and reliability, uninterrupted uptime is not guaranteed.
              </p>

              <h3 className="font-display text-base font-bold text-white pt-2">
                5. Limitation of Liability
              </h3>
              <p className="text-zinc-400">
                To the maximum extent permitted by law, ASK Studios will not be liable for any indirect, incidental, or consequential damages resulting from your use of the Services.
              </p>

              <h3 className="font-display text-base font-bold text-white pt-2">
                6. Contact & Legal Notices
              </h3>
              <p className="text-zinc-400">
                Legal and formal inquiries may be submitted to:{" "}
                <a href="mailto:info@askstudios.net" className="font-tech text-cyan-300 hover:underline">
                  info@askstudios.net
                </a>.
              </p>
            </div>
          </div>
        </section>
      </div>
    </SiteShell>
  );
}
