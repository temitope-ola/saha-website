import type { Metadata } from "next";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import { siteConfig, metadata as siteMeta } from "@/content/site-copy";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: siteMeta.home.title,
  description: siteMeta.home.description,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    title: siteMeta.home.title,
    description: siteMeta.home.description,
    siteName: siteConfig.name,
    locale: "en_CH",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
