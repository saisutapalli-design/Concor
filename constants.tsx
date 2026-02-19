
import React from 'react';

export const COLORS = {
  primary: '#0096D6', // Brand Blue
  slate: '#0F172A',   // Navy Slate
  text: '#1A1A1A',
};

/**
 * CONCOR Official Typography Logo
 * Designed for enterprise authority and digital clarity.
 */
export const ConcorLogo: React.FC<{ className?: string, light?: boolean }> = ({ className = "", light = false }) => {
  return (
    <div className={`flex items-center select-none py-1 h-full ${className}`}>
      <div className="flex flex-col justify-center">
        <span className={`text-2xl md:text-3xl font-[900] tracking-[-0.05em] leading-none ${light ? 'text-white' : 'text-slate-900'}`}>
          CONCOR
        </span>
        <div className="flex items-center gap-1.5 mt-1.5">
          <div className={`h-[2px] w-4 ${light ? 'bg-blue-400' : 'bg-[#0096D6]'}`}></div>
          <span className={`text-[7px] md:text-[8px] font-black uppercase tracking-[0.25em] leading-none whitespace-nowrap ${light ? 'text-slate-400' : 'text-slate-500'}`}>
            Container Corp of India Ltd
          </span>
        </div>
      </div>
    </div>
  );
};

export const TERMINALS = [
  'ICD Tughlakabad (TKD)',
  'ICD Dadri (DER)',
  'ICD Loni (LNI)',
  'ICD Kathuwas',
  'Mundra Port Terminal',
  'JNPT Nhava Sheva'
];
