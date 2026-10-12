import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import {
  ArrowRight,
  Building2,
  Check,
  Cog,
  Headphones,
  Palette,
  ShoppingCart,
  Smartphone,
  ShieldCheck,
  Target,
  Wallet,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Jasa Website Jogja & Yogyakarta Profesional",
  description:
    "Jasa pembuatan website di Jogja dan Yogyakarta untuk company profile, landing page, toko online, dan web app. Harga mulai Rp2 juta; konsultasi gratis.",
  keywords: [
    "jasa website jogja",
    "jasa pembuatan website jogja",
    "jasa website kota jogja",
    "jasa web jogja",
    "jasa buat website jogja",
    "jasa pembuatan website yogyakarta",
    "web developer jogja",
    "jasa website murah jogja",
    "jasa website profesional jogja",
    "jasa bikin website jogja",
    "jasa website company profile jogja",
    "jasa website landing page jogja",
    "jasa website umkm jogja",
    "jasa website toko online jogja",
  ],
  alternates: {
    canonical: "https://www.gardatech.cloud/jasa-website-jogja",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://www.gardatech.cloud/jasa-website-jogja",
    siteName: "Garda Tech",
    title: "Jasa Website Jogja & Yogyakarta Profesional | Garda Tech",
    description:
      "Jasa pembuatan website profesional di Jogja untuk bisnis, UMKM, dan organisasi. Harga mulai Rp2 juta; konsultasi gratis.",
    images: [
      {
        url: "/img/logo2.png",
        width: 1200,
        height: 630,
        alt: "Garda Tech - Jasa Website Jogja",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jasa Website Kota Jogja | Garda Tech",
    description:
      "Jasa pembuatan website profesional di Jogja. Harga terjangkau, kualitas premium.",
    images: ["/img/logo2.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.gardatech.cloud/jasa-website-jogja/#service",
  name: "Jasa Pembuatan Website Jogja",
  alternateName: [
    "Jasa Website Kota Jogja",
    "Jasa Web Jogja",
    "Jasa Buat Website Yogyakarta",
  ],
  description:
    "Jasa pembuatan website profesional di Kota Jogja (Yogyakarta). Website company profile, e-commerce, landing page, dan aplikasi web. Modern, responsif, SEO-friendly. Harga mulai Rp2 juta.",
  url: "https://www.gardatech.cloud/jasa-website-jogja",
  provider: {
    "@type": "ProfessionalService",
    "@id": "https://www.gardatech.cloud/#organization",
    name: "Garda Tech",
    url: "https://www.gardatech.cloud",
    logo: "https://www.gardatech.cloud/img/logo2.png",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Yogyakarta",
      addressRegion: "Daerah Istimewa Yogyakarta",
      addressCountry: "ID",
    },
    telephone: "+6283178971423",
    areaServed: {
      "@type": "City",
      name: "Yogyakarta",
      alternateName: ["Jogja", "Jogjakarta"],
    },
  },
  areaServed: {
    "@type": "City",
    name: "Yogyakarta",
    alternateName: ["Jogja", "Jogjakarta", "Kota Jogja"],
  },
  serviceType: [
    "Pembuatan Website",
    "Web Development",
    "Website Company Profile",
    "Website E-Commerce",
    "Landing Page",
    "Aplikasi Web",
  ],
  offers: {
    "@type": "AggregateOffer",
    lowPrice: "2000000",
    highPrice: "20000000",
    priceCurrency: "IDR",
    offerCount: "3",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Paket Jasa Website Jogja",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Website Basic",
          description:
            "Website 3-5 halaman, responsive design, form/WA integration, SEO basic",
        },
        price: "2000000",
        priceCurrency: "IDR",
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Website Growth",
          description:
            "Website 6-12 halaman, portfolio/case studies, leads ke Sheets/Notion, speed optimization",
        },
        price: "7000000",
        priceCurrency: "IDR",
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Web App MVP",
          description:
            "Fitur inti, admin panel, database integration, role-based access, dokumentasi",
        },
        price: "20000000",
        priceCurrency: "IDR",
      },
    ],
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Beranda",
      item: "https://www.gardatech.cloud",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Jasa Website Jogja",
      item: "https://www.gardatech.cloud/jasa-website-jogja",
    },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Berapa harga jasa pembuatan website di Jogja?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Harga jasa pembuatan website di Garda Tech Jogja mulai dari Rp2.000.000 untuk paket Website Basic (3-5 halaman), Rp7.000.000 untuk Website Growth (6-12 halaman), hingga Rp20.000.000 untuk Web App MVP. Paket Website Basic mencakup responsive design, form atau integrasi WhatsApp, dan SEO basic.",
      },
    },
    {
      "@type": "Question",
      name: "Berapa lama proses pembuatan website di Jogja?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Untuk Website Basic membutuhkan waktu 1-2 minggu, Website Growth 2-5 minggu, dan Web App MVP 1-3 bulan. Timeline tergantung pada kompleksitas dan kelengkapan konten yang disediakan klien.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah Garda Tech melayani pembuatan website untuk UMKM di Jogja?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ya, Garda Tech melayani pembuatan website untuk semua skala bisnis di Jogja dan sekitarnya, termasuk UMKM, startup, perusahaan, dan lembaga. Kami menyediakan paket yang fleksibel dan terjangkau.",
      },
    },
    {
      "@type": "Question",
      name: "Apa saja layanan jasa website yang ditawarkan Garda Tech di Jogja?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Garda Tech menyediakan layanan website company profile, landing page, e-commerce/toko online, web app custom, UI/UX design, maintenance & support, dan juga pembuatan aplikasi mobile (Android & iOS) di Jogja.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah website yang dibuat sudah SEO-friendly?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Paket Website Basic mencakup SEO dasar seperti meta tags, sitemap, desain responsif, dan optimasi performa sesuai lingkup proyek. Kebutuhan SEO lanjutan dapat dibahas saat konsultasi.",
      },
    },
  ],
};

export default function JasaWebsiteJogjaPage() {
  const services = [
    {
      title: "Website Company Profile",
      desc: "Website profesional untuk menampilkan profil, layanan, dan portofolio bisnis Anda di Jogja.",
      icon: Building2,
    },
    {
      title: "Website E-Commerce",
      desc: "Toko online lengkap dengan sistem pembayaran, keranjang belanja, dan manajemen produk.",
      icon: ShoppingCart,
    },
    {
      title: "Landing Page",
      desc: "Halaman landing yang fokus pada konversi untuk kampanye marketing bisnis Anda.",
      icon: Target,
    },
    {
      title: "Web Aplikasi Custom",
      desc: "Sistem web kustom sesuai kebutuhan bisnis — ERP, CRM, dashboard, dan platform SaaS.",
      icon: Cog,
    },
    {
      title: "Aplikasi Mobile",
      desc: "Aplikasi Android & iOS dengan Flutter untuk bisnis Anda di Jogja dan seluruh Indonesia.",
      icon: Smartphone,
    },
    {
      title: "UI/UX Design",
      desc: "Desain antarmuka modern dan intuitif yang meningkatkan pengalaman pengguna.",
      icon: Palette,
    },
  ];

  const packages = [
    {
      name: "Website Basic",
      price: "Rp2.000.000",
      features: [
        "3–5 halaman",
        "Responsive design",
        "Form / WA integration",
        "SEO basic",
        "2x revisi minor",
        "Pengerjaan 1–2 minggu",
      ],
    },
    {
      name: "Website Growth",
      price: "Rp7.000.000",
      popular: true,
      features: [
        "6–12 halaman",
        "Portfolio / case studies",
        "Leads ke Sheets/Notion",
        "Speed optimization",
        "3x revisi minor",
        "Pengerjaan 2–5 minggu",
      ],
    },
    {
      name: "Web App MVP",
      price: "Rp20.000.000",
      features: [
        "Fitur inti (scope ketat)",
        "Admin panel basic",
        "Database integration",
        "Role-based access",
        "Dokumentasi lengkap",
        "Pengerjaan 1–3 bulan",
      ],
    },
  ];

  const faqs = [
    {
      q: "Berapa harga jasa pembuatan website di Jogja?",
      a: "Harga jasa pembuatan website di Garda Tech Jogja mulai dari Rp2.000.000 untuk paket Website Basic (3-5 halaman), Rp7.000.000 untuk Website Growth (6-12 halaman), hingga Rp20.000.000 untuk Web App MVP.",
    },
    {
      q: "Berapa lama proses pembuatan website di Jogja?",
      a: "Untuk Website Basic membutuhkan waktu 1-2 minggu, Website Growth 2-5 minggu, dan Web App MVP 1-3 bulan. Timeline tergantung pada kompleksitas proyek.",
    },
    {
      q: "Apakah Garda Tech melayani pembuatan website untuk UMKM di Jogja?",
      a: "Ya, kami melayani semua skala bisnis di Jogja dan sekitarnya, termasuk UMKM, startup, perusahaan, dan lembaga. Paket kami fleksibel dan terjangkau.",
    },
    {
      q: "Apa saja layanan jasa website yang ditawarkan di Jogja?",
      a: "Kami menyediakan layanan website company profile, landing page, e-commerce, web app custom, UI/UX design, maintenance & support, dan aplikasi mobile (Android & iOS).",
    },
    {
      q: "Apakah website yang dibuat sudah SEO-friendly?",
      a: "Paket Website Basic mencakup SEO dasar seperti meta tags, sitemap, desain responsif, dan optimasi performa sesuai lingkup proyek. Kebutuhan SEO lanjutan dapat dibahas saat konsultasi.",
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="relative w-full min-h-screen bg-white overflow-hidden">
        {/* Background aura */}
        <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 -top-[10%] w-[80%] aspect-square bg-violet-400/8 rounded-full blur-[160px]" />
        <div className="pointer-events-none absolute -right-40 top-1/4 w-[500px] h-[500px] bg-indigo-100/30 rounded-full blur-[120px]" />

        {/* ══════ HERO ══════ */}
        <section className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-36 pb-16 sm:pb-24">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-50 border border-violet-200 text-violet-700 text-xs font-semibold tracking-wider uppercase mb-6">
                <Building2 className="h-4 w-4" aria-hidden="true" />
                Jasa Website Kota Jogja
              </span>
              <h1 className="font-['Syne'] font-bold text-gray-900 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl tracking-tight leading-tight mb-6">
                Jasa Pembuatan{" "}
                <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                  Website Profesional
                </span>{" "}
                di Kota Jogja
              </h1>
              <p className="text-gray-500 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl">
                Garda Tech — Jasa pembuatan website profesional dan terpercaya di
                Yogyakarta. Website modern, responsif, SEO-friendly untuk bisnis
                Anda. Mulai dari <strong>Rp2.000.000</strong>.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <a
                  href="https://wa.me/6283178971423?text=Saya%20ingin%20konsultasi%20jasa%20website%20di%20Jogja"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-sm font-semibold shadow-lg shadow-violet-200 hover:-translate-y-0.5 transition-all duration-300"
                >
                  Konsultasi via WhatsApp
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <Link
                  href="/price"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-gray-200 text-gray-700 text-sm font-semibold hover:border-violet-300 hover:text-violet-700 hover:bg-violet-50 transition-all duration-300"
                >
                  Lihat Harga
                </Link>
              </div>
            </div>
            <div className="flex-1 relative w-full max-w-lg aspect-square">
              <Image
                src="/img/logo2.png"
                alt="Jasa Website Jogja - Garda Tech"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </section>

        {/* ══════ KENAPA MEMILIH KAMI ══════ */}
        <section className="relative z-10 w-full bg-gray-50/80 border-t border-b border-gray-100 py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-['Syne'] font-bold text-gray-900 text-2xl sm:text-3xl lg:text-4xl">
                Kenapa Pilih{" "}
                <span className="text-violet-600">Garda Tech</span> untuk Jasa
                Website di Jogja?
              </h2>
              <p className="mt-3 text-gray-500 text-sm sm:text-base max-w-xl mx-auto">
                Kami adalah mitra digital terpercaya di Yogyakarta yang
                mengutamakan kualitas, transparansi, dan kepuasan klien.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Zap,
                  title: "Pengerjaan Terukur",
                  desc: "Timeline disesuaikan dengan lingkup paket dan kebutuhan proyek.",
                },
                {
                  icon: Wallet,
                  title: "Harga Transparan",
                  desc: "Paket dan ruang lingkup dijelaskan sebelum proyek dimulai.",
                },
                {
                  icon: ShieldCheck,
                  title: "Teknologi Modern",
                  desc: "Next.js, React, dan Flutter dipilih sesuai kebutuhan solusi.",
                },
                {
                  icon: Headphones,
                  title: "Dukungan Proyek",
                  desc: "Pendampingan dan revisi mengikuti lingkup paket yang dipilih.",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="flex flex-col items-center text-center p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:border-violet-200 hover:shadow-md transition-all duration-300"
                  >
                    <Icon className="h-8 w-8 text-violet-600 mb-4" aria-hidden="true" />
                    <h3 className="font-semibold text-gray-900 text-sm mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-xs leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ══════ LAYANAN ══════ */}
        <section className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center mb-12">
            <h2 className="font-['Syne'] font-bold text-gray-900 text-2xl sm:text-3xl lg:text-4xl">
              Layanan Jasa Website di{" "}
              <span className="text-violet-600">Jogja</span>
            </h2>
            <p className="mt-3 text-gray-500 text-sm sm:text-base max-w-xl mx-auto">
              Berbagai layanan digital lengkap untuk bisnis Anda di
              Yogyakarta dan sekitarnya.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:border-violet-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <Icon className="h-8 w-8 text-violet-600 mb-4" aria-hidden="true" />
                  <h3 className="font-['Syne'] font-bold text-gray-900 text-base mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* ══════ PAKET HARGA ══════ */}
        <section className="relative z-10 w-full bg-gray-50/80 border-t border-b border-gray-100 py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-['Syne'] font-bold text-gray-900 text-2xl sm:text-3xl lg:text-4xl">
                Harga Jasa Website di{" "}
                <span className="text-violet-600">Jogja</span>
              </h2>
              <p className="mt-3 text-gray-500 text-sm sm:text-base max-w-xl mx-auto">
                Paket harga transparan tanpa biaya tersembunyi. Pilih sesuai
                kebutuhan dan budget bisnis Anda.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {packages.map((pkg) => (
                <div
                  key={pkg.name}
                  className={`relative p-6 rounded-2xl bg-white border shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ${
                    pkg.popular
                      ? "border-violet-300 ring-2 ring-violet-100"
                      : "border-gray-100"
                  }`}
                >
                  {pkg.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-violet-600 text-white text-[10px] font-bold uppercase tracking-wider">
                      Populer
                    </span>
                  )}
                  <h3 className="font-['Syne'] font-bold text-gray-900 text-lg mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-2xl font-bold text-violet-600 mb-5">
                    {pkg.price}
                  </p>
                  <div className="w-full h-px bg-gray-100 mb-5" />
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-2 text-sm text-gray-600"
                      >
                        <Check
                          className="w-4 h-4 text-violet-500 shrink-0"
                          aria-hidden="true"
                        />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="https://wa.me/6283178971423?text=Saya%20tertarik%20dengan%20paket%20jasa%20website%20Garda%20Tech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full text-center py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
                      pkg.popular
                        ? "bg-violet-600 text-white hover:bg-violet-700 shadow-md shadow-violet-200"
                        : "border border-gray-200 text-gray-700 hover:border-violet-300 hover:text-violet-700 hover:bg-violet-50"
                    }`}
                  >
                    Tanyakan Paket
                  </a>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-400 text-xs mt-6">
              * Harga bisa disesuaikan dengan kebutuhan dan kompleksitas proyek
            </p>
          </div>
        </section>

        {/* ══════ FAQ ══════ */}
        <section className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center mb-12">
            <h2 className="font-['Syne'] font-bold text-gray-900 text-2xl sm:text-3xl lg:text-4xl">
              FAQ — Jasa Website{" "}
              <span className="text-violet-600">Jogja</span>
            </h2>
            <p className="mt-3 text-gray-500 text-sm sm:text-base">
              Pertanyaan yang sering ditanyakan tentang jasa pembuatan website
              di Jogja.
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="group p-5 rounded-2xl bg-white border border-gray-100 shadow-sm hover:border-violet-200 transition-all duration-300"
              >
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h3 className="font-semibold text-gray-900 text-sm sm:text-base pr-4">
                    {faq.q}
                  </h3>
                  <svg
                    className="w-5 h-5 text-gray-400 shrink-0 group-open:rotate-180 transition-transform duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <p className="mt-3 text-gray-500 text-sm leading-relaxed">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* ══════ CTA ══════ */}
        <section className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-violet-600 via-indigo-600 to-purple-700 p-10 sm:p-16 text-center shadow-2xl shadow-violet-200">
            <div className="pointer-events-none absolute -top-16 -left-16 w-64 h-64 bg-white/10 rounded-full blur-[60px]" />
            <div className="pointer-events-none absolute -bottom-16 -right-16 w-64 h-64 bg-indigo-400/20 rounded-full blur-[60px]" />
            <div className="relative z-10">
              <h2 className="font-['Syne'] font-bold text-white text-2xl sm:text-3xl lg:text-4xl mb-4">
                Butuh Website untuk Bisnis Anda di Jogja?
              </h2>
              <p className="text-white/75 text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
                Konsultasi gratis dengan tim kami. Ceritakan kebutuhan Anda dan
                kami akan menyiapkan solusi website yang tepat untuk bisnis Anda
                di Yogyakarta.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="https://wa.me/6283178971423?text=Saya%20ingin%20konsultasi%20jasa%20website%20di%20Jogja"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-violet-700 text-sm font-bold hover:bg-violet-50 hover:-translate-y-0.5 shadow-lg transition-all duration-300"
                >
                  Konsultasi WhatsApp
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <Link
                  href="/portofolio"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border-2 border-white/40 text-white text-sm font-semibold hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-300"
                >
                  Lihat Portofolio
                </Link>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
