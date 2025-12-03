
'use client';

import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { QuoteForm } from '@/components/quote-form';
import { Phone, Mail } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const whoShouldFile = [
    "Firms (including LLPs)",
    "Association of Persons (AOP)",
    "Body of Individuals (BOI)",
    "Artificial Juridical Person (AJP)",
    "Local Authorities",
    "Co-operative Societies and Societies registered under Societies Registration Act",
    "Business Trusts and Investment Funds",
];

const filingRequisites = [
    "Registered Partnerships and LLPs with or without audit",
    "Co-operative societies, trusts, and estate of deceased persons",
    "Entities having income from business or profession, rental income, capital gains, dividend, or other sources",
    "Entities claiming exemption under Sections 11, 12, 10(23C), etc.",
];

const keyAmendments = [
    {
        title: "Capital Gains Reporting Enhancements",
        items: [
            "Bifurcation by Transfer Date: Schedule-Capital Gain now requires taxpayers to separately report capital gains arising from transfers made before and after July 23, 2024. This change aligns with the provisions of the Finance Act, 2024, ensuring accurate application of tax treatments.",
            "Share Buyback Losses: From October 1, 2024, taxpayers can claim capital losses on share buybacks, provided the corresponding dividend income was previously reported as 'Income from Other Sources.' This adjustment addresses earlier inconsistencies in the taxation of share buybacks."
        ]
    },
    {
        title: "Introduction of Section 44BBC – Cruise Business",
        items: ["A new reference to Section 44BBC has been incorporated, which pertains to the presumptive taxation regime for cruise ship operators. This section allows non-resident cruise operators to declare 20% of passenger carriage receipts as taxable profits, simplifying compliance for entities in the cruise business."]
    },
    {
        title: "Mandatory TDS Section Code Reporting",
        items: ["Taxpayers are now required to specify the exact TDS section code under which tax has been deducted in Schedule-TDS. This enhancement aims to improve transparency and facilitate accurate matching of TDS claims with the tax department's records."]
    },
    {
        title: "Detailed Entity Information",
        items: [
            "The revised form mandates the provision of comprehensive details about the entity, including: Name (including any recent changes), Permanent Account Number (PAN), Date of Formation and Commencement of Business, Limited Liability Partnership Identification Number (LLPIN), if applicable, Complete Address (including flat/door number, building name, locality, district, state, and pin code), Contact Details (landline and two mobile numbers), Email Addresses (two required). These requirements aim to enhance the accuracy of entity identification and facilitate better communication."
        ]
    },
    {
        title: "Selection of Filing Status and Due Date",
        items: [
            "A new dropdown-style selection has been introduced to specify the due date of return filing, with options including: July 31, October 31, November 30.",
            "Taxpayers must also indicate the section under which the return is being filed, such as: Section 139(1) – Return filed within the due date, Section 139(4) – Belated return, Section 139(5) – Revised return, Section 92CD – Modified return under Advance Pricing Agreement (APA), Section 119(2)(b) – Under CBDT condonation. This addition aims to streamline the filing process and ensure accurate categorization of returns."
        ]
    },
    {
        title: "Expanded Schedule TR & FA",
        items: ["More disclosures required for foreign transactions and assets."]
    },
    {
        title: "Crypto/VDA income reporting",
        items: ["ITR-5 now includes mandatory reporting of virtual digital assets."]
    },
    {
        title: "Schedule 80G/80GGA updated",
        items: ["Reporting of donations in granular format."]
    },
    {
        title: "Audit Trail Disclosure",
        items: ["Whether books of account have an audit trail functionality (as per MCA rules)."]
    },
    {
        title: "Updated depreciation schedule",
        items: ["Auto-calculation and asset-wise reporting mandated."]
    },
    {
        title: "Enhanced Schedule TCS & TDS reconciliation",
        items: ["Cross-verification with Form 26AS & AIS."]
    },
];

const auditApplicability = [
    {
        title: "Audit under Section 44AB is mandatory if:",
        items: [
            "Turnover exceeds ₹1 crore (or ₹10 crore with ≤5% cash transactions)",
            "Professional income exceeds ₹50 lakhs",
            "Presumptive taxation not opted or ineligible"
        ]
    },
    {
        title: "Firms must file Form 3CA-3CD or 3CB-3CD as per audit category.",
        items: []
    },
    {
        title: "ICAI mandates proper record keeping, ethical reporting, and compliance with SA standards (Standards on Auditing).",
        items: []
    }
];

const keyDisclosures = [
    "General details of the entity, nature of business",
    "Partners/Members' info with profit-sharing ratios",
    "Balance Sheet and P&L Account figures",
    "Audit information & Auditor details",
    "Details of capital gains, dividends, deemed incomes",
    "Deductions under Chapter VI-A (80C to 80U)",
    "Disclosures under GAAR, Transfer Pricing, if applicable",
    "Details of shareholding in unlisted companies",
    "Foreign Assets, Foreign Income, and Beneficial Ownership",
];

const requiredDocs = [
    "PAN, TAN of entity",
    "Partnership deed / LLP agreement",
    "Financials: Balance Sheet, P&L, cash flow",
    "Audit report (if applicable)",
    "Bank statements",
    "TDS Certificates, Form 26AS & AIS",
    "Details of business loans, depreciation, and investments",
];

const filingTips = [
    "Verify Eligibility: Ensure your entity qualifies to file ITR-5 before proceeding.",
    "Accurate Reporting: Provide complete and accurate information in all sections, especially in Schedule-Capital Gain and Schedule-TDS.",
    "Timely Filing: Adhere to the applicable due dates to avoid penalties.",
    "Documentation: Maintain comprehensive records to support all claims and disclosures made in the return.",
];

const whyChooseUs = [
    "ITR Filing Assistance: Expert guidance in filing ITR-5 accurately and timely.",
    "Tax Planning: Strategic advice to minimize tax liabilities.",
    "Compliance Support: Ensuring adherence to all tax regulations and deadlines.",
    "Audit Services: Conducting thorough audits to identify and rectify discrepancies.",
];


export default function ITR5FilingPage() {
  return (
    <main>
      <div className="py-6 bg-secondary">
        <div className="container mx-auto px-4">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Tax Filing', href: '/tax-filing' },
              { label: 'ITR-5 Filing' },
            ]}
          />
        </div>
      </div>

      <section id="service-details" className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <h1 className="text-3xl md:text-4xl font-bold font-headline mb-4">
                ITR-5 Filing: Comprehensive Tax Solutions for Firms and Entities
              </h1>

              <div>
                <p className="text-muted-foreground text-justify">
                  The Central Board of Direct Taxes (CBDT) has officially notified the updated Income Tax Return (ITR) Form 5 for the Assessment Year (AY) 2025–26, effective from April
                1, 2025. This revised form introduces several significant amendments aimed at
                enhancing compliance, transparency, and alignment with recent tax reforms.
                </p>
                <p className="text-muted-foreground text-justify mt-4">
                  CACSFinacc is your trusted partner for hassle-free and efficient Income Tax Return
                (ITR) filing services in India. Our ITR-5 service is designed to cater to the
                specific needs of firms, the Association of Persons (AOP), and the Body of
                Individuals (BOI) looking to file their income tax returns seamlessly. With our
                user-friendly platform, expert assistance, and competitive pricing, ITR 5 income
                tax filing has always been a challenge.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">What is ITR-5?</h2>
                <p className="text-muted-foreground text-justify mb-4">
                  ITR-5 is the prescribed Income Tax Return form for a wide range of non-individual
                  entities such as:
                </p>
                <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                  {whoShouldFile.map((item, index) => (
                    <li key={index}><strong>{item}</strong></li>
                  ))}
                </ul>
                <p className="text-muted-foreground text-justify mt-4 text-sm">
                  <strong>Note:</strong> Not applicable for individuals, HUFs (use ITR-1 to ITR-4), or companies (use ITR-6). Individuals, Hindu Undivided Families (HUFs), companies, and
                entities required to file ITR-7 (such as charitable or religious trusts) are not
                eligible to use ITR-5.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Who Should File ITR-5 in AY 2025-26?</h2>
                <p className="text-muted-foreground text-justify mb-4">Entities required to file ITR-5 include:</p>
                <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                  {filingRequisites.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Key Amendments & Updates in ITR-5 for AY 2025-26</h2>
                 <p className="text-muted-foreground text-justify mb-4">As per recent updates by CBDT for AY 2025-26:</p>
                <ol className="space-y-4 list-decimal pl-5">
                    {keyAmendments.map((amendment, index) => (
                        <li key={index}>
                            <p className="font-semibold">{amendment.title}</p>
                            {amendment.description && <p className="text-muted-foreground">{amendment.description}</p>}
                            {amendment.items && (
                                <ul className="list-disc pl-5 text-muted-foreground mt-2 space-y-1">
                                    {amendment.items.map((item, subIndex) => (
                                        <li key={subIndex}>{item}</li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ol>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Compliance & Audit Applicability</h2>
                <ul className="space-y-4 pl-5 list-disc text-muted-foreground">
                    {auditApplicability.map((item, index) => (
                        <li key={index}>
                           <p className="font-semibold">{item.title}</p>
                           {item.items.length > 0 && <ul className='list-disc pl-5 text-muted-foreground mt-2'>
                                {item.items.map((subItem, subIndex) => <li key={subIndex}>{subItem}</li>)}
                            </ul>}
                        </li>
                    ))}
                </ul>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Key Disclosures in ITR-5</h2>
                <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                  {keyDisclosures.map((disclosure, index) => (
                    <li key={index}>{disclosure}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Documents Required for ITR-5 Filing</h2>
                <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                  {requiredDocs.map((doc, index) => (
                    <li key={index}>{doc}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Filing Tips for AY 2025–26</h2>
                <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                  {filingTips.map((tip, index) => (
                    <li key={index}>{tip}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Why CACSFinacc is Your Trusted Partner for ITR-5 Filing</h2>
                <p className="text-muted-foreground text-justify mb-4">
                  At CACSFinacc, we specialize in providing comprehensive tax services, including:
                </p>
                <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                  {whyChooseUs.map((reason, index) => (
                    <li key={index}>{reason}</li>
                  ))}
                </ul>
                <p className="text-muted-foreground text-justify mt-4">
                  Our team of professionals is committed to delivering personalized solutions tailored
                to your entity's financial needs.
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
  
