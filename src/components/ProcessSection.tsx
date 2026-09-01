import SectionHeading from "./SectionHeading";
import ProcessStep from "./ProcessStep";

const steps = [
  {
    title: "Segðu okkur frá rekstrinum",
    description:
      "Sendu stuttar upplýsingar um þjónustuna, starfssvæðið og markmiðið með vefsíðunni.",
  },
  {
    title: "Við tökum saman efnið og setjum síðuna upp",
    description:
      "Við hjálpum með texta og myndaval, hönnum síðuna og sendum þér drög. Tvær umferðir af breytingum eru innifaldar.",
  },
  {
    title: "Við komum síðunni í loftið og sjáum um tæknina",
    description:
      "Vefurinn fer yfirleitt í loftið innan 7-10 virkra daga eftir að efnið berst. Eftir birtingu sjáum við um hýsingu, viðhald og grunnvöktun.",
  },
];

export default function ProcessSection() {
  return (
    <section id="ferlid" className="scroll-mt-16 bg-white py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <SectionHeading
            label="Ferlið"
            title="Þrjú skref að birtri vefsíðu"
            subtitle="Frá fyrstu línu til vefsíðu í loftinu."
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
            className="inline-flex min-h-11 items-center justify-center rounded-xl bg-blue-700 px-7 py-3.5 font-semibold text-white transition-colors hover:bg-blue-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2"
          >
            Fá verðtilboð
          </a>
        </div>
      </div>
    </section>
  );
}
