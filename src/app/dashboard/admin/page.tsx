'use client';

import {
  LayoutDashboard, Users, Briefcase, BarChart2, FileText, Settings, Bell,
  TrendingUp, TrendingDown, AlertCircle, CheckCircle, XCircle, Frown
} from 'lucide-react';
import {
  LineChart, Line, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, ResponsiveContainer, Tooltip, CartesianGrid, Legend, AreaChart, Area
} from 'recharts';

const revenueData = [
  { month: 'Jan', revenue: 42000 }, { month: 'Feb', revenue: 58000 },
  { month: 'Mar', revenue: 51000 }, { month: 'Apr', revenue: 73000 },
  { month: 'May', revenue: 89000 }, { month: 'Jun', revenue: 95000 },
  { month: 'Jul', revenue: 112000 }, { month: 'Aug', revenue: 98000 },
];

const userGrowthData = [
  { month: 'Jan', students: 3200, recruiters: 280 },
  { month: 'Feb', students: 4100, recruiters: 340 },
  { month: 'Mar', students: 4800, recruiters: 390 },
  { month: 'Apr', students: 5900, recruiters: 480 },
  { month: 'May', students: 7200, recruiters: 560 },
  { month: 'Jun', students: 9100, recruiters: 680 },
];

const jobTrendsData = [
  { week: 'W1', posted: 142 }, { week: 'W2', posted: 189 },
  { week: 'W3', posted: 168 }, { week: 'W4', posted: 215 },
  { week: 'W5', posted: 198 }, { week: 'W6', posted: 244 },
];

const campaignData = [
  { name: 'Google Ads – Career Fair', impressions: '125,000', clicks: '4,800', conversions: '320', ctr: '3.84%', status: 'Active' },
  { name: 'LinkedIn Sponsored', impressions: '89,000', clicks: '3,100', conversions: '210', ctr: '3.48%', status: 'Active' },
  { name: 'Instagram Stories', impressions: '67,000', clicks: '2,200', conversions: '145', ctr: '3.28%', status: 'Paused' },
  { name: 'Email Drip Campaign', impressions: '45,000', clicks: '5,400', conversions: '890', ctr: '12.0%', status: 'Active' },
];

const issueBreakdown = [
  { name: 'Payment Issues', value: 35, color: '#ef4444' },
  { name: 'Login/Auth', value: 22, color: '#f59e0b' },
  { name: 'Job Not Found', value: 18, color: '#3b82f6' },
  { name: 'Profile Bug', value: 15, color: '#8b5cf6' },
  { name: 'Other', value: 10, color: '#94a3b8' },
];

const complaints = [
  { id: 1, user: 'Rahul K.', issue: 'Payment not processed for premium', severity: 'High', date: '7 Apr', status: 'Open' },
  { id: 2, user: 'Priya S.', issue: 'Unable to upload resume', severity: 'Medium', date: '6 Apr', status: 'Resolved' },
  { id: 3, user: 'Arjun M.', issue: 'Job listing shows wrong salary', severity: 'Medium', date: '6 Apr', status: 'Open' },
  { id: 4, user: 'TechFlow Rec.', issue: 'Applicant emails not delivering', severity: 'High', date: '5 Apr', status: 'Open' },
];

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', active: true },
  { icon: Users, label: 'Users' },
  { icon: Briefcase, label: 'Jobs' },
  { icon: BarChart2, label: 'Analytics' },
  { icon: FileText, label: 'Reports' },
  { icon: Settings, label: 'Settings' },
];

const severityColor: Record<string, string> = { High: 'badge-red', Medium: 'badge-yellow', Low: 'badge-blue' };
const statusColor2: Record<string, string> = { Open: 'badge-red', Resolved: 'badge-green', Active: 'badge-green', Paused: 'badge-yellow' };

const fmt = (n: number) => n >= 1000 ? `₹${(n / 1000).toFixed(0)}K` : `₹${n}`;

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="hidden lg:flex w-64 bg-white border-r border-gray-200 flex-col shrink-0">
        <div className="flex items-center gap-2 px-6 py-5 border-b border-gray-100">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <TrendingUp className="w-4 h-4 text-white" />
          </div>
          <span className="font-bold text-gray-900">Growth<span className="text-blue-600">Grid</span></span>
        </div>
        <div className="bg-red-50 mx-4 my-3 px-3 py-2 rounded-lg border border-red-100 flex items-center gap-2">
          <div className="w-2 h-2 bg-red-500 rounded-full" />
          <span className="text-xs font-semibold text-red-700">Admin Panel</span>
        </div>
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {navItems.map(item => (
            <button key={item.label} className={item.active ? 'sidebar-link-active w-full text-left' : 'sidebar-link w-full text-left'}>
              <item.icon className="w-5 h-5" />{item.label}
            </button>
          ))}
        </nav>
        <div className="p-4 border-t border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-red-100 flex items-center justify-center font-bold text-red-700">A</div>
            <div>
              <p className="text-sm font-semibold text-gray-900">Admin</p>
              <p className="text-xs text-gray-500">Super Admin</p>
            </div>
          </div>
        </div>
      </aside>

      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between sticky top-0 z-30">
          <div>
            <h1 className="font-bold text-gray-900">Admin Dashboard</h1>
            <p className="text-xs text-gray-500">Platform overview · April 2026</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="relative p-2 rounded-lg hover:bg-gray-100">
              <Bell className="w-5 h-5 text-gray-600" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
            </button>
            <div className="w-9 h-9 rounded-full bg-red-100 flex items-center justify-center font-bold text-red-700">A</div>
          </div>
        </header>

        <main className="flex-1 p-6 space-y-6 overflow-y-auto">
          {/* Top Stat Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: 'Total Users', value: '54,219', icon: Users, color: 'text-blue-600 bg-blue-100', change: '+1.2K this week', up: true },
              { label: 'Active Recruiters', value: '3,847', icon: Briefcase, color: 'text-purple-600 bg-purple-100', change: '+184 this month', up: true },
              { label: 'Jobs Posted', value: '18,432', icon: Briefcase, color: 'text-green-600 bg-green-100', change: '+244 this week', up: true },
              { label: 'Total Revenue', value: '₹6.18L', icon: TrendingUp, color: 'text-orange-600 bg-orange-100', change: '+18% vs last mo', up: true },
            ].map((s, i) => (
              <div key={i} className="stat-card">
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${s.color}`}>
                    <s.icon className="w-5 h-5" />
                  </div>
                  <span className={`flex items-center gap-1 text-xs font-medium ${s.up ? 'text-green-600' : 'text-red-500'}`}>
                    {s.up ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />} {s.change}
                  </span>
                </div>
                <p className="text-2xl font-bold text-gray-900">{s.value}</p>
                <p className="text-xs text-gray-500 mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Charts Row 1 */}
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Revenue Chart */}
            <div className="card p-6">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <h2 className="font-bold text-gray-900">Monthly Revenue</h2>
                  <p className="text-xs text-gray-500">Jan – Aug 2026</p>
                </div>
                <div className="text-right">
                  <p className="text-xl font-bold text-gray-900">₹6.18L</p>
                  <p className="text-xs text-green-600 font-medium flex items-center gap-1 justify-end"><TrendingUp className="w-3 h-3" /> +24% YoY</p>
                </div>
              </div>
              <div style={{ height: 220 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={revenueData} margin={{ top: 0, right: 0, left: -10, bottom: 0 }}>
                    <defs>
                      <linearGradient id="revGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#2563eb" stopOpacity={0.2} />
                        <stop offset="95%" stopColor="#2563eb" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
                    <XAxis dataKey="month" tick={{ fontSize: 11, fill: '#9ca3af' }} axisLine={false} tickLine={false} />
                    <YAxis tick={{ fontSize: 11, fill: '#9ca3af' }} axisLine={false} tickLine={false} tickFormatter={fmt} />
                    <Tooltip contentStyle={{ borderRadius: '8px', border: '1px solid #e5e7eb', fontSize: 12 }} formatter={(v: number) => [`₹${v.toLocaleString()}`, 'Revenue']} />
                    <Area type="monotone" dataKey="revenue" stroke="#2563eb" fill="url(#revGrad)" strokeWidth={2.5} dot={false} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* User Growth */}
            <div className="card p-6">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <h2 className="font-bold text-gray-900">User Growth</h2>
                  <p className="text-xs text-gray-500">Students vs Recruiters</p>
                </div>
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-sm bg-blue-500 inline-block" /> Students</span>
                  <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-sm bg-purple-500 inline-block" /> Recruiters</span>
                </div>
              </div>
              <div style={{ height: 220 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={userGrowthData} margin={{ top: 0, right: 0, left: -10, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
                    <XAxis dataKey="month" tick={{ fontSize: 11, fill: '#9ca3af' }} axisLine={false} tickLine={false} />
                    <YAxis tick={{ fontSize: 11, fill: '#9ca3af' }} axisLine={false} tickLine={false} />
                    <Tooltip contentStyle={{ borderRadius: '8px', border: '1px solid #e5e7eb', fontSize: 12 }} />
                    <Bar dataKey="students" fill="#3b82f6" radius={[3, 3, 0, 0]} />
                    <Bar dataKey="recruiters" fill="#8b5cf6" radius={[3, 3, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Job Trends + Campaign Table */}
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Job Posting Trends */}
            <div className="card p-6">
              <h2 className="font-bold text-gray-900 mb-1">Job Posting Trends</h2>
              <p className="text-xs text-gray-500 mb-5">Weekly new postings</p>
              <div style={{ height: 200 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={jobTrendsData} margin={{ top: 0, right: 0, left: -25, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
                    <XAxis dataKey="week" tick={{ fontSize: 11, fill: '#9ca3af' }} axisLine={false} tickLine={false} />
                    <YAxis tick={{ fontSize: 11, fill: '#9ca3af' }} axisLine={false} tickLine={false} />
                    <Tooltip contentStyle={{ borderRadius: '8px', border: '1px solid #e5e7eb', fontSize: 12 }} />
                    <Line type="monotone" dataKey="posted" stroke="#10b981" strokeWidth={2.5} dot={{ fill: '#10b981', r: 4 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Campaign Performance */}
            <div className="lg:col-span-2 card p-6">
              <h2 className="font-bold text-gray-900 mb-5">Campaign Performance</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-100">
                      {['Campaign', 'Impressions', 'Clicks', 'Conversions', 'CTR', 'Status'].map(h => (
                        <th key={h} className="text-left text-xs font-semibold text-gray-500 pb-3 pr-4">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {campaignData.map((c, i) => (
                      <tr key={i} className="hover:bg-gray-50 transition-colors">
                        <td className="py-3 pr-4 text-sm font-medium text-gray-900 max-w-[160px] truncate">{c.name}</td>
                        <td className="py-3 pr-4 text-sm text-gray-600">{c.impressions}</td>
                        <td className="py-3 pr-4 text-sm text-gray-600">{c.clicks}</td>
                        <td className="py-3 pr-4 text-sm font-semibold text-blue-600">{c.conversions}</td>
                        <td className="py-3 pr-4 text-sm font-semibold text-green-600">{c.ctr}</td>
                        <td className="py-3"><span className={`badge ${statusColor2[c.status]}`}>{c.status}</span></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Feedback Analysis */}
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Pie Chart */}
            <div className="card p-6">
              <h2 className="font-bold text-gray-900 mb-1">Issue Categories</h2>
              <p className="text-xs text-gray-500 mb-4">User-reported feedback breakdown</p>
              <div style={{ height: 200 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={issueBreakdown} cx="50%" cy="50%" innerRadius={50} outerRadius={80} paddingAngle={3} dataKey="value">
                      {issueBreakdown.map((entry, index) => (
                        <Cell key={index} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip contentStyle={{ borderRadius: '8px', border: '1px solid #e5e7eb', fontSize: 12 }} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="space-y-2 mt-2">
                {issueBreakdown.map((item, i) => (
                  <div key={i} className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full" style={{ background: item.color }} />
                      <span className="text-gray-600">{item.name}</span>
                    </div>
                    <span className="font-semibold text-gray-800">{item.value}%</span>
                  </div>
                ))}
              </div>

              {/* Most reported */}
              <div className="mt-4 p-3 bg-red-50 border border-red-100 rounded-xl flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-semibold text-red-700">Most Reported Issue</p>
                  <p className="text-xs text-red-600 mt-0.5">Payment Issues (35%) — escalated to engineering team</p>
                </div>
              </div>
            </div>

            {/* Complaints Table */}
            <div className="lg:col-span-2 card p-6">
              <div className="flex items-center justify-between mb-5">
                <h2 className="font-bold text-gray-900">Recent Complaints</h2>
                <button className="text-blue-600 text-sm font-medium hover:underline">View all</button>
              </div>
              <div className="space-y-3">
                {complaints.map(c => (
                  <div key={c.id} className="flex items-start gap-4 p-4 rounded-xl border border-gray-100 hover:border-gray-200 transition-all">
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center font-bold text-gray-600 text-sm shrink-0">
                      {c.user.charAt(0)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="text-sm font-semibold text-gray-900">{c.user}</p>
                        <span className={`badge ${severityColor[c.severity]}`}>{c.severity}</span>
                      </div>
                      <p className="text-xs text-gray-600 truncate">{c.issue}</p>
                      <p className="text-xs text-gray-400 mt-1">{c.date}</p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className={`badge ${statusColor2[c.status]}`}>{c.status}</span>
                      {c.status === 'Open' && (
                        <button className="text-xs bg-blue-600 text-white px-2.5 py-1 rounded-lg font-medium hover:bg-blue-700 transition-colors">Resolve</button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
