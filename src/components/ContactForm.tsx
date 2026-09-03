"use client";

import { useState } from "react";
import { CONTACT_EMAIL } from "@/lib/site";

const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type FormState = "idle" | "submitting" | "success" | "error";

interface FormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

const initialData: FormData = {
  name: "",
  phone: "",
  email: "",
  message: "",
};

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>(initialData);
  const [formState, setFormState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [honeypot, setHoneypot] = useState("");

  function validate(): boolean {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) newErrors.name = "Nafn vantar";
    if (!formData.email.trim()) {
      newErrors.email = "Netfang vantar";
    } else if (!EMAIL_PATTERN.test(formData.email)) {
      newErrors.email = "Netfangið lítur ekki rétt út";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Segðu okkur stuttlega frá verkefninu.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (!validate()) return;

    if (!FORMSPREE_ID) {
      console.error(
        "NEXT_PUBLIC_FORMSPREE_ID is not set. The inquiry was NOT sent."
      );
      setFormState("error");
      return;
    }

    setFormState("submitting");

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ ...formData, _gotcha: honeypot }),
      });

      if (!response.ok) {
        throw new Error(`Formspree responded ${response.status}`);
      }

      setFormState("success");
    } catch (error) {
      console.error("Contact form submission failed:", error);
      setFormState("error");
    }
  }

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));

    if (errors[name as keyof FormData]) {
      setErrors((previous) => ({ ...previous, [name]: undefined }));
    }
  }

  function resetForm() {
    setFormState("idle");
    setFormData(initialData);
    setErrors({});
  }

  if (formState === "success") {
    return (
      <div className="px-4 py-16 text-center" role="status">
        <div className="hs-shadow mx-auto mb-5 flex h-16 w-16 items-center justify-center bg-brand-cyan text-ink">
          <svg
            className="h-8 w-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-2xl font-extrabold tracking-tight text-ink">
          Takk fyrir fyrirspurnina.
        </h3>
        <p className="mx-auto mt-3 max-w-md text-base text-copy">
          Við höfum móttekið skilaboðin og svörum eins fljótt og auðið er.
        </p>
        <button
          type="button"
          onClick={resetForm}
          className="mt-6 inline-flex min-h-11 items-center rounded-sm px-3 text-sm font-bold text-brand-blue underline-offset-4 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
        >
          Senda aðra fyrirspurn
        </button>
      </div>
    );
  }

  const inputClass = (field: keyof FormData) =>
    `w-full min-h-12 border-2 bg-paper px-3.5 py-3 text-sm text-ink placeholder-copy/60 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-1 ${
      errors[field]
        ? "border-red-600 bg-red-50"
        : "border-line hover:border-copy"
    }`;

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div>
        <label
          htmlFor="name"
          className="mb-2 block text-[13px] font-bold text-ink"
        >
          Nafn{" "}
          <span className="text-brand-orange" aria-hidden="true">
            *
          </span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          required
          value={formData.name}
          onChange={handleChange}
          placeholder="Jón Jónsson"
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
          className={inputClass("name")}
        />
        {errors.name ? (
          <p id="name-error" className="mt-1.5 text-sm font-semibold text-red-700">
            {errors.name}
          </p>
        ) : null}
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="phone"
            className="mb-2 block text-[13px] font-bold text-ink"
          >
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
          <label
            htmlFor="email"
            className="mb-2 block text-[13px] font-bold text-ink"
          >
            Netfang{" "}
            <span className="text-brand-orange" aria-hidden="true">
              *
            </span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="jon@daemi.is"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={inputClass("email")}
          />
          {errors.email ? (
            <p id="email-error" className="mt-1.5 text-sm font-semibold text-red-700">
              {errors.email}
            </p>
          ) : null}
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-[13px] font-bold text-ink"
        >
          Segðu okkur stuttlega frá verkefninu{" "}
          <span className="text-brand-orange" aria-hidden="true">
            *
          </span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          value={formData.message}
          onChange={handleChange}
          placeholder="T.d. „Ég er pípari á höfuðborgarsvæðinu og vantar einfalda síðu sem kynnir þjónustuna og sýnir fyrri verk.“"
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={`${inputClass("message")} resize-y`}
        />
        {errors.message ? (
          <p id="message-error" className="mt-1.5 text-sm font-semibold text-red-700">
            {errors.message}
          </p>
        ) : null}
      </div>

      <div className="hidden" aria-hidden="true">
        <label htmlFor="_gotcha">Ekki fylla út þennan reit</label>
        <input
          id="_gotcha"
          name="_gotcha"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(event) => setHoneypot(event.target.value)}
        />
      </div>

      {formState === "error" ? (
        <p className="border-2 border-red-600 bg-red-50 px-4 py-3 text-sm text-red-800" role="alert">
          Ekki tókst að senda fyrirspurnina. Prófaðu aftur eða sendu okkur línu
          á{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="inline-flex min-h-11 items-center font-medium underline"
          >
            {CONTACT_EMAIL}
          </a>
          .
        </p>
      ) : null}

      <button
        type="submit"
        disabled={formState === "submitting"}
        className="hs-shadow flex min-h-12 w-full items-center justify-center rounded-lg bg-brand-orange px-6 font-bold text-white transition-transform hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_var(--color-ink)] disabled:cursor-not-allowed disabled:opacity-70 focus:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2"
      >
        {formState === "submitting" ? "Sendi..." : "Fá verðtilboð"}
      </button>

      <p className="text-center text-xs leading-relaxed text-copy">
        Við notum upplýsingarnar aðeins til að svara fyrirspurninni. Nánar í{" "}
        <a
          href="/personuvernd"
          className="inline-flex min-h-11 items-center font-semibold text-brand-blue underline-offset-2 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
        >
          persónuverndarstefnunni
        </a>
        .
      </p>
    </form>
  );
}
