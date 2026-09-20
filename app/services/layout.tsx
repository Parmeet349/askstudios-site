import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description: "End-to-end product development, mobile apps, AI integrations, SaaS platforms, and automation systems by ASK Studios.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
