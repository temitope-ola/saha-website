import type { Metadata } from "next";
import PageHero from "@/components/page-hero";
import SectionIntro from "@/components/section-intro";
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
                <p key={i} className="text-body-lg text-stone-600">
                  {p}
                </p>
              ))}
            </div>
            <CalloutBox {...investorsPage.thesis.callout} />
          </div>
        </div>
      </section>

      {/* ── What must be true ─────────────── */}
      <section className="section-padding border-t border-stone-200 bg-stone-100/40">
        <div className="container-content">
          <SectionIntro heading={investorsPage.mustBeTrue.heading}>
            <p className="text-body-lg text-stone-600">
              {investorsPage.mustBeTrue.description}
            </p>
          </SectionIntro>
          <ValueGrid items={investorsPage.mustBeTrue.items} />
        </div>
      </section>

      {/* ── How the model compounds ─────── */}
      <section className="section-padding border-t border-stone-200">
        <div className="container-content">
          <SectionIntro heading={investorsPage.howModelCompounds.heading} />
          <div className="max-w-prose space-y-5">
            {investorsPage.howModelCompounds.paragraphs.map((p, i) => (
              <p key={i} className="text-body-lg text-stone-600">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ── What we will not buy ──────────── */}
      <section className="section-padding border-t border-stone-200">
        <div className="container-content">
          <SectionIntro heading={investorsPage.willNotBuy.heading}>
            <p className="text-body-lg text-stone-600">
              {investorsPage.willNotBuy.description}
            </p>
          </SectionIntro>
          <ul className="max-w-prose space-y-4">
            {investorsPage.willNotBuy.items.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-body-lg text-stone-600">
                <span className="text-stone-400 mt-1.5 shrink-0" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Where we are now ──────────────── */}
      <section className="section-padding border-t border-stone-200 bg-stone-100/40">
        <div className="container-content">
          <SectionIntro heading={investorsPage.whereWeAre.heading} />
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-12 lg:gap-16">
            <div className="space-y-5">
              {investorsPage.whereWeAre.paragraphs.map((p, i) => (
                <p key={i} className="text-body-lg text-stone-600">
                  {p}
                </p>
              ))}
            </div>
            <div className="space-y-3">
              {investorsPage.whereWeAre.items.map((item, i) => (
                <div key={i} className="flex items-start gap-3 text-body text-stone-600">
                  <span className="text-accent-400 mt-1.5 shrink-0" aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <circle cx="8" cy="8" r="3" fill="currentColor" />
                    </svg>
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Saha is different ─────────── */}
      <section className="section-padding border-t border-stone-200">
        <div className="container-content">
          <SectionIntro heading={investorsPage.whyDifferent.heading} />
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-12 lg:gap-16">
            <div className="space-y-5">
              {investorsPage.whyDifferent.paragraphs.map((p, i) => (
                <p key={i} className="text-body-lg text-stone-600">
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
