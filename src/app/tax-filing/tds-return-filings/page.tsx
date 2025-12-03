
'use client';

import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { QuoteForm } from '@/components/quote-form';
import { Phone, Mail } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const importantPoints = [
    "Ensures compliance with the Income Tax Act, 1961.",
    "Prevents penalties and interest charges.",
    "Facilitates timely issuance of Form 16 and Form 16A.",
    "Allows smooth processing of tax credits for the deductee.",
];

const ourServices = [
    {
        title: "TDS Registration and Compliance",
        items: [
            "Assistance with TAN registration.",
            "Guidance on TDS applicability for various transactions.",
            "Ensuring compliance with Section 192, 194C, 194J, and other relevant sections."
        ]
    },
    {
        title: "Preparation and Filing of TDS Returns",
        items: [
            "Quarterly filing of TDS returns (24Q, 26Q, 27Q, and 27EQ).",
            "Generation and validation of Form 27A.",
            "Online submission of returns to the TIN-NSDL portal."
        ]
    },
    {
        title: "Correction and Revision of Returns",
        items: [
            "Support for revising TDS returns in case of discrepancies.",
            "Correction of PAN details, challan mismatches, and other errors."
        ]
    },
    {
        title: "Generation of TDS Certificates",
        items: [
            "Issuance of Form 16 and Form 16A to employees and vendors.",
            "Ensuring timely download and distribution as per statutory deadlines."
        ]
    },
    {
        title: "Form 26AS Reconciliation",
        items: [
            "Cross-checking the TDS deposited with the figures appearing in Form 26AS.",
            "Identification and rectification of mismatches."
        ]
    },
    {
        title: "Penalty Management and Compliance Advisory",
        items: [
            "Advisory on avoiding common errors that lead to interest and late filing penalties.",
            "Assistance in responding to TDS notices from the Income Tax Department."
        ]
    }
];

const keyUpdates = [
    {
        title: "Revised TDS Threshold Limits",
        description: "The Budget 2025 has introduced enhanced threshold limits for TDS, ensuring that smaller transactions remain exempt from tax deduction, thereby reducing the compliance burden. These revised limits, effective from April 1, 2025, apply to various sections of the Income Tax Act, 1961."
    },
    {
        title: "Updated TDS Return Filing Due Dates",
        description: "For FY 2025–26, the due dates for filing quarterly TDS returns are as follows:",
        items: [
            "Q1 (April–June): 31st July 2025",
            "Q2 (July–September): 31st October 2025",
            "Q3 (October–December): 31st January 2026",
            "Q4 (January–March): 31st May 2026"
        ],
        extra: "Timely filing is essential to avoid penalties and ensure compliance."
    },
    {
        title: "Penalties for Non-Compliance",
        description: "Failure to file TDS returns on time or providing incorrect information can lead to penalties:",
        items: [
            "Late Filing Fee (Section 234E): ₹200 per day until the return is filed, subject to a maximum of the TDS amount.",
            "Penalty (Section 271H): Ranging from ₹10,000 to ₹1,00,000 for incorrect details or non-filing.",
            "Interest (Section 201(1A)): 1.5% per month for delayed payment of TDS."
        ]
    }
];

const cacsfinaccSolutions = [
    "Accurate Preparation: Ensuring all TDS details are correctly captured and reported.",
    "Timely Filing: Adhering to all statutory deadlines to avoid penalties.",
    "Compliance Management: Keeping you updated with the latest TDS regulations and ensuring adherence.",
    "Error Rectification: Assisting in correcting any discrepancies or errors in TDS returns.",
];


export default function TdsReturnFilingPage() {
  return (
    <main>
      <div className="py-6 bg-secondary">
        <div className="container mx-auto px-4">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Tax Filing', href: '/tax-filing' },
              { label: 'TDS Return Filings' },
            ]}
          />
        </div>
      </div>

      <section id="service-details" className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <h1 className="text-3xl md:text-4xl font-bold font-headline mb-4">
                TDS Return Filing
              </h1>
              
              <p className="text-muted-foreground text-justify">
                At CACSFinacc Services, we understand that compliance with the
                Tax Deducted at Source (TDS) regulations is crucial for the
                smooth functioning of your business. With frequent changes in
                tax laws and stringent compliance requirements, staying updated
                and filing timely returns is essential to avoid penalties and
                ensure seamless financial operations.
              </p>

              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Why TDS Return Filing is Important?</h2>
                <p className="text-muted-foreground text-justify mb-4">
                  TDS is a mechanism by which tax is collected at the source of
                  income. It applies to various payments, such as:
                </p>
                <ul className="space-y-2 pl-5 list-disc text-muted-foreground">
                    <li>Salaries</li>
                    <li>Rent</li>
                    <li>Interest</li>
                    <li>Professional Fees</li>
                    <li>Commission Payments</li>
                    <li>Contractual Payments</li>
                </ul>
                <p className="text-muted-foreground text-justify mt-4">
                  Filing TDS returns accurately and on time:
                </p>
                <ul className="space-y-3 pl-5 list-disc text-muted-foreground mt-4">
                  {importantPoints.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Our TDS Return Filing Services Include:</h2>
                <ol className="space-y-4 list-decimal pl-5">
                  {ourServices.map((service, index) => (
                    <li key={index}>
                      <p className="font-semibold">{service.title}</p>
                      <ul className="list-disc pl-5 text-muted-foreground mt-2 space-y-1">
                        {service.items.map((item, subIndex) => (
                          <li key={subIndex}>{item}</li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ol>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Key Updates for Financial Year (FY) 2025–26</h2>
                <ol className="space-y-4 list-decimal pl-5">
                  {keyUpdates.map((update, index) => (
                    <li key={index}>
                      <p className="font-semibold">{update.title}</p>
                      <p className="text-muted-foreground mt-1">{update.description}</p>
                      {update.items && (
                        <ul className="list-disc pl-5 text-muted-foreground mt-2 space-y-1">
                          {update.items.map((item, subIndex) => (
                            <li key={subIndex}>{item}</li>
                          ))}
                        </ul>
                      )}
                      {update.extra && <p className="text-muted-foreground mt-2">{update.extra}</p>}
                    </li>
                  ))}
                </ol>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Our TDS Return Filing Services</h2>
                 <p className="text-muted-foreground text-justify mb-4">
                  At CACSFinacc Services, we provide comprehensive TDS return
                  filing solutions:
                </p>
                <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                  {cacsfinaccSolutions.map((solution, index) => (
                    <li key={index}>{solution}</li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-muted-foreground text-justify font-semibold">
                  Stay ahead in TDS compliance with CACSFinacc Services. Contact
                  us today to streamline your TDS return filing process.
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
