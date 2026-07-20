'use client';

import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  // Memantau aktivitas scroll untuk menampilkan atau menyembunyikan tombol
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Fungsi untuk menggeser halaman kembali ke atas secara mulus
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 p-3.5 rounded-full bg-slate-900 border border-white/10 text-white shadow-2xl transition-all duration-500 z-50 hover:bg-[#00A962] hover:text-slate-950 hover:border-[#00A962] hover:scale-105 ${
        isVisible 
          ? 'translate-y-0 opacity-100 pointer-events-auto' 
          : 'translate-y-16 opacity-0 pointer-events-none'
      }`}
      aria-label="Back to top"
    >
      <ArrowUp className="w-4 h-4 font-bold" />
    </button>
  );
}