/**
 * Grípur allar slóðir sem passa ekki við neina route. Hún er inni í
 * layout.tsx og fær því haus og fót eins og aðrar síður.
 *
 * Engin metadata-útflutningur hér: hann er aðeins skjalfestur fyrir
 * global-not-found. Titillinn kemur því úr layout.tsx og Next setur sjálfkrafa
 * noindex á svör með 404-stöðu.
 */
import Link from "next/link";
import { CONTACT_HREF, NAV_LINKS } from "@/lib/navigation";

export default function NotFound() {
  return (
    <main className="flex-1 bg-white">
      <section className="border-b border-slate-100 bg-slate-50 py-20 sm:py-28">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-blue-700">
            404
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Þessi síða fannst ekki
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Slóðin er ekki til á vefnum okkar. Það gæti verið innsláttarvilla
            eða hlekkur sem er orðinn gamall.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/"
              className="inline-flex min-h-11 w-full items-center justify-center rounded-xl bg-blue-700 px-7 py-3.5 font-semibold text-white transition-colors hover:bg-blue-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2 sm:w-auto"
            >
              Fara á forsíðuna
            </Link>
            <Link
              href={CONTACT_HREF}
              className="inline-flex min-h-11 w-full items-center justify-center rounded-xl border border-slate-300 bg-white px-7 py-3.5 font-semibold text-slate-800 transition-colors hover:border-slate-400 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2 sm:w-auto"
            >
              Hafa samband
            </Link>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-sm font-semibold uppercase tracking-wide text-slate-500">
            Það sem þú varst kannski að leita að
          </h2>
          <ul className="mt-5 flex flex-wrap justify-center gap-2.5">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-flex min-h-11 items-center rounded-full border border-slate-200 bg-white px-5 text-sm font-medium text-slate-700 transition-colors hover:border-slate-300 hover:bg-slate-50 hover:text-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
