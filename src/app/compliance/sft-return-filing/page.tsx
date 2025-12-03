
'use client';

import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { QuoteForm } from '@/components/quote-form';
import { Phone, Mail, CheckCircle2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import Link from 'next/link';

const whoMustFile = [
    { entity: "Banks & Co-operative Banks", examples: "Deposits, payments, credit card bills" },
    { entity: "Post Offices", examples: "Savings and fixed deposits" },
    { entity: "Companies issuing shares/debentures", examples: "Buy-back, allotment, etc." },
    { entity: "Mutual Funds / AMC", examples: "Units purchased or sold" },
    { entity: "Registrar/Sub-Registrar", examples: "Purchase or sale of immovable property" },
    { entity: "NBFCs and Institutions", examples: "Loans or credit aggregating specified thresholds" },
    { entity: "Professionals / Traders / Sellers", examples: "If high-value transactions recorded in books" },
];

const whyImportant = [
    "Enhances tax transparency and reduces risk of tax scrutiny",
    "Matches high-value transactions with reported income",
    "Mandatory for banks, financial institutions, registrars, and others",
    "Failure to file attracts severe penalties and notices",
];

const transactionsToReport = [
    { type: "Cash deposits in savings account", threshold: "₹10,00,000 or more" },
    { type: "Cash deposits in current account", threshold: "₹50,00,000 or more" },
    { type: "Credit card bill payment in cash", threshold: "Above ₹1,00,000" },
    { type: "Credit card bill payment (any mode)", threshold: "Above ₹10,00,000" },
    { type: "Sale/purchase of immovable property", threshold: "₹30,00,000 or more" },
    { type: "Cash receipt for sale of goods/services", threshold: "Above ₹2,00,000" },
    { type: "Investment in mutual funds, bonds, shares", threshold: "₹10,00,000 or more" },
    { type: "Fixed Deposit (FD) transactions", threshold: "₹10,00,000 or more" },
];

const requiredDocs = [
    "PAN & TAN of reporting entity",
    "Entity type and nature of business",
    "List of high-value transactions with PANs of customers/clients",
    "Financial summary as per books",
    "XML file in correct schema (prepared via validation utility)",
    "Digital Signature Certificate (DSC) or Aadhaar e-verify",
    "Previous year’s SFT (if any)",
];

const penalties = [
    { nonCompliance: "Not filing SFT (Form 61A)", penalty: "₹500/day (up to ₹1,00,000)" },
    { nonCompliance: "Wrong or incomplete filing", penalty: "₹50,000" },
    { nonCompliance: "Non-response to notice under Section 285BA(5)", penalty: "Additional ₹1,000/day" },
];

const filingSteps = [
    "Register on Reporting Portal – https://report.insight.gov.in",
    "Generate Entity Identification Number (RE ID)",
    "Prepare SFT XML using Reporting Utility (provided by CBDT)",
    "Validate and Upload XML File",
    "Submit Verification Statement (with DSC or EVC)",
    "Save Acknowledgment Receipt for record",
];

const latestAmendments = [
    "Increased Monitoring via AIS/26AS: Non-filing or wrong filing of SFT leads to mismatch alerts in taxpayer profiles.",
    "Real Time Validation: PAN verification is now mandatory at the time of reporting.",
    "Auto Population for ITR Filing: SFT data is used by the department to pre-fill Form ITR.",
    "New SFT Categories: Reporting now includes foreign remittances (under LRS), digital asset transactions, and buybacks.",
    "Stringent Penalties: Delayed or incorrect filing attracts penalties under Section 271FA and Section 285BA(5).",
    "Wider Scope Under Rule 114E: New classes of non-banking entities (e.g., fintechs, online platforms) may be required to report.",
    "AIS & TIS Integration: SFT data is now directly reflected in the taxpayer’s AIS (Annual Information Statement) & TIS (Taxpayer Information Summary).",
    "Auto Scrutiny of High Value Transactions: AI-backed alerts are sent for mismatches between SFT data and ITRs.",
    "Revised Technical Schema for Form 61A: Improved error validation and XML structure on the Reporting Portal.",
];

const howWeHelp = [
    { title: "Eligibility Assessment", description: "Identify whether your business or institution is liable to file SFT" },
    { title: "Transaction Review & PAN Mapping", description: "Match transactions with client PANs and categorize under Rule 114E" },
    { title: "Form 61A Preparation & Validation", description: "Prepare XML in correct schema using SFT utility and validate against technical errors" },
    { title: "Online Submission via Reporting Portal", description: "Upload the report and generate Acknowledgement Number" },
    { title: "Post Filing Compliance Support", description: "Help respond to any queries or notices under Section 285BA(5)" },
];

const whyChooseUs = [
    "Expert Handling of Form 61A Preparation & Filing",
    "Correct PAN Mapping & Data Validation",
    "Regulatory Guidance under Section 285BA",
    "Avoid Penalties with Timely Filing",
    "Bulk Data Processing for Banks, NBFCs & Registrars",
    "Dedicated Support for Reporting Portal Registration",
];


export default function SFTReturnFilingPage() {
  return (
    <main>
       <div className="py-6 bg-secondary">
        <div className="container mx-auto px-4">
            <Breadcrumbs
            items={[
                { label: 'Home', href: '/' },
                { label: 'Compliance', href: '/compliance' },
                { label: 'SFT Return Filing Services' },
            ]}
            />
        </div>
      </div>

      <section id="service-details" className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
                <h1 className="text-3xl md:text-4xl font-bold font-headline mb-4">
                    SFT Return Filing Services
                </h1>

                <div>
                    <h2 className="text-2xl font-bold font-headline mb-4 text-primary">What is SFT Return?</h2>
                    <p className="text-muted-foreground text-justify mb-4">
                        SFT (Statement of Financial Transactions), formerly known as Annual Information Return (AIR), is a report filed by specified entities under Section 285BA of the Income Tax Act, 1961, to the Income Tax Department disclosing high-value financial transactions undertaken by individuals and businesses.
                    </p>
                    <p className="text-muted-foreground text-justify mb-4">
                        It plays a critical role in income tax surveillance, profiling, and compliance via the Annual Information Statement (AIS) and Form 26AS of taxpayers.
                    </p>
                     <p className="text-muted-foreground text-justify">
                        SFT filing is not a tax return but a compliance return. It must be filed annually by specific persons/entities responsible for registering or recording such high-value financial transactions.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Who Must File SFT Returns?</h2>
                    <p className="text-muted-foreground text-justify mb-4">
                        The following entities are obligated to file SFT Form 61A:
                    </p>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Entity Type</TableHead>
                                <TableHead>Examples</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {whoMustFile.map((item, index) => (
                                <TableRow key={index}>
                                    <TableCell className="font-medium">{item.entity}</TableCell>
                                    <TableCell>{item.examples}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>

                <div>
                    <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Why is SFT Return Important?</h2>
                    <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                        {whyImportant.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
                
                <div>
                    <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Nature of Transactions to be Reported</h2>
                     <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Transaction Type</TableHead>
                                <TableHead>Threshold</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {transactionsToReport.map((item, index) => (
                                <TableRow key={index}>
                                    <TableCell className="font-medium">{item.type}</TableCell>
                                    <TableCell>{item.threshold}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                     </Table>
                     <p className="text-muted-foreground text-justify mt-4 text-sm">
                        <strong>Note:</strong> Even a single transaction crossing the prescribed limit triggers SFT reporting.
                    </p>
                </div>
                
                <div>
                    <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Documents & Information Required</h2>
                    <ul className="space-y-3 text-muted-foreground">
                        {requiredDocs.map((doc, index) => (
                            <li key={index} className="flex items-start gap-3">
                                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                                <span>{doc}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                
                <div>
                    <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Due Date for SFT Return – AY 2025-26</h2>
                     <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                        <li>
                            <strong>31st May 2025</strong> for Financial Year ending 31st March 2025
                            <ul className="list-disc pl-5 mt-2">
                                <li>Filed using <strong>Form 61A</strong> through the <Link href="https://report.insight.gov.in" target="_blank" className="text-primary hover:underline">Reporting Portal</Link></li>
                                <li>Entities must register separately on the Reporting Portal (different from income tax portal)</li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Penalty for Non-Filing or Inaccurate Filing</h2>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Non-Compliance</TableHead>
                                <TableHead>Penalty</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {penalties.map((item, index) => (
                                <TableRow key={index}>
                                    <TableCell className="font-medium">{item.nonCompliance}</TableCell>
                                    <TableCell>{item.penalty}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                     </Table>
                </div>
                
                <div>
                    <h2 className="text-2xl font-bold font-headline mb-4 text-primary">How to File SFT Return (Form 61A)</h2>
                    <p className="font-semibold mb-2">Step-by-Step Process:</p>
                    <ol className="space-y-3 list-decimal pl-5 text-muted-foreground">
                        {filingSteps.map((step, index) => (
                            <li key={index}>{step.includes('https') ? <Link href="https://report.insight.gov.in" target="_blank" className="text-primary hover:underline">{step}</Link> : step}</li>
                        ))}
                    </ol>
                </div>
                
                <div>
                    <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Latest Amendments – AY 2025-26</h2>
                    <p className="text-muted-foreground text-justify mb-4">
                        As per Finance Act, 2024 and CBDT updates:
                    </p>
                    <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                        {latestAmendments.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
                
                <div>
                    <h2 className="text-2xl font-bold font-headline mb-4 text-primary">How CACSFinacc Helps You File SFT Accurately</h2>
                    <ol className="space-y-4 list-decimal pl-5">
                        {howWeHelp.map((step, index) => (
                            <li key={index}>
                                <p className="font-semibold">{step.title}</p>
                                <p className='text-muted-foreground'>{step.description}</p>
                            </li>
                        ))}
                    </ol>
                </div>
                
                <div>
                    <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Why Choose CACSFinacc for SFT Filing?</h2>
                    <ul className="space-y-3 text-muted-foreground">
                        {whyChooseUs.map((item, index) => (
                             <li key={index} className="flex items-start gap-3">
                                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                                <span>{item}</span>
                            </li>
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
