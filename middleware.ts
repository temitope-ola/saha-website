import { NextRequest, NextResponse } from "next/server";
import { locales, defaultLocale } from "@/lib/i18n";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  /* If the path already starts with a known locale, let it through. */
  const hasLocale = locales.some(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`)
  );
  if (hasLocale) return NextResponse.next();

  /* Otherwise rewrite internally to the default locale.
     The browser URL stays clean (no /en prefix). */
  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - api routes
     * - _next internals
     * - static files (those with a dot in the last segment)
     */
    "/((?!api|_next/static|_next/image|favicon\\.ico|.*\\..*).*)",
  ],
};
