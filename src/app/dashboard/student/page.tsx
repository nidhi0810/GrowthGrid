'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard, Briefcase, FileText, BookmarkCheck, User, Settings,
  Bell, ChevronRight, MapPin, Star, Crown, Users, Send, X, MessageSquare,
  TrendingUp, CheckCircle, Clock, XCircle, AlertCircle, Eye
} from 'lucide-react';
import {
  BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, CartesianGrid
} from 'recharts';
import { usePremium } from './_hooks/usePremium';

const applicationData = [
  { month: 'Jan', applied: 4 }, { month: 'Feb', applied: 7 },
  { month: 'Mar', applied: 5 }, { month: 'Apr', applied: 9 },
  { month: 'May', applied: 6 }, { month: 'Jun', applied: 11 },
];

const applications = [
  { id: 1, title: 'Frontend Developer', company: 'TechFlow', status: 'Shortlisted', date: '3 Apr', logo: 'TF', color: 'bg-blue-100 text-blue-700' },
  { id: 2, title: 'Product Design Intern', company: 'CreativePulse', status: 'Applied', date: '1 Apr', logo: 'CP', color: 'bg-purple-100 text-purple-700' },
  { id: 3, title: 'Data Analyst', company: 'DataMetrics', status: 'Rejected', date: '28 Mar', logo: 'DM', color: 'bg-red-100 text-red-700' },
  { id: 4, title: 'Marketing Intern', company: 'BrandBoost', status: 'Applied', date: '25 Mar', logo: 'BB', color: 'bg-green-100 text-green-700' },
];

const recommendedJobs = [
  { id: 1, title: 'React Developer', company: 'Razorpay', location: 'Remote', salary: '₹25–35 LPA', match: 95, logo: 'R', color: 'bg-indigo-100 text-indigo-700' },
  { id: 2, title: 'UX Designer', company: 'Meesho', location: 'Bangalore', salary: '₹18–28 LPA', match: 88, logo: 'M', color: 'bg-pink-100 text-pink-700' },
  { id: 3, title: 'Full Stack Intern', company: 'Postman', location: 'Bangalore', salary: '₹20K/mo', match: 82, logo: 'P', color: 'bg-orange-100 text-orange-700' },
];

const statusConfig: Record<string, { badge: string; icon: React.ReactNode }> = {
  Applied: { badge: 'badge-blue', icon: <Clock className="w-3 h-3" /> },
  Shortlisted: { badge: 'badge-green', icon: <CheckCircle className="w-3 h-3" /> },
  Rejected: { badge: 'badge-red', icon: <XCircle className="w-3 h-3" /> },
};

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard/student' },
  { icon: Briefcase, label: 'Browse Jobs', href: '/dashboard/student/browse-jobs' },
  { icon: FileText, label: 'My Applications', href: '/dashboard/student/my-applications' },
  { icon: BookmarkCheck, label: 'Saved Jobs', href: '/dashboard/student/saved-jobs' },
  { icon: Crown, label: 'Courses', href: '/dashboard/student/courses' },
  { icon: User, label: 'Profile', href: '/dashboard/student/profile' },
  { icon: MessageSquare, label: 'Feedback & Support', href: '/dashboard/student/feedback-support' },
  { icon: Settings, label: 'Settings', href: '/dashboard/student/settings' },
];

export default function StudentDashboard() {
  const [feedbackOpen, setFeedbackOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { isPremium, setIsPremium } = usePremium();
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 flex flex-col transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:relative lg:translate-x-0`}>
        <div className="flex items-center gap-2 px-6 py-5 border-b border-gray-100">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <TrendingUp className="w-4 h-4 text-white" />
          </div>
          <span className="font-bold text-gray-900">Growth<span className="text-blue-600">Grid</span></span>
        </div>
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={pathname === item.href ? 'sidebar-link-active w-full text-left' : 'sidebar-link w-full text-left'}
            >
              <item.icon className="w-5 h-5" />{item.label}
            </Link>
          ))}
        </nav>
        <div className="p-4 border-t border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-700">R</div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-gray-900 truncate">Rahul Sharma</p>
              <p className="text-xs text-gray-500">Student Account</p>
            </div>
          </div>
        </div>
      </aside>
      {sidebarOpen && <div className="fixed inset-0 bg-black/30 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />}

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between sticky top-0 z-30">
          <div className="flex items-center gap-4">
            <button className="lg:hidden" onClick={() => setSidebarOpen(true)}>
              <LayoutDashboard className="w-5 h-5 text-gray-600" />
            </button>
            <div>
              <h1 className="font-bold text-gray-900">Dashboard</h1>
              <p className="text-xs text-gray-500">Good morning, Rahul 👋</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="relative p-2 rounded-lg hover:bg-gray-100 transition-colors">
              <Bell className="w-5 h-5 text-gray-600" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
            </button>
            <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-700">R</div>
          </div>
        </header>

        <main className="flex-1 p-6 space-y-6 overflow-y-auto">
          {/* Premium Banner */}
          <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl p-5 flex items-center justify-between text-white">
            <div className="flex items-center gap-3">
              <Crown className="w-6 h-6" />
              <div>
                <p className="font-bold">Subscription Card</p>
                <p className="text-yellow-100 text-sm">
                  Plan: {isPremium ? 'Premium' : 'Free'}
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsPremium(!isPremium)}
              className="bg-white text-orange-600 font-semibold text-sm px-4 py-2 rounded-lg hover:bg-yellow-50 transition-colors shrink-0"
            >
              {isPremium ? 'Cancel Subscription' : 'Upgrade to Premium'}
            </button>
          </div>

          {/* Subscription Features */}
          <div className="card p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-bold text-gray-900 text-lg">Subscription Features</h2>
              <span className={`badge ${isPremium ? 'badge-green' : 'badge-yellow'}`}>
                {isPremium ? 'Premium Enabled' : 'Free Plan'}
              </span>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { label: 'AI Resume Review', href: '/dashboard/student/ai-resume-review' },
                { label: 'Priority Applications', href: '/dashboard/student/priority-applications' },
                { label: 'Job Match Insights', href: '/dashboard/student/job-match-insights' },
                { label: 'Mock Interview', href: '/dashboard/student/mock-interview' },
                { label: 'Salary Benchmarks', href: '/dashboard/student/salary-benchmarks' },
                { label: 'Recruiter Outreach', href: '/dashboard/student/recruiter-outreach' },
              ].map((feature) => (
                <div key={feature.label} className={`rounded-xl border p-4 ${isPremium ? 'border-green-200 bg-green-50' : 'border-gray-200 bg-gray-50'}`}>
                  <p className={`text-sm font-semibold ${isPremium ? 'text-green-800' : 'text-gray-700'}`}>{feature.label}</p>
                  <p className={`text-xs mt-1 ${isPremium ? 'text-green-700' : 'text-gray-500'}`}>
                    {isPremium ? 'Available in your plan' : 'Locked. Subscribe to unlock.'}
                  </p>
                  {isPremium ? (
                    <Link href={feature.href} className="mt-3 inline-flex items-center rounded-lg bg-green-600 text-white text-xs font-semibold px-3 py-1.5 hover:bg-green-700 transition-colors">
                      Open
                    </Link>
                  ) : null}
                </div>
              ))}
            </div>
          </div>

          {/* Stat Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: 'Applications Sent', value: '18', icon: Send, color: 'text-blue-600 bg-blue-100', change: '+3 this week' },
              { label: 'Shortlisted', value: '5', icon: CheckCircle, color: 'text-green-600 bg-green-100', change: '2 pending' },
              { label: 'Saved Jobs', value: '12', icon: BookmarkCheck, color: 'text-purple-600 bg-purple-100', change: '+4 new' },
              { label: 'Profile Views', value: '264', icon: Eye, color: 'text-orange-600 bg-orange-100', change: '+28 today' },
            ].map((s, i) => (
              <div key={i} className="stat-card">
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${s.color}`}>
                    <s.icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs text-green-600 font-medium">{s.change}</span>
                </div>
                <p className="text-2xl font-bold text-gray-900">{s.value}</p>
                <p className="text-xs text-gray-500 mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Recommended Jobs */}
            <div className="lg:col-span-2 card p-6">
              <div className="flex items-center justify-between mb-5">
                <h2 className="font-bold text-gray-900 text-lg">Recommended for You</h2>
                <button className="text-blue-600 text-sm font-medium hover:underline">View all</button>
              </div>
              <div className="space-y-4">
                {recommendedJobs.map(job => (
                  <div key={job.id} className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 hover:border-blue-200 hover:bg-blue-50/30 transition-all group">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center font-bold shrink-0 ${job.color}`}>{job.logo}</div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-gray-900 text-sm group-hover:text-blue-600 transition-colors">{job.title}</p>
                      <p className="text-gray-500 text-xs">{job.company} · <span className="inline-flex items-center gap-0.5"><MapPin className="w-3 h-3" />{job.location}</span></p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-xs font-semibold text-gray-900">{job.salary}</p>
                      <div className="flex items-center gap-1 mt-1">
                        <div className="h-1.5 w-20 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-green-500 rounded-full" style={{ width: `${job.match}%` }} />
                        </div>
                        <span className="text-xs text-green-600 font-medium">{job.match}%</span>
                      </div>
                    </div>
                    <button className="btn-secondary text-xs px-3 py-1.5 shrink-0">Apply</button>
                  </div>
                ))}
              </div>
            </div>

            {/* Application Chart */}
            <div className="card p-6">
              <h2 className="font-bold text-gray-900 text-lg mb-5">Activity (6 months)</h2>
              <div style={{ height: 180 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={applicationData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
                    <XAxis dataKey="month" tick={{ fontSize: 11, fill: '#9ca3af' }} axisLine={false} tickLine={false} />
                    <YAxis tick={{ fontSize: 11, fill: '#9ca3af' }} axisLine={false} tickLine={false} />
                    <Tooltip cursor={{ fill: '#eff6ff' }} contentStyle={{ borderRadius: '8px', border: '1px solid #e5e7eb', fontSize: 12 }} />
                    <Bar dataKey="applied" fill="#2563eb" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* Referral Section */}
              <div className="mt-5 p-4 bg-indigo-50 rounded-xl border border-indigo-100">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="w-4 h-4 text-indigo-600" />
                  <p className="text-sm font-semibold text-indigo-900">Invite & Earn</p>
                </div>
                <p className="text-xs text-indigo-600 mb-3">Referral code: GROWTH123</p>
                <div className="flex gap-2">
                  <input className="flex-1 text-xs border border-indigo-200 rounded-lg px-2 py-1.5 bg-white" value="GROWTH123" readOnly />
                  <button className="text-xs bg-indigo-600 text-white px-3 py-1.5 rounded-lg font-medium hover:bg-indigo-700 transition-colors">Invite Friends</button>
                </div>
                <div className="grid grid-cols-3 gap-2 mt-3">
                  <div className="bg-white rounded-lg p-2 border border-indigo-100">
                    <p className="text-[11px] text-indigo-500">Referrals</p>
                    <p className="text-sm font-semibold text-indigo-900">12 users</p>
                  </div>
                  <div className="bg-white rounded-lg p-2 border border-indigo-100">
                    <p className="text-[11px] text-indigo-500">Earnings</p>
                    <p className="text-sm font-semibold text-indigo-900">₹2400</p>
                  </div>
                  <div className="bg-white rounded-lg p-2 border border-indigo-100">
                    <p className="text-[11px] text-indigo-500">Status</p>
                    <p className="text-sm font-semibold text-indigo-900">{isPremium ? 'Premium' : 'Free'}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sponsored Courses */}
          <div className="card p-6">
            <div className="flex items-center justify-between mb-5">
              <h2 className="font-bold text-gray-900 text-lg">Sponsored Opportunities</h2>
              <span className="badge badge-blue">Ad-supported learning</span>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { title: 'Full Stack Accelerator', partner: 'CodeCraft Academy', tag: 'Sponsored', cta: 'View Course' },
                { title: 'Data Analytics Bootcamp', partner: 'SkillBridge', tag: 'Sponsored', cta: 'Enroll with Offer' },
                { title: 'Interview Mastery Program', partner: 'CareerSprint', tag: 'Sponsored', cta: 'Claim Discount' },
              ].map((course) => (
                <div key={course.title} className="rounded-xl border border-gray-200 p-4 hover:border-blue-300 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <span className="badge badge-yellow">{course.tag}</span>
                    <span className="text-[11px] text-gray-500">Affiliate</span>
                  </div>
                  <p className="text-sm font-semibold text-gray-900">{course.title}</p>
                  <p className="text-xs text-gray-500 mt-1">{course.partner}</p>
                  <button className="mt-3 text-xs btn-secondary px-3 py-1.5">{course.cta}</button>
                </div>
              ))}
            </div>
          </div>

          {/* Applications Table */}
          <div className="card p-6">
            <div className="flex items-center justify-between mb-5">
              <h2 className="font-bold text-gray-900 text-lg">Recent Applications</h2>
              <button className="text-blue-600 text-sm font-medium hover:underline">View all</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="text-left text-xs font-semibold text-gray-500 pb-3 pr-4">Position</th>
                    <th className="text-left text-xs font-semibold text-gray-500 pb-3 pr-4">Company</th>
                    <th className="text-left text-xs font-semibold text-gray-500 pb-3 pr-4">Applied</th>
                    <th className="text-left text-xs font-semibold text-gray-500 pb-3 pr-4">Status</th>
                    <th className="text-left text-xs font-semibold text-gray-500 pb-3">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {applications.map(app => {
                    const sc = statusConfig[app.status];
                    return (
                      <tr key={app.id} className="hover:bg-gray-50 transition-colors">
                        <td className="py-3 pr-4">
                          <div className="flex items-center gap-3">
                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold ${app.color}`}>{app.logo}</div>
                            <span className="text-sm font-medium text-gray-900">{app.title}</span>
                          </div>
                        </td>
                        <td className="py-3 pr-4 text-sm text-gray-600">{app.company}</td>
                        <td className="py-3 pr-4 text-sm text-gray-500">{app.date}</td>
                        <td className="py-3 pr-4">
                          <span className={`badge ${sc.badge} inline-flex items-center gap-1`}>{sc.icon}{app.status}</span>
                        </td>
                        <td className="py-3">
                          <button onClick={() => setFeedbackOpen(true)} className="text-xs text-blue-600 hover:underline font-medium flex items-center gap-1">
                            <MessageSquare className="w-3 h-3" /> Feedback
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>

      {/* Feedback Modal */}
      {feedbackOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md">
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <h3 className="font-bold text-gray-900">Rate Your Experience</h3>
              <button onClick={() => setFeedbackOpen(false)} className="text-gray-400 hover:text-gray-600"><X className="w-5 h-5" /></button>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <p className="text-sm text-gray-600 mb-3">How was your interview experience?</p>
                <div className="flex gap-2">
                  {[1,2,3,4,5].map(i => (
                    <button key={i} onClick={() => setRating(i)} className={`transition-all ${rating >= i ? 'text-yellow-400 scale-110' : 'text-gray-300'}`}>
                      <Star className="w-8 h-8 fill-current" />
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Comments (optional)</label>
                <textarea className="input-field resize-none h-28" placeholder="Share your experience..."></textarea>
              </div>
              <div className="flex gap-3">
                <button onClick={() => setFeedbackOpen(false)} className="flex-1 btn-secondary text-sm">Cancel</button>
                <button onClick={() => setFeedbackOpen(false)} className="flex-1 btn-primary text-sm">Submit Feedback</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
