import type { Metadata } from "next";
import ResetPasswordContent from "./reset-password-content";
import React from "react";

export const metadata: Metadata = {
  title: "Reset Password | CACS FinAcc Client Portal",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ResetPasswordPage() {
  return <ResetPasswordContent />;
}
