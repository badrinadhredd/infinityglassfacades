import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const products = [
  { name: "Glass Doors", category: "Doors", spec: "10mm-12mm Toughened Glass", img: "assets/products/glass_doors.png" },
  { name: "UPVC Windows", category: "Windows", spec: "Veka/LG Profiles, Multi-chamber", img: "assets/products/upvc_windows.png" },
  { name: "Aluminium Windows", category: "Windows", spec: "Schuco/AluK Systems", img: "assets/products/aluminium_windows.png" },
  { name: "Glass Railings", category: "Structures", spec: "SS 304/316 Fittings", img: "assets/products/glass_railings.png" },
  { name: "Shower Enclosures", category: "Interior", spec: "Patch Fitting, Frameless", img: "assets/products/shower_enclosures.png" },
  { name: "Glass Canopies", category: "Exterior", spec: "Laminated Safety Glass", img: "assets/products/glass_canopies.png" },
];

export default function Products() {
  const navigate = useNavigate();
  return (
    <div className="pt-24 pb-16 bg-brand-primary min-h-screen text-brand-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-16">
          <h1 className="text-4xl font-extrabold font-display text-brand-white mb-2">Product Catalog</h1>
          <p className="text-brand-secondary">Premium architectural products for high-end construction.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="group overflow-hidden bg-white/5 border border-white/10 rounded-3xl"
            >
              <div className="h-64 overflow-hidden relative">
                <img src={product.img} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-brand-primary/80 backdrop-blur-md text-white text-xs font-bold rounded-full uppercase tracking-widest">
                    {product.category}
                  </span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-brand-white mb-2">{product.name}</h3>
                <div className="space-y-4">
                  <p className="text-sm text-brand-secondary/70 leading-relaxed">High-performance architectural solutions designed for Indian climate conditions.</p>
                  <div className="text-xs font-mono bg-white/5 p-3 rounded-lg border border-white/10 text-brand-secondary">
                    <span className="font-bold text-brand-white uppercase">Specs:</span> {product.spec}
                  </div>
                  <button 
                    onClick={() => navigate('/contact', { state: { service: product.name } })}
                    className="w-full py-4 bg-brand-accent text-white rounded-2xl font-bold shadow-lg shadow-brand-accent/20 hover:bg-brand-accent/90 transition-all font-display"
                  >
                    Enquire Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
