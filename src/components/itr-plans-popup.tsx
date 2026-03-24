"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "../components/ui/dialog";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { CheckCircle2 } from "lucide-react";
import type { DialogProps } from "@radix-ui/react-dialog";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { PlanLeadForm } from "./plan-lead-form";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";
import { itrPlans } from "./pricing-section";

export function ITRPlansPopup({ open, onOpenChange }: DialogProps) {
  const [selectedPlan, setSelectedPlan] = useState<{title: string, price: string} | null>(null);

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className={cn("max-w-[95vw] w-full p-4 md:p-10 bg-card rounded-3xl max-h-[90svh] overflow-y-auto overflow-x-hidden border border-cyan-500/20 shadow-[0_0_50px_-12px_rgba(0,180,216,0.3)] backdrop-blur-md")}>
        <DialogHeader className="mb-6 md:mb-10 w-full">
          <div className="flex flex-col items-center justify-center text-center w-full space-y-3">
            <DialogTitle className="text-3xl md:text-5xl font-extrabold font-headline uppercase tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 w-full text-center">
              Income Tax Return Plans
            </DialogTitle>
            <DialogDescription className="text-muted-foreground text-sm md:text-lg max-w-2xl mx-auto font-medium text-center">
              Get your ITR filed quickly and securely with CA assistance.<br className="hidden md:block"/>
              Suitable for salary, business, capital gains, trading and crypto income.
            </DialogDescription>
          </div>
        </DialogHeader>
        
        <div className="w-full relative px-2 md:px-16">
          <Carousel opts={{ align: "start", loop: true }} className="w-full pb-4">
            <CarouselContent className="-ml-3 md:-ml-4 py-4">
            {itrPlans.map((plan, index) => (
              <CarouselItem key={index} className="pl-3 md:pl-4 basis-[85%] md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                <Card className="relative flex flex-col h-full bg-card/80 backdrop-blur-sm border border-border/50 hover:border-cyan-500/50 hover:shadow-[0_8px_30px_rgb(0,180,216,0.15)] transition-all duration-500 rounded-2xl overflow-hidden group hover:-translate-y-1">
                  {/* Subtle top gradient bar */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  
                  <CardHeader className="pb-4 pt-6 px-5 md:px-6">
                    <CardTitle className="text-xl font-bold text-foreground group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-500 transition-all">
                      {plan.title}
                    </CardTitle>
                    <div className="mt-3 flex items-end gap-1">
                      <span className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-cyan-500 tracking-tight pb-1">
                        ₹{plan.price}
                      </span>
                      {plan.period && <span className="mb-2 text-sm font-medium text-muted-foreground">{plan.period}</span>}
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow pb-4 px-5 md:px-6">
                    <p className="text-xs font-bold text-cyan-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                      <span className="h-px w-4 bg-cyan-500 rounded-full"></span>
                      Service Includes
                    </p>
                    <ul className="space-y-3">
                      {plan.includes.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground font-medium">
                          <CheckCircle2 className="h-5 w-5 text-cyan-500 flex-shrink-0 drop-shadow-sm" />
                          <span className="leading-tight">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="pt-4 pb-6 px-5 md:px-6 mt-auto">
                    <Button 
                      onClick={() => setSelectedPlan({ title: plan.title, price: plan.price })}
                      className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-xl text-md h-12 hover:from-blue-700 hover:to-cyan-600 shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:-translate-y-0.5"
                    >
                      File My ITR Now
                    </Button>
                  </CardFooter>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious className="absolute -left-2 md:-left-14 top-1/2 -translate-y-1/2 h-14 w-14 border border-cyan-500/30 text-cyan-500 bg-background hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-400 hover:text-white transition-all shadow-lg flex items-center justify-center z-10" />
            <CarouselNext className="absolute -right-2 md:-right-14 top-1/2 -translate-y-1/2 h-14 w-14 border border-cyan-500/30 text-cyan-500 bg-background hover:bg-gradient-to-r hover:from-cyan-400 hover:to-blue-500 hover:text-white transition-all shadow-lg flex items-center justify-center z-10" />
          </div>
          <div className="flex md:hidden justify-center items-center gap-6 mt-6">
            <CarouselPrevious className="static translate-y-0 translate-x-0 h-12 w-12 border-2 border-cyan-500/30 text-cyan-600 bg-transparent hover:bg-cyan-500 hover:text-white transition-all duration-300 rounded-full shadow-sm" />
            <CarouselNext className="static translate-y-0 translate-x-0 h-12 w-12 border-2 border-cyan-500/30 text-cyan-600 bg-transparent hover:bg-cyan-500 hover:text-white transition-all duration-300 rounded-full shadow-sm" />
          </div>
        </Carousel>
        </div>
      </DialogContent>
    </Dialog>
    <PlanLeadForm
      planTitle={selectedPlan?.title || ""}
      planPrice={selectedPlan?.price || ""}
      open={!!selectedPlan}
      onOpenChange={(op) => !op && setSelectedPlan(null)}
    />
  </>
  );
}
