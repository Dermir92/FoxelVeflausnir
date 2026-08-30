import Image from "next/image";
import hahreinuHero from "../../public/projects/hahreinu-hero.jpg";

const highlights = [
  "Tvö verkefni í loftinu",
  "Tvær yfirferðir",
  "7 til 10 virkir dagar",
];

const serviceItems = [
  "Fyrirtækjaræsting",
  "Teppahreinsun",
  "Húsfélög",
];

const trustItems = [
  "Raunverulegt verkefni Foxel",
  "hahreinu.is",
];

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-slate-200 bg-[#f7f5f0] pb-8 pt-8 sm:pb-24 sm:pt-20 2xl:pb-28 2xl:pt-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "linear-gradient(rgba(37, 99, 235, 0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(37, 99, 235, 0.045) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-[#f7f5f0]/80"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 2xl:max-w-[88rem]">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:gap-20 2xl:gap-28">
          <div className="flex-1 text-center lg:text-left">
            <p className="reveal reveal-1 text-sm font-bold uppercase tracking-[0.16em] text-blue-800">
              Ein skýr lausn á föstu verði
            </p>
            <h1 className="reveal reveal-1 mt-3 text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-[3.5rem] lg:leading-[1.05] 2xl:text-[4rem]">
              Einföld vefsíða fyrir iðnaðar- og þjónustufyrirtæki
            </h1>
            <p className="reveal reveal-2 mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600 sm:mt-6 sm:text-xl lg:mx-0 2xl:text-[1.35rem]">
              Við smíðum vandaða vefsíðu sem sýnir þjónustuna, starfssvæðið og
              verkin þín og auðveldar viðskiptavinum að taka næsta skref.
            </p>
            <div className="reveal reveal-3 mt-5 flex flex-col items-center gap-1 sm:mt-7 lg:items-start">
              <p className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl 2xl:text-[2rem]">
                129.000 kr.{" "}
                <span className="text-base font-medium text-slate-500">
                  án vsk.
                </span>
              </p>
              <p className="text-sm text-slate-600">
                Hýsing og umsjón: 5.900 kr./mán. án vsk.
              </p>
            </div>
            <div className="reveal reveal-3 mt-6 flex justify-center sm:mt-8 lg:justify-start">
              <a
                href="#samband"
                className="inline-flex min-h-11 items-center justify-center rounded-xl bg-blue-800 px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-blue-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-800 focus-visible:ring-offset-2 focus-visible:ring-offset-[#f7f5f0] 2xl:px-9 2xl:text-lg"
              >
                Fá fast verð
              </a>
            </div>
            <ul className="reveal reveal-4 mt-8 hidden flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-slate-600 sm:flex lg:justify-start 2xl:text-base">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="text-blue-700" aria-hidden="true">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal reveal-4 mx-auto w-full max-w-sm flex-1 lg:mx-0 lg:max-w-lg 2xl:max-w-xl">
            <div
              className="max-h-[280px] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_30px_85px_-50px_rgba(15,23,42,0.65),0_18px_45px_-34px_rgba(30,64,175,0.45)] sm:max-h-none"
              aria-hidden="true"
            >
              <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-50 px-3 py-2.5 sm:px-4 sm:py-3">
                <div className="flex gap-1.5" aria-hidden="true">
                  <div className="h-3 w-3 rounded-full bg-slate-200" />
                  <div className="h-3 w-3 rounded-full bg-slate-200" />
                  <div className="h-3 w-3 rounded-full bg-slate-200" />
                </div>
                <div className="mx-2 flex h-7 flex-1 items-center rounded-md border border-slate-200 bg-white px-3 shadow-sm">
                  <span className="text-xs text-slate-600">
                    hahreinu.is
                  </span>
                </div>
              </div>

              <div className="border-b border-slate-200 px-4 py-3 sm:px-5 sm:py-4">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-bold text-slate-950">
                      HÁ Hreinu
                    </p>
                    <p className="mt-0.5 text-xs text-slate-500">
                      Ræsting fyrir fyrirtæki og húsfélög
                    </p>
                  </div>
                  <div className="hidden items-center gap-4 text-xs font-medium text-slate-500 sm:flex">
                    <span>Þjónusta</span>
                    <span>Verk</span>
                    <span>Samband</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-[1.05fr_0.95fr] gap-3 p-3 sm:gap-5 sm:p-5">
                <div className="flex flex-col justify-between">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-blue-800 sm:text-xs">
                      Fyrirtæki og húsfélög
                    </p>
                    <h2 className="mt-2 text-base font-bold leading-tight text-slate-950 sm:mt-3 sm:text-2xl">
                      Ræsting og teppahreinsun
                    </h2>
                    <p className="mt-2 hidden text-sm leading-relaxed text-slate-600 sm:mt-3 sm:block">
                      Skýr þjónusta fyrir fyrirtæki og húsfélög með einfaldri
                      leið til að óska eftir tilboði.
                    </p>
                  </div>
                  <div className="mt-4 hidden flex-wrap gap-2 sm:flex">
                    {serviceItems.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <p className="mt-2 flex items-center gap-1.5 text-[11px] font-medium text-slate-600 sm:hidden">
                    <span className="text-blue-800">★</span>
                    {trustItems[0]}
                  </p>
                  <div
                    className="mt-2 inline-flex min-h-9 w-fit items-center rounded-lg bg-blue-800 px-3 text-xs font-semibold text-white sm:mt-5 sm:min-h-10 sm:px-4 sm:text-sm"
                    aria-hidden="true"
                  >
                    Fá tilboð
                  </div>
                </div>

                <div className="relative min-h-28 overflow-hidden rounded-xl border border-slate-200 bg-slate-200 sm:min-h-40">
                  <Image
                    src={hahreinuHero}
                    alt=""
                    fill
                    sizes="(min-width: 1536px) 250px, (min-width: 1024px) 220px, 145px"
                    placeholder="blur"
                    fetchPriority="high"
                    className="object-cover"
                  />
                  <div className="absolute inset-x-2 bottom-2 rounded-md bg-white/95 px-2.5 py-2 shadow-sm backdrop-blur-sm">
                    <p className="text-[10px] font-semibold leading-tight text-slate-700 sm:text-xs">
                      Mynd úr raunverulegu verkefni
                    </p>
                  </div>
                </div>
              </div>

              <div className="hidden border-t border-slate-200 bg-slate-50 px-5 py-4 sm:block">
                <div className="flex flex-col gap-2 text-xs text-slate-600 sm:flex-row sm:items-center sm:justify-between">
                  {trustItems.map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-blue-800" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
