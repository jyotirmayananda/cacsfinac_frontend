import React from "react";
import Link from "next/link";
import { ArrowRight, BadgeCheck } from "lucide-react";
import { services } from "@/lib/services";
import { Button } from "@/components/ui/button";
import ServicesHero from "@/components/services-hero";
import { Card, CardContent } from "@/components/ui/card";
import { AuthGuard } from "@/components/auth-guard";

export const metadata = {
  title: "Professional Financial & Compliance Services | CACS FinAcc",
  description: "Comprehensive income tax, GST, Virtual CFO, and business compliance services in Bengaluru and across India.",
};

export default function ServicesPage() {
  return (
    <AuthGuard>
      <div className="flex flex-col min-h-screen bg-background">
      <ServicesHero />

      {/* Services Grid Section */}
      <section id="all-services" className="py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -mr-48 -mt-48" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -ml-48 -mb-48" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-4xl font-extrabold mb-8 font-headline tracking-tight text-slate-800 dark:text-white">
              Core Capabilities
            </h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full mb-10 shadow-lg shadow-primary/20 opacity-50"></div>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed font-medium">
              We provide end-to-end support in taxation, corporate compliance, and financial management
              through a structured, professional-driven approach.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service) => (
              <Link 
                key={service.slug} 
                href={`/services/${service.slug}`}
                className="group block h-full"
              >
                <Card className="h-full border-none bg-card hover:bg-card/80 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-500 rounded-[2.5rem] overflow-hidden group">
                  <CardContent className="p-10 flex flex-col items-center text-center">
                    <div className="w-20 h-20 bg-primary/5 rounded-[2rem] flex items-center justify-center text-primary mb-10 transition-all duration-500 group-hover:bg-primary group-hover:text-white group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-primary/30">
                      <service.icon size={36} />
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-bold mb-6 font-headline tracking-tight group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-lg mb-10 leading-relaxed line-clamp-3">
                      {service.description}
                    </p>
                    
                    <div className="mt-auto pt-8 border-t border-muted-foreground/10 w-full flex items-center justify-center text-primary font-bold text-xs tracking-widest gap-2 group-hover:gap-4 transition-all">
                      Analysis & Details <ArrowRight size={18} />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Trust Section */}
      <section className="py-20 dark:bg-slate-950 bg-slate-50 text-foreground overflow-hidden relative border-y border-border/50">
        {/* Subtle decorative elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,var(--primary),transparent_70%)] opacity-5"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="max-w-4xl mx-auto space-y-12">
            <span className="text-primary font-bold tracking-widest text-[10px] block">Institutional Standards</span>
            <h2 className="text-2xl md:text-4xl font-extrabold font-headline leading-tight tracking-tight text-slate-800 dark:text-white">
              Ready to <span className="text-primary">Transform Your Finances?</span>
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-medium">
              Join hundreds of organizations who leverage CACS FinAcc for strategic 
              precision in taxation and compliance. We don't just file; we engineer financial health.
            </p>
            
            <div className="flex flex-col items-center gap-12">
              <Button size="lg" className="rounded-full px-12 h-20 text-xl font-bold shadow-2xl shadow-primary/20 hover:scale-105 transition-transform" asChild>
                <Link href="/contact">Book Strategic Discovery Session</Link>
              </Button>
              
              <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 pt-12 border-t border-white/10 w-full">
                <div className="flex items-center gap-3 group">
                   <BadgeCheck className="text-primary w-6 h-6 group-hover:scale-110 transition-transform" />
                   <span className="text-muted-foreground font-semibold tracking-wide text-xs">Total Data Safety</span>
                </div>
                <div className="flex items-center gap-3 group">
                   <BadgeCheck className="text-primary w-6 h-6 group-hover:scale-110 transition-transform" />
                   <span className="text-muted-foreground font-semibold tracking-wide text-xs">Structured Methodology</span>
                </div>
                <div className="flex items-center gap-3 group">
                   <BadgeCheck className="text-primary w-6 h-6 group-hover:scale-110 transition-transform" />
                   <span className="text-muted-foreground font-semibold tracking-wide text-xs">Proven Industry Impact</span>
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
