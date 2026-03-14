import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { LayoutGrid, Square, DoorOpen, ArrowUpCircle, Maximize as WindowIcon, Construction, Layers, Zap } from 'lucide-react';

const serviceCategories = [
  {
    category: "Glass Solutions",
    items: [
      { title: "Spider Glazing / Frameless Façade Systems", icon: <LayoutGrid />, desc: "High-performance frameless glass systems for building exteriors." },
      { title: "Glass Shop Fronts", icon: <Square />, desc: "Elegant and durable glass solutions for retail storefronts." },
      { title: "Frameless Doors", icon: <DoorOpen />, desc: "Patch fitting doors for seamless interior and exterior transitions." },
      { title: "Automatic Glass Doors", icon: <Zap />, desc: "Modern sensor-based entry systems for commercial spaces." }
    ]
  },
  {
    category: "Interior Glass",
    items: [
      { title: "Shower Cubicles", icon: <Layers />, desc: "Custom-fitted tempered glass enclosures for premium bathrooms." },
      { title: "Glass Partitions", icon: <LayoutGrid />, desc: "Professional office and residential glass dividing systems." },
      { title: "Customized Mirrors", icon: <Square />, desc: "Decorative and lacquered glass for dressing areas and lounges." }
    ]
  },
  {
    category: "Specialized Systems",
    items: [
      { title: "Glass Railings", icon: <ArrowUpCircle />, desc: "SS & Glass railing systems for balconies and staircases." },
      { title: "UPVC & Aluminium Windows", icon: <WindowIcon />, desc: "Energy-efficient window systems from Veka, Schuco, and AluK." },
      { title: "Glass Canopies", icon: <Construction />, desc: "Structural glass overhangs for entrance protection." },
      { title: "ACP Cladding", icon: <Layers />, desc: "Premium aluminium composite panel cladding for modern facades." }
    ]
  }
];

export default function Services() {
  const navigate = useNavigate();
  return (
    <div className="pt-24 pb-16 bg-brand-primary min-h-screen text-brand-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold font-display text-brand-white mb-4">Our Services</h1>
          <p className="text-brand-secondary max-w-2xl mx-auto">
            From design to installation, we provide end-to-end glass and aluminium solutions tailored to your architectural needs.
          </p>
        </header>

        {serviceCategories.map((cat, idx) => (
          <div key={idx} className="mb-20">
            <h2 className="text-2xl font-bold text-brand-white mb-8 border-l-4 border-brand-accent pl-4">{cat.category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cat.items.map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5 }}
                  className="bg-white/5 rounded-2xl p-8 shadow-sm border border-white/10 flex flex-col h-full hover:shadow-md transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-accent/10 text-brand-accent flex items-center justify-center mb-6">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-brand-white mb-3">{item.title}</h3>
                  <p className="text-brand-secondary/70 text-sm mb-8 flex-grow">{item.desc}</p>
                  <button 
                    onClick={() => navigate('/contact', { state: { service: item.title } })}
                    className="w-full py-3 bg-brand-primary text-white rounded-xl font-semibold hover:bg-brand-accent transition-colors"
                  >
                    Request Service
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
