import type { Metadata } from "next";
import ForgotPasswordContent from "./forgot-password-content";
import React from "react";

export const metadata: Metadata = {
  title: "Forgot Password | CACS FinAcc Client Portal",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ForgotPasswordPage() {
  return <ForgotPasswordContent />;
}
