import Hero from '../components/Hero';
import { ShieldCheck, Zap, Layers, Maximize, Settings, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';

const services = [
  { icon: <Layers className="w-8 h-8" />, title: 'Glass Façades', desc: 'Modern structural glazing and spider façades.' },
  { icon: <Maximize className="w-8 h-8" />, title: 'Windows & Doors', desc: 'Premium UPVC and aluminium solutions.' },
  { icon: <Settings className="w-8 h-8" />, title: 'Interior Glass', desc: 'Partitions, shower cubicles, and mirrors.' },
  { icon: <ShieldCheck className="w-8 h-8" />, title: 'Structural Glass', desc: 'Glass canopies and frameless structures.' },
  { icon: <Zap className="w-8 h-8" />, title: 'Exterior Cladding', desc: 'High-quality ACP cladding systems.' },
  { icon: <CheckCircle className="w-8 h-8" />, title: 'Custom Solutions', desc: 'Tailored glass designs for any project.' },
];

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="bg-brand-primary text-brand-white">
      <Hero />
      
      {/* Introduction Section */}
      <section className="py-24 bg-brand-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-sm font-bold text-brand-accent tracking-widest uppercase mb-4">Established 2012</h2>
              <h3 className="text-4xl md:text-5xl font-extrabold font-display text-brand-white leading-tight mb-6">
                Redefining Spaces with Architectural Glass
              </h3>
              <p className="text-lg text-brand-white/70 leading-relaxed mb-8">
                INFINITY GLASS is a leading provider of architectural glass and aluminium solutions established in 2012 in Hyderabad. The company specializes in design, engineering, and installation of glass façade systems, windows, doors, railings, and custom glass solutions for commercial and residential projects.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="text-3xl font-bold text-brand-white">12+</h4>
                  <p className="text-sm text-brand-secondary font-medium uppercase tracking-wider">Years Experience</p>
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-brand-white">500+</h4>
                  <p className="text-sm text-brand-secondary font-medium uppercase tracking-wider">Projects Completed</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl"
            >
              <img src="assets/glass_facade_hero.png" alt="About INFINITY Glass" className="w-full h-[500px] object-cover" />
              <div className="absolute inset-0 bg-brand-accent/10 border-8 border-brand-primary/20"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-24 bg-brand-primary text-brand-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-sm font-bold text-brand-accent tracking-widest uppercase mb-4">Our Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold font-display leading-tight mb-16">
            Comprehensive Solutions
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-accent/50 transition-all group"
              >
                <div className="mb-6 text-brand-accent group-hover:scale-110 transition-transform inline-block">
                  {service.icon}
                </div>
                <h4 className="text-xl font-bold mb-4">{service.title}</h4>
                <p className="text-brand-secondary/80 text-sm leading-relaxed mb-6">{service.desc}</p>
                <button 
                  onClick={() => navigate('/contact', { state: { service: service.title } })}
                  className="w-full py-3 bg-brand-primary text-brand-white border border-white/10 rounded-xl font-semibold hover:bg-brand-accent hover:border-brand-accent transition-all text-sm"
                >
                  Request Service
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-brand-accent tracking-widest uppercase mb-4">The Infinity Advantage</h2>
            <h3 className="text-4xl font-extrabold font-display text-brand-white">Why Choose Us</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { title: 'Experienced Professionals', desc: 'Over a decade of expertise in complex glass engineering.' },
              { title: 'High-Quality Materials', desc: 'Partnering with global brands like Veka, Schuco, and AluK.' },
              { title: 'Turnkey Solutions', desc: 'From initial design to final installation, we handle it all.' },
              { title: 'Custom Designs', desc: 'Bespoke solutions tailored to your architectural vision.' },
              { title: 'Reliable Installation', desc: 'Precision fitting with focus on safety and durability.' },
              { title: 'Post-Sale Support', desc: 'Dedicated maintenance and support for all installations.' },
            ].map((item, idx) => (
              <div key={idx} className="flex space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-white/5 shadow-sm flex items-center justify-center border border-white/10">
                  <CheckCircle className="text-brand-accent" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-brand-white mb-2">{item.title}</h4>
                  <p className="text-brand-white/60 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-accent rounded-3xl p-12 text-center text-brand-white shadow-2xl shadow-brand-accent/40 relative overflow-hidden group">
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            <h3 className="text-4xl font-extrabold font-display mb-6 relative z-10">Start Your Glass Project Today</h3>
            <p className="text-xl mb-10 text-white/90 max-w-2xl mx-auto relative z-10">
              Get a free consultation and quote for your commercial or residential project in Hyderabad.
            </p>
            <Link to="/contact" className="inline-block px-10 py-4 bg-brand-white text-brand-primary rounded-full font-bold text-lg hover:shadow-xl transition-all relative z-10">
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
