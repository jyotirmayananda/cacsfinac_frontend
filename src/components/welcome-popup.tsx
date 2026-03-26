"use client";

import {
  Dialog,
  DialogContent,
} from "../components/ui/dialog";
import { Button } from "../components/ui/button";
import { FileText, Building2, Briefcase, X } from "lucide-react";
import type { DialogProps } from "@radix-ui/react-dialog";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const popupServices = [
  {
    icon: FileText,
    title: "Post-Tax Season Business Solutions",
    description:
      "From GST filings to TDS returns & financial advisory—we help you stay ahead with complete compliance support",
    buttonText: "Book Now",
    href: "/contact",
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    icon: Building2,
    title: "Corporate Tax & Compliance",
    description: "GST, TDS, ROC filings & audit support for your business.",
    buttonText: "Explore Services",
    href: "/tax-filing/business-tax-filings",
    color: "from-primary/20 to-blue-500/20"
  },
  {
    icon: Briefcase,
    title: "Virtual CFO",
    description:
      "Expert MIS, cash flow strategies, and growth planning for your business success.",
    buttonText: "Learn More",
    href: "/compliance/cfo-services",
    color: "from-purple-500/20 to-primary/20"
  },
];

export function WelcomePopup({ open, onOpenChange }: DialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className={cn(
          "max-w-6xl p-0 border-none bg-slate-950 overflow-hidden shadow-2xl max-h-[95vh] overflow-y-auto"
        )}
      >
        <div className="relative w-full h-full p-6 md:py-12 md:px-16 overflow-hidden">
          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />

          {/* Header */}
          <div className="relative z-10 text-center mb-10 md:mb-14 space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-primary font-black uppercase tracking-[0.4em] text-[10px]"
            >
              Exclusive Services
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase leading-[0.9]"
            >
              File Taxes <span className="text-primary">Stress-Free.</span>
            </motion.h2>
            <motion.p 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.2 }}
               className="text-slate-400 text-sm md:text-base font-medium max-w-2xl mx-auto"
            >
              Experience the confidence of expert-led tax and financial services tailored for your success.
            </motion.p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 relative z-10">
            {popupServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative flex flex-col p-6 md:p-8 rounded-[2.5rem] md:rounded-[3rem] bg-white/5 border border-white/10 backdrop-blur-3xl hover:bg-white/10 transition-all duration-500 overflow-hidden"
              >
                {/* Accent Background */}
                <div className={cn("absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none", service.color)} />
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 md:mb-8 group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                    <service.icon className="h-6 w-6 md:h-8 md:w-8 text-primary group-hover:text-white transition-colors" />
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-black text-white mb-3 md:mb-4 leading-tight uppercase tracking-tight">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-400 text-xs md:text-sm font-medium leading-relaxed mb-6 md:mb-10 flex-grow">
                    {service.description}
                  </p>
                  
                  <div className="mt-auto">
                    <Button 
                      asChild 
                      className="w-full rounded-full py-5 md:py-6 text-[10px] md:text-xs font-black uppercase tracking-widest hover:scale-105 transition-transform shadow-xl shadow-primary/20"
                    >
                      <a href={service.href}>{service.buttonText}</a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
