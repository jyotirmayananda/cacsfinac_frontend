import type { Metadata } from "next";
import AboutContent from "./about-content";
import React from "react";

export const metadata: Metadata = {
  title: "About Us | CACS FinAcc - Top Chartered Accountants & Financial Advisors",
  description: "Learn about CACS FinAcc, a team of expert Chartered Accountants, Company Secretaries, and financial professionals providing Virtual CFO, Audit, and Tax Compliance services.",
  keywords: [
    "About CACS FinAcc",
    "Chartered Accountants Bangalore",
    "Virtual CFO India",
    "Tax Consultants",
    "Financial Advisors",
    "CACS",
    "CA",
    "Tax",
    "GST",
    "ITR",
    "CFO",
    "FinAcc",
    "Audit"
  ],
  alternates: {
    canonical: "https://cacsfinaccservices.com/about",
  },
  openGraph: {
    title: "About Us | CACS FinAcc",
    description: "Your strategic partner for accounting, taxation, compliance, and corporate governance.",
    url: "https://cacsfinaccservices.com/about",
    images: [
      {
        url: "/Image/about-us-img.jpg",
        width: 1200,
        height: 630,
        alt: "About CACS FinAcc",
      },
    ],
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
