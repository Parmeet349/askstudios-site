import SiteShell from "@/components/layout/SiteShell";
import SectionHeader from "@/components/ui/SectionHeader";

export default function FlagQuestTermsPage() {
    return (
        <SiteShell>
            <section className="mt-10 max-w-3xl">
                <SectionHeader
                    eyebrow="Product Legal"
                    title="FlagQuest Terms of Service"
                    description="The rules and conditions for playing FlagQuest."
                />

                <div className="mt-8 space-y-6 text-sm text-slate-300/80 leading-relaxed">
                    <p>
                        Welcome to FlagQuest. These Terms of Service (&ldquo;Terms&rdquo;) govern your use of the FlagQuest mobile application (the &ldquo;App&rdquo;) developed by ASK Studios (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), available on the Apple App Store and Google Play Store.
                    </p>
                    <p>
                        By downloading, installing, or using the App, you agree to be bound by these Terms. If you do not agree to these Terms, do not download, install, or use the App.
                    </p>

                    <h3 className="text-slate-200 font-semibold">
                        1. Use of the Service
                    </h3>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>
                            <strong>Eligibility:</strong> You must be at least 13 years of age (or the minimum age required in your country) to download and use the App.
                        </li>
                        <li>
                            <strong>License:</strong> We grant you a limited, non-exclusive, non-transferable, revocable license to download, install, and use the App on mobile devices that you own or control, solely for your personal, non-commercial entertainment.
                        </li>
                        <li>
                            <strong>User Restrictions:</strong> You agree not to copy, modify, distribute, sell, lease, reverse engineer, or attempt to extract the source code of the App, unless laws prohibit these restrictions or you have our written permission.
                        </li>
                    </ul>

                    <h3 className="text-slate-200 font-semibold">
                        2. In-App Content and Intellectual Property
                    </h3>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>
                            <strong>Ownership:</strong> All content, features, and functionality of the App (including but not limited to designs, text, graphics, logos, game logic, animations, audio assets, and software) are the exclusive property of ASK Studios and are protected by international copyright, trademark, and other intellectual property laws.
                        </li>
                        <li>
                            <strong>Flag Designs:</strong> The flag representations and related country metadata are used for educational, trivia, and informational purposes.
                        </li>
                    </ul>

                    <h3 className="text-slate-200 font-semibold">
                        3. Advertisements and Third-Party Services
                    </h3>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>
                            The App displays advertisements served by third-party ad networks (specifically Google AdMob).
                        </li>
                        <li>
                            You acknowledge and agree that your interactions with third-party advertisements or services found on or through the App are solely between you and the third party. We are not responsible for any damage, loss, or privacy issues arising from your use of third-party advertisements or services.
                        </li>
                    </ul>

                    <h3 className="text-slate-200 font-semibold">
                        4. User Data and Local Storage
                    </h3>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>
                            High scores, local preferences (like audio/haptics toggles), game mode configurations, and career progression (explorer profile name and progress tracking) are saved directly to your device's local storage.
                        </li>
                        <li>
                            We do not host, store, or back up this data on external servers. If you uninstall the App or clear your device cache/data, your game progress and high scores will be permanently deleted, and we cannot recover them for you.
                        </li>
                    </ul>

                    <h3 className="text-slate-200 font-semibold">
                        5. Disclaimer of Warranties
                    </h3>
                    <p className="bg-slate-900/50 border border-slate-800/80 rounded-lg p-4 text-xs text-slate-400 font-mono">
                        THE APP IS PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; WITHOUT ANY WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE APP WILL BE UNINTERRUPTED, SECURE, OR ERROR-FREE, OR THAT ANY DEFECTS WILL BE CORRECTED.
                    </p>

                    <h3 className="text-slate-200 font-semibold">
                        6. Limitation of Liability
                    </h3>
                    <p className="bg-slate-900/50 border border-slate-800/80 rounded-lg p-4 text-xs text-slate-400 font-mono">
                        TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL ASK STUDIOS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, DATA, OR USE, ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF THE APP, REGARDLESS OF THE LEGAL THEORY, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
                    </p>

                    <h3 className="text-slate-200 font-semibold">
                        7. Governing Law
                    </h3>
                    <p>
                        These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which ASK Studios operates, without regard to its conflict of law principles.
                    </p>

                    <h3 className="text-slate-200 font-semibold">
                        8. Changes to Terms
                    </h3>
                    <p>
                        We reserve the right to modify or update these Terms at any time. When we make updates, we will revise the &ldquo;Last Updated&rdquo; date at the bottom of these Terms. Your continued use of the App following the posting of changes constitutes your acceptance of the new Terms.
                    </p>

                    <h3 className="text-slate-200 font-semibold">
                        9. Contact Us
                    </h3>
                    <p>
                        If you have any questions or feedback regarding these Terms, please contact us at:
                        <br />
                        Developer: <span className="text-slate-200 font-semibold">ASK Studios</span>
                        <br />
                        Email: <span className="text-emerald-300 font-semibold">info@askstudios.net</span>
                    </p>

                    <p className="pt-4 text-xs text-slate-400">
                        Last updated: June 24, 2026
                    </p>
                </div>
            </section>
        </SiteShell>
    );
}
