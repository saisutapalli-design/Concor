
import React from 'react';
import { Link } from 'react-router-dom';
import { User } from '../types';

interface ProfilePageProps {
  user: User;
}

const ProfilePage: React.FC<ProfilePageProps> = ({ user }) => {
  const stats = [
    { label: 'Active Filings', value: '12' },
    { label: 'TEUs Tracked', value: '458' },
    { label: 'PDA Balance', value: '₹4.77L' },
    { label: 'Terminal Logs', value: '1,204' }
  ];

  return (
    <div className="min-h-full pb-16 bg-slate-50">
      <div className="bg-white border-b border-slate-100 px-8 py-10 mb-8 shadow-sm">
        <div className="max-w-5xl mx-auto">
          <nav className="flex items-center gap-2.5 text-[12px] font-black uppercase tracking-[0.2em] mb-3">
            <Link to="/dashboard" className="text-slate-400 hover:text-slate-900 transition-colors">Enterprise Workspace</Link>
            <div className="flex items-center">
              <svg className="w-2.5 h-2.5 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="4"><path d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
            </div>
            <span className="text-[#0096D6]">Profile Overview</span>
          </nav>
          <h1 className="text-3xl font-black text-slate-900 tracking-tighter leading-none mb-3">Operational Identity</h1>
          <p className="text-base text-slate-500 font-medium max-w-xl">Manage your secure node credentials and terminal access level.</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-8">
        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4">
            <div className="bg-white rounded-2xl border border-slate-100 p-8 flex flex-col items-center text-center shadow-sm">
              <div className="w-24 h-24 bg-slate-50 rounded-full border border-slate-100 shadow-md flex items-center justify-center mb-6 overflow-hidden">
                 <span className="text-2xl font-black text-slate-300 tracking-tighter uppercase">{user.name.substring(0, 2)}</span>
              </div>
              <h2 className="text-xl font-black text-slate-900 mb-1 leading-none">{user.name}</h2>
              <p className="text-[10px] font-black text-[#0096D6] uppercase tracking-widest mb-6">{user.role}</p>
              
              <div className="w-full pt-6 border-t border-slate-50 space-y-3">
                 <div className="flex justify-between items-center">
                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Organization</span>
                    <span className="text-[11px] font-bold text-slate-700">{user.organization}</span>
                 </div>
                 <div className="flex justify-between items-center">
                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Security Level</span>
                    <span className="text-[11px] font-bold text-emerald-600">L3 Official</span>
                 </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((s, i) => (
                <div key={i} className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm text-center">
                   <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1.5">{s.label}</p>
                   <p className="text-lg font-black text-slate-900 tracking-tighter tabular">{s.value}</p>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-[1.5rem] border border-slate-100 overflow-hidden shadow-sm">
               <div className="px-8 py-4 border-b border-slate-50 bg-slate-50/20">
                  <h3 className="text-[10px] font-black text-slate-900 uppercase tracking-widest">Access Credentials</h3>
               </div>
               <div className="p-8 space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                     <div className="space-y-1.5">
                        <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1">Corporate Email</label>
                        <input readOnly value={user.email} className="w-full bg-slate-50 border border-transparent rounded-lg px-4 py-3 text-xs font-bold text-slate-500 outline-none" />
                     </div>
                     <div className="space-y-1.5">
                        <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1">System ID</label>
                        <input readOnly value={user.id} className="w-full bg-slate-50 border border-transparent rounded-lg px-4 py-3 text-xs font-bold text-slate-500 outline-none" />
                     </div>
                  </div>
                  
                  <div className="p-6 bg-blue-50/50 rounded-xl border border-blue-100/50 flex items-center justify-between">
                     <div className="flex gap-4 items-center">
                        <div className="w-10 h-10 bg-[#0096D6] text-white rounded-lg flex items-center justify-center shadow-md shadow-blue-200 shrink-0">
                           <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>
                        </div>
                        <div>
                           <p className="text-[11px] font-black text-slate-900 uppercase tracking-tight">Digital Signature Active</p>
                           <p className="text-[9px] font-bold text-slate-400 mt-0.5">Valid until 24 Dec 2025</p>
                        </div>
                     </div>
                     <button className="text-[9px] font-black text-[#0096D6] uppercase tracking-widest border-b border-[#0096D6] pb-0.5">Renew ID</button>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
