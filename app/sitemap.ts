import type { MetadataRoute } from "next";

const BASE_URL = "https://sahaholding.ch";

const pages = [
  "/",
  "/founders",
  "/advisors",
  "/investors",
  "/talent",
  "/about",
  "/faq",
  "/contact",
  "/privacy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const page of pages) {
    // English (default locale) — bare path
    entries.push({
      url: `${BASE_URL}${page === "/" ? "" : page}`,
      lastModified: new Date(),
      changeFrequency: page === "/" ? "weekly" : "monthly",
      priority: page === "/" ? 1.0 : page === "/founders" ? 0.9 : 0.8,
      alternates: {
        languages: {
          en: `${BASE_URL}${page === "/" ? "" : page}`,
          fr: `${BASE_URL}/fr${page}`,
          de: `${BASE_URL}/de${page}`,
        },
      },
    });
  }

  return entries;
}
