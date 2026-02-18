import React, { useState, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AIChatbot, { AI_ICON } from '../components/AIChatbot';
import IndiaSVGMap from '../components/IndiaSVGMap';

interface Shipment {
  id: string;
  status: 'In Transit' | 'At Terminal' | 'Loading';
  lastLocation: string;
  origin: string;
  destination: string;
  predictiveETA: string;
  avgSpeed: string;
  currentStop: string;
}

const MOCK_SHIPMENTS: Shipment[] = [
  { id: 'CXLU823412', status: 'In Transit', lastLocation: 'Near Mumbai', origin: 'Nhava Sheva', destination: 'TKD Delhi', predictiveETA: '2023-11-25', avgSpeed: '42 km/h', currentStop: 'Mumbai Yd' },
  { id: 'TRLU991238', status: 'At Terminal', lastLocation: 'Near Delhi', origin: 'Mundra', destination: 'Dadri', predictiveETA: '2023-11-20', avgSpeed: '0 km/h', currentStop: 'ICD TKD' },
  { id: 'MSKU441233', status: 'Loading', lastLocation: 'Near Kolkata', origin: 'Haldia', destination: 'Patna', predictiveETA: '2023-11-28', avgSpeed: '0 km/h', currentStop: 'Haldia Port' },
  { id: 'CONU552109', status: 'In Transit', lastLocation: 'Near Chennai', origin: 'Chennai', destination: 'Bangalore', predictiveETA: '2023-11-22', avgSpeed: '38 km/h', currentStop: 'Vijayawada' }
];

const KYCLPage: React.FC = () => {
  const navigate = useNavigate();
  const [showResults, setShowResults] = useState(false);
  const [selectedId, setSelectedId] = useState<string>(MOCK_SHIPMENTS[0].id);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('track');

  const filteredShipments = useMemo(() => {
    return MOCK_SHIPMENTS.filter(s => s.id.toLowerCase().includes(searchQuery.toLowerCase()));
  }, [searchQuery]);

  const selectedShipment = useMemo(() => {
    return MOCK_SHIPMENTS.find(s => s.id === selectedId) || MOCK_SHIPMENTS[0];
  }, [selectedId]);

  const handleBookFMLM = () => {
    navigate('/fmlm', { state: { container: selectedShipment.id } });
  };

  if (!showResults) {
    return (
      <div className="min-h-full pb-16 bg-[#F8FAFC]">
        <div className="bg-white border-b border-slate-100 px-8 py-10 mb-8 shadow-sm">
          <div className="max-w-7xl mx-auto">
            <nav className="flex items-center gap-2.5 text-[12px] font-black uppercase tracking-[0.2em] mb-3">
              <Link to="/dashboard" className="text-slate-400 hover:text-slate-900 transition-colors">Enterprise Workspace</Link>
              <div className="flex items-center">
                <svg className="w-2.5 h-2.5 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="4"><path d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
              </div>
              <span className="text-[#0096D6]">KYCL Tracker</span>
            </nav>
            <h1 className="text-3xl font-black text-slate-900 tracking-tighter leading-none mb-3">Telemetry Control</h1>
            <p className="text-base text-slate-500 font-medium max-w-xl">High-precision container tracking and node telemetry across India.</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-8">
          <div className="bg-white rounded-[2rem] border border-slate-100 shadow-xl p-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[
                { id: 'track', label: 'Track Asset', icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg> },
                { id: 'empty', label: 'Empty Inventory', icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg> },
                { id: 'ai', label: 'AI Analytics', icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg> }
              ].map((tab) => (
                <button 
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-5 p-6 rounded-2xl border-2 transition-all ${
                    activeTab === tab.id 
                    ? 'bg-slate-950 border-slate-950 text-white shadow-xl' 
                    : 'bg-white border-slate-50 text-slate-400 hover:border-blue-50'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${activeTab === tab.id ? 'bg-blue-500 text-white shadow-lg' : 'bg-slate-50'}`}>
                    {tab.icon}
                  </div>
                  <div className="text-left">
                    <span className="text-base font-black block leading-none">{tab.label}</span>
                    <span className="text-[9px] font-black uppercase tracking-widest mt-1.5 opacity-50">Node Module</span>
                  </div>
                </button>
              ))}
            </div>

            <div className="space-y-10">
              <div className="grid md:grid-cols-2 gap-10">
                <div className="space-y-3">
                  <label className="form-label">Service category:</label>
                  <div className="relative flex items-center">
                    <select className="w-full h-14 !px-6 bg-slate-50 border-slate-100 appearance-none pr-14 font-bold text-sm text-slate-900 outline-none focus:border-[#0096D6] rounded-2xl">
                      <option>International EXIM</option>
                      <option>Domestic Transit</option>
                    </select>
                    <div className="absolute right-6 pointer-events-none text-slate-400 flex items-center h-full">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3"><path d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-3 block">Asset Identifiers:</label>
                  <textarea 
                    className="w-full h-32 !pt-4 !px-6 bg-slate-50 border-slate-100"
                    placeholder="Enter Container IDs (e.g. CONU1234567)..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex flex-wrap gap-5 pt-4">
                <button onClick={() => setShowResults(true)} className="btn-prominent w-64 h-14 !text-xs">Initialize Search</button>
                <button className="h-14 px-8 border-2 border-slate-950 rounded-2xl text-slate-950 font-black text-[11px] uppercase tracking-widest hover:bg-slate-950 hover:text-white transition-all">Deep Lookup</button>
              </div>
            </div>
          </div>
        </div>
        <AIChatbot context="KYCL" />
      </div>
    );
  }

  return (
    <div className="h-full min-h-[calc(100vh-64px)] flex flex-col bg-slate-50 overflow-hidden">
      <div className="bg-slate-950 border-b border-white/5 px-6 py-4 flex items-center gap-6 z-20 shadow-2xl">
        <button 
          onClick={() => setShowResults(false)} 
          className="w-10 h-10 flex items-center justify-center text-white bg-white/10 rounded-xl border border-white/20 hover:bg-white/20 hover:scale-105 active:scale-95 transition-all shadow-lg"
          title="Return to Parameters"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3"><path d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
        </button>
        <div className="flex-1 max-w-xl relative">
          <input 
            type="text" 
            placeholder="Search Terminal Telemetry..."
            className="w-full !bg-slate-900 !border-white/10 !text-white !h-12 !rounded-2xl !pl-12 text-sm font-bold placeholder:text-slate-400 focus:!border-[#0096D6] focus:!ring-0 transition-all shadow-inner"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div className="absolute inset-y-0 left-4 flex items-center text-slate-400">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>
          </div>
        </div>
      </div>

      <div className="flex-1 flex relative overflow-hidden bg-slate-50">
        <div className="w-80 bg-white border-r border-slate-200 flex flex-col z-10 shadow-xl">
          <div className="p-6 border-b border-slate-50 bg-slate-50/30">
            <h1 className="text-lg font-black text-slate-900 tracking-tighter uppercase leading-none text-center">Fleet Index</h1>
            <p className="text-[10px] text-blue-600 font-black mt-3 flex items-center justify-center gap-2 uppercase tracking-widest bg-blue-50 py-1.5 rounded-lg border border-blue-100">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></span>
              {filteredShipments.length} Active Protocols
            </p>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-3 custom-scrollbar">
            {filteredShipments.map(s => (
              <button key={s.id} onClick={() => setSelectedId(s.id)} className={`w-full p-6 text-left rounded-2xl border transition-all ${selectedId === s.id ? 'border-blue-500 bg-blue-50/30 shadow-md ring-1 ring-blue-100' : 'border-slate-100 hover:border-slate-300 bg-white'}`}>
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-base font-black text-slate-900 tracking-tighter">{s.id}</h3>
                  <span className={`px-2 py-0.5 rounded-lg text-[8px] font-black uppercase tracking-widest ${s.status === 'In Transit' ? 'bg-blue-100 text-blue-700' : 'bg-emerald-100 text-emerald-700'}`}>{s.status}</span>
                </div>
                <p className="text-[11px] font-bold text-slate-400 flex items-center gap-1.5 uppercase truncate">
                   <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
                   {s.lastLocation}
                </p>
              </button>
            ))}
          </div>
        </div>

        <div className="flex-1 relative bg-slate-50">
          <IndiaSVGMap activeRoute={{ origin: selectedShipment.origin, destination: selectedShipment.destination }} className="w-full h-full" />
          
          <div className="absolute top-8 right-8 z-30">
             {selectedShipment.status === 'At Terminal' && (
               <button 
                 onClick={handleBookFMLM}
                 className="bg-emerald-600 text-white px-8 py-4 rounded-2xl font-black text-[11px] uppercase tracking-widest shadow-2xl hover:bg-emerald-500 transition-all animate-in fade-in zoom-in"
               >
                 Book Last Mile (FMLM)
               </button>
             )}
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-full max-w-xl px-6 z-30">
            <div className="bg-slate-950 rounded-3xl shadow-2xl p-6 flex items-center gap-6 border border-white/5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-full bg-blue-500/5 -skew-x-12 translate-x-12 group-hover:translate-x-6 transition-transform"></div>
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg relative z-10">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"/></svg>
              </div>
              <div className="flex-1 relative z-10">
                <p className="text-[9px] font-black text-white/40 mb-1 uppercase tracking-[0.2em]">TELEMETRY ACTIVE</p>
                <h3 className="text-2xl font-black text-white tracking-tighter leading-none">{selectedShipment.id}</h3>
              </div>
              <button 
                onClick={() => window.dispatchEvent(new CustomEvent('concor-open-chat', { detail: { message: `Give me a full operational report on asset ${selectedShipment.id}` } }))}
                className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-slate-900 hover:scale-110 hover:bg-[#0096D6] hover:text-white active:scale-95 transition-all shadow-xl relative z-10 group/ai"
              >
                {AI_ICON("w-7 h-7")}
              </button>
            </div>
          </div>
        </div>
      </div>
      <AIChatbot context="KYCL" />
    </div>
  );
};

export default KYCLPage;