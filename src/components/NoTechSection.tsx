export default function NoTechSection() {
  return (
    <section className="bg-blue-600 py-20 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block text-blue-200 text-sm font-semibold tracking-wide uppercase mb-4">
          Engin tækniþekking þörf
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
          Þú þarft ekki að kunna á tæknimál
        </h2>
        <p className="mt-6 text-lg sm:text-xl text-blue-100 leading-relaxed max-w-2xl mx-auto">
          Við sjáum um uppsetninguna og hjálpum þér að koma helstu upplýsingum á
          réttan stað. Þú þarft bara að segja okkur hvað fyrirtækið gerir, hvaða
          þjónustu þú býður og hvernig viðskiptavinir eiga að hafa samband.
        </p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            {
              step: "1",
              title: "Þú segir okkur hvað þú gerir",
              text: "Við hlustum á þig og skráum niður helstu upplýsingarnar.",
            },
            {
              step: "2",
              title: "Við hönnum síðuna",
              text: "Við sjáum um alla uppsetningu, texta og útlit.",
            },
            {
              step: "3",
              title: "Þú færð klára síðu",
              text: "Þegar allt lítur vel út fer síðan í loftið.",
            },
          ].map((item) => (
            <div
              key={item.step}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20"
            >
              <div className="w-8 h-8 bg-white text-blue-600 rounded-full flex items-center justify-center font-bold text-sm mb-3">
                {item.step}
              </div>
              <h3 className="text-white font-semibold text-base mb-1">
                {item.title}
              </h3>
              <p className="text-blue-100 text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <a
            href="#samband"
            className="inline-block bg-white text-blue-600 font-semibold px-7 py-3.5 rounded-xl hover:bg-blue-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-600"
          >
            Fá verðtilboð
          </a>
        </div>
      </div>
    </section>
  );
}
