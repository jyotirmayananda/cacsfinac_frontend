
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

const importancePoints = [
    "Legal compliance: Mandatory for most foreign remittances under Section 195.",
    "Avoids penalties: Failure to file can attract heavy penalties and scrutiny from tax authorities.",
    "Preventing Double Taxation: Ensures relief under DTAA provisions.",
    "Streamlined Processing: Banks require these forms before processing any international fund transfers.",
];

const whoNeedsItReasons = [
    "Legal compliance for most foreign remittances",
    "Avoids penalties and scrutiny from tax authorities",
    "Ensures DTAA (Double Taxation Avoidance Agreement) benefits",
    "Required by banks before processing international fund transfers",
];

const whoNeedsItEntities = [
    "An individual, proprietor, company, LLP, or trust",
    "A resident making payment to a non-resident",
];

const cbRequiredConditions = [
    { condition: "Remittance > ₹5 lakhs (non-exempt)", required: "Yes" },
    { condition: "Remittance < ₹5 lakhs (non-exempt)", required: "No" },
    { condition: "Exempted category under Rule 37BB (e.g. travel, student fees)", required: "No" },
    { condition: "Remittance covered under DTAA", required: "Yes (to validate treaty benefit)" },
    { condition: "Salary payments abroad", required: "Yes" },
];

const formRequirements = [
    { type: "Taxable Remittances", form15ca: "Required", form15cb: "Required" },
    { type: "Non-Taxable as per DTAA", form15ca: "Required", form15cb: "Required" },
    { type: "Remittances below ₹5 Lakh (FY)", form15ca: "Required (Part A only)", form15cb: "Not Required" },
    { type: "Specified Transactions (Rule 37BB)", form15ca: "Not Required", form15cb: "Not Required" },
];

const filingSteps = [
    "Log in to the Income Tax e-Filing Portal.",
    "Navigate to e-File > Income Tax Forms > File Income Tax Forms.",
    "Select Form 15CA and complete the declaration.",
    "If Form 15CB is required, engage a CA to file the certification online.",
    "Submit the forms and download the acknowledgment for records.",
];

const ourProcess = [
    { title: "Initial Consultation", description: "Assess nature of remittance and determine if 15CB is required" },
    { title: "Document Collection & TDS Computation", description: "Review invoice, agreement, PAN of non-resident, DTAA applicability, and TDS rate" },
    { title: "Preparation & Filing of Form 15CB", description: "Issued by ICAI-registered CA with UDIN and digital signature" },
    { title: "Generate & Submit Form 15CA (Part B/C/D)", description: "Based on 15CB or self-declaration, submitted online" },
    { title: "Delivery of Final Signed Forms", description: "Shared with client and bank for processing the outward remittance" },
];

const penalties = [
    { nonCompliance: "Failure to File Form 15CA/15CB", penalty: "₹1,00,000 under Section 271-I" },
    { nonCompliance: "Incorrect Information", penalty: "₹10,000 under Section 271B" },
    { nonCompliance: "Delayed Filing", penalty: "Additional interest under Section 234E" },
];

const requiredDocs = [
    "PAN and TAN of Remitter",
    "PAN of the Beneficiary (if applicable)",
    "Bank Details",
    "Invoice and Agreement Copies",
    "DTAA Certificate (if applicable)",
    "Foreign Bank Account Details",
];

const recentAmendments = [
    "Threshold Limit Revision: Remittances below ₹5 lakh in a financial year require only Form 15CA (Part A), not 15CB",
    "Real-Time Verification: Mandatory real-time PAN and TAN verification",
    "Electronic Submission Only: All submissions must be through the new Income Tax e-Filing Portal",
    "Pre-filled Details: Enhanced integration with the portal for auto-filling remitter and remittee details",
    "Integration with TDS Compliance: TDS details are auto-verified during Form 15CB certification",
];

const whyChooseUs = [
    "Expert Filing: Seamless filing with zero errors",
    "DTAA Optimization: Maximize tax benefits under Double Taxation Avoidance Agreements",
    "End-to-End Support: From documentation to certification",
    "Bank Coordination: Hassle-free submission to authorized banks",
];

export default function Filing15CA15CBPage() {
  return (
    <main>
      <div className="py-6 bg-secondary">
        <div className="container mx-auto px-4">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Tax Filing', href: '/tax-filing' },
              { label: '15CA & 15CB Filing' },
            ]}
          />
        </div>
      </div>

      <section id="service-details" className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <h1 className="text-3xl md:text-4xl font-bold font-headline mb-4">
                15CA & 15CB Filing Services
              </h1>

              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">What Are Form 15CA and 15CB?</h2>
                <p className="text-muted-foreground text-justify mb-4">
                  Forms 15CA and 15CB are critical for remittances outside India, ensuring that tax compliance is met under Section 195 of the Income Tax Act, 1961 before transferring funds to a non-resident or foreign entity.
                </p>
                <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                  <li><strong>Form 15CA:</strong> Self-declaration by the remitter confirming TDS deduction on foreign remittance, submitted on the Income Tax e-filing portal.</li>
                  <li><strong>Form 15CB:</strong> Certificate from a Chartered Accountant verifying the nature, taxability, and TDS deduction on foreign remittance—required in specific cases.</li>
                </ul>
                <p className="text-muted-foreground text-justify mt-4">
                  These forms are integral to RBI’s Liberalised Remittance Scheme (LRS) and are mandatorily required by banks before processing any foreign payment.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Why are Form 15CA and 15CB Important?</h2>
                <p className="text-muted-foreground mb-2">The forms are crucial for the following reasons:</p>
                <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                  {importancePoints.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Who Needs to File Form 15CA/15CB?</h2>
                <p className="text-muted-foreground mb-2">You need to file 15CA and/or 15CB if you’re sending money abroad for:</p>
                <ul className="space-y-2 pl-5 list-disc text-muted-foreground">
                  {whoNeedsItReasons.map((reason, index) => (
                    <li key={index}>{reason}</li>
                  ))}
                </ul>
                <p className="text-muted-foreground mt-4 mb-2">And you are:</p>
                <ul className="space-y-2 pl-5 list-disc text-muted-foreground">
                  {whoNeedsItEntities.map((entity, index) => (
                    <li key={index}>{entity}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">When is Form 15CB Required?</h2>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Condition</TableHead>
                      <TableHead>Form 15CB Required?</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {cbRequiredConditions.map((item, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{item.condition}</TableCell>
                        <TableCell>{item.required}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">When is Form 15CA &amp; 15CB Required?</h2>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Transaction Type</TableHead>
                      <TableHead>Form 15CA</TableHead>
                      <TableHead>Form 15CB</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {formRequirements.map((item, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{item.type}</TableCell>
                        <TableCell>{item.form15ca}</TableCell>
                        <TableCell>{item.form15cb}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">How to File Form 15CA and 15CB?</h2>
                <ol className="space-y-3 list-decimal pl-5 text-muted-foreground">
                  {filingSteps.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ol>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">CACSFinacc 15CA/15CB Filing Process</h2>
                 <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                  {ourProcess.map((step, index) => (
                    <li key={index}><strong>{step.title}:</strong> {step.description}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Penalties for Non-Compliance</h2>
                 <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                  {penalties.map((item, index) => (
                    <li key={index}><strong>{item.nonCompliance}:</strong> {item.penalty}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Documents Required</h2>
                <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                  {requiredDocs.map((doc, index) => (
                    <li key={index}>{doc}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Recent Amendments for AY 2025-26</h2>
                <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                  {recentAmendments.map((amendment, index) => (
                    <li key={index}>{amendment}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Why Choose CACSFinacc Services?</h2>
                 <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                  {whyChooseUs.map((reason, index) => (
                    <li key={index}>{reason}</li>
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
