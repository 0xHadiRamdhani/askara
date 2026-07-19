'use client';

import React, { useState, useEffect, useRef } from 'react';
import { 
  Menu, X, ChevronRight, Code, Bot, Smartphone, Cloud, 
  LineChart, Database, Factory, GraduationCap, Stethoscope, Hotel, Utensils, 
  Shirt, Users, Store, Landmark, BrainCircuit, Target, ShieldCheck, Zap, Handshake, 
  ArrowRight, ArrowUp, MapPin, Mail, Phone, ExternalLink, CheckCircle2, Cpu, Globe, Layers, MessageSquare, Terminal, Server, Sparkles, Radio
} from 'lucide-react';

// --- HUBUNGAN LAYANAN WHATSAPP PERUSAHAAN ---
const WHATSAPP_NUMBER = "6285717171515";
const WHATSAPP_TEXT = encodeURIComponent(
  "Halo PT Askara Digital Technology,\n\nSaya mendapatkan informasi dari website Anda dan tertarik untuk berkonsultasi mengenai layanan yang ditawarkan.\n\nMohon informasi lebih lanjut.\n\nTerima kasih."
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_TEXT}`;

// --- STRUKTUR DATA STATIS (DATA SCHEMA & INTEGRATION) ---

interface ValueItem {
  title: string;
  desc: string;
  iconName: 'Handshake' | 'Zap' | 'ShieldCheck' | 'Target';
}

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

interface ServiceItem {
  id: string;
  title: string;
  desc: string;
  iconName: 'Code' | 'Bot' | 'Smartphone' | 'Cloud' | 'LineChart' | 'Database';
  imageUrl: string;
  benefits: string[];
  solutions: string;
  value: string;
  industries: string;
}

const services: ServiceItem[] = [
  { 
    id: 'dev', 
    title: "Enterprise Software Development", 
    desc: "Custom software solutions to drive innovation and growth. Kami merancang arsitektur software berskala besar yang siap mengakomodasi kompleksitas operasional bisnis Anda.", 
    iconName: "Code",
    imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop",
    benefits: ["Arsitektur Skalabel & Andal", "Kode Bersih dengan Dokumentasi Lengkap", "Sistem Keamanan Berstandar Enterprise"],
    solutions: "Pengembangan Core Systems, Custom ERP, Integrasi API Pihak Ketiga, Legacy System Modernization.",
    value: "Meningkatkan kontrol operasional dan efisiensi alur kerja lintas divisi perusahaan secara mutlak.",
    industries: "Manufaktur, Layanan Finansial, Logistik, Waralaba/Franchise"
  },
  { 
    id: 'ai', 
    title: "AI & Automation", 
    desc: "Intelligent automation to optimize processes and accelerate results. Integrasi kecerdasan buatan untuk mengotomatisasi pekerjaan rutin dan meningkatkan efisiensi.", 
    iconName: "Bot",
    imageUrl: "https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=1200&auto=format&fit=crop",
    benefits: ["Otomatisasi Alur Kerja 24/7", "Reduksi Biaya Operasional Hingga 40%", "Keputusan Bisnis Lebih Cepat"],
    solutions: "AI Digital Employee (Customer Service, Sales, HR, Data Analyst), AI Credit Scoring, AI Production Forecasting.",
    value: "Mengurangi kesalahan manusia (human-error) dan memastikan responsivitas bisnis tanpa jeda waktu.",
    industries: "Fintech, Restoran, Perhotelan, Klinik & Kecantikan"
  },
  { 
    id: 'apps', 
    title: "Web & Mobile Apps", 
    desc: "Scalable and intuitive applications built for exceptional user experiences. Desain aplikasi modern dengan performa tinggi yang disukai pengguna.", 
    iconName: "Smartphone",
    imageUrl: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&auto=format&fit=crop",
    benefits: ["Antarmuka Sangat Intuitif (UX Premium)", "Performa Cepat & Responsif", "Lintas Platform (iOS, Android, Web)"],
    solutions: "Aplikasi Pelanggan, Portal Orang Tua (Sistem Edukasi), Aplikasi Pemesanan Online, Sistem Loyalitas (CRM).",
    value: "Memperkuat retensi pengguna dan memperluas jangkauan pasar digital bisnis Anda.",
    industries: "Pendidikan, Waralaba, Restoran, Jasa Laundry"
  },
  { 
    id: 'cloud', 
    title: "Cloud Infrastructure", 
    desc: "Secure, scalable, and reliable cloud solutions that power your business. Solusi penataan server berbasis Cloud maupun On-Premise dengan tingkat keamanan tinggi.", 
    iconName: "Cloud",
    imageUrl: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=1200&auto=format&fit=crop",
    benefits: ["Ketersediaan Tinggi (High Availability 99.9%)", "Perlindungan Enkripsi Data Maksimal", "Fleksibilitas Skalabilitas Kapasitas"],
    solutions: "Migrasi Cloud, Arsitektur Hybrid Cloud, Manajemen Server On-Premise, Rencana Disaster Recovery.",
    value: "Keamanan data aset digital terjamin dan performa sistem stabil dalam kondisi beban trafik tinggi.",
    industries: "Lembaga Keuangan, Edukasi, Outsourcing, Manufaktur"
  },
  { 
    id: 'consulting', 
    title: "IT Consulting", 
    desc: "Strategic advisory and technology consulting to achieve your goals. Pendampingan perencanaan arsitektur teknologi jangka panjang sesuai visi bisnis.", 
    iconName: "LineChart",
    imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop",
    benefits: ["Kesesuaian Teknologi dengan Model Bisnis", "Efisiensi Belanja Anggaran IT", "Rekomendasi Arsitektur Masa Depan"],
    solutions: "Audit Sistem Informasi, Konsultasi Transformasi Digital, Desain Cetak Biru (IT Blueprint) Perusahaan.",
    value: "Menghindari kesalahan investasi infrastruktur teknologi yang tidak efisien di masa depan.",
    industries: "Semua Sektor Industri Enterprise & Startup"
  },
  { 
    id: 'data', 
    title: "Data & Business Intelligence", 
    desc: "Transform data into actionable insights to make smarter business decisions. Pengumpulan, pengolahan, dan visualisasi data bisnis penting dalam satu dashboard pintar.", 
    iconName: "Database",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    benefits: ["Visualisasi Dashboard Eksekutif Real-Time", "Analisis Tren Perilaku Pasar", "Pemberitahuan Data Anomali Otomatis"],
    solutions: "Integrasi Data Warehouse, Pembuatan Laporan Finansial Interaktif, Desain Dashboard Analitik Divisi.",
    value: "Mempermudah pengambilan keputusan strategis berbasis data aktual yang presisi.",
    industries: "Perhotelan, Finansial, Manufaktur, Jasa Retail"
  }
];

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

const approaches = [
  { step: "01", title: "DISCOVER", desc: "Understand business needs and challenges" },
  { step: "02", title: "DESIGN", desc: "Craft the right solution and user experience" },
  { step: "03", title: "DEVELOP", desc: "Build with quality, agility, and best practices" },
  { step: "04", title: "DELIVER", desc: "Implement solutions that drive real impact" },
  { step: "05", title: "SUPPORT", desc: "Provide ongoing optimization and support" }
];

// --- PEMETAAN IKON ---
const IconMap = {
  Handshake: Handshake,
  Zap: Zap,
  ShieldCheck: ShieldCheck,
  Target: Target,
  Code: Code,
  Bot: Bot,
  Smartphone: Smartphone,
  Cloud: Cloud,
  LineChart: LineChart,
  Database: Database,
  Factory: Factory,
  GraduationCap: GraduationCap,
  Stethoscope: Stethoscope,
  Hotel: Hotel,
  Utensils: Utensils,
  Shirt: Shirt,
  Users: Users,
  Store: Store,
  Landmark: Landmark,
  BrainCircuit: BrainCircuit
};

// --- SUBKOMPONEN 1: NAVBAR ---
function Navbar({ activeSection }: { activeSection: string }) {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-xl border-b border-slate-200/80 py-3 shadow-lg shadow-slate-900/5' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="#home" className="flex items-center gap-3 group">
            <div className={`rounded-xl px-4 py-2 transition-all duration-300 shadow-md ${isScrolled ? 'bg-slate-955/90 border border-cyan-500/20 shadow-cyan-955/15' : 'bg-slate-950/70 border border-white/10 shadow-black/25'}`}>
              <img src="/daruzi_space-removebg-preview.png" alt="Askara Digital Technology" className="h-12 md:h-14 w-auto object-contain select-none pointer-events-none" />
            </div>
          </a>
          <div className={`hidden lg:flex items-center space-x-1 border rounded-full p-1.5 backdrop-blur-md transition-all duration-300 ${isScrolled ? 'bg-slate-100/80 border-slate-200' : 'bg-white/[0.02] border-white/5'}`}>
            {['Home', 'About', 'Services', 'Solutions', 'Process'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${activeSection === item.toLowerCase() ? (isScrolled ? 'text-white bg-[#031533]' : 'text-white bg-white/10 shadow-inner') : (isScrolled ? 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50' : 'text-slate-400 hover:text-white hover:bg-white/[0.03]')}`}
              >
                {item}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={`relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-semibold rounded-full group transition-all duration-300 shadow-md ${isScrolled ? 'bg-[#031533] hover:bg-[#042250] text-white' : 'bg-[#00A962] hover:bg-[#00a962]/90 text-white shadow-[#00A962]/20'}`}>
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#00A962] rounded-full group-hover:w-60 group-hover:h-60"></span>
              <span className="relative flex items-center gap-2 text-xs tracking-wider uppercase">Hubungi Kami <ArrowRight className="w-4 h-4 font-bold" /></span>
            </a>
          </div>
          <button className={`lg:hidden transition-colors duration-300 ${isScrolled ? 'text-[#031533]' : 'text-white'}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      <div className={`lg:hidden absolute top-full left-0 w-full border-b transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-[360px] py-4' : 'max-h-0 py-0'} ${isScrolled ? 'bg-white/95 backdrop-blur-2xl border-slate-200/80 shadow-lg' : 'bg-[#030811]/95 backdrop-blur-2xl border-white/5'}`}>
        <div className="flex flex-col px-6 space-y-2">
          {['Home', 'About', 'Services', 'Solutions', 'Process', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsMenuOpen(false)} className={`text-sm font-semibold tracking-wider uppercase py-2.5 border-b last:border-0 ${isScrolled ? 'text-slate-700 hover:text-emerald-600 border-slate-100' : 'text-slate-300 hover:text-emerald-400 border-white/5'}`}>{item}</a>
          ))}
        </div>
      </div>
    </nav>
  );
}

// --- SUBKOMPONEN 2: HERO ---
function Hero({ showSplash }: { showSplash: boolean }) {
  const [parallaxOffset, setParallaxOffset] = useState({ x: 0, y: 0 });
  const [activeHudTab, setActiveHudTab] = useState<'radar' | 'terminal'>('radar');
  const [terminalLogs, setTerminalLogs] = useState<string[]>([
    "Initializing Askara Systems v2.5...",
    "Neural Network Connection established.",
    "Ready to accelerate your business."
  ]);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setParallaxOffset({
        x: (e.clientX - window.innerWidth / 2) / 60,
        y: (e.clientY - window.innerHeight / 2) / 60,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    if (showSplash) return;
    const processNames = ["ERP Module", "AI Credit Scoring", "LMS Database Sync", "Smart Laundry IoT", "Clinic EMR Cloud"];
    const actions = ["LOADED SUCCESS", "SYNC COMPLETED", "OPTIMIZING INDEXES", "API GATEWAY OK", "THREAT SCAN CLEAN"];
    const interval = setInterval(() => {
      const randomProc = processNames[Math.floor(Math.random() * processNames.length)];
      const randomAction = actions[Math.floor(Math.random() * actions.length)];
      setTerminalLogs(prev => [...prev.slice(-4), `[${new Date().toLocaleTimeString()}] ${randomProc} :: ${randomAction} (99.8% Efficiency)`]);
    }, 3500);
    return () => clearInterval(interval);
  }, [showSplash]);

  useEffect(() => {
    if (showSplash || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = canvas.width = canvas.offsetWidth;
    let height = canvas.height = canvas.offsetHeight;

    const resizeObserver = new ResizeObserver(entries => {
      for (let entry of entries) {
        width = canvas.width = entry.contentRect.width;
        height = canvas.height = entry.contentRect.height;
      }
    });
    resizeObserver.observe(canvas);

    const particles: Array<{ x: number; y: number; z: number; originalX: number; originalY: number; originalZ: number; size: number }> = [];
    for (let i = 0; i < 45; i++) {
      const theta = Math.acos(Math.random() * 2 - 1);
      const phi = Math.random() * Math.PI * 2;
      const r = Math.min(width, height) * 0.35;
      particles.push({
        x: r * Math.sin(theta) * Math.cos(phi),
        y: r * Math.sin(theta) * Math.sin(phi),
        z: r * Math.cos(theta),
        originalX: r * Math.sin(theta) * Math.cos(phi),
        originalY: r * Math.sin(theta) * Math.sin(phi),
        originalZ: r * Math.cos(theta),
        size: 1 + Math.random() * 2
      });
    }

    let rotationY = 0;
    const drawGlobe = () => {
      ctx.clearRect(0, 0, width, height);
      rotationY += 0.005;
      const cosY = Math.cos(rotationY);
      const sinY = Math.sin(rotationY);
      const cosX = Math.cos(0.3);
      const sinX = Math.sin(0.3);

      ctx.strokeStyle = 'rgba(0, 169, 98, 0.06)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(width / 2, height / 2, Math.min(width, height) * 0.42, 0, Math.PI * 2);
      ctx.stroke();

      ctx.strokeStyle = 'rgba(16, 185, 129, 0.12)';
      ctx.beginPath();
      ctx.arc(width / 2, height / 2, Math.min(width, height) * 0.28, 0, Math.PI * 2);
      ctx.stroke();

      const now = Date.now() * 0.002;
      ctx.strokeStyle = 'rgba(6, 182, 212, 0.15)';
      ctx.beginPath();
      ctx.moveTo(width / 2, height / 2);
      ctx.lineTo(width / 2 + Math.cos(now) * Math.min(width, height) * 0.42, height / 2 + Math.sin(now) * Math.min(width, height) * 0.42);
      ctx.stroke();

      const projected: Array<{ px: number; py: number; depth: number; opacity: number; size: number }> = [];
      particles.forEach((p) => {
        const x1 = p.originalX * cosY - p.originalZ * sinY;
        const z1 = p.originalX * sinY + p.originalZ * cosY;
        const y2 = p.originalY * cosX - z1 * sinX;
        const z2 = p.originalY * sinX + z1 * cosX;
        const scale = 400 / (400 + z2);
        projected.push({
          px: width / 2 + x1 * scale,
          py: height / 2 + y2 * scale,
          depth: z2,
          opacity: Math.max(0.1, (400 - z2) / 600),
          size: p.size * scale
        });
      });

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
      });

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
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" alt="Askara Corporate Building" className="w-full h-full object-cover object-center opacity-[0.16] mix-blend-luminosity transition-transform duration-300" style={{ transform: `translate(${parallaxOffset.x}px, ${parallaxOffset.y}px) scale(1.05)` }} />
        <div className="absolute inset-0 bg-gradient-to-b from-[#030811]/95 via-[#030811]/75 to-[#030811]"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-40"></div>
        <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-emerald-500/10 rounded-full blur-[130px] animate-glow-pulse-1"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[550px] h-[550px] bg-teal-500/10 rounded-full blur-[150px] animate-glow-pulse-2"></div>
      </div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 reveal-up">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/10 text-emerald-400 text-xs font-semibold uppercase tracking-widest mb-8">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>Enterprise Technology Partner
            </div>
            <h1 className="text-4xl md:text-8xl font-extrabold text-white tracking-tight leading-[1.08] mb-8">
              INNOVATE.<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200">TRANSFORM.</span><br />ACCELERATE.
            </h1>
            <p className="text-base md:text-xl text-slate-400 mb-10 max-w-2xl font-light leading-relaxed">
              Empowering businesses through innovative digital solutions, advanced technology, and trusted partnerships. We bridge technology and business to create sustainable value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="relative inline-flex items-center justify-center px-8 py-3.5 font-semibold text-slate-900 bg-white rounded-full overflow-hidden group shadow-lg shadow-white/5 transition-transform duration-300 hover:scale-[1.02]">
                <span className="absolute inset-0 bg-[#00A962] transition-transform duration-500 translate-y-full group-hover:translate-y-0"></span>
                <span className="relative flex items-center gap-2 group-hover:text-slate-900 z-10 text-xs tracking-wide uppercase">Konsultasi Sekarang <ArrowRight className="w-4 h-4" /></span>
              </a>
              <a href="#services" className="inline-flex items-center justify-center px-8 py-3.5 font-semibold text-white border border-white/10 rounded-full hover:bg-white/5 transition-all text-sm tracking-wide uppercase">Lihat Layanan</a>
            </div>
          </div>
          <div className="lg:col-span-5 reveal-up delay-200">
            <div className="bg-[#050c18]/90 border border-white/10 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-xl relative group">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-emerald-500 to-teal-400"></div>
              <div className="px-5 py-3.5 border-b border-white/5 bg-white/[0.02] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/70"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70"></span>
                </div>
                <div className="flex bg-white/[0.04] p-0.5 rounded-lg border border-white/5">
                  <button onClick={() => setActiveHudTab('radar')} className={`px-3 py-1 rounded text-[10px] font-semibold tracking-wider uppercase transition-all ${activeHudTab === 'radar' ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' : 'text-slate-500 hover:text-slate-300'}`}>Radar Map</button>
                  <button onClick={() => setActiveHudTab('terminal')} className={`px-3 py-1 rounded text-[10px] font-semibold tracking-wider uppercase transition-all ${activeHudTab === 'terminal' ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' : 'text-slate-500 hover:text-slate-300'}`}>Sys Logs</button>
                </div>
              </div>
              <div className="p-6 font-mono text-xs min-h-[300px] flex flex-col justify-center relative">
                {activeHudTab === 'radar' && (
                  <div className="relative w-full h-[240px] flex items-center justify-center">
                    <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />
                    <div className="absolute top-2 left-2 flex flex-col gap-1 text-[9px] text-cyan-400/80 bg-slate-900/60 p-2 rounded border border-cyan-500/10 backdrop-blur-md">
                      <span className="flex items-center gap-1"><Radio className="w-3 h-3 animate-pulse text-emerald-400" /> SCANNING ACTIVE</span>
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
                        <div key={index} className={`transition-all duration-500 text-[11px] ${index === terminalLogs.length - 1 ? 'text-emerald-400 font-bold' : 'text-slate-400 opacity-60'}`}>
                          <span className="text-emerald-600 mr-1.5">&gt;</span> {log}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
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

// --- SUBKOMPONEN 3: ABOUT ---
function About() {
  return (
    <section id="about" className="py-28 relative z-10 bg-[#030811] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="reveal-up">
            <div className="flex items-center gap-2 text-[#00A962] text-xs font-bold tracking-widest uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00A962]"></span>About Us
            </div>
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Dedicated to delivering <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">intelligent solutions.</span>
            </h3>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed font-light">
              PT Askara Digital Technology is a technology partner dedicated to delivering intelligent digital solutions that help organizations innovate, transform, and grow in the digital era.
            </p>
            <div className="glass-panel glass-reflect rounded-2xl p-6 mb-6 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <h4 className="text-white font-bold text-lg mb-3 flex items-center gap-3">
                <Target className="w-5 h-5 text-emerald-400" /> Our Vision
              </h4>
              <p className="text-slate-400 leading-relaxed text-sm font-light">To be a leading digital technology partner recognized for innovation, excellence, and measurable impact.</p>
            </div>
            <div className="glass-panel glass-reflect rounded-2xl p-6 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <h4 className="text-white font-bold text-lg mb-3 flex items-center gap-3">
                <Layers className="w-5 h-5 text-emerald-400" /> Our Mission
              </h4>
              <ul className="space-y-3 text-slate-400 text-sm font-light">
                <li className="flex items-start gap-3.5"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /> Deliver innovative and reliable digital solutions</li>
                <li className="flex items-start gap-3.5"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /> Empower businesses through technology and data</li>
                <li className="flex items-start gap-3.5"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /> Build long-term partnerships based on trust and value</li>
                <li className="flex items-start gap-3.5"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /> Continuously innovate to create sustainable growth</li>
              </ul>
            </div>
          </div>
          <div className="relative reveal-up delay-200">
            <div className="absolute inset-0 bg-emerald-600/5 blur-[120px] rounded-full animate-glow-pulse-1"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
              {coreValues.map((val, idx) => {
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

// --- SUBKOMPONEN 4: SERVICES ---
function Services() {
  const [activeService, setActiveService] = useState<ServiceItem>(services[0]);

  return (
    <section id="services" className="py-28 relative bg-[#050b14] border-y border-white/5">
      <div className="absolute inset-0 bg-grid-pattern opacity-25"></div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="mb-20 reveal-up text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 text-cyan-400 text-xs font-bold tracking-widest uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>Our Services
          </div>
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-4">End-to-end digital solutions</h3>
          <p className="text-slate-400 font-light">Tailored to your business needs. Designed for scale, security, and exceptional performance.</p>
        </div>
        <div className="grid lg:grid-cols-12 gap-8 reveal-up delay-100">
          <div className="lg:col-span-5 flex flex-col gap-2.5">
            {services.map((service) => {
              const IconComponent = IconMap[service.iconName] || Code;
              const isActive = activeService.id === service.id;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveService(service)}
                  className={`text-left p-5 rounded-2xl transition-all duration-300 flex items-center justify-between group ${isActive ? 'bg-cyan-500/10 border border-cyan-500/30 shadow-lg shadow-cyan-950/20' : 'glass-panel border-transparent hover:border-white/5'}`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-2.5 rounded-lg transition-colors ${isActive ? 'text-cyan-400 bg-cyan-500/10' : 'text-slate-400 bg-white/5 group-hover:text-white'}`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className={`font-semibold text-base transition-colors ${isActive ? 'text-white' : 'text-slate-400 group-hover:text-slate-200'}`}>{service.title}</span>
                  </div>
                  <ChevronRight className={`w-5 h-5 transition-transform ${isActive ? 'text-cyan-400 translate-x-1' : 'text-slate-600 group-hover:text-slate-400'}`} />
                </button>
              );
            })}
          </div>
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-3xl p-8 lg:p-12 h-full relative overflow-hidden flex flex-col justify-between border-cyan-500/10 shadow-[0_0_40px_rgba(6,182,212,0.05)]">
              <div className="absolute inset-0 z-0 select-none pointer-events-none overflow-hidden rounded-3xl">
                <img src={activeService.imageUrl} alt={activeService.title} className="w-full h-full object-cover object-center opacity-15 mix-blend-luminosity scale-100 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050b14] via-[#050b14]/90 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#050b14] via-transparent to-transparent"></div>
              </div>
              <div className="relative z-10 flex flex-col h-full justify-between" key={activeService.id}>
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-400 to-emerald-500 flex items-center justify-center text-slate-955 mb-8 shadow-lg shadow-cyan-500/20">
                    {React.createElement(IconMap[activeService.iconName] || Code, { className: "w-6 h-6 text-white" })}
                  </div>
                  <h4 className="text-3xl font-bold text-white mb-4">{activeService.title}</h4>
                  <p className="text-slate-300 text-base leading-relaxed mb-8 font-light">{activeService.desc}</p>
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
                  <div className="border-t border-white/5 pt-6">
                    <span className="block text-[11px] font-bold text-cyan-400 uppercase tracking-widest mb-2">Our Solutions</span>
                    <p className="text-slate-300 text-xs font-light leading-relaxed mb-4">{activeService.solutions}</p>
                    <span className="block text-[11px] font-bold text-cyan-400 uppercase tracking-widest mb-2">Value to Client</span>
                    <p className="text-slate-300 text-xs font-light leading-relaxed">{activeService.value}</p>
                  </div>
                </div>
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
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold text-xs tracking-wider uppercase group transition-colors">
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

// --- SUBKOMPONEN 5: INDUSTRY SOLUTIONS ---
function IndustrySolutions() {
  const [activeSolution, setActiveSolution] = useState<SolutionItem>(industrySolutions[0]);

  return (
    <section id="solutions" className="py-28 bg-[#030811] relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-14 reveal-up flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold tracking-widest uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>Industry Solutions
            </div>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">One Technology Partner <br />For Every Industry</h3>
          </div>
          <p className="text-slate-400 max-w-sm font-light leading-relaxed">
            Solusi teknologi terintegrasi dari ERP, AI, hingga Aplikasi Enterprise spesifik sesuai industri Anda untuk otomatisasi proses bisnis yang efisien.
          </p>
        </div>
        <div className="glass-panel rounded-3xl border border-white/5 overflow-hidden reveal-up delay-100 flex flex-col lg:flex-row border-cyan-500/10">
          <div className="w-full lg:w-1/3 border-b lg:border-b-0 lg:border-r border-white/5 bg-white/[0.01] h-[350px] lg:h-[550px] overflow-y-auto custom-scrollbar">
            {industrySolutions.map((sol) => {
              const IconComponent = IconMap[sol.iconName] || BrainCircuit;
              const isActive = activeSolution.id === sol.id;
              return (
                <button
                  key={sol.id}
                  onClick={() => setActiveSolution(sol)}
                  className={`w-full text-left p-5 transition-all duration-200 border-l-2 flex items-center gap-3.5 ${isActive ? 'bg-white/[0.03] border-cyan-400' : 'border-transparent hover:bg-white/[0.01]'}`}
                >
                  <div className={`p-2 rounded-lg ${isActive ? 'text-cyan-400 bg-cyan-400/10' : 'text-slate-500'}`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className={`font-semibold text-sm ${isActive ? 'text-white' : 'text-slate-400'}`}>{sol.title}</h4>
                    <p className="text-[11px] text-slate-500 mt-0.5">{sol.subtitle}</p>
                  </div>
                </button>
              );
            })}
          </div>
          <div className="w-full lg:w-2/3 relative flex flex-col justify-between overflow-hidden min-h-[450px] lg:min-h-[550px] bg-gradient-to-br from-transparent to-[#030811]">
            <div className="absolute inset-0 z-0 select-none pointer-events-none">
              <img src={activeSolution.imageUrl} alt={activeSolution.title} className="w-full h-full object-cover object-center opacity-25 mix-blend-luminosity scale-100 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#030811] via-[#030811]/90 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#030811] via-transparent to-transparent"></div>
            </div>
            <div className="relative z-10 p-8 lg:p-10 flex justify-between items-start border-b border-white/5 bg-[#030811]/45 backdrop-blur-sm">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-semibold uppercase tracking-wider mb-2">{activeSolution.badge}</span>
                <h3 className="text-2xl lg:text-3xl font-bold text-white leading-tight">{activeSolution.title}</h3>
              </div>
              <div className="text-cyan-400 mt-1">
                {React.createElement(IconMap[activeSolution.iconName] || BrainCircuit, { className: "w-8 h-8" })}
              </div>
            </div>
            <div className="relative z-10 p-8 lg:p-10 grid md:grid-cols-2 gap-8 flex-grow">
              <div>
                <span className="block text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-3.5 flex items-center gap-2">
                  <Cpu className="w-3.5 h-3.5 text-cyan-400" /> System Modules
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
                <div className="glass-panel rounded-2xl p-6 bg-cyan-950/5 border-cyan-500/10 shadow-lg shadow-black/20">
                  <span className="block text-[11px] font-bold text-cyan-400 uppercase tracking-widest mb-3.5 flex items-center gap-2"><Zap className="w-3.5 h-3.5" /> Core Value & Benefit</span>
                  <p className="text-slate-200 text-sm font-light leading-relaxed">{activeSolution.benefit}</p>
                </div>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2.5 w-full bg-[#00A962] hover:bg-[#00a962]/90 text-slate-955 font-bold py-3.5 px-5 rounded-xl transition-all text-xs tracking-wider uppercase shadow-lg shadow-emerald-500/10">
                  Hubungi Tech Consultant <ExternalLink className="w-3.5 h-3.5 text-slate-955" />
                </a>
              </div>
            </div>
            <div className="relative z-10 px-8 py-3.5 bg-white/[0.01] border-t border-white/5 flex justify-between items-center text-[10px] text-slate-500 tracking-wider">
              <span>INTEGRATED • REAL-TIME • SECURE</span>
              <span className="flex items-center gap-1"><Globe className="w-3 h-3 text-cyan-500" /> Askara Enterprise Network</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// --- SUBKOMPONEN 6: PROCESS ---
function Process() {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section id="process" className="py-28 bg-[#050b14] relative border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <div className="reveal-up mb-20">
          <div className="inline-flex items-center gap-2 text-[#00A962] text-xs font-bold tracking-widest uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00A962]"></span>Our Approach
          </div>
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-4">Proven Methodology</h3>
          <p className="text-slate-400 max-w-2xl mx-auto font-light">Kami mengikuti metodologi yang teruji untuk memastikan pengiriman proyek yang sukses, aman, dan tepat waktu.</p>
        </div>
        <div className="relative reveal-up delay-100">
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent z-0"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative z-10">
            {approaches.map((item, idx) => {
              const isActive = activeStep === idx;
              return (
                <button key={idx} onClick={() => setActiveStep(idx)} className={`group flex flex-col items-center focus:outline-none transition-all duration-300 ${isActive ? 'scale-105' : 'opacity-70 hover:opacity-100'}`}>
                  <div className={`w-24 h-24 rounded-full glass-panel flex items-center justify-center mb-6 relative transition-transform duration-500 shadow-lg ${isActive ? 'border-emerald-500 shadow-emerald-500/20' : 'shadow-black/40'}`}>
                    <div className="absolute inset-1 rounded-full bg-[#030811] flex items-center justify-center">
                      <span className={`text-2xl font-bold transition-colors ${isActive ? 'text-emerald-400' : 'text-slate-500'}`}>{item.step}</span>
                    </div>
                  </div>
                  <h4 className={`font-bold text-base mb-2 tracking-wide transition-colors ${isActive ? 'text-emerald-400' : 'text-white group-hover:text-emerald-400'}`}>{item.title}</h4>
                  <p className="text-slate-400 text-xs font-light leading-relaxed max-w-[190px]">{item.desc}</p>
                </button>
              );
            })}
          </div>
          <div className="mt-12 glass-panel rounded-2xl p-8 max-w-3xl mx-auto text-left relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-emerald-500/5 blur-3xl rounded-full"></div>
            <span className="text-emerald-400 font-mono text-xs font-semibold tracking-wider">METHODOLOGY PHASE {approaches[activeStep].step}</span>
            <h4 className="text-white text-xl font-bold mt-2 mb-3">{approaches[activeStep].title}</h4>
            <p className="text-slate-300 text-sm font-light leading-relaxed mb-4">{approaches[activeStep].desc}</p>
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

// --- SUBKOMPONEN 7: CONTACT ---
function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    window.open(WHATSAPP_URL, '_blank');
  };

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" alt="Askara Headquarters Building" className="w-full h-full object-cover object-bottom opacity-[0.16] mix-blend-luminosity" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030811] via-[#030811]/90 to-transparent"></div>
      </div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="glass-panel rounded-3xl p-8 md:p-16 border border-white/5 flex flex-col lg:flex-row items-center justify-between gap-12 shadow-2xl reveal-up border-cyan-500/10">
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Let's build the <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">future</span> of your business.
            </h2>
            <p className="text-slate-300 text-lg mb-10 font-light max-w-md leading-relaxed">
              Jadwalkan demo sistem kami dan temukan bagaimana Askara Digital Technology dapat membantu transformasi digital bisnis Anda.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors group">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-emerald-400 group-hover:bg-[#00A962] group-hover:text-slate-950 transition-all duration-300"><MapPin className="w-5 h-5" /></div>
                <div>
                  <p className="font-semibold text-white">Deruzzi SPACE</p>
                  <p className="text-sm font-light text-slate-400">Jl. Sukajadi 25, Sukajadi, Jawa Barat 40162</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors group">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-emerald-400 group-hover:bg-[#00A962] group-hover:text-slate-955 transition-all duration-300"><Mail className="w-5 h-5" /></div>
                <div>
                  <p className="font-semibold text-white">Email</p>
                  <p className="text-sm font-light text-slate-400">info@askaradigital.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors group">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-emerald-400 group-hover:bg-[#00A962] group-hover:text-slate-955 transition-all duration-300"><Phone className="w-5 h-5" /></div>
                <div>
                  <p className="font-semibold text-white">Telepon</p>
                  <p className="text-sm font-light text-slate-400">+62 857-1717-1515</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-5/12 w-full">
            <div className="bg-[#030811]/85 backdrop-blur-3xl rounded-2xl p-8 border border-white/10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-emerald-500 to-teal-400"></div>
              <h3 className="text-2xl font-bold text-white mb-6">Konsultasi Sekarang</h3>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-2">Nama Lengkap</label>
                  <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:bg-white/10 transition-all text-sm" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-2">Email Perusahaan</label>
                  <input required type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:bg-white/10 transition-all text-sm" placeholder="john@company.com" />
                </div>
                <button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-4 rounded-xl transition-all transform hover:-translate-y-0.5 shadow-lg shadow-emerald-500/20 text-xs tracking-wider uppercase">Kirim Pesan & Konsultasi</button>
              </form>
              <div className="mt-6 pt-6 border-t border-white/10 text-center">
                <p className="text-slate-400 text-xs mb-4">Atau hubungi langsung via WhatsApp</p>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2.5 w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 rounded-xl transition-all shadow-lg shadow-emerald-950/20 text-xs tracking-wider uppercase">
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

// --- SUBKOMPONEN 8: FOOTER ---
function Footer() {
  return (
    <footer className="bg-[#010408] pt-16 pb-8 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          <div className="flex items-center gap-3">
             <div className="bg-[#050c18]/90 border border-white/10 rounded-lg p-3 flex items-center justify-center shadow-lg shadow-black/40">
               <img src="/daruzi_space-removebg-preview.png" alt="Askara Digital Technology" className="h-10 w-auto object-contain select-none pointer-events-none" />
             </div>
          </div>
          <div className="flex items-center gap-8 text-xs font-semibold text-slate-400 tracking-wider uppercase">
             <a href="#about" className="hover:text-emerald-400 transition-colors">About</a>
             <a href="#services" className="hover:text-emerald-400 transition-colors">Services</a>
             <a href="#solutions" className="hover:text-emerald-400 transition-colors">Solutions</a>
          </div>
        </div>
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} PT Askara Digital Technology. All rights reserved.</p>
          <div className="flex gap-6">
             <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
             <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// --- SUBKOMPONEN 9: FLOATING WHATSAPP ---
function FloatingWhatsapp() {
  return (
    <div className="fixed bottom-24 right-8 z-[90] group flex items-center">
      <span className="opacity-0 group-hover:opacity-100 mr-3 px-3 py-1.5 rounded-lg bg-slate-900 border border-emerald-500/20 text-white text-xs font-semibold tracking-wide whitespace-nowrap shadow-xl transition-all duration-300 pointer-events-none translate-x-4 group-hover:translate-x-0">Chat via WhatsApp</span>
      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-[#00A962] text-slate-955 shadow-2xl shadow-emerald-500/20 hover:bg-[#00a962]/90 transition-all duration-300 transform hover:scale-110 active:scale-95 flex items-center justify-center relative group" aria-label="Chat WhatsApp">
        <span className="absolute inset-0 rounded-full bg-emerald-500/30 animate-ping opacity-75"></span>
        <MessageSquare className="w-6 h-6 relative z-10 text-white" />
      </a>
    </div>
  );
}

// --- SUBKOMPONEN 10: BACK TO TOP ---
function BackToTop() {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed bottom-8 right-8 p-3.5 rounded-full bg-slate-900 border border-white/10 text-white shadow-2xl transition-all duration-500 z-50 hover:bg-[#00A962] hover:text-slate-950 hover:border-emerald-500 hover:scale-105 ${isVisible ? 'translate-y-0 opacity-100 pointer-events-auto' : 'translate-y-16 opacity-0 pointer-events-none'}`}
      aria-label="Back to top"
    >
      <ArrowUp className="w-4 h-4 font-bold" />
    </button>
  );
}

// --- UTAMA: COMPONENT APP ---
export default function App() {
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
      
      {/* --- ENTERPRISE STYLE & DESIGN SYSTEM --- */}
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

      {/* --- INTRO SPLASH SCREEN --- */}
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

      {/* --- SCROLL PROGRESS INDICATOR --- */}
      <div className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-600 z-[100] transition-all duration-100 ease-out" style={{ width: `${scrollProgress}%` }} />

      {/* --- RENDER LAYOUT --- */}
      <Navbar activeSection={activeSection} />
      <Hero showSplash={showSplash} />
      <About />
      <Services />
      <IndustrySolutions />
      <Process />
      <Contact />
      <Footer />
      <FloatingWhatsapp />
      <BackToTop />
    </div>
  );
}