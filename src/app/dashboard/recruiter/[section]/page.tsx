'use client';

import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
import { Briefcase, LayoutDashboard, MessageSquare, Plus, Settings, Users } from 'lucide-react';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard/recruiter' },
  { icon: Plus, label: 'Post Job', href: '/dashboard/recruiter/post-job' },
  { icon: Briefcase, label: 'Manage Jobs', href: '/dashboard/recruiter/manage-jobs' },
  { icon: Users, label: 'Applicants', href: '/dashboard/recruiter/applicants' },
  { icon: MessageSquare, label: 'Messages', href: '/dashboard/recruiter/messages' },
  { icon: Settings, label: 'Settings', href: '/dashboard/recruiter/settings' },
];

const sectionContent: Record<string, { title: string; description: string }> = {
  'post-job': { title: 'Post Job', description: 'Create new openings with role, compensation, and requirements.' },
  'manage-jobs': { title: 'Manage Jobs', description: 'Edit, pause, close, or promote your existing listings.' },
  applicants: { title: 'Applicants', description: 'Review candidates, shortlist profiles, and track hiring pipeline.' },
  messages: { title: 'Messages', description: 'Communicate with candidates and hiring team in one place.' },
  settings: { title: 'Settings', description: 'Manage recruiter account preferences and legal settings.' },
};

export default function RecruiterSectionPage() {
  const params = useParams<{ section: string }>();
  const pathname = usePathname();
  const sectionKey = params.section;
  const section = sectionContent[sectionKey];

  if (!section) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
        <div className="card p-8 text-center max-w-md">
          <h1 className="text-xl font-bold text-gray-900 mb-2">Section not found</h1>
          <Link href="/dashboard/recruiter" className="text-blue-600 hover:underline text-sm">
            Back to Recruiter Dashboard
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <aside className="hidden lg:flex w-64 bg-white border-r border-gray-200 flex-col shrink-0">
        <div className="flex items-center gap-2 px-6 py-5 border-b border-gray-100">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">G</div>
          <span className="font-bold text-gray-900">Growth<span className="text-blue-600">Grid</span></span>
        </div>
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} className={pathname === item.href ? 'sidebar-link-active w-full text-left' : 'sidebar-link w-full text-left'}>
              <item.icon className="w-5 h-5" />{item.label}
            </Link>
          ))}
        </nav>
      </aside>
      <main className="flex-1 p-6">
        <div className="card p-6">
          <h1 className="text-2xl font-bold text-gray-900">{section.title}</h1>
          <p className="text-sm text-gray-600 mt-2">{section.description}</p>
          {sectionKey === 'post-job' && (
            <div className="mt-6 grid md:grid-cols-2 gap-4">
              <input className="input-field" placeholder="Role title" />
              <input className="input-field" placeholder="Location" />
              <input className="input-field" placeholder="Compensation range" />
              <select className="input-field">
                <option>Employment Type</option>
                <option>Full-time</option>
                <option>Internship</option>
              </select>
              <textarea className="input-field md:col-span-2 h-28 resize-none" placeholder="Job description..." />
              <button className="btn-primary w-fit">Publish Job</button>
            </div>
          )}

          {sectionKey === 'manage-jobs' && (
            <div className="mt-6 space-y-3">
              {[
                { role: 'React Developer', status: 'Active', apps: 34 },
                { role: 'Product Manager', status: 'Active', apps: 21 },
                { role: 'Data Scientist', status: 'Paused', apps: 52 },
              ].map((job) => (
                <div key={job.role} className="rounded-xl border border-gray-200 p-4 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{job.role}</p>
                    <p className="text-xs text-gray-500">{job.apps} applicants</p>
                  </div>
                  <span className={`badge ${job.status === 'Active' ? 'badge-green' : 'badge-yellow'}`}>{job.status}</span>
                </div>
              ))}
            </div>
          )}

          {sectionKey === 'applicants' && (
            <div className="mt-6 grid gap-3">
              {['Aryan Mehta · Frontend', 'Neha Singh · Frontend', 'Kunal Jain · Product'].map((a) => (
                <div key={a} className="rounded-xl border border-gray-200 p-4 flex items-center justify-between">
                  <p className="text-sm text-gray-800">{a}</p>
                  <div className="flex gap-2">
                    <button className="text-xs btn-secondary px-3 py-1.5">Resume</button>
                    <button className="text-xs btn-primary px-3 py-1.5">Shortlist</button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {sectionKey === 'messages' && (
            <div className="mt-6 rounded-xl border border-gray-200">
              <div className="p-4 border-b border-gray-100">
                <p className="text-sm font-semibold text-gray-900">Candidate Messages</p>
              </div>
              <div className="p-4 space-y-3">
                <div className="bg-gray-50 rounded-lg p-3 text-sm text-gray-700">Aryan: Can we reschedule the interview to Friday?</div>
                <div className="bg-blue-50 rounded-lg p-3 text-sm text-blue-700">You: Yes, Friday 3 PM works. Sending invite.</div>
              </div>
            </div>
          )}

          {sectionKey === 'settings' && (
            <div className="mt-6 space-y-4">
              <div className="p-4 rounded-xl border border-blue-100 bg-blue-50">
                <p className="text-sm text-blue-900 font-semibold mb-2">Privacy Policy</p>
                <p className="text-sm text-blue-700 mb-3">Review how recruiter and candidate data is handled.</p>
                <div className="flex gap-3 text-sm">
                  <Link href="/recruiter/privacy-policy" className="text-blue-600 hover:underline">Recruiter Privacy Policy</Link>
                  <Link href="/privacy-policy" className="text-blue-600 hover:underline">General Privacy Overview</Link>
                </div>
              </div>
              <div className="p-4 rounded-xl border border-indigo-100 bg-indigo-50">
                <p className="text-sm text-indigo-900 font-semibold mb-2">Sponsored Courses for Hiring Partners</p>
                <p className="text-sm text-indigo-700">Enable partner-sponsored upskilling cohorts for your shortlisted candidates.</p>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

