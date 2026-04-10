import type { Metadata } from "next";
import PageHero from "@/components/page-hero";
import FaqAccordion from "@/components/faq-accordion";
import CtaBanner from "@/components/cta-banner";
import type { Locale } from "@/lib/i18n";
import { localePath } from "@/lib/i18n";
import { getDictionary } from "@/lib/get-dictionary";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const dict = getDictionary((params.locale ?? "en") as Locale);
  return {
    title: dict.metadata.faq.title,
    description: dict.metadata.faq.description,
    openGraph: { title: dict.metadata.faq.title, description: dict.metadata.faq.description },
  };
}

export default function FaqPage({ params }: { params: { locale: string } }) {
  const locale = (params.locale ?? "en") as Locale;
  const { faqPage } = getDictionary(locale);

  return (
    <>
      <PageHero
        eyebrow={faqPage.hero.eyebrow}
        headline={faqPage.hero.headline}
        subheadline={faqPage.hero.subheadline}
      />

      <section className="section-padding">
        <div className="container-content">
          <FaqAccordion groups={faqPage.groups} />
        </div>
      </section>

      <CtaBanner
        heading={faqPage.closingCta.heading}
        description={faqPage.closingCta.description}
        cta={{ ...faqPage.closingCta.cta, href: localePath(locale, faqPage.closingCta.cta.href) }}
      />
    </>
  );
}
