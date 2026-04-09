import type { Metadata } from "next";
import PageHero from "@/components/page-hero";
import { metadata as siteMeta } from "@/content/site-copy";

export const metadata: Metadata = {
  title: siteMeta.terms.title,
  description: siteMeta.terms.description,
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        headline="Terms of Use"
        subheadline="Terms governing your use of this website."
      />

      <section className="section-padding">
        <div className="container-prose">
          <div className="space-y-8 text-body-lg text-stone-600">
            <div>
              <h2 className="text-heading font-serif text-stone-900 mb-4">General</h2>
              <p>
                This website is operated by Saha. By accessing and using this site, you
                agree to comply with these terms. Full terms of use will be published here
                as we formalise our legal documentation.
              </p>
            </div>

            <div>
              <h2 className="text-heading font-serif text-stone-900 mb-4">Content</h2>
              <p>
                The information on this website is provided for general informational
                purposes only. While we strive for accuracy, we make no guarantees about
                the completeness, reliability, or suitability of the information presented.
              </p>
            </div>

            <div>
              <h2 className="text-heading font-serif text-stone-900 mb-4">Intellectual property</h2>
              <p>
                All content, design, and materials on this website are the property of Saha
                unless otherwise noted. You may not reproduce, distribute, or use this
                content without our prior written consent.
              </p>
            </div>

            <div>
              <h2 className="text-heading font-serif text-stone-900 mb-4">Contact</h2>
              <p>
                For questions about these terms, please contact us at{" "}
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
