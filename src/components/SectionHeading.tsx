interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeading({
  label,
  title,
  subtitle,
  centered = true,
}: SectionHeadingProps) {
  return (
    <div
      className={
        centered
          ? "mx-auto max-w-[45rem] text-center"
          : "max-w-[45rem]"
      }
    >
      {label && (
        <span className="block text-xs font-extrabold uppercase tracking-[0.12em] text-brand-blue sm:text-[13px]">
          {label}
        </span>
      )}
      <h2 className="mt-3 text-[clamp(1.85rem,4vw,3rem)] font-extrabold leading-[1.08] tracking-[-0.04em] text-ink">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-copy sm:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}
