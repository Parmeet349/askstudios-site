import { Metadata } from "next";
import Link from "next/link";
import SiteShell from "@/components/layout/SiteShell";
import SectionHeader from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
    title: "Terms and Conditions | Before You Go - ASK Studios",
    description: "Terms and Conditions for Before You Go: Exit Checklist mobile application.",
};

export default function BeforeYouGoTermsPage() {
    return (
        <SiteShell>
            <section className="mt-10 max-w-3xl">
                <SectionHeader
                    eyebrow="Product Legal"
                    title="Terms and Conditions for Before You Go"
                    description="The rules and conditions for using the Before You Go mobile application."
                />

                <div className="mt-8 space-y-6 text-sm text-slate-300/80 leading-relaxed">
                    <p>
                        <strong>Effective Date:</strong> September 2, 2026
                    </p>

                    <p>
                        Please read these Terms and Conditions (&ldquo;Terms&rdquo;) carefully before using the <strong>Before You Go</strong> mobile application (the &ldquo;Application&rdquo;) operated by <strong>ASK Studios</strong> (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;).
                    </p>

                    <h3 className="text-slate-200 font-semibold text-base">
                        1. Acceptance of Terms
                    </h3>
                    <p>
                        By downloading, installing, or using the Application, you agree to be bound by these Terms. If you do not agree to these Terms, do not use the Application.
                    </p>

                    <h3 className="text-slate-200 font-semibold text-base">
                        2. License Grant
                    </h3>
                    <p>
                        ASK Studios grants you a personal, revocable, non-exclusive, non-transferable, limited license to download, install, and use the Application strictly for your personal, non-commercial purposes in accordance with these Terms.
                    </p>

                    <h3 className="text-slate-200 font-semibold text-base">
                        3. User Responsibilities
                    </h3>
                    <p>You are solely responsible for:</p>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>Entering accurate schedules and checklists for your destinations.</li>
                        <li>Ensuring your device settings permit notifications if you choose to receive departure reminders.</li>
                        <li>Verifying your essential items prior to departure. The Application is a reminder utility and should not replace critical safety, medical, or travel verification checks.</li>
                    </ul>

                    <h3 className="text-slate-200 font-semibold text-base">
                        4. Intellectual Property
                    </h3>
                    <p>
                        The Application, including its design, branding, logo, visual interface, text, graphics, and underlying source code, is the exclusive property of ASK Studios and is protected by copyright, trademark, and other applicable intellectual property laws.
                    </p>

                    <h3 className="text-slate-200 font-semibold text-base">
                        5. Disclaimer of Warranties
                    </h3>
                    <p className="rounded-lg border border-slate-800 bg-slate-900/60 p-4 text-xs font-mono text-slate-400 uppercase leading-normal">
                        THE APPLICATION IS PROVIDED ON AN &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; BASIS, WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE APPLICATION WILL BE UNINTERRUPTED, ERROR-FREE, OR THAT TIMED NOTIFICATIONS WILL NEVER BE DELAYED BY OPERATING SYSTEM POWER-SAVING OR DOZE POLICIES.
                    </p>

                    <h3 className="text-slate-200 font-semibold text-base">
                        6. Limitation of Liability
                    </h3>
                    <p className="rounded-lg border border-slate-800 bg-slate-900/60 p-4 text-xs font-mono text-slate-400 uppercase leading-normal">
                        TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL ASK STUDIOS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, OR PERSONAL PROPERTY, ARISING OUT OF OR IN CONNECTION WITH YOUR USE OR INABILITY TO USE THE APPLICATION.
                    </p>

                    <h3 className="text-slate-200 font-semibold text-base">
                        7. Modifications to the Application and Terms
                    </h3>
                    <p>
                        We reserve the right to modify, suspend, or discontinue the Application or any part thereof at any time with or without notice. We may also revise these Terms from time to time. Your continued use of the Application following any changes constitutes acceptance of the new Terms.
                    </p>

                    <h3 className="text-slate-200 font-semibold text-base">
                        8. Governing Law
                    </h3>
                    <p>
                        These Terms shall be governed and construed in accordance with the laws of the jurisdiction in which ASK Studios operates, without regard to its conflict of law provisions.
                    </p>

                    <h3 className="text-slate-200 font-semibold text-base">
                        9. Contact Us
                    </h3>
                    <p>
                        For any inquiries regarding these Terms, please contact us at:
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
                        <Link href="/before-you-go/support" className="text-emerald-300 hover:underline">
                            Support &amp; Help Center
                        </Link>
                        <span>•</span>
                        <Link href="/before-you-go/privacy" className="text-emerald-300 hover:underline">
                            View Privacy Policy
                        </Link>
                        <span>•</span>
                        <Link href="/products" className="text-slate-400 hover:underline">
                            All Products
                        </Link>
                        <span>•</span>
                        <Link href="/terms" className="text-slate-400 hover:underline">
                            ASK Studios Main Terms of Service
                        </Link>
                    </div>
                </div>
            </section>
        </SiteShell>
    );
}
