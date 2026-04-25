export default function Hero() {
  return (
    <section className="bg-white pt-16 pb-20 sm:pt-20 sm:pb-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-slate-900 leading-tight tracking-tight">
              Einföld og fagleg vefsíða{" "}
              <span className="text-blue-600">fyrir fyrirtækið þitt</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Við hjálpum iðnaðarmönnum, litlum fyrirtækjum og sjálfstætt starfandi
              að komast á netið með skýra, snyrtilega og faglega vefsíðu.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <a
                href="#samband"
                className="inline-block bg-blue-600 text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-blue-700 transition-colors text-base focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
              >
                Fá verðtilboð
              </a>
              <a
                href="#thjonustan"
                className="inline-block bg-white text-slate-700 font-semibold px-7 py-3.5 rounded-xl border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-colors text-base focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
              >
                Sjá hvað er innifalið
              </a>
            </div>
          </div>

          {/* Website mock card */}
          <div className="flex-1 w-full max-w-sm lg:max-w-md mx-auto lg:mx-0">
            <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
              {/* Browser bar */}
              <div className="bg-slate-50 border-b border-slate-100 px-4 py-3 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-slate-200" />
                  <div className="w-3 h-3 rounded-full bg-slate-200" />
                  <div className="w-3 h-3 rounded-full bg-slate-200" />
                </div>
                <div className="flex-1 bg-slate-100 rounded-md h-6 mx-2 flex items-center px-3">
                  <span className="text-xs text-slate-400">www.fyrirtaekid.is</span>
                </div>
              </div>

              {/* Mock header */}
              <div className="bg-blue-600 px-5 py-4 flex items-center justify-between">
                <div className="w-20 h-4 bg-white/30 rounded" />
                <div className="flex gap-3">
                  <div className="w-10 h-3 bg-white/20 rounded" />
                  <div className="w-10 h-3 bg-white/20 rounded" />
                  <div className="w-10 h-3 bg-white/20 rounded" />
                </div>
              </div>

              {/* Mock hero area */}
              <div className="bg-blue-50 px-5 py-6">
                <div className="w-48 h-5 bg-blue-200 rounded mb-2" />
                <div className="w-64 h-3 bg-blue-100 rounded mb-1" />
                <div className="w-56 h-3 bg-blue-100 rounded mb-4" />
                <div className="w-28 h-9 bg-blue-600 rounded-lg" />
              </div>

              {/* Mock sections */}
              <div className="px-5 py-4 grid grid-cols-2 gap-3">
                {[
                  { label: "Þjónusta", icon: "⚙" },
                  { label: "Um okkur", icon: "👤" },
                  { label: "Myndir", icon: "📷" },
                  { label: "Hafðu samband", icon: "✉" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="bg-slate-50 rounded-xl p-3 flex items-center gap-2 border border-slate-100"
                  >
                    <span className="text-lg leading-none">{item.icon}</span>
                    <span className="text-xs font-medium text-slate-700">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Mock map */}
              <div className="px-5 pb-5">
                <div className="bg-slate-100 rounded-xl h-16 flex items-center justify-center gap-2">
                  <span className="text-lg">📍</span>
                  <span className="text-xs text-slate-500">Kort</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
