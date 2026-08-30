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
  "Raunverulegt verkefni frá Foxel",
  "hahreinu.is",
];

// Efni sýnidæmisins. Bæði vafra- og símamockupið lesa úr þessu svo þau
// haldist í takt þegar textanum er breytt.
const project = {
  name: "HÁ Hreinu",
  initials: "HÁ",
  domain: "hahreinu.is",
  navTagline: "Ræsting fyrir fyrirtæki og húsfélög",
  eyebrow: "Fyrirtæki og húsfélög",
  headline: "Ræsting og teppahreinsun",
  blurb:
    "Skýr þjónusta fyrir fyrirtæki og húsfélög með einfaldri leið til að óska eftir tilboði.",
  blurbShort: "Einföld leið til að skoða þjónustu og óska eftir tilboði.",
  cta: "Fá tilboð",
};

// Sama gildi á báðum myndunum svo þær leysist í sama srcset-kandídat og
// myndin sé aðeins sótt einu sinni.
const previewImageSizes = "(min-width: 1024px) 256px, 192px";

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

          <figure className="reveal reveal-4 mx-auto w-full max-w-sm flex-1 sm:max-w-lg lg:mx-0 lg:max-w-[38rem] 2xl:max-w-[42rem]">
            <div
              className="relative sm:pb-10 sm:pr-12 2xl:pr-16"
              aria-hidden="true"
            >
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_30px_85px_-50px_rgba(15,23,42,0.55),0_18px_45px_-34px_rgba(30,64,175,0.28)]">
                <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-50 px-3 py-2.5 sm:px-4 sm:py-3">
                  <div className="flex gap-1.5">
                    <div className="h-3 w-3 rounded-full bg-slate-200" />
                    <div className="h-3 w-3 rounded-full bg-slate-200" />
                    <div className="h-3 w-3 rounded-full bg-slate-200" />
                  </div>
                  <div className="mx-2 flex h-7 flex-1 items-center rounded-md border border-slate-200 bg-white px-3 shadow-sm">
                    <span className="text-xs text-slate-600">
                      {project.domain}
                    </span>
                  </div>
                </div>

                <div className="border-b border-slate-200 px-4 py-3 sm:px-5 sm:py-4">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm font-bold text-slate-950">
                        {project.name}
                      </p>
                      <p className="mt-0.5 text-xs text-slate-500">
                        {project.navTagline}
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
                        {project.eyebrow}
                      </p>
                      <p className="mt-2 text-base font-bold leading-tight text-slate-950 sm:mt-3 sm:text-2xl">
                        {project.headline}
                      </p>
                      <p className="mt-2 hidden text-sm leading-relaxed text-slate-600 sm:mt-3 sm:block">
                        {project.blurb}
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
                    <div className="mt-4 inline-flex min-h-9 w-fit items-center rounded-lg bg-blue-800 px-3 text-xs font-semibold text-white sm:mt-5 sm:min-h-10 sm:px-4 sm:text-sm">
                      {project.cta}
                    </div>
                  </div>

                  <div className="relative min-h-28 overflow-hidden rounded-xl border border-slate-200 bg-slate-200 sm:min-h-40">
                    <Image
                      src={hahreinuHero}
                      alt=""
                      fill
                      sizes={previewImageSizes}
                      placeholder="blur"
                      fetchPriority="high"
                      className="object-cover"
                    />
                    <div className="absolute left-2 top-2 hidden rounded-md bg-white/95 px-2.5 py-2 shadow-sm backdrop-blur-sm sm:block">
                      <p className="text-[10px] font-semibold leading-tight text-slate-700 sm:text-xs">
                        Mynd úr verkefninu
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Falið undir sm: í 375px breidd huldi kortið 64% af myndinni
                  í vafragrindinni og skildi eftir 47px rönd. */}
              <div className="absolute bottom-0 right-0 hidden w-[34%] min-w-32 max-w-[11.25rem] overflow-hidden rounded-[1.75rem] border-[5px] border-slate-900 bg-white shadow-[0_24px_55px_-28px_rgba(15,23,42,0.75),0_12px_28px_-18px_rgba(30,64,175,0.35)] sm:block">
                <div className="flex h-5 items-center justify-center bg-slate-950 sm:h-6">
                  <span className="h-1 w-8 rounded-full bg-slate-600" />
                </div>

                <div className="flex items-center justify-between gap-2 border-b border-slate-200 px-2.5 py-2 sm:px-3 sm:py-2.5">
                  <div>
                    <p className="text-[9px] font-bold leading-none text-slate-950 sm:text-[11px]">
                      {project.name}
                    </p>
                    <p className="mt-1 text-[7px] leading-none text-slate-500 sm:text-[8px]">
                      {project.headline}
                    </p>
                  </div>
                  <span className="flex h-5 w-5 items-center justify-center rounded-md bg-blue-800 text-[7px] font-bold text-white sm:h-6 sm:w-6 sm:text-[8px]">
                    {project.initials}
                  </span>
                </div>

                <div className="relative h-20 overflow-hidden bg-slate-200 sm:h-28">
                  <Image
                    src={hahreinuHero}
                    alt=""
                    fill
                    sizes={previewImageSizes}
                    placeholder="blur"
                    className="object-cover"
                  />
                </div>

                <div className="p-2.5 sm:p-3">
                  <p className="text-[7px] font-bold uppercase tracking-[0.11em] text-blue-800 sm:text-[8px]">
                    {project.eyebrow}
                  </p>
                  <p className="mt-1 text-[11px] font-bold leading-tight text-slate-950 sm:text-sm">
                    {project.headline}
                  </p>
                  <p className="mt-2 hidden text-[9px] leading-relaxed text-slate-600 sm:block">
                    {project.blurbShort}
                  </p>
                  <span className="mt-2.5 inline-flex min-h-7 items-center rounded-md bg-blue-800 px-2.5 text-[8px] font-bold text-white sm:mt-3 sm:min-h-8 sm:px-3 sm:text-[9px]">
                    {project.cta}
                  </span>
                </div>
              </div>
            </div>

            <figcaption className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-slate-600 sm:mt-5 lg:justify-start 2xl:text-base">
              {trustItems.map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <span
                    className="h-2 w-2 rounded-full bg-blue-800"
                    aria-hidden="true"
                  />
                  {item}
                </span>
              ))}
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
