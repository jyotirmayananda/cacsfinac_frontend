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
import { addOnServices } from "./pricing-section";
import { useState } from "react";
import { PlanLeadForm } from "./plan-lead-form";

export function AddonServicesPopup({ open, onOpenChange }: DialogProps) {
  const [selectedPlan, setSelectedPlan] = useState<{title: string, price: string} | null>(null);

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className={cn("max-w-[90vw] xl:max-w-7xl w-full p-6 md:p-10 border-cyan-500/20 bg-card rounded-2xl max-h-[90svh] overflow-y-auto overflow-x-hidden")}>
        <DialogHeader className="mb-8">
          <DialogTitle className="text-3xl md:text-4xl font-bold font-headline uppercase text-foreground text-center">
            Optional Add-On Services
          </DialogTitle>
          <DialogDescription className="text-center text-muted-foreground text-base mt-2">
            Extra services for specialized requirements.
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {addOnServices.map((service, index) => (
            <Card key={index} className="relative flex flex-col h-full bg-card border border-border/50 hover:border-cyan-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 rounded-2xl overflow-hidden group">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg font-bold text-[#0D1B2A] dark:text-white group-hover:text-cyan-600 transition-colors md:h-14 flex items-center">
                  {service.title}
                </CardTitle>
                <div className="mt-2 flex items-baseline">
                  <span className="text-3xl md:text-4xl font-extrabold text-[#00B4D8]">
                    {service.price ? `₹${service.price}` : "Custom"}
                  </span>
                </div>
              </CardHeader>
              <CardContent className="flex-grow pb-4">
                <p className="text-xs font-bold text-[#2EC4B6] uppercase tracking-wider mb-3">Service Includes:</p>
                <ul className="space-y-2">
                  {service.includes.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[#4A4A4A] dark:text-white">
                      <CheckCircle2 className="h-4 w-4 text-[#00B4D8] flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="pt-2 mt-auto">
                <Button 
                  onClick={() => setSelectedPlan({ title: service.title, price: service.price })}
                  className="w-full bg-transparent border-2 border-[#00B4D8] text-[#00B4D8] hover:bg-[#00B4D8] hover:text-white font-semibold transition-all duration-300"
                >
                  Add to Plan
                </Button>
              </CardFooter>
            </Card>
          ))}
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
