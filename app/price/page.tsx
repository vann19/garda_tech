"use client";

import { useState, useEffect } from 'react';
import Image from "next/image";

export default function Pricing() {
  const [activeCategory, setActiveCategory] = useState('maintenance');
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const designWidth = 1728;
      const designHeight = 1109;
      
      const scaleX = window.innerWidth / designWidth;
      const scaleY = window.innerHeight / designHeight;
      
      const newScale = Math.min(scaleX, scaleY, 1) * (window.innerWidth < 768 ? 0.85 : 1);
      
      setScale(newScale);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const categories = [
    { id: 'maintenance', name: 'Maintenance & Support' },
    { id: 'performance', name: 'Performance & Reliability' },
    { id: 'design', name: 'UI/UX Review & Design' },
    { id: 'brand', name: 'Brand Kit & Visual System' },
    { id: 'profile', name: 'Company Profile' },
    { id: 'content', name: 'Content System' },
    { id: 'templates', name: 'Template Pack' },
    { id: 'workshop', name: 'Workshop / Training' },
    { id: 'web', name: 'Web Development' },
    { id: 'mobile', name: 'Mobile App Development' }
  ];

  const services = {
    maintenance: [
      {
        tier: "Basic Care",
        price: "Rp300k–Rp800k",
        period: "/bulan",
        features: [
          "Bugfix minor",
          "2 update konten",
          "Backup basic",
          "Laporan singkat",
          "SLA: 2×24 jam",
          "Maks 2 request minor/bulan"
        ],
        promo: "Bayar 3 bulan → bonus 1x mini audit"
      },
      {
        tier: "Growth Care",
        price: "Rp1jt–Rp2,5jt",
        period: "/bulan",
        features: [
          "Semua Basic +",
          "Monitoring uptime",
          "Speed check",
          "4 update/bulan",
          "Laporan bulanan",
          "SLA: 1×24 jam",
          "Maks 4 request minor/bulan"
        ],
        promo: "Kontrak 6 bulan → diskon 3%"
      },
      {
        tier: "Pro Care",
        price: "Rp3jt–Rp7jt",
        period: "/bulan",
        features: [
          "Semua Growth +",
          "Hardening berkala",
          "Rollback plan",
          "1 sesi konsultasi/bulan",
          "SLA: 4–8 jam",
          "Minor unlimited"
        ],
        promo: "Kontrak 12 bulan → bonus 1x UI/UX review mini"
      }
    ],
    performance: [
      {
        tier: "Speed Basic",
        price: "Rp500k–Rp1,5jt",
        period: "",
        features: [
          "Kompres gambar",
          "Minify CSS/JS",
          "Lazy load",
          "Rapihin asset/plugin",
          "1x minor revisi",
          "Pengerjaan 2–4 hari"
        ],
        promo: "Bundling dengan Website Basic → diskon 2%"
      },
      {
        tier: "Speed Growth",
        price: "Rp2jt–Rp6jt",
        period: "",
        features: [
          "Semua Basic +",
          "Caching",
          "DB cleanup",
          "Optimasi bottleneck",
          "Performance testing",
          "2x minor revisi",
          "Pengerjaan 1 minggu"
        ],
        promo: "Bonus 1 laporan performa"
      },
      {
        tier: "Speed Pro",
        price: "Rp7jt–Rp20jt",
        period: "",
        features: [
          "Staging environment",
          "Audit dependency",
          "Deploy aman",
          "Monitoring basic",
          "Minor unlimited",
          "Pengerjaan 2–4 minggu"
        ],
        promo: "Ambil Pro Care 3 bulan → diskon 3%"
      }
    ],
    design: [
      {
        tier: "UX Review Mini",
        price: "Rp500k–Rp1,5jt",
        period: "",
        features: [
          "Review 1 flow",
          "Rekomendasi",
          "Wireframe kasar",
          "Call 30 menit",
          "1x minor revisi",
          "Pengerjaan 2–4 hari"
        ],
        promo: "Lanjut Prototype → potong Rp150k"
      },
      {
        tier: "UX Prototype",
        price: "Rp2jt–Rp7jt",
        period: "",
        features: [
          "Flow + wireframe",
          "Prototype Figma (1–3 halaman)",
          "1 revisi struktur ringan",
          "2x minor revisi",
          "Pengerjaan 1–2 minggu"
        ],
        promo: "Bonus 1 template cover launch"
      },
      {
        tier: "UX Full System",
        price: "Rp8jt–Rp25jt",
        period: "",
        features: [
          "Design system mini",
          "Prototype multi halaman",
          "Handoff developer",
          "Minor unlimited",
          "2x major terkontrol",
          "Pengerjaan 3–6 minggu"
        ],
        promo: "Bundle Web App MVP → diskon 3%"
      }
    ],
    brand: [
      {
        tier: "Brand Kit Mini",
        price: "Rp500k–Rp1,5jt",
        period: "",
        features: [
          "Rapihin logo",
          "Warna + font",
          "2 template konten",
          "1x minor revisi",
          "Pengerjaan 2–5 hari"
        ],
        promo: "Bonus 5 hook caption"
      },
      {
        tier: "Brand Kit Growth",
        price: "Rp2jt–Rp6jt",
        period: "",
        features: [
          "Logo final",
          "Guideline mini",
          "6 template konten",
          "Highlight IG set",
          "2x minor revisi",
          "Pengerjaan 1–2 minggu"
        ],
        promo: "Ambil Content System → diskon 2%"
      },
      {
        tier: "Brand Kit Pro",
        price: "Rp7jt–Rp20jt",
        period: "",
        features: [
          "Guideline lengkap",
          "Komponen UI",
          "Handoff developer",
          "Minor unlimited",
          "Pengerjaan 2–4 minggu"
        ],
        promo: "Bonus 1 sesi workshop brand usage"
      }
    ],
    profile: [
      {
        tier: "Mini Deck",
        price: "Rp300k–Rp1jt",
        period: "",
        features: [
          "1 pager atau 5 slide",
          "1x minor revisi",
          "Pengerjaan 1–3 hari"
        ],
        promo: "Bonus cover proposal"
      },
      {
        tier: "Company Profile Pro",
        price: "Rp1,5jt–Rp4jt",
        period: "",
        features: [
          "8–12 slide",
          "Format PDF",
          "2x minor revisi",
          "Pengerjaan 3–7 hari"
        ],
        promo: "Bundle Brand Kit Mini → diskon 2%"
      },
      {
        tier: "Pro Bundle",
        price: "Rp5jt–Rp12jt",
        period: "",
        features: [
          "2 deck (profile + pitch)",
          "3x minor revisi",
          "1x revisi arah",
          "Pengerjaan 1–2 minggu"
        ],
        promo: "Bonus template proposal & brief"
      }
    ],
    content: [
      {
        tier: "Content Starter",
        price: "Rp300k–Rp800k",
        period: "",
        features: [
          "Kalender 2 minggu",
          "10 ide konten",
          "5 template caption",
          "CTA library",
          "1x minor revisi",
          "Pengerjaan 1–2 hari"
        ],
        promo: "Bonus 1 script video 30 detik"
      },
      {
        tier: "Content Growth",
        price: "Rp1jt–Rp3jt",
        period: "",
        features: [
          "Kalender 1 bulan",
          "SOP produksi",
          "Hook/CTA library",
          "Approval flow",
          "2x minor revisi",
          "Pengerjaan 3–7 hari"
        ],
        promo: "Bonus 2 template desain konten"
      },
      {
        tier: "Content Pro",
        price: "Rp4jt–Rp10jt",
        period: "",
        features: [
          "Semua Growth +",
          "Guideline visual",
          "Reporting system",
          "Workflow tim",
          "Minor unlimited",
          "Pengerjaan 2–4 minggu"
        ],
        promo: "Lanjut produksi konten → diskon 3% bulan pertama"
      }
    ],
    templates: [
      {
        tier: "Starter Templates",
        price: "Rp200k–Rp600k",
        period: "",
        features: [
          "Proposal template",
          "Brief template",
          "Invoice template",
          "Handover checklist",
          "1x minor revisi",
          "Pengerjaan 1–2 hari"
        ],
        promo: "Bonus tracker leads (Sheets)"
      },
      {
        tier: "Growth Templates",
        price: "Rp700k–Rp2jt",
        period: "",
        features: [
          "Semua Starter +",
          "Kontrak/SPK template",
          "SOP komunikasi",
          "Project tracker",
          "2x minor revisi",
          "Pengerjaan 3–5 hari"
        ],
        promo: "Bonus setup Notion/Sheets 30 menit"
      },
      {
        tier: "Pro Templates",
        price: "Rp3jt–Rp8jt",
        period: "",
        features: [
          "SOP delivery end-to-end",
          "QA checklist",
          "Support SOP",
          "Escalation flow",
          "Minor unlimited",
          "Pengerjaan 1–2 minggu"
        ],
        promo: "Bonus 1 mini workshop internal"
      }
    ],
    workshop: [
      {
        tier: "Mini Workshop",
        price: "Rp300k–Rp800k",
        period: "",
        features: [
          "1 topik spesifik",
          "PDF checklist",
          "Q&A 15 menit",
          "Durasi 60–90 menit"
        ],
        promo: "Rekaman (opsional)"
      },
      {
        tier: "Growth Workshop",
        price: "Rp1jt–Rp3jt",
        period: "",
        features: [
          "2 sesi workshop",
          "SOP + praktik tools",
          "Simulasi",
          "Follow-up Q&A 30 menit"
        ],
        promo: "Bonus template sistem kerja"
      },
      {
        tier: "Pro Workshop",
        price: "Rp4jt–Rp10jt",
        period: "",
        features: [
          "3–5 sesi",
          "Training tim",
          "Dokumentasi",
          "2x follow-up Q&A 60 menit"
        ],
        promo: "Ambil retainer 3 bulan → diskon 3%"
      }
    ],
    web: [
      {
        tier: "Website Basic",
        price: "Rp2jt–Rp6jt",
        period: "",
        features: [
          "3–5 halaman",
          "Responsive design",
          "Form/WA integration",
          "SEO basic",
          "2x minor revisi",
          "Pengerjaan 1–2 minggu"
        ],
        promo: "Bonus 1 bulan Basic Care"
      },
      {
        tier: "Website Growth",
        price: "Rp7jt–Rp20jt",
        period: "",
        features: [
          "6–12 halaman",
          "Portfolio/case studies",
          "Leads ke Sheets/Notion",
          "Speed optimization",
          "3x minor revisi",
          "Pengerjaan 2–5 minggu"
        ],
        promo: "Ambil Brand Kit Mini → diskon 2%"
      },
      {
        tier: "Web App MVP",
        price: "Rp20jt–Rp80jt+",
        period: "",
        features: [
          "Fitur inti (scope ketat)",
          "Admin panel basic",
          "Database integration",
          "Role sederhana",
          "Dokumentasi",
          "Minor unlimited + 2x major",
          "Pengerjaan 1–3 bulan"
        ],
        promo: "Bonus 1x UX Review Mini setelah launch"
      }
    ],
    mobile: [
      {
        tier: "App MVP Mini",
        price: "Rp10jt–Rp25jt",
        period: "",
        features: [
          "3–5 screen",
          "1 fitur utama",
          "API sederhana",
          "2x minor revisi",
          "Pengerjaan 3–6 minggu"
        ],
        promo: "Bonus 1 sesi workshop handover"
      },
      {
        tier: "App Growth",
        price: "Rp25jt–Rp60jt",
        period: "",
        features: [
          "Auth system",
          "Multi screen",
          "Notifikasi basic",
          "Dashboard",
          "3x minor revisi",
          "Pengerjaan 2–3 bulan"
        ],
        promo: "Ambil UI/UX Prototype → diskon 2%"
      },
      {
        tier: "App Pro",
        price: "Rp60jt–Rp200jt+",
        period: "",
        features: [
          "Scalable architecture",
          "Staging-prod",
          "Monitoring",
          "Analytics",
          "Role-based access",
          "Minor unlimited + 2x major",
          "Pengerjaan 3–6 bulan"
        ],
        promo: "Bonus 3 bulan Growth Care"
      }
    ]
  };

  return (
    <div className="w-screen min-h-screen relative bg-black overflow-hidden">
      {/* Background blur effects */}
      <div className="absolute w-[1829px] h-[1623px] left-[-51px] top-[917px] bg-indigo-900 rounded-full blur-[80.20px] opacity-50"></div>
      <div className="absolute w-[1601px] h-[1588px] left-[73px] top-[1136px] bg-violet-500 rounded-full blur-[80.20px] opacity-50"></div>
      <div className="absolute w-[1215px] h-[1327px] left-[266px] top-[1315px] bg-purple-300 rounded-full blur-[80.20px] opacity-50"></div>
      
      {/* Lampu ungu di tengah bawah */}
      <img 
        src="/img/price.png" 
        alt="decorative lamp"
        className="absolute w-[100vw] h-auto left-1/2 transform -translate-x-1/2 bottom-0 opacity-20 md:opacity-40 lg:opacity-60 pointer-events-none z-0"
      />
      
      {/* Service Packages Button */}
      <div className="relative z-10 w-full pt-12 sm:pt-16 md:pt-20 lg:pt-24 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <div className="relative w-[180px] sm:w-[200px] md:w-[240px] lg:w-[288px] h-[50px] sm:h-[60px] md:h-[70px] lg:h-[96px]">
            <div className="w-full h-full bg-violet-800/60 rounded-[57px] shadow-[inset_-1px_-1px_47.80px_rgba(208,186,232,0.80)] border-4 border-violet-500/95 flex items-center justify-center">
              <span className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-bold font-['Syne']">Service Packages</span>
            </div>
          </div>
        </div>

        {/* Title */}
        <div className="text-center mt-8 sm:mt-10 md:mt-12 lg:mt-16">
          <span className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold font-['Syne'] block">Flexible Packages.</span>
          <span className="text-violet-800 text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold font-['Syne'] block mt-1 sm:mt-2">Transparent Pricing.</span>
        </div>

        {/* Description */}
        <p className="text-white text-xs sm:text-sm md:text-base lg:text-xl text-center font-['Inter'] max-w-4xl mx-auto mt-3 sm:mt-4 md:mt-6 lg:mt-8 px-4">
          Setiap paket dirancang untuk menyesuaikan kebutuhan dan skala bisnis,
          dengan rincian biaya yang jelas tanpa tambahan tersembunyi.
        </p>

        {/* Kebijakan Revisi */}
        <div className="max-w-4xl mx-auto mt-8 p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-purple-300/30">
          <h3 className="text-violet-400 text-lg font-bold font-['Syne'] mb-2"> Kebijakan Revisi</h3>
          <p className="text-white/80 text-xs sm:text-sm mb-2"><span className="text-violet-300">Minor:</span> teks/typo, ganti foto, warna/font kecil, spacing/alignment, wording CTA</p>
          <p className="text-white/80 text-xs sm:text-sm mb-2"><span className="text-violet-300">Major:</span> ubah struktur besar, tambah halaman/fitur, redesign total, perubahan requirement inti</p>
          <p className="text-white/80 text-xs sm:text-sm"><span className="text-violet-300">Window revisi:</span> Basic/Starter: 7 hari | Growth: 14 hari | Pro: 30 hari</p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mt-8 max-w-4xl mx-auto">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3 py-1.5 text-xs sm:text-sm rounded-full transition-all ${
                activeCategory === cat.id
                  ? 'bg-violet-600 text-white border-violet-400'
                  : 'bg-transparent text-white/70 border border-purple-300/30 hover:bg-white/10'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="relative z-10 w-full mt-8 px-4 pb-10">
        {/* Mobile Layout */}
        <div className="block sm:hidden">
          <div className="flex flex-col items-center gap-4">
            {services[activeCategory]?.map((service, index) => (
              <PricingCard 
                key={index}
                title={service.tier}
                price={service.price}
                period={service.period || ""}
                features={service.features}
                promo={service.promo}
                isMobile={true}
              />
            ))}
          </div>
        </div>

        {/* Tablet Layout */}
        <div className="hidden sm:block lg:hidden">
          <div className="grid grid-cols-2 gap-4 max-w-3xl mx-auto">
            {services[activeCategory]?.slice(0, 2).map((service, index) => (
              <PricingCard 
                key={index}
                title={service.tier}
                price={service.price}
                period={service.period || ""}
                features={service.features}
                promo={service.promo}
                isTablet={true}
              />
            ))}
          </div>
          {services[activeCategory]?.length > 2 && (
            <div className="flex justify-center mt-4">
              <PricingCard 
                title={services[activeCategory][2].tier}
                price={services[activeCategory][2].price}
                period={services[activeCategory][2].period || ""}
                features={services[activeCategory][2].features}
                promo={services[activeCategory][2].promo}
                isTablet={true}
                className="max-w-md w-full"
              />
            </div>
          )}
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block">
          <div className="flex justify-center gap-6 flex-wrap">
            {services[activeCategory]?.map((service, index) => (
              <PricingCard 
                key={index}
                title={service.tier}
                price={service.price}
                period={service.period || ""}
                features={service.features}
                promo={service.promo}
                width="w-[380px] xl:w-[400px]"
              />
            ))}
          </div>
        </div>

        {/* Promo Banner */}
        <div className="max-w-4xl mx-auto mt-10 p-4 bg-gradient-to-r from-purple-900/40 to-indigo-900/40 rounded-2xl border border-purple-400/30 text-center">
          <h3 className="text-white text-sm sm:text-base font-bold font-['Syne'] mb-1"> Promo Spesial </h3>
          <p className="text-white/90 text-xs sm:text-sm">
            Early-bird: DP 50% ≤ 3 hari → diskon 2% | Bundle 2 layanan → diskon 3% | Retainer 3 bulan → diskon 3%
          </p>
        </div>
      </div>
    </div>
  )
}

// Komponen Pricing Card
function PricingCard({ title, price, period, features, promo, width = "w-full", className = "", isMobile, isTablet }) {
  return (
    <div className={`${width} ${className} bg-white/5 backdrop-blur-sm rounded-[30px] sm:rounded-[40px] border-2 border-purple-300 p-4 sm:p-5 relative overflow-hidden hover:border-violet-400 transition-all duration-300`}>
      {/* Inner glow effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-transparent pointer-events-none"></div>
      
      <div className="relative z-10">
        {/* Title */}
        <h3 className="text-violet-400 text-base sm:text-lg md:text-xl font-bold font-['Syne'] mb-2 leading-tight">
          {title}
        </h3>

        {/* Price */}
        <div className="text-white text-lg sm:text-xl md:text-2xl font-bold font-['Inter'] mb-3">
          {price}
          <span className="text-white/60 text-xs sm:text-sm ml-1">{period}</span>
        </div>

        {/* Features List */}
        <div className="space-y-1.5 mb-4">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-2">
              <div className="relative mt-1 flex-shrink-0">
                <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full border border-violet-500/95"></div>
                <div className="absolute w-1 h-1 left-[1.5px] top-[1.5px] sm:left-[2px] sm:top-[2px] bg-violet-500/95 rounded-full"></div>
              </div>
              <span className="text-white text-xs font-['Inter'] leading-relaxed">{feature}</span>
            </div>
          ))}
        </div>

        {/* Promo */}
        {promo && (
          <div className="mb-4 p-2 bg-purple-900/30 rounded-xl border border-purple-500/30">
            <p className="text-violet-300 text-xs font-['Inter'] text-center"> {promo}</p>
          </div>
        )}

        {/* Order Button */}
        <div className="flex justify-center">
          <button className="w-full py-2 bg-black rounded-[57px] shadow-[inset_-1px_1px_47.80px_rgba(69,34,115,1.00)] border-2 border-indigo-900 flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity">
            <span className="text-violet-500 text-xs sm:text-sm font-bold font-['Syne']">Order Now</span>
          </button>
        </div>
      </div>
    </div>
  )
}