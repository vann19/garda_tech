import type { Metadata } from "next";
import type { ReactNode } from "react";
import { projects } from "@/lib/projects";

type Props = {
  children: ReactNode;
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  const title = project ? `${project.title} — Portofolio` : "Detail Portofolio";
  const description = project?.description ??
    "Lihat detail proyek website, aplikasi, dan produk digital Garda Tech.";
  const url = `/portofolio/${slug}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      images: project?.image ? [{ url: project.image, alt: project.title }] : undefined,
    },
    twitter: {
      title,
      description,
      images: project?.image ? [project.image] : undefined,
    },
  };
}

export default function ProjectLayout({ children }: Props) {
  return children;
}
