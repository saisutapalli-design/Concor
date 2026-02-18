import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { User, Booking } from '../types';
import { TERMINALS } from '../constants';
import AIChatbot from '../components/AIChatbot';

interface Bid {
  id: string;
  vendor: string;
  rating: number;
  vehicle: string;
  amount: number;
  eta: string;
  status: 'Open' | 'Shortlisted' | 'Accepted';
  timestamp: string;
}

interface ELogisticsPageProps {
  user: User;
}

const ELogisticsPage: React.FC<ELogisticsPageProps> = ({ user }) => {
  const [showBiddingArena, setShowBiddingArena] = useState(false);
  const [showManualForm, setShowManualForm] = useState(false);
  const [activeBids, setActiveBids] = useState<Bid[]>([
    { id: 'BID-104', vendor: 'GATI-KWE Logistics', rating: 4.9, vehicle: 'Tata Prima 4028', amount: 14200, eta: '22 mins', status: 'Open', timestamp: '12:05:10' },
    { id: 'BID-105', vendor: 'Mahindra Logistics', rating: 4.7, vehicle: 'Ashok Leyland 3518', amount: 13850, eta: '45 mins', status: 'Open', timestamp: '12:06:22' },
    { id: 'BID-106', vendor: 'VRL Logistics Ltd', rating: 4.8, vehicle: 'BharatBenz 2823', amount: 14500, eta: '12 mins', status: 'Open', timestamp: '12:08:45' },
  ]);

  const [bookings, setBookings] = useState<Booking[]>([
    { id: 'BOK-98211', origin: 'ICD TKD', destination: 'Mundra Port', containerCount: 4, serviceType: 'Rail', status: 'Confirmed', createdAt: '2023-10-27' },
    { id: 'FMLM-1029', origin: 'WareHouse-Z', destination: 'ICD Dadri', containerCount: 2, serviceType: 'Road', status: 'Confirmed', createdAt: '2023-10-26' },
    { id: 'BOK-88219', origin: 'ICD Dadri', destination: 'Nhava Sheva', containerCount: 12, serviceType: 'Rail', status: 'Draft', createdAt: '2023-10-26' },
  ]);

  const [formData, setFormData] = useState({
    origin: TERMINALS[0],
    destination: 'Mundra Port',
    count: 1,
    type: 'Rail' as 'Rail' | 'Road'
  });

  useEffect(() => {
    if (!showBiddingArena) return;
    const interval = setInterval(() => {
      const newBid: Bid = {
        id: `BID-${Math.floor(Math.random() * 900) + 100}`,
        vendor: ['TCI Freight', 'Delhivery Express', 'SafeExpress', 'BlueDart Logistics'][Math.floor(Math.random() * 4)],
        rating: 4.5 + Math.random() * 0.5,
        vehicle: ['Eicher Pro 6028', 'Tata LPT 2518', 'Mahindra Blazo X'][Math.floor(Math.random() * 3)],
        amount: Math.floor(13000 + Math.random() * 2000),
        eta: `${Math.floor(10 + Math.random() * 50)} mins`,
        status: 'Open',
        timestamp: new Date().toLocaleTimeString([], { hour12: false })
      };
      setActiveBids(prev => [newBid, ...prev].slice(0, 10));
    }, 4000);
    return () => clearInterval(interval);
  }, [showBiddingArena]);

  const handleAcceptBid = (bid: Bid) => {
    setActiveBids(prev => prev.map(b => b.id === bid.id ? { ...b, status: 'Accepted' } : b));
    const newB: Booking = {
      id: `FMLM-${Math.floor(Math.random() * 9000) + 1000}`,
      origin: 'CONCOR Terminal',
      destination: bid.vendor + ' Hub',
      containerCount: 1,
      serviceType: 'Road',
      status: 'Confirmed',
      createdAt: new Date().toISOString().split('T')[0]
    };
    setTimeout(() => {
      setBookings(prev => [newB, ...prev]);
      setShowBiddingArena(false);
    }, 800);
  };

  const handleManualSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newB: Booking = {
      id: `BOK-${Math.floor(Math.random() * 90000) + 10000}`,
      origin: formData.origin,
      destination: formData.destination,
      containerCount: formData.count,
      serviceType: formData.type,
      status: 'Confirmed',
      createdAt: new Date().toISOString().split('T')[0]
    };
    setBookings(prev => [newB, ...prev]);
    setShowManualForm(false);
  };

  const financialKPIs = [
    { label: 'Revenue YTD', value: '₹ 6,753.52 Cr', trend: '+4.2%', sub: '7.2k Tar' },
    { label: 'Fleet Latency', value: '18.4 Hrs', trend: '-2.1%', sub: 'Avg Node' },
    { label: 'Bid Savings', value: '₹ 12.8M', trend: 'Peak', sub: '30 Days' },
    { label: 'AI Documentation', value: '98.2%', trend: 'Valid', sub: 'Success' },
  ];

  return (
    <div className="min-h-full pb-16 bg-slate-50">
      <div className="bg-white border-b border-slate-100 px-8 py-10 mb-8 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <nav className="flex items-center gap-2.5 text-[12px] font-black uppercase tracking-[0.2em] mb-3">
              <Link to="/dashboard" className="text-slate-400 hover:text-slate-900 transition-colors">Enterprise Workspace</Link>
              <div className="flex items-center">
                <svg className="w-2.5 h-2.5 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="4"><path d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
              </div>
              <span className="text-[#0096D6]">e-Logistics Control</span>
            </nav>
            <h1 className="text-3xl font-black text-slate-900 tracking-tighter leading-none mb-3">Operations Center</h1>
            <p className="text-base text-slate-500 font-medium max-w-xl">Autonomous fleet orchestration and multi-modal routing protocol.</p>
          </div>
          <div className="flex gap-3">
             <button onClick={() => setShowBiddingArena(true)} className="bg-slate-950 text-white px-6 h-12 rounded-xl font-black text-[10px] uppercase tracking-widest shadow-lg hover:bg-black transition-all active:scale-95">Bidding Arena</button>
             <button onClick={() => setShowManualForm(true)} className="btn-prominent !h-12 !text-[10px] px-6">Manual Booking</button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8">
        {showManualForm && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-900/60 backdrop-blur-sm animate-in fade-in">
            <div className="bg-white w-full max-w-xl rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-100">
               <div className="p-10 border-b border-slate-50 flex justify-between items-center">
                  <h2 className="text-2xl font-black text-slate-900 tracking-tighter uppercase">New Manual Booking</h2>
                  <button onClick={() => setShowManualForm(false)} className="text-slate-300 hover:text-slate-900 transition-colors"><svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" /></svg></button>
               </div>
               <form onSubmit={handleManualSubmit} className="p-10 space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                       <label className="form-label">Origin Terminal</label>
                       <div className="relative flex items-center">
                        <select 
                          value={formData.origin}
                          onChange={(e) => setFormData({...formData, origin: e.target.value})}
                          className="w-full h-14 !px-6 bg-slate-50 border-slate-100 appearance-none pr-14 font-bold text-sm text-slate-900 outline-none focus:border-[#0096D6] rounded-2xl"
                        >
                          {TERMINALS.map(t => <option key={t}>{t}</option>)}
                        </select>
                        <div className="absolute right-6 pointer-events-none text-slate-400 flex items-center h-full">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3"><path d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>
                        </div>
                       </div>
                    </div>
                    <div className="space-y-2">
                       <label className="form-label">Destination</label>
                       <input type="text" value={formData.destination} onChange={(e) => setFormData({...formData, destination: e.target.value})} className="!px-4" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                       <label className="form-label">Container Count</label>
                       <div className="h-14 bg-slate-50 border border-slate-100 rounded-2xl flex items-center px-2 group focus-within:border-[#0096D6] focus-within:bg-white transition-all shadow-sm">
                         <button type="button" onClick={() => setFormData({...formData, count: Math.max(1, formData.count - 1)})} className="w-10 h-10 flex items-center justify-center bg-white border border-slate-100 rounded-xl text-slate-900 hover:bg-slate-50 hover:border-slate-300 active:scale-90 transition-all shadow-sm"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3"><path d="M19.5 12h-15" /></svg></button>
                         <div className="flex-1 text-center font-black text-slate-900 text-sm">{formData.count} <span className="text-[9px] text-slate-400 ml-1 uppercase tracking-widest">Units</span></div>
                         <button type="button" onClick={() => setFormData({...formData, count: formData.count + 1})} className="w-10 h-10 flex items-center justify-center bg-white border border-slate-100 rounded-xl text-slate-900 hover:bg-slate-50 hover:border-slate-300 active:scale-90 transition-all shadow-sm"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3"><path d="M12 4.5v15m7.5-7.5h-15" /></svg></button>
                       </div>
                    </div>
                    <div className="space-y-2">
                       <label className="form-label">Service Type</label>
                       <div className="flex gap-2">
                          <button type="button" onClick={() => setFormData({...formData, type: 'Rail'})} className={`flex-1 h-14 rounded-2xl font-black text-[10px] border transition-all ${formData.type === 'Rail' ? 'bg-[#0096D6] text-white border-transparent' : 'bg-slate-50 text-slate-400 border-slate-100'}`}>RAIL</button>
                          <button type="button" onClick={() => setFormData({...formData, type: 'Road'})} className={`flex-1 h-14 rounded-2xl font-black text-[10px] border transition-all ${formData.type === 'Road' ? 'bg-[#0096D6] text-white border-transparent' : 'bg-slate-50 text-slate-400 border-slate-100'}`}>ROAD</button>
                       </div>
                    </div>
                  </div>
                  <button type="submit" className="btn-prominent w-full mt-4">Confirm Infrastructure Booking</button>
               </form>
            </div>
          </div>
        )}

        {showBiddingArena ? (
          <div className="animate-in fade-in slide-in-from-bottom-6 duration-500">
             <div className="bg-slate-950 rounded-[2.5rem] p-10 text-white shadow-2xl relative overflow-hidden border border-white/5 mb-8">
                <div className="absolute top-0 right-0 w-[40%] h-full bg-[#0096D6]/5 -skew-x-12 translate-x-16 blur-3xl pointer-events-none"></div>
                <div className="flex justify-between items-start mb-10 relative z-10">
                   <div>
                      <p className="text-[9px] font-black text-[#0096D6] uppercase tracking-[0.4em] mb-3">LIVE MARKETPLACE PROTOCOL</p>
                      <h2 className="text-3xl font-black tracking-tighter uppercase">FMLM Bidding Arena</h2>
                   </div>
                   <button onClick={() => setShowBiddingArena(false)} className="bg-white/5 p-3 rounded-xl hover:bg-white/10 transition-all border border-white/10">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path d="M6 18L18 6M6 6l12 12" /></svg>
                   </button>
                </div>
                <div className="grid lg:grid-cols-12 gap-10 relative z-10">
                   <div className="lg:col-span-8 space-y-3 max-h-[500px] overflow-y-auto pr-3 custom-scrollbar">
                      {activeBids.map((bid, i) => (
                        <div key={bid.id} className={`p-6 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-between group hover:bg-white/10 transition-all ${i === 0 ? 'ring-1 ring-[#0096D6] bg-white/[0.08]' : ''}`}>
                           <div className="flex items-center gap-5">
                              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-white/40 group-hover:text-white transition-colors border border-white/5">
                                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1-1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" /></svg>
                              </div>
                              <div>
                                 <h4 className="text-lg font-black tracking-tight leading-none">{bid.vendor}</h4>
                                 <div className="flex items-center gap-3 mt-1.5">
                                    <span className="text-[9px] font-black text-emerald-400 uppercase tracking-widest">{bid.rating} Rate</span>
                                    <span className="w-0.5 h-0.5 rounded-full bg-white/20"></span>
                                    <span className="text-[9px] font-black text-white/30 uppercase tracking-widest truncate max-w-[120px]">{bid.vehicle}</span>
                                 </div>
                              </div>
                           </div>
                           <div className="text-right flex items-center gap-6">
                              <div>
                                 <p className="text-xl font-black text-[#0096D6] tabular tracking-tighter">₹{bid.amount.toLocaleString()}</p>
                                 <p className="text-[8px] font-black text-white/30 uppercase mt-0.5 tracking-widest">ETA: {bid.eta}</p>
                              </div>
                              <button onClick={() => handleAcceptBid(bid)} disabled={bid.status === 'Accepted'} className={`px-6 h-10 rounded-lg font-black text-[9px] uppercase tracking-widest transition-all ${bid.status === 'Accepted' ? 'bg-emerald-500 text-white cursor-default' : 'bg-white text-slate-950 hover:bg-blue-50'}`}>{bid.status === 'Accepted' ? 'ACTIVE' : 'ACCEPT'}</button>
                           </div>
                        </div>
                      ))}
                   </div>
                   <div className="lg:col-span-4 space-y-4">
                      <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                         <h5 className="text-[10px] font-black text-white/30 uppercase tracking-widest mb-4">LIVE ANALYTICS</h5>
                         <div className="space-y-4">
                            <div><p className="text-[10px] font-bold text-white/50 mb-1">Avg Bid Range</p><p className="text-lg font-black tracking-tighter tabular">₹13.2k - ₹15.8k</p></div>
                            <div className="h-px bg-white/5 w-full"></div>
                            <div><p className="text-[10px] font-bold text-white/50 mb-1">Market Velocity</p><p className="text-lg font-black tracking-tighter text-emerald-400 tabular">1.2 Bids/Min</p></div>
                         </div>
                      </div>
                      <div className="p-6 bg-[#0096D6] rounded-2xl text-white shadow-xl">
                         <h5 className="text-[10px] font-black text-white/50 uppercase tracking-widest mb-2">ADVISORY</h5>
                         <p className="text-[11px] font-medium leading-relaxed opacity-90">Demand is peaking in Northern hubs. Fast-track bid acceptance recommended for 24h SLA.</p>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        ) : (
          <div className="grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-9 space-y-8">
              <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {financialKPIs.map((kpi, i) => (
                  <div key={i} className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm">
                    <p className="text-[9px] font-black text-slate-400 mb-2 uppercase tracking-widest">{kpi.label}</p>
                    <p className="text-xl font-black text-slate-900 tracking-tighter tabular leading-none">{kpi.value}</p>
                    <div className="flex items-center justify-between mt-3 pt-3 border-t border-slate-50">
                       <span className={`text-[9px] font-black uppercase tracking-widest ${kpi.trend.startsWith('+') ? 'text-emerald-500' : 'text-rose-500'}`}>{kpi.trend}</span>
                       <span className="text-[8px] font-bold text-slate-300 uppercase">{kpi.sub}</span>
                    </div>
                  </div>
                ))}
              </section>
              <section className="bg-white rounded-[2rem] border border-slate-100 shadow-xl overflow-hidden">
                <div className="px-8 py-5 border-b border-slate-50 flex justify-between items-center bg-slate-50/20">
                  <h3 className="text-[10px] font-black text-slate-900 uppercase tracking-widest">Active Movement Stream</h3>
                  <div className="bg-slate-100 p-1 rounded-lg flex gap-1"><button className="px-4 py-1.5 bg-white text-slate-900 rounded-md text-[9px] font-black uppercase tracking-widest shadow-sm">Real-time</button><button className="px-4 py-1.5 text-slate-400 rounded-md text-[9px] font-black uppercase tracking-widest">Archive</button></div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead><tr className="bg-slate-50/10"><th className="px-8 py-4 text-[9px] font-black text-slate-400 uppercase tracking-widest">Reference</th><th className="px-8 py-4 text-[9px] font-black text-slate-400 uppercase tracking-widest">Route Geometry</th><th className="px-8 py-4 text-[9px] font-black text-slate-400 uppercase tracking-widest text-right">Protocol State</th></tr></thead>
                    <tbody className="divide-y divide-slate-50">
                      {bookings.map(b => (
                        <tr key={b.id} className="hover:bg-slate-50/50 transition-colors">
                          <td className="px-8 py-6 font-black text-slate-900 text-base tabular tracking-tighter">{b.id}</td>
                          <td className="px-8 py-6"><div className="flex items-center gap-2.5"><span className="text-sm font-bold text-slate-600 truncate max-w-[150px]">{b.origin}</span><div className="flex items-center"><svg className="w-3.5 h-3.5 text-slate-300 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="4"><path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg></div><span className="text-sm font-bold text-slate-600 truncate max-w-[150px]">{b.destination}</span></div></td>
                          <td className="px-8 py-6 text-right"><span className={`inline-flex px-4 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-widest ${b.status === 'Confirmed' ? 'bg-blue-50 text-blue-700' : 'bg-slate-100 text-slate-400'}`}>{b.status}</span></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            </div>
            <div className="lg:col-span-3 space-y-8">
               <div className="bg-slate-950 p-8 rounded-[2rem] text-white shadow-xl relative overflow-hidden border border-white/5"><p className="text-[9px] font-black text-white/30 uppercase tracking-widest mb-6">Fleet Telemetry</p><div className="space-y-6"><div className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1 shrink-0"></div><p className="text-[11px] font-medium leading-relaxed opacity-70">Optimal signal load detected across all Northern hubs.</p></div></div></div>
               <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-xl">
                  <div className="flex justify-between items-center mb-6"><h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Market Bids</h4><span className="px-2 py-0.5 bg-blue-50 text-blue-600 rounded-md text-[8px] font-black uppercase animate-pulse">Live</span></div>
                  <div className="space-y-3">{activeBids.slice(0, 4).map(bid => (<div key={bid.id} className="p-4 bg-slate-50 rounded-xl border border-transparent hover:border-blue-200/50 transition-all cursor-pointer group"><div className="flex justify-between items-center mb-1"><p className="text-[13px] font-black text-slate-900 truncate pr-2">{bid.vendor}</p><p className="text-[13px] font-black text-[#0096D6] tabular tracking-tighter shrink-0">₹{bid.amount.toLocaleString()}</p></div><p className="text-[8px] font-black text-slate-400 uppercase tracking-[0.1em] truncate">{bid.vehicle}</p></div>))}<button onClick={() => setShowBiddingArena(true)} className="w-full pt-3 text-[9px] font-black text-slate-400 uppercase tracking-widest hover:text-slate-900 transition-colors">Full Arena Stream</button></div>
               </div>
            </div>
          </div>
        )}
      </div>
      <AIChatbot context="Logistics" />
    </div>
  );
};

export default ELogisticsPage;