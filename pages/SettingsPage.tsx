
import React from 'react';
import { Link } from 'react-router-dom';

const SettingsPage: React.FC = () => {
  return (
    <div className="min-h-full pb-16 bg-slate-50">
      <div className="bg-white border-b border-slate-100 px-8 py-10 mb-8 shadow-sm">
        <div className="max-w-4xl mx-auto">
          <nav className="flex items-center gap-2.5 text-[12px] font-black uppercase tracking-[0.2em] mb-3">
            <Link to="/dashboard" className="text-slate-400 hover:text-slate-900 transition-colors">Enterprise Workspace</Link>
            <div className="flex items-center">
              <svg className="w-2.5 h-2.5 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="4"><path d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
            </div>
            <span className="text-[#0096D6]">Security & Config</span>
          </nav>
          <h1 className="text-3xl font-black text-slate-900 tracking-tighter leading-none mb-3">System Preferences</h1>
          <p className="text-base text-slate-500 font-medium max-w-xl">Configure node alerts, encryption standards, and terminal telemetry filters.</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-8 space-y-6">
        {/* Notifications */}
        <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm">
          <div className="px-8 py-4 border-b border-slate-50 flex items-center gap-3 bg-slate-50/20">
             <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" /></svg>
             <h3 className="text-[10px] font-black text-slate-900 uppercase tracking-widest">Alert Configuration</h3>
          </div>
          <div className="p-6 space-y-4">
             {[
               { label: 'Yard Movement Triggers', desc: 'Notify on every RDT container scan', active: true },
               { label: 'Financial Exceptions', desc: 'Alert when PDA drops below threshold', active: true },
               { label: 'Govt Regulatory Updates', desc: 'Daily summary of EXIM policy changes', active: false }
             ].map((item, i) => (
               <div key={i} className="flex items-center justify-between p-4 hover:bg-slate-50 rounded-xl transition-all border border-transparent hover:border-slate-100">
                  <div>
                    <p className="text-sm font-black text-slate-900 leading-none mb-1.5">{item.label}</p>
                    <p className="text-[10px] font-bold text-slate-400 tracking-tight uppercase tracking-widest">{item.desc}</p>
                  </div>
                  <button className={`w-10 h-5 rounded-full transition-all relative shrink-0 ${item.active ? 'bg-[#0096D6]' : 'bg-slate-200'}`}>
                    <div className={`absolute top-0.5 w-4 h-4 bg-white rounded-full shadow-sm transition-all ${item.active ? 'right-0.5' : 'left-0.5'}`}></div>
                  </button>
               </div>
             ))}
          </div>
        </div>

        {/* Security */}
        <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm">
          <div className="px-8 py-4 border-b border-slate-50 flex items-center gap-3 bg-slate-50/20">
             <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25-2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
             <h3 className="text-[10px] font-black text-slate-900 uppercase tracking-widest">Security Protocol</h3>
          </div>
          <div className="p-8">
             <div className="p-6 border border-rose-50 rounded-xl bg-rose-50/20 text-center">
                <h4 className="text-[9px] font-black text-rose-600 uppercase tracking-widest mb-4">Account Danger Zone</h4>
                <button className="text-[9px] font-black text-white bg-rose-600 px-8 py-3 rounded-lg uppercase tracking-[0.2em] shadow-md hover:bg-rose-700 transition-all active:scale-95">Deactivate Node ID</button>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
