/* ─────────────────────────────────────────────
 *  i18n — locale configuration
 * ───────────────────────────────────────────── */

export const locales = ["en", "fr", "de"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

/** True when the locale is the site default (English). */
export function isDefaultLocale(locale: Locale): boolean {
  return locale === defaultLocale;
}

/**
 * Build a locale-prefixed path.
 * English (default) → bare path   (/founders)
 * French            → /fr/founders
 */
export function localePath(locale: Locale, path: string): string {
  if (isDefaultLocale(locale)) return path;
  return `/${locale}${path}`;
}
