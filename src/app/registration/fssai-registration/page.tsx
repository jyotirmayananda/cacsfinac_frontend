"use client";

import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { QuoteForm } from "@/components/quote-form";
import { Phone, Mail } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const keyFeatures = [
  "14-Digit Registration Number: Every FSSAI Registration or License comes with a 14-digit number that must be displayed on all food packages. This number provides vital information about the food product’s origin, including the state where it was assembled and the producer’s permit details.",
  "Quality Assurance: By compelling Food Business Operators (FBOs) to display their registration details, FSSAI ensures that accountability for quality and safety rests squarely on the entity handling the food.",
  "Applicability: FSSAI Registration is compulsory for all FBOs, from small-scale vendors to large manufacturing units, though the specific requirement—Registration vs. License—depends on the size and nature of the business.",
];

const whoNeedsIt = [
  "Petty retailers, Retail Shops, Snack shops, Confectionery or Bakery shops, etc",
  "Temporary stalls, fixed stalls, or food premises involved in preparing, storing, distributing, and selling food products.",
  "Hawkers selling packaged or freshly prepared food by traveling from one location to another.",
  "Dairy Units, including Milk Chilling Units, Petty Milkmen, and Milk Vendors",
  "Slaughtering house",
  "Fish Processing, Meat Processing, and units",
  "All Food Manufacturing units that include Repacking food",
  "Vegetable Oil Processing Units",
  "Proprietary food and Novel food",
  "Cold/refrigerated storage facility",
  "Transporter of food products, having several specialised vehicles like insulated refrigerated vans/wagons, milk tankers, food wagons, food trucks, etc",
  "Wholesalers, suppliers, distributors, and marketers of food products",
  "Hotels, Restaurants, and Bars",
  "Canteens and Cafeteria, including mid-day meal canteens",
  "Food Vending Agencies and Caterers",
  "Dhaba, PG provides food, Banquet hall with food catering arrangements, Home-based canteen, and Food stalls at fairs or religious institutions.",
  "Importers and Exporters of food items and food ingredients",
  "E-Commerce food suppliers, including cloud kitchens",
];

const eligibilityCriteria = [
  {
    title: "Annual Turnover Under INR 12 Lakh",
    description:
      "Applicable to petty retailers dealing in food products or any person manufacturing and selling food articles independently.",
  },
  {
    title: "Temporary Food Stalls or Small-Scale Operations",
    description:
      "Individuals who sell food products through temporary stalls or distribute food during religious and social gatherings (excluding caterers).",
  },
  {
    title: "Small-Scale or Cottage Food Industries",
    description:
      "Businesses working at a minimal scale, including industries with limited production capacities in food, milk, or meat.",
  },
];

const capacityLimits = [
  "Food Production (Other Than Milk and Meat): Up to 100 kg/liter per day.",
  "Milk Procurement and Handling: Up to 500 liters per day.",
  "Slaughtering: 2 large animals, 10 small animals or 50 poultry birds per day (or fewer).",
  "Transportation: Operated by a single vehicle.",
  "Vending Machines: Up to 12 machines within one state/UT.",
];

const registrationSteps = [
  {
    title: "Determine the Type of License Required",
    items: [
      "Basic Registration: For businesses with an annual turnover of up to ₹12 lakh.",
      "State License: For businesses with turnover between ₹12 lakh and ₹20 crore.",
      "Central License: For businesses with turnover above ₹20 crore or operating in multiple states.",
    ],
  },
  {
    title: "Gather Necessary Documents",
    items: ["Ensure all required documents are prepared and up-to-date."],
  },
  {
    title: "Apply Online via FoSCoS Portal",
    items: [
      "Visit the FoSCoS portal.",
      "Register and fill out the application form.",
      "Upload the necessary documents.",
      "Pay the applicable fees online.",
    ],
  },
  {
    title: "Inspection and Approval",
    items: [
      "The application is reviewed by FSSAI officials.",
      "An inspection may be conducted, especially for manufacturing units.",
      "Upon approval, the FSSAI registration certificate is issued.",
    ],
  },
];

const requiredDocs = [
  "Proof: PAN Card, Aadhaar Card, or Voter ID of the proprietor/partners/directors.",
  "Address Proof: Utility bills, rental agreement, or property tax receipt of the business premises.",
  "Business Constitution Certificate: Partnership deed, Certificate of Incorporation, or other relevant documents.",
  "Food Safety Management Plan: Detailed plan outlining safety measures.",
  "List of Food Products: Items to be manufactured or sold.",
  "Form B: Duly completed and signed.",
  "NOC from Municipality or Local Body: If applicable.",
];

const recentAmendments = [
  "Unified Compliance Date: FSSAI has designated July 1st as the annual date for implementing changes to food safety and labeling regulations. This provides businesses with a clear timeline for compliance.",
  "Enhanced Labeling Requirements: Draft amendments mandate the display of the percentage of Recommended Dietary Allowance (RDA) for added sugars, saturated fats, and sodium on packaging, aiming to enhance nutritional transparency.",
  "Migration to FoSCoS Platform: FSSAI has mandated the migration of existing licenses to the unified Food Safety Compliance System (FoSCoS) platform, streamlining the licensing process and ensuring consistency.",
];

const benefits = [
  "Compliance: Ensures adherence to food safety laws.",
  "Consumer Trust: Enhances brand credibility and consumer confidence.",
  "Business Expansion: Facilitates smooth expansion and access to new markets.",
  "Government Support: Eligibility for government schemes and subsidies.",
];

const whyChooseUs = [
  "Expert Guidance: Our experienced professionals ensure compliance with all legal requirements.",
  "End-to-End Support: From documentation to obtaining necessary licenses, we handle it all.",
  "Transparent Pricing: No hidden charges; clear breakdown of all costs involved.",
  "Timely Delivery: We prioritize prompt processing to get your business up and running swiftly.",
];

export default function FssaiRegistrationPage() {
  return (
    <main>
      <div className="py-6 bg-secondary">
        <div className="container mx-auto px-4">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Registration", href: "/registration" },
              { label: "FSSAI Registration" },
            ]}
          />
        </div>
      </div>

      <section id="service-details" className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <h1 className="text-3xl md:text-4xl font-bold font-headline mb-4">
                FSSAI Registration
              </h1>

              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">
                  FSSAI Registration in India
                </h2>
                <p className="text-muted-foreground text-justify">
                  FSSAI Registration is a compulsory authorisation for
                  individuals or entities involved in the manufacturing,
                  processing, storage, distribution, or sale of food products in
                  India. It is governed by the Food Safety & Standards
                  (Licensing and Registration of Food Business) Regulations,
                  2011. This registration differs from an FSSAI License based on
                  the size and nature of the business.
                </p>
                <p className="text-muted-foreground text-justify mt-4">
                  Ensuring food safety and compliance is paramount for any food
                  business operator (FBO) in India. The Food Safety and
                  Standards Authority of India (FSSAI) mandates registration or
                  licensing for all entities involved in the food sector. This
                  guide provides an updated overview of the FSSAI registration
                  process, recent amendments, and essential documentation
                  required in 2025.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">
                  Key Features of FSSAI Registration
                </h2>
                <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                  {keyFeatures.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">
                  Issuance of FSSAI Registration
                </h2>
                <p className="text-muted-foreground text-justify">
                  FSSAI stands for the Food Safety and Standards Authority of
                  India, an autonomous organisation under the Ministry of Health
                  and Family Welfare, Government of India. Established under the
                  Food Safety and Standards Act, 2006 (FSS Act), FSSAI governs
                  the food business in India, ensuring that food products meet
                  quality standards and undergo safety checks. Its primary goal
                  is to eliminate food adulteration and the sale of substandard
                  products while maintaining the safety of food products across
                  the country.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">
                  Food Business Operators Who Require FSSAI Registration
                </h2>
                <p className="text-muted-foreground text-justify mb-4">
                  The Food Business Operators (FBOs) carrying on the following
                  kinds of food business must have an FSSAI
                  License/Registration:
                </p>
                <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                  {whoNeedsIt.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">
                  Types of FSSAI Registration
                </h2>
                <p className="text-muted-foreground text-justify mb-4">
                  FSSAI registrations are categorized based on a food business’s
                  turnover, production capacity, and other operational details.
                  Businesses must choose from three main types of
                  registrations/licenses—Basic, State, or Central—depending on
                  their turnover and production scope. Below is an overview of
                  each registration type and the corresponding eligibility
                  criteria:
                </p>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg">
                      FSSAI Basic Registration
                    </h3>
                    <ul className="space-y-1 pl-5 list-disc text-muted-foreground">
                      <li>
                        <strong>Who Needs It:</strong> Food Business Operators
                        (FBOs) with an annual turnover of less than INR 12 lakh.
                      </li>
                      <li>
                        <strong>Registration Form:</strong> Form A
                      </li>
                      <li>
                        <strong>Key Point:</strong> This registration is
                        generally for small-scale or startup food ventures, such
                        as small retailers or home-based food producers.
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">
                      FSSAI State License
                    </h3>
                    <ul className="space-y-1 pl-5 list-disc text-muted-foreground">
                      <li>
                        <strong>Who Needs It:</strong> FBOs with an annual
                        turnover between INR 12 lakh and INR 20 crore.
                      </li>
                      <li>
                        <strong>Registration Form:</strong> Form B
                      </li>
                      <li>
                        <strong>Key Point:</strong> Medium-sized ventures—like
                        mid-level restaurants, small to mid-scale manufacturers,
                        and distributors—typically require the State License.
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">
                      FSSAI Central License
                    </h3>
                    <ul className="space-y-1 pl-5 list-disc text-muted-foreground">
                      <li>
                        <strong>Who Needs It:</strong> FBOs with an annual
                        turnover exceeding INR 20 crore.
                      </li>
                      <li>
                        <strong>Registration Form:</strong> Form B
                      </li>
                      <li>
                        <strong>Key Point:</strong> Large-scale food
                        businesses—such as major manufacturers, major retailers,
                        and large distributors—must apply for the Central
                        License.
                      </li>
                    </ul>
                  </div>
                </div>
                <p className="text-muted-foreground text-justify mt-4">
                  By choosing the registration/license that aligns with their
                  business size and turnover, FBOs ensure they comply with the
                  regulations laid down by the Food Safety & Standards Authority
                  of India (FSSAI).
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">
                  FSSAI Registration Eligibility
                </h2>
                <p className="text-muted-foreground text-justify mb-4">
                  FSSAI Registration serves as a basic license for Food Business
                  Operators (FBOs) who run small-scale food operations. The
                  following categories of businesses must obtain FSSAI
                  Registration:
                </p>
                <ul className="space-y-4 pl-5 list-disc text-muted-foreground">
                  {eligibilityCriteria.map((item, index) => (
                    <li key={index}>
                      <strong>{item.title}:</strong> {item.description}
                    </li>
                  ))}
                </ul>
                <div className="mt-4">
                  <p className="font-semibold">Capacity-Based Limits:</p>
                  <ul className="space-y-2 pl-5 list-disc text-muted-foreground">
                    {capacityLimits.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                <p className="text-muted-foreground text-justify mt-4">
                  All the above categories must meet FSSAI’s basic registration
                  requirements to operate legally under the Food Safety &
                  Standards (Licensing and Registration of Food Business)
                  Regulations, 2011.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">
                  Procedure for Obtaining FSSAI Registration Online
                </h2>
                <ol className="space-y-4 list-decimal pl-5">
                  {registrationSteps.map((step, index) => (
                    <li key={index} className="text-muted-foreground">
                      <span className="font-semibold text-foreground">
                        {step.title}
                      </span>
                      <ul className="list-disc pl-5 mt-1">
                        {step.items.map((item, subIndex) => (
                          <li key={subIndex}>{item}</li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ol>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">
                  Documents Required for FSSAI Registration
                </h2>
                <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                  {requiredDocs.map((doc, index) => (
                    <li key={index}>{doc}</li>
                  ))}
                </ul>
                <p className="text-muted-foreground text-justify mt-4 text-sm">
                  <strong>Note:</strong> Additional documents may be required
                  based on the type of license and nature of the business.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">
                  Recent Amendments in FSSAI Regulations (2025)
                </h2>
                <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                  {recentAmendments.map((amendment, index) => (
                    <li key={index}>{amendment}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">
                  Benefits of FSSAI Registration
                </h2>
                <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                  {benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">
                  Why Choose CACSFinacc for Your FSSAI Registration?
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
