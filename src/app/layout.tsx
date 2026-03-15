import type { Metadata, Viewport } from "next";
import "./globals.css";
import React from "react";
import { raleway, roboto, ubuntu } from "./fonts";
import ClientLayoutWrapper from "../components/layout/client-layout-wrapper";

export const metadata: Metadata = {
  metadataBase: new URL("https://cacsfinacc.com"),
  title: {
    default: "CACS FinAcc | Virtual CFO, Tax Filing & Compliance Services",
    template: "%s | CACS FinAcc",
  },
  description:
    "Expert financial services including Virtual CFO, Income Tax Filing, GST Registration, and Corporate Compliance for Startups, NRIs, and SMEs in India.",
  keywords: [
    "Virtual CFO",
    "Tax Filing",
    "GST Registration",
    "Income Tax Return",
    "Company Registration",
    "Accounting Services",
    "CACS FinAcc",
    "Chartered Accountant",
    "Tax Consultant",
    "Startup India",
    "NRI Tax Services",
    "ITR filing online",
    "income tax filing service",
    "file income tax return",
    "ITR filing India",
    "online ITR filing service",
    "income tax return filing online",
    "CA for income tax filing",
    "ITR filing near me",
    "ITR filing for salaried employees",
    "salary income tax filing",
    "file ITR for salary income",
    "form 16 ITR filing",
    "business income tax filing",
    "freelancer tax filing India",
    "professional income tax return",
    "44ADA tax filing",
    "presumptive taxation ITR filing",
    "capital gain tax filing",
    "share trading tax filing",
    "F&O tax filing",
    "intraday trading tax return",
    "stock market tax filing India",
    "crypto tax filing India",
    "cryptocurrency tax India",
    "file tax for crypto gains",
    "bitcoin tax filing India",
  ],
  authors: [{ name: "CACS FinAcc" }],
  creator: "CACS FinAcc",
  publisher: "CACS FinAcc",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://cacsfinacc.com",
    siteName: "CACS FinAcc",
    title: "CACS FinAcc | Virtual CFO, Tax Filing & Compliance Services",
    description:
      "Expert financial services including Virtual CFO, Income Tax Filing, GST Registration, and Corporate Compliance for Startups, NRIs, and SMEs in India.",
    images: [
      {
        url: "/Image/cacshero.png",
        width: 1200,
        height: 630,
        alt: "CACS FinAcc Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CACS FinAcc | Virtual CFO, Tax Filing & Compliance Services",
    description:
      "Expert financial services including Virtual CFO, Income Tax Filing, GST Registration, and Corporate Compliance.",
    images: ["/Image/cacshero.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#1678fb",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${roboto.variable} ${raleway.variable} ${ubuntu.variable} scroll-smooth`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <head>
        <link rel="stylesheet" href="/css/login.css" />
        <link rel="stylesheet" href="/css/signup.css" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AccountingService",
              name: "CACS FinAcc",
              url: "https://cacsfinacc.com",
              logo: "https://cacsfinacc.com/Image/logo.png",
              image: "https://cacsfinacc.com/Image/cacshero.png",
              description:
                "CACS FinAcc provides expert financial services including Virtual CFO, Income Tax Filing, GST Registration, and Corporate Compliance.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Bangalore",
                addressRegion: "Karnataka",
                addressCountry: "IN",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-9591633648",
                contactType: "customer service",
                areaServed: "IN",
                availableLanguage: ["English", "Hindi"],
              },
              sameAs: [
                "https://www.facebook.com/cacsfinacc",
                "https://twitter.com/cacsfinacc",
                "https://www.linkedin.com/company/cacsfinacc",
                "https://www.instagram.com/cacsfinacc",
              ],
            }),
          }}
        />
      </head>
      <body className="font-body antialiased">
        <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
      </body>
    </html>
  );
}
