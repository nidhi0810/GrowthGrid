'use client';

import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
import { BarChart2, Briefcase, FileText, LayoutDashboard, Settings, Users } from 'lucide-react';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard/admin' },
  { icon: Users, label: 'Users', href: '/dashboard/admin/users' },
  { icon: Briefcase, label: 'Jobs', href: '/dashboard/admin/jobs' },
  { icon: BarChart2, label: 'Analytics', href: '/dashboard/admin/analytics' },
  { icon: FileText, label: 'Reports', href: '/dashboard/admin/reports' },
  { icon: Settings, label: 'Settings', href: '/dashboard/admin/settings' },
];

const sectionContent: Record<string, { title: string; description: string }> = {
  users: { title: 'Users', description: 'Manage student and recruiter accounts, roles, and access.' },
  jobs: { title: 'Jobs', description: 'Moderate listings, flag suspicious posts, and review job quality.' },
  analytics: { title: 'Analytics', description: 'View traffic, conversion funnels, and platform health metrics.' },
  reports: { title: 'Reports', description: 'Generate monthly platform, revenue, and compliance reports.' },
  settings: { title: 'Settings', description: 'Manage platform-level preferences and legal access points.' },
};

export default function AdminSectionPage() {
  const params = useParams<{ section: string }>();
  const pathname = usePathname();
  const sectionKey = params.section;
  const section = sectionContent[sectionKey];

  if (!section) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
        <div className="card p-8 text-center max-w-md">
          <h1 className="text-xl font-bold text-gray-900 mb-2">Section not found</h1>
          <Link href="/dashboard/admin" className="text-blue-600 hover:underline text-sm">
            Back to Admin Dashboard
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
          {sectionKey === 'users' && (
            <div className="mt-6 grid md:grid-cols-3 gap-4">
              {[
                { label: 'Students', value: '54,219' },
                { label: 'Recruiters', value: '3,847' },
                { label: 'Premium Subscribers', value: '7,924' },
              ].map((s) => (
                <div key={s.label} className="rounded-xl border border-gray-200 p-4">
                  <p className="text-xs text-gray-500">{s.label}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{s.value}</p>
                </div>
              ))}
            </div>
          )}

          {sectionKey === 'jobs' && (
            <div className="mt-6 overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="text-left text-xs font-semibold text-gray-500 pb-3">Job</th>
                    <th className="text-left text-xs font-semibold text-gray-500 pb-3">Company</th>
                    <th className="text-left text-xs font-semibold text-gray-500 pb-3">Revenue Source</th>
                    <th className="text-left text-xs font-semibold text-gray-500 pb-3">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {[
                    { j: 'SDE-1', c: 'TechFlow', r: 'Sponsored Job (Advertising)', s: 'Live' },
                    { j: 'Data Scientist', c: 'DataMetrics', r: 'Transaction Fee', s: 'Live' },
                    { j: 'Product Designer', c: 'CreativePulse', r: 'Subscription Bundle', s: 'Draft' },
                  ].map((row) => (
                    <tr key={row.j + row.c}>
                      <td className="py-3 text-sm text-gray-900">{row.j}</td>
                      <td className="py-3 text-sm text-gray-700">{row.c}</td>
                      <td className="py-3 text-sm text-blue-700">{row.r}</td>
                      <td className="py-3 text-sm"><span className="badge badge-green">{row.s}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {sectionKey === 'analytics' && (
            <div className="mt-6 space-y-4">
              <h2 className="text-lg font-bold text-gray-900">Revenue Models</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { model: 'Advertising Revenue Model', detail: 'Sponsored jobs, sponsored courses, homepage promotion banners.', value: '₹2.1L / mo' },
                  { model: 'Subscription Revenue Model', detail: 'Premium student/recruiter plans with advanced features.', value: '₹1.8L / mo' },
                  { model: 'Transaction Fee Revenue Model', detail: 'Fee per successful hire or paid application processing.', value: '₹92K / mo' },
                  { model: 'Sales Revenue Model', detail: 'Direct sale of resume packs, hiring toolkits, and reports.', value: '₹64K / mo' },
                  { model: 'Affiliate Revenue Model', detail: 'Commission from partner courses and assessment tools.', value: '₹48K / mo' },
                ].map((m) => (
                  <div key={m.model} className="rounded-xl border border-gray-200 p-4">
                    <p className="text-sm font-semibold text-gray-900">{m.model}</p>
                    <p className="text-xs text-gray-600 mt-1">{m.detail}</p>
                    <p className="text-sm font-bold text-green-700 mt-3">{m.value}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {sectionKey === 'reports' && (
            <div className="mt-6 space-y-4">
              <div className="rounded-xl border border-gray-200 p-4">
                <p className="text-sm font-semibold text-gray-900">Monthly Monetization Summary</p>
                <p className="text-xs text-gray-600 mt-1">Top performing stream: Advertising Revenue Model (34% of total).</p>
              </div>
              <div className="rounded-xl border border-gray-200 p-4">
                <p className="text-sm font-semibold text-gray-900">Affiliate Performance</p>
                <p className="text-xs text-gray-600 mt-1">Top partner: SkillBridge (2,430 clicks, 412 conversions).</p>
              </div>
            </div>
          )}

          {sectionKey === 'settings' && (
            <div className="mt-6 p-4 rounded-xl border border-blue-100 bg-blue-50">
              <p className="text-sm text-blue-900 font-semibold mb-2">Privacy Policy</p>
              <p className="text-sm text-blue-700 mb-3">Quick legal links for policy review.</p>
              <div className="flex gap-3 text-sm">
                <Link href="/privacy-policy" className="text-blue-600 hover:underline">General Privacy Overview</Link>
                <Link href="/terms" className="text-blue-600 hover:underline">Terms & Conditions</Link>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

