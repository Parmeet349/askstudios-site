import { Metadata } from "next";
import Link from "next/link";
import SiteShell from "@/components/layout/SiteShell";
import SectionHeader from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "FlagQuest Terms of Service",
  description: "The rules, licensing, and conditions for playing the FlagQuest mobile application.",
  alternates: {
    canonical: "/flagquest-terms",
  },
};

export default function FlagQuestTermsPage() {
  return (
    <SiteShell>
      <div className="relative z-10 mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <section className="space-y-8">
          <SectionHeader
            eyebrow="PRODUCT LEGAL"
            telemetryCode="FLAGQUEST · TERMS"
            title="FlagQuest Terms of Service"
            description="The rules, licensing terms, and conditions governing the use of the FlagQuest mobile game on iOS and Android."
            gradientVariant="cyan"
          />

          <div className="rounded-3xl border border-white/[0.08] bg-[#070514]/85 p-8 shadow-2xl backdrop-blur-2xl sm:p-12">
            <div className="space-y-6 text-sm leading-relaxed text-zinc-300">
              <p>
                Welcome to <strong className="text-white">FlagQuest</strong>. These Terms of Service (&ldquo;Terms&rdquo;) govern your use of the FlagQuest mobile application (the &ldquo;App&rdquo;) developed and operated by <strong className="text-white">ASK Studios</strong> (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), available on Apple App Store and Google Play Store.
              </p>
              <p>
                By downloading, installing, or playing the App, you agree to be bound by these Terms. If you do not agree, do not install or use the App.
              </p>

              <h3 className="font-display text-base font-bold text-white pt-2">
                1. Use of the Service &amp; License Grant
              </h3>
              <ul className="list-disc pl-5 space-y-1.5 text-zinc-400">
                <li>
                  <strong className="text-zinc-200">Eligibility:</strong> You must be at least 13 years of age (or the minimum age of digital consent in your territory) to use the App.
                </li>
                <li>
                  <strong className="text-zinc-200">Limited License:</strong> We grant you a limited, non-exclusive, non-transferable, revocable license to install and run the App on personal devices you own or control, solely for personal entertainment and educational trivia.
                </li>
                <li>
                  <strong className="text-zinc-200">Restrictions:</strong> You agree not to decompile, reverse engineer, modify, extract source code, distribute, or create derivative works from the App without prior written authorization from ASK Studios.
                </li>
              </ul>

              <h3 className="font-display text-base font-bold text-white pt-2">
                2. In-App Content &amp; Intellectual Property
              </h3>
              <ul className="list-disc pl-5 space-y-1.5 text-zinc-400">
                <li>
                  <strong className="text-zinc-200">Proprietary Assets:</strong> All software architecture, visual interface designs, 3D flip card animations, sound effects, scoring algorithms, and typography are the exclusive intellectual property of ASK Studios.
                </li>
                <li>
                  <strong className="text-zinc-200">Flag Representations:</strong> National flags, coat-of-arms graphics, and geographic trivia metadata are presented for educational, historical, and non-commercial trivia purposes.
                </li>
              </ul>

              <h3 className="font-display text-base font-bold text-white pt-2">
                3. Advertisements &amp; Third-Party Services
              </h3>
              <ul className="list-disc pl-5 space-y-1.5 text-zinc-400">
                <li>The App displays advertisements served by Google AdMob.</li>
                <li>
                  Your interactions with third-party advertisements are strictly between you and the respective third-party advertiser. ASK Studios is not responsible for external services or third-party web destinations.
                </li>
              </ul>

              <h3 className="font-display text-base font-bold text-white pt-2">
                4. User Data &amp; Local Storage
              </h3>
              <ul className="list-disc pl-5 space-y-1.5 text-zinc-400">
                <li>
                  High scores, audio preferences, custom explorer profile names, and game mode records are stored locally on your device via AsyncStorage.
                </li>
                <li>
                  We do not operate remote databases storing your progress. Uninstalling the App or resetting app cache permanently removes this local data.
                </li>
              </ul>

              <h3 className="font-display text-base font-bold text-white pt-2">
                5. Disclaimer of Warranties
              </h3>
              <div className="rounded-xl border border-white/[0.08] bg-[#0b081e]/70 p-4 text-xs font-mono text-zinc-400 leading-relaxed">
                THE APP IS PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT GUARANTEE THAT THE APP WILL OPERATE COMPLETELY UNINTERRUPTED OR ERROR-FREE ON ALL HARDWARE CONFIGURATIONS.
              </div>

              <h3 className="font-display text-base font-bold text-white pt-2">
                6. Limitation of Liability
              </h3>
              <div className="rounded-xl border border-white/[0.08] bg-[#0b081e]/70 p-4 text-xs font-mono text-zinc-400 leading-relaxed">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL ASK STUDIOS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES ARISING FROM YOUR ACCESS TO OR USE OF THE APP, EVEN IF INFORMED OF THE POSSIBILITY OF SUCH DAMAGES.
              </div>

              <h3 className="font-display text-base font-bold text-white pt-2">
                7. Governing Law
              </h3>
              <p>
                These Terms shall be governed by and interpreted in accordance with the laws of the Province of Ontario and the federal laws of Canada applicable therein.
              </p>

              <h3 className="font-display text-base font-bold text-white pt-2">
                8. Contact Information
              </h3>
              <p>
                For technical questions or support inquiries regarding FlagQuest, please visit our dedicated{" "}
                <Link href="/flagquest-support" className="text-cyan-400 hover:text-cyan-300 hover:underline">
                  FlagQuest Support &amp; Help Center
                </Link>{" "}
                or contact:
              </p>
              <p className="text-zinc-200 font-semibold">
                ASK Studios · info@askstudios.net
              </p>

              <div className="pt-6 border-t border-white/[0.08] flex flex-wrap gap-4 text-xs text-zinc-500">
                <span>Last updated: June 24, 2026</span>
                <span>•</span>
                <Link href="/flagquest-privacy-policy" className="text-cyan-400 hover:underline">
                  FlagQuest Privacy Policy
                </Link>
                <span>•</span>
                <Link href="/flagquest-support" className="text-cyan-400 hover:underline">
                  Help Center &amp; FAQs
                </Link>
                <span>•</span>
                <Link href="/terms" className="text-zinc-400 hover:underline">
                  ASK Studios Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </SiteShell>
  );
}
