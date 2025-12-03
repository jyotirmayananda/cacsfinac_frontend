
'use client';

import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { QuoteForm } from '@/components/quote-form';
import { Phone, Mail } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const whoShouldFile = [
  "Salary/Pension",
  "One House Property",
  "Other Sources (e.g., interest income, dividends, etc.)",
  "Agricultural Income up to ₹5,000",
];

const notEligible = [
  "Earns more than ₹50 lakhs per annum.",
  "Owns more than one house property.",
  "Has income from business or profession.",
  "Holds foreign assets or has foreign income.",
  "Has capital gains income.",
  "Is a Director in a company.",
  "Owns unlisted equity shares.",
];

const ourServices = [
    {
        title: "Document Collection and Analysis",
        items: [
            "Compilation of required documents: Form 16, interest certificates, salary slips, and rent receipts.",
            "Verification of PAN, Aadhaar, and bank details for accuracy."
        ]
    },
    {
        title: "Income Computation and Tax Calculation",
        items: [
            "Calculation of total taxable income under different heads.",
            "Application of standard deduction of ₹50,000, HRA exemptions, and Section 10 exemptions.",
            "Computation of rebate under Section 87A for eligible individuals."
        ]
    },
    {
        title: "Deductions and Exemptions Application",
        items: [
            "Claiming deductions under Section 80C (LIC, PPF, NSC, etc.), 80D (Medical Insurance), and 80TTA (Savings Account Interest).",
            "Ensuring maximum tax benefits through proper application of exemptions."
        ]
    },
    {
        title: "E-Filing and Verification",
        items: [
            "Filing of ITR-1 on the Income Tax E-filing Portal.",
            "Guidance for e-verification through Aadhaar OTP, Net Banking, or Digital Signature."
        ]
    },
    {
        title: "Handling of Revised and Belated Returns",
        items: [
            "Support for filing Revised Returns under Section 139(5) and Belated Returns under Section 139(4) if missed the original deadline."
        ]
    },
    {
        title: "Refund Tracking and Support",
        items: [
            "Assistance in tracking income tax refunds and resolving any discrepancies.",
            "Support in responding to Income Tax notices if required."
        ]
    }
];

const keyUpdates = [
    "Inclusion of Long-Term Capital Gains (LTCG) up to ₹1.25 Lakh: Taxpayers can now report LTCG up to ₹1.25 lakh under Section 112A directly in ITR-1, provided there are no capital losses to carry forward. This change simplifies the filing process for small investors.",
    "Mandatory Disclosure of TDS Sections: Taxpayers must specify the relevant Tax Deducted at Source (TDS) section under which tax was deducted for each income source, enhancing transparency and accuracy in tax reporting.",
    "Removal of Aadhaar Enrolment ID Option: The ITR-1 form has removed the column for Aadhaar Enrolment ID. Taxpayers must now provide their actual Aadhaar number when filing returns.",
    "Mandatory Declaration of Tax Regime: Taxpayers must explicitly declare their choice between the old and new tax regimes. First-time opt-outs from the new regime must submit Form 10-IEA and mention the acknowledgement number.",
];

const cacsfinaccSolutions = [
    "Accurate Calculation: Ensuring precise computation of income, deductions, and tax liabilities based on current regulations.",
    "Timely Filing: Adhering to all statutory deadlines to prevent penalties.",
    "Documentation Management: Maintaining essential records and supporting documents for audit readiness.",
    "Compliance Advisory: Providing guidance on tax regulations and updates to keep your filings compliant.",
];

export default function ITR1FilingPage() {
  return (
    <main>
      <div className="py-6 bg-secondary">
        <div className="container mx-auto px-4">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Tax Filing', href: '/tax-filing' },
              { label: 'ITR-1 (Sahaj) Filing' },
            ]}
          />
        </div>
      </div>

      <section id="service-details" className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <h1 className="text-3xl md:text-4xl font-bold font-headline mb-4">
                ITR-1 (Sahaj) Filing Services
              </h1>

              <div>
                <p className="text-muted-foreground text-justify">
                  ITR, or Income Tax Return, is a crucial document in which taxpayers report their income and applicable taxes to the income tax department. The Income Tax Act of 1961 outlines all the ITR forms and their procedures. Among these forms, ITR-1, often referred to as Sahaj, holds particular significance. ITR1 (Sahaj) is designed for individuals with an income of up to Rs.50 lakhs, making it applicable to most salaried individuals.
                </p>
                <p className="text-muted-foreground text-justify mt-4">
                  At CACSFinacc Services, we specialize in providing efficient and accurate ITR-1 Return Filing services for individuals with straightforward income sources. Our team is well-versed with the latest amendments introduced for the Assessment Year 2024-25, ensuring complete compliance and hassle-free submission.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">What is ITR-1 (Sahaj)?</h2>
                <p className="text-muted-foreground text-justify mb-4">
                  ITR-1, also known as Sahaj, is a simplified Income Tax Return form for individuals who have income from:
                </p>
                <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                    {whoShouldFile.map((item, index) => (
                        <li key={index}><strong>{item}</strong></li>
                    ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Not Eligible to File ITR-1:</h2>
                <p className="text-muted-foreground text-justify mb-4">
                  ITR-1 cannot be used if the individual:
                </p>
                <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                    {notEligible.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Who Should File ITR-1?</h2>
                <p className="text-muted-foreground text-justify mb-4">
                  ITR-1, also known as Sahaj, is applicable for resident individuals (other than not ordinarily resident) who have:
                </p>
                <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                    {whoShouldFile.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                 <p className="text-muted-foreground text-justify mt-4">
                  Total income should not exceed ₹50 lakh during the financial year.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Our ITR-1 Filing Services Include:</h2>
                <ol className="space-y-4 list-decimal pl-5">
                    {ourServices.map((service, index) => (
                        <li key={index}>
                            <p className="font-semibold">{service.title}</p>
                            <ul className='list-disc pl-5 text-muted-foreground'>
                                {service.items.map((item, subIndex) => (
                                    <li key={subIndex}>{item}</li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ol>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Key Updates for Assessment Year (AY) 2025–26</h2>
                <ol className="space-y-3 list-decimal pl-5 text-muted-foreground">
                    {keyUpdates.map((item, index) => <li key={index}>{item}</li>)}
                </ol>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Our ITR-1 Return Filing Services</h2>
                <p className="text-muted-foreground text-justify mb-4">
                  At CACSFinacc Services, we offer comprehensive solutions to manage your ITR-1 obligations:
                </p>
                <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                  {cacsfinaccSolutions.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-muted-foreground text-justify font-semibold">
                  Ensure seamless ITR-1 compliance with CACSFinacc Services. Contact us today to streamline your return filing process.
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
