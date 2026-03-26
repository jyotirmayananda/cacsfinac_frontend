"use client";

import React from "react";
import { Header } from "./header";
import { Footer } from "./footer";
import { Toaster } from "../ui/toaster";
import NextTopLoader from "nextjs-toploader";
import { ThemeProvider } from "../theme-provider";
import { WhatsAppButton } from "../whatsapp-button";
import { usePathname } from "next/navigation";
import { CursorSpotlight } from "../cursor-spotlight";

export default function ClientLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAuthPage = pathname === "/login" || pathname === "/signup";

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      disableTransitionOnChange
    >
      <CursorSpotlight />
      <div className="w-full min-h-screen">
        <NextTopLoader color="#1678fb" showSpinner={false} />
        {isAuthPage ? (
          <main>{children}</main>
        ) : (
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        )}
        <Toaster />
        {!isAuthPage && <WhatsAppButton />}
      </div>
    </ThemeProvider>
  );
}
