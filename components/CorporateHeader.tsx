import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CONCOR_LOGO } from '../constants';

const CorporateHeader: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Our Services', path: '/services' },
    { name: 'Tariffs', path: '/tariffs' },
    { name: 'Investors', path: '/investors' },
    { name: 'Network', path: '/network' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-white border-b border-slate-100 shadow-sm h-20 md:h-24 flex items-center">
      <div className="max-w-7xl mx-auto w-full px-4 md:px-8 flex items-center justify-between">
        <div className="flex items-center gap-4 lg:gap-16">
          <Link to="/" className="flex items-center transition-transform hover:scale-105 active:scale-95 shrink-0 scale-90 md:scale-100 origin-left">
            {CONCOR_LOGO}
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8 lg:gap-10">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className={`text-[11px] font-black uppercase tracking-[0.25em] transition-all whitespace-nowrap py-2 relative group ${
                  location.pathname === link.path ? 'text-[#0096D6]' : 'text-slate-400 hover:text-[#0096D6]'
                }`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-[#0096D6] transition-all ${
                  location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
            ))}
          </div>
        </div>
        
        <div className="flex items-center gap-3 md:gap-6">
          <Link 
            to="/login" 
            className="bg-[#0096D6] text-white h-11 md:h-14 px-5 md:px-10 rounded-xl md:rounded-[1.25rem] font-black text-[10px] md:text-[11px] uppercase tracking-[0.2em] shadow-xl shadow-blue-500/20 hover:bg-blue-400 hover:-translate-y-0.5 transition-all flex items-center justify-center whitespace-nowrap"
          >
            Get Started
          </Link>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden w-11 h-11 flex items-center justify-center text-slate-500 hover:text-[#0096D6] transition-colors"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-20 md:top-24 bg-white z-[90] lg:hidden animate-in fade-in slide-in-from-top-4">
          <div className="p-8 space-y-6">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                onClick={() => setIsMenuOpen(false)}
                className={`block text-xl font-black uppercase tracking-[0.2em] transition-all ${
                  location.pathname === link.path ? 'text-[#0096D6]' : 'text-slate-900 hover:text-[#0096D6]'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="absolute bottom-10 left-8 right-8 text-center">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Enterprise Node Access</p>
            <div className="h-px bg-slate-100 w-full mb-6"></div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default CorporateHeader;