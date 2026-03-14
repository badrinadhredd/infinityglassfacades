import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Contact() {
  const location = useLocation();
  const [selectedService, setSelectedService] = useState('Other');

  useEffect(() => {
    if (location.state && location.state.service) {
      const service = location.state.service.toLowerCase();
      if (service.includes('facade') || service.includes('façade') || service.includes('glazing')) {
        setSelectedService('Glass Façade');
      } else if (service.includes('window')) {
        setSelectedService('UPVC Windows');
      } else if (service.includes('door')) {
        setSelectedService('Aluminium Doors');
      } else if (service.includes('interior') || service.includes('shower') || service.includes('partition') || service.includes('mirror')) {
        setSelectedService('Interior Glass');
      } else if (service.includes('railing')) {
        setSelectedService('Railing Systems');
      } else {
        setSelectedService('Other');
      }
    }
  }, [location.state]);

  return (
    <div className="pt-24 pb-16 bg-brand-primary min-h-screen text-brand-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-16 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold font-display text-brand-white mb-4">Get in Touch</h1>
          <p className="text-brand-secondary/80 max-w-2xl">Have a project in mind? Contact INFINITY GLASS for professional glass and aluminium solutions.</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-white/5 p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-brand-white mb-8">Request a Quote</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-brand-white/80 mb-2">Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none transition-all" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-brand-white/80 mb-2">Phone</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none transition-all" placeholder="+91 XXXXX XXXXX" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-brand-white/80 mb-2">Email</label>
                <input type="email" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none transition-all" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-sm font-bold text-brand-white/80 mb-2">Service Required</label>
                <select 
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none transition-all appearance-none"
                >
                  <option className="bg-brand-primary">Glass Façade</option>
                  <option className="bg-brand-primary">UPVC Windows</option>
                  <option className="bg-brand-primary">Aluminium Doors</option>
                  <option className="bg-brand-primary">Interior Glass</option>
                  <option className="bg-brand-primary">Railing Systems</option>
                  <option className="bg-brand-primary">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-brand-white/80 mb-2">Message</label>
                <textarea rows="4" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none transition-all" placeholder="Tell us about your project..."></textarea>
              </div>
              <button className="w-full py-4 bg-brand-accent text-white rounded-xl font-bold hover:bg-opacity-90 transition-all shadow-lg shadow-brand-accent/20">
                Send Message
              </button>
            </form>
          </div>

          {/* Info & Map */}
          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4 p-6 rounded-2xl bg-white/5 border border-white/10">
                <div className="p-3 bg-brand-accent/10 rounded-xl text-brand-accent">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-white">Call Us</h4>
                  <p className="text-sm text-brand-secondary font-medium">+91 90630 09999, 90000 20007</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-6 rounded-2xl bg-white/5 border border-white/10">
                <div className="p-3 bg-brand-accent/10 rounded-xl text-brand-accent">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-white">Email Us</h4>
                  <p className="text-sm text-brand-secondary font-medium leading-relaxed">
                    INFINITY.glass@gmail.com<br />
                    INFINITYglass.ravi@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-6 rounded-2xl bg-white/5 border border-white/10 md:col-span-2">
                <div className="p-3 bg-brand-accent/10 rounded-xl text-brand-accent">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-white">Our Office</h4>
                  <p className="text-sm text-brand-secondary font-medium leading-relaxed">
                    FLAT NO: 101, PLOT NO: 66, <br />
                    CHALLA’S JANAKIRAM RESIDENCY, <br />
                    BEVERLY HILLS, G.B.PET, <br />
                    MADHAPUR, HYDERABAD – 500 081.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-6 rounded-2xl bg-white/5 border border-white/10 md:col-span-2">
                <div className="p-3 bg-brand-accent/10 rounded-xl text-brand-accent">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-white">Business Hours</h4>
                  <p className="text-sm text-brand-secondary font-medium">Mon - Sat: 9:00 AM - 7:00 PM</p>
                </div>
              </div>
            </div>

            <div className="h-80 rounded-3xl bg-white/5 overflow-hidden border border-white/10 shadow-2xl relative group">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1903.136809171209!2d78.390886!3d17.4465492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9161a065963b%3A0x6a0589d81373562a!2sChalla&#39;s+Janaki+Ram+Residency!5e0!3m2!1sen!2sin!4v1710405000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: 'grayscale(1) invert(1) contrast(0.9) brightness(0.9)' }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
                className="opacity-70 group-hover:opacity-100 transition-opacity duration-500"
              ></iframe>
              <div className="absolute inset-0 pointer-events-none border-[12px] border-brand-primary/20"></div>
              
              <a 
                href="https://maps.app.goo.gl/hG5c9Rk9Uv8Lq7vY6" 
                target="_blank" 
                rel="noopener noreferrer"
                className="absolute bottom-6 right-6 px-4 py-2 bg-brand-accent text-brand-primary text-[10px] font-bold uppercase rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-all hover:scale-105"
              >
                View on Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
