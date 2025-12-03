
'use client';

import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { QuoteForm } from '@/components/quote-form';
import { Phone, Mail, CheckCircle2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ourServices = [
    {
        title: "ESI Registration and Compliance Setup",
        items: [
            "Quick and seamless ESI registration for your business.",
            "Generation of Employer Code Number.",
            "Guidance on documentation and eligibility criteria."
        ]
    },
    {
        title: "Monthly ESI Contribution Filing",
        items: [
            "Calculation of ESI contributions at 4% of gross wages (3.25% by employer and 0.75% by employee).",
            "Preparation and submission of Challan Form (Form 5) through the ESIC portal.",
            "Generation of payment receipts and confirmation of compliance."
        ]
    },
    {
        title: "Half-Yearly ESI Return Filing",
        items: [
            "Filing of Form 6 Return by November 11th and May 11th for the respective half-years.",
            "Inclusion of employee attendance, monthly contributions, and wage details."
        ]
    },
    {
        title: "Maintenance of Records",
        items: [
            "Accurate maintenance of Form 3 (Accident Register), Form 7 (Wage Register), and employee records.",
            "Digital storage and easy retrieval of records to avoid discrepancies."
        ]
    },
    {
        title: "Employee Updates and Amendments",
        items: [
            "Addition and removal of employees in the ESI portal.",
            "Support for updating salary changes and demographic details."
        ]
    },
    {
        title: "Support for ESI Inspections and Assessments",
        items: [
            "Assistance during ESIC audits and inspections.",
            "Preparation of required documentation and reconciliation of records."
        ]
    },
    {
        title: "Online Access and Reporting",
        items: [
            "Access to real-time reports for ESI payments and returns.",
            "Simplified dashboards for easy compliance tracking."
        ]
    }
];

const penaltyItems = [
    "Interest: 12% per annum for each day of delay in payment.",
    "Damages: Ranging from 5% to 25% per annum, depending on the duration of the default.",
];

const cacsfinaccSolutions = [
    "Accurate Calculation: Ensuring precise computation of contributions based on current wage structures.",
    "Timely Filing: Adhering to all statutory deadlines to prevent penalties.",
    "Documentation Management: Maintaining essential records such as attendance registers, wage registers, and accident registers.",
    "Compliance Advisory: Providing guidance on ESI regulations and updates to keep your business compliant.",
];


export default function EsiReturnFilingPage() {
  return (
    <main>
       <div className="py-6 bg-secondary">
        <div className="container mx-auto px-4">
            <Breadcrumbs
            items={[
                { label: 'Home', href: '/' },
                { label: 'Tax Filing', href: '/tax-filing' },
                { label: 'ESI Return Filings' },
            ]}
            />
        </div>
      </div>

      <section id="service-details" className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
                <h1 className="text-3xl md:text-4xl font-bold font-headline mb-4">
                    ESI Return Filing – Timely & Accurate Compliance
                </h1>

                <div>
                    <p className="text-muted-foreground text-justify">
                        At CACSFinacc Services, we understand the importance of timely and accurate filing of Employees' State Insurance (ESI) Returns. ESI is a self-financed social security scheme under the Employees' State Insurance Act, 1948, providing medical, disability, maternity, and unemployment benefits to employees earning ₹21,000 or less per month (₹25,000 for disabled employees). Compliance with ESI regulations is crucial for businesses to avoid legal penalties and ensure employee welfare.
                    </p>
                </div>
                
                <div>
                    <h2 className="text-2xl font-bold font-headline mb-4 text-primary">What is ESI Return Filing?</h2>
                    <p className="text-muted-foreground text-justify mb-4">
                        ESI Return Filing is a mandatory requirement for employers registered under the ESI Act. It involves the submission of monthly and half-yearly returns that detail:
                    </p>
                    <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                        <li>Employee contributions.</li>
                        <li>Employer contributions.</li>
                        <li>Employee wages and employment details.</li>
                        <li>Any updates regarding employee additions or exits.</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Our ESI Return Filing Services Include:</h2>
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
                
                <div className="space-y-4">
                    <h2 className="text-2xl font-bold font-headline text-primary">Key Updates for Financial Year (FY) 2025–26</h2>
                    
                    <div>
                        <h3 className="font-semibold text-lg">1. Revised ESI Contribution Rates</h3>
                        <p className="text-muted-foreground text-justify mt-2 mb-2">The ESI contribution rates remain unchanged for FY 2025–26:</p>
                        <ul className="space-y-2 pl-5 list-disc text-muted-foreground">
                            <li><strong>Employer's Contribution:</strong> 3.25% of the employee's wages</li>
                            <li><strong>Employee's Contribution:</strong> 0.75% of the wages</li>
                        </ul>
                         <p className="text-muted-foreground text-justify mt-2">These contributions are mandatory for establishments employing 10 or more persons earning wages up to ₹21,000 per month.</p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-lg">2. Updated Filing Deadlines</h3>
                        <p className="text-muted-foreground text-justify mt-2 mb-2">Timely filing of ESI returns is essential to maintain compliance. The due dates are as follows:</p>
                        <ul className="space-y-2 pl-5 list-disc text-muted-foreground">
                            <li><strong>Monthly ESI Contribution Payment:</strong> 15th of the following month. For instance, contributions for April 2025 are due by 15th May 2025.</li>
                            <li><strong>Half-Yearly ESI Return Filing:</strong> Due by 11th May and 11th November each year.</li>
                        </ul>
                    </div>
                    
                    <div>
                        <h3 className="font-semibold text-lg">3. Penalties for Non-Compliance</h3>
                        <p className="text-muted-foreground text-justify mt-2 mb-2">Failure to adhere to ESI payment and filing deadlines can result in:</p>
                        <ul className="space-y-2 pl-5 list-disc text-muted-foreground">
                           {penaltyItems.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                        <p className="text-muted-foreground text-justify mt-2">These penalties underscore the importance of timely compliance to avoid financial and legal repercussions.</p>
                    </div>
                </div>

                <div>
                    <p className="text-muted-foreground text-justify font-semibold">
                        At CACSFinacc Services, we offer comprehensive solutions to manage your ESI obligations:
                    </p>
                    <ul className="space-y-3 pl-5 list-disc text-muted-foreground mt-4">
                        {cacsfinaccSolutions.map((item, index) => (
                           <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
                
                <div>
                     <p className="text-muted-foreground text-justify">
                        Ensure seamless ESI compliance with CACSFinacc Services. Contact us today to streamline your ESI return filing process.
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
