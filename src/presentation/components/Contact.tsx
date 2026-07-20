'use client';

import React from 'react';
import { WHATSAPP_URL } from '../../domain/constants';
import { MapPin, Mail, Phone, ExternalLink } from 'lucide-react';



export default function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    window.open(WHATSAPP_URL, '_blank');
  };

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* Gambar Latar Belakang Gedung Askara */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
          alt="Askara Headquarters Building" 
          className="w-full h-full object-cover object-bottom opacity-[0.16] mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030811] via-[#030811]/90 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="glass-panel rounded-3xl p-8 md:p-16 border border-white/5 flex flex-col lg:flex-row items-center justify-between gap-12 shadow-2xl reveal-up border-cyan-500/10">
          
          {/* Kolom Kiri: Informasi Kontak Perusahaan */}
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Let's build the <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">future</span> of your business.
            </h2>
            <p className="text-slate-300 text-lg mb-10 font-light max-w-md leading-relaxed">
              Jadwalkan demo sistem kami dan temukan bagaimana Askara Digital Technology dapat membantu transformasi digital bisnis Anda.
            </p>
            
            <div className="space-y-6">
              {/* Alamat Fisik Kantor */}
              <div className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors group">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-emerald-400 group-hover:bg-[#00A962] group-hover:text-slate-950 transition-all duration-300">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-white">Deruzzi SPACE</p>
                  <p className="text-sm font-light text-slate-400">Jl. Sukajadi 25, Sukajadi, Jawa Barat 40162</p>
                </div>
              </div>

              {/* Alamat Surat Elektronik (Email) */}
              <div className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors group">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-emerald-400 group-hover:bg-[#00A962] group-hover:text-slate-950 transition-all duration-300">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-white">Email</p>
                  <p className="text-sm font-light text-slate-400">info@askaradigital.com</p>
                </div>
              </div>

              {/* Nomor Telepon Hubung */}
              <div className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors group">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-emerald-400 group-hover:bg-[#00A962] group-hover:text-slate-955 transition-all duration-300">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-white">Telepon</p>
                  <p className="text-sm font-light text-slate-400">+62 857-1717-1515</p>
                </div>
              </div>
            </div>
          </div>

          {/* Kolom Kanan: Formulir Hubung Langsung */}
          <div className="lg:w-5/12 w-full">
            <div className="bg-[#030811]/85 backdrop-blur-3xl rounded-2xl p-8 border border-white/10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-emerald-500 to-teal-400"></div>
              <h3 className="text-2xl font-bold text-white mb-6">Konsultasi Sekarang</h3>
              
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-2">Nama Lengkap</label>
                  <input 
                    required 
                    type="text" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:bg-white/10 transition-all text-sm" 
                    placeholder="John Doe" 
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-2">Email Perusahaan</label>
                  <input 
                    required 
                    type="email" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:bg-white/10 transition-all text-sm" 
                    placeholder="john@company.com" 
                  />
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-4 rounded-xl transition-all transform hover:-translate-y-0.5 shadow-lg shadow-emerald-500/20 text-xs tracking-wider uppercase"
                >
                  Kirim Pesan & Konsultasi
                </button>
              </form>
              
              <div className="mt-6 pt-6 border-t border-white/10 text-center">
                <p className="text-slate-400 text-xs mb-4">Atau hubungi langsung via WhatsApp</p>
                <a 
                  href={WHATSAPP_URL} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center justify-center gap-2.5 w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 rounded-xl transition-all shadow-lg shadow-emerald-950/20 text-xs tracking-wider uppercase"
                >
                  WhatsApp <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}