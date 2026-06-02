'use client';

import React, { useState } from "react";
import { Button } from "./ui/button";
import { 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  MessageSquare, 
  Instagram, 
  ArrowRight,
  Loader2
} from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
  </svg>
);

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.86a8.28 8.28 0 0 0 4.76 1.5V6.83a4.83 4.83 0 0 1-1-.14Z" />
  </svg>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Website Development",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus('idle');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const result = await res.json();
      if (res.ok) {
        setStatus('success');
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "Website Development",
          message: ""
        });
      } else {
        setStatus('error');
        setErrorMessage(result.error || "Gagal mengirim pesan.");
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
      setErrorMessage("Terjadi kesalahan koneksi internet.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 relative">
      
      {/* Glow backgrounds */}
      <div className="absolute top-[20%] -left-32 w-[350px] h-[350px] bg-violet-100/50 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-[20%] -right-32 w-[350px] h-[350px] bg-purple-100/40 rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* Header Title */}
      <div className="text-center mb-16 relative">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#7C3AED]/8 border border-[#7C3AED]/20 text-[#7C3AED] text-xs sm:text-sm font-semibold mb-5 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED] animate-pulse" />
          Hubungi Garda Tech
        </div>
        <h1 className="font-['Inter'] font-extrabold tracking-tight text-gray-900 text-3xl sm:text-4xl lg:text-5xl">
          Ayo Mulai <span className="text-[#7C3AED]">Proyek Hebat</span> Anda!
        </h1>
        <p className="mt-4 text-gray-500 max-w-2xl mx-auto text-sm sm:text-base font-['Inter']">
          Konsultasikan kebutuhan digital Anda dengan tim developer dan desainer profesional kami secara gratis.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        
        {/* LEFT COLUMN: Contact Details & WA CTA */}
        <div className="lg:col-span-5 flex flex-col gap-6 w-full">
          
          {/* Card Info Utama */}
          <Card className="border-violet-100/80 shadow-md shadow-violet-100/20 bg-white/80 backdrop-blur-md rounded-[28px] overflow-hidden">
            <CardContent className="p-6 sm:p-8 flex flex-col gap-6">
              <h2 className="text-xl sm:text-2xl font-bold font-['Inter'] text-gray-900 border-b border-gray-100 pb-4">
                Informasi Kontak
              </h2>

              <div className="flex flex-col gap-5 font-['Inter']">
                {/* No Telp */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-violet-50 flex items-center justify-center text-[#7C3AED] shrink-0 border border-violet-100">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider font-semibold text-gray-400">No. Telp</h4>
                    <p className="text-base font-bold text-gray-800 mt-0.5">+62 831-7897-1423</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-violet-50 flex items-center justify-center text-[#7C3AED] shrink-0 border border-violet-100">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider font-semibold text-gray-400">Email Utama</h4>
                    <p className="text-base font-bold text-gray-800 mt-0.5 break-all">gardatech765@gmail.com</p>
                  </div>
                </div>

                {/* Jam Kerja */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-violet-50 flex items-center justify-center text-[#7C3AED] shrink-0 border border-violet-100">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider font-semibold text-gray-400">Jam Layanan</h4>
                    <p className="text-base font-bold text-gray-800 mt-0.5">Setiap Hari: 08.00 - 16.00 WIB</p>
                  </div>
                </div>
              </div>

              {/* Sosial Media */}
              <div className="mt-4 pt-6 border-t border-gray-100">
                <h4 className="text-xs uppercase tracking-wider font-bold text-gray-400 mb-3">Sosial Media Kami</h4>
                <div className="flex items-center gap-4">
                  <Link
                    href="https://www.instagram.com/garda_tech?igsh=MXJyMXUya2Y4aTBhZA=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 bg-gray-50 rounded-xl hover:bg-violet-600 transition-all duration-300 border border-gray-100 hover:border-violet-600 flex items-center justify-center text-gray-500 hover:text-white"
                  >
                    <Instagram className="w-5 h-5" />
                  </Link>
                  <Link
                    href="https://www.tiktok.com/@garda.tech?_r=1&_t=ZS-94ZlyCv6ozc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 bg-gray-50 rounded-xl hover:bg-violet-600 transition-all duration-300 border border-gray-100 hover:border-violet-600 flex items-center justify-center text-gray-500 hover:text-white"
                  >
                    <TikTokIcon className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* WHATSAPP CTA CARD */}
          <Link
            href="https://wa.me/6283178971423?text=Halo%20Garda%20Tech,%20saya%20tertarik%20dengan%20layanan%20Anda."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full block group outline-none"
          >
            <div className="relative overflow-hidden bg-gradient-to-br from-emerald-500 to-teal-600 rounded-[28px] p-6 text-white shadow-lg shadow-emerald-200/50 hover:shadow-xl hover:shadow-emerald-300/40 hover:-translate-y-1 transition-all duration-300">
              {/* Decorative dynamic pulse */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />
              
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-emerald-600 shadow-md shrink-0 animate-pulse">
                  <WhatsAppIcon className="w-8 h-8" />
                </div>
                <div className="flex-1 text-left">
                  <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-white/20 text-white text-[10px] font-bold uppercase tracking-wider mb-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                    Respon Tercepat (&lt; 5 Menit)
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold font-['Inter'] leading-tight">
                    Chat via WhatsApp
                  </h3>
                  <p className="text-xs text-white/80 font-['Inter'] mt-1 leading-normal">
                    Konsultasi instan dan langsung terhubung dengan tim teknis Garda Tech.
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-white/80 group-hover:translate-x-1.5 transition-transform duration-300 shrink-0" />
              </div>
            </div>
          </Link>

        </div>

        {/* RIGHT COLUMN: Contact Form (Resend Integration) */}
        <div className="lg:col-span-7 w-full">
          <Card className="border-violet-100/80 shadow-lg shadow-violet-100/10 bg-white rounded-[28px]">
            <CardContent className="p-6 sm:p-8 lg:p-10">
              <h2 className="text-xl sm:text-2xl font-bold font-['Inter'] text-gray-900 mb-2">
                Kirim Pesan Ke Email
              </h2>
              <p className="text-sm text-gray-400 font-['Inter'] mb-8">
                Isi formulir di bawah ini dan kami akan membalas via email dalam waktu maksimal 24 jam.
              </p>

              {/* Status Alert Messages */}
              {status === 'success' && (
                <div className="mb-6 p-4 bg-emerald-50 border border-emerald-100 rounded-2xl flex items-start gap-3 text-emerald-800 text-sm font-['Inter']">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold">Pesan Terkirim!</span> Terima kasih telah menghubungi Garda Tech. Kami telah menerima pesan Anda dan akan segera menghubungi Anda kembali.
                  </div>
                </div>
              )}

              {status === 'error' && (
                <div className="mb-6 p-4 bg-rose-50 border border-rose-100 rounded-2xl flex items-start gap-3 text-rose-800 text-sm font-['Inter']">
                  <AlertCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold">Gagal Mengirim!</span> {errorMessage}
                  </div>
                </div>
              )}

              {/* Form Input fields */}
              <form onSubmit={handleSubmit} className="flex flex-col gap-5 font-['Inter'] text-sm">
                
                {/* Grid Nama & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="font-bold text-gray-700">Nama Lengkap *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="Masukkan nama Anda"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#7C3AED] focus:ring-1 focus:ring-[#7C3AED] bg-gray-50/30 transition-all"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="font-bold text-gray-700">Alamat Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="contoh@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#7C3AED] focus:ring-1 focus:ring-[#7C3AED] bg-gray-50/30 transition-all"
                    />
                  </div>
                </div>

                {/* Grid No. WA & Subject */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="phone" className="font-bold text-gray-700">No. WhatsApp / Telp</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="0812xxxxxxxx"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#7C3AED] focus:ring-1 focus:ring-[#7C3AED] bg-gray-50/30 transition-all"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="subject" className="font-bold text-gray-700">Subjek Layanan</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#7C3AED] focus:ring-1 focus:ring-[#7C3AED] bg-white transition-all appearance-none cursor-pointer"
                    >
                      <option value="Website Development">Website Development</option>
                      <option value="UI/UX Design">UI/UX Design</option>
                      <option value="Custom Web System">Custom Web System</option>
                      <option value="Brand & Digital Assets">Brand & Digital Assets</option>
                      <option value="Lainnya">Pertanyaan Lainnya</option>
                    </select>
                  </div>
                </div>

                {/* Message input */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="font-bold text-gray-700">Detail Kebutuhan / Pesan Anda *</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Ceritakan detail proyek atau pertanyaan yang ingin Anda ajukan kepada kami..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#7C3AED] focus:ring-1 focus:ring-[#7C3AED] bg-gray-50/30 transition-all resize-none leading-relaxed"
                  />
                </div>

                {/* Submit button */}
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto self-end px-8 py-6 rounded-xl bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-bold flex items-center justify-center gap-2 shadow-lg shadow-violet-200 disabled:opacity-50 transition-all mt-3 cursor-pointer"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Mengirim...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Kirim Pesan
                    </>
                  )}
                </Button>

              </form>
            </CardContent>
          </Card>
        </div>

      </div>

    </section>
  );
};

export default Contact;