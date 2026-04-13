import type { Metadata } from "next";
import CalculatorsContent from "./calculators-content";
import React from "react";

export const metadata: Metadata = {
  title: "Financial & Tax Calculators | CACS FinAcc Free Tools",
  description: "Free online Income Tax, SIP, EMI, and GST calculators. Make smart financial decisions with our easy-to-use tools provided by top CAs.",
  keywords: [
    "Income Tax Calculator",
    "SIP Calculator",
    "EMI Calculator",
    "GST Calculator",
    "Free Financial Tools",
    "Tax saving calculator",
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
    canonical: "https://cacsfinaccservices.com/calculators",
  },
  openGraph: {
    title: "Financial & Tax Calculators | CACS FinAcc",
    description: "Free online Income Tax, SIP, EMI, and GST calculators.",
    url: "https://cacsfinaccservices.com/calculators",
    images: [
      {
        url: "/Image/cacshero.png",
        width: 1200,
        height: 630,
        alt: "CACS FinAcc Calculators",
      },
    ],
  },
};

export default function CalculatorsPage() {
  return <CalculatorsContent />;
}
