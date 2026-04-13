import type { Metadata } from "next";
import PrivacyContent from "./privacy-content";
import React from "react";

export const metadata: Metadata = {
  title: "Privacy Policy | CACS FinAcc Services",
  description: "Read our privacy policy to understand how CACS FinAcc Services collects, uses, and protects your data while providing expert CA services.",
  alternates: {
    canonical: "https://cacsfinaccservices.com/privacy",
  },
};

export default function PrivacyPage() {
  return <PrivacyContent />;
}
