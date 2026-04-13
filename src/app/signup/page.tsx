import type { Metadata } from "next";
import SignupContent from "./signup-content";
import React from "react";

export const metadata: Metadata = {
  title: "Create Account | CACS FinAcc Client Portal",
  robots: {
    index: false,
    follow: false,
  },
};

export default function SignupPage() {
  return <SignupContent />;
}
