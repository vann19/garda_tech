"use client";

import { use, useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ChevronLeft, Info } from "lucide-react";
import { cn } from "@/lib/utils";

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
  "web-app-mvp":         { name: "Web App MVP",         price: "Rp20jt–Rp80jt+",  priceLabel: "Start form", features: ["Fitur inti (scope ketat)","Admin panel basic","Database integration","Role sederhana","Dokumentasi","Minor unlimited + 2x major","Pengerjaan 1–3 bulan"], category: "Web Development" },
  "app-mvp-mini":        { name: "App MVP Mini",        price: "Rp10jt–Rp25jt",   priceLabel: "Start form", features: ["3–5 screen","1 fitur utama","API sederhana","2x minor revisi","Pengerjaan 3–6 minggu"], category: "Mobile App Development" },
  "app-growth":          { name: "App Growth",          price: "Rp25jt–Rp60jt",   priceLabel: "Start form", features: ["Auth system","Multi screen","Notifikasi basic","Dashboard","3x minor revisi","Pengerjaan 2–3 bulan"], category: "Mobile App Development" },
  "app-pro":             { name: "App Pro",             price: "Rp60jt–Rp200jt+", priceLabel: "Start form", features: ["Scalable architecture","Staging-prod","Monitoring","Analytics","Role-based access","Minor unlimited + 2x major","Pengerjaan 3–6 bulan"], category: "Mobile App Development" },
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

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const targetWaktuFinal = form.targetWaktuCustom || form.targetWaktu || "-";

    const message = [
      `Halo! Saya ingin melakukan konsultasi untuk layanan berikut:`,
      ``,
      `📦 *Paket:* ${service.name} (${service.category})`,
      `💰 *Harga:* ${service.price}${service.period ?? ""}`,
      ``,
      `*Data Diri:*`,
      `👤 Nama: ${form.namaLengkap}`,
      ...(form.namaPerusahaan ? [`🏢 Perusahaan: ${form.namaPerusahaan}`] : []),
      `📧 Email: ${form.email}`,
      `📱 WhatsApp: ${form.whatsapp}`,
      ...(form.alamat ? [`📍 Alamat: ${form.alamat}`] : []),
      ``,
      `*Detail Proyek:*`,
      `${form.detailProyek}`,
      ``,
      `💵 Estimasi Budget: ${form.estimasiBudget}`,
      `⏰ Target Waktu: ${targetWaktuFinal}`,
    ].join("\n");

    const waUrl = `https://wa.me/628223981198?text=${encodeURIComponent(message)}`;
    window.open(waUrl, "_blank");
  };

  /* ── 404 ── */
  if (!service) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center gap-6 px-4">
        <p className="text-violet-500 text-sm font-semibold tracking-widest uppercase font-['Syne']">404</p>
        <h1 className="text-4xl font-bold text-white font-['Syne'] text-center">Layanan tidak ditemukan.</h1>
        <Link href="/price">
          <Button variant="outline" className="border-indigo-700 bg-black text-white hover:bg-indigo-900/30">
            <ChevronLeft className="w-4 h-4 mr-1" /> Kembali ke Pricing
          </Button>
        </Link>
      </div>
    );
  }

  /* ── Success ── */
  if (submitted) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center gap-8 px-4">
        <div className="w-20 h-20 rounded-full bg-violet-600/20 border-2 border-violet-500 flex items-center justify-center">
          <CheckCircle2 className="w-10 h-10 text-violet-400" />
        </div>
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white font-['Syne'] mb-2">Terima Kasih!</h1>
          <p className="text-white/60 text-lg font-['Inter']">Tim kami akan segera menghubungi Anda.</p>
        </div>
        <Link href="/price">
          <Button className="bg-black border-[5px] border-indigo-900 rounded-full px-10 py-6 text-white text-lg font-bold font-['Syne'] shadow-[inset_-6px_-13px_100px_0px_rgba(69,34,115,1)] hover:opacity-90">
            Kembali ke Pricing
          </Button>
        </Link>
      </div>
    );
  }

  /* ── Main ── */
  return (
    <div className="w-full min-h-screen bg-black overflow-x-hidden relative font-['Inter']">
      {/* Ambient glow */}
      <div className="fixed w-[500px] h-[500px] -left-32 top-[300px] bg-indigo-900 rounded-full blur-[140px] opacity-60 pointer-events-none z-0" />
      <div className="fixed w-[400px] h-[400px] -right-20 top-[900px] bg-purple-900 rounded-full blur-[120px] opacity-50 pointer-events-none z-0" />

      {/* Back */}
      <div className="relative z-20 pt-6 px-4 sm:px-8 max-w-3xl mx-auto">
        <Link href="/price" className="inline-flex items-center gap-1 text-white/50 hover:text-white/90 transition-colors text-sm font-['Inter']">
          <ChevronLeft className="w-4 h-4" /> Kembali ke Pricing
        </Link>
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 pb-24 max-w-3xl mx-auto">

        {/* ── HERO ── */}
        <div className="text-center mt-10 mb-4">
          <h1 className="font-['Syne'] text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="text-white">Start Your Project </span>
            <span className="text-violet-500">Today.</span>
          </h1>
        </div>
        <p className="text-center text-white/60 text-sm sm:text-base leading-relaxed mb-12 max-w-lg mx-auto">
          Isi formulir singkat berikut untuk membantu kami memahami kebutuhan proyek Anda.
          Tim kami akan menghubungi Anda untuk diskusi lebih lanjut dan estimasi proposal.
        </p>

        {/* ── SECTION TITLE: Detail Layanan ── */}
        <h2 className="text-center font-['Syne'] text-3xl sm:text-4xl font-semibold mb-6">
          <span className="text-white">Detail </span>
          <span className="text-violet-500">Layanan</span>
        </h2>

        {/* ── SERVICE CARD ── */}
        <Card className="bg-[#0d0d0d] border border-white/10 rounded-3xl shadow-[0_0_80px_rgba(88,28,235,0.25)] mb-10 py-0 gap-0 overflow-hidden">
          <CardContent className="px-0 py-0">
            <div className="p-8 sm:p-10 text-center">

              {/* Package name */}
              <h3 className="font-['Syne'] text-2xl sm:text-3xl font-bold text-violet-500 leading-tight">
                {service.name}
              </h3>
              <p className="font-['Syne'] text-xl sm:text-2xl font-bold text-white mt-1 mb-4">
                Package
              </p>

              {/* Divider */}
              <div className="w-16 h-px bg-white/20 mx-auto mb-6" />

              {/* Price block */}
              <p className="text-white/50 text-sm font-medium tracking-widest uppercase mb-1">Price</p>
              <p className="text-white/40 text-sm mb-4">{service.priceLabel ?? "Start form"}</p>
              <p className="font-['Inter'] text-3xl sm:text-4xl font-bold text-violet-500 mb-8">
                {service.price}
                {service.period && (
                  <span className="text-white/40 text-base font-normal ml-1">{service.period}</span>
                )}
              </p>

              {/* Divider */}
              <div className="w-full h-px bg-white/10 mb-6" />

              {/* Features */}
              <p className="text-white/50 text-sm font-medium tracking-widest uppercase mb-5">What&apos;s Included</p>
              <ul className="space-y-3 text-left inline-block w-full max-w-sm">
                {service.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-[3px] shrink-0 w-[18px] h-[18px] rounded-full border border-violet-500/80 flex items-center justify-center">
                      <span className="w-[8px] h-[8px] bg-violet-500/80 rounded-full" />
                    </span>
                    <span className="text-white/80 text-sm sm:text-base leading-relaxed">{f}</span>
                  </li>
                ))}
              </ul>

            </div>
          </CardContent>
        </Card>

        {/* ── SECTION TITLE: Project Information ── */}
        <h2 className="text-center font-['Syne'] text-3xl sm:text-4xl font-semibold mb-6">
          <span className="text-white">Project </span>
          <span className="text-violet-500">Information</span>
        </h2>

        {/* ── FORM CARD ── */}
        <Card className="bg-[#0d0d0d] border border-white/10 rounded-3xl shadow-[0_0_80px_rgba(88,28,235,0.2)] py-0 gap-0">
          <CardContent className="px-0 py-0">
            <form onSubmit={handleSubmit} className="p-8 sm:p-10 space-y-7">

              {/* Nama Lengkap */}
              <div className="space-y-2">
                <Label className="text-white font-['Syne'] text-base font-semibold">
                  Nama Lengkap <span className="text-violet-500">*</span>
                </Label>
                <Input
                  name="namaLengkap"
                  value={form.namaLengkap}
                  onChange={onChange}
                  required
                  placeholder="Masukkan nama lengkap Anda"
                  className="h-14 sm:h-16 rounded-[20px] sm:rounded-2xl bg-violet-500/70 border-violet-400/30 text-white placeholder:text-white/40 text-sm sm:text-base px-5 sm:px-6 focus-visible:ring-violet-400/50 focus-visible:border-violet-400"
                />
              </div>

              {/* Nama Perusahaan */}
              <div className="space-y-2">
                <Label className="text-white font-['Syne'] text-base font-semibold">Nama Perusahaan</Label>
                <Input
                  name="namaPerusahaan"
                  value={form.namaPerusahaan}
                  onChange={onChange}
                  placeholder="Nama perusahaan (opsional)"
                  className="h-14 sm:h-16 rounded-[20px] sm:rounded-2xl bg-violet-500/70 border-violet-400/30 text-white placeholder:text-white/40 text-sm sm:text-base px-5 sm:px-6 focus-visible:ring-violet-400/50 focus-visible:border-violet-400"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label className="text-white font-['Syne'] text-base font-semibold">
                  Email <span className="text-violet-500">*</span>
                </Label>
                <Input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={onChange}
                  required
                  placeholder="email@contoh.com"
                  className="h-14 sm:h-16 rounded-[20px] sm:rounded-2xl bg-violet-500/70 border-violet-400/30 text-white placeholder:text-white/40 text-sm sm:text-base px-5 sm:px-6 focus-visible:ring-violet-400/50 focus-visible:border-violet-400"
                />
              </div>

              {/* No. WhatsApp */}
              <div className="space-y-2">
                <Label className="text-white font-['Syne'] text-base font-semibold">
                  No. WhatsApp <span className="text-violet-500">*</span>
                </Label>
                <Input
                  type="tel"
                  name="whatsapp"
                  value={form.whatsapp}
                  onChange={onChange}
                  required
                  placeholder="08xxxxxxxxxx"
                  className="h-14 sm:h-16 rounded-[20px] sm:rounded-2xl bg-violet-500/70 border-violet-400/30 text-white placeholder:text-white/40 text-sm sm:text-base px-5 sm:px-6 focus-visible:ring-violet-400/50 focus-visible:border-violet-400"
                />
              </div>

              {/* Alamat */}
              <div className="space-y-2">
                <Label className="text-white font-['Syne'] text-base font-semibold">Alamat</Label>
                <Input
                  name="alamat"
                  value={form.alamat}
                  onChange={onChange}
                  placeholder="Kota / Provinsi"
                  className="h-14 sm:h-16 rounded-[20px] sm:rounded-2xl bg-violet-500/70 border-violet-400/30 text-white placeholder:text-white/40 text-sm sm:text-base px-5 sm:px-6 focus-visible:ring-violet-400/50 focus-visible:border-violet-400"
                />
              </div>

              {/* Detail Proyek */}
              <div className="space-y-2">
                <Label className="text-white font-['Syne'] text-base font-semibold">
                  Detail Proyek <span className="text-violet-500">*</span>
                </Label>
                <Textarea
                  name="detailProyek"
                  value={form.detailProyek}
                  onChange={onChange}
                  required
                  placeholder="Ceritakan kebutuhan proyek Anda secara singkat..."
                  rows={4}
                  className="rounded-[20px] sm:rounded-2xl bg-violet-500/70 border-violet-400/30 text-white placeholder:text-white/40 text-sm sm:text-base px-5 sm:px-6 py-4 sm:py-5 focus-visible:ring-violet-400/50 focus-visible:border-violet-400 resize-none"
                />
              </div>

              {/* Estimasi Budget */}
              <div className="space-y-3">
                <Label className="text-white font-['Syne'] text-base font-semibold">
                  Estimasi Budget <span className="text-violet-500">*</span>
                </Label>
                <Input
                  name="estimasiBudget"
                  value={form.estimasiBudget}
                  onChange={onChange}
                  required
                  placeholder="Contoh: Rp. 5.000.000"
                  className="h-14 sm:h-16 rounded-[20px] sm:rounded-2xl bg-violet-500/70 border-violet-400/30 text-white placeholder:text-white/40 text-sm sm:text-base px-5 sm:px-6 focus-visible:ring-violet-400/50 focus-visible:border-violet-400"
                />
                <div className="flex items-start gap-2 pt-1 text-white/50 text-xs sm:text-sm">
                  <Info className="w-4 h-4 mt-0.5 shrink-0" />
                  <p>Isi range budget yang sesuai dengan ketersediaan Anda untuk proyek ini.</p>
                </div>
              </div>

              {/* Target Waktu */}
              <div className="space-y-3">
                <Label className="text-white font-['Syne'] text-base font-semibold">
                  Target Waktu Pengerjaan <span className="text-violet-500">*</span>
                </Label>
                <Input
                  name="targetWaktuCustom"
                  value={form.targetWaktuCustom}
                  onChange={(e) => setForm((p) => ({ ...p, targetWaktuCustom: e.target.value, targetWaktu: e.target.value }))}
                  placeholder="Atau ketik target waktu Anda..."
                  className="h-14 sm:h-16 rounded-[20px] sm:rounded-2xl bg-violet-500/70 border-violet-400/30 text-white placeholder:text-white/40 text-sm sm:text-base px-5 sm:px-6 focus-visible:ring-violet-400/50 focus-visible:border-violet-400"
                />
                <div className="space-y-2">
                  {timelineOptions.map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setForm((p) => ({ ...p, targetWaktu: p.targetWaktu === opt ? "" : opt, targetWaktuCustom: "" }))}
                      className={cn(
                        "w-full h-14 rounded-2xl border px-5 text-left font-['Syne'] text-sm sm:text-base font-semibold transition-all duration-200",
                        form.targetWaktu === opt && !form.targetWaktuCustom
                          ? "bg-violet-600/80 text-white border-violet-400 shadow-[0_0_16px_rgba(124,58,237,0.5)]"
                          : "bg-purple-300/40 text-white border-purple-300/50 hover:bg-purple-300/60"
                      )}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Privacy */}
              <p className="text-center text-white/40 text-xs sm:text-sm leading-relaxed pt-4">
                Kami menjamin kerahasiaan seluruh informasi yang Anda berikan dan hanya menggunakannya untuk keperluan evaluasi proyek.
                Tidak ada kewajiban pembayaran pada tahap ini. Seluruh ruang lingkup dan biaya akan disepakati bersama sebelum proyek berjalan.
              </p>

              {/* Submit */}
              <div className="flex justify-center pt-2 pb-4">
                <button
                  type="submit"
                  className="px-14 py-4 bg-black rounded-full shadow-[inset_-6px_-13px_120px_0px_rgba(69,34,115,1)] border-[5px] border-indigo-900 text-white font-['Syne'] text-lg font-bold hover:opacity-90 hover:scale-[1.02] active:scale-95 transition-all duration-200 cursor-pointer"
                >
                  Request Consultation
                </button>
              </div>

            </form>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
