import Image from "next/image";
import Link from "next/link";

interface HeroProps {
  headline: string;
  subheadline: string;
  cta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  image?: { src: string; alt: string };
}

export default function Hero({ headline, subheadline, cta, secondaryCta, image }: HeroProps) {
  return (
    <section className="section-padding border-b border-cuivre/20" aria-label="Introduction">
      <div className="container-content">
        <div className={image ? "grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-stretch" : ""}>
          <div className={image ? "flex flex-col justify-center" : "max-w-3xl"}>
            <h1 className="text-display-sm md:text-display lg:text-display-lg text-balance whitespace-pre-line">
              {headline}
            </h1>
            <p className="mt-6 md:mt-8 text-body-lg md:text-subheading text-pierre max-w-2xl text-balance">
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
          {image && (
            <div className="rounded-lg overflow-hidden">
              <Image
                src={image.src}
                alt={image.alt}
                width={600}
                height={800}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
