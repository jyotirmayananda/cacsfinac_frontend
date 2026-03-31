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
import { Dialog, DialogContent, DialogTrigger, DialogHeader, DialogTitle, DialogDescription } from "../../components/ui/dialog";
import { AnimatedQuoteForm } from "../../components/animated-quote-form";

export default function AboutContent() {
  const [isQuoteFormPopupOpen, setIsQuoteFormPopupOpen] = React.useState(false);

  return (
    <div className="flex flex-col overflow-x-hidden bg-white dark:bg-slate-950">
      {/* 1. Hero Section (Company / About CACS FinAcc) */}
      <ModernHero
        title={<>About <br /> CACS FinAcc</>}
        ctaText="Get Expert Consultation"
        secondaryCtaText="View Services"
        secondaryCtaLink="/services"
        subtitle={
          <div className="space-y-6">
            <nav className="flex items-center justify-center lg:justify-start gap-2 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
              Financial Advisory Services
            </nav>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
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
      <section className="w-full py-24 md:py-32 relative overflow-hidden bg-slate-50 dark:bg-slate-950 text-foreground">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50 to-primary/5 dark:from-slate-950 dark:via-slate-900 dark:to-primary/5 pointer-events-none opacity-80 dark:opacity-50" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-slate-800 dark:text-white mb-6 leading-tight">
                Who We Are
              </h2>
              <div className="space-y-6 text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
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
              className="aspect-[4/3] relative rounded-[4rem] overflow-hidden border border-slate-200/80 shadow-[0_24px_60px_-20px_rgba(15,23,42,0.12)] dark:border-white/10 dark:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)]"
            >
              <Image src={whoweareNew} alt="Team collaboration" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent dark:from-slate-900/40 dark:to-transparent pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. What Makes Us Different */}
      <section className="w-full py-24 md:py-32 bg-slate-50 dark:bg-slate-900/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mb-12 text-center mx-auto">
             <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-slate-600 dark:text-white leading-tight">What Makes Us Different</h2>
          </div>
          <div className="space-y-8">
            {/* Top row - 3 items */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                "Structured, process-driven execution across all engagements",
                "Collaboration with qualified Chartered Accountants and professionals",
                "Consistent reporting and financial visibility",
              ].map((text, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.8 }}
                  viewport={{ once: true }}
                  className="p-8 rounded-[2rem] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex flex-col items-center text-center gap-6 group hover:shadow-xl transition-all hover:-translate-y-1 duration-500"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center group-hover:bg-primary transition-colors">
                     <ShieldCheck className="h-5 w-5 text-primary group-hover:text-white" />
                  </div>
                  <p className="text-lg font-bold text-slate-600 dark:text-slate-200 leading-snug tracking-tight max-w-[240px]">{text}</p>
                </motion.div>
              ))}
            </div>

            {/* Bottom row - 2 items centered */}
            <div className="flex flex-col md:flex-row justify-center gap-8">
              {[
                "Focus on long-term compliance and risk reduction",
                "Practical advisory aligned with business requirements"
              ].map((text, i) => (
                <motion.div
                  key={i + 3}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: (i + 3) * 0.1, duration: 0.8 }}
                  viewport={{ once: true }}
                  className="p-8 rounded-[2rem] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex flex-col items-center text-center gap-6 group hover:shadow-xl transition-all hover:-translate-y-1 duration-500 w-full md:max-w-sm"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center group-hover:bg-primary transition-colors">
                     <ShieldCheck className="h-5 w-5 text-primary group-hover:text-white" />
                  </div>
                  <p className="text-base font-bold text-slate-600 dark:text-slate-200 leading-snug tracking-tight max-w-[240px]">{text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Our Approach */}
      <section className="w-full py-24 md:py-32 bg-white dark:bg-slate-900 overflow-hidden">
        <div className="container mx-auto px-4">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="max-w-xl">
                 <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-slate-600 dark:text-white mb-8 leading-tight">Our Approach</h2>
                 <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 font-medium mb-10">
                   Our work is built on disciplined execution and clearly defined processes. <br /><br />
                   We ensure:
                 </p>
                 <div className="space-y-4">
                    {[
                      "Timely and accurate compliance",
                      "Clear financial visibility",
                      "Reduced regulatory exposure",
                      "Consistent execution across engagements"
                    ].map((text, i) => (
                      <div key={i} className="flex items-center gap-6 group">
                         <div className="text-3xl md:text-5xl font-bold text-slate-100 dark:text-slate-600 group-hover:text-primary/20 transition-colors duration-500 line-clamp-1 select-none leading-none">0{i + 1}</div>
                         <p className="text-lg font-bold text-slate-600 dark:text-slate-100 tracking-tight">{text}</p>
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
                        <CheckCircle2 className="h-8 w-8 text-primary" />
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 5. Who We Work With */}
      <section className="w-full py-24 md:py-32 bg-slate-50 dark:bg-slate-900/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-slate-600 dark:text-white mb-12 leading-tight">Who We Work With</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { text: "Startups and growing businesses", icon: Rocket },
              { text: "Small and medium enterprises (SMEs)", icon: Building2 },
              { text: "Professionals and consultants", icon: User },
              { text: "Business owners and entrepreneurs", icon: Briefcase },
              { text: "Non-Resident Indians (NRIs)", icon: Globe }
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
                <p className="text-sm font-bold tracking-widest text-slate-600 dark:text-white leading-tight">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Our Capabilities */}
      <section className="w-full py-24 md:py-32 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-slate-600 dark:text-white leading-tight">Our Capabilities</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { text: "Taxation and regulatory compliance", icon: FileCheck2 },
              { text: "GST and corporate compliance", icon: Receipt },
              { text: "Accounting and financial management", icon: Calculator },
              { text: "Business structuring and setup", icon: Scale },
              { text: "Virtual CFO and financial advisory", icon: Target },
              { text: "Payroll and statutory compliance", icon: Users }
            ].map((capability, i) => (
              <div key={i} className="p-8 rounded-[2rem] bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-900 transition-all group duration-300 text-center">
                <capability.icon className="h-7 w-7 text-primary mb-8 mx-auto group-hover:scale-110 transition-transform" />
                <h3 className="text-xl md:text-2xl font-bold text-slate-600 dark:text-white tracking-tight leading-snug">
                  {capability.text}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. How We Work */}
      <section className="w-full bg-slate-50 dark:bg-slate-900 py-24 md:py-32 overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 blur-3xl"><Abstract3DScene /></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight mb-6 leading-tight">How We Work</h2>
            <p className="text-slate-300 font-medium tracking-tight max-w-2xl mx-auto opacity-70">Our engagement model is structured and process-driven:</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              "Understanding requirements and business structure",
              "Defining scope and compliance needs",
              "Structured execution and documentation",
              "Ongoing monitoring and support",
              "Continuous advisory and improvement"
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -5, scale: 1.02 }}
                viewport={{ once: true }}
                className="p-8 rounded-[2rem] bg-white/5 backdrop-blur-xl border border-white/10 text-center relative group overflow-hidden transition-all duration-300 hover:bg-white/10"
              >
                <div className="text-7xl font-black text-white/10 absolute -top-2 -right-2 select-none group-hover:text-primary/30 transition-all duration-700 pointer-events-none">
                  {i + 1}
                </div>
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-8 group-hover:bg-primary transition-colors">
                   <CheckCircle2 size={24} className="text-primary group-hover:text-white transition-colors" />
                </div>
                <p className="text-sm font-bold tracking-widest leading-snug relative z-10">{step}</p>
                {i < 4 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 translate-y-[-50%] z-20">
                    <ArrowRight className="text-primary/30 w-4 h-4 group-hover:text-primary transition-colors" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Professional Collaboration */}
      <section className="w-full py-20 bg-primary text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white blur-[150px] rounded-full opacity-10 translate-x-1/2 -translate-y-1/2" />
          <div className="container mx-auto px-4 text-center">
             <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-10">
                <ShieldCheck className="h-16 w-16 text-white/40" />
                <div className="text-center md:text-left space-y-4">
                  <h2 className="text-2xl md:text-4xl font-bold tracking-tight">Professional Collaboration</h2>
                  <p className="text-xl font-bold tracking-tight leading-relaxed">
                    Services are delivered in collaboration with qualified professionals, including Chartered Accountants, ensuring adherence to applicable regulatory and professional standards.
                  </p>
                </div>
             </div>
          </div>
      </section>

      <section className="w-full py-24 md:py-32 bg-white dark:bg-slate-900 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-4xl mx-auto">
             <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-slate-600 dark:text-white leading-tight">
               Why CACS FinAcc
             </h2>
          </div>
          
          <div className="space-y-8">
            {/* Top row - 3 items */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Process-driven financial and compliance execution",
                  desc: "Every engagement follows a structured methodology to ensure accuracy and consistency.",
                  icon: Settings
                },
                {
                  title: "Professional collaboration ensuring regulatory adherence",
                  desc: "We work directly with qualified Professionals to maintain the highest standards of compliance.",
                  icon: ShieldCheck
                },
                {
                  title: "Clear, structured communication and reporting",
                  desc: "Ongoing visibility through disciplined status updates and detailed financial reporting.",
                  icon: FileText
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.8 }}
                  viewport={{ once: true }}
                  className="p-8 rounded-[2rem] bg-slate-50 dark:bg-slate-900 flex flex-col justify-between min-h-[280px] group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-primary/10 group-hover:bg-primary transition-colors duration-500">
                     <item.icon className="h-5 w-5 text-primary group-hover:text-white transition-colors duration-500" />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl md:text-2xl font-bold tracking-tight leading-tight text-slate-600 dark:text-white mb-4">
                      {item.title}
                    </h3>
                    <p className="text-base font-medium leading-relaxed text-slate-500 dark:text-slate-400 opacity-80">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom row - 2 items centered */}
            <div className="flex flex-col md:flex-row justify-center gap-8">
              {[
                {
                  title: "Reliable timelines with disciplined delivery",
                  desc: "Commitment to deadlines through process-driven project management and execution.",
                  icon: Activity
                },
                {
                  title: "Long-term client-focused approach",
                  desc: "Building sustainable relationships by aligning our advisory with your business goals.",
                  icon: Target
                }
              ].map((item, i) => (
                <motion.div
                  key={i + 3}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: (i + 3) * 0.1, duration: 0.8 }}
                  viewport={{ once: true }}
                  className="p-8 rounded-[2rem] bg-slate-50 dark:bg-slate-900 flex flex-col justify-between min-h-[280px] group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 w-full md:max-w-sm"
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-primary/10 group-hover:bg-primary transition-colors duration-500">
                     <item.icon className="h-5 w-5 text-primary group-hover:text-white transition-colors duration-500" />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-lg md:text-xl font-bold tracking-tight leading-loose text-slate-600 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="text-xs font-medium leading-relaxed opacity-70 text-slate-500 dark:text-slate-400">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 10. Our Philosophy */}
      <section className="w-full py-20 bg-slate-50 dark:bg-slate-900/20">
        <div className="container mx-auto px-4 text-center">
            <motion.div
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               transition={{ duration: 1 }}
               viewport={{ once: true }}
               className="max-w-4xl mx-auto py-16 border-none rounded-[2rem] bg-white dark:bg-slate-900 shadow-xl flex flex-col items-center gap-8 px-8"
            >
                <h2 className="text-xl md:text-3xl font-extrabold tracking-tight text-slate-600 dark:text-white leading-tight">
                   "Financial and compliance functions must operate with structure, clarity, and consistency."
                </h2>
                <div className="w-12 h-1 bg-primary/20 rounded-full" />
                <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 font-medium max-w-2xl leading-relaxed">
                  Our role is to ensure these functions are managed reliably—enabling businesses to operate efficiently and make informed decisions.
                </p>
            </motion.div>
        </div>
      </section>

      {/* 11. CTA Section */}
      <section
        id="cta"
        className="py-24 md:py-32 relative overflow-hidden bg-slate-50 text-foreground dark:bg-slate-900 dark:text-white"
      >
        <div className="absolute inset-0 opacity-[0.08] dark:opacity-20 scale-150 pointer-events-none">
          <Abstract3DScene />
        </div>

        {/* Animated Background Blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, -30, 0],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/15 blur-[120px] rounded-full opacity-40 dark:bg-primary/20 dark:opacity-50"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              x: [0, -50, 0],
              y: [0, 30, 0],
            }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full opacity-25 dark:opacity-40"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
            <div className="max-w-5xl mx-auto space-y-12">
               <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight text-slate-800 dark:text-white">
                 Looking for <span className="text-primary">structured</span> financial and compliance support?
               </h2>
               <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 font-medium tracking-tight max-w-3xl mx-auto leading-relaxed">
                 Connect with us to understand how we can support your requirements with clarity and consistency.
               </p>
               <div className="flex flex-col items-center gap-10">
                  <Dialog open={isQuoteFormPopupOpen} onOpenChange={setIsQuoteFormPopupOpen}>
                    <DialogTrigger asChild>
                      <Button size="lg" className="rounded-full px-12 py-8 text-xl font-bold tracking-tight shadow-lg shadow-primary/25 dark:shadow-[0_20px_60px_-10px_rgba(255,107,0,0.5)] hover:scale-105 transition-transform duration-500 bg-primary hover:bg-primary/90 dark:hover:bg-white dark:hover:text-primary border-none text-primary-foreground">
                        Schedule Consultation
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-md bg-white dark:bg-slate-900 rounded-[4rem] border-none shadow-5xl p-2 scale-105">
                      <DialogHeader className="sr-only">
                        <DialogTitle>Schedule a Consultation</DialogTitle>
                        <DialogDescription>
                          Share your requirements to get structured financial advisory and professional support.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="flex flex-col bg-white dark:bg-slate-900 rounded-[3.8rem] overflow-hidden shadow-2xl">
                        <AnimatedQuoteForm />
                      </div>
                    </DialogContent>
                  </Dialog>
                  <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 text-xs md:text-sm font-bold tracking-widest text-slate-500 dark:text-slate-500">
                    <div className="flex items-center gap-2">Confidential</div>
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                    <div className="flex items-center gap-2">Professional support</div>
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                    <div className="flex items-center gap-2">Response within 24 hours</div>
                  </div>
               </div>
            </div>
        </div>
      </section>
    </div>
  );
}
