
'use client';

import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { QuoteForm } from '@/components/quote-form';
import { Phone, Mail } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const pfServices = [
    {
        title: "PF Registration and Compliance Setup",
        items: [
            "Assistance with PF Registration for new establishments.",
            "Generation of Universal Account Number (UAN) for employees.",
            "Guidance on documentation and eligibility criteria."
        ]
    },
    {
        title: "Monthly PF Contribution Filing",
        items: [
            "Calculation of monthly contributions (Employer 12%, Employee 12%).",
            "Preparation and submission of Electronic Challan cum Return (ECR).",
            "Online payment facilitation through the EPFO portal."
        ]
    },
    {
        title: "Annual PF Return Filing",
        items: [
            "Filing of Form 3A (Employee-wise annual contribution) and Form 6A (Annual return of contributions).",
            "Compliance with statutory due dates and updates as per EPFO norms."
        ]
    },
    {
        title: "Maintenance of Statutory Records",
        items: [
            "Accurate maintenance of employee records, Form 11, and Form 5A.",
            "Timely updates for employee additions, exits, and KYC details."
        ]
    },
    {
        title: "Employee Services",
        items: [
            "Support for PF withdrawal, transfer, and correction of UAN details.",
            "Generation of Member Passbook for employee reference."
        ]
    },
    {
        title: "Compliance with Latest Amendments",
        items: [
            "Adoption of changes in the EPF wage ceiling, digital KYC norms, and contribution structures.",
            "Ensuring compliance with the latest EPFO notifications and circulars."
        ]
    }
];

const ptServices = [
    {
        title: "PT Registration",
        items: [
            "Assistance with PT Registration for businesses across states.",
            "Issuance of PT Registration Certificate (PTRC) and PT Enrollment Certificate (PTEC)."
        ]
    },
    {
        title: "Monthly & Annual PT Return Filing",
        items: [
            "Calculation of professional tax based on salary slabs.",
            "Timely filing of monthly and annual returns with the relevant state government portal.",
            "Reconciliation of payments and rectification of discrepancies."
        ]
    },
    {
        title: "Payment of PT Dues",
        items: [
            "Secure and hassle-free online payment of PT liabilities.",
            "Generation of payment challans and acknowledgment receipts."
        ]
    },
    {
        title: "Maintenance of Records",
        items: [
            "Accurate maintenance of Form 2 (Employee Declaration), Form 5 (Return Form), and Form 8A (Amendment Form).",
            "Digital storage of records for easy retrieval during assessments and audits."
        ]
    },
    {
        title: "Compliance with State-specific Laws",
        items: [
            "Ensuring adherence to state-specific PT rules and regulations.",
            "Updates on any changes in rates or filing procedures."
        ]
    }
];

const pfCompliance = {
    updates: [
        "Monthly PF Contribution Payment & ECR Filing: Employers are required to deposit PF contributions and file the Electronic Challan cum Return (ECR) on or before the 15th of every month.",
        "Annual PF Return Filing: Submission of Form 3A and Form 6A is due by 30th April each year, detailing individual and consolidated annual PF contributions."
    ],
    penalties: [
        "Delayed Payment: Interest at 12% per annum for each day of delay.",
        "Default in Payment: Damages ranging from 5% to 25% per annum, depending on the period of default."
    ]
};

const ptCompliance = {
    updates: [
        "Monthly PT Payment: In Karnataka, employers must remit PT on salaries by the 10th of the following month.",
        "Annual PT Return Filing: Form 4A must be filed annually by 30th April, summarizing the PT deductions and payments for the previous financial year."
    ],
    penalties: [
        "Late Payment: Interest and penalties as prescribed under the Karnataka PT Act."
    ]
};

const whyChooseUs = [
    "Expert Compliance Handling: We manage every aspect of PF and PT compliance professionally.",
    "Timely Submissions: Prevent penalties and notices with our proactive filing approach.",
    "Data Security: Secure management of employee and payroll data.",
    "End-to-End Support: From registration to filing, we cover all your compliance needs.",
];


export default function PfPtReturnFilingPage() {
  return (
    <main>
      <div className="py-6 bg-secondary">
        <div className="container mx-auto px-4">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Tax Filing', href: '/tax-filing' },
              { label: 'PF & PT Return Filings' },
            ]}
          />
        </div>
      </div>

      <section id="service-details" className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <h1 className="text-3xl md:text-4xl font-bold font-headline mb-4">
                PF & PT Return Filing
              </h1>
              <p className="text-muted-foreground text-justify">
                At CACSFinacc Services, we simplify the complexities of
                Provident Fund (PF) and Professional Tax (PT) Return Filing by
                offering reliable and efficient solutions. We ensure complete
                compliance with the latest regulations, reducing risks of
                penalties and legal challenges for your business.
              </p>

              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Provident Fund (PF) Return Filing</h2>
                <p className="text-muted-foreground text-justify mb-6">
                  Provident Fund is a crucial part of an employee's financial
                  security, regulated under the Employees' Provident Fund and
                  Miscellaneous Provisions Act, 1952. Employers with 20 or more
                  employees are required to register for PF and contribute towards
                  the retirement savings of their workforce.
                </p>
                <h3 className="text-xl font-bold font-headline mb-4">Our PF Services Include:</h3>
                <ol className="space-y-4 list-decimal pl-5">
                  {pfServices.map((service, index) => (
                    <li key={index}>
                      <p className="font-semibold">{service.title}</p>
                      <ul className='list-disc pl-5 text-muted-foreground mt-2 space-y-1'>
                        {service.items.map((item, subIndex) => (
                          <li key={subIndex}>{item}</li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ol>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Professional Tax (PT) Return Filing</h2>
                <p className="text-muted-foreground text-justify mb-6">
                  Professional Tax (PT) is a state-level tax applicable to
                  salaried employees, professionals, and business owners. The tax
                  rates and regulations vary across different states in India.
                </p>
                <h3 className="text-xl font-bold font-headline mb-4">Our PT Services Include:</h3>
                <ol className="space-y-4 list-decimal pl-5">
                  {ptServices.map((service, index) => (
                    <li key={index}>
                      <p className="font-semibold">{service.title}</p>
                      <ul className='list-disc pl-5 text-muted-foreground mt-2 space-y-1'>
                        {service.items.map((item, subIndex) => (
                          <li key={subIndex}>{item}</li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ol>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Provident Fund (PF) Compliance</h2>
                <h3 className="font-semibold text-lg mt-4 mb-2">Key Updates for FY 2025–26</h3>
                <ul className="space-y-2 pl-5 list-disc text-muted-foreground">
                  {pfCompliance.updates.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <h3 className="font-semibold text-lg mt-4 mb-2">Penalties for Non-Compliance</h3>
                 <ul className="space-y-2 pl-5 list-disc text-muted-foreground">
                  {pfCompliance.penalties.map((item, index) => (
                    <li key={index}><strong>{item.split(':')[0]}:</strong>{item.split(':')[1]}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Professional Tax (PT) Compliance</h2>
                <h3 className="font-semibold text-lg mt-4 mb-2">Key Updates for FY 2025–26</h3>
                <ul className="space-y-2 pl-5 list-disc text-muted-foreground">
                  {ptCompliance.updates.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <h3 className="font-semibold text-lg mt-4 mb-2">Penalties for Non-Compliance</h3>
                 <ul className="space-y-2 pl-5 list-disc text-muted-foreground">
                  {ptCompliance.penalties.map((item, index) => (
                    <li key={index}><strong>{item.split(':')[0]}:</strong>{item.split(':')[1]}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Why Choose CACSFinacc Services?</h2>
                 <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                  {whyChooseUs.map((item, index) => (
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

