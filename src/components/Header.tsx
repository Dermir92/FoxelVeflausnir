"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { CONTACT_HREF, NAV_LINKS } from "@/lib/navigation";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b-2 border-ink bg-paper/95 backdrop-blur-sm">
      <div className="mx-auto w-full max-w-[70rem] px-5 sm:px-6">
        <div className="flex min-h-[4.5rem] items-center justify-between gap-6">
          <Link
            href="/"
            className="flex min-h-11 items-center rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
          >
            <Logo priority className="h-9 w-auto sm:h-10" />
          </Link>

          {/* Desktop nav */}
          <nav
            className="hidden items-center gap-7 lg:flex"
            aria-label="Aðalvalmynd"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex min-h-11 items-center rounded-sm text-sm font-semibold text-copy transition-colors hover:text-brand-blue focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={CONTACT_HREF}
              className="hs-shadow inline-flex min-h-11 items-center justify-center rounded-lg bg-brand-orange px-5 text-sm font-bold text-white transition-transform hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_var(--color-ink)] focus:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2"
            >
              Fá verðtilboð
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="flex h-11 w-11 items-center justify-center rounded-lg border-2 border-line text-ink transition-colors hover:border-ink hover:bg-soft focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Loka valmynd" : "Opna valmynd"}
          >
            {menuOpen ? (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="square" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="square" strokeWidth={2.5} d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <nav className="border-t-2 border-line py-4 lg:hidden" aria-label="Valmynd">
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex min-h-11 items-center rounded-lg px-3 text-sm font-semibold text-ink transition-colors hover:bg-soft hover:text-brand-blue"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href={CONTACT_HREF}
                onClick={() => setMenuOpen(false)}
                className="hs-shadow mx-3 mt-4 mb-1 flex min-h-11 items-center justify-center rounded-lg bg-brand-orange px-5 text-sm font-bold text-white"
              >
                Fá verðtilboð
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
