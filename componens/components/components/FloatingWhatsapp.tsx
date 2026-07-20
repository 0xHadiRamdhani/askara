'use client';

import React from 'react';
import { MessageSquare } from 'lucide-react';

const WHATSAPP_NUMBER = "6285717171515";
const WHATSAPP_TEXT = encodeURIComponent(
  "Halo PT Askara Digital Technology,\n\nSaya mendapatkan informasi dari website Anda dan tertarik untuk berkonsultasi mengenai layanan yang ditawarkan.\n\nMohon informasi lebih lanjut.\n\nTerima kasih."
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_TEXT}`;

export default function FloatingWhatsapp() {
  return (
    <div className="fixed bottom-24 right-8 z-[90] group flex items-center">
      {/* Label Tooltip saat kursor diarahkan ke tombol */}
      <span className="opacity-0 group-hover:opacity-100 mr-3 px-3 py-1.5 rounded-lg bg-slate-900 border border-emerald-500/20 text-white text-xs font-semibold tracking-wide whitespace-nowrap shadow-xl transition-all duration-300 pointer-events-none translate-x-4 group-hover:translate-x-0">
        Chat via WhatsApp
      </span>
      
      {/* Tombol WhatsApp Utama */}
      <a 
        href={WHATSAPP_URL} 
        target="_blank" 
        rel="noopener noreferrer"
        className="p-4 rounded-full bg-emerald-600 text-slate-955 shadow-2xl shadow-emerald-500/20 hover:bg-emerald-500 transition-all duration-300 transform hover:scale-110 active:scale-95 flex items-center justify-center relative group"
        aria-label="Chat WhatsApp"
      >
        {/* Efek Ping Berpendar Halus */}
        <span className="absolute inset-0 rounded-full bg-emerald-500/30 animate-ping opacity-75"></span>
        <MessageSquare className="w-6 h-6 relative z-10 text-white" />
      </a>
    </div>
  );
}