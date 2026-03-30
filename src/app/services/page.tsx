"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, BadgeCheck, HelpCircle, CheckCircle2, ChevronRight, Activity, ShieldCheck, Clock, Users, Building2 } from "lucide-react";
import { services } from "@/lib/services";
import { Button } from "@/components/ui/button";
import ServicesHero from "@/components/services-hero";
import { Card, CardContent } from "@/components/ui/card";

// Manual data for core services to match user prompt exactly
const coreServiceData = [
  {
    slug: "income-tax-filing",
    title: "Income Tax Filing",
    description: "Accurate income tax filing and advisory for individuals, professionals, and businesses, including capital gains and multiple income sources."
  },
  {
    slug: "gst-services",
    title: "GST Compliance",
    description: "End-to-end GST registration, return filing, and compliance support with reconciliation and reporting."
  },
  {
    slug: "virtual-cfo",
    title: "Virtual CFO",
    description: "Strategic financial management, cash flow planning, and advisory support for growing businesses and startups."
  },
  {
    slug: "nri-taxation",
    title: "NRI Taxation",
    description: "Specialized tax support for NRIs with Indian income, including DTAA and capital gains."
  },
  {
    slug: "company-registration",
    title: "Company Setup",
    description: "End-to-end support for business registration and structuring, including Private Limited and LLP."
  },
  {
    slug: "ngo-trust-registration",
    title: "NGO & Trust Registration",
    description: "Structured registration and compliance support for trusts, NGOs, and non-profit organizations."
  }
];

const coreServices = coreServiceData.map(data => {
  const original = services.find(s => s.slug === data.slug);
  return {
    ...original,
    title: data.title,
    description: data.description,
    slug: data.slug
  };
});

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <ServicesHero />

      {/* Guide Section: Not Sure Where to Start? */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/30 border-y border-border/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 font-headline tracking-tight">Not Sure Where to Start?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
             <Link href="/services/income-tax-filing" className="p-6 bg-card rounded-2xl border border-border/50 shadow-sm hover:shadow-md transition-all flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                   <HelpCircle size={18} />
                </div>
                <div className="text-left">
                  <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Need help with tax filing</p>
                  <p className="font-bold flex items-center gap-2">Income Tax Services <ArrowRight size={14} /></p>
                </div>
             </Link>
             <Link href="/services/gst-services" className="p-6 bg-card rounded-2xl border border-border/50 shadow-sm hover:shadow-md transition-all flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                   <Activity size={18} />
                </div>
                <div className="text-left">
                  <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Managing GST compliance</p>
                  <p className="font-bold flex items-center gap-2">GST Services <ArrowRight size={14} /></p>
                </div>
             </Link>
             <Link href="/services/company-registration" className="p-6 bg-card rounded-2xl border border-border/50 shadow-sm hover:shadow-md transition-all flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                   <Building2 size={18} />
                </div>
                <div className="text-left">
                  <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Starting a business</p>
                  <p className="font-bold flex items-center gap-2">Company Registration <ArrowRight size={14} /></p>
                </div>
             </Link>
             <Link href="/services/virtual-cfo" className="p-6 bg-card rounded-2xl border border-border/50 shadow-sm hover:shadow-md transition-all flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                   <Users size={18} />
                </div>
                <div className="text-left">
                  <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Scaling operations</p>
                  <p className="font-bold flex items-center gap-2">Virtual CFO Services <ArrowRight size={14} /></p>
                </div>
             </Link>
             <Link href="/services/nri-taxation" className="p-6 bg-card rounded-2xl border border-border/50 shadow-sm hover:shadow-md transition-all flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                   <HelpCircle size={18} />
                </div>
                <div className="text-left">
                  <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">NRI with Indian income</p>
                  <p className="font-bold flex items-center gap-2">NRI Taxation <ArrowRight size={14} /></p>
                </div>
             </Link>
             <div className="flex items-center justify-center p-6">
                <Button variant="link" className="font-bold text-primary" asChild>
                  <Link href="/contact">Get Expert Consultation →</Link>
                </Button>
             </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section id="all-services" className="py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -mr-48 -mt-48" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -ml-48 -mb-48" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 font-headline tracking-tight text-slate-600 dark:text-white">
              CORE SERVICES
            </h2>
            <div className="h-1.5 w-24 bg-primary mx-auto rounded-full mb-8 shadow-lg shadow-primary/20"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {coreServices.map((service) => (
              <Link 
                key={service?.slug} 
                href={`/services/${service?.slug}`}
                className="group block h-full"
              >
                <Card className="h-full border border-border/50 bg-card hover:bg-card/80 shadow-sm hover:shadow-xl transition-all duration-500 rounded-[2rem] overflow-hidden">
                  <CardContent className="p-10 flex flex-col items-start text-left">
                    <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center text-primary mb-8 transition-all duration-500 group-hover:bg-primary group-hover:text-white">
                      {service?.icon ? <service.icon size={32} /> : <Activity size={32} />}
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 font-headline tracking-tight group-hover:text-primary transition-colors">
                      {service?.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-base mb-8 leading-relaxed line-clamp-4">
                      {service?.description}
                    </p>
                    
                    <div className="mt-auto pt-6 border-t border-muted/20 w-full flex items-center justify-between text-primary font-bold text-sm tracking-wide gap-2 group-hover:gap-4 transition-all">
                      View Service Details <ArrowRight size={18} />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us & Our Approach Section */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900 overflow-hidden relative border-y border-border/50">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            
            {/* WHY CHOOSE US */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-10 font-headline tracking-tight">WHY CHOOSE US</h2>
              <ul className="space-y-6">
                {[
                  "Structured and process-driven execution",
                  "Collaboration with qualified professionals",
                  "Clear communication and financial visibility",
                  "Reliable and timely compliance support",
                  "Long-term business-focused approach"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <CheckCircle2 size={16} />
                    </div>
                    <span className="text-lg font-medium text-slate-600 dark:text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* OUR APPROACH */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-10 font-headline tracking-tight">Our Approach</h2>
              <div className="space-y-8 relative">
                <div className="absolute left-6 top-6 bottom-6 w-px bg-primary/20" />
                {[
                  "Understand your requirement",
                  "Define scope and compliance needs",
                  "Execute with structured processes",
                  "Monitor and ensure timely compliance",
                  "Provide ongoing support"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-8 relative">
                    <div className="w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center font-bold text-xl shadow-lg shadow-primary/20 z-10">
                      {idx + 1}
                    </div>
                    <div className="pt-2">
                       <span className="text-xl font-bold text-slate-600 dark:text-white uppercase tracking-tight">{item}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Footer CTA */}
      <section className="py-24 relative overflow-hidden bg-primary text-white">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1),transparent_70%)] opacity-50" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="max-w-4xl mx-auto space-y-10">
            <h2 className="text-3xl md:text-5xl font-bold font-headline leading-tight">
              Need support with your financial or compliance requirements?
            </h2>
            <p className="text-primary-foreground/90 text-xl font-medium max-w-2xl mx-auto">
              Get clarity on your next steps with a structured and professional approach.
            </p>
            
            <div className="pt-8">
              <Button size="lg" variant="secondary" className="rounded-full px-12 h-20 text-xl font-extrabold shadow-2xl hover:scale-105 transition-transform" asChild>
                <Link href="/contact">Get Expert Consultation</Link>
              </Button>
            </div>
            
            <p className="text-sm font-bold tracking-widest uppercase opacity-80 pt-6">
              Confidential • No obligation • Response within 24 hours
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
