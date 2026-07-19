'use client';

import React from 'react';
import { Target, Layers, CheckCircle2, Handshake, Zap, ShieldCheck } from 'lucide-react';

// --- CATATAN UNTUK VS CODE LOKAL ---
// Saat Anda menyalin kode ini ke Visual Studio Code lokal, Anda bisa mengaktifkan kembali baris impor di bawah ini
// dan menghapus konstanta `coreValues` lokal agar proyek Anda tetap modular:
//
// import { coreValues } from '../lib/data';

interface ValueItem {
  title: string;
  desc: string;
  iconName: 'Handshake' | 'Zap' | 'ShieldCheck' | 'Target';
}

// Data didefinisikan secara lokal agar tidak memicu error resolusi berkas pada sistem pratinjau online
const coreValues: ValueItem[] = [
  { 
    title: "COLLABORATION", 
    desc: "We believe in the power of teamwork and strong partnerships.", 
    iconName: "Handshake"
  },
  { 
    title: "INNOVATION", 
    desc: "We continuously explore new ideas to deliver better solutions.", 
    iconName: "Zap"
  },
  { 
    title: "INTEGRITY", 
    desc: "We act with honesty, transparency, and responsibility.", 
    iconName: "ShieldCheck"
  },
  { 
    title: "EXCELLENCE", 
    desc: "We are committed to delivering the highest quality in everything we do.", 
    iconName: "Target"
  }
];

// Pemetaan nama string icon ke komponen Lucide React yang sesuai
const IconMap = {
  Handshake: Handshake,
  Zap: Zap,
  ShieldCheck: ShieldCheck,
  Target: Target,
};

export default function About() {
  return (
    <section id="about" className="py-28 relative z-10 bg-[#030811] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Kolom Kiri: Teks Deskripsi, Visi & Misi */}
          <div className="reveal-up">
            <div className="flex items-center gap-2 text-[#00A962] text-xs font-bold tracking-widest uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00A962]"></span>
              About Us
            </div>
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Dedicated to delivering <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">intelligent solutions.</span>
            </h3>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed font-light">
              PT Askara Digital Technology is a technology partner dedicated to delivering intelligent digital solutions that help organizations innovate, transform, and grow in the digital era.
            </p>
            
            {/* Panel Visi Perusahaan */}
            <div className="glass-panel glass-reflect rounded-2xl p-6 mb-6 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <h4 className="text-white font-bold text-lg mb-3 flex items-center gap-3">
                <Target className="w-5 h-5 text-emerald-400" /> Our Vision
              </h4>
              <p className="text-slate-400 leading-relaxed text-sm font-light">
                To be a leading digital technology partner recognized for innovation, excellence, and measurable impact.
              </p>
            </div>

            {/* Panel Misi Perusahaan */}
            <div className="glass-panel glass-reflect rounded-2xl p-6 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <h4 className="text-white font-bold text-lg mb-3 flex items-center gap-3">
                <Layers className="w-5 h-5 text-emerald-400" /> Our Mission
              </h4>
              <ul className="space-y-3 text-slate-400 text-sm font-light">
                <li className="flex items-start gap-3.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /> 
                  Deliver innovative and reliable digital solutions
                </li>
                <li className="flex items-start gap-3.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /> 
                  Empower businesses through technology and data
                </li>
                <li className="flex items-start gap-3.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /> 
                  Build long-term partnerships based on trust and value
                </li>
                <li className="flex items-start gap-3.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /> 
                  Continuously innovate to create sustainable growth
                </li>
              </ul>
            </div>
          </div>

          {/* Kolom Kanan: Grid Core Values Perusahaan */}
          <div className="relative reveal-up delay-200">
            <div className="absolute inset-0 bg-emerald-600/5 blur-[120px] rounded-full animate-glow-pulse-1"></div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
              {coreValues.map((val, idx) => {
                // Mengambil komponen ikon yang sesuai secara aman berdasarkan string nama ikon
                const IconComponent = IconMap[val.iconName] || Zap;

                return (
                  <div key={idx} className="glass-panel glass-reflect rounded-2xl p-6 group cursor-default hover:-translate-y-1">
                    <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 group-hover:bg-[#00A962] group-hover:text-white transition-all duration-300">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h5 className="text-white font-bold text-sm tracking-widest mb-2">{val.title}</h5>
                    <p className="text-slate-400 text-xs leading-relaxed font-light">{val.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}