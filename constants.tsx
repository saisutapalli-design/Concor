import React from 'react';

export const COLORS = {
  primary: '#0096D6', // Brand Blue
  maroon: '#632421',  // Brand Maroon
  text: '#1A1A1A',
};

/**
 * CONCOR Official Logo Component
 * Redesigned as a stable Functional Component to prevent flickering and re-mounting issues.
 */
export const ConcorLogo: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`flex items-center gap-2 md:gap-3 select-none py-1 h-full ${className}`}>
      <div className="h-8 md:h-12 w-auto shrink-0 flex items-center">
        <img 
          src="https://www.concorindia.co.in/images/logo.png" 
          alt="CONCOR Emblem" 
          className="h-full w-auto object-contain block pointer-events-none"
          draggable={false}
          loading="eager"
          onError={(e) => {
            // Fallback to a secondary stable source if the primary is down
            e.currentTarget.src = "https://upload.wikimedia.org/wikipedia/commons/3/30/Container_Corporation_of_India_logo.png";
          }}
        />
      </div>
      <div className="flex flex-col justify-center">
        <span className="text-lg md:text-2xl font-black text-slate-900 tracking-tighter leading-none">CONCOR</span>
        <span className="text-[6px] md:text-[8px] font-black text-slate-400 uppercase tracking-[0.2em] mt-0.5 md:mt-1 leading-none whitespace-nowrap">
          Container Corporation of India Ltd.
        </span>
      </div>
    </div>
  );
};

// Deprecated constant - replaced by ConcorLogo component for stability
export const CONCOR_LOGO = <ConcorLogo />;

export const TERMINALS = [
  'ICD Tughlakabad (TKD)',
  'ICD Dadri (DER)',
  'ICD Loni (LNI)',
  'DCT Okhla',
  'ICD Kathuwas'
];