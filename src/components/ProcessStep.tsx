interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  isLast?: boolean;
}

export default function ProcessStep({
  number,
  title,
  description,
  isLast = false,
}: ProcessStepProps) {
  return (
    <div className="relative flex flex-col sm:flex-row gap-4 sm:gap-6">
      <div className="flex flex-col items-center">
        <div className="w-10 h-10 rounded-full bg-blue-600 text-white font-bold text-sm flex items-center justify-center flex-shrink-0 z-10">
          {number}
        </div>
        {!isLast && (
          <div className="flex-1 w-px bg-blue-100 mt-2 hidden sm:block" style={{ minHeight: "2rem" }} />
        )}
      </div>
      <div className="flex-1 pb-8 sm:pb-10">
        <h3 className="font-semibold text-slate-900 text-base">{title}</h3>
        <p className="mt-1.5 text-slate-600 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
