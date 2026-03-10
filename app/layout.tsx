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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
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
