import type { Metadata } from "next";
import LoginContent from "./login-content";
import React from "react";

export const metadata: Metadata = {
  title: "Login | CACS FinAcc Client Portal",
  robots: {
    index: false,
    follow: false,
  },
};

export default function LoginPage() {
  return <LoginContent />;
}
