"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FileText,
  Quote,
  Book,
  Landmark,
  Users,
  Lightbulb,
  FileWarning,
  CheckCircle2,
  ShieldCheck,
  CheckSquare,
  Rocket,
  ChevronRight,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Dialog, DialogContent, DialogTrigger, DialogHeader, DialogTitle, DialogDescription } from "../components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";
import { Avatar, AvatarFallback } from "../components/ui/avatar";
import { AnimatedQuoteForm } from "../components/animated-quote-form";
import { ModernHero } from "../components/modern-hero";
import { ModernMarquee } from "../components/modern-marquee";
import { WelcomePopup } from "../components/welcome-popup";
import { ModernServiceCard } from "../components/modern-service-card";
import { motion } from "framer-motion";
import { Abstract3DScene } from "../components/abstract-3d-scene";
import whoweare1 from "../../public/Image/who-we-are-img.jpg";

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

const coreServices = [
  {
    icon: Landmark,
    title: "Financial Advisory & Virtual CFO",
    description: "Supporting businesses with financial planning, cash flow management, and decisionmaking insights to improve control and growth.",
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
    icon: CheckSquare,
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

export default function Home() {
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);

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
    <div className="flex flex-col overflow-x-hidden bg-white dark:bg-slate-900">
      <WelcomePopup open={isPopupOpen} onOpenChange={handleWelcomeClose} />

      <ModernHero
        title={<>Strategic Financial <br /> Advisory & <span className="text-blue-600">Compliance</span> Solutions</>}
        subtitle="Supporting startups, SMEs, and professionals with taxation, regulatory compliance, and financial management — in collaboration with qualified professionals."
      />

      <ModernMarquee />

      {/* Our Core Services Section */}
      <section id="services" className="w-full py-24 md:py-32 bg-white dark:bg-slate-900 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-24">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-4xl font-extrabold tracking-tight text-slate-600 dark:text-white mb-6"
            >
              Our Core Services
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
            >
              We provide structured financial, taxation, and compliance support to businesses and professionals, delivered with consistency and clarity.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreServices.map((service, index) => (
              <ModernServiceCard
                key={service.href}
                index={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                href={service.href}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <p className="text-lg font-bold text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10">
              Services delivered through structured processes and in collaboration with qualified professionals.
            </p>
            <Button asChild variant="outline" size="lg" className="rounded-full px-12 py-7 text-lg font-bold border-2 hover:bg-primary hover:text-white transition-all shadow-xl dark:border-slate-800 dark:bg-slate-900 group">
              <Link href="/services" className="flex items-center gap-2 text-slate-600 dark:text-white">
                Explore All Services
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Request a Consultation Section */}
      <section className="w-full py-32 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-4xl font-extrabold mb-6"
            >
              Request a Consultation
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xl md:text-2xl opacity-90 mb-10 font-medium"
            >
              Share your requirements and we will get back with a structured approach to support your financial and compliance needs.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg" variant="secondary" className="rounded-full px-12 py-8 text-xl font-bold bg-white text-primary hover:bg-slate-100 shadow-2xl">
                    Schedule Consultation
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-md bg-white dark:bg-slate-900 rounded-[3rem] border-none shadow-2xl p-2">
                  <DialogHeader className="sr-only">
                    <DialogTitle>Schedule a Financial Consultation</DialogTitle>
                    <DialogDescription>
                      Fill out the form below to receive expert financial and compliance advisory.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="bg-white dark:bg-slate-900 rounded-[2.8rem] overflow-hidden">
                    <AnimatedQuoteForm />
                  </div>
                </DialogContent>
              </Dialog>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHO WE ARE Section */}
      <section id="who-we-are" className="w-full py-24 md:py-32 bg-slate-50 dark:bg-slate-900/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="text-primary font-bold tracking-widest uppercase text-base">Who We Are</div>
              <div className="space-y-6 text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                <p>
                  CACS FinAcc is a Bengaluru-based financial and compliance support platform working with startups, SMEs, and professionals across India.
                </p>
                <p>
                  We collaborate with qualified Chartered Accountants and professionals to deliver structured financial management, taxation, and regulatory compliance services.
                </p>
                <p className="border-l-4 border-primary pl-6 font-bold py-2 text-slate-600 dark:text-slate-100">
                  Focused on clarity, consistency, and professional execution across all engagements.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square relative rounded-[4rem] overflow-hidden shadow-2xl">
                <Image
                  src={whoweare1}
                  alt="CACS FinAcc Professional Team"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose CACS FinAcc Section */}
      <section id="why-choose-us" className="w-full py-24 md:py-32 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-24">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-4xl font-extrabold tracking-tight text-slate-600 dark:text-white mb-6"
            >
              Why Choose CACS FinAcc
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
            >
              We focus on delivering structured, reliable, and professionally aligned financial and compliance support for businesses and professionals.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "1. Structured & Process-Driven Approach",
                description: "We follow a disciplined and systematic approach to financial management and compliance, ensuring accuracy, consistency, and timely execution.",
                icon: ShieldCheck
              },
              {
                title: "2. Collaboration with Qualified Professionals",
                description: "We work in collaboration with Chartered Accountants and Company Secretaries, ensuring that all services are aligned with professional standards and regulatory requirements.",
                icon: Users
              },
              {
                title: "3. Focus on Clarity & Practical Support",
                description: "Our approach goes beyond execution—we aim to provide clarity, simplify processes, and support better financial decision-making.",
                icon: Lightbulb
              },
              {
                title: "4. Reliable & Consistent Delivery",
                description: "We prioritize timely communication, proper documentation, and consistent delivery, helping businesses stay organized and compliant without last-minute stress.",
                icon: CheckCircle2
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-8 rounded-[3rem] bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
              >
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    <item.icon size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-slate-600 dark:text-white">{item.title}</h3>
                    <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Support Your Business Section - Reverted to Old UI */}
      <section id="how-we-support" className="w-full py-24 md:py-32 bg-slate-50 dark:bg-slate-900/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-4xl font-extrabold tracking-tight text-slate-600 dark:text-white mb-6"
            >
              How We Support Your Business
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xl md:text-2xl text-slate-600 dark:text-slate-400"
            >
              We help businesses manage financial challenges, improve compliance, and build structured systems for sustainable growth.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                id: "01",
                icon: FileWarning,
                title: "1. Improving Compliance Visibility",
                challenge: "Missed GST, TDS, or ROC deadlines can lead to penalties, notices, and operational disruptions.",
                approach: "We implement structured compliance tracking and ensure timely filings, helping businesses stay compliant and avoid unnecessary risks."
              },
              {
                id: "02",
                icon: Landmark,
                title: "2. Strengthening Cash Flow Management",
                challenge: "Growing businesses often face cash flow issues due to lack of visibility and control over financial operations.",
                approach: "Through structured reporting and financial planning, we help businesses monitor performance, manage cash flows, and improve decision-making."
              },
              {
                id: "03",
                icon: CheckSquare,
                title: "3. Managing Tax Efficiency",
                challenge: "Businesses and professionals often pay higher taxes due to lack of planning and awareness of available options.",
                approach: "We provide practical tax planning support to ensure compliance while helping optimize tax outflows within the legal framework."
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
                  <span className="text-5xl font-black text-slate-100 dark:text-slate-600">{item.id}</span>
                </div>

                <h3 className="text-2xl font-bold mb-8 text-slate-600 dark:text-white leading-tight tracking-tight">
                  {item.title}
                </h3>

                <div className="space-y-6">
                  <div>
                    <div className="text-xs font-bold text-primary tracking-widest mb-2 uppercase">The Challenge</div>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base font-medium">
                      {item.challenge}
                    </p>
                  </div>

                  <div className="h-px w-full bg-slate-100 dark:bg-slate-800" />

                  <div>
                    <div className="text-xs font-bold text-green-500 tracking-widest mb-2 uppercase">Our Approach</div>
                    <p className="text-slate-600 dark:text-white leading-relaxed font-bold text-base">
                      {item.approach}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS Section */}
      <section id="testimonials" className="w-full py-24 md:py-32 bg-white dark:bg-slate-900 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-24">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-4xl font-extrabold tracking-tight text-slate-600 dark:text-white"
            >
              Testimonials
            </motion.h2>
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
                    viewport={{ once: true }}
                    className="h-full"
                  >
                    <Card className="h-full flex flex-col bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-[3rem] p-8 hover:shadow-xl transition-all">
                      <CardContent className="p-0 flex-grow flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between items-start mb-6">
                            <span className="px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-widest whitespace-nowrap">
                              {testimonial.category}
                            </span>
                            <Quote className="text-primary/20 w-8 h-8 rotate-180" />
                          </div>
                          <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-8">
                            "{testimonial.text}"
                          </p>
                        </div>
                        
                        <div className="flex items-center gap-4 mt-auto pt-6 border-t border-slate-200 dark:border-slate-800">
                          <Avatar className="h-12 w-12 border-2 border-primary/20">
                            <AvatarFallback className="bg-primary text-white font-bold">
                              {testimonial.avatar}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex flex-col">
                            <span className="text-base font-bold text-slate-600 dark:text-white uppercase truncate">
                              {testimonial.name}
                            </span>
                            <span className="text-sm text-primary font-bold tracking-wider leading-tight mt-1 uppercase">
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
            <CarouselPrevious className="hidden md:flex -left-12" />
            <CarouselNext className="hidden md:flex -right-12" />
          </Carousel>
        </div>
      </section>

      {/* CTA SECTION */}
      <section id="cta" className="py-24 md:py-32 bg-slate-50 dark:bg-slate-900/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto bg-white dark:bg-slate-900 rounded-[4rem] p-12 md:p-24 border border-slate-200 dark:border-slate-800 shadow-2xl relative overflow-hidden text-center">
            {/* Background Animations */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {/* Subtle Grid Pattern */}
              <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" 
                style={{ 
                  backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)',
                  backgroundSize: '40px 40px'
                }} 
              />
              
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  x: [0, 100, 0],
                  y: [0, -50, 0],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-0 right-0 w-96 h-96 bg-primary/20 blur-[100px] rounded-full"
              />
              <motion.div
                animate={{
                  scale: [1, 1.5, 1],
                  x: [0, -100, 0],
                  y: [0, 50, 0],
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full"
              />
              <motion.div
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.1, 0.2, 0.1],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 blur-[150px] rounded-full"
              />
            </div>
            
            <div className="relative z-10 max-w-4xl mx-auto">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-2xl md:text-4xl font-extrabold tracking-tight text-slate-600 dark:text-white mb-8"
              >
                Looking for a reliable financial and compliance partner?
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-12 font-medium leading-relaxed"
              >
                We support startups, businesses, and professionals with structured financial management, taxation, and regulatory compliance—helping you stay organized, compliant, and focused on growth.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center gap-8"
              >
                <Dialog>
                  <DialogTrigger asChild>
                    <Button size="lg" className="rounded-full px-16 py-10 text-2xl font-black shadow-2xl shadow-primary/30 hover:scale-105 transition-transform group">
                      Schedule a Consultation
                      <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-md bg-white dark:bg-slate-950 rounded-[3rem] border-none shadow-2xl p-2">
                    <DialogHeader className="sr-only">
                      <DialogTitle>Book a Professional Consultation</DialogTitle>
                      <DialogDescription>
                        Share your business requirements and we will contact you within 24 hours.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="bg-white dark:bg-slate-950 rounded-[2.8rem] overflow-hidden">
                      <AnimatedQuoteForm />
                    </div>
                  </DialogContent>
                </Dialog>

                <div className="flex flex-wrap justify-center items-center gap-6 text-base font-bold text-slate-500 dark:text-slate-400">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={18} className="text-primary" />
                    No-obligation discussion
                  </div>
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700 hidden md:block" />
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={18} className="text-primary" />
                    Confidential
                  </div>
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700 hidden md:block" />
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={18} className="text-primary" />
                    Response within 24 hours
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
