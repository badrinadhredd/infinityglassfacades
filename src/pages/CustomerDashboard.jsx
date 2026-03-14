import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Package, Clock, User, LogOut, FileText, Calendar, Box, 
  X, Check, Send, Download, Phone, Mail, MapPin, Star, MessageSquareQuote 
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

export default function CustomerDashboard() {
  const navigate = useNavigate();
  const [modalType, setModalType] = useState(null); // 'profile', 'support', 'booking', 'proposals', 'new-service', 'feedback'
  const [rating, setRating] = useState(5);
  const [notifications, setNotifications] = useState([]);

  const requests = [
    { id: "IG-1042", service: "UPVC Windows", date: "2024-03-12", status: "In Reviews" },
    { id: "IG-0985", service: "Shower Cubicle", date: "2024-02-28", status: "Installation Pending" },
  ];

  const proposals = [
    { id: "PROP-92", title: "Office Facade Design", date: "Mar 10, 2024", size: "2.4 MB" },
    { id: "QUOT-45", title: "Glass Railing Estimate", date: "Mar 05, 2024", size: "1.1 MB" },
  ];

  const addNotification = (msg) => {
    const id = Date.now();
    setNotifications(prev => [...prev, { id, msg }]);
    setTimeout(() => {
      setNotifications(prev => prev.filter(n => n.id !== id));
    }, 3000);
  };

  const handleSubmit = (e, type) => {
    e.preventDefault();
    addNotification(`${type} submitted successfully!`);
    setModalType(null);
  };

  return (
    <div className="pt-24 pb-16 bg-brand-primary min-h-screen text-brand-white font-body relative overflow-hidden">
      {/* Toast Notifications */}
      <div className="fixed top-24 right-6 z-[110] space-y-3">
        {notifications.map(n => (
          <div key={n.id} className="bg-white/10 backdrop-blur-md text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center space-x-3 border-l-4 border-brand-accent animate-in slide-in-from-right">
            <Check size={18} className="text-brand-accent" />
            <span className="font-bold text-sm">{n.msg}</span>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
          <div>
            <h1 className="text-3xl font-extrabold font-display text-brand-white">Hello, Customer</h1>
            <p className="text-brand-secondary/80 font-medium italic">Welcome to your secure project dashboard.</p>
          </div>
          <button 
            onClick={() => navigate('/')}
            className="flex items-center space-x-2 px-6 py-2 bg-white/5 border border-white/10 rounded-xl font-bold text-brand-white hover:text-brand-accent hover:border-brand-accent transition-all shadow-xl backdrop-blur-md group"
          >
            <LogOut size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span>Logout</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar / Profile Area */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white/5 p-6 rounded-3xl shadow-2xl border border-white/10 backdrop-blur-sm">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-brand-accent/10 flex items-center justify-center text-brand-accent border border-brand-accent/20">
                  <User size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-white text-lg underline decoration-brand-accent decoration-2 underline-offset-4">John Client</h4>
                  <p className="text-[10px] text-brand-secondary/60 uppercase tracking-widest font-bold mt-1">Verified Member</p>
                </div>
              </div>
              <div className="space-y-4 mb-8">
                <div className="p-4 bg-white/2 rounded-2xl border border-white/5">
                  <p className="text-[10px] text-brand-secondary font-bold uppercase mb-1">Registered Email</p>
                  <p className="font-medium text-sm">client@example.com</p>
                </div>
                <div className="p-4 bg-white/2 rounded-2xl border border-white/5">
                  <p className="text-[10px] text-brand-secondary font-bold uppercase mb-1">Primary Phone</p>
                  <p className="font-medium text-sm">+91 98765 43210</p>
                </div>
              </div>
              <button 
                onClick={() => setModalType('profile')}
                className="w-full py-4 bg-brand-accent/10 text-brand-accent text-sm font-bold rounded-2xl border border-brand-accent/20 hover:bg-brand-accent hover:text-white transition-all shadow-lg shadow-brand-accent/5"
              >
                Edit Account Details
              </button>
            </div>

            <div className="bg-brand-accent p-8 rounded-3xl shadow-2xl text-white relative overflow-hidden group">
              <div className="relative z-10">
                <h4 className="font-bold text-2xl mb-2 italic">Priority Support</h4>
                <p className="text-sm text-white/80 mb-6 leading-relaxed">Direct line to our technical engineering team for project assistance.</p>
                <button 
                  onClick={() => setModalType('support')}
                  className="px-8 py-3 bg-white text-brand-accent rounded-xl text-sm font-bold shadow-xl hover:scale-105 transition-transform"
                >
                  Contact Support
                </button>
              </div>
              <Box className="absolute -right-8 -bottom-8 w-40 h-40 text-white/10 group-hover:rotate-12 transition-transform duration-700" />
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-8">
            {/* Status Table */}
            <div className="bg-white/5 rounded-3xl shadow-2xl border border-white/10 overflow-hidden backdrop-blur-sm">
              <div className="p-8 border-b border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
                <h3 className="font-bold text-brand-white flex items-center text-xl italic"><FileText className="mr-3 text-brand-accent" size={24} /> Project Status</h3>
                <button 
                  onClick={() => setModalType('new-service')}
                  className="w-full sm:w-auto text-xs font-bold text-brand-primary bg-brand-accent px-6 py-3 rounded-xl hover:opacity-90 transition-all shadow-lg shadow-brand-accent/20"
                >
                  Request New Service
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-white/5 text-[10px] font-bold text-brand-secondary uppercase tracking-[0.2em]">
                      <th className="px-8 py-5">Req. ID</th>
                      <th className="px-8 py-5">Solution Type</th>
                      <th className="px-8 py-5">Initiated On</th>
                      <th className="px-8 py-5 text-right">Progress</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {requests.map((req) => (
                      <tr key={req.id} className="hover:bg-white/2 transition-colors group">
                        <td className="px-8 py-7 font-mono text-xs font-bold text-brand-accent">{req.id}</td>
                        <td className="px-8 py-7 font-bold text-brand-white text-sm">{req.service}</td>
                        <td className="px-8 py-7 text-sm text-brand-secondary flex items-center"><Calendar size={14} className="mr-2 text-brand-accent/50" /> {req.date}</td>
                        <td className="px-8 py-7 text-right">
                          <span className="px-4 py-1.5 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-[10px] font-bold uppercase tracking-widest">
                            {req.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            
            {/* Action Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <button 
                onClick={() => setModalType('booking')}
                className="p-8 bg-white/5 border border-white/10 rounded-[2.5rem] shadow-2xl text-left hover:border-brand-accent transition-all group backdrop-blur-sm"
              >
                <div className="p-4 bg-brand-accent/10 rounded-2xl text-brand-accent w-fit mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                  <Clock size={32} />
                </div>
                <h4 className="font-bold text-brand-white mb-2 text-xl italic">Book Site Consultation</h4>
                <p className="text-sm text-brand-secondary/70 leading-relaxed mb-4">Request our engineers to visit your site for measurements and structural analysis.</p>
                <div className="text-brand-accent font-bold text-xs flex items-center group-hover:translate-x-1 transition-transform">
                  <span>Schedule Now</span> <Check size={14} className="ml-2" />
                </div>
              </button>

              <button 
                onClick={() => setModalType('proposals')}
                className="p-8 bg-white/5 border border-white/10 rounded-[2.5rem] shadow-2xl text-left hover:border-brand-accent transition-all group backdrop-blur-sm"
              >
                <div className="p-4 bg-brand-accent/10 rounded-2xl text-brand-accent w-fit mb-6 group-hover:scale-110 group-hover:-rotate-6 transition-transform">
                  <FileText size={32} />
                </div>
                <h4 className="font-bold text-brand-white mb-2 text-xl italic">View Digital Proposals</h4>
                <p className="text-sm text-brand-secondary/70 leading-relaxed mb-4">Download PDF quotations, 3D architectural renders, and technical drawings.</p>
                <div className="text-brand-accent font-bold text-xs flex items-center group-hover:translate-x-1 transition-transform">
                  <span>Explore Documents</span> <Check size={14} className="ml-2" />
                </div>
              </button>

              <button 
                onClick={() => setModalType('feedback')}
                className="md:col-span-2 p-8 bg-white/5 border border-white/10 rounded-[2.5rem] shadow-2xl text-left hover:border-brand-accent transition-all group backdrop-blur-sm relative overflow-hidden"
              >
                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="flex-1">
                    <div className="p-4 bg-brand-accent/10 rounded-2xl text-brand-accent w-fit mb-6 group-hover:scale-110 transition-transform">
                      <MessageSquareQuote size={32} />
                    </div>
                    <h4 className="font-bold text-brand-white mb-2 text-xl italic">Share Your Experience</h4>
                    <p className="text-sm text-brand-secondary/70 leading-relaxed max-w-xl">
                      We value your partnership. Please share your feedback and experience with our architectural solutions to help us improve.
                    </p>
                  </div>
                  <div className="flex items-center space-x-2 bg-brand-accent text-brand-primary px-8 py-4 rounded-2xl font-bold shadow-xl shadow-brand-accent/20 group-hover:scale-105 transition-all">
                    <span>Submit Feedback</span>
                    <Star size={18} />
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      <Modal 
        isOpen={modalType === 'booking'} 
        onClose={() => setModalType(null)} 
        title="Book Site Consultation"
      >
        <form onSubmit={(e) => handleSubmit(e, 'Consultation request')} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-[10px] font-bold text-brand-secondary uppercase mb-2 block">Preferred Date</label>
              <input required type="date" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-brand-accent text-white transition-all" />
            </div>
            <div>
              <label className="text-[10px] font-bold text-brand-secondary uppercase mb-2 block">Preferred Time</label>
              <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-brand-accent text-white transition-all appearance-none">
                <option className="bg-brand-primary">Morning (9AM-12PM)</option>
                <option className="bg-brand-primary">Afternoon (1PM-4PM)</option>
                <option className="bg-brand-primary">Evening (5PM-7PM)</option>
              </select>
            </div>
          </div>
          <div>
            <label className="text-[10px] font-bold text-brand-secondary uppercase mb-2 block">Site Address</label>
            <textarea required rows="3" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-brand-accent text-white" placeholder="Complete address for survey..."></textarea>
          </div>
          <button type="submit" className="w-full py-4 bg-brand-accent text-brand-primary rounded-xl font-bold shadow-lg shadow-brand-accent/30 hover:opacity-90 transition-all flex items-center justify-center space-x-2">
            <Calendar size={18} />
            <span>Confirm Booking</span>
          </button>
        </form>
      </Modal>

      <Modal 
        isOpen={modalType === 'proposals'} 
        onClose={() => setModalType(null)} 
        title="Project Documents & Renders"
      >
        <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
          {proposals.map(doc => (
            <div key={doc.id} className="p-5 border border-white/5 bg-white/2 rounded-2xl flex justify-between items-center group hover:bg-white/5 transition-all">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-brand-accent/10 rounded-xl text-brand-accent">
                  <FileText size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-brand-white">{doc.title}</h4>
                  <p className="text-[10px] text-brand-secondary/60 uppercase font-bold">{doc.id} • {doc.date} • {doc.size}</p>
                </div>
              </div>
              <button 
                onClick={() => addNotification('Downloading file...')}
                className="p-3 text-brand-secondary hover:text-brand-accent transition-colors"
                title="Download PDF"
              >
                <Download size={20} />
              </button>
            </div>
          ))}
          {proposals.length === 0 && (
            <div className="text-center py-10">
              <p className="text-brand-secondary italic">No documents available yet.</p>
            </div>
          )}
        </div>
      </Modal>

      <Modal 
        isOpen={modalType === 'support'} 
        onClose={() => setModalType(null)} 
        title="Contact Technical Support"
      >
        <div className="space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-white/5 border border-white/10 rounded-2xl flex items-center space-x-3">
              <Phone className="text-brand-accent" size={18} />
              <div>
                <p className="text-[10px] text-brand-secondary uppercase font-bold">Helpline</p>
                <p className="text-xs font-bold text-brand-white">+91 90630 09999</p>
              </div>
            </div>
            <div className="p-4 bg-white/5 border border-white/10 rounded-2xl flex items-center space-x-3">
              <Mail className="text-brand-accent" size={18} />
              <div>
                <p className="text-[10px] text-brand-secondary uppercase font-bold">Inquiry</p>
                <p className="text-xs font-bold text-brand-white">INFINITY.glass@gmail.com</p>
              </div>
            </div>
          </div>
          <form onSubmit={(e) => handleSubmit(e, 'Message')} className="space-y-4 pt-4 border-t border-white/5">
            <label className="text-[10px] font-bold text-brand-secondary uppercase mb-2 block">Quick Message</label>
            <textarea required rows="4" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-brand-accent text-white" placeholder="Describe your issue..."></textarea>
            <button type="submit" className="w-full py-4 bg-brand-accent text-brand-primary rounded-xl font-bold flex items-center justify-center space-x-2">
              <Send size={18} />
              <span>Send Ticket</span>
            </button>
          </form>
        </div>
      </Modal>

      <Modal 
        isOpen={modalType === 'new-service'} 
        onClose={() => setModalType(null)} 
        title="Request New Solution"
      >
        <form onSubmit={(e) => handleSubmit(e, 'Inquiry')} className="space-y-6">
          <div>
            <label className="text-[10px] font-bold text-brand-secondary uppercase mb-2 block">Desired Solution</label>
            <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-brand-accent text-white transition-all appearance-none">
              <option className="bg-brand-primary">UPVC Sliding Windows</option>
              <option className="bg-brand-primary">Structural Glazing</option>
              <option className="bg-brand-primary">Frameless Shower Cube</option>
              <option className="bg-brand-primary">Glass Railings</option>
              <option className="bg-brand-primary">Other Architectural Glass</option>
            </select>
          </div>
          <div>
            <label className="text-[10px] font-bold text-brand-secondary uppercase mb-2 block">Brief Requirements</label>
            <textarea required rows="4" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-brand-accent text-white" placeholder="Tell us what you are looking for..."></textarea>
          </div>
          <button type="submit" className="w-full py-4 bg-brand-accent text-brand-primary rounded-xl font-bold shadow-xl shadow-brand-accent/30">Submit Inquiry</button>
        </form>
      </Modal>

      <Modal 
        isOpen={modalType === 'profile'} 
        onClose={() => setModalType(null)} 
        title="Edit Account Details"
      >
        <form onSubmit={(e) => handleSubmit(e, 'Profile update')} className="space-y-5">
          <div>
            <label className="text-[10px] font-bold text-brand-secondary uppercase mb-2 block">Full Name</label>
            <input defaultValue="John Client" type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-brand-accent text-white" />
          </div>
          <div>
            <label className="text-[10px] font-bold text-brand-secondary uppercase mb-2 block">Email Address</label>
            <input defaultValue="client@example.com" type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-brand-accent text-white" />
          </div>
          <div>
            <label className="text-[10px] font-bold text-brand-secondary uppercase mb-2 block">Mobile Number</label>
            <input defaultValue="+91 98765 43210" type="tel" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-brand-accent text-white" />
          </div>
          <button type="submit" className="w-full py-4 bg-brand-accent text-brand-primary rounded-xl font-bold mt-4 shadow-xl">Save Changes</button>
        </form>
      </Modal>

      <Modal 
        isOpen={modalType === 'feedback'} 
        onClose={() => setModalType(null)} 
        title="Share Your Experience"
      >
        <form onSubmit={(e) => handleSubmit(e, 'Feedback')} className="space-y-6">
          <div className="text-center pb-4">
            <label className="text-[10px] font-bold text-brand-secondary uppercase mb-4 block">How would you rate our quality?</label>
            <div className="flex justify-center space-x-3">
              {[1, 2, 3, 4, 5].map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setRating(s)}
                  className={`p-2 transition-all ${rating >= s ? 'text-yellow-400 scale-110' : 'text-white/10'}`}
                >
                  <Star size={32} fill={rating >= s ? "currentColor" : "none"} />
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="text-[10px] font-bold text-brand-secondary uppercase mb-2 block">Project Summary</label>
            <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-brand-accent text-white mb-4 appearance-none">
              {requests.map(req => (
                <option key={req.id} className="bg-brand-primary">{req.id} - {req.service}</option>
              ))}
              <option className="bg-brand-primary">General Service Feedback</option>
            </select>
            <label className="text-[10px] font-bold text-brand-secondary uppercase mb-2 block">Your Feedback</label>
            <textarea required rows="4" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-brand-accent text-white" placeholder="Share your experience here..."></textarea>
          </div>
          <button type="submit" className="w-full py-4 bg-brand-accent text-brand-primary rounded-xl font-bold shadow-xl flex items-center justify-center space-x-2">
            <Send size={18} />
            <span>Send Feedback</span>
          </button>
        </form>
      </Modal>

    </div>
  );
}
