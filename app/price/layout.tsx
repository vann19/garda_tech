import type { Metadata } from "next";
import type { ReactNode } from "react";

const title = "Harga Jasa Website & Solusi Digital";
const description =
  "Lihat paket dan harga jasa website, aplikasi, desain, audit, serta solusi digital Garda Tech dengan lingkup pekerjaan dan estimasi yang transparan.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/price" },
  openGraph: { title, description, url: "/price" },
  twitter: { title, description },
};

export default function PriceLayout({ children }: { children: ReactNode }) {
  return children;
}
