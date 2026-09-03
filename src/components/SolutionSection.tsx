import SectionHeading from "./SectionHeading";

/**
 * Litirnir efst á spjöldunum ganga í hring: appelsínugult, cyan, blátt.
 * Þeir eru bundnir við röðina en ekki innihaldið, þannig að ef kafla er bætt
 * við heldur mynstrið áfram af sjálfu sér.
 */
const topBorders = [
  "border-t-brand-orange",
  "border-t-brand-cyan",
  "border-t-brand-blue",
];

const includedGroups = [
  {
    number: "01",
    title: "Skýr kynning á þjónustunni",
    text: "Allt að fimm þjónustuflokkar, starfssvæði og skýr leið til að hafa samband eða óska eftir tilboði.",
  },
  {
    number: "02",
    title: "Myndir og umsagnir sem auka traust",
    text: "Myndasafn með allt að átta myndum frá fyrirtækinu og rými fyrir umsagnir viðskiptavina.",
  },
  {
    number: "03",
    title: "Aðstoð við íslenskan texta",
    text: "Þú sendir helstu upplýsingarnar. Við mótum textann svo hann verði skýr, eðlilegur og tilbúinn á vefinn.",
  },
  {
    number: "04",
    title: "Sýnileiki á Google",
    text: "Grunnstillingar fyrir staðbundna leit, síðukort og skipulögð gögn um fyrirtækið.",
  },
  {
    number: "05",
    title: "Ekkert tæknivesen",
    text: "Við sjáum um lén, DNS, fyrirspurnarform og persónuverndarsíðu. Þú þarft ekki að snerta tæknihliðina.",
  },
];

export default function SolutionSection() {
  return (
    <section
      id="innifalid"
      className="scroll-mt-20 border-b-2 border-line bg-soft py-16 sm:py-20"
    >
      <div className="mx-auto w-full max-w-[70rem] px-5 sm:px-6">
        <SectionHeading
          label="Innifalið"
          title="Allt sem lítið fyrirtæki þarf á einum stað"
          subtitle="Ein vönduð síða sem sýnir þjónustuna, starfssvæðið og hvernig fólk nær sambandi."
        />

        <div className="mt-10 grid grid-cols-1 gap-4.5 sm:grid-cols-2 lg:grid-cols-3">
          {includedGroups.map((item, index) => (
            <article
              key={item.number}
              className={`rounded-2xl border-2 border-t-[7px] border-line bg-paper p-6 ${
                topBorders[index % topBorders.length]
              }`}
            >
              <p className="text-sm font-extrabold text-brand-orange">
                {item.number}
              </p>
              <h3 className="mt-6 text-lg font-extrabold tracking-tight text-ink">
                {item.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-copy">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
