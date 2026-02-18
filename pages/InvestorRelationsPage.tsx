import React from 'react';
import { Link } from 'react-router-dom';
import { CONCOR_LOGO } from '../constants';

const InvestorRelationsPage: React.FC = () => {
  const highlights = [
    { label: "Market Cap", value: "₹ 54,231 Cr" },
    { label: "Dividend Yield", value: "2.8%" },
    { label: "Revenue (FY24)", value: "₹ 8,124 Cr" },
    { label: "Net Profit", value: "₹ 1,173 Cr" }
  ];

  const reports = [
    { title: "Annual Report 2023-24", size: "12.4 MB" },
    { title: "Q3 Financial Results", size: "2.1 MB" },
    { title: "Shareholding Pattern Oct'25", size: "0.8 MB" },
    { title: "Investor Presentation - Nov", size: "5.6 MB" }
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
                  className={`text-[11px] font-black uppercase tracking-[0.25em] transition-all whitespace-nowrap py-2 relative group ${link.path === '/investors' ? 'text-[#0096D6]' : 'text-slate-400 hover:text-[#0096D6]'}`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-[#0096D6] transition-all ${link.path === '/investors' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
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

      <div className="pt-24 py-24 px-12 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto pt-16">
          <p className="text-[10px] font-black text-[#0096D6] uppercase tracking-[0.5em] mb-8">Financial Excellence</p>
          <h1 className="text-6xl font-black tracking-tighter mb-12 leading-none">Investor Relations</h1>
          <div className="grid md:grid-cols-4 gap-12 pt-16 border-t border-white/10">
            {highlights.map(h => (
              <div key={h.label} className="group">
                <p className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em] mb-3 group-hover:text-[#0096D6] transition-colors">{h.label}</p>
                <p className="text-3xl font-black tracking-tighter tabular">{h.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-12 py-24">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8 space-y-16">
            <section>
              <h2 className="text-3xl font-black text-slate-900 mb-10 tracking-tight">Market Performance Protocol</h2>
              <div className="aspect-[16/8] bg-slate-50 rounded-[3rem] border border-slate-100 flex items-center justify-center relative overflow-hidden group shadow-inner">
                 <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(90deg, #0096D6 1px, transparent 0), linear-gradient(#0096D6 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
                 <svg className="w-full h-full max-h-[70%] px-12" viewBox="0 0 100 40">
                   <path d="M0 35 L10 32 L20 34 L30 28 L40 30 L50 22 L60 25 L70 15 L80 18 L90 5 L100 8" fill="none" stroke="#0096D6" strokeWidth="0.8" className="animate-[dash_10s_linear_infinite]" />
                 </svg>
                 <div className="absolute top-10 right-10 text-right">
                    <p className="text-[11px] font-black text-emerald-500 uppercase tracking-widest bg-emerald-50 px-4 py-2 rounded-full border border-emerald-100 shadow-sm">+12.4% PERFORMANCE YTD</p>
                 </div>
              </div>
            </section>

            <section className="grid md:grid-cols-2 gap-8">
               <div className="p-12 bg-slate-950 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-24 h-full bg-blue-500/5 -skew-x-12 translate-x-12 group-hover:translate-x-6 transition-transform"></div>
                  <h3 className="text-2xl font-black mb-4 tracking-tight relative z-10">Board of Directors</h3>
                  <p className="text-slate-400 text-sm font-medium leading-relaxed mb-10 relative z-10">View the leadership guiding CONCOR's strategic vision and corporate governance protocols.</p>
                  <button className="text-[10px] font-black text-[#0096D6] uppercase tracking-[0.2em] border-b-2 border-[#0096D6] pb-1 relative z-10 hover:text-white hover:border-white transition-all">Governance Hub</button>
               </div>
               <div className="p-12 bg-slate-50 rounded-[2.5rem] text-slate-900 border border-slate-100 shadow-sm relative overflow-hidden group">
                  <h3 className="text-2xl font-black mb-4 tracking-tight">Dividend Yield</h3>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed mb-10">Consistently rewarding stakeholders through stable payouts and operational growth.</p>
                  <button className="text-[10px] font-black text-slate-900 uppercase tracking-[0.2em] border-b-2 border-slate-900 pb-1">Yield History</button>
               </div>
            </section>
          </div>

          <div className="lg:col-span-4 space-y-12">
             <div>
                <h3 className="text-[11px] font-black text-slate-400 uppercase tracking-[0.3em] mb-8">Financial Reporting</h3>
                <div className="space-y-4">
                  {reports.map(r => (
                    <div key={r.title} className="p-8 bg-white border border-slate-100 rounded-3xl flex items-center justify-between hover:border-[#0096D6] hover:shadow-xl transition-all cursor-pointer group">
                      <div>
                        <p className="text-[13px] font-black text-slate-900 group-hover:text-[#0096D6] transition-colors">{r.title}</p>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1.5">{r.size} • Archive Node</p>
                      </div>
                      <div className="w-10 h-10 rounded-xl bg-slate-50 text-slate-300 group-hover:bg-blue-50 group-hover:text-[#0096D6] flex items-center justify-center transition-all">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" /></svg>
                      </div>
                    </div>
                  ))}
                </div>
             </div>
             
             <div className="p-10 bg-slate-50 rounded-[3rem] border border-slate-100">
                <h4 className="text-[11px] font-black text-slate-900 uppercase tracking-widest mb-6">Investor Desk</h4>
                <p className="text-xs font-bold text-slate-500 leading-relaxed mb-10">Dedicated conduit for shareholder queries, stock transfers, and financial disclosure assistance.</p>
                <p className="text-sm font-black text-[#0096D6] mb-2">investor.relations@concor.co.in</p>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">HQ: +91 11 41222500</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestorRelationsPage;