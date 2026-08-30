const highlights = ["5–7 kaflar", "Tvær yfirferðir", "7–10 virkir dagar"];

const mockSections = [
  { label: "Þjónusta", icon: "01" },
  { label: "Verkefni", icon: "02" },
  { label: "Starfssvæði", icon: "03" },
  { label: "Samband", icon: "04" },
];

export default function Hero() {
  return (
    <section className="bg-white pb-16 pt-14 sm:pb-24 sm:pt-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
          <div className="flex-1 text-center lg:text-left">
            <p className="reveal reveal-1 text-sm font-bold uppercase tracking-[0.16em] text-blue-700">
              Ein skýr lausn · fast verð
            </p>
            <h1 className="reveal reveal-1 mt-3 text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-[3.25rem]">
              Einföld vefsíða fyrir iðnaðar- og þjónustufyrirtæki
            </h1>
            <p className="reveal reveal-2 mx-auto mt-6 max-w-xl text-lg leading-relaxed text-slate-600 sm:text-xl lg:mx-0">
              Við setjum þjónustuna, starfssvæðið, myndir af verkum og
              sambandsupplýsingar á eina skýra síðu sem auðveldar
              viðskiptavinum að taka næsta skref.
            </p>
            <div className="reveal reveal-3 mt-7 flex flex-col items-center gap-1 lg:items-start">
              <p className="text-3xl font-bold tracking-tight text-slate-900">
                129.000 kr.{" "}
                <span className="text-base font-medium text-slate-500">
                  án vsk.
                </span>
              </p>
              <p className="text-sm text-slate-600">
                Hýsing og umsjón: 5.900 kr./mán. án vsk.
              </p>
            </div>
            <div className="reveal reveal-3 mt-8 flex justify-center lg:justify-start">
              <a
                href="#samband"
                className="inline-flex min-h-11 items-center justify-center rounded-xl bg-blue-700 px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-blue-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2"
              >
                Fá fast verð
              </a>
            </div>
            <ul className="reveal reveal-4 mt-8 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-slate-600 lg:justify-start">
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
            <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-xl">
              <div className="flex items-center gap-2 border-b border-slate-100 bg-slate-50 px-4 py-3">
                <div className="flex gap-1.5" aria-hidden="true">
                  <div className="h-3 w-3 rounded-full bg-slate-200" />
                  <div className="h-3 w-3 rounded-full bg-slate-200" />
                  <div className="h-3 w-3 rounded-full bg-slate-200" />
                </div>
                <div className="mx-2 flex h-6 flex-1 items-center rounded-md bg-slate-100 px-3">
                  <span className="text-xs text-slate-600">www.pipari.is</span>
                </div>
              </div>

              <div className="flex items-center justify-between bg-blue-700 px-5 py-4" aria-hidden="true">
                <div className="h-4 w-20 rounded bg-white/40" />
                <div className="flex gap-3">
                  <div className="h-3 w-10 rounded bg-white/30" />
                  <div className="h-3 w-10 rounded bg-white/30" />
                  <div className="h-3 w-10 rounded bg-white/30" />
                </div>
              </div>

              <div className="bg-blue-50 px-5 py-6">
                <p className="text-sm font-semibold text-slate-900">
                  Pípulagnir og viðgerðir
                </p>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                  Þjónusta á höfuðborgarsvæðinu og einföld leið til að hringja
                  eða biðja um tilboð.
                </p>
                <div className="mt-4 h-9 w-32 rounded-lg bg-blue-700" aria-hidden="true" />
              </div>

              <div className="grid grid-cols-2 gap-3 px-5 py-4">
                {mockSections.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-2 rounded-xl border border-slate-100 bg-slate-50 p-3"
                  >
                    <span className="text-xs font-bold leading-none text-blue-700">
                      {item.icon}
                    </span>
                    <span className="text-xs font-medium text-slate-700">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="px-5 pb-5">
                <div className="flex h-16 items-center justify-center gap-2 rounded-xl bg-slate-100">
                  <svg
                    className="h-5 w-5 text-blue-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 21s6-4.35 6-10a6 6 0 10-12 0c0 5.65 6 10 6 10z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 13a2 2 0 100-4 2 2 0 000 4z"
                    />
                  </svg>
                  <span className="text-xs text-slate-600">Þjónustusvæði</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
