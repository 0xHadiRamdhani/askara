// --- DATA TYPES & INTERFACES ---

export interface ValueItem {
  title: string;
  desc: string;
  iconName: 'Handshake' | 'Zap' | 'ShieldCheck' | 'Target';
}

export interface ServiceItem {
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

export interface SolutionItem {
  id: string;
  title: string;
  subtitle: string;
  iconName: 'Factory' | 'GraduationCap' | 'Stethoscope' | 'Hotel' | 'Utensils' | 'Shirt' | 'Users' | 'Store' | 'Landmark' | 'BrainCircuit';
  imageUrl: string;
  features: string[];
  benefit: string;
  badge: string;
}

export interface ApproachItem {
  step: string;
  title: string;
  desc: string;
}

// --- DATA DEFINITIONS ---

export const coreValues: ValueItem[] = [
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

export const services: ServiceItem[] = [
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

export const industrySolutions: SolutionItem[] = [
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

export const approaches: ApproachItem[] = [
  { step: "01", title: "DISCOVER", desc: "Understand business needs and challenges" },
  { step: "02", title: "DESIGN", desc: "Craft the right solution and user experience" },
  { step: "03", title: "DEVELOP", desc: "Build with quality, agility, and best practices" },
  { step: "04", title: "DELIVER", desc: "Implement solutions that drive real impact" },
  { step: "05", title: "SUPPORT", desc: "Provide ongoing optimization and support" }
];