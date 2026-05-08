/* ─────────────────────────────────────────────
 *  SEO utilities — shared metadata helpers
 * ───────────────────────────────────────────── */

import type { Metadata } from "next";
import type { Locale } from "./i18n";

const BASE_URL = "https://sahaholding.ch";

const OG_IMAGE = {
  url: `${BASE_URL}/og-image.jpg`,
  width: 1200,
  height: 630,
  alt: "Saha — Systematic succession for Swiss SMEs",
  type: "image/jpeg",
};

const localeMap: Record<Locale, string> = {
  en: "en_CH",
  fr: "fr_CH",
  de: "de_CH",
};

/**
 * Build complete page metadata with hreflang alternates,
 * OpenGraph, Twitter cards, and canonical URL.
 */
export function buildPageMetadata({
  locale,
  path,
  title,
  description,
}: {
  locale: Locale;
  path: string; // e.g. "/" or "/founders"
  title: string;
  description: string;
}): Metadata {
  const canonicalPath = locale === "en" ? path : `/${locale}${path}`;
  const canonical = `${BASE_URL}${canonicalPath === "/" ? "" : canonicalPath}`;

  return {
    title,
    description,
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical,
      languages: {
        en: `${BASE_URL}${path === "/" ? "" : path}`,
        fr: `${BASE_URL}/fr${path}`,
        de: `${BASE_URL}/de${path}`,
        "x-default": `${BASE_URL}${path === "/" ? "" : path}`,
      },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "Saha",
      locale: localeMap[locale],
      alternateLocale: Object.entries(localeMap)
        .filter(([k]) => k !== locale)
        .map(([, v]) => v),
      type: "website",
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE.url],
    },
  };
}
