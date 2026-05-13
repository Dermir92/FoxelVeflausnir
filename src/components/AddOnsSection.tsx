import SectionHeading from "./SectionHeading";

const addons = [
  {
    icon: "📅",
    title: "Bókunarkerfi",
    text: "Leyfðu viðskiptavinum að bóka tíma eða þjónustu beint á vefsíðunni.",
  },
  {
    icon: "💬",
    title: "Spjallbox",
    text: "Einföld leið fyrir gesti til að senda skilaboð á meðan þeir skoða síðuna.",
  },
  {
    icon: "🤖",
    title: "Spjallvélmenni",
    text: "Fyrir fyrirtæki sem fá margar svipaðar spurningar getum við skoðað spjallvélmenni sem svarar algengum spurningum.",
  },
  {
    icon: "🛒",
    title: "Netverslun",
    text: "Fyrir fyrirtæki sem vilja selja vörur eða þjónustu beint á síðunni.",
  },
  {
    icon: "🔧",
    title: "Viðhald og uppfærslur",
    text: "Við getum séð um breytingar, viðhald og uppfærslur svo síðan haldist í lagi.",
  },
  {
    icon: "♻️",
    title: "Endurgerð eldri síðu",
    text: "Fyrir eldri síður sem þurfa skýrara útlit, betri texta eða tæknilega yfirhalningu.",
  },
];

export default function AddOnsSection() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Aukavalkostir"
          title="Hægt er að bæta við meira"
          subtitle="Við bætum við virkni eftir þörfum og veljum aðeins það sem nýtist fyrirtækinu þínu."
        />
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {addons.map((addon) => (
            <div
              key={addon.title}
              className="flex gap-4 bg-slate-50 rounded-xl p-5 border border-slate-100"
            >
              <span className="text-2xl flex-shrink-0 mt-0.5" role="img" aria-hidden="true">
                {addon.icon}
              </span>
              <div>
                <h3 className="font-semibold text-slate-900 text-sm">
                  {addon.title}
                </h3>
                <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                  {addon.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
