import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Persónuverndarstefna | Foxel Veflausnir",
  description:
    "Persónuverndarstefna Foxel Veflausna vegna fyrirspurna, samskipta og notkunar á vefnum.",
};

const sections = [
  {
    title: "1. Ábyrgðaraðili",
    content: [
      "Foxel Veflausnir er ábyrgðaraðili að vinnslu persónuupplýsinga sem fer fram í tengslum við vefinn og fyrirspurnir sem berast í gegnum hann.",
      "Upplýsingar um kennitölu, heimilisfang, netfang og síma verða settar inn þegar þær liggja fyrir.",
    ],
  },
  {
    title: "2. Hvaða upplýsingum söfnum við?",
    content: [
      "Þegar þú sendir fyrirspurn í gegnum vefinn getum við unnið með nafn, netfang, símanúmer, nafn fyrirtækis, lýsingu á starfsemi, upplýsingar um núverandi vefsíðu, þarfir, tímalínu og þau skilaboð sem þú sendir okkur.",
      "Við söfnum ekki viðkvæmum persónuupplýsingum og biðjum þig um að senda ekki slíkar upplýsingar í gegnum formið.",
    ],
  },
  {
    title: "3. Tilgangur vinnslu",
    content: [
      "Við notum upplýsingarnar til að svara fyrirspurnum, meta þarfir viðskiptavina, útbúa tillögur eða tilboð, undirbúa þjónustu og halda utan um samskipti vegna verkefna.",
      "Ef viðskiptasamband kemst á getur vinnslan einnig verið nauðsynleg vegna samnings, reikningagerðar, bókhalds og eftirfylgni.",
    ],
  },
  {
    title: "4. Lagagrundvöllur",
    content: [
      "Vinnsla vegna fyrirspurna byggist almennt á beiðni þinni um samskipti og eftir atvikum lögmætum hagsmunum okkar af því að svara fyrirspurnum og halda utan um samskipti.",
      "Ef verkefni hefst getur vinnsla verið nauðsynleg til að gera eða efna samning. Upplýsingar sem tengjast bókhaldi kunna að vera varðveittar á grundvelli lagaskyldu.",
    ],
  },
  {
    title: "5. Miðlun til þriðju aðila",
    content: [
      "Við seljum ekki persónuupplýsingar og miðlum þeim ekki til óviðkomandi aðila.",
      "Við kunnum að nota þjónustuaðila fyrir hýsingu, tölvupóst, eyðublöð, greiningar, bókhald eða verkefnastjórnun. Slíkir aðilar vinna þá upplýsingar fyrir okkar hönd eða sem sjálfstæðir ábyrgðaraðilar eftir eðli þjónustunnar.",
      `Fyrirspurnir sem sendar eru í gegnum formið á vefnum fara um þjónustuna Formspree (Formspree, Inc., Bandaríkjunum), sem afhendir okkur þær í tölvupósti. Um er að ræða nafn, netfang, símanúmer og efni fyrirspurnarinnar. Formspree geymir afrit af fyrirspurnum í eigin kerfi. Þú getur óskað eftir því að afritinu verði eytt með því að senda okkur póst á ${CONTACT_EMAIL}.`,
    ],
  },
  {
    title: "6. Varðveisla",
    content: [
      "Fyrirspurnir eru varðveittar eins lengi og nauðsynlegt er til að svara þeim og fylgja þeim eftir.",
      "Ef samningur eða viðskipti verða til geta upplýsingar verið varðveittar lengur, meðal annars vegna samningssambands, þjónustu, bókhalds og mögulegra réttarkrafna.",
    ],
  },
  {
    title: "7. Vefkökur og mælingar",
    content: [
      "Vefurinn notar ekki auglýsingakökur eða greiningarkökur eins og er.",
      "Ef slíkum tólum verður bætt við síðar verður notendum veitt skýr fræðsla og, þar sem við á, beðið um samþykki áður en kökur eru settar í tæki þeirra.",
    ],
  },
  {
    title: "8. Réttindi þín",
    content: [
      "Þú getur óskað eftir aðgangi að persónuupplýsingum þínum, leiðréttingu, eyðingu, takmörkun vinnslu, flutningi gagna eða andmælt vinnslu eftir því sem við á samkvæmt persónuverndarlögum.",
      "Þú getur einnig lagt fram kvörtun hjá Persónuvernd ef þú telur að vinnsla persónuupplýsinga fari ekki fram í samræmi við lög.",
    ],
  },
  {
    title: "9. Öryggi",
    content: [
      "Við leggjum áherslu á að meðhöndla persónuupplýsingar með öruggum og ábyrgum hætti og takmarka aðgang að þeim við þá sem þurfa á þeim að halda vegna þjónustunnar.",
    ],
  },
  {
    title: "10. Breytingar á stefnunni",
    content: [
      "Persónuverndarstefnan getur tekið breytingum, til dæmis ef ný þjónusta, ný vinnsla eða nýir þjónustuaðilar bætast við. Nýjasta útgáfa verður birt á þessari síðu.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <main className="bg-white">
      <section className="border-b border-slate-100 bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="text-sm font-medium text-blue-600 hover:text-blue-700"
          >
            Til baka á forsíðu
          </Link>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Persónuverndarstefna
          </h1>
          <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
            Hér má sjá hvernig Foxel Veflausnir vinnur með persónuupplýsingar í
            tengslum við fyrirspurnir, samskipti og notkun á vefnum.
          </p>
          <p className="mt-4 text-sm text-slate-500">
            Síðast uppfært: 13. maí 2026
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-5 text-sm leading-relaxed text-amber-900">
            Þessi texti er hagnýt fyrstu útgáfa og ætti að yfirfara með
            lögfræðingi áður en vefurinn fer í fulla notkun, sérstaklega þegar
            endanlegar fyrirtækjaupplýsingar, formvinnsla og þjónustuaðilar liggja
            fyrir.
          </div>

          <div className="mt-10 space-y-10">
            {sections.map((section) => (
              <article key={section.title}>
                <h2 className="text-xl font-semibold text-slate-900">
                  {section.title}
                </h2>
                <div className="mt-3 space-y-3">
                  {section.content.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-base leading-relaxed text-slate-600"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
