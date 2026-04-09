import type { Metadata } from "next";
import PageHero from "@/components/page-hero";
import ContactPathways from "@/components/contact-pathways";
import { contactPage, metadata as siteMeta } from "@/content/site-copy";

export const metadata: Metadata = {
  title: siteMeta.contact.title,
  description: siteMeta.contact.description,
  openGraph: {
    title: siteMeta.contact.title,
    description: siteMeta.contact.description,
  },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow={contactPage.hero.eyebrow}
        headline={contactPage.hero.headline}
        subheadline={contactPage.hero.subheadline}
      />

      <section className="section-padding">
        <div className="container-content">
          <ContactPathways pathways={contactPage.pathways} />
        </div>
      </section>
    </>
  );
}
