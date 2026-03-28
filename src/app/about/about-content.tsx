"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  CheckCircle2,
  Users,
  Building2,
  PieChart,
  ShieldCheck,
  Target,
  ArrowRight,
  Calculator,
  FileText,
  Landmark,
  Receipt,
  User,
  Scale,
  Rocket,
  Search,
  Settings,
  Activity,
  Lightbulb,
  FileCheck2,
  Briefcase,
  TrendingUp,
  Globe,
} from "lucide-react";
import { Button } from "../../components/ui/button";
import { motion } from "framer-motion";
import { ModernHero } from "../../components/modern-hero";
import { Abstract3DScene } from "../../components/abstract-3d-scene";
import whoweare1 from "../../../public/Image/who-we-are-img.jpg";
import whoweare2 from "../../../public/Image/who-we-are-img2.jpg";
import companyHeroImg from "../../../public/Image/cacs-company-hero-branded.png";
import whoweareNew from "../../../public/Image/who-we-are-branded.png";
import { Dialog, DialogContent, DialogTrigger } from "../../components/ui/dialog";
import { AnimatedQuoteForm } from "../../components/animated-quote-form";

export default function AboutContent() {
  const [isQuoteFormPopupOpen, setIsQuoteFormPopupOpen] = React.useState(false);

  return (
    <div className="flex flex-col overflow-x-hidden bg-white dark:bg-slate-950">
      {/* 1. Hero Section (Company / About CACS FinAcc) */}
      <ModernHero
        title={<>About <br /> CACS FinAcc</>}
        subtitle={
          <div className="space-y-4">
            <p className="font-bold text-primary tracking-widest text-xs md:text-sm">Financial Advisory, Taxation & Compliance Support</p>
            <p className="text-xl md:text-2xl font-bold leading-tight tracking-tight text-slate-800 dark:text-slate-100">
              Supporting clients across Bengaluru and India with structured financial management,
              regulatory compliance, and business advisory—focused on clarity, consistency, and execution.
            </p>
          </div>
        }
        rightContent={
          <div className="w-full max-w-xl glass-panel p-2 md:p-4 rounded-[4rem] bg-white/10 dark:bg-slate-900/10 backdrop-blur-2xl border border-white/20 dark:border-slate-800/30 overflow-hidden shadow-2xl relative">
             <div className="aspect-[16/10] rounded-[3.5rem] overflow-hidden relative shadow-inner">
                <Image 
                  src={companyHeroImg} 
                  alt="CACS FinAcc Corporate Office" 
                  fill 
                  className="object-cover"
                />
             </div>
             <motion.div 
               animate={{ y: [0, -10, 0] }} 
               transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
               className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary blur-[80px] rounded-full opacity-40" 
             />
          </div>
        }
      />

      {/* 2. Who We Are */}
      <section className="w-full py-32 relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-primary/5 pointer-events-none opacity-50" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <div className="text-primary font-bold tracking-widest text-sm border-l-4 border-primary pl-6">Who we are</div>
              <div className="space-y-8 text-xl md:text-2xl text-slate-300 font-medium leading-[1.6]">
                <p>
                  CACS FinAcc is a Bengaluru-based financial and compliance support platform working in collaboration with qualified Chartered Accountants and professionals.
                </p>
                <p>
                  We deliver financial management, taxation, and regulatory compliance support with a focus on consistency, clarity, and execution.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="aspect-[4/3] relative rounded-[4rem] overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)] border border-white/10"
            >
              <Image src={whoweareNew} alt="Team collaboration" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. What Makes Us Different */}
      <section className="w-full py-24 bg-slate-50 dark:bg-slate-950/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mb-16 text-center mx-auto">
             <div className="text-primary font-bold tracking-widest text-xs mb-4">Distinction</div>
             <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">What Makes Us Different</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Structured, process-driven execution across all engagements",
              "Collaboration with qualified Chartered Accountants and professionals",
              "Consistent reporting and financial visibility",
              "Focus on long-term compliance and risk reduction",
              "Practical advisory aligned with business requirements"
            ].map((text, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="p-8 rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex flex-col items-center text-center gap-6 group hover:shadow-xl transition-all hover:-translate-y-1 duration-500"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center group-hover:bg-primary transition-colors">
                   <ShieldCheck className="h-6 w-6 text-primary group-hover:text-white" />
                </div>
                <p className="text-lg font-bold text-slate-800 dark:text-slate-200 leading-snug tracking-tight">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Our Approach */}
      <section className="w-full py-24 bg-white dark:bg-slate-950 overflow-hidden">
        <div className="container mx-auto px-4">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="max-w-xl">
                 <div className="text-primary font-bold tracking-widest text-xs mb-6">Our Approach</div>
                 <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-8 leading-tight">Built on Disciplined Execution</h2>
                 <p className="text-lg text-slate-600 dark:text-slate-400 font-medium mb-12">Our work is built on disciplined execution and clearly defined processes.</p>
                 <div className="space-y-4">
                    {[
                      "Timely and accurate compliance",
                      "Clear financial visibility",
                      "Reduced regulatory exposure",
                      "Consistent execution across engagements"
                    ].map((text, i) => (
                      <div key={i} className="flex items-center gap-6 group">
                         <div className="text-4xl md:text-6xl font-bold text-slate-100 dark:text-slate-800 group-hover:text-primary/20 transition-colors duration-500 line-clamp-1 select-none leading-none">0{i + 1}</div>
                         <p className="text-xl font-bold text-slate-800 dark:text-slate-100 tracking-tight">{text}</p>
                      </div>
                    ))}
                 </div>
              </div>
              <div className="relative group">
                 <div className="aspect-square relative rounded-[4rem] overflow-hidden grayscale-0 hover:grayscale-0 transition-all duration-700 contrast-110 shadow-xl">
                     <Image src={whoweare2} alt="Approach background" fill className="object-cover" />
                 </div>
                 <div className="absolute -bottom-8 -left-8 w-full max-w-sm">
                    <div className="p-8 rounded-[2.5rem] bg-white/80 dark:bg-slate-900/80 shadow-2xl border border-white/20 dark:border-white/5 backdrop-blur-xl">
                        <CheckCircle2 className="h-8 w-8 text-primary mb-6" />
                        <p className="text-xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">Precision at every step.</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 5. Who We Work With */}
      <section className="w-full py-24 bg-slate-50 dark:bg-slate-900/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="text-primary font-bold tracking-widest text-xs mb-6">Market Segments</div>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">Who We Work With</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { text: "Startups", icon: Rocket },
              { text: "SMEs", icon: Building2 },
              { text: "Professionals", icon: User },
              { text: "Entrepreneurs", icon: Briefcase },
              { text: "NRIs", icon: Globe }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 flex flex-col items-center text-center shadow-sm hover:shadow-xl transition-all h-full hover:-translate-y-1 duration-500"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-xs font-bold tracking-widest text-slate-900 dark:text-white leading-tight">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Our Capabilities */}
      <section className="w-full py-24 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="text-primary font-bold tracking-widest text-xs mb-6">Capabilities</div>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">Our Core Services</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { text: "Taxation and regulatory", icon: FileCheck2 },
              { text: "GST and compliance", icon: Receipt },
              { text: "Accounting and management", icon: Calculator },
              { text: "Structuring and setup", icon: Scale },
              { text: "Virtual CFO advisory", icon: Target },
              { text: "Payroll and statutory", icon: Users }
            ].map((capability, i) => (
              <div key={i} className="p-10 rounded-[2.5rem] bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-900 transition-all group duration-300">
                <capability.icon className="h-8 w-8 text-primary mb-10 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-white tracking-tight leading-snug">
                  {capability.text}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. How We Work */}
      <section className="w-full py-24 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 blur-3xl"><Abstract3DScene /></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20 max-w-4xl mx-auto">
            <div className="text-primary font-bold tracking-widest text-xs mb-6">Execution Model</div>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-8 leading-tight">Engagement Process</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              "Understanding requirements",
              "Defining scope",
              "Structured execution",
              "Ongoing monitoring",
              "Continuous advisory"
            ].map((step, i) => (
              <div key={i} className="p-8 rounded-[2rem] bg-white/5 backdrop-blur-xl border border-white/10 text-center relative group overflow-hidden">
                <div className="text-6xl font-black text-primary/10 absolute -top-4 -right-4 select-none">{i + 1}</div>
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-8"><CheckCircle2 size={24} className="text-primary" /></div>
                <p className="text-xs font-bold tracking-widest leading-snug">{step}</p>
                {i < 4 && <div className="hidden md:block absolute top-1/2 -right-2 translate-y-[-50%] z-20"><ArrowRight className="text-primary/30 w-4 h-4" /></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Professional Collaboration */}
      <section className="w-full py-24 bg-primary text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white blur-[150px] rounded-full opacity-10 translate-x-1/2 -translate-y-1/2" />
          <div className="container mx-auto px-4 text-center">
             <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12">
                <ShieldCheck className="h-24 w-24 text-white/40" />
                <p className="text-2xl md:text-4xl font-bold tracking-tighter leading-[1.2] text-center md:text-left">
                  Services delivered in collaboration with qualified professionals, including Chartered Accountants.
                </p>
             </div>
          </div>
      </section>

      {/* 9. Why CACS FinAcc */}
      <section className="w-full py-24 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
               <div className="text-primary font-bold tracking-widest text-xs mb-6">Reliability</div>
               <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">Why Choose CACS FinAcc</h2>
            </div>
            <div className="grid grid-cols-1 gap-4">
               {[
                 "Process-driven financial execution",
                 "Professional collaboration ensuring adherence",
                 "Clear, structured reporting",
                 "Reliable timelines, disciplined delivery",
                 "Long-term client-focused approach"
               ].map((text, i) => (
                 <div key={i} className="flex items-center gap-6 p-6 rounded-[2rem] bg-slate-50 dark:bg-slate-900 border-none group hover:bg-primary transition-all duration-300">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-white/20">
                       <CheckCircle2 className="h-4 w-4 text-primary group-hover:text-white" />
                    </div>
                    <p className="text-lg md:text-xl font-bold text-slate-800 dark:text-white group-hover:text-white transition-colors duration-300">{text}</p>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* 10. Our Philosophy */}
      <section className="w-full py-32 bg-slate-50 dark:bg-slate-950/20">
        <div className="container mx-auto px-4 text-center">
            <motion.div
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               transition={{ duration: 1 }}
               viewport={{ once: true }}
               className="max-w-4xl mx-auto py-24 border-none rounded-[3.5rem] bg-white dark:bg-slate-900 shadow-xl flex flex-col items-center gap-10 px-8"
            >
                <div className="text-primary font-bold tracking-widest text-xs">Our Philosophy</div>
                <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-slate-800 dark:text-white leading-tight">
                   "Financial and compliance functions must operate with structure, clarity, and consistency."
                </h2>
                <div className="w-16 h-1 bg-primary/20 rounded-full" />
                <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-medium max-w-2xl leading-relaxed">
                  Our role is to ensure these functions are managed reliably—enabling businesses to make informed decisions.
                </p>
            </motion.div>
        </div>
      </section>

      {/* 11. CTA Section */}
      <section id="cta" className="py-32 relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 opacity-10 scale-150"><Abstract3DScene /></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
            <div className="max-w-5xl mx-auto space-y-16">
               <h2 className="text-4xl md:text-7xl font-extrabold tracking-tight leading-tight">
                 Structured, <span className="text-primary">Reliable</span> Support
               </h2>
               <p className="text-xl md:text-2xl text-slate-300 font-medium tracking-tight max-w-3xl mx-auto leading-relaxed">
                 Connect with us to understand how we can support your requirements with clarity.
               </p>
               <div className="flex flex-col items-center gap-10">
                  <Dialog open={isQuoteFormPopupOpen} onOpenChange={setIsQuoteFormPopupOpen}>
                    <DialogTrigger asChild>
                      <Button size="lg" className="rounded-full px-12 py-8 text-xl font-bold tracking-tight shadow-[0_20px_60px_-10px_rgba(255,107,0,0.5)] hover:scale-105 transition-transform duration-500 bg-primary hover:bg-white hover:text-primary border-none">
                        Schedule Consultation
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-md bg-white dark:bg-slate-950 rounded-[4rem] border-none shadow-5xl p-2 scale-105">
                       <div className="bg-white dark:bg-slate-950 rounded-[3.8rem] overflow-hidden shadow-2xl">
                        <AnimatedQuoteForm />
                      </div>
                    </DialogContent>
                  </Dialog>
                  <div className="flex items-center gap-8 text-xs font-bold tracking-widest text-slate-500">
                    <div className="flex items-center gap-2">Confidential</div>
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                    <div className="flex items-center gap-2">Professional support</div>
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                    <div className="flex items-center gap-2">24h Response</div>
                  </div>
               </div>
            </div>
        </div>
      </section>
    </div>
  );
}
