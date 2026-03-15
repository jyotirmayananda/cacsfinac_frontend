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
  { value: "194A", label: "Interest (Bank/PO) (Section 194A)", rate: 10, threshold: 40000 },
  { value: "194C_I", label: "Contractor (Individual/HUF) (Section 194C)", rate: 1, threshold: 30000 },
  { value: "194C_O", label: "Contractor (Others) (Section 194C)", rate: 2, threshold: 30000 },
  { value: "194H", label: "Commission/Brokerage (Section 194H)", rate: 2, threshold: 15000 },
  { value: "194I", label: "Rent (Land/Building) (Section 194I)", rate: 10, threshold: 240000 },
  { value: "194J", label: "Professional/Technical Services (Section 194J)", rate: 10, threshold: 30000 },
];

export default function CalculatorsPage() {
  // TDS State
  const [tdsCategory, setTdsCategory] = useState("");
  const [tdsAmount, setTdsAmount] = useState("");
  const [hasPan, setHasPan] = useState("true");
  const [tdsResult, setTdsResult] = useState<{ rate: number; tax: number; net: number } | null>(null);

  // Income Tax State
  const [income, setIncome] = useState("");
  const [deductions, setDeductions] = useState("");
  const [ageGroup, setAgeGroup] = useState("below60");
  const [itResult, setItResult] = useState<{ old: any; new: any; comparison: string; isNewBetter: boolean } | null>(null);

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

  const calculateIncomeTax = () => {
    const grossIncome = parseFloat(income);
    const totalDeductions = parseFloat(deductions) || 0;
    if (isNaN(grossIncome) || grossIncome <= 0) return;

    // --- NEW REGIME FY 2024-25 ---
    const stdDeductionNew = 75000;
    const taxableIncomeNew = Math.max(0, grossIncome - stdDeductionNew);
    let taxNew = 0;

    if (taxableIncomeNew <= 700000) {
      taxNew = 0; // Rebate Section 87A
    } else {
      // Slab-wise
      if (taxableIncomeNew > 1500000) taxNew += (taxableIncomeNew - 1500000) * 0.3 + 30000 + 30000 + 20000 + 60000;
      else if (taxableIncomeNew > 1200000) taxNew += (taxableIncomeNew - 1200000) * 0.2 + 30000 + 30000 + 20000;
      else if (taxableIncomeNew > 1000000) taxNew += (taxableIncomeNew - 1000001) * 0.15 + 30000 + 20000;
      else if (taxableIncomeNew > 700000) taxNew += (taxableIncomeNew - 700001) * 0.1 + 20000;
      else if (taxableIncomeNew > 300000) taxNew += (taxableIncomeNew - 300001) * 0.05;
    }
    const cessNew = taxNew * 0.04;
    const totalNew = taxNew + cessNew;

    // --- OLD REGIME FY 2024-25 ---
    const stdDeductionOld = 50000;
    const taxableIncomeOld = Math.max(0, grossIncome - stdDeductionOld - Math.min(150000, totalDeductions));
    let taxOld = 0;

    if (taxableIncomeOld <= 500000) {
      taxOld = 0; // Rebate Section 87A (capped at 12500)
    } else {
      if (taxableIncomeOld > 1000000) taxOld += (taxableIncomeOld - 1000000) * 0.3 + 12500 + 100000;
      else if (taxableIncomeOld > 500000) taxOld += (taxableIncomeOld - 500000) * 0.2 + 12500;
      else if (taxableIncomeOld > 250000) taxOld += (taxableIncomeOld - 250000) * 0.05;
    }
    const cessOld = taxOld * 0.04;
    const totalOld = taxOld + cessOld;

    let comparison = "Both are same.";
    let isNewBetter = true;
    if (totalNew < totalOld) {
      comparison = `New Regime saves you ₹${(totalOld - totalNew).toFixed(0)}!`;
      isNewBetter = true;
    } else if (totalOld < totalNew) {
      comparison = `Old Regime saves you ₹${(totalNew - totalOld).toFixed(0)}!`;
      isNewBetter = false;
    }

    setItResult({
      new: { tax: taxNew, cess: cessNew, total: totalNew },
      old: { tax: taxOld, cess: cessOld, total: totalOld },
      comparison: comparison,
      isNewBetter: isNewBetter
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
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-4 uppercase">
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
          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="income-tax" className="w-full">
              {/* BEAUTIFUL TABS SECTION */}
              <TabsList className="flex items-center justify-center gap-3 bg-white/80 dark:bg-card border backdrop-blur-md rounded-2xl p-1.5 shadow-md mb-8">
                <TabsTrigger 
                  value="income-tax" 
                  className={cn(
                    "flex-1 flex items-center justify-center gap-2 rounded-xl py-3.5 px-6 font-semibold text-base transition-all duration-300",
                    "data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#00B4D8] data-[state=active]:to-[#0077B6] data-[state=active]:text-white data-[state=active]:shadow-lg"
                  )}
                >
                  <Calculator className="h-5 w-5" />
                  <span>Income Tax (Old vs New)</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="tds" 
                  className={cn(
                    "flex-1 flex items-center justify-center gap-2 rounded-xl py-3.5 px-6 font-semibold text-base transition-all duration-300",
                    "data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#00B4D8] data-[state=active]:to-[#0077B6] data-[state=active]:text-white data-[state=active]:shadow-lg"
                  )}
                >
                  <Receipt className="h-5 w-5" />
                  <span>TDS Calculator</span>
                </TabsTrigger>
              </TabsList>

              {/* INCOME TAX CALCULATOR TAB */}
              <TabsContent value="income-tax" className="mt-0">
                <Card className="rounded-2xl border border-border/50 shadow-xl bg-white dark:bg-card overflow-hidden">
                  <div className="h-1.5 bg-gradient-to-r from-[#00B4D8] to-[#0077B6]"></div>
                  <CardHeader className="pb-6">
                    <CardTitle className="text-2xl font-bold flex items-center gap-2 text-[#0D1B2A] dark:text-foreground">
                      <Calculator className="h-6 w-6 text-[#00B4D8]" /> 
                      Optimize Your Salary & Income Tax
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 bg-muted/20 rounded-2xl border border-border/40">
                      <div className="space-y-2">
                        <Label htmlFor="income" className="font-medium">Gross Annual Salary / Income (₹)</Label>
                        <div className="relative">
                          <Input
                            id="income"
                            type="number"
                            placeholder="e.g. 850,000"
                            value={income}
                            onChange={(e) => setIncome(e.target.value)}
                            className="pl-10 text-lg font-semibold"
                          />
                          <IndianRupee className="absolute left-3 top-3.5 h-4 w-4 text-muted-foreground" />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="deductions" className="font-medium">Claimable Deductions (80C, 80D, etc.) (₹)</Label>
                        <Input
                          id="deductions"
                          type="number"
                          placeholder="e.g. 150,000"
                          value={deductions}
                          onChange={(e) => setDeductions(e.target.value)}
                          className="pl-3"
                        />
                        <p className="text-xs text-muted-foreground flex gap-1 items-center">
                          <Lightbulb className="h-3.5 w-3.5 text-[#00B4D8] flex-shrink-0" />
                          <span>Applicable only for standard deductions in Old Regime.</span>
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label className="font-medium">Age Category</Label>
                        <Select value={ageGroup} onValueChange={setAgeGroup}>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select Age" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="below60">Below 60 Years (General)</SelectItem>
                            <SelectItem value="60to80">Senior Citizen (60 - 80)</SelectItem>
                            <SelectItem value="above80">Super Senior (80+)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <Button onClick={calculateIncomeTax} size="lg" className="w-full bg-[#00B4D8] hover:bg-[#0077B6] text-white font-bold py-6 rounded-xl shadow-lg transition-transform duration-300 hover:scale-[1.01]">
                      Calculate & Compare Tax
                    </Button>

                    {itResult && (
                      <div className="mt-8 space-y-6 transition-all">
                        {/* Winner Banner */}
                        <div className={cn(
                          "bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 p-5 rounded-2xl flex items-center gap-4 modern-shadow text-lg font-bold"
                        )}>
                          <div className="rounded-full bg-emerald-100 p-2 text-emerald-500">
                            <CheckCircle2 className="h-6 w-6" />
                          </div>
                          <p>{itResult.comparison}</p>
                        </div>

                        {/* side by side comparison grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {/* New Regime */}
                          <Card className={cn(
                            "rounded-2xl border overflow-hidden backdrop-blur-sm transition-all duration-300",
                            itResult.isNewBetter ? "border-emerald-500 shadow-xl bg-emerald-50/20" : "border-border/60 bg-card"
                          )}>
                            <div className={cn("h-1", itResult.isNewBetter ? "bg-emerald-500" : "bg-muted")}></div>
                            <CardHeader className="pb-2">
                              {itResult.isNewBetter && <div className="text-xs font-bold text-center text-emerald-600 tracking-wider mb-2 uppercase">Recommended</div>}
                              <CardTitle className="text-xl text-center font-bold text-foreground">New Tax Regime</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3 pb-6">
                              <div className="flex justify-between text-sm">
                                <span className="text-muted-foreground">Standard Deduction:</span>
                                <span className="font-semibold">₹75,000</span>
                              </div>
                              <div className="flex justify-between text-sm">
                                <span className="text-muted-foreground">Investment Deductions:</span>
                                <span className="text-muted-foreground italic">Not Allowed</span>
                              </div>
                              <div className="border-t border-dashed border-border/50 my-2" />
                              <div className="flex justify-between text-sm">
                                <span className="text-muted-foreground">Estimated calculated Tax:</span>
                                <span className="font-medium">₹{itResult.new.tax.toFixed(0)}</span>
                              </div>
                              <div className="flex justify-between text-sm">
                                <span className="text-muted-foreground">Health/Edu Cess (4%):</span>
                                <span className="font-medium">₹{itResult.new.cess.toFixed(0)}</span>
                              </div>
                              <div className="border-t border-dashed border-border/50 my-2" />
                              <div className="flex justify-between items-baseline pt-2">
                                <span className="font-bold text-base">Total Tax Payable:</span>
                                <span className="text-2xl font-black text-[#00B4D8]">₹{itResult.new.total.toFixed(0)}</span>
                              </div>
                            </CardContent>
                          </Card>

                          {/* Old Regime */}
                          <Card className={cn(
                            "rounded-2xl border overflow-hidden backdrop-blur-sm transition-all duration-300",
                            !itResult.isNewBetter ? "border-emerald-500 shadow-xl bg-emerald-50/20" : "border-border/60 bg-card"
                          )}>
                            <div className={cn("h-1", !itResult.isNewBetter ? "bg-emerald-500" : "bg-muted")}></div>
                            <CardHeader className="pb-2">
                              {!itResult.isNewBetter && <div className="text-xs font-bold text-center text-emerald-600 tracking-wider mb-2 uppercase">Recommended</div>}
                              <CardTitle className="text-xl text-center font-bold text-foreground">Old Tax Regime</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3 pb-6">
                              <div className="flex justify-between text-sm">
                                <span className="text-muted-foreground">Standard Deduction:</span>
                                <span className="font-semibold">₹50,000</span>
                              </div>
                              <div className="flex justify-between text-sm">
                                <span className="text-muted-foreground">Deductions Claimed:</span>
                                <span className="font-semibold text-emerald-600">₹{Math.min(150000, parseFloat(deductions) || 0).toFixed(0)}</span>
                              </div>
                              <div className="border-t border-dashed border-border/50 my-2" />
                              <div className="flex justify-between text-sm">
                                <span className="text-muted-foreground">Estimated calculated Tax:</span>
                                <span className="font-medium">₹{itResult.old.tax.toFixed(0)}</span>
                              </div>
                              <div className="flex justify-between text-sm">
                                <span className="text-muted-foreground">Health/Edu Cess (4%):</span>
                                <span className="font-medium">₹{itResult.old.cess.toFixed(0)}</span>
                              </div>
                              <div className="border-t border-dashed border-border/50 my-2" />
                              <div className="flex justify-between items-baseline pt-2">
                                <span className="font-bold text-base">Total Tax Payable:</span>
                                <span className="text-2xl font-black text-[#0D1B2A] dark:text-foreground">₹{itResult.old.total.toFixed(0)}</span>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
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
              *Calculators are to provide indicative guidance based on FY 2024-25 criteria. Always consult a Chartered Accountant before filing accurate financial disclosures.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
