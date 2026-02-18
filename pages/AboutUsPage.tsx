import React from 'react';
import { Link } from 'react-router-dom';
import CorporateHeader from '../components/CorporateHeader';
import { CONCOR_LOGO } from '../constants';

const AboutUsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      <CorporateHeader />

      {/* Hero Section with Slanted Background */}
      <div className="relative pt-20 md:pt-24 min-h-[400px] md:min-h-[500px] flex items-center bg-white overflow-hidden">
        {/* Slanted Backdrop Overlay */}
        <div className="absolute top-0 right-0 w-full md:w-[45%] h-full bg-blue-50/40 transform -skew-x-0 md:-skew-x-[15deg] translate-x-0 md:translate-x-32 pointer-events-none opacity-50 md:opacity-100"></div>
        
        <div className="max-w-7xl mx-auto w-full px-6 md:px-12 relative z-10 text-center md:text-left">
          <div className="max-w-2xl mx-auto md:mx-0">
            <p className="text-[10px] md:text-[11px] font-black text-[#0096D6] uppercase tracking-[0.3em] mb-4">Corporate Profile</p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight mb-6 md:mb-10 leading-none">About CONCOR</h1>
            <p className="text-lg md:text-xl text-slate-500 font-medium leading-relaxed">
              Container Corporation of India Ltd. (CONCOR), a Navratna Public Sector Undertaking, is the market leader in multi-modal logistics in India.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Sections */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-20">
          <div className="space-y-10 md:space-y-12">
            <section>
              <h2 className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-4 justify-center md:justify-start">
                <span className="w-2 h-8 bg-[#0096D6] rounded-full hidden md:block"></span>
                Our Mission
              </h2>
              <p className="text-gray-600 font-medium leading-relaxed text-base md:text-lg italic border-l-4 border-[#0096D6] md:border-slate-100 pl-6 md:pl-8 py-2 text-center md:text-left mx-auto md:mx-0">
                "Our mission is to join with our community partners and stakeholders to make CONCOR a symbol of excellence in multi-modal logistics through customer focus, quality and innovation."
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-4 justify-center md:justify-start">
                <span className="w-2 h-8 bg-slate-900 rounded-full hidden md:block"></span>
                Strategic Focus
              </h2>
              <div className="grid gap-4 md:gap-6">
                {[
                  { title: "Customer Centricity", desc: "Providing tailor-made solutions for specific logistical challenges across industries." },
                  { title: "Operational Excellence", desc: "Leveraging state-of-the-art terminal infrastructure and IT-enabled services." },
                  { title: "Sustainability", desc: "Promoting rail-based transport as an eco-friendly alternative to long-haul road transport." }
                ].map((item, i) => (
                  <div key={i} className="bg-slate-50 p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] border border-slate-100 hover:border-[#0096D6]/30 transition-colors">
                    <h3 className="font-black text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-xs md:text-sm text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] rounded-[2rem] md:rounded-[3.5rem] overflow-hidden shadow-2xl border-4 md:border-8 border-white group">
              <img 
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800" 
                alt="Logistics Hub" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 md:-bottom-10 -left-6 md:-left-10 bg-[#0096D6] p-6 md:p-10 rounded-[1.5rem] md:rounded-[2.5rem] text-white shadow-2xl">
              <p className="text-3xl md:text-5xl font-black mb-1">36+</p>
              <p className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-white/70">Years of Infrastructure Excellence</p>
            </div>
          </div>
        </div>

        <div className="mt-20 md:mt-32 p-8 md:p-16 bg-slate-950 rounded-[2rem] md:rounded-[3.5rem] text-white flex flex-col md:flex-row items-center gap-8 md:gap-12 relative overflow-hidden text-center md:text-left">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-500/5 -skew-x-12 translate-x-20 pointer-events-none"></div>
          <div className="flex-1 relative z-10">
             <h3 className="text-2xl md:text-3xl font-black mb-4 tracking-tight">Navratna Status</h3>
             <p className="text-sm md:text-slate-400 font-medium leading-relaxed max-w-xl mx-auto md:mx-0">
               CONCOR enjoys Navratna status, granting it significant financial autonomy and administrative freedom to compete effectively in the global logistics market.
             </p>
          </div>
          <div className="w-full md:w-auto relative z-10">
             <button className="w-full md:w-auto bg-white text-slate-950 px-10 md:px-12 h-14 md:h-16 rounded-xl md:rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] md:text-[11px] shadow-xl hover:bg-slate-100 transition-all active:scale-95">
               Annual Report 2024
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;