'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BookOpen, LayoutDashboard, MessageSquare, Settings, TrendingUp, Users, Wallet } from 'lucide-react';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard/teacher' },
  { icon: BookOpen, label: 'My Courses', href: '/dashboard/teacher/my-courses' },
  { icon: Users, label: 'Students', href: '/dashboard/teacher/students' },
  { icon: MessageSquare, label: 'Feedback & Complaints', href: '/dashboard/teacher/feedback-complaints' },
  { icon: Wallet, label: 'Earnings', href: '/dashboard/teacher/earnings' },
  { icon: Settings, label: 'Settings', href: '/dashboard/teacher/settings' },
];

export default function TeacherDashboard() {
  const pathname = usePathname();

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

      <main className="flex-1 p-6 space-y-4">
        <div className="card p-6 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
          <h1 className="text-2xl font-bold">Welcome back, Instructor Priya</h1>
          <p className="text-sm text-blue-100 mt-2">Here is your teaching performance overview for this month.</p>
        </div>
        <div className="grid md:grid-cols-4 gap-4">
          {[
            { label: 'Total Courses', value: '5' },
            { label: 'Total Students', value: '1,200' },
            { label: 'Average Rating', value: '⭐ 4.3' },
            { label: 'Monthly Earnings', value: '₹45,000' },
          ].map((s) => (
            <div key={s.label} className="stat-card">
              <p className="text-xs text-gray-500">{s.label}</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">{s.value}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2 card p-6">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="w-5 h-5 text-blue-600" />
              <p className="text-sm font-semibold text-gray-900">Course Performance</p>
            </div>
            <div className="space-y-3">
              {[
                { month: 'Jan', value: 40 },
                { month: 'Feb', value: 55 },
                { month: 'Mar', value: 62 },
                { month: 'Apr', value: 80 },
                { month: 'May', value: 74 },
              ].map((row) => (
                <div key={row.month}>
                  <div className="flex justify-between text-xs text-gray-500 mb-1">
                    <span>{row.month}</span>
                    <span>{row.value} enrollments</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full">
                    <div className="h-2 bg-blue-500 rounded-full" style={{ width: `${row.value}%` }} />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-5 border-t border-gray-100 pt-4">
              <p className="text-sm font-semibold text-gray-900 mb-2">Top Performing Courses</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>React Masterclass - 420 students</li>
                <li>System Design Fundamentals - 320 students</li>
                <li>SQL for Developers - 240 students</li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <div className="card p-5">
              <p className="text-sm font-semibold text-gray-900 mb-2">Recent Activity</p>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>20 new enrollments in React Course</li>
                <li>5 new reviews received</li>
              </ul>
            </div>
            <div className="card p-5 border border-yellow-200 bg-yellow-50">
              <p className="text-sm font-semibold text-yellow-900 mb-2">Alerts</p>
              <ul className="text-sm text-yellow-800 space-y-2">
                <li>3 new complaints pending</li>
                <li>Course needs update (low rating alert)</li>
              </ul>
            </div>
            <div className="card p-5 border border-blue-200 bg-blue-50">
              <p className="text-sm font-semibold text-blue-900">Course Health Score</p>
              <p className="text-2xl font-bold text-blue-900 mt-1">82/100</p>
              <p className="text-xs text-blue-700 mt-2">Suggested improvement: Add more practical examples.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

