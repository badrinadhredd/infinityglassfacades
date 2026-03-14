import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="assets/glass_facade_hero.png"
          alt="Modern Glass Architecture"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-brand-primary/60 backdrop-contrast-75"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold font-display text-brand-white leading-tight mb-6">
            INFINITY <span className="text-brand-accent">GLASS</span> – Complete Glass & Aluminium Solutions
          </h1>
          <p className="text-xl md:text-2xl text-brand-secondary/90 font-medium mb-10 tracking-wide uppercase">
            Design • Engineering • Installation
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
            <Link
              to="/services"
              className="px-8 py-4 bg-brand-accent text-brand-white rounded-full font-bold text-lg hover:shadow-xl hover:shadow-brand-accent/30 transition-all flex items-center justify-center space-x-2"
            >
              <span>View Services</span>
              <ArrowRight size={20} />
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 glass text-brand-white rounded-full font-bold text-lg hover:bg-white/10 transition-all border border-white/20 flex items-center justify-center"
            >
              Request Quote
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-6 h-10 border-2 border-brand-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-brand-accent rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
