import React from 'react';

export const COLORS = {
  primary: '#0096D6', // Brand Blue
  maroon: '#632421',  // Brand Maroon
  text: '#1A1A1A',
};

/**
 * CONCOR Official Logo Component
 * High-fidelity representation of the Container Corporation of India branding.
 * Includes both the emblem and the official corporate text.
 */
export const CONCOR_LOGO = (
  <div className="flex items-center gap-3 select-none py-1 h-full">
    <div className="h-10 md:h-12 w-auto shrink-0">
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/3/30/Container_Corporation_of_India_logo.png" 
        alt="CONCOR Emblem" 
        className="h-full w-auto object-contain block"
        draggable={false}
        loading="eager"
        onError={(e) => {
          e.currentTarget.src = "https://www.concorindia.co.in/images/logo.png";
        }}
      />
    </div>
    <div className="flex flex-col justify-center border-l border-slate-200 pl-3">
      <span className="text-xl font-black text-slate-900 tracking-tighter leading-none">CONCOR</span>
      <span className="text-[7px] font-bold text-slate-400 uppercase tracking-[0.2em] mt-1 leading-none">Container Corporation of India Ltd.</span>
    </div>
  </div>
);

export const TERMINALS = [
  'ICD Tughlakabad (TKD)',
  'ICD Dadri (DER)',
  'ICD Loni (LNI)',
  'DCT Okhla',
  'ICD Kathuwas'
];