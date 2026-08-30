import SectionHeading from "./SectionHeading";
import FAQItem from "./FAQItem";

const faqs = [
  {
    question: "Af hverju ætti fyrirtækið mitt að vera með vefsíðu?",
    answer:
      "Eigin vefsíða gefur fyrirtækinu fastan stað sem þú stjórnar sjálfur. Þar getur fólk séð hvað þú gerir, hvar þú starfar og hvernig það nær í þig — hvort sem það fann þig á Google, samfélagsmiðlum eða með meðmælum. Skýr vefsíða styrkir traust og auðveldar viðskiptavinum að taka næsta skref.",
  },
  {
    question: "Er verðið raunverulega fast?",
    answer:
      "Já. Grunnpakkinn kostar 129.000 kr. án vsk. svo lengi sem verkefnið er innan þess umfangs sem lýst er á síðunni. Við samþykkjum sérstaklega verð á viðbótum áður en vinna við þær hefst.",
  },
  {
    question: "Þarf ég að vera með tilbúna texta?",
    answer:
      "Nei. Þú segir okkur hvað þú gerir, hvar þú starfar og hvað viðskiptavinir þurfa að vita. Við hjálpum þér að skrifa og fínpússa íslenska textann.",
  },
  {
    question: "Þarf ég að eiga lén?",
    answer:
      "Nei. Við hjálpum þér að velja lén og sjáum um tæknilega uppsetningu þess. Lénið er skráð á þitt fyrirtæki og greitt sérstaklega.",
  },
  {
    question: "Hvað gerist ef ég þarf stærri breytingar síðar?",
    answer:
      "Minniháttar textabreytingar falla undir mánaðarlega umsjón. Nýjar síður, bókunarkerfi, netverslanir og flóknari samþættingar eru metnar og verðlagðar sérstaklega.",
  },
];

export default function FAQSection() {
  return (
    <section id="spurningar" className="scroll-mt-16 bg-slate-50 py-16 sm:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Spurt og svarað"
          title="Algengar spurningar áður en við byrjum"
          subtitle="Ertu ekki viss um hvað hentar? Sendu okkur línu og við svörum og leggjum til næstu skref."
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
