import Image from "next/image";
import SectionHeading from "./SectionHeading";

type Project = {
  number: string;
  kind: "client" | "demo";
  badge: string;
  initials: string;
  trade: string;
  name: string;
  description: string;
  tags: string[];
  href: string;
  domain: string;
  footnote: string;
  image?: {
    src: string;
    alt: string;
  };
  previewClass: string;
  accentClass: string;
  glowClass: string;
};

const projects: Project[] = [
  {
    number: "01",
    kind: "client",
    badge: "Verkefni Foxel",
    initials: "HÁ",
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
    previewClass: "from-sky-950 via-blue-900 to-blue-700",
    accentClass: "bg-sky-300 text-sky-950",
    glowClass: "bg-sky-400",
  },
  {
    number: "02",
    kind: "client",
    badge: "Verkefni Foxel",
    initials: "IJ",
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
    previewClass: "from-slate-950 via-cyan-950 to-cyan-700",
    accentClass: "bg-cyan-300 text-cyan-950",
    glowClass: "bg-cyan-400",
  },
  {
    number: "03",
    kind: "demo",
    badge: "Sýnidæmi, ekki viðskiptavinur",
    initials: "HÞ",
    trade: "Heimilis- og handverksþjónusta",
    name: "Handverk & Þjónusta",
    description:
      "Sýnidæmi um hvernig ein einföld vefsíða getur kynnt margar þjónustur fyrir iðnaðar- og þjónustufyrirtæki.",
    tags: ["Margar þjónustur", "Starfssvæði", "Samband"],
    href: "https://demo.foxel.is",
    domain: "demo.foxel.is",
    footnote: "Ekki raunverulegt fyrirtæki.",
    previewClass: "from-slate-950 via-amber-950 to-amber-700",
    accentClass: "bg-amber-300 text-amber-950",
    glowClass: "bg-amber-400",
  },
];

export default function PortfolioSection() {
  return (
    <section id="verkefni" className="scroll-mt-16 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Verkefni"
          title="Skoðaðu vefi sem eru í loftinu"
          subtitle="Tvö raunveruleg verkefni og eitt sýnidæmi fyrir þjónustufyrirtæki."
        />
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => {
            const isDemo = project.kind === "demo";

            return (
              <article
                key={project.name}
                className={`group flex flex-col overflow-hidden rounded-3xl border bg-white shadow-[0_12px_35px_-22px_rgba(15,23,42,0.45)] motion-safe:transition motion-safe:duration-300 motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-[0_22px_45px_-24px_rgba(15,23,42,0.5)] ${
                  isDemo ? "border-amber-300" : "border-slate-200"
                }`}
              >
                <div
                  className={`flex items-center gap-2.5 border-b px-4 py-3.5 ${
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
                  <div className="flex h-7 min-w-0 flex-1 items-center rounded-lg border border-slate-200 bg-white px-3 shadow-sm">
                    <span className="truncate text-xs text-slate-700">
                      {project.domain}
                    </span>
                  </div>
                </div>

                {project.image ? (
                  <div className="relative isolate min-h-52 overflow-hidden text-white">
                    <Image
                      src={project.image.src}
                      alt={project.image.alt}
                      fill
                      sizes="(min-width: 1024px) 352px, (min-width: 768px) 50vw, 100vw"
                      className="object-cover motion-safe:transition motion-safe:duration-500 motion-safe:group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-slate-950/10" />
                    <div className="relative flex min-h-52 flex-col justify-between p-5">
                      <div className="flex items-start justify-between gap-4">
                        <span
                          className={`flex h-11 w-11 items-center justify-center rounded-xl text-sm font-black shadow-lg ${project.accentClass}`}
                        >
                          {project.initials}
                        </span>
                        <span className="font-mono text-xs font-semibold tracking-wider text-white/80">
                          {project.number}
                        </span>
                      </div>
                      <div>
                        <p className="text-xs font-medium text-white/80">
                          {project.trade}
                        </p>
                        <p className="mt-1 text-lg font-bold tracking-tight">
                          {project.name}
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div
                    className={`relative isolate min-h-52 overflow-hidden bg-gradient-to-br p-5 text-white ${project.previewClass}`}
                    aria-hidden="true"
                  >
                    <div
                      className={`absolute -right-12 -top-16 h-44 w-44 rounded-full opacity-25 blur-3xl ${project.glowClass}`}
                    />
                    <div className="absolute -bottom-16 -left-8 h-36 w-36 rounded-full bg-white/15 blur-3xl" />

                    <div className="relative flex items-start justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <span
                          className={`flex h-11 w-11 items-center justify-center rounded-xl text-sm font-black shadow-lg ${project.accentClass}`}
                        >
                          {project.initials}
                        </span>
                        <div>
                          <p className="text-xs font-medium text-white/70">
                            {project.trade}
                          </p>
                          <p className="mt-0.5 font-bold tracking-tight">
                            {project.name}
                          </p>
                        </div>
                      </div>
                      <span className="font-mono text-xs font-semibold tracking-wider text-white/55">
                        {project.number}
                      </span>
                    </div>

                    <div className="relative mt-5 rounded-2xl border border-white/15 bg-white/10 p-4 shadow-xl backdrop-blur-sm">
                      <div className="h-2 w-20 rounded-full bg-white/35" />
                      <div className="mt-3 h-3 w-4/5 rounded-full bg-white/90" />
                      <div className="mt-2 h-3 w-3/5 rounded-full bg-white/75" />
                      <div className="mt-4 flex items-center justify-between gap-3">
                        <span
                          className={`rounded-lg px-3 py-2 text-[11px] font-bold ${project.accentClass}`}
                        >
                          Óska eftir tilboði
                        </span>
                        <div className="flex gap-1.5">
                          <span className="h-7 w-7 rounded-lg bg-white/10" />
                          <span className="h-7 w-7 rounded-lg bg-white/10" />
                          <span className="h-7 w-7 rounded-lg bg-white/10" />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center justify-between gap-3">
                    <span
                      className={`self-start rounded-full px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide ${
                        isDemo
                          ? "border border-dashed border-amber-500 bg-amber-50 text-amber-900"
                          : "bg-blue-50 text-blue-800"
                      }`}
                    >
                      {project.badge}
                    </span>
                    <span className="font-mono text-xs font-semibold text-slate-400">
                      {project.number}
                    </span>
                  </div>

                  <p className="mt-5 text-sm font-medium text-slate-600">
                    {project.trade}
                  </p>
                  <h3 className="mt-1 text-xl font-bold tracking-tight text-slate-950">
                    {project.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
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

                  <div className="mt-auto pt-7">
                    <div className="border-t border-slate-100 pt-4">
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex min-h-11 items-center justify-between gap-4 rounded-lg font-semibold text-blue-700 transition-colors hover:text-blue-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2"
                      >
                        <span>Skoða {project.domain}</span>
                        <span
                          className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-blue-50 text-lg transition-colors group-hover:bg-blue-100"
                          aria-hidden="true"
                        >
                          ↗
                        </span>
                        <span className="sr-only">opnast í nýjum flipa</span>
                      </a>
                      <p className="mt-1 text-xs leading-relaxed text-slate-500">
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
