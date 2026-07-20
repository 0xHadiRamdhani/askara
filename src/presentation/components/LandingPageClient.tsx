'use client';

import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Services from './Services';
import IndustrySolutions from './IndustrySolutions';
import Process from './Process';
import Contact from './Contact';
import Footer from './Footer';
import FloatingWhatsapp from './FloatingWhatsapp';
import BackToTop from './BackToTop';
import { ValueItem, ServiceItem, SolutionItem, ApproachItem } from '../../domain/entities/types';

interface Props {
  coreValues: ValueItem[];
  services: ServiceItem[];
  industrySolutions: SolutionItem[];
  approaches: ApproachItem[];
}

export default function LandingPageClient({ coreValues, services, industrySolutions, approaches }: Props) {
  const [showSplash, setShowSplash] = useState<boolean>(true);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2400);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setScrollProgress((totalScroll / windowHeight) * 100);

      const sections = ['home', 'about', 'services', 'solutions', 'process', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el && totalScroll >= el.offsetTop - 240) {
          setActiveSection(section);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (showSplash) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll('.reveal-up').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [showSplash]);

  return (
    <div className="bg-[#030811] min-h-screen text-slate-300 font-sans relative selection:bg-emerald-500/30 selection:text-emerald-200 overflow-x-hidden">
      <style dangerouslySetInnerHTML={{__html: `
        html { scroll-behavior: smooth; }
        .bg-grid-pattern {
          background-image: linear-gradient(to right, rgba(255,255,255,0.015) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255,255,255,0.015) 1px, transparent 1px);
          background-size: 60px 60px;
        }
        @keyframes floatGlow {
          0%, 100% { transform: translateY(0px) scale(1); opacity: 0.2; }
          50% { transform: translateY(-20px) scale(1.1); opacity: 0.28; }
        }
        .animate-glow-pulse-1 { animation: floatGlow 10s infinite ease-in-out; }
        .animate-glow-pulse-2 { animation: floatGlow 14s infinite ease-in-out 2s; }
        .reveal-up { opacity: 0; transform: translateY(35px); transition: all 0.9s cubic-bezier(0.16, 1, 0.3, 1); }
        .reveal-up.active { opacity: 1; transform: translateY(0); }
        .glass-panel {
          background: rgba(255, 255, 255, 0.01);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border: 1px solid rgba(255, 255, 255, 0.03);
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .glass-panel:hover {
          background: rgba(255, 255, 255, 0.02);
          border-color: rgba(16, 185, 129, 0.18);
          box-shadow: 0 20px 50px -15px rgba(16, 185, 129, 0.1);
        }
        .glass-reflect { position: relative; overflow: hidden; }
        .glass-reflect::after {
          content: '';
          position: absolute;
          top: -50%;
          left: -60%;
          width: 30%;
          height: 200%;
          background: linear-gradient(to right, transparent, rgba(255,255,255,0.03), transparent);
          transform: rotate(30deg);
          transition: all 0.7s ease;
          pointer-events: none;
        }
        .glass-reflect:hover::after { left: 130%; }
        @keyframes splash-fade {
          0% { opacity: 1; pointer-events: all; }
          85% { opacity: 1; }
          100% { opacity: 0; pointer-events: none; visibility: hidden; }
        }
        @keyframes logo-scale {
          0% { transform: scale(0.9) translateY(10px); opacity: 0; filter: blur(6px); }
          50% { transform: scale(1.02) translateY(0px); opacity: 1; filter: blur(0px); }
          100% { transform: scale(1); opacity: 1; }
        }
        .splash-screen { animation: splash-fade 2.4s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .splash-logo { animation: logo-scale 1.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
      `}} />

      {showSplash && (
        <div className="splash-screen fixed inset-0 z-[9999] bg-[#030811] flex flex-col items-center justify-center">
          <div className="splash-logo flex flex-col items-center gap-10 max-w-xs md:max-w-md px-6 text-center">
            <div className="bg-[#050c18]/80 backdrop-blur-xl p-8 md:p-10 rounded-2xl shadow-2xl flex items-center justify-center transform hover:scale-[1.01] transition-transform duration-300 border border-cyan-500/20 shadow-[0_0_50px_rgba(6,182,212,0.25)]">
              <img src="/daruzi_space-removebg-preview.png" alt="Askara Digital Technology" className="w-56 md:w-80 h-auto object-contain select-none pointer-events-none" />
            </div>
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
              <span className="text-slate-400 text-xs font-semibold tracking-[0.3em] uppercase">Enterprise Technology Partner</span>
            </div>
          </div>
        </div>
      )}

      <div className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-600 z-[100] transition-all duration-100 ease-out" style={{ width: `${scrollProgress}%` }} />

      <Navbar activeSection={activeSection} />
      <Hero showSplash={showSplash} />
      <About coreValues={coreValues} />
      <Services services={services} />
      <IndustrySolutions industrySolutions={industrySolutions} />
      <Process approaches={approaches} />
      <Contact />
      <Footer />
      <FloatingWhatsapp />
      <BackToTop />
    </div>
  );
}
