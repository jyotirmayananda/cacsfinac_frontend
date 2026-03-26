/**
 * Income Tax Calculation Utility (India)
 * Supports FY 2024-25 and FY 2025-26
 */

export type AssessmentYear = "2025-26" | "2026-27";
export type AgeGroup = "below60" | "60to80" | "above80";
export type TaxpayerCategory = "individual" | "huf" | "aopi" | "boii" | "ajp";

export interface IncomeDetails {
  grossSalary: number;
  allowancesExempt: number;
  housePropertyIncome: number; // Net (after 30% standard deduction for let out)
  capitalGainsSTCG: number;
  capitalGainsLTCG: number;
  otherSourcesIncome: number;
}

export interface DeductionDetails {
  section80C: number;
  section80D: number;
  section80G: number;
  section80TTA: number;
  others: number;
}

export interface TaxResult {
  taxableIncome: number;
  basicTax: number;
  rebate87A: number;
  surcharge: number;
  cess: number;
  totalTax: number;
  standardDeduction: number;
}

export const calculateTax = (
  ay: AssessmentYear,
  ageGroup: AgeGroup,
  income: IncomeDetails,
  deductions: DeductionDetails,
  isNewRegime: boolean
): TaxResult => {
  const isFY2526 = ay === "2026-27";
  
  // 1. Calculate Gross Total Income
  let grossTotalIncome = 
    income.grossSalary + 
    income.housePropertyIncome + 
    income.capitalGainsSTCG + 
    income.capitalGainsLTCG + 
    income.otherSourcesIncome;

  // 2. Standard Deduction
  let stdDeduction = 0;
  if (income.grossSalary > 0) {
    if (isNewRegime) {
      stdDeduction = 75000; // Both FY 24-25 and 25-26 have 75k SD in New Regime (Budget July 24 update)
    } else {
      stdDeduction = 50000;
    }
  }

  // 3. Taxable Income (Partial Calculation for Rebate)
  let taxableIncome = grossTotalIncome - stdDeduction - income.allowancesExempt;

  // Apply Chapter VI-A deductions (only for Old Regime)
  if (!isNewRegime) {
    const totalDeductions = 
      Math.min(150000, deductions.section80C) + 
      deductions.section80D + 
      deductions.section80G + 
      deductions.section80TTA + 
      deductions.others;
    taxableIncome -= totalDeductions;
  }

  taxableIncome = Math.max(0, taxableIncome);

  // 4. Calculate Basic Tax based on Slabs
  let basicTax = 0;

  if (isNewRegime) {
    if (isFY2526) {
      // FY 2025-26 New Regime Slabs (Budget 2025)
      if (taxableIncome > 2400000) basicTax += (taxableIncome - 2400000) * 0.30 + 340000;
      else if (taxableIncome > 2000000) basicTax += (taxableIncome - 2000000) * 0.25 + 240000;
      else if (taxableIncome > 1600000) basicTax += (taxableIncome - 1600000) * 0.20 + 160000;
      else if (taxableIncome > 1200000) basicTax += (taxableIncome - 1200000) * 0.15 + 100000;
      else if (taxableIncome > 800000) basicTax += (taxableIncome - 800000) * 0.10 + 20000;
      else if (taxableIncome > 400000) basicTax += (taxableIncome - 400000) * 0.05;
    } else {
      // FY 2024-25 New Regime Slabs
      if (taxableIncome > 1500000) basicTax += (taxableIncome - 1500000) * 0.30 + 150000;
      else if (taxableIncome > 1200000) basicTax += (taxableIncome - 1200000) * 0.20 + 90000;
      else if (taxableIncome > 1000000) basicTax += (taxableIncome - 1000000) * 0.15 + 60000;
      else if (taxableIncome > 700000) basicTax += (taxableIncome - 700000) * 0.10 + 30000;
      else if (taxableIncome > 300000) basicTax += (taxableIncome - 300000) * 0.05;
    }
  } else {
    // Old Regime Slabs
    let slab0 = 250000;
    if (ageGroup === "60to80") slab0 = 300000;
    else if (ageGroup === "above80") slab0 = 500000;

    if (taxableIncome > 1000000) basicTax += (taxableIncome - 1000000) * 0.30 + 112500 - (slab0 > 250000 ? (slab0 - 250000) * 0.05 : 0);
    else if (taxableIncome > 500000) basicTax += (taxableIncome - 500000) * 0.20 + (500000 - slab0) * 0.05;
    else if (taxableIncome > slab0) basicTax += (taxableIncome - slab0) * 0.05;

    // Adjust for senior/super senior in old regime (simpler logic)
    if (ageGroup === "60to80") {
        basicTax = 0;
        if (taxableIncome > 1000000) basicTax = (taxableIncome - 1000000) * 0.30 + 110000;
        else if (taxableIncome > 500000) basicTax = (taxableIncome - 500000) * 0.20 + 10000;
        else if (taxableIncome > 300000) basicTax = (taxableIncome - 300000) * 0.05;
    } else if (ageGroup === "above80") {
        basicTax = 0;
        if (taxableIncome > 1000000) basicTax = (taxableIncome - 1000000) * 0.30 + 100000;
        else if (taxableIncome > 500000) basicTax = (taxableIncome - 500000) * 0.20;
    }
  }

  // 5. Rebate u/s 87A
  let rebate = 0;
  if (isNewRegime) {
    if (isFY2526) {
      if (taxableIncome <= 1200000) rebate = basicTax; // Up to 12L free in FY 25-26 New Regime
    } else {
      if (taxableIncome <= 700000) rebate = basicTax; // Up to 7L free in FY 24-25 New Regime
    }
  } else {
    if (taxableIncome <= 500000) rebate = Math.min(basicTax, 12500); // Up to 5L free in Old Regime
  }

  let taxAfterRebate = Math.max(0, basicTax - rebate);

  // 6. Surcharge
  let surcharge = 0;
  const surchargeThresholds = [5000000, 10000000, 20000000, 50000000];
  const surchargeRates = isNewRegime ? [0.10, 0.15, 0.25, 0.25] : [0.10, 0.15, 0.25, 0.37];

  if (taxableIncome > surchargeThresholds[3]) surcharge = taxAfterRebate * surchargeRates[3];
  else if (taxableIncome > surchargeThresholds[2]) surcharge = taxAfterRebate * surchargeRates[2];
  else if (taxableIncome > surchargeThresholds[1]) surcharge = taxAfterRebate * surchargeRates[1];
  else if (taxableIncome > surchargeThresholds[0]) surcharge = taxAfterRebate * surchargeRates[0];

  // TODO: Marginal Relief (simplified for now)

  // 7. Cess (4%)
  const cess = (taxAfterRebate + surcharge) * 0.04;

  return {
    taxableIncome,
    basicTax,
    rebate87A: rebate,
    surcharge,
    cess,
    totalTax: taxAfterRebate + surcharge + cess,
    standardDeduction: stdDeduction
  };
};
