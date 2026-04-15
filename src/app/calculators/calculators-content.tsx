"use client";

import React, { useState } from "react";
import { CheckCircle2, IndianRupee, AlertCircle, Calculator, Receipt, ArrowRight, Lightbulb } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

const tdsRates = [
  { value: "192", label: "Salary (Section 192)", rate: "Slab", threshold: 0 },
  { value: "193", label: "Interest on Securities (Section 193)", rate: 10, threshold: 10000 },
  { value: "194", label: "Dividend (Section 194)", rate: 10, threshold: 5000 },
  { value: "194A", label: "Interest (Bank/PO) (Section 194A)", rate: 10, threshold: 40000 },
  { value: "194C_I", label: "Contractor (Individual/HUF) (Section 194C)", rate: 1, threshold: 30000 },
  { value: "194C_O", label: "Contractor (Others) (Section 194C)", rate: 2, threshold: 30000 },
  { value: "194DA", label: "Life Insurance Policy (Section 194DA)", rate: 2, threshold: 100000 },
  { value: "194G", label: "Commission on Lottery Tickets (Section 194G)", rate: 2, threshold: 15000 },
  { value: "194H", label: "Commission/Brokerage (Section 194H)", rate: 2, threshold: 15000 },
  { value: "194I_PB", label: "Rent (Plant & Machinery) (Section 194I)", rate: 2, threshold: 240000 },
  { value: "194I", label: "Rent (Land/Building/Furniture) (Section 194I)", rate: 10, threshold: 240000 },
  { value: "194IB", label: "Rent by Individual/HUF (Section 194-IB)", rate: 2, threshold: 600000 },
  { value: "194J_T", label: "Technical Services/Royalty (Section 194J)", rate: 2, threshold: 30000 },
  { value: "194J", label: "Professional Services (Section 194J)", rate: 10, threshold: 30000 },
  { value: "194M", label: "Contract/Commission/Prof. Fee Ind/HUF (Section 194M)", rate: 2, threshold: 5000000 },
  { value: "194O", label: "E-Commerce Operator (Section 194-O)", rate: 0.1, threshold: 500000 },
  { value: "194S", label: "Transfer of Virtual Digital Asset (Section 194S)", rate: 1, threshold: 10000 },
];

import { AdvancedIncomeTaxCalculator } from "@/components/calculators/advanced-income-tax-calculator";

export default function CalculatorsPage() {
  // TDS State
  const [tdsCategory, setTdsCategory] = useState("");
  const [tdsAmount, setTdsAmount] = useState("");
  const [hasPan, setHasPan] = useState("true");
  const [tdsResult, setTdsResult] = useState<{ rate: number; tax: number; net: number } | null>(null);

  const calculateTDS = () => {
    const amount = parseFloat(tdsAmount);
    if (isNaN(amount) || amount <= 0) return;

    const selected = tdsRates.find((r) => r.value === tdsCategory);
    if (!selected) return;

    let rate = 0;
    if (selected.rate === "Slab") {
      rate = 20; // Default flat rate for illustration
    } else {
      rate = selected.rate as number;
    }

    if (hasPan === "false") {
      rate = 20; // Higher rate applicable without PAN
    }

    let tax = 0;
    if (amount >= selected.threshold) {
      tax = (amount * rate) / 100;
    }

    setTdsResult({
      rate: rate,
      tax: tax,
      net: amount - tax,
    });
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAFC] dark:bg-background">
      {/* Decorative Background Mesh Header */}
      <section className="relative w-full py-16 md:py-24 bg-gradient-to-b from-[#E0F2FE] via-[#F8FAFC] to-[#F8FAFC] dark:from-sky-950/20 dark:via-background dark:to-background overflow-hidden border-b">
        <div className="absolute inset-0 bg-grid-slate-200/50 [mask-image:linear-gradient(bottom,white,transparent)] dark:bg-grid-slate-800/10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-400/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            <span className="text-gradient bg-gradient-to-r from-blue-600 via-blue-400 to-cyan-400">
              Tax & TDS Calculators
            </span>
          </h1>
          <p className="mt-2 text-xl text-muted-foreground max-w-2xl mx-auto">
            Plan your investments, claim deductions, and compare tax regimes effortlessly with accurate simulations.
          </p>
        </div>
      </section>

      <section className="w-full py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="income-tax" className="w-full">
              {/* BEAUTIFUL TABS SECTION */}
              <TabsList className="mb-12 flex items-center justify-center gap-4 bg-transparent border-none">
                <TabsTrigger 
                  value="income-tax" 
                  className={cn(
                    "rounded-2xl py-4 px-8 font-black text-lg transition-all duration-500 border-2 border-transparent",
                    "data-[state=active]:bg-white dark:data-[state=active]:bg-slate-900 data-[state=active]:shadow-2xl data-[state=active]:border-blue-500 data-[state=active]:text-blue-600 dark:data-[state=active]:text-blue-400 data-[state=inactive]:text-slate-400"
                  )}
                >
                  <Calculator className="h-6 w-6 mr-2" />
                  <span>Income Tax (Advanced)</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="tds" 
                  className={cn(
                    "rounded-2xl py-4 px-8 font-black text-lg transition-all duration-500 border-2 border-transparent",
                    "data-[state=active]:bg-white dark:data-[state=active]:bg-slate-900 data-[state=active]:shadow-2xl data-[state=active]:border-blue-500 data-[state=active]:text-blue-600 dark:data-[state=active]:text-blue-400 data-[state=inactive]:text-slate-400"
                  )}
                >
                  <Receipt className="h-6 w-6 mr-2" />
                  <span>TDS Calculator</span>
                </TabsTrigger>
              </TabsList>

              {/* INCOME TAX CALCULATOR TAB */}
              <TabsContent value="income-tax" className="mt-0 outline-none focus:outline-none ring-0">
                <AdvancedIncomeTaxCalculator />
              </TabsContent>

              {/* TDS CALCULATOR TAB */}
              <TabsContent value="tds" className="mt-0">
                <Card className="rounded-2xl border border-border/50 shadow-xl bg-white dark:bg-card overflow-hidden">
                  <div className="h-1.5 bg-gradient-to-r from-[#00B4D8] to-[#0077B6]"></div>
                  <CardHeader className="pb-6">
                    <CardTitle className="text-2xl font-bold flex items-center gap-2 text-[#0D1B2A] dark:text-foreground">
                      <Receipt className="h-6 w-6 text-[#00B4D8]" /> 
                      Calculate Tax Deducted at Source
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <Label className="font-medium">Nature of Payment</Label>
                      <Select value={tdsCategory} onValueChange={setTdsCategory}>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select Payment Category" />
                        </SelectTrigger>
                        <SelectContent className="max-h-72">
                          {tdsRates.map((r) => (
                            <SelectItem key={r.value} value={r.value}>{r.label}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <p className="text-xs text-muted-foreground">Threshold limits and applicable slabs apply for deductibles.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="tdsAmount" className="font-medium">Payment / Bill Amount (₹)</Label>
                        <div className="relative">
                          <Input
                            id="tdsAmount"
                            type="number"
                            placeholder="e.g. 50,000"
                            value={tdsAmount}
                            onChange={(e) => setTdsAmount(e.target.value)}
                            className="pl-10 font-semibold"
                          />
                          <IndianRupee className="absolute left-3 top-3.5 h-4 w-4 text-muted-foreground" />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label className="font-medium">Does Receiver have PAN?</Label>
                        <Select value={hasPan} onValueChange={setHasPan}>
                          <SelectTrigger>
                            <SelectValue placeholder="Are PAN details provided?" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="true">Yes, PAN is provided</SelectItem>
                            <SelectItem value="false">No, PAN NOT provided</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {hasPan === "false" && (
                      <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 text-amber-800 dark:text-amber-300 p-4 rounded-xl flex items-start gap-3 text-sm">
                        <AlertCircle className="h-5 w-5 flex-shrink-0 mt-0.5 text-amber-500" />
                        <p>Without PAN, absolute threshold rate of 20% flat tax generally applies regardless of standard threshold rates under statutory sections.</p>
                      </div>
                    )}

                    <Button onClick={calculateTDS} className="w-full bg-[#00B4D8] hover:bg-[#0077B6] text-white font-bold py-6 rounded-xl shadow-lg transition-transform duration-300 hover:scale-[1.01]">
                      Calculate TDS
                    </Button>

                    {tdsResult && (
                      <div className="mt-8">
                        <Card className="rounded-xl border border-border/50 bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-950 overflow-hidden">
                          <CardHeader className="pb-2">
                            <CardTitle className="text-lg font-bold text-foreground">Tax Breakdown Estimates</CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-4 pb-6">
                            <div className="flex justify-between items-center text-sm">
                              <span className="text-muted-foreground">Applicable applied Tax Rate:</span>
                              <span className="font-semibold text-primary">{tdsResult.rate === 20 && tdsCategory === "192" ? "Slab rate (Estimated 20%)" : `${tdsResult.rate}%`}</span>
                            </div>
                            <div className="border-t border-dashed border-border/40 my-2" />
                            <div className="flex justify-between items-center">
                              <span className="text-muted-foreground">TDS Tax to be Deducted:</span>
                              <span className="text-2xl font-extrabold text-[#EF4444]">₹{tdsResult.tax.toFixed(0)}</span>
                            </div>
                            <div className="flex justify-between items-center bg-white dark:bg-background p-4 rounded-xl border border-emerald-500/30 shadow-sm mt-4">
                              <span className="font-bold">Net Amount Component Payable:</span>
                              <span className="text-3xl font-black text-[#2EC4B6]">₹{tdsResult.net.toFixed(0)}</span>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            {/* Disclaimer disclaimer bottom footer support text */}
            <p className="mt-6 text-center text-xs text-muted-foreground max-w-xl mx-auto">
              *Calculators are to provide indicative guidance based on current rates for FY 2025-26 (AY 2026-27). Always consult a Chartered Accountant before filing accurate financial disclosures.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
