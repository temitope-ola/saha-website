import type { Metadata } from "next";
import PageHero from "@/components/page-hero";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/get-dictionary";
import { buildPageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const locale = (params.locale ?? "en") as Locale;
  const dict = getDictionary(locale);
  return buildPageMetadata({ locale, path: "/terms", title: dict.metadata.terms.title, description: dict.metadata.terms.description });
}

export default function TermsPage({ params }: { params: { locale: string } }) {
  const locale = (params.locale ?? "en") as Locale;
  const { termsPage } = getDictionary(locale);

  return (
    <>
      <PageHero
        eyebrow={termsPage.hero.eyebrow}
        headline={termsPage.hero.headline}
        subheadline={termsPage.hero.subheadline}
      />

      <section className="section-padding">
        <div className="container-prose">
          <div className="space-y-8 text-body-lg text-pierre">
            {termsPage.sections.map((section, i) => (
              <div key={i}>
                <h2 className="text-heading font-serif text-encre mb-4">
                  {section.heading}
                </h2>
                <p>
                  {section.body}
                  {section.heading === "Contact" && (
                    <>
                      {" "}
                      <a href="mailto:hello@sahaholding.ch" className="link-underline">
                        hello@sahaholding.ch
                      </a>
                      .
                    </>
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
