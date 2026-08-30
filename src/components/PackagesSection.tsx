import SectionHeading from "./SectionHeading";

const packageFeatures = [
  "Ein vefsíða með 5 til 7 köflum",
  "Allt að fimm þjónustur",
  "Starfssvæði og símanúmer sem hægt er að smella á",
  "Myndasafn með allt að átta myndum frá þér",
  "Umsagnir viðskiptavina",
  "Sambands- og tilboðsform",
  "Aðstoð við að skrifa og fínpússa íslenskan texta",
  "Hönnun sem miðar fyrst við farsíma",
  "Grunnstillingar fyrir staðbundna leit, síðukort og skipulögð fyrirtækjagögn",
  "Uppsetning á léni og DNS",
  "Persónuverndarsíða fyrir fyrirspurnarformið",
  "Tvær yfirferðir með breytingum",
  "Birting innan 7 til 10 virkra daga eftir að efni berst",
];

const managementFeatures = [
  "Hýsing",
  "Tæknilegt viðhald",
  "Öryggisuppfærslur",
  "Grunnvöktun á aðgengi vefsins og virkni formsins",
  "Minniháttar textabreytingar",
];

const addOns = [
  { title: "Auka þjónustusíða", price: "25.000 kr." },
  { title: "Ensk útgáfa", price: "39.000 kr." },
  { title: "Uppsetning á Google Business Profile", price: "29.000 kr." },
  { title: "Auka yfirferð", price: "15.000 kr." },
];

function CheckIcon() {
  return (
    <svg
      className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-700"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
}

export default function PackagesSection() {
  return (
    <section id="verd" className="scroll-mt-16 bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Pakkinn"
          title="Einföld vefsíða á föstu verði"
          subtitle="Skýrt umfang fyrir lítil iðnaðar- og þjónustufyrirtæki. Eitt verð og enginn falinn stofnkostnaður."
        />

        <div className="mt-10 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-200/60">
          <div className="grid lg:grid-cols-[1.35fr_0.65fr]">
            <div className="p-6 sm:p-9 lg:p-10">
              <div className="flex flex-col gap-5 border-b border-slate-200 pb-7 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.14em] text-blue-700">
                    Einföld fyrirtækjasíða
                  </p>
                  <h3 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
                    Allt sem þarf til að byrja
                  </h3>
                </div>
                <div className="sm:text-right">
                  <p className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                    129.000 kr.
                  </p>
                  <p className="mt-1 text-sm font-medium text-slate-600">
                    án vsk.
                  </p>
                </div>
              </div>

              <ul className="mt-7 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                {packageFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <CheckIcon />
                    <span className="text-sm leading-relaxed text-slate-700">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <aside className="bg-slate-900 p-6 text-white sm:p-9 lg:p-10">
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-blue-300">
                Eftir birtingu
              </p>
              <h3 className="mt-3 text-2xl font-bold">
                Hýsing og umsjón
              </h3>
              <p className="mt-4 text-3xl font-bold tracking-tight">
                5.900 kr.
              </p>
              <p className="mt-1 text-sm text-slate-300">
                á mánuði án vsk.
              </p>

              <ul className="mt-7 space-y-3">
                {managementFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <svg
                      className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-sm leading-relaxed text-slate-200">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#samband"
                className="mt-8 inline-flex min-h-11 w-full items-center justify-center rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white transition-colors hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
              >
                Fá fast verð
              </a>
            </aside>
          </div>
        </div>

        <div className="mt-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h3 className="text-xl font-bold text-slate-900">Viðbætur</h3>
              <p className="mt-1 text-sm text-slate-600">
                Fyrir skýrt afmarkaðar viðbætur við grunnpakkann.
              </p>
            </div>
            <p className="text-sm text-slate-600">Öll verð eru án vsk.</p>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {addOns.map((addOn) => (
              <div
                key={addOn.title}
                className="flex items-center justify-between gap-4 rounded-xl border border-slate-200 bg-white px-5 py-4"
              >
                <p className="text-sm font-medium text-slate-800">
                  {addOn.title}
                </p>
                <p className="whitespace-nowrap text-sm font-bold text-slate-900">
                  {addOn.price}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-4 rounded-xl border border-slate-200 bg-white px-5 py-4 text-sm leading-relaxed text-slate-700">
            Stærri breytingar, nýjar síður, bókunarkerfi, netverslanir og
            flóknari samþættingar eru metnar og verðlagðar sérstaklega.
          </p>
        </div>
      </div>
    </section>
  );
}
