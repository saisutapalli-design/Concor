import React from 'react';
import { Link } from 'react-router-dom';
import CorporateHeader from '../components/CorporateHeader';
import { CONCOR_LOGO } from '../constants';

const OurServicesPage: React.FC = () => {
  const services = [
    {
      title: "EXIM Services",
      desc: "Comprehensive logistics support for international trade, including ICD management and rail transit.",
      icon: "🚢",
      features: ["Custom Clearance Assist", "Bonded Warehousing", "Rail-Port Connectivity"]
    },
    {
      title: "Domestic Services",
      desc: "Door-to-door and terminal-to-terminal logistics for internal freight movement across India.",
      icon: "🚛",
      features: ["LTL/FTL Hubbing", "Retail Logistics", "Strategic Distribution"]
    },
    {
      title: "Terminal Infrastructure",
      desc: "Network of 60+ terminals providing state-of-the-art handling and yard management.",
      icon: "🏗️",
      features: ["RDT Tracking", "Yard Analytics", "TEU Processing"]
    },
    {
      title: "Cold Chain Logistics",
      desc: "Temperature-controlled solutions for perishable goods using Fresh2Go technology.",
      icon: "❄️",
      features: ["Reefer Services", "Cold Storages", "Pharma Compliance"]
    },
    {
      title: "Air Cargo",
      desc: "Integrated solutions for high-value and time-sensitive cargo via major airport hubs.",
      icon: "✈️",
      features: ["Intermodal Connect", "Express Handling", "Global Network"]
    },
    {
      title: "e-Logistics Solutions",
      desc: "Digitally enabled logistics with real-time bidding and document management portals.",
      icon: "💻",
      features: ["ETMS Filing", "KYCL Tracking", "e-Billing"]
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      <CorporateHeader />

      <div className="pt-20 md:pt-24 bg-slate-950 text-white text-center pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-12 md:pt-20">
          <p className="text-[9px] md:text-[10px] font-black text-[#0096D6] uppercase tracking-[0.4em] md:tracking-[0.5em] mb-6">Service Portfolio</p>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 md:mb-8 leading-none">Multi-modal Capabilities</h1>
          <p className="text-sm md:text-lg text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed px-4">
            From international port connectivity to last-mile door delivery, CONCOR provides the backbone of India's supply chain infrastructure.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 -mt-16 md:-mt-24 pb-16 md:pb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((s, i) => (
            <div key={i} className="group p-8 md:p-10 bg-white border border-slate-100 rounded-[1.5rem] md:rounded-[2.5rem] shadow-[0_15px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.12)] hover:translate-y-[-8px] transition-all duration-500">
              <div className="text-4xl md:text-5xl mb-8 md:mb-10 grayscale group-hover:grayscale-0 transition-all bg-slate-50 w-16 md:w-20 h-16 md:h-20 flex items-center justify-center rounded-2xl md:rounded-3xl group-hover:bg-blue-50">
                {s.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-3 md:mb-4 tracking-tight">{s.title}</h3>
              <p className="text-xs md:text-sm text-slate-500 font-medium leading-relaxed mb-6 md:mb-8">{s.desc}</p>
              <div className="space-y-2 md:space-y-3 border-t border-slate-50 pt-6 md:pt-8">
                {s.features.map(f => (
                  <div key={f} className="flex items-center gap-3">
                    <div className="w-1 md:w-1.5 h-1 md:h-1.5 bg-[#0096D6] rounded-full"></div>
                    <span className="text-[8px] md:text-[10px] font-black text-slate-400 uppercase tracking-[0.1em] md:tracking-[0.15em]">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServicesPage;