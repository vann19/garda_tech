import Link from 'next/link';
import {
  Globe, Smartphone, Settings, Palette, ArrowRight,
  CheckCircle2, Clock, Shield, Zap, Star, HeadphonesIcon,
  Code2, Layers, Database, BarChart3
} from 'lucide-react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Layanan | GardaTech',
  description: 'Solusi digital lengkap dari GardaTech — Website Development, Mobile App, UI/UX Design, Custom System, hingga Maintenance & Support.',
};

const SERVICES = [
  {
    icon: Globe,
    number: '01',
    title: 'Website Development',
    subtitle: 'Web Modern & Performa Tinggi',
    description:
      'Kami membangun website bisnis, company profile, landing page, hingga platform e-commerce dengan teknologi terkini. Setiap website dioptimalkan untuk kecepatan, SEO, dan konversi.',
    features: ['Next.js & React', 'Desain Responsif', 'Optimasi SEO', 'Integrasi API'],
    href: '/website-development',
    gradient: 'from-violet-500 to-indigo-500',
    lightBg: 'bg-violet-50',
    border: 'border-violet-100',
  },
  {
    icon: Smartphone,
    number: '02',
    title: 'Mobile App Development',
    subtitle: 'Aplikasi iOS & Android',
    description:
      'Membangun aplikasi mobile cross-platform menggunakan Flutter yang berjalan mulus di iOS dan Android. Dari MVP hingga aplikasi enterprise skala besar.',
    features: ['Flutter Cross-Platform', 'UI Native-Feel', 'Integrasi Backend', 'Push Notification'],
    href: '/mobile-development',
    gradient: 'from-violet-600 to-purple-600',
    lightBg: 'bg-violet-50',
    border: 'border-violet-100',
  },
  {
    icon: Palette,
    number: '03',
    title: 'UI/UX Design',
    subtitle: 'Desain yang Mengkonversi',
    description:
      'Menciptakan antarmuka yang intuitif, menarik, dan berpusat pada pengguna. Dari riset hingga prototype interaktif, kami memastikan desain berbicara kepada target audiens Anda.',
    features: ['User Research', 'Wireframing', 'Prototype Interaktif', 'Design System'],
    href: '/ui-ux-design',
    gradient: 'from-indigo-500 to-violet-500',
    lightBg: 'bg-violet-50',
    border: 'border-violet-100',
  },
  {
    icon: Settings,
    number: '04',
    title: 'Custom Web System',
    subtitle: 'Sistem Bisnis yang Skalabel',
    description:
      'Membangun sistem manajemen kustom sesuai proses bisnis unik Anda — ERP, CRM, Dashboard Analitik, Sistem Inventaris, hingga platform SaaS yang siap skala.',
    features: ['ERP & CRM', 'Dashboard Real-time', 'Manajemen Database', 'Role-based Access'],
    href: '/custom-web-system',
    gradient: 'from-purple-500 to-violet-600',
    lightBg: 'bg-violet-50',
    border: 'border-violet-100',
  },
  {
    icon: Shield,
    number: '05',
    title: 'Maintenance & Support',
    subtitle: 'Perawatan Berkala & SLA',
    description:
      'Kami tidak hanya membangun, tapi juga merawat. Layanan maintenance berkala memastikan sistem Anda selalu berjalan optimal, aman, dan up-to-date tanpa downtime.',
    features: ['Monitoring 24/7', 'Update Keamanan', 'Backup Rutin', 'SLA Terjamin'],
    href: '/contact',
    gradient: 'from-violet-500 to-purple-500',
    lightBg: 'bg-violet-50',
    border: 'border-violet-100',
  },
  {
    icon: BarChart3,
    number: '06',
    title: 'Brand & Digital Assets',
    subtitle: 'Identitas Brand yang Kuat',
    description:
      'Membangun identitas visual brand yang konsisten dan profesional — logo, panduan brand, kit media sosial, hingga aset digital yang membuat bisnis Anda tampil percaya diri.',
    features: ['Logo & Brand Identity', 'Social Media Kit', 'Brand Guidelines', 'Aset Digital'],
    href: '/brand-digital-assets',
    gradient: 'from-indigo-600 to-purple-600',
    lightBg: 'bg-violet-50',
    border: 'border-violet-100',
  },
];

const PROCESS = [
  { step: '01', title: 'Discover & Define', desc: 'Kami mendalami kebutuhan, tujuan bisnis, dan target audiens Anda untuk membangun fondasi proyek yang kuat.', icon: Layers },
  { step: '02', title: 'Design & Prototype', desc: 'Tim desainer membuat wireframe dan prototype interaktif yang Anda setujui sebelum satu baris kode ditulis.', icon: Palette },
  { step: '03', title: 'Develop & QA', desc: 'Pengembangan dilakukan secara iteratif dengan pengujian menyeluruh di setiap tahap untuk memastikan kualitas.', icon: Code2 },
  { step: '04', title: 'Launch & Support', desc: 'Peluncuran yang terencana dengan dokumentasi lengkap dan dukungan pasca-launch untuk ketenangan pikiran Anda.', icon: HeadphonesIcon },
];

const WHY_US = [
  { icon: Zap, title: 'Pengerjaan Cepat', desc: 'Timeline terstruktur dengan milestone yang jelas, tanpa kompromi kualitas.' },
  { icon: Shield, title: 'Keamanan Terjamin', desc: 'Standar keamanan enterprise di setiap proyek — enkripsi, proteksi data, dan audit rutin.' },
  { icon: HeadphonesIcon, title: 'Dukungan 24/7', desc: 'Tim support siap membantu kapan pun Anda membutuhkan, bahkan setelah proyek selesai.' },
  { icon: Star, title: '100% Transparan', desc: 'Laporan progress rutin, akses real-time ke status proyek, tanpa biaya tersembunyi.' },
  { icon: Database, title: 'Skalabel & Maintainable', desc: 'Arsitektur kode yang bersih dan terdokumentasi untuk kemudahan pengembangan jangka panjang.' },
  { icon: Clock, title: 'Tepat Waktu', desc: 'Komitmen kami adalah menyelesaikan proyek sesuai deadline yang telah disepakati bersama.' },
];

export default function ServicePage() {
  return (
    <div className="relative w-full min-h-screen bg-white overflow-hidden">

      {/* ── Background aura ── */}
      <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 -top-[10%] w-[80%] aspect-square bg-violet-400/8 rounded-full blur-[160px]" />
      <div className="pointer-events-none absolute -right-40 top-1/4 w-[500px] h-[500px] bg-indigo-100/30 rounded-full blur-[120px]" />
      <div className="pointer-events-none absolute -left-40 bottom-1/3 w-[400px] h-[400px] bg-purple-100/30 rounded-full blur-[100px]" />

      {/* ══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
      <section className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 text-center">

        <span
          data-aos="fade-down"
          data-aos-duration="600"
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-50 border border-violet-200 text-violet-700 text-xs font-semibold tracking-wider uppercase mb-6"
        >
          ✦ Layanan Kami
        </span>

        <h1
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="700"
          className="font-['Syne'] font-bold text-gray-900 text-4xl sm:text-5xl lg:text-[64px] tracking-tight leading-tight mb-6"
        >
          Solusi Digital Lengkap<br />
          <span className="shimmer-text">untuk Bisnis Anda</span>
        </h1>

        <p
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="700"
          className="text-gray-500 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed mb-10"
        >
          Dari konsep hingga peluncuran, kami menyediakan layanan digital end-to-end yang dirancang khusus untuk kebutuhan bisnis Anda. Kualitas premium, harga transparan, dukungan berkelanjutan.
        </p>

        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="flex flex-wrap gap-4 justify-center"
        >
          <Link
            href="/price"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-sm font-semibold shadow-lg shadow-violet-200 hover:shadow-violet-300/50 hover:-translate-y-0.5 transition-all duration-300"
          >
            Lihat Harga
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-gray-200 text-gray-700 text-sm font-semibold hover:border-violet-300 hover:text-violet-700 hover:bg-violet-50 transition-all duration-300"
          >
            Konsultasi Gratis
          </Link>
        </div>

        {/* Quick stats */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {[
            { value: '15+', label: 'Proyek Selesai' },
            { value: '99%', label: 'Kepuasan Klien' },
            { value: '2', label: 'Tahun Pengalaman' },
            { value: '24/7', label: 'Support' },
          ].map((s, i) => (
            <div
              key={s.label}
              data-aos="zoom-in"
              data-aos-delay={400 + i * 100}
              className="flex flex-col items-center p-4 rounded-2xl bg-white border border-gray-100 shadow-sm"
            >
              <span className="text-2xl sm:text-3xl font-bold text-violet-600 font-['Syne']">{s.value}</span>
              <span className="text-xs text-gray-500 mt-1 font-medium">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════
          SERVICES GRID
      ══════════════════════════════════════ */}
      <section className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">

        <div className="text-center mb-14" data-aos="fade-up">
          <h2 className="font-['Syne'] font-bold text-gray-900 text-3xl sm:text-4xl">
            <span className="shimmer-text">Apa yang </span>Kami Tawarkan
          </h2>
          <p className="mt-3 text-gray-500 text-sm sm:text-base max-w-xl mx-auto">
            Setiap layanan dirancang dengan standar tinggi dan disesuaikan dengan kebutuhan spesifik bisnis Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.number}
                href={service.href}
                data-aos="fade-up"
                data-aos-delay={i * 80}
                data-aos-duration="600"
                className="group block h-full"
              >
                <Card className="relative h-full flex flex-col overflow-hidden border-violet-100/80 hover:border-violet-300 hover:shadow-xl hover:shadow-violet-100/40 hover:-translate-y-1.5 transition-all duration-300 py-0">
                  {/* Top accent bar */}
                  <div className={`h-1 w-full bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                  <CardHeader className="pt-6 pb-2 px-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 rounded-2xl ${service.lightBg} border ${service.border} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-5 h-5 text-violet-600" />
                      </div>
                      <span className="text-[10px] font-bold font-mono text-violet-300 tracking-widest">{service.number}.</span>
                    </div>
                    <CardTitle className="font-['Syne'] text-gray-900 text-lg leading-snug">
                      {service.title}
                    </CardTitle>
                    <p className="text-xs font-semibold text-violet-600 mt-1">{service.subtitle}</p>
                  </CardHeader>

                  <CardContent className="px-6 pb-6 flex flex-col flex-1">
                    <CardDescription className="text-gray-500 text-sm leading-relaxed mb-5">
                      {service.description}
                    </CardDescription>
                    <ul className="mt-auto space-y-2">
                      {service.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-xs font-medium text-gray-600">
                          <CheckCircle2 className="w-3.5 h-3.5 text-violet-500 shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ══════════════════════════════════════
          PROCESS TIMELINE
      ══════════════════════════════════════ */}
      <section className="relative z-10 w-full bg-gray-50/80 border-t border-b border-gray-100 py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-14" data-aos="fade-up">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-50 border border-violet-200 text-violet-700 text-xs font-semibold tracking-wider uppercase mb-4">
              ✦ Cara Kami Bekerja
            </span>
            <h2 className="font-['Syne'] font-bold text-gray-900 text-3xl sm:text-4xl">
              Clear Process. <span className="text-violet-600">Real Results.</span>
            </h2>
            <p className="mt-3 text-gray-500 text-sm sm:text-base max-w-xl mx-auto">
              Setiap proyek mengikuti alur kerja yang terstruktur untuk memastikan hasil terbaik dan pengalaman kolaborasi yang menyenangkan.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS.map((p, i) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.step}
                  data-aos="fade-up"
                  data-aos-delay={i * 120}
                  data-aos-duration="600"
                  className="relative flex flex-col items-start bg-white rounded-3xl border border-gray-100 shadow-sm p-6 hover:border-violet-200 hover:shadow-md transition-all duration-300"
                >
                  {i < PROCESS.length - 1 && (
                    <div className="hidden lg:block absolute top-10 -right-3 w-6 h-[2px] bg-gradient-to-r from-violet-200 to-violet-100 z-10" />
                  )}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center shadow-md shadow-violet-200 shrink-0">
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-[10px] font-bold font-mono text-violet-400 tracking-widest">{p.step}</span>
                  </div>
                  <h3 className="font-['Syne'] font-bold text-gray-900 text-base mb-2">{p.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          WHY US
      ══════════════════════════════════════ */}
      <section className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">

        <div className="text-center mb-14" data-aos="fade-up">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-50 border border-violet-200 text-violet-700 text-xs font-semibold tracking-wider uppercase mb-4">
            ✦ Mengapa GardaTech
          </span>
          <h2 className="font-['Syne'] font-bold text-gray-900 text-3xl sm:text-4xl">
            Lebih dari Sekadar <span className="text-violet-600">Vendor</span>
          </h2>
          <p className="mt-3 text-gray-500 text-sm sm:text-base max-w-xl mx-auto">
            Kami adalah mitra digital jangka panjang yang peduli pada pertumbuhan bisnis Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {WHY_US.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                data-aos="fade-up"
                data-aos-delay={i * 80}
                data-aos-duration="600"
                className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-gray-100 shadow-sm hover:border-violet-200 hover:bg-violet-50/30 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-violet-50 border border-violet-100 flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4 text-violet-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm mb-1">{item.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ══════════════════════════════════════
          CTA BANNER
      ══════════════════════════════════════ */}
      <section className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div
          data-aos="zoom-in"
          data-aos-duration="700"
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-violet-600 via-indigo-600 to-purple-700 p-10 sm:p-16 text-center shadow-2xl shadow-violet-200"
        >
          <div className="pointer-events-none absolute -top-16 -left-16 w-64 h-64 bg-white/10 rounded-full blur-[60px]" />
          <div className="pointer-events-none absolute -bottom-16 -right-16 w-64 h-64 bg-indigo-400/20 rounded-full blur-[60px]" />

          <div className="relative z-10">
            <span
              data-aos="fade-down"
              data-aos-delay="100"
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 border border-white/25 text-white text-xs font-semibold tracking-wider uppercase mb-6"
            >
              ✦ Mulai Sekarang
            </span>
            <h2
              data-aos="fade-up"
              data-aos-delay="150"
              className="font-['Syne'] font-bold text-white text-3xl sm:text-4xl lg:text-5xl mb-4"
            >
              Siap Membangun<br />Proyek Digital Anda?
            </h2>
            <p
              data-aos="fade-up"
              data-aos-delay="250"
              className="text-white/75 text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed"
            >
              Konsultasi gratis dengan tim kami. Ceritakan kebutuhan Anda dan kami akan menyiapkan solusi yang tepat, sesuai budget dan timeline.
            </p>
            <div
              data-aos="fade-up"
              data-aos-delay="350"
              className="flex flex-wrap gap-4 justify-center"
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-violet-700 text-sm font-bold hover:bg-violet-50 hover:-translate-y-0.5 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Hubungi Kami
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/portofolio"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border-2 border-white/40 text-white text-sm font-semibold hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-300"
              >
                Lihat Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}