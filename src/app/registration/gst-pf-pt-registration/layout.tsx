import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GST, PF & PT Registration Services in Bengaluru",
  description: "Get comprehensive GST, Provident Fund (PF), and Professional Tax (PT) registration services in Bengaluru and Karnataka. Expert CA guidance for your business.",
  keywords: ["GST registration Bengaluru", "PF registration online", "Professional Tax Karnataka", "business registration services near me"],
};

export default function GSTLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
