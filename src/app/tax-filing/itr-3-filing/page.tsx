
'use client';

import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { QuoteForm } from '@/components/quote-form';
import { Phone, Mail } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const whoShouldFile = [
    "Individuals and HUFs with income from business or profession.",
    "Partners in firms earning income like salary, commission, bonus, or interest.",
    "Taxpayers with income from salary/pension, house property, capital gains, and other sources.",
    "Those earning income from: Proprietary business, Professional services (e.g., CA, Doctor, Architect), Partnership firms (only for individual partners, not the firm itself), Income from salary or pension, house property, capital gains, or other sources.",
];

const structureSections = [
    "Part A - General Information",
    "Part B - Gross Total Income",
    "Schedule BP - Income from Business or Profession",
    "Schedule CG - Capital Gains",
    "Schedule OS - Income from Other Sources",
    "Schedule VDA - Virtual Digital Assets",
    "Schedule VI-A - Deductions and Exemptions",
    "Part B - Total Income and Tax Computation",
    "Verification and Signatures",
];

const filingMethods = [
    {
        title: "Online Filing (e-Filing)",
        items: [
            "Log in to the Income Tax e-Filing portal.",
            "Select ITR-3 and assessment year 2025-26.",
            "Fill in the relevant details and upload necessary documents.",
            "Submit and e-verify using Aadhaar OTP, EVC, or DSC."
        ]
    },
    {
        title: "Offline Filing",
        items: [
            "Download the ITR-3 Java or Excel utility from the Income Tax portal.",
            "Fill, validate, and generate XML.",
            "Upload the XML on the portal."
        ]
    }
];

const requiredDocs = [
    "PAN (Permanent Account Number)",
    "Aadhaar Card",
    "Bank account details (account number and IFSC code)",
    "Form 16, if applicable (for salaried individuals)",
    "Details of your investments",
    "Books of accounts (if you have a business or professional income)",
];

const commonMistakes = [
    "Incorrect Personal Details: PAN, Name, and Address should match with IT records.",
    "Skipping VDA Reporting: Ensure to fill Schedule VDA for digital assets.",
    "Mismatched TDS Details: Cross-check with Form 26AS and AIS.",
    "Improper Claim of Deductions: Validate proofs for claimed deductions.",
];

const keyAmendments = [
    {
        title: "Capital Gains Reporting Enhancements",
        items: [
            "Separate disclosure for capital gains on assets sold before and after July 23, 2024.",
            "Buyback proceeds from listed companies post October 1, 2024, to be reported as 'Nil' consideration under capital gains and also under 'Income from Other Sources'."
        ]
    },
    {
        title: "Asset and Liability Disclosure Threshold Increased",
        items: ["Mandatory reporting only if total income exceeds ₹1 crore, up from the previous ₹50 lakh."]
    },
    {
        title: "Tax Regime Selection Disclosure",
        items: ["Taxpayers must specify their choice between the old and new tax regimes and provide details of Form 10-IE or 10-IEA, as applicable."]
    },
    {
        title: "Mandatory TDS Section Specification",
        items: ["Taxpayers are now required to mention the TDS section under which tax was deducted for each income source."]
    },
    {
        title: "High-Value Transaction Reporting",
        items: [
            "Mandatory disclosure for: Cash deposits over ₹1 crore in current accounts, Foreign travel expenses exceeding ₹2 lakh, Electricity bills over ₹1 lakh, Credit card payments exceeding ₹10 lakh."
        ]
    },
    {
        title: "Cryptocurrency and Virtual Digital Asset Reporting",
        items: ["Income from Virtual Digital Assets (VDAs) must be separately disclosed under Schedule VDA. with a 30% tax rate applied."]
    },
    {
        title: "New Deduction Limits",
        items: ["Revised limits under Section 80C, 80D, and 80G."]
    },
    {
        title: "Advanced Tax Computation",
        items: ["Adjustments in advance tax liability calculations for businesses with fluctuating cash flows."]
    }
];

const whyChooseUs = [
    "Expertise: Our team stays updated with the latest tax laws and amendments.",
    "Accuracy: Ensuring error-free filings to minimize the risk of notices.",
    "Timeliness: Adherence to all deadlines to avoid penalties.",
    "Confidentiality: Strict measures to protect your financial data.",
];


export default function ITR3FilingPage() {
  return (
    <main>
      <div className="py-6 bg-secondary">
        <div className="container mx-auto px-4">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Tax Filing', href: '/tax-filing' },
              { label: 'ITR-3 Filing' },
            ]}
          />
        </div>
      </div>

      <section id="service-details" className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <h1 className="text-3xl md:text-4xl font-bold font-headline mb-4">
                ITR-3 Return Filing Services
              </h1>

              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">ITR-3 Filing</h2>
                <p className="text-muted-foreground text-justify">
                  ITR-3 is specifically designed for individuals and Hindu Undivided Families (HUFs) who have income from profits and gains of business or profession. This includes both proprietary businesses and professional income. For AY 2025-26, significant amendments and procedural changes have been introduced, aligning with the latest Finance Act, 2023.
                </p>
                <p className="text-muted-foreground text-justify mt-4">
                  CACSFinacc Services offers specialized ITR-3 Return Filing solutions tailored for individuals and Hindu Undivided Families (HUFs) engaged in business or professional activities. With the latest amendments for Assessment Year (AY) 2025-26, our expert team ensures accurate, compliant, and timely filings.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Who Should File ITR-3?</h2>
                <p className="text-muted-foreground text-justify mb-4">
                  ITR-3 is applicable to:
                </p>
                <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                  {whoShouldFile.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <p className="text-muted-foreground text-justify mt-4 text-sm">
                  <strong>Note:</strong> Those eligible for ITR-1, ITR-2, or ITR-4 should not use ITR-3.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Who should not file the ITR 3 Form?</h2>
                <p className="text-muted-foreground text-justify">
                  An individual or Hindu Undivided Family (HUF) earning income as a partner of a partnership firm engaged in a business or profession is not eligible to file ITR-3. In such cases, they should file ITR-2 instead.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Due Date for Filing Form ITR3</h2>
                <p className="text-muted-foreground text-justify mb-4">
                  The due date for filing the ITR Form 3, which is the income tax return, varies depending on whether the case is an audit case or a non-audit case for different assessment years:
                </p>
                <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                    <li>For Assessment Year 2025-26:</li>
                    <li className="ml-5">Non-audit Cases: The due date is July 31, 2025</li>
                    <li className="ml-5">Audit Cases: The due date is October 31, 2025</li>
                </ul>
                <p className="text-muted-foreground text-justify mt-4">
                  These dates are subject to change by the income tax authorities, so it's essential to stay updated with any revisions or extensions of the due dates.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Late Filing Penalties for ITR3 Form</h2>
                <p className="text-muted-foreground text-justify mb-4">
                  The penalties for late filing of the ITR3 form in India are as follows:
                </p>
                <p className="text-muted-foreground text-justify">
                    If you file your return after the due date but before December 31 of the assessment year:
                </p>
                 <ul className="space-y-2 pl-5 list-disc text-muted-foreground">
                    <li>A late filing fee of ₹ 5,000 may be levied.</li>
                    <li>If you file your return after December 31 of the assessment year: A late filing fee of ₹ 10,000 may be levied.</li>
                </ul>
                 <p className="text-muted-foreground text-justify mt-4">
                  It's important to note that the late filing fee may vary based on the taxpayer's total income and other factors. Additionally, if your total income is less than ₹ 5 lakh, the maximum late filing fee is capped at ₹ 1,000. Therefore, it's advisable to file your ITR form 3 on time to avoid these penalties and any potential legal consequences.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Structure of ITR-3</h2>
                <p className="text-muted-foreground text-justify mb-4">
                  ITR-3 consists of the following sections:
                </p>
                 <ol className="space-y-2 list-decimal pl-5 text-muted-foreground">
                  {structureSections.map((section, index) => (
                    <li key={index}>{section}</li>
                  ))}
                </ol>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">How to File ITR-3?</h2>
                <ol className="space-y-4 list-decimal pl-5">
                    {filingMethods.map((method, index) => (
                        <li key={index}>
                            <p className="font-semibold">{method.title}</p>
                            <ul className="list-disc pl-5 text-muted-foreground mt-2 space-y-1">
                                {method.items.map((item, subIndex) => (
                                    <li key={subIndex}>{item}</li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ol>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Documents required for ITR 3 Form</h2>
                <p className="text-muted-foreground text-justify mb-4">
                  To file your income tax return (ITR) on CACSFinacc for ITR-3, the following documents are needed.
                </p>
                 <ul className="space-y-2 pl-5 list-disc text-muted-foreground">
                  {requiredDocs.map((doc, index) => (
                    <li key={index}>{doc}</li>
                  ))}
                </ul>
                 <p className="text-muted-foreground text-justify mt-4">
                  Having these documents ready will make the ITR filing process smoother and more efficient.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Common Mistakes to Avoid</h2>
                 <ul className="space-y-2 pl-5 list-disc text-muted-foreground">
                  {commonMistakes.map((mistake, index) => (
                    <li key={index}>{mistake}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Key Amendments for AY 2025-26</h2>
                <p className="text-muted-foreground text-justify mb-4">
                  The Finance Act, 2023, has brought crucial changes:
                </p>
                <ol className="space-y-4 list-decimal pl-5">
                    {keyAmendments.map((amendment, index) => (
                        <li key={index}>
                            <p className="font-semibold">{amendment.title}</p>
                            <ul className="list-disc pl-5 text-muted-foreground mt-2 space-y-1">
                                {amendment.items.map((item, subIndex) => (
                                    <li key={subIndex}>{item}</li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ol>
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
