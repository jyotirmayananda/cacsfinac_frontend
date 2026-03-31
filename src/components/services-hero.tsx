"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Shield, TrendingUp, Clock } from "lucide-react";
import heroBg from "../../public/Image/services-hero-bg.png";

const benefitItems = [
  {
    Icon: Shield,
    text: "Avoid penalties and compliance risks",
  },
  {
    Icon: TrendingUp,
    text: "Improve financial clarity and control",
  },
  {
    Icon: Clock,
    text: "Timely filings and structured execution",
  },
] as const;

export default function ServicesHero() {
  return (
    <section className="relative min-h-[85vh] flex items-center pt-24 pb-20 overflow-hidden bg-background">
      <div className="absolute inset-0 z-0">
        <Image
          src={heroBg.src}
          alt=""
          fill
          priority
          className="object-cover opacity-10 dark:opacity-30 grayscale-[0.5]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-slate-600 dark:text-white mb-8 leading-[1.1] font-headline tracking-tight">
              Financial Advisory & Compliance Services in Bengaluru & Across India
            </h1>
            <div className="text-xl md:text-2xl text-muted-foreground max-w-3xl mb-12 leading-relaxed space-y-6">
              <p>
                Managing taxation, compliance, and financial operations doesn’t have to be complex.
              </p>
              <p>
                We provide structured support to help businesses, professionals, and NRIs stay compliant,
                reduce risks, and make informed financial decisions.
              </p>
            </div>

            <div className="flex flex-wrap gap-6 mb-8">
              <Button size="lg" className="rounded-full px-10 h-16 text-lg font-bold shadow-xl shadow-primary/20" asChild>
                <Link href="/contact">Get Expert Consultation</Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-10 h-16 text-lg font-semibold border-border hover:bg-muted text-foreground backdrop-blur-sm" asChild>
                <Link href="#all-services">Explore Services</Link>
              </Button>
            </div>

            <p className="text-sm text-muted-foreground font-medium mb-10">
              No obligation • Confidential • Quick response
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="max-w-6xl pt-10 border-t border-border/60 dark:border-white/10"
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5">
            {benefitItems.map(({ Icon, text }, i) => (
              <div
                key={i}
                className="group flex h-full min-h-[8.5rem] flex-col gap-4 rounded-2xl border border-border/70 bg-card/80 p-5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:shadow-md dark:border-white/10 dark:bg-slate-900/50 dark:hover:border-primary/40"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-primary/15 bg-primary/10 text-primary shadow-inner transition-colors duration-300 group-hover:border-primary/25 group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-5 w-5" strokeWidth={2} aria-hidden />
                </div>
                <p className="text-balance text-sm font-semibold leading-snug text-slate-700 dark:text-slate-200 md:text-base">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 right-0 w-[40vw] h-[60vh] -mr-20 -mb-20 bg-primary/5 dark:bg-primary/20 rounded-full blur-[120px] -z-1" />
    </section>
  );
}
