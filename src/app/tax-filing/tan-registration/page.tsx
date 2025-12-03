
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

const whoNeedsTan = [
    "Employers deducting TDS on salary",
    "Companies deducting TDS on vendor payments, rent, interest, professional fees, or commission",
    "Businesses liable to collect TCS on the sale of goods",
    "Charitable trusts deducting TDS",
    "Individuals/HUFs required to deduct TDS under Section 194-IA/IB/M",
    "Government deductors and local authorities",
];

const newFor2025 = [
    "Unified e-Filing portal for PAN-TAN applications via NSDL’s portal (now merged with Protean)",
    "Mandatory PAN linkage for TAN holders for streamlined e-verification and TDS reporting",
    "Auto-population of TAN data in AIS/TIS for matching and compliance tracking",
    "Stringent scrutiny for incorrect or fake TAN usage under compliance risk profiling by CBDT",
];

const requiredDocs = [
    { type: "Proprietorship", docs: "PAN, Aadhaar, business address proof" },
    { type: "Company", docs: "Certificate of Incorporation, PAN, director’s ID" },
    { type: "Partnership Firm", docs: "Partnership deed, firm PAN, partners’ ID" },
    { type: "Trust/NGO", docs: "Trust deed, registration certificate, PAN" },
    { type: "Individuals", docs: "PAN, Aadhaar, ownership proof of property (if applicable)" },
];

const applicationSteps = [
    "Online Application: Visit the official TIN NSDL Portal.",
    "Form 49B Submission: Fill out Form 49B with necessary details.",
    "Document Submission: Provide identity proof and address proof.",
    "Payment of Fees: A nominal fee of ₹65 is charged.",
    "Acknowledgment Slip: Download and save the acknowledgment slip after successful submission.",
    "Verification: The Income Tax Department verifies and dispatches the TAN to the registered address.",
];

const penalties = [
    { default: "Failure to apply for TAN:", penalty: "₹10,000 under Section 272BB" },
    { default: "Not quoting TAN in TDS returns:", penalty: "₹10,000" },
    { default: "Late filing of TDS returns:", penalty: "₹200 per day (Section 234E)" },
    { default: "Wrong TAN used in returns:", penalty: "Treated as invalid submission" },
];

const ourServices = [
    "Eligibility Analysis: Assess whether TAN is required for your business, transaction, or property purchase.",
    "Document Preparation: End-to-end support for collating valid identity, address, and business proof documents.",
    "Online Application via NSDL/Protean Portal: We fill and submit Form 49B on your behalf and pay the applicable fee.",
    "TAN Allotment and Download: Receive TAN within 5–7 working days, along with guidance on using it for TDS returns and payments.",
    "Compliance Support: We assist in filing Form 24Q/26Q/27Q/27EQ, issuing Form 16/16A, and maintaining TDS registers.",
];


export default function TanRegistrationPage() {
  return (
    <main>
       <div className="py-6 bg-secondary">
        <div className="container mx-auto px-4">
            <Breadcrumbs
            items={[
                { label: 'Home', href: '/' },
                { label: 'Tax Filing', href: '/tax-filing' },
                { label: 'TAN Registration' },
            ]}
            />
        </div>
      </div>

      <section id="service-details" className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
                <h1 className="text-3xl md:text-4xl font-bold font-headline mb-4">
                    TAN Registration: Your Key to TDS Compliance
                </h1>

                <div>
                    <p className="text-muted-foreground text-justify">
                        Tax Deduction and Collection Account Number (TAN) is a 10-digit alphanumeric code issued by the Income Tax Department of India. It is mandatory for entities responsible for deducting or collecting tax at source (TDS or TCS) under Section 203A of the Income Tax Act, 1961.
                    </p>
                    <p className="text-muted-foreground text-justify mt-4">
                        It is mandatory for all deductors/collectors to quote TAN on TDS returns, challans, and certificates. Non-compliance attracts a penalty of ₹10,000.
                    </p>
                </div>
                
                <div>
                    <h2 className="text-2xl font-bold font-headline mb-4 text-primary">What is TAN?</h2>
                    <p className="text-muted-foreground text-justify">
                        TAN, or Tax Deduction and Collection Account Number, is a 10-digit alphanumeric code required for entities that deduct or collect tax at source (TDS/TCS). It is essential to quote TAN on all TDS-related documents.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Why is TAN Important?</h2>
                    <p className="text-muted-foreground text-justify">
                        TAN is crucial for filing TDS returns and depositing TDS to the government. Failure to obtain a TAN or quoting an incorrect TAN can result in penalties and non-processing of TDS returns.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Who Needs TAN Registration?</h2>
                    <p className="text-muted-foreground mb-2"><strong>TAN is compulsory for:</strong></p>
                    <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                        {whoNeedsTan.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                    <p className="text-muted-foreground text-justify mt-4">
                        Even freelancers or individuals buying property above ₹50 lakhs may need TAN for TDS on property transactions.
                    </p>
                </div>
                
                <div>
                    <h2 className="text-2xl font-bold font-headline mb-4 text-primary">TAN Registration – What’s New for AY 2025-26?</h2>
                    <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                        {newFor2025.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
                
                <div>
                    <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Documents Required for TAN Application</h2>
                    <p className="text-muted-foreground text-justify mb-4">
                        The documents required for TAN application vary based on the applicant type:
                    </p>
                    <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                        {requiredDocs.map((item, index) => (
                            <li key={index}><strong>{item.type}:</strong> {item.docs}</li>
                        ))}
                    </ul>
                     <p className="text-muted-foreground text-justify mt-4 text-sm">
                        <strong>Note:</strong> Application must be submitted in Form 49B (online or offline).
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-bold font-headline mb-4 text-primary">TAN Registration for Non-Residents</h2>
                    <p className="text-muted-foreground text-justify">
                        NRIs and foreign entities engaged in business or transactions in India are also required to obtain TAN for TDS on payments like rent, professional fees, and interest income.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-bold font-headline mb-4 text-primary">How to Apply for TAN Registration?</h2>
                    <ol className="space-y-3 list-decimal pl-5 text-muted-foreground">
                        {applicationSteps.map((step, index) => (
                            <li key={index}>{step}</li>
                        ))}
                    </ol>
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
                    <h2 className="text-2xl font-bold font-headline mb-4 text-primary">How CACSFinacc Simplifies Your TAN Registration</h2>
                    <ol className="space-y-3 list-decimal pl-5 text-muted-foreground">
                        {ourServices.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ol>
                </div>

                 <div>
                    <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Get Expert Assistance!</h2>
                    <p className="text-muted-foreground text-justify">
                        Register your TAN effortlessly with CACSFinacc Services. Our experts ensure a smooth, hassle-free registration and TDS filing process, keeping you compliant with the latest tax laws.
                    </p>
                    <p className="text-muted-foreground text-justify mt-4">
                        Contact Us Now for seamless TAN Registration and TDS filing!
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
