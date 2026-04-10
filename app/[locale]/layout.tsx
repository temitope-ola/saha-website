import type { Metadata } from "next";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import { locales, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/get-dictionary";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const locale = (params.locale ?? "en") as Locale;
  const dict = getDictionary(locale);

  return {
    title: dict.metadata.home.title,
    description: dict.metadata.home.description,
    metadataBase: new URL(dict.siteConfig.url),
    openGraph: {
      title: dict.metadata.home.title,
      description: dict.metadata.home.description,
      siteName: dict.siteConfig.name,
      locale: locale === "fr" ? "fr_CH" : locale === "de" ? "de_CH" : "en_CH",
      type: "website",
    },
  };
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const locale = (params.locale ?? "en") as Locale;
  const dict = getDictionary(locale);

  return (
    <html lang={locale}>
      <body className="min-h-screen flex flex-col">
        <SiteHeader locale={locale} nav={dict.nav} siteName={dict.siteConfig.name} />
        <main className="flex-1">{children}</main>
        <SiteFooter locale={locale} footer={dict.footer} siteConfig={dict.siteConfig} />
      </body>
    </html>
  );
}
