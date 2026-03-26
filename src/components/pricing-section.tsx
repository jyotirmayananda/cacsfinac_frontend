"use client";

import React from "react";
import { CheckCircle2, IndianRupee } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "./ui/card";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { useState } from "react";
import { PlanLeadForm } from "./plan-lead-form";

export const itrPlans = [
  {
    title: "Salary Income Plan",
    price: "499",
    period: "/ Year",
    includes: [
      "ITR Preparation & Filing",
      "Salary Income Reporting",
      "One House Property Income",
      "Interest / Other Income",
      "Document Verification",
      "CA Assisted Filing",
      "WhatsApp / Email Support",
      "1 Revision Support",
    ],
  },
  {
    title: "Salary + Multiple House Property Plan",
    price: "699",
    period: "/ Year",
    includes: [
      "ITR Preparation & Filing",
      "Salary Income Reporting",
      "Multiple House Property Calculation",
      "Interest / Other Income",
      "Document Verification",
      "CA Assisted Filing",
      "WhatsApp Support",
      "1 Revision Support",
    ],
  },
  {
    title: "Business / Professional Plan",
    price: "1,299",
    period: "/ Year",
    includes: [
      "ITR Preparation & Filing",
      "Business / Professional Income Reporting",
      "Presumptive Taxation (44AD / 44ADA)",
      "Profit Calculation",
      "Document Verification",
      "CA Assisted Filing",
      "WhatsApp Support",
      "2 Revision Support",
    ],
  },
  {
    title: "Capital Gain Plan",
    price: "1,999",
    period: "/ Year",
    includes: [
      "Capital Gain Computation",
      "Shares / Mutual Funds Reporting",
      "Property Capital Gain Calculation",
      "ITR Preparation & Filing",
      "Document Verification",
      "CA Assisted Filing",
      "WhatsApp Support",
      "2 Revision Support",
    ],
  },
  {
    title: "F&O Trading Plan",
    price: "2,999",
    period: "/ Year",
    includes: [
      "Futures & Options Income Calculation",
      "Intraday / Speculative Income Reporting",
      "Trading P&L Statement Review",
      "ITR Preparation & Filing",
      "Document Verification",
      "CA Assisted Filing",
      "WhatsApp Support",
      "2 Revision Support",
    ],
  },
  {
    title: "Crypto Currency Plan",
    price: "2,999",
    period: "/ Year",
    includes: [
      "Crypto Gain / Loss Calculation",
      "Multiple Exchange Statement Review",
      "Crypto Income Reporting",
      "ITR Preparation & Filing",
      "Document Verification",
      "CA Assisted Filing",
      "WhatsApp Support",
    ],
  },
];

export const addOnServices = [
  {
    title: "Income Tax Notice Response",
    price: "999",
    period: "",
    includes: [
      "Review of Income Tax Notice",
      "Drafting & Preparing Response",
      "Guidance on Required Documents",
      "Online Submission Assistance",
    ],
  },
  {
    title: "Tax Planning Consultation",
    price: "499",
    period: "",
    includes: [
      "30-Minute CA Consultation",
      "Tax Saving Advice",
      "Income Tax Planning Guidance",
      "Investment & Deduction Suggestions",
    ],
  },
  {
    title: "Urgent Filing (24 Hours)",
    price: "299",
    period: "",
    includes: [
      "Priority Processing",
      "Return Filing within 24 Hours",
      "Quick Document Review",
      "Fast Support Assistance",
    ],
  },
  {
    title: "Advance Tax Planning",
    price: "799",
    period: "",
    includes: [
      "Advance Tax Liability Calculation",
      "Payment Guidance",
      "Tax Saving Strategies",
      "Compliance Assistance",
    ],
  },
];

export function PricingSection() {
  const [selectedPlan, setSelectedPlan] = useState<{title: string, price: string} | null>(null);

  return (
    <section id="pricing" className="w-full py-12 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* ITR Plans */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline uppercase text-foreground">
            Income Tax Return (ITR) Filing Plans
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground text-center">
            Get your Income Tax Return (ITR) filed quickly and securely with CA assistance.<br/>
            Suitable for salary, business, capital gains, trading and crypto income.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {itrPlans.map((plan, index) => (
            <Card key={index} className="relative flex flex-col h-full bg-card border border-border/50 hover:border-cyan-400 hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden group">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold text-[#0D1B2A] dark:text-white group-hover:text-cyan-600 transition-colors">
                  {plan.title}
                </CardTitle>
                <div className="mt-4 flex items-baseline">
                  <span className="text-3xl md:text-4xl font-extrabold text-[#00B4D8]">
                    ₹{plan.price}
                  </span>
                  {plan.period && <span className="ml-1 text-sm text-muted-foreground">{plan.period}</span>}
                </div>
                <p className="text-xs text-muted-foreground mt-1">*Exclusive of Taxes</p>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-xs font-bold text-[#2EC4B6] uppercase tracking-wider mb-3">Service Includes:</p>
                <ul className="space-y-2">
                  {plan.includes.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[#4A4A4A] dark:text-white">
                      <CheckCircle2 className="h-4 w-4 text-[#00B4D8] flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="pt-4 mt-auto">
                <Button 
                  onClick={() => setSelectedPlan({ title: plan.title, price: plan.price })}
                  className="w-full bg-transparent border-2 border-[#00B4D8] text-[#00B4D8] hover:bg-[#00B4D8] hover:text-white font-semibold transition-all duration-300"
                >
                  File My ITR Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Add-On Services */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline uppercase text-foreground">
            Optional Add-On Services
          </h2>
          <p className="mt-4 text-muted-foreground">Extra services for specialized requirements.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {addOnServices.map((service, index) => (
            <Card key={index} className="relative flex flex-col bg-card border border-border/50 hover:border-cyan-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 rounded-2xl overflow-hidden group">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg font-bold text-[#0D1B2A] dark:text-white group-hover:text-cyan-600 transition-colors h-14 flex items-center">
                  {service.title}
                </CardTitle>
                <div className="mt-2 flex items-baseline">
                  <span className="text-2xl font-extrabold text-[#00B4D8]">
                    ₹{service.price}
                  </span>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
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
              <CardFooter className="pt-4 mt-auto">
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
      </div>
      <PlanLeadForm
        planTitle={selectedPlan?.title || ""}
        planPrice={selectedPlan?.price || ""}
        open={!!selectedPlan}
        onOpenChange={(op) => !op && setSelectedPlan(null)}
      />
    </section>
  );
}
