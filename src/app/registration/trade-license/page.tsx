
'use client';

import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { QuoteForm } from '@/components/quote-form';
import { Phone, Mail, CheckCircle2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const businessesRequiringLicense = [
    "Shops and Establishments: Retail stores, restaurants, hotels, theatres, amusement parks, and similar establishments engaged in trading or commercial activities typically need a trading license in India from the local municipal corporation.",
    "Food Establishments: Restaurants, cafes, food stalls, food processing units, and catering services that prepare, sell, or distribute food and beverages often require a online trading license along with an FSSAI license.",
    "Manufacturing Units: Factories, workshops, and industrial plants involved in manufacturing and production are usually required to obtain a trade license to ensure safety and environmental regulations compliance.",
    "Healthcare Facilities: Hospitals, clinics, nursing homes, and diagnostic centres need a trade license to ensure they meet the necessary standards for providing healthcare services.",
    "Entertainment and Leisure Activities: Cinema halls, multiplexes, video game parlours, gyms, spas, and health clubs involved in entertainment and leisure activities typically require a online trading license for public safety and regulatory compliance.",
    "Transport Services: Auto rickshaws, taxis, cab aggregators, and goods carriers offering transportation services may need a trade license for legal operation.",
    "Construction and Real Estate: Real estate developers, construction companies, and contractors may require a trade license to conduct their activities within specific municipal limits.",
    "Fireworks and Explosives: Businesses engaged in the manufacturing, storage, sale, or use of fireworks and explosive materials are subject to strict regulations and usually need a online trading license.",
    "Liquor Establishments: Liquor shops, bars, and pubs that sell and distribute alcoholic beverages require a trade license and permits from relevant authorities.",
    "Street Vendors and Hawkers: Individuals or groups engaged in street vending or hawking activities may need a trade license or specific vendor license from local authorities.",
];

const licenseTypes = [
    { title: "Type A:", description: "Required for all food service establishments." },
    { title: "Type B:", description: "Issued to units in manufacturing and processing that utilize machinery and electricity, such as milling units." },
    { title: "Type C:", description: "Provided for high-risk activities, including producing fireworks and wood and timber structures." },
];

const registrationSteps = [
    {
        title: "Determine the Type of License Required",
        description: "Identify the appropriate license category based on your business activity and location."
    },
    {
        title: "Gather Necessary Documents",
        description: "Ensure all required documents are prepared and up-to-date."
    },
    {
        title: "Apply Online via the Municipal Corporation Portal",
        items: [
            "Visit the official portal of your local municipal corporation.",
            "Register and fill out the application form.",
            "Upload the necessary documents.",
            "Pay the applicable fees online."
        ]
    },
    {
        title: "Inspection and Approval",
        items: [
            "The application is reviewed by municipal officials.",
            "An inspection may be conducted to verify the premises.",
            "Upon approval, the Trade License certificate is issued."
        ]
    }
];

const requiredDocs = [
    "Identity Proof: Aadhaar Card, PAN Card, or Voter ID of the proprietor/partners/directors.",
    "Address Proof: Utility bills, rental agreement, or property tax receipt of the business premises.",
    "Business Constitution Certificate: Partnership deed, Certificate of Incorporation, or other relevant documents.",
    "No Objection Certificate (NOC): From the property owner or neighbors, if applicable.",
    "Occupancy Certificate: If available.",
    "Photographs: Recent passport-sized photographs of the applicant.",
];

const recentAmendments = [
    "Mandatory Online Renewal: The Bruhat Bengaluru Mahanagara Palike (BBMP) has mandated online renewal of Trade Licenses for the year 2025-26. Traders must renew their licenses through the official BBMP portal. Late renewals post-February 2025 will attract penalties ranging from 25% to 100%.",
    "Separate License for Tobacco Sales: BBMP plans to implement a separate Trade License for tobacco product sales to regulate and monitor tobacco usage in the city. Traders can apply for this license through the BBMP website.",
    "Flexible Renewal Periods: Traders now have the option to renew their Trade Licenses for a period ranging from one to five years, based on their preference. The renewal fee will be calculated accordingly.",
];

const benefits = [
    "Legal Compliance: Ensures adherence to municipal laws and regulations.",
    "Business Credibility: Enhances trust among customers and stakeholders.",
    "Operational Legitimacy: Provides legal authorization to conduct business activities.",
    "Avoidance of Penalties: Prevents legal actions and fines due to non-compliance.",
];

const whyChooseUs = [
    "Expert Guidance: Our experienced professionals ensure compliance with all legal requirements.",
    "End-to-End Support: From documentation to obtaining necessary licenses, we handle it all.",
    "Transparent Pricing: No hidden charges; clear breakdown of all costs involved.",
    "Timely Delivery: We prioritize prompt processing to get your business up and running swiftly.",
];

export default function TradeLicensePage() {
  return (
    <main>
      <div className="py-6 bg-secondary">
        <div className="container mx-auto px-4">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Registration', href: '/registration' },
              { label: 'Trade License' },
            ]}
          />
        </div>
      </div>

      <section id="service-details" className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <h1 className="text-3xl md:text-4xl font-bold font-headline mb-4">
                Trade License Registration in India (2025)
              </h1>

              <div>
                <p className="text-muted-foreground text-justify">
                  Obtaining a Trade License is a legal requirement for businesses
                  operating in India. It ensures that your business complies with
                  local municipal laws and regulations. This guide provides an
                  updated overview of the Trade License registration process,
                  recent amendments, and essential documentation required in 2025.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Who Can Issue a Trade License?</h2>
                <p className="text-muted-foreground text-justify">
                  Trade licenses are typically issued by the licensing department
                  of the Municipal Corporation, which encompasses various
                  departments such as industries, engineering, and health. These
                  departments grant permission through a formal document or trade
                  license certificate, allowing businesses to operate within their
                  jurisdiction. The issuance process may vary from state to state,
                  depending on the rules and regulations of local government
                  agencies, specifically the Municipal Corporation.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Businesses Requiring Trade License Registration</h2>
                <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                  {businessesRequiringLicense.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Types of Trade Licenses Issued by the Municipality</h2>
                <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                  {licenseTypes.map((item, index) => (
                    <li key={index}><strong>{item.title}</strong> {item.description}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Steps for Trade License Registration</h2>
                <ol className="space-y-4 list-decimal pl-5">
                    {registrationSteps.map((step, index) => (
                        <li key={index}>
                            <p className="font-semibold">{step.title}</p>
                            {step.description && <p className="text-muted-foreground">{step.description}</p>}
                            {step.items && (
                                <ul className="list-disc pl-5 text-muted-foreground mt-2 space-y-1">
                                    {step.items.map((item, subIndex) => (
                                        <li key={subIndex}>{item}</li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ol>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Documents Required for Trade License Registration</h2>
                <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                  {requiredDocs.map((doc, index) => (
                    <li key={index}>{doc}</li>
                  ))}
                </ul>
                <p className="text-muted-foreground text-justify mt-4 text-sm">
                  <strong>Note:</strong> Additional documents may be required
                  based on the type of business and local municipal regulations.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Recent Amendments in Trade License Regulations (2025)</h2>
                <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                  {recentAmendments.map((amendment, index) => (
                    <li key={index}>{amendment}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Government Fees & Timeline</h2>
                <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                    <li><strong>Fees:</strong> The Trade License fee varies depending on the nature and size of the business and the local municipal corporation's regulations.</li>
                    <li><strong>Timeline:</strong> The processing time for a Trade License application typically ranges from 7 to 15 days, depending on the efficiency of the municipal corporation.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Benefits of Obtaining a Trade License</h2>
                <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                  {benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Why Choose CACSFinacc for Your Trade License Registration?</h2>
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
