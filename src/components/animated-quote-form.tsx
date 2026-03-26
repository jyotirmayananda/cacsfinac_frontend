"use client";

import { QuoteForm } from "./quote-form";

export function AnimatedQuoteForm() {
  return (
    <div className="relative w-full flex items-center justify-center py-4">
      <div className="z-10 w-full md:w-[400px] bg-white/80 dark:bg-slate-900/80 rounded-[3rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border border-white/50 dark:border-slate-800/50 backdrop-blur-3xl overflow-hidden animate-float">
        <QuoteForm />
      </div>
    </div>
  );
}
