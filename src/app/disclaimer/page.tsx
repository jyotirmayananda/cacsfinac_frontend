import type { Metadata } from "next";
import DisclaimerContent from "./disclaimer-content";
import React from "react";

export const metadata: Metadata = {
  title: "Disclaimer | CACS FinAcc Services",
  description: "Legal disclaimer and terms of use for CACS FinAcc Services website and information.",
  alternates: {
    canonical: "https://cacsfinaccservices.com/disclaimer",
  },
};

export default function DisclaimerPage() {
  return <DisclaimerContent />;
}
