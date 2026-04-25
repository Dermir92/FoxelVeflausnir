import SectionHeading from "./SectionHeading";

const addons = [
  {
    icon: "📅",
    title: "Bókunarkerfi",
    text: "Leyfðu viðskiptavinum að bóka tíma eða þjónustu beint af vefsíðunni.",
  },
  {
    icon: "💬",
    title: "Spjallbox",
    text: "Einföld leið fyrir viðskiptavini að senda skilaboð á meðan þeir eru á síðunni.",
  },
  {
    icon: "🤖",
    title: "Spjallvélmenni",
    text: "Fyrir fyrirtæki sem fá margar endurteknar spurningar getum við skoðað einfalt spjallbox eða spjallvélmenni sem svarar algengum spurningum.",
  },
  {
    icon: "🛒",
    title: "Netverslun",
    text: "Ef þú vilt selja vörur eða þjónustu beint af síðunni.",
  },
  {
    icon: "🔧",
    title: "Viðhald og uppfærslur",
    text: "Við getum séð um viðhald og uppfærslur á síðunni svo þú þurfir ekki að hafa áhyggjur.",
  },
  {
    icon: "♻️",
    title: "Endurgerð eldri síðu",
    text: "Ef þú ert með gamla síðu sem lítur ekki vel út eða virkar ekki eins og skyldi.",
  },
];

export default function AddOnsSection() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Aukavalkostir"
          title="Hægt er að bæta við meira"
          subtitle="Við getum bætt við ýmsum hlutum eftir þörfum — alltaf í samráði við þig."
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
