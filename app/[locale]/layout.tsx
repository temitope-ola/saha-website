import type { Metadata } from "next";
import { Fraunces, Figtree, JetBrains_Mono } from "next/font/google";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import { locales, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/get-dictionary";
import { buildPageMetadata } from "@/lib/seo";
import { OrganizationSchema, WebSiteSchema } from "@/components/json-ld";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz", "SOFT", "WONK"],
});

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

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

  return buildPageMetadata({
    locale,
    path: "/",
    title: dict.metadata.home.title,
    description: dict.metadata.home.description,
  });
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
    <html lang={locale} className={`${fraunces.variable} ${figtree.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen flex flex-col">
        <OrganizationSchema
          name={dict.siteConfig.name}
          url="https://sahaholding.ch"
          description={dict.metadata.home.description}
          email={dict.siteConfig.email}
          location={dict.siteConfig.location}
        />
        <WebSiteSchema name={dict.siteConfig.name} url="https://sahaholding.ch" />
        <SiteHeader locale={locale} nav={dict.nav} siteName={dict.siteConfig.name} />
        <main className="flex-1">{children}</main>
        <SiteFooter locale={locale} footer={dict.footer} siteConfig={dict.siteConfig} />
      </body>
    </html>
  );
}
