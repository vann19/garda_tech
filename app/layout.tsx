import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import PageTransition from "@/components/PageTransition";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.gardatech.cloud"),
  verification: {
    google: "r8hroVz9lvz7qsxQHTe5Q3idMmuYzQg6XBehhEpNjxY",
  },
  title: {
    default: "Garda Tech | Jasa Pembuatan Website & Aplikasi Mobile Profesional",
    template: "%s | Garda Tech",
  },
  description:
    "Garda Tech menyediakan jasa pembuatan website profesional, aplikasi mobile, dan solusi digital terpercaya untuk bisnis Anda. Harga terjangkau, kualitas premium.",
  keywords: [
    "jasa pembuatan website",
    "jasa website profesional",
    "jasa aplikasi mobile",
    "web developer indonesia",
    "gardatech",
    "garda tech",
    "pembuatan website murah",
    "jasa IT profesional",
  ],
  authors: [{ name: "Garda Tech", url: "https://www.gardatech.cloud" }],
  creator: "Garda Tech",
  publisher: "Garda Tech",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://www.gardatech.cloud",
    siteName: "Garda Tech",
    title: "Garda Tech | Jasa Pembuatan Website & Aplikasi Mobile Profesional",
    description:
      "Garda Tech menyediakan jasa pembuatan website profesional, aplikasi mobile, dan solusi digital terpercaya untuk bisnis Anda.",
    images: [
      {
        url: "/img/logo2.png",
        width: 1200,
        height: 630,
        alt: "Garda Tech - Jasa Website Profesional",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Garda Tech | Jasa Pembuatan Website & Aplikasi Mobile",
    description:
      "Garda Tech menyediakan jasa pembuatan website profesional dan aplikasi mobile untuk bisnis Anda.",
    images: ["/img/logo2.png"],
  },
  icons: {
    icon: "/img/logo2.png",
    apple: "/img/logo2.png",
  },
  alternates: {
    canonical: "https://www.gardatech.cloud",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": "https://www.gardatech.cloud/#organization",
      name: "Garda Tech",
      url: "https://www.gardatech.cloud",
      logo: {
        "@type": "ImageObject",
        url: "https://www.gardatech.cloud/img/logo2.png",
      },
      image: "https://www.gardatech.cloud/img/logo2.png",
      description:
        "Garda Tech menyediakan jasa pembuatan website profesional, aplikasi mobile, dan solusi digital terpercaya untuk bisnis Anda. Harga terjangkau, kualitas premium.",
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        addressCountry: "ID",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Layanan Digital Garda Tech",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Jasa Pembuatan Website Profesional",
              description:
                "Pembuatan website company profile, e-commerce, landing page, dan sistem web kustom berperforma tinggi.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Jasa Pembuatan Aplikasi Mobile (Android & iOS)",
              description:
                "Pengembangan aplikasi mobile modern yang responsif dan intuitif untuk bisnis.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "UI/UX Design & Solusi IT",
              description:
                "Desain antarmuka modern yang menarik dan konsultasi transformasi digital bisnis.",
            },
          },
        ],
      },
      sameAs: ["https://www.gardatech.cloud"],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.gardatech.cloud/#website",
      url: "https://www.gardatech.cloud",
      name: "Garda Tech",
      description:
        "Jasa Pembuatan Website & Aplikasi Mobile Profesional Terpercaya",
      publisher: {
        "@id": "https://www.gardatech.cloud/#organization",
      },
      inLanguage: "id-ID",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <PageTransition />
        <Navbar />
        {children}
      </body>
    </html>
  );
}

