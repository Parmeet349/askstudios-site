import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.askstudios.net"),
  title: {
    default: "ASK Studios | Building Next-Gen Apps & AI Solutions",
    template: "%s | ASK Studios",
  },
  description: "Product studio based in Ontario, Canada—building mobile apps, web applications, automations, and AI solutions.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.askstudios.net",
    siteName: "ASK Studios",
    title: "ASK Studios | Building Next-Gen Apps & AI Solutions",
    description: "Product studio based in Ontario, Canada—building mobile apps, web applications, automations, and AI solutions.",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "ASK Studios Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ASK Studios | Building Next-Gen Apps & AI Solutions",
    description: "Product studio based in Ontario, Canada—building mobile apps, web applications, automations, and AI solutions.",
    images: ["/logo.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.askstudios.net/#organization",
      "name": "ASK Studios",
      "url": "https://www.askstudios.net",
      "logo": "https://www.askstudios.net/logo.png",
      "email": "info@askstudios.net",
      "description": "Product-focused studio building mobile apps, web applications, automations, and AI solutions.",
    },
    {
      "@type": "WebSite",
      "@id": "https://www.askstudios.net/#website",
      "url": "https://www.askstudios.net",
      "name": "ASK Studios",
      "publisher": {
        "@id": "https://www.askstudios.net/#organization",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
