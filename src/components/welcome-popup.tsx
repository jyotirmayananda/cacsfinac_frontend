"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "../components/ui/dialog";
import { Button } from "../components/ui/button";
import { FileText, Building2, Briefcase } from "lucide-react";
import type { DialogProps } from "@radix-ui/react-dialog";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const popupServices = [
  {
    icon: FileText,
    title: "Tax & Compliance Support",
    description: "Income tax, GST, and regulatory compliance handled with accuracy and structured processes.",
    buttonText: "Get Consultation",
    href: "/contact",
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    icon: Building2,
    title: "Business Setup & Compliance",
    description: "Company registration, ROC filings, and ongoing compliance support for businesses.",
    buttonText: "Explore Services",
    href: "/services",
    color: "from-primary/20 to-blue-500/20"
  },
  {
    icon: Briefcase,
    title: "Financial Advisory (Virtual CFO)",
    description: "Financial planning, cash flow management, and strategic support for growing businesses.",
    buttonText: "Learn More",
    href: "/services/virtual-cfo",
    color: "from-purple-500/20 to-primary/20"
  },
];

export function WelcomePopup({ open, onOpenChange }: DialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent 
        className={cn(
          "max-w-5xl w-[calc(100%-2rem)] md:w-full p-0 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 shadow-2xl rounded-[1.5rem] max-h-[95vh] overflow-y-auto overflow-x-hidden scrollbar-hide [&>button]:top-6 [&>button]:right-6 [&>button]:w-10 [&>button]:h-10 [&>button]:bg-white dark:[&>button]:bg-slate-900 [&>button]:rounded-full [&>button]:shadow-2xl [&>button]:border [&>button]:border-slate-100 dark:[&>button]:border-slate-800 [&>button]:flex [&>button]:items-center [&>button]:justify-center [&>button]:z-[100] [&>button]:opacity-100"
        )}
      >
        <div className="relative w-full h-full p-6 md:p-8">
          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />

          {/* Header */}
          <DialogHeader className="relative z-10 flex flex-col items-center text-center sm:text-center mb-6 space-y-2 pt-12 md:pt-0 pr-0 md:pr-0">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-primary font-bold tracking-wide text-xs text-center"
            >
              Expert Financial & Compliance Support
            </motion.div>
            <DialogTitle asChild>
              <motion.h2 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white tracking-tight leading-[1.2] text-center"
              >
                Get Clarity on Your Tax & Compliance Requirements
              </motion.h2>
            </DialogTitle>
            <DialogDescription asChild>
              <motion.p 
                 initial={{ opacity: 0, y: 10 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.2 }}
                 className="text-slate-500 dark:text-slate-400 text-xs md:text-sm font-medium max-w-3xl mx-auto text-center leading-relaxed"
              >
                Speak with our team to understand your compliance obligations, risks, and next steps—structured and practical guidance tailored to your situation.
              </motion.p>
            </DialogDescription>
          </DialogHeader>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 relative z-10 mb-6">
            {popupServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative flex flex-col p-5 md:p-6 rounded-[1.2rem] bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 backdrop-blur-3xl hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300"
              >
                {/* Accent Background */}
                <div className={cn("absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none rounded-[1.2rem]", service.color)} />
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-10 h-10 rounded-[10px] bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                    <service.icon className="h-5 w-5 text-primary group-hover:text-white transition-colors" />
                  </div>
                  
                  <h3 className="text-base md:text-lg font-bold text-slate-800 dark:text-white mb-2 leading-tight tracking-tight">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-500 dark:text-slate-400 text-xs font-medium leading-relaxed mb-6 flex-grow">
                    {service.description}
                  </p>
                  
                  <div className="mt-auto">
                    <Button 
                      asChild 
                      className="w-full rounded-full py-2.5 h-auto text-xs font-bold tracking-wide hover:scale-[1.02] transition-transform shadow-xl shadow-primary/20"
                    >
                      <a href={service.href}>{service.buttonText}</a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col items-center justify-center text-center space-y-2 pt-4 border-t border-slate-200 dark:border-slate-800/80 mx-10"
          >
            <h3 className="text-lg md:text-xl font-bold text-slate-800 dark:text-white">
              Get Expert Consultation <span className="text-primary">(15 Minutes)</span>
            </h3>
            <p className="text-slate-500 dark:text-slate-400 text-xs font-medium pb-2">
              Confidential • No obligation • Response within 24 hours
            </p>
            <div className="w-full max-w-xs mx-auto">
                <Button 
                  asChild 
                  size="sm"
                  className="w-full rounded-full py-3 h-auto text-sm font-bold hover:scale-[1.02] transition-transform shadow-xl shadow-primary/20"
                >
                  <a href="/contact">Book Consultation</a>
                </Button>
            </div>
          </motion.div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
