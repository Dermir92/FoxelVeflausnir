import SectionHeading from "./SectionHeading";

const demos = [
  {
    category: "Pípulagningamaður",
    name: "Björn Pípulagning",
    description: "Kynningarsíða fyrir pípulagningamann með þjónustulýsingu, myndir og sambandsform.",
    tags: ["Einföld síða", "Samband", "Kort"],
    color: "blue",
  },
  {
    category: "Snyrtistofa",
    name: "Hárverk Snyrtistofa",
    description: "Fagleg síða fyrir snyrtistofu með þjónustulýsingu, bókunarmöguleika og myndir af verkum.",
    tags: ["Fyrirtækjasíða", "Bókunarform", "Myndir"],
    color: "rose",
  },
  {
    category: "Þrifafyrirtæki",
    name: "Hreint & Gott",
    description: "Skýr kynningarsíða sem sýnir þjónustu, þjónustusvæði og gefur viðskiptavinum auðvelda leið til að hafa samband.",
    tags: ["Einföld síða", "Þjónustulisti", "Samband"],
    color: "green",
  },
];

const colorMap: Record<string, { bg: string; text: string; border: string; tag: string; tagText: string }> = {
  blue: {
    bg: "bg-blue-50",
    text: "text-blue-600",
    border: "border-blue-100",
    tag: "bg-blue-100",
    tagText: "text-blue-700",
  },
  rose: {
    bg: "bg-rose-50",
    text: "text-rose-600",
    border: "border-rose-100",
    tag: "bg-rose-100",
    tagText: "text-rose-700",
  },
  green: {
    bg: "bg-green-50",
    text: "text-green-600",
    border: "border-green-100",
    tag: "bg-green-100",
    tagText: "text-green-700",
  },
};

export default function PortfolioSection() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Dæmi"
          title="Hvernig gæti síðan þín litið út?"
          subtitle="Hér eru dæmi um einfaldar kynningarsíður fyrir ólíkar þjónustur. Þau sýna uppbyggingu, ekki tilbúin viðskiptaverkefni."
        />
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {demos.map((demo) => {
            const colors = colorMap[demo.color];
            return (
              <div
                key={demo.name}
                className="rounded-2xl border border-slate-100 shadow-sm overflow-hidden"
              >
                {/* Mock preview */}
                <div className={`${colors.bg} ${colors.border} border-b p-6 h-40 flex flex-col justify-between`}>
                  <div className="flex items-center justify-between">
                    <div className={`text-xs font-semibold ${colors.text} uppercase tracking-wide`}>
                      {demo.category}
                    </div>
                    <div className="flex gap-1">
                      <div className="w-2 h-2 rounded-full bg-slate-200" />
                      <div className="w-2 h-2 rounded-full bg-slate-200" />
                      <div className="w-2 h-2 rounded-full bg-slate-200" />
                    </div>
                  </div>
                  <div>
                    <div className="h-4 bg-slate-200/60 rounded w-3/4 mb-2" />
                    <div className="h-3 bg-slate-200/40 rounded w-full mb-1" />
                    <div className="h-3 bg-slate-200/40 rounded w-2/3" />
                  </div>
                  <div className={`w-24 h-7 rounded-lg ${demo.color === 'blue' ? 'bg-blue-400/50' : demo.color === 'rose' ? 'bg-rose-400/50' : 'bg-green-400/50'}`} />
                </div>

                {/* Info */}
                <div className="p-5">
                  <h3 className="font-semibold text-slate-900">{demo.name}</h3>
                  <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">
                    {demo.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {demo.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`inline-block ${colors.tag} ${colors.tagText} text-xs font-medium px-2.5 py-1 rounded-full`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
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
