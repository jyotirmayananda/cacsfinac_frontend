import { AuthGuard } from "@/components/auth-guard";
import React from "react";

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AuthGuard>{children}</AuthGuard>;
}
