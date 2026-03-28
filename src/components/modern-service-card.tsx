"use client";

import React from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import Link from "next/link";
import { Card } from "./ui/card";
import { Button } from "./ui/button";

interface ModernServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  index: number;
}

export function ModernServiceCard({ icon: Icon, title, description, href, index }: ModernServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
      className="h-full"
    >
      <Link href={href} className="group block h-full">
        <Card className="h-full relative overflow-hidden bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 backdrop-blur-xl rounded-[2.5rem] p-8 flex flex-col justify-between transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 dark:hover:shadow-primary/20 hover:-translate-y-2 group-hover:border-primary/50">
          <div className="absolute top-0 right-0 p-10 opacity-[0.07] dark:opacity-[0.1] group-hover:opacity-[0.15] transition-opacity">
            <Icon size={180} strokeWidth={0.5} />
          </div>
          
          <div className="relative z-10">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-blue-400 p-px mb-8 group-hover:scale-110 transition-transform duration-500">
              <div className="w-full h-full rounded-2xl bg-white dark:bg-slate-950 flex items-center justify-center">
                <Icon className="w-8 h-8 text-primary" />
              </div>
            </div>
            
            <h3 className="text-2xl font-bold tracking-tight mb-4 group-hover:text-primary transition-colors duration-300 leading-tight">
              {title}
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 block">
              {description}
            </p>
          </div>
          
          <div className="relative z-10 flex items-center text-primary font-bold text-sm tracking-widest group-hover:translate-x-2 transition-transform duration-300">
            Know More
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </Card>
      </Link>
    </motion.div>
  );
}
