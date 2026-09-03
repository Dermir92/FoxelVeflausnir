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
    <main className="flex-1 bg-paper">
      <section className="hs-grid-bg border-b-2 border-ink bg-soft py-20 sm:py-28">
        <div className="mx-auto w-full max-w-2xl px-5 text-center sm:px-6">
          <p className="hs-shadow mx-auto grid h-14 w-14 place-items-center bg-brand-orange text-lg font-black text-white">
            404
          </p>
          <h1 className="mt-8 text-[clamp(2rem,5vw,3rem)] font-extrabold leading-[1.05] tracking-[-0.045em] text-ink">
            Þessi síða fannst ekki
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-copy sm:text-lg">
            Slóðin er ekki til á vefnum okkar. Það gæti verið innsláttarvilla
            eða hlekkur sem er orðinn gamall.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/"
              className="hs-shadow inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-brand-orange px-7 font-bold text-white transition-transform hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_var(--color-ink)] focus:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 sm:w-auto"
            >
              Fara á forsíðuna
            </Link>
            <Link
              href={CONTACT_HREF}
              className="inline-flex min-h-12 w-full items-center justify-center rounded-lg border-2 border-ink bg-paper px-7 font-bold text-ink transition-colors hover:bg-soft focus:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 sm:w-auto"
            >
              Hafa samband
            </Link>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="mx-auto w-full max-w-2xl px-5 sm:px-6">
          <h2 className="text-center text-xs font-extrabold uppercase tracking-[0.12em] text-brand-blue">
            Það sem þú varst kannski að leita að
          </h2>
          <ul className="mt-5 flex flex-wrap justify-center gap-2.5">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-flex min-h-11 items-center rounded-lg border-2 border-line bg-paper px-5 text-sm font-bold text-ink transition-colors hover:border-ink hover:bg-soft focus:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2"
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
