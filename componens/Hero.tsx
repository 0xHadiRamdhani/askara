'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Terminal, Server, Radio } from 'lucide-react';

interface HeroProps {
  showSplash: boolean;
}

const WHATSAPP_NUMBER = "6285717171515";
const WHATSAPP_TEXT = encodeURIComponent(
  "Halo PT Askara Digital Technology,\n\nSaya mendapatkan informasi dari website Anda dan tertarik untuk berkonsultasi mengenai layanan yang ditawarkan.\n\nMohon informasi lebih lanjut.\n\nTerima kasih."
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_TEXT}`;

export default function Hero({ showSplash }: HeroProps) {
  const [parallaxOffset, setParallaxOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [activeHudTab, setActiveHudTab] = useState<'terminal' | 'radar'>('radar');
  const [terminalLogs, setTerminalLogs] = useState<string[]>([
    "Initializing Askara Systems v2.5...",
    "Neural Network Connection established.",
    "Ready to accelerate your business."
  ]);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Efek Mouse Parallax untuk gambar latar belakang gedung
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX - window.innerWidth / 2) / 60;
      const y = (e.clientY - window.innerHeight / 2) / 60;
      setParallaxOffset({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Simulasi log sistem di tab "Sys Logs" secara otomatis
  useEffect(() => {
    if (showSplash) return;
    const processNames = ["ERP Module", "AI Credit Scoring", "LMS Database Sync", "Smart Laundry IoT", "Clinic EMR Cloud"];
    const actions = ["LOADED SUCCESS", "SYNC COMPLETED", "OPTIMIZING INDEXES", "API GATEWAY OK", "THREAT SCAN CLEAN"];
    
    const interval = setInterval(() => {
      const randomProc = processNames[Math.floor(Math.random() * processNames.length)];
      const randomAction = actions[Math.floor(Math.random() * actions.length)];
      const logString = `[${new Date().toLocaleTimeString()}] ${randomProc} :: ${randomAction} (99.8% Efficiency)`;
      
      setTerminalLogs(prev => [...prev.slice(-4), logString]);
    }, 3500);

    return () => clearInterval(interval);
  }, [showSplash]);

  // Simulasi Jaringan Bola Dunia 3D (Holographic Globe Canvas)
  useEffect(() => {
    if (showSplash || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = canvas.width = canvas.offsetWidth;
    let height = canvas.height = canvas.offsetHeight;

    // Menangani perubahan ukuran layar (Resize)
    const resizeObserver = new ResizeObserver(entries => {
      for (let entry of entries) {
        width = canvas.width = entry.contentRect.width;
        height = canvas.height = entry.contentRect.height;
      }
    });
    resizeObserver.observe(canvas);

    // Pembuatan array partikel/titik pada permukaan bola dunia
    const particleCount = 45;
    const particles: Array<{ x: number; y: number; z: number; originalX: number; originalY: number; originalZ: number; size: number }> = [];

    for (let i = 0; i < particleCount; i++) {
      const theta = Math.acos(Math.random() * 2 - 1);
      const phi = Math.random() * Math.PI * 2;
      const r = Math.min(width, height) * 0.35; // Radius bola dunia

      const x = r * Math.sin(theta) * Math.cos(phi);
      const y = r * Math.sin(theta) * Math.sin(phi);
      const z = r * Math.cos(theta);

      particles.push({
        x, y, z,
        originalX: x,
        originalY: y,
        originalZ: z,
        size: 1 + Math.random() * 2
      });
    }

    let rotationY = 0;
    const rotationX = 0.3; // Kemiringan sumbu X

    const drawGlobe = () => {
      ctx.clearRect(0, 0, width, height);
      rotationY += 0.005; // Kecepatan rotasi sumbu Y

      const radY = rotationY;
      const radX = rotationX;

      const cosY = Math.cos(radY);
      const sinY = Math.sin(radY);
      const cosX = Math.cos(radX);
      const sinX = Math.sin(radX);

      // Menggambar cincin scanner konsentris luar
      ctx.strokeStyle = 'rgba(0, 169, 98, 0.06)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(width / 2, height / 2, Math.min(width, height) * 0.42, 0, Math.PI * 2);
      ctx.stroke();

      ctx.strokeStyle = 'rgba(16, 185, 129, 0.12)';
      ctx.beginPath();
      ctx.arc(width / 2, height / 2, Math.min(width, height) * 0.28, 0, Math.PI * 2);
      ctx.stroke();

      // Menggambar garis sapuan radar (radar sweep)
      const now = Date.now() * 0.002;
      ctx.strokeStyle = 'rgba(6, 182, 212, 0.15)';
      ctx.beginPath();
      ctx.moveTo(width / 2, height / 2);
      ctx.lineTo(
        width / 2 + Math.cos(now) * Math.min(width, height) * 0.42,
        height / 2 + Math.sin(now) * Math.min(width, height) * 0.42
      );
      ctx.stroke();

      // Proyeksi titik 3D ke layar 2D
      const projected: Array<{ px: number; py: number; depth: number; opacity: number; size: number }> = [];

      particles.forEach((p) => {
        // Rotasi sumbu Y
        const x1 = p.originalX * cosY - p.originalZ * sinY;
        const z1 = p.originalX * sinY + p.originalZ * cosY;

        // Rotasi sumbu X
        const y2 = p.originalY * cosX - z1 * sinX;
        const z2 = p.originalY * sinX + z1 * cosX;

        // Perspektif kamera
        const cameraDistance = 400;
        const scale = cameraDistance / (cameraDistance + z2);
        const px = width / 2 + x1 * scale;
        const py = height / 2 + y2 * scale;

        const opacity = Math.max(0.1, (cameraDistance - z2) / (cameraDistance * 1.5));

        projected.push({ px, py, depth: z2, opacity, size: p.size * scale });
      });

      // Menggambar garis jaring-jaring antar node
      ctx.lineWidth = 0.5;
      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const dx = projected[i].px - projected[j].px;
          const dy = projected[i].py - projected[j].py;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < Math.min(width, height) * 0.22) {
            const alpha = (1 - dist / (Math.min(width, height) * 0.22)) * 0.08 * projected[i].opacity * projected[j].opacity;
            ctx.strokeStyle = `rgba(6, 182, 212, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(projected[i].px, projected[i].py);
            ctx.lineTo(projected[j].px, projected[j].py);
            ctx.stroke();
          }
        }
      }

      // Menggambar lingkaran node bercahaya
      projected.forEach((p) => {
        const glowRad = p.size * 2.5;
        const grad = ctx.createRadialGradient(p.px, p.py, 0, p.px, p.py, glowRad);
        grad.addColorStop(0, `rgba(16, 185, 129, ${p.opacity})`);
        grad.addColorStop(0.4, `rgba(6, 182, 212, ${p.opacity * 0.5})`);
        grad.addColorStop(1, 'rgba(3, 8, 17, 0)');

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(p.px, p.py, glowRad, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity * 0.8})`;
        ctx.beginPath();
        ctx.arc(p.px, p.py, p.size * 0.6, 0, Math.PI * 2);
        ctx.fill();
      });

      // Garis pindai horizontal (Hologram scanline sweep)
      const scanY = ((Date.now() % 4000) / 4000) * height;
      ctx.strokeStyle = 'rgba(6, 182, 212, 0.08)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(0, scanY);
      ctx.lineTo(width, scanY);
      ctx.stroke();

      animationFrameId = requestAnimationFrame(drawGlobe);
    };

    drawGlobe();

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
    };
  }, [showSplash]);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
      {/* Gambar Latar Belakang Gedung Askara dengan Parallax */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
          alt="Askara Corporate Building" 
          className="w-full h-full object-cover object-center opacity-[0.16] mix-blend-luminosity transition-transform duration-300"
          style={{
            transform: `translate(${parallaxOffset.x}px, ${parallaxOffset.y}px) scale(1.05)`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#030811]/95 via-[#030811]/75 to-[#030811]"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-40"></div>
        
        {/* Glow Ambient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-emerald-500/10 rounded-full blur-[130px] animate-glow-pulse-1"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[550px] h-[550px] bg-teal-500/10 rounded-full blur-[150px] animate-glow-pulse-2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Kolom Kiri: Slogan Utama / Tagline */}
          <div className="lg:col-span-7 reveal-up">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/10 text-emerald-400 text-xs font-semibold uppercase tracking-widest mb-8">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Enterprise Technology Partner
            </div>
            
            <h1 className="text-4xl md:text-8xl font-extrabold text-white tracking-tight leading-[1.08] mb-8">
              INNOVATE.<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200">TRANSFORM.</span><br/>
              ACCELERATE.
            </h1>
            
            <p className="text-base md:text-xl text-slate-400 mb-10 max-w-2xl font-light leading-relaxed">
              Empowering businesses through innovative digital solutions, advanced technology, and trusted partnerships. We bridge technology and business to create sustainable value.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={WHATSAPP_URL} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="relative inline-flex items-center justify-center px-8 py-3.5 font-semibold text-slate-900 bg-white rounded-full overflow-hidden group shadow-lg shadow-white/5 transition-transform duration-300 hover:scale-[1.02]"
              >
                <span className="absolute inset-0 bg-[#00A962] transition-transform duration-500 translate-y-full group-hover:translate-y-0"></span>
                <span className="relative flex items-center gap-2 group-hover:text-slate-900 z-10 text-xs tracking-wide uppercase">
                  Konsultasi Sekarang <ArrowRight className="w-4 h-4" />
                </span>
              </a>
              <a href="#services" className="inline-flex items-center justify-center px-8 py-3.5 font-semibold text-white border border-white/10 rounded-full hover:bg-white/5 transition-all text-sm tracking-wide uppercase">
                Lihat Layanan
              </a>
            </div>
          </div>

          {/* Kolom Kanan: HUD Dashboard Terminal & Jaringan Bola Dunia 3D Canvas */}
          <div className="lg:col-span-5 reveal-up delay-200">
            <div className="bg-[#050c18]/90 border border-white/10 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-xl relative group">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-emerald-500 to-teal-400"></div>
              
              {/* Header Kontrol HUD */}
              <div className="px-5 py-3.5 border-b border-white/5 bg-white/[0.02] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/70"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70"></span>
                </div>
                <div className="flex bg-white/[0.04] p-0.5 rounded-lg border border-white/5">
                  <button 
                    onClick={() => setActiveHudTab('radar')}
                    className={`px-3 py-1 rounded text-[10px] font-semibold tracking-wider uppercase transition-all ${activeHudTab === 'radar' ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' : 'text-slate-500 hover:text-slate-300'}`}
                  >
                    Radar Map
                  </button>
                  <button 
                    onClick={() => setActiveHudTab('terminal')}
                    className={`px-3 py-1 rounded text-[10px] font-semibold tracking-wider uppercase transition-all ${activeHudTab === 'terminal' ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' : 'text-slate-500 hover:text-slate-300'}`}
                  >
                    Sys Logs
                  </button>
                </div>
              </div>

              {/* Tampilan Konten HUD */}
              <div className="p-6 font-mono text-xs min-h-[300px] flex flex-col justify-center relative">
                {activeHudTab === 'radar' && (
                  <div className="relative w-full h-[240px] flex items-center justify-center">
                    <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />
                    <div className="absolute top-2 left-2 flex flex-col gap-1 text-[9px] text-cyan-400/80 bg-slate-900/60 p-2 rounded border border-cyan-500/10 backdrop-blur-md">
                      <span className="flex items-center gap-1">
                        <Radio className="w-3 h-3 animate-pulse text-emerald-400" /> SCANNING ACTIVE
                      </span>
                      <span>AZIMUTH: 312.44°</span>
                    </div>
                  </div>
                )}

                {activeHudTab === 'terminal' && (
                  <div className="space-y-4">
                    <div className="text-slate-500 flex items-center gap-2">
                      <Server className="w-3.5 h-3.5 text-cyan-400" /> Connection: Active (SSL AES-256)
                    </div>
                    <div className="space-y-2 min-h-[140px]">
                      {terminalLogs.map((log, index) => (
                        <div 
                          key={index} 
                          className={`transition-all duration-500 text-[11px] ${index === terminalLogs.length - 1 ? 'text-emerald-400 font-bold' : 'text-slate-400 opacity-60'}`}
                        >
                          <span className="text-emerald-600 mr-1.5">&gt;</span> {log}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Footer HUD Stats */}
                <div className="pt-4 border-t border-white/5 grid grid-cols-2 gap-4 mt-auto">
                  <div className="bg-white/[0.01] border border-white/5 p-3 rounded-lg flex flex-col">
                    <span className="text-[9px] text-slate-500 uppercase tracking-widest">Active Nodes</span>
                    <span className="text-white text-base font-bold mt-1 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span> 42 / 42 Online
                    </span>
                  </div>
                  <div className="bg-white/[0.01] border border-white/5 p-3 rounded-lg flex flex-col">
                    <span className="text-[9px] text-slate-500 uppercase tracking-widest">Global Latency</span>
                    <span className="text-emerald-400 text-base font-bold mt-1">12ms (Optimized)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}