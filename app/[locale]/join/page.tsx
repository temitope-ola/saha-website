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
    title: dict.metadata.join.title,
    description: dict.metadata.join.description,
    openGraph: { title: dict.metadata.join.title, description: dict.metadata.join.description },
  };
}

export default function JoinPage({ params }: { params: { locale: string } }) {
  const locale = (params.locale ?? "en") as Locale;
  const { joinPage } = getDictionary(locale);

  return (
    <>
      <PageHero
        eyebrow={joinPage.hero.eyebrow}
        headline={joinPage.hero.headline}
        subheadline={joinPage.hero.subheadline}
      />

      {/* ── Why build with Saha ───────────── */}
      <section className="section-padding">
        <div className="container-content">
          <SectionIntro heading={joinPage.whyJoin.heading} />
          <div className="max-w-prose space-y-5">
            {joinPage.whyJoin.paragraphs.map((p, i) => (
              <p key={i} className="text-body-lg text-stone-600">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who we are looking for ────────── */}
      <section className="section-padding border-t border-stone-200 bg-stone-100/40">
        <div className="container-content">
          <SectionIntro heading={joinPage.roles.heading}>
            <p className="text-body-lg text-stone-600">
              {joinPage.roles.description}
            </p>
          </SectionIntro>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {joinPage.roles.profiles.map((profile) => (
              <div key={profile.title} className="p-8 bg-white border border-stone-200 rounded-sm">
                <h3 className="text-subheading font-serif text-stone-900 mb-3">
                  {profile.title}
                </h3>
                <p className="text-body text-stone-600">
                  {profile.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What we value ─────────────────── */}
      <section className="section-padding border-t border-stone-200">
        <div className="container-content">
          <SectionIntro heading={joinPage.values.heading} />
          <ValueGrid items={joinPage.values.items} />
        </div>
      </section>

      {/* ── Closing CTA ───────────────────── */}
      <CtaBanner
        heading={joinPage.closingCta.heading}
        description={joinPage.closingCta.description}
        cta={{ ...joinPage.closingCta.cta, href: localePath(locale, joinPage.closingCta.cta.href) }}
      />
    </>
  );
}
