import { Metadata } from "next";
import Link from "next/link";
import SiteShell from "@/components/layout/SiteShell";
import SectionHeader from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Before You Go Terms & Conditions",
  description: "Terms and conditions for using the Before You Go: Exit Checklist mobile application.",
  alternates: {
    canonical: "/before-you-go/terms",
  },
};

export default function BeforeYouGoTermsPage() {
  return (
    <SiteShell>
      <div className="relative z-10 mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <section className="space-y-8">
          <SectionHeader
            eyebrow="PRODUCT LEGAL"
            telemetryCode="BEFORE-YOU-GO · TERMS"
            title="Before You Go Terms & Conditions"
            description="The rules and conditions governing your use of the Before You Go departure checklist mobile application."
            gradientVariant="cyan"
          />

          <div className="rounded-3xl border border-white/[0.08] bg-[#070514]/85 p-8 shadow-2xl backdrop-blur-2xl sm:p-12">
            <div className="space-y-6 text-sm leading-relaxed text-zinc-300">
              <p>
                Please read these Terms and Conditions (&ldquo;Terms&rdquo;) carefully before downloading, installing, or using the <strong className="text-white">Before You Go</strong> mobile application (the &ldquo;Application&rdquo;) operated by <strong className="text-white">ASK Studios</strong> (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;).
              </p>
              <p>
                By downloading, installing, or using the Application, you agree to be bound by these Terms. If you do not agree to these Terms, do not use the Application.
              </p>

              <h3 className="font-display text-base font-bold text-white pt-2">
                1. Acceptance of Terms &amp; Scope
              </h3>
              <p>
                These Terms apply to all users of the Application on iOS and Android platforms. Your installation confirms unconditional agreement to these provisions.
              </p>

              <h3 className="font-display text-base font-bold text-white pt-2">
                2. License Grant
              </h3>
              <p>
                ASK Studios grants you a personal, revocable, non-exclusive, non-transferable, royalty-free, limited license to download and run the Application strictly for personal, non-commercial departure planning and checklist management.
              </p>

              <h3 className="font-display text-base font-bold text-white pt-2">
                3. User Responsibilities
              </h3>
              <ul className="list-disc pl-5 space-y-1.5 text-zinc-400">
                <li>You are solely responsible for setting accurate schedules, departure times, and destination routines.</li>
                <li>You must ensure device power settings permit local notifications if you enable departure alerts.</li>
                <li>
                  The Application is an auxiliary reminder utility. It should not replace critical legal, medical, travel, or occupational safety checklist verifications.
                </li>
              </ul>

              <h3 className="font-display text-base font-bold text-white pt-2">
                4. Intellectual Property
              </h3>
              <p>
                All interface designs, branding, animations, logos, and underlying code for Before You Go remain the exclusive intellectual property of ASK Studios.
              </p>

              <h3 className="font-display text-base font-bold text-white pt-2">
                5. Disclaimer of Warranties
              </h3>
              <div className="rounded-xl border border-white/[0.08] bg-[#0b081e]/70 p-4 text-xs font-mono text-zinc-400 leading-relaxed">
                THE APPLICATION IS PROVIDED ON AN &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; BASIS, WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT NOTIFICATIONS WILL NEVER BE DELAYED BY OPERATING SYSTEM DOZE OR BATTERY OPTIMIZATION POLICIES.
              </div>

              <h3 className="font-display text-base font-bold text-white pt-2">
                6. Limitation of Liability
              </h3>
              <div className="rounded-xl border border-white/[0.08] bg-[#0b081e]/70 p-4 text-xs font-mono text-zinc-400 leading-relaxed">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL ASK STUDIOS BE LIABLE FOR ANY INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES, INCLUDING LOSS OF PROPERTY OR MISSED DEPARTURES, ARISING OUT OF OR IN CONNECTION WITH THE USE OF THE APPLICATION.
              </div>

              <h3 className="font-display text-base font-bold text-white pt-2">
                7. Governing Law
              </h3>
              <p>
                These Terms are governed by and construed in accordance with the laws of the Province of Ontario and the federal laws of Canada.
              </p>

              <h3 className="font-display text-base font-bold text-white pt-2">
                8. Contact Information
              </h3>
              <p>
                For technical questions or support inquiries regarding Before You Go, please visit our dedicated{" "}
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
                <Link href="/before-you-go/privacy" className="text-cyan-400 hover:underline">
                  Privacy Policy
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
