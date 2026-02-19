
import React from 'react';
import { Link } from 'react-router-dom';
import CorporateHeader from '../components/CorporateHeader';
import { ConcorLogo } from '../constants';

const LandingPage: React.FC = () => {
  const performanceMetrics = [
    { label: "Total Throughput", value: "4.72M", unit: "TEUs", detail: "FY 2023-24 Volume" },
    { label: "Annual Revenue", value: "₹8,124", unit: "Cr", detail: "Consolidated Turnover" },
    { label: "Rolling Stock", value: "15,800+", unit: "Wags", detail: "High-speed BLC Rakes" },
    { label: "Market Dominance", value: "65%", unit: "Share", detail: "Container Rail Lead" }
  ];

  const boardMembers = [
    { name: "Shri Sanjay Swarup", role: "Chairman & Managing Director", desc: "Spearheading CONCOR's transition into a high-tech logistics major." },
    { name: "Shri Manoj Kumar Singh", role: "Director (Projects & Services)", desc: "Overseeing national infrastructure expansion and terminal modernization." },
    { name: "Shri Mohammad Azhar Shams", role: "Director (Domestic Division)", desc: "Driving inland multi-modal growth and domestic freight orchestration." },
    { name: "Shri Prabhu Nath Singh", role: "Director (Finance)", desc: "Ensuring financial prudence and robust fiscal performance protocols." }
  ];

  return (
    <div className="min-h-screen bg-slate-50 selection:bg-[#0096D6]/30">
      <CorporateHeader />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white px-6 md:px-8 pt-32 md:pt-48 pb-16 md:pb-24 border-b border-slate-100">
        <div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-slate-50 rounded-b-[5rem] md:rounded-l-[15rem] md:rounded-br-none -mr-0 md:-mr-20 translate-y-0 md:translate-y-6 pointer-events-none"></div>
        <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 md:gap-20">
          <div className="w-full lg:w-3/5 text-center lg:text-left">
            <div className="inline-flex items-center gap-3 bg-blue-50 px-4 md:px-6 py-2 md:py-2.5 rounded-full mb-6 md:mb-10 border border-blue-100 shadow-sm">
              <span className="w-2 md:w-2.5 h-2 md:h-2.5 rounded-full bg-[#0096D6] animate-pulse"></span>
              <span className="text-[8px] md:text-[10px] font-black text-[#0096D6] tracking-[0.3em] uppercase">Enterprise Digital Infrastructure</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-[7.5rem] font-black mb-6 md:mb-10 leading-[0.9] md:leading-[0.85] tracking-tighter text-slate-950">
              India's <br className="hidden md:block"/>
              <span className="text-[#0096D6]">Fleet Core.</span>
            </h1>
            
            <p className="text-base md:text-xl text-gray-500 max-w-lg mx-auto lg:mx-0 mb-8 md:mb-14 font-medium leading-relaxed">
              Orchestrating India's multi-modal trade flows through a unified, automated, and secure fleet ecosystem. Built for global scale.
            </p>
            
            <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-4 md:gap-6">
              <Link to="/login" className="btn-prominent px-8 md:px-12 h-14 md:h-16 shadow-blue-500/30 text-[11px] md:text-[13px]">
                ACCESS SYSTEM
              </Link>
              <Link to="/network" className="btn-prominent bg-slate-900 shadow-slate-900/10 hover:bg-black px-8 md:px-12 h-14 md:h-16 text-[11px] md:text-[13px]">
                HUB EXPLORER
              </Link>
            </div>
          </div>
          
          <div className="w-full lg:w-2/5">
             <div className="relative group">
                <div className="absolute -inset-4 md:-inset-8 bg-blue-500/10 rounded-[2rem] md:rounded-[4rem] blur-2xl md:blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="relative w-full aspect-[4/5] rounded-[2rem] md:rounded-[3rem] overflow-hidden border-2 border-white shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] bg-slate-100">
                    <img 
                      src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800" 
                      alt="Modern Logistics Hub" 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-1000 scale-105 group-hover:scale-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Strategic Leadership / Board & Staff Section */}
      <section className="bg-white py-24 md:py-32 px-6 md:px-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-[0.03] scale-[2.5] pointer-events-none translate-x-1/2">
           <ConcorLogo />
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-16 md:mb-20">
            <div className="max-w-2xl">
              <p className="text-[10px] md:text-[11px] font-black text-[#0096D6] uppercase tracking-[0.5em] mb-4">Governance & Authority</p>
              <h2 className="text-3xl md:text-5xl font-black text-slate-950 tracking-tighter leading-none mb-6">Strategic Leadership</h2>
              <p className="text-base md:text-lg text-slate-500 font-medium leading-relaxed">
                Guided by seasoned technocrats and industry leaders, CONCOR's board ensures operational integrity and a vision for a globally competitive Indian logistics landscape.
              </p>
            </div>
            <Link to="/about" className="text-[10px] font-black text-[#0096D6] uppercase tracking-[0.2em] border-b-2 border-[#0096D6] pb-1 hover:text-slate-900 hover:border-slate-900 transition-all">Full Corporate Profile</Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {boardMembers.map((member, i) => (
              <div key={i} className="group p-8 md:p-10 bg-slate-50 border border-slate-100 rounded-[2.5rem] hover:bg-white hover:border-[#0096D6] hover:shadow-2xl transition-all duration-500">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 border border-slate-100 group-hover:bg-blue-50 group-hover:border-blue-100 transition-colors shadow-sm">
                   <svg className="w-8 h-8 text-slate-300 group-hover:text-[#0096D6]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>
                </div>
                <h4 className="text-xl font-black text-slate-900 tracking-tight leading-tight mb-2">{member.name}</h4>
                <p className="text-[10px] font-black text-[#0096D6] uppercase tracking-widest mb-6">{member.role}</p>
                <p className="text-xs text-slate-500 font-medium leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {member.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 md:p-12 bg-slate-900 rounded-[3rem] text-white flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-full bg-[#0096D6]/10 -skew-x-12 translate-x-12 pointer-events-none"></div>
             <div className="max-w-xl relative z-10 text-center md:text-left">
                <h3 className="text-2xl font-black tracking-tighter mb-2">CONCOR Staff Excellence</h3>
                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest leading-relaxed">Dedicated workforce across 60+ terminals ensuring 24/7 infrastructure stability and multi-modal synergy.</p>
             </div>
             <div className="flex gap-4 relative z-10">
                <div className="text-center md:text-right">
                   <p className="text-3xl font-black tracking-tighter">1,400+</p>
                   <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Operational Staff</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Interactive Infrastructure Map Section */}
      <section id="network" className="bg-slate-50 py-16 md:py-32 px-6 md:px-8 relative border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center mb-10 md:mb-16">
            <p className="text-[10px] md:text-[11px] font-black text-[#0096D6] uppercase tracking-[0.5em] mb-4">Real-time Asset Grid</p>
            <h2 className="text-3xl md:text-5xl font-black text-slate-950 mb-4 md:mb-6 tracking-tighter">National Hub Network</h2>
            <p className="text-base md:text-lg text-gray-500 max-w-2xl font-medium leading-relaxed px-4">Explore our strategic footprint spanning across 60+ inland terminals and port connectivity nodes.</p>
          </div>
          
          <div className="h-[400px] md:h-[650px] w-full rounded-[2rem] md:rounded-[3.5rem] overflow-hidden shadow-2xl border-4 md:border-8 border-white relative group">
             <iframe 
               title="CONCOR National Hubs"
               className="w-full h-full border-0 grayscale-[0.2] group-hover:grayscale-0 transition-all duration-1000"
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.748366961556!2d77.28318731131106!3d28.51719607562095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce6bb37618997%3A0xc4eb789b533668e2!2sCONCOR%20Bhawan!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
               allowFullScreen={true} 
               loading="lazy" 
               referrerPolicy="no-referrer-when-downgrade"
             ></iframe>
             
             <div className="hidden lg:block absolute bottom-10 left-10 z-20 bg-white/95 backdrop-blur-md p-8 rounded-3xl border border-white/50 shadow-2xl max-w-sm transform translate-y-4 group-hover:translate-y-0 transition-transform">
                <h4 className="text-lg font-black text-slate-900 uppercase tracking-tighter mb-2">Regional Command Center</h4>
                <p className="text-xs text-slate-500 font-medium leading-relaxed mb-4">Centralized coordination of rail-port corridors serving India's global trade gateways.</p>
                <Link to="/network" className="text-[10px] font-black text-[#0096D6] uppercase tracking-widest border-b border-[#0096D6] pb-1">View Live Asset Grid</Link>
             </div>
          </div>
        </div>
      </section>

      {/* Business Review Protocol */}
      <section className="py-24 md:py-32 px-6 md:px-8 bg-white overflow-hidden border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {performanceMetrics.map((metric, i) => (
              <div key={i} className="group p-8 md:p-10 bg-white border border-slate-100 rounded-[2rem] md:rounded-[3rem] transition-all hover:border-[#0096D6] hover:shadow-2xl">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6 group-hover:text-[#0096D6] transition-colors">{metric.label}</p>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter tabular-nums">{metric.value}</span>
                  <span className="text-sm md:text-lg font-black text-[#0096D6] uppercase">{metric.unit}</span>
                </div>
                <div className="h-px bg-slate-100 w-full mb-6"></div>
                <p className="text-xs font-bold text-slate-500 uppercase">{metric.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 pt-16 md:pt-32 pb-12 md:pb-20 px-6 md:px-8 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.05] scale-[2.5] md:scale-[4] pointer-events-none brightness-0 invert flex justify-center h-20 md:h-24">
          <ConcorLogo light />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center">
           <div className="flex flex-wrap justify-center items-center gap-x-8 md:gap-x-12 gap-y-4 md:gap-y-6 text-[9px] md:text-[11px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-white/40 mb-12 md:mb-20 text-center">
             <Link to="/about" className="hover:text-[#0096D6] transition-colors">About Us</Link>
             <Link to="/services" className="hover:text-[#0096D6] transition-colors">Our Services</Link>
             <Link to="/tariffs" className="hover:text-[#0096D6] transition-colors">Tariffs</Link>
             <Link to="/investors" className="hover:text-[#0096D6] transition-colors">Investors</Link>
           </div>
           
           <div className="text-center">
              <p className="text-xs md:text-sm font-bold text-white/30 uppercase tracking-[0.15em] md:tracking-[0.2em]">
                Copyright © 2026 CONCOR. All rights reserved.
              </p>
            </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
