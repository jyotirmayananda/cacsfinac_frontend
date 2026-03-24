import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Income Tax & GST Calculators India - CACS FinAcc",
  description: "Calculate your Income Tax (Old vs New Regime) and GST accurately using our free online calculators. Get instant estimates for your business in India.",
  keywords: ["GST Calculator India", "Income Tax New vs Old Regime Calculator", "Tax savings calculator", "TDS calculator online"],
};

export default function CalculatorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
