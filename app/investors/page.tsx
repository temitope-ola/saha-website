import type { Metadata } from "next";
import PageHero from "@/components/page-hero";
import SectionIntro from "@/components/section-intro";
import ValueGrid from "@/components/value-grid";
import CtaBanner from "@/components/cta-banner";
import { investorsPage, metadata as siteMeta } from "@/content/site-copy";

export const metadata: Metadata = {
  title: siteMeta.investors.title,
  description: siteMeta.investors.description,
  openGraph: {
    title: siteMeta.investors.title,
    description: siteMeta.investors.description,
  },
};

export default function InvestorsPage() {
  return (
    <>
      <PageHero
        eyebrow={investorsPage.hero.eyebrow}
        headline={investorsPage.hero.headline}
        subheadline={investorsPage.hero.subheadline}
      />

      {/* ── Investment thesis ──────────────── */}
      <section className="section-padding">
        <div className="container-content">
          <SectionIntro heading={investorsPage.thesis.heading} />
          <div className="max-w-prose space-y-5">
            {investorsPage.thesis.paragraphs.map((p, i) => (
              <p key={i} className="text-body-lg text-stone-600">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ── Structural advantages ─────────── */}
      <section className="section-padding border-t border-stone-200 bg-stone-100/40">
        <div className="container-content">
          <SectionIntro heading={investorsPage.modelLogic.heading} />
          <ValueGrid items={investorsPage.modelLogic.items} />
        </div>
      </section>

      {/* ── Why Saha is different ─────────── */}
      <section className="section-padding border-t border-stone-200">
        <div className="container-content">
          <SectionIntro heading={investorsPage.whyDifferent.heading} />
          <div className="max-w-prose space-y-5">
            {investorsPage.whyDifferent.paragraphs.map((p, i) => (
              <p key={i} className="text-body-lg text-stone-600">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ── Closing CTA ───────────────────── */}
      <CtaBanner
        heading={investorsPage.closingCta.heading}
        description={investorsPage.closingCta.description}
        cta={investorsPage.closingCta.cta}
      />
    </>
  );
}
