import { Metadata } from "next";
import Link from "next/link";
import SiteShell from "@/components/layout/SiteShell";
import SectionHeader from "@/components/ui/SectionHeader";
import {
  FileText,
  ShieldCheck,
  CreditCard,
  AlertCircle,
  Apple,
  ExternalLink,
  RotateCcw,
  Scale,
  Sparkles,
  Smartphone,
  Radio,
  HelpCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Tambola Number Caller Terms & Apple EULA",
  description:
    "Terms of Service, End User License Agreement (EULA), and In-App Purchase terms for Tambola Number Caller (Housie) v1.6.0 on iOS (Apple App Store) and Android (Google Play).",
  alternates: {
    canonical: "/tambola-terms",
  },
  openGraph: {
    title: "Tambola Number Caller Terms of Service & Apple EULA | ASK Studios",
    description:
      "Official Terms of Service and Apple Standard EULA compliance for Tambola Number Caller (Housie) by ASK Studios.",
    url: "https://www.askstudios.net/tambola-terms",
  },
};

export default function TambolaTermsPage() {
  return (
    <SiteShell>
      <div className="relative z-10 mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <section className="space-y-8">
          <SectionHeader
            eyebrow="PRODUCT LEGAL & EULA"
            telemetryCode="TERMS OF USE · APPLE EULA · v1.6.0"
            title="Tambola Number Caller Terms of Service & EULA"
            description="End User License Agreement, In-App Purchase Terms, and Rules of Use for Tambola Number Caller (Housie)."
            gradientVariant="cyan"
          />

          {/* Highlights Header */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            <div className="flex items-center gap-2.5 rounded-2xl border border-sky-500/20 bg-sky-500/[0.05] p-3 text-xs text-sky-300">
              <Scale className="h-4 w-4 shrink-0 text-sky-400" />
              <span>Standard EULA</span>
            </div>
            <div className="flex items-center gap-2.5 rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.05] p-3 text-xs text-emerald-300">
              <CreditCard className="h-4 w-4 shrink-0 text-emerald-400" />
              <span>Lifetime Pro Terms</span>
            </div>
            <div className="flex items-center gap-2.5 rounded-2xl border border-rose-500/20 bg-rose-500/[0.05] p-3 text-xs text-rose-300">
              <AlertCircle className="h-4 w-4 shrink-0 text-rose-400" />
              <span>Strict No-Gambling</span>
            </div>
            <div className="flex items-center gap-2.5 rounded-2xl border border-indigo-500/20 bg-indigo-500/[0.05] p-3 text-xs text-indigo-300">
              <Apple className="h-4 w-4 shrink-0 text-indigo-400" />
              <span>Apple StoreKit Compliant</span>
            </div>
          </div>

          <div className="rounded-3xl border border-white/[0.08] bg-[#070514]/85 p-8 shadow-2xl backdrop-blur-2xl sm:p-12">
            <div className="space-y-8 text-sm leading-relaxed text-zinc-300">
              {/* Preamble */}
              <div>
                <p>
                  These Terms of Service and End User License Agreement (&ldquo;Agreement&rdquo; or &ldquo;Terms&rdquo;)
                  constitute a legally binding contract between you (&ldquo;User&rdquo; or &ldquo;you&rdquo;) and{" "}
                  <strong>ASK Studios</strong> (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), governing your
                  download, installation, and use of the <strong>Tambola Number Caller (Housie)</strong> mobile
                  application (the &ldquo;App&rdquo; or &ldquo;Licensed Application&rdquo;), including version{" "}
                  <strong>1.6.0</strong> and any subsequent updates.
                </p>
                <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.02] p-4 text-xs space-y-1.5 font-mono text-zinc-400">
                  <p>
                    <span className="text-zinc-200">App Name:</span> Tambola Number Caller (Housie)
                  </p>
                  <p>
                    <span className="text-zinc-200">Developer &amp; Publisher:</span> ASK Studios (
                    <a
                      href="https://www.askstudios.net"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-300 hover:underline font-sans"
                    >
                      https://www.askstudios.net
                    </a>
                    )
                  </p>
                  <p>
                    <span className="text-zinc-200">Apple App Store ID:</span> 6757088103 &middot;{" "}
                    <span className="text-zinc-200">iOS Bundle ID:</span> com.geekypajis.tambolanumbers
                  </p>
                  <p>
                    <span className="text-zinc-200">Google Play Package Name:</span> com.geekypajis.tambolanumbers
                  </p>
                </div>
                <p className="mt-4">
                  By downloading, installing, accessing, or using the App, you acknowledge that you have read,
                  understood, and agree to be bound by these Terms and our{" "}
                  <Link href="/tambola-privacy-policy" className="font-tech text-cyan-300 hover:underline">
                    Privacy Policy
                  </Link>
                  . If you do not agree, do not install or use the App.
                </p>
              </div>

              {/* Section 1: License Grant & Scope of Use */}
              <div className="space-y-3 border-t border-white/[0.06] pt-6">
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="h-5 w-5 text-cyan-400" />
                  <h3 className="font-display text-base font-bold text-white">
                    1. License Grant &amp; Scope of Use
                  </h3>
                </div>
                <p>
                  Subject to your strict compliance with this Agreement, ASK Studios grants you a personal,
                  revocable, non-exclusive, non-transferable, and non-sublicensable limited license to download,
                  install, and use the App solely on compatible mobile devices (iOS or Android) that you own or
                  control, strictly for your personal, non-commercial recreational entertainment.
                </p>
                <p className="text-zinc-400">
                  This license is also subject to the Apple Media Services Terms and Conditions (including the
                  Usage Rules set forth therein) for iOS devices, and the Google Play Terms of Service for Android
                  devices.
                </p>
              </div>

              {/* Section 2: Prohibited Conduct & Intellectual Property */}
              <div className="space-y-3 border-t border-white/[0.06] pt-6">
                <div className="flex items-center gap-2.5">
                  <FileText className="h-5 w-5 text-indigo-400" />
                  <h3 className="font-display text-base font-bold text-white">
                    2. User Restrictions &amp; Intellectual Property
                  </h3>
                </div>
                <p>You expressly agree that you will not, directly or indirectly:</p>
                <ul className="list-disc space-y-1.5 pl-6 text-zinc-400">
                  <li>
                    Copy, decompile, reverse engineer, disassemble, attempt to derive the source code of, modify,
                    or create derivative works of the App or any portion thereof.
                  </li>
                  <li>
                    Distribute, rent, lease, lend, sell, sublicense, or transmit the App over any network where
                    it could be used by multiple devices concurrently without authorization.
                  </li>
                  <li>
                    Remove, obscure, or alter any copyright, trademark, patent, or other proprietary rights notices
                    affixed to or contained within the App.
                  </li>
                  <li>
                    Use the App for any commercial purpose, automated extraction, or unlawful scheme.
                  </li>
                </ul>
                <p className="text-zinc-400">
                  All intellectual property rights in and to the App, including its visual designs, board themes,
                  voice caller audio synthesis, digital ticket generation algorithms, trademarks, and codebases,
                  remain the exclusive property of ASK Studios.
                </p>
              </div>

              {/* Section 3: Strict No-Gambling Disclaimer */}
              <div className="space-y-3 border-t border-white/[0.06] pt-6">
                <div className="flex items-center gap-2.5">
                  <AlertCircle className="h-5 w-5 text-rose-400" />
                  <h3 className="font-display text-base font-bold text-white">
                    3. Strict &ldquo;No Gambling&rdquo; Disclaimer
                  </h3>
                </div>
                <div className="rounded-2xl border border-rose-500/25 bg-rose-500/[0.05] p-5 text-zinc-300 space-y-3">
                  <p className="font-semibold text-rose-300">
                    Tambola Number Caller (Housie) is strictly an automated number-calling and party hosting utility.
                  </p>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    The App is built to replace traditional plastic tokens, caller boards, and paper chits during
                    family gatherings and social game nights. The App does NOT support, facilitate, offer, or endorse
                    real-money gambling, cash betting, wagering, or real monetary prizes.
                  </p>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    You represent and warrant that you will not use the App for any illegal gambling, wagering, or
                    betting activities in violation of local, state, provincial, federal, or national laws. ASK
                    Studios disclaims any and all liability arising from any unauthorized or illicit use of the
                    application.
                  </p>
                </div>
              </div>

              {/* Section 4: In-App Purchases, Lifetime Pro & Billing Terms */}
              <div className="space-y-3 border-t border-white/[0.06] pt-6">
                <div className="flex items-center gap-2.5">
                  <CreditCard className="h-5 w-5 text-emerald-400" />
                  <h3 className="font-display text-base font-bold text-white">
                    4. In-App Purchases, Lifetime Pro &amp; Billing Terms
                  </h3>
                </div>
                <p>
                  Version 1.6.0 introduces optional in-app purchasing capabilities:
                </p>
                <div className="space-y-4 rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                  <div>
                    <div className="flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-emerald-400" />
                      <strong className="text-white text-sm">
                        Lifetime Pro In-App Product (<code>tambola_lifetime_pro</code>)
                      </strong>
                    </div>
                    <p className="mt-1.5 text-xs text-zinc-400">
                      Lifetime Pro is a <strong>one-time, non-consumable</strong> in-app purchase. Unlocking
                      Lifetime Pro permanently disables all banner and interstitial advertisements and unlocks
                      access to all current and future premium visual caller board themes. Lifetime Pro does not
                      expire and requires no recurring subscription fees.
                    </p>
                  </div>

                  <div className="border-t border-white/[0.06] pt-3">
                    <strong className="text-white text-xs block">Payment Processing:</strong>
                    <p className="mt-1 text-xs text-zinc-400">
                      All purchase transactions are billed and processed directly by Apple via the Apple App Store
                      (Apple StoreKit) or by Google via the Google Play Store (Google Play In-App Billing). ASK
                      Studios never collects, receives, or stores your credit card numbers, banking details, or
                      billing information.
                    </p>
                  </div>

                  <div className="border-t border-white/[0.06] pt-3">
                    <div className="flex items-center gap-2">
                      <RotateCcw className="h-4 w-4 text-cyan-400" />
                      <strong className="text-white text-xs">Restore Purchases:</strong>
                    </div>
                    <p className="mt-1 text-xs text-zinc-400">
                      If you switch to a new phone, reinstall the App, or install it on multiple devices associated
                      with the same Apple ID or Google Play account, you can restore your Lifetime Pro status at any
                      time using the in-app <strong>&ldquo;Restore Purchases&rdquo;</strong> button. Restorations
                      are validated securely through our RevenueCat integration.
                    </p>
                  </div>

                  <div className="border-t border-white/[0.06] pt-3">
                    <strong className="text-white text-xs block">Refund Policy:</strong>
                    <p className="mt-1 text-xs text-zinc-400">
                      Because all financial transactions are executed directly by the platform store owners (Apple
                      or Google), refund requests must be submitted directly to Apple or Google in accordance with
                      their respective refund policies. For Apple purchases, please visit{" "}
                      <a
                        href="https://reportaproblem.apple.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-300 hover:underline inline-flex items-center gap-0.5"
                      >
                        reportaproblem.apple.com
                        <ExternalLink className="h-2.5 w-2.5" />
                      </a>
                      . For Google purchases, please submit requests through Google Play Support. ASK Studios does
                      not possess the technical or billing authority to issue direct cash refunds on behalf of
                      Apple or Google.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 5: Live Party Mode & Digital Game Tools */}
              <div className="space-y-3 border-t border-white/[0.06] pt-6">
                <div className="flex items-center gap-2.5">
                  <Radio className="h-5 w-5 text-violet-400" />
                  <h3 className="font-display text-base font-bold text-white">
                    5. Live Party Mode &amp; Digital Game Tools
                  </h3>
                </div>
                <p>
                  The App offers real-time synchronization (&ldquo;Live Party Mode&rdquo;) allowing hosts to share a
                  4-letter room code so participants can mirror the board on their individual screens.
                </p>
                <ul className="list-disc space-y-1.5 pl-6 text-zinc-400">
                  <li>
                    <strong>Network Connectivity:</strong> Live Party synchronization requires an active internet
                    connection on both host and participant devices. We do not guarantee uninterrupted synchronization
                    if internet connectivity is compromised.
                  </li>
                  <li>
                    <strong>Recreational Utilities:</strong> Digital ticket generators and caller boards are provided
                    strictly as recreational conveniences. You are responsible for ensuring that all party players
                    agree on game rules and winning combinations prior to commencing.
                  </li>
                </ul>
              </div>

              {/* Section 6: Advertising & Rewarded Ad-Free Sessions */}
              <div className="space-y-3 border-t border-white/[0.06] pt-6">
                <div className="flex items-center gap-2.5">
                  <Smartphone className="h-5 w-5 text-sky-400" />
                  <h3 className="font-display text-base font-bold text-white">
                    6. Advertisements &amp; Rewarded Sessions
                  </h3>
                </div>
                <p>
                  The free version of the App serves banner and interstitial advertisements delivered by Google
                  AdMob. Users may voluntarily view a rewarded advertisement to activate a temporary 30-minute
                  ad-free gameplay session. Purchasing Lifetime Pro removes all advertisements permanently.
                </p>
              </div>

              {/* Section 7: Disclaimer of Warranties */}
              <div className="space-y-3 border-t border-white/[0.06] pt-6">
                <h3 className="font-display text-base font-bold text-white">
                  7. Disclaimer of Warranties
                </h3>
                <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-4 font-mono text-xs uppercase leading-relaxed text-zinc-400">
                  THE LICENSED APPLICATION IS PROVIDED ON AN &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo;
                  BASIS, WITH ALL FAULTS AND WITHOUT WARRANTY OF ANY KIND. TO THE MAXIMUM EXTENT PERMITTED BY
                  APPLICABLE LAW, ASK STUDIOS DISCLAIMS ALL WARRANTIES AND CONDITIONS, EXPRESS, IMPLIED, OR
                  STATUTORY, INCLUDING BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF MERCHANTABILITY, SATISFACTORY
                  QUALITY, FITNESS FOR A PARTICULAR PURPOSE, ACCURACY, QUIET ENJOYMENT, AND NON-INFRINGEMENT OF
                  THIRD-PARTY RIGHTS. ASK STUDIOS DOES NOT WARRANT THAT THE OPERATION OF THE APPLICATION WILL BE
                  UNINTERRUPTED OR ERROR-FREE, OR THAT DEFECTS IN THE APPLICATION WILL BE CORRECTED.
                </div>
              </div>

              {/* Section 8: Limitation of Liability */}
              <div className="space-y-3 border-t border-white/[0.06] pt-6">
                <h3 className="font-display text-base font-bold text-white">
                  8. Limitation of Liability
                </h3>
                <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-4 font-mono text-xs uppercase leading-relaxed text-zinc-400">
                  TO THE MAXIMUM EXTENT NOT PROHIBITED BY LAW, IN NO EVENT SHALL ASK STUDIOS, ITS OFFICERS,
                  DIRECTORS, EMPLOYEES, AFFILIATES, OR AGENTS BE LIABLE FOR PERSONAL INJURY, OR ANY INCIDENTAL,
                  SPECIAL, INDIRECT, PUNITIVE, OR CONSEQUENTIAL DAMAGES WHATSOEVER, INCLUDING, WITHOUT LIMITATION,
                  DAMAGES FOR LOSS OF PROFITS, LOSS OF DATA, BUSINESS INTERRUPTION, OR ANY OTHER COMMERCIAL DAMAGES
                  OR LOSSES, ARISING OUT OF OR RELATED TO YOUR USE OF OR INABILITY TO USE THE LICENSED APPLICATION,
                  HOWEVER CAUSED, REGARDLESS OF THE THEORY OF LIABILITY (CONTRACT, TORT, OR OTHERWISE) AND EVEN IF
                  ASK STUDIOS HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
                </div>
              </div>

              {/* Section 9: Dedicated Apple App Store Additional License Terms (Apple EULA) */}
              <div className="space-y-4 border-t border-cyan-500/30 pt-6">
                <div className="flex items-center gap-2.5">
                  <Apple className="h-6 w-6 text-white" />
                  <h3 className="font-display text-lg font-bold text-white">
                    9. Apple App Store Additional License Terms (Apple Standard EULA)
                  </h3>
                </div>
                <p className="text-zinc-300">
                  If you downloaded the Licensed Application from the Apple App Store, the following additional
                  terms apply in compliance with <strong>Apple App Store Review Guidelines (including Guideline 3.1.2)</strong> and{" "}
                  <strong>Apple&rsquo;s Minimum Terms of Developer End User License Agreement</strong>:
                </p>

                <div className="space-y-4 rounded-2xl border border-white/10 bg-white/[0.02] p-5 text-xs text-zinc-300">
                  <div>
                    <strong className="text-cyan-300 block text-sm">
                      (a) Acknowledgement
                    </strong>
                    <p className="mt-1 text-zinc-400 leading-relaxed">
                      You and ASK Studios acknowledge that this Agreement is concluded between you and ASK Studios
                      only, and not with Apple Inc. (&ldquo;Apple&rdquo;). ASK Studios, not Apple, is solely responsible
                      for the Licensed Application and the content thereof. This Agreement does not provide for usage
                      rules for the Licensed Application that are in conflict with the Apple Media Services Terms and
                      Conditions.
                    </p>
                  </div>

                  <div className="border-t border-white/[0.06] pt-3">
                    <strong className="text-cyan-300 block text-sm">
                      (b) Scope of License
                    </strong>
                    <p className="mt-1 text-zinc-400 leading-relaxed">
                      The license granted to you for the Licensed Application is limited to a non-transferable license
                      to use the Licensed Application on any Apple-branded products that you own or control, and as
                      permitted by the Usage Rules set forth in the Apple Media Services Terms and Conditions, except
                      that the Licensed Application may be accessed and used by other accounts associated with the
                      purchaser via Family Sharing or volume purchasing.
                    </p>
                  </div>

                  <div className="border-t border-white/[0.06] pt-3">
                    <strong className="text-cyan-300 block text-sm">
                      (c) Maintenance and Support
                    </strong>
                    <p className="mt-1 text-zinc-400 leading-relaxed">
                      ASK Studios is solely responsible for providing any maintenance and support services with
                      respect to the Licensed Application, as specified in this Agreement or as required under
                      applicable law. You and ASK Studios acknowledge that Apple has no obligation whatsoever to
                      furnish any maintenance and support services with respect to the Licensed Application.
                    </p>
                  </div>

                  <div className="border-t border-white/[0.06] pt-3">
                    <strong className="text-cyan-300 block text-sm">
                      (d) Warranty
                    </strong>
                    <p className="mt-1 text-zinc-400 leading-relaxed">
                      ASK Studios is solely responsible for any product warranties, whether express or implied by law,
                      to the extent not effectively disclaimed. In the event of any failure of the Licensed Application
                      to conform to any applicable warranty, you may notify Apple, and Apple will refund the purchase
                      price for the Licensed Application to you (if applicable); and to the maximum extent permitted by
                      applicable law, Apple will have no other warranty obligation whatsoever with respect to the
                      Licensed Application, and any other claims, losses, liabilities, damages, costs, or expenses
                      attributable to any failure to conform to any warranty will be ASK Studios&rsquo; sole
                      responsibility.
                    </p>
                  </div>

                  <div className="border-t border-white/[0.06] pt-3">
                    <strong className="text-cyan-300 block text-sm">
                      (e) Product Claims
                    </strong>
                    <p className="mt-1 text-zinc-400 leading-relaxed">
                      You and ASK Studios acknowledge that ASK Studios, not Apple, is responsible for addressing any
                      claims of the user or any third party relating to the Licensed Application or your possession
                      and/or use of that Licensed Application, including, but not limited to: (i) product liability
                      claims; (ii) any claim that the Licensed Application fails to conform to any applicable legal or
                      regulatory requirement; and (iii) claims arising under consumer protection, privacy, or similar
                      legislation.
                    </p>
                  </div>

                  <div className="border-t border-white/[0.06] pt-3">
                    <strong className="text-cyan-300 block text-sm">
                      (f) Intellectual Property Rights
                    </strong>
                    <p className="mt-1 text-zinc-400 leading-relaxed">
                      You and ASK Studios acknowledge that, in the event of any third-party claim that the Licensed
                      Application or your possession and use of that Licensed Application infringes that third
                      party&rsquo;s intellectual property rights, ASK Studios, not Apple, will be solely responsible
                      for the investigation, defense, settlement, and discharge of any such intellectual property
                      infringement claim.
                    </p>
                  </div>

                  <div className="border-t border-white/[0.06] pt-3">
                    <strong className="text-cyan-300 block text-sm">
                      (g) Legal Compliance
                    </strong>
                    <p className="mt-1 text-zinc-400 leading-relaxed">
                      You represent and warrant that (i) you are not located in a country that is subject to a U.S.
                      Government embargo, or that has been designated by the U.S. Government as a &ldquo;terrorist
                      supporting&rdquo; country; and (ii) you are not listed on any U.S. Government list of prohibited
                      or restricted parties.
                    </p>
                  </div>

                  <div className="border-t border-white/[0.06] pt-3">
                    <strong className="text-cyan-300 block text-sm">
                      (h) Third-Party Beneficiary
                    </strong>
                    <p className="mt-1 text-zinc-400 leading-relaxed">
                      You and ASK Studios acknowledge and agree that Apple, and Apple&rsquo;s subsidiaries, are
                      third-party beneficiaries of this Agreement, and that, upon your acceptance of the terms and
                      conditions of this Agreement, Apple will have the right (and will be deemed to have accepted the
                      right) to enforce this Agreement against you as a third-party beneficiary thereof.
                    </p>
                  </div>

                  <div className="border-t border-white/[0.06] pt-3">
                    <strong className="text-cyan-300 block text-sm">
                      (i) Apple Standard EULA Reference
                    </strong>
                    <p className="mt-1 text-zinc-400 leading-relaxed">
                      To the extent that these Terms do not contradict the terms set forth in Apple&rsquo;s Standard
                      Licensed Application End User License Agreement, Apple&rsquo;s Standard EULA terms also apply:{" "}
                      <a
                        href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-tech text-cyan-300 hover:underline inline-flex items-center gap-1"
                      >
                        https://www.apple.com/legal/internet-services/itunes/dev/stdeula/
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 10: Governing Law & Jurisdiction */}
              <div className="space-y-3 border-t border-white/[0.06] pt-6">
                <h3 className="font-display text-base font-bold text-white">
                  10. Governing Law &amp; Jurisdiction
                </h3>
                <p className="text-zinc-400">
                  This Agreement and any dispute arising out of or related to it shall be governed by and construed in
                  accordance with the laws of the Province of Ontario and the federal laws of Canada applicable
                  therein, without giving effect to any principles of conflicts of law.
                </p>
              </div>

              {/* Section 11: Developer Contact Information */}
              <div className="space-y-3 border-t border-white/[0.06] pt-6">
                <div className="flex items-center gap-2.5">
                  <HelpCircle className="h-5 w-5 text-zinc-400" />
                  <h3 className="font-display text-base font-bold text-white">
                    11. Developer Contact &amp; Support Notices
                  </h3>
                </div>
                <p className="text-zinc-400">
                  Should you have any questions, complaints, or claims with respect to the Licensed Application,
                  please direct all communications to:
                </p>
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 space-y-2 text-xs">
                  <p>
                    <strong className="text-zinc-200">Developer &amp; Publisher:</strong> ASK Studios
                  </p>
                  <p>
                    <strong className="text-zinc-200">Official Website:</strong>{" "}
                    <a
                      href="https://www.askstudios.net"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-tech text-cyan-300 hover:underline"
                    >
                      https://www.askstudios.net
                    </a>
                  </p>
                  <p>
                    <strong className="text-zinc-200">General &amp; Legal Support:</strong>{" "}
                    <a
                      href="mailto:info@askstudios.net"
                      className="font-tech text-cyan-300 hover:underline"
                    >
                      info@askstudios.net
                    </a>
                  </p>
                  <p>
                    <strong className="text-zinc-200">Technical Developer Desk:</strong>{" "}
                    <a
                      href="mailto:askstudios.developer@gmail.com"
                      className="font-tech text-cyan-300 hover:underline"
                    >
                      askstudios.developer@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              {/* Footer Links & Revision Date */}
              <div className="flex flex-wrap items-center gap-4 border-t border-white/[0.08] pt-6 text-xs text-zinc-400">
                <Link
                  href="/tambola-privacy-policy"
                  className="font-tech text-cyan-300 hover:underline flex items-center gap-1"
                >
                  <ShieldCheck className="h-3.5 w-3.5" />
                  <span>Tambola Privacy Policy</span>
                </Link>
                <span>&bull;</span>
                <Link
                  href="/products/tambola-caller"
                  className="text-zinc-300 hover:text-white transition-colors"
                >
                  Tambola Caller Product Page
                </Link>
                <span>&bull;</span>
                <Link
                  href="/terms"
                  className="text-zinc-300 hover:text-white transition-colors"
                >
                  ASK Studios Terms of Service
                </Link>
                <span>&bull;</span>
                <a
                  href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-300 hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  Apple Standard EULA
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>

              <p className="pt-2 text-xs text-zinc-500 font-mono">
                Effective Date: October 12, 2026 &middot; App Version: v1.6.0 &middot; ASK Studios
              </p>
            </div>
          </div>
        </section>
      </div>
    </SiteShell>
  );
}
