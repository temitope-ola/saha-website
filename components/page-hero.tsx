interface PageHeroProps {
  eyebrow?: string;
  headline: string;
  subheadline: string;
}

export default function PageHero({ eyebrow, headline, subheadline }: PageHeroProps) {
  return (
    <section className="pt-section-sm md:pt-section pb-12 md:pb-16 border-b border-cuivre/20" aria-label="Page introduction">
      <div className="container-content">
        <div>
          {eyebrow && (
            <p className="eyebrow mb-4">
              {eyebrow}
            </p>
          )}
          <h1 className="text-display-sm md:text-display lg:text-display-lg">
            {headline}
          </h1>
          <p className="mt-6 text-body-lg md:text-subheading text-pierre">
            {subheadline}
          </p>
        </div>
      </div>
    </section>
  );
}
