import SectionHeading from "./SectionHeading";
import ProcessStep from "./ProcessStep";

const steps = [
  {
    title: "Segðu okkur frá fyrirtækinu",
    description:
      "Sendu stuttar upplýsingar um þjónustuna, starfssvæðið og það sem þú vilt að vefsíðan geri fyrir þig.",
  },
  {
    title: "Við söfnum efninu og smíðum síðuna",
    description:
      "Við hjálpum með texta og myndaval, hönnum síðuna og sendum þér drög. Tvær umferðir af breytingum eru innifaldar.",
  },
  {
    title: "Við birtum og sjáum um tæknina",
    description:
      "Síðan fer yfirleitt í loftið innan 7–10 virkra daga eftir að efnið berst. Eftir það sjáum við um hýsingu, viðhald og grunnvöktun.",
  },
];

export default function ProcessSection() {
  return (
    <section id="ferlid" className="scroll-mt-16 bg-white py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <SectionHeading
            label="Ferlið"
            title="Þrjú skref að tilbúinni vefsíðu"
            subtitle="Frá fyrstu skilaboðum til tilbúinnar vefsíðu."
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
            Fá fast verð
          </a>
        </div>
      </div>
    </section>
  );
}
