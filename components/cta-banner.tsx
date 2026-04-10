import Link from "next/link";

interface CtaBannerProps {
  heading: string;
  description: string;
  cta: { label: string; href: string };
}

export default function CtaBanner({ heading, description, cta }: CtaBannerProps) {
  return (
    <section className="section-padding">
      <div className="container-content">
        <div className="bg-stone-900 text-stone-100 rounded-sm px-8 py-14 md:px-16 md:py-20 text-center border-t border-accent-400">
          <h2 className="text-heading md:text-display-sm font-serif text-stone-50 text-balance max-w-xl mx-auto">
            {heading}
          </h2>
          <p className="mt-5 text-body-lg text-stone-400 max-w-lg mx-auto text-balance">
            {description}
          </p>
          <div className="mt-10">
            <Link
              href={cta.href}
              className="inline-flex items-center justify-center px-7 py-3.5
                         bg-stone-50 text-stone-900 text-body-sm font-sans font-medium
                         rounded-sm tracking-wide
                         hover:bg-white active:bg-stone-200
                         transition-colors duration-200
                         focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-400"
            >
              {cta.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
