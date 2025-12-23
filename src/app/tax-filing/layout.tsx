import { ProtectedRoute } from "@/components/protected-route";

export default function TaxFilingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ProtectedRoute>{children}</ProtectedRoute>;
}

