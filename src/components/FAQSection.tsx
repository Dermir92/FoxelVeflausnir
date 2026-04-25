import SectionHeading from "./SectionHeading";
import FAQItem from "./FAQItem";

const faqs = [
  {
    question: "Þarf ég að eiga lén?",
    answer:
      "Nei. Við getum hjálpað þér að finna og setja upp lén. Við leiðum þig í gegnum allt ferlið.",
  },
  {
    question: "Þarf ég að vera með tilbúna texta?",
    answer:
      "Nei. Við getum hjálpað þér að móta texta út frá stuttum upplýsingum frá þér. Þú þarft bara að segja okkur hvað þú gerir og við sjáum um restina.",
  },
  {
    question: "Get ég sent myndir úr símanum?",
    answer:
      "Já. Við getum hjálpað að velja myndir sem passa best. Ef myndir eru of fáar eða ekki af nógu góðum gæðum ræðum við þig um hvað við getum gert.",
  },
  {
    question: "Get ég breytt síðunni seinna?",
    answer:
      "Já. Það fer eftir uppsetningu. Við getum annað hvort sett síðuna þannig upp að þú getir sent okkur breytingar eða skoðað einfaldari leiðir fyrir þig til að uppfæra efni.",
  },
  {
    question: "Getið þið lagað gamla síðu?",
    answer:
      "Já. Við getum skoðað hvort betra sé að laga núverandi síðu eða setja upp nýja. Stundum er einfaldara og ódýrara að byrja upp á nýtt.",
  },
  {
    question: "Bjóðið þið upp á spjallvélmenni?",
    answer:
      "Já, í ákveðnum tilvikum. Fyrst skoðum við hvað fyrirtækið þarf. Stundum dugar einfalt sambandseyðublað eða spjallbox. Fyrir fyrirtæki með margar endurteknar spurningar getur spjallvélmenni verið góður aukavalkostur.",
  },
];

export default function FAQSection() {
  return (
    <section id="spurningar" className="bg-slate-50 py-20 sm:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Spurt og svarað"
          title="Algengar spurningar"
          subtitle="Finnur þú ekki svarið sem þú leitar að? Hafðu samband og við svörum."
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
