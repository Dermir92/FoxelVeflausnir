import SectionHeading from "./SectionHeading";
import ProcessStep from "./ProcessStep";
import { CONTACT_HREF } from "@/lib/navigation";

const steps = [
  {
    title: "Segðu okkur frá rekstrinum",
    description:
      "Sendu stuttar upplýsingar um þjónustuna, starfssvæðið og markmiðið með nýju síðunni.",
  },
  {
    title: "Við hönnum og setjum upp",
    description:
      "Við hjálpum með texta og myndaval, hönnum síðuna og sendum þér drög. Tvær umferðir af breytingum eru innifaldar.",
  },
  {
    title: "Heimasíðan fer í loftið",
    description:
      "Vefurinn fer yfirleitt í loftið innan 7-10 virkra daga eftir að efnið berst. Eftir birtingu sjáum við um hýsingu, viðhald og grunnvöktun.",
  },
];

export default function ProcessSection() {
  return (
    <section
      id="ferlid"
      className="scroll-mt-20 border-b-2 border-line bg-paper py-16 sm:py-20"
    >
      <div className="mx-auto w-full max-w-[70rem] px-5 sm:px-6">
        <SectionHeading
          label="Ferlið"
          title="Þrjú skref að birtri vefsíðu"
          subtitle="Frá fyrstu línu til heimasíðu í loftinu."
          centered={false}
        />

        <div className="mt-12 grid gap-10 sm:grid-cols-3 sm:gap-7">
          {steps.map((step, index) => (
            <ProcessStep
              key={step.title}
              number={index + 1}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>

        <a
          href={CONTACT_HREF}
          className="hs-shadow mt-12 inline-flex min-h-12 items-center justify-center rounded-lg bg-brand-orange px-7 font-bold text-white transition-transform hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_var(--color-ink)] focus:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2"
        >
          Fá verðtilboð
        </a>
      </div>
    </section>
  );
}
