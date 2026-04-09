import Link from "next/link";

interface HeroProps {
  headline: string;
  subheadline: string;
  cta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export default function Hero({ headline, subheadline, cta, secondaryCta }: HeroProps) {
  return (
    <section className="section-padding" aria-label="Introduction">
      <div className="container-content">
        <div className="max-w-3xl">
          <h1 className="text-display-sm md:text-display lg:text-display-lg text-balance whitespace-pre-line">
            {headline}
          </h1>
          <p className="mt-6 md:mt-8 text-body-lg md:text-subheading text-stone-600 max-w-2xl text-balance">
            {subheadline}
          </p>
          {(cta || secondaryCta) && (
            <div className="mt-10 md:mt-12 flex flex-wrap gap-4">
              {cta && (
                <Link href={cta.href} className="btn-primary">
                  {cta.label}
                </Link>
              )}
              {secondaryCta && (
                <Link href={secondaryCta.href} className="btn-secondary">
                  {secondaryCta.label}
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
