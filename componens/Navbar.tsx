'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

const WHATSAPP_NUMBER = "6285717171515";
const WHATSAPP_TEXT = encodeURIComponent(
  "Halo PT Askara Digital Technology,\n\nSaya mendapatkan informasi dari website Anda dan tertarik untuk berkonsultasi mengenai layanan yang ditawarkan.\n\nMohon informasi lebih lanjut.\n\nTerima kasih."
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_TEXT}`;

export default function Navbar({ activeSection }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  // Mengatur status scroll untuk mengubah tampilan navbar secara dinamis
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl border-b border-slate-200/80 py-3 shadow-lg shadow-slate-900/5' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo Utama PT Askara Digital Technology dengan pelindung kontainer gelap */}
          <a href="#home" className="flex items-center gap-3 group">
            <div 
              className={`rounded-xl px-4 py-2 transition-all duration-300 shadow-md ${
                isScrolled 
                  ? 'bg-slate-955/90 border border-cyan-500/20 shadow-cyan-955/15' 
                  : 'bg-slate-950/70 border border-white/10 shadow-black/25'
              }`}
            >
              <img 
                src="/daruzi_space-removebg-preview.png" 
                alt="Askara Digital Technology" 
                className="h-12 md:h-14 w-auto object-contain select-none pointer-events-none" 
              />
            </div>
          </a>

          {/* Menu Navigasi Desktop */}
          <div 
            className={`hidden lg:flex items-center space-x-1 border rounded-full p-1.5 backdrop-blur-md transition-all duration-300 ${
              isScrolled 
                ? 'bg-slate-100/80 border-slate-200' 
                : 'bg-white/[0.02] border-white/5'
            }`}
          >
            {['Home', 'About', 'Services', 'Solutions', 'Process'].map((item) => {
              const targetId = item.toLowerCase();
              const isActive = activeSection === targetId;

              return (
                <a 
                  key={item} 
                  href={`#${targetId}`}
                  className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${
                    isActive 
                      ? (isScrolled ? 'text-white bg-[#031533]' : 'text-white bg-white/10 shadow-inner') 
                      : (isScrolled ? 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50' : 'text-slate-400 hover:text-white hover:bg-white/[0.03]')
                  }`}
                >
                  {item}
                </a>
              );
            })}
          </div>

          {/* Tombol Aksi Utama (Integrasi WhatsApp) */}
          <div className="hidden lg:flex">
            <a 
              href={WHATSAPP_URL} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-semibold rounded-full group transition-all duration-300 shadow-md ${
                isScrolled 
                  ? 'bg-[#031533] hover:bg-[#042250] text-white' 
                  : 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-950/55'
              }`}
            >
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#00A962] rounded-full group-hover:w-60 group-hover:h-60"></span>
              <span className="relative flex items-center gap-2 text-xs tracking-wider uppercase">
                Hubungi Kami <ArrowRight className="w-4 h-4 font-bold" />
              </span>
            </a>
          </div>

          {/* Tombol Pemicu Menu Mobile */}
          <button 
            className={`lg:hidden transition-colors duration-300 ${isScrolled ? 'text-[#031533]' : 'text-white'}`} 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Panel Navigasi Mobile Dropdown */}
      <div 
        className={`lg:hidden absolute top-full left-0 w-full border-b transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-[360px] py-4' : 'max-h-0 py-0'
        } ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-2xl border-slate-200/80 shadow-lg' 
            : 'bg-[#030811]/95 backdrop-blur-2xl border-white/5'
        }`}
      >
        <div className="flex flex-col px-6 space-y-2">
          {['Home', 'About', 'Services', 'Solutions', 'Process', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsMenuOpen(false)}
              className={`text-sm font-semibold tracking-wider uppercase py-2.5 border-b last:border-0 ${
                isScrolled 
                  ? 'text-slate-700 hover:text-emerald-600 border-slate-100' 
                  : 'text-slate-300 hover:text-emerald-400 border-white/5'
              }`}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}