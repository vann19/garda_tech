import type { Metadata } from "next";
import type { ReactNode } from "react";

const title = "Portofolio Website & Produk Digital";
const description =
  "Lihat portofolio website, aplikasi, dan produk digital yang dikerjakan Garda Tech untuk berbagai kebutuhan bisnis dan organisasi.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/portofolio" },
  openGraph: { title, description, url: "/portofolio" },
  twitter: { title, description },
};

export default function PortfolioLayout({ children }: { children: ReactNode }) {
  return children;
}
