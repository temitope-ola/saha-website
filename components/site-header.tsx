"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { type Locale, localePath, isDefaultLocale } from "@/lib/i18n";

interface NavLink {
  label: string;
  href: string;
}

interface SiteHeaderProps {
  locale: Locale;
  nav: { links: NavLink[] };
  siteName: string;
}

export default function SiteHeader({ locale, nav, siteName }: SiteHeaderProps) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  /** Check if a nav link matches the current path. */
  function isActive(href: string) {
    const full = localePath(locale, href);
    return pathname === full;
  }

  /** Strip current locale prefix to get the bare path segment. */
  function barePath(): string {
    // Always strip the locale prefix — the internal route always includes it
    // (middleware rewrites /about → /en/about, so pathname is always /<locale>/…)
    return pathname.replace(new RegExp(`^/${locale}`), "") || "/";
  }

  /** Build the path to switch to a given locale. */
  function pathForLocale(target: Locale): string {
    return localePath(target, barePath());
  }

  /** All locale options except the current one. */
  const otherLocales: { code: Locale; label: string; shortLabel: string }[] = (
    [
      { code: "en" as Locale, label: "English", shortLabel: "EN" },
      { code: "fr" as Locale, label: "Français", shortLabel: "FR" },
      { code: "de" as Locale, label: "Deutsch", shortLabel: "DE" },
    ] as const
  ).filter((l) => l.code !== locale);

  return (
    <header className="sticky top-0 z-50 bg-papier/95 backdrop-blur-sm border-b border-stone-150">
      <div className="container-content flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link
          href={localePath(locale, "/")}
          className="text-xl md:text-2xl font-serif font-normal text-encre tracking-tight hover:text-cuivre-700 transition-colors"
          aria-label={`${siteName} — ${locale === "fr" ? "accueil" : locale === "de" ? "Startseite" : "home"}`}
        >
          Saha
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-8" aria-label={locale === "fr" ? "Navigation principale" : "Main navigation"}>
          {nav.links.map((link) => (
            <Link
              key={link.href}
              href={localePath(locale, link.href)}
              className={cn(
                "text-body-sm transition-colors duration-200",
                isActive(link.href)
                  ? "text-encre font-medium"
                  : "text-stone-500 hover:text-cuivre-700"
              )}
            >
              {link.label}
            </Link>
          ))}

          {/* Language switcher */}
          <div className="flex items-center gap-3 border-l border-stone-200 pl-6 ml-2">
            {otherLocales.map((l) => (
              <Link
                key={l.code}
                href={pathForLocale(l.code)}
                className="text-body-sm text-stone-400 hover:text-cuivre-700 transition-colors duration-200"
                aria-label={l.label}
              >
                {l.shortLabel}
              </Link>
            ))}
          </div>
        </nav>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden p-2 -mr-2 text-pierre hover:text-encre transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen
            ? (locale === "fr" ? "Fermer le menu" : locale === "de" ? "Menü schliessen" : "Close menu")
            : (locale === "fr" ? "Ouvrir le menu" : locale === "de" ? "Menü öffnen" : "Open menu")
          }
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          >
            {menuOpen ? (
              <>
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="6" y1="18" x2="18" y2="6" />
              </>
            ) : (
              <>
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav
          id="mobile-menu"
          className="md:hidden border-t border-stone-150 bg-papier"
          aria-label={locale === "fr" ? "Navigation mobile" : "Mobile navigation"}
        >
          <div className="container-content py-6 flex flex-col gap-4">
            {nav.links.map((link) => (
              <Link
                key={link.href}
                href={localePath(locale, link.href)}
                className={cn(
                  "text-body-lg py-1 transition-colors",
                  isActive(link.href)
                    ? "text-encre font-medium"
                    : "text-stone-500 hover:text-cuivre-700"
                )}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile language switcher */}
            <div className="border-t border-stone-200 pt-4 mt-2 flex flex-col gap-3">
              {otherLocales.map((l) => (
                <Link
                  key={l.code}
                  href={pathForLocale(l.code)}
                  className="text-body-lg py-1 text-stone-400 hover:text-cuivre-700 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
