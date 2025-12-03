
'use client';

import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';
import React from 'react';
import NextTopLoader from 'nextjs-toploader';
import { raleway, roboto, ubuntu } from './fonts';
import { ThemeProvider } from '@/components/theme-provider';
import { WhatsAppButton } from '@/components/whatsapp-button';
import { usePathname } from 'next/navigation';
import { CursorSpotlight } from '@/components/cursor-spotlight';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isAuthPage = pathname === '/login' || pathname === '/signup';

  return (
    <html
      lang="en"
      className={`${roboto.variable} ${raleway.variable} ${ubuntu.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <link rel="stylesheet" href="/css/login.css" />
        <link rel="stylesheet" href="/css/signup.css" />
      </head>
      <body className="font-body antialiased">
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
      </body>
    </html>
  );
}
