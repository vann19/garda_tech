"use client";

import { useState, useEffect } from 'react';
import Link from "next/link";
import { CheckCircle2, ChevronLeft } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Pricing() {
  const [activeCategory, setActiveCategory] = useState('maintenance') ;
  const [scale, setScale] = useState(1);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
    });

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

  // Whenever activeCategory changes, refresh AOS so it detects the newly rendered cards
  useEffect(() => {
    AOS.refresh();
  }, [activeCategory]);

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
    { id: 'mobile', name: 'Mobile App Development' },
    { id: 'audit', name: 'Audit Services' }
  ];

  // Baris pertama kategori
  const firstRowCategories = categories.slice(0, 4);
  // Baris kedua kategori
  const secondRowCategories = categories.slice(4, 8);
  // Baris ketiga kategori (Mobile App Development)
  const thirdRowCategories = categories.slice(8, 11);

  const services: Record<string, { tier: string; slug: string; price: string; period: string; features: string[]; promo?: string }[]> = {
    maintenance: [
      {
        tier: "Basic Care",
        slug: "basic-care",
        price: "Rp300.000",
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
        slug: "growth-care",
        price: "Rp1.000.000",
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
        slug: "pro-care",
        price: "Rp3.000.000",
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
        slug: "speed-basic",
        price: "Rp500.000",
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
        slug: "speed-growth",
        price: "Rp2.000.000",
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
        slug: "speed-pro",
        price: "Rp7.000.000",
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
        slug: "ux-review-mini",
        price: "Rp500.000",
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
        slug: "ux-prototype",
        price: "Rp2.000.000",
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
        slug: "ux-full-system",
        price: "Rp8.000.000",
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
        slug: "brand-kit-mini",
        price: "Rp500.000",
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
        slug: "brand-kit-growth",
        price: "Rp2.000.000",
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
        slug: "brand-kit-pro",
        price: "Rp7.000.000",
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
        slug: "mini-deck",
        price: "Rp300.000",
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
        slug: "company-profile-pro",
        price: "Rp1.500.000",
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
        slug: "pro-bundle",
        price: "Rp5.000.000",
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
        slug: "content-starter",
        price: "Rp300.000",
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
        slug: "content-growth",
        price: "Rp1.000.000",
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
        slug: "content-pro",
        price: "Rp4.000.000",
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
        slug: "starter-templates",
        price: "Rp200.000",
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
        slug: "growth-templates",
        price: "Rp700.000",
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
        slug: "pro-templates",
        price: "Rp3.000.000",
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
        slug: "mini-workshop",
        price: "Rp300.000",
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
        slug: "growth-workshop",
        price: "Rp1.000.000",
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
        slug: "pro-workshop",
        price: "Rp4.000.000",
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
        slug: "website-basic",
        price: "Rp2.000.000",
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
        slug: "website-growth",
        price: "Rp7.000.000",
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
        slug: "web-app-mvp",
        price: "Rp20.000.000",
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
        slug: "app-mvp-mini",
        price: "Rp10.000.000",
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
        slug: "app-growth",
        price: "Rp25.000.000",
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
        slug: "app-pro",
        price: "Rp60.000.000",
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
    ],
    audit: [
      {
        tier: "Basic Audit",
        slug: "basic-audit",
        price: "Rp300.000",
        period: "/bulan",
        features: [
            "Bedah tampilan & konten",
            "Ramah mobile",
            "Audit kepercayaan",
            "Quick scan teknis",
            "3 ide copywriting CTA",
            "Konsultasi selama 30 menit",
            "1x revisi"
        ],
        promo: "Bayar 3 bulan → bonus 1x mini audit"
      },
      {
        tier: "Growth Audit",
        slug: "growth-audit",
        price: "Rp1.500.000",
        period: "/bulan",
        features: [
            "Paket Basic Audit",
            "Audit funnel",
            "Audit kompetitor",
            "Audit tracking readiness",
            "Laporan strategis",
            "Wireframe perbaikan",
            "Konsultasi selama 60 menit",
            "2x revisi"
        ],
        promo: "Kontrak 6 bulan → diskon 3%"
      },
      {
        tier: "Pro Audit",
        slug: "pro-audit",
        price: "Rp5.000.000",
        period: "/bulan",
        features: [
            "Paket Growth Audit",
            "Audit UX",
            "Audit keamanan",
            "Masterplan Konten & SEO",
            "Laporan eksekutif",
            "Prototype Figma",
            "Tracking plan",
            "2x sesi konsultasi",
            "Unlimited revisi"
        ],
        promo: "Kontrak 12 bulan → bonus 1x UI/UX review mini"
      }
    ]
  };

  return (
    <div className="w-full min-h-screen bg-white overflow-x-hidden font-['Inter'] relative">
      
      {/* Background blur effects - clean white/light HSL theme */}
      <div className="fixed w-[600px] h-[600px] left-[-150px] top-[10%] bg-violet-100/40 rounded-full blur-[140px] opacity-60 pointer-events-none z-0"></div>
      <div className="fixed w-[500px] h-[500px] right-[-100px] top-[40%] bg-purple-50/40 rounded-full blur-[120px] opacity-50 pointer-events-none z-0"></div>
      
      {/* Tombol Kembali */}
      <div className="relative z-20 w-full pt-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" data-aos="fade-down" data-aos-duration="600">
        <Link 
          href="/" 
          className="inline-flex items-center text-gray-400 hover:text-gray-900 font-semibold transition-colors group text-sm"
        >
          <svg 
            className="w-4 h-4 mr-1 transform group-hover:-translate-x-1 transition-transform" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Kembali
        </Link>
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Service Packages Badge */}
          <div className="flex justify-center mt-6 md:mt-2 mb-6" data-aos="fade-down" data-aos-delay="100">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#7C3AED]/8 border border-[#7C3AED]/20 text-[#7C3AED] text-sm font-bold shadow-sm font-['Inter']">
              <span className="w-2 h-2 rounded-full bg-[#7C3AED] animate-pulse" />
              Layanan & Paket Harga
            </div>
          </div>

          {/* Title */}
          <div className="text-center mb-6 md:mb-8" data-aos="fade-down" data-aos-delay="200">
            <h1 className="text-gray-900 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-['Inter'] tracking-tight leading-tight">
              Flexible Packages.
            </h1>
            <h2 className="text-[#7C3AED] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-['Inter'] tracking-tight mt-2">
              Transparent Pricing.
            </h2>
          </div>

          {/* Description */}
          <p className="text-gray-500 text-sm sm:text-base md:text-lg text-center font-['Inter'] max-w-2xl mx-auto mb-8 md:mb-12 leading-relaxed" data-aos="fade-up" data-aos-delay="300">
            Setiap paket dirancang untuk menyesuaikan kebutuhan dan skala bisnis Anda,
            dengan rincian biaya yang transparan tanpa biaya tersembunyi.
          </p>

          {/* Kebijakan Revisi */}
          <div className="bg-violet-50/40 backdrop-blur-sm rounded-[24px] border border-violet-100/80 p-6 sm:p-8 mb-8 md:mb-12 shadow-sm max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="400">
            <h3 className="text-[#7C3AED] text-lg md:text-xl font-bold font-['Inter'] mb-4 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-[#7C3AED] rounded-full inline-block" />
              Kebijakan Revisi & Garansi
            </h3>
            <div className="space-y-3 font-['Inter'] text-sm sm:text-base">
              <p className="text-gray-600 leading-relaxed"><span className="text-gray-900 font-bold">Minor:</span> perubahan teks/typo, ganti foto, warna/font kecil, spacing/alignment, penyusunan kalimat CTA.</p>
              <p className="text-gray-600 leading-relaxed"><span className="text-gray-900 font-bold">Major:</span> ubah struktur besar, tambah halaman/fitur baru, redesign total layout, perubahan spesifikasi/requirement inti.</p>
              <p className="text-gray-600 leading-relaxed"><span className="text-gray-900 font-bold">Window Revisi Gratis:</span> Basic/Starter: 7 hari | Growth: 14 hari | Pro: 30 hari.</p>
            </div>
          </div>

          {/* Category Navigation - First Row (4 items) */}
          <div className="flex flex-wrap justify-center gap-2 mb-3" data-aos="fade-up">
            {firstRowCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-full transition-all whitespace-nowrap cursor-pointer font-['Inter'] ${
                  activeCategory === cat.id
                    ? 'bg-[#7C3AED] text-white border-none shadow-md shadow-violet-100'
                    : 'bg-gray-50 text-gray-500 border border-gray-200 hover:bg-violet-50 hover:text-[#7C3AED] hover:border-violet-200'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Category Navigation - Second Row (5 items) */}
          <div className="flex flex-wrap justify-center gap-2 mb-3" data-aos="fade-up">
            {secondRowCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-full transition-all whitespace-nowrap cursor-pointer font-['Inter'] ${
                  activeCategory === cat.id
                    ? 'bg-[#7C3AED] text-white border-none shadow-md shadow-violet-100'
                    : 'bg-gray-50 text-gray-500 border border-gray-200 hover:bg-violet-50 hover:text-[#7C3AED] hover:border-violet-200'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Category Navigation - Third Row (3 items) */}
          <div className="flex flex-wrap justify-center gap-2 mb-10 md:mb-16" data-aos="fade-up">
            {thirdRowCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-full transition-all whitespace-nowrap cursor-pointer font-['Inter'] ${
                  activeCategory === cat.id
                    ? 'bg-[#7C3AED] text-white border-none shadow-md shadow-violet-100'
                    : 'bg-gray-50 text-gray-500 border border-gray-200 hover:bg-violet-50 hover:text-[#7C3AED] hover:border-violet-200'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Pricing Cards Grid */}
          <div className="mt-8">
            {/* Mobile Layout */}
            <div className="block sm:hidden">
              <div className="flex flex-col items-center gap-5">
                {services[activeCategory]?.map((service, index) => (
                  <PricingCard 
                    key={index}
                    title={service.tier}
                    slug={service.slug}
                    price={service.price}
                    period={service.period || ""}
                    features={service.features}
                    promo={service.promo}
                    isMobile={true}
                    index={index}
                  />
                ))}
              </div>
            </div>

            {/* Tablet Layout */}
            <div className="hidden sm:block lg:hidden">
              <div className="grid grid-cols-2 gap-5">
                {services[activeCategory]?.slice(0, 2).map((service, index) => (
                  <PricingCard 
                    key={index}
                    title={service.tier}
                    slug={service.slug}
                    price={service.price}
                    period={service.period || ""}
                    features={service.features}
                    promo={service.promo}
                    isTablet={true}
                    index={index}
                  />
                ))}
              </div>
              {services[activeCategory]?.length > 2 && (
                <div className="flex justify-center mt-5">
                  <PricingCard 
                    title={services[activeCategory][2].tier}
                    slug={services[activeCategory][2].slug}
                    price={services[activeCategory][2].price}
                    period={services[activeCategory][2].period || ""}
                    features={services[activeCategory][2].features}
                    promo={services[activeCategory][2].promo}
                    isTablet={true}
                    className="max-w-md w-full"
                    index={2}
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
                    slug={service.slug}
                    price={service.price}
                    period={service.period || ""}
                    features={service.features}
                    promo={service.promo}
                    width="w-[340px] xl:w-[370px]"
                    index={index}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Promo Banner */}
          <div className="mt-16 p-6 bg-gradient-to-r from-violet-50 to-purple-50 rounded-2xl border border-violet-100 text-center shadow-sm max-w-4xl mx-auto" data-aos="fade-up">
            <h3 className="text-gray-900 text-sm sm:text-base font-bold font-['Inter'] mb-1.5 flex items-center justify-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED] animate-ping" />
              Promo Spesial Tambahan
            </h3>
            <p className="text-gray-500 text-xs sm:text-sm font-['Inter'] leading-relaxed">
              <strong>Early-bird:</strong> DP 50% &le; 3 hari setelah deal &rarr; <strong>diskon 2%</strong> | <strong>Bundle:</strong> Ambil 2 layanan sekaligus &rarr; <strong>diskon 3%</strong> | <strong>Retainer:</strong> Kontrak minimal 3 bulan &rarr; <strong>diskon 3%</strong>.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

// Komponen Pricing Card
function PricingCard({ title, slug, price, period, features, promo, width = "w-full", className = "", isMobile = false, isTablet = false, index = 0 }: { title: string, slug: string, price: string, period: string, features: string[], promo?: string, width?: string, className?: string, isMobile?: boolean, isTablet?: boolean, index: number }) {
  // Stagger entry animations for beautiful layout transitions
  const aosAnimation = index % 3 === 0 ? "fade-right" : index % 3 === 1 ? "fade-up" : "fade-left";
  
  return (
    <div 
      className={`${width} ${className} bg-white rounded-[24px] border border-violet-100/80 shadow-md shadow-violet-100/5 p-6 relative overflow-hidden hover:border-violet-300 hover:shadow-lg hover:shadow-violet-100/10 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between min-h-[460px]`}
      data-aos={aosAnimation}
      data-aos-delay={index * 100}
    >
      
      <div className="relative z-10 flex-1">
        {/* Title */}
        <h3 className="text-gray-900 text-lg md:text-xl font-extrabold font-['Inter'] tracking-tight mb-2 leading-tight">
          {title}
        </h3>

        {/* Price Tag */}
        <div className="mb-5 flex items-baseline gap-1 font-['Inter'] font-semibold">
          <span className="text-2xl sm:text-3xl font-extrabold text-[#7C3AED] tracking-tight">{price}</span>
          {period && <span className="text-xs text-gray-400 font-semibold">{period}</span>}
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-100 mb-5" />

        {/* Features List */}
        <div className="space-y-3.5 mb-6">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-2.5">
              <span className="mt-[3px] shrink-0 w-4 h-4 rounded-full bg-violet-50 flex items-center justify-center border border-violet-100/85 text-[#7C3AED]">
                <CheckCircle2 className="w-3.5 h-3.5" />
              </span>
              <span className="text-gray-600 text-xs sm:text-sm font-['Inter'] leading-relaxed font-medium">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 mt-auto">
        {/* Promo tag */}
        {promo && (
          <div className="mb-4 p-2.5 bg-violet-50/50 rounded-xl border border-violet-100/60">
            <p className="text-[#7C3AED] text-xs font-bold font-['Inter'] text-center leading-normal">
              {promo}
            </p>
          </div>
        )}

        {/* Order Button */}
        <div className="flex justify-center">
          <Link
            href={`/price/${slug}`}
            className="w-full py-3 bg-[#7C3AED] hover:bg-[#6D28D9] text-white rounded-xl shadow-md shadow-violet-200/50 flex items-center justify-center font-bold font-['Inter'] tracking-tight text-xs sm:text-sm cursor-pointer hover:scale-[1.01] active:scale-95 transition-all duration-200"
          >
            Order Now
          </Link>
        </div>
      </div>
    </div>
  )
}