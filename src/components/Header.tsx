"use client";

import { useState } from "react";
import Image from "next/image";
import { NAV_LINKS } from "@/lib/navigation";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 2xl:max-w-[88rem]">
        <div className="flex h-16 items-center justify-between 2xl:h-[4.5rem]">
          {/* Logo */}
          <a href="#" className="flex min-h-11 items-center gap-2.5 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-700">
            <Image
              src="/logo.png"
              alt=""
              width={40}
              height={40}
              className="h-9 w-9 flex-shrink-0 rounded-sm 2xl:h-10 2xl:w-10"
              loading="eager"
            />
            <span className="text-xl font-bold tracking-tight text-blue-600 2xl:text-2xl">
              Foxel
            </span>
            <span className="text-xl font-semibold tracking-tight text-slate-700 2xl:text-2xl">
              Veflausnir
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-7 lg:flex 2xl:gap-9" aria-label="Aðalvalmynd">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="inline-flex min-h-11 min-w-11 items-center justify-center rounded text-sm font-medium text-slate-600 transition-colors hover:text-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 2xl:text-base"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <a
              href="#samband"
              className="inline-flex min-h-11 items-center justify-center rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2 2xl:px-6 2xl:text-base"
            >
              Fá verðtilboð
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="flex h-11 w-11 items-center justify-center rounded-lg text-slate-600 transition-colors hover:bg-slate-50 hover:text-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Loka valmynd" : "Opna valmynd"}
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <nav
            className="lg:hidden border-t border-slate-100 py-4"
            aria-label="Valmynd"
          >
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex min-h-11 items-center rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-blue-700"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#samband"
                onClick={() => setMenuOpen(false)}
                className="mx-3 mt-3 flex min-h-11 items-center justify-center rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-blue-800"
              >
                Fá verðtilboð
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
