import { LegalPage } from '../../_components/LegalPage';

export default function RecruiterTermsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      audienceLabel="Recruiter / Employer"
      updatedAt="Apr 16, 2026"
      sections={[
        {
          title: 'Job postings & company information',
          content: (
            <>
              <ul className="list-disc pl-5 space-y-1">
                <li>Provide accurate company information and truthful job descriptions.</li>
                <li>Don’t post discriminatory, misleading, or fraudulent listings.</li>
                <li>You are responsible for compliance with employment and labor laws applicable to your hiring.</li>
              </ul>
            </>
          ),
        },
        {
          title: 'Candidate communications',
          content: (
            <>
              <p>
                You may contact candidates through the platform for legitimate recruiting purposes only. Don’t spam candidates or
                pressure them into off-platform payments or unsafe links.
              </p>
            </>
          ),
        },
        {
          title: 'Candidate data responsibilities',
          content: (
            <>
              <ul className="list-disc pl-5 space-y-1">
                <li>Use candidate data only for evaluating and progressing candidates for roles.</li>
                <li>Limit internal access to people involved in hiring.</li>
                <li>Delete candidate data when it’s no longer needed, subject to your legal obligations.</li>
              </ul>
            </>
          ),
        },
        {
          title: 'Prohibited conduct',
          content: (
            <>
              <ul className="list-disc pl-5 space-y-1">
                <li>No scraping, bulk exporting, or automated collection of profiles.</li>
                <li>No phishing, malware, or attempts to bypass security controls.</li>
                <li>No harassment, hate speech, or abusive behavior toward candidates.</li>
              </ul>
            </>
          ),
        },
        {
          title: 'Suspension & termination',
          content: (
            <>
              <p>
                We may suspend or terminate recruiter accounts that violate these terms, pose safety risk, or post fraudulent jobs.
                Where appropriate, we may remove job posts or restrict messaging.
              </p>
            </>
          ),
        },
      ]}
    />
  );
}

