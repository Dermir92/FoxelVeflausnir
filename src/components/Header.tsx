"use client";

import { useState } from "react";
import Image from "next/image";
import { NAV_LINKS } from "@/lib/navigation";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex min-h-11 items-center gap-2.5 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-700">
            <Image
              src="/logo.png"
              alt=""
              width={36}
              height={36}
              className="rounded-sm flex-shrink-0"
              priority
            />
            <span className="text-blue-600 font-bold text-xl tracking-tight">
              Foxel
            </span>
            <span className="text-slate-700 font-semibold text-xl tracking-tight">
              Veflausnir
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Aðalvalmynd">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="inline-flex min-h-11 min-w-11 items-center justify-center rounded text-sm font-medium text-slate-600 transition-colors hover:text-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-700"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <a
              href="#samband"
              className="inline-flex min-h-11 items-center justify-center rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2"
            >
              Fá fast verð
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
                Fá fast verð
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
