"use client";

import { use, useState, useEffect } from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ChevronLeft, Info } from "lucide-react";
import { cn } from "@/lib/utils";
import AOS from 'aos';
import 'aos/dist/aos.css';

/* ─────────────────────────────────────────────
   Service data map
 ───────────────────────────────────────────── */
const serviceData: Record<
  string,
  { name: string; price: string; period?: string; priceLabel?: string; features: string[]; category: string }
> = {
  "basic-care":          { name: "Basic Care",          price: "Rp300k–Rp800k",   period: "/bulan", priceLabel: "Start form", features: ["Bugfix minor","2 update konten","Backup basic","Laporan singkat","SLA: 2×24 jam","Maks 2 request minor/bulan"], category: "Maintenance & Support" },
  "growth-care":         { name: "Growth Care",         price: "Rp1jt–Rp2,5jt",   period: "/bulan", priceLabel: "Start form", features: ["Semua Basic +","Monitoring uptime","Speed check","4 update/bulan","Laporan bulanan","SLA: 1×24 jam","Maks 4 request minor/bulan"], category: "Maintenance & Support" },
  "pro-care":            { name: "Pro Care",            price: "Rp3jt–Rp7jt",     period: "/bulan", priceLabel: "Start form", features: ["Semua Growth +","Hardening berkala","Rollback plan","1 sesi konsultasi/bulan","SLA: 4–8 jam","Minor unlimited"], category: "Maintenance & Support" },
  "speed-basic":         { name: "Speed Basic",         price: "Rp500k–Rp1,5jt",  priceLabel: "Start form", features: ["Kompres gambar","Minify CSS/JS","Lazy load","Rapihin asset/plugin","1x minor revisi","Pengerjaan 2–4 hari"], category: "Performance & Reliability" },
  "speed-growth":        { name: "Speed Growth",        price: "Rp2jt–Rp6jt",     priceLabel: "Start form", features: ["Semua Basic +","Caching","DB cleanup","Optimasi bottleneck","Performance testing","2x minor revisi","Pengerjaan 1 minggu"], category: "Performance & Reliability" },
  "speed-pro":           { name: "Speed Pro",           price: "Rp7jt–Rp20jt",    priceLabel: "Start form", features: ["Staging environment","Audit dependency","Deploy aman","Monitoring basic","Minor unlimited","Pengerjaan 2–4 minggu"], category: "Performance & Reliability" },
  "ux-review-mini":      { name: "UX Review Mini",      price: "Rp500k–Rp1,5jt",  priceLabel: "Start form", features: ["Review 1 flow","Rekomendasi","Wireframe kasar","Call 30 menit","1x minor revisi","Pengerjaan 2–4 hari"], category: "UI/UX Review & Design" },
  "ux-prototype":        { name: "UX Prototype",        price: "Rp2jt–Rp7jt",     priceLabel: "Start form", features: ["Flow + wireframe","Prototype Figma (1–3 halaman)","1 revisi struktur ringan","2x minor revisi","Pengerjaan 1–2 minggu"], category: "UI/UX Review & Design" },
  "ux-full-system":      { name: "UX Full System",      price: "Rp8jt–Rp25jt",    priceLabel: "Start form", features: ["Design system mini","Prototype multi halaman","Handoff developer","Minor unlimited","2x major terkontrol","Pengerjaan 3–6 minggu"], category: "UI/UX Review & Design" },
  "brand-kit-mini":      { name: "Brand Kit Mini",      price: "Rp500k–Rp1,5jt",  priceLabel: "Start form", features: ["Rapihin logo","Warna + font","2 template konten","1x minor revisi","Pengerjaan 2–5 hari"], category: "Brand Kit & Visual System" },
  "brand-kit-growth":    { name: "Brand Kit Growth",    price: "Rp2jt–Rp6jt",     priceLabel: "Start form", features: ["Logo final","Guideline mini","6 template konten","Highlight IG set","2x minor revisi","Pengerjaan 1–2 minggu"], category: "Brand Kit & Visual System" },
  "brand-kit-pro":       { name: "Brand Kit Pro",       price: "Rp7jt–Rp20jt",    priceLabel: "Start form", features: ["Guideline lengkap","Komponen UI","Handoff developer","Minor unlimited","Pengerjaan 2–4 minggu"], category: "Brand Kit & Visual System" },
  "mini-deck":           { name: "Mini Deck",           price: "Rp300k–Rp1jt",    priceLabel: "Start form", features: ["1 pager atau 5 slide","1x minor revisi","Pengerjaan 1–3 hari"], category: "Company Profile" },
  "company-profile-pro": { name: "Company Profile Pro", price: "Rp1,5jt–Rp4jt",   priceLabel: "Start form", features: ["8–12 slide","Format PDF","2x minor revisi","Pengerjaan 3–7 hari"], category: "Company Profile" },
  "pro-bundle":          { name: "Pro Bundle",          price: "Rp5jt–Rp12jt",    priceLabel: "Start form", features: ["2 deck (profile + pitch)","3x minor revisi","1x revisi arah","Pengerjaan 1–2 minggu"], category: "Company Profile" },
  "content-starter":     { name: "Content Starter",     price: "Rp300k–Rp800k",   priceLabel: "Start form", features: ["Kalender 2 minggu","10 ide konten","5 template caption","CTA library","1x minor revisi","Pengerjaan 1–2 hari"], category: "Content System" },
  "content-growth":      { name: "Content Growth",      price: "Rp1jt–Rp3jt",     priceLabel: "Start form", features: ["Kalender 1 bulan","SOP produksi","Hook/CTA library","Approval flow","2x minor revisi","Pengerjaan 3–7 hari"], category: "Content System" },
  "content-pro":         { name: "Content Pro",         price: "Rp4jt–Rp10jt",    priceLabel: "Start form", features: ["Semua Growth +","Guideline visual","Reporting system","Workflow tim","Minor unlimited","Pengerjaan 2–4 minggu"], category: "Content System" },
  "starter-templates":   { name: "Starter Templates",   price: "Rp200k–Rp600k",   priceLabel: "Start form", features: ["Proposal template","Brief template","Invoice template","Handover checklist","1x minor revisi","Pengerjaan 1–2 hari"], category: "Template Pack" },
  "growth-templates":    { name: "Growth Templates",    price: "Rp700k–Rp2jt",    priceLabel: "Start form", features: ["Semua Starter +","Kontrak/SPK template","SOP komunikasi","Project tracker","2x minor revisi","Pengerjaan 3–5 hari"], category: "Template Pack" },
  "pro-templates":       { name: "Pro Templates",       price: "Rp3jt–Rp8jt",     priceLabel: "Start form", features: ["SOP delivery end-to-end","QA checklist","Support SOP","Escalation flow","Minor unlimited","Pengerjaan 1–2 minggu"], category: "Template Pack" },
  "mini-workshop":       { name: "Mini Workshop",       price: "Rp300k–Rp800k",   priceLabel: "Start form", features: ["1 topik spesifik","PDF checklist","Q&A 15 menit","Durasi 60–90 menit"], category: "Workshop / Training" },
  "growth-workshop":     { name: "Growth Workshop",     price: "Rp1jt–Rp3jt",     priceLabel: "Start form", features: ["2 sesi workshop","SOP + praktik tools","Simulasi","Follow-up Q&A 30 menit"], category: "Workshop / Training" },
  "pro-workshop":        { name: "Pro Workshop",        price: "Rp4jt–Rp10jt",    priceLabel: "Start form", features: ["3–5 sesi","Training tim","Dokumentasi","2x follow-up Q&A 60 menit"], category: "Workshop / Training" },
  "website-basic":       { name: "Website Basic",       price: "Rp2jt–Rp6jt",     priceLabel: "Start form", features: ["3–5 halaman","Responsive design","Form/WA integration","SEO basic","2x minor revisi","Pengerjaan 1–2 minggu"], category: "Web Development" },
  "website-growth":      { name: "Website Growth",      price: "Rp7jt–Rp20jt",    priceLabel: "Start form", features: ["6–12 halaman","Portfolio/case studies","Leads ke Sheets/Notion","Speed optimization","3x minor revisi","Pengerjaan 2–5 minggu"], category: "Web Development" },
  "web-app-mvp":         { name: "Web App MVP",         price: "Rp20jt–Rp80jt+",  priceLabel: "Start form", features: ["Fitur inti (scope ketat)","Admin panel basic","Database integration","Role sederhana","Dokumentasi","Minor unlimited + 2x major","Pengerjaan 1–3 month"], category: "Web Development" },
  "app-mvp-mini":        { name: "App MVP Mini",        price: "Rp10jt–Rp25jt",   priceLabel: "Start form", features: ["3–5 screen","1 fitur utama","API sederhana","2x minor revisi","Pengerjaan 3–6 minggu"], category: "Mobile App Development" },
  "app-growth":          { name: "App Growth",          price: "Rp25jt–Rp60jt",   priceLabel: "Start form", features: ["Auth system","Multi screen","Notifikasi basic","Dashboard","3x minor revisi","Pengerjaan 2–3 bulan"], category: "Mobile App Development" },
  "app-pro":             { name: "App Pro",             price: "Rp60jt–Rp200jt+", priceLabel: "Start form", features: ["Scalable architecture","Staging-prod","Monitoring","Analytics","Role-based access","Minor unlimited + 2x major","Pengerjaan 3–6 bulan"], category: "Mobile App Development" },
  "basic-audit":         { name: "Basic Audit",         price: "Rp300k–Rp1jt",    priceLabel: "Start form", features: ["Bedah tampilan & konten","Ramah mobile","Audit kepercayaan","Quick scan teknis","3 ide copywriting CTA","Konsultasi selama 30 menit","1x revisi"], category: "Audit Services" },
  "growth-audit":        { name: "Growth Audit",        price: "Rp1,5jt–Rp4jt",   priceLabel: "Start form", features: ["Paket Basic Audit","Audit funnel","Audit kompetitor","Audit tracking readiness","Laporan strategis","Wireframe perbaikan","Konsultasi selama 60 menit","2x revisi"], category: "Audit Services" },
  "pro-audit":           { name: "Pro Audit",           price: "Rp5jt–Rp15jt",    priceLabel: "Start form", features: ["Paket Growth Audit","Audit UX","Audit keamanan","Masterplan Konten & SEO","Laporan eksekutif","Prototype Figma","Tracking plan","2x sesi konsultasi","Unlimited revisi"], category: "Audit Services" },
};

const budgetOptions = [
  "Rp. 2.000.000 - 5.000.000",
  "Rp. 5.000.000 - 10.000.000",
  "Rp. 10.000.000 ++",
  "Masih Ingin Konsultasi",
];

const timelineOptions = ["< 1 bulan", "1 - 2 bulan", "lainnya"];

/* ─────────────────────────────────────────────
   Main Component
 ───────────────────────────────────────────── */
export default function OrderPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const service = serviceData[slug];

  const [form, setForm] = useState({
    namaLengkap: "",
    namaPerusahaan: "",
    email: "",
    whatsapp: "",
    alamat: "",
    detailProyek: "",
    estimasiBudget: "",
    targetWaktu: "",
    targetWaktuCustom: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Prevent double submission
    if (isSubmitting) return;
    
    setIsSubmitting(true);

    // Validate required fields
    if (!form.namaLengkap || !form.email || !form.whatsapp || !form.detailProyek || !form.estimasiBudget) {
      alert("Mohon lengkapi semua field yang bertanda *");
      setIsSubmitting(false);
      return;
    }

    // Validate WhatsApp number (simple validation)
    const waNumber = form.whatsapp.replace(/\D/g, '');
    if (waNumber.length < 10) {
      alert("Nomor WhatsApp tidak valid");
      setIsSubmitting(false);
      return;
    }

    const targetWaktuFinal = form.targetWaktuCustom || form.targetWaktu || "-";

    const message = [
      `*Garda Tech - Project Request*`,
      ``,
      `📦 *Paket:* ${service.name} (${service.category})`,
      ``,
      `*👤 Data Diri:*`,
      `Nama: ${form.namaLengkap}`,
      form.namaPerusahaan ? `Perusahaan: ${form.namaPerusahaan}` : null,
      `Email: ${form.email}`,
      `WhatsApp: ${form.whatsapp}`,
      form.alamat ? `Alamat: ${form.alamat}` : null,
      ``,
      `*📋 Detail Proyek:*`,
      form.detailProyek,
      ``,
      `*💰 Estimasi Budget:* ${form.estimasiBudget}`,
      `*⏰ Target Waktu:* ${targetWaktuFinal}`,
      ``,
      `_Pesan ini dikirim melalui formulir website Garda Tech_`
    ]
      .filter(Boolean) // Remove null values
      .join("\n");

    // Format nomor WhatsApp baru
    const phoneNumber = "6283178971423"; // Updated WhatsApp number
    
    const waUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    // Buka WhatsApp di tab baru
    window.open(waUrl, "_blank");
    
    // Set submitted state untuk menampilkan halaman sukses
    setSubmitted(true);
    setIsSubmitting(false);
  };

  /* ── 404 ── */
  if (!service) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center gap-6 px-4">
        <p className="text-[#7C3AED] text-sm font-semibold tracking-widest uppercase font-['Syne']">404</p>
        <h1 className="text-4xl font-bold text-gray-900 font-['Syne'] text-center">Layanan tidak ditemukan.</h1>
        <Link href="/price">
          <Button variant="outline" className="border-violet-200 bg-white text-gray-700 hover:bg-violet-50">
            <ChevronLeft className="w-4 h-4 mr-1" /> Kembali ke Pricing
          </Button>
        </Link>
      </div>
    );
  }

  /* ── Success ── */
  if (submitted) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center gap-8 px-4 font-['Inter']">
        <div className="w-20 h-20 rounded-full bg-violet-50 border border-violet-100 flex items-center justify-center shadow-lg shadow-violet-100/30" data-aos="zoom-in">
          <CheckCircle2 className="w-10 h-10 text-[#7C3AED]" />
        </div>
        <div className="text-center" data-aos="fade-up">
          <h1 className="text-4xl font-bold text-gray-900 font-['Syne'] mb-2">Terima Kasih!</h1>
          <p className="text-gray-500 text-lg">Permintaan Anda sedang dialihkan ke WhatsApp kami.</p>
        </div>
        <Link href="/price" data-aos="fade-up" data-aos-delay="100">
          <Button className="bg-[#7C3AED] hover:bg-[#6D28D9] rounded-full px-10 py-6 text-white text-lg font-bold font-['Syne'] shadow-lg shadow-violet-200/50">
            Kembali ke Pricing
          </Button>
        </Link>
      </div>
    );
  }

  /* ── Main ── */
  return (
    <div className="w-full min-h-screen bg-white overflow-x-hidden relative font-['Inter']">
      
      {/* Ambient glow */}
      <div className="fixed w-[500px] h-[500px] -left-32 top-[10%] bg-violet-100/40 rounded-full blur-[140px] pointer-events-none z-0 opacity-60" />
      <div className="fixed w-[400px] h-[400px] -right-20 top-[50%] bg-purple-50/40 rounded-full blur-[120px] pointer-events-none z-0 opacity-50" />

      {/* Back Button */}
      <div className="relative z-20 pt-24 sm:pt-28 px-4 sm:px-8 max-w-3xl mx-auto" data-aos="fade-down" data-aos-duration="600">
        <Link 
          href="/price" 
          className="inline-flex items-center gap-1 text-gray-400 hover:text-gray-900 transition-colors text-sm font-semibold"
        >
          <ChevronLeft className="w-4 h-4" /> Kembali ke Pricing
        </Link>
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 pb-28 lg:pb-24 max-w-3xl mx-auto overflow-x-hidden">

        {/* ── HERO ── */}
        <div className="text-center mt-8 mb-4" data-aos="fade-down">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#7C3AED]/8 border border-[#7C3AED]/20 text-[#7C3AED] text-xs sm:text-sm font-semibold mb-4 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED] animate-pulse" />
            Konfirmasi Pesanan Anda
          </div>
          <h1 className="font-['Syne'] text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="text-gray-900">Mulai Proyek </span>
            <span className="text-[#7C3AED]">Sekarang.</span>
          </h1>
        </div>
        <p className="text-center text-gray-500 text-sm sm:text-base leading-relaxed mb-10 sm:mb-12 max-w-lg mx-auto" data-aos="fade-up" data-aos-delay="100">
          Lengkapi formulir di bawah ini untuk mengonfirmasi detail pesanan Anda. Kami akan terhubung langsung via WhatsApp.
        </p>

        {/* ── SECTION TITLE: Detail Layanan ── */}
        <div className="flex items-center justify-center gap-2 mb-6" data-aos="fade-up">
          <h2 className="font-['Syne'] text-2xl sm:text-3xl font-bold text-gray-900">
            Detail Layanan Terpilih
          </h2>
        </div>

        {/* ── SERVICE CARD ── */}
        <Card className="bg-white border border-violet-100/80 shadow-md shadow-violet-100/10 rounded-3xl mb-10 overflow-hidden" data-aos="fade-up">
          <CardContent className="p-5 sm:p-8 lg:p-10 text-center">
            
            {/* Category tag */}
            <div className="inline-block px-3 py-1 rounded-full bg-violet-50 border border-violet-100 text-[#7C3AED] text-xs font-semibold uppercase tracking-wider mb-3">
              {service.category}
            </div>

            {/* Package name */}
            <h3 className="font-['Syne'] text-2xl sm:text-3xl font-extrabold text-[#7C3AED] leading-tight">
              {service.name}
            </h3>
            
            {/* Price Info */}
            <div className="mt-3 flex items-center justify-center gap-1.5">
              <span className="text-xs text-gray-400 uppercase tracking-widest">{service.priceLabel || 'Mulai dari'}</span>
              <span className="text-xl sm:text-2xl font-bold text-gray-800 font-['Syne']">{service.price}</span>
              {service.period && <span className="text-xs text-gray-400 font-medium">{service.period}</span>}
            </div>

            {/* Divider */}
            <div className="w-full h-[1px] bg-gray-100 my-6" />

            {/* Features */}
            <p className="text-gray-400 text-xs font-bold tracking-widest uppercase mb-4">Fitur & Layanan Yang Didapat</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left w-full">
              {service.features.map((f, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-[3px] shrink-0 w-4 h-4 rounded-full bg-violet-50 flex items-center justify-center border border-violet-100 text-[#7C3AED]">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-gray-600 text-xs sm:text-sm leading-normal">{f}</span>
                </li>
              ))}
            </ul>

          </CardContent>
        </Card>

        {/* ── SECTION TITLE: Project Information ── */}
        <div className="flex items-center justify-center gap-2 mb-6 mt-12" data-aos="fade-up">
          <h2 className="font-['Syne'] text-2xl sm:text-3xl font-bold text-gray-900">
            Form Informasi Proyek
          </h2>
        </div>

        {/* ── FORM CARD ── */}
        <Card className="bg-white border border-violet-100/80 shadow-lg shadow-violet-100/10 rounded-3xl" data-aos="fade-up">
          <CardContent className="p-5 sm:p-8 lg:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Nama Lengkap */}
              <div className="space-y-2">
                <Label className="text-gray-700 font-bold text-sm sm:text-base">
                  Nama Lengkap *
                </Label>
                <Input
                  name="namaLengkap"
                  value={form.namaLengkap}
                  onChange={onChange}
                  required
                  placeholder="Masukkan nama lengkap Anda"
                  className="h-13 sm:h-14 rounded-xl bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-400 px-5 focus-visible:ring-violet-400 focus-visible:border-violet-500 focus:outline-none"
                />
              </div>

              {/* Nama Perusahaan */}
              <div className="space-y-2">
                <Label className="text-gray-700 font-bold text-sm sm:text-base">Nama Perusahaan</Label>
                <Input
                  name="namaPerusahaan"
                  value={form.namaPerusahaan}
                  onChange={onChange}
                  placeholder="Nama perusahaan (opsional)"
                  className="h-13 sm:h-14 rounded-xl bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-400 px-5 focus-visible:ring-violet-400 focus-visible:border-violet-500 focus:outline-none"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label className="text-gray-700 font-bold text-sm sm:text-base">
                  Email *
                </Label>
                <Input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={onChange}
                  required
                  placeholder="email@contoh.com"
                  className="h-13 sm:h-14 rounded-xl bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-400 px-5 focus-visible:ring-violet-400 focus-visible:border-violet-500 focus:outline-none"
                />
              </div>

              {/* No. WhatsApp */}
              <div className="space-y-2">
                <Label className="text-gray-700 font-bold text-sm sm:text-base">
                  No. WhatsApp *
                </Label>
                <Input
                  type="tel"
                  name="whatsapp"
                  value={form.whatsapp}
                  onChange={onChange}
                  required
                  placeholder="08xxxxxxxxxx"
                  className="h-13 sm:h-14 rounded-xl bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-400 px-5 focus-visible:ring-violet-400 focus-visible:border-violet-500 focus:outline-none"
                />
              </div>

              {/* Alamat */}
              <div className="space-y-2">
                <Label className="text-gray-700 font-bold text-sm sm:text-base">Alamat</Label>
                <Input
                  name="alamat"
                  value={form.alamat}
                  onChange={onChange}
                  placeholder="Kota / Provinsi"
                  className="h-13 sm:h-14 rounded-xl bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-400 px-5 focus-visible:ring-violet-400 focus-visible:border-violet-500 focus:outline-none"
                />
              </div>

              {/* Detail Proyek */}
              <div className="space-y-2">
                <Label className="text-gray-700 font-bold text-sm sm:text-base">
                  Detail Proyek *
                </Label>
                <Textarea
                  name="detailProyek"
                  value={form.detailProyek}
                  onChange={onChange}
                  required
                  placeholder="Ceritakan secara singkat ide, fitur utama, atau kebutuhan proyek Anda..."
                  rows={4}
                  className="rounded-xl bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-400 px-5 py-4 focus-visible:ring-violet-400 focus-visible:border-violet-500 focus:outline-none resize-none leading-relaxed"
                />
              </div>

              {/* Estimasi Budget */}
              <div className="space-y-2">
                <Label className="text-gray-700 font-bold text-sm sm:text-base">
                  Estimasi Budget *
                </Label>
                <Input
                  name="estimasiBudget"
                  value={form.estimasiBudget}
                  onChange={(e) => {
                    const raw = e.target.value.replace(/[^\d]/g, '');
                    const formatted = raw ? `Rp ${raw.replace(/\B(?=(\d{3})+(?!\d))/g, '.')}` : '';
                    setForm((p) => ({ ...p, estimasiBudget: formatted }));
                  }}
                  required
                  placeholder="Contoh: Rp 5.000.000"
                  className="h-13 sm:h-14 rounded-xl bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-400 px-5 focus-visible:ring-violet-400 focus-visible:border-violet-500 focus:outline-none"
                />
                <div className="flex items-start gap-1.5 pt-1 text-gray-400 text-xs sm:text-sm">
                  <Info className="w-4 h-4 mt-0.5 shrink-0 text-[#7C3AED]" />
                  <p>Sesuaikan range budget dengan skala dan kompleksitas kebutuhan proyek Anda.</p>
                </div>
              </div>

              {/* Target Waktu */}
              <div className="space-y-3">
                <Label className="text-gray-700 font-bold text-sm sm:text-base">
                  Target Waktu Pengerjaan *
                </Label>
                <Input
                  name="targetWaktuCustom"
                  value={form.targetWaktuCustom}
                  onChange={(e) => setForm((p) => ({ ...p, targetWaktuCustom: e.target.value, targetWaktu: e.target.value }))}
                  placeholder="Atau ketik target waktu kustom Anda..."
                  className="h-13 sm:h-14 rounded-xl bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-400 px-5 focus-visible:ring-violet-400 focus-visible:border-violet-500 focus:outline-none"
                />
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {timelineOptions.map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setForm((p) => ({ ...p, targetWaktu: p.targetWaktu === opt ? "" : opt, targetWaktuCustom: "" }))}
                      className={cn(
                        "h-12 rounded-xl border text-sm font-semibold transition-all duration-200 cursor-pointer",
                        form.targetWaktu === opt && !form.targetWaktuCustom
                          ? "bg-[#7C3AED] text-white border-[#7C3AED] shadow-md shadow-violet-100"
                          : "bg-gray-50 text-gray-600 border-gray-200 hover:bg-violet-50/50 hover:text-[#7C3AED] hover:border-violet-200"
                      )}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Privacy Policy Warning */}
              <p className="text-center text-gray-400 text-xs sm:text-sm leading-relaxed pt-4 border-t border-gray-100">
                Data Anda sepenuhnya aman. Dengan menekan tombol di bawah, detail pesanan Anda akan langsung dialihkan ke ruang obrolan WhatsApp tim teknis kami untuk tindak lanjut cepat tanpa biaya apapun.
              </p>

              {/* Submit */}
              <div className="flex justify-center pt-2">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-10 py-6 bg-[#7C3AED] hover:bg-[#6D28D9] text-white rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-violet-200 transition-all cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? "Mentransfer..." : "Kirim Via WhatsApp"}
                </Button>
              </div>

            </form>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}