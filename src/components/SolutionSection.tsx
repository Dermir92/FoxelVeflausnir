import SectionHeading from "./SectionHeading";

const includedGroups = [
  {
    number: "01",
    title: "Skýr kynning á þjónustunni",
    text: "Allt að fimm þjónustur, starfssvæði og skýr leið til að hringja eða biðja um tilboð.",
  },
  {
    number: "02",
    title: "Myndir og umsagnir sem byggja traust",
    text: "Myndasafn með allt að átta myndum og pláss fyrir umsagnir frá viðskiptavinum.",
  },
  {
    number: "03",
    title: "Aðstoð við íslenska textann",
    text: "Þú sendir okkur helstu upplýsingarnar. Við mótum og fínpússum textann svo hann verði skýr og eðlilegur.",
  },
  {
    number: "04",
    title: "Hönnun fyrir alla skjái",
    text: "Síðan er fyrst hönnuð fyrir farsíma og virkar vel í símum, spjaldtölvum og tölvum.",
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
          title="Það sem lítið þjónustufyrirtæki þarf á einum stað"
          subtitle="Ein vönduð síða sem sýnir hvað þú gerir, hvar þú starfar og hvernig fólk nær í þig."
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
