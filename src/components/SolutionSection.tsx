import SectionHeading from "./SectionHeading";

const outcomes = [
  {
    title: "Fyrsta sýn sem vinnur með þér",
    text: "Síðan útskýrir strax hver þú ert, hvað þú gerir og hvers vegna fólk ætti að treysta þér.",
  },
  {
    title: "Upplýsingar sem fólk finnur fljótt",
    text: "Þjónusta, þjónustusvæði, myndir, sími og fyrirspurnarform eru sett fram án óþarfa flækju.",
  },
  {
    title: "Texti sem hljómar eins og fyrirtækið þitt",
    text: "Við hjálpum þér að móta texta sem er skýr, eðlilegur og laus við tæknimál.",
  },
  {
    title: "Síða sem virkar vel í síma",
    text: "Við hönnum fyrir skjáina sem viðskiptavinir nota mest, frá síma upp í tölvu.",
  },
];

const included = [
  "Forsíða með skýrri kynningu",
  "Þjónustukaflar eða þjónustusíður",
  "Kynning á fyrirtækinu",
  "Myndir, verkefni eða dæmi um vinnu",
  "Tengiliðaupplýsingar og fyrirspurnarform",
  "Grunnstillingar fyrir leitarvélar",
];

export default function SolutionSection() {
  return (
    <section id="thjonustan" className="bg-white py-20 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Þjónustan"
          title="Við byggjum síðuna í kringum það sem viðskiptavinurinn þarf að vita"
          subtitle="Markmiðið er ekki bara falleg síða. Markmiðið er að fólk skilji þjónustuna þína, treysti fyrirtækinu og viti nákvæmlega hvernig það á að hafa samband."
        />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-8 items-start">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {outcomes.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-slate-100 bg-slate-50 p-6"
              >
                <h3 className="text-base font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-base font-semibold text-slate-900">
              Algengt innihald
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Við veljum saman það sem á við, en oft inniheldur síðan þetta:
            </p>
            <ul className="mt-5 space-y-3">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <svg
                    className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-sm text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
