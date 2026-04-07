'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Search, MapPin, Briefcase, BookOpen, TrendingUp, Users, Building2,
  Star, ChevronRight, ArrowRight, CheckCircle, Menu, X, Award, Zap
} from 'lucide-react';

const internships = [
  { id: 1, title: 'Frontend Developer Intern', company: 'TechFlow Inc.', location: 'Remote', stipend: '₹15,000/mo', logo: 'TF', color: 'bg-blue-100 text-blue-700', duration: '3 months' },
  { id: 2, title: 'Product Design Intern', company: 'CreativePulse', location: 'Bangalore', stipend: '₹20,000/mo', logo: 'CP', color: 'bg-purple-100 text-purple-700', duration: '6 months' },
  { id: 3, title: 'Data Analytics Intern', company: 'DataMetrics', location: 'Hyderabad', stipend: '₹18,000/mo', logo: 'DM', color: 'bg-green-100 text-green-700', duration: '3 months' },
];

const jobs = [
  { id: 1, title: 'Senior Software Engineer', company: 'Google', location: 'Bangalore', salary: '₹40–65 LPA', logo: 'G', color: 'bg-red-100 text-red-700', type: 'Full-time' },
  { id: 2, title: 'Product Manager', company: 'Flipkart', location: 'Bangalore', salary: '₹30–50 LPA', logo: 'F', color: 'bg-yellow-100 text-yellow-700', type: 'Full-time' },
  { id: 3, title: 'Backend Engineer', company: 'Razorpay', location: 'Remote', salary: '₹25–40 LPA', logo: 'R', color: 'bg-indigo-100 text-indigo-700', type: 'Full-time' },
];

const testimonials = [
  { name: 'Rahul Sharma', role: 'SWE at Google', content: 'GrowthGrid helped me land my dream internship at a top startup. The platform is incredibly intuitive and the job matches were spot on.', rating: 5 },
  { name: 'Priya Patel', role: 'Product Designer', content: 'I went from a graphic designer to a UX role in just 4 months. The courses and job recommendations were exactly what I needed.', rating: 5 },
  { name: 'Aryan Mehta', role: 'Marketing Lead at Zomato', content: 'As a recruiter I found 3 perfect candidates in 2 weeks. The quality of talent on GrowthGrid is exceptional.', rating: 5 },
];

const categories = [
  { name: 'Technology', icon: Zap, count: '12,400+', color: 'bg-blue-50 text-blue-600 border-blue-200' },
  { name: 'Design & UX', icon: Award, count: '3,200+', color: 'bg-purple-50 text-purple-600 border-purple-200' },
  { name: 'Marketing', icon: TrendingUp, count: '5,800+', color: 'bg-green-50 text-green-600 border-green-200' },
  { name: 'Finance', icon: Building2, count: '4,100+', color: 'bg-yellow-50 text-yellow-600 border-yellow-200' },
  { name: 'Education', icon: BookOpen, count: '2,900+', color: 'bg-red-50 text-red-600 border-red-200' },
  { name: 'Internships', icon: Briefcase, count: '8,700+', color: 'bg-indigo-50 text-indigo-600 border-indigo-200' },
];

export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Growth<span className="text-blue-600">Grid</span></span>
            </div>

            <nav className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-sm font-medium text-blue-600">Home</Link>
              <Link href="#internships" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">Internships</Link>
              <Link href="#jobs" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">Jobs</Link>
              <Link href="#" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">Courses</Link>
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <Link href="/auth" className="btn-ghost text-sm">Log In</Link>
              <Link href="/auth" className="btn-primary text-sm">Register Free</Link>
            </div>

            <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
          {menuOpen && (
            <div className="md:hidden pb-4 pt-2 border-t border-gray-100 space-y-1">
              {['Home', 'Internships', 'Jobs', 'Courses'].map(item => (
                <Link key={item} href="#" className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg">{item}</Link>
              ))}
              <div className="flex gap-2 px-4 pt-2">
                <Link href="/auth" className="btn-secondary flex-1 text-center text-sm">Log In</Link>
                <Link href="/auth" className="btn-primary flex-1 text-center text-sm">Register</Link>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-50 pt-20 pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/40 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              <Star className="w-4 h-4 fill-current" /> India's #1 Career Platform
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
              Map Your Future,<br />
              <span className="text-blue-600">Build Your Career</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Connect with top companies, find dream internships, and land your ideal job — all in one powerful platform.
            </p>

            {/* Search Bar */}
            <div className="bg-white rounded-2xl shadow-xl p-2 max-w-3xl mx-auto flex flex-col sm:flex-row gap-2 border border-gray-200">
              <div className="flex items-center gap-2 flex-1 bg-gray-50 rounded-xl px-4 py-3">
                <Search className="w-5 h-5 text-gray-400 shrink-0" />
                <input className="bg-transparent flex-1 text-sm outline-none placeholder:text-gray-400" placeholder="Job title, skills, or company..." />
              </div>
              <div className="flex items-center gap-2 flex-1 bg-gray-50 rounded-xl px-4 py-3">
                <MapPin className="w-5 h-5 text-gray-400 shrink-0" />
                <input className="bg-transparent flex-1 text-sm outline-none placeholder:text-gray-400" placeholder="Location (e.g., Bangalore)" />
              </div>
              <button className="btn-primary shrink-0 px-8 rounded-xl">Search Jobs</button>
            </div>

            <p className="text-sm text-gray-500 mt-4">Popular: React Developer, Product Manager, Data Scientist, UI/UX Designer</p>

            <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
              <Link href="/auth" className="btn-primary text-base px-8 py-3">Explore Jobs</Link>
              <Link href="/auth" className="btn-secondary text-base px-8 py-3">Post a Job</Link>
            </div>
          </div>

          {/* Stats pills */}
          <div className="flex flex-wrap justify-center gap-6 mt-16">
            {[
              { icon: Users, value: '50,000+', label: 'Active Students' },
              { icon: Building2, value: '10,000+', label: 'Partner Companies' },
              { icon: Briefcase, value: '25,000+', label: 'Placements Made' },
              { icon: CheckCircle, value: '98%', label: 'Satisfaction Rate' },
            ].map((s, i) => (
              <div key={i} className="flex items-center gap-3 bg-white rounded-xl px-5 py-3 shadow-sm border border-gray-200">
                <div className="w-9 h-9 bg-blue-100 rounded-lg flex items-center justify-center">
                  <s.icon className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-lg leading-tight">{s.value}</p>
                  <p className="text-xs text-gray-500">{s.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Browse by Category</h2>
            <p className="text-gray-500">Find opportunities in your area of expertise</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((cat, i) => (
              <button key={i} className={`card p-5 text-center border cursor-pointer hover:scale-105 transition-transform ${cat.color}`}>
                <cat.icon className="w-8 h-8 mx-auto mb-3" />
                <p className="font-semibold text-sm mb-1">{cat.name}</p>
                <p className="text-xs opacity-70">{cat.count} openings</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Internships */}
      <section id="internships" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Internships</h2>
              <p className="text-gray-500">Curated opportunities from top-tier companies</p>
            </div>
            <Link href="/auth" className="text-blue-600 font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all">
              View all <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {internships.map(intern => (
              <div key={intern.id} className="card p-6 group">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg ${intern.color}`}>
                    {intern.logo}
                  </div>
                  <span className="badge badge-green">{intern.duration}</span>
                </div>
                <h3 className="font-semibold text-gray-900 text-lg mb-1 group-hover:text-blue-600 transition-colors">{intern.title}</h3>
                <p className="text-gray-500 text-sm mb-4">{intern.company}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  <span className="badge badge-blue"><MapPin className="w-3 h-3 mr-1" />{intern.location}</span>
                  <span className="badge bg-gray-100 text-gray-600">{intern.stipend}</span>
                </div>
                <Link href="/auth" className="w-full btn-secondary text-sm text-center block">Apply Now</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Jobs */}
      <section id="jobs" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Top Job Openings</h2>
              <p className="text-gray-500">Full-time roles at leading companies</p>
            </div>
            <Link href="/auth" className="text-blue-600 font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all">
              View all <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {jobs.map(job => (
              <div key={job.id} className="card p-6 group">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg ${job.color}`}>
                    {job.logo}
                  </div>
                  <span className="badge badge-blue">{job.type}</span>
                </div>
                <h3 className="font-semibold text-gray-900 text-lg mb-1 group-hover:text-blue-600 transition-colors">{job.title}</h3>
                <p className="text-gray-500 text-sm mb-4">{job.company}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  <span className="badge badge-blue"><MapPin className="w-3 h-3 mr-1" />{job.location}</span>
                  <span className="badge badge-green">{job.salary}</span>
                </div>
                <Link href="/auth" className="w-full btn-secondary text-sm text-center block">View Details</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-3">Success Stories</h2>
            <p className="text-blue-200">Join 50,000+ professionals who built their careers with GrowthGrid</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, k) => (
                    <Star key={k} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-white/90 text-sm leading-relaxed mb-5 italic">"{t.content}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold text-white">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm">{t.name}</p>
                    <p className="text-blue-200 text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
          <p className="text-gray-500 text-lg mb-8">Create your free account today and unlock thousands of career opportunities.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/auth" className="btn-primary text-base px-10 py-3.5 rounded-xl">Start for Free</Link>
            <Link href="/auth" className="btn-secondary text-base px-10 py-3.5 rounded-xl">I'm a Recruiter</Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-white" />
                </div>
                <span className="text-white font-bold text-lg">Growth<span className="text-blue-400">Grid</span></span>
              </div>
              <p className="text-sm leading-relaxed">Empowering professionals to map their future and build their careers.</p>
            </div>
            {[
              { title: 'Explore', links: ['Internships', 'Jobs', 'Courses', 'Companies'] },
              { title: 'Company', links: ['About Us', 'Blog', 'Careers', 'Contact'] },
              { title: 'Legal', links: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'] },
            ].map((col, i) => (
              <div key={i}>
                <h4 className="text-white font-semibold mb-4">{col.title}</h4>
                <ul className="space-y-2">
                  {col.links.map(link => (
                    <li key={link}><Link href="/auth" className="text-sm hover:text-white transition-colors">{link}</Link></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm">© 2026 GrowthGrid. All rights reserved.</p>
            <p className="text-sm">Made with ❤️ for India's future workforce</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
