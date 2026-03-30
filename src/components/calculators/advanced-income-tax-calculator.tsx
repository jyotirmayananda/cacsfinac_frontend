"use client";

import React, { useState, useEffect, useMemo } from "react";
import { 
  Calculator, 
  IndianRupee, 
  User, 
  Briefcase, 
  Home, 
  TrendingUp, 
  PieChart, 
  Plus, 
  Minus, 
  Info, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp,
  Download,
  AlertTriangle
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { 
  calculateTax, 
  AssessmentYear, 
  AgeGroup, 
  IncomeDetails, 
  DeductionDetails, 
  TaxResult 
} from "@/lib/tax-calculations";

const SectionHeader = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <div className="flex items-start gap-4 mb-6">
    <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
      <Icon className="h-6 w-6" />
    </div>
    <div>
      <h3 className="text-lg font-bold text-slate-600 dark:text-slate-100">{title}</h3>
      <p className="text-sm text-slate-500 dark:text-slate-400">{description}</p>
    </div>
  </div>
);

const InputField = ({ label, id, value, onChange, icon: Icon, tooltip, prefix = "₹" }: any) => (
  <div className="space-y-2">
    <div className="flex items-center gap-2">
      <Label htmlFor={id} className="text-sm font-semibold text-slate-700 dark:text-slate-300">
        {label}
      </Label>
      {tooltip && (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Info className="h-4 w-4 text-slate-400 cursor-help" />
            </TooltipTrigger>
            <TooltipContent>
              <p className="max-w-xs">{tooltip}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )}
    </div>
    <div className="relative">
      <Input
        id={id}
        type="number"
        value={value || ""}
        onChange={(e) => onChange(parseFloat(e.target.value) || 0)}
        className="pl-10 h-12 text-lg font-medium bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 focus:ring-2 focus:ring-blue-500 rounded-xl"
        placeholder="0"
      />
      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 font-bold">
        {prefix}
      </div>
    </div>
  </div>
);

export function AdvancedIncomeTaxCalculator() {
  // Basic Details State
  const [ay, setAy] = useState<AssessmentYear>("2025-26");
  const [ageGroup, setAgeGroup] = useState<AgeGroup>("below60");
  
  // Income State
  const [income, setIncome] = useState<IncomeDetails>({
    grossSalary: 0,
    allowancesExempt: 0,
    housePropertyIncome: 0,
    capitalGainsSTCG: 0,
    capitalGainsLTCG: 0,
    otherSourcesIncome: 0,
  });

  // Deductions State
  const [deductions, setDeductions] = useState<DeductionDetails>({
    section80C: 0,
    section80D: 0,
    section80G: 0,
    section80TTA: 0,
    others: 0,
  });

  // Calculation Results
  const results = useMemo(() => {
    const oldRegime = calculateTax(ay, ageGroup, income, deductions, false);
    const newRegime = calculateTax(ay, ageGroup, income, deductions, true);
    return { oldRegime, newRegime };
  }, [ay, ageGroup, income, deductions]);

  const isNewBetter = results.newRegime.totalTax < results.oldRegime.totalTax;
  const totalSavings = Math.abs(results.newRegime.totalTax - results.oldRegime.totalTax);

  const updateIncome = (field: keyof IncomeDetails, value: number) => {
    setIncome(prev => ({ ...prev, [field]: value }));
  };

  const updateDeduction = (field: keyof DeductionDetails, value: number) => {
    setDeductions(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="w-full max-w-6xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* INPUT SECTION */}
        <div className="lg:col-span-7 space-y-6">
          <Card className="border-0 shadow-2xl shadow-blue-500/5 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-3xl overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500"></div>
            <CardHeader>
              <CardTitle className="text-2xl font-black bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400 bg-clip-text text-transparent">
                TAX CALCULATOR DETAILED
              </CardTitle>
              <CardDescription>Comprehensive income tax estimation for individual taxpayers.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              
              {/* 1. Basic Details */}
              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800">
                <SectionHeader 
                  icon={User} 
                  title="Basic Details" 
                  description="Set your assessment year and profile"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label className="text-sm font-semibold">Assessment Year</Label>
                    <Select value={ay} onValueChange={(v: AssessmentYear) => setAy(v)}>
                      <SelectTrigger className="h-12 rounded-xl">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2025-26">AY 2025-26 (FY 2024-25)</SelectItem>
                        <SelectItem value="2026-27">AY 2026-27 (FY 2025-26) [New Budget]</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-sm font-semibold">Age Category</Label>
                    <Select value={ageGroup} onValueChange={(v: AgeGroup) => setAgeGroup(v)}>
                      <SelectTrigger className="h-12 rounded-xl">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="below60">Below 60 Years</SelectItem>
                        <SelectItem value="60to80">60 - 80 Years (Senior)</SelectItem>
                        <SelectItem value="above80">Above 80 Years (Super Senior)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* 2. Income Sections */}
              <Tabs defaultValue="salary" className="w-full">
                <TabsList className="grid grid-cols-4 h-14 p-1 bg-slate-100 dark:bg-slate-800 rounded-2xl mb-6">
                  <TabsTrigger value="salary" className="rounded-xl data-[state=active]:bg-white dark:data-[state=active]:bg-slate-900 data-[state=active]:shadow-sm">Salary</TabsTrigger>
                  <TabsTrigger value="property" className="rounded-xl data-[state=active]:bg-white dark:data-[state=active]:bg-slate-900 data-[state=active]:shadow-sm">Property</TabsTrigger>
                  <TabsTrigger value="gains" className="rounded-xl data-[state=active]:bg-white dark:data-[state=active]:bg-slate-900 data-[state=active]:shadow-sm">Gains</TabsTrigger>
                  <TabsTrigger value="other" className="rounded-xl data-[state=active]:bg-white dark:data-[state=active]:bg-slate-900 data-[state=active]:shadow-sm">Other</TabsTrigger>
                </TabsList>

                <TabsContent value="salary" className="space-y-6 animate-in fade-in duration-300">
                  <SectionHeader icon={Briefcase} title="Income from Salary" description="Details from your Form 16" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <InputField 
                      label="Gross Annual Salary" 
                      id="grossSalary" 
                      value={income.grossSalary} 
                      onChange={(v: number) => updateIncome("grossSalary", v)}
                      tooltip="Total annual salary before any deductions."
                    />
                    <InputField 
                      label="Exempt Allowances" 
                      id="allowancesExempt" 
                      value={income.allowancesExempt} 
                      onChange={(v: number) => updateIncome("allowancesExempt", v)}
                      tooltip="HRA, LTA, and other exemptions (mostly old regime)."
                    />
                  </div>
                </TabsContent>

                <TabsContent value="property" className="space-y-6 animate-in fade-in duration-300">
                  <SectionHeader icon={Home} title="Income from House Property" description="Rental income or self-occupied interest" />
                  <InputField 
                    label="Net Annual Income/Loss" 
                    id="housePropertyIncome" 
                    value={income.housePropertyIncome} 
                    onChange={(v: number) => updateIncome("housePropertyIncome", v)}
                    tooltip="Net rental income after 30% std deduction, or interest on home loan (negative value)."
                  />
                </TabsContent>

                <TabsContent value="gains" className="space-y-6 animate-in fade-in duration-300">
                  <SectionHeader icon={TrendingUp} title="Capital Gains" description="Profit from sale of assets" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <InputField 
                      label="STCG (Short Term)" 
                      id="stcg" 
                      value={income.capitalGainsSTCG} 
                      onChange={(v: number) => updateIncome("capitalGainsSTCG", v)}
                    />
                    <InputField 
                      label="LTCG (Long Term)" 
                      id="ltcg" 
                      value={income.capitalGainsLTCG} 
                      onChange={(v: number) => updateIncome("capitalGainsLTCG", v)}
                    />
                  </div>
                </TabsContent>

                <TabsContent value="other" className="space-y-6 animate-in fade-in duration-300">
                  <SectionHeader icon={PieChart} title="Other Sources" description="Interest, Dividends, etc." />
                  <InputField 
                    label="Income from Other Sources" 
                    id="otherSourcesIncome" 
                    value={income.otherSourcesIncome} 
                    onChange={(v: number) => updateIncome("otherSourcesIncome", v)}
                  />
                </TabsContent>
              </Tabs>

              {/* 3. Deductions Section (Chapter VI-A) */}
              <div className="pt-8 border-t border-slate-100 dark:border-slate-800">
                <SectionHeader 
                  icon={Plus} 
                  title="Deductions (Chapter VI-A)" 
                  description="Investment & expenses (Applicable mainly for Old Regime)" 
                />
                {!isNewBetter && (
                  <div className="bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 p-4 rounded-xl mb-6 text-sm flex gap-3">
                    <Info className="h-5 w-5 flex-shrink-0" />
                    <p>You are currently better off in the <strong>Old Regime</strong>. Ensure all deductions are accurately entered.</p>
                  </div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <InputField 
                    label="Section 80C" 
                    id="80c" 
                    value={deductions.section80C} 
                    onChange={(v: number) => updateDeduction("section80C", v)}
                    tooltip="LIC, PPF, ELSS, EPF, Home Loan Principal, etc. (Max 1.5L)"
                  />
                  <InputField 
                    label="Section 80D" 
                    id="80d" 
                    value={deductions.section80D} 
                    onChange={(v: number) => updateDeduction("section80D", v)}
                    tooltip="Health Insurance Premium."
                  />
                  <InputField 
                    label="Section 80TTA/TTB" 
                    id="80tta" 
                    value={deductions.section80TTA} 
                    onChange={(v: number) => updateDeduction("section80TTA", v)}
                    tooltip="Interest from Savings Account."
                  />
                  <InputField 
                    label="Other Deductions" 
                    id="others" 
                    value={deductions.others} 
                    onChange={(v: number) => updateDeduction("others", v)}
                    tooltip="80G (Donations), 80E (Edu Loan Interest), etc."
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* RESULTS SUMMARY SECTION */}
        <div className="lg:col-span-5 space-y-6">
          <div className="sticky top-24 space-y-6">
            
            {/* COMPARISON CARD */}
            <Card className="border-0 shadow-2xl bg-gradient-to-br from-slate-900 to-blue-900 text-white rounded-3xl overflow-hidden">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="h-5 w-5 text-blue-400" />
                  Tax Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex flex-col items-center justify-center py-6 text-center border-b border-white/10">
                  <p className="text-sm font-medium text-blue-200 mb-1">Estimated Net Tax Payable</p>
                  <h2 className={cn(
                    "text-5xl font-black mb-2",
                    isNewBetter ? "text-emerald-400" : "text-blue-400"
                  )}>
                    ₹{Math.round(isNewBetter ? results.newRegime.totalTax : results.oldRegime.totalTax).toLocaleString()}
                  </h2>
                  <div className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-sm font-bold">
                    via {isNewBetter ? "NEW REGIME" : "OLD REGIME"}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-white/60">Old Regime Tax</span>
                    <span className="font-bold">₹{Math.round(results.oldRegime.totalTax).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-white/60">New Regime Tax</span>
                    <span className="font-bold">₹{Math.round(results.newRegime.totalTax).toLocaleString()}</span>
                  </div>
                  <div className="pt-4 border-t border-white/10 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="p-2 rounded-full bg-emerald-500/20 text-emerald-400">
                        <TrendingUp className="h-4 w-4" />
                      </div>
                      <span className="font-bold text-lg">Potential Savings</span>
                    </div>
                    <span className="text-2xl font-black text-emerald-400">₹{Math.round(totalSavings).toLocaleString()}</span>
                  </div>
                </div>

                <Button className="w-full h-14 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-2xl shadow-xl shadow-blue-900/50 transition-all hover:scale-[1.02]">
                  <Download className="mr-2 h-5 w-5" /> DOWNLOAD TAX REPORT
                </Button>
              </CardContent>
            </Card>

            {/* DETAILED BREAKDOWN CARD */}
            <Card className="border-0 shadow-xl bg-white dark:bg-slate-900 rounded-3xl overflow-hidden">
               <CardHeader className="pb-2">
                <CardTitle className="text-lg font-bold">Detailed Breakdown</CardTitle>
               </CardHeader>
               <CardContent className="p-0">
                  <div className="divide-y divide-slate-100 dark:divide-slate-800">
                    <div className="p-4 flex justify-between">
                      <span className="text-sm text-slate-500">Taxable Income</span>
                      <span className="font-bold">₹{Math.round(isNewBetter ? results.newRegime.taxableIncome : results.oldRegime.taxableIncome).toLocaleString()}</span>
                    </div>
                    <div className="p-4 flex justify-between">
                      <span className="text-sm text-slate-500">Standard Deduction</span>
                      <span className="font-bold">₹{Math.round(isNewBetter ? results.newRegime.standardDeduction : results.oldRegime.standardDeduction).toLocaleString()}</span>
                    </div>
                    <div className="p-4 flex justify-between">
                      <span className="text-sm text-slate-500">Calculated Basic Tax</span>
                      <span className="font-bold">₹{Math.round(isNewBetter ? results.newRegime.basicTax : results.oldRegime.basicTax).toLocaleString()}</span>
                    </div>
                    <div className="p-4 flex justify-between">
                      <span className="text-sm text-slate-500">Rebate u/s 87A</span>
                      <span className="font-bold text-emerald-500">- ₹{Math.round(isNewBetter ? results.newRegime.rebate87A : results.oldRegime.rebate87A).toLocaleString()}</span>
                    </div>
                    <div className="p-4 flex justify-between">
                      <span className="text-sm text-slate-500">Surcharge</span>
                      <span className="font-bold">₹{Math.round(isNewBetter ? results.newRegime.surcharge : results.oldRegime.surcharge).toLocaleString()}</span>
                    </div>
                    <div className="p-4 flex justify-between bg-slate-50 dark:bg-slate-800/50">
                      <span className="text-sm font-bold">Cess (4%)</span>
                      <span className="font-bold">₹{Math.round(isNewBetter ? results.newRegime.cess : results.oldRegime.cess).toLocaleString()}</span>
                    </div>
                  </div>
               </CardContent>
            </Card>

            {/* TAX TIP */}
            <div className="p-6 rounded-3xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-400 space-y-2">
              <div className="flex items-center gap-2 font-black text-sm">
                <Info className="h-4 w-4" /> TAX FILING TIP
              </div>
              <p className="text-xs font-medium leading-relaxed">
                {isNewBetter 
                  ? "The New Tax Regime is more beneficial for you as it offers simpler compliance and lower tax rates without requiring large investments." 
                  : "The Old Tax Regime remains better for you because your claimable deductions exceed the break-even threshold. Ensure you have proof of all investments like LIC, PPF, etc."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
