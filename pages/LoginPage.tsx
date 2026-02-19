import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserRole, User } from '../types';
import { ConcorLogo } from '../constants';

interface LoginPageProps {
  onLogin: (user: User) => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState<UserRole>(UserRole.SHIPPER);
  const [username, setUsername] = useState('Harsh.lk@globallogic.com');
  const [isDigitalSigned, setIsDigitalSigned] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mockUser: User = {
      id: 'USR123',
      name: username.split('@')[0].toUpperCase(),
      role: selectedRole,
      organization: selectedRole === UserRole.GOVT_OFFICER ? 'Govt of India - Customs' : 'India Logistics Ltd',
      email: username
    };
    onLogin(mockUser);
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex bg-slate-50 font-sans overflow-hidden">
      {/* Left Side: Professional Enterprise Context */}
      <div className="hidden lg:flex w-[55%] bg-slate-900 relative flex-col justify-between p-20 text-white">
        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #0096D6 1px, transparent 0)', backgroundSize: '60px 60px' }}></div>
        
        <div className="relative z-10">
          {/* Stabilized Logo Container - Removed transformation and blur to stop flickering */}
          <div className="mb-16 inline-flex items-center justify-center px-10 py-8 bg-white rounded-[2.5rem] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] border border-white/10">
            <ConcorLogo />
          </div>
          
          <h2 className="text-6xl font-black tracking-tighter leading-none mb-6">
            Logistics <br/>
            Command <span className="text-[#0096D6]">Node.</span>
          </h2>
          <p className="text-slate-400 text-lg font-medium max-w-md leading-relaxed">
            Secure access to India's unified multi-modal logistics network. Orchestrate global trade flows with enterprise-grade telemetry.
          </p>
        </div>

        <div className="relative z-10 flex gap-12">
           <div>
              <p className="text-2xl font-black tracking-tighter text-white">60+</p>
              <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mt-1">Active Hubs</p>
           </div>
           <div className="w-px h-10 bg-white/10"></div>
           <div>
              <p className="text-2xl font-black tracking-tighter text-white">AES-256</p>
              <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mt-1">Encryption Protocol</p>
           </div>
        </div>
      </div>

      {/* Right Side: Login Form */}
      <div className="w-full lg:w-[45%] flex flex-col justify-center px-10 md:px-24 bg-white">
        <div className="lg:hidden mb-12 flex justify-center">
          <div className="p-4 bg-white rounded-2xl shadow-lg border border-slate-100">
            <ConcorLogo />
          </div>
        </div>
        
        <div className="max-w-md w-full mx-auto">
          <div className="mb-12 text-left">
            <h1 className="text-3xl font-black text-slate-900 tracking-tighter mb-2">Portal Access</h1>
            <p className="text-sm font-medium text-slate-400">Authenticate session via enterprise credentials.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-6">
              <div className="space-y-3">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1 block">Operational Role</label>
                <div className="relative flex items-center">
                  <select 
                    className="w-full h-14 bg-slate-50 border border-slate-100 rounded-xl px-6 text-sm font-bold text-slate-900 outline-none focus:border-[#0096D6] transition-all appearance-none pr-14"
                    value={selectedRole}
                    onChange={(e) => setSelectedRole(e.target.value as UserRole)}
                  >
                    {Object.values(UserRole).map(role => (
                      <option key={role} value={role}>{role}</option>
                    ))}
                  </select>
                  <div className="absolute right-6 pointer-events-none text-slate-400 flex items-center h-full">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1 block">Username / Corporate ID</label>
                <input 
                  type="email" 
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full h-14 bg-slate-50 border border-slate-100 rounded-xl px-6 text-sm font-bold text-slate-900 outline-none focus:border-[#0096D6] transition-all"
                  placeholder="name@company.com"
                />
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1 block">Password</label>
                <input 
                  type="password" 
                  className="w-full h-14 bg-slate-50 border border-slate-100 rounded-xl px-6 text-sm font-bold text-slate-900 outline-none focus:border-[#0096D6] transition-all"
                  placeholder="••••••••"
                  defaultValue="password123"
                />
              </div>
            </div>

            <div className="flex items-center gap-3">
               <button 
                 type="button"
                 onClick={() => setIsDigitalSigned(!isDigitalSigned)}
                 className={`w-12 h-6 rounded-full transition-all relative ${isDigitalSigned ? 'bg-[#0096D6]' : 'bg-slate-200'}`}
               >
                 <div className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow-sm transition-all ${isDigitalSigned ? 'right-1' : 'left-1'}`}></div>
               </button>
               <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Apply Digital Signature (DSC)</span>
            </div>

            <button type="submit" className="btn-prominent w-full h-14 shadow-blue-500/20">
              ESTABLISH CONNECTION
            </button>

            <div className="flex justify-between pt-4">
              <button type="button" className="text-[10px] font-black text-slate-400 uppercase tracking-widest hover:text-[#0096D6] transition-colors">Forgot Node ID?</button>
              <button type="button" className="text-[10px] font-black text-slate-400 uppercase tracking-widest hover:text-[#0096D6] transition-colors">Request Access</button>
            </div>
          </form>
        </div>

        <div className="mt-20 text-center">
          <p className="text-[9px] font-black text-slate-300 uppercase tracking-widest leading-relaxed">
            Authorized access only. All sessions are monitored via <br/> secure terminal telemetry protocols.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;