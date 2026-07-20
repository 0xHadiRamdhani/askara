'use client';

import React, { useState } from 'react';
import { ChevronRight, Code, Bot, Smartphone, Cloud, LineChart, Database, CheckCircle2, ArrowRight } from 'lucide-react';
import { services, ServiceItem } from '../lib/data';

// Pemetaan nama string icon ke komponen Lucide React yang sesuai
const IconMap = {
  Code: Code,
  Bot: Bot,
  Smartphone: Smartphone,
  Cloud: Cloud,
  LineChart: LineChart,
  Database: Database,
};

export default function Services() {
  const [activeService, setActiveService] = useState<ServiceItem>(services[0]);

  return (
    <section id="services" className="py-28 relative bg-[#050b14] border-y border-white/5">
      <div className="absolute inset-0 bg-grid-pattern opacity-25"></div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="mb-20 reveal-up text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 text-cyan-400 text-xs font-bold tracking-widest uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
            Our Services
          </div>
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-4">End-to-end digital solutions</h3>
          <p className="text-slate-400 font-light">Tailored to your business needs. Designed for scale, security, and exceptional performance.</p>
        </div>

        {/* Interactive Dashboard Grid */}
        <div className="grid lg:grid-cols-12 gap-8 reveal-up delay-100">
          
          {/* Sisi Kiri: Daftar Tombol Selektor Layanan */}
          <div className="lg:col-span-5 flex flex-col gap-2.5">
            {services.map((service) => {
              const IconComponent = IconMap[service.iconName] || Code;
              const isActive = activeService.id === service.id;

              return (
                <button
                  key={service.id}
                  onClick={() => setActiveService(service)}
                  className={`text-left p-5 rounded-2xl transition-all duration-300 flex items-center justify-between group ${
                    isActive 
                      ? 'bg-cyan-500/10 border border-cyan-500/30 shadow-lg shadow-cyan-950/20' 
                      : 'glass-panel border-transparent hover:border-white/5'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-2.5 rounded-lg transition-colors ${
                      isActive 
                        ? 'text-cyan-400 bg-cyan-500/10' 
                        : 'text-slate-400 bg-white/5 group-hover:text-white'
                    }`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className={`font-semibold text-base transition-colors ${
                      isActive ? 'text-white' : 'text-slate-400 group-hover:text-slate-200'
                    }`}>
                      {service.title}
                    </span>
                  </div>
                  <ChevronRight className={`w-5 h-5 transition-transform ${
                    isActive ? 'text-cyan-400 translate-x-1' : 'text-slate-600 group-hover:text-slate-400'
                  }`} />
                </button>
              );
            })}
          </div>

          {/* Sisi Kanan: Panel Detail Aktif dengan Visualisasi Desain */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-3xl p-8 lg:p-12 h-full relative overflow-hidden flex flex-col justify-between border-cyan-500/10 shadow-[0_0_40px_rgba(6,182,212,0.05)]">
              
              {/* Gambar Background dengan Masking Gradient */}
              <div className="absolute inset-0 z-0 select-none pointer-events-none overflow-hidden rounded-3xl">
                <img 
                  src={activeService.imageUrl} 
                  alt={activeService.title} 
                  className="w-full h-full object-cover object-center opacity-15 mix-blend-luminosity scale-100 transition-all duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050b14] via-[#050b14]/90 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#050b14] via-transparent to-transparent"></div>
              </div>

              {/* Konten Detail Layanan */}
              <div className="relative z-10 animate-fade-in flex flex-col h-full justify-between" key={activeService.id}>
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-400 to-emerald-500 flex items-center justify-center text-slate-955 mb-8 shadow-lg shadow-cyan-500/20">
                    {React.createElement(IconMap[activeService.iconName] || Code, { className: "w-6 h-6 text-white" })}
                  </div>
                  <h4 className="text-3xl font-bold text-white mb-4">{activeService.title}</h4>
                  <p className="text-slate-300 text-base leading-relaxed mb-8 font-light">
                    {activeService.desc}
                  </p>

                  {/* Manfaat & Industri Sasaran */}
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <span className="block text-[11px] font-bold text-cyan-400 uppercase tracking-widest mb-3">Key Benefits</span>
                      <ul className="space-y-2">
                        {activeService.benefits.map((b, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-slate-300 text-xs">
                            <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                            <span className="font-light">{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <span className="block text-[11px] font-bold text-cyan-400 uppercase tracking-widest mb-3">Target Industry</span>
                      <p className="text-slate-300 text-xs font-light leading-relaxed">{activeService.industries}</p>
                    </div>
                  </div>

                  {/* Arsitektur Solusi & Nilai Bisnis */}
                  <div className="border-t border-white/5 pt-6">
                    <span className="block text-[11px] font-bold text-cyan-400 uppercase tracking-widest mb-2">Our Solutions</span>
                    <p className="text-slate-300 text-xs font-light leading-relaxed mb-4">{activeService.solutions}</p>
                    <span className="block text-[11px] font-bold text-cyan-400 uppercase tracking-widest mb-2">Value to Client</span>
                    <p className="text-slate-300 text-xs font-light leading-relaxed">{activeService.value}</p>
                  </div>
                </div>
                
                {/* Panel Footer Detail Layanan */}
                <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between flex-wrap gap-4">
                   <div className="flex items-center gap-6">
                     <div className="flex flex-col">
                       <span className="text-white font-semibold text-xs uppercase tracking-wider">Enterprise Grade</span>
                       <span className="text-slate-500 text-[10px] mt-0.5">Secure & Reliable</span>
                     </div>
                     <div className="w-px h-8 bg-white/10"></div>
                     <div className="flex flex-col">
                       <span className="text-white font-semibold text-xs uppercase tracking-wider">Custom Blueprint</span>
                       <span className="text-slate-500 text-[10px] mt-0.5">Tailored Architecture</span>
                     </div>
                   </div>

                   <a 
                     href={WHATSAPP_URL} 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold text-xs tracking-wider uppercase group transition-colors"
                   >
                      Konsultasi Layanan Ini <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                   </a>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}