import Image from "next/image";
import SectionHeading from "./SectionHeading";

type Project = {
  number: string;
  kind: "client" | "demo";
  badge: string;
  trade: string;
  name: string;
  description: string;
  tags: string[];
  href: string;
  domain: string;
  footnote: string;
  image?: { src: string; alt: string };
  /** Notað þegar ekkert ljósmyndaefni er til: hallandi tvílitur flötur. */
  fallbackGradient: string;
};

const projects: Project[] = [
  {
    number: "01",
    kind: "client",
    badge: "Verkefni okkar",
    trade: "Ræsting og teppahreinsun",
    name: "HÁ Hreinu",
    description:
      "Þjónustan er flokkuð skýrt og tilboðsbeiðnin er áberandi fyrir húsfélög og fyrirtæki.",
    tags: ["Þjónustuflokkar", "Tilboðsbeiðni", "Opnunartími"],
    href: "https://hahreinu.is",
    domain: "hahreinu.is",
    footnote: "Raunverulegt verkefni fyrir viðskiptavin.",
    image: {
      src: "/projects/hahreinu-hero.jpg",
      alt: "Íslenskt íbúðarhverfi, mynd af vef HÁ Hreinu",
    },
    fallbackGradient:
      "linear-gradient(135deg, var(--color-brand-cyan) 0 48%, var(--color-brand-blue) 48%)",
  },
  {
    number: "02",
    kind: "client",
    badge: "Verkefni okkar",
    trade: "Sótthreinsun og háþrýstiþvottur",
    name: "I.J. Hreinsun",
    description:
      "Sérhæfð þjónusta er sett fram þannig að húsfélög og fyrirtæki rati fljótt á rétta lausn og geti óskað eftir tilboði.",
    tags: ["Sérhæfð þjónusta", "Tilboðsbeiðni", "Systursíða"],
    href: "https://ijhreinsun.is",
    domain: "ijhreinsun.is",
    footnote: "Raunverulegt verkefni fyrir viðskiptavin.",
    image: {
      src: "/projects/ijhreinsun-hero.jpg",
      alt: "Reykjavík úr lofti, mynd af vef I.J. Hreinsunar",
    },
    fallbackGradient:
      "linear-gradient(135deg, var(--color-brand-orange) 0 44%, var(--color-brand-yellow) 44%)",
  },
  {
    number: "03",
    kind: "demo",
    badge: "Sýnidæmi, ekki viðskiptavinur",
    trade: "Heimilis- og handverksþjónusta",
    name: "Handverk & Þjónusta",
    description:
      "Sýnidæmi um hvernig ein einföld vefsíða getur kynnt margar þjónustur fyrir iðnaðar- og þjónustufyrirtæki.",
    tags: ["Margar þjónustur", "Starfssvæði", "Samband"],
    href: "https://demo.foxel.is",
    domain: "demo.foxel.is",
    footnote: "Ekki raunverulegt fyrirtæki.",
    fallbackGradient:
      "linear-gradient(135deg, var(--color-brand-blue) 0 52%, var(--color-brand-cyan) 52%)",
  },
];

export default function PortfolioSection() {
  return (
    <section
      id="verkefni"
      className="scroll-mt-20 border-b-2 border-line bg-paper py-16 sm:py-20"
    >
      <div className="mx-auto w-full max-w-[70rem] px-5 sm:px-6">
        <SectionHeading
          label="Verkefni"
          title="Síður sem eru komnar heim"
          subtitle="Tvö raunveruleg verkefni í loftinu og eitt sýnidæmi fyrir þjónustufyrirtæki."
          centered={false}
        />

        <div className="mt-10 grid grid-cols-1 gap-4.5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => {
            const isDemo = project.kind === "demo";

            return (
              <article
                key={project.name}
                className={`group flex flex-col overflow-hidden rounded-2xl border-2 bg-paper ${
                  isDemo ? "border-brand-yellow" : "border-line"
                }`}
              >
                <div className="relative min-h-48 border-b-2 border-line bg-soft p-6">
                  {project.image ? (
                    <div className="relative h-full min-h-36 border-[5px] border-ink">
                      <Image
                        src={project.image.src}
                        alt={project.image.alt}
                        fill
                        sizes="(min-width: 1024px) 320px, (min-width: 768px) 50vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div
                      className="h-full min-h-36 border-[5px] border-ink"
                      style={{ background: project.fallbackGradient }}
                      aria-hidden="true"
                    />
                  )}
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-start justify-between gap-3">
                    <span
                      className={`px-2 py-1 text-[11px] font-extrabold uppercase tracking-wide ${
                        isDemo
                          ? "border-2 border-dashed border-brand-yellow bg-brand-yellow/15 text-ink"
                          : "bg-soft text-brand-blue"
                      }`}
                    >
                      {project.badge}
                    </span>
                    <span className="text-sm font-extrabold text-brand-orange">
                      {project.number}
                    </span>
                  </div>

                  <p className="mt-5 text-xs font-semibold text-copy">
                    {project.trade}
                  </p>
                  <h3 className="mt-1 text-xl font-extrabold tracking-tight text-ink">
                    {project.name}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-copy">
                    {project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-soft px-2 py-1 text-xs font-bold text-copy"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto pt-6">
                    <div className="border-t-2 border-line pt-4">
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex min-h-11 items-center justify-between gap-4 rounded-sm font-bold text-brand-blue transition-colors hover:text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2"
                      >
                        <span>Skoða {project.domain}</span>
                        <span
                          className="flex h-8 w-8 flex-shrink-0 items-center justify-center border-2 border-ink bg-brand-cyan text-ink transition-colors group-hover:bg-brand-orange group-hover:text-white"
                          aria-hidden="true"
                        >
                          ↗
                        </span>
                        <span className="sr-only">opnast í nýjum flipa</span>
                      </a>
                      <p className="mt-1.5 text-xs leading-relaxed text-copy">
                        {project.footnote}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
