
'use client';

import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { QuoteForm } from '@/components/quote-form';
import { Phone, Mail } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const registrationSteps = [
    {
        title: "Choose a Business Name",
        description: "Select a unique and meaningful name for your business that isn't already trademarked or registered. This helps in establishing a distinct brand identity."
    },
    {
        title: "Obtain a PAN Card",
        description: "A Permanent Account Number (PAN) is essential for taxation and financial transactions. If you don't have one, apply through the Income Tax Department."
    },
    {
        title: "Link PAN with Aadhaar",
        description: "Ensure your PAN is linked with your Aadhaar for seamless verification and compliance with government regulations."
    },
    {
        title: "Register under Udyam (MSME)",
        description: "Registering under the Ministry of Micro, Small & Medium Enterprises (MSME) through the Udyam portal provides official recognition and access to various benefits like easier loan approvals and tax advantages."
    },
    {
        title: "Obtain GST Registration (If Applicable)",
        description: "If your annual turnover exceeds ₹20 lakh (₹10 lakh for special category states), GST registration becomes mandatory. It enables tax collection, input credit claims, and is essential for interstate and B2B transactions."
    },
    {
        title: "Acquire Shop & Establishment License",
        description: "Depending on your state regulations, obtain a Shop & Establishment license from the local authority. This is mandatory in many states and is essential for opening a business bank account."
    },
    {
        title: "Open a Business Bank Account",
        description: "With the above documents, open a current account in your business name to manage financial transactions professionally."
    }
];

const requiredDocs = [
  "Identity Proof: Aadhaar Card, PAN Card",
  "Address Proof: Utility bills, rental agreement",
  "Passport-size Photographs: 2-3 recent photographs",
  "Business Address Proof: Utility bill, rent agreement, or property tax receipt",
  "No Objection Certificate (NOC): From the property owner if the premises are rented",
  "Bank Account Details: Recent bank statement or a cancelled cheque",
];

const amendments = [
    "Digital MSME Registration: The Udyam registration process has been made entirely online, simplifying the procedure for entrepreneurs.",
    "GST Threshold Updates: The GST registration threshold remains at ₹20 lakh for most states and ₹10 lakh for special category states.",
    "Easier Bank Account Opening: Banks now accept Udyam registration as valid proof for opening current accounts, streamlining the process for sole proprietors.",
];

const whyChooseUs = [
  "Expert Guidance: Our experienced professionals ensure compliance with all legal requirements.",
  "End-to-End Support: From documentation to obtaining necessary licenses, we handle it all.",
  "Transparent Pricing: No hidden charges; clear breakdown of all costs involved.",
  "Timely Delivery: We prioritize prompt processing to get your business up and running swiftly.",
];

export default function SoleProprietorshipPage() {
  return (
    <main>
      <div className="py-6 bg-secondary">
        <div className="container mx-auto px-4">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Registration', href: '/registration' },
              { label: 'Sole Proprietorship' },
            ]}
          />
        </div>
      </div>

      <section id="service-details" className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <h1 className="text-3xl md:text-4xl font-bold font-headline mb-4">
                Sole Proprietorship Registration in India
              </h1>

              <div>
                <p className="text-muted-foreground text-justify">
                  A Sole Proprietorship is the simplest and most common form of
                  business structure in India, ideal for individual entrepreneurs
                  starting small businesses. While it doesn't require mandatory
                  central registration, obtaining specific operational
                  registrations is essential for legal recognition and smooth
                  operations. One pivotal tax registration is the GST (Goods and
                  Services Tax) Registration, which must be secured under the
                  proprietor's name to formalize the business's proprietorship
                  status. CACSFinacc helps you to register proprietorship firm
                  online easily and effortlessly.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Essential Licenses and Registrations for Proprietorships</h2>
                 <p className="text-muted-foreground text-justify mb-4">
                  To register proprietorship firm online and run in India, you
                  need important licenses and registrations, including:
                </p>
                <ol className="space-y-4 list-decimal pl-5">
                  {registrationSteps.map((step, index) => (
                    <li key={index}>
                      <p className="font-semibold">{step.title}</p>
                      <p className="text-muted-foreground text-justify">{step.description}</p>
                    </li>
                  ))}
                </ol>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Documents Required for Sole Proprietorship Registration</h2>
                <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                  {requiredDocs.map((doc, index) => (
                    <li key={index}>{doc}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Government Fees & Timeline</h2>
                 <ul className="space-y-2 pl-5 list-disc text-muted-foreground">
                    <li>
                      <strong>Government Fees:</strong> Minimal; varies based on the
                      registrations required.
                    </li>
                    <li>
                      <strong>Timeline:</strong> The entire registration process
                      typically takes 7–10 working days, subject to document
                      verification and approval.
                    </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Recent Amendments Impacting Sole Proprietorships (Effective 2025)</h2>
                 <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                  {amendments.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Why Choose CACSFinacc for Your Sole Proprietorship Registration?</h2>
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
