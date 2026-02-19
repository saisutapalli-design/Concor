import React, { useState } from 'react';
import { HashRouter, Routes, Route, Navigate, Link, useLocation } from 'react-router-dom';
import { User } from './types';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import UnifiedDashboard from './pages/UnifiedDashboard';
import KYCLPage from './pages/KYCLPage';
import ELogisticsPage from './pages/ELogisticsPage';
import EFilingPage from './pages/EFilingPage';
import FMLMPage from './pages/FMLMPage';
import ProfilePage from './pages/ProfilePage';
import SettingsPage from './pages/SettingsPage';
import NetworkPage from './pages/NetworkPage';
import AboutUsPage from './pages/AboutUsPage';
import OurServicesPage from './pages/OurServicesPage';
import TariffsPage from './pages/TariffsPage';
import InvestorRelationsPage from './pages/InvestorRelationsPage';
import { ConcorLogo } from './constants';

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogin = (userData: User) => {
    setUser(userData);
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setUser(null);
    setIsAuthenticated(false);
    setIsMobileMenuOpen(false);
  };

  const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const location = useLocation();

    // Landing and Public pages handle their own responsive headers
    const isPublicPage = ['/', '/login', '/network', '/about', '/services', '/tariffs', '/investors'].includes(location.pathname);
    
    if (isPublicPage) return <>{children}</>;

    return (
      <div className="min-h-screen flex flex-col bg-white selection:bg-[#0096D6]/30">
        <header className="sticky top-0 z-[100] bg-white/95 backdrop-blur-md border-b border-slate-100 px-4 md:px-8 h-20 md:h-24 flex items-center justify-between shrink-0 shadow-sm">
          <div className="flex items-center h-full">
            <Link to="/dashboard" className="flex items-center transition-transform active:scale-95 group">
              <ConcorLogo />
            </Link>
          </div>
          
          <div className="flex items-center gap-4 md:gap-8">
            <nav className="hidden md:flex items-center gap-4">
              <Link to="/settings" className={`transition-all duration-300 w-11 h-11 flex items-center justify-center rounded-2xl ${location.pathname === '/settings' ? 'text-white bg-[#0096D6] shadow-xl shadow-blue-500/20' : 'text-slate-400 bg-slate-50 hover:bg-slate-100 hover:text-[#0096D6]'}`} title="System Configuration">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </Link>
              <button onClick={handleLogout} className="w-11 h-11 flex items-center justify-center rounded-2xl bg-slate-50 text-slate-400 hover:bg-rose-50 hover:text-rose-500 transition-all duration-300" title="Terminate Connection">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l3 3m0 0l-3 3m3-3H2.25" /></svg>
              </button>
            </nav>
            <Link to="/profile" className="flex items-center gap-3 md:gap-4 group">
              <div className="hidden sm:flex flex-col items-end text-right">
                <p className="text-xs font-black text-slate-900 leading-none group-hover:text-[#0096D6] transition-colors tracking-tight uppercase">{user?.name || 'OPERATOR.SYS'}</p>
                <p className="text-[9px] font-black text-slate-400 mt-1.5 uppercase tracking-[0.2em]">L3 PROTOCOL</p>
              </div>
              <div className="h-10 w-10 md:h-11 md:w-11 bg-slate-50 rounded-xl md:rounded-2xl flex items-center justify-center border border-slate-100 overflow-hidden transition-all group-hover:border-[#0096D6]/50 group-hover:bg-blue-50 group-active:scale-90">
                 <span className="text-xs font-black text-slate-400 group-hover:text-[#0096D6] tracking-tighter">{(user?.name || 'OP').substring(0, 2).toUpperCase()}</span>
              </div>
            </Link>
            
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center text-slate-400 bg-slate-50 rounded-xl"
            >
              {isMobileMenuOpen ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path d="M6 18L18 6M6 6l12 12" /></svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>
              )}
            </button>
          </div>
        </header>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-100 animate-in slide-in-from-top-2 p-6 space-y-4">
            <Link to="/settings" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-4 text-sm font-black text-slate-600 uppercase tracking-widest py-2">
               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
               Security Config
            </Link>
            <button onClick={handleLogout} className="flex items-center gap-4 text-sm font-black text-rose-600 uppercase tracking-widest py-2">
               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l3 3m0 0l-3 3m3-3H2.25" /></svg>
               Terminate Session
            </button>
          </div>
        )}
        
        <main className="flex-1 overflow-y-auto bg-[#F8FAFC]">
          {children}
        </main>
        
        <footer className="bg-slate-950 pt-16 pb-12 px-6 md:px-8 border-t border-white/5 shrink-0 relative overflow-hidden text-center">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] scale-[2] md:scale-[2.5] pointer-events-none brightness-0 invert flex justify-center h-16 md:h-20">
            <ConcorLogo />
          </div>
          <div className="max-w-7xl mx-auto flex flex-col items-center gap-8 relative z-10">
            <div className="flex flex-wrap justify-center items-center gap-x-6 md:gap-x-12 gap-y-3 text-[9px] md:text-[11px] font-black text-slate-500">
              <Link to="/dashboard" className="hover:text-[#0096D6] transition-colors uppercase tracking-[0.2em] md:tracking-[0.3em]">Dashboard</Link>
              <Link to="/profile" className="hover:text-[#0096D6] transition-colors uppercase tracking-[0.2em] md:tracking-[0.3em]">Credentials</Link>
              <Link to="/settings" className="hover:text-[#0096D6] transition-colors uppercase tracking-[0.2em] md:tracking-[0.3em]">Security</Link>
              <span className="uppercase tracking-[0.2em] md:tracking-[0.3em] text-slate-600 text-[8px] md:text-[11px]">SECURE NODE: {location.pathname.replace('/', '').toUpperCase() || 'ROOT'}</span>
            </div>
            <p className="text-[9px] md:text-[10px] font-black text-slate-700 uppercase tracking-[0.2em] md:tracking-[0.3em] leading-relaxed max-w-xs md:max-w-lg">Copyright © 2026 Container Corporation of India Ltd.<br/>Authorized access only. All operational events are logged.</p>
          </div>
        </footer>
      </div>
    );
  };

  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/services" element={<OurServicesPage />} />
          <Route path="/tariffs" element={<TariffsPage />} />
          <Route path="/investors" element={<InvestorRelationsPage />} />
          <Route path="/dashboard" element={isAuthenticated ? <UnifiedDashboard /> : <Navigate to="/login" />} />
          <Route path="/kycl" element={isAuthenticated ? <KYCLPage /> : <Navigate to="/login" />} />
          <Route path="/logistics" element={isAuthenticated ? <ELogisticsPage user={user!} /> : <Navigate to="/login" />} />
          <Route path="/fmlm" element={isAuthenticated ? <FMLMPage /> : <Navigate to="/login" />} />
          <Route path="/filing" element={isAuthenticated ? <EFilingPage /> : <Navigate to="/login" />} />
          <Route path="/profile" element={isAuthenticated ? <ProfilePage user={user!} /> : <Navigate to="/login" />} />
          <Route path="/settings" element={isAuthenticated ? <SettingsPage /> : <Navigate to="/login" />} />
          <Route path="/network" element={<NetworkPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;