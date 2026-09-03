interface FAQItemProps {
  question: string;
  answer: string;
  /** Fyrsta spurningin er opin svo kaflinn líti ekki út fyrir að vera tómur. */
  defaultOpen?: boolean;
}

export default function FAQItem({
  question,
  answer,
  defaultOpen = false,
}: FAQItemProps) {
  return (
    <details className="group border-b-2 border-line" open={defaultOpen}>
      <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-4 text-left font-bold text-ink transition-colors hover:text-brand-blue focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue [&::-webkit-details-marker]:hidden">
        <span className="text-sm sm:text-base">{question}</span>
        <span
          className="flex h-7 w-7 flex-shrink-0 items-center justify-center border-2 border-ink bg-brand-cyan text-ink"
          aria-hidden="true"
        >
          <svg
            className="h-4 w-4 transition-transform group-open:rotate-45"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="square" strokeWidth={3} d="M12 5v14M5 12h14" />
          </svg>
        </span>
      </summary>
      <p className="pb-5 pr-10 text-sm leading-relaxed text-copy">{answer}</p>
    </details>
  );
}
