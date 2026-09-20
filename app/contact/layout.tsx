import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Start a project with ASK Studios. Build MVPs, mobile apps, automations, and AI integrations.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
