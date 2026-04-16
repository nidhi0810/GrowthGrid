'use client';

import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
import { BookmarkCheck, Briefcase, FileText, LayoutDashboard, MessageSquare, Settings, User } from 'lucide-react';
import { usePremium } from '../_hooks/usePremium';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard/student' },
  { icon: Briefcase, label: 'Browse Jobs', href: '/dashboard/student/browse-jobs' },
  { icon: FileText, label: 'My Applications', href: '/dashboard/student/my-applications' },
  { icon: BookmarkCheck, label: 'Saved Jobs', href: '/dashboard/student/saved-jobs' },
  { icon: Briefcase, label: 'Courses', href: '/dashboard/student/courses' },
  { icon: User, label: 'Profile', href: '/dashboard/student/profile' },
  { icon: MessageSquare, label: 'Feedback & Support', href: '/dashboard/student/feedback-support' },
  { icon: Settings, label: 'Settings', href: '/dashboard/student/settings' },
];

const sectionContent: Record<string, { title: string; description: string }> = {
  'browse-jobs': { title: 'Browse Jobs', description: 'Search and filter opportunities based on your skills and preferences.' },
  'my-applications': { title: 'My Applications', description: 'Track statuses, interview updates, and recruiter feedback.' },
  'saved-jobs': { title: 'Saved Jobs', description: 'Your bookmarked jobs are listed here for quick access.' },
  courses: { title: 'Courses', description: 'Skill up with curated and sponsored learning paths.' },
  'ai-resume-review': { title: 'AI Resume Analysis', description: 'Analyze your resume quality and improve hiring visibility.' },
  'priority-applications': { title: 'Priority Application Badge', description: 'Understand and use priority visibility for applications.' },
  'job-match-insights': { title: 'Advanced Job Match Insights', description: 'See match analytics and missing skills for your target jobs.' },
  'mock-interview': { title: 'Mock Interview Practice', description: 'Practice interview questions and get instant feedback insights.' },
  'salary-benchmarks': { title: 'Salary Benchmark Reports', description: 'Explore market compensation insights by role and experience.' },
  'recruiter-outreach': { title: 'Direct Recruiter Outreach', description: 'Message recruiters directly using templates and track responses.' },
  profile: { title: 'Profile', description: 'Edit education, skills, projects, and resume to improve matches.' },
  'feedback-support': { title: 'Feedback & Support', description: 'Submit issues, track resolution progress, and get support updates.' },
  settings: { title: 'Settings', description: 'Manage account preferences and legal settings.' },
};

export default function StudentSectionPage() {
  const params = useParams<{ section: string }>();
  const pathname = usePathname();
  const { isPremium, setIsPremium } = usePremium();
  const sectionKey = params.section;
  const section = sectionContent[sectionKey];

  if (!section) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
        <div className="card p-8 text-center max-w-md">
          <h1 className="text-xl font-bold text-gray-900 mb-2">Section not found</h1>
          <Link href="/dashboard/student" className="text-blue-600 hover:underline text-sm">
            Back to Student Dashboard
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
          {sectionKey === 'browse-jobs' && (
            <div className="mt-6 space-y-5">
              <div className="rounded-xl border border-gray-200 bg-white p-4">
                <div className="grid lg:grid-cols-5 gap-3">
                  <input className="input-field lg:col-span-2" placeholder="Search jobs, companies, skills" />
                  <select className="input-field">
                    <option>Location</option>
                    <option>Bangalore</option>
                    <option>Remote</option>
                    <option>Hyderabad</option>
                  </select>
                  <select className="input-field">
                    <option>Experience level</option>
                    <option>Internship</option>
                    <option>0-2 years</option>
                    <option>3-5 years</option>
                  </select>
                  <select className="input-field">
                    <option>Salary range</option>
                    <option>₹5-10 LPA</option>
                    <option>₹10-20 LPA</option>
                    <option>₹20+ LPA</option>
                  </select>
                </div>
                <div className="mt-3 flex items-center gap-2">
                  <span className="text-xs text-gray-500">Work mode:</span>
                  <button className="text-xs px-3 py-1 rounded-full bg-blue-600 text-white">Remote</button>
                  <button className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-700">Onsite</button>
                </div>
              </div>

              <div className="rounded-xl bg-blue-600 text-white p-4 flex items-center justify-between">
                <div>
                  <p className="font-semibold">Top companies hiring now</p>
                  <p className="text-xs text-blue-100">Ad banner placement</p>
                </div>
                <button className="text-xs bg-white text-blue-700 px-3 py-1.5 rounded-lg font-semibold">View Openings</button>
              </div>

              <div className="grid lg:grid-cols-3 gap-4">
                <div className="lg:col-span-2 space-y-3">
                  <h3 className="text-sm font-bold text-gray-900">Sponsored Jobs</h3>
                  {[
                    {
                      title: 'Senior Frontend Engineer',
                      company: 'TechFlow',
                      location: 'Bangalore',
                      salary: '₹32-45 LPA',
                      tags: ['Full-time', 'Remote'],
                    },
                    {
                      title: 'Product Analyst',
                      company: 'CRED',
                      location: 'Bangalore',
                      salary: '₹18-24 LPA',
                      tags: ['Full-time', 'Onsite'],
                    },
                    {
                      title: 'Data Scientist',
                      company: 'DataMetrics',
                      location: 'Hyderabad',
                      salary: '₹28-40 LPA',
                      tags: ['Full-time', 'Hybrid'],
                    },
                  ].map((job) => (
                    <div key={job.title} className="rounded-xl border border-gray-200 bg-white p-4">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-700 font-bold flex items-center justify-center">
                            {job.company.charAt(0)}
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <p className="text-sm font-semibold text-gray-900">{job.title}</p>
                              <span className="badge badge-yellow">Ad</span>
                            </div>
                            <p className="text-xs text-gray-600 mt-0.5">{job.company}</p>
                            <p className="text-xs text-gray-500 mt-1">{job.location} · {job.salary}</p>
                            <div className="flex gap-2 mt-2">
                              {job.tags.map((tag) => (
                                <span key={tag} className="badge badge-blue">{tag}</span>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 shrink-0">
                          <button className="btn-primary text-xs px-3 py-1.5">Apply Now</button>
                          <button className="btn-secondary text-xs px-3 py-1.5">Save</button>
                        </div>
                      </div>
                    </div>
                  ))}
                  <h3 className="text-sm font-bold text-gray-900 pt-2">Recommended Jobs</h3>
                  {[
                    {
                      title: 'Backend Engineer',
                      company: 'Razorpay',
                      location: 'Remote',
                      salary: '₹24-34 LPA',
                      tags: ['Full-time', 'Remote'],
                    },
                    {
                      title: 'ML Engineer',
                      company: 'NexAI',
                      location: 'Bangalore',
                      salary: '₹26-38 LPA',
                      tags: ['Full-time', 'Onsite'],
                    },
                    {
                      title: 'DevOps Engineer',
                      company: 'CloudGrid',
                      location: 'Pune',
                      salary: '₹20-30 LPA',
                      tags: ['Full-time', 'Hybrid'],
                    },
                    {
                      title: 'QA Automation Engineer',
                      company: 'TestCraft',
                      location: 'Chennai',
                      salary: '₹14-22 LPA',
                      tags: ['Full-time', 'Onsite'],
                    },
                    {
                      title: 'Full Stack Developer',
                      company: 'GrowthLabs',
                      location: 'Remote',
                      salary: '₹18-27 LPA',
                      tags: ['Full-time', 'Remote'],
                    },
                  ].map((job) => (
                    <div key={job.title} className="rounded-xl border border-gray-200 bg-white p-4">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-700 font-bold flex items-center justify-center">
                            {job.company.charAt(0)}
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <p className="text-sm font-semibold text-gray-900">{job.title}</p>
                            </div>
                            <p className="text-xs text-gray-600 mt-0.5">{job.company}</p>
                            <p className="text-xs text-gray-500 mt-1">{job.location} · {job.salary}</p>
                            <div className="flex gap-2 mt-2">
                              {job.tags.map((tag) => (
                                <span key={tag} className="badge badge-blue">{tag}</span>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 shrink-0">
                          <button className="btn-primary text-xs px-3 py-1.5">Apply Now</button>
                          <button className="btn-secondary text-xs px-3 py-1.5">Save</button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-4 h-fit">
                  <p className="text-sm font-bold text-gray-900">Job Details</p>
                  <p className="text-xs text-gray-600 mt-1">Senior Frontend Engineer · TechFlow</p>
                  <div className="mt-4 space-y-3 text-sm text-gray-700">
                    <div>
                      <p className="font-semibold text-gray-900">Job Description</p>
                      <p className="text-xs mt-1">Build responsive product experiences, optimize performance, and collaborate across product/design.</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Requirements</p>
                      <ul className="list-disc pl-5 text-xs mt-1 space-y-1">
                        <li>3+ years React and TypeScript</li>
                        <li>Strong frontend architecture skills</li>
                        <li>API integration and testing</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Responsibilities</p>
                      <ul className="list-disc pl-5 text-xs mt-1 space-y-1">
                        <li>Ship reusable UI components</li>
                        <li>Work with backend and product teams</li>
                        <li>Improve app quality and performance</li>
                      </ul>
                    </div>
                  </div>
                  <button className="mt-4 w-full btn-primary text-sm">Apply</button>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-bold text-gray-900 mb-3">Premium Features</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className={`rounded-xl border p-4 ${isPremium ? 'border-green-200 bg-green-50' : 'border-gray-200 bg-gray-100'}`}>
                    <p className="text-sm font-semibold text-gray-900">Early Access Jobs</p>
                    <p className="text-xs mt-1 text-gray-600">{isPremium ? 'Unlocked for your plan' : 'Upgrade to Premium to unlock'}</p>
                  </div>
                  <div className={`rounded-xl border p-4 ${isPremium ? 'border-green-200 bg-green-50' : 'border-gray-200 bg-gray-100'}`}>
                    <p className="text-sm font-semibold text-gray-900">AI Recommended Jobs</p>
                    <p className="text-xs mt-1 text-gray-600">{isPremium ? 'Unlocked for your plan' : 'Upgrade to Premium to unlock'}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {sectionKey === 'my-applications' && (
            <div className="mt-6 space-y-4">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-100">
                      <th className="text-left text-xs font-semibold text-gray-500 pb-3">Company</th>
                      <th className="text-left text-xs font-semibold text-gray-500 pb-3">Role</th>
                      <th className="text-left text-xs font-semibold text-gray-500 pb-3">Status</th>
                      <th className="text-left text-xs font-semibold text-gray-500 pb-3">Date</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {[
                      { c: 'TechFlow', r: 'Frontend Developer', s: 'Applied', d: '10 Apr' },
                      { c: 'DataMetrics', r: 'Data Analyst', s: 'Interviewing', d: '8 Apr' },
                      { c: 'BrandBoost', r: 'Marketing Intern', s: 'Rejected', d: '6 Apr' },
                    ].map((row) => (
                      <tr key={row.c + row.r}>
                        <td className="py-3 text-sm text-gray-900">{row.c}</td>
                        <td className="py-3 text-sm text-gray-700">{row.r}</td>
                        <td className="py-3 text-sm">
                          <span className={`badge ${row.s === 'Applied' ? 'badge-yellow' : row.s === 'Interviewing' ? 'badge-blue' : 'badge-red'}`}>
                            {row.s}
                          </span>
                        </td>
                        <td className="py-3 text-sm text-gray-500">{row.d}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {isPremium ? (
                <div className="rounded-xl border border-green-200 bg-green-50 p-4">
                  <p className="text-sm font-semibold text-green-900">Premium Insights</p>
                  <p className="text-sm text-green-800 mt-2">Application success rate: 68%</p>
                  <p className="text-sm text-green-800">Resume match score: 84%</p>
                </div>
              ) : (
                <div className="rounded-xl border border-orange-200 bg-orange-50 p-4">
                  <p className="text-sm font-semibold text-orange-900">You have 2 applications left this month</p>
                  <button onClick={() => setIsPremium(true)} className="mt-3 btn-primary text-sm px-4 py-2">Upgrade to Premium</button>
                </div>
              )}
            </div>
          )}

          {sectionKey === 'saved-jobs' && (
            <div className="mt-6 space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { title: 'Backend Intern', company: 'Postman', salary: '₹35K/mo' },
                  { title: 'SDE-1', company: 'Swiggy', salary: '₹20-28 LPA' },
                  { title: 'Product Analyst', company: 'Groww', salary: '₹14-20 LPA' },
                  { title: 'DevOps Engineer', company: 'Zeta', salary: '₹18-25 LPA' },
                ].map((item) => (
                  <div key={item.title + item.company} className="rounded-xl border border-gray-200 p-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-sm font-semibold text-gray-900">{item.title}</p>
                        <p className="text-xs text-gray-600 mt-1">{item.company}</p>
                        <p className="text-xs text-green-700 mt-1">{item.salary}</p>
                      </div>
                      <button className="text-sm text-blue-600">★</button>
                    </div>
                    <button className="mt-3 btn-primary text-xs px-3 py-1.5">Apply</button>
                  </div>
                ))}
              </div>
              {isPremium ? (
                <div className="rounded-xl border border-green-200 bg-green-50 p-4">
                  <p className="text-sm font-semibold text-green-900">Similar Jobs You May Like</p>
                  <p className="text-xs text-green-800 mt-1">AI matched: Senior React Developer, Product Ops Analyst, Growth Intern.</p>
                </div>
              ) : (
                <div className="rounded-xl border border-gray-200 bg-gray-100 p-4">
                  <p className="text-sm font-semibold text-gray-700">Upgrade to unlock smart recommendations</p>
                </div>
              )}
            </div>
          )}

          {sectionKey === 'courses' && (
            <div className="mt-6 space-y-5">
              <div>
                <h3 className="text-sm font-bold text-gray-900 mb-3">Sponsored Courses</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    { title: 'Full Stack Pro', partner: 'CodeCraft' },
                    { title: 'Data Analytics FastTrack', partner: 'SkillBridge' },
                    { title: 'UI/UX Career Sprint', partner: 'DesignEdge' },
                  ].map((course) => (
                    <div key={course.title} className="rounded-xl border-2 border-yellow-200 bg-yellow-50 p-4">
                      <span className="badge badge-yellow">Sponsored</span>
                      <p className="text-sm font-semibold text-gray-900 mt-2">{course.title}</p>
                      <p className="text-xs text-gray-600 mt-1">{course.partner}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-bold text-gray-900 mb-3">Recommended Courses</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    { title: 'Cloud DevOps Essentials', partner: 'CloudMentor' },
                    { title: 'Product Management 101', partner: 'ProdSchool' },
                    { title: 'System Design Fundamentals', partner: 'ScaleAcademy' },
                    { title: 'Java DSA Masterclass', partner: 'AlgoVerse' },
                    { title: 'GenAI for Developers', partner: 'AIBridge' },
                    { title: 'React Performance Tuning', partner: 'FrontendPlus' },
                    { title: 'SQL Optimization Pro', partner: 'DataForge' },
                    { title: 'API Design & Security', partner: 'BackendCraft' },
                  ].map((course) => (
                    <div key={course.title} className="rounded-xl border border-gray-200 bg-white p-4">
                      <p className="text-sm font-semibold text-gray-900 mt-2">{course.title}</p>
                      <p className="text-xs text-gray-600 mt-1">{course.partner}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-xl bg-indigo-600 text-white p-4">
                <p className="font-semibold">Banner Ad Placement</p>
                <p className="text-xs text-indigo-100 mt-1">Career accelerator partners now offering placement guarantees.</p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="rounded-xl border border-gray-200 p-4">
                  <p className="text-sm font-semibold text-gray-900">System Design Mastery</p>
                  <p className="text-xs text-gray-500 mt-1">Free course</p>
                </div>
                <div className={`rounded-xl border p-4 ${isPremium ? 'border-green-200 bg-green-50' : 'border-gray-200 bg-gray-100'}`}>
                  <p className="text-sm font-semibold text-gray-900">Advanced Interview Coaching</p>
                  <p className="text-xs mt-1 text-gray-600">{isPremium ? 'Unlocked for premium plan' : 'Premium locked course'}</p>
                  {!isPremium && <button onClick={() => setIsPremium(true)} className="mt-3 btn-primary text-xs px-3 py-1.5">Unlock with Premium</button>}
                </div>
              </div>
            </div>
          )}

          {sectionKey === 'profile' && (
            <div className="mt-6 space-y-4">
              <div className="rounded-xl border border-gray-200 p-5 bg-white flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-xl">R</div>
                  <div>
                    <p className="text-lg font-bold text-gray-900">Rahul Sharma</p>
                    <p className="text-sm text-gray-600">Aspiring Software Engineer</p>
                    {isPremium && <span className="badge badge-green mt-2">Premium User</span>}
                  </div>
                </div>
                <button className="btn-secondary text-sm px-4 py-2">Edit</button>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="rounded-xl border border-gray-200 p-4 bg-white">
                  <p className="text-sm font-semibold text-gray-900">Resume</p>
                  <div className="mt-3 flex gap-2">
                    <button className="btn-secondary text-xs px-3 py-1.5">Upload Resume</button>
                    <button className="btn-primary text-xs px-3 py-1.5">Download Resume</button>
                  </div>
                </div>
                <div className="rounded-xl border border-gray-200 p-4 bg-white">
                  <p className="text-sm font-semibold text-gray-900">Referral Tracking</p>
                  <p className="text-xs text-gray-600 mt-1">Total referrals: 12 users</p>
                  <p className="text-xs text-green-700 mt-2">Earnings: ₹2400</p>
                  <button className="mt-3 text-xs btn-secondary px-3 py-1.5">Invite Friends</button>
                </div>
              </div>

              <div className="rounded-xl border border-gray-200 p-4 bg-white">
                <p className="text-sm font-semibold text-gray-900 mb-2">Skills</p>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Python', 'SQL', 'TypeScript', 'Node.js'].map((skill) => (
                    <span key={skill} className="badge badge-blue">{skill}</span>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="rounded-xl border border-gray-200 p-4 bg-white">
                  <p className="text-sm font-semibold text-gray-900">Education</p>
                  <p className="text-xs text-gray-600 mt-2">B.Tech CSE · ABC University</p>
                </div>
                <div className="rounded-xl border border-gray-200 p-4 bg-white">
                  <p className="text-sm font-semibold text-gray-900">Experience</p>
                  <p className="text-xs text-gray-600 mt-2">Frontend Intern · 6 months</p>
                </div>
                <div className="rounded-xl border border-gray-200 p-4 bg-white">
                  <p className="text-sm font-semibold text-gray-900">Certifications</p>
                  <p className="text-xs text-gray-600 mt-2">React Advanced, SQL for Analysts</p>
                </div>
              </div>
            </div>
          )}

          {sectionKey === 'settings' && (
            <div className="mt-6 space-y-4">
              <div className="p-4 rounded-xl border border-green-100 bg-green-50">
                <p className="text-sm text-green-900 font-semibold mb-2">Subscription Management</p>
                <p className="text-sm text-green-700">Plan details: {isPremium ? 'Premium' : 'Free'}</p>
                <button onClick={() => setIsPremium(!isPremium)} className="mt-3 btn-primary text-sm px-4 py-2">
                  {isPremium ? 'Cancel Subscription' : 'Subscribe'}
                </button>
              </div>
              <div className="p-4 rounded-xl border border-purple-100 bg-purple-50">
                <p className="text-sm text-purple-900 font-semibold mb-2">Payment UI (Mock)</p>
                <div className="rounded-lg bg-white border border-purple-200 p-4">
                  <p className="text-xs text-gray-500">Razorpay-style Checkout</p>
                  <p className="text-lg font-bold text-gray-900 mt-1">₹499/month plan</p>
                  <p className="text-xs text-gray-600 mt-1">Includes premium jobs, AI insights, and advanced recommendations.</p>
                  <button onClick={() => setIsPremium(true)} className="mt-3 bg-purple-600 text-white text-xs px-3 py-1.5 rounded-lg">Pay & Subscribe</button>
                </div>
              </div>
              <div className="p-4 rounded-xl border border-blue-100 bg-blue-50">
                <p className="text-sm text-blue-900 font-semibold mb-2">Privacy Policy</p>
                <p className="text-sm text-blue-700 mb-3">Review how your data is used and shared.</p>
                <div className="flex gap-3 text-sm">
                  <Link href="/student/privacy-policy" className="text-blue-600 hover:underline">Student Privacy Policy</Link>
                  <Link href="/privacy-policy" className="text-blue-600 hover:underline">General Privacy Overview</Link>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl border border-gray-200 bg-white">
                  <p className="text-sm font-semibold text-gray-900">Account Info</p>
                  <div className="mt-3 space-y-2">
                    <input className="input-field text-sm" value="rahul@example.com" readOnly />
                    <button className="btn-secondary text-xs px-3 py-1.5">Change Password</button>
                  </div>
                </div>
                <div className="p-4 rounded-xl border border-gray-200 bg-white">
                  <p className="text-sm font-semibold text-gray-900">Notifications</p>
                  <div className="mt-3 space-y-2 text-sm">
                    <label className="flex items-center justify-between">
                      <span>Email alerts</span>
                      <input type="checkbox" defaultChecked />
                    </label>
                    <label className="flex items-center justify-between">
                      <span>Job alerts</span>
                      <input type="checkbox" defaultChecked />
                    </label>
                  </div>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl border border-gray-200 bg-white">
                  <p className="text-sm font-semibold text-gray-900">Privacy Settings</p>
                  <div className="mt-3 space-y-2 text-sm">
                    <label className="flex items-center justify-between">
                      <span>Profile visibility</span>
                      <select className="border border-gray-300 rounded-lg px-2 py-1 text-xs">
                        <option>Public</option>
                        <option>Private</option>
                      </select>
                    </label>
                    <label className="flex items-center justify-between">
                      <span>Data sharing preferences</span>
                      <input type="checkbox" />
                    </label>
                  </div>
                </div>
                <div className="p-4 rounded-xl border border-gray-200 bg-white">
                  <p className="text-sm font-semibold text-gray-900">Security</p>
                  <div className="mt-3 space-y-2 text-sm">
                    <label className="flex items-center justify-between">
                      <span>2FA toggle</span>
                      <input type="checkbox" />
                    </label>
                    <button className="btn-secondary text-xs px-3 py-1.5">View Login Activity</button>
                  </div>
                </div>
              </div>
              <div className="p-4 rounded-xl border border-yellow-100 bg-yellow-50">
                <p className="text-sm text-yellow-900 font-semibold mb-2">Sponsored Courses Feed</p>
                <p className="text-sm text-yellow-700">Toggle sponsored learning recommendations from partner providers.</p>
              </div>
            </div>
          )}

          {sectionKey === 'feedback-support' && (
            <div className="mt-6 space-y-4">
              <div className="rounded-xl border border-gray-200 bg-white p-4">
                <p className="text-sm font-bold text-gray-900 mb-3">Submit Feedback / Complaint</p>
                <div className="grid md:grid-cols-2 gap-3">
                  <select className="input-field">
                    <option>Type</option>
                    <option>Feedback</option>
                    <option>Complaint</option>
                  </select>
                  <select className="input-field">
                    <option>Category</option>
                    <option>Jobs</option>
                    <option>Courses</option>
                    <option>Payments</option>
                    <option>Platform Bug</option>
                  </select>
                  <textarea className="input-field md:col-span-2 h-24 resize-none" placeholder="Describe your issue" />
                  <input type="file" className="input-field md:col-span-2 text-sm" />
                </div>
                <button className="mt-3 btn-primary text-sm px-4 py-2">Submit</button>
              </div>

              <div className="rounded-xl border border-gray-200 bg-white p-4">
                <p className="text-sm font-bold text-gray-900 mb-3">My Requests</p>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-100">
                        {['Issue ID', 'Type', 'Category', 'Status', 'Assigned To'].map((h) => (
                          <th key={h} className="text-left text-xs font-semibold text-gray-500 pb-3">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                      <tr>
                        <td className="py-3 text-sm font-medium text-gray-900">#1023</td>
                        <td className="py-3 text-sm text-gray-700">Complaint</td>
                        <td className="py-3 text-sm text-gray-700">Payment</td>
                        <td className="py-3"><span className="badge badge-yellow">In Progress</span></td>
                        <td className="py-3 text-sm text-gray-700">Admin</td>
                      </tr>
                      <tr>
                        <td className="py-3 text-sm font-medium text-gray-900">#1045</td>
                        <td className="py-3 text-sm text-gray-700">Feedback</td>
                        <td className="py-3 text-sm text-gray-700">Course</td>
                        <td className="py-3"><span className="badge badge-green">Resolved</span></td>
                        <td className="py-3 text-sm text-gray-700">Teacher</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="rounded-xl border border-gray-200 bg-white p-4">
                <p className="text-sm font-bold text-gray-900 mb-3">Status Flow</p>
                <div className="flex flex-wrap items-center gap-2 text-xs">
                  <span className="px-3 py-1.5 rounded-full bg-blue-100 text-blue-700 font-medium">Submitted</span>
                  <span>→</span>
                  <span className="px-3 py-1.5 rounded-full bg-indigo-100 text-indigo-700 font-medium">Under Review</span>
                  <span>→</span>
                  <span className="px-3 py-1.5 rounded-full bg-purple-100 text-purple-700 font-medium">Assigned</span>
                  <span>→</span>
                  <span className="px-3 py-1.5 rounded-full bg-green-100 text-green-700 font-medium">Resolved</span>
                </div>
                <div className="mt-4 grid md:grid-cols-2 gap-3">
                  <div className="rounded-lg border border-blue-200 bg-blue-50 p-3">
                    <p className="text-sm font-semibold text-blue-900">Issue #1023</p>
                    <p className="text-xs text-blue-700 mt-1">Current Status: Assigned</p>
                    <p className="text-xs text-blue-700 mt-1">Assigned Role: Admin</p>
                    <p className="text-xs text-gray-600 mt-2">SLA Timer: Expected resolution: 24 hours</p>
                  </div>
                  <div className="rounded-lg border border-gray-200 bg-gray-50 p-3">
                    <p className="text-sm font-semibold text-gray-900">Notifications</p>
                    <ul className="text-xs text-gray-700 mt-2 space-y-1">
                      <li>Your complaint #1023 has been assigned to Admin.</li>
                      <li>Your issue has been resolved.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {sectionKey === 'ai-resume-review' && (
            <div className="mt-6 space-y-4">
              <div className="rounded-xl border border-gray-200 bg-white p-4">
                <p className="text-sm font-bold text-gray-900 mb-2">Upload Resume</p>
                <div className="border-2 border-dashed border-blue-200 bg-blue-50 rounded-xl p-6 text-center">
                  <p className="text-sm text-blue-800 font-medium">Drag & drop PDF</p>
                  <p className="text-xs text-blue-700 mt-1">or click to browse</p>
                </div>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-4">
                <p className="text-sm font-bold text-gray-900">Resume Score Card</p>
                <p className="text-2xl font-bold text-blue-700 mt-2">78/100</p>
                <div className="h-2 bg-gray-100 rounded-full mt-3">
                  <div className="h-2 bg-blue-600 rounded-full w-[78%]" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="rounded-xl border border-gray-200 bg-white p-4">
                  <p className="text-sm font-bold text-gray-900 mb-2">Analysis</p>
                  <ul className="text-xs text-gray-700 space-y-1">
                    <li>Skills Match: React, TypeScript, SQL found</li>
                    <li>Missing Skills: System Design, Testing</li>
                    <li>Keyword Optimization: Medium</li>
                    <li>Formatting Issues: 2 sections too dense</li>
                  </ul>
                </div>
                <div className="rounded-xl border border-gray-200 bg-white p-4">
                  <p className="text-sm font-bold text-gray-900 mb-2">Suggestions</p>
                  <ul className="text-xs text-gray-700 space-y-1">
                    <li>Add more action verbs</li>
                    <li>Include measurable achievements</li>
                  </ul>
                  <button className="mt-3 btn-primary text-xs px-3 py-1.5">Download Improved Resume</button>
                </div>
              </div>
            </div>
          )}

          {sectionKey === 'priority-applications' && (
            <div className="mt-6 space-y-4">
              <div className="rounded-xl border border-yellow-200 bg-yellow-50 p-6 text-center">
                <p className="text-xl font-extrabold text-yellow-900">Priority Applicant</p>
                <p className="text-sm text-yellow-800 mt-2">Your application appears at top for recruiters.</p>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="rounded-xl border border-gray-200 bg-white p-4">
                  <p className="text-sm font-bold text-gray-900">Stats</p>
                  <p className="text-sm text-gray-700 mt-2">Visibility boost: +60%</p>
                  <p className="text-sm text-gray-700">Faster response rate</p>
                </div>
                <div className="rounded-xl border border-gray-200 bg-white p-4">
                  <p className="text-sm font-bold text-gray-900 mb-2">Applied Jobs List</p>
                  {['SDE-1 · TechFlow', 'Frontend Engineer · Razorpay', 'Product Analyst · CRED'].map((job) => (
                    <div key={job} className="flex items-center justify-between py-1.5 text-sm">
                      <span>{job}</span>
                      <span className="badge badge-blue">Priority Badge</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {sectionKey === 'job-match-insights' && (
            <div className="mt-6 space-y-4">
              <div className="rounded-xl border border-gray-200 bg-white p-4">
                <p className="text-sm font-bold text-gray-900">Match Score</p>
                <p className="text-lg font-semibold text-blue-700 mt-1">85% match for Software Engineer</p>
                <div className="grid md:grid-cols-3 gap-3 mt-3 text-sm">
                  <div className="rounded-lg bg-blue-50 p-3">Skills: 90%</div>
                  <div className="rounded-lg bg-indigo-50 p-3">Experience: 70%</div>
                  <div className="rounded-lg bg-purple-50 p-3">Location: 80%</div>
                </div>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-4">
                <p className="text-sm font-bold text-gray-900">Missing Skills</p>
                <p className="text-sm text-gray-700 mt-2">Learn React, System Design</p>
                <div className="mt-3">
                  <p className="text-xs text-gray-500 mb-1">Job match comparison</p>
                  <div className="h-2 bg-gray-100 rounded-full"><div className="h-2 bg-green-500 rounded-full w-[85%]" /></div>
                </div>
              </div>
            </div>
          )}

          {sectionKey === 'mock-interview' && (
            <div className="mt-6 space-y-4">
              <div className="rounded-xl border border-gray-200 bg-white p-4">
                <button className="btn-primary text-sm px-4 py-2">Start Interview</button>
                <div className="mt-4 rounded-lg bg-gray-50 p-4">
                  <p className="text-sm font-semibold text-gray-900">Question Panel</p>
                  <p className="text-sm text-gray-700 mt-1">Tell me about yourself</p>
                  <p className="text-xs text-gray-500 mt-2">Timer: 01:24</p>
                  <div className="mt-3 border border-gray-200 rounded-lg p-3 text-xs text-gray-600">Answer Recording UI (mock)</div>
                </div>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-4">
                <p className="text-sm font-bold text-gray-900">Feedback Section</p>
                <div className="grid md:grid-cols-3 gap-3 mt-3 text-sm">
                  <div className="rounded-lg bg-blue-50 p-3">Confidence: 75%</div>
                  <div className="rounded-lg bg-green-50 p-3">Communication: 80%</div>
                  <div className="rounded-lg bg-yellow-50 p-3">Technical: 65%</div>
                </div>
              </div>
            </div>
          )}

          {sectionKey === 'salary-benchmarks' && (
            <div className="mt-6 space-y-4">
              <div className="rounded-xl border border-gray-200 bg-white p-4">
                <p className="text-sm font-bold text-gray-900">Search Role</p>
                <input className="input-field mt-2" value="Software Engineer" readOnly />
                <p className="text-sm text-gray-700 mt-3">Salary Range: ₹6 LPA – ₹18 LPA</p>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-4">
                <p className="text-sm font-bold text-gray-900">Salary Distribution</p>
                <div className="mt-3 space-y-2">
                  <div><p className="text-xs text-gray-500">0-2 years</p><div className="h-2 bg-gray-100 rounded-full"><div className="h-2 bg-blue-500 w-[40%] rounded-full" /></div></div>
                  <div><p className="text-xs text-gray-500">3-5 years</p><div className="h-2 bg-gray-100 rounded-full"><div className="h-2 bg-indigo-500 w-[70%] rounded-full" /></div></div>
                  <div><p className="text-xs text-gray-500">5+ years</p><div className="h-2 bg-gray-100 rounded-full"><div className="h-2 bg-purple-500 w-[85%] rounded-full" /></div></div>
                </div>
                <p className="text-sm text-gray-700 mt-4">Top paying companies: Google, Atlassian, Rubrik</p>
              </div>
            </div>
          )}

          {sectionKey === 'recruiter-outreach' && (
            <div className="mt-6 grid lg:grid-cols-2 gap-4">
              <div className="rounded-xl border border-gray-200 bg-white p-4">
                <p className="text-sm font-bold text-gray-900 mb-2">Recruiter List</p>
                {[
                  { name: 'Anita Verma', company: 'TechFlow', role: 'Talent Partner', status: 'Seen' },
                  { name: 'Rohit Jain', company: 'Razorpay', role: 'Hiring Manager', status: 'Replied' },
                  { name: 'Neha Gupta', company: 'CRED', role: 'Recruiter', status: 'Sent' },
                ].map((r) => (
                  <div key={r.name} className="rounded-lg border border-gray-200 p-3 mb-2">
                    <p className="text-sm font-semibold text-gray-900">{r.name}</p>
                    <p className="text-xs text-gray-600">{r.company} · {r.role}</p>
                    <p className="text-xs text-blue-700 mt-1">Status: {r.status}</p>
                  </div>
                ))}
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-4">
                <p className="text-sm font-bold text-gray-900">Message Box</p>
                <textarea className="input-field h-28 resize-none mt-2" placeholder="Send message" />
                <p className="text-xs text-gray-500 mt-3">Template:</p>
                <div className="rounded-lg bg-gray-50 border border-gray-200 p-3 text-xs text-gray-700 mt-1">
                  Hi, I&apos;m interested in your role and would love to discuss my fit for the position.
                </div>
                <button className="mt-3 btn-primary text-sm px-4 py-2">Send</button>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

