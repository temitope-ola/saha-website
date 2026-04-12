import type { Metadata } from "next";
import Link from "next/link";
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

      {/* ── A note from the founder ────────── */}
      <section className="section-padding">
        <div className="container-content">
          <SectionIntro heading={aboutPage.founderNote.heading} />
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-12 lg:gap-16">
            <div>
              <div className="space-y-5">
                {aboutPage.founderNote.paragraphs.map((p, i) => (
                  <p key={i} className="text-body-lg text-stone-600">
                    {p}
                  </p>
                ))}
              </div>
              <p className="mt-8 text-body-lg font-serif text-stone-800">
                {aboutPage.founderNote.attribution}
              </p>
              {/* Bio removed — attribution only */}
            </div>
            <CalloutBox {...aboutPage.founderNote.callout} />
          </div>
        </div>
      </section>

      {/* ── The founding team ─────────────── */}
      <section className="section-padding border-t border-stone-200 bg-stone-100/40">
        <div className="container-content">
          <SectionIntro heading={aboutPage.foundingTeam.heading} />
          <p className="text-body-lg text-stone-600 mb-10 max-w-prose">
            {aboutPage.foundingTeam.intro}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aboutPage.foundingTeam.members.map((member) => (
              <div key={member.name} className="p-8 bg-white border border-stone-200 rounded-sm">
                <h3 className="text-subheading font-serif text-stone-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-body-sm text-accent-700 mb-3">
                  {member.subtitle}
                </p>
                <p className="text-body text-stone-600">
                  {member.description}
                </p>
                {/* Status badge removed — no open roles displayed here */}
              </div>
            ))}
          </div>
          <p className="mt-8 text-body-lg text-stone-600 max-w-prose">
            {aboutPage.foundingTeam.closingLine}{" "}
            <Link
              href={localePath(locale, "/join")}
              className="text-accent-700 hover:text-accent-800 underline underline-offset-2 transition-colors"
            >
              {locale === "fr" ? "Voir les rôles" : locale === "de" ? "Rollen ansehen" : "View roles"}
            </Link>
          </p>
        </div>
      </section>

      {/* ── The problem we set out to solve ── */}
      <section className="section-padding border-t border-stone-200">
        <div className="container-content">
          <SectionIntro heading={aboutPage.story.heading} />
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-12 lg:gap-16">
            <div className="space-y-5">
              {aboutPage.story.paragraphs.map((p, i) => (
                <p key={i} className="text-body-lg text-stone-600">
                  {p}
                </p>
              ))}
            </div>
            <CalloutBox {...aboutPage.story.callout} />
          </div>
        </div>
      </section>

      {/* ── Why this segment needs a different buyer ── */}
      <section className="section-padding border-t border-stone-200 bg-stone-100/40">
        <div className="container-content">
          <SectionIntro heading={aboutPage.whyDifferentBuyer.heading} />
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-12 lg:gap-16">
            <div className="space-y-5">
              {aboutPage.whyDifferentBuyer.paragraphs.map((p, i) => (
                <p key={i} className="text-body-lg text-stone-600">
                  {p}
                </p>
              ))}
            </div>
            <CalloutBox {...aboutPage.whyDifferentBuyer.callout} />
          </div>
        </div>
      </section>

      {/* ── Our approach ──────────────────── */}
      <section className="section-padding border-t border-stone-200">
        <div className="container-content">
          <SectionIntro heading={aboutPage.approach.heading} />
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-12 lg:gap-16">
            <div className="space-y-5">
              {aboutPage.approach.paragraphs.map((p, i) => (
                <p key={i} className="text-body-lg text-stone-600">
                  {p}
                </p>
              ))}
            </div>
            <CalloutBox {...aboutPage.approach.callout} />
          </div>
        </div>
      </section>

      {/* ── What we believe ───────────────── */}
      <section className="section-padding border-t border-stone-200 bg-stone-100/40">
        <div className="container-content">
          <SectionIntro heading={aboutPage.principles.heading} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {aboutPage.principles.items.map((item) => (
              <div key={item.title} className="p-8 bg-white border border-stone-200 rounded-sm">
                <h3 className="text-subheading font-serif text-stone-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-body text-stone-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
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
          {/* Ambition paragraph — flows as continuation */}
          <div className="max-w-prose mt-8">
            <p className="text-body-lg text-stone-600">
              {aboutPage.ambition}
            </p>
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
