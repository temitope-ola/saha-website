interface PageHeroProps {
  eyebrow?: string;
  headline: string;
  subheadline: string;
}

export default function PageHero({ eyebrow, headline, subheadline }: PageHeroProps) {
  return (
    <section className="pt-section-sm md:pt-section pb-12 md:pb-16 border-b border-accent-300" aria-label="Page introduction">
      <div className="container-content">
        <div className="max-w-2xl">
          {eyebrow && (
            <p className="text-caption font-sans font-medium text-accent-600 uppercase tracking-wider mb-4">
              {eyebrow}
            </p>
          )}
          <h1 className="text-display-sm md:text-display text-balance">
            {headline}
          </h1>
          <p className="mt-6 text-body-lg md:text-subheading text-stone-600 text-balance">
            {subheadline}
          </p>
        </div>
      </div>
    </section>
  );
}
