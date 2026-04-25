interface PackageCardProps {
  title: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  badge?: string;
}

export default function PackageCard({
  title,
  description,
  features,
  highlighted = false,
  badge,
}: PackageCardProps) {
  return (
    <div
      className={`relative flex flex-col rounded-2xl border p-7 ${
        highlighted
          ? "bg-blue-600 border-blue-600 text-white shadow-xl shadow-blue-200"
          : "bg-white border-slate-100 shadow-sm"
      }`}
    >
      {badge && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span className="inline-block bg-blue-500 text-white text-xs font-semibold px-4 py-1.5 rounded-full">
            {badge}
          </span>
        </div>
      )}
      <div>
        <h3
          className={`text-xl font-bold ${
            highlighted ? "text-white" : "text-slate-900"
          }`}
        >
          {title}
        </h3>
        <p
          className={`mt-2 text-sm leading-relaxed ${
            highlighted ? "text-blue-100" : "text-slate-600"
          }`}
        >
          {description}
        </p>
      </div>

      <ul className="mt-6 flex-1 space-y-2.5">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5">
            <svg
              className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                highlighted ? "text-blue-200" : "text-blue-600"
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span
              className={`text-sm ${
                highlighted ? "text-blue-50" : "text-slate-700"
              }`}
            >
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-8">
        <a
          href="#samband"
          className={`block text-center font-semibold px-5 py-3 rounded-xl transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
            highlighted
              ? "bg-white text-blue-600 hover:bg-blue-50 focus-visible:ring-white focus-visible:ring-offset-blue-600"
              : "bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-600"
          }`}
        >
          Fá verðtilboð
        </a>
      </div>
    </div>
  );
}
