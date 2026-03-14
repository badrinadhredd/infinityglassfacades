import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-primary text-brand-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Brief */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img 
                src="assets/logo.png" 
                alt="INFINITY GLASS" 
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="text-brand-secondary/80 text-sm leading-relaxed">
              Leading provider of architectural glass and aluminium solutions in Hyderabad since 2012. Specializing in complete design, engineering, and installation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-accent transition-colors">
                <Instagram size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-accent transition-colors">
                <Facebook size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 border-b border-brand-accent/30 pb-2 inline-block">Quick Links</h4>
            <ul className="space-y-3 text-brand-secondary text-sm">
              <li><Link to="/" className="hover:text-brand-accent transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-brand-accent transition-colors">Our Services</Link></li>
              <li><Link to="/products" className="hover:text-brand-accent transition-colors">Products</Link></li>
              <li><Link to="/gallery" className="hover:text-brand-accent transition-colors">Project Gallery</Link></li>
              <li><Link to="/contact" className="hover:text-brand-accent transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 border-b border-brand-accent/30 pb-2 inline-block">Services</h4>
            <ul className="space-y-3 text-brand-secondary text-sm">
              <li><Link to="/services" className="hover:text-brand-accent transition-colors">Glass Façades</Link></li>
              <li><Link to="/services" className="hover:text-brand-accent transition-colors">UPVC Windows</Link></li>
              <li><Link to="/services" className="hover:text-brand-accent transition-colors">Aluminium Doors</Link></li>
              <li><Link to="/services" className="hover:text-brand-accent transition-colors">Interior Glass</Link></li>
              <li><Link to="/services" className="hover:text-brand-accent transition-colors">Glass Railings</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 border-b border-brand-accent/30 pb-2 inline-block">Get In Touch</h4>
            <ul className="space-y-4 text-brand-secondary text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-brand-accent shrink-0" />
                <span>Madhapur, Hyderabad - 500081</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-brand-accent shrink-0" />
                <span>+91 90630 09999</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-brand-accent shrink-0" />
                <span>INFINITY.glass@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center text-xs text-brand-secondary">
          <p>© {new Date().getFullYear()} INFINITY GLASS. All Rights Reserved. Complete Glass & Aluminium Solutions.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
