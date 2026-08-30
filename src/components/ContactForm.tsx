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
      newErrors.email = "Netfang lítur ekki rétt út";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Segðu okkur stuttlega frá verkefninu";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (!validate()) return;

    if (!FORMSPREE_ID) {
      console.error(
        "NEXT_PUBLIC_FORMSPREE_ID is not set — the inquiry was NOT sent."
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
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-700">
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
        <h3 className="text-2xl font-bold text-slate-900">
          Takk fyrir fyrirspurnina!
        </h3>
        <p className="mx-auto mt-3 max-w-md text-base text-slate-600">
          Við höfum tekið við skilaboðunum og svörum eins fljótt og við getum.
        </p>
        <button
          type="button"
          onClick={resetForm}
          className="mt-6 inline-flex min-h-11 items-center rounded-lg px-3 text-sm font-medium text-blue-700 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-700"
        >
          Senda aðra fyrirspurn
        </button>
      </div>
    );
  }

  const inputClass = (field: keyof FormData) =>
    `w-full min-h-12 rounded-xl border bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-500 transition-colors focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-700 ${
      errors[field]
        ? "border-red-400 bg-red-50"
        : "border-slate-300 hover:border-slate-400"
    }`;

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div>
        <label
          htmlFor="name"
          className="mb-1.5 block text-sm font-medium text-slate-700"
        >
          Nafn{" "}
          <span className="text-red-700" aria-hidden="true">
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
          <p id="name-error" className="mt-1 text-sm text-red-700">
            {errors.name}
          </p>
        ) : null}
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="phone"
            className="mb-1.5 block text-sm font-medium text-slate-700"
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
            className="mb-1.5 block text-sm font-medium text-slate-700"
          >
            Netfang{" "}
            <span className="text-red-700" aria-hidden="true">
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
            <p id="email-error" className="mt-1 text-sm text-red-700">
              {errors.email}
            </p>
          ) : null}
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-1.5 block text-sm font-medium text-slate-700"
        >
          Segðu okkur stuttlega hvað þú gerir og hvað þig vantar{" "}
          <span className="text-red-700" aria-hidden="true">
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
          placeholder="T.d. „Ég er pípari á höfuðborgarsvæðinu og vil einfalda síðu sem sýnir þjónustuna og verkin mín.“"
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={`${inputClass("message")} resize-y`}
        />
        {errors.message ? (
          <p id="message-error" className="mt-1 text-sm text-red-700">
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
        <p className="text-sm text-red-700" role="alert">
          Ekki tókst að senda fyrirspurnina. Reyndu aftur, eða sendu okkur línu
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
        className="flex min-h-12 w-full items-center justify-center rounded-xl bg-blue-700 px-6 py-3.5 font-semibold text-white transition-colors hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-70 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2"
      >
        {formState === "submitting" ? "Sendum…" : "Fá fast verð"}
      </button>

      <p className="text-center text-xs leading-relaxed text-slate-600">
        Við notum upplýsingarnar aðeins til að svara fyrirspurninni. Nánar í{" "}
        <a
          href="/personuvernd"
          className="inline-flex min-h-11 items-center text-blue-700 underline-offset-2 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-700"
        >
          persónuverndarstefnu
        </a>
        .
      </p>
    </form>
  );
}
