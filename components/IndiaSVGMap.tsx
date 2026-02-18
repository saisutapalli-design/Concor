import React, { useState } from 'react';

interface TerminalData {
  x: number;
  y: number;
  count: number;
  capacity: string;
  efficiency: string;
  status: 'Optimal' | 'Congested' | 'Warning';
}

interface IndiaSVGMapProps {
  activeRoute?: { origin: string; destination: string };
  className?: string;
}

const IndiaSVGMap: React.FC<IndiaSVGMapProps> = ({ activeRoute, className }) => {
  const [selectedHub, setSelectedHub] = useState<string | null>(null);

  // High-fidelity terminal data
  const hubs: Record<string, TerminalData> = {
    'ICD Tughlakabad': { x: 100, y: 80, count: 4250, capacity: '88%', efficiency: '94%', status: 'Optimal' },
    'Nhava Sheva': { x: 70, y: 190, count: 12840, capacity: '92%', efficiency: '89%', status: 'Congested' },
    'Mundra Port': { x: 40, y: 140, count: 8600, capacity: '75%', efficiency: '91%', status: 'Optimal' },
    'ICD Dadri': { x: 115, y: 95, count: 2100, capacity: '62%', efficiency: '98%', status: 'Optimal' },
    'Chennai Port': { x: 110, y: 240, count: 5400, capacity: '81%', efficiency: '92%', status: 'Optimal' },
    'ICD Whitefield': { x: 105, y: 255, count: 1800, capacity: '45%', efficiency: '96%', status: 'Optimal' },
    'Haldia Port': { x: 180, y: 160, count: 3200, capacity: '70%', efficiency: '85%', status: 'Warning' },
    'ICD Nagpur': { x: 105, y: 170, count: 1500, capacity: '55%', efficiency: '97%', status: 'Optimal' },
  };

  const selectedData = selectedHub ? hubs[selectedHub] : null;

  return (
    <div className={`relative bg-[#f8fafc] w-full h-full flex items-center justify-center overflow-hidden cursor-default ${className}`}>
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#0096D6 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
      
      <svg viewBox="0 0 250 300" className="w-full h-full max-h-[85%] drop-shadow-2xl" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* India Silhouette */}
        <path 
          d="M100 20L115 25L130 15L145 35L155 70L200 130L210 160L190 180L210 200L180 230L150 250L125 295L100 250L75 240L60 210L40 180L20 160L30 120L50 90L70 80L85 60L100 20Z" 
          fill="white" 
          stroke="#e2e8f0" 
          strokeWidth="1"
        />
        
        {/* Network Lines - Connections */}
        <g className="opacity-10">
          <path d="M70 190 L100 80" stroke="#0096D6" strokeWidth="0.5" strokeDasharray="2 2" />
          <path d="M100 80 L180 160" stroke="#0096D6" strokeWidth="0.5" strokeDasharray="2 2" />
          <path d="M40 140 L100 80" stroke="#0096D6" strokeWidth="0.5" strokeDasharray="2 2" />
          <path d="M110 240 L105 170" stroke="#0096D6" strokeWidth="0.5" strokeDasharray="2 2" />
        </g>
        
        {/* Interactive Hubs */}
        {Object.entries(hubs).map(([name, pos]) => (
          <g 
            key={name} 
            className="group cursor-pointer" 
            onClick={(e) => {
              e.stopPropagation();
              setSelectedHub(name === selectedHub ? null : name);
            }}
          >
            {/* Glow effect on hover/select */}
            <circle 
              cx={pos.x} cy={pos.y} r={selectedHub === name ? "8" : "6"} 
              fill={selectedHub === name ? "#0096D6" : "transparent"} 
              fillOpacity="0.15" 
              className="transition-all duration-300 group-hover:fill-[#0096D6] group-hover:fill-opacity-10"
            />
            
            {/* Main Dot */}
            <circle 
              cx={pos.x} cy={pos.y} r={selectedHub === name ? "3" : "2"} 
              fill={selectedHub === name ? "#0096D6" : "#cbd5e1"} 
              className={`transition-all duration-300 group-hover:fill-[#0096D6] group-hover:r-[2.5] ${pos.status === 'Congested' ? 'animate-pulse fill-rose-400' : ''}`}
            />
            
            {/* Label */}
            <text 
              x={pos.x + 6} y={pos.y + 2} 
              className={`text-[3.5px] font-black uppercase tracking-widest pointer-events-none transition-colors ${selectedHub === name ? 'fill-slate-900' : 'fill-slate-300 group-hover:fill-slate-500'}`}
            >
              {name}
            </text>
          </g>
        ))}

        {/* Selected Hub Highlight Line */}
        {selectedData && (
          <line 
            x1={selectedData.x} y1={selectedData.y} 
            x2={selectedData.x + 15} y2={selectedData.y - 15} 
            stroke="#0096D6" strokeWidth="0.5" strokeDasharray="2 2" 
            className="animate-pulse"
          />
        )}
      </svg>

      {/* Floating Telemetry Card */}
      {selectedHub && selectedData && (
        <div 
          className="absolute z-50 bg-white/95 backdrop-blur-xl p-6 rounded-[2rem] shadow-2xl border border-blue-100/50 w-72 animate-in fade-in zoom-in slide-in-from-bottom-4 duration-300"
          style={{ 
            left: `${(selectedData.x / 250) * 100}%`, 
            top: `${(selectedData.y / 300) * 100}%`,
            transform: 'translate(10px, -110%)'
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-[9px] font-black text-[#0096D6] uppercase tracking-[0.2em] mb-1">Node Telemetry</p>
              <h4 className="text-lg font-black text-slate-900 leading-none tracking-tighter">{selectedHub}</h4>
            </div>
            <button onClick={() => setSelectedHub(null)} className="text-slate-300 hover:text-slate-900 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3"><path d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>

          <div className="space-y-4">
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
              <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1.5">Live Inventory</p>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-black text-slate-900 tracking-tighter tabular">{selectedData.count.toLocaleString()}</span>
                <span className="text-[10px] font-black text-slate-400 uppercase">TEUs</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                <p className="text-[7px] font-black text-slate-400 uppercase mb-1">Capacity</p>
                <p className="text-xs font-black text-slate-900">{selectedData.capacity}</p>
              </div>
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                <p className="text-[7px] font-black text-slate-400 uppercase mb-1">Efficiency</p>
                <p className="text-xs font-black text-emerald-600">{selectedData.efficiency}</p>
              </div>
            </div>

            <div className={`flex items-center gap-2 px-3 py-2 rounded-lg text-[9px] font-black uppercase tracking-widest ${
              selectedData.status === 'Optimal' ? 'bg-emerald-50 text-emerald-600' : 
              selectedData.status === 'Congested' ? 'bg-rose-50 text-rose-600' : 'bg-amber-50 text-amber-600'
            }`}>
              <span className={`w-1.5 h-1.5 rounded-full ${
                selectedData.status === 'Optimal' ? 'bg-emerald-500' : 
                selectedData.status === 'Congested' ? 'bg-rose-500 animate-pulse' : 'bg-amber-500'
              }`}></span>
              Status: {selectedData.status}
            </div>
          </div>
        </div>
      )}

      {/* Map Legend */}
      <div className="absolute bottom-4 left-4 flex flex-col gap-2 bg-white/60 backdrop-blur-md border border-slate-200/50 p-4 rounded-2xl shadow-sm pointer-events-none">
         <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#0096D6]"></div>
            <span className="text-[8px] font-black text-slate-500 uppercase tracking-[0.2em]">Operational Hub</span>
         </div>
         <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-rose-400 animate-pulse"></div>
            <span className="text-[8px] font-black text-slate-500 uppercase tracking-[0.2em]">Peak Load Activity</span>
         </div>
         <p className="text-[7px] font-bold text-slate-400 mt-1 uppercase italic">* Click nodes for live telemetry</p>
      </div>

      <style>{`
        @keyframes dash {
          to { stroke-dashoffset: -100; }
        }
      `}</style>

      {/* Close selection when clicking background */}
      {selectedHub && (
        <div 
          className="absolute inset-0 z-40 bg-transparent" 
          onClick={() => setSelectedHub(null)}
        />
      )}
    </div>
  );
};

export default IndiaSVGMap;