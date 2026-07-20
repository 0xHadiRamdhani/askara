'use client';

import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#010408] pt-16 pb-8 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          
          {/* Sisi Kiri: Logo Utama dibalut kontainer glassmorphism transparan gelap */}
          <div className="flex items-center gap-3">
             <div className="bg-[#050c18]/90 border border-white/10 rounded-lg p-3 flex items-center justify-center shadow-lg shadow-black/40">
               <img 
                 src="/daruzi_space-removebg-preview.png" 
                 alt="Askara Digital Technology" 
                 className="h-10 w-auto object-contain select-none pointer-events-none" 
               />
             </div>
          </div>

          {/* Sisi Kanan: Tautan Navigasi Cepat */}
          <div className="flex items-center gap-8 text-xs font-semibold text-slate-400 tracking-wider uppercase">
             <a href="#about" className="hover:text-emerald-400 transition-colors">About</a>
             <a href="#services" className="hover:text-emerald-400 transition-colors">Services</a>
             <a href="#solutions" className="hover:text-emerald-400 transition-colors">Solutions</a>
          </div>
        </div>
        
        {/* Hak Cipta & Dokumen Kebijakan Privasi */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>&copy; {currentYear} PT Askara Digital Technology. All rights reserved.</p>
          <div className="flex gap-6">
             <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
             <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}