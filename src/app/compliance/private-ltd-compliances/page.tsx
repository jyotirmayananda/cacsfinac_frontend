
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

const annualCompliances = [
    {
        title: "Income Tax Return Filing (ITR-6)",
        items: [
            "Mandatory for all companies (except those claiming exemption under Sec 11)",
            "Due Date: 31st October 2025 (Audit cases) or 30th November 2025 (Transfer Pricing cases)",
            "Audit report (Form 3CA/3CD) must be filed before ITR"
        ]
    },
    {
        title: "Statutory Audit under Companies Act",
        items: [
            "Conducted by a Chartered Accountant",
            "Preparation of: Balance Sheet, Profit & Loss Account, Cash Flow Statement, Notes to Accounts",
            "Auditor appointment within 30 days of incorporation (Form ADT-1)"
        ]
    },
    {
        title: "Annual ROC Filings",
        items: []
    },
    {
        title: "DIN KYC – Form DIR-3 KYC",
        items: [
            "Mandatory for all directors with DIN",
            "Due Date: 30th September 2025",
            "Failure = Deactivation of DIN"
        ]
    },
    {
        title: "Board Meetings",
        items: [
            "Minimum 4 Board Meetings per year",
            "Maintain minutes, notices, and attendance records"
        ]
    },
    {
        title: "Form DPT-3 (Return of Deposits)",
        items: [
            "Disclose all outstanding loans, deposits, or advances as on 31st March",
            "Due Date: 30th June 2025"
        ]
    },
    {
        title: "Form MSME-1",
        items: [
            "Half-yearly disclosure of outstanding dues to MSME creditors (if payment > 45 days)"
        ]
    },
    {
        title: "Form MBP-1 & DIR-8",
        items: [
            "Directors must disclose interest in other entities annually and confirm eligibility"
        ]
    },
    {
        title: "Auditor’s Certificate on Compliances",
        items: [
            "Required for companies with share capital or turnover > prescribed limits",
            "Important for angel-funded, VC-backed startups"
        ]
    }
];

const rocFilingsData = [
    { form: "AOC-4", purpose: "Filing of audited financials", dueDate: "Within 30 days of AGM" },
    { form: "MGT-7A/7", purpose: "Annual return", dueDate: "Within 60 days of AGM" },
];

const complianceChecklist = [
    "Income Tax Return (ITR-6)",
    "Tax Audit (Form 3CA/3CD)",
    "Statutory Audit & Auditor’s Report",
    "ROC Annual Filing – AOC-4 & MGT-7",
    "DIR-3 KYC (for directors)",
    "Form DPT-3 & MSME-11",
    "Board Meetings & AGM Support",
    "Maintenance of Statutory Registers",
    "TDS, GST, and Advance Tax Filing",
];

const complianceCalendar = [
    { compliance: "Statutory Audit", description: "Audit of financials by Chartered Accountant", dueDate: "30th September 2025" },
    { compliance: "Income Tax Return (ITR-6)", description: "Return filing for company (not under presumptive taxation)", dueDate: "31st October 2025" },
    { compliance: "Tax Audit (if applicable)", description: "For turnover exceeding ₹1 Cr or ₹10 Cr (if 95% digital)", dueDate: "30th September 2025" },
    { compliance: "MCA Form AOC-4", description: "Filing of audited financial statements", dueDate: "30th October 2025" },
    { compliance: "MCA Form MGT-7", description: "Filing of Annual Return with Shareholding pattern", dueDate: "29th November 2025" },
    { compliance: "DIR-3 KYC", description: "KYC of directors to avoid disqualification", dueDate: "30th September 2025" },
    { compliance: "Form DPT-3", description: "Disclosure of loans not treated as deposits", dueDate: "30th June 2025" },
    { compliance: "MSME Return (Form MSME-1)", description: "Half-yearly filing for pending dues to MSMEs", dueDate: "30th April / 31st October" },
    { compliance: "Board Meetings", description: "Minimum 4 meetings per year (at least one every quarter)", dueDate: "Quarterly" },
    { compliance: "AGM (Annual General Meeting)", description: "Mandatory for all companies (except OPCs)", dueDate: "Within 6 months of FY end" },
];

const taxRocCompliance = [
    "Flat tax rate of 22% (plus surcharge and cess) under Section 115BAA",
    "25% if opting for standard taxation and turnover < ₹400 Cr",
    "TDS Compliance: Timely deduction & filing of Form 24Q/26Q",
    "Advance tax payable if liability exceeds ₹10,000",
    "Audit under Section 44AB for turnover > ₹1 Cr (₹10 Cr if 95% digital)",
];

const eventBasedRoc = [
    "Change in directors – DIR-12",
    "Allotment of shares – PAS-3",
    "Change in registered office – INC-22",
    "Increase in authorized capital – SH-7",
    "Auditor appointment or re-appointment – ADT-1",
    "Disclosure of interest by directors – MBP-1 & DIR-8",
];

const gstComplianceData = [
    { form: "GSTR-1", purpose: "Outward supplies", frequency: "Monthly / QRMP" },
    { form: "GSTR-3B", purpose: "Summary return", frequency: "Monthly / QRMP" },
    { form: "GSTR-9/9C", purpose: "Annual return and reconciliation", frequency: "Annually" },
    { form: "E-Invoicing", purpose: "Mandatory if turnover > ₹5 Crores", frequency: "Real-time" },
];

const requiredDocs = [
    "Audited Balance Sheet",
    "Profit and Loss Statement",
    "Director KYC Documents",
    "Bank Statements",
    "Shareholding details",
    "Board Resolutions and Minutes",
    "Loan Agreements (if any)",
    "TDS & GST Challans and Returns",
];

const penalties = [
    { default: "Late ITR filing", penalty: "₹5,000 under Section 234F" },
    { default: "Delay in ROC filings (AOC-4/MGT-7)", penalty: "₹100 per day per form" },
    { default: "Non-filing of DPT-3", penalty: "₹5,000 + ₹500/day" },
    { default: "No board meeting held", penalty: "₹25,000 on company + ₹5,000 per director" },
    { default: "TDS/GST late payment", penalty: "Interest @ 1-1.5% per month + penalty" },
];

const regulatoryUpdates = [
    "Form DPT-3 and MSME Return reporting made stricter with penalty enforcement for delayed filing.",
    "Mandatory accounting software with audit trail feature under Companies (Accounts) Rules.",
    "CSR (Corporate Social Responsibility) reporting enforced for companies meeting prescribed thresholds.",
    "Updated tax audit disclosures under Form 3CD for loans, related party transactions, and foreign remittances.",
    "Increased scrutiny on beneficial ownership disclosures (BEN-2, DIR-3 KYC).",
];

const howWeHelp = [
    "ROC Filings handled from start to finish",
    "Tax Audit & ITR Filing under expert supervision",
    "Director KYC, DPT-3, MSME Reporting",
    "Compliance Calendar Setup & Reminders",
    "Custom Legal Drafting (Resolutions, Registers, MOA Amendments)",
    "Virtual CFO Services for strategic finance oversight",
];


export default function PrivateLimitedCompliancesPage() {
  return (
    <main>
       <div className="py-6 bg-secondary">
        <div className="container mx-auto px-4">
            <Breadcrumbs
            items={[
                { label: 'Home', href: '/' },
                { label: 'Compliance', href: '/compliance' },
                { label: 'Private Limited Company Compliances' },
            ]}
            />
        </div>
      </div>

      <section id="service-details" className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
                <h1 className="text-3xl md:text-4xl font-bold font-headline mb-4">
                    Private Limited Company Compliance Services
                </h1>

                <div>
                    <h2 className="text-2xl font-bold font-headline mb-4 text-primary">What is a private limited company?</h2>
                    <p className="text-muted-foreground text-justify">
                        In India, a private limited company is a privately held entity with limited liability, and it ranks among the nation's most favored business structures. This popularity is primarily attributed to its numerous advantages, including limited liability protection, ease of formation and maintenance, and its status as a distinct legal entity. This encourages a prospective businessman to engage in the incorporation of private limited company. A private limited company enjoys legal separation from its owners and necessitates a minimum of two members and two directors for its operation.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Why Private Limited Company Compliance is Critical</h2>
                    <p className="text-muted-foreground text-justify mb-4">
                        A Private Limited Company offers credibility, scalability, and legal identity but it comes with strict compliance responsibilities under the Companies Act, 2013, Income Tax Act, and GST laws. Failure to comply may result in heavy penalties, director disqualification, and legal issues.
                    </p>
                    <p className="text-muted-foreground text-justify mb-4">
                        A Private Limited Company (Pvt Ltd), once incorporated under the Companies Act, 2013, is subject to mandatory annual filings, tax obligations, and statutory compliances regardless of turnover or activity level.
                    </p>
                    <p className="font-semibold mb-2">Proper compliance ensures:</p>
                    <ul className="space-y-2 pl-5 list-disc text-muted-foreground mb-4">
                        <li>Legal validity and credibility</li>
                        <li>No late fees or penalties</li>
                        <li>Investor and lender confidence</li>
                        <li>Director eligibility and ROC good standing</li>
                    </ul>
                    <p className="text-muted-foreground text-justify">
                        Non-compliance can result in hefty penalties, disqualification of directors, and even striking off of the company by ROC.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Mandatory Annual Compliances (AY 2025-26)</h2>
                    <ol className="space-y-4 list-decimal pl-5">
                        {annualCompliances.map((compliance, index) => (
                            <li key={index}>
                                <p className="font-semibold">{compliance.title}</p>
                                {compliance.items.length > 0 && (
                                    <ul className='list-disc pl-5 text-muted-foreground'>
                                        {compliance.items.map((item, subIndex) => (
                                            <li key={subIndex}>{item}</li>
                                        ))}
                                    </ul>
                                )}
                                {compliance.title === "Annual ROC Filings" && (
                                    <>
                                        <Table className="my-4">
                                            <TableHeader>
                                                <TableRow>
                                                    <TableHead>Form</TableHead>
                                                    <TableHead>Purpose</TableHead>
                                                    <TableHead>Due Date</TableHead>
                                                </TableRow>
                                            </TableHeader>
                                            <TableBody>
                                                {rocFilingsData.map((item, i) => (
                                                    <TableRow key={i}>
                                                        <TableCell className="font-medium">{item.form}</TableCell>
                                                        <TableCell>{item.purpose}</TableCell>
                                                        <TableCell>{item.dueDate}</TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                        <p className="text-muted-foreground text-sm">
                                            Companies must hold AGM within 6 months from FY-end (i.e., by 30th September for most).
                                        </p>
                                    </>
                                )}
                            </li>
                        ))}
                    </ol>
                </div>
                
                <div>
                    <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Private Limited Company Compliance Checklist</h2>
                    <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                        {complianceChecklist.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Compliance Calendar – AY 2025-26</h2>
                     <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Compliance</TableHead>
                                <TableHead>Description</TableHead>
                                <TableHead>Due Date</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {complianceCalendar.map((item, index) => (
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
                    <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Income Tax & ROC Compliance for Pvt Ltd Companies</h2>
                    <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                        {taxRocCompliance.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h2 className="text-2xl font-bold font-headline mb-4 text-primary">ROC (Registrar of Companies) Compliance</h2>
                    <h3 className="font-semibold mt-4 mb-2">Annual Compliances & Event-Based ROC Compliances</h3>
                     <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                        {eventBasedRoc.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h2 className="text-2xl font-bold font-headline mb-4 text-primary">GST Compliance for Pvt Ltd Companies</h2>
                     <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Return/Form</TableHead>
                                <TableHead>Purpose</TableHead>
                                <TableHead>Frequency</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {gstComplianceData.map((item, index) => (
                                <TableRow key={index}>
                                    <TableCell className="font-medium">{item.form}</TableCell>
                                    <TableCell>{item.purpose}</TableCell>
                                    <TableCell>{item.frequency}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                     </Table>
                </div>

                <div>
                    <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Documents Required for Annual Compliance</h2>
                    <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                        {requiredDocs.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Penalties for Non-Compliance</h2>
                     <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Default</TableHead>
                                <TableHead>Penalty</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {penalties.map((item, index) => (
                                <TableRow key={index}>
                                    <TableCell className="font-medium">{item.default}</TableCell>
                                    <TableCell>{item.penalty}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                     </Table>
                </div>

                <div>
                    <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Latest Regulatory Updates – AY 2025-26</h2>
                     <p className="text-muted-foreground text-justify mb-4">
                        As per the Finance Act, 2024 and recent MCA/Income Tax circulars, here are the key changes impacting Pvt. Ltd. Company compliance:
                    </p>
                    <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                        {regulatoryUpdates.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h2 className="text-2xl font-bold font-headline mb-4 text-primary">How CACSFinacc Makes Your Pvt. Ltd. Company Fully Compliant</h2>
                    <ul className="space-y-3 text-muted-foreground">
                        {howWeHelp.map((item, index) => (
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

    