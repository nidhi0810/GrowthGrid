import { LegalPage } from '../../_components/LegalPage';

export default function RecruiterPrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      audienceLabel="Recruiter / Employer"
      updatedAt="Apr 16, 2026"
      sections={[
        {
          title: 'What we collect',
          content: (
            <>
              <p>Depending on your usage, we may collect:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Account data (name, work email, password hash, role).</li>
                <li>Company details (company name, website, verification details if applicable).</li>
                <li>Job posting content (role details, requirements, location, compensation where provided).</li>
                <li>Candidate management activity (shortlists, notes, status changes).</li>
                <li>Device and usage data (IP address, browser type, pages viewed, timestamps).</li>
              </ul>
            </>
          ),
        },
        {
          title: 'How we use your data',
          content: (
            <>
              <ul className="list-disc pl-5 space-y-1">
                <li>To create and manage recruiter accounts and company profiles.</li>
                <li>To publish job posts and deliver applicants to you.</li>
                <li>To support candidate communications initiated through the platform.</li>
                <li>To prevent abuse (spam outreach, fraudulent listings) and secure the platform.</li>
                <li>To measure performance and improve matching and search.</li>
              </ul>
            </>
          ),
        },
        {
          title: 'Candidate data',
          content: (
            <>
              <p>
                When students apply to your listings or choose to share their profiles with you, you may receive candidate data.
                You must handle it responsibly and only for legitimate recruiting purposes.
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Don’t sell or share candidate data outside hiring workflows.</li>
                <li>Store and delete data in line with your organization’s policies and applicable law.</li>
                <li>Don’t request unnecessary sensitive personal information.</li>
              </ul>
            </>
          ),
        },
        {
          title: 'Sharing & service providers',
          content: (
            <>
              <p>
                We may use third-party service providers for hosting, analytics, email delivery, and customer support under
                contractual protections. We may also disclose information if required by law or to protect safety.
              </p>
            </>
          ),
        },
      ]}
    />
  );
}

