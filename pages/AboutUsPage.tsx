import React from 'react';
import { Link } from 'react-router-dom';
import { CONCOR_LOGO } from '../constants';

const AboutUsPage: React.FC = () => {
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
                  className={`text-[11px] font-black uppercase tracking-[0.25em] transition-all whitespace-nowrap py-2 relative group ${link.path === '/about' ? 'text-[#0096D6]' : 'text-slate-400 hover:text-[#0096D6]'}`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-[#0096D6] transition-all ${link.path === '/about' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
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

      {/* Hero Section with Slanted Background */}
      <div className="relative pt-24 min-h-[500px] flex items-center bg-white overflow-hidden">
        {/* Slanted Backdrop Overlay */}
        <div className="absolute top-0 right-0 w-[45%] h-full bg-blue-50/40 transform -skew-x-[15deg] translate-x-32 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto w-full px-12 relative z-10">
          <div className="max-w-2xl">
            <p className="text-[11px] font-black text-[#0096D6] uppercase tracking-[0.3em] mb-4">Corporate Profile</p>
            <h1 className="text-6xl lg:text-7xl font-black text-slate-900 tracking-tight mb-10 leading-none">About CONCOR</h1>
            <p className="text-xl text-slate-500 font-medium leading-relaxed">
              Container Corporation of India Ltd. (CONCOR), a Navratna Public Sector Undertaking, is the market leader in multi-modal logistics in India.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Sections */}
      <div className="max-w-7xl mx-auto px-12 py-24">
        <div className="grid lg:grid-cols-2 gap-20">
          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-4">
                <span className="w-2 h-8 bg-[#0096D6] rounded-full"></span>
                Our Mission
              </h2>
              <p className="text-gray-600 font-medium leading-relaxed text-lg italic border-l-4 border-slate-100 pl-8 py-2">
                "Our mission is to join with our community partners and stakeholders to make CONCOR a symbol of excellence in multi-modal logistics through customer focus, quality and innovation."
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-4">
                <span className="w-2 h-8 bg-slate-900 rounded-full"></span>
                Strategic Focus
              </h2>
              <div className="grid gap-6">
                {[
                  { title: "Customer Centricity", desc: "Providing tailor-made solutions for specific logistical challenges across industries." },
                  { title: "Operational Excellence", desc: "Leveraging state-of-the-art terminal infrastructure and IT-enabled services." },
                  { title: "Sustainability", desc: "Promoting rail-based transport as an eco-friendly alternative to long-haul road transport." }
                ].map((item, i) => (
                  <div key={i} className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 hover:border-[#0096D6]/30 transition-colors">
                    <h3 className="font-black text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] rounded-[3.5rem] overflow-hidden shadow-2xl border-8 border-white group">
              <img 
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800" 
                alt="Logistics Hub" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
            </div>
            <div className="absolute -bottom-10 -left-10 bg-[#0096D6] p-10 rounded-[2.5rem] text-white shadow-2xl">
              <p className="text-5xl font-black mb-1">36+</p>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/70">Years of Infrastructure Excellence</p>
            </div>
          </div>
        </div>

        <div className="mt-32 p-16 bg-slate-950 rounded-[3.5rem] text-white flex flex-col md:flex-row items-center gap-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-500/5 -skew-x-12 translate-x-20 pointer-events-none"></div>
          <div className="flex-1 relative z-10">
             <h3 className="text-3xl font-black mb-4 tracking-tight">Navratna Status</h3>
             <p className="text-slate-400 font-medium leading-relaxed max-w-xl">
               CONCOR enjoys Navratna status, granting it significant financial autonomy and administrative freedom to compete effectively in the global logistics market.
             </p>
          </div>
          <div className="w-full md:w-auto relative z-10">
             <button className="w-full md:w-auto bg-white text-slate-950 px-12 h-16 rounded-2xl font-black uppercase tracking-[0.2em] text-[11px] shadow-xl hover:bg-slate-100 transition-all active:scale-95">
               Annual Report 2024
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;