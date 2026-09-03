import SectionHeading from "./SectionHeading";
import ContactForm from "./ContactForm";
import { CONTACT_EMAIL } from "@/lib/site";

const points = [
  {
    badge: "kr.",
    title: "Skýrt verð",
    text: "Grunnpakkinn kostar 129.000 kr. án vsk. og umfangið liggur fyrir áður en vinnan hefst.",
  },
  {
    badge: "1-2",
    title: "Fljótt svar",
    text: "Við svörum yfirleitt innan eins til tveggja virkra daga og leggjum til næstu skref.",
  },
];

export default function ContactSection() {
  return (
    <section id="samband" className="scroll-mt-20 bg-paper py-16 sm:py-20">
      <div className="mx-auto w-full max-w-[70rem] px-5 sm:px-6">
        <div className="grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          <div>
            <SectionHeading
              label="Hafðu samband"
              title="Fáðu verðtilboð í heimasíðuna"
              subtitle="Sendu nokkrar línur um fyrirtækið og verkefnið. Við svörum með næstu skrefum."
              centered={false}
            />

            <div className="mt-8 space-y-5">
              {points.map((point) => (
                <div key={point.title} className="flex gap-3.5">
                  <span
                    className="grid h-10 w-10 flex-shrink-0 place-items-center bg-brand-cyan text-xs font-black text-ink"
                    aria-hidden="true"
                  >
                    {point.badge}
                  </span>
                  <div>
                    <h3 className="text-sm font-extrabold text-ink">
                      {point.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-copy">
                      {point.text}
                    </p>
                  </div>
                </div>
              ))}

              <div className="flex gap-3.5">
                <span
                  className="grid h-10 w-10 flex-shrink-0 place-items-center bg-brand-cyan text-base font-black text-ink"
                  aria-hidden="true"
                >
                  @
                </span>
                <div>
                  <h3 className="text-sm font-extrabold text-ink">Netfang</h3>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="mt-1 inline-flex min-h-11 items-center rounded-sm text-sm font-semibold text-brand-blue underline-offset-4 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border-2 border-line bg-paper p-6 sm:p-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
