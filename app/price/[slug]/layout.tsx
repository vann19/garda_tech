import type { Metadata } from "next";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  params: Promise<{ slug: string }>;
};

function formatPackageName(slug: string) {
  return slug
    .split("-")
    .map((word) => {
      if (["ui", "ux", "mvp", "seo"].includes(word)) {
        return word.toUpperCase();
      }

      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const packageName = formatPackageName(slug);
  const title = `${packageName} — Harga & Pemesanan`;
  const description = `Lihat detail paket ${packageName}, ruang lingkup layanan, estimasi harga, dan formulir konsultasi proyek Garda Tech.`;
  const url = `/price/${slug}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url },
    twitter: { title, description },
  };
}

export default function PackageLayout({ children }: Props) {
  return children;
}
