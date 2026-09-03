interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
}

export default function ProcessStep({
  number,
  title,
  description,
}: ProcessStepProps) {
  return (
    <article className="relative pt-[4.5rem]">
      <span
        className="hs-shadow-lg absolute left-0 top-0 grid h-12 w-12 place-items-center bg-brand-orange text-lg font-black text-white"
        aria-hidden="true"
      >
        {number}
      </span>
      <h3 className="text-lg font-extrabold tracking-tight text-ink">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-copy">{description}</p>
    </article>
  );
}
