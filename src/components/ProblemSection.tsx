import SectionHeading from "./SectionHeading";

export default function ProblemSection() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <div className="flex-1">
            <SectionHeading
              label="Vandinn"
              title="Facebook er ekki heimasíða"
              centered={false}
            />
            <div className="mt-6 space-y-4 text-slate-600 leading-relaxed text-base sm:text-lg">
              <p>
                Facebook og Instagram geta verið fín til að sýna frá deginum og
                halda sambandi við fólk. En þau koma ekki í staðinn fyrir skýra vefsíðu sem segir strax hvað þú gerir, hvar þú starfar og hvernig
                hægt er að hafa samband.
              </p>
              <p>
                Þegar einhver leitar að þjónustunni þinni þarf hann ekki að fletta
                í gegnum færslur, myndaalbúm eða gömul skilaboð til að finna
                grunnupplýsingar.
              </p>
              <p>
                Góð vefsíða vinnur þá vinnu fyrir þig: hún kynnir fyrirtækið,
                svarar helstu spurningum og leiðir fólk í næsta skref.
              </p>
            </div>
          </div>

          <div className="flex-1 grid gap-4">
            {[
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                ),
                title: "Betri fyrsti snertipunktur",
                text: "Fólk fær skýra mynd af fyrirtækinu áður en það hringir eða sendir fyrirspurn.",
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "Minna vesen fyrir viðskiptavininn",
                text: "Þjónusta, svæði og tengiliðaupplýsingar eru aðgengileg án þess að fólk þurfi að leita.",
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                ),
                title: "Meiri stjórn á kynningunni",
                text: "Þú ákveður hvaða upplýsingar eru efst, hvernig þjónustan er útskýrð og hvað fólk gerir næst.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl p-5 flex gap-4 border border-slate-100 shadow-sm"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-1 text-sm text-slate-600">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
