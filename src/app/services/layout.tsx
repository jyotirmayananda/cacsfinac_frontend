import React from "react";
import { ServicesGatekeeper } from "@/components/services-gatekeeper";

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ServicesGatekeeper>{children}</ServicesGatekeeper>;
}
