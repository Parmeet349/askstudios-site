import SiteShell from "@/components/layout/SiteShell";
import SectionHeader from "@/components/ui/SectionHeader";

export default function TambolaPrivacyPage() {
    return (
        <SiteShell>
            <section className="mt-10 max-w-3xl">
                <SectionHeader
                    eyebrow="Product Legal"
                    title="Tambola Caller Privacy Policy"
                    description="Privacy details for the Tambola Caller mobile application."
                />

                <div className="mt-8 space-y-6 text-sm text-slate-300/80 leading-relaxed">
                    <p>
                        <strong>Tambola Number Caller (Housie)</strong> is developed and owned
                        by ASK Studios. Your privacy is important to us. This Privacy Policy
                        explains how information is handled when you use the Tambola Caller
                        mobile application (“App”).
                    </p>

                    <h3 className="text-slate-200 font-semibold">
                        1. Personal Data Collection
                    </h3>
                    <p>
                        The App <strong>does not collect, store, or share any personal or
                            sensitive user data</strong>.
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>No account creation or login is required</li>
                        <li>No name, email address, phone number, or address is collected</li>
                        <li>No precise location data is collected</li>
                        <li>No user profiles or databases are maintained</li>
                    </ul>
                    <p>
                        All core functionality of the App runs locally on your device.
                    </p>

                    <h3 className="text-slate-200 font-semibold">
                        2. Advertising (Google AdMob)
                    </h3>
                    <p>
                        The App displays advertisements using{" "}
                        <strong>Google AdMob</strong>. While ASK Studios does not personally
                        collect user data, AdMob may automatically collect limited
                        information to serve and measure ads.
                    </p>
                    <p>Such information may include:</p>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>Advertising ID (AAID / IDFA)</li>
                        <li>IP address</li>
                        <li>Device information (model, OS version)</li>
                        <li>App usage and basic performance metrics</li>
                        <li>Approximate location (city or region level)</li>
                    </ul>
                    <p>
                        This data is collected and processed according to Google’s Privacy
                        Policy:{" "}
                        <a
                            href="https://policies.google.com/privacy"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-emerald-300"
                        >
                            https://policies.google.com/privacy
                        </a>
                    </p>
                    <p>
                        Users can manage or limit personalized advertising through their
                        device settings.
                    </p>

                    <h3 className="text-slate-200 font-semibold">
                        3. No Gambling or Real-Money Rewards
                    </h3>
                    <p>
                        Tambola Caller is a utility app designed to generate random numbers
                        for offline Tambola/Housie games.
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>No real-money gambling is offered or supported</li>
                        <li>No cash prizes or monetary rewards are provided</li>
                        <li>The App is intended for entertainment purposes only</li>
                    </ul>
                    <p>
                        Any use involving money, prizes, or wagers is solely the
                        responsibility of the user.
                    </p>

                    <h3 className="text-slate-200 font-semibold">
                        4. Third-Party Services
                    </h3>
                    <p>
                        The App uses the following third-party service:
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>
                            <strong>Google AdMob</strong> – used for displaying advertisements
                            within the App.
                        </li>
                    </ul>
                    <p>
                        No additional analytics or tracking SDKs are integrated beyond what
                        is required for advertising.
                    </p>

                    <h3 className="text-slate-200 font-semibold">
                        5. Children’s Privacy
                    </h3>
                    <p>
                        The App is not specifically directed at children under the age of 13.
                        We do not knowingly collect personal data from children.
                    </p>
                    <p>
                        If you believe a child has provided personal information, please
                        contact us and we will take appropriate action where possible.
                    </p>

                    <h3 className="text-slate-200 font-semibold">
                        6. Data Security
                    </h3>
                    <p>
                        Since no personal data is collected or stored by ASK Studios, there
                        is no user database associated with the App. Any data processed by
                        third-party services is handled according to their respective
                        security and privacy practices.
                    </p>

                    <h3 className="text-slate-200 font-semibold">
                        7. Changes to This Policy
                    </h3>
                    <p>
                        This Privacy Policy may be updated from time to time. Any changes
                        will be reflected on this page with an updated revision date.
                    </p>

                    <h3 className="text-slate-200 font-semibold">
                        8. Contact Us
                    </h3>
                    <p>
                        If you have any questions or concerns about this Privacy Policy,
                        please contact:
                        <br />
                        <span className="text-emerald-300">
                            info@askstudios.net
                        </span>
                    </p>

                    <p className="pt-4 text-xs text-slate-400">
                        Last updated: December 26, 2025
                    </p>
                </div>
            </section>
        </SiteShell>
    );
}
