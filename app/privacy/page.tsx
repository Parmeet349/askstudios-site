import SiteShell from "@/components/layout/SiteShell";
import SectionHeader from "@/components/ui/SectionHeader";

export default function PrivacyPage() {
  return (
    <SiteShell>
      <section className="mt-10 max-w-3xl">
        <SectionHeader
          eyebrow="Legal"
          title="Privacy Policy"
          description="How ASK Studios collects, uses, and protects your information."
        />

        <div className="mt-8 space-y-6 text-sm text-slate-300/80 leading-relaxed">

          <p>
            This Privacy Policy explains how ASK Studios (“we”, “us”, or “our”) collects,
            uses, and protects information across our website, applications, and related
            services (“Services”). By using our Services, you agree to the practices
            described in this policy.
          </p>

          <h3 className="text-slate-200 font-semibold">1. Information We Collect</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>Personal Information:</strong> Name, email, and other details provided
              through contact forms or when requesting services.
            </li>
            <li>
              <strong>Usage Information:</strong> Device details, pages visited, browser type,
              IP address, and general analytics (non-identifiable).
            </li>
            <li>
              <strong>App Data:</strong> For products like AutoLog or Intervue.AI, the app may
              collect usage data required for functionality.
            </li>
          </ul>

          <h3 className="text-slate-200 font-semibold">2. How We Use Your Information</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>To provide and improve our Services.</li>
            <li>To respond to inquiries and support requests.</li>
            <li>For analytics, security, and system performance.</li>
            <li>To communicate updates, promotional content, or onboarding information.</li>
          </ul>

          <h3 className="text-slate-200 font-semibold">3. Sharing of Information</h3>
          <p>
            We do not sell your data. We may share information with:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Service providers such as email delivery or analytics platforms.</li>
            <li>Legal authorities when required to comply with law or protect our rights.</li>
          </ul>

          <h3 className="text-slate-200 font-semibold">4. Data Security</h3>
          <p>
            We implement standard industry protections to secure the information we collect.
            However, no method of transmission over the internet is fully secure, and we
            cannot guarantee absolute protection.
          </p>

          <h3 className="text-slate-200 font-semibold">5. Your Choices</h3>
          <p>
            You may request deletion, correction, or access to your personal data by
            contacting us at:
          </p>
          <p className="text-emerald-300">info@askstudios.net</p>

          <h3 className="text-slate-200 font-semibold">6. Children’s Privacy</h3>
          <p>
            Our Services are not directed to individuals under 13. We do not knowingly
            collect data from children.
          </p>

          <h3 className="text-slate-200 font-semibold">7. Changes to This Policy</h3>
          <p>
            We may update this Privacy Policy from time to time. Changes take effect upon
            posting on this page.
          </p>

          <h3 className="text-slate-200 font-semibold">8. Contact Us</h3>
          <p>
            For questions regarding this Privacy Policy, contact:
            <br />
            <span className="text-emerald-300">info@askstudios.net</span>
          </p>
        </div>
      </section>
    </SiteShell>
  );
}
