import SectionHeading from "./SectionHeading";

type Project = {
  kind: "client" | "demo";
  badge: string;
  trade: string;
  name: string;
  description: string;
  tags: string[];
  href: string;
  domain: string;
  footnote: string;
};

const projects: Project[] = [
  {
    kind: "client",
    badge: "Verkefni Foxel",
    trade: "Ræsting og teppahreinsun",
    name: "HÁ Hreinu",
    description:
      "Þjónustan er flokkuð skýrt og tilboðsbeiðni er áberandi næsta skref fyrir húsfélög, fyrirtæki og heimili.",
    tags: ["Þjónustuflokkar", "Tilboðsbeiðni", "Opnunartími"],
    href: "https://hahreinu.is",
    domain: "hahreinu.is",
    footnote: "Raunverulegt viðskiptaverkefni.",
  },
  {
    kind: "client",
    badge: "Verkefni Foxel",
    trade: "Sótthreinsun og háþrýstiþvottur",
    name: "I.J. Hreinsun",
    description:
      "Sérhæfð þjónusta sett fram þannig að húsfélög og fyrirtæki rati fljótt á rétta lausn og geti óskað eftir tilboði.",
    tags: ["Sérhæfð þjónusta", "Tilboðsbeiðni", "Systursíða"],
    href: "https://ijhreinsun.is",
    domain: "ijhreinsun.is",
    footnote: "Raunverulegt viðskiptaverkefni.",
  },
  {
    kind: "demo",
    badge: "Sýnidæmi · ekki viðskiptavinur",
    trade: "Heimilis- og handverksþjónusta",
    name: "Handverk & Þjónusta",
    description:
      "Sýnidæmi um hvernig vefsíða fyrir iðnaðar- og þjónustufyrirtæki getur kynnt margar þjónustur á einni skýrri síðu.",
    tags: ["Margar þjónustur", "Starfssvæði", "Samband"],
    href: "https://demo.foxel.is",
    domain: "demo.foxel.is",
    footnote: "Ímyndað fyrirtæki, búið til af Foxel.",
  },
];

export default function PortfolioSection() {
  return (
    <section id="verkefni" className="scroll-mt-16 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Verkefni"
          title="Skoðaðu síður sem eru í loftinu"
          subtitle="Tvö raunveruleg verkefni og eitt skýrt merkt sýnidæmi fyrir handverksþjónustu."
        />
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => {
            const isDemo = project.kind === "demo";

            return (
              <article
                key={project.name}
                className={`flex flex-col overflow-hidden rounded-2xl border bg-white shadow-sm transition-shadow hover:shadow-md ${
                  isDemo ? "border-amber-300" : "border-slate-200"
                }`}
              >
                <div
                  className={`flex items-center gap-2.5 border-b px-4 py-3 ${
                    isDemo
                      ? "border-amber-200 bg-amber-50"
                      : "border-slate-200 bg-slate-50"
                  }`}
                >
                  <div className="flex flex-shrink-0 gap-1.5" aria-hidden="true">
                    {[0, 1, 2].map((dot) => (
                      <div
                        key={dot}
                        className={`h-2.5 w-2.5 rounded-full ${
                          isDemo ? "bg-amber-300" : "bg-slate-300"
                        }`}
                      />
                    ))}
                  </div>
                  <div className="flex h-7 min-w-0 flex-1 items-center rounded-md border border-slate-200 bg-white px-2.5">
                    <span className="truncate text-xs text-slate-700">
                      {project.domain}
                    </span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <span
                    className={`self-start rounded-full px-2.5 py-1 text-xs font-semibold uppercase tracking-wide ${
                      isDemo
                        ? "border border-dashed border-amber-500 text-amber-800"
                        : "bg-blue-700 text-white"
                    }`}
                  >
                    {project.badge}
                  </span>

                  <p className="mt-4 text-sm font-medium text-slate-600">
                    {project.trade}
                  </p>
                  <h3 className="mt-1 text-lg font-semibold text-slate-900">
                    {project.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`inline-block rounded-full px-2.5 py-1 text-xs font-medium ${
                          isDemo
                            ? "bg-amber-50 text-amber-800"
                            : "bg-slate-100 text-slate-700"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto pt-6">
                    <div className="border-t border-slate-100 pt-3">
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-11 items-center gap-1.5 rounded font-semibold text-blue-700 transition-colors hover:text-blue-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2"
                      >
                        Skoða {project.domain}
                        <span aria-hidden="true">↗</span>
                        <span className="sr-only">opnast í nýjum flipa</span>
                      </a>
                      <p className="text-xs leading-relaxed text-slate-600">
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
