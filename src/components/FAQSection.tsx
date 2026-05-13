import SectionHeading from "./SectionHeading";
import FAQItem from "./FAQItem";

const faqs = [
  {
    question: "Þarf ég að eiga lén?",
    answer:
      "Nei. Við getum hjálpað þér að finna lén og setja það rétt upp.",
  },
  {
    question: "Þarf ég að vera með tilbúna texta?",
    answer:
      "Nei. Við getum mótað texta út frá stuttum upplýsingum frá þér. Þú segir okkur hvað þú gerir og við hjálpum til við að koma því skýrt frá.",
  },
  {
    question: "Get ég sent myndir úr símanum?",
    answer:
      "Já. Við getum hjálpað þér að velja þær myndir sem henta best. Ef myndirnar eru of fáar eða ekki nógu skýrar finnum við lausn saman.",
  },
  {
    question: "Get ég breytt síðunni seinna?",
    answer:
      "Já. Við getum annað hvort séð um breytingar fyrir þig eða skoðað einfalda leið fyrir þig til að uppfæra efni sjálf/ur.",
  },
  {
    question: "Getið þið lagað gamla síðu?",
    answer:
      "Já. Við skoðum hvort borgi sig að laga núverandi síðu eða byggja nýja. Stundum er einfaldara og hagkvæmara að byrja upp á nýtt.",
  },
  {
    question: "Bjóðið þið upp á spjallvélmenni?",
    answer:
      "Já, í ákveðnum tilvikum. Fyrst skoðum við hvað fyrirtækið þarf. Stundum dugar einfalt fyrirspurnarform eða spjallbox, en fyrir fyrirtæki sem fá margar endurteknar spurningar getur spjallvélmenni verið góður aukavalkostur.",
  },
];

export default function FAQSection() {
  return (
    <section id="spurningar" className="bg-slate-50 py-20 sm:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Spurt og svarað"
          title="Algengar spurningar"
          subtitle="Finnur þú ekki svarið sem þú leitar að? Sendu okkur línu og við svörum."
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
