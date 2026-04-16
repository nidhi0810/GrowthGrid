import Link from 'next/link';
import { LegalPage } from '../_components/LegalPage';

export default function TermsOverviewPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      updatedAt="Apr 16, 2026"
      sections={[
        {
          title: 'Choose your terms',
          content: (
            <>
              <p>
                These terms apply to your use of GrowthGrid. Select the version that matches how you use the platform.
              </p>
              <div className="grid sm:grid-cols-2 gap-3 pt-2">
                <Link href="/student/terms" className="card p-5 hover:border-blue-300 transition-colors">
                  <p className="font-semibold text-gray-900">Student / Job Seeker</p>
                  <p className="text-gray-600 text-sm mt-1">Applying to roles, building a profile, and using learning tools.</p>
                </Link>
                <Link href="/recruiter/terms" className="card p-5 hover:border-blue-300 transition-colors">
                  <p className="font-semibold text-gray-900">Recruiter / Employer</p>
                  <p className="text-gray-600 text-sm mt-1">Posting jobs, managing applicants, and communicating with candidates.</p>
                </Link>
              </div>
            </>
          ),
        },
        {
          title: 'Important note',
          content: (
            <>
              <p>
                This is a product template and not legal advice. Replace placeholders (company name, contact email, jurisdiction)
                and have counsel review before launch.
              </p>
            </>
          ),
        },
      ]}
    />
  );
}

