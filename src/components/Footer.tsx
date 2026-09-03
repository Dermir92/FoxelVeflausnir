import Link from "next/link";
import Logo from "./Logo";
import { CONTACT_EMAIL, KENNITALA, LEGAL_NAME, SITE_NAME } from "@/lib/site";
import { CONTACT_HREF, NAV_LINKS } from "@/lib/navigation";

const legalLinks = [
  { href: "/skilmalar", label: "Skilmálar" },
  { href: "/personuvernd", label: "Persónuvernd" },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-slate-300">
      <div className="mx-auto w-full max-w-[70rem] px-5 pb-8 pt-14 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="inline-flex rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
            >
              <Logo tone="dark" className="h-10 w-auto" />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
              Vefsíður sem líta vel út, virka hratt og auðvelda fólki að hafa
              samband.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-extrabold uppercase tracking-[0.12em] text-white">
              Valmynd
            </h3>
            <ul className="mt-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex min-h-11 items-center rounded-sm text-sm text-slate-400 transition-colors hover:text-brand-cyan focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-extrabold uppercase tracking-[0.12em] text-white">
              Upplýsingar
            </h3>
            <ul className="mt-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex min-h-11 items-center rounded-sm text-sm text-slate-400 transition-colors hover:text-brand-cyan focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href={CONTACT_HREF}
                  className="inline-flex min-h-11 items-center rounded-sm text-sm text-slate-400 transition-colors hover:text-brand-cyan focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
                >
                  Hafðu samband
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-extrabold uppercase tracking-[0.12em] text-white">
              Rekstraraðili
            </h3>
            <ul className="mt-3 space-y-1.5 text-sm text-slate-400">
              <li>{LEGAL_NAME}</li>
              <li>Kt. {KENNITALA}</li>
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="inline-flex min-h-11 items-center rounded-sm transition-colors hover:text-brand-cyan focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
                >
                  {CONTACT_EMAIL}
                </a>
              </li>
            </ul>
            <Link
              href={CONTACT_HREF}
              className="mt-2 inline-flex min-h-11 items-center justify-center rounded-lg bg-brand-orange px-5 text-sm font-bold text-white shadow-[4px_4px_0_#000000] transition-transform hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#000000] focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
            >
              Fá verðtilboð
            </Link>
          </div>
        </div>

        <p className="mt-12 border-t border-slate-700 pt-6 text-[13px] text-slate-500">
          &copy; {new Date().getFullYear()} {SITE_NAME}. Öll réttindi áskilin.
        </p>
      </div>
    </footer>
  );
}
