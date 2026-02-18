import React from 'react';
import { Link } from 'react-router-dom';
import { CONCOR_LOGO } from '../constants';

const OurServicesPage: React.FC = () => {
  const services = [
    {
      title: "EXIM Services",
      desc: "Comprehensive logistics support for international trade, including ICD management and rail transit.",
      icon: "🚢",
      features: ["Custom Clearance Assist", "Bonded Warehousing", "Rail-Port Connectivity"]
    },
    {
      title: "Domestic Services",
      desc: "Door-to-door and terminal-to-terminal logistics for internal freight movement across India.",
      icon: "🚛",
      features: ["LTL/FTL Hubbing", "Retail Logistics", "Strategic Distribution"]
    },
    {
      title: "Terminal Infrastructure",
      desc: "Network of 60+ terminals providing state-of-the-art handling and yard management.",
      icon: "🏗️",
      features: ["RDT Tracking", "Yard Analytics", "TEU Processing"]
    },
    {
      title: "Cold Chain Logistics",
      desc: "Temperature-controlled solutions for perishable goods using Fresh2Go technology.",
      icon: "❄️",
      features: ["Reefer Services", "Cold Storages", "Pharma Compliance"]
    },
    {
      title: "Air Cargo",
      desc: "Integrated solutions for high-value and time-sensitive cargo via major airport hubs.",
      icon: "✈️",
      features: ["Intermodal Connect", "Express Handling", "Global Network"]
    },
    {
      title: "e-Logistics Solutions",
      desc: "Digitally enabled logistics with real-time bidding and document management portals.",
      icon: "💻",
      features: ["ETMS Filing", "KYCL Tracking", "e-Billing"]
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Corporate Header */}
      <nav className="fixed top-0 left-0 right-0 z-[100] bg-white border-b border-slate-100 shadow-sm h-24 flex items-center">
        <div className="max-w-7xl mx-auto w-full px-8 flex items-center justify-between">
          <div className="flex items-center gap-12 lg:gap-16">
            <Link to="/" className="flex items-center transition-transform hover:scale-105 active:scale-95 shrink-0">
              {CONCOR_LOGO}
            </Link>
            
            <div className="hidden lg:flex items-center gap-10">
              {[
                { name: 'About Us', path: '/about' },
                { name: 'Our Services', path: '/services' },
                { name: 'Tariffs', path: '/tariffs' },
                { name: 'Investors', path: '/investors' },
                { name: 'Network', path: '/network' }
              ].map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path} 
                  className={`text-[11px] font-black uppercase tracking-[0.25em] transition-all whitespace-nowrap py-2 relative group ${link.path === '/services' ? 'text-[#0096D6]' : 'text-slate-400 hover:text-[#0096D6]'}`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-[#0096D6] transition-all ${link.path === '/services' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                </Link>
              ))}
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <Link 
              to="/login" 
              className="bg-[#0096D6] text-white h-14 px-10 rounded-[1.25rem] font-black text-[11px] uppercase tracking-[0.2em] shadow-xl shadow-blue-500/20 hover:bg-blue-400 hover:-translate-y-0.5 transition-all flex items-center justify-center whitespace-nowrap"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      <div className="pt-24 bg-slate-950 text-white text-center pb-32">
        <div className="max-w-7xl mx-auto px-12 pt-20">
          <p className="text-[10px] font-black text-[#0096D6] uppercase tracking-[0.5em] mb-6">Service Portfolio</p>
          <h1 className="text-6xl font-black tracking-tighter mb-8 leading-none">Multi-modal Capabilities</h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg font-medium leading-relaxed">
            From international port connectivity to last-mile door delivery, CONCOR provides the backbone of India's supply chain infrastructure.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-12 -mt-24 pb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div key={i} className="group p-10 bg-white border border-slate-100 rounded-[2.5rem] shadow-[0_15px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.12)] hover:translate-y-[-8px] transition-all duration-500">
              <div className="text-5xl mb-10 grayscale group-hover:grayscale-0 transition-all bg-slate-50 w-20 h-20 flex items-center justify-center rounded-3xl group-hover:bg-blue-50">
                {s.icon}
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">{s.title}</h3>
              <p className="text-sm text-slate-500 font-medium leading-relaxed mb-8">{s.desc}</p>
              <div className="space-y-3 border-t border-slate-50 pt-8">
                {s.features.map(f => (
                  <div key={f} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-[#0096D6] rounded-full"></div>
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.15em]">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServicesPage;