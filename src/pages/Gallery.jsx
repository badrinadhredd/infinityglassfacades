import { motion } from 'framer-motion';

const projects = [
  { title: "Corporate Hub Facade", category: "Commercial", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800" },
  { title: "Villa Glass Staircase", category: "Residential", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800" },
  { title: "Shopping Mall Entrance", category: "Commercial", img: "https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?q=80&w=800" },
  { title: "Skylight Installation", category: "Glass Facades", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800" },
  { title: "Modern Balcony Railing", category: "Railings", img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=800" },
  { title: "Office Glass Partitions", category: "Interior", img: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=800" },
];

export default function Gallery() {
  return (
    <div className="pt-24 pb-16 bg-brand-primary min-h-screen text-brand-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold font-display text-brand-white mb-4">Our Projects</h1>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {["All", "Commercial", "Residential", "Glass Facades", "Railings", "Interior"].map(cat => (
              <button key={cat} className="px-6 py-2 rounded-full border border-white/10 text-sm font-medium hover:bg-brand-accent hover:border-brand-accent transition-all">
                {cat}
              </button>
            ))}
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="relative group cursor-pointer overflow-hidden rounded-3xl"
            >
              <img src={project.img} alt={project.title} className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-brand-primary/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
                <span className="text-brand-accent font-bold text-xs uppercase tracking-widest mb-2">{project.category}</span>
                <h3 className="text-brand-white text-2xl font-bold">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
