import type { Metadata } from "next";
import PageHero from "@/components/page-hero";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/get-dictionary";
import { buildPageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const locale = (params.locale ?? "en") as Locale;
  const dict = getDictionary(locale);
  return buildPageMetadata({ locale, path: "/privacy", title: dict.metadata.privacy.title, description: dict.metadata.privacy.description });
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
          <div className="space-y-8 text-body-lg text-pierre">
            {privacyPage.sections.map((section, i) => (
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
