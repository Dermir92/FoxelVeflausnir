import SectionHeading from "./SectionHeading";
import FAQItem from "./FAQItem";

const faqs = [
  {
    question: "Af hverju ætti fyrirtækið mitt að vera með vefsíðu?",
    answer:
      "Eigin vefsíða gefur fyrirtækinu traustan stað á netinu sem þú stjórnar sjálfur. Þar sér fólk hvaða þjónustu þú býður, hvar þú starfar og hvernig það nær í þig, hvort sem það finnur þig á Google, samfélagsmiðlum eða með meðmælum. Skýr vefsíða styrkir traust og gerir næsta skref einfalt.",
  },
  {
    question: "Er verðið raunverulega fast?",
    answer:
      "Já. Grunnpakkinn kostar 129.000 kr. án vsk. ef verkefnið helst innan umfangsins sem lýst er hér á síðunni. Ef þú vilt bæta einhverju við samþykkjum við verðið áður en sú vinna hefst.",
  },
  {
    question: "Þarf ég að vera með tilbúinn texta?",
    answer:
      "Nei. Þú segir okkur frá þjónustunni, starfssvæðinu og því sem viðskiptavinir þurfa að vita. Við hjálpum þér að setja upp íslenskan texta svo það eigi vel við.",
  },
  {
    question: "Þarf ég að eiga lén?",
    answer:
      "Nei. Við hjálpum þér að velja lén og sjáum um tæknilega uppsetningu þess. Lénið er skráð á fyrirtækið þitt og greitt sérstaklega.",
  },
  {
    question: "Hvað gerist ef ég þarf stærri breytingar síðar?",
    answer:
      "Minniháttar textabreytingar falla undir mánaðarlega umsjón. Nýjar síður, bókunarkerfi, netverslanir og flóknari tengingar eru metnar og verðlagðar sérstaklega.",
  },
];

export default function FAQSection() {
  return (
    <section id="spurningar" className="scroll-mt-16 bg-slate-50 py-16 sm:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Spurt og svarað"
          title="Algengar spurningar áður en við byrjum"
          subtitle="Ertu ekki viss um hvað hentar? Sendu okkur línu og við leggjum til næstu skref."
        />
        <div className="mt-10 space-y-3">
          {faqs.map((faq) => (
            <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}
