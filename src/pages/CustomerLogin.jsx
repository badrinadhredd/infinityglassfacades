import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Phone, CheckCircle2, ArrowLeft, MessageSquare, ShieldCheck } from 'lucide-react';

export default function CustomerLogin() {
  const navigate = useNavigate();
  const [step, setStep] = useState('phone'); // 'phone' or 'otp'
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState(['', '', '', '']);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    let interval;
    if (timer > 0) {
      interval = setInterval(() => setTimer(t => t - 1), 1000);
    }
    return () => clearInterval(interval);
  }, [timer]);

  const handleGetOTP = (e) => {
    e.preventDefault();
    if (phone.length >= 10) {
      setStep('otp');
      setTimer(30);
    }
  };

  const handleVerify = (e) => {
    e.preventDefault();
    if (otp.join('').length === 4) {
      navigate('/dashboard');
    }
  };

  const handleOtpChange = (index, value) => {
    if (isNaN(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);
    
    // Auto focus next
    if (value && index < 3) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
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
          <div className="w-16 h-16 bg-brand-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Phone className="text-brand-accent" size={32} />
          </div>
          <h2 className="mt-6 text-3xl font-extrabold font-display text-brand-white italic">
            Welcome <span className="text-brand-accent">Back</span>
          </h2>
          <p className="mt-2 text-sm text-brand-secondary/80 font-medium">
            {step === 'phone' ? 'Enter your mobile to receive an OTP' : 'Verify the 4-digit code sent to your phone'}
          </p>
        </div>

        {step === 'phone' ? (
          <form className="mt-8 space-y-6" onSubmit={handleGetOTP}>
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center space-x-2 text-brand-secondary font-bold border-r border-white/10 pr-3">
                <span>+91</span>
              </div>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').substring(0, 10))}
                className="w-full pl-20 pr-4 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none transition-all placeholder:text-gray-600 text-lg tracking-widest font-bold"
                placeholder="98765 43210"
              />
            </div>

            <button
              type="submit"
              disabled={phone.length < 10}
              className="w-full py-4 bg-brand-accent text-white rounded-xl font-bold shadow-lg shadow-brand-accent/20 hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
            >
              <span>Get Verification Code</span>
              <MessageSquare size={18} />
            </button>
          </form>
        ) : (
          <form className="mt-8 space-y-8" onSubmit={handleVerify}>
            <div className="flex justify-center gap-4">
              {otp.map((digit, idx) => (
                <input
                  key={idx}
                  id={`otp-${idx}`}
                  type="text"
                  maxLength="1"
                  value={digit}
                  onChange={(e) => handleOtpChange(idx, e.target.value)}
                  className="w-16 h-20 text-center text-3xl font-bold bg-white/5 border border-white/10 rounded-2xl text-brand-accent focus:ring-2 focus:ring-brand-accent outline-none transition-all"
                />
              ))}
            </div>

            <div className="text-center space-y-4">
              <button
                type="submit"
                disabled={otp.join('').length < 4}
                className="w-full py-4 bg-brand-accent text-white rounded-xl font-bold shadow-lg shadow-brand-accent/20 hover:opacity-90 transition-all disabled:opacity-50 flex items-center justify-center space-x-2"
              >
                <ShieldCheck size={20} />
                <span>Verify & Login</span>
              </button>

              <div className="text-sm font-medium">
                {timer > 0 ? (
                  <p className="text-brand-secondary/60">Resend code in <span className="text-brand-accent font-bold">{timer}s</span></p>
                ) : (
                  <button 
                    type="button"
                    onClick={() => { setTimer(30); setOtp(['', '', '', '']); }}
                    className="text-brand-accent hover:underline font-bold"
                  >
                    Resend Code
                  </button>
                )}
              </div>
            </div>
          </form>
        )}

        <div className="mt-8 pt-8 border-t border-white/5 text-center">
          <p className="text-xs text-brand-secondary/40 leading-relaxed italic">
            By proceeding, you agree to receive communications from INFINITY GLASS via SMS for authentication.
          </p>
        </div>
      </div>
    </div>
  );
}
