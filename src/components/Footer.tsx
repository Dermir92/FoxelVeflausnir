import Image from "next/image";
import { CONTACT_EMAIL, KENNITALA, LEGAL_NAME } from "@/lib/site";
import { NAV_LINKS } from "@/lib/navigation";

const legalLinks = [
  { href: "/skilmalar", label: "Skilmálar" },
  { href: "/personuvernd", label: "Persónuvernd" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-14">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-[1.4fr_0.7fr_0.7fr_1fr] lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <div className="mb-3 flex items-center gap-2.5">
              <Image
                src="/logo.png"
                alt=""
                width={32}
                height={32}
                className="rounded-sm flex-shrink-0"
              />
              <span className="text-blue-400 font-bold text-lg">Foxel</span>
              <span className="text-white font-semibold text-lg">Veflausnir</span>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-slate-400">
              Við hönnum og setjum upp skýrar, traustvekjandi vefsíður fyrir
              lítil fyrirtæki í iðnaði og þjónustu.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-white">
              Valmynd
            </h3>
            <ul className="space-y-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="inline-flex min-h-11 min-w-11 items-center rounded text-sm text-slate-400 transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-white">
              Upplýsingar
            </h3>
            <ul className="space-y-1">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="inline-flex min-h-11 min-w-11 items-center rounded text-sm text-slate-400 transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 lg:col-span-1">
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-white">
              Hafðu samband
            </h3>
            <ul className="space-y-1 text-sm text-slate-400">
              <li className="flex min-h-11 items-center">{LEGAL_NAME}</li>
              <li className="flex min-h-11 items-center">Kt. {KENNITALA}</li>
              <li className="flex min-h-11 items-center gap-2">
                <svg className="h-4 w-4 flex-shrink-0 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="inline-flex min-h-11 items-center rounded transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                >
                  {CONTACT_EMAIL}
                </a>
              </li>
            </ul>
            <div className="mt-4">
              <a
                href="#samband"
                className="inline-flex min-h-11 items-center justify-center rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                Fá verðtilboð
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-slate-800 pt-6 sm:flex-row">
          <p className="text-sm text-slate-400">
            &copy; {new Date().getFullYear()} Foxel Veflausnir. Öll réttindi áskilin.
          </p>
        </div>
      </div>
    </footer>
  );
}
