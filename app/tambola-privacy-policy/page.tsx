import { Metadata } from "next";
import Link from "next/link";
import SiteShell from "@/components/layout/SiteShell";
import SectionHeader from "@/components/ui/SectionHeader";
import {
  ShieldCheck,
  CreditCard,
  Lock,
  Smartphone,
  Sparkles,
  Radio,
  Users,
  CheckCircle2,
  ExternalLink,
  FileText,
  AlertCircle,
  HelpCircle,
  Scale,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Tambola Number Caller Privacy Policy",
  description:
    "Privacy Policy for Tambola Number Caller (Housie) mobile application (v1.6.0). Explains our zero personal data collection, In-App Purchases via RevenueCat & App Store / Google Play, AdMob disclosures, and Live Party sync.",
  alternates: {
    canonical: "/tambola-privacy-policy",
  },
  openGraph: {
    title: "Tambola Number Caller Privacy Policy | ASK Studios",
    description:
      "Privacy details for Tambola Number Caller (Housie) v1.6.0. Zero personal tracking, safe in-app purchases, and ephemeral party sync.",
    url: "https://www.askstudios.net/tambola-privacy-policy",
  },
};

export default function TambolaPrivacyPage() {
  return (
    <SiteShell>
      <div className="relative z-10 mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <section className="space-y-8">
          <SectionHeader
            eyebrow="PRODUCT LEGAL & PRIVACY"
            telemetryCode="TAMBOLA PRIVACY · v1.6.0"
            title="Tambola Number Caller Privacy Policy"
            description="Privacy practices for the Tambola Number Caller (Housie) mobile application on iOS and Android."
            gradientVariant="cyan"
          />

          {/* Quick Summary Pill Bar */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            <div className="flex items-center gap-2.5 rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.05] p-3 text-xs text-emerald-300">
              <ShieldCheck className="h-4 w-4 shrink-0 text-emerald-400" />
              <span>Zero Personal Data</span>
            </div>
            <div className="flex items-center gap-2.5 rounded-2xl border border-sky-500/20 bg-sky-500/[0.05] p-3 text-xs text-sky-300">
              <CreditCard className="h-4 w-4 shrink-0 text-sky-400" />
              <span>No Financial Data Stored</span>
            </div>
            <div className="flex items-center gap-2.5 rounded-2xl border border-violet-500/20 bg-violet-500/[0.05] p-3 text-xs text-violet-300">
              <Radio className="h-4 w-4 shrink-0 text-violet-400" />
              <span>Ephemeral Live Party Sync</span>
            </div>
            <div className="flex items-center gap-2.5 rounded-2xl border border-amber-500/20 bg-amber-500/[0.05] p-3 text-xs text-amber-300">
              <AlertCircle className="h-4 w-4 shrink-0 text-amber-400" />
              <span>No Real-Money Gambling</span>
            </div>
          </div>

          <div className="rounded-3xl border border-white/[0.08] bg-[#070514]/85 p-8 shadow-2xl backdrop-blur-2xl sm:p-12">
            <div className="space-y-8 text-sm leading-relaxed text-zinc-300">
              {/* Introduction */}
              <div>
                <p>
                  <strong>Tambola Number Caller (Housie)</strong> (&ldquo;the App&rdquo;) is developed, owned,
                  and published by <strong>ASK Studios</strong> (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;),
                  available on the Apple App Store (Apple ID: 6757088103, Bundle ID:{" "}
                  <code className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-xs text-cyan-300">
                    com.geekypajis.tambolanumbers
                  </code>
                  ) and the Google Play Store (Package Name:{" "}
                  <code className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-xs text-cyan-300">
                    com.geekypajis.tambolanumbers
                  </code>
                  ).
                </p>
                <p className="mt-3">
                  This Privacy Policy describes how information is handled when you use version{" "}
                  <strong>1.6.0</strong> or later of the App. We believe in total transparency and data
                  minimization: <strong>we do not collect, harvest, sell, or rent your personal data</strong>.
                </p>
              </div>

              {/* Section 1: Zero Personal Data Collection */}
              <div className="space-y-3 border-t border-white/[0.06] pt-6">
                <div className="flex items-center gap-2.5">
                  <Lock className="h-5 w-5 text-cyan-400" />
                  <h3 className="font-display text-base font-bold text-white">
                    1. Zero Personal Data Collection
                  </h3>
                </div>
                <p>
                  Tambola Number Caller is designed from the ground up to operate without identifying you.
                  We do not operate a user registration database or user management portal:
                </p>
                <ul className="list-disc space-y-1.5 pl-6 text-zinc-400">
                  <li>
                    <strong className="text-zinc-200">No Account Required:</strong> You never need to create
                    an account, register, or log in with an email, phone number, username, or password.
                  </li>
                  <li>
                    <strong className="text-zinc-200">No Identity Harvesting:</strong> We do not ask for or collect
                    your name, physical address, contacts, photos, camera access, or microphone.
                  </li>
                  <li>
                    <strong className="text-zinc-200">No Precise Geolocation:</strong> We never track, record,
                    or access your device&rsquo;s GPS or precise location.
                  </li>
                  <li>
                    <strong className="text-zinc-200">Local-First Execution:</strong> The core random number
                    generation, board state logic, and visual caller engines run entirely on your device.
                  </li>
                </ul>
              </div>

              {/* Section 2: In-App Purchases & Financial Information */}
              <div className="space-y-3 border-t border-white/[0.06] pt-6">
                <div className="flex items-center gap-2.5">
                  <CreditCard className="h-5 w-5 text-emerald-400" />
                  <h3 className="font-display text-base font-bold text-white">
                    2. In-App Purchases &amp; Financial Information
                  </h3>
                </div>
                <p>
                  The App offers an optional premium in-app purchase: <strong>Lifetime Pro</strong>{" "}
                  (<code className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-xs text-emerald-300">
                    tambola_lifetime_pro
                  </code>
                  ), which permanently removes all advertisements and unlocks all premium board themes.
                </p>

                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                    <div>
                      <strong className="text-white">Zero Financial Data Collection by ASK Studios:</strong>
                      <p className="mt-1 text-xs text-zinc-400">
                        ASK Studios does NOT collect, handle, process, receive, or store credit card numbers,
                        debit card numbers, bank credentials, payment tokens, or billing addresses.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                    <div>
                      <strong className="text-white">Apple StoreKit &amp; Google Play In-App Billing:</strong>
                      <p className="mt-1 text-xs text-zinc-400">
                        All financial transactions are handled exclusively and securely by Apple (via the
                        App Store and Apple StoreKit) or Google (via Google Play In-App Billing) under their
                        respective security and privacy protocols.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                    <div>
                      <strong className="text-white">RevenueCat SDK Integration:</strong>
                      <p className="mt-1 text-xs text-zinc-400">
                        We integrate <strong>RevenueCat</strong> to securely validate store purchase receipts,
                        manage Pro entitlement state, and facilitate restoring purchases across your devices.
                        RevenueCat processes anonymous, pseudonymous app user IDs and encrypted store receipt
                        tokens strictly to verify transaction authenticity. RevenueCat does not receive your
                        payment credentials or real identity. For more details, see the{" "}
                        <a
                          href="https://www.revenuecat.com/privacy"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-tech text-cyan-300 hover:underline inline-flex items-center gap-1"
                        >
                          RevenueCat Privacy Policy
                          <ExternalLink className="h-3 w-3" />
                        </a>.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 3: Advertising (Google AdMob) */}
              <div className="space-y-3 border-t border-white/[0.06] pt-6">
                <div className="flex items-center gap-2.5">
                  <Smartphone className="h-5 w-5 text-violet-400" />
                  <h3 className="font-display text-base font-bold text-white">
                    3. Advertising (Google AdMob) &amp; Ad-Free Options
                  </h3>
                </div>
                <p>
                  To keep the core utility free for families and hosts worldwide, the free tier of the App
                  displays advertisements served by <strong>Google AdMob</strong>.
                </p>
                <p className="text-zinc-400">
                  Google AdMob may automatically collect and process certain non-personally identifiable
                  device data to deliver and measure ad performance, fight invalid traffic, and ensure fraud
                  prevention. This may include:
                </p>
                <ul className="list-disc space-y-1.5 pl-6 text-zinc-400">
                  <li>Device advertising identifiers (IDFA on iOS, GAID on Android).</li>
                  <li>Device model, manufacturer, and operating system version.</li>
                  <li>Approximate location derived from IP address (country or city level).</li>
                  <li>Ad interaction metrics and coarse diagnostics.</li>
                </ul>
                <p className="text-zinc-400">
                  AdMob operates under Google&rsquo;s Privacy Policy, accessible at:{" "}
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-tech text-cyan-300 hover:underline inline-flex items-center gap-1"
                  >
                    https://policies.google.com/privacy
                    <ExternalLink className="h-3 w-3" />
                  </a>. You can control or reset your advertising ID anytime via your device settings (e.g.,
                  Apple Settings &rarr; Privacy &amp; Security &rarr; Tracking, or Android Settings &rarr; Google &rarr; Ads).
                </p>

                <div className="rounded-2xl border border-violet-500/20 bg-violet-500/[0.04] p-4 text-xs text-zinc-300 space-y-2">
                  <span className="font-tech font-bold uppercase tracking-wider text-violet-300 block">
                    Ad-Free Experiences in the App:
                  </span>
                  <p>
                    &bull; <strong>Lifetime Pro:</strong> A one-time purchase of Lifetime Pro completely
                    and permanently disables all banner and interstitial advertisements in the App.
                  </p>
                  <p>
                    &bull; <strong>Temporary 30-Minute Ad-Free Session:</strong> Users who prefer not to make a
                    purchase can voluntarily watch a rewarded video ad to unlock a full 30-minute ad-free gameplay
                    session.
                  </p>
                </div>
              </div>

              {/* Section 4: Local Storage & Device Preferences */}
              <div className="space-y-3 border-t border-white/[0.06] pt-6">
                <div className="flex items-center gap-2.5">
                  <Sparkles className="h-5 w-5 text-amber-400" />
                  <h3 className="font-display text-base font-bold text-white">
                    4. Local Storage &amp; User Preferences (AsyncStorage)
                  </h3>
                </div>
                <p>
                  All gameplay settings and customizations are stored strictly inside your device&rsquo;s sandboxed
                  local storage (<code className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-xs text-amber-300">AsyncStorage</code>).
                  This includes:
                </p>
                <ul className="list-disc space-y-1.5 pl-6 text-zinc-400">
                  <li>Host display name (for party rooms).</li>
                  <li>Caller audio preferences (caller voice selection, speech speed interval, mute state).</li>
                  <li>Selected visual caller board theme (Classic, Neon Cyber, Royal Gold, Velvet, etc.).</li>
                  <li>Local game night reminder schedules configured in your device.</li>
                </ul>
                <p className="text-zinc-400">
                  Because this data is stored locally within the application sandbox on your device, it is never
                  transmitted to or synchronized with an external ASK Studios cloud database. You can completely
                  erase this data at any time by clearing the App&rsquo;s storage in your device settings or
                  by uninstalling the App.
                </p>
              </div>

              {/* Section 5: Live Party Mode (Ephemeral Real-Time Sync) */}
              <div className="space-y-3 border-t border-white/[0.06] pt-6">
                <div className="flex items-center gap-2.5">
                  <Radio className="h-5 w-5 text-sky-400" />
                  <h3 className="font-display text-base font-bold text-white">
                    5. Live Party Mode &amp; Ephemeral Room Sync
                  </h3>
                </div>
                <p>
                  Tambola Number Caller includes a <strong>Live Party</strong> feature that allows hosts to
                  synchronize the caller board with participant devices in real time:
                </p>
                <ul className="list-disc space-y-1.5 pl-6 text-zinc-400">
                  <li>
                    <strong className="text-zinc-200">Ephemeral Room Codes:</strong> When a game is hosted,
                    a random 4-letter room code is generated. Players use this code to join and mirror the caller board.
                  </li>
                  <li>
                    <strong className="text-zinc-200">Transient Event Transmission:</strong> Only the current
                    called number and basic board state synchronization events are transmitted across the socket
                    connection.
                  </li>
                  <li>
                    <strong className="text-zinc-200">No Chat or Message Retention:</strong> There is no in-app
                    chat, messaging, audio transmission, or player identity logging.
                  </li>
                  <li>
                    <strong className="text-zinc-200">Automatic Purging:</strong> Once the host ends the game
                    session or all participants disconnect, the room is destroyed immediately. No game records,
                    logs, or board histories are stored.
                  </li>
                </ul>
              </div>

              {/* Section 6: Digital Tickets & Gameplay Utilities */}
              <div className="space-y-3 border-t border-white/[0.06] pt-6">
                <div className="flex items-center gap-2.5">
                  <FileText className="h-5 w-5 text-cyan-400" />
                  <h3 className="font-display text-base font-bold text-white">
                    6. Digital Tickets &amp; Gameplay Tools
                  </h3>
                </div>
                <p>
                  The App provides digital ticket generation and ticket checking utilities to assist party hosts.
                  These tickets are computed on-device using mathematical algorithms. No personal data, ticket matrices,
                  or participant winning records are uploaded or transmitted to external servers.
                </p>
              </div>

              {/* Section 7: Strict No Real-Money Gambling Disclaimer */}
              <div className="space-y-3 border-t border-white/[0.06] pt-6">
                <div className="flex items-center gap-2.5">
                  <AlertCircle className="h-5 w-5 text-rose-400" />
                  <h3 className="font-display text-base font-bold text-white">
                    7. Strict No Real-Money Gambling Policy
                  </h3>
                </div>
                <div className="rounded-2xl border border-rose-500/20 bg-rose-500/[0.05] p-5 text-zinc-300 space-y-2">
                  <p className="font-semibold text-rose-300">
                    Tambola Number Caller (Housie) is strictly a utility and party entertainment tool.
                  </p>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    The App replaces manual plastic boards, numbered tokens, and physical caller chits for traditional
                    Tambola, Housie, and Bingo social games. The App does NOT provide, facilitate, simulate, or
                    support real-money gambling, cash betting, wagering, sweepstakes, or monetary payouts. No
                    real money can be won, wagered, or lost through the App.
                  </p>
                </div>
              </div>

              {/* Section 8: Children's Privacy (COPPA Compliance) */}
              <div className="space-y-3 border-t border-white/[0.06] pt-6">
                <div className="flex items-center gap-2.5">
                  <Users className="h-5 w-5 text-emerald-400" />
                  <h3 className="font-display text-base font-bold text-white">
                    8. Children&rsquo;s Privacy (COPPA Compliance)
                  </h3>
                </div>
                <p>
                  Tambola Number Caller is designed as a family-friendly game night utility. We comply with the
                  Children&rsquo;s Online Privacy Protection Act (COPPA) and international child privacy regulations:
                </p>
                <ul className="list-disc space-y-1.5 pl-6 text-zinc-400">
                  <li>We do not knowingly collect or solicit personal information from children under 13 years of age.</li>
                  <li>We do not require children to disclose any personal details to use the App.</li>
                  <li>
                    If a parent or guardian believes that personal data has inadvertently been transmitted to us,
                    please contact us immediately at{" "}
                    <a href="mailto:info@askstudios.net" className="font-tech text-cyan-300 hover:underline">
                      info@askstudios.net
                    </a>{" "}
                    and we will ensure prompt deletion.
                  </li>
                </ul>
              </div>

              {/* Section 9: Third-Party SDK Summary */}
              <div className="space-y-3 border-t border-white/[0.06] pt-6">
                <div className="flex items-center gap-2.5">
                  <Scale className="h-5 w-5 text-indigo-400" />
                  <h3 className="font-display text-base font-bold text-white">
                    9. Third-Party Service Providers
                  </h3>
                </div>
                <p>
                  The App relies on the following verified third-party infrastructure providers for core services:
                </p>
                <div className="mt-3 overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.02]">
                  <table className="w-full text-left text-xs text-zinc-300">
                    <thead className="border-b border-white/10 bg-white/[0.04] font-tech text-zinc-200">
                      <tr>
                        <th className="p-3 font-semibold">Service</th>
                        <th className="p-3 font-semibold">Purpose</th>
                        <th className="p-3 font-semibold">Data Handled</th>
                        <th className="p-3 font-semibold">Privacy Policy</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/[0.06]">
                      <tr>
                        <td className="p-3 font-medium text-white">Apple StoreKit</td>
                        <td className="p-3 text-zinc-400">In-App Purchases on iOS</td>
                        <td className="p-3 text-zinc-400">Payment credentials (handled solely by Apple)</td>
                        <td className="p-3">
                          <a
                            href="https://www.apple.com/legal/privacy/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-cyan-300 hover:underline"
                          >
                            Apple Privacy
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-white">Google Play Billing</td>
                        <td className="p-3 text-zinc-400">In-App Purchases on Android</td>
                        <td className="p-3 text-zinc-400">Payment credentials (handled solely by Google)</td>
                        <td className="p-3">
                          <a
                            href="https://policies.google.com/privacy"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-cyan-300 hover:underline"
                          >
                            Google Privacy
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-white">RevenueCat</td>
                        <td className="p-3 text-zinc-400">Receipt Validation &amp; Pro Entitlements</td>
                        <td className="p-3 text-zinc-400">Anonymous app user IDs, encrypted receipt tokens</td>
                        <td className="p-3">
                          <a
                            href="https://www.revenuecat.com/privacy"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-cyan-300 hover:underline"
                          >
                            RevenueCat Privacy
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-white">Google AdMob</td>
                        <td className="p-3 text-zinc-400">In-App Banner &amp; Interstitial Ads (Free Tier)</td>
                        <td className="p-3 text-zinc-400">Device Advertising ID (IDFA/GAID), coarse metrics</td>
                        <td className="p-3">
                          <a
                            href="https://policies.google.com/privacy"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-cyan-300 hover:underline"
                          >
                            Google Privacy
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Section 10: Changes to This Privacy Policy */}
              <div className="space-y-3 border-t border-white/[0.06] pt-6">
                <div className="flex items-center gap-2.5">
                  <HelpCircle className="h-5 w-5 text-zinc-400" />
                  <h3 className="font-display text-base font-bold text-white">
                    10. Changes to This Privacy Policy
                  </h3>
                </div>
                <p>
                  We may periodically revise this Privacy Policy to reflect app updates, new feature releases,
                  or statutory compliance requirements. When updates are published, the revised date at the
                  bottom of this policy will be adjusted accordingly. We encourage users to check this page
                  periodically.
                </p>
              </div>

              {/* Section 11: Contact Us */}
              <div className="space-y-3 border-t border-white/[0.06] pt-6">
                <h3 className="font-display text-base font-bold text-white">
                  11. Developer Contact &amp; Legal Inquiries
                </h3>
                <p>
                  For any privacy questions, feedback, or data requests regarding Tambola Number Caller,
                  please contact ASK Studios directly:
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
                    <strong className="text-zinc-200">Primary Support Email:</strong>{" "}
                    <a
                      href="mailto:info@askstudios.net"
                      className="font-tech text-cyan-300 hover:underline"
                    >
                      info@askstudios.net
                    </a>
                  </p>
                  <p>
                    <strong className="text-zinc-200">Developer Desk Email:</strong>{" "}
                    <a
                      href="mailto:askstudios.developer@gmail.com"
                      className="font-tech text-cyan-300 hover:underline"
                    >
                      askstudios.developer@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              {/* Navigation Links */}
              <div className="flex flex-wrap items-center gap-4 border-t border-white/[0.08] pt-6 text-xs text-zinc-400">
                <Link
                  href="/tambola-terms"
                  className="font-tech text-cyan-300 hover:underline flex items-center gap-1"
                >
                  <Scale className="h-3.5 w-3.5" />
                  <span>Tambola Terms of Service &amp; Apple EULA</span>
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
              </div>

              <p className="pt-2 text-xs text-zinc-500 font-mono">
                Last updated: October 12, 2026 &middot; App Version: v1.6.0 &middot; ASK Studios
              </p>
            </div>
          </div>
        </section>
      </div>
    </SiteShell>
  );
}
