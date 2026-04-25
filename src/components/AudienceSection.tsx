import SectionHeading from "./SectionHeading";

const audiences = [
  { icon: "🔧", label: "Iðnaðarmenn" },
  { icon: "🏗️", label: "Verktakar" },
  { icon: "✂️", label: "Snyrtistofur" },
  { icon: "💪", label: "Þjálfarar" },
  { icon: "💼", label: "Ráðgjafar" },
  { icon: "🧹", label: "Þrifafyrirtæki" },
  { icon: "🚀", label: "Ný fyrirtæki" },
  { icon: "🔄", label: "Fyrirtæki með úrelta síðu" },
];

export default function AudienceSection() {
  return (
    <section id="fyrir-hverja" className="bg-slate-50 py-20 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Fyrir hverja"
          title="Við hjálpum margvíslegum fyrirtækjum"
          subtitle="Hvort sem þú ert að hefjast handa eða vilt uppfæra gamla síðu — við getum aðstoðað."
        />
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {audiences.map((audience) => (
            <div
              key={audience.label}
              className="bg-white rounded-xl p-5 flex flex-col items-center gap-3 text-center border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-100 transition-all"
            >
              <span className="text-3xl" role="img" aria-hidden="true">
                {audience.icon}
              </span>
              <span className="text-sm font-semibold text-slate-700">
                {audience.label}
              </span>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-slate-500 text-sm">
          Finnur þú þig ekki á listanum? Hafðu samband og við skoðum hvort við
          getum aðstoðað.
        </p>
      </div>
    </section>
  );
}
