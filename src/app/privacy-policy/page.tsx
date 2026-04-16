import Link from 'next/link';
import { LegalPage } from '../_components/LegalPage';

export default function PrivacyPolicyOverviewPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updatedAt="Apr 16, 2026"
      sections={[
        {
          title: 'Choose your policy',
          content: (
            <>
              <p>
                We provide role-specific privacy details so you can quickly understand what data applies to your use of
                GrowthGrid.
              </p>
              <div className="grid sm:grid-cols-2 gap-3 pt-2">
                <Link
                  href="/student/privacy-policy"
                  className="card p-5 hover:border-blue-300 transition-colors"
                >
                  <p className="font-semibold text-gray-900">Student / Job Seeker</p>
                  <p className="text-gray-600 text-sm mt-1">Profile, applications, learning activity, and preferences.</p>
                </Link>
                <Link
                  href="/recruiter/privacy-policy"
                  className="card p-5 hover:border-blue-300 transition-colors"
                >
                  <p className="font-semibold text-gray-900">Recruiter / Employer</p>
                  <p className="text-gray-600 text-sm mt-1">Company info, job posts, candidate management, and outreach.</p>
                </Link>
              </div>
            </>
          ),
        },
        {
          title: 'Contact',
          content: (
            <>
              <p>
                For privacy requests (access, correction, deletion) or questions, reach out to{' '}
                <span className="font-medium">support@growthgrid.example</span>.
              </p>
              <p className="text-gray-500">
                Replace this email with your real support address before production.
              </p>
            </>
          ),
        },
      ]}
    />
  );
}

