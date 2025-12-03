
'use client';

import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { QuoteForm } from '@/components/quote-form';
import { Phone, Mail } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const whoShouldFile = [
    "Political Parties",
    "Charitable or Religious Trusts",
    "Universities and Educational Institutions",
    "Research Institutions",
    "Other Entities Claiming Exemptions Under Sections 11, 12, 10(23C), or 13",
];

const whoShouldFileDetailed = [
    "Charitable and Religious Trusts",
    "Educational Institutions, Hospitals claiming exemption under Sections 10(23C)(iiiab to vi)",
    "Scientific Research Associations",
    "News agencies (Section 10(22B))",
    "Political Parties (Section 13A)",
    "Universities and Colleges (not required to furnish return under other sections)",
    "Any entity registered under Section 12A/12AB",
];

const complianceRequirements = [
    "Audit under Section 12A(1)(b) is mandatory if gross income exceeds ₹2.5 lakh",
    "Filing of Form 10B or 10BB must be done before filing ITR-7",
    "Income Application and Corpus Funds must be disclosed separately",
    "Ensure correct filing of Form 9A (for accumulation of income) and Form 10 (for setting apart income)",
];

const keyAmendments = [
    {
        title: "Enhanced Disclosure of Foreign Contributions",
        description: "The revised ITR-7 mandates increased disclosure by political parties, charitable trusts, universities, and research institutions regarding:",
        items: [
            "Income from Foreign Contributions",
            "Voluntary Donations",
            "Accumulated Income",
            "Utilization of Funds"
        ],
        extra: "These changes aim to enhance transparency and accountability in financial reporting by organizations eligible to file ITR-7. The newly required disclosures seek to strengthen oversight on the inflow and use of foreign donations and contributions within these institutions."
    },
    {
        title: "Revised Reporting Requirements for Anonymous Donations",
        description: "A new column has been introduced in Schedule VC to report anonymous donations not taxable under Section 115BBC. This exemption applies when the total of such donations exceeds ₹1 lakh or 5% of total donations."
    },
    {
        title: "Updated Schedule A – Application of Income",
        description: "Schedule A now requires the disclosure of donations made to other registered or approved trusts or institutions, including the percentage considered as application of income. The Finance Act, 2023, has reduced this percentage to 85%."
    },
    {
        title: "Form 10 Filing Details",
        description: "When accumulating income under Sections 11(2) and 11(5) or the third proviso to Section 10(23C), the ITR-7 now requires reporting whether Form 10 was filed with the Assessing Officer and the filing date, if applicable."
    },
    {
        title: "Introduction of Residuary Clause in Part B-TI",
        description: "A new column has been added to report any other income not exempt under the Income Tax Act. This addition aims to capture all sources of income for comprehensive reporting."
    }
];

const latestUpdates = [
    { title: "Revised Audit Reporting Format (Form 10B & 10BB)", description: "Trusts and institutions must ensure audit compliance as per amended rules." },
    { title: "Mandatory UDIN Integration", description: "CA’s UDIN must be validated for all audit reports attached." },
    { title: "Updated Schedule ER & EC", description: "Detailed segregation of expenditure related to corpus, other funds, and applied income." },
    { title: "Foreign Contributions (FCRA) Declaration", description: "Entities receiving foreign donations must disclose in prescribed format." },
    { title: "Schedule TDS Reconciliation", description: "Enhanced TDS credit validation with Form 26AS and AIS." },
    { title: "PAN-Aadhaar Validation", description: "Institutions must ensure linking of Aadhaar for key personnel or signatories." }
];

const keyDisclosures = [
    "Nature of Institution: Trust, university, hospital, etc.",
    "Section under which exemption is claimed",
    "Registration details under Section 12AB, 80G, 10(23C), FCRA (if applicable)",
    "Gross Receipts, Donations, Grants, and Applied Income",
    "Corpus Funds and Investments",
    "Audit report details (Form 10B/10BB)",
    "Foreign Contributions & Utilization",
    "Asset and liability details",
    "Schedule TDS/TCS: Cross-verified with 26AS",
];

const filingProcess = [
    "Eligibility Review: Identify the correct section under which exemption is claimed.",
    "Document Collection: Gather audited financials, registration certificates, donation details, bank statements, and Form 10B/10BB.",
    "Form Preparation: Segregate income as per charitable purposes, business income (if any), capital gains, and applied income.",
    "Verification & Compliance Check: Validate exemption eligibility, Form 9A/10 timelines, and audit applicability.",
    "E-Filing with DSC: ITR-7 must be filed online using Digital Signature (DSC) of the managing trustee or authorized signatory.",
];

const requiredDocs = [
    "PAN, Trust Deed, Registration under 12AB / 10(23C)",
    "Audited financial statements",
    "Form 10B / 10BB",
    "Income and expenditure statements",
    "Details of donations (incl. 80G)",
    "Form 26AS, AIS, and bank statements",
    "FCRA registration and contribution details (if applicable)",
    "Board/Trustee meeting resolutions",
];

const filingTips = [
    "Verify Eligibility: Ensure your entity qualifies to file ITR-7 before proceeding.",
    "Accurate Reporting: Provide complete and accurate information in all sections, especially in Schedule VC and Schedule A.",
    "Timely Filing: Adhere to the applicable due dates to avoid penalties.",
    "Documentation: Maintain comprehensive records to support all claims and disclosures made in the return.",
];

const whyChooseUs = [
    "ITR Filing Assistance: Expert guidance in filing ITR-7 accurately and timely.",
    "Tax Planning: Strategic advice to minimize tax liabilities.",
    "Compliance Support: Ensuring adherence to all tax regulations and deadlines.",
    "Audit Services: Conducting thorough audits to identify and rectify discrepancies.",
];

export default function ITR7FilingPage() {
  return (
    <main>
      <div className="py-6 bg-secondary">
        <div className="container mx-auto px-4">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Tax Filing', href: '/tax-filing' },
              { label: 'ITR-7 Filing' },
            ]}
          />
        </div>
      </div>

      <section id="service-details" className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <h1 className="text-3xl md:text-4xl font-bold font-headline mb-4">
                ITR-7 Filing: Comprehensive Tax Solutions for Trusts and Exempt Entities
              </h1>

              <div>
                <p className="text-muted-foreground text-justify">
                  The Income Tax Department has released the updated Income Tax Return (ITR) Form 7 for the Assessment Year (AY) 2025–26, effective from April 1, 2025. This revised form introduces several significant amendments aimed at enhancing compliance, transparency, and alignment with recent tax reforms.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">What is ITR-7?</h2>
                <p className="text-muted-foreground text-justify mb-4">
                  ITR-7 is the Income Tax Return form to be filed by persons including trusts, societies, and institutions that are claiming exemption under the following sections of the Income Tax Act, 1961:
                </p>
                <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                    <li><strong>Section 139(4A):</strong> Charitable or religious trusts</li>
                    <li><strong>Section 139(4B):</strong> Political parties</li>
                    <li><strong>Section 139(4C):</strong> Scientific research institutions, hospitals, universities, etc.</li>
                    <li><strong>Section 139(4D):</strong> Colleges or educational institutions not required to furnish return under any other provision</li>
                </ul>
                <p className="text-muted-foreground text-justify mt-4">
                  If your entity claims income exemption under Section 11, 12, 10(23C), or 10(46), ITR-7 is mandatory.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Who Should File ITR-7?</h2>
                <p className="text-muted-foreground text-justify mb-4">ITR-7 is applicable to:</p>
                <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                  {whoShouldFile.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <p className="text-muted-foreground text-justify mt-4">These entities are required to file ITR-7 to report their income, claim exemptions, and ensure compliance with the provisions of the Income-tax Act, 1961.</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Who Should File ITR-7 in AY 2025-26?</h2>
                <p className="text-muted-foreground text-justify mb-4">Entities falling under the following categories must file ITR-7:</p>
                <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                  {whoShouldFileDetailed.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Compliance for Charitable and Exempt Entities</h2>
                <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                  {complianceRequirements.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Key Amendments in ITR-7 for AY 2025–26</h2>
                <ol className="space-y-4 list-decimal pl-5">
                    {keyAmendments.map((amendment, index) => (
                        <li key={index}>
                            <p className="font-semibold">{amendment.title}</p>
                            <p className="text-muted-foreground mt-1">{amendment.description}</p>
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
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Latest CBDT Amendments and Income Tax Utility Changes</h2>
                 <p className="text-muted-foreground text-justify mb-4">As per the latest CBDT amendments and Income Tax utility changes:</p>
                <ol className="space-y-3 list-decimal pl-5 text-muted-foreground">
                    {latestUpdates.map((update, index) => (
                        <li key={index}>
                           <strong>{update.title}:</strong> {update.description}
                        </li>
                    ))}
                </ol>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Key Disclosures Required in ITR-7</h2>
                <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                  {keyDisclosures.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Step-by-Step ITR-7 Filing Process at CACSFinacc</h2>
                <ol className="space-y-3 list-decimal pl-5 text-muted-foreground">
                  {filingProcess.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ol>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Documents Checklist for ITR-7</h2>
                <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                  {requiredDocs.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Filing Tips for AY 2025–26</h2>
                <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                  {filingTips.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Why Choose CACSFinacc?</h2>
                <p className="text-muted-foreground text-justify mb-4">
                  At CACSFinacc, we specialize in providing comprehensive tax services, including:
                </p>
                <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                  {whyChooseUs.map((reason, index) => (
                    <li key={index}>{reason}</li>
                  ))}
                </ul>
                <p className="text-muted-foreground text-justify mt-4">
                  Our team of professionals is committed to delivering personalized solutions tailored to your entity's financial needs.
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

    