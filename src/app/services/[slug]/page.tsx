import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { 
  ArrowRight, 
  ChevronRight, 
  LayoutGrid, 
  FileText, 
  ShieldCheck, 
  BadgeCheck,
  Zap,
} from "lucide-react";
import { services } from "@/lib/services";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ServiceDetailHero from "@/components/service-detail-hero";
import { AuthGuard } from "@/components/auth-guard";

interface ServiceDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return { title: "Service Not Found" };

  return {
    title: `${service.details.heroTitle} | CACS FinAcc`,
    description: service.details.heroSubtitle,
  };
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const { details } = service;

  return (
    <AuthGuard>
      <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* Premium Hero Section */}
      <ServiceDetailHero 
        title={details.heroTitle}
        subtitle={details.heroSubtitle}
        slug={service.slug}
      />

      {/* Introduction & Ideal For */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[30vw] h-[30vh] bg-primary/5 rounded-full blur-[100px] -mr-20 -mt-20 -z-1" />
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div className="space-y-8">
              <span className="text-primary font-bold tracking-widest text-[10px] block">Institutional Overview</span>
              <h2 className="text-3xl md:text-5xl font-bold font-headline leading-tight">Expert Financial <span className="text-primary">Strategy & Framework.</span></h2>
              <div className="h-1.5 w-24 bg-primary rounded-full shadow-lg shadow-primary/20"></div>
              <p className="text-xl text-muted-foreground leading-relaxed">
                {details.introduction}
              </p>
              <div className="p-8 bg-muted/50 rounded-[2rem] border border-border/50 backdrop-blur-md relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
                <p className="font-semibold text-primary mb-4 flex items-center gap-2 tracking-widest text-xs">
                  <ShieldCheck size={20} />
                  Institutional Commitment
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  "Our approach focuses on timely compliance, risk reduction, and clarity in financial reporting. Services are delivered through structured processes in collaboration with qualified professionals, ensuring consistency and reliability."
                </p>
              </div>
            </div>

            <div className="bg-card p-10 md:p-14 rounded-[3rem] border border-border/50 shadow-2xl relative overflow-hidden">
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -mr-16 -mb-16" />
              <h3 className="text-2xl md:text-3xl font-bold font-headline mb-10 flex items-center gap-4">
                <div className="bg-primary/20 p-2 rounded-xl text-primary"><LayoutGrid size={24} /></div>
                Ideal Engagement Profile
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {details.idealFor.map((item, index) => (
                  <li key={index} className="flex items-start gap-4 p-4 rounded-xl hover:bg-muted transition-colors">
                    <div className="mt-1 bg-primary/10 p-1.5 rounded-full flex-shrink-0">
                      <Zap size={16} className="text-primary" />
                    </div>
                    <span className="font-medium text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Groups */}
      <section id="our-services" className="py-24 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 space-y-4">
            <span className="text-primary font-bold tracking-widest text-[10px] block">Service Modules</span>
            <h2 className="text-3xl md:text-5xl font-bold font-headline tracking-tight">Scope of Engagement</h2>
            <div className="h-1.5 w-24 bg-primary mx-auto rounded-full shadow-lg shadow-primary/20"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
            {details.serviceGroups.map((group, index) => (
              <Card key={index} className="border-none bg-card shadow-lg hover:shadow-2xl transition-all duration-500 rounded-[2.5rem] overflow-hidden group border border-border/50 flex flex-col">
                <CardHeader className="bg-primary/5 pt-10 pb-8 px-10 border-b border-border/50 group-hover:bg-primary transition-all duration-500">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary-foreground transition-colors">{group.title}</CardTitle>
                    <div className="text-primary group-hover:text-primary-foreground opacity-40 group-hover:scale-110 transition-all">
                        <FileText size={24} />
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-10 flex-grow">
                  <ul className="space-y-6">
                    {group.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-4 group/item">
                        <ArrowRight size={18} className="mt-1 text-primary transition-transform group-hover/item:translate-x-1" />
                        <span className="text-muted-foreground leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-24 md:py-40 dark:bg-slate-950 bg-slate-100/30 text-foreground overflow-hidden relative border-y border-border/50">
        <div className="absolute top-0 right-0 w-[50vw] h-[50vh] bg-primary/10 rounded-full blur-[120px] -mr-40 -mt-40 -z-1 opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-24 space-y-6">
            <span className="text-primary font-bold tracking-widest text-[10px] block">Operational Excellence</span>
            <h2 className="text-3xl md:text-6xl font-bold font-headline -mt-2">Our <span className="text-primary">Process Architecture.</span></h2>
            <p className="text-muted-foreground text-xl max-w-2xl mx-auto leading-relaxed">A strictly process-driven workflow ensures precision, accuracy, and timely execution.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {details.process.map((step, index) => (
              <div key={index} className="relative group">
                <div className="bg-card border border-border/50 p-10 rounded-[2rem] h-full transition-all duration-500 hover:border-primary/50 hover:bg-card/80 backdrop-blur-sm shadow-xl">
                  <div className="text-8xl font-black text-primary/5 absolute -top-10 -left-4 group-hover:text-primary/10 transition-colors pointer-events-none">
                    {index + 1}
                  </div>
                  <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="w-14 h-14 bg-primary/20 rounded-2xl flex items-center justify-center text-primary font-bold text-xl mb-8 group-hover:scale-110 transition-transform shadow-lg shadow-primary/10 border border-primary/20">
                      {index + 1}
                    </div>
                    <p className="text-xl font-bold leading-tight group-hover:text-primary transition-colors font-headline text-foreground">
                      {step}
                    </p>
                  </div>
                </div>
                {index < details.process.length - 1 && (
                  <div className="hidden xl:block absolute top-[28%] -right-3 translate-y-1/2 z-20">
                    <ArrowRight size={24} className="text-primary/30" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="grid grid-cols-2 gap-6">
              {details.whyChooseUs.map((item, index) => (
                <div key={index} className="p-8 rounded-3xl bg-muted/50 border border-border/50 hover:border-primary/50 hover:bg-muted transition-all duration-500 group">
                  <div className="bg-primary/10 p-3 rounded-2xl w-fit mb-6 text-primary group-hover:scale-110 transition-transform"><BadgeCheck size={28} /></div>
                  <p className="font-bold text-xl text-foreground leading-tight font-headline">
                    {item}
                  </p>
                </div>
              ))}
            </div>
            <div className="space-y-8">
              <span className="text-primary font-bold tracking-widest text-[10px] block">Market Leadership</span>
              <h2 className="text-3xl md:text-5xl font-bold font-headline">The CACS Distinction</h2>
              <div className="h-1.5 w-24 bg-primary rounded-full shadow-lg shadow-primary/20"></div>
              <p className="text-xl text-muted-foreground leading-relaxed">
                We combine industry-leading expertise with a technology-driven approach to deliver reliable and consistent results. Every engagement is managed through high-level oversight to ensure accuracy and precision.
              </p>
              <Button size="lg" className="rounded-full px-12 h-16 text-lg font-bold group shadow-xl shadow-primary/20" asChild>
                <Link href="/contact">
                    Book Discovery Call
                    <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 md:py-32 bg-muted/30 border-y border-border/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <span className="text-primary font-bold tracking-widest text-[10px] block">Reference Hub</span>
              <h2 className="text-3xl md:text-5xl font-bold font-headline tracking-tight">Core Queries</h2>
              <div className="h-1.5 w-24 bg-primary mx-auto rounded-full shadow-lg shadow-primary/20"></div>
            </div>
            
            <Accordion type="single" collapsible className="w-full space-y-4">
              {details.faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-card border border-border/50 rounded-2xl px-8 hover:shadow-lg transition-shadow"
                >
                  <AccordionTrigger className="text-left font-bold text-xl py-6 hover:no-underline hover:text-primary transition-all font-headline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-8 pt-0 text-muted-foreground text-lg leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Global CTA Banner */}
      <section className="py-24 md:py-40 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="relative rounded-[4rem] overflow-hidden dark:bg-slate-950 bg-slate-50 text-foreground p-12 md:p-24 text-center border border-border/50 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-primary/5 opacity-30 pointer-events-none" />
            <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 -z-1 opacity-30" />
            
            <div className="relative z-10 max-w-4xl mx-auto space-y-10">
              <span className="text-primary font-bold tracking-widest text-[10px] block">Engagement Point</span>
              <h2 className="text-4xl md:text-7xl font-bold font-headline leading-[1.1] tracking-tight text-foreground">
                {details.ctaTitle}
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed">
                Strategic financial oversight ensures your business stays compliant and operations remain surgically precise.
              </p>
              <div className="flex flex-col items-center gap-10">
                <Button size="lg" className="rounded-full px-16 h-20 text-xl font-bold shadow-2xl shadow-primary/20 hover:scale-105 transition-transform group" asChild>
                  <Link href="/contact">
                    {details.ctaButton}
                    <ArrowRight size={24} className="ml-3 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <div className="flex items-center gap-6 md:gap-12 flex-wrap justify-center text-xs font-bold tracking-widest text-muted-foreground/60">
                    <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full"/> Confidential</span>
                    <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full"/> Structured</span>
                    <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full"/> Timely</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </AuthGuard>
  );
}

