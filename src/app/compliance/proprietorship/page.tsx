
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

const itrForms = [
    { category: "Business income under presumptive scheme (Sec 44AD/44ADA)", form: "ITR 4" },
    { category: "Business/profession with audit or regular books", form: "ITR 3" },
];

const taxAuditTriggers = [
    "Business turnover > ₹1 crore (or ₹10 crore if cash transactions <5%)",
    "Professional receipts > ₹50 lakhs",
    "Lower profit declared under presumptive scheme and income > basic exemption limit",
];

const gstRegistrationConditions = [
    { condition: "Mandatory if", items: ["turnover exceeds ₹20 lakh (services) / ₹40 lakh (goods)", "Required for interstate supply or e-commerce participation", "Compulsory for export of goods/services"] },
    { condition: "Monthly/Quarterly Returns:", items: ["GSTR 1, GSTR 3B, and GSTR 9 (annual return)", "GSTR 2B reconciliation for eligible ITC"] },
];

const tdsComplianceTasks = [
    "Deduct and deposit TDS on salaries, rent, contractor payments, etc.",
    "File quarterly TDS returns (24Q/26Q as applicable)",
    "Issue Form 16/16A to vendors/employees",
];

const booksOfAccountsConditions = [
    { condition: "Mandatory if:", items: ["Income > ₹2.5 lakh (professionals)", "Turnover > ₹10 lakh (business)", "Claimed lower income than 44AD/ADA or opted out"] },
    { condition: "Must maintain:", items: ["cash book, ledgers, sales/purchase register, bank book, journal, etc."] },
];

const advanceTaxConditions = [
    "Applicable if tax liability > ₹10,000 in a financial year",
    "Payable in 4 installments as per Income Tax schedule",
];

const requiredDocs = [
    "PAN and Aadhaar of proprietor",
    "Bank statements (business-related)",
    "Sales and purchase bills",
    "Expense vouchers/invoices",
    "GST login credentials (if registered)",
    "TDS challans, if applicable",
    "Investment proofs for deductions",
    "Rent agreement or shop act license (for address proof)",
];

const regulatoryUpdates = [
    { title: "Higher Tax Audit Threshold", items: ["Audit under Section 44AB required if turnover exceeds ₹1 Crore.", "If cash receipts and cash payments ≤ 5%, threshold extended to ₹5 Crore."] },
    { title: "Revised Presumptive Scheme", items: ["Under Section 44AD, presumptive taxation limit is now ₹3 Crores (for businesses with non-cash turnover).", "Income is presumed at 8% of turnover (6% if digital)."] },
    { title: "Enhanced Reporting in ITR", items: ["Reporting of cash deposits, foreign travel, and crypto transactions is now mandatory."] },
    { title: "E-Invoicing Mandate (GST)", items: ["E-invoicing is now compulsory for businesses exceeding ₹5 Crores turnover under GST."] },
];

const annualChecklist = [
    { compliance: "Income Tax Return Filing", description: "ITR-3/ITR-4 for business income under normal/presumptive scheme", dueDate: "31st July / 31st Oct (if audit)" },
    { compliance: "Tax Audit (if applicable)", description: "Audit under Sec. 44AB for high-turnover businesses", dueDate: "30th September 2025" },
    { compliance: "Advance Tax", description: "Required if tax liability exceeds ₹10,000", dueDate: "Quarterly (15th Jun/Sept/Dec/Mar)" },
    { compliance: "TDS Payment", description: "TDS deducted must be deposited monthly", dueDate: "By 7th of next month" },
    { compliance: "TDS Return Filing", description: "Quarterly filing for deducted TDS (24Q/26Q)", dueDate: "31st July, Oct, Jan, May" },
    { compliance: "GST Return Filing", description: "GSTR-1 and GSTR-3B monthly/quarterly based on turnover", dueDate: "11th and 20th of every month" },
    { compliance: "GST Annual Return", description: "GSTR-9 (if turnover exceeds ₹2 Crores)", dueDate: "31st December 2025" },
    { compliance: "Books of Account", description: "Must be maintained for 6 years (if turnover > ₹25 lakhs or income > ₹2.5 lakhs)", dueDate: "Ongoing" },
];

const oldTaxSlabs = [
    { range: "Up to ₹2.5 Lakhs", rate: "NIL" },
    { range: "₹2.5 – ₹5 Lakhs", rate: "5%" },
    { range: "₹5 – ₹10 Lakhs", rate: "20%" },
    { range: "Above ₹10 Lakhs", rate: "30%" },
];

const whyChooseUs = [
    "End-to-End Filing – ITR, GST, TDS & Audit",
    "Tax Saving Planning – Maximize deductions",
    "Digital Bookkeeping – Tally, Zoho, QuickBooks supported",
];

const proprietorPlans = [
    { title: "Starter Plan", description: "GST Return + ITR Filing + Basic TDS" },
    { title: "Growth Plan", description: "Audit + GST + Full TDS + Advance Tax Calculation" },
    { title: "Premium Plan", description: "Monthly Bookkeeping + Virtual CFO + MIS Reports" },
];

export default function ProprietorshipCompliancePage() {
  return (
    <main>
       <div className="py-6 bg-secondary">
        <div className="container mx-auto px-4">
            <Breadcrumbs
            items={[
                { label: 'Home', href: '/' },
                { label: 'Compliance', href: '/compliance' },
                { label: 'Proprietorship Compliance' },
            ]}
            />
        </div>
      </div>

      <section id="service-details" className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
                <h1 className="text-3xl md:text-4xl font-bold font-headline mb-4">
                    Proprietorship Compliance Services
                </h1>

                <div>
                    <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Proprietorship Compliance</h2>
                    <p className="text-muted-foreground text-justify">
                        A sole proprietorship in India is the most basic business setup, where a single individual owns and runs the business.
                    </p>
                </div>
                
                <div>
                    <h2 className="text-2xl font-bold font-headline mb-4 text-primary">What is a Sole Proprietorship?</h2>
                    <p className="text-muted-foreground text-justify mb-4">
                        A Sole Proprietorship is the simplest and most common form of business in India where an individual owns, operates, and manages the entire business. Though it offers minimal regulatory formalities, the owner must still comply with all tax and statutory requirements.
                    </p>
                    <p className="text-muted-foreground text-justify">
                        Even if your business is unregistered or operating under your personal PAN, you are still legally obligated to file taxes and maintain books of account if income crosses prescribed thresholds.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Key Proprietorship Compliances (AY 2025-26)</h2>
                    <ol className="space-y-6 list-decimal pl-5">
                        <li>
                            <p className="font-semibold">Income Tax Filing (ITR):</p>
                            <Table className="my-2">
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Category</TableHead>
                                        <TableHead>Applicable ITR Form</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {itrForms.map((item, index) => (
                                        <TableRow key={index}>
                                            <TableCell className="font-medium">{item.category}</TableCell>
                                            <TableCell>{item.form}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                            <ul className="list-disc pl-5 text-muted-foreground space-y-1 mt-2">
                                <li>Tax slabs applicable as per individual taxation regime (Old/New)</li>
                                <li>Option to opt for presumptive taxation if turnover ≤ ₹2 crore (business) or ₹50 lakh (profession)</li>
                                <li>Books of accounts and audit mandatory if income/turnover exceeds limits</li>
                            </ul>
                        </li>
                        <li>
                            <p className="font-semibold">Tax Audit (Section 44AB):</p>
                            <ul className="list-disc pl-5 text-muted-foreground space-y-1 mt-2">
                                {taxAuditTriggers.map((item, index) => <li key={index}>{item}</li>)}
                            </ul>
                        </li>
                        <li>
                            <p className="font-semibold">GST Registration & Filing:</p>
                             <ul className="list-disc pl-5 text-muted-foreground space-y-2 mt-2">
                                {gstRegistrationConditions.map((cat, index) => (
                                    <li key={index}>
                                        {cat.condition}
                                        <ul className='list-disc pl-5'>
                                            {cat.items.map((item, subIndex) => <li key={subIndex}>{item}</li>)}
                                        </ul>
                                    </li>
                                ))}
                            </ul>
                        </li>
                        <li>
                            <p className="font-semibold">TDS Compliance (if applicable):</p>
                             <ul className="list-disc pl-5 text-muted-foreground space-y-1 mt-2">
                                {tdsComplianceTasks.map((item, index) => <li key={index}>{item}</li>)}
                            </ul>
                        </li>
                        <li>
                            <p className="font-semibold">Books of Accounts (Section 44AA):</p>
                             <ul className="list-disc pl-5 text-muted-foreground space-y-2 mt-2">
                                {booksOfAccountsConditions.map((cat, index) => (
                                     <li key={index}>
                                        {cat.condition}
                                        <ul className='list-disc pl-5'>
                                            {cat.items.map((item, subIndex) => <li key={subIndex}>{item}</li>)}
                                        </ul>
                                    </li>
                                ))}
                            </ul>
                        </li>
                        <li>
                            <p className="font-semibold">Advance Tax Payments:</p>
                             <ul className="list-disc pl-5 text-muted-foreground space-y-1 mt-2">
                                {advanceTaxConditions.map((item, index) => <li key={index}>{item}</li>)}
                            </ul>
                        </li>
                         <li>
                            <p className="font-semibold">Professional Tax (State-wise):</p>
                             <ul className="list-disc pl-5 text-muted-foreground space-y-1 mt-2">
                                <li>Applicable in states like Maharashtra, Karnataka, West Bengal, etc.</li>
                                <li>Monthly filing and payment if registered</li>
                            </ul>
                        </li>
                    </ol>
                </div>
                
                <div>
                    <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Key Documents for Proprietorship Compliance</h2>
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
                    <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Regulatory Updates for AY 2025-26</h2>
                    <p className="text-muted-foreground text-justify mb-4">
                        As per the Finance Act, 2024 and updated provisions effective for Assessment Year 2025-26, proprietorships must follow:
                    </p>
                    <ol className="space-y-4 list-decimal pl-5">
                        {regulatoryUpdates.map((update, index) => (
                            <li key={index}>
                                <p className="font-semibold">{update.title}</p>
                                <ul className='list-disc pl-5 text-muted-foreground'>
                                    {update.items.map((item, subIndex) => (
                                        <li key={subIndex}>{item}</li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ol>
                </div>
                
                <div>
                    <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Annual Compliance Checklist for Proprietorship (AY 2025-26)</h2>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Compliance</TableHead>
                                <TableHead>Description</TableHead>
                                <TableHead>Due Date</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {annualChecklist.map((item, index) => (
                                <TableRow key={index}>
                                    <TableCell className="font-medium">{item.compliance}</TableCell>
                                    <TableCell>{item.description}</TableCell>
                                    <TableCell>{item.dueDate}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>

                <div>
                    <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Taxation of Sole Proprietorship</h2>
                    <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                        <li>Taxed under individual slab rates (no separate business tax rate)</li>
                        <li>Eligible for standard deductions, Section 80C to 80U deductions</li>
                        <li>No separate PAN needed – business taxed in owner's PAN</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Slab Rates for AY 2025-26 (Old Regime)</h2>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Income Range</TableHead>
                                <TableHead>Tax Rate</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {oldTaxSlabs.map((item, index) => (
                                <TableRow key={index}>
                                    <TableCell className="font-medium">{item.range}</TableCell>
                                    <TableCell>{item.rate}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    <p className="text-muted-foreground text-sm mt-2">
                        <strong>Note:</strong> Under the New Tax Regime (Section 115BAC), revised slab benefits apply.
                    </p>
                </div>
                
                 <div>
                    <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Why Choose CACSFinacc for Proprietorship Compliance?</h2>
                    <ul className="space-y-3 text-muted-foreground">
                        {whyChooseUs.map((item, index) => (
                            <li key={index} className="flex items-start gap-3">
                                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                 <div>
                    <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Our Specialized Proprietor Plans Include:</h2>
                    <ul className="space-y-3 text-muted-foreground">
                        {proprietorPlans.map((item, index) => (
                            <li key={index} className="flex items-start gap-3">
                                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                                <div>
                                    <span className="font-semibold text-foreground">{item.title}:</span> {item.description}
                                </div>
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
