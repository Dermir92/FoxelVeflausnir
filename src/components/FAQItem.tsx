interface FAQItemProps {
  question: string;
  answer: string;
}

export default function FAQItem({ question, answer }: FAQItemProps) {
  return (
    <details className="group overflow-hidden rounded-xl border border-slate-200 bg-white">
      <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 px-6 py-4 text-left transition-colors hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-blue-700 [&::-webkit-details-marker]:hidden">
        <span className="text-sm font-semibold text-slate-900 sm:text-base">
          {question}
        </span>
        <svg
          className="h-5 w-5 flex-shrink-0 text-blue-700 transition-transform group-open:rotate-180"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </summary>
      <div className="px-6 pb-5">
        <p className="text-sm leading-relaxed text-slate-600">{answer}</p>
      </div>
    </details>
  );
}
