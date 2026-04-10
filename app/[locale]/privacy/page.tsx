import type { Metadata } from "next";
import PageHero from "@/components/page-hero";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/get-dictionary";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const dict = getDictionary((params.locale ?? "en") as Locale);
  return {
    title: dict.metadata.privacy.title,
    description: dict.metadata.privacy.description,
  };
}

export default function PrivacyPage({ params }: { params: { locale: string } }) {
  const locale = (params.locale ?? "en") as Locale;
  const { privacyPage } = getDictionary(locale);

  return (
    <>
      <PageHero
        eyebrow={privacyPage.hero.eyebrow}
        headline={privacyPage.hero.headline}
        subheadline={privacyPage.hero.subheadline}
      />

      <section className="section-padding">
        <div className="container-prose">
          <div className="space-y-8 text-body-lg text-stone-600">
            {privacyPage.sections.map((section, i) => (
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
