import SectionHeading from "./SectionHeading";
import PackageCard from "./PackageCard";

const packages = [
  {
    title: "Einföld síða",
    description:
      "Fyrir fyrirtæki sem vill vera finnanlegt, líta faglega út og gera fólki auðvelt að hafa samband.",
    features: [
      "Ein síða",
      "Kynning á fyrirtæki",
      "Þjónustukafli",
      "Hafðu samband",
      "Farsímavæn uppsetning",
    ],
  },
  {
    title: "Fyrirtækjasíða",
    description:
      "Fyrir fyrirtæki sem vill skýrari uppsetningu og fleiri kafla fyrir þjónustu, myndir og upplýsingar.",
    features: [
      "Forsíða",
      "Þjónustusíður eða þjónustukaflar",
      "Um okkur",
      "Myndir eða verkefni",
      "Algengar spurningar",
      "Hafðu samband",
    ],
    highlighted: true,
    badge: "Vinsælast",
  },
  {
    title: "Sérlausn",
    description:
      "Fyrir fyrirtæki sem þarf meira en einfalda kynningarsíðu.",
    features: [
      "Bókunarform",
      "Spjallbox",
      "Spjallvélmenni fyrir algengar spurningar",
      "Netverslunarlending",
      "Fleiri tungumál",
      "Viðhald og uppfærslur",
    ],
  },
];

export default function PackagesSection() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Þjónustupakkar"
          title="Veldu pakka sem hentar þér"
          subtitle="Við finnum lausn sem passar við þarfir þínar. Verð fer eftir umfangi — hafðu samband og við komum með tillögu."
        />
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {packages.map((pkg) => (
            <PackageCard
              key={pkg.title}
              title={pkg.title}
              description={pkg.description}
              features={pkg.features}
              highlighted={pkg.highlighted}
              badge={pkg.badge}
            />
          ))}
        </div>
        <p className="mt-8 text-center text-slate-500 text-sm">
          Ekki viss hvað passar? Hafðu samband og við hjálpum þér að velja.
        </p>
      </div>
    </section>
  );
}
