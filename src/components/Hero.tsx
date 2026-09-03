import Image from "next/image";
import Link from "next/link";
import { CONTACT_HREF } from "@/lib/navigation";
import hahreinuHero from "../../public/projects/hahreinu-hero.jpg";

const proofPoints = ["Fast verð", "7-10 virkir dagar", "Tvær breytingaumferðir"];

// Efni sýnidæmisins. Aðeins það sem sést: fyrirsögnin og hnappurinn bera
// kaflann, meginmálið er teiknað sem strik. Mockupið á að lesast sem mynd af
// vefsíðu, ekki sem önnur sölukynning við hliðina á þeirri sem stendur
// vinstra megin.
const project = {
  name: "HÁ Hreinu",
  domain: "hahreinu.is",
  eyebrow: "Fyrirtæki og húsfélög",
  headline: "Ræsting og iðnaðarþrif",
  cta: "Óska eftir tilboði",
};

/** Pixlaskraut. Einn ferningur með þremur offset-skuggum, eins og í hönnuninni. */
function PixelCluster({ className }: { className: string }) {
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute hidden h-[18px] w-[18px] bg-brand-orange shadow-[24px_-18px_0_var(--color-brand-yellow),48px_8px_0_var(--color-brand-orange),-22px_22px_0_var(--color-brand-cyan)] lg:block ${className}`}
    />
  );
}

export default function Hero() {
  return (
    <section className="hs-grid-bg relative isolate overflow-hidden border-b-2 border-ink bg-soft">
      <PixelCluster className="right-[5%] top-[12%]" />
      <PixelCluster className="bottom-[11%] left-[3%] scale-75" />

      <div className="relative mx-auto w-full max-w-[70rem] px-5 py-14 sm:px-6 sm:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.9fr)] lg:gap-14">
          <div>
            <p className="reveal reveal-1 text-xs font-extrabold uppercase tracking-[0.12em] text-brand-blue sm:text-[13px]">
              Heimili fyrirtækisins á vefnum
            </p>
            <h1 className="reveal reveal-1 mt-4 max-w-[15ch] text-[clamp(2.4rem,7vw,4.2rem)] font-extrabold leading-[0.98] tracking-[-0.055em] text-ink">
              Heimasíðan þín. Tilbúin til að vinna.
            </h1>
            <p className="reveal reveal-2 mt-5 max-w-[38rem] text-base leading-relaxed text-copy sm:text-lg">
              Við hönnum og setjum upp skýra, hraða og traustvekjandi vefsíðu
              sem kynnir þjónustuna, starfssvæðið og fyrri verk og gerir
              viðskiptavinum auðvelt að hafa samband.
            </p>

            <p className="reveal reveal-3 mt-6 inline-flex flex-wrap items-baseline gap-x-2 border-2 border-ink bg-paper px-4 py-2.5 text-ink hs-shadow-sm">
              <span className="text-2xl font-extrabold tracking-tight sm:text-3xl">
                129.000 kr.
              </span>
              <span className="text-sm font-semibold text-copy">
                án vsk. Hýsing 5.900 kr./mán.
              </span>
            </p>

            <div className="reveal reveal-3 mt-7 flex flex-wrap gap-3.5">
              <Link
                href={CONTACT_HREF}
                className="hs-shadow inline-flex min-h-12 items-center justify-center rounded-lg bg-brand-orange px-7 text-base font-bold text-white transition-transform hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_var(--color-ink)] focus:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-soft"
              >
                Fá verðtilboð
              </Link>
              <Link
                href="/#verkefni"
                className="inline-flex min-h-12 items-center justify-center rounded-lg border-2 border-ink bg-paper px-7 text-base font-bold text-ink transition-colors hover:bg-soft focus:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-soft"
              >
                Skoða verkefni
              </Link>
            </div>

            <ul className="reveal reveal-4 mt-7 flex flex-wrap gap-x-5 gap-y-2 text-sm text-copy">
              {proofPoints.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 flex-shrink-0 bg-brand-cyan" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Vafragluggi með sýnidæmi. Skreyting, ekki efni. */}
          <figure
            className="reveal reveal-4 mx-auto w-full max-w-lg lg:mx-0 lg:mr-6"
            aria-hidden="true"
          >
            <div className="hs-shadow-stack rounded-2xl border-[6px] border-ink bg-paper p-3 sm:p-3.5">
              <div className="flex items-center gap-2.5 border-b-4 border-ink pb-3">
                <span className="flex gap-1.5">
                  <i className="h-2.5 w-2.5 bg-brand-orange" />
                  <i className="h-2.5 w-2.5 bg-brand-yellow" />
                  <i className="h-2.5 w-2.5 bg-brand-cyan" />
                </span>
                <span className="flex h-6 flex-1 items-center border-2 border-ink bg-soft px-2 text-[10px] font-bold text-copy">
                  {project.domain}
                </span>
              </div>

              {/* Myndin fær breiddina alla. Áður sat hún í mjórri hliðarsúlu
                  og barðist við textann um plássið. */}
              <div className="relative mt-3 h-36 border-4 border-ink sm:h-44">
                <Image
                  src={hahreinuHero}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 460px, (min-width: 640px) 480px, 88vw"
                  placeholder="blur"
                  fetchPriority="high"
                  className="object-cover"
                />
                <span className="absolute bottom-0 left-0 bg-ink px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.1em] text-white">
                  {project.name}
                </span>
              </div>

              <div className="mt-4">
                <p className="text-[10px] font-extrabold uppercase tracking-[0.12em] text-brand-blue">
                  {project.eyebrow}
                </p>
                <p className="mt-1.5 text-lg font-extrabold tracking-tight text-ink sm:text-xl">
                  {project.headline}
                </p>
                <div className="mt-3 space-y-2">
                  <span className="block h-2 w-full bg-line" />
                  <span className="block h-2 w-3/5 bg-line" />
                </div>
                <span className="mt-4 flex h-10 w-fit items-center border-4 border-ink bg-brand-orange px-3.5 text-xs font-bold text-white">
                  {project.cta}
                </span>
              </div>
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
}
