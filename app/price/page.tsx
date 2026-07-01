"use client";

import { useState, useEffect } from 'react';
import Link from "next/link";
import { CheckCircle2 } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useLanguage } from "@/context/LanguageContext";

export default function Pricing() {
  const { lang } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('maintenance');
  const [scale, setScale] = useState(1);

  const t = lang === 'id' ? {
    badge: 'Layanan & Paket Harga',
    h1: 'Flexible Packages.',
    h2: 'Transparent Pricing.',
    desc: 'Setiap paket dirancang untuk menyesuaikan kebutuhan dan skala bisnis Anda, dengan rincian biaya yang transparan tanpa biaya tersembunyi.',
    revisiTitle: 'Kebijakan Revisi & Garansi',
    revisiMinor: 'Minor:',
    revisiMinorDesc: ' perubahan teks/typo, ganti foto, warna/font kecil, spacing/alignment, penyusunan kalimat CTA.',
    revisiMajor: 'Major:',
    revisiMajorDesc: ' ubah struktur besar, tambah halaman/fitur baru, redesign total layout, perubahan spesifikasi/requirement inti.',
    revisiWindow: 'Window Revisi Gratis:',
    revisiWindowDesc: ' Basic/Starter: 7 hari | Growth: 14 hari | Pro: 30 hari.',
    promoTitle: 'Promo Spesial Tambahan',
    promoDesc: 'Early-bird: DP 50% ≤ 3 hari setelah deal → diskon 2% | Bundle: Ambil 2 layanan sekaligus → diskon 3% | Retainer: Kontrak minimal 3 bulan → diskon 3%.',
    back: 'Kembali',
    orderBtn: 'Pesan Sekarang',
    categories: [
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
      { id: 'audit', name: 'Audit Services' },
    ],
  } : {
    badge: 'Services & Pricing',
    h1: 'Flexible Packages.',
    h2: 'Transparent Pricing.',
    desc: 'Every package is designed to fit your business needs and scale, with transparent pricing and no hidden fees.',
    revisiTitle: 'Revision & Guarantee Policy',
    revisiMinor: 'Minor:',
    revisiMinorDesc: ' text/typo changes, photo swaps, small color/font tweaks, spacing/alignment, CTA rewording.',
    revisiMajor: 'Major:',
    revisiMajorDesc: ' large structural changes, adding new pages/features, total layout redesign, core spec/requirement changes.',
    revisiWindow: 'Free Revision Window:',
    revisiWindowDesc: ' Basic/Starter: 7 days | Growth: 14 days | Pro: 30 days.',
    promoTitle: 'Special Promotions',
    promoDesc: 'Early-bird: 50% down payment ≤ 3 days after deal → 2% discount | Bundle: Take 2 services at once → 3% discount | Retainer: Minimum 3-month contract → 3% discount.',
    back: 'Back',
    orderBtn: 'Order Now',
    categories: [
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
      { id: 'audit', name: 'Audit Services' },
    ],
  };

  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: 'ease-out-cubic' });
    const handleResize = () => {
      const scaleX = window.innerWidth / 1728;
      const scaleY = window.innerHeight / 1109;
      setScale(Math.min(scaleX, scaleY, 1) * (window.innerWidth < 768 ? 0.85 : 1));
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => { AOS.refresh(); }, [activeCategory]);

  const firstRowCategories = t.categories.slice(0, 4);
  const secondRowCategories = t.categories.slice(4, 8);
  const thirdRowCategories = t.categories.slice(8, 11);

  const services: Record<string, { tier: string; slug: string; price: string; period: string; features: string[]; promo?: string }[]> = {
    maintenance: [
      {
        tier: "Basic Care", slug: "basic-care", price: "Rp300.000", period: lang === 'id' ? "/bulan" : "/month",
        features: lang === 'id' ? [
          "Bugfix minor", "2 update konten", "Backup basic", "Laporan singkat", "SLA: 2×24 jam", "Maks 2 request minor/bulan"
        ] : [
          "Minor bugfix", "2 content updates", "Basic backup", "Short report", "SLA: 2×24 hours", "Max 2 minor requests/month"
        ],
        promo: lang === 'id' ? "Bayar 3 bulan → bonus 1x mini audit" : "Pay 3 months → get 1x mini audit"
      },
      {
        tier: "Growth Care", slug: "growth-care", price: "Rp1.000.000", period: lang === 'id' ? "/bulan" : "/month",
        features: lang === 'id' ? [
          "Semua Basic +", "Monitoring uptime", "Speed check", "4 update/bulan", "Laporan bulanan", "SLA: 1×24 jam", "Maks 4 request minor/bulan"
        ] : [
          "All Basic +", "Uptime monitoring", "Speed check", "4 updates/month", "Monthly report", "SLA: 1×24 hours", "Max 4 minor requests/month"
        ],
        promo: lang === 'id' ? "Kontrak 6 bulan → diskon 3%" : "6-month contract → 3% discount"
      },
      {
        tier: "Pro Care", slug: "pro-care", price: "Rp3.000.000", period: lang === 'id' ? "/bulan" : "/month",
        features: lang === 'id' ? [
          "Semua Growth +", "Hardening berkala", "Rollback plan", "1 sesi konsultasi/bulan", "SLA: 4–8 jam", "Minor unlimited"
        ] : [
          "All Growth +", "Regular hardening", "Rollback plan", "1 consultation/month", "SLA: 4–8 hours", "Unlimited minor"
        ],
        promo: lang === 'id' ? "Kontrak 12 bulan → bonus 1x UI/UX review mini" : "12-month contract → bonus 1x mini UI/UX review"
      }
    ],
    performance: [
      {
        tier: "Speed Basic", slug: "speed-basic", price: "Rp500.000", period: "",
        features: lang === 'id' ? [
          "Kompres gambar", "Minify CSS/JS", "Lazy load", "Rapihin asset/plugin", "1x minor revisi", "Pengerjaan 2–4 hari"
        ] : [
          "Image compression", "Minify CSS/JS", "Lazy load", "Asset/plugin cleanup", "1x minor revision", "Delivery 2–4 days"
        ],
        promo: lang === 'id' ? "Bundling dengan Website Basic → diskon 2%" : "Bundle with Website Basic → 2% discount"
      },
      {
        tier: "Speed Growth", slug: "speed-growth", price: "Rp2.000.000", period: "",
        features: lang === 'id' ? [
          "Semua Basic +", "Caching", "DB cleanup", "Optimasi bottleneck", "Performance testing", "2x minor revisi", "Pengerjaan 1 minggu"
        ] : [
          "All Basic +", "Caching", "DB cleanup", "Bottleneck optimization", "Performance testing", "2x minor revisions", "Delivery 1 week"
        ],
        promo: lang === 'id' ? "Bonus 1 laporan performa" : "Bonus 1 performance report"
      },
      {
        tier: "Speed Pro", slug: "speed-pro", price: "Rp7.000.000", period: "",
        features: lang === 'id' ? [
          "Staging environment", "Audit dependency", "Deploy aman", "Monitoring basic", "Minor unlimited", "Pengerjaan 2–4 minggu"
        ] : [
          "Staging environment", "Dependency audit", "Safe deployment", "Basic monitoring", "Unlimited minor", "Delivery 2–4 weeks"
        ],
        promo: lang === 'id' ? "Ambil Pro Care 3 bulan → diskon 3%" : "Get Pro Care 3 months → 3% discount"
      }
    ],
    design: [
      {
        tier: "UX Review Mini", slug: "ux-review-mini", price: "Rp500.000", period: "",
        features: lang === 'id' ? [
          "Review 1 flow", "Rekomendasi", "Wireframe kasar", "Call 30 menit", "1x minor revisi", "Pengerjaan 2–4 hari"
        ] : [
          "Review 1 flow", "Recommendations", "Rough wireframe", "30-min call", "1x minor revision", "Delivery 2–4 days"
        ],
        promo: lang === 'id' ? "Lanjut Prototype → potong Rp150k" : "Continue to Prototype → Rp150k off"
      },
      {
        tier: "UX Prototype", slug: "ux-prototype", price: "Rp2.000.000", period: "",
        features: lang === 'id' ? [
          "Flow + wireframe", "Prototype Figma (1–3 halaman)", "1 revisi struktur ringan", "2x minor revisi", "Pengerjaan 1–2 minggu"
        ] : [
          "Flow + wireframe", "Figma prototype (1–3 pages)", "1 light structure revision", "2x minor revisions", "Delivery 1–2 weeks"
        ],
        promo: lang === 'id' ? "Bonus 1 template cover launch" : "Bonus 1 launch cover template"
      },
      {
        tier: "UX Full System", slug: "ux-full-system", price: "Rp8.000.000", period: "",
        features: lang === 'id' ? [
          "Design system mini", "Prototype multi halaman", "Handoff developer", "Minor unlimited", "2x major terkontrol", "Pengerjaan 3–6 minggu"
        ] : [
          "Mini design system", "Multi-page prototype", "Developer handoff", "Unlimited minor", "2x controlled major", "Delivery 3–6 weeks"
        ],
        promo: lang === 'id' ? "Bundle Web App MVP → diskon 3%" : "Bundle Web App MVP → 3% discount"
      }
    ],
    brand: [
      {
        tier: "Brand Kit Mini", slug: "brand-kit-mini", price: "Rp500.000", period: "",
        features: lang === 'id' ? [
          "Rapihin logo", "Warna + font", "2 template konten", "1x minor revisi", "Pengerjaan 2–5 hari"
        ] : [
          "Logo cleanup", "Color + font", "2 content templates", "1x minor revision", "Delivery 2–5 days"
        ],
        promo: lang === 'id' ? "Bonus 5 hook caption" : "Bonus 5 hook captions"
      },
      {
        tier: "Brand Kit Growth", slug: "brand-kit-growth", price: "Rp2.000.000", period: "",
        features: lang === 'id' ? [
          "Logo final", "Guideline mini", "6 template konten", "Highlight IG set", "2x minor revisi", "Pengerjaan 1–2 minggu"
        ] : [
          "Final logo", "Mini guideline", "6 content templates", "IG highlight set", "2x minor revisions", "Delivery 1–2 weeks"
        ],
        promo: lang === 'id' ? "Ambil Content System → diskon 2%" : "Get Content System → 2% discount"
      },
      {
        tier: "Brand Kit Pro", slug: "brand-kit-pro", price: "Rp7.000.000", period: "",
        features: lang === 'id' ? [
          "Guideline lengkap", "Komponen UI", "Handoff developer", "Minor unlimited", "Pengerjaan 2–4 minggu"
        ] : [
          "Full guideline", "UI components", "Developer handoff", "Unlimited minor", "Delivery 2–4 weeks"
        ],
        promo: lang === 'id' ? "Bonus 1 sesi workshop brand usage" : "Bonus 1 brand usage workshop session"
      }
    ],
    profile: [
      {
        tier: "Mini Deck", slug: "mini-deck", price: "Rp300.000", period: "",
        features: lang === 'id' ? [
          "1 pager atau 5 slide", "1x minor revisi", "Pengerjaan 1–3 hari"
        ] : [
          "1 pager or 5 slides", "1x minor revision", "Delivery 1–3 days"
        ],
        promo: lang === 'id' ? "Bonus cover proposal" : "Bonus proposal cover"
      },
      {
        tier: "Company Profile Pro", slug: "company-profile-pro", price: "Rp1.500.000", period: "",
        features: lang === 'id' ? [
          "8–12 slide", "Format PDF", "2x minor revisi", "Pengerjaan 3–7 hari"
        ] : [
          "8–12 slides", "PDF format", "2x minor revisions", "Delivery 3–7 days"
        ],
        promo: lang === 'id' ? "Bundle Brand Kit Mini → diskon 2%" : "Bundle Brand Kit Mini → 2% discount"
      },
      {
        tier: "Pro Bundle", slug: "pro-bundle", price: "Rp5.000.000", period: "",
        features: lang === 'id' ? [
          "2 deck (profile + pitch)", "3x minor revisi", "1x revisi arah", "Pengerjaan 1–2 minggu"
        ] : [
          "2 decks (profile + pitch)", "3x minor revisions", "1x direction revision", "Delivery 1–2 weeks"
        ],
        promo: lang === 'id' ? "Bonus template proposal & brief" : "Bonus proposal & brief template"
      }
    ],
    content: [
      {
        tier: "Content Starter", slug: "content-starter", price: "Rp300.000", period: "",
        features: lang === 'id' ? [
          "Kalender 2 minggu", "10 ide konten", "5 template caption", "CTA library", "1x minor revisi", "Pengerjaan 1–2 hari"
        ] : [
          "2-week calendar", "10 content ideas", "5 caption templates", "CTA library", "1x minor revision", "Delivery 1–2 days"
        ],
        promo: lang === 'id' ? "Bonus 1 script video 30 detik" : "Bonus 1 x 30-second video script"
      },
      {
        tier: "Content Growth", slug: "content-growth", price: "Rp1.000.000", period: "",
        features: lang === 'id' ? [
          "Kalender 1 bulan", "SOP produksi", "Hook/CTA library", "Approval flow", "2x minor revisi", "Pengerjaan 3–7 hari"
        ] : [
          "1-month calendar", "Production SOP", "Hook/CTA library", "Approval flow", "2x minor revisions", "Delivery 3–7 days"
        ],
        promo: lang === 'id' ? "Bonus 2 template desain konten" : "Bonus 2 content design templates"
      },
      {
        tier: "Content Pro", slug: "content-pro", price: "Rp4.000.000", period: "",
        features: lang === 'id' ? [
          "Semua Growth +", "Guideline visual", "Reporting system", "Workflow tim", "Minor unlimited", "Pengerjaan 2–4 minggu"
        ] : [
          "All Growth +", "Visual guideline", "Reporting system", "Team workflow", "Unlimited minor", "Delivery 2–4 weeks"
        ],
        promo: lang === 'id' ? "Lanjut produksi konten → diskon 3% bulan pertama" : "Continue content production → 3% off first month"
      }
    ],
    templates: [
      {
        tier: "Starter Templates", slug: "starter-templates", price: "Rp200.000", period: "",
        features: lang === 'id' ? [
          "Proposal template", "Brief template", "Invoice template", "Handover checklist", "1x minor revisi", "Pengerjaan 1–2 hari"
        ] : [
          "Proposal template", "Brief template", "Invoice template", "Handover checklist", "1x minor revision", "Delivery 1–2 days"
        ],
        promo: lang === 'id' ? "Bonus tracker leads (Sheets)" : "Bonus leads tracker (Sheets)"
      },
      {
        tier: "Growth Templates", slug: "growth-templates", price: "Rp700.000", period: "",
        features: lang === 'id' ? [
          "Semua Starter +", "Kontrak/SPK template", "SOP komunikasi", "Project tracker", "2x minor revisi", "Pengerjaan 3–5 hari"
        ] : [
          "All Starter +", "Contract/SPK template", "Communication SOP", "Project tracker", "2x minor revisions", "Delivery 3–5 days"
        ],
        promo: lang === 'id' ? "Bonus setup Notion/Sheets 30 menit" : "Bonus 30-min Notion/Sheets setup"
      },
      {
        tier: "Pro Templates", slug: "pro-templates", price: "Rp3.000.000", period: "",
        features: lang === 'id' ? [
          "SOP delivery end-to-end", "QA checklist", "Support SOP", "Escalation flow", "Minor unlimited", "Pengerjaan 1–2 minggu"
        ] : [
          "End-to-end delivery SOP", "QA checklist", "Support SOP", "Escalation flow", "Unlimited minor", "Delivery 1–2 weeks"
        ],
        promo: lang === 'id' ? "Bonus 1 mini workshop internal" : "Bonus 1 internal mini workshop"
      }
    ],
    workshop: [
      {
        tier: "Mini Workshop", slug: "mini-workshop", price: "Rp300.000", period: "",
        features: lang === 'id' ? [
          "1 topik spesifik", "PDF checklist", "Q&A 15 menit", "Durasi 60–90 menit"
        ] : [
          "1 specific topic", "PDF checklist", "Q&A 15 minutes", "Duration 60–90 minutes"
        ],
        promo: lang === 'id' ? "Rekaman (opsional)" : "Recording (optional)"
      },
      {
        tier: "Growth Workshop", slug: "growth-workshop", price: "Rp1.000.000", period: "",
        features: lang === 'id' ? [
          "2 sesi workshop", "SOP + praktik tools", "Simulasi", "Follow-up Q&A 30 menit"
        ] : [
          "2 workshop sessions", "SOP + tools practice", "Simulation", "Follow-up Q&A 30 minutes"
        ],
        promo: lang === 'id' ? "Bonus template sistem kerja" : "Bonus work system template"
      },
      {
        tier: "Pro Workshop", slug: "pro-workshop", price: "Rp4.000.000", period: "",
        features: lang === 'id' ? [
          "3–5 sesi", "Training tim", "Dokumentasi", "2x follow-up Q&A 60 menit"
        ] : [
          "3–5 sessions", "Team training", "Documentation", "2x follow-up Q&A 60 minutes"
        ],
        promo: lang === 'id' ? "Ambil retainer 3 bulan → diskon 3%" : "Get 3-month retainer → 3% discount"
      }
    ],
    web: [
      {
        tier: "Website Basic", slug: "website-basic", price: "Rp2.000.000", period: "",
        features: lang === 'id' ? [
          "3–5 halaman", "Responsive design", "Form/WA integration", "SEO basic", "2x minor revisi", "Pengerjaan 1–2 minggu"
        ] : [
          "3–5 pages", "Responsive design", "Form/WA integration", "Basic SEO", "2x minor revisions", "Delivery 1–2 weeks"
        ],
        promo: lang === 'id' ? "Bonus 1 bulan Basic Care" : "Bonus 1 month Basic Care"
      },
      {
        tier: "Website Growth", slug: "website-growth", price: "Rp7.000.000", period: "",
        features: lang === 'id' ? [
          "6–12 halaman", "Portfolio/case studies", "Leads ke Sheets/Notion", "Speed optimization", "3x minor revisi", "Pengerjaan 2–5 minggu"
        ] : [
          "6–12 pages", "Portfolio/case studies", "Leads to Sheets/Notion", "Speed optimization", "3x minor revisions", "Delivery 2–5 weeks"
        ],
        promo: lang === 'id' ? "Ambil Brand Kit Mini → diskon 2%" : "Get Brand Kit Mini → 2% discount"
      },
      {
        tier: "Web App MVP", slug: "web-app-mvp", price: "Rp20.000.000", period: "",
        features: lang === 'id' ? [
          "Fitur inti (scope ketat)", "Admin panel basic", "Database integration", "Role sederhana", "Dokumentasi", "Minor unlimited + 2x major", "Pengerjaan 1–3 bulan"
        ] : [
          "Core features (tight scope)", "Basic admin panel", "Database integration", "Simple roles", "Documentation", "Unlimited minor + 2x major", "Delivery 1–3 months"
        ],
        promo: lang === 'id' ? "Bonus 1x UX Review Mini setelah launch" : "Bonus 1x UX Review Mini after launch"
      }
    ],
    mobile: [
      {
        tier: "App MVP Mini", slug: "app-mvp-mini", price: "Rp10.000.000", period: "",
        features: lang === 'id' ? [
          "3–5 screen", "1 fitur utama", "API sederhana", "2x minor revisi", "Pengerjaan 3–6 minggu"
        ] : [
          "3–5 screens", "1 main feature", "Simple API", "2x minor revisions", "Delivery 3–6 weeks"
        ],
        promo: lang === 'id' ? "Bonus 1 sesi workshop handover" : "Bonus 1 handover workshop session"
      },
      {
        tier: "App Growth", slug: "app-growth", price: "Rp25.000.000", period: "",
        features: lang === 'id' ? [
          "Auth system", "Multi screen", "Notifikasi basic", "Dashboard", "3x minor revisi", "Pengerjaan 2–3 bulan"
        ] : [
          "Auth system", "Multi screen", "Basic notifications", "Dashboard", "3x minor revisions", "Delivery 2–3 months"
        ],
        promo: lang === 'id' ? "Ambil UI/UX Prototype → diskon 2%" : "Get UI/UX Prototype → 2% discount"
      },
      {
        tier: "App Pro", slug: "app-pro", price: "Rp60.000.000", period: "",
        features: lang === 'id' ? [
          "Scalable architecture", "Staging-prod", "Monitoring", "Analytics", "Role-based access", "Minor unlimited + 2x major", "Pengerjaan 3–6 bulan"
        ] : [
          "Scalable architecture", "Staging-prod", "Monitoring", "Analytics", "Role-based access", "Unlimited minor + 2x major", "Delivery 3–6 months"
        ],
        promo: lang === 'id' ? "Bonus 3 bulan Growth Care" : "Bonus 3 months Growth Care"
      }
    ],
    audit: [
      {
        tier: "Basic Audit", slug: "basic-audit", price: "Rp300.000", period: lang === 'id' ? "/bulan" : "/month",
        features: lang === 'id' ? [
          "Bedah tampilan & konten", "Ramah mobile", "Audit kepercayaan", "Quick scan teknis", "3 ide copywriting CTA", "Konsultasi selama 30 menit", "1x revisi"
        ] : [
          "UI & content analysis", "Mobile-friendly check", "Trust audit", "Quick technical scan", "3 CTA copywriting ideas", "30-minute consultation", "1x revision"
        ],
        promo: lang === 'id' ? "Bayar 3 bulan → bonus 1x mini audit" : "Pay 3 months → get 1x mini audit"
      },
      {
        tier: "Growth Audit", slug: "growth-audit", price: "Rp1.500.000", period: lang === 'id' ? "/bulan" : "/month",
        features: lang === 'id' ? [
          "Paket Basic Audit", "Audit funnel", "Audit kompetitor", "Audit tracking readiness", "Laporan strategis", "Wireframe perbaikan", "Konsultasi selama 60 menit", "2x revisi"
        ] : [
          "Basic Audit package", "Funnel audit", "Competitor audit", "Tracking readiness audit", "Strategic report", "Improvement wireframe", "60-minute consultation", "2x revisions"
        ],
        promo: lang === 'id' ? "Kontrak 6 bulan → diskon 3%" : "6-month contract → 3% discount"
      },
      {
        tier: "Pro Audit", slug: "pro-audit", price: "Rp5.000.000", period: lang === 'id' ? "/bulan" : "/month",
        features: lang === 'id' ? [
          "Paket Growth Audit", "Audit UX", "Audit keamanan", "Masterplan Konten & SEO", "Laporan eksekutif", "Prototype Figma", "Tracking plan", "2x sesi konsultasi", "Unlimited revisi"
        ] : [
          "Growth Audit package", "UX audit", "Security audit", "Content & SEO masterplan", "Executive report", "Figma prototype", "Tracking plan", "2x consultation sessions", "Unlimited revisions"
        ],
        promo: lang === 'id' ? "Kontrak 12 bulan → bonus 1x UI/UX review mini" : "12-month contract → bonus 1x mini UI/UX review"
      }
    ]
  };

  return (
    <div className="w-full min-h-screen bg-white overflow-x-hidden font-['Inter'] relative">

      <div className="fixed w-[600px] h-[600px] left-[-150px] top-[10%] bg-violet-100/40 rounded-full blur-[140px] opacity-60 pointer-events-none z-0" />
      <div className="fixed w-[500px] h-[500px] right-[-100px] top-[40%] bg-purple-50/40 rounded-full blur-[120px] opacity-50 pointer-events-none z-0" />

      {/* Tombol Kembali */}
      <div className="relative z-20 w-full pt-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" data-aos="fade-down" data-aos-duration="600">
        <Link href="/" className="inline-flex items-center text-gray-400 hover:text-gray-900 font-semibold transition-colors group text-sm">
          <svg className="w-4 h-4 mr-1 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          {t.back}
        </Link>
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-7xl mx-auto">

          {/* Badge */}
          <div className="flex justify-center mt-6 md:mt-2 mb-6" data-aos="fade-down" data-aos-delay="100">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#7C3AED]/8 border border-[#7C3AED]/20 text-[#7C3AED] text-sm font-bold shadow-sm font-['Inter']">
              <span className="w-2 h-2 rounded-full bg-[#7C3AED] animate-pulse" />
              {t.badge}
            </div>
          </div>

          {/* Title */}
          <div className="text-center mb-6 md:mb-8" data-aos="fade-down" data-aos-delay="200">
            <h1 className="text-gray-900 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-['Inter'] tracking-tight leading-tight">
              {t.h1}
            </h1>
            <h2 className="text-[#7C3AED] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-['Inter'] tracking-tight mt-2">
              {t.h2}
            </h2>
          </div>

          {/* Description */}
          <p className="text-gray-500 text-sm sm:text-base md:text-lg text-center font-['Inter'] max-w-2xl mx-auto mb-8 md:mb-12 leading-relaxed" data-aos="fade-up" data-aos-delay="300">
            {t.desc}
          </p>

          {/* Kebijakan Revisi */}
          <div className="bg-violet-50/40 backdrop-blur-sm rounded-[24px] border border-violet-100/80 p-6 sm:p-8 mb-8 md:mb-12 shadow-sm max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="400">
            <h3 className="text-[#7C3AED] text-lg md:text-xl font-bold font-['Inter'] mb-4 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-[#7C3AED] rounded-full inline-block" />
              {t.revisiTitle}
            </h3>
            <div className="space-y-3 font-['Inter'] text-sm sm:text-base">
              <p className="text-gray-600 leading-relaxed">
                <span className="text-gray-900 font-bold">{t.revisiMinor}</span>{t.revisiMinorDesc}
              </p>
              <p className="text-gray-600 leading-relaxed">
                <span className="text-gray-900 font-bold">{t.revisiMajor}</span>{t.revisiMajorDesc}
              </p>
              <p className="text-gray-600 leading-relaxed">
                <span className="text-gray-900 font-bold">{t.revisiWindow}</span>{t.revisiWindowDesc}
              </p>
            </div>
          </div>

          {/* Category Nav - Row 1 */}
          <div className="flex flex-wrap justify-center gap-2 mb-3" data-aos="fade-up">
            {firstRowCategories.map((cat) => (
              <button key={cat.id} onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-full transition-all whitespace-nowrap cursor-pointer font-['Inter'] ${
                  activeCategory === cat.id
                    ? 'bg-[#7C3AED] text-white shadow-md shadow-violet-100'
                    : 'bg-gray-50 text-gray-500 border border-gray-200 hover:bg-violet-50 hover:text-[#7C3AED] hover:border-violet-200'
                }`}>{cat.name}</button>
            ))}
          </div>

          {/* Category Nav - Row 2 */}
          <div className="flex flex-wrap justify-center gap-2 mb-3" data-aos="fade-up">
            {secondRowCategories.map((cat) => (
              <button key={cat.id} onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-full transition-all whitespace-nowrap cursor-pointer font-['Inter'] ${
                  activeCategory === cat.id
                    ? 'bg-[#7C3AED] text-white shadow-md shadow-violet-100'
                    : 'bg-gray-50 text-gray-500 border border-gray-200 hover:bg-violet-50 hover:text-[#7C3AED] hover:border-violet-200'
                }`}>{cat.name}</button>
            ))}
          </div>

          {/* Category Nav - Row 3 */}
          <div className="flex flex-wrap justify-center gap-2 mb-10 md:mb-16" data-aos="fade-up">
            {thirdRowCategories.map((cat) => (
              <button key={cat.id} onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-full transition-all whitespace-nowrap cursor-pointer font-['Inter'] ${
                  activeCategory === cat.id
                    ? 'bg-[#7C3AED] text-white shadow-md shadow-violet-100'
                    : 'bg-gray-50 text-gray-500 border border-gray-200 hover:bg-violet-50 hover:text-[#7C3AED] hover:border-violet-200'
                }`}>{cat.name}</button>
            ))}
          </div>

          {/* Pricing Cards */}
          <div className="mt-8">
            {/* Mobile */}
            <div className="block sm:hidden">
              <div className="flex flex-col items-center gap-5">
                {services[activeCategory]?.map((service, index) => (
                  <PricingCard key={index} title={service.tier} slug={service.slug} price={service.price}
                    period={service.period || ""} features={service.features} promo={service.promo}
                    orderBtn={t.orderBtn} isMobile={true} index={index} />
                ))}
              </div>
            </div>

            {/* Tablet */}
            <div className="hidden sm:block lg:hidden">
              <div className="grid grid-cols-2 gap-5">
                {services[activeCategory]?.slice(0, 2).map((service, index) => (
                  <PricingCard key={index} title={service.tier} slug={service.slug} price={service.price}
                    period={service.period || ""} features={service.features} promo={service.promo}
                    orderBtn={t.orderBtn} isTablet={true} index={index} />
                ))}
              </div>
              {services[activeCategory]?.length > 2 && (
                <div className="flex justify-center mt-5">
                  <PricingCard title={services[activeCategory][2].tier} slug={services[activeCategory][2].slug}
                    price={services[activeCategory][2].price} period={services[activeCategory][2].period || ""}
                    features={services[activeCategory][2].features} promo={services[activeCategory][2].promo}
                    orderBtn={t.orderBtn} isTablet={true} className="max-w-md w-full" index={2} />
                </div>
              )}
            </div>

            {/* Desktop */}
            <div className="hidden lg:block">
              <div className="flex justify-center gap-6 flex-wrap">
                {services[activeCategory]?.map((service, index) => (
                  <PricingCard key={index} title={service.tier} slug={service.slug} price={service.price}
                    period={service.period || ""} features={service.features} promo={service.promo}
                    orderBtn={t.orderBtn} width="w-[340px] xl:w-[370px]" index={index} />
                ))}
              </div>
            </div>
          </div>

          {/* Promo Banner */}
          <div className="mt-16 p-6 bg-gradient-to-r from-violet-50 to-purple-50 rounded-2xl border border-violet-100 text-center shadow-sm max-w-4xl mx-auto" data-aos="fade-up">
            <h3 className="text-gray-900 text-sm sm:text-base font-bold font-['Inter'] mb-1.5 flex items-center justify-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED] animate-ping" />
              {t.promoTitle}
            </h3>
            <p className="text-gray-500 text-xs sm:text-sm font-['Inter'] leading-relaxed">
              {t.promoDesc}
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

function PricingCard({
  title, slug, price, period, features, promo, orderBtn,
  width = "w-full", className = "", isMobile = false, isTablet = false, index = 0
}: {
  title: string; slug: string; price: string; period: string;
  features: string[]; promo?: string; orderBtn: string;
  width?: string; className?: string; isMobile?: boolean; isTablet?: boolean; index: number;
}) {
  const aosAnimation = index % 3 === 0 ? "fade-right" : index % 3 === 1 ? "fade-up" : "fade-left";

  return (
    <div
      className={`${width} ${className} bg-white rounded-[24px] border border-violet-100/80 shadow-md shadow-violet-100/5 p-6 relative overflow-hidden hover:border-violet-300 hover:shadow-lg hover:shadow-violet-100/10 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between min-h-[460px]`}
      data-aos={aosAnimation} data-aos-delay={index * 100}
    >
      <div className="relative z-10 flex-1">
        <h3 className="text-gray-900 text-lg md:text-xl font-extrabold font-['Inter'] tracking-tight mb-2 leading-tight">
          {title}
        </h3>
        <div className="mb-5 flex items-baseline gap-1 font-['Inter'] font-semibold">
          <span className="text-2xl sm:text-3xl font-extrabold text-[#7C3AED] tracking-tight">{price}</span>
          {period && <span className="text-xs text-gray-400 font-semibold">{period}</span>}
        </div>
        <div className="w-full h-px bg-gray-100 mb-5" />
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
        {promo && (
          <div className="mb-4 p-2.5 bg-violet-50/50 rounded-xl border border-violet-100/60">
            <p className="text-[#7C3AED] text-xs font-bold font-['Inter'] text-center leading-normal">{promo}</p>
          </div>
        )}
        <div className="flex justify-center">
          <Link href={`/price/${slug}`}
            className="w-full py-3 bg-[#7C3AED] hover:bg-[#6D28D9] text-white rounded-xl shadow-md shadow-violet-200/50 flex items-center justify-center font-bold font-['Inter'] tracking-tight text-xs sm:text-sm cursor-pointer hover:scale-[1.01] active:scale-95 transition-all duration-200">
            {orderBtn}
          </Link>
        </div>
      </div>
    </div>
  );
}