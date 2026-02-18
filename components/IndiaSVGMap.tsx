import React from 'react';

interface IndiaSVGMapProps {
  activeRoute?: { origin: string; destination: string };
  className?: string;
}

const IndiaSVGMap: React.FC<IndiaSVGMapProps> = ({ activeRoute, className }) => {
  // Approximate coordinates for India's major logistics hubs
  const hubs = {
    'Mumbai': { x: 70, y: 190 },
    'NHAVA SHEVA': { x: 75, y: 195 },
    'Delhi': { x: 100, y: 80 },
    'TKD DELHI': { x: 105, y: 85 },
    'Mundra Port': { x: 40, y: 140 },
    'MUNDRA': { x: 45, y: 145 },
    'Kolkata': { x: 180, y: 160 },
    'HALDIA': { x: 185, y: 165 },
    'Dadri': { x: 115, y: 95 },
    'DADRI': { x: 120, y: 100 },
    'Chennai': { x: 110, y: 240 }
  };

  return (
    <div className={`relative bg-[#f8fafc] w-full h-full flex items-center justify-center overflow-hidden ${className}`}>
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#0096D6 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
      
      <svg viewBox="0 0 250 300" className="w-full h-full max-h-[80%] drop-shadow-2xl" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* India Silhouette (Stylized) */}
        <path 
          d="M100 20L115 25L130 15L145 35L155 70L200 130L210 160L190 180L210 200L180 230L150 250L125 295L100 250L75 240L60 210L40 180L20 160L30 120L50 90L70 80L85 60L100 20Z" 
          fill="white" 
          stroke="#e2e8f0" 
          strokeWidth="1"
        />
        
        {/* Network Lines */}
        <path d="M70 190 L100 80" stroke="#0096D6" strokeWidth="0.5" strokeDasharray="2 2" className="opacity-20" />
        <path d="M100 80 L180 160" stroke="#0096D6" strokeWidth="0.5" strokeDasharray="2 2" className="opacity-20" />
        <path d="M40 140 L100 80" stroke="#0096D6" strokeWidth="0.5" strokeDasharray="2 2" className="opacity-20" />
        
        {/* Active Route Highlight */}
        {activeRoute && hubs[activeRoute.origin as keyof typeof hubs] && hubs[activeRoute.destination as keyof typeof hubs] && (
          <g>
            <path 
              d={`M${hubs[activeRoute.origin as keyof typeof hubs].x} ${hubs[activeRoute.origin as keyof typeof hubs].y} L${hubs[activeRoute.destination as keyof typeof hubs].x} ${hubs[activeRoute.destination as keyof typeof hubs].y}`} 
              stroke="#0096D6" 
              strokeWidth="1.5" 
              strokeDasharray="4 4" 
              className="animate-[dash_20s_linear_infinite]"
            />
            <circle cx={hubs[activeRoute.origin as keyof typeof hubs].x} cy={hubs[activeRoute.origin as keyof typeof hubs].y} r="3" fill="#0096D6" />
            <circle cx={hubs[activeRoute.destination as keyof typeof hubs].x} cy={hubs[activeRoute.destination as keyof typeof hubs].y} r="3" fill="#632421" />
          </g>
        )}

        {/* Static Hubs */}
        {Object.entries(hubs).map(([name, pos], i) => (
          <g key={i} className="group cursor-help">
            <circle cx={pos.x} cy={pos.y} r="1.5" fill="#cbd5e1" className="group-hover:fill-blue-500 transition-colors" />
            <text x={pos.x + 4} y={pos.y + 2} className="text-[4px] font-black fill-slate-300 pointer-events-none uppercase tracking-widest">{name}</text>
          </g>
        ))}

        {/* Tracking Asset Pulse */}
        <g>
          <circle cx="95" cy="140" r="4" fill="#0096D6" fillOpacity="0.2">
             <animate attributeName="r" values="4;8;4" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle cx="95" cy="140" r="2" fill="#0096D6" />
        </g>
      </svg>

      <style>{`
        @keyframes dash {
          to { stroke-dashoffset: -100; }
        }
      `}</style>

      <div className="absolute bottom-4 left-4 flex items-center gap-4 bg-white/80 backdrop-blur-md border border-gray-100 px-4 py-2 rounded-xl shadow-sm">
         <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#0096D6]"></div>
            <span className="text-[8px] font-black text-gray-500 uppercase tracking-widest">Active Vessel</span>
         </div>
         <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#632421]"></div>
            <span className="text-[8px] font-black text-gray-500 uppercase tracking-widest">Terminal Hub</span>
         </div>
      </div>
    </div>
  );
};

export default IndiaSVGMap;