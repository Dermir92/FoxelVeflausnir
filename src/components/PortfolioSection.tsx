import SectionHeading from "./SectionHeading";

type Project = {
  kind: "client" | "demo";
  badge: string;
  trade: string;
  name: string;
  description: string;
  tags: string[];
  href: string;
  linkLabel: string;
  footnote: string;
};

const projects: Project[] = [
  {
    kind: "client",
    badge: "Verk okkar",
    trade: "Ræsting og teppahreinsun",
    name: "HÁ Hreinu",
    description:
      "Fjölskyldufyrirtæki í ræstingum frá 2001. Síðan setur þjónustuna fram í skýrum flokkum — húsfélagaþrif, flutningsþrif og teppahreinsun — og gerir tilboðsbeiðni að næsta skrefi.",
    tags: ["Þjónustuflokkar", "Tilboðsbeiðni", "Samband og opnunartími"],
    href: "https://hahreinu.is",
    linkLabel: "Skoða hahreinu.is",
    footnote: "Unnið af teyminu okkar.",
  },
  {
    kind: "client",
    badge: "Verk okkar",
    trade: "Sótthreinsun og háþrýstiþvottur",
    name: "I.J. Hreinsun",
    description:
      "Systurfyrirtæki HÁ Hreinu. Sérhæfðari þjónusta — sótthreinsun og háþrýstiþvottur á sorptunnum, tunnuskipti og garðaúðun — sett fram þannig að húsfélög og fyrirtæki rati beint á það sem þau leita að. Síðurnar tvær vísa hvor á aðra.",
    tags: ["Þjónustuflokkar", "Tilboðsbeiðni", "Systursíða"],
    href: "https://ijhreinsun.is",
    linkLabel: "Skoða ijhreinsun.is",
    footnote: "Unnið af teyminu okkar.",
  },
  {
    kind: "demo",
    badge: "Sýnidæmi",
    trade: "Heimilis- og handverksþjónusta",
    name: "Handverk & Þjónusta",
    description:
      "Sýnidæmi sem við smíðuðum til að sýna aðra grein en verkefnin hér fyrir ofan: fyrirtæki sem býður margar handverksþjónustur — pípulagnir, rafmagn, smíði og málningu — á einni síðu, hverja í sínum kafla.",
    tags: ["Margar þjónustur", "Kaflaskipting", "Samband"],
    href: "https://demo.foxel.is",
    linkLabel: "Skoða demo.foxel.is",
    footnote: "Ímyndað fyrirtæki, búið til af Foxel. Ekki viðskiptavinur.",
  },
];

export default function PortfolioSection() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Verkefni"
          title="Síður sem eru í loftinu"
          subtitle="Tvö verkefni sem teymið okkar hefur unnið og eitt sýnidæmi. Allar síðurnar eru opnar — smelltu og skoðaðu."
        />
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project) => {
            const isDemo = project.kind === "demo";
            return (
              <div
                key={project.name}
                className={`flex flex-col rounded-2xl border bg-white shadow-sm p-6 ${
                  isDemo ? "border-amber-200" : "border-slate-100"
                }`}
              >
                <span
                  className={`self-start text-xs font-semibold uppercase tracking-wide px-2.5 py-1 rounded-full ${
                    isDemo
                      ? "border border-dashed border-amber-400 text-amber-700"
                      : "bg-blue-600 text-white"
                  }`}
                >
                  {project.badge}
                </span>

                <p className="mt-4 text-sm font-medium text-slate-500">
                  {project.trade}
                </p>
                <h3 className="mt-1 text-lg font-semibold text-slate-900">
                  {project.name}
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`inline-block text-xs font-medium px-2.5 py-1 rounded-full ${
                        isDemo
                          ? "bg-amber-50 text-amber-700"
                          : "bg-slate-100 text-slate-700"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-semibold text-blue-600 hover:text-blue-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 rounded"
                  >
                    {project.linkLabel}
                    <span aria-hidden="true">↗</span>
                    <span className="sr-only">(opnast í nýjum glugga)</span>
                  </a>
                  <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                    {project.footnote}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <p className="mt-8 text-center text-slate-500 text-sm">
          Við byrjum á því sem skiptir fyrirtækið þitt máli og byggjum síðuna út frá því.
        </p>
      </div>
    </section>
  );
}
