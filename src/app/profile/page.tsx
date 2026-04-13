import type { Metadata } from "next";
import ProfileContent from "./profile-content";
import React from "react";

export const metadata: Metadata = {
  title: "Profile | CACS FinAcc Client Portal",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ProfilePage() {
  return <ProfileContent />;
}
