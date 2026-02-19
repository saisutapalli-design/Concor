import React from 'react';
import { Link } from 'react-router-dom';
import { ConcorLogo } from '../constants';

const NetworkPage: React.FC = () => {
  const regions = [
    { name: 'NCR / Northern', hubs: ['ICD Tughlakabad', 'ICD Dadri', 'ICD Loni', 'ICD Kathuwas'] },
    { name: 'Western', hubs: ['JNPT Nhava Sheva', 'Mundra Port', 'ICD Mulund', 'ICD Aurangabad'] },
    { name: 'Eastern', hubs: ['Haldia Port', 'ICD Patna', 'ICD Durgapur', 'ICD Birgunj'] },
    { name: 'Southern', hubs: ['Chennai Port', 'ICD Whitefield', 'ICD Hyderabad', 'ICD Nagpur'] }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white overflow-hidden">
      {/* Mini Nav */}
      <nav className="glass border-b border-gray-100 flex items-center justify-between px-6 py-3 z-50">
        <div className="flex items-center gap-6">
          <Link to="/" className="scale-75 md:scale-90 origin-left transition-transform hover:scale-[0.92]">
            <ConcorLogo />
          </Link>
          <span className="hidden md:block text-[11px] font-black uppercase tracking-[0.2em] text-[#0096D6]">National Infrastructure Network</span>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/login" className="bg-gray-900 text-white px-6 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-black transition-all">Portal Login</Link>
        </div>
      </nav>

      <div className="flex-1 flex overflow-hidden">
        {/* Left Sidebar Listings */}
        <aside className="w-80 bg-[#F9FBFC] border-r border-gray-100 flex flex-col overflow-hidden shadow-xl z-10">
          <div className="p-8 border-b border-gray-100 bg-white">
            <h1 className="text-2xl font-black text-gray-900 tracking-tighter leading-tight">Strategic <br/>Terminals</h1>
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mt-2">60+ Operational Hubs</p>
          </div>
          <div className="flex-1 overflow-y-auto p-6 space-y-8">
            {regions.map(region => (
              <div key={region.name}>
                <h3 className="text-[10px] font-black text-[#0096D6] uppercase tracking-[0.3em] mb-4 flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0096D6]"></span>
                  {region.name}
                </h3>
                <div className="space-y-2">
                  {region.hubs.map(hub => (
                    <button key={hub} className="w-full text-left p-3 rounded-xl hover:bg-white hover:shadow-sm border border-transparent hover:border-gray-100 transition-all group">
                      <p className="text-sm font-bold text-gray-700 group-hover:text-gray-900">{hub}</p>
                      <p className="text-[10px] text-gray-400 font-medium uppercase mt-0.5">Primary Logistics Node</p>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="p-6 bg-gray-900 text-white">
             <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-2 rounded-full bg-[#0096D6] animate-pulse"></div>
                <span className="text-[9px] font-black uppercase tracking-widest text-gray-400">Live Traffic Protocol</span>
             </div>
             <p className="text-[11px] font-medium leading-relaxed opacity-70">
               All terminals reporting green status. Northern nodes experiencing high throughput due to peak seasonal transit.
             </p>
          </div>
        </aside>

        {/* Main Map View */}
        <main className="flex-1 relative bg-slate-100">
           <iframe 
             title="CONCOR National Hubs"
             className="w-full h-full border-0 grayscale-[0.3] hover:grayscale-0 transition-all duration-1000"
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14022.3996556487!2d77.283187!3d28.517196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce6bb37618997%3A0xc4eb789b533668e2!2sCONCOR%20Bhawan!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
             allowFullScreen={true} 
             loading="lazy" 
             referrerPolicy="no-referrer-when-downgrade"
           ></iframe>
           
           <div className="absolute bottom-8 right-8 bg-white/95 backdrop-blur-md p-8 rounded-3xl shadow-2xl border border-gray-100 max-w-sm z-20">
              <div className="flex items-center gap-4 mb-6">
                 <div className="w-12 h-12 bg-blue-50 text-[#0096D6] rounded-2xl flex items-center justify-center shadow-inner">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                 </div>
                 <div>
                    <h4 className="text-lg font-black text-gray-900 leading-none">Pan-India Reach</h4>
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mt-1">Multi-modal Infrastructure</p>
                 </div>
              </div>
              <p className="text-sm text-gray-500 font-medium leading-relaxed mb-6">
                CONCOR's network spans across the length and breadth of India, providing high-efficiency rail and road connectivity between major gateway ports and consumption centers.
              </p>
              <div className="space-y-3">
                 <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest">
                    <span className="text-gray-400">Total Terminals</span>
                    <span className="text-[#0096D6]">64 Nodes</span>
                 </div>
                 <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-[#0096D6] h-full w-[85%]"></div>
                 </div>
              </div>
           </div>
        </main>
      </div>
    </div>
  );
};

export default NetworkPage;