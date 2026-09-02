import { Metadata } from "next";
import Link from "next/link";
import SiteShell from "@/components/layout/SiteShell";
import SectionHeader from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
    title: "Privacy Policy | Before You Go - ASK Studios",
    description: "Privacy Policy for Before You Go: Exit Checklist mobile application. 100% private and offline-first.",
};

export default function BeforeYouGoPrivacyPage() {
    return (
        <SiteShell>
            <section className="mt-10 max-w-3xl">
                <SectionHeader
                    eyebrow="Product Legal"
                    title="Privacy Policy for Before You Go"
                    description="How Before You Go handles your data with an offline-first, zero-tracking architecture."
                />

                <div className="mt-8 space-y-6 text-sm text-slate-300/80 leading-relaxed">
                    <p>
                        <strong>Effective Date:</strong> September 2, 2026
                        <br />
                        <strong>Last Updated:</strong> September 2, 2026
                    </p>

                    <p>
                        At <strong>ASK Studios</strong> (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;), your privacy is our top priority. This Privacy Policy explains how <strong>Before You Go</strong> (the &ldquo;Application&rdquo;) handles your information.
                    </p>

                    <h3 className="text-slate-200 font-semibold text-base">
                        1. No Personal Data Collection
                    </h3>
                    <p>
                        Before You Go is designed as a <strong>private, offline-first application</strong>:
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>
                            We do <strong>not</strong> collect, store, or transmit any personally identifiable information (PII) such as your name, email address, phone number, location, or device identifiers.
                        </li>
                        <li>
                            We do <strong>not</strong> use third-party analytics SDKs, trackers, or advertising frameworks.
                        </li>
                        <li>
                            No user account or login is required to use the Application.
                        </li>
                    </ul>

                    <h3 className="text-slate-200 font-semibold text-base">
                        2. Local Data Storage
                    </h3>
                    <p>
                        All data you enter into the Application—including place names, departure times, schedule preferences, and checklist items—is stored exclusively on your device using local storage (AsyncStorage). This data never leaves your device and is not accessible to us or any third party.
                    </p>

                    <h3 className="text-slate-200 font-semibold text-base">
                        3. Device Permissions &amp; Notifications
                    </h3>
                    <p>
                        The Application requests the following device permissions solely to deliver core local features:
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>
                            <strong>Notifications:</strong> Used strictly to schedule and deliver departure reminders and checklist previews at your chosen times. No notification data is sent to external servers.
                        </li>
                    </ul>

                    <h3 className="text-slate-200 font-semibold text-base">
                        4. Third-Party Services
                    </h3>
                    <p>
                        The Application does not integrate with any third-party analytics, tracking, or advertising services that monitor your behavior.
                    </p>

                    <h3 className="text-slate-200 font-semibold text-base">
                        5. Data Retention &amp; Deletion
                    </h3>
                    <p>Because all data is stored locally on your device:</p>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>
                            You can delete individual places, items, or routines at any time directly within the Application.
                        </li>
                        <li>
                            Uninstalling the Application or clearing its app data from your device settings will permanently remove all stored checklists and reminders.
                        </li>
                    </ul>

                    <h3 className="text-slate-200 font-semibold text-base">
                        6. Children&apos;s Privacy
                    </h3>
                    <p>
                        The Application does not collect any personal data from anyone, including children under the age of 13.
                    </p>

                    <h3 className="text-slate-200 font-semibold text-base">
                        7. Changes to This Privacy Policy
                    </h3>
                    <p>
                        We may update our Privacy Policy from time to time. Any updates will be posted on this page with an updated &ldquo;Effective Date.&rdquo;
                    </p>

                    <h3 className="text-slate-200 font-semibold text-base">
                        8. Contact Us
                    </h3>
                    <p>
                        If you have any questions or suggestions regarding this Privacy Policy, please contact us at:
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>
                            <strong>Email:</strong>{" "}
                            <a
                                href="mailto:contact@askstudios.net"
                                className="text-emerald-300 hover:underline"
                            >
                                contact@askstudios.net
                            </a>
                        </li>
                        <li>
                            <strong>Developer:</strong> ASK Studios
                        </li>
                    </ul>

                    <div className="pt-6 border-t border-slate-800/80 flex flex-wrap gap-4 text-xs text-slate-400">
                        <Link href="/before-you-go/terms" className="text-emerald-300 hover:underline">
                            View Terms &amp; Conditions
                        </Link>
                        <span>•</span>
                        <Link href="/products" className="text-slate-400 hover:underline">
                            All Products
                        </Link>
                        <span>•</span>
                        <Link href="/privacy" className="text-slate-400 hover:underline">
                            ASK Studios Main Privacy Policy
                        </Link>
                    </div>
                </div>
            </section>
        </SiteShell>
    );
}
