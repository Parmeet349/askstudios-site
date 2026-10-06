import { Metadata } from "next";
import SiteShell from "@/components/layout/SiteShell";
import SectionHeader from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Privacy Policy | ASK Studios",
  description: "How ASK Studios collects, uses, and protects your information.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <SiteShell>
      <div className="relative z-10 mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <section className="space-y-8">
          <SectionHeader
            eyebrow="LEGAL & COMPLIANCE"
            telemetryCode="DATA PRIVACY"
            title="Privacy Policy"
            description="How ASK Studios collects, processes, and protects your information across our web platforms and mobile applications."
            gradientVariant="cyan"
          />

          <div className="rounded-3xl border border-white/[0.08] bg-[#070514]/85 p-8 shadow-2xl backdrop-blur-2xl sm:p-12">
            <div className="space-y-6 text-sm leading-relaxed text-zinc-300">
              <p>
                This Privacy Policy explains how ASK Studios (“we”, “us”, or “our”) collects,
                uses, and protects information across our website, applications, and related
                services (“Services”). By accessing our Services, you agree to the practices
                described in this policy.
              </p>

              <h3 className="font-display text-base font-bold text-white pt-2">
                1. Information We Collect
              </h3>
              <ul className="list-disc pl-5 space-y-1.5 text-zinc-400">
                <li>
                  <strong className="text-zinc-200">Personal Information:</strong> Name, email, and other details provided through contact inquiries or when requesting engineering services.
                </li>
                <li>
                  <strong className="text-zinc-200">Usage Information:</strong> Device parameters, telemetry logs, browser type, and non-identifiable system diagnostics.
                </li>
                <li>
                  <strong className="text-zinc-200">App Data:</strong> For software products like AutoLog or BrieflyCA, applications may collect local usage data strictly necessary for device functionality.
                </li>
              </ul>

              <h3 className="font-display text-base font-bold text-white pt-2">
                2. How We Use Your Information
              </h3>
              <ul className="list-disc pl-5 space-y-1.5 text-zinc-400">
                <li>To provide, calibrate, and improve our Services and mobile applications.</li>
                <li>To respond to technical inquiries and support requests promptly.</li>
                <li>To maintain cybersecurity, server performance, and spam prevention.</li>
                <li>To communicate product updates and release announcements.</li>
              </ul>

              <h3 className="font-display text-base font-bold text-white pt-2">
                3. Sharing of Information
              </h3>
              <p className="text-zinc-400">
                We do not sell user data. We only share information with trusted infrastructure vendors (such as hosting and database providers) necessary to run our software, or when legally compelled by regulatory authorities.
              </p>

              <h3 className="font-display text-base font-bold text-white pt-2">
                4. Data Security
              </h3>
              <p className="text-zinc-400">
                We enforce standard cryptographic protections and HTTPS encryption to secure all transmissions. However, no transmission over the internet is completely infallible.
              </p>

              <h3 className="font-display text-base font-bold text-white pt-2">
                5. Your Privacy Rights
              </h3>
              <p className="text-zinc-400">
                You may request deletion, correction, or export of your personal information at any time by contacting our engineering desk at:
              </p>
              <div className="font-tech text-xs text-cyan-300">
                info@askstudios.net
              </div>

              <h3 className="font-display text-base font-bold text-white pt-2">
                6. Contact
              </h3>
              <p className="text-zinc-400">
                For questions regarding this policy, reach us directly at{" "}
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
