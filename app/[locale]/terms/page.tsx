import type { Metadata } from "next";
import PageHero from "@/components/page-hero";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/get-dictionary";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const dict = getDictionary((params.locale ?? "en") as Locale);
  return {
    title: dict.metadata.terms.title,
    description: dict.metadata.terms.description,
  };
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
          <div className="space-y-8 text-body-lg text-stone-600">
            {termsPage.sections.map((section, i) => (
              <div key={i}>
                <h2 className="text-heading font-serif text-stone-900 mb-4">
                  {section.heading}
                </h2>
                <p>
                  {section.body}
                  {section.heading === "Contact" && (
                    <>
                      {" "}
                      <a href="mailto:hello@saha.ch" className="link-underline">
                        hello@saha.ch
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
