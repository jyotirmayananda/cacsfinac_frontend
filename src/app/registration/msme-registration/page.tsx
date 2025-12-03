
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
import Link from 'next/link';

const registrationSteps = [
  {
    title: "Visit the Udyam Registration Portal",
    description: "Begin by accessing the official Udyam Registration Portal at https://udyamregistration.gov.in."
  },
  {
    title: "Select the Appropriate Registration Option",
    items: [
      "For new entrepreneurs not registered as MSMEs, click on “For New Entrepreneurs who are not Registered yet as MSME”.",
      "For those already having registration as UAM, select the corresponding option."
    ]
  },
  {
    title: "Enter Aadhaar and PAN Details",
    description: "Provide your Aadhaar number and name, then validate using the OTP sent to your registered mobile number. Subsequently, enter your PAN details and validate them."
  },
  {
    title: "Fill in Business Information",
    description: "Input essential details such as business name, address, bank account information, and the National Industry Classification (NIC) code relevant to your business activities."
  },
  {
    title: "Specify Investment and Turnover Details",
    description: "Enter the investment in plant and machinery or equipment and the annual turnover figures. Ensure these figures align with the revised MSME classification criteria effective from April 1, 2025."
  },
  {
    title: "Submit the Application",
    description: "After reviewing all the information, submit the application. Upon successful submission, you will receive an e-certificate known as the Udyam Registration Certificate, which includes a unique Udyam Registration Number (URN)."
  },
];

const requiredDocs = [
  "Aadhaar Card: Mandatory for the applicant.",
  "PAN Card: Required for business verification.",
  "Business Address Proof: Utility bill, rent agreement, or property tax receipt.",
  "Bank Account Details: Cancelled cheque or bank statement.",
];

const classificationCriteria = [
  { category: "Micro", investment: "Up to ₹2.5 crore", turnover: "Up to ₹10 crore" },
  { category: "Small", investment: "Up to ₹25 crore", turnover: "Up to ₹100 crore" },
  { category: "Medium", investment: "Up to ₹125 crore", turnover: "Up to ₹500 crore" },
];

const benefits = [
  "Access to Government Schemes: Eligibility for various subsidies, schemes, and incentives offered by the government.",
  "Collateral-Free Loans: Easier access to credit under schemes like the Credit Guarantee Fund Trust for Micro and Small Enterprises (CGTMSE).",
  "Protection Against Delayed Payments: Legal protection and interest on delayed payments from buyers.",
  "Concession in Electricity Bills: Avail concessions on electricity bills by submitting the MSME registration certificate.",
  "ISO Certification Charges Reimbursement: Reimbursement of expenses incurred for obtaining ISO certification.",
];

const whyChooseUs = [
  "Expert Guidance: Our experienced professionals ensure compliance with all legal requirements.",
  "End-to-End Support: From documentation to obtaining necessary licenses, we handle it all.",
  "Transparent Pricing: No hidden charges; clear breakdown of all costs involved.",
  "Timely Delivery: We prioritize prompt processing to get your business up and running swiftly.",
];

export default function MsmeRegistrationPage() {
  return (
    <main>
      <div className="py-6 bg-secondary">
        <div className="container mx-auto px-4">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Registration', href: '/registration' },
              { label: 'MSME Registration' },
            ]}
          />
        </div>
      </div>

      <section id="service-details" className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <h1 className="text-3xl md:text-4xl font-bold font-headline mb-4">
                MSME Registration in India
              </h1>

              <div>
                <p className="text-muted-foreground text-justify">
                  Micro, Small, and Medium Enterprises (MSMEs) are the backbone of
                  India's economy, contributing significantly to employment and
                  GDP. Recognizing their importance, the Government of India has
                  streamlined the MSME registration process and revised
                  classification criteria to foster growth and innovation within
                  the sector.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Step-by-Step Process for MSME Registration</h2>
                <ol className="space-y-4 list-decimal pl-5">
                  {registrationSteps.map((step, index) => (
                    <li key={index}>
                      <p className="font-semibold">{step.title}</p>
                      {step.description && <p className='text-muted-foreground'>
                        {step.description.includes('https') ?
                          <Link href="https://udyamregistration.gov.in" target="_blank" className="text-primary hover:underline">{step.description}</Link>
                          : step.description
                        }
                        </p>}
                      {step.items && <ul className='list-disc pl-5 text-muted-foreground'>
                          {step.items.map((item, subIndex) => <li key={subIndex}>{item}</li>)}
                      </ul>}
                    </li>
                  ))}
                </ol>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Documents Required for MSME Registration</h2>
                <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                  {requiredDocs.map((doc, index) => (
                    <li key={index}>{doc}</li>
                  ))}
                </ul>
                <p className="text-muted-foreground text-justify mt-4 text-sm">
                  <strong>Note:</strong> The registration process is paperless and
                  based on self-declaration; no physical documents are required to
                  be uploaded.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Revised MSME Classification Criteria (Effective April 1, 2025)</h2>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Enterprise Category</TableHead>
                      <TableHead>Investment in Plant & Machinery/Equipment</TableHead>
                      <TableHead>Annual Turnover</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {classificationCriteria.map((item, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{item.category}</TableCell>
                        <TableCell>{item.investment}</TableCell>
                        <TableCell>{item.turnover}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                <p className="text-muted-foreground text-justify mt-4 text-sm">
                  <strong>Note:</strong> An enterprise will be classified in a
                  particular category only if it meets both the investment and
                  turnover limits specified for that category.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Benefits of MSME Registration</h2>
                <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                  {benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Why Choose CACSFinacc for Your MSME Registration?</h2>
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
