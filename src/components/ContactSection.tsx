import SectionHeading from "./SectionHeading";
import ContactForm from "./ContactForm";
import { CONTACT_EMAIL } from "@/lib/site";

export default function ContactSection() {
  return (
    <section id="samband" className="scroll-mt-16 bg-white py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left side info */}
          <div>
            <SectionHeading
              label="Hafðu samband"
              title="Fáðu fast verð fyrir vefsíðuna"
              subtitle="Sendu okkur nokkrar línur um fyrirtækið og hvað þig vantar. Við svörum og leggjum til næstu skref."
              centered={false}
            />
            <div className="mt-8 space-y-5">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 text-sm">Skýrt verð</h3>
                  <p className="mt-0.5 text-sm text-slate-600">
                    Grunnpakkinn kostar 129.000 kr. án vsk. og umfangið er skilgreint fyrirfram.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 text-sm">Fljótt svar</h3>
                  <p className="mt-0.5 text-sm text-slate-600">
                    Við svörum yfirleitt innan eins til tveggja virkra daga.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 text-sm">Netfang</h3>
                  <p className="mt-0.5 text-sm text-slate-600">
                    <a
                      href={`mailto:${CONTACT_EMAIL}`}
                      className="inline-flex min-h-11 items-center rounded text-blue-700 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-700"
                    >
                      {CONTACT_EMAIL}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
