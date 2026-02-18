import React, { useState, useMemo } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { TERMINALS } from '../constants';
import AIChatbot from '../components/AIChatbot';

const FMLMPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    container: (location.state as any)?.container || 'CONU821034',
    terminal: TERMINALS[0],
    address: 'Phase III, Okhla Industrial Area, Delhi',
    truckId: '',
  });

  // Enhanced mock data with raw inputs for the prediction engine
  const trucks = useMemo(() => [
    { 
      id: 'T-9921', 
      vendor: 'TCI Freight', 
      rating: 4.8, 
      type: '20ft Side Body', 
      price: 14200, 
      distanceKm: 4.2, 
      matchScore: 98,
      reliabilityScore: 96 
    },
    { 
      id: 'T-1029', 
      vendor: 'Delhivery', 
      rating: 4.1, 
      type: '40ft Trailer', 
      price: 15800, 
      distanceKm: 12.4, 
      matchScore: 82,
      reliabilityScore: 78 
    },
    { 
      id: 'T-5510', 
      vendor: 'BlueDart', 
      rating: 4.9, 
      type: '20ft Flatbed', 
      price: 16200, 
      distanceKm: 2.1, 
      matchScore: 94,
      reliabilityScore: 99 
    }
  ], []);

  // AI Prediction Engine: Calculates ETA based on distance, speed, and driver rating weighting
  const calculatePredictedETA = (distance: number, rating: number) => {
    const avgSpeedKmPerMin = 0.4; // 24 km/h in terminal traffic
    const baseTime = distance / avgSpeedKmPerMin;
    // Driver punctuality factor: Higher ratings (4.5+) are assumed to have 0-5% delay, lower ratings more.
    const delayFactor = rating >= 4.5 ? 1.05 : 1.25;
    const prediction = Math.round(baseTime * delayFactor);
    return prediction;
  };

  const [selectedTruck, setSelectedTruck] = useState<typeof trucks[0] | null>(null);

  const handleNext = () => setStep(prev => Math.min(prev + 1, 3));
  const handleBack = () => setStep(prev => Math.max(prev - 1, 1));

  return (
    <div className="min-h-full pb-16 bg-[#F8FAFC]">
      <div className="bg-white border-b border-slate-100 px-8 py-10 mb-8 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <nav className="flex items-center gap-2.5 text-[12px] font-black uppercase tracking-[0.2em] mb-3">
              <Link to="/dashboard" className="text-slate-400 hover:text-slate-900 transition-colors">Enterprise Workspace</Link>
              <div className="flex items-center">
                <svg className="w-2.5 h-2.5 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="4"><path d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
              </div>
              <span className="text-[#0096D6]">FMLM Fleet Booking</span>
            </nav>
            <h1 className="text-3xl font-black text-slate-900 tracking-tighter leading-none mb-3">FMLM Orchestrator</h1>
            <p className="text-base text-slate-500 font-medium max-w-xl">Intelligent first/last mile container movement and driver matching.</p>
          </div>
          <div className="flex gap-4 items-center bg-slate-50 px-6 py-3 rounded-2xl border border-slate-100">
             {[1, 2, 3].map(i => (
               <div key={i} className="flex items-center gap-2">
                 <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black ${step >= i ? 'bg-[#0096D6] text-white shadow-lg' : 'bg-white text-slate-300'}`}>{i}</div>
                 {i < 3 && <div className={`w-8 h-0.5 ${step > i ? 'bg-[#0096D6]' : 'bg-slate-200'}`}></div>}
               </div>
             ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8">
        <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-2xl overflow-hidden min-h-[550px] flex flex-col relative">
          
          {step === 1 && (
            <div className="p-12 animate-in fade-in slide-in-from-right-4">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-10 h-10 bg-blue-50 text-[#0096D6] rounded-xl flex items-center justify-center shadow-inner">
                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
                </div>
                <h2 className="text-xl font-black text-slate-900 uppercase tracking-tighter">Step 1: Pickup Parameters</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-8">
                  <div className="space-y-2">
                    <label className="form-label">Container Number (Linked to KYCL)</label>
                    <input type="text" value={formData.container} onChange={e => setFormData({...formData, container: e.target.value})} className="!bg-slate-50 border-dashed" placeholder="Enter Reference ID..." />
                  </div>
                  <div className="space-y-2">
                    <label className="form-label">Terminal Hub Node</label>
                    <div className="relative flex items-center">
                      <select value={formData.terminal} onChange={e => setFormData({...formData, terminal: e.target.value})} className="!bg-slate-50 pr-14 appearance-none">
                        {TERMINALS.map(t => <option key={t}>{t}</option>)}
                      </select>
                      <div className="absolute right-6 pointer-events-none text-slate-400">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3"><path d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-8">
                   <div className="space-y-2">
                    <label className="form-label">Pickup/Delivery Target Address</label>
                    <textarea 
                      value={formData.address} 
                      onChange={e => setFormData({...formData, address: e.target.value})} 
                      className="!bg-slate-50 h-32 pt-4 resize-none" 
                      placeholder="Add landmarks for driver..."
                    />
                  </div>
                  <div className="p-4 bg-blue-50 rounded-2xl border border-blue-100 flex items-start gap-4">
                     <svg className="w-6 h-6 text-blue-500 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                     <p className="text-[11px] font-bold text-blue-800 leading-relaxed uppercase tracking-tight">AI will auto-match available trucks within 15km of {formData.terminal.split(' ')[0]}.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-16 pt-8 border-t border-slate-50 flex justify-end">
                <button onClick={handleNext} className="btn-prominent w-72 h-16 shadow-blue-500/20">Find Matching Fleet</button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="p-12 animate-in fade-in slide-in-from-right-4 flex-1 flex flex-col">
              <div className="flex justify-between items-end mb-12">
                <div>
                   <h2 className="text-xl font-black text-slate-900 uppercase tracking-tighter">Step 2: Intelligent Fleet Matching</h2>
                   <div className="flex items-center gap-3 mt-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                      <p className="text-[10px] font-black text-[#0096D6] uppercase tracking-[0.2em]">Live Telemetry Processing</p>
                   </div>
                </div>
                <div className="text-right">
                   <span className="text-[11px] font-black text-slate-900 block tracking-tighter uppercase tabular">{trucks.length} Proximal Units Found</span>
                   <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Radius: 15.0 KM</span>
                </div>
              </div>
              
              <div className="grid lg:grid-cols-3 gap-8 flex-1">
                {trucks.map(truck => {
                  const predictedEta = calculatePredictedETA(truck.distanceKm, truck.rating);
                  return (
                    <button 
                      key={truck.id} 
                      onClick={() => { setFormData({...formData, truckId: truck.id}); setSelectedTruck(truck); }}
                      className={`p-10 rounded-[2.5rem] border-2 transition-all group text-left relative overflow-hidden flex flex-col ${
                        formData.truckId === truck.id 
                        ? 'bg-slate-950 border-slate-950 text-white shadow-2xl' 
                        : 'bg-white border-slate-100 text-slate-400 hover:border-[#0096D6]'
                      }`}
                    >
                      <div className={`absolute top-0 right-0 p-5 font-black text-[9px] uppercase tracking-widest rounded-bl-3xl ${formData.truckId === truck.id ? 'bg-[#0096D6] text-white' : 'bg-emerald-50 text-emerald-600'}`}>
                        {truck.matchScore}% Match
                      </div>
                      
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-all ${
                        formData.truckId === truck.id ? 'bg-[#0096D6] text-white shadow-lg' : 'bg-slate-50 text-slate-300'
                      }`}>
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.806H9.42c-.512 0-.952.307-1.152.755L5.25 10.5" /></svg>
                      </div>
                      
                      <h4 className={`text-xl font-black tracking-tight leading-none mb-2 ${formData.truckId === truck.id ? 'text-white' : 'text-slate-900'}`}>{truck.vendor}</h4>
                      <p className={`text-[10px] font-black uppercase tracking-widest mb-6 ${formData.truckId === truck.id ? 'text-white/50' : 'text-slate-400'}`}>
                        {truck.type} • {truck.rating}⭐
                      </p>

                      <div className={`mb-8 p-4 rounded-2xl border ${formData.truckId === truck.id ? 'bg-white/5 border-white/10' : 'bg-slate-50 border-slate-100'}`}>
                        <p className={`text-[8px] font-black uppercase tracking-widest mb-2 ${formData.truckId === truck.id ? 'text-[#0096D6]' : 'text-slate-400'}`}>AI Arrival Telemetry</p>
                        <div className="flex justify-between items-end">
                          <div>
                            <p className={`text-2xl font-black tracking-tighter tabular leading-none ${formData.truckId === truck.id ? 'text-white' : 'text-slate-900'}`}>{predictedEta} <span className="text-[10px]">mins</span></p>
                            <p className={`text-[8px] font-black uppercase mt-1 tracking-widest ${formData.truckId === truck.id ? 'text-white/30' : 'text-slate-400'}`}>Predicted ETA</p>
                          </div>
                          <div className="text-right">
                             <p className={`text-xs font-black tabular ${formData.truckId === truck.id ? 'text-white' : 'text-slate-700'}`}>{truck.distanceKm} km</p>
                             <p className={`text-[8px] font-black uppercase mt-1 tracking-widest ${formData.truckId === truck.id ? 'text-white/30' : 'text-slate-400'}`}>Dist</p>
                          </div>
                        </div>
                        <div className="mt-4 flex items-center gap-2">
                           <div className="flex-1 h-1 bg-slate-200 rounded-full overflow-hidden">
                              <div className="h-full bg-emerald-500" style={{ width: `${truck.reliabilityScore}%` }}></div>
                           </div>
                           <span className={`text-[8px] font-black uppercase ${formData.truckId === truck.id ? 'text-emerald-400' : 'text-emerald-600'}`}>{truck.reliabilityScore}% Reliability</span>
                        </div>
                      </div>
                      
                      <div className="mt-auto flex justify-between items-center">
                        <div>
                           <p className={`text-2xl font-black tracking-tighter tabular leading-none ${formData.truckId === truck.id ? 'text-[#0096D6]' : 'text-slate-900'}`}>₹{truck.price.toLocaleString()}</p>
                           <p className={`text-[8px] font-black uppercase mt-1 tracking-widest ${formData.truckId === truck.id ? 'text-white/40' : 'text-slate-400'}`}>Standard Rate</p>
                        </div>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center border ${formData.truckId === truck.id ? 'border-white/20 text-white' : 'border-slate-100 text-slate-300'}`}>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3"><path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
              
              <div className="mt-12 pt-8 border-t border-slate-50 flex justify-between items-center">
                <button onClick={handleBack} className="text-[11px] font-black text-slate-400 uppercase tracking-widest hover:text-slate-900 transition-colors">Return to parameters</button>
                <button 
                  disabled={!formData.truckId} 
                  onClick={handleNext} 
                  className="btn-prominent w-72 h-16 disabled:opacity-30 disabled:cursor-not-allowed shadow-blue-500/20"
                >
                  Confirm & Protocol Pay
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="p-16 animate-in fade-in slide-in-from-right-4 text-center max-w-2xl mx-auto flex-1 flex flex-col justify-center">
               <div className="w-24 h-24 bg-emerald-100 text-emerald-600 rounded-[2rem] flex items-center justify-center mx-auto mb-10 shadow-inner ring-8 ring-emerald-50">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3"><path d="M4.5 12.75l6 6 9-13.5" /></svg>
               </div>
               <h2 className="text-4xl font-black text-slate-900 tracking-tighter mb-4 uppercase leading-none">Fleet Dispatched</h2>
               <p className="text-slate-500 font-medium mb-12 text-lg leading-relaxed">
                  Asset movement protocol successfully initiated. Driver for <b>{selectedTruck?.vendor}</b> is now tracking towards <b>{formData.terminal}</b>.
               </p>
               
               <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 text-left mb-12 space-y-5">
                  <div className="flex justify-between items-center pb-5 border-b border-slate-200">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Reference ID</span>
                    <span className="text-xs font-black text-slate-900 tracking-tight">FMLM-98211-OP-B</span>
                  </div>
                  <div className="flex justify-between items-center pt-2">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Protocol State</span>
                    <div className="flex items-center gap-2">
                       <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                       <span className="text-[10px] font-black text-emerald-600 uppercase">Confirmed via WhatsApp</span>
                    </div>
                  </div>
               </div>
               
               <div className="flex flex-col gap-5">
                  <Link to="/filing" className="btn-prominent w-full h-16 shadow-blue-500/20 uppercase tracking-widest">
                    Proceed to e-Filing (Auto Gate Pass)
                  </Link>
                  <button onClick={() => setStep(1)} className="text-[11px] font-black text-slate-400 uppercase tracking-widest hover:text-slate-900 transition-colors">Start new fleet request</button>
               </div>
            </div>
          )}
        </div>
      </div>
      <AIChatbot context="Logistics" />
    </div>
  );
};

export default FMLMPage;