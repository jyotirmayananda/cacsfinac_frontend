"use client";

import { QuoteForm } from "./quote-form";

export function AnimatedQuoteForm() {
  return (
    <div className="relative w-full flex items-center justify-center px-4 py-6">
      {/* 3 layers of orbiting rings - hidden on mobile, visible on md and up */}
      <div className="hidden md:absolute md:block w-[250px] h-[250px] border rounded-full border-border animate-spin-slow">
        <div className="absolute top-0 left-1/2 w-2 h-2 bg-primary rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      </div>
      <div className="hidden md:absolute md:block w-[350px] h-[350px] border rounded-full border-border animate-spin-very-slow">
        <div className="absolute bottom-0 left-1/2 w-3 h-3 bg-primary rounded-full -translate-x-1/2 translate-y-1/2"></div>
      </div>
      <div className="hidden md:absolute md:block w-[450px] h-[450px] border rounded-full border-border animate-spin-slow">
        <div className="absolute top-1/2 right-0 w-2 h-2 bg-primary rounded-full translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="z-10 w-full md:w-auto md:max-w-md bg-card/50 rounded-3xl shadow-2xl animate-float backdrop-blur-sm">
        <QuoteForm />
      </div>
    </div>
  );
}
