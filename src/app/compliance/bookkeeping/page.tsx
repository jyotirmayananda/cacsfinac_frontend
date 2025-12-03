
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { QuoteForm } from '@/components/quote-form';
import { CheckCircle2, Phone, Mail } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const benefits = [
  'Business decision making',
  'Tax planning',
  'Cash flow management',
  'Investor confidence',
  'Regulatory compliance',
];

const whoNeedsIt = [
  'Businesses with turnover above ₹10 lakh (Sec 44AA IT Act)',
  'Professionals earning > ₹1.5 lakh or gross receipts > ₹2.5 lakh',
  'Companies under Companies Act, 2013',
  'Partnerships and LLPs',
  'NGOs/Trusts with foreign or grant income',
  'GST registered businesses',
];

const smallBusinessBenefits = [
    'avoid tax penalties',
    'access credit/loans',
    'plan budgets and expansions',
    'attract funding and investment',
];

const whyAccurateBooksMatter = [
  {
    func: 'Income Tax Filing',
    benefit: 'Accurate data to avoid notices, penalties, and over-taxation',
  },
  {
    func: 'GST Compliance',
    benefit: 'Prevent mismatches in ITC claims, ensure timely returns',
  },
  {
    func: 'Loan & Funding',
    benefit: 'Clean books help secure bank loans, investments & tenders',
  },
  {
    func: 'Investor Relations',
    benefit: 'Builds credibility and transparency',
  },
];

const coreServices = [
    {
        title: "Monthly/Quarterly Bookkeeping",
        items: ["Transaction classification & ledger posting", "Bank, cash, and payment reconciliations"]
    },
    {
        title: "Accounts Finalization",
        items: ["Trial balance, P&L account, balance sheet", "Ratio analysis and financial reporting"]
    },
    {
        title: "GST-Compliant Books",
        items: ["Mapping GSTR-1, 3B, and 2B with books", "Reconciliation of sales/purchase registers"]
    },
    {
        title: "TDS Integration",
        items: ["Accurate TDS deduction, entry booking, and quarterly reporting"]
    },
    {
        title: "Payroll Accounting",
        items: ["Salary ledger, statutory deductions (PF, ESI, PT), and payslip generation"]
    },
    {
        title: "Partner/Shareholder Accounting",
        items: ["Capital account tracking, profit-sharing ratios, drawings, and interest"]
    },
    {
        title: "Software-Based Accounting (Cloud & Offline)",
        items: ["Tally Prime | Zoho Books | QuickBooks | XERO | SAP | Excel-based templates"]
    }
];

const industriesServed = [
    'Manufacturing',
    'Professional Services (CA, CS, Lawyers)',
    'Startups & MSMEs',
    'Hospitality & Restaurants',
    'Retail Chains',
    'E-Commerce',
    'Healthcare Clinics & Hospitals',
];

const complianceCalendar = [
    { task: "GSTR-1 Filing", dueDate: "11th of next month" },
    { task: "GSTR-3B Filing", dueDate: "20th or 22/24 (QRMP)" },
    { task: "TDS Payment", dueDate: "7th of next month" },
    { task: "PF/ESI Payment", dueDate: "15th of next month" },
    { task: "Accounting Books Closure", dueDate: "By 5th of every month" },
    { task: "MIS/Financial Reports", dueDate: "By 10th of every month" },
    { task: "TDS Returns (Form 26Q)", dueDate: "31st July / 31st Oct / 31st Jan / 31st May" },
];

const requiredDocs = [
    "Bank statements (in Excel or PDF)",
    "Sales and purchase invoices",
    "Expense bills and vouchers",
    "GST login and returns (if applicable)",
    "TDS challans and TRACES reports",
    "Salary/payroll details",
    "Partnership deed or MoA (for entity setup)",
];

const regulatoryUpdates = [
    {
        title: "Revised Tax Audit Threshold",
        items: [
            "Audit under Section 44AB is mandatory if turnover exceeds ₹1 crore, unless 95% of transactions are digital, then threshold is ₹5 crores.",
            "Cash transactions <5% allows businesses up to ₹10 crore turnover to avoid tax audit."
        ]
    },
    {
        title: "Real-Time GST Reconciliation Mandated",
        items: [
            "GST departments are matching GSTR-3B, GSTR-1, and GSTR-2B. Proper bookkeeping is now critical to avoid mismatches and penalties."
        ]
    },
    {
        title: "E-Invoicing Extension",
        items: [
            "Businesses with turnover above ₹5 crores must now issue e-Invoices and maintain proper records under Rule 48(4) of the CGST Rules."
        ]
    },
    {
        title: "Form 3CD Expansion",
        items: [
            "Additional disclosure of related party transactions, loans, and interest received/payable is mandatory in tax audit reports."
        ]
    }
];

const outsourcingBenefits = [
    "Cost Efficiency – Save 40-60% vs. in-house accounting",
    "Data Security – 256-bit encryption and cloud-based access",
    "Error-Free Compliance – 100% accuracy in GST, TDS & ITR",
    "Scalability – We grow with your business",
    "Expert Access – Chartered Accountants & Tax Professionals on call",
];


export default function BookkeepingPage() {
  return (
    <main>
       <div className="py-6 bg-secondary">
        <div className="container mx-auto px-4">
            <Breadcrumbs
            items={[
                { label: 'Home', href: '/' },
                { label: 'Compliance', href: '/compliance' },
                { label: 'Accounting & Bookkeeping' },
            ]}
            />
        </div>
      </div>

      <section id="service-details" className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
                <h1 className="text-3xl md:text-4xl font-bold font-headline mb-4">
                    Accounting & Bookkeeping Services
                </h1>
                <h2 className="text-2xl font-bold font-headline mt-8 mb-4 text-primary">What is Accounting and Bookkeeping?</h2>
                <p className="text-muted-foreground text-justify mb-4">
                    Accounting is the process of classifying, interpreting, and summarizing financial data to assess the financial health of a business. Bookkeeping, on the other hand, involves the accurate recording of all financial transactions on a daily basis.
                </p>
                <p className="text-muted-foreground text-justify mb-8">
                    Together, they form the foundation for effective financial reporting, compliance, and strategic business decisions.
                </p>
                
                <div className="space-y-8">
                    <div>
                        <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Why Is Accounting & Bookkeeping Essential?</h2>
                        <p className="text-muted-foreground text-justify mb-4">
                            Accounting and bookkeeping form the financial backbone of any organization. Accurate and timely records are not just statutory requirements under the Income Tax Act, 1961, and GST laws, but also crucial for:
                        </p>
                        <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                            {benefits.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                        <p className="text-muted-foreground text-justify mt-4">
                            Whether you’re a startup, MSME, partnership, LLP, company, or NPO, outsourced, tech-enabled, and CA-reviewed accounting ensures you remain compliant and audit ready.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Who Needs Accounting & Bookkeeping?</h2>
                        <p className="font-semibold">Mandatory for:</p>
                        <ul className="space-y-3 pl-5 list-disc text-muted-foreground mb-4">
                            {whoNeedsIt.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                        <p className="font-semibold">Even small businesses benefit from proper books to:</p>
                         <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                            {smallBusinessBenefits.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Why Accurate Books Matter for Your Business</h2>
                         <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Function</TableHead>
                                    <TableHead>Benefit</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {whyAccurateBooksMatter.map((item, index) => (
                                    <TableRow key={index}>
                                        <TableCell className="font-medium">{item.func}</TableCell>
                                        <TableCell>{item.benefit}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                         </Table>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Our Core Accounting & Bookkeeping Services</h2>
                        <ul className="space-y-4">
                            {coreServices.map((service, index) => (
                            <li key={index} className="flex items-start gap-3">
                                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                                <div>
                                    <p className="font-semibold">{service.title}</p>
                                    <ul className='list-disc pl-5 text-muted-foreground'>
                                        {service.items.map((item, subIndex) => (
                                            <li key={subIndex}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Industries We Serve</h2>
                        <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-muted-foreground">
                             {industriesServed.map((item, index) => (
                                <li key={index} className="flex items-center gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                    <div>
                        <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Monthly Compliance Calendar (Sample)</h2>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Task</TableHead>
                                    <TableHead>Due Date</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {complianceCalendar.map((item, index) => (
                                    <TableRow key={index}>
                                        <TableCell className="font-medium">{item.task}</TableCell>
                                        <TableCell>{item.dueDate}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                         </Table>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Documents We Need to Start</h2>
                        <ul className="space-y-3 text-muted-foreground">
                            {requiredDocs.map((doc, index) => (
                                <li key={index} className="flex items-center gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                                    <span>{doc}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                     <div>
                        <h2 className="text-2xl font-bold font-headline mb-4 text-primary">What’s New in AY 2025-26? – Key Regulatory Updates</h2>
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
                        <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Benefits of Outsourcing to CACSFinacc</h2>
                         <ul className="space-y-3">
                            {outsourcingBenefits.map((item, index) => (
                            <li key={index} className="flex items-center gap-3">
                                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                                <span className="text-muted-foreground">{item}</span>
                            </li>
                            ))}
                        </ul>
                    </div>

                </div>

                <div className="mt-12 p-6 bg-primary/10 rounded-lg">
                    <h3 className="text-xl font-bold font-headline">Your Compliance Begins with Clear Books</h3>
                    <p className="text-muted-foreground mt-2">
                        Don’t let mismanaged records hold you back. With CACSFinacc, you get a dedicated CA-led accounting team, cloud-enabled platforms, and regulatory-proof financials—tailored to your business size and needs.
                    </p>
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
