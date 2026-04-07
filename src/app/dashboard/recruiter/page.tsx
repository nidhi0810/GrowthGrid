'use client';

import { useState } from 'react';
import {
  LayoutDashboard, Briefcase, Users, MessageSquare, Settings, Bell,
  Plus, Edit2, Trash2, Eye, CheckCircle, XCircle, TrendingUp, Zap, ChevronDown
} from 'lucide-react';
import {
  AreaChart, Area, XAxis, YAxis, ResponsiveContainer, Tooltip, CartesianGrid
} from 'recharts';
import Link from 'next/link';

const jobViewsData = [
  { day: 'Mon', views: 45 }, { day: 'Tue', views: 72 },
  { day: 'Wed', views: 58 }, { day: 'Thu', views: 91 },
  { day: 'Fri', views: 103 }, { day: 'Sat', views: 67 }, { day: 'Sun', views: 48 },
];

const postedJobs = [
  { id: 1, title: 'React Developer', location: 'Remote', salary: '₹25–35 LPA', applicants: 34, status: 'Active', posted: '2 Apr' },
  { id: 2, title: 'Product Manager', location: 'Bangalore', salary: '₹30–45 LPA', applicants: 21, status: 'Active', posted: '28 Mar' },
  { id: 3, title: 'Data Scientist', location: 'Hyderabad', salary: '₹28–40 LPA', applicants: 52, status: 'Paused', posted: '20 Mar' },
  { id: 4, title: 'DevOps Engineer', location: 'Chennai', salary: '₹22–32 LPA', applicants: 17, status: 'Active', posted: '15 Mar' },
];

const applicants = [
  { id: 1, name: 'Aryan Mehta', role: 'React Developer', college: 'IIT Delhi', experience: '2 yrs', status: 'Shortlisted', avatar: 'A' },
  { id: 2, name: 'Neha Singh', role: 'React Developer', college: 'NIT Trichy', experience: '1.5 yrs', status: 'Under Review', avatar: 'N' },
  { id: 3, name: 'Kunal Jain', role: 'Product Manager', college: 'IIM Bangalore', experience: '3 yrs', status: 'Shortlisted', avatar: 'K' },
  { id: 4, name: 'Pooja Reddy', role: 'Data Scientist', college: 'BITS Pilani', experience: '4 yrs', status: 'Rejected', avatar: 'P' },
];

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', active: true },
  { icon: Plus, label: 'Post Job' },
  { icon: Briefcase, label: 'Manage Jobs' },
  { icon: Users, label: 'Applicants' },
  { icon: MessageSquare, label: 'Messages' },
  { icon: Settings, label: 'Settings' },
];

const statusColor: Record<string, string> = {
  Active: 'badge-green', Paused: 'badge-yellow',
  Shortlisted: 'badge-green', 'Under Review': 'badge-yellow', Rejected: 'badge-red',
};

export default function RecruiterDashboard() {
  const [activeTab, setActiveTab] = useState('jobs');
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
          {navItems.map(item => (
            <button key={item.label} className={item.active ? 'sidebar-link-active w-full text-left' : 'sidebar-link w-full text-left'}>
              <item.icon className="w-5 h-5" />{item.label}
            </button>
          ))}
        </nav>
        <div className="p-4 border-t border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-indigo-100 flex items-center justify-center font-bold text-indigo-700">T</div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-gray-900 truncate">TechFlow Inc.</p>
              <p className="text-xs text-gray-500">Recruiter Account</p>
            </div>
          </div>
        </div>
      </aside>
      {sidebarOpen && <div className="fixed inset-0 bg-black/30 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />}

      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between sticky top-0 z-30">
          <div className="flex items-center gap-4">
            <button className="lg:hidden" onClick={() => setSidebarOpen(true)}>
              <LayoutDashboard className="w-5 h-5 text-gray-600" />
            </button>
            <div>
              <h1 className="font-bold text-gray-900">Recruiter Dashboard</h1>
              <p className="text-xs text-gray-500">TechFlow Inc. · Verified Employer</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="btn-primary text-sm flex items-center gap-2">
              <Plus className="w-4 h-4" /> Post New Job
            </button>
            <button className="relative p-2 rounded-lg hover:bg-gray-100">
              <Bell className="w-5 h-5 text-gray-600" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
            </button>
            <div className="w-9 h-9 rounded-full bg-indigo-100 flex items-center justify-center font-bold text-indigo-700">T</div>
          </div>
        </header>

        <main className="flex-1 p-6 space-y-6 overflow-y-auto">
          {/* Boost Visibility Banner */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-5 flex items-center justify-between text-white">
            <div className="flex items-center gap-3">
              <Zap className="w-6 h-6" />
              <div>
                <p className="font-bold">Boost Job Visibility</p>
                <p className="text-indigo-200 text-sm">Get 5x more applicants with sponsored listings — ₹999/week</p>
              </div>
            </div>
            <button className="bg-white text-indigo-700 font-semibold text-sm px-4 py-2 rounded-lg hover:bg-indigo-50 transition-colors shrink-0">Boost Now</button>
          </div>

          {/* Stat Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: 'Active Job Posts', value: '3', icon: Briefcase, color: 'text-blue-600 bg-blue-100', sub: '1 paused' },
              { label: 'Total Applicants', value: '124', icon: Users, color: 'text-purple-600 bg-purple-100', sub: '+18 today' },
              { label: 'Shortlisted', value: '28', icon: CheckCircle, color: 'text-green-600 bg-green-100', sub: '5 to review' },
              { label: 'Avg. Time to Hire', value: '12d', icon: TrendingUp, color: 'text-orange-600 bg-orange-100', sub: '-2 days vs avg' },
            ].map((s, i) => (
              <div key={i} className="stat-card">
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${s.color}`}>
                    <s.icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs text-gray-500">{s.sub}</span>
                </div>
                <p className="text-2xl font-bold text-gray-900">{s.value}</p>
                <p className="text-xs text-gray-500 mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Jobs & Applicants Table */}
            <div className="lg:col-span-2 card p-6">
              <div className="flex items-center gap-4 mb-5">
                <div className="flex bg-gray-100 rounded-lg p-1">
                  {['jobs', 'applicants'].map(tab => (
                    <button key={tab} onClick={() => setActiveTab(tab)} className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all capitalize ${activeTab === tab ? 'bg-white shadow-sm text-gray-900' : 'text-gray-500'}`}>
                      {tab}
                    </button>
                  ))}
                </div>
              </div>

              {activeTab === 'jobs' && (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-100">
                        {['Job Title', 'Location', 'Salary', 'Applicants', 'Status', 'Actions'].map(h => (
                          <th key={h} className="text-left text-xs font-semibold text-gray-500 pb-3 pr-4">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                      {postedJobs.map(job => (
                        <tr key={job.id} className="hover:bg-gray-50 transition-colors">
                          <td className="py-3 pr-4 text-sm font-medium text-gray-900">{job.title}</td>
                          <td className="py-3 pr-4 text-sm text-gray-500">{job.location}</td>
                          <td className="py-3 pr-4 text-sm text-gray-600">{job.salary}</td>
                          <td className="py-3 pr-4">
                            <span className="text-sm font-semibold text-blue-600">{job.applicants}</span>
                          </td>
                          <td className="py-3 pr-4">
                            <span className={`badge ${statusColor[job.status]}`}>{job.status}</span>
                          </td>
                          <td className="py-3">
                            <div className="flex items-center gap-2">
                              <button className="p-1.5 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"><Eye className="w-4 h-4" /></button>
                              <button className="p-1.5 text-gray-400 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors"><Edit2 className="w-4 h-4" /></button>
                              <button className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"><Trash2 className="w-4 h-4" /></button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {activeTab === 'applicants' && (
                <div className="space-y-3">
                  {applicants.map(a => (
                    <div key={a.id} className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 hover:border-blue-200 transition-all">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-700 shrink-0">{a.avatar}</div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-gray-900">{a.name}</p>
                        <p className="text-xs text-gray-500">{a.role} · {a.college} · {a.experience} exp</p>
                      </div>
                      <span className={`badge ${statusColor[a.status]} shrink-0`}>{a.status}</span>
                      <div className="flex gap-2 shrink-0">
                        <button className="text-xs text-blue-600 border border-blue-200 hover:bg-blue-50 px-3 py-1.5 rounded-lg transition-colors font-medium">Resume</button>
                        <button className="text-xs bg-green-600 text-white hover:bg-green-700 px-3 py-1.5 rounded-lg transition-colors font-medium flex items-center gap-1">
                          <CheckCircle className="w-3 h-3" /> Shortlist
                        </button>
                        <button className="text-xs bg-red-50 text-red-600 hover:bg-red-100 px-3 py-1.5 rounded-lg transition-colors font-medium flex items-center gap-1">
                          <XCircle className="w-3 h-3" /> Reject
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Job Views Chart */}
            <div className="card p-6">
              <h2 className="font-bold text-gray-900 text-lg mb-1">Job Views (7 days)</h2>
              <p className="text-xs text-gray-500 mb-5">All active job listings</p>
              <div style={{ height: 200 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={jobViewsData} margin={{ top: 0, right: 0, left: -25, bottom: 0 }}>
                    <defs>
                      <linearGradient id="viewGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#2563eb" stopOpacity={0.15} />
                        <stop offset="95%" stopColor="#2563eb" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
                    <XAxis dataKey="day" tick={{ fontSize: 11, fill: '#9ca3af' }} axisLine={false} tickLine={false} />
                    <YAxis tick={{ fontSize: 11, fill: '#9ca3af' }} axisLine={false} tickLine={false} />
                    <Tooltip cursor={{ stroke: '#2563eb', strokeWidth: 1, strokeDasharray: '4 4' }} contentStyle={{ borderRadius: '8px', border: '1px solid #e5e7eb', fontSize: 12 }} />
                    <Area type="monotone" dataKey="views" stroke="#2563eb" fill="url(#viewGrad)" strokeWidth={2} dot={false} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              {/* Post Job Form Preview */}
              <div className="mt-5 border-t border-gray-100 pt-5">
                <h3 className="font-semibold text-gray-900 text-sm mb-4">Quick Post Job</h3>
                <div className="space-y-3">
                  <input className="input-field text-sm" placeholder="Job title..." />
                  <input className="input-field text-sm" placeholder="Location..." />
                  <input className="input-field text-sm" placeholder="Salary range..." />
                  <button className="w-full btn-primary text-sm">Post Job</button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
