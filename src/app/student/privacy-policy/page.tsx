import { LegalPage } from '../../_components/LegalPage';

export default function StudentPrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      audienceLabel="Student / Job Seeker"
      updatedAt="Apr 16, 2026"
      sections={[
        {
          title: 'What we collect',
          content: (
            <>
              <p>Depending on what you choose to provide, we may collect:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Account data (name, email, password hash, role).</li>
                <li>Profile data (education, skills, resume/CV, portfolio links).</li>
                <li>Application activity (jobs/internships you view, save, and apply to).</li>
                <li>Messages you send to recruiters or support.</li>
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
                <li>To create and maintain your account and profile.</li>
                <li>To match you with relevant roles and learning resources.</li>
                <li>To enable applications and communicate application status.</li>
                <li>To detect abuse, spam, fraud, and to secure the platform.</li>
                <li>To improve features, analytics, and user experience.</li>
              </ul>
            </>
          ),
        },
        {
          title: 'When we share data',
          content: (
            <>
              <p>We may share limited data in these situations:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  <span className="font-medium">With recruiters</span>: when you apply or choose to share your profile, we share the
                  details needed to review your application.
                </li>
                <li>
                  <span className="font-medium">With service providers</span>: hosting, analytics, email delivery, and customer support
                  tools (under contractual protections).
                </li>
                <li>
                  <span className="font-medium">For legal reasons</span>: if required by law, court order, or to protect rights and safety.
                </li>
              </ul>
            </>
          ),
        },
        {
          title: 'Your choices',
          content: (
            <>
              <ul className="list-disc pl-5 space-y-1">
                <li>Update profile details anytime from your dashboard.</li>
                <li>Request account deletion by contacting support.</li>
                <li>Control optional marketing emails (where applicable).</li>
              </ul>
            </>
          ),
        },
        {
          title: 'Retention & security',
          content: (
            <>
              <p>
                We keep data only as long as necessary for the purposes above and to meet legal requirements. We use reasonable
                security measures (access controls, encryption in transit, monitoring), but no method is 100% secure.
              </p>
            </>
          ),
        },
      ]}
    />
  );
}

