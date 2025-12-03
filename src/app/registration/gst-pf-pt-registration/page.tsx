
'use client';

import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { QuoteForm } from '@/components/quote-form';
import { Phone, Mail, CheckCircle2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const gstWhoNeedsIt = [
  "Businesses with an annual turnover exceeding ₹20 lakh (₹10 lakh for special category states).",
  "E-commerce operators and aggregators.",
  "Inter-state suppliers of goods and services.",
];

const gstAmendments = [
  "Simplified Documentation: As per Instruction No. 03/2025-GST issued on April 17, 2025, the Central Board of Indirect Taxes and Customs (CBIC) mandates strict adherence to the list of documents prescribed in FORM GST REG-01, reducing unnecessary paperwork.",
  "Aadhaar Authentication: Applicants not opting for Aadhaar authentication must undergo physical verification at designated GST Suvidha Kendras. This change, effective from February 11, 2025, aims to enhance the security and authenticity of GST registrations.",
  "GST Waiver Scheme: Businesses that have settled all tax dues up to March 31, 2025, may be eligible for a GST waiver under schemes SPL01 or SPL02, provided they apply within three months of the new fiscal year.",
];

const gstRequiredDocs = [
  "PAN Card of the business or applicant.",
  "Proof of business registration or incorporation certificate.",
  "Identity and address proof of promoters/directors.",
  "Address proof of the business place.",
  "Bank account statement or cancelled cheque.",
];

const ptApplicability = [
  "Employers must deduct PT from employees' salaries and remit it to the state government.",
  "Self-employed professionals like doctors, lawyers, and chartered accountants are also liable.",
];

const ptAmendments = [
  "Revised Tax Rates: The Karnataka State Legislature has amended the professional tax rates, with ₹200 payable monthly and ₹300 in February, effective from April 1, 2025.",
];

const ptRequiredDocs = [
  "PAN Card and Aadhaar Card of the applicant.",
  "Proof of business address.",
  "Salary details of employees.",
  "Employee attendance register.",
];

const pfApplicability = [
  "Mandatory for establishments employing 20 or more employees.",
  "Voluntary registration is available for establishments with fewer employees.",
];

const pfUpdates = [
  "Simplified Member Profile Updates: EPFO has introduced simplified member profile updates, allowing for easier corrections and updates to member information.",
  "Easier PF Account Transfers: The process for transferring PF accounts has been streamlined, enabling faster and more efficient transfers for employees changing jobs.",
  "New Joint Declaration Procedure: A new joint declaration procedure has been implemented, simplifying the process for updating member details jointly by the employer and employee.",
];

const pfRequiredDocs = [
  "PAN Card of the establishment.",
  "Certificate of incorporation or partnership deed.",
  "Address proof of the establishment.",
  "Details of employees, including Aadhaar and salary information.",
];

const whyChooseUs = [
  "Expert Guidance: Our experienced professionals ensure compliance with all legal requirements.",
  "End-to-End Support: From documentation to obtaining necessary licenses, we handle it all.",
  "Transparent Pricing: No hidden charges; clear breakdown of all costs involved.",
  "Timely Delivery: We prioritize prompt processing to get your business up and running swiftly.",
];

export default function GstPfPtRegistrationPage() {
  return (
    <main>
      <div className="py-6 bg-secondary">
        <div className="container mx-auto px-4">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Registration', href: '/registration' },
              { label: 'GST, PF & PT Registration' },
            ]}
          />
        </div>
      </div>

      <section id="service-details" className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <h1 className="text-3xl md:text-4xl font-bold font-headline mb-4">
                GST, PF & PT Registration Guide (2025)
              </h1>

              <div>
                <p className="text-muted-foreground text-justify">
                  Navigating the regulatory landscape is crucial for businesses in
                  India. Ensuring compliance with Goods and Services Tax (GST),
                  Professional Tax (PT), and Provident Fund (PF) regulations not
                  only legitimizes your operations but also unlocks various
                  benefits. Here's an updated guide to help you understand the
                  registration processes and recent amendments.
                </p>
              </div>
              
              <div className="space-y-6">
                <h2 className="text-2xl font-bold font-headline text-primary">Goods and Services Tax (GST) Registration</h2>
                <p className="text-muted-foreground text-justify">
                  GST is a comprehensive indirect tax levied on the manufacture,
                  sale, and consumption of goods and services across India.
                </p>
                <div>
                  <h3 className="font-semibold mb-2">Who Needs to Register?</h3>
                  <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                    {gstWhoNeedsIt.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Key Amendments in 2025</h3>
                  <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                    {gstAmendments.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                 <div>
                  <h3 className="font-semibold mb-2">Documents Required</h3>
                  <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                    {gstRequiredDocs.map((doc, index) => (
                      <li key={index}>{doc}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-bold font-headline text-primary">Professional Tax (PT) Registration</h2>
                <p className="text-muted-foreground text-justify">
                  Professional Tax is a state-level tax levied on professions,
                  trades, and employment.
                </p>
                 <div>
                  <h3 className="font-semibold mb-2">Applicability</h3>
                  <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                    {ptApplicability.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                 <div>
                  <h3 className="font-semibold mb-2">Karnataka PT Amendments (Effective April 1, 2025)</h3>
                  <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                    {ptAmendments.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                 <div>
                  <h3 className="font-semibold mb-2">Documents Required</h3>
                  <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                    {ptRequiredDocs.map((doc, index) => (
                      <li key={index}>{doc}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-bold font-headline text-primary">Provident Fund (PF) Registration</h2>
                 <p className="text-muted-foreground text-justify">
                  The Employees' Provident Fund (EPF) is a retirement benefits
                  scheme for salaried employees, managed by the Employees'
                  Provident Fund Organization (EPFO).
                </p>
                <div>
                  <h3 className="font-semibold mb-2">Applicability</h3>
                  <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                    {pfApplicability.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">EPFO Updates in 2025</h3>
                  <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                    {pfUpdates.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Documents Required</h3>
                  <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                    {pfRequiredDocs.map((doc, index) => (
                      <li key={index}>{doc}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Why Choose CACSFinacc for Your Registrations?</h2>
                <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                  {whyChooseUs.map((reason, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <span>{reason}</span>
                    </li>
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
