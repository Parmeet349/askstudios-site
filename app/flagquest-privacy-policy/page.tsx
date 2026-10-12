import { Metadata } from "next";
import Link from "next/link";
import SiteShell from "@/components/layout/SiteShell";
import SectionHeader from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "FlagQuest Privacy Policy",
  description: "Privacy details and local-first data practices for the FlagQuest mobile application.",
  alternates: {
    canonical: "/flagquest-privacy-policy",
  },
};

export default function FlagQuestPrivacyPolicyPage() {
  return (
    <SiteShell>
      <div className="relative z-10 mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <section className="space-y-8">
          <SectionHeader
            eyebrow="PRODUCT LEGAL"
            telemetryCode="FLAGQUEST · PRIVACY"
            title="FlagQuest Privacy Policy"
            description="Privacy details and local-first data architecture for the FlagQuest mobile application across iOS and Android."
            gradientVariant="cyan"
          />

          <div className="rounded-3xl border border-white/[0.08] bg-[#070514]/85 p-8 shadow-2xl backdrop-blur-2xl sm:p-12">
            <div className="space-y-6 text-sm leading-relaxed text-zinc-300">
              <p>
                <strong className="text-white">FlagQuest</strong> is developed and owned by ASK Studios. Your privacy is paramount to us. This Privacy Policy explains how information is handled when you download, install, or play the FlagQuest mobile application (&ldquo;App&rdquo;).
              </p>

              <h3 className="font-display text-base font-bold text-white pt-2">
                1. Personal Data Collection
              </h3>
              <p>
                The App <strong className="text-zinc-100">does not collect, transmit, store, or sell any personal or sensitive user data</strong>.
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-zinc-400">
                <li>No account registration, user profile, or social login is required.</li>
                <li>No name, email address, phone number, or physical address is collected.</li>
                <li>No precise GPS or location data is ever accessed.</li>
                <li>No user databases or telemetry tracking servers are maintained by ASK Studios.</li>
              </ul>
              <p>
                All core gameplay elements—including high scores, game mode settings, career progress, custom explorer profile names, and continent filter preferences—are processed and stored strictly locally on your device via AsyncStorage.
              </p>

              <h3 className="font-display text-base font-bold text-white pt-2">
                2. Advertising (Google AdMob)
              </h3>
              <p>
                The App displays advertisements using <strong className="text-zinc-100">Google AdMob</strong>. While ASK Studios does not collect or store user data, AdMob may automatically collect limited system-level telemetry to serve and measure non-personalized or contextual ads.
              </p>
              <p className="text-zinc-400">Such information may include:</p>
              <ul className="list-disc pl-5 space-y-1.5 text-zinc-400">
                <li>Mobile Advertising Identifier (AAID / IDFA)</li>
                <li>IP address and approximate regional-level location</li>
                <li>Device information (hardware model, OS version, display metrics)</li>
                <li>App usage metrics and ad impression diagnostics</li>
              </ul>
              <p>
                This data is processed according to Google’s Privacy Policy:{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 hover:underline"
                >
                  https://policies.google.com/privacy
                </a>
              </p>
              <p className="text-zinc-400">
                You can manage or restrict personalized advertising at any time through your iOS or Android system settings.
              </p>

              <h3 className="font-display text-base font-bold text-white pt-2">
                3. Third-Party Services
              </h3>
              <p>
                The App integrates the following third-party library:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-zinc-400">
                <li>
                  <strong className="text-zinc-200">Google AdMob SDK</strong> – used for displaying banner and interstitial advertisements within the App.
                </li>
              </ul>
              <p className="text-zinc-400">
                No third-party behavioral analytics, crash reporters, or user-tracking SDKs are integrated into FlagQuest.
              </p>

              <h3 className="font-display text-base font-bold text-white pt-2">
                4. Children&apos;s Privacy (COPPA Compliance)
              </h3>
              <p>
                FlagQuest is a family-friendly educational game designed for trivia lovers of all ages. We do not knowingly collect personal data from children under the age of 13.
              </p>
              <p className="text-zinc-400">
                If you believe a child has inadvertently submitted personal data, please contact us immediately, and we will take prompt corrective action.
              </p>

              <h3 className="font-display text-base font-bold text-white pt-2">
                5. Data Security &amp; Retention
              </h3>
              <p>
                Because no personal data is collected or stored on external servers by ASK Studios, there is no remote database susceptible to breach. All progress is retained solely on the host device. Uninstalling the App or clearing its storage will permanently erase local high scores and explorer profiles.
              </p>

              <h3 className="font-display text-base font-bold text-white pt-2">
                6. Changes to This Policy
              </h3>
              <p>
                We may periodically update this Privacy Policy to reflect app updates or regulatory standards. Any changes will be posted on this page with an updated revision date.
              </p>

              <h3 className="font-display text-base font-bold text-white pt-2">
                7. Contact Us
              </h3>
              <p>
                If you have questions, feedback, or need technical assistance regarding the App, please visit our dedicated{" "}
                <Link href="/flagquest-support" className="text-cyan-400 hover:text-cyan-300 hover:underline">
                  FlagQuest Support &amp; Help Center
                </Link>{" "}
                or contact our engineering team at:
              </p>
              <p className="text-zinc-200 font-semibold">
                info@askstudios.net
              </p>

              <div className="pt-6 border-t border-white/[0.08] flex flex-wrap gap-4 text-xs text-zinc-500">
                <span>Last updated: June 24, 2026</span>
                <span>•</span>
                <Link href="/flagquest-terms" className="text-cyan-400 hover:underline">
                  FlagQuest Terms of Service
                </Link>
                <span>•</span>
                <Link href="/flagquest-support" className="text-cyan-400 hover:underline">
                  Help Center &amp; FAQs
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
