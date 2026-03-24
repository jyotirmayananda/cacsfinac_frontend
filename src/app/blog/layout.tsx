import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Knowledge Hub - Latest Tax & Business Updates in India",
  description: "Read the latest updates on GST changes for Indian SMEs, how NRIs can save tax on Indian property sales, and expert financial advice from CACS FinAcc.",
  keywords: ["Latest GST Changes for Indian SMEs 2024", "How NRIs can save tax on Indian property sales", "Income Tax updates India", "Indian Startup Compliance"],
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
