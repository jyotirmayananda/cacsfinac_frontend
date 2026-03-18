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
      <DialogContent className={cn("max-w-[90vw] md:max-w-6xl w-full p-6 md:p-10 border-cyan-500/20 bg-card rounded-2xl max-h-[90svh] overflow-y-auto overflow-x-hidden")}>
        <DialogHeader className="mb-8">
          <DialogTitle className="text-3xl md:text-4xl font-bold font-headline uppercase text-foreground text-center">
            Income Tax Return (ITR) Filing Plans
          </DialogTitle>
          <DialogDescription className="text-center text-muted-foreground text-base mt-2 max-w-2xl mx-auto">
            Get your Income Tax Return (ITR) filed quickly and securely with CA assistance.<br/>
            Suitable for salary, business, capital gains, trading and crypto income.
          </DialogDescription>
        </DialogHeader>
        
        <Carousel opts={{ align: "start", loop: true }} className="w-full pb-4 mt-4">
          <CarouselContent className="-ml-4">
            {itrPlans.map((plan, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="relative flex flex-col h-full bg-card border border-border/50 hover:border-cyan-400 hover:shadow-lg transition-all duration-300 rounded-xl overflow-hidden group">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg font-bold text-[#0D1B2A] group-hover:text-cyan-600 transition-colors">
                      {plan.title}
                    </CardTitle>
                    <div className="mt-2 flex items-baseline">
                      <span className="text-2xl md:text-3xl font-extrabold text-[#00B4D8]">
                        ₹{plan.price}
                      </span>
                      {plan.period && <span className="ml-1 text-xs text-muted-foreground">{plan.period}</span>}
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow pb-2">
                    <p className="text-xs font-bold text-[#2EC4B6] uppercase tracking-wider mb-3">Service Includes:</p>
                    <ul className="space-y-2">
                      {plan.includes.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-[#4A4A4A]">
                          <CheckCircle2 className="h-4 w-4 text-[#00B4D8] flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="pt-3 mt-auto">
                    <Button 
                      onClick={() => setSelectedPlan({ title: plan.title, price: plan.price })}
                      size="sm" 
                      className="w-full bg-transparent border-2 border-[#00B4D8] text-[#00B4D8] hover:bg-[#00B4D8] hover:text-white font-semibold transition-all"
                    >
                      File My ITR Now
                    </Button>
                  </CardFooter>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center items-center gap-4 mt-8">
            <CarouselPrevious className="static translate-y-0 translate-x-0 h-10 w-10 border-2 border-[#00B4D8] text-[#00B4D8] hover:bg-[#00B4D8] hover:text-white" />
            <CarouselNext className="static translate-y-0 translate-x-0 h-10 w-10 border-2 border-[#00B4D8] text-[#00B4D8] hover:bg-[#00B4D8] hover:text-white" />
          </div>
        </Carousel>
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
