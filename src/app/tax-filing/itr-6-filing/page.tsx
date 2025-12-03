"use client";

import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { QuoteForm } from "@/components/quote-form";
import { Phone, Mail } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const whoMustFile = [
  "Private Limited Companies",
  "Public Limited Companies",
  "One Person Companies (OPC)",
  "Foreign Companies operating in India",
  "Any company not claiming exemption under charitable/religious trust provisions",
];

const whoMustFileConditions = [
  "Are companies (other than those claiming exemption under Section 11 of the Income-tax Act, 1961).",
  "Have income from business or profession, capital gains, other sources, etc.",
  "Are required to get accounts audited under Section 44AB.",
];

const keyAmendments = [
  {
    title: "Capital Gains Reporting Enhancements",
    items: [
      "Bifurcation by Transfer Date: Schedule-Capital Gain now requires taxpayers to separately report capital gains arising from transfers made before and after July 23, 2024. This change aligns with the provisions of the Finance Act, 2024, ensuring accurate application of tax treatments.",
      "Share Buyback Losses: From October 1, 2024, taxpayers can claim capital losses on share buybacks, provided the corresponding dividend income was previously reported as 'Income from Other Sources.' This adjustment addresses earlier inconsistencies in the taxation of share buybacks.",
    ],
  },
  {
    title: "Introduction of Section 44BBC – Cruise Business",
    description:
      "A new reference to Section 44BBC has been incorporated, which pertains to the presumptive taxation regime for cruise ship operators. This section allows non-resident cruise operators to declare 20% of passenger carriage receipts as taxable profits, simplifying compliance for entities in the cruise business.",
  },
  {
    title: "Mandatory TDS Section Code Reporting",
    description:
      "Taxpayers are now required to specify the exact TDS section code under which tax has been deducted in Schedule-TDS. This enhancement aims to improve transparency and facilitate accurate matching of TDS claims with the tax department's records.",
  },
  {
    title: "Detailed Entity Information",
    description:
      "The revised form mandates the provision of comprehensive details about the entity, including:",
    items: [
      "Name (including any recent changes)",
      "Permanent Account Number (PAN)",
      "Date of Formation and Commencement of Business",
      "Limited Liability Partnership Identification Number (LLPIN), if applicable",
      "Complete Address (including flat/door number, building name, locality, district, state, and pin code)",
      "Contact Details (landline and two mobile numbers)",
      "Email Addresses (two required)",
    ],
  },
  {
    title: "Selection of Filing Status and Due Date",
    description:
      "A new dropdown-style selection has been introduced to specify the due date of return filing, with options including: July 31, October 31, November 30. Taxpayers must also indicate the section under which the return is being filed, such as:",
    items: [
      "Section 139(1) – Return filed within the due date",
      "Section 139(4) – Belated return",
      "Section 139(5) – Revised return",
      "Section 92CD – Modified return under Advance Pricing Agreement (APA)",
      "Section 119(2)(b) – Under CBDT condonation",
    ],
  },
  {
    title: "Mandatory Reporting of Virtual Digital Assets (VDAs)",
    description:
      "Companies must now disclose profits/losses from cryptocurrencies or digital assets.",
  },
  {
    title: "Enhanced Reporting under Schedule BP",
    description:
      "Breakup of income from business/profession, capital assets, dividend, and others required.",
  },
  {
    title: "Depreciation Schedule Overhaul",
    description:
      "Asset-wise disclosure for depreciation under the Income Tax Act is now compulsory.",
  },
  {
    title: "Updated Schedule FA (Foreign Assets)",
    description:
      "Companies holding shares, interests, or bank accounts abroad must file detailed information.",
  },
  {
    title: "Audit Trail Compliance",
    description:
      "As per MCA notification, companies must confirm whether accounting software has audit trail capabilities from 01.04.2024 onwards.",
  },
];

const guidelines = [
  "Standards on Auditing (SA) and Accounting Standards (AS/Ind AS)",
  "Tax Audit Reporting (Form 3CA/3CD) under Section 44AB",
  "Mandatory filing of financial statements with Director’s Report",
  "Proper maintenance of Books of Account, Schedules, and audit evidence",
  "Full compliance with ICAI Code of Ethics and disciplinary standards",
];

const keyDisclosures = [
  "General company info: CIN, PAN, email, nature of business",
  "Income details: Business profits, capital gains, dividend, rental, or other income",
  "Tax Computation & MAT (Section 115JB): Book Profit vs Taxable Profit",
  "Deductions: Chapter VI-A (80G, 80JJAA, 80IA, etc.)",
  "Audit details: Audit report submission, auditor details",
  "TDS/TCS Schedules: Reconciliation with Form 26AS and AIS",
  "Shareholding Pattern: List of shareholders in unlisted companies",
  "Foreign Assets & Transactions: Mandatory in case of international presence",
];

const filingProcess = [
  "Initial Consultation: Understand the business model, tax obligations, and compliance status.",
  "Data Collection & Reconciliation: Collect audited financials, tax audit reports, TDS statements, GST data, etc.",
  "Form Preparation & Tax Computation: Compute MAT, surcharge, cess, carry forward losses, AMT, etc.",
  "Review & Validation: Ensure cross-verification with Form 26AS, AIS, GSTR-9.",
  "E-Filing with DSC & Acknowledgment: File ITR-6 online with digital signature and confirm submission receipt.",
];

const filingTips = [
  "Verify Eligibility: Ensure your entity qualifies to file ITR-6 before proceeding.",
  "Accurate Reporting: Provide complete and accurate information in all sections, especially in Schedule-Capital Gain and Schedule-TDS.",
  "Timely Filing: Adhere to the applicable due dates to avoid penalties.",
  "Documentation: Maintain comprehensive records to support all claims and disclosures made in the return.",
];

const whyChooseUs = [
  "ITR Filing Assistance: Expert guidance in filing ITR-6 accurately and timely.",
  "Tax Planning: Strategic advice to minimize tax liabilities.",
  "Compliance Support: Ensuring adherence to all tax regulations and deadlines.",
  "Audit Services: Conducting thorough audits to identify and rectify discrepancies.",
];

export default function ITR6FilingPage() {
  return (
    <main>
      <div className="py-6 bg-secondary">
        <div className="container mx-auto px-4">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Tax Filing", href: "/tax-filing" },
              { label: "ITR-6 Filing" },
            ]}
          />
        </div>
      </div>

      <section id="service-details" className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <h1 className="text-3xl md:text-4xl font-bold font-headline mb-4">
                ITR-6 Return Filing Services
              </h1>

              <div>
                <p className="text-muted-foreground text-justify">
                  The Central Board of Direct Taxes (CBDT) has notified the
                  updated Income Tax Return (ITR) Form 6 for the Assessment Year
                  (AY) 2025–26, effective from April 1, 2025. This revised form
                  introduces several significant amendments aimed at enhancing
                  compliance, transparency, and alignment with recent tax
                  reforms.
                </p>
                <p className="text-muted-foreground text-justify mt-4">
                  CACSFinacc offers expert ITR-6 filing services to ensure
                  accurate and timely submission of your company's income tax
                  return. We handle the complexities of ITR-6 filing, allowing
                  you to focus on your core business activities.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">
                  What is ITR-6?
                </h2>
                <p className="text-muted-foreground text-justify mb-4">
                  ITR-6 is the Income Tax Return form applicable to companies
                  registered under the Companies Act, except those claiming
                  exemption under Section 11. It is mandatory to file ITR-6
                  online with a digital signature.
                </p>
                <p className="text-muted-foreground text-justify mb-2">
                  This form is mainly used by:
                </p>
                <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                  {whoMustFile.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <p className="text-muted-foreground text-justify mt-4">
                  Companies claiming exemption under Section 11 (i.e.,
                  charitable or religious trusts) should use ITR-7.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">
                  Who Must File ITR-6?
                </h2>
                <p className="text-muted-foreground text-justify mb-4">
                  ITR-6 is applicable to all companies that:
                </p>
                <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                  {whoMustFileConditions.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <p className="text-muted-foreground text-justify mt-4">
                  Companies with income from dividends, foreign subsidiaries,
                  royalties, interest, capital investments, and domestic/foreign
                  transactions must use this form.
                </p>
                <p className="text-muted-foreground text-justify mt-4 text-sm">
                  <strong>Note:</strong> Companies claiming exemption under
                  Section 11 (charitable or religious trusts) are not eligible
                  to use ITR-6.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">
                  Key Amendments & Updates for AY 2025-26
                </h2>
                <ol className="space-y-4 list-decimal pl-5">
                  {keyAmendments.map((amendment, index) => (
                    <li key={index}>
                      <p className="font-semibold">{amendment.title}</p>
                      {amendment.description && (
                        <p className="text-muted-foreground mt-1">
                          {amendment.description}
                        </p>
                      )}
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
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">
                  Guidelines & Compliance for Companies
                </h2>
                <p className="text-muted-foreground text-justify mb-4">
                  The Institute of Chartered Accountants of India (ICAI)
                  mandates strict adherence to:
                </p>
                <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                  {guidelines.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">
                  Key Disclosures in ITR-6
                </h2>
                <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                  {keyDisclosures.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">
                  Step-by-Step ITR-6 Filing Process at CACSFinacc
                </h2>
                <ol className="space-y-3 list-decimal pl-5 text-muted-foreground">
                  {filingProcess.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ol>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">
                  Filing Tips for AY 2025–26
                </h2>
                <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                  {filingTips.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">
                  Why Choose CACSFinacc?
                </h2>
                <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                  {whyChooseUs.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <p className="text-muted-foreground text-justify mt-4">
                  Our team of professionals is committed to delivering
                  personalized solutions tailored to your entity's financial
                  needs.
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
                  <CardTitle className="font-headline text-2xl mt-2">
                    Have a Question?
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="flex items-center justify-center gap-2 mt-2 mb-1">
                    <Phone className="h-4 w-4" />
                    <span>+91 95916 33648</span>
                  </p>
                  <p className="flex items-center justify-center gap-2">
                    <Mail className="h-4 w-4" />
                    <a
                      href="mailto:info@cacsfinaccservices.com"
                      className="hover:text-primary"
                    >
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
