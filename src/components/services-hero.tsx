"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight, Shield, TrendingUp, Clock } from "lucide-react";
import heroBg from "../../public/Image/services-hero-bg.png";

export default function ServicesHero() {
  return (
    <section className="relative min-h-[85vh] flex items-center pt-24 pb-20 overflow-hidden bg-background">
      {/* Background Image with Overlays */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroBg.src}
          alt="Professional Financial Services"
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
            <h1 className="text-4xl md:text-7xl font-bold text-foreground mb-8 leading-[1.1] font-headline tracking-tight">
              Powering Your Business <br />
              <span className="text-primary">Through Compliance.</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-12 leading-relaxed">
              We translate regulatory complexity into strategic financial clarity, helping you scale with confidence across the Indian market.
            </p>

            <div className="flex flex-wrap gap-6 mb-16">
              <Button size="lg" className="rounded-full px-10 h-16 text-lg font-bold group shadow-xl shadow-primary/20" asChild>
                <Link href="/contact">
                  Begin Consultation
                  <ChevronRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-10 h-16 text-lg font-semibold border-border hover:bg-muted text-foreground backdrop-blur-sm" asChild>
                <Link href="#all-services">Discover Our Expertise</Link>
              </Button>
            </div>

            {/* Micro Trust Markers */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-12 border-t border-white/10 dark:border-white/5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary mt-1">
                  <Shield size={20} />
                </div>
                <div>
                  <h4 className="text-foreground font-bold text-sm mb-1 tracking-wide">Zero-Risk Focus</h4>
                  <p className="text-muted-foreground text-xs">Abolishing compliance lag and penalties.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary mt-1">
                  <TrendingUp size={20} />
                </div>
                <div>
                  <h4 className="text-foreground font-bold text-sm mb-1 tracking-wide">Profit Expansion</h4>
                  <p className="text-muted-foreground text-xs">Unlock value through tax optimization.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary mt-1">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="text-foreground font-bold text-sm mb-1 tracking-wide">Timed Delivery</h4>
                  <p className="text-muted-foreground text-xs">Zero-delay policy for every filing.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Visual Accent */}
      <div className="absolute bottom-0 right-0 w-[40vw] h-[60vh] -mr-20 -mb-20 bg-primary/5 dark:bg-primary/20 rounded-full blur-[120px] -z-1" />
    </section>
  );
}
