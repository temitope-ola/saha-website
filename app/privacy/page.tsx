import type { Metadata } from "next";
import PageHero from "@/components/page-hero";
import { metadata as siteMeta } from "@/content/site-copy";

export const metadata: Metadata = {
  title: siteMeta.privacy.title,
  description: siteMeta.privacy.description,
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        headline="Privacy Policy"
        subheadline="How Saha handles your information."
      />

      <section className="section-padding">
        <div className="container-prose">
          <div className="space-y-8 text-body-lg text-stone-600">
            <div>
              <h2 className="text-heading font-serif text-stone-900 mb-4">Overview</h2>
              <p>
                Saha respects your privacy and is committed to protecting any personal
                information you share with us. This page outlines our approach to data
                handling. A complete privacy policy will be published here as we formalise
                our legal documentation.
              </p>
            </div>

            <div>
              <h2 className="text-heading font-serif text-stone-900 mb-4">Information we collect</h2>
              <p>
                When you contact us through this website, we collect only the information
                you voluntarily provide — such as your name, email address, and the
                content of your message. We do not use tracking cookies or third-party
                analytics on this site.
              </p>
            </div>

            <div>
              <h2 className="text-heading font-serif text-stone-900 mb-4">How we use your information</h2>
              <p>
                Information you provide is used solely to respond to your enquiry and to
                facilitate any subsequent conversations. We do not sell, share, or
                distribute your personal data to third parties.
              </p>
            </div>

            <div>
              <h2 className="text-heading font-serif text-stone-900 mb-4">Contact</h2>
              <p>
                If you have questions about how we handle your data, please contact us at{" "}
                <a href="mailto:hello@saha.ch" className="link-underline">
                  hello@saha.ch
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
