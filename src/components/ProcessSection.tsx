import SectionHeading from "./SectionHeading";
import ProcessStep from "./ProcessStep";

const steps = [
  {
    title: "Sendu fyrirspurn",
    description:
      "Fylltu út eyðublaðið hér að neðan eða hafðu samband við okkur. Við hlustum á hvað þú þarft og útskýrum hvað við getum gert.",
  },
  {
    title: "Við komum með tillögu",
    description:
      "Við sendum þér einfalda tillögu þar sem við útskýrum hvað við mælum með og hvernig við ætlum að ganga að verkinu. Engir bindandi samningar fyrst.",
  },
  {
    title: "Við söfnum efninu",
    description:
      "Við hjálpum þér að safna saman upplýsingum, texta og myndum sem þarf fyrir síðuna. Þú þarft ekki að vera með allt tilbúið.",
  },
  {
    title: "Við setjum síðuna upp",
    description:
      "Við hönnum og setjum upp síðuna. Við sendum þér drög til að fara yfir og gera breytingar ef þörf krefur.",
  },
  {
    title: "Síðan fer í loftið",
    description:
      "Þegar allt lítur vel út fer síðan í loftið. Við tryggum að allt virki eins og skyldi.",
  },
];

export default function ProcessSection() {
  return (
    <section id="ferlid" className="bg-slate-50 py-20 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <SectionHeading
              label="Ferlið"
              title="Svona gengur það"
              subtitle="Létt og einfalt — við leiðum þig í gegnum öll skrefin."
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
          </div>

          {/* Visual summary */}
          <div className="lg:sticky lg:top-24 space-y-4">
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-7">
              <h3 className="font-semibold text-slate-900 text-base mb-4">
                Hvað fær þú?
              </h3>
              <ul className="space-y-3">
                {[
                  "Fagleg og snyrtileg vefsíða",
                  "Farsímavæn uppsetning",
                  "Skýr kynning á þjónustu þinni",
                  "Sambandseyðublað og tengiliðaupplýsingar",
                  "Grunnstillingar svo Google skilji síðuna",
                  "Hjálp í gegnum allt ferlið",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <svg
                      className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-sm text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-6 border-t border-slate-100">
                <a
                  href="#samband"
                  className="block text-center bg-blue-600 text-white font-semibold px-5 py-3 rounded-xl hover:bg-blue-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                >
                  Fá verðtilboð
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
