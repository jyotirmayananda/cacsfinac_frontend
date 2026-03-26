"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Abstract3DScene } from "./abstract-3d-scene";
import { AnimatedQuoteForm } from "./animated-quote-form";

interface ModernHeroProps {
  title?: React.ReactNode;
  subtitle?: string;
}

export function ModernHero({ title, subtitle }: ModernHeroProps) {
  const defaultTitle = (
    <>
      <span className="block text-primary">Virtual CFO</span>
      <span className="block">NRI Tax &</span>
      <span className="block opacity-50">Compliance</span>
    </>
  );

  const defaultSubtitle = "Expert financial services in Bengaluru. Helping Startups, NRIs & SMEs across India with Taxation, ROC & Strategy.";

  return (
    <section className="relative w-full min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden">
      <Abstract3DScene />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-center text-center lg:text-left items-center lg:items-start"
          >

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-[1.1] text-slate-900 dark:text-white">
              {title || defaultTitle}
            </h1>

            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-xl mb-10 leading-relaxed">
              {subtitle || defaultSubtitle}
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto">
              <Button asChild size="lg" className="w-full sm:w-auto rounded-full px-10 py-8 text-lg font-bold shadow-2xl shadow-primary/30 hover:scale-105 transition-transform">
                <Link href="/contact" className="flex items-center gap-2">
                  Get Started <ArrowRight size={20} />
                </Link>
              </Button>

              <Link href="#services" className="text-slate-900 dark:text-white font-bold tracking-tight hover:text-primary transition-colors flex items-center gap-2 group">
                Explore Services
                <span className="w-8 h-px bg-slate-900 dark:bg-white group-hover:w-12 group-hover:bg-primary transition-all"></span>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center justify-center"
          >
            <div className="w-full max-w-lg glass-panel p-2 rounded-[3.5rem] bg-white/20 dark:bg-slate-900/20 backdrop-blur-2xl border border-white/30 dark:border-slate-800/50 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)]">
              <div className="bg-white dark:bg-slate-950 rounded-[3rem] overflow-hidden">
                <AnimatedQuoteForm />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-slate-400 dark:text-slate-600">
        <span className="text-[10px] font-bold tracking-[0.3em] uppercase">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-px h-12 bg-gradient-to-b from-slate-400 dark:from-slate-700 to-transparent"
        />
      </div>
    </section>
  );
}
