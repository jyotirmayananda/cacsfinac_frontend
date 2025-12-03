
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

const whoNeedsIt = [
    "Private Limited Companies",
    "Public Limited Companies",
    "One Person Companies (OPC)",
];

const exemptions = [
    "Government Companies",
    "Banks",
    "Non Banking Financial Companies (NBFCs) registered with RBI",
    "Housing finance companies",
];

const dpt3Triggers = [
    "Loans from directors/shareholders",
    "Unsecured borrowings",
    "Advances from customers",
    "Inter-corporate loans",
    "External commercial borrowings (ECBs)",
    "Security deposits or retention money",
];

const returnTypes = [
    { purpose: "One time Return (for prior outstanding as on 31 March 2019)", type: "(No longer active)" },
    { purpose: "Annual Return of Deposits", type: "For amounts classified as deposits under Companies Act" },
    { purpose: "Return of Exempted Borrowings", type: "For non-deposit transactions like loans from directors, inter-corporate borrowings" },
    { purpose: "Combined", type: "If both deposits & exempted borrowings exist" },
];

const legalFramework = [
    "Section 73 to 76 of Companies Act, 2013",
    "Rule 16 of the Companies (Acceptance of Deposits) Rules, 2014",
];

const requiredDocs = [
    "Latest audited Balance Sheet",
    "Details of all loans/advances/deposits as on 31st March",
    "Loan Agreements or Declarations",
    "Certificate from Statutory Auditor (if deposit included)",
    "CIN (Corporate Identification Number)",
    "Paid-up Capital, Turnover, and Net Worth",
    "Board Resolution Authorizing Filing",
    "Auditor’s Certificate (if applicable)",
    "Digital Signature Certificate (DSC) of Director",
];

const loanDetails = [
    "Secured Loans",
    "Unsecured Loans",
    "ECBs (External Commercial Borrowings)",
    "Related Party Loans",
    "Advances from Customers",
];

const recentUpdates = [
    "Enhanced data disclosure: Companies must now disclose bifurcated figures of secured, unsecured loans, and non-deposit borrowings.",
    "Mandatory Digital Signatures (DSC): DPT-3 filing requires DSC of Director or Authorized Signatory.",
    "Integration with MCA V3 Portal: Filing is to be done via the new MCA V3 platform, with real-time PAN verification and pre-filled details.",
    "Verification by Practicing Professional: DPT-3 must be certified by a CA, CS, or CMA in practice.",
    "Pre-validation of CIN and auto-fill facility on MCA portal.",
    "Mandatory reporting of ECBs and convertible debentures under 'Particulars of non-deposit transactions'.",
    "Enhanced disclosure of maturity dates and interest components.",
    "Penalties under Section 76A & Rule 21 updated with stricter enforcement via MCA compliance tracker.",
    "ROC compliance grading may now be affected by non-filing of DPT-3.",
];

const penalties = [
    { default: "Non-filing of DPT-3", penalty: "₹5,000 + ₹500 per day of default" },
    { default: "False Information Filed", penalty: "Action under Section 448 – Imprisonment up to 10 years + Fine" },
    { default: "Not Complying with Section 73", penalty: "₹1 crore or twice the amount of deposit, whichever is lower + interest" },
    { default: "Officers in default", penalty: "Up to 7 years imprisonment or fine up to ₹25 lakh" },
    { default: "Additional ROC penalties", penalty: "₹100 per day of delay post due date" },
];

const importance = [
    "Avoid MCA Penalties",
    "Maintain Transparency in Borrowings",
    "Strengthen Corporate Governance",
    "Enhance Investor Confidence",
    "Ensure Legal Standing During Audits, Funding, or Mergers",
];

const howWeHandle = [
    { title: "Pre-Filing Review", description: "Review loan agreements, balance sheet entries, and assess deposit vs. non-deposit categorization" },
    { title: "Documentation Support", description: "Draft Board Resolutions, auditor’s certificate (if deposits exist), and internal summaries" },
    { title: "DPT-3 Form Filing", description: "Prepare and file DPT-3 on MCA portal with DSC of Director/Authorized Signatory" },
    { title: "Post-Filing Acknowledgment", description: "Provide SRN, proof of filing, and compliance summary for your records" },
    { title: "Ongoing Advisory", description: "Guidance on deposit rules, Section 73 to 76 restrictions, and RBI/ROC follow-ups" },
];

const whyChooseUs = [
    "End-to-End Compliance Support",
    "Accurate Classification of Deposit vs. Non-Deposit",
    "Preparation of Required Certificates & Resolutions",
    "Timely DPT-3 Filing with MCA",
    "Post-Filing Acknowledgment & Advisory",
];

export default function DPT3Page() {
  return (
    <main>
       <div className="py-6 bg-secondary">
        <div className="container mx-auto px-4">
            <Breadcrumbs
            items={[
                { label: 'Home', href: '/' },
                { label: 'Compliance', href: '/compliance' },
                { label: 'DPT-3 Filings' },
            ]}
            />
        </div>
      </div>

      <section id="service-details" className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
                <h1 className="text-3xl md:text-4xl font-bold font-headline mb-4">
                    DPT-3 Filing & Compliance Services
                </h1>

                <div>
                    <h2 className="text-2xl font-bold font-headline mb-4 text-primary">DPT-3 Filing – Annual Return of Deposits</h2>
                    <p className="text-muted-foreground text-justify">
                        Every company (except government companies) must file Form DPT-3 with the Ministry of Corporate Affairs (MCA) by June 30th each year. This return includes details of all deposits, outstanding loans, and amounts received that do not qualify as deposits as of March 31st. The DPT-3 return must be certified by the company’s auditor to ensure accuracy and compliance.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-bold font-headline mb-4 text-primary">What is DPT-3?</h2>
                    <p className="text-muted-foreground text-justify mb-4">
                        Form DPT-3 is a mandatory annual return filed by companies (other than government companies) to the MCA, reporting:
                    </p>
                    <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                        <li>Deposits</li>
                        <li>Outstanding loans, advances, or monies not considered deposits</li>
                    </ul>
                     <p className="text-muted-foreground text-justify mt-4">
                        DPT-3 is governed by Rule 16 of the Companies (Acceptance of Deposits) Rules, 2014 under the Companies Act, 2013. It must be filed even if the company does not hold public deposits—reporting of loan-type liabilities is compulsory.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Who is Required to File DPT-3?</h2>
                    <p className="font-semibold">The following entities must file DPT-3:</p>
                    <ul className="space-y-3 pl-5 list-disc text-muted-foreground mb-4">
                        {whoNeedsIt.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                    <p className="font-semibold">Exemptions:</p>
                    <ul className="space-y-3 pl-5 list-disc text-muted-foreground mb-4">
                        {exemptions.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                    <p className="text-muted-foreground text-justify mb-4">
                        DPT-3 must be filed if the company has any of the following:
                    </p>
                    <ul className="space-y-3 pl-5 list-disc text-muted-foreground mb-4">
                        {dpt3Triggers.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                    <p className="text-muted-foreground text-justify">
                        Private Limited, Public Limited, One Person Company (OPC), and Section 8 Companies are all required to file DPT-3 if any such transactions exist.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Types of Returns under DPT-3</h2>
                     <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Purpose</TableHead>
                                <TableHead>DPT-3 Type</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {returnTypes.map((item, index) => (
                                <TableRow key={index}>
                                    <TableCell className="font-medium">{item.purpose}</TableCell>
                                    <TableCell>{item.type}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                     </Table>
                </div>
                
                <div>
                    <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Legal Framework</h2>
                    <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                        {legalFramework.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                        <li>
                            <strong>Companies must report:</strong>
                            <ul className='list-disc pl-5'>
                                <li>Whether amounts qualify as deposits or exempt categories</li>
                            </ul>
                        </li>
                    </ul>
                </div>
                
                <div>
                    <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Documents Required for DPT-3 Filing</h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-muted-foreground">
                        {requiredDocs.slice(0, 7).map((doc, index) => (
                             <li key={index} className="flex items-center gap-3">
                                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                                <span>{doc}</span>
                            </li>
                        ))}
                    </ul>
                    <div className="flex items-start gap-3 mt-3 text-muted-foreground">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                        <div>
                            <span>Outstanding Loan Details as on 31st March</span>
                            <ul className='list-disc pl-5'>
                                {loanDetails.map((item, subIndex) => (
                                    <li key={subIndex}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                     <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-muted-foreground mt-3">
                        {requiredDocs.slice(7).map((doc, index) => (
                             <li key={index} className="flex items-center gap-3">
                                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                                <span>{doc}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                
                <div>
                    <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Recent Amendments & MCA Updates – FY 2024-25</h2>
                    <ul className="space-y-3 text-muted-foreground">
                        {recentUpdates.map((update, index) => (
                            <li key={index} className="flex items-start gap-3">
                                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                                <span>{update}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Due Date for AY 2025-26</h2>
                    <p className="text-muted-foreground text-justify">
                        For Financial Year 2024-25 (AY 2025-26), the due date for filing DPT-3 is: <strong>30th June 2025</strong><br />
                        <em>Note: Late filing will result in penalties under the Companies Act, 2013.</em>
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Penalty for Non-Compliance As per Section 76A</h2>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Nature of Default</TableHead>
                                <TableHead>Penalty as per Companies Act, 2013</TableHead>
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
                    <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Why is DPT-3 Compliance Important?</h2>
                    <ul className="space-y-3 text-muted-foreground">
                        {importance.map((item, index) => (
                             <li key={index} className="flex items-center gap-3">
                                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h2 className="text-2xl font-bold font-headline mb-4 text-primary">How CACSFinacc Handles DPT-3 for You</h2>
                    <ol className="space-y-4 list-decimal pl-5">
                        {howWeHandle.map((step, index) => (
                            <li key={index}>
                                <p className="font-semibold">{step.title}</p>
                                <p className='text-muted-foreground'>{step.description}</p>
                            </li>
                        ))}
                    </ol>
                </div>
                
                 <div>
                    <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Why Choose CACSFinacc?</h2>
                    <ul className="space-y-3 text-muted-foreground">
                        {whyChooseUs.map((item, index) => (
                             <li key={index} className="flex items-center gap-3">
                                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
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

    