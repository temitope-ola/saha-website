"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav, siteConfig } from "@/content/site-copy";
import { cn } from "@/lib/utils";

export default function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-stone-50/95 backdrop-blur-sm border-b border-stone-150">
      <div className="container-content flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl md:text-2xl font-serif font-normal text-stone-900 tracking-tight hover:text-stone-700 transition-colors"
          aria-label={`${siteConfig.name} — home`}
        >
          Saha
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {nav.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-body-sm transition-colors duration-200",
                pathname === link.href
                  ? "text-stone-900 font-medium"
                  : "text-stone-500 hover:text-stone-800"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden p-2 -mr-2 text-stone-600 hover:text-stone-900 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
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
          className="md:hidden border-t border-stone-150 bg-stone-50"
          aria-label="Mobile navigation"
        >
          <div className="container-content py-6 flex flex-col gap-4">
            {nav.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-body-lg py-1 transition-colors",
                  pathname === link.href
                    ? "text-stone-900 font-medium"
                    : "text-stone-500 hover:text-stone-800"
                )}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
