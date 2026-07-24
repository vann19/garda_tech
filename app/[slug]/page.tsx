import React from 'react'
import { notFound } from 'next/navigation'
import { Globe, Palette, Settings, Smartphone, Shield } from 'lucide-react'
import ServiceDetailClient, { ServiceContent } from './ServiceDetailClient'

const information: ServiceContent[] = [
  {
    number: '01',
    icon: <Globe className="w-8 h-8" />,
    title: 'Website Development',
    slug: 'website-development',
    techStack: ['Next.js', 'React', 'Node.js', 'Laravel', 'MySQL', 'Tailwind CSS'],
    id: {
      tagline: 'Bangun Kehadiran Digital yang Kuat',
      description: 'Kami mengembangkan website profesional dengan teknologi terkini untuk memenuhi kebutuhan bisnis Anda — dari company profile hingga platform e-commerce berperforma tinggi.',
      longDescription: 'Layanan Website Development kami mencakup pembuatan company profile, e-commerce, portal berita, landing page promosi, dan berbagai jenis website lainnya. Kami menggunakan teknologi modern seperti React, Next.js, dan Node.js untuk menghasilkan website yang cepat, responsif, dan SEO-friendly.\n\nSetiap website yang kami bangun dirancang dengan mempertimbangkan konversi bisnis — bukan hanya tampilan yang indah, tapi juga pengalaman yang mendorong pengunjung untuk menjadi pelanggan Anda.',
      features: [
        'Responsive Design (Mobile & Desktop)',
        'SEO Optimization',
        'Performa Loading Cepat',
        'Antarmuka Ramah Pengguna',
        'Content Management System (CMS)',
        'Keamanan & SSL',
        'Integrasi Google Analytics',
        'Dukungan Multi-bahasa',
      ],
      process: ['Konsultasi & Brief', 'Wireframe & Desain', 'Development', 'Testing & Launch'],
      stats: [
        { label: 'Proyek Selesai', value: '30+' },
        { label: 'Waktu Pengerjaan', value: '2-4 Minggu' },
        { label: 'Kepuasan Klien', value: '99%' },
      ],
    },
    en: {
      tagline: 'Build a Strong Digital Presence',
      description: 'We develop professional websites using the latest technologies to meet your business needs — from company profiles to high-performance e-commerce platforms.',
      longDescription: 'Our Website Development service covers company profiles, e-commerce, news portals, promotional landing pages, and more. We use modern technologies like React, Next.js, and Node.js to deliver fast, responsive, and SEO-friendly websites.\n\nEvery website we build is designed with business conversion in mind — not just a beautiful look, but an experience that turns visitors into your customers.',
      features: [
        'Responsive Design (Mobile & Desktop)',
        'SEO Optimization',
        'Fast Loading Performance',
        'User-Friendly Interface',
        'Content Management System (CMS)',
        'Security & SSL',
        'Google Analytics Integration',
        'Multi-language Support',
      ],
      process: ['Consultation & Brief', 'Wireframe & Design', 'Development', 'Testing & Launch'],
      stats: [
        { label: 'Projects Done', value: '30+' },
        { label: 'Delivery Time', value: '2-4 Weeks' },
        { label: 'Client Satisfaction', value: '99%' },
      ],
    },
  },
  {
    number: '03',
    icon: <Palette className="w-8 h-8" />,
    title: 'UI/UX Design',
    slug: 'ui-ux-design',
    techStack: ['Figma', 'FigJam', 'Adobe XD', 'Notion', 'Zeplin'],
    id: {
      tagline: 'Desain yang Berbicara kepada Pengguna',
      description: 'Menciptakan pengalaman pengguna yang intuitif dan antarmuka yang menarik — karena desain yang baik adalah investasi bisnis, bukan sekadar estetika.',
      longDescription: 'Tim desainer kami akan membantu menciptakan desain yang tidak hanya indah secara visual, tetapi juga fungsional dan mudah digunakan. Kami melakukan riset pengguna, pembuatan wireframe, prototyping, dan pengujian untuk memastikan desain yang dihasilkan sesuai dengan kebutuhan pengguna.\n\nDengan pendekatan design thinking yang berpusat pada pengguna, kami memastikan setiap elemen UI dirancang untuk meningkatkan konversi dan kepuasan pengguna akhir produk Anda.',
      features: [
        'User Research & Persona',
        'Wireframing & Sitemap',
        'Interactive Prototyping',
        'Visual & Brand Design',
        'Usability Testing',
        'Design System & Component Library',
        'Handoff ke Developer',
        'Revisi hingga Disetujui',
      ],
      process: ['Riset Pengguna', 'Wireframe', 'Visual Design', 'Prototyping'],
      stats: [
        { label: 'Proyek Selesai', value: '25+' },
        { label: 'Waktu Pengerjaan', value: '1-3 Minggu' },
        { label: 'Kepuasan Klien', value: '100%' },
      ],
    },
    en: {
      tagline: 'Design That Speaks to Your Users',
      description: 'Creating intuitive user experiences and attractive interfaces — because good design is a business investment, not just aesthetics.',
      longDescription: 'Our design team will help create designs that are not only visually beautiful but also functional and easy to use. We conduct user research, wireframing, prototyping, and testing to ensure the design meets user needs.\n\nWith a user-centered design thinking approach, we ensure every UI element is crafted to boost conversion and satisfaction for your product\'s end users.',
      features: [
        'User Research & Persona',
        'Wireframing & Sitemap',
        'Interactive Prototyping',
        'Visual & Brand Design',
        'Usability Testing',
        'Design System & Component Library',
        'Developer Handoff',
        'Revisions Until Approved',
      ],
      process: ['User Research', 'Wireframe', 'Visual Design', 'Prototyping'],
      stats: [
        { label: 'Projects Done', value: '25+' },
        { label: 'Delivery Time', value: '1-3 Weeks' },
        { label: 'Client Satisfaction', value: '100%' },
      ],
    },
  },
  {
    number: '04',
    icon: <Settings className="w-8 h-8" />,
    title: 'Custom Web System',
    slug: 'custom-web-system',
    techStack: ['Next.js', 'Laravel', 'PostgreSQL', 'Redis', 'Docker', 'REST API'],
    id: {
      tagline: 'Otomasi Proses Bisnis Anda',
      description: 'Solusi sistem web kustom yang dirancang khusus sesuai kebutuhan unik bisnis Anda — dari sistem inventory hingga ERP terintegrasi.',
      longDescription: 'Kami mengembangkan sistem web kustom untuk mengotomatisasi proses bisnis Anda. Mulai dari sistem inventory, manajemen keuangan, CRM, sistem absensi, hingga platform internal perusahaan yang terintegrasi penuh.\n\nSistem yang kami bangun dirancang untuk tumbuh bersama bisnis Anda. Arsitektur yang modular memungkinkan penambahan fitur baru tanpa mengganggu operasional yang sudah berjalan.',
      features: [
        'Desain Database Kustom',
        'Otomasi Proses Bisnis',
        'Integrasi Third-Party API',
        'Dashboard Real-time',
        'Manajemen Pengguna & Role',
        'Laporan & Analitik Lanjutan',
        'Sistem Notifikasi',
        'Backup & Recovery',
      ],
      process: ['Analisis Kebutuhan', 'Arsitektur Sistem', 'Development', 'Training & Deploy'],
      stats: [
        { label: 'Sistem Dibangun', value: '15+' },
        { label: 'Waktu Pengerjaan', value: '4-12 Minggu' },
        { label: 'Uptime Sistem', value: '99.9%' },
      ],
    },
    en: {
      tagline: 'Automate Your Business Processes',
      description: 'Custom web system solutions designed specifically for your unique business needs — from inventory systems to fully integrated ERP.',
      longDescription: 'We develop custom web systems to automate your business processes — from inventory management and finance systems to CRM, attendance tracking, and fully integrated internal platforms.\n\nThe systems we build are designed to grow with your business. A modular architecture allows new features to be added without disrupting existing operations.',
      features: [
        'Custom Database Design',
        'Business Process Automation',
        'Third-Party API Integration',
        'Real-time Dashboard',
        'User & Role Management',
        'Advanced Reports & Analytics',
        'Notification System',
        'Backup & Recovery',
      ],
      process: ['Requirements Analysis', 'System Architecture', 'Development', 'Training & Deploy'],
      stats: [
        { label: 'Systems Built', value: '15+' },
        { label: 'Delivery Time', value: '4-12 Weeks' },
        { label: 'System Uptime', value: '99.9%' },
      ],
    },
  },
  {
    number: '02',
    icon: <Smartphone className="w-8 h-8" />,
    title: 'Mobile App Development',
    slug: 'mobile-development',
    techStack: ['Flutter', 'Dart', 'Firebase', 'Node.js', 'REST API', 'Figma'],
    id: {
      tagline: 'Aplikasi Mobile yang Mulus di iOS & Android',
      description: 'Kami membangun aplikasi mobile cross-platform menggunakan Flutter yang berjalan mulus di iOS dan Android — dari MVP sederhana hingga aplikasi enterprise skala besar.',
      longDescription: 'Layanan Mobile App Development kami menggunakan Flutter, framework terdepan dari Google, untuk menghasilkan aplikasi yang memiliki performa dan tampilan seperti aplikasi native di iOS maupun Android hanya dari satu codebase.\n\nKami menangani seluruh siklus pengembangan: dari konsultasi kebutuhan, desain UI/UX yang sesuai platform, pengembangan fitur, integrasi backend, pengujian menyeluruh, hingga publikasi ke App Store dan Google Play. Cocok untuk startup yang membutuhkan MVP cepat maupun perusahaan yang ingin memigrasikan sistem ke mobile.',
      features: [
        'Flutter Cross-Platform (iOS & Android)',
        'UI dengan Native Feel',
        'Integrasi REST API & Firebase',
        'Push Notification',
        'Autentikasi & Manajemen Pengguna',
        'Offline Mode Support',
        'Publikasi ke App Store & Play Store',
        'Update & Pemeliharaan Berkala',
      ],
      process: ['Konsultasi & Analisis', 'Desain UI/UX Mobile', 'Development & Testing', 'Publikasi & Launch'],
      stats: [
        { label: 'Aplikasi Diluncurkan', value: '10+' },
        { label: 'Waktu Pengerjaan', value: '4-10 Minggu' },
        { label: 'Kepuasan Klien', value: '99%' },
      ],
    },
    en: {
      tagline: 'Smooth Mobile Apps for iOS & Android',
      description: 'We build cross-platform mobile applications using Flutter that run smoothly on iOS and Android — from simple MVPs to large-scale enterprise apps.',
      longDescription: 'Our Mobile App Development service uses Flutter, Google\'s leading framework, to deliver apps with native-like performance and feel on both iOS and Android from a single codebase.\n\nWe handle the entire development cycle: from requirements consultation, platform-appropriate UI/UX design, feature development, backend integration, thorough testing, to publishing on the App Store and Google Play. Ideal for startups needing a fast MVP or companies looking to bring their systems to mobile.',
      features: [
        'Flutter Cross-Platform (iOS & Android)',
        'Native Feel UI',
        'REST API & Firebase Integration',
        'Push Notifications',
        'Authentication & User Management',
        'Offline Mode Support',
        'App Store & Play Store Publishing',
        'Regular Updates & Maintenance',
      ],
      process: ['Consultation & Analysis', 'Mobile UI/UX Design', 'Development & Testing', 'Publishing & Launch'],
      stats: [
        { label: 'Apps Launched', value: '10+' },
        { label: 'Delivery Time', value: '4-10 Weeks' },
        { label: 'Client Satisfaction', value: '99%' },
      ],
    },
  },
  {
    number: '05',
    icon: <Shield className="w-8 h-8" />,
    title: 'Maintenance & Support',
    slug: 'maintenance-support',
    techStack: ['Uptime Robot', 'Sentry', 'Docker', 'Linux', 'Nginx', 'GitHub Actions'],
    id: {
      tagline: 'Sistem Selalu Optimal, Anda Tenang',
      description: 'Kami tidak hanya membangun, tapi juga merawat. Layanan maintenance berkala memastikan sistem Anda selalu berjalan optimal, aman, dan up-to-date tanpa downtime.',
      longDescription: 'Setelah proyek selesai diluncurkan, pekerjaan belum berakhir. Sistem digital perlu dipantau, diperbarui, dan dijaga keamanannya secara berkala agar tetap berjalan optimal.\n\nLayanan Maintenance & Support kami mencakup monitoring 24/7, pembaruan keamanan, backup rutin, perbaikan bug, optimasi performa, dan respons cepat terhadap isu kritis. Dengan SLA yang jelas, Anda mendapatkan ketenangan pikiran bahwa sistem bisnis Anda selalu terlindungi dan beroperasi penuh.',
      features: [
        'Monitoring Uptime 24/7',
        'Pembaruan Keamanan Rutin',
        'Backup Data Berkala',
        'Perbaikan Bug & Hotfix',
        'Optimasi Performa',
        'Update Dependensi & Library',
        'Laporan Kesehatan Sistem Bulanan',
        'SLA Response Time Terjamin',
      ],
      process: ['Onboarding & Audit Sistem', 'Setup Monitoring', 'Pemeliharaan Berkala', 'Laporan & Evaluasi'],
      stats: [
        { label: 'Sistem Dipelihara', value: '20+' },
        { label: 'Response Time', value: '< 2 Jam' },
        { label: 'Uptime Rata-rata', value: '99.9%' },
      ],
    },
    en: {
      tagline: 'Always Optimal System, Peace of Mind for You',
      description: "We don't just build — we maintain. Regular maintenance services ensure your system always runs optimally, securely, and up-to-date without downtime.",
      longDescription: "After a project launches, the work isn't over. Digital systems need to be monitored, updated, and kept secure on a regular basis to stay optimal.\n\nOur Maintenance & Support service includes 24/7 uptime monitoring, security updates, regular backups, bug fixes, performance optimization, and fast response to critical issues. With a clear SLA, you get peace of mind knowing your business system is always protected and fully operational.",
      features: [
        '24/7 Uptime Monitoring',
        'Regular Security Updates',
        'Periodic Data Backups',
        'Bug Fixes & Hotfixes',
        'Performance Optimization',
        'Dependency & Library Updates',
        'Monthly System Health Reports',
        'Guaranteed SLA Response Time',
      ],
      process: ['Onboarding & System Audit', 'Monitoring Setup', 'Regular Maintenance', 'Reports & Evaluation'],
      stats: [
        { label: 'Systems Maintained', value: '20+' },
        { label: 'Response Time', value: '< 2 Hours' },
        { label: 'Average Uptime', value: '99.9%' },
      ],
    },
  },
  {
    number: '06',
    icon: <Smartphone className="w-8 h-8" />,
    title: 'Brand & Digital Assets',
    slug: 'brand-digital-assets',
    techStack: ['Adobe Illustrator', 'Adobe Photoshop', 'Figma', 'Canva Pro'],
    id: {
      tagline: 'Identitas Brand yang Tak Terlupakan',
      description: 'Membangun identitas merek yang kuat dan konsisten — dari logo yang bercerita hingga aset digital yang siap pakai di semua platform.',
      longDescription: 'Kami membantu membangun identitas merek yang kuat melalui desain logo, pemilihan warna, tipografi, dan aset visual lainnya yang mencerminkan nilai dan kepribadian bisnis Anda.\n\nKami juga menciptakan berbagai aset digital untuk kebutuhan marketing — dari template media sosial, presentasi bisnis, hingga materi promosi cetak yang konsisten dan profesional.',
      features: [
        'Logo Design & Variasi',
        'Brand Identity Guidelines',
        'Template Media Sosial',
        'Marketing Collateral',
        'Kartu Nama & Stationery',
        'Template Presentasi Digital',
        'Aset Iklan Digital',
        'Brand Refresh / Rebrand',
      ],
      process: ['Brand Discovery', 'Konsep & Eksplorasi', 'Finalisasi Desain', 'Deliverable Aset'],
      stats: [
        { label: 'Brand Dibangun', value: '40+' },
        { label: 'Waktu Pengerjaan', value: '1-2 Minggu' },
        { label: 'Revisi Gratis', value: '3x' },
      ],
    },
    en: {
      tagline: 'An Unforgettable Brand Identity',
      description: 'Building a strong and consistent brand identity — from logos that tell a story to digital assets ready to use across all platforms.',
      longDescription: 'We help build a strong brand identity through logo design, color selection, typography, and other visual assets that reflect the values and personality of your business.\n\nWe also create various digital assets for your marketing needs — from social media templates and business presentations to consistent and professional print promotional materials.',
      features: [
        'Logo Design & Variations',
        'Brand Identity Guidelines',
        'Social Media Templates',
        'Marketing Collateral',
        'Business Cards & Stationery',
        'Digital Presentation Templates',
        'Digital Ad Assets',
        'Brand Refresh / Rebrand',
      ],
      process: ['Brand Discovery', 'Concept & Exploration', 'Design Finalization', 'Asset Deliverables'],
      stats: [
        { label: 'Brands Built', value: '40+' },
        { label: 'Delivery Time', value: '1-2 Weeks' },
        { label: 'Free Revisions', value: '3x' },
      ],
    },
  },
]

const getInformationBySlug = (slug: string) => {
  return information.find(item => item.slug === slug)
}

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return information.map((item) => ({ slug: item.slug }))
}

export default async function InformationDetailPage({ params }: PageProps) {
  const { slug } = await params
  const info = getInformationBySlug(slug)

  if (!info) notFound()

  const currentIndex = information.findIndex(i => i.slug === slug)
  const prevService = currentIndex > 0
    ? { slug: information[currentIndex - 1].slug, title: information[currentIndex - 1].title }
    : null
  const nextService = currentIndex < information.length - 1
    ? { slug: information[currentIndex + 1].slug, title: information[currentIndex + 1].title }
    : null

  return (
    <ServiceDetailClient
      info={info}
      prevService={prevService}
      nextService={nextService}
    />
  )
}
