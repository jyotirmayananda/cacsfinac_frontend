"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight, ArrowRight } from "lucide-react";
import heroBg from "../../public/Image/services-hero-bg.png";
import { services } from "@/lib/services";

interface ServiceDetailHeroProps {
  title: string;
  subtitle: string;
  slug: string;
  primaryCtaText?: string;
}

export default function ServiceDetailHero({
  title,
  subtitle,
  slug,
  primaryCtaText = "Schedule Consultation",
}: ServiceDetailHeroProps) {
  const service = services.find((s) => s.slug === slug);
  const breadcrumbLabel =
    service?.details?.heroTitle ?? service?.title ?? "Service";

  return (
    <section className="relative min-h-[70vh] flex items-center pt-32 pb-24 overflow-hidden bg-background">
      {/* Background Image & Gradients */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroBg.src}
          alt={title}
          fill
          priority
          className="object-cover opacity-20 blur-[2px]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,var(--primary),transparent_70%)] opacity-10" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <nav className="flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-muted-foreground mb-4">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <ChevronRight size={12} />
              <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
              <ChevronRight size={12} />
              <span className="text-primary/80">{breadcrumbLabel}</span>
            </nav>

            <h1 className="text-4xl md:text-6xl font-bold font-headline text-foreground leading-[1.15] tracking-tight">
              {title}
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
              {subtitle}
            </p>

            <div className="flex flex-wrap gap-6 pt-4">
              <Button size="lg" className="rounded-full px-10 h-16 text-lg font-bold group shadow-xl shadow-primary/20" asChild>
                <Link href="/contact">
                  {primaryCtaText}
                  <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Right: Abstract Content / Icon Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            {/* Decorative Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/30 rounded-full blur-[100px] -z-1 animate-pulse" />
            
            {/* The Image Card */}
            <div className="relative z-10 w-full max-w-[500px] aspect-square rounded-[4rem] border border-border bg-card/50 hover:bg-card/80 transition-all duration-300 backdrop-blur-xl flex flex-col items-center justify-center shadow-2xl group overflow-hidden mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
              
              <motion.div 
                animate={{ 
                  y: [0, -15, 0],
                  scale: [1, 1.05, 1]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative z-10 w-full h-full p-8 flex items-center justify-center"
              >
                <div className="relative w-full h-full rounded-[3rem] overflow-hidden shadow-2xl border border-primary/20 bg-background/50 backdrop-blur-sm">
                  {/* Dynamic image resolution logic based on slug */}
                  <Image
                    src={`/Image/${slug}.png`}
                    alt={title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </motion.div>
              
              {/* Decorative corners */}
              <div className="absolute top-8 right-8 w-6 h-6 border-t border-r border-border" />
              <div className="absolute bottom-8 left-8 w-6 h-6 border-b border-l border-border" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
