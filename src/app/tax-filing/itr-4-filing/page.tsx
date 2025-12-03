
'use client';

import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { QuoteForm } from '@/components/quote-form';
import { Phone, Mail } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const whoShouldFile = [
    "You are a resident individual, HUF, or firm (non-LLP)",
    "Your income is from business or profession and you have opted for presumptive taxation",
    "Total income does not exceed ₹50 lakhs",
    "You do not have foreign assets, capital gains, agricultural income > ₹5,000, or more than one house property",
];

const notEligible = [
    "Are a director in a company.",
    "Have held unlisted equity shares at any time during the previous year.",
    "Possess any asset or financial interest located outside India.",
    "Have income from any source outside India.",
    "Are a person in whose case payment or deduction of tax has been deferred on ESOP.",
    "Have any brought forward loss or loss to be carried forward under any head of income.",
];

const eligibilityCriteria = [
    "Total Income: The total Income should not exceed Rs. 50 lakhs.",
    "The Income should be derived from any of the following sources:",
];

const incomeSources = [
    "Income from Salary or Income from Pension.",
    "Income from One House Property.",
    "Interest income and/or Income from family pension taxable under Other Sources.",
    "Income from a business, which is computed on a presumptive basis (Gross Turnover up to Rs. 2 crores).",
    "Income from a business, computed on a presumptive basis (Income from goods carriage up to ten vehicles).",
    "Income from a profession, computed on a presumptive basis under Section 44ADA (Gross receipt up to Rs. 50 lakh).",
];

const incomeLimits = [
    { section: "44AD", type: "Business", presumption: "6% (digital) or 8% (cash) of gross turnover", turnover: "₹2 crore" },
    { section: "44ADA", type: "Profession", presumption: "50% of gross receipts", turnover: "₹50 lakh" },
    { section: "44AE", type: "Transport", presumption: "₹1,000 per ton/day per vehicle", turnover: "NA" },
];

const keyAmendments = [
    {
        title: "Inclusion of Long-Term Capital Gains (LTCG) Reporting:",
        description: "Taxpayers can now report LTCG up to ₹1.25 lakh under Section 112A directly in ITR-4, provided there are no capital losses to carry forward. This change simplifies the filing process for small investors.",
    },
    {
        title: "Enhanced Deductions and Disclosures:",
        description: "Deductions under Sections 80C to 80U must now be selected from a drop-down menu in the e-filing portal, and the exact clause/sub-section must be specified. Income from retirement accounts maintained abroad (Section 89A) has new fields for better relief tracking.",
    },
    {
        title: "Aadhaar Enrollment ID Removed:",
        description: "The 28-digit Aadhaar Enrolment ID is no longer accepted. The field now only accepts valid 12-digit Aadhaar Numbers.",
    },
    {
        title: "Additional Column under Schedule TDS:",
        description: "An additional column has been added under the Schedule - TDS Details to specify the section under which TDS is deducted.",
    },
    {
        title: "Tax Regime Selection (Section 115BAC):",
        items: [
            "Default Tax Regime: The new tax regime is now the default for individuals.",
            "Opting Out: Eligible taxpayers can opt out and choose the old regime each year directly in the ITR.",
            "Form 10-IEA: If a taxpayer opted out of the new regime in AY 2024-25, they must declare and confirm their choice or change it for AY 2025-26.",
            "First-Time Opt-Out: First-time opt-outs in AY 2025-26 must provide Form 10-IEA acknowledgment details. Form 10-IEA must be filed before the due date of return filing.",
        ]
    },
    {
        title: "Enhanced disclosures under presumptive taxation for better compliance tracking"
    },
    {
        title: "New declaration for opt-out of Section 44AD/ADA in future years"
    },
    {
        title: "Integration with AIS (Annual Information Statement) and Form 26AS to pre-fill data"
    },
    {
        title: "VDAs (Crypto Assets) – ITR-4 not applicable if income includes virtual digital assets"
    },
    {
        title: "Updated validation with GST turnover, TDS credit, and advance tax"
    }
];

const keyDisclosures = [
    "Gross turnover or receipts",
    "Gross profit computed as per presumptive scheme",
    "Details of Bank accounts and cash balance",
    "Details of advance tax/self-assessment tax paid",
    "Details of partner/share in firm, if applicable",
    "Taxpayer’s opt-in or opt-out status under presumptive income",
];

const filingTips = [
    "Verify Eligibility: Ensure you meet the criteria for ITR-4 before proceeding.",
    "Report All Income: Accurately report all sources of income, including LTCG, salary, and other sources.",
    "Maintain Documentation: Keep records of all deductions and exemptions claimed.",
    "File Timely: Adhere to the due dates to avoid penalties.",
];

const filingProcess = [
    "Consultation & Tax Profiling: Analyze business/profession type and eligibility for presumptive taxation",
    "Data Collection: Collect bank statements, invoice summary, GST returns, and investment proofs",
    "Computation of Taxable Income: Based on turnover/receipts with applicable presumptive percentage",
    "Tax Filing & E-Verification: Submit ITR on the Income Tax portal and verify using Aadhaar OTP, EVC, or net banking",
];

const whyChooseUs = [
    "Expert advisory on presumptive vs regular taxation",
    "Seamless filing with GST & TDS reconciliation",
    "Tax planning and savings strategies customized for your profession",
];

export default function ITR4FilingPage() {
  return (
    <main>
      <div className="py-6 bg-secondary">
        <div className="container mx-auto px-4">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Tax Filing', href: '/tax-filing' },
              { label: 'ITR-4 Filing' },
            ]}
          />
        </div>
      </div>

      <section id="service-details" className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <h1 className="text-3xl md:text-4xl font-bold font-headline mb-4">
                ITR-4 Filing: Simplified Tax Returns with CACSFinacc
              </h1>

              <div>
                <p className="text-muted-foreground text-justify">
                  The ITR-4 Form, commonly referred to as the Sugam form, is specifically designed for taxpayers who have opted for the presumptive income scheme outlined in Section 44AD, Section 44ADA, and Section 44AE of the Income Tax Act. It is mandatory for eligible taxpayers to complete and submit this form.
                </p>
                <p className="text-muted-foreground text-justify mt-4">
                  As the due date for Income Tax Return (ITR) filing approaches, it's crucial for taxpayers to understand the recent updates to ITR-4 (Sugam) for Assessment Year (AY) 2025–26. These changes, introduced by the Central Board of Direct Taxes (CBDT), aim to simplify the filing process for small taxpayers and ensure compliance with the latest tax regulations.
                </p>
                <p className="text-muted-foreground text-justify mt-4">
                  CACSFinacc Services offers expert ITR-4 filing services to help you navigate the presumptive taxation scheme and ensure accurate, timely, and compliant tax returns.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">What is ITR-4?</h2>
                <p className="text-muted-foreground text-justify mb-4">
                  ITR-4 (Sugam) is a simplified Income Tax Return form applicable to resident individuals, HUFs, and Firms (other than LLPs) who opt for presumptive income scheme under:
                </p>
                <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                  <li><strong>Section 44AD – Business income</strong></li>
                  <li><strong>Section 44ADA – Professional income (specified professions)</strong></li>
                  <li><strong>Section 44AE – Income from goods carriage (transport business)</strong></li>
                </ul>
                <p className="text-muted-foreground text-justify mt-4">
                  Not applicable for companies, LLPs, or taxpayers with foreign assets or income.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Who Should File ITR-4 for AY 2025-26?</h2>
                <p className="text-muted-foreground text-justify mb-4">You should file ITR-4 if:</p>
                <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                  {whoShouldFile.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <p className="text-muted-foreground text-justify mt-4">However, ITR-4 is not applicable if you:</p>
                <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                  {notEligible.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">What is a Presumptive Taxation Scheme?</h2>
                <p className="text-muted-foreground text-justify">
                  The presumptive taxation scheme is designed to simplify tax compliance for certain individuals and businesses. Under Section 44AA of the Income Tax Act, individuals and businesses engaged in specific activities are typically required to maintain detailed accounting records. However, Sections 44AD, 44ADA, and 44AE offer relief to small taxpayers by allowing them to estimate their Income at prescribed rates, reducing the burden of maintaining extensive financial records.
                </p>
                <p className="text-muted-foreground text-justify mt-4">
                  Here's a breakdown of these schemes for users of ITR4:
                </p>
                <div className="space-y-4 mt-4">
                    <div>
                        <h3 className="font-semibold text-lg">Section 44AD</h3>
                        <p className="text-muted-foreground text-justify">This scheme allows Resident Individuals, Resident Hindu Undivided Families (HUFs), and Resident Partnership Firms (excluding Limited Liability Partnerships) engaged in certain businesses to calculate their Income on an estimated basis, provided they meet specific conditions.</p>
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg">Section 44ADA</h3>
                        <p className="text-muted-foreground text-justify">Resident individuals in India who are professionals in fields specified under Section 44AA(1) can use this scheme to estimate their professional Income, subject to certain conditions.</p>
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg">Section 44AE</h3>
                        <p className="text-muted-foreground text-justify">This scheme is applicable to individuals, HUFs, Firms (excluding Limited Liability Partnerships), and other residents or non-residents engaged in the business of plying, leasing, or hiring goods carriages. They can estimate their Income under this scheme, provided they own not more than ten goods carriages during the previous year.</p>
                    </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Eligibility Criteria for Filing SUGAM (ITR-4) Form</h2>
                <p className="text-muted-foreground text-justify mb-4">To qualify for using the ITR-4 SUGAM form, the taxpayer must meet the following criteria for the assessment year:</p>
                <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                    {eligibilityCriteria.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                    <ul className='list-disc pl-5'>
                        {incomeSources.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Income Limits Under Presumptive Scheme</h2>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Section</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Income Presumption</TableHead>
      
                      <TableHead>Maximum Turnover</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {incomeLimits.map((item, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{item.section}</TableCell>
                        <TableCell>{item.type}</TableCell>
                        <TableCell>{item.presumption}</TableCell>
                        <TableCell>{item.turnover}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                    <p><strong>Important Notes:</strong></p>
                    <p>When Income is computed on a presumptive basis under sections 44AD, 44AE, or 44ADA, it is presumed to have been calculated after accounting for all allowances, depreciation, losses, or deductions as per the Income-tax Act. However, individuals incurring losses after applying the proviso to sub-section 3 of Section 44AE are required to file ITR-5.</p>
                    <p>If the taxpayer needs to combine the Income of another person, such as a spouse or minor child, with their own Income, the SUGAM form can only be used if the additional Income falls within the specified income categories mentioned above.</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">What’s New in ITR-4 for AY 2025-26? (CBDT Updates & Amendments)</h2>
                <ol className="space-y-4 list-decimal pl-5">
                    {keyAmendments.map((item, index) => (
                        <li key={index}>
                            <p className="font-semibold">{item.title}</p>
                            {item.description && <p className="text-muted-foreground">{item.description}</p>}
                            {item.items && (
                                <ul className="list-disc pl-5 text-muted-foreground mt-2 space-y-1">
                                    {item.items.map((subItem, subIndex) => (
                                        <li key={subIndex}>{subItem}</li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ol>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Key Disclosures in ITR-4</h2>
                <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                  {keyDisclosures.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Filing Tips for AY 2025–26</h2>
                <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                  {filingTips.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">ITR-4 Filing Process with CACSFinacc</h2>
                <ol className="space-y-3 list-decimal pl-5 text-muted-foreground">
                  {filingProcess.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ol>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Why Choose CACSFinacc for Your ITR-4 Filing?</h2>
                <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                  {whyChooseUs.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            
            <aside className="space-y-8">
              <QuoteForm />
              <Card className="bg-secondary">
                <CardHeader className="items-center">
                  <div className="bg-primary text-primary-foreground rounded-full p-3">
                    <Phone className="h-8 w-8" />
                  </div>
                  <CardTitle className="font-headline text-2xl mt-2">Have a Question?</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="flex items-center justify-center gap-2 mt-2 mb-1">
                    <Phone className="h-4 w-4" />
                    <span>+91 95916 33648</span>
                  </p>
                  <p className="flex items-center justify-center gap-2">
                    <Mail className="h-4 w-4" />
                    <a href="mailto:info@cacsfinaccservices.com" className="hover:text-primary">
                      info@cacsfinaccservices.com
                    </a>
                  </p>
                </CardContent>
              </Card>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
