import type { Metadata } from "next";
import HomeContent from "./home-content";
import React from "react";

export const metadata: Metadata = {
  title: "CACS FinAcc | Rank One Income Tax & GST Registration Services in Bengaluru",
  description: "CACS FinAcc provides expert Income Tax Filing, GST Registration, CA Accounting, and Virtual CFO services for Startups, NRIs, and SMEs in Bengaluru and across India.",
  keywords: [
    "Income Tax filing services",
    "GST Registration Bengaluru",
    "CA Accounting Services",
    "Virtual CFO for startups",
    "Chartered Accountant near me",
    "Tax Consultation",
    "Business Registration",
    "CACS Top CA services",
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
    canonical: "https://cacsfinaccservices.com",
  },
  openGraph: {
    title: "CACS FinAcc | Income Tax, GST, and CA Accounting Services",
    description: "Expert CA services, Income Tax Filing, and GST Registration in Bengaluru.",
    url: "https://cacsfinaccservices.com",
    images: [
      {
        url: "/Image/cacshero.png",
        width: 1200,
        height: 630,
        alt: "CACS FinAcc Expert Services",
      },
    ],
  },
};

export default function Home() {
  return <HomeContent />;
}
