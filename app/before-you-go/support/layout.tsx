import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Before You Go - Support & Help Center",
  description: "Help, FAQs, and support for the Before You Go departure checklist mobile app.",
  alternates: {
    canonical: "/before-you-go/support",
  },
};

export default function BeforeYouGoSupportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
