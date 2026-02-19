
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ConcorLogo } from '../constants';

interface TerminalNode {
  name: string;
  region: string;
  coords: string; // Google Maps search query or lat/long
  type: 'ICD' | 'Port' | 'CFS';
  stats: string;
}

const TERMINAL_DATA: TerminalNode[] = [
  { name: 'ICD Tughlakabad', region: 'Northern', coords: 'CONCOR+ICD+Tughlakabad', type: 'ICD', stats: '94% Efficiency' },
  { name: 'ICD Dadri', region: 'Northern', coords: 'CONCOR+ICD+Dadri', type: 'ICD', stats: 'Optimal Load' },
  { name: 'ICD Kathuwas', region: 'Northern', coords: 'CONCOR+ICD+Kathuwas', type: 'ICD', stats: 'Expanding' },
  { name: 'JNPT Nhava Sheva', region: 'Western', coords: 'JNPT+Nhava+Sheva+Port', type: 'Port', stats: 'High Throughput' },
  { name: 'Mundra Port', region: 'Western', coords: 'Mundra+Port+Adani', type: 'Port', stats: 'Strategic Node' },
  { name: 'ICD Whitefield', region: 'Southern', coords: 'CONCOR+ICD+Whitefield', type: 'ICD', stats: 'Active Hub' },
  { name: 'Haldia Port', region: 'Eastern', coords: 'Haldia+Port+West+Bengal', type: 'Port', stats: 'Gate 2 Active' },
  { name: 'ICD Nagpur', region: 'Southern', coords: 'CONCOR+ICD+Nagpur', type: 'ICD', stats: 'Multi-modal' },
];

const NetworkPage: React.FC = () => {
  const [selectedTerminal, setSelectedTerminal] = useState<TerminalNode>(TERMINAL_DATA[0]);

  const mapUrl = `https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d100000!2d77.0!3d28.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s${selectedTerminal.coords}!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin`;

  return (
    <div className="h-screen flex flex-col bg-slate-950 overflow-hidden font-sans">
      {/* Precision Header */}
      <nav className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-8 shrink-0 z-50 shadow-sm">
        <div className="flex items-center gap-10">
          <Link to="/" className="transition-transform hover:scale-105">
            <ConcorLogo />
          </Link>
          <div className="hidden lg:flex items-center gap-2 px-4 py-1.5 bg-slate-50 rounded-full border border-slate-100">
             <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
             <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Global Asset Grid Active</span>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <Link to="/login" className="text-[11px] font-black text-slate-900 uppercase tracking-widest hover:text-blue-600 transition-colors">Enterprise Login</Link>
          <Link to="/dashboard" className="bg-slate-900 text-white px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-black shadow-xl shadow-black/10 transition-all active:scale-95">Command Dashboard</Link>
        </div>
      </nav>

      <div className="flex-1 flex overflow-hidden">
        {/* Hub Selection Sidebar */}
        <aside className="w-96 bg-white border-r border-slate-200 flex flex-col overflow-hidden shadow-2xl z-20">
          <div className="p-8 border-b border-slate-100">
            <h1 className="text-3xl font-black text-slate-900 tracking-tighter leading-none mb-2">Network Hubs</h1>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Live Infrastructure Telemetry</p>
          </div>
          
          <div className="flex-1 overflow-y-auto custom-scrollbar p-4 space-y-2">
            {TERMINAL_DATA.map((node) => (
              <button 
                key={node.name}
                onClick={() => setSelectedTerminal(node)}
                className={`w-full p-6 rounded-2xl text-left transition-all border ${
                  selectedTerminal.name === node.name 
                  ? 'bg-slate-900 border-slate-900 text-white shadow-xl' 
                  : 'bg-white border-slate-50 text-slate-500 hover:border-blue-100 hover:bg-slate-50/50'
                }`}
              >
                <div className="flex justify-between items-start mb-2">
                  <span className={`text-[8px] font-black uppercase tracking-widest px-2 py-0.5 rounded ${selectedTerminal.name === node.name ? 'bg-blue-500 text-white' : 'bg-slate-100 text-slate-400'}`}>
                    {node.region} {node.type}
                  </span>
                </div>
                <h3 className="text-lg font-black tracking-tight mb-1">{node.name}</h3>
                <p className={`text-[10px] font-bold uppercase tracking-wider ${selectedTerminal.name === node.name ? 'text-blue-400' : 'text-slate-400'}`}>
                  {node.stats}
                </p>
              </button>
            ))}
          </div>

          <div className="p-8 bg-slate-50 border-t border-slate-100">
             <div className="flex items-center gap-3 mb-4">
                <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-900">Operator Advisory</span>
             </div>
             <p className="text-[11px] font-medium text-slate-500 leading-relaxed">
               Click any hub to pivot the command view. All nodes reporting synchronous telemetry updates every 120s.
             </p>
          </div>
        </aside>

        {/* Dynamic Command Map */}
        <main className="flex-1 relative bg-slate-900 group">
           <div className="absolute inset-0 z-0 bg-slate-900">
              {/* Overlay Shimmer during transition */}
              <div className="absolute inset-0 bg-blue-500/5 animate-pulse pointer-events-none z-10"></div>
              
              <iframe 
                key={selectedTerminal.coords}
                title={`Terminal Location: ${selectedTerminal.name}`}
                className="w-full h-full border-0 grayscale-[0.2] hover:grayscale-0 transition-all duration-1000"
                src={mapUrl}
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
           </div>

           {/* Floating HUD Information */}
           <div className="absolute top-10 right-10 z-30 flex flex-col gap-4 animate-in fade-in slide-in-from-right-8 duration-700">
              <div className="bg-white/95 backdrop-blur-md p-8 rounded-[2rem] shadow-2xl border border-white/50 w-80">
                 <p className="text-[10px] font-black text-blue-600 uppercase tracking-[0.3em] mb-3">Live Command View</p>
                 <h2 className="text-2xl font-black text-slate-900 tracking-tighter mb-4 leading-none">{selectedTerminal.name}</h2>
                 <div className="space-y-4 pt-4 border-t border-slate-100">
                    <div className="flex justify-between items-center">
                       <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Protocol Status</span>
                       <span className="text-[9px] font-black text-emerald-600 uppercase tracking-widest bg-emerald-50 px-2 py-1 rounded">Active</span>
                    </div>
                    <div className="flex justify-between items-center">
                       <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Yard Utilization</span>
                       <span className="text-[9px] font-black text-slate-900 uppercase tracking-widest">72.4% CAP</span>
                    </div>
                    <Link to="/kycl" className="w-full btn-prominent !h-12 !text-[9px] mt-4 shadow-blue-500/20">Access Yard Telemetry</Link>
                 </div>
              </div>

              <div className="bg-slate-900/90 backdrop-blur-md p-6 rounded-[2rem] border border-white/10 text-white">
                 <div className="flex items-center gap-3 mb-2">
                    <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
                    <span className="text-[9px] font-black uppercase tracking-widest opacity-60">Weather Node</span>
                 </div>
                 <p className="text-xl font-black tracking-tighter tabular leading-none">24°C <span className="text-[10px] font-bold opacity-40 uppercase ml-2">Clear Skies</span></p>
              </div>
           </div>

           {/* Interactive Map Overlay */}
           <div className="absolute bottom-10 left-10 z-30">
              <div className="flex gap-4">
                 <button className="h-12 px-6 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-white/20 transition-all">2D Satellite</button>
                 <button className="h-12 px-6 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-white/20 transition-all">Traffic Overlay</button>
              </div>
           </div>
        </main>
      </div>
    </div>
  );
};

export default NetworkPage;
