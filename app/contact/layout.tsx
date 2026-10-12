import type { Metadata } from "next";
import type { ReactNode } from "react";

const title = "Hubungi Garda Tech";
const description =
  "Konsultasikan kebutuhan website, aplikasi, desain, atau solusi digital bisnis Anda dengan tim Garda Tech di Yogyakarta.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/contact" },
  openGraph: { title, description, url: "/contact" },
  twitter: { title, description },
};

export default function ContactLayout({ children }: { children: ReactNode }) {
  return children;
}
