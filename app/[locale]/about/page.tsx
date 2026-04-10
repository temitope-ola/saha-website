import type { Metadata } from "next";
import PageHero from "@/components/page-hero";
import SectionIntro from "@/components/section-intro";
import ValueGrid from "@/components/value-grid";
import CtaBanner from "@/components/cta-banner";
import type { Locale } from "@/lib/i18n";
import { localePath } from "@/lib/i18n";
import { getDictionary } from "@/lib/get-dictionary";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const dict = getDictionary((params.locale ?? "en") as Locale);
  return {
    title: dict.metadata.about.title,
    description: dict.metadata.about.description,
    openGraph: { title: dict.metadata.about.title, description: dict.metadata.about.description },
  };
}

export default function AboutPage({ params }: { params: { locale: string } }) {
  const locale = (params.locale ?? "en") as Locale;
  const { aboutPage } = getDictionary(locale);

  return (
    <>
      <PageHero
        eyebrow={aboutPage.hero.eyebrow}
        headline={aboutPage.hero.headline}
        subheadline={aboutPage.hero.subheadline}
      />

      {/* ── The problem we set out to solve ── */}
      <section className="section-padding">
        <div className="container-content">
          <SectionIntro heading={aboutPage.story.heading} />
          <div className="max-w-prose space-y-5">
            {aboutPage.story.paragraphs.map((p, i) => (
              <p key={i} className="text-body-lg text-stone-600">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why this segment needs a different buyer ── */}
      <section className="section-padding border-t border-stone-200 bg-stone-100/40">
        <div className="container-content">
          <SectionIntro heading={aboutPage.whyDifferentBuyer.heading} />
          <div className="max-w-prose space-y-5">
            {aboutPage.whyDifferentBuyer.paragraphs.map((p, i) => (
              <p key={i} className="text-body-lg text-stone-600">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our approach ──────────────────── */}
      <section className="section-padding border-t border-stone-200">
        <div className="container-content">
          <SectionIntro heading={aboutPage.approach.heading} />
          <div className="max-w-prose space-y-5">
            {aboutPage.approach.paragraphs.map((p, i) => (
              <p key={i} className="text-body-lg text-stone-600">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ── What we believe ───────────────── */}
      <section className="section-padding border-t border-stone-200 bg-stone-100/40">
        <div className="container-content">
          <SectionIntro heading={aboutPage.principles.heading} />
          <ValueGrid items={aboutPage.principles.items} />
        </div>
      </section>

      {/* ── Where we are today ────────────── */}
      <section className="section-padding border-t border-stone-200">
        <div className="container-content">
          <SectionIntro heading={aboutPage.whereWeAreToday.heading} />
          <div className="max-w-prose space-y-5">
            {aboutPage.whereWeAreToday.paragraphs.map((p, i) => (
              <p key={i} className="text-body-lg text-stone-600">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ── Closing CTA ───────────────────── */}
      <CtaBanner
        heading={aboutPage.closingCta.heading}
        description={aboutPage.closingCta.description}
        cta={{ ...aboutPage.closingCta.cta, href: localePath(locale, aboutPage.closingCta.cta.href) }}
      />
    </>
  );
}
