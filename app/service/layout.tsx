import type { Metadata } from "next";
import type { ReactNode } from "react";

const title = "Layanan Website, Aplikasi & Solusi Digital";
const description =
  "Jelajahi layanan Garda Tech untuk pembuatan website, aplikasi mobile, UI/UX, sistem web kustom, dan kebutuhan transformasi digital bisnis.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/service" },
  openGraph: { title, description, url: "/service" },
  twitter: { title, description },
};

export default function ServiceLayout({ children }: { children: ReactNode }) {
  return children;
}
