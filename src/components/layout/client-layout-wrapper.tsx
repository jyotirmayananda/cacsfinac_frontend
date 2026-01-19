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
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      <CursorSpotlight />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <NextTopLoader color="#1678fb" showSpinner={false} />
        {isAuthPage ? (
          <main>{children}</main>
        ) : (
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow my-8">{children}</main>
            <Footer />
          </div>
        )}
        <Toaster />
        {!isAuthPage && <WhatsAppButton />}
      </div>
    </ThemeProvider>
  );
}
