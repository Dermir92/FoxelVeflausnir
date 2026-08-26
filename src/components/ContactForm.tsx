"use client";

import { useState } from "react";
import { CONTACT_EMAIL } from "@/lib/site";

/**
 * Formspree form id (the part after /f/ in the endpoint, e.g. "xldbgkqw").
 * Set NEXT_PUBLIC_FORMSPREE_ID in .env.local and in the Vercel project env.
 * It is not a secret — Formspree endpoints are public by design.
 */
const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID;

type FormState = "idle" | "submitting" | "success" | "error";

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  business: string;
  hasWebsite: string;
  needs: string;
  timeline: string;
  message: string;
}

const initialData: FormData = {
  name: "",
  email: "",
  phone: "",
  company: "",
  business: "",
  hasWebsite: "",
  needs: "",
  timeline: "",
  message: "",
};

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>(initialData);
  const [formState, setFormState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<Partial<FormData>>({});
  // Honeypot. Hidden from people, filled in by bots; Formspree discards any
  // submission where _gotcha is non-empty.
  const [honeypot, setHoneypot] = useState("");

  function validate(): boolean {
    const newErrors: Partial<FormData> = {};
    if (!formData.name.trim()) newErrors.name = "Nafn vantar";
    if (!formData.email.trim()) {
      newErrors.email = "Netfang vantar";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Netfang lítur ekki rétt út";
    }
    if (!formData.company.trim()) newErrors.company = "Nafn fyrirtækis vantar";
    if (!formData.business.trim()) newErrors.business = "Lýsing á starfsemi vantar";
    if (!formData.hasWebsite) newErrors.hasWebsite = "Valkost vantar";
    if (!formData.needs) newErrors.needs = "Valkost vantar";
    if (!formData.timeline) newErrors.timeline = "Valkost vantar";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    if (!FORMSPREE_ID) {
      // Fail loudly rather than showing a success screen for a lost inquiry.
      console.error(
        "NEXT_PUBLIC_FORMSPREE_ID is not set — the inquiry was NOT sent."
      );
      setFormState("error");
      return;
    }

    setFormState("submitting");
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ ...formData, _gotcha: honeypot }),
      });
      if (!res.ok) throw new Error(`Formspree responded ${res.status}`);
      setFormState("success");
    } catch (err) {
      console.error("Contact form submission failed:", err);
      setFormState("error");
    }
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  if (formState === "success") {
    return (
      <div className="text-center py-16 px-4">
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-slate-900">Takk fyrir fyrirspurnina!</h3>
        <p className="mt-3 text-slate-600 text-base max-w-md mx-auto">
          Við höfum tekið við skilaboðunum og munum hafa samband við þig fljótlega.
        </p>
        <button
          onClick={() => { setFormState("idle"); setFormData(initialData); }}
          className="mt-6 text-blue-600 text-sm font-medium hover:underline"
        >
          Senda aðra fyrirspurn
        </button>
      </div>
    );
  }

  const inputClass = (field: keyof FormData) =>
    `w-full px-4 py-3 rounded-xl border text-sm text-slate-900 placeholder-slate-400 bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent ${
      errors[field]
        ? "border-red-300 bg-red-50"
        : "border-slate-200 hover:border-slate-300"
    }`;

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Name + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1.5">
            Nafn <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Jón Jónsson"
            className={inputClass("name")}
          />
          {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
            Netfang <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="jon@daemi.is"
            className={inputClass("email")}
          />
          {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
        </div>
      </div>

      {/* Phone + Company */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1.5">
            Sími
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="555 1234"
            className={inputClass("phone")}
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1.5">
            Nafn fyrirtækis <span className="text-red-500">*</span>
          </label>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            value={formData.company}
            onChange={handleChange}
            placeholder="Dæmi ehf."
            className={inputClass("company")}
          />
          {errors.company && <p className="mt-1 text-xs text-red-600">{errors.company}</p>}
        </div>
      </div>

      {/* Business description */}
      <div>
        <label htmlFor="business" className="block text-sm font-medium text-slate-700 mb-1.5">
          Hvað gerir fyrirtækið? <span className="text-red-500">*</span>
        </label>
        <input
          id="business"
          name="business"
          type="text"
          value={formData.business}
          onChange={handleChange}
          placeholder="T.d. pípulagning, þrif, þjálfun..."
          className={inputClass("business")}
        />
        {errors.business && <p className="mt-1 text-xs text-red-600">{errors.business}</p>}
      </div>

      {/* Has website */}
      <div>
        <label htmlFor="hasWebsite" className="block text-sm font-medium text-slate-700 mb-1.5">
          Ertu með vefsíðu? <span className="text-red-500">*</span>
        </label>
        <select
          id="hasWebsite"
          name="hasWebsite"
          value={formData.hasWebsite}
          onChange={handleChange}
          className={inputClass("hasWebsite")}
        >
          <option value="">Veldu...</option>
          <option value="nei">Nei</option>
          <option value="ja">Já</option>
          <option value="ja-laga">Já, en hana þarf að laga</option>
        </select>
        {errors.hasWebsite && <p className="mt-1 text-xs text-red-600">{errors.hasWebsite}</p>}
      </div>

      {/* Needs */}
      <div>
        <label htmlFor="needs" className="block text-sm font-medium text-slate-700 mb-1.5">
          Hvað vantar þig helst? <span className="text-red-500">*</span>
        </label>
        <select
          id="needs"
          name="needs"
          value={formData.needs}
          onChange={handleChange}
          className={inputClass("needs")}
        >
          <option value="">Veldu...</option>
          <option value="einföld-heimasida">Einfalda vefsíðu</option>
          <option value="ny-sida">Nýja síðu í stað gamallar</option>
          <option value="landing-page">Lendingarsíða</option>
          <option value="bokunarkerfi">Bókunarkerfi</option>
          <option value="netverslun">Netverslun</option>
          <option value="spjallbox">Netspjall eða spjallvélmenni</option>
          <option value="annad">Annað</option>
        </select>
        {errors.needs && <p className="mt-1 text-xs text-red-600">{errors.needs}</p>}
      </div>

      {/* Timeline */}
      <div>
        <label htmlFor="timeline" className="block text-sm font-medium text-slate-700 mb-1.5">
          Hvenær viltu helst fá síðuna tilbúna? <span className="text-red-500">*</span>
        </label>
        <select
          id="timeline"
          name="timeline"
          value={formData.timeline}
          onChange={handleChange}
          className={inputClass("timeline")}
        >
          <option value="">Veldu...</option>
          <option value="sem-fyrst">Sem fyrst</option>
          <option value="innan-manadar">Innan mánaðar</option>
          <option value="ekki-viss">Ekki viss</option>
        </select>
        {errors.timeline && <p className="mt-1 text-xs text-red-600">{errors.timeline}</p>}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1.5">
          Skilaboð
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          placeholder="Segðu okkur meira um verkefnið eða spurðu okkur um það sem þú vilt vita."
          className={`${inputClass("message")} resize-none`}
        />
      </div>

      {/* Honeypot — not visible to people, so anything in it came from a bot. */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="_gotcha">Ekki fylla út þennan reit</label>
        <input
          id="_gotcha"
          name="_gotcha"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </div>

      {formState === "error" && (
        <p className="text-sm text-red-600" role="alert">
          Ekki tókst að senda fyrirspurnina. Reyndu aftur, eða sendu okkur línu á{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="font-medium underline">
            {CONTACT_EMAIL}
          </a>
          .
        </p>
      )}

      <button
        type="submit"
        disabled={formState === "submitting"}
        className="w-full bg-blue-600 text-white font-semibold py-3.5 px-6 rounded-xl hover:bg-blue-700 transition-colors disabled:opacity-70 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
      >
        {formState === "submitting" ? "Sendum..." : "Senda fyrirspurn"}
      </button>
      <p className="text-xs text-slate-500 text-center">
        Með því að senda fyrirspurn samþykkir þú að við notum upplýsingarnar til
        að svara þér. Sjá nánar í{" "}
        <a href="/personuvernd" className="text-blue-600 hover:underline">
          persónuverndarstefnu
        </a>
        .
      </p>
    </form>
  );
}
