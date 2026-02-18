import React from 'react';
import { Link } from 'react-router-dom';
import CorporateHeader from '../components/CorporateHeader';
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
      <CorporateHeader />

      <div className="pt-20 md:pt-24 py-12 md:py-24 px-6 md:px-12 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto pt-8 md:pt-16 text-center md:text-left">
          <p className="text-[9px] md:text-[10px] font-black text-[#0096D6] uppercase tracking-[0.4em] md:tracking-[0.5em] mb-6 md:mb-8">Financial Excellence</p>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 md:mb-12 leading-none">Investor Relations</h1>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 pt-12 md:pt-16 border-t border-white/10">
            {highlights.map(h => (
              <div key={h.label} className="group">
                <p className="text-[8px] md:text-[10px] font-black text-white/30 uppercase tracking-[0.15em] md:tracking-[0.2em] mb-2 md:mb-3 group-hover:text-[#0096D6] transition-colors">{h.label}</p>
                <p className="text-xl md:text-3xl font-black tracking-tighter tabular">{h.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-24">
        <div className="grid lg:grid-cols-12 gap-12 md:gap-16">
          <div className="lg:col-span-8 space-y-12 md:space-y-16">
            <section>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-8 md:mb-10 tracking-tight text-center md:text-left">Market Performance Protocol</h2>
              <div className="aspect-[16/10] md:aspect-[16/8] bg-slate-50 rounded-[2rem] md:rounded-[3rem] border border-slate-100 flex items-center justify-center relative overflow-hidden group shadow-inner">
                 <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(90deg, #0096D6 1px, transparent 0), linear-gradient(#0096D6 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
                 <svg className="w-full h-full max-h-[60%] md:max-h-[70%] px-6 md:px-12" viewBox="0 0 100 40">
                   <path d="M0 35 L10 32 L20 34 L30 28 L40 30 L50 22 L60 25 L70 15 L80 18 L90 5 L100 8" fill="none" stroke="#0096D6" strokeWidth="0.8" className="animate-[dash_10s_linear_infinite]" />
                 </svg>
                 <div className="absolute top-6 md:top-10 right-6 md:right-10 text-right">
                    <p className="text-[8px] md:text-[11px] font-black text-emerald-500 uppercase tracking-widest bg-emerald-50 px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-emerald-100 shadow-sm">+12.4% PERFORMANCE YTD</p>
                 </div>
              </div>
            </section>

            <section className="grid md:grid-cols-2 gap-6 md:gap-8">
               <div className="p-8 md:p-12 bg-slate-950 rounded-[2rem] md:rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-24 h-full bg-blue-500/5 -skew-x-12 translate-x-12 group-hover:translate-x-6 transition-transform"></div>
                  <h3 className="text-xl md:text-2xl font-black mb-3 md:mb-4 tracking-tight relative z-10">Board of Directors</h3>
                  <p className="text-slate-400 text-xs md:text-sm font-medium leading-relaxed mb-8 md:mb-10 relative z-10">View the leadership guiding CONCOR's strategic vision and corporate governance protocols.</p>
                  <button className="text-[9px] md:text-[10px] font-black text-[#0096D6] uppercase tracking-[0.2em] border-b-2 border-[#0096D6] pb-1 relative z-10 hover:text-white hover:border-white transition-all">Governance Hub</button>
               </div>
               <div className="p-8 md:p-12 bg-slate-50 rounded-[2rem] md:rounded-[2.5rem] text-slate-900 border border-slate-100 shadow-sm relative overflow-hidden group">
                  <h3 className="text-xl md:text-2xl font-black mb-3 md:mb-4 tracking-tight">Dividend Yield</h3>
                  <p className="text-slate-500 text-xs md:text-sm font-medium leading-relaxed mb-8 md:mb-10">Consistently rewarding stakeholders through stable payouts and operational growth.</p>
                  <button className="text-[9px] md:text-[10px] font-black text-slate-900 uppercase tracking-[0.2em] border-b-2 border-slate-900 pb-1">Yield History</button>
               </div>
            </section>
          </div>

          <div className="lg:col-span-4 space-y-10 md:space-y-12">
             <div>
                <h3 className="text-[10px] md:text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] md:tracking-[0.3em] mb-6 md:mb-8 text-center md:text-left">Financial Reporting</h3>
                <div className="space-y-3 md:space-y-4">
                  {reports.map(r => (
                    <div key={r.title} className="p-6 md:p-8 bg-white border border-slate-100 rounded-[1.5rem] md:rounded-3xl flex items-center justify-between hover:border-[#0096D6] hover:shadow-xl transition-all cursor-pointer group">
                      <div className="flex-1 pr-4">
                        <p className="text-xs md:text-[13px] font-black text-slate-900 group-hover:text-[#0096D6] transition-colors">{r.title}</p>
                        <p className="text-[8px] md:text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1.5">{r.size} • Archive Node</p>
                      </div>
                      <div className="w-10 h-10 md:w-11 md:h-11 rounded-xl bg-slate-50 text-slate-300 group-hover:bg-blue-50 group-hover:text-[#0096D6] flex items-center justify-center transition-all shrink-0">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" /></svg>
                      </div>
                    </div>
                  ))}
                </div>
             </div>
             
             <div className="p-8 md:p-10 bg-slate-50 rounded-[2rem] md:rounded-[3rem] border border-slate-100 text-center md:text-left">
                <h4 className="text-[10px] md:text-[11px] font-black text-slate-900 uppercase tracking-widest mb-6">Investor Desk</h4>
                <p className="text-xs font-bold text-slate-500 leading-relaxed mb-8 md:mb-10">Dedicated conduit for shareholder queries, stock transfers, and financial disclosure assistance.</p>
                <p className="text-xs md:text-sm font-black text-[#0096D6] mb-2 truncate">investor.relations@concor.co.in</p>
                <p className="text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest">HQ: +91 11 41222500</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestorRelationsPage;