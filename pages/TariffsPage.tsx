import React from 'react';
import { Link } from 'react-router-dom';
import CorporateHeader from '../components/CorporateHeader';
import { CONCOR_LOGO } from '../constants';

const TariffsPage: React.FC = () => {
  const categories = [
    { name: "Public Tariff", count: 12, date: "2023-24" },
    { name: "Terminal Charges", count: 8, date: "2023-24" },
    { name: "Service Tax/GST", count: 4, date: "2024" },
    { name: "Handling Rates", count: 15, date: "Current" }
  ];

  const tariffs = [
    { code: "EXIM-20", description: "20ft Standard Export Handling (ICD TKD)", rate: "₹ 14,200", unit: "Per TEU" },
    { code: "DOM-40", description: "40ft Domestic Loaded Movement (LNI-BCT)", rate: "₹ 28,500", unit: "Per Box" },
    { code: "YRD-WL", description: "Yard Wharfage (Beyond 72 hours)", rate: "₹ 1,200", unit: "Per Day" },
    { code: "FMLM-PK", description: "Last Mile Pickup (Within 20km Hub)", rate: "₹ 4,500", unit: "Per Container" }
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      <CorporateHeader />

      <div className="pt-20 md:pt-24 relative py-12 md:py-24 px-6 md:px-12 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-end justify-between gap-8 md:gap-10 pt-8 md:pt-12 text-center md:text-left">
          <div>
            <p className="text-[9px] md:text-[10px] font-black text-[#0096D6] uppercase tracking-[0.3em] md:tracking-[0.4em] mb-4">Financial Transparency</p>
            <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter leading-none">Official Tariffs & Rates</h1>
          </div>
          <div className="flex bg-white rounded-xl md:rounded-2xl p-1.5 border border-slate-200 shadow-sm">
            <button className="px-5 md:px-8 py-2 md:py-3 bg-[#0096D6] text-white rounded-lg md:rounded-[1rem] text-[9px] md:text-[10px] font-black uppercase tracking-widest shadow-lg shadow-blue-500/20">Active Rates</button>
            <button className="px-5 md:px-8 py-2 md:py-3 text-slate-400 text-[9px] md:text-[10px] font-black uppercase tracking-widest">Historical</button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-20">
          {categories.map(c => (
            <div key={c.name} className="p-8 md:p-10 bg-white border border-slate-100 rounded-[1.5rem] md:rounded-[2rem] hover:border-[#0096D6] shadow-sm hover:shadow-xl transition-all cursor-pointer group">
               <p className="text-[8px] md:text-[9px] font-black text-slate-400 uppercase tracking-widest mb-3">{c.date}</p>
               <h3 className="text-lg md:text-xl font-black text-slate-900 group-hover:text-[#0096D6] transition-colors tracking-tight">{c.name}</h3>
               <p className="text-[10px] md:text-xs font-medium text-slate-400 mt-4 md:mt-6 pt-4 md:pt-6 border-t border-slate-50">{c.count} Official Schedules</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-[1.5rem] md:rounded-[2.5rem] border border-slate-100 overflow-hidden shadow-2xl">
           <div className="px-6 md:px-10 py-6 md:py-8 border-b border-slate-50 bg-slate-50/20 flex flex-col sm:flex-row justify-between items-center gap-4">
              <span className="text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest">Terminal Rate Schedule Index</span>
              <button className="text-[9px] md:text-[10px] font-black text-[#0096D6] uppercase tracking-widest border-b-2 border-[#0096D6] pb-1">Export Ledger</button>
           </div>
           <div className="overflow-x-auto">
             <table className="w-full text-left min-w-[600px]">
                <thead>
                  <tr className="bg-slate-50/30">
                    <th className="px-6 md:px-10 py-4 md:py-6 text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest">Service Code</th>
                    <th className="px-6 md:px-10 py-4 md:py-6 text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest">Service Description</th>
                    <th className="px-6 md:px-10 py-4 md:py-6 text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest text-right">Official Rate</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {tariffs.map(t => (
                    <tr key={t.code} className="hover:bg-slate-50/50 transition-colors group">
                      <td className="px-6 md:px-10 py-6 md:py-8 font-black text-slate-900 text-sm md:text-base tabular tracking-tighter">{t.code}</td>
                      <td className="px-6 md:px-10 py-6 md:py-8">
                         <p className="text-sm md:text-base font-bold text-slate-700 tracking-tight">{t.description}</p>
                         <p className="text-[8px] md:text-[9px] font-black text-slate-400 uppercase tracking-[0.15em] md:tracking-[0.2em] mt-2">Terminal Specific Protocol</p>
                      </td>
                      <td className="px-6 md:px-10 py-6 md:py-8 text-right">
                         <p className="text-xl md:text-2xl font-black text-[#0096D6] tracking-tighter tabular leading-none">{t.rate}</p>
                         <p className="text-[8px] md:text-[9px] font-black text-slate-400 uppercase tracking-widest mt-1 md:mt-1.5">{t.unit}</p>
                      </td>
                    </tr>
                  ))}
                </tbody>
             </table>
           </div>
        </div>
      </div>
    </div>
  );
};

export default TariffsPage;