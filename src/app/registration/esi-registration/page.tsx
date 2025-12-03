"use client";

import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { QuoteForm } from "@/components/quote-form";
import { Phone, Mail, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const whoNeedsIt = [
  {
    title: "Employee Count:",
    description: "Employs 10 or more persons (20 in some states).",
  },
  {
    title: "Wage Limit:",
    description:
      "Employees earning up to ₹21,000 per month (₹25,000 for persons with disabilities).",
  },
  {
    title: "Applicable Entities:",
    description:
      "Factories, shops, hotels, restaurants, cinemas, road transport businesses, educational institutions, and medical institutions.",
  },
];

const requiredDocs = [
  "Certificate: Under the Shops and Establishment Act or Factories Act.",
  "PAN Card: Of the business entity.",
  "Bank Account Details: Cancelled cheque or bank statement.",
  "Address Proof: Utility bills or rental agreement.",
  "Employee Details: List of employees with their salary structure.",
  "Digital Signature Certificate (DSC): Of the employer.",
];

const registrationSteps = [
  "Visit the ESIC Portal: Navigate to the ESIC official website.",
  "Sign Up: Click on 'Sign Up' under the 'Employer Login' section and provide the necessary details.",
  "Login: Use the credentials received via email to log in.",
  "Fill Employer Registration Form (Form-1): Provide establishment details, employee information, and other required data.",
  "Upload Documents: Attach the necessary documents as specified above.",
  "Submit Application: Review all information and submit the application.",
  "Payment of Advance Contribution: Pay six months of advance contributions through the online portal.",
  "Receive Registration Letter (C-11): Upon successful verification, the ESIC will issue a Registration Letter (C-11) containing the establishment's unique 17-digit registration number.",
];

const contributionRates = [
  "Employer Contribution: 3.25% of the employee's wages.",
  "Employee Contribution: 0.75% of their wages.",
  "Employees earning less than ₹176 per day are exempt from contributing.",
];

const benefits = [
  "Medical Benefits: Full medical care for employees and their families.",
  "Sickness Benefits: 70% of wages during certified sickness for up to 91 days annually.",
  "Maternity Benefits: Full wages for 26 weeks during maternity leave.",
  "Disability Benefits: 90% of wages in case of temporary or permanent disability.",
  "Dependents' Benefits: Monthly payments to dependents of deceased employees.",
  "Funeral Expenses: ₹15,000 provided to the dependents for funeral costs.",
];

const postRegistrationCompliance = [
  "Maintain Registers: Attendance, wages, and accident registers.",
  "Monthly Contributions: Deposit ESI contributions by the 15th of the following month.",
  "Filing Returns: Submit half-yearly returns in Form 5.",
  "Display ESI Information: At conspicuous places within the premises.",
];

const whyChooseUs = [
  "Expert Assistance: Our team ensures accurate and timely ESI registration and compliance.",
  "End-to-End Support: From documentation to obtaining the ESI certificate, we handle it all.",
  "Transparent Pricing: No hidden charges; clear breakdown of all costs involved.",
  "Timely Delivery: We prioritize prompt processing to get your business compliant swiftly.",
];

export default function EsiRegistrationPage() {
  return (
    <main>
      <div className="py-6 bg-secondary">
        <div className="container mx-auto px-4">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Registration", href: "/registration" },
              { label: "ESI Registration" },
            ]}
          />
        </div>
      </div>

      <section id="service-details" className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <h1 className="text-3xl md:text-4xl font-bold font-headline mb-4">
                ESI Registration
              </h1>

              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">
                  What is ESI Registration?
                </h2>
                <p className="text-muted-foreground text-justify">
                  Employees' State Insurance (ESI) is a social security scheme
                  under the Employees' State Insurance Act, 1948, providing
                  medical, monetary, and other benefits to employees. Managed by
                  the Employees' State Insurance Corporation (ESIC), this scheme
                  ensures workers are protected against financial distress
                  arising from sickness, maternity, disability, or death due to
                  employment injuries.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">
                  Who Needs ESI Registration?
                </h2>
                <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                  {whoNeedsIt.map((item, index) => (
                    <li key={index}>
                      <strong>{item.title}</strong> {item.description}
                    </li>
                  ))}
                </ul>
                <p className="text-muted-foreground text-justify mt-4 text-sm">
                  <em>
                    Note: The threshold varies by state; for instance, in
                    Karnataka, the limit is 10 employees.
                  </em>
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">
                  Documents Required for ESI Registration
                </h2>
                <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                  {requiredDocs.map((doc, index) => (
                    <li key={index}>{doc}</li>
                  ))}
                </ul>
                <p className="text-muted-foreground text-justify mt-4">
                  Ensure all documents are clear and legible to avoid delays in
                  processing.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">
                  ESI Registration Process
                </h2>
                <ol className="space-y-3 list-decimal pl-5 text-muted-foreground">
                  {registrationSteps.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ol>
                <p className="text-muted-foreground text-justify mt-4">
                  The registration process typically takes 7-15 working days,
                  depending on the completeness of the application and the
                  response from ESIC authorities.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">
                  Contribution Rates
                </h2>
                <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                  {contributionRates.map((rate, index) => (
                    <li key={index}>{rate}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">
                  Benefits of ESI Registration
                </h2>
                <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                  {benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
                <p className="text-muted-foreground text-justify mt-4">
                  These benefits ensure social security and financial stability
                  for employees and their families.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">
                  Post-Registration Compliance
                </h2>
                <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                  {postRegistrationCompliance.map((compliance, index) => (
                    <li key={index}>{compliance}</li>
                  ))}
                </ul>
                <p className="text-muted-foreground text-justify mt-4">
                  Non-compliance can lead to penalties, including interest at
                  12% per annum and damages up to 25% of the contribution
                  amount.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">
                  Why Choose CACSFinacc for Your ESI Registration?
                </h2>
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
