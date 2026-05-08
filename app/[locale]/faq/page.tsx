import type { Metadata } from "next";
import PageHero from "@/components/page-hero";
import FaqAccordion from "@/components/faq-accordion";
import CtaBanner from "@/components/cta-banner";
import type { Locale } from "@/lib/i18n";
import { localePath } from "@/lib/i18n";
import { getDictionary } from "@/lib/get-dictionary";
import { buildPageMetadata } from "@/lib/seo";
import { FaqSchema } from "@/components/json-ld";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const locale = (params.locale ?? "en") as Locale;
  const dict = getDictionary(locale);
  return buildPageMetadata({ locale, path: "/faq", title: dict.metadata.faq.title, description: dict.metadata.faq.description });
}

export default function FaqPage({ params }: { params: { locale: string } }) {
  const locale = (params.locale ?? "en") as Locale;
  const { faqPage } = getDictionary(locale);

  return (
    <>
      <FaqSchema groups={faqPage.groups} />
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
