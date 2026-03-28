"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  ArrowRight,
  FileText,
  Quote,
  Book,
  Landmark,
  Receipt,
  User,
  Calculator,
  Users,
  Building2,
  Lightbulb,
  FileWarning,
  Fingerprint,
  CheckCircle2,
  ShieldCheck,
  CheckSquare,
  Scale,
  Rocket,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "../components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";
import { Avatar, AvatarFallback } from "../components/ui/avatar";
import { WelcomePopup } from "../components/welcome-popup";
import { ITRPlansPopup } from "../components/itr-plans-popup";
import { AddonServicesPopup } from "../components/addon-services-popup";
import placeholderImages from "../lib/placeholder-images.json";
import { AnimatedQuoteForm } from "../components/animated-quote-form";
import sliderimg3 from "../../public/Image/who-we-are-img2.jpg";
import whoweare1 from "../../public/Image/who-we-are-img.jpg";
import whoweare2 from "../../public/Image/who-we-are-img2.jpg";


const testimonials = [
  {
    category: "Startup Founder",
    name: "Souparna",
    company: "Founder — Tech Startup (Bengaluru)",
    avatar: "S",
    text: "From incorporation to GST and ongoing compliance, everything was handled in a structured and timely manner. Their support helped us streamline our financial processes and focus on growth.",
  },
  {
    category: "NRI Client",
    name: "Harish T",
    company: "NRI Professional (UK)",
    avatar: "HT",
    text: "As an NRI, I had multiple concerns around Indian taxation. The team provided clear guidance and ensured my filings were accurate and compliant. The entire process was smooth and transparent.",
  },
  {
    category: "Business Owner",
    name: "N. S",
    company: "Director — SME Business",
    avatar: "NS",
    text: "We now have complete visibility over our finances. Reporting is consistent, and compliance is handled without delays. It has significantly reduced our operational stress.",
  },
  {
    category: "Freelancer / Professional",
    name: "Amit L",
    company: "Independent Professional",
    avatar: "AL",
    text: "Managing income from multiple sources was complex. Their structured approach ensured everything was properly reported, and I was able to optimize my tax position effectively.",
  },
  {
    category: "Capital Gains Case",
    name: "Shankar N",
    company: "Retired Professional",
    avatar: "SN",
    text: "Their guidance on capital gains and reinvestment helped me make informed decisions and manage my tax liability efficiently.",
  },
  {
    category: "Compliance & Operations",
    name: "Ankita J",
    company: "Logistics Business",
    avatar: "AJ",
    text: "All our statutory filings are handled on time and with accuracy. We no longer have to worry about deadlines or compliance gaps.",
  },
];

const homeServices = [
  {
    icon: Landmark,
    title: "Financial Advisory & Virtual CFO",
    description: "Supporting businesses with financial planning, cash flow management, and decision-making insights to improve control and growth.",
    href: "/services/virtual-cfo",
  },
  {
    icon: FileText,
    title: "Taxation & Compliance",
    description: "Handling income tax, GST, and regulatory filings with accuracy, ensuring timely compliance and reduced risk.",
    href: "/services/income-tax-filing",
  },
  {
    icon: Book,
    title: "Accounting & Financial Management",
    description: "Maintaining structured books, financial reports, and MIS to provide clear and reliable financial information.",
    href: "/services/accounting-bookkeeping",
  },
  {
    icon: Scale,
    title: "Corporate & Legal Compliance",
    description: "Managing ROC filings, company law requirements, and regulatory documentation in a systematic manner.",
    href: "/services/roc-compliance",
  },
  {
    icon: ShieldCheck,
    title: "Audit Support & Financial Review",
    description: "Preparing and supporting audit processes in coordination with qualified professionals to ensure smooth compliance.",
    href: "/services/audit-support",
  },
  {
    icon: Rocket,
    title: "Business Setup & Registrations",
    description: "Assisting with company formation, registrations, and initial structuring for a compliant business start.",
    href: "/services/company-registration",
  },
];

const whoWeAreServices = [
  "Full-Spectrum Financial and Tax Advisory – covering tax planning, GST compliance, income tax filing, and strategic tax optimization.",
  "Internal Audits and Compliance Reviews – strengthening internal controls, managing risks, and ensuring legal compliance.",
  "Company Formation & Corporate Secretarial Support – handling company registration, LLP incorporation, ROC filings, and MCA compliance.",
  "Compliance with the Companies Act, 2013, and Other Statutory Requirements – including FEMA labour law, and regulatory filings.",
  "Financial and Business Restructuring Guidance – assisting with mergers, acquisitions, debt restructuring, and capital optimization.",
];

import { ModernHero } from "../components/modern-hero";
import { ModernMarquee } from "../components/modern-marquee";
import { ModernServiceCard } from "../components/modern-service-card";
import { Abstract3DScene } from "../components/abstract-3d-scene";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Home() {
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);
  const [isQuoteFormPopupOpen, setIsQuoteFormPopupOpen] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsPopupOpen(true);
    }, 1000); // Show popup after 1 second
    return () => clearTimeout(timer);
  }, []);

  const handleWelcomeClose = (open: boolean) => {
    setIsPopupOpen(open);
  };


  return (
    <div className="flex flex-col overflow-x-hidden">
      <WelcomePopup open={isPopupOpen} onOpenChange={handleWelcomeClose} />

      <ModernHero
        title={<>Strategic Financial <br /> Advisory & <br /> <span className="opacity-50">Compliance</span></>}
        subtitle="Supporting startups, SMEs, and professionals with taxation, regulatory compliance, and financial management — in collaboration with qualified professionals."
      />
      <ModernMarquee />

      <section id="services" className="w-full py-32 bg-white dark:bg-slate-950 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary font-bold tracking-[0.3em] mb-4"
            >
              Services
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black tracking-tight text-slate-900 dark:text-white"
            >
              Our Core Services
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-slate-600 dark:text-slate-400 mt-6 max-w-2xl mx-auto"
            >
              We provide structured financial, taxation, and compliance support to businesses and professionals, delivered with consistency and clarity.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {homeServices.map((service, index) => (
              <ModernServiceCard key={index} {...service} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <p className="text-lg font-bold text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Services delivered through structured processes and in collaboration with qualified professionals.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Button asChild size="lg" className="rounded-full px-12 py-8 text-lg font-bold shadow-2xl shadow-primary/20 hover:scale-105 transition-all bg-primary hover:bg-primary/90">
              <Link href="/services">
                Explore All Services
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>


      <section id="who-we-are" className="w-full py-32 bg-slate-50 dark:bg-slate-900/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="text-primary font-bold tracking-widest mb-8">Who We Are</div>
              <div className="space-y-6 text-xl text-slate-600 dark:text-slate-400 leading-relaxed md:text-justify font-medium">
                <p>
                  CACS FinAcc is a Bengaluru-based financial and compliance support platform working with startups, SMEs, and professionals across India.
                </p>
                <p>
                  We collaborate with qualified Chartered Accountants and professionals to deliver structured financial management, taxation, and regulatory compliance services.
                </p>
                <p className="border-l-4 border-primary pl-6 font-bold py-2 text-slate-800 dark:text-slate-200">
                  Focused on clarity, consistency, and professional execution across all engagements.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                {whoWeAreServices.slice(0, 4).map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4 p-4 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm"
                  >
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 leading-snug">{service.split('–')[0]}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square relative rounded-[4rem] overflow-hidden shadow-2xl">
                <Image
                  src={whoweare1}
                  alt="CA Consultation for Bengaluru Startups and SMEs"
                  fill
                  className="object-cover"
                />
              </div>
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -bottom-10 -left-10 glass-panel bg-primary text-white p-10 rounded-[3rem] shadow-2xl backdrop-blur-xl border border-white/20"
              >
                <p className="text-6xl font-black mb-1">10+</p>
                <p className="text-xs font-black tracking-widest opacity-80">
                  Years of Excellence
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      <section id="why-choose-us" className="w-full py-32 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div className="lg:sticky lg:top-32 h-fit">
              <span className="text-primary font-bold tracking-widest text-[10px] block mb-4">The CACS Edge</span>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-white mb-8 leading-[0.95]">
                Reliable & <br /> Professionally <br /> Aligned Support
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-md">
                We focus on delivering structured, reliable, and professionally aligned financial and compliance support for businesses and professionals.
              </p>
            </div>

            <div className="space-y-12">
              {[
                {
                  id: "01",
                  title: "Structured & Process-Driven Approach",
                  description: "We follow a disciplined and systematic approach to financial management and compliance, ensuring accuracy, consistency, and timely execution.",
                  icon: ShieldCheck
                },
                {
                  id: "02",
                  title: "Collaboration with Qualified Professionals",
                  description: "We work in collaboration with Chartered Accountants and Company Secretaries, ensuring that all services are aligned with professional standards and regulatory requirements.",
                  icon: Users
                },
                {
                  id: "03",
                  title: "Focus on Clarity & Practical Support",
                  description: "Our approach goes beyond execution—we aim to provide clarity, simplify processes, and support better financial decision-making.",
                  icon: Lightbulb
                },
                {
                  id: "04",
                  title: "Reliable & Consistent Delivery",
                  description: "We prioritize timely communication, proper documentation, and consistent delivery, helping businesses stay organized and compliant without last-minute stress.",
                  icon: FileText
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group flex gap-8 items-start relative pl-12"
                >
                  <div className="absolute left-0 top-0 h-full w-[2px] bg-slate-100 dark:bg-slate-800">
                    <motion.div
                      initial={{ height: 0 }}
                      whileInView={{ height: "100%" }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.2 }}
                      className="w-full bg-primary"
                    />
                  </div>

                  <div className="flex-grow pt-2">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-4xl font-black text-slate-200 dark:text-slate-800 tabular-nums">
                        {item.id}
                      </span>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="how-we-solve-problems" className="w-full py-32 bg-slate-50 dark:bg-slate-900/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-24">
            <span className="text-primary font-bold tracking-widest text-xs mb-4 block">Our Mission</span>
            <h2 className="text-4xl md:text-7xl font-bold tracking-tight text-slate-900 dark:text-white">
              Surgical Precision in <br /> <span className="text-primary">Financial Management</span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400">
              We help businesses manage financial challenges, improve compliance, and build structured systems for sustainable growth.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                id: "01",
                icon: FileWarning,
                title: "Improving Compliance Visibility",
                problem: "Missed GST, TDS, or ROC deadlines can lead to penalties, notices, and operational disruptions.",
                solution: "We implement structured compliance tracking and ensure timely filings, helping businesses stay compliant and avoid unnecessary risks."
              },
              {
                id: "02",
                icon: Landmark,
                title: "Strengthening Cash Flow Management",
                problem: "Growing businesses often face cash flow issues due to lack of visibility and control over financial operations.",
                solution: "Through structured reporting and financial planning, we help businesses monitor performance, manage cash flows, and improve decision-making."
              },
              {
                id: "03",
                icon: CheckSquare,
                title: "Managing Tax Efficiency",
                problem: "Businesses and professionals often pay higher taxes due to lack of planning and awareness of available options.",
                solution: "We provide practical tax planning support to ensure compliance while helping optimize tax outflows within the legal framework."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-8 rounded-[3rem] bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 relative"
              >
                <div className="flex justify-between items-start mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center group-hover:bg-primary transition-colors">
                    <item.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-5xl font-black text-slate-100 dark:text-slate-800">{item.id}</span>
                </div>

                <h3 className="text-2xl font-bold mb-8 text-slate-900 dark:text-white leading-tight tracking-tight">
                  {item.title}
                </h3>

                <div className="space-y-6">
                  <div>
                    <div className="text-[10px] font-bold text-primary tracking-widest mb-2">The Challenge</div>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                      {item.problem}
                    </p>
                  </div>

                  <div className="h-px w-full bg-slate-100 dark:bg-slate-800" />

                  <div>
                    <div className="text-[10px] font-bold text-green-500 tracking-widest mb-2">Our Approach</div>
                    <p className="text-slate-900 dark:text-white leading-relaxed font-semibold text-sm">
                      {item.solution}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="relative w-full py-32 bg-slate-50 dark:bg-slate-900/10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-24">
            <span className="text-primary font-bold tracking-widest text-xs mb-4 block">Institutional Standards</span>
            <h1 className="text-5xl md:text-8xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
              Financial <span className="text-primary">Clarity</span> <br /> 
              & Compliance
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 mt-8">
              Trusted by startups and SMEs across India for our precision and strategic guidance.
            </p>
          </div>

          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-6xl mx-auto"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 p-4">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="h-full"
                  >
                    <Card className="h-full flex flex-col bg-white dark:bg-slate-900/60 border border-slate-200/50 dark:border-slate-800/50 rounded-[2.5rem] p-8 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-2 transition-all duration-500">
                      <CardContent className="p-0 flex-grow flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between items-start mb-6">
                            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold tracking-widest border border-primary/20">
                              {testimonial.category}
                            </span>
                            <Quote className="text-primary/20 w-8 h-8 rotate-180" />
                          </div>
                          <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-8">
                            "{testimonial.text}"
                          </p>
                        </div>
                        
                        <div className="flex items-center gap-4 mt-auto pt-6 border-t border-slate-100 dark:border-slate-800">
                          <Avatar className="h-12 w-12 border-2 border-primary/20">
                            <AvatarFallback className="bg-primary text-white font-bold">
                              {testimonial.avatar}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex flex-col">
                            <span className="text-base font-bold text-slate-900 dark:text-white leading-tight">
                              {testimonial.name}
                            </span>
                            <span className="text-[10px] text-primary font-bold tracking-wider leading-tight mt-1">
                              {testimonial.company}
                            </span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 border-none bg-white/50 dark:bg-slate-800/50 backdrop-blur-md shadow-xl" />
            <CarouselNext className="hidden md:flex -right-12 border-none bg-white/50 dark:bg-slate-800/50 backdrop-blur-md shadow-xl" />
          </Carousel>
        </div>
      </section>

      <section id="cta" className="py-32 relative overflow-hidden border-t border-border/50 bg-background">
        <div className="absolute inset-0 opacity-30">
          <Abstract3DScene />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto bg-slate-50/50 dark:bg-white/5 backdrop-blur-3xl rounded-[4rem] p-12 md:p-20 border border-slate-200/50 dark:border-white/10 shadow-2xl shadow-primary/5 dark:shadow-none overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary blur-[100px] rounded-full opacity-20 -translate-y-1/2 translate-x-1/2" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8 text-center lg:text-left">
                <h2 className="text-4xl md:text-5xl font-black tracking-tight text-foreground leading-[0.9]">
                  Looking for a <span className="text-primary">reliable</span> <br /> financial and <br /> compliance partner?
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed font-medium">
                  We support startups, businesses, and professionals with structured financial management, taxation, and regulatory compliance—helping you stay organized, compliant, and focused on growth.
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
                  <Dialog open={isQuoteFormPopupOpen} onOpenChange={setIsQuoteFormPopupOpen}>
                    <DialogTrigger asChild>
                      <Button size="lg" className="rounded-full px-12 py-8 text-xl font-black tracking-tight shadow-2xl shadow-primary/30 hover:scale-105 transition-transform">
                        Schedule a Consultation
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-md bg-white dark:bg-slate-950 rounded-[3rem] border-none shadow-2xl p-2">
                      <div className="bg-white dark:bg-slate-950 rounded-[2.8rem] overflow-hidden">
                        <AnimatedQuoteForm />
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
                <div className="flex items-center gap-4 justify-center lg:justify-start text-[9px] md:text-[10px] font-black tracking-widest text-muted-foreground whitespace-nowrap">
                  <div className="flex items-center gap-1.5"><CheckCircle2 size={12} className="text-primary" /> No-obligation</div>
                  <span className="w-1 h-1 rounded-full bg-border" />
                  <div className="flex items-center gap-1.5"><CheckCircle2 size={12} className="text-primary" /> Confidential</div>
                  <span className="w-1 h-1 rounded-full bg-border" />
                  <div className="flex items-center gap-1.5"><CheckCircle2 size={12} className="text-primary" /> 24h Response</div>
                </div>
              </div>

              <div className="hidden lg:block relative">
                <div className="aspect-square bg-gradient-to-br from-primary to-blue-600 rounded-[3rem] rotate-6 opacity-20 absolute inset-0" />
                <div className="aspect-square bg-white dark:bg-card/50 backdrop-blur-2xl rounded-[3rem] border border-border flex flex-col items-center justify-center p-12 relative z-10 shadow-xl shadow-primary/5">
                  <div className="text-7xl font-black text-foreground mb-4 tracking-tight">15</div>
                  <div className="text-sm font-black text-primary tracking-widest mb-8">Minutes</div>
                  <p className="text-center text-muted-foreground font-bold tracking-tight">That could change your financial strategy forever.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
