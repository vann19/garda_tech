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
import { useLanguage } from "@/context/LanguageContext";

/* ─────────────────────────────────────────────
   Service data map (bilingual)
 ───────────────────────────────────────────── */
function getServiceData(lang: string): Record<
  string,
  { name: string; price: string; period?: string; priceLabel?: string; features: string[]; category: string }
> {
  const id = lang === 'id';
  return {
  "basic-care":          { name: "Basic Care",          price: "Rp300k–Rp800k",   period: id ? "/bulan" : "/month", priceLabel: "Start form", features: id ? ["Bugfix minor","2 update konten","Backup basic","Laporan singkat","SLA: 2×24 jam","Maks 2 request minor/bulan"] : ["Minor bugfix","2 content updates","Basic backup","Short report","SLA: 2×24 hours","Max 2 minor requests/month"], category: "Maintenance & Support" },
  "growth-care":         { name: "Growth Care",         price: "Rp1jt–Rp2,5jt",   period: id ? "/bulan" : "/month", priceLabel: "Start form", features: id ? ["Semua Basic +","Monitoring uptime","Speed check","4 update/bulan","Laporan bulanan","SLA: 1×24 jam","Maks 4 request minor/bulan"] : ["All Basic +","Uptime monitoring","Speed check","4 updates/month","Monthly report","SLA: 1×24 hours","Max 4 minor requests/month"], category: "Maintenance & Support" },
  "pro-care":            { name: "Pro Care",            price: "Rp3jt–Rp7jt",     period: id ? "/bulan" : "/month", priceLabel: "Start form", features: id ? ["Semua Growth +","Hardening berkala","Rollback plan","1 sesi konsultasi/bulan","SLA: 4–8 jam","Minor unlimited"] : ["All Growth +","Regular hardening","Rollback plan","1 consultation/month","SLA: 4–8 hours","Unlimited minor"], category: "Maintenance & Support" },
  "speed-basic":         { name: "Speed Basic",         price: "Rp500k–Rp1,5jt",  priceLabel: "Start form", features: id ? ["Kompres gambar","Minify CSS/JS","Lazy load","Rapihin asset/plugin","1x minor revisi","Pengerjaan 2–4 hari"] : ["Image compression","Minify CSS/JS","Lazy load","Asset/plugin cleanup","1x minor revision","Delivery 2–4 days"], category: "Performance & Reliability" },
  "speed-growth":        { name: "Speed Growth",        price: "Rp2jt–Rp6jt",     priceLabel: "Start form", features: id ? ["Semua Basic +","Caching","DB cleanup","Optimasi bottleneck","Performance testing","2x minor revisi","Pengerjaan 1 minggu"] : ["All Basic +","Caching","DB cleanup","Bottleneck optimization","Performance testing","2x minor revisions","Delivery 1 week"], category: "Performance & Reliability" },
  "speed-pro":           { name: "Speed Pro",           price: "Rp7jt–Rp20jt",    priceLabel: "Start form", features: id ? ["Staging environment","Audit dependency","Deploy aman","Monitoring basic","Minor unlimited","Pengerjaan 2–4 minggu"] : ["Staging environment","Dependency audit","Safe deployment","Basic monitoring","Unlimited minor","Delivery 2–4 weeks"], category: "Performance & Reliability" },
  "ux-review-mini":      { name: "UX Review Mini",      price: "Rp500k–Rp1,5jt",  priceLabel: "Start form", features: id ? ["Review 1 flow","Rekomendasi","Wireframe kasar","Call 30 menit","1x minor revisi","Pengerjaan 2–4 hari"] : ["Review 1 flow","Recommendations","Rough wireframe","30-min call","1x minor revision","Delivery 2–4 days"], category: "UI/UX Review & Design" },
  "ux-prototype":        { name: "UX Prototype",        price: "Rp2jt–Rp7jt",     priceLabel: "Start form", features: id ? ["Flow + wireframe","Prototype Figma (1–3 halaman)","1 revisi struktur ringan","2x minor revisi","Pengerjaan 1–2 minggu"] : ["Flow + wireframe","Figma prototype (1–3 pages)","1 light structure revision","2x minor revisions","Delivery 1–2 weeks"], category: "UI/UX Review & Design" },
  "ux-full-system":      { name: "UX Full System",      price: "Rp8jt–Rp25jt",    priceLabel: "Start form", features: id ? ["Design system mini","Prototype multi halaman","Handoff developer","Minor unlimited","2x major terkontrol","Pengerjaan 3–6 minggu"] : ["Mini design system","Multi-page prototype","Developer handoff","Unlimited minor","2x controlled major","Delivery 3–6 weeks"], category: "UI/UX Review & Design" },
  "brand-kit-mini":      { name: "Brand Kit Mini",      price: "Rp500k–Rp1,5jt",  priceLabel: "Start form", features: id ? ["Rapihin logo","Warna + font","2 template konten","1x minor revisi","Pengerjaan 2–5 hari"] : ["Logo cleanup","Color + font","2 content templates","1x minor revision","Delivery 2–5 days"], category: "Brand Kit & Visual System" },
  "brand-kit-growth":    { name: "Brand Kit Growth",    price: "Rp2jt–Rp6jt",     priceLabel: "Start form", features: id ? ["Logo final","Guideline mini","6 template konten","Highlight IG set","2x minor revisi","Pengerjaan 1–2 minggu"] : ["Final logo","Mini guideline","6 content templates","IG highlight set","2x minor revisions","Delivery 1–2 weeks"], category: "Brand Kit & Visual System" },
  "brand-kit-pro":       { name: "Brand Kit Pro",       price: "Rp7jt–Rp20jt",    priceLabel: "Start form", features: id ? ["Guideline lengkap","Komponen UI","Handoff developer","Minor unlimited","Pengerjaan 2–4 minggu"] : ["Full guideline","UI components","Developer handoff","Unlimited minor","Delivery 2–4 weeks"], category: "Brand Kit & Visual System" },
  "mini-deck":           { name: "Mini Deck",           price: "Rp300k–Rp1jt",    priceLabel: "Start form", features: id ? ["1 pager atau 5 slide","1x minor revisi","Pengerjaan 1–3 hari"] : ["1 pager or 5 slides","1x minor revision","Delivery 1–3 days"], category: "Company Profile" },
  "company-profile-pro": { name: "Company Profile Pro", price: "Rp1,5jt–Rp4jt",   priceLabel: "Start form", features: id ? ["8–12 slide","Format PDF","2x minor revisi","Pengerjaan 3–7 hari"] : ["8–12 slides","PDF format","2x minor revisions","Delivery 3–7 days"], category: "Company Profile" },
  "pro-bundle":          { name: "Pro Bundle",          price: "Rp5jt–Rp12jt",    priceLabel: "Start form", features: id ? ["2 deck (profile + pitch)","3x minor revisi","1x revisi arah","Pengerjaan 1–2 minggu"] : ["2 decks (profile + pitch)","3x minor revisions","1x direction revision","Delivery 1–2 weeks"], category: "Company Profile" },
  "content-starter":     { name: "Content Starter",     price: "Rp300k–Rp800k",   priceLabel: "Start form", features: id ? ["Kalender 2 minggu","10 ide konten","5 template caption","CTA library","1x minor revisi","Pengerjaan 1–2 hari"] : ["2-week calendar","10 content ideas","5 caption templates","CTA library","1x minor revision","Delivery 1–2 days"], category: "Content System" },
  "content-growth":      { name: "Content Growth",      price: "Rp1jt–Rp3jt",     priceLabel: "Start form", features: id ? ["Kalender 1 bulan","SOP produksi","Hook/CTA library","Approval flow","2x minor revisi","Pengerjaan 3–7 hari"] : ["1-month calendar","Production SOP","Hook/CTA library","Approval flow","2x minor revisions","Delivery 3–7 days"], category: "Content System" },
  "content-pro":         { name: "Content Pro",         price: "Rp4jt–Rp10jt",    priceLabel: "Start form", features: id ? ["Semua Growth +","Guideline visual","Reporting system","Workflow tim","Minor unlimited","Pengerjaan 2–4 minggu"] : ["All Growth +","Visual guideline","Reporting system","Team workflow","Unlimited minor","Delivery 2–4 weeks"], category: "Content System" },
  "starter-templates":   { name: "Starter Templates",   price: "Rp200k–Rp600k",   priceLabel: "Start form", features: id ? ["Proposal template","Brief template","Invoice template","Handover checklist","1x minor revisi","Pengerjaan 1–2 hari"] : ["Proposal template","Brief template","Invoice template","Handover checklist","1x minor revision","Delivery 1–2 days"], category: "Template Pack" },
  "growth-templates":    { name: "Growth Templates",    price: "Rp700k–Rp2jt",    priceLabel: "Start form", features: id ? ["Semua Starter +","Kontrak/SPK template","SOP komunikasi","Project tracker","2x minor revisi","Pengerjaan 3–5 hari"] : ["All Starter +","Contract/SPK template","Communication SOP","Project tracker","2x minor revisions","Delivery 3–5 days"], category: "Template Pack" },
  "pro-templates":       { name: "Pro Templates",       price: "Rp3jt–Rp8jt",     priceLabel: "Start form", features: id ? ["SOP delivery end-to-end","QA checklist","Support SOP","Escalation flow","Minor unlimited","Pengerjaan 1–2 minggu"] : ["End-to-end delivery SOP","QA checklist","Support SOP","Escalation flow","Unlimited minor","Delivery 1–2 weeks"], category: "Template Pack" },
  "mini-workshop":       { name: "Mini Workshop",       price: "Rp300k–Rp800k",   priceLabel: "Start form", features: id ? ["1 topik spesifik","PDF checklist","Q&A 15 menit","Durasi 60–90 menit"] : ["1 specific topic","PDF checklist","Q&A 15 minutes","Duration 60–90 minutes"], category: "Workshop / Training" },
  "growth-workshop":     { name: "Growth Workshop",     price: "Rp1jt–Rp3jt",     priceLabel: "Start form", features: id ? ["2 sesi workshop","SOP + praktik tools","Simulasi","Follow-up Q&A 30 menit"] : ["2 workshop sessions","SOP + tools practice","Simulation","Follow-up Q&A 30 minutes"], category: "Workshop / Training" },
  "pro-workshop":        { name: "Pro Workshop",        price: "Rp4jt–Rp10jt",    priceLabel: "Start form", features: id ? ["3–5 sesi","Training tim","Dokumentasi","2x follow-up Q&A 60 menit"] : ["3–5 sessions","Team training","Documentation","2x follow-up Q&A 60 minutes"], category: "Workshop / Training" },
  "website-basic":       { name: "Website Basic",       price: "Rp2jt–Rp6jt",     priceLabel: "Start form", features: id ? ["3–5 halaman","Responsive design","Form/WA integration","SEO basic","2x minor revisi","Pengerjaan 1–2 minggu"] : ["3–5 pages","Responsive design","Form/WA integration","Basic SEO","2x minor revisions","Delivery 1–2 weeks"], category: "Web Development" },
  "website-growth":      { name: "Website Growth",      price: "Rp7jt–Rp20jt",    priceLabel: "Start form", features: id ? ["6–12 halaman","Portfolio/case studies","Leads ke Sheets/Notion","Speed optimization","3x minor revisi","Pengerjaan 2–5 minggu"] : ["6–12 pages","Portfolio/case studies","Leads to Sheets/Notion","Speed optimization","3x minor revisions","Delivery 2–5 weeks"], category: "Web Development" },
  "web-app-mvp":         { name: "Web App MVP",         price: "Rp20jt–Rp80jt+",  priceLabel: "Start form", features: id ? ["Fitur inti (scope ketat)","Admin panel basic","Database integration","Role sederhana","Dokumentasi","Minor unlimited + 2x major","Pengerjaan 1–3 bulan"] : ["Core features (tight scope)","Basic admin panel","Database integration","Simple roles","Documentation","Unlimited minor + 2x major","Delivery 1–3 months"], category: "Web Development" },
  "app-mvp-mini":        { name: "App MVP Mini",        price: "Rp10jt–Rp25jt",   priceLabel: "Start form", features: id ? ["3–5 screen","1 fitur utama","API sederhana","2x minor revisi","Pengerjaan 3–6 minggu"] : ["3–5 screens","1 main feature","Simple API","2x minor revisions","Delivery 3–6 weeks"], category: "Mobile App Development" },
  "app-growth":          { name: "App Growth",          price: "Rp25jt–Rp60jt",   priceLabel: "Start form", features: id ? ["Auth system","Multi screen","Notifikasi basic","Dashboard","3x minor revisi","Pengerjaan 2–3 bulan"] : ["Auth system","Multi screen","Basic notifications","Dashboard","3x minor revisions","Delivery 2–3 months"], category: "Mobile App Development" },
  "app-pro":             { name: "App Pro",             price: "Rp60jt–Rp200jt+", priceLabel: "Start form", features: id ? ["Scalable architecture","Staging-prod","Monitoring","Analytics","Role-based access","Minor unlimited + 2x major","Pengerjaan 3–6 bulan"] : ["Scalable architecture","Staging-prod","Monitoring","Analytics","Role-based access","Unlimited minor + 2x major","Delivery 3–6 months"], category: "Mobile App Development" },
  "basic-audit":         { name: "Basic Audit",         price: "Rp300k–Rp1jt",    priceLabel: "Start form", features: id ? ["Bedah tampilan & konten","Ramah mobile","Audit kepercayaan","Quick scan teknis","3 ide copywriting CTA","Konsultasi selama 30 menit","1x revisi"] : ["UI & content analysis","Mobile-friendly check","Trust audit","Quick technical scan","3 CTA copywriting ideas","30-minute consultation","1x revision"], category: "Audit Services" },
  "growth-audit":        { name: "Growth Audit",        price: "Rp1,5jt–Rp4jt",   priceLabel: "Start form", features: id ? ["Paket Basic Audit","Audit funnel","Audit kompetitor","Audit tracking readiness","Laporan strategis","Wireframe perbaikan","Konsultasi selama 60 menit","2x revisi"] : ["Basic Audit package","Funnel audit","Competitor audit","Tracking readiness audit","Strategic report","Improvement wireframe","60-minute consultation","2x revisions"], category: "Audit Services" },
  "pro-audit":           { name: "Pro Audit",           price: "Rp5jt–Rp15jt",    priceLabel: "Start form", features: id ? ["Paket Growth Audit","Audit UX","Audit keamanan","Masterplan Konten & SEO","Laporan eksekutif","Prototype Figma","Tracking plan","2x sesi konsultasi","Unlimited revisi"] : ["Growth Audit package","UX audit","Security audit","Content & SEO masterplan","Executive report","Figma prototype","Tracking plan","2x consultation sessions","Unlimited revisions"], category: "Audit Services" },
  "santai-banget":       { name: "Santai Banget",       price: "Rp1.000.000",      period: id ? "/bulan" : "/month", priceLabel: "Start form", features: id ? ["1 Akun Media Sosial","2 Konten Reels Instagram","Caption menarik & friendly","3 Feed Instagram","Caption & hashtag","Optimasi Bio","Caption Copywriting","Revisi Minor 1x"] : ["1 Social Media Account","2 Instagram Reels Content","Engaging & friendly captions","3 Instagram Feed Posts","Caption & hashtag","Bio Optimization","Caption Copywriting","1x Minor Revision"], category: "Social Media" },
  "enjoy":               { name: "Enjoy",               price: "Rp2.000.000",      period: id ? "/bulan" : "/month", priceLabel: "Start form", features: id ? ["Gratis Social Media Visual Guide Design","1 Akun Media Sosial","3 Konten Reels Instagram","5 Feed Instagram","Optimasi Bio","Caption Copywriting","Revisi Minor 1x"] : ["Free Social Media Visual Guide Design","1 Social Media Account","3 Instagram Reels Content","5 Instagram Feed Posts","Bio Optimization","Caption Copywriting","1x Minor Revision"], category: "Social Media" },
  "santai":              { name: "Santai",              price: "Rp3.500.000",      period: id ? "/bulan" : "/month", priceLabel: "Start form", features: id ? ["Gratis Konsultasi Bersama Social Media Expert","Gratis Visual Guide Design","1 Akun Media Sosial","Scheduling Konten","4 Konten Reels","4 Feed Instagram","2 Video Session","Optimasi Bio","Caption Copywriting","Group Private"] : ["Free Consultation with Social Media Expert","Free Visual Guide Design","1 Social Media Account","Content Scheduling","4 Reels Content","4 Instagram Feed Posts","2 Video Sessions","Bio Optimization","Caption Copywriting","Private Group"], category: "Social Media" },
  "rusuh":               { name: "Rusuh",               price: "Rp5.000.000",      period: id ? "/bulan" : "/month", priceLabel: "Start form", features: id ? ["Gratis Konsultasi Bersama Social Media Expert","1 Akun Media Sosial","Scheduling Konten","10 Video TikTok","10 Reels Instagram","7 Feed Instagram","2 Deep Talk Session","1 Kali Content Shoot","Gratis 3 Highlight Instagram","Optimasi Bio","Konsistensi Caption Copywriting","Group Private","Admin Posting + Balas DM & Komentar"] : ["Free Consultation with Social Media Expert","1 Social Media Account","Content Scheduling","10 TikTok Videos","10 Instagram Reels","7 Instagram Feed Posts","2 Deep Talk Sessions","1x Content Shoot","Free 3 Instagram Highlights","Bio Optimization","Consistent Caption Copywriting","Private Group","Posting Admin + Reply DM & Comments"], category: "Social Media" },
  }
}

const budgetOptionsId = [
  "Rp. 2.000.000 - 5.000.000",
  "Rp. 5.000.000 - 10.000.000",
  "Rp. 10.000.000 ++",
  "Masih Ingin Konsultasi",
];
const budgetOptionsEn = [
  "Rp. 2,000,000 - 5,000,000",
  "Rp. 5,000,000 - 10,000,000",
  "Rp. 10,000,000 ++",
  "Still Want to Consult",
];

const timelineOptionsId = ["< 1 bulan", "1 - 2 bulan", "lainnya"];
const timelineOptionsEn = ["< 1 month", "1 - 2 months", "other"];

/* ─────────────────────────────────────────────
   Main Component
 ───────────────────────────────────────────── */
export default function OrderPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const { lang } = useLanguage();
  const serviceData = getServiceData(lang);
  const service = serviceData[slug];
  const timelineOptions = lang === 'id' ? timelineOptionsId : timelineOptionsEn;

  const t = lang === 'id' ? {
    backBtn: 'Kembali ke Pricing',
    badge: 'Konfirmasi Pesanan Anda',
    h1: 'Mulai Proyek ',
    h1Accent: 'Sekarang.',
    subDesc: 'Lengkapi formulir di bawah ini untuk mengonfirmasi detail pesanan Anda. Kami akan terhubung langsung via WhatsApp.',
    sectionService: 'Detail Layanan Terpilih',
    startFrom: 'Mulai dari',
    featuresTitle: 'Fitur & Layanan Yang Didapat',
    sectionForm: 'Form Informasi Proyek',
    labelName: 'Nama Lengkap *',
    placeholderName: 'Masukkan nama lengkap Anda',
    labelCompany: 'Nama Perusahaan',
    placeholderCompany: 'Nama perusahaan (opsional)',
    labelEmail: 'Email *',
    labelWa: 'No. WhatsApp *',
    labelAddress: 'Alamat',
    placeholderAddress: 'Kota / Provinsi',
    labelDetail: 'Detail Proyek *',
    placeholderDetail: 'Ceritakan secara singkat ide, fitur utama, atau kebutuhan proyek Anda...',
    labelBudget: 'Estimasi Budget *',
    placeholderBudget: 'Contoh: Rp 5.000.000',
    budgetHint: 'Sesuaikan range budget dengan skala dan kompleksitas kebutuhan proyek Anda.',
    labelTimeline: 'Target Waktu Pengerjaan *',
    placeholderTimeline: 'Atau ketik target waktu kustom Anda...',
    privacyNote: 'Data Anda sepenuhnya aman. Dengan menekan tombol di bawah, detail pesanan Anda akan langsung dialihkan ke ruang obrolan WhatsApp tim teknis kami untuk tindak lanjut cepat tanpa biaya apapun.',
    submitBtn: 'Kirim Via WhatsApp',
    submitting: 'Mentransfer...',
    alertRequired: 'Mohon lengkapi semua field yang bertanda *',
    alertWa: 'Nomor WhatsApp tidak valid',
    successTitle: 'Terima Kasih!',
    successDesc: 'Permintaan Anda sedang dialihkan ke WhatsApp kami.',
    successBtn: 'Kembali ke Pricing',
    notFoundTitle: 'Layanan tidak ditemukan.',
    notFoundBtn: 'Kembali ke Pricing',
    waHeader: '*Garda Tech - Project Request*',
    waPersonal: '*👤 Data Diri:*',
    waName: 'Nama',
    waCompany: 'Perusahaan',
    waEmail: 'Email',
    waWa: 'WhatsApp',
    waAddress: 'Alamat',
    waDetail: '*📋 Detail Proyek:*',
    waBudget: '*💰 Estimasi Budget:*',
    waTimeline: '*⏰ Target Waktu:*',
    waFooter: '_Pesan ini dikirim melalui formulir website Garda Tech_',
    waPackage: '📦 *Paket:*',
  } : {
    backBtn: 'Back to Pricing',
    badge: 'Confirm Your Order',
    h1: 'Start Your Project ',
    h1Accent: 'Now.',
    subDesc: 'Fill in the form below to confirm your order details. We will connect with you directly via WhatsApp.',
    sectionService: 'Selected Service Details',
    startFrom: 'Starting from',
    featuresTitle: 'Included Features & Services',
    sectionForm: 'Project Information Form',
    labelName: 'Full Name *',
    placeholderName: 'Enter your full name',
    labelCompany: 'Company Name',
    placeholderCompany: 'Company name (optional)',
    labelEmail: 'Email *',
    labelWa: 'WhatsApp Number *',
    labelAddress: 'Address',
    placeholderAddress: 'City / Province',
    labelDetail: 'Project Details *',
    placeholderDetail: 'Briefly describe your idea, main features, or project requirements...',
    labelBudget: 'Budget Estimate *',
    placeholderBudget: 'Example: Rp 5,000,000',
    budgetHint: 'Adjust the budget range according to the scale and complexity of your project needs.',
    labelTimeline: 'Target Completion Time *',
    placeholderTimeline: 'Or type your custom target timeline...',
    privacyNote: 'Your data is completely safe. By clicking the button below, your order details will be redirected directly to our technical team\'s WhatsApp chat for quick follow-up at no cost.',
    submitBtn: 'Send via WhatsApp',
    submitting: 'Redirecting...',
    alertRequired: 'Please fill in all required fields marked with *',
    alertWa: 'Invalid WhatsApp number',
    successTitle: 'Thank You!',
    successDesc: 'Your request is being redirected to our WhatsApp.',
    successBtn: 'Back to Pricing',
    notFoundTitle: 'Service not found.',
    notFoundBtn: 'Back to Pricing',
    waHeader: '*Garda Tech - Project Request*',
    waPersonal: '*👤 Personal Info:*',
    waName: 'Name',
    waCompany: 'Company',
    waEmail: 'Email',
    waWa: 'WhatsApp',
    waAddress: 'Address',
    waDetail: '*📋 Project Details:*',
    waBudget: '*💰 Budget Estimate:*',
    waTimeline: '*⏰ Target Timeline:*',
    waFooter: '_This message was sent via the Garda Tech website form_',
    waPackage: '📦 *Package:*',
  };

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
      alert(t.alertRequired);
      setIsSubmitting(false);
      return;
    }

    // Validate WhatsApp number (simple validation)
    const waNumber = form.whatsapp.replace(/\D/g, '');
    if (waNumber.length < 10) {
      alert(t.alertWa);
      setIsSubmitting(false);
      return;
    }

    const targetWaktuFinal = form.targetWaktuCustom || form.targetWaktu || "-";

    const message = [
      t.waHeader,
      ``,
      `${t.waPackage} ${service.name} (${service.category})`,
      ``,
      t.waPersonal,
      `${t.waName}: ${form.namaLengkap}`,
      form.namaPerusahaan ? `${t.waCompany}: ${form.namaPerusahaan}` : null,
      `${t.waEmail}: ${form.email}`,
      `${t.waWa}: ${form.whatsapp}`,
      form.alamat ? `${t.waAddress}: ${form.alamat}` : null,
      ``,
      t.waDetail,
      form.detailProyek,
      ``,
      `${t.waBudget} ${form.estimasiBudget}`,
      `${t.waTimeline} ${targetWaktuFinal}`,
      ``,
      t.waFooter
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
        <h1 className="text-4xl font-bold text-gray-900 font-['Syne'] text-center">{t.notFoundTitle}</h1>
        <Link href="/price">
          <Button variant="outline" className="border-violet-200 bg-white text-gray-700 hover:bg-violet-50">
            <ChevronLeft className="w-4 h-4 mr-1" /> {t.notFoundBtn}
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
          <h1 className="text-4xl font-bold text-gray-900 font-['Syne'] mb-2">{t.successTitle}</h1>
          <p className="text-gray-500 text-lg">{t.successDesc}</p>
        </div>
        <Link href="/price" data-aos="fade-up" data-aos-delay="100">
          <Button className="bg-[#7C3AED] hover:bg-[#6D28D9] rounded-full px-10 py-6 text-white text-lg font-bold font-['Syne'] shadow-lg shadow-violet-200/50">
            {t.successBtn}
          </Button>
        </Link>
      </div>
    );
  }

  /* ── Main ── */
  return (
    <div className="w-full min-h-screen bg-white overflow-x-hidden overflow-y-auto relative font-['Inter']">

      {/* Ambient glow */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] -left-32 top-[10%] bg-violet-100/40 rounded-full blur-[140px] opacity-60" />
        <div className="absolute w-[400px] h-[400px] -right-20 top-[50%] bg-purple-50/40 rounded-full blur-[120px] opacity-50" />
      </div>

      {/* Back Button */}
      <div className="relative z-20 pt-24 sm:pt-28 px-4 sm:px-8 max-w-3xl mx-auto" data-aos="fade-down" data-aos-duration="600">
        <Link 
          href="/price" 
          className="inline-flex items-center gap-1 text-gray-400 hover:text-gray-900 transition-colors text-sm font-semibold"
        >
          <ChevronLeft className="w-4 h-4" /> {t.backBtn}
        </Link>
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 pb-28 lg:pb-24 max-w-3xl mx-auto overflow-x-hidden">

        {/* ── HERO ── */}
        <div className="text-center mt-8 mb-4" data-aos="fade-down">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#7C3AED]/8 border border-[#7C3AED]/20 text-[#7C3AED] text-xs sm:text-sm font-semibold mb-4 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED] animate-pulse" />
            {t.badge}
          </div>
          <h1 className="font-['Syne'] text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="text-gray-900">{t.h1}</span>
            <span className="text-[#7C3AED]">{t.h1Accent}</span>
          </h1>
        </div>
        <p className="text-center text-gray-500 text-sm sm:text-base leading-relaxed mb-10 sm:mb-12 max-w-lg mx-auto" data-aos="fade-up" data-aos-delay="100">
          {t.subDesc}
        </p>

        {/* ── SECTION TITLE: Detail Layanan ── */}
        <div className="flex items-center justify-center gap-2 mb-6" data-aos="fade-up">
          <h2 className="font-['Syne'] text-2xl sm:text-3xl font-bold text-gray-900">
            {t.sectionService}
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
              <span className="text-xs text-gray-400 uppercase tracking-widest">{service.priceLabel || t.startFrom}</span>
              <span className="text-xl sm:text-2xl font-bold text-gray-800 font-['Syne']">{service.price}</span>
              {service.period && <span className="text-xs text-gray-400 font-medium">{service.period}</span>}
            </div>

            {/* Divider */}
            <div className="w-full h-[1px] bg-gray-100 my-6" />

            {/* Features */}
            <p className="text-gray-400 text-xs font-bold tracking-widest uppercase mb-4">{t.featuresTitle}</p>
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
            {t.sectionForm}
          </h2>
        </div>

        {/* ── FORM CARD ── */}
        <Card className="bg-white border border-violet-100/80 shadow-lg shadow-violet-100/10 rounded-3xl" data-aos="fade-up">
          <CardContent className="p-5 sm:p-8 lg:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Nama Lengkap */}
              <div className="space-y-2">
                <Label className="text-gray-700 font-bold text-sm sm:text-base">
                  {t.labelName}
                </Label>
                <Input
                  name="namaLengkap"
                  value={form.namaLengkap}
                  onChange={onChange}
                  required
                  placeholder={t.placeholderName}
                  className="h-13 sm:h-14 rounded-xl bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-400 px-5 focus-visible:ring-violet-400 focus-visible:border-violet-500 focus:outline-none"
                />
              </div>

              {/* Nama Perusahaan */}
              <div className="space-y-2">
                <Label className="text-gray-700 font-bold text-sm sm:text-base">{t.labelCompany}</Label>
                <Input
                  name="namaPerusahaan"
                  value={form.namaPerusahaan}
                  onChange={onChange}
                  placeholder={t.placeholderCompany}
                  className="h-13 sm:h-14 rounded-xl bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-400 px-5 focus-visible:ring-violet-400 focus-visible:border-violet-500 focus:outline-none"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label className="text-gray-700 font-bold text-sm sm:text-base">
                  {t.labelEmail}
                </Label>
                <Input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={onChange}
                  required
                  placeholder="email@example.com"
                  className="h-13 sm:h-14 rounded-xl bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-400 px-5 focus-visible:ring-violet-400 focus-visible:border-violet-500 focus:outline-none"
                />
              </div>

              {/* No. WhatsApp */}
              <div className="space-y-2">
                <Label className="text-gray-700 font-bold text-sm sm:text-base">
                  {t.labelWa}
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
                <Label className="text-gray-700 font-bold text-sm sm:text-base">{t.labelAddress}</Label>
                <Input
                  name="alamat"
                  value={form.alamat}
                  onChange={onChange}
                  placeholder={t.placeholderAddress}
                  className="h-13 sm:h-14 rounded-xl bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-400 px-5 focus-visible:ring-violet-400 focus-visible:border-violet-500 focus:outline-none"
                />
              </div>

              {/* Detail Proyek */}
              <div className="space-y-2">
                <Label className="text-gray-700 font-bold text-sm sm:text-base">
                  {t.labelDetail}
                </Label>
                <Textarea
                  name="detailProyek"
                  value={form.detailProyek}
                  onChange={onChange}
                  required
                  placeholder={t.placeholderDetail}
                  rows={4}
                  className="rounded-xl bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-400 px-5 py-4 focus-visible:ring-violet-400 focus-visible:border-violet-500 focus:outline-none resize-none leading-relaxed"
                />
              </div>

              {/* Estimasi Budget */}
              <div className="space-y-2">
                <Label className="text-gray-700 font-bold text-sm sm:text-base">
                  {t.labelBudget}
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
                  placeholder={t.placeholderBudget}
                  className="h-13 sm:h-14 rounded-xl bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-400 px-5 focus-visible:ring-violet-400 focus-visible:border-violet-500 focus:outline-none"
                />
                <div className="flex items-start gap-1.5 pt-1 text-gray-400 text-xs sm:text-sm">
                  <Info className="w-4 h-4 mt-0.5 shrink-0 text-[#7C3AED]" />
                  <p>{t.budgetHint}</p>
                </div>
              </div>

              {/* Target Waktu */}
              <div className="space-y-3">
                <Label className="text-gray-700 font-bold text-sm sm:text-base">
                  {t.labelTimeline}
                </Label>
                <Input
                  name="targetWaktuCustom"
                  value={form.targetWaktuCustom}
                  onChange={(e) => setForm((p) => ({ ...p, targetWaktuCustom: e.target.value, targetWaktu: e.target.value }))}
                  placeholder={t.placeholderTimeline}
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
                {t.privacyNote}
              </p>

              {/* Submit */}
              <div className="flex justify-center pt-2">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-10 py-6 bg-[#7C3AED] hover:bg-[#6D28D9] text-white rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-violet-200 transition-all cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? t.submitting : t.submitBtn}
                </Button>
              </div>

            </form>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}