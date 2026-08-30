/**
 * Þetta eru hagnýt drög að þjónustuskilmálum. Þau ætti að yfirfara með
 * lögfræðingi áður en þau eru notuð sem bindandi samningsskilmálar.
 *
 * Stóð sem gulur kassi efst á síðunni; tekið af vefnum því það sagði
 * viðskiptavinum að skilmálarnir væru ófullgerðir. Athugasemdin stendur hér
 * svo fyrirvarinn hverfi ekki úr repo-inu.
 */
import type { Metadata } from "next";
import Link from "next/link";
import { KENNITALA, LEGAL_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Skilmálar | Foxel Veflausnir",
  description:
    "Þjónustuskilmálar Foxel Veflausna vegna vefsíðugerðar, ráðgjafar og tengdrar þjónustu.",
  alternates: {
    canonical: "/skilmalar",
  },
};

const terms = [
  {
    title: "1. Um þjónustuna",
    content: [
      `${LEGAL_NAME}, kt. ${KENNITALA} (hér eftir „Foxel Veflausnir“), veitir þjónustu við hönnun, uppsetningu og þróun vefsíðna fyrir lítil fyrirtæki og sjálfstætt starfandi einstaklinga.`,
      "Þjónustan getur meðal annars falið í sér ráðgjöf, textavinnu, uppsetningu vefsíðu, aðlögun fyrir farsíma, grunnstillingar fyrir leitarvélar, tengiliðaform, einfaldar sérlausnir og aðstoð við birtingu síðu.",
    ],
  },
  {
    title: "2. Tilboð og samkomulag",
    content: [
      "Verkefni hefst ekki fyrr en aðilar hafa samþykkt umfang, verð, áætlaða tímalínu og helstu forsendur verkefnisins skriflega, til dæmis með tölvupósti.",
      "Tilboð byggist á þeim upplýsingum sem liggja fyrir þegar það er gert. Ef umfang breytist, til dæmis vegna aukasíðna, nýrrar virkni eða meiri texta- og hönnunarvinnu, getur verð og tímalína breyst.",
    ],
  },
  {
    title: "3. Efni frá viðskiptavini",
    content: [
      "Viðskiptavinur ber ábyrgð á að útvega rétt og lögmætt efni, þar á meðal texta, myndir, merki, vörumerki, verð, þjónustulýsingar og tengiliðaupplýsingar.",
      "Viðskiptavinur staðfestir að hann hafi rétt til að nota það efni sem hann afhendir Foxel Veflausnum. Þetta á sérstaklega við um ljósmyndir, merki, letur, texta og annað höfundarréttarvarið efni.",
      "Foxel Veflausnir getur aðstoðað við texta og uppbyggingu, en viðskiptavinur ber ábyrgð á að yfirfara og samþykkja endanlegt efni áður en vefur fer í loftið.",
    ],
  },
  {
    title: "4. Breytingar og yfirferð",
    content: [
      "Drög að vefsíðu eru send viðskiptavini til yfirferðar áður en hún fer í loftið.",
      "Innifalinn fjöldi yfirferða er ákveðinn í tilboði. Breytingar umfram samþykkt umfang geta verið rukkaðar sérstaklega.",
      "Ef viðskiptavinur bregst ekki við yfirferð eða beiðni um efni innan hæfilegs tíma getur afhending verkefnis tafist.",
    ],
  },
  {
    title: "5. Greiðslur",
    content: [
      "Greiðslufyrirkomulag er ákveðið í tilboði eða samningi. Oft er hluti greiddur við upphaf verkefnis og eftirstöðvar við afhendingu eða birtingu.",
      "Í tilboði kemur fram hvort verð er með eða án virðisaukaskatts.",
      "Aukavinna, rekstur, hýsing, viðhald, leyfi, áskriftir og þjónusta þriðju aðila geta verið rukkuð sérstaklega ef þau eru ekki sérstaklega innifalin.",
    ],
  },
  {
    title: "6. Afhending og birting",
    content: [
      "Vefsíða telst tilbúin til afhendingar þegar samþykkt umfang hefur verið unnið og viðskiptavinur hefur fengið tækifæri til yfirferðar.",
      "Birting vefsíðu getur verið háð þáttum sem eru utan beinnar stjórnar Foxel Veflausna, svo sem lénum, DNS-stillingum, hýsingu, aðgangi að kerfum eða samþykki þriðju aðila.",
    ],
  },
  {
    title: "7. Lén, hýsing og þjónusta þriðju aðila",
    content: [
      "Viðskiptavinur ber almennt ábyrgð á kostnaði vegna léns, hýsingar, tölvupóstþjónustu, greiðslugátta, bókunarkerfa, myndefnis, viðbóta, áskrifta og annarrar þjónustu þriðju aðila nema annað sé sérstaklega samið.",
      "Foxel Veflausnir getur aðstoðað við val og uppsetningu slíkrar þjónustu, en ábyrgist ekki rekstur, verðbreytingar, skilmála eða þjónusturof þriðju aðila.",
    ],
  },
  {
    title: "8. Viðhald og uppfærslur",
    content: [
      "Viðhald, efnisbreytingar og uppfærslur eftir afhendingu eru aðeins innifalin ef það kemur fram í tilboði eða sérstöku samkomulagi.",
      "Ef viðskiptavinur gerir sjálfur breytingar á vef, stillingum, kóða, hýsingu eða tengdum kerfum getur það haft áhrif á ábyrgð Foxel Veflausna á virkni vefsins.",
    ],
  },
  {
    title: "9. Höfundarréttur og eignarhald",
    content: [
      "Viðskiptavinur heldur rétti yfir eigin efni, svo sem merki, myndum og texta sem hann leggur til.",
      "Eftir fulla greiðslu fær viðskiptavinur rétt til að nota endanlega vefsíðu í eigin rekstri. Ógreidd vinna, drög, vinnuskrár, aðferðir, endurnýtanlegir kóðabútar og innri verkferlar Foxel Veflausna eru áfram eign Foxel Veflausna nema annað sé skriflega samið.",
      "Foxel Veflausnir má vísa til verkefnisins í eigin kynningarefni eða verkefnasafni nema viðskiptavinur óski sérstaklega eftir öðru.",
    ],
  },
  {
    title: "10. Ábyrgðartakmarkanir",
    content: [
      "Foxel Veflausnir leitast við að afhenda vandaða og örugga vefsíðu, en ábyrgist ekki tiltekin viðskiptaleg árangursmarkmið, stöðu í leitarvélum, fjölda fyrirspurna eða sölu.",
      "Foxel Veflausnir ber ekki ábyrgð á tjóni sem rekja má til rangra upplýsinga frá viðskiptavini, þjónusturofs hjá þriðja aðila, breytinga sem aðrir gera á vefnum, öryggisbrests hjá hýsingaraðila eða annarra atvika utan eðlilegrar stjórnar Foxel Veflausna.",
    ],
  },
  {
    title: "11. Trúnaður",
    content: [
      "Foxel Veflausnir fer með trúnaðarupplýsingar viðskiptavina af varúð og miðlar þeim ekki til óviðkomandi aðila.",
      "Trúnaður tekur ekki til upplýsinga sem eru opinberar, verða opinberar án brots Foxel Veflausna eða þarf að afhenda samkvæmt lögum.",
    ],
  },
  {
    title: "12. Uppsögn verkefnis",
    content: [
      "Ef viðskiptavinur hættir við verkefni eftir að vinna hefst getur Foxel Veflausnir rukkað fyrir þá vinnu sem þegar hefur verið unnin og kostnað sem hefur fallið til.",
      "Ef Foxel Veflausnir getur ekki haldið verkefni áfram af málefnalegum ástæðum skal viðskiptavini tilkynnt það eins fljótt og auðið er.",
    ],
  },
  {
    title: "13. Lög og ágreiningur",
    content: [
      "Um skilmálana og þjónustu Foxel Veflausna gilda íslensk lög.",
      "Komi upp ágreiningur skulu aðilar fyrst leitast við að leysa málið með samtali. Takist það ekki má reka málið fyrir íslenskum dómstólum, nema annað sé samið.",
    ],
  },
  {
    title: "14. Breytingar á skilmálum",
    content: [
      "Foxel Veflausnir getur uppfært þessa skilmála eftir þörfum. Skilmálar sem gilda um einstakt verkefni ráðast þó af því samkomulagi sem var samþykkt við upphaf verkefnis nema aðilar semji um annað.",
    ],
  },
];

export default function TermsPage() {
  return (
    <main className="bg-white">
      <section className="border-b border-slate-100 bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex min-h-11 items-center rounded text-sm font-medium text-blue-700 hover:text-blue-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-700"
          >
            Til baka á forsíðu
          </Link>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Skilmálar
          </h1>
          <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
            Þessir skilmálar gilda um þjónustu Foxel Veflausna vegna
            vefsíðugerðar, ráðgjafar og tengdrar þjónustu nema annað sé skriflega
            samið.
          </p>
          <p className="mt-4 text-sm text-slate-500">
            Síðast uppfært: 30. ágúst 2026
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">
            {terms.map((section) => (
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
