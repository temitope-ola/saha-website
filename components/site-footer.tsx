import Link from "next/link";
import { footer, siteConfig } from "@/content/site-copy";

export default function SiteFooter() {
  return (
    <footer className="border-t border-stone-200 bg-stone-100/50">
      <div className="container-content py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Brand column */}
          <div className="md:col-span-5">
            <Link
              href="/"
              className="text-2xl font-serif text-stone-900 hover:text-stone-700 transition-colors"
            >
              Saha
            </Link>
            <p className="mt-4 text-body text-stone-500 max-w-xs">
              {footer.tagline}
            </p>
            <p className="mt-2 text-body-sm text-stone-400">
              {footer.location}
            </p>
          </div>

          {/* Link columns */}
          {footer.columns.map((column) => (
            <div key={column.title} className="md:col-span-2">
              <h3 className="text-caption font-sans font-medium text-stone-400 uppercase tracking-wider mb-4">
                {column.title}
              </h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-body-sm text-stone-600 hover:text-stone-900 transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-stone-200">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <p className="text-caption text-stone-400">{footer.copyright}</p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-caption text-stone-400 hover:text-stone-600 transition-colors"
            >
              {siteConfig.email}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
