const navLinks = [
  { href: "#thjonustan", label: "Þjónustan" },
  { href: "#fyrir-hverja", label: "Fyrir hverja" },
  { href: "#ferlid", label: "Ferlið" },
  { href: "#spurningar", label: "Spurt og svarað" },
  { href: "#samband", label: "Hafðu samband" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-1.5 mb-3">
              <span className="text-blue-400 font-bold text-lg">Foxel</span>
              <span className="text-white font-semibold text-lg">Veflausnir</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
              Við hjálpum iðnaðarmönnum, litlum fyrirtækjum og sjálfstætt starfandi
              að komast á netið með skýra og faglega vefsíðu.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wide mb-4">
              Valmynd
            </h3>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wide mb-4">
              Hafðu samband
            </h3>
            <ul className="space-y-2.5">
              <li className="flex items-center gap-2 text-sm text-slate-400">
                <svg className="w-4 h-4 text-slate-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Netfang: setja inn síðar
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-400">
                <svg className="w-4 h-4 text-slate-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Sími: setja inn síðar
              </li>
            </ul>
            <div className="mt-6">
              <a
                href="#samband"
                className="inline-block bg-blue-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                Fá verðtilboð
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Foxel Veflausnir. Allur réttur áskilinn.
          </p>
          <p className="text-xs text-slate-600">
            Þjónusta frá Foxel
          </p>
        </div>
      </div>
    </footer>
  );
}
