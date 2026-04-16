'use client';

import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
import { BookOpen, LayoutDashboard, MessageSquare, Settings, Users, Wallet } from 'lucide-react';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard/teacher' },
  { icon: BookOpen, label: 'My Courses', href: '/dashboard/teacher/my-courses' },
  { icon: Users, label: 'Students', href: '/dashboard/teacher/students' },
  { icon: MessageSquare, label: 'Feedback & Complaints', href: '/dashboard/teacher/feedback-complaints' },
  { icon: Wallet, label: 'Earnings', href: '/dashboard/teacher/earnings' },
  { icon: Settings, label: 'Settings', href: '/dashboard/teacher/settings' },
];

const sectionContent: Record<string, { title: string; description: string }> = {
  'my-courses': { title: 'My Courses', description: 'Manage course modules, uploads, and publishing.' },
  students: { title: 'Students', description: 'View enrollments, progress, and student engagement.' },
  'feedback-complaints': { title: 'Feedback & Complaints', description: 'Handle ratings, reviews, and course complaints.' },
  earnings: { title: 'Earnings', description: 'Track payouts, commissions, and monthly revenue.' },
  settings: { title: 'Settings', description: 'Manage teacher account preferences and security.' },
};

export default function TeacherSectionPage() {
  const pathname = usePathname();
  const params = useParams<{ section: string }>();
  const sectionKey = params.section;
  const section = sectionContent[sectionKey];

  if (!section) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
        <div className="card p-8 text-center max-w-md">
          <h1 className="text-xl font-bold text-gray-900 mb-2">Section not found</h1>
          <Link href="/dashboard/teacher" className="text-blue-600 hover:underline text-sm">
            Back to Teacher Dashboard
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

          {sectionKey === 'my-courses' && (
            <div className="mt-6 space-y-4">
              <div className="flex justify-between items-center">
                <p className="text-sm font-semibold text-gray-900">Course Cards</p>
                <button className="btn-primary text-sm px-4 py-2">Add New Course</button>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { title: 'React Masterclass', students: '420', rating: '4.6', price: '₹2,999', status: 'Active' },
                  { title: 'System Design Fundamentals', students: '320', rating: '4.4', price: '₹3,499', status: 'Sponsored' },
                  { title: 'SQL for Developers', students: '240', rating: '4.2', price: '₹1,999', status: 'Draft' },
                ].map((course) => (
                  <div key={course.title} className="rounded-xl border border-gray-200 bg-white p-4">
                    <div className="h-28 bg-gray-100 rounded-lg mb-3 flex items-center justify-center text-xs text-gray-500">Thumbnail</div>
                    <p className="text-sm font-semibold text-gray-900">{course.title}</p>
                    <p className="text-xs text-gray-600 mt-1">{course.students} students · ⭐ {course.rating}</p>
                    <p className="text-xs text-green-700 mt-1">{course.price}</p>
                    <div className="mt-2">
                      <span className={`badge ${course.status === 'Active' ? 'badge-green' : course.status === 'Draft' ? 'badge-yellow' : 'badge-blue'}`}>
                        {course.status}
                      </span>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <button className="btn-secondary text-xs px-2.5 py-1.5">Edit Course</button>
                      <button className="btn-secondary text-xs px-2.5 py-1.5">View Analytics</button>
                      <button className="btn-secondary text-xs px-2.5 py-1.5">Delete Course</button>
                    </div>
                    <label className="mt-3 flex items-center justify-between text-xs text-gray-700">
                      <span>Promote Course (Paid Ad)</span>
                      <input type="checkbox" defaultChecked={course.status === 'Sponsored'} />
                    </label>
                  </div>
                ))}
              </div>

              <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                <p className="text-sm font-semibold text-gray-900 mb-3">Add New Course Form (Mock)</p>
                <div className="grid md:grid-cols-2 gap-3">
                  <input className="input-field" placeholder="Title" />
                  <input className="input-field" placeholder="Price" />
                  <textarea className="input-field md:col-span-2 h-24 resize-none" placeholder="Description" />
                  <input type="file" className="input-field md:col-span-2 text-sm" />
                </div>
              </div>
            </div>
          )}

          {sectionKey === 'students' && (
            <div className="mt-6 space-y-4">
              <div className="grid md:grid-cols-3 gap-3">
                <select className="input-field">
                  <option>Filter by course</option>
                  <option>React Masterclass</option>
                  <option>System Design Fundamentals</option>
                </select>
                <select className="input-field">
                  <option>All students</option>
                  <option>Active</option>
                  <option>Inactive</option>
                </select>
                <input className="input-field" placeholder="Search student..." />
              </div>

              <div className="rounded-xl border border-gray-200 bg-white p-4 overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-100">
                      {['Name', 'Course Enrolled', 'Progress (%)', 'Last Active', 'Performance Score', 'Actions'].map((h) => (
                        <th key={h} className="text-left text-xs font-semibold text-gray-500 pb-3">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {[
                      { name: 'Rahul Sharma', course: 'React Masterclass', progress: '82%', active: '2h ago', score: '88' },
                      { name: 'Aisha Khan', course: 'System Design Fundamentals', progress: '64%', active: '1d ago', score: '76' },
                      { name: 'Karan Patel', course: 'SQL for Developers', progress: '91%', active: '30m ago', score: '92' },
                    ].map((s) => (
                      <tr key={s.name}>
                        <td className="py-3 text-sm text-gray-900">{s.name}</td>
                        <td className="py-3 text-sm text-gray-700">{s.course}</td>
                        <td className="py-3 text-sm text-gray-700">{s.progress}</td>
                        <td className="py-3 text-sm text-gray-500">{s.active}</td>
                        <td className="py-3 text-sm font-semibold text-blue-700">{s.score}</td>
                        <td className="py-3">
                          <div className="flex gap-2">
                            <button className="btn-secondary text-xs px-2.5 py-1.5">Message</button>
                            <button className="btn-secondary text-xs px-2.5 py-1.5">Profile</button>
                            <button className="btn-secondary text-xs px-2.5 py-1.5">Track</button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="rounded-xl border border-blue-200 bg-blue-50 p-4 text-sm text-blue-900">
                  70% students completed Module 1
                </div>
                <div className="rounded-xl border border-yellow-200 bg-yellow-50 p-4 text-sm text-yellow-900">
                  Drop-off at Lesson 3
                </div>
              </div>
            </div>
          )}

          {sectionKey === 'feedback-complaints' && (
            <div className="mt-6 space-y-4">
              <div className="rounded-xl border border-gray-200 bg-white p-4">
                <p className="text-sm font-bold text-gray-900">Feedback Section</p>
                <p className="text-sm text-gray-700 mt-2">⭐ 4.3 average</p>
                <div className="mt-3 space-y-2">
                  <div className="rounded-lg bg-gray-50 border border-gray-200 p-3 text-sm">Rahul · ⭐ 4 · "Great content, needs more live examples."</div>
                  <div className="rounded-lg bg-gray-50 border border-gray-200 p-3 text-sm">Aisha · ⭐ 5 · "Very helpful assignments and clear explanations."</div>
                </div>
              </div>

              <div className="rounded-xl border border-gray-200 bg-white p-4">
                <p className="text-sm font-bold text-gray-900">Complaints Section</p>
                <div className="overflow-x-auto mt-3">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-100">
                        {['Issue ID', 'Student', 'Issue', 'Status', 'Priority', 'Actions'].map((h) => (
                          <th key={h} className="text-left text-xs font-semibold text-gray-500 pb-3">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                      {[
                        { id: '#2031', student: 'Rahul', issue: 'Video not loading', status: 'Pending', priority: 'High' },
                        { id: '#2045', student: 'Aisha', issue: 'Outdated content', status: 'In Progress', priority: 'Medium' },
                      ].map((c) => (
                        <tr key={c.id}>
                          <td className="py-3 text-sm font-medium text-gray-900">{c.id}</td>
                          <td className="py-3 text-sm text-gray-700">{c.student}</td>
                          <td className="py-3 text-sm text-gray-700">{c.issue}</td>
                          <td className="py-3 text-sm text-gray-700">{c.status}</td>
                          <td className="py-3">
                            <span className={`badge ${c.priority === 'High' ? 'badge-red' : 'badge-yellow'}`}>{c.priority}</span>
                          </td>
                          <td className="py-3">
                            <div className="flex gap-2">
                              <button className="btn-secondary text-xs px-2.5 py-1.5">Reply</button>
                              <button className="btn-secondary text-xs px-2.5 py-1.5">Update Course</button>
                              <button className="btn-primary text-xs px-2.5 py-1.5">Resolved</button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="rounded-xl border border-indigo-200 bg-indigo-50 p-4">
                <p className="text-sm font-bold text-indigo-900">AI Insight Panel (CRM)</p>
                <p className="text-sm text-indigo-800 mt-2">60% complaints about video buffering</p>
                <p className="text-sm text-indigo-800">20% about outdated content</p>
                <p className="text-xs text-indigo-700 mt-2">This insight helps prioritize video optimization and content refresh.</p>
              </div>
            </div>
          )}

          {sectionKey === 'earnings' && (
            <div className="mt-6 space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="rounded-xl border border-gray-200 bg-white p-4">
                  <p className="text-xs text-gray-500">Total Earnings</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">₹2,50,000</p>
                </div>
                <div className="rounded-xl border border-green-200 bg-green-50 p-4">
                  <p className="text-xs text-green-700">This Month</p>
                  <p className="text-2xl font-bold text-green-900 mt-1">₹45,000</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="rounded-xl border border-gray-200 bg-white p-4">
                  <p className="text-sm font-semibold text-gray-900 mb-2">Revenue Breakdown</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>Course Sales: ₹1,80,000</li>
                    <li>Sponsored Course Ads: ₹45,000</li>
                    <li>Subscription Share: ₹25,000</li>
                  </ul>
                </div>
                <div className="rounded-xl border border-gray-200 bg-white p-4">
                  <p className="text-sm font-semibold text-gray-900 mb-2">Graphs</p>
                  <div className="space-y-2">
                    <div>
                      <p className="text-xs text-gray-500">Monthly earnings (bar)</p>
                      <div className="h-2 bg-gray-100 rounded-full"><div className="h-2 bg-blue-500 rounded-full w-[72%]" /></div>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Revenue sources (pie-style split)</p>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden flex">
                        <div className="bg-green-500 w-[70%]" />
                        <div className="bg-yellow-500 w-[20%]" />
                        <div className="bg-blue-500 w-[10%]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-gray-200 bg-white p-4 overflow-x-auto">
                <p className="text-sm font-semibold text-gray-900 mb-3">Transactions</p>
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-100">
                      {['Date', 'Course', 'Amount', 'Payment Status'].map((h) => (
                        <th key={h} className="text-left text-xs font-semibold text-gray-500 pb-3">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    <tr>
                      <td className="py-3 text-sm text-gray-700">12 Apr</td>
                      <td className="py-3 text-sm text-gray-700">React Masterclass</td>
                      <td className="py-3 text-sm font-semibold text-green-700">₹2,999</td>
                      <td className="py-3"><span className="badge badge-green">Paid</span></td>
                    </tr>
                    <tr>
                      <td className="py-3 text-sm text-gray-700">11 Apr</td>
                      <td className="py-3 text-sm text-gray-700">System Design</td>
                      <td className="py-3 text-sm font-semibold text-green-700">₹3,499</td>
                      <td className="py-3"><span className="badge badge-yellow">Processing</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {sectionKey === 'settings' && (
            <div className="mt-6 grid lg:grid-cols-2 gap-4">
              <div className="rounded-xl border border-gray-200 bg-white p-4">
                <p className="text-sm font-semibold text-gray-900 mb-3">Profile Settings</p>
                <div className="space-y-3">
                  <input className="input-field" placeholder="Name" value="Priya Sharma" readOnly />
                  <textarea
                    className="input-field h-20 resize-none"
                    placeholder="Bio"
                    defaultValue="Frontend educator with 8+ years of industry experience."
                  />
                  <input className="input-field" placeholder="Expertise" value="React, TypeScript, System Design" readOnly />
                  <input type="file" className="input-field text-sm" />
                </div>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-4">
                <p className="text-sm font-semibold text-gray-900 mb-3">Course Preferences</p>
                <div className="space-y-3">
                  <input className="input-field" placeholder="Default pricing" value="₹2,499" readOnly />
                  <select className="input-field">
                    <option>Category selection</option>
                    <option>Web Development</option>
                    <option>Data Science</option>
                  </select>
                </div>
                <p className="text-sm font-semibold text-gray-900 mt-5 mb-2">Notifications</p>
                <label className="flex items-center justify-between text-sm py-1"><span>New enrollments</span><input type="checkbox" defaultChecked /></label>
                <label className="flex items-center justify-between text-sm py-1"><span>New complaints</span><input type="checkbox" defaultChecked /></label>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-4">
                <p className="text-sm font-semibold text-gray-900 mb-3">Payment Settings</p>
                <div className="space-y-3">
                  <input className="input-field" placeholder="Bank details" value="XXXXXX1234 - HDFC" readOnly />
                  <select className="input-field">
                    <option>Payout method</option>
                    <option>Bank Transfer</option>
                    <option>UPI</option>
                  </select>
                </div>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-4">
                <p className="text-sm font-semibold text-gray-900 mb-3">Security</p>
                <button className="btn-secondary text-xs px-3 py-1.5">Change Password</button>
                <label className="flex items-center justify-between text-sm mt-3"><span>2FA toggle</span><input type="checkbox" /></label>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

