import type { Metadata } from "next";
import BlogContent from "./blog-content";
import React from "react";

export const metadata: Metadata = {
  title: "Blog & Insights | CACS FinAcc - Top Tax & Compliance Updates",
  description: "Stay updated with the latest in Income Tax, GST, Corporate Compliance, and Virtual CFO strategies from top CAs in Bengaluru.",
  keywords: [
    "Tax compliance blog",
    "Income Tax updates India",
    "GST rule changes",
    "Financial strategies for SMEs",
    "CACS FinAcc Insights",
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
    canonical: "https://cacsfinaccservices.com/blog",
  },
  openGraph: {
    title: "Blog & Insights | CACS FinAcc",
    description: "Expert financial insights on taxation, compliance, and wealth management.",
    url: "https://cacsfinaccservices.com/blog",
    images: [
      {
        url: "/Image/cacshero.png",
        width: 1200,
        height: 630,
        alt: "CACS FinAcc Blog",
      },
    ],
  },
};

export default function BlogPage() {
  return <BlogContent />;
}
