import Link from 'next/link';

type LegalSection = {
  title: string;
  content: React.ReactNode;
};

export function LegalPage({
  title,
  audienceLabel,
  updatedAt,
  sections,
  showBackToHome = true,
}: {
  title: string;
  audienceLabel?: string;
  updatedAt?: string;
  sections: LegalSection[];
  showBackToHome?: boolean;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {showBackToHome && (
          <div className="mb-8">
            <Link href="/" className="text-sm font-medium text-blue-600 hover:underline">
              ← Back to Home
            </Link>
          </div>
        )}

        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-7 sm:p-10">
          <div className="mb-8">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">{title}</h1>
            <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-gray-500">
              {audienceLabel ? (
                <span className="inline-flex items-center rounded-full bg-blue-50 px-2.5 py-0.5 text-blue-700 font-semibold">
                  {audienceLabel}
                </span>
              ) : null}
              {updatedAt ? <span>Last updated: {updatedAt}</span> : null}
            </div>
            <p className="mt-4 text-sm leading-relaxed text-gray-600">
              This page explains how GrowthGrid handles your data and the rules for using the platform. If anything is unclear,
              please contact us before continuing to use the services.
            </p>
          </div>

          <div className="space-y-8">
            {sections.map((s) => (
              <section key={s.title}>
                <h2 className="text-lg font-bold text-gray-900 mb-2">{s.title}</h2>
                <div className="text-sm leading-6 text-gray-700 space-y-3">{s.content}</div>
              </section>
            ))}
          </div>

          <div className="mt-10 pt-6 border-t border-gray-100 flex flex-wrap gap-3 text-sm">
            <Link href="/terms" className="text-blue-600 hover:underline">
              Terms (overview)
            </Link>
            <span className="text-gray-300">•</span>
            <Link href="/privacy-policy" className="text-blue-600 hover:underline">
              Privacy Policy (overview)
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

