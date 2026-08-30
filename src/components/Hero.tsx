const highlights = ["5 til 7 kaflar", "Tvær yfirferðir", "7 til 10 virkir dagar"];

const serviceItems = [
  "Neyðarviðgerðir",
  "Viðhald",
  "Nýlagnir",
];

const trustItems = [
  "4,9 í einkunn",
  "Þjónusta á höfuðborgarsvæðinu",
];

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-slate-200 bg-[#f7f5f0] pb-8 pt-8 sm:pb-24 sm:pt-20">
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
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:gap-16">
          <div className="flex-1 text-center lg:text-left">
            <p className="reveal reveal-1 text-sm font-bold uppercase tracking-[0.16em] text-blue-800">
              Ein skýr lausn á föstu verði
            </p>
            <h1 className="reveal reveal-1 mt-3 text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-[3.25rem]">
              Einföld vefsíða fyrir iðnaðar- og þjónustufyrirtæki
            </h1>
            <p className="reveal reveal-2 mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-600 sm:mt-6 sm:text-xl lg:mx-0">
              Við setjum þjónustuna, starfssvæðið, myndir og leiðir til að hafa
              samband á eina skýra síðu sem hjálpar fólki að taka næsta skref.
            </p>
            <div className="reveal reveal-3 mt-5 flex flex-col items-center gap-1 sm:mt-7 lg:items-start">
              <p className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
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
                className="inline-flex min-h-11 items-center justify-center rounded-xl bg-blue-800 px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-blue-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-800 focus-visible:ring-offset-2 focus-visible:ring-offset-[#f7f5f0]"
              >
                Fá fast verð
              </a>
            </div>
            <ul className="reveal reveal-4 mt-8 hidden flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-slate-600 sm:flex lg:justify-start">
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

          <div className="reveal reveal-4 mx-auto w-full max-w-sm flex-1 lg:mx-0 lg:max-w-md">
            <div className="max-h-[280px] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_30px_85px_-50px_rgba(15,23,42,0.65),0_18px_45px_-34px_rgba(30,64,175,0.45)] sm:max-h-none">
              <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-50 px-3 py-2.5 sm:px-4 sm:py-3">
                <div className="flex gap-1.5" aria-hidden="true">
                  <div className="h-3 w-3 rounded-full bg-slate-200" />
                  <div className="h-3 w-3 rounded-full bg-slate-200" />
                  <div className="h-3 w-3 rounded-full bg-slate-200" />
                </div>
                <div className="mx-2 flex h-7 flex-1 items-center rounded-md border border-slate-200 bg-white px-3 shadow-sm">
                  <span className="text-xs text-slate-600">pipari.is</span>
                </div>
              </div>

              <div className="border-b border-slate-200 px-4 py-3 sm:px-5 sm:py-4">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-bold text-slate-950">
                      Jóns Pípulagnir
                    </p>
                    <p className="mt-0.5 text-xs text-slate-500">
                      Löggilt pípulagningaþjónusta
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
                      Höfuðborgarsvæðið
                    </p>
                    <h2 className="mt-2 text-base font-bold leading-tight text-slate-950 sm:mt-3 sm:text-2xl">
                      Pípulagnir, viðhald og viðgerðir
                    </h2>
                    <p className="mt-2 hidden text-sm leading-relaxed text-slate-600 sm:mt-3 sm:block">
                      Skýr þjónustulýsing, þjónustusvæði og einföld leið til að
                      hringja eða biðja um tilboð.
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
                  <div
                    className="mt-4 inline-flex min-h-9 w-fit items-center rounded-lg bg-blue-800 px-3 text-xs font-semibold text-white sm:mt-5 sm:min-h-10 sm:px-4 sm:text-sm"
                    aria-hidden="true"
                  >
                    Fá tilboð
                  </div>
                </div>

                <div className="rounded-xl border border-slate-200 bg-slate-100 p-2 sm:p-3">
                  <div className="flex h-28 flex-col justify-between rounded-lg border border-slate-200 bg-white p-3 sm:h-40 sm:p-4">
                    <div className="flex items-center justify-between">
                      <div className="h-2 w-20 rounded-full bg-slate-300" />
                      <div className="h-7 w-7 rounded-full border border-slate-200 bg-slate-50" />
                    </div>
                    <div>
                      <div className="mb-2 grid grid-cols-3 gap-1.5 sm:mb-3 sm:gap-2">
                        <div className="h-7 rounded-md bg-slate-200 sm:h-10" />
                        <div className="h-7 rounded-md bg-slate-200 sm:h-10" />
                        <div className="h-7 rounded-md bg-slate-200 sm:h-10" />
                      </div>
                      <p className="text-xs font-medium text-slate-500">
                        Myndir af nýlegum verkum
                      </p>
                    </div>
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
