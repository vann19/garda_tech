import type { Metadata } from "next";
import type { ReactNode } from "react";

const title = "Tentang Tim & Profil Perusahaan";
const description =
  "Kenali Garda Tech, tim pengembang website dan solusi digital di Yogyakarta yang membantu bisnis membangun produk digital secara profesional.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/about" },
  openGraph: { title, description, url: "/about" },
  twitter: { title, description },
};

export default function AboutLayout({ children }: { children: ReactNode }) {
  return children;
}
