import Image from "next/image";
import { CONTACT_EMAIL, KENNITALA, LEGAL_NAME } from "@/lib/site";

const navLinks = [
  { href: "#thjonustan", label: "Þjónustan" },
  { href: "#pakkar", label: "Pakkar" },
  { href: "#ferlid", label: "Ferlið" },
  { href: "#spurningar", label: "Spurt og svarað" },
  { href: "#samband", label: "Hafðu samband" },
];

const legalLinks = [
  { href: "/skilmalar", label: "Skilmálar" },
  { href: "/personuvernd", label: "Persónuvernd" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-3">
              <Image
                src="/logo.png"
                alt="Foxel logo"
                width={32}
                height={32}
                className="rounded-sm flex-shrink-0"
              />
              <span className="text-blue-400 font-bold text-lg">Foxel</span>
              <span className="text-white font-semibold text-lg">Veflausnir</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
              Við hönnum skýrar og traustvekjandi vefsíður fyrir lítil fyrirtæki
              sem vilja vera sýnileg og aðgengileg.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wide mb-4">
              Valmynd
            </h3>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <h3 className="mt-8 text-sm font-semibold text-white uppercase tracking-wide mb-4">
              Upplýsingar
            </h3>
            <ul className="space-y-2.5">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wide mb-4">
              Hafðu samband
            </h3>
            <ul className="space-y-2.5">
              <li className="text-sm text-slate-400">{LEGAL_NAME}</li>
              <li className="text-sm text-slate-400">Kt. {KENNITALA}</li>
              <li className="flex items-center gap-2 text-sm text-slate-400">
                <svg className="w-4 h-4 text-slate-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded"
                >
                  {CONTACT_EMAIL}
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <a
                href="#samband"
                className="inline-block bg-blue-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                Hafa samband
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Foxel Veflausnir. Öll réttindi áskilin.
          </p>
          <p className="text-xs text-slate-600">
            Þjónusta frá Foxel
          </p>
        </div>
      </div>
    </footer>
  );
}
