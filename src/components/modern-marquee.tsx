"use client";

import React from "react";
import { motion } from "framer-motion";
import { Building2, CheckCircle2, ShieldCheck, User, Landmark, LucideIcon } from "lucide-react";

interface MarqueeItemProps {
  icon: LucideIcon;
  text: string;
  color: string;
}

const MarqueeItem = ({ icon: Icon, text, color }: MarqueeItemProps) => (
  <div className="flex items-center gap-4 px-8 py-5 rounded-full bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/50 backdrop-blur-xl shadow-lg dark:shadow-xl transition-all duration-300 hover:scale-105 hover:border-primary/50 group mx-4">
    <div className={`p-3 rounded-full ${color} text-white group-hover:scale-110 transition-transform`}>
      <Icon size={24} />
    </div>
    <span className="font-bold text-lg tracking-tight whitespace-nowrap text-slate-900 dark:text-white">{text}</span>
  </div>
);

export function ModernMarquee() {
  const items = [
    { icon: Building2, text: "MCA Registered", color: "bg-blue-500" },
    { icon: CheckCircle2, text: "Startup India", color: "bg-green-500" },
    { icon: ShieldCheck, text: "GST Compliant", color: "bg-cyan-500" },
    { icon: User, text: "MSME Recognized", color: "bg-indigo-500" },
    { icon: Landmark, text: "Income Tax Dept.", color: "bg-orange-500" },
  ];

  return (
    <section className="w-full py-24 bg-slate-50 dark:bg-slate-900/10 overflow-hidden relative">
      <div className="absolute inset-0 bg-grid-slate-900/[0.04] dark:bg-grid-white/[0.02]" />
      <div className="container mx-auto px-4 relative z-10 mb-12">
        <p className="text-center text-xs font-bold text-primary tracking-widest">
          Recognized & Trusted Authority
        </p>
      </div>
      
      <div className="relative flex overflow-hidden group">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{
            repeat: Infinity,
            duration: 30,
            ease: "linear",
          }}
          className="flex whitespace-nowrap"
        >
          {[...items, ...items, ...items].map((item, index) => (
            <MarqueeItem key={index} {...item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
