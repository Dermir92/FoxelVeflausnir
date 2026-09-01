import SectionHeading from "./SectionHeading";

const includedGroups = [
  {
    number: "01",
    title: "Skýr kynning á þjónustunni",
    text: "Allt að fimm þjónustuflokkar, starfssvæði og skýr leið til að hringja eða óska eftir tilboði.",
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
    title: "Hönnun fyrir alla skjái",
    text: "Síðan er hönnuð með farsíma í forgangi og virkar vel í símum, spjaldtölvum og tölvum.",
  },
  {
    number: "05",
    title: "Grunnur að sýnileika á Google",
    text: "Grunnstillingar fyrir staðbundna leit, síðukort og skipulögð gögn um fyrirtækið.",
  },
  {
    number: "06",
    title: "Birting án tæknivesens",
    text: "Við setjum upp lén, DNS, fyrirspurnarform og persónuverndarsíðu og komum vefnum í loftið.",
  },
];

export default function SolutionSection() {
  return (
    <section id="innifalid" className="scroll-mt-16 bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Innifalið"
          title="Það sem lítil þjónustufyrirtæki þurfa á einum stað"
          subtitle="Ein vönduð síða sem sýnir þjónustuna, starfssvæðið og hvernig fólk nær sambandi."
        />

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {includedGroups.map((item) => (
            <article
              key={item.number}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <p className="text-sm font-bold tracking-wide text-blue-700">
                {item.number}
              </p>
              <h3 className="mt-3 text-lg font-semibold text-slate-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
