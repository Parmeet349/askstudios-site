import Link from "next/link";
import SiteShell from "@/components/layout/SiteShell";
import SectionHeader from "@/components/ui/SectionHeader";

export default function FlagQuestPrivacyPolicyPage() {
    return (
        <SiteShell>
            <section className="mt-10 max-w-3xl">
                <SectionHeader
                    eyebrow="Product Legal"
                    title="FlagQuest Privacy Policy"
                    description="Privacy details for the FlagQuest mobile application."
                />

                <div className="mt-8 space-y-6 text-sm text-slate-300/80 leading-relaxed">
                    <p>
                        <strong>FlagQuest</strong> is developed and owned by ASK Studios. Your privacy is important to us. This Privacy Policy explains how information is handled when you play the FlagQuest mobile application (“App”).
                    </p>

                    <h3 className="text-slate-200 font-semibold">
                        1. Personal Data Collection
                    </h3>
                    <p>
                        The App <strong>does not collect, store, or share any personal or sensitive user data</strong>.
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>No account creation or login is required to play.</li>
                        <li>No name, email address, phone number, or physical address is collected.</li>
                        <li>No precise location data is collected.</li>
                        <li>No user profiles or external user databases are maintained by us.</li>
                    </ul>
                    <p>
                        All core gameplay elements (including high scores, game mode settings, career progress, custom explorer profile names, and continent filter preferences) are processed and stored locally on your device.
                    </p>

                    <h3 className="text-slate-200 font-semibold">
                        2. Advertising (Google AdMob)
                    </h3>
                    <p>
                        The App displays advertisements using <strong>Google AdMob</strong>. While ASK Studios does not personally collect or store user data, AdMob may automatically collect limited information to serve and measure ads.
                    </p>
                    <p>Such information may include:</p>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>Advertising ID (AAID / IDFA)</li>
                        <li>IP address</li>
                        <li>Device information (model, manufacturer, OS version)</li>
                        <li>App usage and basic game performance metrics</li>
                        <li>Approximate location (city or region level)</li>
                    </ul>
                    <p>
                        This data is collected and processed according to Google’s Privacy Policy:{" "}
                        <a
                            href="https://policies.google.com/privacy"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-emerald-300 hover:underline"
                        >
                            https://policies.google.com/privacy
                        </a>
                    </p>
                    <p>
                        Users can manage or limit personalized advertising through their device settings.
                    </p>

                    <h3 className="text-slate-200 font-semibold">
                        3. Third-Party Services
                    </h3>
                    <p>
                        The App integrates the following third-party service:
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>
                            <strong>Google AdMob</strong> – used for displaying advertisements (such as banner ads or video ads) within the App.
                        </li>
                    </ul>
                    <p>
                        No additional analytics or tracking SDKs are integrated beyond what is required for advertising and serving mock ads where configured.
                    </p>

                    <h3 className="text-slate-200 font-semibold">
                        4. Children’s Privacy
                    </h3>
                    <p>
                        FlagQuest is a family-friendly educational game designed for trivia lovers of all ages. We do not knowingly collect personal data from children under the age of 13.
                    </p>
                    <p>
                        If you believe a child has provided personal information, please contact us and we will take appropriate action where possible.
                    </p>

                    <h3 className="text-slate-200 font-semibold">
                        5. Data Security
                    </h3>
                    <p>
                        Since no personal data is collected or stored by ASK Studios, there is no user database associated with the App. Any data processed by third-party services (such as Google AdMob) is handled according to their respective security and privacy practices.
                    </p>

                    <h3 className="text-slate-200 font-semibold">
                        6. Changes to This Policy
                    </h3>
                    <p>
                        This Privacy Policy may be updated from time to time. Any changes will be reflected on this page with an updated revision date.
                    </p>

                    <h3 className="text-slate-200 font-semibold">
                        7. Contact Us
                    </h3>
                    <p>
                        If you have any questions, concerns, or need technical support regarding the App, please visit our dedicated <Link href="/flagquest-support" className="text-emerald-300 hover:underline">FlagQuest Support & Help Center</Link> or email us at:
                        <br />
                        <span className="text-emerald-300 font-semibold">
                            info@askstudios.net
                        </span>
                    </p>

                    <p className="pt-4 text-xs text-slate-400">
                        Last updated: June 24, 2026
                    </p>
                </div>
            </section>
        </SiteShell>
    );
}
