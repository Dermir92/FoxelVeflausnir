import SectionHeading from "./SectionHeading";
import ProcessStep from "./ProcessStep";

const steps = [
  {
    title: "Sendu fyrirspurn",
    description:
      "Fylltu út fyrirspurnarformið eða sendu okkur póst. Við förum yfir hvað þig vantar og útskýrum hvað hentar best.",
  },
  {
    title: "Við komum með tillögu",
    description:
      "Við sendum einfalda tillögu með umfangi, næstu skrefum og því sem við mælum með.",
  },
  {
    title: "Við söfnum efninu",
    description:
      "Við hjálpum þér að taka saman upplýsingar, texta og myndir. Þú þarft ekki að vera með allt tilbúið fyrirfram.",
  },
  {
    title: "Við setjum síðuna upp",
    description:
      "Við hönnum og setjum síðuna upp. Þú færð drög til yfirferðar og við fínpússum áður en hún fer í loftið.",
  },
  {
    title: "Síðan fer í loftið",
    description:
      "Þegar allt er tilbúið setjum við síðuna í loftið og tryggjum að helstu atriði virki eins og þau eiga að gera.",
  },
];

export default function ProcessSection() {
  return (
    <section id="ferlid" className="bg-white py-20 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <SectionHeading
            label="Ferlið"
            title="Ferlið í stuttu máli"
            subtitle="Frá fyrstu skilaboðum að tilbúinni vefsíðu."
            centered={false}
          />
          <div className="mt-10 space-y-0">
            {steps.map((step, index) => (
              <ProcessStep
                key={step.title}
                number={index + 1}
                title={step.title}
                description={step.description}
                isLast={index === steps.length - 1}
              />
            ))}
          </div>
          <a
            href="#samband"
            className="inline-block bg-blue-600 text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-blue-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
          >
            Hafa samband
          </a>
        </div>
      </div>
    </section>
  );
}
