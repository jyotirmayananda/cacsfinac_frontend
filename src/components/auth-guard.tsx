"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { getStoredUser } from "../../lib/auth";

export function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    // Check if user is logged in
    const user = getStoredUser();

    if (!user) {
      // Not logged in, redirect to login with return url
      setAuthorized(false);
      router.push(`/login?redirect=${encodeURIComponent(pathname)}`);
    } else {
      setAuthorized(true);
    }
  }, [router, pathname]);

  return authorized ? <>{children}</> : (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="flex flex-col items-center gap-4">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
        <p className="text-muted-foreground font-medium animate-pulse tracking-widest text-[10px] uppercase">Verifying Authorization...</p>
      </div>
    </div>
  );
}
