import SectionHeading from "./SectionHeading";
import { CONTACT_HREF } from "@/lib/navigation";

const packageFeatures = [
  "Ein vefsíða með 5-7 köflum",
  "Allt að fimm þjónustuflokkar",
  "Starfssvæði og smellanlegt símanúmer",
  "Myndasafn með allt að átta myndum",
  "Umsagnir frá viðskiptavinum",
  "Sambandsform og tilboðsbeiðnir",
  "Aðstoð við íslenskan texta",
  "Hönnun með farsíma í forgangi",
  "Grunnstillingar fyrir Google og síðukort",
  "Uppsetning léns og DNS",
  "Persónuverndarsíða vegna formsins",
  "Tvær umferðir af breytingum",
  "Birting innan 7-10 virkra daga",
];

const managementFeatures = [
  "Hýsing vefsins",
  "Tæknilegt viðhald",
  "Öryggisuppfærslur",
  "Grunnvöktun á aðgengi og virkni formsins",
  "Minniháttar textabreytingar",
];

const addOns = [
  { title: "Aukasíða fyrir þjónustu", price: "25.000 kr." },
  { title: "Ensk útgáfa", price: "39.000 kr." },
  { title: "Uppsetning Google Business Profile", price: "29.000 kr." },
  { title: "Viðbótaryfirferð", price: "15.000 kr." },
];

export default function PackagesSection() {
  return (
    <section
      id="verd"
      className="scroll-mt-20 border-b-2 border-line bg-soft py-16 sm:py-20"
    >
      <div className="mx-auto w-full max-w-[70rem] px-5 sm:px-6">
        <SectionHeading
          label="Pakkinn"
          title="Einföld vefsíða á föstu verði"
          subtitle="Skýrt umfang, enginn falinn stofnkostnaður og tæknin í okkar höndum."
        />

        <div className="mt-10 grid overflow-hidden rounded-2xl border-2 border-line lg:grid-cols-[1.5fr_0.72fr]">
          <div className="bg-paper p-6 sm:p-8 lg:p-9">
            <div className="flex flex-col gap-5 border-b-2 border-line pb-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-brand-blue sm:text-[13px]">
                  Einföld fyrirtækjasíða
                </p>
                <h3 className="mt-2 text-2xl font-extrabold tracking-tight text-ink">
                  Allt sem þarf til að komast í loftið
                </h3>
              </div>
              <p className="whitespace-nowrap text-3xl font-extrabold tracking-[-0.04em] text-ink sm:text-4xl">
                129.000 kr.
                <span className="ml-2 text-sm font-semibold text-copy">
                  án vsk.
                </span>
              </p>
            </div>

            <ul className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {packageFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5">
                  <span
                    className="mt-0.5 font-black text-brand-blue"
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  <span className="text-sm leading-relaxed text-copy">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <aside className="bg-ink p-6 text-white sm:p-8 lg:p-9">
            <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-brand-cyan sm:text-[13px]">
              Eftir birtingu
            </p>
            <h3 className="mt-2 text-2xl font-extrabold tracking-tight">
              Hýsing og umsjón
            </h3>
            <p className="mt-5 text-3xl font-extrabold tracking-[-0.04em]">
              5.900 kr.
            </p>
            <p className="mt-1 text-sm text-slate-300">á mánuði án vsk.</p>

            <ul className="mt-6 space-y-3">
              {managementFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5">
                  <span
                    className="mt-0.5 font-black text-brand-cyan"
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  <span className="text-sm leading-relaxed text-slate-200">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <a
              href={CONTACT_HREF}
              className="mt-8 inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-brand-orange px-6 font-bold text-white shadow-[4px_4px_0_#000000] transition-transform hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#000000] focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
            >
              Fá verðtilboð
            </a>
          </aside>
        </div>

        <div className="mt-10">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h3 className="text-xl font-extrabold tracking-tight text-ink">
                Viðbætur
              </h3>
              <p className="mt-1 text-sm text-copy">
                Fyrir afmarkaðar viðbætur við grunnpakkann.
              </p>
            </div>
            <p className="text-sm text-copy">Öll verð eru án vsk.</p>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {addOns.map((addOn) => (
              <div
                key={addOn.title}
                className="flex flex-col justify-between gap-3 rounded-xl border-2 border-line bg-paper px-5 py-4"
              >
                <p className="text-sm font-semibold text-ink">{addOn.title}</p>
                <p className="text-sm font-extrabold text-brand-orange">
                  {addOn.price}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-4 rounded-xl border-2 border-line bg-paper px-5 py-4 text-sm leading-relaxed text-copy">
            Stærri breytingar, nýjar síður, bókunarkerfi, netverslanir og
            flóknari samþættingar eru metnar og verðlagðar sérstaklega.
          </p>
        </div>
      </div>
    </section>
  );
}
