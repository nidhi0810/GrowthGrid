import { LegalPage } from '../../_components/LegalPage';

export default function StudentTermsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      audienceLabel="Student / Job Seeker"
      updatedAt="Apr 16, 2026"
      sections={[
        {
          title: 'Using the platform',
          content: (
            <>
              <ul className="list-disc pl-5 space-y-1">
                <li>You must provide accurate information and keep your profile reasonably up to date.</li>
                <li>Don’t impersonate others or misrepresent skills, education, or experience.</li>
                <li>Don’t attempt to scrape, reverse engineer, or disrupt the service.</li>
              </ul>
            </>
          ),
        },
        {
          title: 'Applications & communications',
          content: (
            <>
              <p>
                When you apply to a role, your application materials may be shared with the recruiter/employer for evaluation.
                Recruiters are responsible for their own hiring decisions and communications.
              </p>
            </>
          ),
        },
        {
          title: 'Content you provide',
          content: (
            <>
              <p>
                You retain ownership of your resume, portfolio, and other content you upload. You grant GrowthGrid a limited license
                to host, display, and process that content solely to operate and improve the services.
              </p>
              <p>You are responsible for ensuring you have rights to upload any content (including third-party materials).</p>
            </>
          ),
        },
        {
          title: 'Safety & prohibited conduct',
          content: (
            <>
              <ul className="list-disc pl-5 space-y-1">
                <li>No harassment, hate speech, or abusive messages.</li>
                <li>No spam, scams, or attempts to move users to unsafe payment channels.</li>
                <li>No posting sensitive information you don’t want shared with recruiters.</li>
              </ul>
            </>
          ),
        },
        {
          title: 'Termination',
          content: (
            <>
              <p>
                We may suspend or terminate accounts that violate these terms or pose risk to other users or the platform. You may
                stop using the service at any time.
              </p>
            </>
          ),
        },
      ]}
    />
  );
}

