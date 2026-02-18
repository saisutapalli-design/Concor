import React from 'react';
import { Link } from 'react-router-dom';
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
                  className={`text-[11px] font-black uppercase tracking-[0.25em] transition-all whitespace-nowrap py-2 relative group ${link.path === '/tariffs' ? 'text-[#0096D6]' : 'text-slate-400 hover:text-[#0096D6]'}`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-[#0096D6] transition-all ${link.path === '/tariffs' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
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

      <div className="pt-24 relative py-24 px-12 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-end justify-between gap-10 pt-12">
          <div>
            <p className="text-[10px] font-black text-[#0096D6] uppercase tracking-[0.4em] mb-4">Financial Transparency</p>
            <h1 className="text-5xl font-black text-slate-900 tracking-tighter leading-none">Official Tariffs & Rates</h1>
          </div>
          <div className="flex bg-white rounded-2xl p-1.5 border border-slate-200 shadow-sm">
            <button className="px-8 py-3 bg-[#0096D6] text-white rounded-[1rem] text-[10px] font-black uppercase tracking-widest shadow-lg shadow-blue-500/20">Active Rates</button>
            <button className="px-8 py-3 text-slate-400 text-[10px] font-black uppercase tracking-widest">Historical</button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-12 py-20">
        <div className="grid lg:grid-cols-4 gap-6 mb-20">
          {categories.map(c => (
            <div key={c.name} className="p-10 bg-white border border-slate-100 rounded-[2rem] hover:border-[#0096D6] shadow-sm hover:shadow-xl transition-all cursor-pointer group">
               <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-3">{c.date}</p>
               <h3 className="text-xl font-black text-slate-900 group-hover:text-[#0096D6] transition-colors tracking-tight">{c.name}</h3>
               <p className="text-xs font-medium text-slate-400 mt-6 pt-6 border-t border-slate-50">{c.count} Official Schedules</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-[2.5rem] border border-slate-100 overflow-hidden shadow-2xl">
           <div className="px-10 py-8 border-b border-slate-50 bg-slate-50/20 flex justify-between items-center">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Terminal Rate Schedule Index</span>
              <button className="text-[10px] font-black text-[#0096D6] uppercase tracking-widest border-b-2 border-[#0096D6] pb-1">Export Ledger</button>
           </div>
           <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-50/30">
                  <th className="px-10 py-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">Service Code</th>
                  <th className="px-10 py-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">Service Description</th>
                  <th className="px-10 py-6 text-[10px] font-black text-slate-400 uppercase tracking-widest text-right">Official Rate</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {tariffs.map(t => (
                  <tr key={t.code} className="hover:bg-slate-50/50 transition-colors group">
                    <td className="px-10 py-8 font-black text-slate-900 text-base tabular tracking-tighter">{t.code}</td>
                    <td className="px-10 py-8">
                       <p className="text-base font-bold text-slate-700 tracking-tight">{t.description}</p>
                       <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] mt-2">Terminal Specific Protocol</p>
                    </td>
                    <td className="px-10 py-8 text-right">
                       <p className="text-2xl font-black text-[#0096D6] tracking-tighter tabular leading-none">{t.rate}</p>
                       <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mt-1.5">{t.unit}</p>
                    </td>
                  </tr>
                ))}
              </tbody>
           </table>
        </div>
      </div>
    </div>
  );
};

export default TariffsPage;