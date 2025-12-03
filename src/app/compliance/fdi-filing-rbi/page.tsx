
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

const whoMustFile = [
    "FC-GPR (Form for allotment of shares)",
    "FC-TRS (Transfer of shares between resident and non-resident)",
    "FDI Reporting for LLPs (Form LLP I and LLP II)",
    "Annual Return on Foreign Liabilities and Assets (FLA Return)",
];

const filingAppliesTo = [
    "Startups raising foreign equity capital",
    "Companies with foreign shareholders",
    "Firms receiving convertible notes, debentures, or share premium",
    "LLPs receiving capital contributions from non-residents",
];

const fdiForms = [
    { form: "FC-GPR", purpose: "Issue of shares by Indian company to foreign investor", timeline: "Within 30 days from issue" },
    { form: "FC-TRS", purpose: "Transfer of shares between resident and non-resident", timeline: "Within 60 days of transfer" },
    { form: "LLP(I)", purpose: "Receipt of capital contribution from non-resident into LLP", timeline: "Within 30 days from receipt" },
    { form: "LLP(II)", purpose: "Disinvestment or transfer of capital in LLP", timeline: "Within 60 days of transfer" },
    { form: "CN (Convertible Notes)", purpose: "Issue or transfer of convertible notes to foreign investors", timeline: "Within 30 days" },
    { form: "ESOP Reporting", purpose: "Allotment of ESOPs to non-resident employees/directors", timeline: "Within 30 days of allotment" },
    { form: "DRR Reporting", purpose: "Downstream investment by Indian entity having FDI", timeline: "Within 30 days of investment" },
];

const requiredDocsFCGPR = [
    "Board resolution for share allotment",
    "FIRC (Foreign Inward Remittance Certificate) from AD bank",
    "KYC from remitter’s overseas bank",
    "Valuation certificate by CA/merchant banker",
    "MOA & AOA, shareholding pattern post-issue",
    "Declaration by authorised signatory",
    "CS Certificate (Form ESOP if applicable)",
];

const requiredDocsFCTRS = [
    "Transfer agreement",
    "Consent letter from buyer and seller",
    "FIRC/Outward Remittance Certificate",
    "Valuation report",
    "PAN and passport copies of foreign investor",
];

const penalties = [
    { default: "Delay in filing FC-GPR/FC-TRS", penalty: "Up to ₹5,000 per day and prosecution under compounding" },
    { default: "Wrong/incomplete filings", penalty: "Summon from RBI, compounding fee, inspection of books" },
    { default: "Non-reporting of ESOP/Bonus", penalty: "₹10,000 + ₹1,000 per day thereafter" },
];

const whyTimelyFilingMatters = [
    "Prevents legal exposure under FEMA & RBI",
    "Avoids penalties and delays in future funding rounds",
    "Mandatory for due diligence in M&A and VC investments",
    "Keeps company compliant with sectoral caps and automatic route thresholds",
    "Necessary for seamless remittance processing through AD Banks",
];

const ourServices = [
    { title: "End-to-End FDI Structuring & Advisory", description: "We help structure the investment to remain FEMA & Income Tax compliant" },
    { title: "FIRMS Portal Registration & Entity Setup", description: "Register Business User, link entity, and manage DSC-based login for filing" },
    { title: "Preparation & Filing of FC-GPR / FC-TRS / CN / LLP Forms", description: "Draft, validate, and submit forms through RBI FIRMS portal with tracking" },
    { title: "Valuation Report and KYC Coordination", description: "Liaise with SEBI merchant banker or CA for compliance-ready valuation" },
    { title: "FLA Return Filing", description: "Annual reporting of foreign liabilities to RBI, even if no new investment" },
    { title: "Penalty Resolution and FEMA Compounding Support", description: "If forms were missed, we handle penalty waivers or compounding applications with RBI" },
];

const whyChooseUs = [
    "100% adherence to RBI, FEMA, and DIPP guidelines",
    "Experience with startups, tech firms, VC-funded companies, and cross-border M&A",
    "One-stop solution for valuation, documentation, and RBI portal filings",
    "Ongoing support for TDS on FDI, share certificates, and ROC updates",
];


export default function FDIFilingPage() {
  return (
    <main>
       <div className="py-6 bg-secondary">
        <div className="container mx-auto px-4">
            <Breadcrumbs
            items={[
                { label: 'Home', href: '/' },
                { label: 'Compliance', href: '/compliance' },
                { label: 'FDI Filing with RBI' },
            ]}
            />
        </div>
      </div>

      <section id="service-details" className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
                <h1 className="text-3xl md:text-4xl font-bold font-headline mb-4">
                    FDI Filing with RBI & FEMA Compliance
                </h1>

                <div>
                    <h2 className="text-2xl font-bold font-headline mb-4 text-primary">What is FDI Filing?</h2>
                    <p className="text-muted-foreground text-justify mb-4">
                        <strong>Foreign Direct Investment (FDI)</strong> is the capital investment made by a foreign individual or entity into an Indian company. While FDI is permitted under both automatic and approval routes, all investments must be reported to the Reserve Bank of India (RBI) within prescribed timelines.
                    </p>
                    <p className="text-muted-foreground text-justify mb-4">
                        Under the <strong>Foreign Exchange Management Act (FEMA), 1999</strong> and RBI's Foreign Investment Reporting and Management System (FIRMS), companies receiving FDI are required to file multiple forms depending on the nature and stage of the investment. Failure to file FDI returns accurately or within time may lead to penalties under FEMA and can delay further foreign investments.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Who Must File FDI Returns?</h2>
                    <p className="text-muted-foreground mb-4">
                        Any Indian entity (Private Ltd, Public Ltd, LLP) that receives foreign investment under the automatic or government route must file:
                    </p>
                    <ul className="space-y-3 pl-5 list-disc text-muted-foreground mb-4">
                        {whoMustFile.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                    <p className="font-semibold mb-2">These filings apply to:</p>
                    <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                        {filingAppliesTo.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Types of FDI Filing & Applicable Forms</h2>
                     <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Form</TableHead>
                                <TableHead>Purpose</TableHead>
                                <TableHead>Timeline</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {fdiForms.map((item, index) => (
                                <TableRow key={index}>
                                    <TableCell className="font-medium">{item.form}</TableCell>
                                    <TableCell>{item.purpose}</TableCell>
                                    <TableCell>{item.timeline}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                     </Table>
                </div>
                
                <div>
                    <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Documents Required for FDI Filing</h2>
                    <div className='space-y-4'>
                        <div>
                            <h3 className='font-semibold mb-2'>For FC-GPR:</h3>
                            <ul className="space-y-2 pl-5 list-disc text-muted-foreground">
                                {requiredDocsFCGPR.map((doc, index) => (
                                    <li key={index}>{doc}</li>
                                ))}
                            </ul>
                        </div>
                         <div>
                            <h3 className='font-semibold mb-2'>For FC-TRS:</h3>
                            <ul className="space-y-2 pl-5 list-disc text-muted-foreground">
                                {requiredDocsFCTRS.map((doc, index) => (
                                    <li key={index}>{doc}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Penalty for Non-Compliance under FEMA</h2>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Nature of Default</TableHead>
                                <TableHead>Penalty under FEMA</TableHead>
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
                     <p className="text-muted-foreground text-justify mt-4">
                        <strong>Compounding under FEMA</strong> is now mandatory in case of reporting delays.
                    </p>
                </div>
                
                <div>
                    <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Why Timely FDI Filing Matters</h2>
                    <ul className="space-y-3 text-muted-foreground">
                        {whyTimelyFilingMatters.map((item, index) => (
                             <li key={index} className="flex items-start gap-3">
                                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h2 className="text-2xl font-bold font-headline mb-4 text-primary">CACSFinacc’s FDI Filing Services</h2>
                    <ul className="space-y-4">
                        {ourServices.map((service, index) => (
                            <li key={index} className="flex items-start gap-3">
                                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                                <div>
                                    <p className="font-semibold">{service.title}</p>
                                    <p className="text-muted-foreground">{service.description}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                
                 <div>
                    <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Why Choose CACSFinacc for FDI Filing?</h2>
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
