import type { Metadata } from "next";
import PageHero from "@/components/page-hero";
import SectionIntro from "@/components/section-intro";
import ModelSteps from "@/components/model-steps";
import CtaBanner from "@/components/cta-banner";
import CalloutBox from "@/components/callout-box";
import type { Locale } from "@/lib/i18n";
import { localePath } from "@/lib/i18n";
import { getDictionary } from "@/lib/get-dictionary";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const dict = getDictionary((params.locale ?? "en") as Locale);
  return {
    title: dict.metadata.talent.title,
    description: dict.metadata.talent.description,
    openGraph: { title: dict.metadata.talent.title, description: dict.metadata.talent.description },
  };
}

export default function TalentPage({ params }: { params: { locale: string } }) {
  const locale = (params.locale ?? "en") as Locale;
  const { talentPage } = getDictionary(locale);

  return (
    <>
      <PageHero
        eyebrow={talentPage.hero.eyebrow}
        headline={talentPage.hero.headline}
        subheadline={talentPage.hero.subheadline}
        cta={{
          label: talentPage.hero.cta.label,
          href: localePath(locale, talentPage.hero.cta.href),
        }}
      />

      {/* ── A truly unique opportunity ─────── */}
      <section className="section-padding">
        <div className="container-content">
          <SectionIntro heading={talentPage.opportunity.heading} />
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-12 lg:gap-16">
            <div className="space-y-5">
              {talentPage.opportunity.paragraphs.map((p, i) => (
                <p key={i} className="text-body-lg text-pierre">
                  {p}
                </p>
              ))}
            </div>
            <CalloutBox {...talentPage.opportunity.callout} />
          </div>
        </div>
      </section>

      {/* ── Who you are ───────────────────── */}
      <section className="section-padding divider bg-cuivre-50/30">
        <div className="container-content">
          <SectionIntro heading={talentPage.whoYouAre.heading} />
          <div className="max-w-prose space-y-5">
            {talentPage.whoYouAre.paragraphs.map((p, i) => (
              <p key={i} className="text-body-lg text-pierre">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ── The Future CEO Program ────────── */}
      <section className="section-padding divider">
        <div className="container-content">
          <SectionIntro heading={talentPage.program.heading} />
          <ModelSteps steps={talentPage.program.steps} />
        </div>
      </section>

      {/* ── What the program offers ───────── */}
      <section className="section-padding divider bg-cuivre-50/30">
        <div className="container-content">
          <SectionIntro heading={talentPage.offer.heading} />
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-12 lg:gap-16">
            <div className="space-y-5">
              {talentPage.offer.paragraphs.map((p, i) => (
                <p key={i} className="text-body-lg text-pierre">
                  {p}
                </p>
              ))}
            </div>
            <CalloutBox {...talentPage.offer.callout} />
          </div>
        </div>
      </section>

      {/* ── What we ask in return ─────────── */}
      <section className="section-padding divider">
        <div className="container-content">
          <SectionIntro heading={talentPage.commitment.heading} />
          <div className="max-w-prose space-y-5">
            {talentPage.commitment.paragraphs.map((p, i) => (
              <p key={i} className="text-body-lg text-pierre">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ── The process ───────────────────── */}
      <section className="section-padding divider bg-cuivre-50/30">
        <div className="container-content">
          <SectionIntro heading={talentPage.process.heading} />
          <ModelSteps steps={talentPage.process.steps} />
        </div>
      </section>

      {/* ── Closing CTA ───────────────────── */}
      <CtaBanner
        heading={talentPage.closingCta.heading}
        description={talentPage.closingCta.description}
        cta={{ ...talentPage.closingCta.cta, href: localePath(locale, talentPage.closingCta.cta.href) }}
      />
    </>
  );
}
