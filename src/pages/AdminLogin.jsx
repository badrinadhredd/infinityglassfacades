import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Mail, Lock, LogIn, ArrowLeft } from 'lucide-react';

export default function AdminLogin() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // In a real app, you'd verify credentials here
    navigate('/admin');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-primary pt-20 pb-12 px-4 sm:px-6 lg:px-8">
      <Link 
        to="/login" 
        className="absolute top-28 left-8 flex items-center space-x-2 text-brand-secondary hover:text-brand-white transition-colors group"
      >
        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
        <span className="font-bold text-sm">Back</span>
      </Link>

      <div className="max-w-md w-full space-y-8 bg-white/5 p-10 rounded-3xl shadow-2xl border border-white/10 backdrop-blur-md">
        <div className="text-center">
          <img 
            src="assets/logo.png" 
            alt="INFINITY GLASS Logo" 
            className="mx-auto h-16 w-auto object-contain mb-4"
          />
          <h2 className="text-2xl font-extrabold font-display text-brand-white italic uppercase tracking-wider">
            Admin <span className="text-brand-accent">Portal</span>
          </h2>
          <p className="mt-2 text-sm text-brand-secondary/80 font-medium italic">
            Secure Management Access
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          <div className="rounded-md space-y-4">
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
              <input
                type="email"
                required
                className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none transition-all placeholder:text-gray-600"
                placeholder="Admin Email"
              />
            </div>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
              <input
                type="password"
                required
                className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none transition-all placeholder:text-gray-600"
                placeholder="Master Password"
              />
            </div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center text-brand-secondary/60 cursor-pointer">
              <input type="checkbox" className="mr-2 rounded border-white/10 bg-white/5 text-brand-accent focus:ring-brand-accent" />
              Remember device
            </label>
            <a href="#" className="font-bold text-brand-accent hover:text-brand-accent/80 transition-colors">Emergency Access?</a>
          </div>

          <button
            type="submit"
            className="group relative w-full flex justify-center py-4 px-4 border border-transparent text-sm font-bold rounded-xl text-white bg-brand-accent hover:opacity-90 transition-all focus:outline-none shadow-lg shadow-brand-accent/20"
          >
            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
              <LogIn className="h-5 w-5 text-white/50 group-hover:text-white transition-colors" />
            </span>
            Initialize Admin Session
          </button>
        </form>
      </div>
    </div>
  );
}
