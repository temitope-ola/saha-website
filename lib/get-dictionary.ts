/* ─────────────────────────────────────────────
 *  Dictionary loader — returns locale-specific content
 * ───────────────────────────────────────────── */

import type { Locale } from "./i18n";

import * as en from "@/content/site-copy";
import * as fr from "@/content/site-copy.fr";
import * as de from "@/content/site-copy.de";

const dictionaries = { en, fr, de } as const;

export function getDictionary(locale: Locale) {
  return dictionaries[locale] ?? dictionaries.en;
}
