import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ITR-1 (Sahaj) Filing Services in Bengaluru - CACS FinAcc",
  description: "Expert ITR-1 (Sahaj) return filing services for salaried individuals in Bengaluru. Ensure accurate calculation, timely filing, and maximum tax savings.",
  keywords: ["ITR-1 filing Bengaluru", "Sahaj form filing service", "Income Tax Return for Salary", "Tax Filing services near me"],
};

export default function ITR1Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
