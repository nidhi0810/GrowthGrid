'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Eye, EyeOff, TrendingUp, Shield, CheckCircle, Mail, Lock, User, ChevronDown } from 'lucide-react';

export default function AuthPage() {
  const [mode, setMode] = useState<'login' | 'signup'>('login');
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState('student');
  const [rememberMe, setRememberMe] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [agreeLoginTerms, setAgreeLoginTerms] = useState(false);

  const redirectMap: Record<string, string> = {
    student: '/dashboard/student',
    recruiter: '/dashboard/recruiter',
    admin: '/dashboard/admin',
    teacher: '/dashboard/teacher',
  };

  const termsHref = role === 'recruiter' ? '/recruiter/terms' : role === 'student' ? '/student/terms' : '/terms';
  const privacyHref = role === 'recruiter' ? '/recruiter/privacy-policy' : role === 'student' ? '/student/privacy-policy' : '/privacy-policy';

  return (
    <div className="min-h-screen flex">
      {/* Left Panel */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 flex-col justify-between p-12 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 bg-white/20 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <span className="text-white font-bold text-xl">GrowthGrid</span>
          </Link>
        </div>

        <div className="relative z-10 text-white">
          {/* Illustration Placeholder */}
          <div className="mb-10 bg-white/10 rounded-3xl p-8 border border-white/20">
            <div className="grid grid-cols-3 gap-4 mb-6">
              {[
                { label: 'Active Jobs', value: '25K+', color: 'bg-green-400' },
                { label: 'Companies', value: '10K+', color: 'bg-yellow-400' },
                { label: 'Placed', value: '50K+', color: 'bg-purple-400' },
              ].map((s, i) => (
                <div key={i} className="bg-white/10 rounded-xl p-4 text-center border border-white/10">
                  <div className={`w-2 h-2 ${s.color} rounded-full mx-auto mb-2`} />
                  <p className="text-2xl font-bold">{s.value}</p>
                  <p className="text-xs text-blue-200">{s.label}</p>
                </div>
              ))}
            </div>
            <div className="space-y-3">
              {['TechFlow hired 3 engineers this week', 'Priya landed her dream UX role', '500 new internships added today'].map((text, i) => (
                <div key={i} className="flex items-center gap-3 bg-white/5 rounded-xl p-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full shrink-0" />
                  <p className="text-sm text-blue-100">{text}</p>
                </div>
              ))}
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-4">Your career journey<br />starts here.</h2>
          <p className="text-blue-200 text-base leading-relaxed max-w-sm">
            Join 50,000+ students and professionals who found their dream roles through GrowthGrid.
          </p>
        </div>

        <div className="relative z-10 flex items-center gap-3">
          {[
            { icon: Shield, text: 'Bank-level security' },
            { icon: CheckCircle, text: 'Verified companies' },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-sm text-blue-200">
              <item.icon className="w-4 h-4" />
              <span>{item.text}</span>
              {i === 0 && <span className="text-blue-400 mx-1">•</span>}
            </div>
          ))}
        </div>
      </div>

      {/* Right Panel */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gray-50">
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <div className="lg:hidden flex justify-center mb-8">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <span className="text-gray-900 font-bold text-xl">GrowthGrid</span>
            </Link>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
            {/* Tab Toggle */}
            <div className="flex bg-gray-100 rounded-xl p-1 mb-8">
              <button
                onClick={() => setMode('login')}
                className={`flex-1 py-2.5 rounded-lg text-sm font-semibold transition-all ${mode === 'login' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-500 hover:text-gray-700'}`}
              >Log In</button>
              <button
                onClick={() => setMode('signup')}
                className={`flex-1 py-2.5 rounded-lg text-sm font-semibold transition-all ${mode === 'signup' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-500 hover:text-gray-700'}`}
              >Sign Up</button>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-1">
              {mode === 'login' ? 'Welcome back!' : 'Create your account'}
            </h2>
            <p className="text-gray-500 text-sm mb-6">
              {mode === 'login' ? 'Sign in to continue your career journey' : 'Join thousands of professionals on GrowthGrid'}
            </p>

            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); window.location.href = redirectMap[role]; }}>
              {mode === 'signup' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input type="text" className="input-field pl-10" placeholder="John Doe" required />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input type="email" className="input-field pl-10" placeholder="you@example.com" required />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input type={showPassword ? 'text' : 'password'} className="input-field pl-10 pr-10" placeholder="••••••••" required />
                  <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">I am a...</label>
                <div className="relative">
                  <select
                    value={role}
                    onChange={e => setRole(e.target.value)}
                    className="input-field appearance-none pr-10 cursor-pointer"
                  >
                    <option value="student">🎓 Student / Job Seeker</option>
                    <option value="recruiter">🏢 Recruiter / Employer</option>
                    <option value="admin">⚙️ Admin</option>
                    <option value="teacher">👩‍🏫 Course Teacher</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {mode === 'login' ? (
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" checked={rememberMe} onChange={e => setRememberMe(e.target.checked)} className="w-4 h-4 accent-blue-600 rounded" />
                      <span className="text-sm text-gray-600">Remember me</span>
                    </label>
                    <button type="button" className="text-sm text-blue-600 font-medium hover:underline">Forgot password?</button>
                  </div>
                  <label className="flex items-start gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={agreeLoginTerms}
                      onChange={e => setAgreeLoginTerms(e.target.checked)}
                      className="w-4 h-4 accent-blue-600 rounded mt-0.5"
                      required
                    />
                    <span className="text-sm text-gray-600">
                      I accept the <Link href={termsHref} className="text-blue-600 hover:underline">Terms & Conditions</Link>
                    </span>
                  </label>
                </div>
              ) : (
                <label className="flex items-start gap-2 cursor-pointer">
                  <input type="checkbox" checked={agreeTerms} onChange={e => setAgreeTerms(e.target.checked)} className="w-4 h-4 accent-blue-600 rounded mt-0.5" required />
                  <span className="text-sm text-gray-600">
                    I agree to the <Link href={termsHref} className="text-blue-600 hover:underline">Terms of Service</Link> and{' '}
                    <Link href={privacyHref} className="text-blue-600 hover:underline">Privacy Policy</Link>
                  </span>
                </label>
              )}

              <button type="submit" className="w-full btn-primary py-3 text-base rounded-xl mt-2">
                {mode === 'login' ? 'Sign In to Dashboard' : 'Create My Account'}
              </button>
            </form>

            {/* Social divider */}
            <div className="flex items-center gap-3 my-5">
              <div className="flex-1 h-px bg-gray-200" />
              <span className="text-xs text-gray-400 font-medium">OR CONTINUE WITH</span>
              <div className="flex-1 h-px bg-gray-200" />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button className="flex items-center justify-center gap-2 border border-gray-300 rounded-xl py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                <svg className="w-4 h-4" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
                Google
              </button>
              <button className="flex items-center justify-center gap-2 border border-gray-300 rounded-xl py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                <svg className="w-4 h-4" fill="#0A66C2" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                LinkedIn
              </button>
            </div>

            <div className="mt-6 pt-5 border-t border-gray-100 text-center">
              <p className="text-xs text-gray-500 flex items-center justify-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-green-500" />
                Your data is securely protected with 256-bit SSL encryption
              </p>
            </div>
          </div>

          <p className="text-center text-xs text-gray-400 mt-4">
            By continuing, you agree to our{' '}
            <Link href={termsHref} className="text-blue-600 hover:underline">Terms</Link> &{' '}
            <Link href={privacyHref} className="text-blue-600 hover:underline">Privacy Policy</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
