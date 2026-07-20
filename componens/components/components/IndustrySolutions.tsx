'use client';

import React, { useState } from 'react';
import { 
  Factory, GraduationCap, Stethoscope, Hotel, Utensils, 
  Shirt, Users, Store, Landmark, BrainCircuit, CheckCircle2, 
  Cpu, Zap, ExternalLink, Globe 
} from 'lucide-react';

// --- CATATAN UNTUK VS CODE LOKAL ---
// Saat Anda menyalin kode ini ke Visual Studio Code lokal, Anda bisa mengaktifkan kembali baris impor di bawah ini
// dan menghapus konstanta serta antarmuka `industrySolutions` lokal agar proyek Anda tetap modular:
//
// import { industrySolutions, SolutionItem } from '@/lib/data';

interface SolutionItem {
  id: string;
  title: string;
  subtitle: string;
  iconName: 'Factory' | 'GraduationCap' | 'Stethoscope' | 'Hotel' | 'Utensils' | 'Shirt' | 'Users' | 'Store' | 'Landmark' | 'BrainCircuit';
  imageUrl: string;
  features: string[];
  benefit: string;
  badge: string;
}

const industrySolutions: SolutionItem[] = [
  { 
    id: 'mfg', 
    title: "Manufacturing ERP", 
    subtitle: "Smart Manufacturing Solutions", 
    iconName: "Factory",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop",
    features: ["Production Management", "Inventory & Warehouse", "Purchasing & Procurement", "Quality Control", "Maintenance Management", "Finance & Accounting", "Supply Chain Management", "Executive Dashboard", "AI Production Forecasting"],
    benefit: "Higher Productivity, Reduced Operational Cost, Real-Time Monitoring",
    badge: "Smart Industry 4.0"
  },
  { 
    id: 'edu', 
    title: "Education System", 
    subtitle: "Smart Education Platform", 
    iconName: "GraduationCap",
    imageUrl: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1200&auto=format&fit=crop",
    features: ["Student Information System", "Learning Management System (LMS)", "Academic Management", "Smart Attendance", "Parent Portal", "Financial Management", "Digital Library", "AI Education Assistant"],
    benefit: "Modern Learning Experience, Better Academic Management, Increased Parent Engagement",
    badge: "Next-Gen LMS"
  },
  { 
    id: 'clinic', 
    title: "Clinic & Beauty Management", 
    subtitle: "Smart Clinic Ecosystem", 
    iconName: "Stethoscope",
    imageUrl: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200&auto=format&fit=crop",
    features: ["Patient Management", "Appointment Scheduling", "Electronic Medical Records", "Treatment History", "Membership Program", "CRM & Loyalty System", "Inventory & Pharmacy", "Financial Dashboard"],
    benefit: "Better Patient Experience, Improved Customer Retention, Operational Efficiency",
    badge: "Healthcare Tech"
  },
  { 
    id: 'hotel', 
    title: "Hotel Management", 
    subtitle: "Integrated Hotel Solutions", 
    iconName: "Hotel",
    imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop",
    features: ["Reservation & Booking Engine", "Front Office Management", "Housekeeping Management", "F&B/Restaurant Management", "Channel Manager Integration", "Point of Sale (POS)", "Revenue Management", "Guest Portal & Feedback", "Finance & Reporting"],
    benefit: "Better Guest Experience, Increased Occupancy Rate, Higher Revenue & Profitability",
    badge: "Hospitality Cloud"
  },
  { 
    id: 'resto', 
    title: "Resto Management", 
    subtitle: "Smart Restaurant Solutions", 
    iconName: "Utensils",
    imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
    features: ["POS & Order Management", "Menu & Recipe Management", "Inventory & Stock Control", "Kitchen Display System (KDS)", "Table & Reservation Management", "Online Order Integration", "CRM & Loyalty Program", "Sales & Analytics Dashboard"],
    benefit: "Faster Service, Food Cost Control, Better Customer Satisfaction",
    badge: "Food & Beverage Tech"
  },
  { 
    id: 'laundry', 
    title: "Laundry Management", 
    subtitle: "Smart Laundry Solutions", 
    iconName: "Shirt",
    imageUrl: "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?q=80&w=1200&auto=format&fit=crop",
    features: ["Order Management", "Customer & Membership", "Pickup & Delivery Management", "Inventory & Supplies", "Machine & Asset Management", "Staff & Performance", "Billing & Payment", "Financial & Reporting"],
    benefit: "Operational Efficiency, Better Customer Service, Increased Profitability",
    badge: "Service Automation"
  },
  { 
    id: 'hr', 
    title: "Outsourcing Management", 
    subtitle: "Workforce Solution", 
    iconName: "Users",
    imageUrl: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1200&auto=format&fit=crop",
    features: ["Employee Management", "Attendance & Time Tracking", "Payroll & Compensation", "Contract & Project Management", "Performance Management", "Training & Development", "Billing & Invoicing", "Compliance & Reporting"],
    benefit: "Optimized Workforce, Cost Efficiency, Better Service Quality",
    badge: "Workforce HR"
  },
  { 
    id: 'franchise', 
    title: "Franchise Management", 
    subtitle: "Grow Your Franchise Business", 
    iconName: "Store",
    imageUrl: "https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=1200&auto=format&fit=crop",
    features: ["Franchisee Management", "Outlet Management", "Royalty & Fee Management", "Inventory & Supply Chain", "Marketing & Promotion", "Sales & Performance", "Reporting & Analytics", "Document & Compliance"],
    benefit: "Business Expansion, Standardized Operations, Higher Profitability",
    badge: "Scale & Franchise"
  },
  { 
    id: 'bpr', 
    title: "BPR / Fintech System", 
    subtitle: "Digital Financial Solutions", 
    iconName: "Landmark",
    imageUrl: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=1200&auto=format&fit=crop",
    features: ["Loan Management System", "Credit Analysis", "Collection Management", "Member Management", "Digital Approval Workflow", "Customer Portal", "Financial Reporting", "AI Credit Scoring"],
    benefit: "Faster Approval Process, Better Risk Management, Improved Collection",
    badge: "Fintech Enterprise"
  },
  { 
    id: 'ai_emp', 
    title: "AI Digital Employee", 
    subtitle: "Next Generation AI Workforce", 
    iconName: "BrainCircuit",
    imageUrl: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1200&auto=format&fit=crop",
    features: ["AI Customer Service", "AI Virtual Receptionist", "AI Sales Assistant", "AI HR Assistant", "AI Collection Assistant", "AI Knowledge Management", "AI Data Analyst", "AI Executive Assistant"],
    benefit: "24/7 Availability, Reduced Operational Cost, Increased Productivity",
    badge: "Autonomous AI"
  }
];

// Pemetaan string nama ikon ke komponen Lucide React yang sesuai
const IconMap = {
  Factory: Factory,
  GraduationCap: GraduationCap,
  Stethoscope: Stethoscope,
  Hotel: Hotel,
  Utensils: Utensils,
  Shirt: Shirt,
  Users: Users,
  Store: Store,
  Landmark: Landmark,
  BrainCircuit: BrainCircuit,
};

const WHATSAPP_NUMBER = "6285717171515";
const WHATSAPP_TEXT = encodeURIComponent(
  "Halo PT Askara Digital Technology,\n\nSaya mendapatkan informasi dari website Anda dan tertarik untuk berkonsultasi mengenai solusi industri yang ditawarkan.\n\nMohon informasi lebih lanjut.\n\nTerima kasih."
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_TEXT}`;

export default function IndustrySolutions() {
  const [activeSolution, setActiveSolution] = useState<SolutionItem>(industrySolutions[0]);

  return (
    <section id="solutions" className="py-28 bg-[#030811] relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header Bagian Atas */}
        <div className="mb-14 reveal-up flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold tracking-widest uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
              Industry Solutions
            </div>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
              One Technology Partner <br/>For Every Industry
            </h3>
          </div>
          <p className="text-slate-400 max-w-sm font-light leading-relaxed">
            Solusi teknologi terintegrasi dari ERP, AI, hingga Aplikasi Enterprise spesifik sesuai industri Anda untuk otomatisasi proses bisnis yang efisien.
          </p>
        </div>

        {/* Panel Utama Kombinasi Glassmorphism & Hologram */}
        <div className="glass-panel rounded-3xl border border-white/5 overflow-hidden reveal-up delay-100 flex flex-col lg:flex-row border-cyan-500/10">
          
          {/* Sidebar Navigasi Solusi Industri (Kiri) */}
          <div className="w-full lg:w-1/3 border-b lg:border-b-0 lg:border-r border-white/5 bg-white/[0.01] h-[350px] lg:h-[550px] overflow-y-auto custom-scrollbar">
            {industrySolutions.map((sol) => {
              const IconComponent = IconMap[sol.iconName] || BrainCircuit;
              const isActive = activeSolution.id === sol.id;

              return (
                <button
                  key={sol.id}
                  onClick={() => setActiveSolution(sol)}
                  className={`w-full text-left p-5 transition-all duration-200 border-l-2 flex items-center gap-3.5 ${
                    isActive 
                      ? 'bg-white/[0.03] border-cyan-400' 
                      : 'border-transparent hover:bg-white/[0.01]'
                  }`}
                >
                  <div className={`p-2 rounded-lg ${isActive ? 'text-cyan-400 bg-cyan-400/10' : 'text-slate-500'}`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className={`font-semibold text-sm ${isActive ? 'text-white' : 'text-slate-400'}`}>
                      {sol.title}
                    </h4>
                    <p className="text-[11px] text-slate-500 mt-0.5">{sol.subtitle}</p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Area Konten Dinamis Berlatar Belakang Gambar (Kanan) */}
          <div className="w-full lg:w-2/3 relative flex flex-col justify-between overflow-hidden min-h-[450px] lg:min-h-[550px] bg-gradient-to-br from-transparent to-[#030811]">
             
             {/* Gambar Background dengan Masking Blend Mode */}
             <div className="absolute inset-0 z-0 select-none pointer-events-none">
               <img 
                 src={activeSolution.imageUrl} 
                 alt={activeSolution.title} 
                 className="w-full h-full object-cover object-center opacity-25 mix-blend-luminosity scale-100 transition-all duration-700" 
               />
               <div className="absolute inset-0 bg-gradient-to-r from-[#030811] via-[#030811]/90 to-transparent"></div>
               <div className="absolute inset-0 bg-gradient-to-t from-[#030811] via-transparent to-transparent"></div>
             </div>

             {/* Header Detail Atas */}
             <div className="relative z-10 p-8 lg:p-10 flex justify-between items-start border-b border-white/5 bg-[#030811]/45 backdrop-blur-sm">
               <div>
                 <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-semibold uppercase tracking-wider mb-2">
                   {activeSolution.badge}
                 </span>
                 <h3 className="text-2xl lg:text-3xl font-bold text-white leading-tight">{activeSolution.title}</h3>
               </div>
               <div className="text-cyan-400 mt-1">
                 {React.createElement(IconMap[activeSolution.iconName] || BrainCircuit, { className: "w-8 h-8" })}
               </div>
             </div>

             {/* Detail Fitur & Spesifikasi Jaringan */}
             <div className="relative z-10 p-8 lg:p-10 grid md:grid-cols-2 gap-8 flex-grow">
               <div>
                 <span className="block text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-3.5 flex items-center gap-2">
                   <Cpu className="w-3.5 h-3.5 text-cyan-400"/> System Modules
                 </span>
                 <ul className="grid grid-cols-1 gap-2.5">
                   {activeSolution.features.map((feature, idx) => (
                     <li key={idx} className="flex items-start gap-2.5 text-slate-300 text-xs">
                       <CheckCircle2 className="w-4 h-4 text-emerald-500/70 shrink-0 mt-0.5" />
                       <span className="font-light">{feature}</span>
                     </li>
                   ))}
                 </ul>
               </div>
               
               <div className="flex flex-col justify-between gap-6">
                 {/* Manfaat Utama */}
                 <div className="glass-panel rounded-2xl p-6 bg-cyan-950/5 border-cyan-500/10 shadow-lg shadow-black/20">
                   <span className="block text-[11px] font-bold text-cyan-400 uppercase tracking-widest mb-3.5 flex items-center gap-2">
                     <Zap className="w-3.5 h-3.5"/> Core Value & Benefit
                   </span>
                   <p className="text-slate-200 text-sm font-light leading-relaxed">
                     {activeSolution.benefit}
                   </p>
                 </div>

                 {/* Tombol Hubungi Tim Ahli */}
                 <a 
                   href={WHATSAPP_URL} 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="inline-flex items-center justify-center gap-2.5 w-full bg-[#00A962] hover:bg-emerald-500 text-slate-955 font-bold py-3.5 px-5 rounded-xl transition-all text-xs tracking-wider uppercase shadow-lg shadow-emerald-500/10"
                 >
                   Hubungi Tech Consultant <ExternalLink className="w-3.5 h-3.5 text-slate-955"/>
                 </a>
               </div>
             </div>

             {/* Indikator Keamanan Sistem */}
             <div className="relative z-10 px-8 py-3.5 bg-white/[0.01] border-t border-white/5 flex justify-between items-center text-[10px] text-slate-500 tracking-wider">
               <span>INTEGRATED • REAL-TIME • SECURE</span>
               <span className="flex items-center gap-1"><Globe className="w-3 h-3 text-cyan-500"/> Askara Enterprise Network</span>
             </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}