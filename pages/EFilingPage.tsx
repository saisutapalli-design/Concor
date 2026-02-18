import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PDATransaction, Filing } from '../types';
import AIChatbot from '../components/AIChatbot';

const EFilingPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'Import' | 'Export' | 'FMLM' | null>(null);
  const [showFilingForm, setShowFilingForm] = useState(false);
  const [filings, setFilings] = useState<Filing[]>([
    { id: 'FLG-101', category: 'Export', type: 'CFN Manifest', status: 'Processed', timestamp: '2023-10-25', aiConfidence: 99 },
    { id: 'FLG-102', category: 'Import', type: 'Delivery Booking', status: 'Pending', timestamp: '2023-10-26', aiConfidence: 97 },
    { id: 'FLG-103', category: 'FMLM', type: 'Truck Gate Pass', status: 'Draft', timestamp: '2023-10-27', aiConfidence: 98 },
  ]);

  const filingTypes = {
    'Import': ['Book Delivery', 'Customs Exam Request', 'Gate Pass Generation', 'Delivery Order (DO)'],
    'Export': ['CFN Filing', 'Container Booking', 'Stuffing Permit', 'Export Gate Pass'],
    'FMLM': ['Truck Gate Pass', 'Delivery Challan', 'Incident Report', 'Load Confirmation']
  };

  const [formData, setFormData] = useState({ 
    type: '', 
    container: 'CONU821034', 
    description: '',
    iecCode: 'IEC-DL-29381'
  });

  const handleFilingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newFiling: Filing = {
      id: `FLG-${Math.floor(Math.random() * 900) + 100}`,
      category: selectedCategory!,
      type: formData.type,
      status: 'Pending',
      timestamp: new Date().toISOString().split('T')[0],
      aiConfidence: 98,
      riskProbability: 12
    };
    setFilings(prev => [newFiling, ...prev]);
    setShowFilingForm(false);
  };

  return (
    <div className="min-h-full pb-20 bg-slate-50/50">
      <div className="bg-white border-b border-slate-100 px-8 py-10 mb-8 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <nav className="flex items-center gap-2.5 text-[12px] font-black uppercase tracking-[0.2em] mb-3">
              <Link to="/dashboard" className="text-slate-400 hover:text-slate-900 transition-colors">Enterprise Workspace</Link>
              <div className="flex items-center">
                <svg className="w-2.5 h-2.5 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="4"><path d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
              </div>
              <span className="text-[#0096D6]">Filing & ETMS Hub</span>
            </nav>
            <h1 className="text-3xl font-black text-slate-900 tracking-tighter leading-none mb-3">Documentation Center</h1>
            <p className="text-base text-slate-500 font-medium max-w-xl">Regulatory filing and terminal settlement with zero-touch AI validation.</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-12 mb-6">
             <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6 ml-1">Documentation Lane Selection</h3>
             <div className="grid md:grid-cols-3 gap-8">
                {(['Import', 'Export', 'FMLM'] as const).map(cat => (
                  <button 
                    key={cat} 
                    onClick={() => setSelectedCategory(cat)}
                    className={`p-12 rounded-[2.5rem] border-2 transition-all flex flex-col items-center gap-6 relative group ${
                      selectedCategory === cat 
                      ? 'bg-slate-950 border-slate-950 text-white shadow-2xl scale-[1.02]' 
                      : 'bg-white border-slate-100 text-slate-400 hover:border-blue-100'
                    }`}
                  >
                     <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all ${selectedCategory === cat ? 'bg-[#0096D6] text-white shadow-lg' : 'bg-slate-50 text-slate-300'}`}>
                        {cat === 'Import' && <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" /></svg>}
                        {cat === 'Export' && <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" /></svg>}
                        {cat === 'FMLM' && <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.806H9.42c-.512 0-.952.307-1.152.755L5.25 10.5" /></svg>}
                     </div>
                     <div className="text-center">
                        <span className="text-xl font-black uppercase tracking-tighter block mb-1">{cat} Filing</span>
                        <span className="text-[9px] font-black opacity-50 uppercase tracking-widest">{filingTypes[cat].length} Smart Protocols</span>
                     </div>
                  </button>
                ))}
             </div>
          </div>

          {selectedCategory && (
            <div className="lg:col-span-12 animate-in slide-in-from-top-4 mb-4">
               <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-full bg-[#0096D6]/5 -skew-x-12 translate-x-12 pointer-events-none"></div>
                  <div className="relative z-10">
                     <h4 className="text-2xl font-black text-slate-900 tracking-tighter uppercase">{selectedCategory} Submission Node</h4>
                     <div className="flex items-center gap-3 mt-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0096D6] animate-pulse"></span>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Linked to Asset <b>{formData.container}</b> | Telemetry Active</p>
                     </div>
                  </div>
                  <button 
                    onClick={() => { setShowFilingForm(true); setFormData({...formData, type: filingTypes[selectedCategory][0]}); }} 
                    className="btn-prominent !h-14 relative z-10 px-10 shadow-blue-500/20"
                  >
                    Initiate Smart Submission
                  </button>
               </div>
            </div>
          )}

          {showFilingForm && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-900/60 backdrop-blur-sm animate-in fade-in">
               <div className="bg-white w-full max-w-2xl rounded-[3rem] shadow-2xl border border-slate-100 overflow-hidden flex flex-col max-h-[90vh]">
                  <div className="p-10 border-b border-slate-50 flex justify-between items-center bg-slate-50/20">
                     <div>
                        <h2 className="text-2xl font-black text-slate-900 tracking-tighter uppercase leading-none">Smart Protocol Submission</h2>
                        <div className="inline-flex items-center gap-2 mt-3 px-3 py-1.5 bg-emerald-100 rounded-lg">
                           <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                           <span className="text-[8px] font-black text-emerald-600 uppercase tracking-widest">AI Pre-populated Fields Active</span>
                        </div>
                     </div>
                     <button onClick={() => setShowFilingForm(false)} className="w-12 h-12 flex items-center justify-center text-slate-300 hover:text-slate-900 transition-all hover:bg-slate-100 rounded-2xl"><svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" /></svg></button>
                  </div>
                  
                  <div className="flex-1 overflow-y-auto p-10 custom-scrollbar">
                    <form onSubmit={handleFilingSubmit} className="space-y-8">
                       <div className="grid md:grid-cols-2 gap-8">
                          <div className="space-y-3">
                             <label className="form-label">Document Protocol Type</label>
                             <div className="relative flex items-center">
                                <select value={formData.type} onChange={(e) => setFormData({...formData, type: e.target.value})} className="!bg-slate-50 pr-14 appearance-none">
                                   {filingTypes[selectedCategory!].map(t => <option key={t}>{t}</option>)}
                                </select>
                                <div className="absolute right-6 pointer-events-none text-slate-400"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3"><path d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg></div>
                             </div>
                          </div>
                          <div className="space-y-3">
                             <label className="form-label">Importer/Exporter Code (IEC)</label>
                             <div className="relative">
                                <input type="text" value={formData.iecCode} onChange={e => setFormData({...formData, iecCode: e.target.value})} className="!bg-slate-50" />
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-1.5 bg-emerald-50 px-2 py-1 rounded-md">
                                   <svg className="w-3 h-3 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                                   <span className="text-[8px] font-black text-emerald-600 uppercase tracking-widest">Validated</span>
                                </div>
                             </div>
                          </div>
                       </div>
                       
                       <div className="space-y-3">
                          <label className="form-label">Container Reference (Linked via KYCL)</label>
                          <div className="p-4 bg-slate-50 border border-dashed border-slate-300 rounded-2xl flex items-center justify-between">
                             <span className="text-sm font-bold text-slate-500 uppercase tracking-tight">{formData.container}</span>
                             <span className="text-[9px] font-black text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-lg">Auto-Linked Telemetry</span>
                          </div>
                       </div>

                       <div className="space-y-3">
                          <label className="form-label">Customs Protocol Description</label>
                          <textarea 
                            className="w-full bg-slate-50 border-slate-100 h-32 rounded-2xl p-6 font-bold text-sm outline-none resize-none"
                            placeholder="AI has pre-filled basic telemetry. Add operational context..."
                            value={formData.description}
                            onChange={(e) => setFormData({...formData, description: e.target.value})}
                          />
                       </div>

                       <div className="p-6 bg-amber-50 rounded-[2rem] border border-amber-100 space-y-4">
                          <h5 className="text-[10px] font-black text-amber-800 uppercase tracking-widest flex items-center gap-2">
                             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                             AI Risk Validation Engine
                          </h5>
                          <div className="grid grid-cols-2 gap-6">
                             <div className="text-left">
                                <p className="text-[9px] font-bold text-amber-700 uppercase tracking-tight">Customs Hold Probability</p>
                                <p className="text-xl font-black text-amber-900 tracking-tighter">12.5% <span className="text-[9px] font-black text-emerald-600">(Low Risk)</span></p>
                             </div>
                             <div className="text-left">
                                <p className="text-[9px] font-bold text-amber-700 uppercase tracking-tight">Est. Regulatory Duty</p>
                                <p className="text-xl font-black text-amber-900 tracking-tighter tabular">₹24,500 <span className="text-[9px] font-black text-slate-400">± 5%</span></p>
                             </div>
                          </div>
                       </div>

                       <button type="submit" className="btn-prominent w-full h-16 shadow-blue-500/20">
                          Digitally Sign (DSC) & Establish Record
                       </button>
                    </form>
                  </div>
               </div>
            </div>
          )}

          <div className="lg:col-span-4 space-y-10">
            <div className="bg-slate-900 p-12 rounded-[3rem] text-white shadow-2xl relative overflow-hidden ring-1 ring-white/10">
               <div className="absolute top-0 right-0 w-32 h-full bg-[#0096D6]/10 -skew-x-12 translate-x-12 pointer-events-none"></div>
               <p className="text-[11px] font-black text-white/40 uppercase tracking-[0.3em] mb-12">ETMS WALLET (PDA)</p>
               <h2 className="text-5xl font-black tracking-tighter tabular mb-6">₹ 4,77,600</h2>
               <div className="flex items-center gap-3 mb-12">
                 <div className="w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_10px_rgb(16_185_129)]"></div>
                 <p className="text-xs font-black text-emerald-400 uppercase tracking-widest">Healthy Liquidity Node</p>
               </div>
               <button className="w-full bg-white text-slate-900 h-16 rounded-2xl font-black text-[11px] uppercase tracking-widest hover:bg-slate-50 transition-all shadow-xl shadow-black/20">Refill Node Capital</button>
            </div>
          </div>

          <div className="lg:col-span-8">
             <div className="bg-white rounded-[3rem] border border-slate-200 shadow-2xl overflow-hidden h-full flex flex-col">
                <div className="p-12 border-b border-slate-100 flex justify-between items-center bg-slate-50/20">
                   <div>
                      <h3 className="text-2xl font-black text-slate-900 tracking-tighter mb-2 uppercase">Protocol Stream</h3>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Historical regulatory validation ledger</p>
                   </div>
                   <div className="bg-slate-100 p-1.5 rounded-2xl flex gap-2">
                      <button className="px-8 py-3 text-[9px] font-black uppercase text-blue-600 bg-white rounded-xl shadow-sm">Active</button>
                      <button className="px-8 py-3 text-[9px] font-black uppercase text-slate-400">Archives</button>
                   </div>
                </div>
                <div className="flex-1 overflow-x-auto">
                  <table className="w-full text-left">
                    <thead className="bg-slate-50/20 border-b border-slate-50">
                      <tr>
                        <th className="px-12 py-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">Protocol Reference</th>
                        <th className="px-12 py-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">AI Integrity</th>
                        <th className="px-12 py-6 text-[10px] font-black text-slate-400 uppercase tracking-widest text-right">State</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {filings.map(f => (
                        <tr key={f.id} className="group hover:bg-slate-50/50 transition-colors">
                          <td className="px-12 py-8">
                            <p className="font-black text-slate-900 text-lg tracking-tighter mb-1">{f.id}</p>
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{f.category} / {f.type}</p>
                          </td>
                          <td className="px-12 py-8">
                            <div className="flex items-center gap-3">
                               <div className="w-24 bg-slate-100 h-1.5 rounded-full overflow-hidden">
                                  <div className="bg-blue-500 h-full" style={{ width: `${f.aiConfidence}%` }}></div>
                               </div>
                               <span className="text-[10px] font-black text-slate-500 tabular">{f.aiConfidence}%</span>
                            </div>
                          </td>
                          <td className="px-12 py-8 text-right">
                             <div className={`inline-flex items-center gap-2.5 px-6 py-2 rounded-full text-[9px] font-black uppercase tracking-widest ${
                               f.status === 'Processed' ? 'bg-emerald-50 text-emerald-700' : 
                               f.status === 'Draft' ? 'bg-slate-100 text-slate-500' : 'bg-blue-50 text-blue-700'
                             }`}>
                               <div className={`w-1.5 h-1.5 rounded-full ${f.status === 'Processed' ? 'bg-emerald-500' : 'bg-blue-500 animate-pulse'}`}></div>
                               {f.status}
                             </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
             </div>
          </div>
        </div>
      </div>
      <AIChatbot context="Filing" />
    </div>
  );
};

export default EFilingPage;