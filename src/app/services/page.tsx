import type { Metadata } from "next";
import ServicesContent from "./services-content";
import React from "react";

export const metadata: Metadata = {
  title: "Top CA Services | Income Tax, GST, & Virtual CFO in Bengaluru",
  description: "Explore our expert CA services: Income Tax Filing, GST Registration, Audit Support, Company Registrations, and Accounting in Bengaluru. Get ranked #1 financial support.",
  keywords: [
    "Expert CA Services",
    "Income tax filing best CA",
    "Top GST Registration services",
    "Corporate Compliance Bengaluru",
    "Audit & ROC Support",
    "Best accounting software support",
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
    canonical: "https://cacsfinaccservices.com/services",
  },
  openGraph: {
    title: "CACS FinAcc | Comprehensive Accounting & Tax Services",
    description: "Your best partner for GST, Income Tax, and Virtual CFO services.",
    url: "https://cacsfinaccservices.com/services",
    images: [
      {
        url: "/Image/cacshero.png",
        width: 1200,
        height: 630,
        alt: "CACS FinAcc Services Overview",
      },
    ],
  },
};

export default function ServicesPage() {
  return <ServicesContent />;
}
