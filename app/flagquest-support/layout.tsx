import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FlagQuest Support & Help Center",
  description: "Find answers to gameplay questions, troubleshooting guides, and get technical help for FlagQuest.",
  alternates: {
    canonical: "/flagquest-support",
  },
};

export default function FlagQuestSupportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
