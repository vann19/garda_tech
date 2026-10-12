import type { Metadata } from "next";
import type { ReactNode } from "react";
import { members } from "@/lib/members";

type Props = {
  children: ReactNode;
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const member = members.find((item) => item.slug === slug);
  const title = member
    ? `${member.name} — ${member.role}`
    : "Profil Tim Garda Tech";
  const description = member
    ? `${member.name} adalah ${member.role} di Garda Tech yang berbasis di ${member.location}. Kenali pengalaman dan keahliannya.`
    : "Kenali anggota tim dan keahlian profesional di balik Garda Tech.";
  const url = `/about/${slug}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url },
    twitter: { title, description },
  };
}

export default function MemberLayout({ children }: Props) {
  return children;
}
