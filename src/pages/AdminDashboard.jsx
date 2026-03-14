import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, ShoppingBag, Settings, Users, Image as ImageIcon, 
  Briefcase, Bell, Search, LogOut, ArrowUpRight, TrendingUp, X, Check, Plus, MessageSquare, Phone
} from 'lucide-react';

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="bg-brand-primary border border-white/10 rounded-3xl w-full max-w-lg shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
        <div className="p-6 border-b border-white/5 flex justify-between items-center bg-white/5">
          <h3 className="text-xl font-bold text-brand-white">{title}</h3>
          <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors">
            <X size={20} className="text-brand-secondary" />
          </button>
        </div>
        <div className="p-8 text-brand-white">
          {children}
        </div>
      </div>
    </div>
  );
};

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [modalType, setModalType] = useState(null); // 'product', 'service', 'gallery', 'leads', 'lead-detail'
  const [selectedLead, setSelectedLead] = useState(null);
  const [notifications, setNotifications] = useState([]);

  const [leads, setLeads] = useState([
    { id: 1, name: "Rahul Sharma", company: "Commercial Office", service: "Spider Glazing", date: "2 hrs ago", email: "rahul@example.com", phone: "+91 98765 43210", message: "Looking for structural glazing for a 5-story office building in Gachibowli." },
    { id: 2, name: "Priya Reddy", company: "Luxury Villa", service: "Shower Cubicles", date: "5 hrs ago", email: "priya@gmail.com", phone: "+91 87654 32109", message: "Interested in frameless shower cubicles for 4 bathrooms." },
    { id: 3, name: "M.K. Constructions", company: "Apartment Project", service: "UPVC Windows", date: "Yesterday", email: "contact@mkconstructions.com", phone: "+91 76543 21098", message: "Bulk requirement for 50 units of high-end UPVC windows." }
  ]);

  const addNotification = (msg) => {
    const id = Date.now();
    setNotifications(prev => [...prev, { id, msg }]);
    setTimeout(() => {
      setNotifications(prev => prev.filter(n => n.id !== id));
    }, 3000);
  };

  const handleAction = (e, type) => {
    e.preventDefault();
    addNotification(`Successfully added ${type}!`);
    setModalType(null);
  };

  return (
    <div className="flex h-screen bg-brand-primary text-brand-white font-body relative overflow-hidden">
      {/* Toast Notifications */}
      <div className="fixed top-6 right-6 z-[110] space-y-3">
        {notifications.map(n => (
          <div key={n.id} className="glass-dark text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center space-x-3 border-l-4 border-brand-accent animate-in slide-in-from-right">
            <Check size={18} className="text-brand-accent" />
            <span className="font-bold text-sm">{n.msg}</span>
          </div>
        ))}
      </div>

      {/* Sidebar */}
      <aside className="w-64 bg-black border-r border-white/5 p-6 hidden lg:flex flex-col">
        <div className="flex items-center space-x-3 mb-12">
          <div className="w-8 h-8 bg-brand-accent text-brand-primary rounded-lg flex items-center justify-center font-bold">I</div>
          <span className="font-extrabold font-display text-lg tracking-tight italic">INFINITY <span className="text-brand-accent">ADMIN</span></span>
        </div>
        
        <nav className="space-y-1 flex-grow text-sm font-bold">
          <button className="w-full flex items-center space-x-3 px-4 py-3 bg-brand-accent text-brand-primary rounded-xl shadow-lg shadow-brand-accent/20">
            <LayoutDashboard size={18} /> <span>Overview</span>
          </button>
          <button onClick={() => setModalType('service')} className="w-full flex items-center space-x-3 px-4 py-3 text-white/60 hover:text-white hover:bg-white/5 rounded-xl transition-all">
            <Briefcase size={18} /> <span>Services</span>
          </button>
          <button onClick={() => setModalType('product')} className="w-full flex items-center space-x-3 px-4 py-3 text-white/60 hover:text-white hover:bg-white/5 rounded-xl transition-all">
            <ShoppingBag size={18} /> <span>Products</span>
          </button>
          <button onClick={() => setModalType('leads')} className="w-full flex items-center space-x-3 px-4 py-3 text-white/60 hover:text-white hover:bg-white/5 rounded-xl transition-all">
            <Users size={18} /> <span>Customer Leads</span>
          </button>
          <button onClick={() => setModalType('gallery')} className="w-full flex items-center space-x-3 px-4 py-3 text-white/60 hover:text-white hover:bg-white/5 rounded-xl transition-all">
            <ImageIcon size={18} /> <span>Project Gallery</span>
          </button>
        </nav>

        <div className="pt-6 border-t border-white/10">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center space-x-3 px-4 py-3 text-white/40 hover:text-white w-full transition-all"
          >
            <LogOut size={18} /> <span>Exit System</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow flex flex-col overflow-hidden pt-16 lg:pt-0">
        <div className="lg:hidden absolute top-4 left-4 z-50">
           <button onClick={() => navigate('/login')} className="p-2 bg-brand-accent text-brand-primary rounded-lg shadow-lg">
             <LayoutDashboard size={20} />
           </button>
        </div>
        
        {/* Header */}
        <header className="h-20 bg-black/50 backdrop-blur-md border-b border-white/5 flex items-center justify-between px-8">
          <div className="relative w-96 hidden md:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
            <input type="text" placeholder="Search inquiries or products..." className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-2 text-sm outline-none focus:ring-1 focus:ring-brand-accent transition-all text-white" />
          </div>
          <div className="flex items-center space-x-6">
            <button className="relative text-brand-secondary hover:text-brand-white transition-colors">
              <Bell size={20} />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-brand-accent text-[10px] text-brand-primary flex items-center justify-center rounded-full font-bold">3</span>
            </button>
            <div className="flex items-center space-x-3 border-l pl-6 border-white/10">
              <div className="text-right">
                <p className="text-xs font-bold text-brand-white">Admin User</p>
                <p className="text-[10px] text-brand-secondary">Super Admin</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-white/10 border-2 border-white/5 shadow-sm overflow-hidden">
                <img src="https://ui-avatars.com/api/?name=Admin+User&background=FFD700&color=000" alt="Profile" />
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Grid */}
        <div className="flex-grow p-8 overflow-y-auto space-y-8 custom-scrollbar">
          <div className="flex justify-between items-end">
            <div>
              <h2 className="text-2xl font-extrabold text-brand-white mb-2">System Overview</h2>
              <p className="text-sm text-brand-secondary/70">Real-time status of your glass solutions business.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
             <div className="bg-white/5 p-6 rounded-2xl shadow-2xl border border-white/5 backdrop-blur-sm">
              <div className="flex justify-between items-center mb-4">
                <div className="p-2 bg-brand-accent/10 text-brand-accent rounded-lg"><TrendingUp size={20}/></div>
                <span className="text-xs font-bold text-brand-accent flex items-center bg-brand-accent/10 px-2 py-1 rounded-md tracking-tight">+14% <ArrowUpRight size={12} className="ml-1"/></span>
              </div>
              <h4 className="text-brand-secondary text-xs font-bold uppercase tracking-widest mb-1">New Inquiries</h4>
              <p className="text-3xl font-extrabold text-brand-white">{leads.length + 21}</p>
            </div>
            <div className="bg-white/5 p-6 rounded-2xl shadow-2xl border border-white/5 backdrop-blur-sm">
              <div className="flex justify-between items-center mb-4">
                <div className="p-2 bg-brand-accent/10 text-brand-accent rounded-lg"><Briefcase size={20}/></div>
                <span className="text-xs font-bold text-brand-accent flex items-center bg-brand-accent/10 px-2 py-1 rounded-md tracking-tight">+8% <ArrowUpRight size={12} className="ml-1"/></span>
              </div>
              <h4 className="text-brand-secondary text-xs font-bold uppercase tracking-widest mb-1">Active Projects</h4>
              <p className="text-3xl font-extrabold text-brand-white">12</p>
            </div>
            <div className="bg-white/5 p-6 rounded-2xl shadow-2xl border border-white/5 backdrop-blur-sm">
              <div className="flex justify-between items-center mb-4">
                <div className="p-2 bg-brand-accent/10 text-brand-accent rounded-lg"><ShoppingBag size={20}/></div>
              </div>
              <h4 className="text-brand-secondary text-xs font-bold uppercase tracking-widest mb-1">Products Listed</h4>
              <p className="text-3xl font-extrabold text-brand-white">38</p>
            </div>
            <div className="bg-white/5 p-6 rounded-2xl shadow-2xl border border-white/5 backdrop-blur-sm">
              <div className="flex justify-between items-center mb-4">
                <div className="p-2 bg-brand-accent/10 text-brand-accent rounded-lg"><Users size={20}/></div>
              </div>
              <h4 className="text-brand-secondary text-xs font-bold uppercase tracking-widest mb-1">Total Customers</h4>
              <p className="text-3xl font-extrabold text-brand-white">156</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white/5 rounded-2xl shadow-2xl border border-white/5 p-8 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-8">
                <h3 className="font-bold text-brand-white text-xl">Recent Leads</h3>
                <button onClick={() => setModalType('leads')} className="text-sm font-bold text-brand-accent hover:underline">View All</button>
              </div>
              <div className="space-y-6">
                {leads.map((lead) => (
                  <div 
                    key={lead.id} 
                    onClick={() => { setSelectedLead(lead); setModalType('lead-detail'); }}
                    className="flex justify-between items-center p-4 hover:bg-white/5 rounded-xl transition-all cursor-pointer border border-transparent hover:border-white/10"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center font-bold text-brand-accent text-xs">{lead.name.charAt(0)}</div>
                      <div>
                        <p className="text-sm font-bold text-brand-white">{lead.name}</p>
                        <p className="text-[10px] text-brand-secondary/80 capitalize">{lead.company} • {lead.service}</p>
                      </div>
                    </div>
                    <p className="text-[10px] font-bold text-brand-secondary/60">{lead.date}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 rounded-2xl shadow-2xl border border-white/5 p-8 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-8">
                <h3 className="font-bold text-brand-white text-xl">Quick Actions</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <button onClick={() => setModalType('product')} className="group p-6 bg-brand-accent/10 border border-brand-accent/20 rounded-2xl text-left hover:border-brand-accent hover:bg-brand-accent transition-all">
                  <Plus className="text-brand-accent mb-4 group-hover:text-brand-primary" />
                  <p className="font-bold text-brand-white group-hover:text-brand-primary">Add New Product</p>
                  <p className="text-xs text-brand-secondary group-hover:text-brand-primary/70">Update catalog</p>
                </button>
                <button onClick={() => setModalType('gallery')} className="group p-6 bg-white/5 border border-white/10 rounded-2xl text-left hover:border-brand-accent hover:bg-white/10 transition-all">
                  <ImageIcon className="text-brand-accent mb-4" />
                  <p className="font-bold text-brand-white">Upload Project</p>
                  <p className="text-xs text-brand-secondary">Refresh gallery</p>
                </button>
                <button onClick={() => setModalType('leads')} className="p-6 bg-white/5 border border-white/10 rounded-2xl text-left hover:border-brand-accent transition-all group">
                   <p className="font-bold text-brand-white mb-1">View Leads</p>
                   <p className="text-xs text-brand-secondary">Response System</p>
                </button>
                <button className="p-6 bg-white/5 border border-white/10 rounded-2xl text-left hover:border-brand-accent transition-all group">
                   <p className="font-bold text-brand-white mb-1">User Settings</p>
                   <p className="text-xs text-brand-secondary">Permissions</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Modals */}
      <Modal isOpen={modalType === 'product'} onClose={() => setModalType(null)} title="Add New Product">
        <form onSubmit={(e) => handleAction(e, 'Product')} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-brand-secondary uppercase mb-2">Product Name</label>
            <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-brand-accent text-white" placeholder="e.g. Premium UPVC Window" />
          </div>
          <div>
            <label className="block text-xs font-bold text-brand-secondary uppercase mb-2">Specifications</label>
            <textarea required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-brand-accent text-white" rows="3" placeholder="Materials, dimensions, etc."></textarea>
          </div>
          <button type="submit" className="w-full py-4 bg-brand-accent text-brand-primary rounded-xl font-bold shadow-lg shadow-brand-accent/30 hover:opacity-90 transition-all">Save Product</button>
        </form>
      </Modal>

      <Modal isOpen={modalType === 'service'} onClose={() => setModalType(null)} title="Manage Services">
        <form onSubmit={(e) => handleAction(e, 'Service')} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-brand-secondary uppercase mb-2">Service Title</label>
            <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-brand-accent text-white" placeholder="e.g. Frameless Glass Doors" />
          </div>
          <div>
            <label className="block text-xs font-bold text-brand-secondary uppercase mb-2">Description</label>
            <textarea required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-brand-accent text-white" rows="3" placeholder="Describe the service in detail..."></textarea>
          </div>
          <button type="submit" className="w-full py-4 bg-brand-accent text-brand-primary rounded-xl font-bold shadow-lg shadow-brand-accent/30 hover:opacity-90 transition-all">Update Service</button>
        </form>
      </Modal>

      <Modal isOpen={modalType === 'gallery'} onClose={() => setModalType(null)} title="Upload Project Photo">
        <form onSubmit={(e) => handleAction(e, 'Gallery Photo')} className="space-y-6">
          <div className="border-2 border-dashed border-white/10 rounded-3xl p-12 text-center hover:border-brand-accent cursor-pointer transition-colors group bg-white/5">
            <ImageIcon className="mx-auto text-brand-secondary group-hover:text-brand-accent mb-4" size={48} />
            <p className="text-sm font-bold text-brand-white">Click to upload or drag and drop</p>
            <p className="text-xs text-brand-secondary font-medium">PNG, JPG up to 10MB</p>
          </div>
          <div>
            <label className="block text-xs font-bold text-brand-secondary uppercase mb-2">Project Category</label>
            <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-brand-accent appearance-none text-white">
              <option className="bg-brand-primary">Commercial</option>
              <option className="bg-brand-primary">Residential</option>
              <option className="bg-brand-primary">Interior</option>
            </select>
          </div>
          <button type="submit" className="w-full py-4 bg-brand-accent text-brand-primary rounded-xl font-bold hover:opacity-90 transition-all">Start Upload</button>
        </form>
      </Modal>

      <Modal isOpen={modalType === 'leads'} onClose={() => setModalType(null)} title="All Customer Leads">
        <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
          {leads.map(lead => (
            <div 
              key={lead.id} 
              onClick={() => { setSelectedLead(lead); setModalType('lead-detail'); }}
              className="p-4 border border-white/5 rounded-xl hover:bg-white/5 cursor-pointer transition-all bg-white/2"
            >
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-bold text-brand-white">{lead.name}</h4>
                <span className="text-[10px] font-bold text-brand-accent px-2 py-1 bg-brand-accent/10 rounded-md">{lead.date}</span>
              </div>
              <p className="text-xs text-brand-secondary mb-1">{lead.company} • {lead.service}</p>
              <p className="text-[10px] text-brand-secondary/60 italic">"{lead.message.substring(0, 60)}..."</p>
            </div>
          ))}
        </div>
      </Modal>

      <Modal isOpen={modalType === 'lead-detail' && selectedLead} onClose={() => setModalType('leads')} title="Lead Details">
        {selectedLead && (
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-[10px] font-bold text-brand-secondary uppercase">Contact Name</label>
                <p className="font-bold text-brand-white">{selectedLead.name}</p>
              </div>
              <div>
                <label className="text-[10px] font-bold text-brand-secondary uppercase">Project Type</label>
                <p className="font-bold text-brand-white">{selectedLead.company}</p>
              </div>
              <div>
                <label className="text-[10px] font-bold text-brand-secondary uppercase">Email</label>
                <p className="text-sm font-medium text-brand-accent">{selectedLead.email}</p>
              </div>
              <div>
                <label className="text-[10px] font-bold text-brand-secondary uppercase">Phone</label>
                <p className="text-sm font-medium text-brand-white">{selectedLead.phone}</p>
              </div>
            </div>
            <div>
              <label className="text-[10px] font-bold text-brand-secondary uppercase">Inquiry Message</label>
              <p className="mt-2 p-4 bg-white/5 rounded-xl text-sm text-brand-secondary/90 leading-relaxed border border-white/10">
                {selectedLead.message}
              </p>
            </div>
            <div className="flex space-x-4">
              <button 
                onClick={() => { addNotification('Response sent to client!'); setModalType(null); }}
                className="flex-1 py-4 bg-brand-accent text-brand-primary rounded-xl font-bold shadow-lg hover:opacity-90 transition-all"
              >
                Send Response
              </button>
              <button 
                onClick={() => { addNotification('Dialing client...'); }}
                className="flex-1 py-4 bg-white/5 border border-white/10 text-white rounded-xl font-bold hover:bg-white/10 transition-all"
              >
                Call Now
              </button>
            </div>
          </div>
        )}
      </Modal>

    </div>
  );
}
