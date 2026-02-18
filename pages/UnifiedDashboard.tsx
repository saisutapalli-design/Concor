
import React from 'react';
import { Link } from 'react-router-dom';
import AIChatbot from '../components/AIChatbot';

const UnifiedDashboard: React.FC = () => {
  const cards = [
    {
      title: "KYCL Tracker",
      subtitle: "Visibility Engine",
      desc: "Instant telemetry of container status and yard telemetry across 60+ terminals.",
      path: "/kycl",
      color: "text-blue-600",
      accent: "bg-blue-600",
      icon: (
        <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center ring-1 ring-blue-100 shadow-inner">
          <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center relative z-10 shadow-lg border-2 border-white">
            <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
          </div>
        </div>
      )
    },
    {
      title: "e-Logistics",
      subtitle: "Operations & BI",
      desc: "Manage multi-modal bookings, real-time gate events, and rail scheduling reports.",
      path: "/logistics",
      color: "text-emerald-600",
      accent: "bg-emerald-600",
      icon: (
        <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center ring-1 ring-emerald-100 shadow-inner">
          <svg className="w-7 h-7 text-emerald-600" viewBox="0 0 24 24" fill="currentColor"><path d="M20,8H17V4H3C1.89,4 1,4.89 1,6V17H3A3,3 0 0,0 6,20A3,3 0 0,0 9,17H15A3,3 0 0,0 18,20A3,3 0 0,0 21,17H23V12L20,8M6,18.5A1.5,1.5 0 0,1 4.5,17A1.5,1.5 0 0,1 6,15.5A1.5,1.5 0 0,1 7.5,17A1.5,1.5 0 0,1 6,18.5M17,8H19L21.27,11H17V8M18,18.5A1.5,1.5 0 0,1 16.5,17A1.5,1.5 0 0,1 18,15.5A1.5,1.5 0 0,1 19.5,17A1.5,1.5 0 0,1 18,18.5Z" /></svg>
        </div>
      )
    },
    {
      title: "FMLM Logistics",
      subtitle: "Fleet Matching",
      desc: "Digital truck booking with real-time driver matching and dynamic price protocol.",
      path: "/fmlm",
      color: "text-[#0096D6]",
      accent: "bg-[#0096D6]",
      icon: (
        <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center ring-1 ring-blue-100 shadow-inner">
          <svg className="w-7 h-7 text-[#0096D6]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.806H9.42c-.512 0-.952.307-1.152.755L5.25 10.5" /></svg>
        </div>
      )
    },
    {
      title: "Smart e-Filing",
      subtitle: "AI Doc Hub",
      desc: "Zero-touch EXIM documentation with auto-fill, OCR, and Aadhaar digital signatures.",
      path: "/filing",
      color: "text-amber-600",
      accent: "bg-amber-600",
      icon: (
        <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center ring-1 ring-amber-100 shadow-inner">
          <svg className="w-7 h-7 text-amber-600" viewBox="0 0 24 24" fill="currentColor"><path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M13,9V3.5L18.5,9H13Z" /></svg>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-full pb-16 bg-[#F8FAFC]">
      <div className="bg-slate-900 px-8 py-12 mb-10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/4 h-full bg-blue-500/5 -skew-x-12 translate-x-12 blur-3xl"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <p className="text-[10px] font-black text-[#0096D6] uppercase tracking-[0.4em] mb-3">System Hub</p>
          <h1 className="text-4xl font-black text-white tracking-tighter leading-none mb-4">Command Center</h1>
          <p className="text-slate-400 text-base font-medium max-w-xl leading-relaxed">Unified node for national logistics orchestration, terminal telemetry, and documentation protocols.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8">
        <div className="grid lg:grid-cols-4 gap-6 -mt-16 relative z-20">
          {cards.map((card, idx) => (
            <Link key={idx} to={card.path} className="group card-standing rounded-[2rem] p-6 flex flex-col h-full bg-white hover:bg-white border-slate-100">
              <div className="mb-6 flex justify-between items-start">
                <div className="transform group-hover:scale-110 transition-transform duration-300">{card.icon}</div>
                <div className={`opacity-0 group-hover:opacity-100 transition-all ${card.color}`}><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg></div>
              </div>
              <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">{card.subtitle}</p>
              <h2 className="text-lg font-black text-slate-900 mb-2">{card.title}</h2>
              <p className="text-[12px] text-slate-500 font-medium leading-relaxed mb-4">{card.desc}</p>
              <div className="mt-auto pt-4 border-t border-slate-50 flex items-center justify-between">
                <span className={`text-[9px] font-black uppercase tracking-widest ${card.color}`}>Launch</span>
                <div className={`h-1 w-8 rounded-full ${card.accent} opacity-10 group-hover:opacity-100 transition-all`}></div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-20 p-10 bg-slate-900 rounded-[2.5rem] text-white flex flex-col md:flex-row items-center justify-between gap-10 relative overflow-hidden shadow-2xl border border-white/5">
          <div className="relative z-10 max-w-lg">
             <h3 className="text-2xl font-black tracking-tighter mb-3">Enterprise Support</h3>
             <p className="text-sm text-slate-400 font-medium leading-relaxed">Direct operational conduit for terminal assistance or regulatory filing protocols.</p>
          </div>
          <button onClick={() => window.dispatchEvent(new CustomEvent('concor-open-chat', { detail: { message: "I need assistance with operational support for our terminal hub." } }))} className="w-full md:w-60 bg-[#0096D6] text-white h-12 rounded-xl font-black text-[10px] uppercase tracking-[0.2em] shadow-lg shadow-blue-500/20 hover:bg-blue-400 transition-all active:scale-95">Launch AI Assistant</button>
        </div>
      </div>
      <AIChatbot context="Logistics" />
    </div>
  );
};

export default UnifiedDashboard;
