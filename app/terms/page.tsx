import SiteShell from "@/components/layout/SiteShell";
import SectionHeader from "@/components/ui/SectionHeader";

export default function TermsPage() {
  return (
    <SiteShell>
      <section className="mt-10 max-w-3xl">
        <SectionHeader
          eyebrow="Legal"
          title="Terms of Service"
          description="The rules and conditions for using ASK Studios’ website, apps, and services."
        />

        <div className="mt-8 space-y-6 text-sm text-slate-300/80 leading-relaxed">

          <p>
            These Terms of Service (“Terms”) govern your use of ASK Studios (“we”, “us”, “our”)
            products, website, and related services (“Services”). By accessing or using our
            Services, you agree to these Terms.
          </p>

          <h3 className="text-slate-200 font-semibold">1. Use of Services</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>You must use our Services in compliance with applicable laws.</li>
            <li>
              You agree not to misuse, hack, or attempt unauthorized access to our systems.
            </li>
            <li>
              Certain features may require account creation or paid subscriptions depending on
              the product.
            </li>
          </ul>

          <h3 className="text-slate-200 font-semibold">2. Intellectual Property</h3>
          <p>
            All content, code, design, trademarks, and assets within our Services remain the
            property of ASK Studios or its licensors. You may not copy, distribute, or create
            derivative works without permission.
          </p>

          <h3 className="text-slate-200 font-semibold">3. User Content</h3>
          <p>
            For platforms like Intervue.AI or DripReel, you may upload data or text. You retain
            ownership of this content but grant us permission to process it for functionality
            and improvement of the Services.
          </p>

          <h3 className="text-slate-200 font-semibold">4. Payments & Subscriptions</h3>
          <p>
            Some products may offer paid plans. Pricing, billing, and cancellation terms are
            presented at the point of purchase.
          </p>

          <h3 className="text-slate-200 font-semibold">5. Disclaimer</h3>
          <p>
            Our Services are provided “as is” without warranties of any kind, including fitness
            for a particular purpose or uninterrupted availability.
          </p>

          <h3 className="text-slate-200 font-semibold">6. Limitation of Liability</h3>
          <p>
            To the fullest extent permitted by law, ASK Studios is not liable for indirect,
            incidental, or consequential damages arising from your use of our Services.
          </p>

          <h3 className="text-slate-200 font-semibold">7. Termination</h3>
          <p>
            We may suspend or terminate access to our Services if you violate these Terms or
            engage in harmful activities.
          </p>

          <h3 className="text-slate-200 font-semibold">8. Changes to Terms</h3>
          <p>
            We may update these Terms from time to time. Continued use of our Services means
            you accept the updated Terms.
          </p>

          <h3 className="text-slate-200 font-semibold">9. Contact Us</h3>
          <p>
            If you have any questions about these Terms, contact:
            <br />
            <span className="text-emerald-300">info@askstudios.net</span>
          </p>
        </div>
      </section>
    </SiteShell>
  );
}
