import { useNavigate } from 'react-router-dom';
import { Landmark, Users, ShieldAlert, ArrowRight } from 'lucide-react';

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-primary pt-20 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full space-y-12">
        <div className="text-center">
          <Landmark className="mx-auto h-16 w-16 text-brand-accent mb-6" />
          <h1 className="text-4xl md:text-5xl font-extrabold font-display text-brand-white italic">
            INIFINITI <span className="text-brand-accent">ACCESS</span>
          </h1>
          <p className="mt-4 text-brand-secondary/80 text-lg font-medium">
            Please select your portal to continue
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Customer Portal Option */}
          <button 
            onClick={() => navigate('/login/customer')}
            className="group relative bg-white/5 border border-white/10 p-10 rounded-[2.5rem] text-left hover:border-brand-accent hover:bg-white/10 transition-all shadow-2xl backdrop-blur-sm"
          >
            <div className="w-16 h-16 bg-brand-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Users className="text-brand-accent" size={32} />
            </div>
            <h3 className="text-3xl font-bold text-brand-white mb-4 italic">Customer Portal</h3>
            <p className="text-brand-secondary/70 leading-relaxed mb-8">
              Track your service requests, view project proposals, and manage your account via secure mobile OTP.
            </p>
            <div className="flex items-center space-x-2 text-brand-accent font-bold group-hover:translate-x-2 transition-transform">
              <span>Go to Customer Login</span>
              <ArrowRight size={20} />
            </div>
          </button>

          {/* Admin Portal Option */}
          <button 
            onClick={() => navigate('/login/admin')}
            className="group relative bg-white/5 border border-white/10 p-10 rounded-[2.5rem] text-left hover:border-brand-accent hover:bg-white/10 transition-all shadow-2xl backdrop-blur-sm"
          >
            <div className="w-16 h-16 bg-brand-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <ShieldAlert className="text-brand-accent" size={32} />
            </div>
            <h3 className="text-3xl font-bold text-brand-white mb-4 italic">Administrative Hub</h3>
            <p className="text-brand-secondary/70 leading-relaxed mb-8">
              Secure access for personnel to manage leads, update product catalogs, and oversee site assets.
            </p>
            <div className="flex items-center space-x-2 text-brand-accent font-bold group-hover:translate-x-2 transition-transform">
              <span>Admin Personnel Login</span>
              <ArrowRight size={20} />
            </div>
          </button>
        </div>

        <div className="text-center pt-8">
          <p className="text-brand-secondary/40 text-sm italic font-medium">
            Designed for Architectural Excellence • Powered by INFINITY GLASS
          </p>
        </div>
      </div>
    </div>
  );
}
