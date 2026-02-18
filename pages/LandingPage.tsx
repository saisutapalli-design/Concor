import React from 'react';
import { Link } from 'react-router-dom';
import { CONCOR_LOGO } from '../constants';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white selection:bg-[#0096D6]/30">
      {/* SaaS Navigation - Fixed height and stabilized backdrop */}
      <nav className="fixed top-0 left-0 right-0 z-[100] bg-white border-b border-slate-100 shadow-sm h-24 flex items-center">
        <div className="max-w-7xl mx-auto w-full px-8 flex items-center justify-between">
          <div className="flex items-center gap-12 lg:gap-16">
            <Link to="/" className="flex items-center transition-transform hover:scale-105 active:scale-95 shrink-0">
              {CONCOR_LOGO}
            </Link>
            
            {/* Navigation Links - Now visible at 'lg' (1024px) instead of 'xl' */}
            <div className="hidden lg:flex items-center gap-8 lg:gap-10">
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
                  className="text-[11px] font-black uppercase tracking-[0.25em] text-slate-400 hover:text-[#0096D6] transition-all whitespace-nowrap py-2 relative group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0096D6] transition-all group-hover:w-full"></span>
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

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white px-8 pt-48 pb-24">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50/20 rounded-l-[15rem] -mr-20 translate-y-6 pointer-events-none"></div>
        <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-3/5 text-left">
            <div className="inline-flex items-center gap-3 bg-blue-50 px-6 py-2.5 rounded-full mb-10 border border-blue-100 shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-[#0096D6] animate-pulse"></span>
              <span className="text-[10px] font-black text-[#0096D6] tracking-[0.3em] uppercase">Enterprise Digital Infrastructure</span>
            </div>
            
            <h1 className="text-6xl lg:text-[7.5rem] font-black mb-10 leading-[0.85] tracking-tighter text-slate-950">
              India's <br/>
              <span className="text-[#0096D6]">Fleet Core.</span>
            </h1>
            
            <p className="text-xl text-gray-500 max-w-lg mb-14 font-medium leading-relaxed">
              Orchestrating India's multi-modal trade flows through a unified, automated, and secure fleet ecosystem. Built for global scale.
            </p>
            
            <div className="flex flex-wrap gap-6">
              <Link to="/login" className="btn-prominent px-12 h-16 shadow-blue-500/30">
                ACCESS SYSTEM
              </Link>
              <Link to="/network" className="btn-prominent bg-slate-900 shadow-slate-900/10 hover:bg-black px-12 h-16">
                HUB EXPLORER
              </Link>
            </div>
          </div>
          
          <div className="lg:w-2/5 w-full">
             <div className="relative group">
                <div className="absolute -inset-8 bg-blue-500/10 rounded-[4rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="relative w-full aspect-[4/5] rounded-[3rem] overflow-hidden border-2 border-white shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] bg-slate-100">
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

      {/* Interactive Infrastructure Map Section */}
      <section id="network" className="bg-slate-50 py-32 px-8 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center mb-16">
            <p className="text-[11px] font-black text-[#0096D6] uppercase tracking-[0.5em] mb-4">Real-time Asset Grid</p>
            <h2 className="text-5xl font-black text-slate-950 mb-6 tracking-tighter">National Hub Network</h2>
            <p className="text-lg text-gray-500 max-w-2xl font-medium leading-relaxed">Explore our strategic footprint spanning across 60+ inland terminals and port connectivity nodes.</p>
          </div>
          
          <div className="h-[650px] w-full rounded-[3.5rem] overflow-hidden shadow-2xl border-8 border-white relative group">
             <iframe 
               title="CONCOR National Hubs"
               className="w-full h-full border-0 grayscale-[0.2] group-hover:grayscale-0 transition-all duration-1000"
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.748366961556!2d77.28318731131106!3d28.51719607562095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce6bb37618997%3A0xc4eb789b533668e2!2sCONCOR%20Bhawan!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
               allowFullScreen={true} 
               loading="lazy" 
               referrerPolicy="no-referrer-when-downgrade"
             ></iframe>
             
             {/* Map Overlay Card */}
             <div className="absolute bottom-10 left-10 z-20 bg-white/95 backdrop-blur-md p-8 rounded-3xl border border-white/50 shadow-2xl max-w-sm transform translate-y-4 group-hover:translate-y-0 transition-transform">
                <h4 className="text-lg font-black text-slate-900 uppercase tracking-tighter mb-2">Regional Command: North</h4>
                <p className="text-xs text-slate-500 font-medium leading-relaxed mb-4">Centralized coordination of rail-port corridors serving the NCR region.</p>
                <Link to="/network" className="text-[10px] font-black text-[#0096D6] uppercase tracking-widest border-b border-[#0096D6] pb-1">View All Terminal Nodes</Link>
             </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 pt-32 pb-20 px-8 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.05] scale-[4] pointer-events-none brightness-0 invert flex justify-center h-24">
          {CONCOR_LOGO}
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center">
           <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 text-[11px] font-black uppercase tracking-[0.3em] text-white/40 mb-20">
             <Link to="/about" className="hover:text-[#0096D6] transition-colors">About Us</Link>
             <Link to="/services" className="hover:text-[#0096D6] transition-colors">Our Services</Link>
             <Link to="/tariffs" className="hover:text-[#0096D6] transition-colors">Tariffs</Link>
             <Link to="/investors" className="hover:text-[#0096D6] transition-colors">Investors</Link>
             <Link to="/network" className="hover:text-[#0096D6] transition-colors">Network</Link>
           </div>
           
           <div className="text-center">
              <p className="text-sm font-bold text-white/30 uppercase tracking-[0.2em]">
                Copyright © 2026 CONCOR. All rights reserved.
              </p>
              <p className="text-sm font-black text-white uppercase tracking-[0.3em] mt-3">
                Maintained by Container Corporation of India Ltd.
              </p>
            </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;