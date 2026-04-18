import type { Metadata } from "next";
import PageHero from "@/components/page-hero";
import SectionIntro from "@/components/section-intro";
import ModelSteps from "@/components/model-steps";
import ValueGrid from "@/components/value-grid";
import CtaBanner from "@/components/cta-banner";
import CalloutBox from "@/components/callout-box";
import type { Locale } from "@/lib/i18n";
import { localePath } from "@/lib/i18n";
import { getDictionary } from "@/lib/get-dictionary";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const dict = getDictionary((params.locale ?? "en") as Locale);
  return {
    title: dict.metadata.investors.title,
    description: dict.metadata.investors.description,
    openGraph: { title: dict.metadata.investors.title, description: dict.metadata.investors.description },
  };
}

export default function InvestorsPage({ params }: { params: { locale: string } }) {
  const locale = (params.locale ?? "en") as Locale;
  const { investorsPage } = getDictionary(locale);

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
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-12 lg:gap-16">
            <div className="space-y-5">
              {investorsPage.thesis.paragraphs.map((p, i) => (
                <p key={i} className="text-body-lg text-pierre">
                  {p}
                </p>
              ))}
            </div>
            <CalloutBox {...investorsPage.thesis.callout} />
          </div>
        </div>
      </section>

      {/* ── How permanent ownership generates returns ── */}
      <section className="section-padding divider">
        <div className="container-content">
          <SectionIntro heading={investorsPage.permanentOwnership.heading} />
          <div className="max-w-3xl space-y-5">
            {investorsPage.permanentOwnership.paragraphs.map((p, i) => (
              <p key={i} className="text-body-lg text-pierre">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ── What must be true ─────────────── */}
      <section className="section-padding divider bg-stone-100/40">
        <div className="container-content">
          <SectionIntro heading={investorsPage.mustBeTrue.heading}>
            <p className="text-body-lg text-pierre">
              {investorsPage.mustBeTrue.description}
            </p>
          </SectionIntro>
          <ModelSteps steps={investorsPage.mustBeTrue.steps} />
        </div>
      </section>

      {/* ── How the model compounds ─────── */}
      <section className="section-padding divider">
        <div className="container-content">
          <SectionIntro heading={investorsPage.howModelCompounds.heading} />
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-12 lg:gap-16">
            <div className="space-y-5">
              {investorsPage.howModelCompounds.paragraphs.map((p, i) => (
                <p key={i} className="text-body-lg text-pierre">
                  {p}
                </p>
              ))}
            </div>
            <CalloutBox {...investorsPage.howModelCompounds.callout} />
          </div>
        </div>
      </section>

      {/* ── What we will not buy ──────────── */}
      <section className="section-padding divider">
        <div className="container-content">
          <SectionIntro heading={investorsPage.willNotBuy.heading}>
            <p className="text-body-lg text-pierre">
              {investorsPage.willNotBuy.description}
            </p>
          </SectionIntro>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {investorsPage.willNotBuy.items.map((item) => (
              <div key={item.title} className="p-8 bg-white border border-stone-200 rounded-sm">
                <h3 className="text-subheading font-serif text-encre mb-3">
                  {item.title}
                </h3>
                <p className="text-body text-pierre">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Where we are now ──────────────── */}
      <section className="section-padding divider bg-stone-100/40">
        <div className="container-content">
          <SectionIntro heading={investorsPage.whereWeAre.heading} />
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-12 lg:gap-16">
            <div className="space-y-5">
              {investorsPage.whereWeAre.paragraphs.map((p, i) => (
                <p key={i} className="text-body-lg text-pierre">
                  {p}
                </p>
              ))}
            </div>
            <CalloutBox {...investorsPage.whereWeAre.callout} />
          </div>
        </div>
      </section>

      {/* ── Why Saha is different ─────────── */}
      <section className="section-padding divider">
        <div className="container-content">
          <SectionIntro heading={investorsPage.whyDifferent.heading} />
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-12 lg:gap-16">
            <div className="space-y-5">
              {investorsPage.whyDifferent.paragraphs.map((p, i) => (
                <p key={i} className="text-body-lg text-pierre">
                  {p}
                </p>
              ))}
            </div>
            <CalloutBox {...investorsPage.whyDifferent.callout} />
          </div>
        </div>
      </section>

      {/* ── Closing CTA ───────────────────── */}
      <CtaBanner
        heading={investorsPage.closingCta.heading}
        description={investorsPage.closingCta.description}
        cta={{ ...investorsPage.closingCta.cta, href: localePath(locale, investorsPage.closingCta.cta.href) }}
      />
    </>
  );
}
