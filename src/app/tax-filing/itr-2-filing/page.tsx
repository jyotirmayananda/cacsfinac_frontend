
'use client';

import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { QuoteForm } from '@/components/quote-form';
import { Phone, Mail } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const whoShouldFile = [
    "Income from Salary/Pension.",
    "Income from House Property (more than one).",
    "Income from Capital Gains.",
    "Income from Other Sources (Interest, Dividends, etc.).",
    "Foreign Assets or Foreign Income.",
    "Agricultural income exceeding ₹5,000.",
];

const whoShouldFileDetailed = [
    "Have income from salary/pension.",
    "Earn income from capital gains (e.g., sale of property, shares).",
    "Have income from more than one house property.",
    "Have foreign income or own foreign assets.",
    "Hold directorships in companies or unlisted equity shares.",
    "Have agricultural income exceeding ₹5,000.",
    "Do not have income from profits and gains of business or profession.",
];

const keyUpdates = [
    {
        title: "Enhanced Capital Gains Reporting",
        description: "The ITR-2 form now features a separate section for detailed reporting of capital gains, including provisions for claiming capital losses from share buybacks effective from October 1, 2024. It requires mandatory reporting of sale proceeds from listed and unlisted shares separately."
    },
    {
        title: "Increased Asset Reporting Threshold",
        description: "Taxpayers with gross total income exceeding ₹1 crore are now required to furnish details of assets and liabilities, raising the threshold from the previous ₹50 lakh limit."
    },
    {
        title: "Mandatory Disclosure of TDS Sections",
        description: "Taxpayers must specify the relevant Tax Deducted at Source (TDS) section under which tax was deducted for each income source, enhancing transparency and accuracy in tax reporting."
    },
    {
        title: "Aadhaar Enrolment ID No Longer Accepted",
        description: "The ITR-2 form has removed the column for Aadhaar Enrolment ID. Taxpayers must now provide their actual Aadhaar number when filing returns."
    },
    {
        title: "Disclosure of Virtual Digital Assets (VDAs)",
        description: "Mandatory disclosure of all VDA transactions, including cryptocurrencies and NFTs. A tax rate of 30% applies on gains, with TDS at 1% on transactions above ₹50,000 for specified individuals."
    },
    {
        title: "Residential Status and Global Income",
        description: "Expanded scope for Non-Resident Indians (NRIs) with clear guidelines on income accrual and taxation."
    },
    {
        title: "Foreign Assets and Income Disclosure",
        description: "Mandatory reporting of foreign bank accounts, immovable properties, and financial interests."
    },
     {
        title: "Section 80C to 80U Deductions",
        description: "Updated deduction limits and new eligibility criteria for specific investments."
    }
];

const ourServices = [
    {
        title: "Documentation and Analysis",
        items: [
            "Compilation of necessary documents: Form 16, interest certificates, property income details, capital gains statements, etc.",
            "Analysis of investment proofs, deductions, and exemptions applicable under Sections 80C to 80U."
        ]
    },
    {
        title: "Capital Gains Computation",
        items: [
            "Accurate computation of Short-term and Long-term Capital Gains from shares, mutual funds, real estate, and other investments.",
            "Adjustment for indexation benefits and application of exemptions under Sections 54, 54EC, and 54F."
        ]
    },
    {
        title: "Foreign Assets & Income Reporting",
        items: [
            "Detailed reporting of foreign bank accounts, financial interests, and immovable property as required under the Black Money Act.",
            "Compliance with Schedule FA (Foreign Assets)."
        ]
    },
    {
        title: "House Property Income Calculation",
        items: [
            "Calculation of income from multiple house properties.",
            "Deduction of municipal taxes paid, standard deduction (30%), and interest on borrowed capital."
        ]
    },
    {
        title: "Deductions and Exemptions Application",
        items: [
            "Application of deductions under Chapter VI-A for savings, investments, and insurance premiums.",
            "Application of Section 80D (Medical Insurance), 80G (Donations), and other eligible sections."
        ]
    },
    {
        title: "E-Filing and Verification",
        items: [
            "Submission of ITR-2 on the Income Tax e-filing portal.",
            "Guidance for e-verification through Aadhaar OTP, Net Banking, or Digital Signature."
        ]
    },
    {
        title: "Handling of Revised and Belated Returns",
        items: [
            "Support for filing Revised Returns under Section 139(5) and Belated Returns under Section 139(4) before the deadlines."
        ]
    }
];

const requiredDocsPersonal = [
    "PAN Card",
    "Aadhaar Card",
    "Bank Account Details (with IFSC)",
];

const requiredDocsIncome = [
    "Salary Slips",
    "Rent Receipts",
    "Capital Gains Statements",
];

const requiredDocsInvestment = [
    "ELSS, PPF, NSC, LIC Premium Receipts",
    "Home Loan Interest Certificate",
];

const requiredDocsOther = [
    "Form 16 and Form 16A",
    "Form 26AS",
    "Details of Foreign Assets (if applicable)",
];

const filingSteps = [
    { 
        title: "Login to Income Tax Portal",
        items: [
            "Navigate to Income Tax E-Filing Portal",
            "Use your PAN as the User ID."
        ]
    },
    { 
        title: "Select ITR-2 Form",
        items: ["Choose the assessment year: 2025-26"]
    },
    { 
        title: "Fill in the Required Details",
        items: [
            "Personal Information",
            "Income Details",
            "Deductions and Exemptions",
        ]
    },
    { 
        title: "Verify and Submit",
        items: [
            "Cross-check all details for accuracy.",
            "Verify through Aadhaar OTP, Net Banking, or Digital Signature."
        ]
    },
    { 
        title: "E-Verification",
        items: ["Complete e-verification within 30 days of submission."]
    }
];

const whyChooseUs = [
    "Expert Guidance: Our team is well-versed in the latest amendments and filing procedures.",
    "Error-Free Filing: We ensure accurate filing with zero errors, minimizing chances of scrutiny.",
    "Data Security: Confidential handling of your financial information with high-level encryption.",
    "End-to-End Support: From documentation to e-verification, we manage the entire process for you.",
];

export default function ITR2FilingPage() {
  return (
    <main>
      <div className="py-6 bg-secondary">
        <div className="container mx-auto px-4">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Tax Filing', href: '/tax-filing' },
              { label: 'ITR-2 Filing' },
            ]}
          />
        </div>
      </div>

      <section id="service-details" className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <h1 className="text-3xl md:text-4xl font-bold font-headline mb-4">
                ITR-2 Return Filing Services
              </h1>

              <div>
                <p className="text-muted-foreground text-justify">
                  ITR, or Income Tax Return, is a crucial document in which taxpayers report their income and applicable taxes to the income tax department. The Income Tax Act of 1961 outlines all the ITR forms and procedures. Among these forms, the ITR-2 form is designated for individuals and Hindu Undivided Families who do not generate income from professional or business activities. Understanding what ITR-2 is crucial for individuals having income from sources such as salary, house property, capital gains, or other sources apart from business or profession.
                </p>
                <p className="text-muted-foreground text-justify mt-4">
                  At CACSFinacc Services, we provide expert services for seamless and error-free ITR-2 Return Filing for individuals and HUFs. We understand the complexities involved in declaring income from multiple sources, including capital gains, foreign assets, and more. Our team ensures complete compliance with the Income Tax Act, 1961, and the latest guidelines issued by the Income Tax Department for the Assessment Year 2025-26.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">What is ITR-2?</h2>
                <p className="text-muted-foreground text-justify mb-4">
                  ITR-2 is the Income Tax Return form applicable for individuals and Hindu Undivided Families (HUFs) who have:
                </p>
                 <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                    {whoShouldFile.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                 <p className="text-muted-foreground text-justify mt-4">
                  <strong>Note:</strong> ITR-2 is not applicable for individuals with income from Business or Profession.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Who Should File ITR-2?</h2>
                <p className="text-muted-foreground text-justify mb-4">
                  ITR-2 is applicable for individuals and HUFs who:
                </p>
                <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                    {whoShouldFileDetailed.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Who Shouldn't Eligible for ITR 2 filing?</h2>
                <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                    <li>Individuals or Hindu Undivided Families (HUFs) with Income stemming from business or professional activities.</li>
                    <li>Individuals are eligible to complete the ITR-1 form (Sahaj).</li>
                </ul>
              </div>
              
               <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Key Updates for Assessment Year (AY) 2025–26</h2>
                <ol className="space-y-3 list-decimal pl-5 text-muted-foreground">
                    {keyUpdates.map((item, index) => (
                        <li key={index}>
                            <strong>{item.title}:</strong> {item.description}
                        </li>
                    ))}
                </ol>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Our ITR-2 Filing Services Include:</h2>
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
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Documents Required for Filing</h2>
                <div className="space-y-4">
                    <div>
                        <h3 className="font-semibold text-lg">Personal Information:</h3>
                        <ul className="space-y-2 pl-5 list-disc text-muted-foreground">
                            {requiredDocsPersonal.map((doc, index) => (
                                <li key={index}>{doc}</li>
                            ))}
                        </ul>
                    </div>
                     <div>
                        <h3 className="font-semibold text-lg">Income Proofs:</h3>
                        <ul className="space-y-2 pl-5 list-disc text-muted-foreground">
                            {requiredDocsIncome.map((doc, index) => (
                                <li key={index}>{doc}</li>
                            ))}
                        </ul>
                    </div>
                     <div>
                        <h3 className="font-semibold text-lg">Investment Proofs:</h3>
                        <ul className="space-y-2 pl-5 list-disc text-muted-foreground">
                            {requiredDocsInvestment.map((doc, index) => (
                                <li key={index}>{doc}</li>
                            ))}
                        </ul>
                    </div>
                     <div>
                        <h3 className="font-semibold text-lg">Other Documents:</h3>
                        <ul className="space-y-2 pl-5 list-disc text-muted-foreground">
                            {requiredDocsOther.map((doc, index) => (
                                <li key={index}>{doc}</li>
                            ))}
                        </ul>
                    </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Filing Process</h2>
                 <ol className="space-y-4 list-decimal pl-5">
                    {filingSteps.map((step, index) => (
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

