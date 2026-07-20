'use client';

import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

interface ApproachItem {
  step: string;
  title: string;
  desc: string;
}

// Data didefinisikan secara lokal agar tidak memicu error resolusi berkas pada sistem pratinjau online.
// Saat Anda menyalin kode ini ke VS Code lokal, Anda bisa memindahkannya kembali ke data.ts jika diinginkan.
const approaches: ApproachItem[] = [
  { step: "01", title: "DISCOVER", desc: "Understand business needs and challenges" },
  { step: "02", title: "DESIGN", desc: "Craft the right solution and user experience" },
  { step: "03", title: "DEVELOP", desc: "Build with quality, agility, and best practices" },
  { step: "04", title: "DELIVER", desc: "Implement solutions that drive real impact" },
  { step: "05", title: "SUPPORT", desc: "Provide ongoing optimization and support" }
];

export default function Process() {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section id="process" className="py-28 bg-[#050b14] relative border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        
        {/* Header Section */}
        <div className="reveal-up mb-20">
          <div className="inline-flex items-center gap-2 text-[#00A962] text-xs font-bold tracking-widest uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00A962]"></span>
            Our Approach
          </div>
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-4">Proven Methodology</h3>
          <p className="text-slate-400 max-w-2xl mx-auto font-light">
            Kami mengikuti metodologi yang teruji untuk memastikan pengiriman proyek yang sukses, aman, dan tepat waktu.
          </p>
        </div>

        {/* Timeline Navigation Grid */}
        <div className="relative reveal-up delay-100">
           {/* Garis Penghubung Desktop */}
           <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent z-0"></div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative z-10">
             {approaches.map((item, idx) => {
               const isActive = activeStep === idx;

               return (
                 <button 
                   key={idx} 
                   onClick={() => setActiveStep(idx)}
                   className={`group flex flex-col items-center focus:outline-none transition-all duration-300 ${
                     isActive ? 'scale-105' : 'opacity-70 hover:opacity-100'
                   }`}
                 >
                   {/* Circle Indicator */}
                   <div 
                     className={`w-24 h-24 rounded-full glass-panel flex items-center justify-center mb-6 relative transition-transform duration-500 shadow-lg ${
                       isActive ? 'border-emerald-500 shadow-emerald-500/20' : 'shadow-black/40'
                     }`}
                   >
                     <div className="absolute inset-1 rounded-full bg-[#030811] flex items-center justify-center">
                       <span className={`text-2xl font-bold transition-colors ${
                         isActive ? 'text-emerald-400' : 'text-slate-500'
                       }`}>
                         {item.step}
                       </span>
                     </div>
                   </div>

                   {/* Step Title & Brief Desc */}
                   <h4 className={`font-bold text-base mb-2 tracking-wide transition-colors ${
                     isActive ? 'text-emerald-400' : 'text-white group-hover:text-emerald-400'
                   }`}>
                     {item.title}
                   </h4>
                   <p className="text-slate-400 text-xs font-light leading-relaxed max-w-[190px]">
                     {item.desc}
                   </p>
                 </button>
               );
             })}
           </div>

           {/* Detail Panel Kartu Fase Aktif */}
           <div className="mt-12 glass-panel rounded-2xl p-8 max-w-3xl mx-auto text-left relative overflow-hidden">
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-emerald-500/5 blur-3xl rounded-full"></div>
              <span className="text-emerald-400 font-mono text-xs font-semibold tracking-wider">
                METHODOLOGY PHASE {approaches[activeStep].step}
              </span>
              <h4 className="text-white text-xl font-bold mt-2 mb-3">
                {approaches[activeStep].title}
              </h4>
              <p className="text-slate-300 text-sm font-light leading-relaxed mb-4">
                {approaches[activeStep].desc}
              </p>
              
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>PT Askara Digital Technology Quality Assurance & Delivery Model</span>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
}