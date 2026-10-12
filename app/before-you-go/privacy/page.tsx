import { Metadata } from "next";
import Link from "next/link";
import SiteShell from "@/components/layout/SiteShell";
import SectionHeader from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Before You Go Privacy Policy",
  description: "Privacy details and offline-first zero-tracking architecture for Before You Go: Exit Checklist.",
  alternates: {
    canonical: "/before-you-go/privacy",
  },
};

export default function BeforeYouGoPrivacyPage() {
  return (
    <SiteShell>
      <div className="relative z-10 mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <section className="space-y-8">
          <SectionHeader
            eyebrow="PRODUCT LEGAL"
            telemetryCode="BEFORE-YOU-GO · PRIVACY"
            title="Before You Go Privacy Policy"
            description="How Before You Go protects your personal space with an offline-first, zero-tracking architecture."
            gradientVariant="cyan"
          />

          <div className="rounded-3xl border border-white/[0.08] bg-[#070514]/85 p-8 shadow-2xl backdrop-blur-2xl sm:p-12">
            <div className="space-y-6 text-sm leading-relaxed text-zinc-300">
              <p>
                At <strong className="text-white">ASK Studios</strong> (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;), your privacy is our foundational commitment. This Privacy Policy outlines how <strong className="text-white">Before You Go</strong> (the &ldquo;Application&rdquo;) handles your data.
              </p>

              <h3 className="font-display text-base font-bold text-white pt-2">
                1. Zero Personal Data Collection
              </h3>
              <p>
                Before You Go is designed from the ground up as a <strong className="text-zinc-100">private, offline-first application</strong>:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-zinc-400">
                <li>
                  We do <strong className="text-zinc-200">not</strong> collect, transmit, store, or sell any personally identifiable information (PII) such as your name, email address, phone number, location, or device identifiers.
                </li>
                <li>
                  We do <strong className="text-zinc-200">not</strong> embed third-party analytics SDKs, trackers, cookies, or advertising frameworks.
                </li>
                <li>
                  No user account, profile creation, or authentication is required to use the Application.
                </li>
              </ul>

              <h3 className="font-display text-base font-bold text-white pt-2">
                2. Local Storage Architecture
              </h3>
              <p>
                All data created in the Application—including destination names, exit checklists, schedule presets, and item checklists—is stored exclusively on your device using encrypted local storage (AsyncStorage). This data never touches external cloud servers and is completely inaccessible to ASK Studios or third parties.
              </p>

              <h3 className="font-display text-base font-bold text-white pt-2">
                3. Device Permissions &amp; Notifications
              </h3>
              <p>
                The Application requests device permissions strictly for immediate local utility:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-zinc-400">
                <li>
                  <strong className="text-zinc-200">Local Notifications:</strong> Used strictly to trigger scheduled departure reminders and checklist alerts on your device lockscreen. Notification triggers are scheduled locally by the operating system and send no information across the internet.
                </li>
              </ul>

              <h3 className="font-display text-base font-bold text-white pt-2">
                4. Third-Party Integrations
              </h3>
              <p>
                The Application contains zero third-party telemetry, ad networks, or analytical SDKs. It functions 100% offline without requiring internet connectivity.
              </p>

              <h3 className="font-display text-base font-bold text-white pt-2">
                5. Data Retention &amp; User Control
              </h3>
              <p>Because all data lives on your device:</p>
              <ul className="list-disc pl-5 space-y-1.5 text-zinc-400">
                <li>You can create, edit, or delete any checklist item or routine anytime.</li>
                <li>Uninstalling the Application or clearing its app storage completely purges all data permanently.</li>
              </ul>

              <h3 className="font-display text-base font-bold text-white pt-2">
                6. Children&apos;s Privacy
              </h3>
              <p>
                The Application does not collect personal data from any user, including children under 13 years of age.
              </p>

              <h3 className="font-display text-base font-bold text-white pt-2">
                7. Contact Information
              </h3>
              <p>
                For questions or suggestions regarding this Privacy Policy, please reach out via our dedicated{" "}
                <Link href="/before-you-go/support" className="text-cyan-400 hover:text-cyan-300 hover:underline">
                  Support &amp; Help Center
                </Link>{" "}
                or contact:
              </p>
              <p className="text-zinc-200 font-semibold">
                ASK Studios · info@askstudios.net
              </p>

              <div className="pt-6 border-t border-white/[0.08] flex flex-wrap gap-4 text-xs text-zinc-500">
                <span>Effective Date: September 2, 2026</span>
                <span>•</span>
                <Link href="/before-you-go/support" className="text-cyan-400 hover:underline">
                  Support &amp; Help Center
                </Link>
                <span>•</span>
                <Link href="/before-you-go/terms" className="text-cyan-400 hover:underline">
                  Terms &amp; Conditions
                </Link>
                <span>•</span>
                <Link href="/products/before-you-go" className="text-zinc-400 hover:underline">
                  Product Overview
                </Link>
                <span>•</span>
                <Link href="/privacy" className="text-zinc-400 hover:underline">
                  ASK Studios Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </SiteShell>
  );
}
