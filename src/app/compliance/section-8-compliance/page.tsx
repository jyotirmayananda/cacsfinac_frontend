
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

const keyFeatures = [
    "Limited company status with non-profit motive",
    "No minimum capital requirement",
    "Perpetual succession and separate legal identity",
    "Eligible for tax exemptions under Section 12A and 80G",
    "Higher compliance obligation for transparency and funding eligibility",
];

const whyChoose = [
    "Recognized legal entity with high donor confidence",
    "Eligible for CSR funding, international grants, and government affiliations",
    "Allows tax deductions to donors under Section 80G",
    "Eligible for foreign contributions after FCRA registration",
    "Exempt from using 'Ltd.' or 'Pvt. Ltd.' in its name",
];

const complianceRequirements = [
    { area: "Annual ROC Filings", filings: "AOC-4, MGT-7A" },
    { area: "Director Compliance", filings: "DIR-3 KYC, MBP-1, DIR-8" },
    { area: "Income Tax Return", filings: "ITR-7 under Sections 12A/10(23C)" },
    { area: "Audit & Financials", filings: "Form 10B/10BB, Annual Accounts Audit" },
    { area: "TDS Compliance", filings: "24Q/26Q filings and payment" },
    { area: "CSR Reporting", filings: "CSR-2 if applicable" },
    { area: "Foreign Investment Reporting", filings: "FC-GPR/FLA (if FDI received)" },
    { area: "FCRA Filing", filings: "FC-4, FC-6 (if registered for foreign contributions)" },
];

const requiredDocs = [
    "PAN, Aadhaar, and Email ID of all directors",
    "Passport-size photos",
    "Utility bill & NOC from owner for registered address",
    "Draft MOA and AOA aligned with not-for-profit objects",
    "Declaration from directors (INC-14 & INC-15)",
    "Digital Signature Certificate (DSC)",
    "Consent to act as Director (DIR-2)",
];

const registrationSteps = [
    "Name approval through SPICe+ Part A",
    "Document drafting & Digital Signature registration",
    "File SPICe+ Part B, INC-9, MOA, AOA",
    "Receive COI (Certificate of Incorporation) from MCA",
    "Apply for PAN & TAN",
    "File Form INC-20A (Declaration of Commencement)",
    "Apply for 12A/80G exemption with the Income Tax Department",
];

const postIncorporationCompliance = [
    { compliance: "Commencement Certificate (INC-20A)", timeline: "Within 180 days of incorporation" },
    { compliance: "Appointment of Auditor (ADT-1)", timeline: "Within 30 days of incorporation" },
    { compliance: "Annual Return (MGT-7)", timeline: "Within 60 days of AGM" },
    { compliance: "Financials (AOC-4)", timeline: "Within 30 days of AGM" },
    { compliance: "CSR-1 & CSR-2 Filing", timeline: "Annually (for CSR-recipient entities)" },
    { compliance: "Tax Return (ITR-7)", timeline: "By 31st October (if audited)" },
    { compliance: "Tax Audit (if applicable)", timeline: "If receipts > ₹1 crore" },
];

const taxBenefits = [
    { provision: "Section 11", benefit: "Exemption on income used for charitable/religious purposes" },
    { provision: "Section 12A", benefit: "Registration for tax exemption eligibility" },
    { provision: "Section 80G", benefit: "Allows donors to claim 50%-100% deduction on contributions" },
    { provision: "GST", benefit: "No registration needed if aggregate turnover < ₹20 lakhs (₹10 lakhs for NE states)" },
    { provision: "FCRA", benefit: "Permission for foreign funding after 3 years of activity & eligibility" },
];

const penalties = [
    { nonCompliance: "Delay in Annual Filings", penalty: "₹100 per day per form (AOC-4 / MGT-7)" },
    { nonCompliance: "Violation of Section 8 conditions", penalty: "Revocation of license + ₹10 lakh fine + prosecution under Companies Act" },
    { nonCompliance: "Missed CSR reporting", penalty: "₹1 lakh penalty on company + ₹50,000 on officer in default" },
    { nonCompliance: "Not renewing 12A/80G (after expiry)", penalty: "Loss of tax exemption status & donor benefit" },
];

const howWeHelp = [
    {
        title: "Company Registration (MCA)",
        items: ["Name approval (SPICe+), DIN, DSC, drafting of MoA & AoA", "Filing of INC-12 for Section 8 License"]
    },
    {
        title: "Post-Incorporation Compliance",
        items: ["PAN, TAN, GST, Professional Tax, MSME registration"]
    },
    {
        title: "Income Tax Exemptions",
        items: ["Filing of Form 10A for 12AB & 80G registration", "Assistance with Form 10B/10BB audit filings"]
    },
    {
        title: "Annual Filings",
        items: ["ROC (AOC-4, MGT-7A), CSR-2, and MCA board meeting documentation"]
    },
    {
        title: "FCRA, CSR & Donor Compliance",
        items: ["FCRA registration (if applicable), RBI reporting, donation tracking"]
    },
    {
        title: "End-to-End Bookkeeping",
        items: ["Maintenance of books, financial reports, vouchers, and asset registers"]
    },
];

const whyChooseCacsfinacc = [
    "End-to-end assistance from registration to audit and ITR",
    "100% on-time ROC, Income Tax, and CSR filings",
    "Guidance on FCRA registration, foreign donor due diligence, and RBI filings",
    "MOA & AOA Drafting with NGO Object Clauses",
    "Expert Filing of 12A, 80G, CSR-1, CSR-2, and ITR-7",
];

export default function Section8CompliancePage() {
  return (
    <main>
       <div className="py-6 bg-secondary">
        <div className="container mx-auto px-4">
            <Breadcrumbs
            items={[
                { label: 'Home', href: '/' },
                { label: 'Compliance', href: '/compliance' },
                { label: 'Section 8 Company Compliance' },
            ]}
            />
        </div>
      </div>

      <section id="service-details" className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
                <h1 className="text-3xl md:text-4xl font-bold font-headline mb-4">
                    Section 8 Company Registration & Compliance
                </h1>
                
                <div>
                    <h2 className="text-2xl font-bold font-headline mb-4 text-primary">What is a Section 8 Company?</h2>
                    <p className="text-muted-foreground text-justify mb-4">
                        A Section 8 Company is a non-profit entity incorporated under Section 8 of the Companies Act, 2013, with the primary objective of promoting:
                    </p>
                    <ul className="space-y-2 pl-5 list-disc text-muted-foreground mb-4">
                        <li>Charity or Social Welfare</li>
                        <li>Education or Art</li>
                        <li>Science, Culture, Sports, or Environment</li>
                        <li>Research, Religion, or Philanthropy</li>
                    </ul>
                    <p className="text-muted-foreground text-justify mb-4">
                        Such companies apply profits or income toward their cause and are prohibited from distributing dividends to members. Section 8 Companies are ideal for NGOs, social enterprises, trusts, foundations, and CSR arms of corporates.
                    </p>
                    <p className="text-muted-foreground text-justify">
                        A Section 8 Company enjoys tax benefits, enhanced credibility, and is governed by stricter compliance protocols compared to Trusts and Societies.
                    </p>
                </div>
                
                <div>
                    <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Key Features of a Section 8 Company</h2>
                    <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                        {keyFeatures.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
                
                <div>
                    <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Why Choose a Section 8 Company?</h2>
                    <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                        {whyChoose.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Compliance Requirements for Section 8 Companies</h2>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Compliance Area</TableHead>
                                <TableHead>Key Filings</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {complianceRequirements.map((item, index) => (
                                <TableRow key={index}>
                                    <TableCell className="font-medium">{item.area}</TableCell>
                                    <TableCell>{item.filings}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                     </Table>
                     <p className="text-muted-foreground text-sm mt-2">
                        <strong>Note:</strong> Non-compliance may result in loss of tax exemption, penalties, or cancellation of license under Section 8.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Documents Required for Section 8 Company Registration</h2>
                    <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                        {requiredDocs.map((doc, index) => (
                            <li key={index}>{doc}</li>
                        ))}
                    </ul>
                </div>
                
                <div>
                    <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Step-by-Step Registration Process</h2>
                    <ol className="space-y-3 pl-5 list-decimal text-muted-foreground">
                        {registrationSteps.map((step, index) => (
                            <li key={index}>{step}</li>
                        ))}
                    </ol>
                </div>

                <div>
                    <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Post-Incorporation Compliance</h2>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Compliance</TableHead>
                                <TableHead>Timeline</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {postIncorporationCompliance.map((item, index) => (
                                <TableRow key={index}>
                                    <TableCell className="font-medium">{item.compliance}</TableCell>
                                    <TableCell>{item.timeline}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                     </Table>
                </div>

                <div>
                    <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Tax Benefits Available to Section 8 Companies</h2>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Provision</TableHead>
                                <TableHead>Benefit</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {taxBenefits.map((item, index) => (
                                <TableRow key={index}>
                                    <TableCell className="font-medium">{item.provision}</TableCell>
                                    <TableCell>{item.benefit}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                     </Table>
                </div>
                
                <div>
                    <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Penalties for Non-Compliance</h2>
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
                    <h2 className="text-2xl font-bold font-headline mb-4 text-primary">How CACSFinacc Helps with Section 8 Company Setup & Compliance</h2>
                    <ol className="space-y-4 list-decimal pl-5">
                        {howWeHelp.map((step, index) => (
                            <li key={index}>
                                <p className="font-semibold">{step.title}</p>
                                <ul className='list-disc pl-5 text-muted-foreground'>
                                    {step.items.map((item, subIndex) => (
                                        <li key={subIndex}>{item}</li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ol>
                </div>
                
                <div>
                    <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Why Choose CACSFinacc for Section 8 Company Services?</h2>
                    <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                        {whyChooseCacsfinacc.map((item, index) => (
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

