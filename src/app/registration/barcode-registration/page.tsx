"use client";

import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { QuoteForm } from "@/components/quote-form";
import { Phone, Mail, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const whoNeedsIt = [
  "Manufacturers: To uniquely identify products and manage inventory efficiently.",
  "Exporters: To comply with international trade requirements.",
  "Retailers: To facilitate quick billing and stock management.",
  "E-commerce Sellers: Platforms like Amazon and Flipkart mandate barcodes for product listings.",
];

const barcodeTypes = [
  {
    title: "EAN-13",
    description:
      "Known as the International Article Number, which was formerly referred to as the European Article Number, the EAN-13 is a 13-digit barcode extensively used in Europe, India, and other countries. It plays a crucial role in the global retail supply chain, facilitating efficient product tracking and identification.",
  },
  {
    title: "UPC-A",
    description:
      "The Universal Product Code (UPC-A) is a 12-digit barcode widely used in the United States, Canada, the United Kingdom, Australia, and New Zealand. It is essential for standardizing and tracking retail products across these nations.",
  },
];

const businessUses = [
  "Inventory management: Large departmental stores with extensive product lines use barcode systems to track all aspects of the product cycle, from manufacturing to sales.",
  "Asset tracking: With the significant amount of IT assets businesses holds today, barcodes are used to tag and track assets in asset software.",
  "Returns tracking: In online shopping, barcodes can be used to track returns. They can also be attached to invoices to facilitate the tracking of payments from customers.",
];

const requiredDocs = [
  "Business Registration Proof: Such as GST certificate, Udyam/MSME registration, or company incorporation certificate.",
  "PAN Card: Of the business entity.",
  "Cancelled Cheque: For bank account verification.",
  "Product Details: Including product name, category, and packaging information.",
  "Letter of Request: On company letterhead requesting barcode allotment.",
];

const registrationSteps = [
  "Visit GS1 India Website: Navigate to GS1 India and select 'Register for Barcodes'.",
  "Choose Barcode Plan: Select between individual GTINs or a company prefix based on the number of products.",
  "Fill Application Form: Provide business and product details.",
  "Upload Documents: Submit the required documents as specified above.",
  "Make Payment: Pay the applicable fees based on your business turnover and barcode plan.",
  "Verification and Allotment: After verification, GS1 India will issue the barcode numbers and provide access to the DataKart portal for barcode management.",
];

const benefits = [
  "Global Recognition: GS1 barcodes are accepted in over 100 countries, facilitating international trade.",
  "Efficient Inventory Management: Automates stock tracking and reduces errors.",
  "Enhanced Retail Operations: Speeds up billing and checkout processes.",
  "E-commerce Compliance: Mandatory for listing products on major online marketplaces.",
  "Improved Product Traceability: Enables tracking of products throughout the supply chain.",
];

const whyChooseUs = [
  "Expert Guidance: Our team provides end-to-end assistance, ensuring accurate and timely registration.",
  "Customized Solutions: Tailored services to meet your specific business needs.",
  "Transparent Pricing: No hidden charges; clear breakdown of all costs involved.",
  "Timely Delivery: We prioritize prompt processing to get your business compliant swiftly.",
];

const feeFactors = [
  "Turnover of the company: Companies with a higher turnover may be required to pay higher barcode registration fees.",
  "Number of barcodes required: The fees may also depend on the number of barcodes that must be registered.",
  "Subscription period: The fees may vary based on the subscription period for which the barcodes are being registered.",
];

export default function BarcodeRegistrationPage() {
  return (
    <main>
      <div className="py-6 bg-secondary">
        <div className="container mx-auto px-4">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Registration", href: "/registration" },
              { label: "Barcode Registration" },
            ]}
          />
        </div>
      </div>

      <section id="service-details" className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <h1 className="text-3xl md:text-4xl font-bold font-headline mb-4">
                Barcode Registration
              </h1>

              <div>
                <p className="text-muted-foreground text-justify">
                  A barcode is a pattern of parallel lines of varying width and
                  spacing, along with digits; a machine can read that. It
                  quickly encodes and identifies important product details such
                  as product numbers, serial numbers, and batch numbers.
                </p>
                <p className="text-muted-foreground text-justify mt-4">
                  Barcodes are widely used for efficient product identification
                  in various industries, including supermarkets, clothing
                  stores, and malls. They offer many advantages, such as
                  reducing errors, cost-effectiveness, time-saving, and
                  simplified inventory management. This global identification
                  system benefits all parties in the supply chain, from
                  manufacturers to logistics and wholesalers, by providing an
                  easy and accurate way to identify products.
                </p>
                <p className="text-muted-foreground text-justify mt-4">
                  Barcode registration is essential for businesses aiming to
                  streamline inventory management, enhance product traceability,
                  and comply with retail and e-commerce standards. In India, GS1
                  India is the authorized body responsible for issuing globally
                  recognized barcodes.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">
                  How Do Businesses Use Barcodes?
                </h2>
                <p className="text-muted-foreground text-justify mb-4">
                  Barcodes are a widely used technology that provides a unique
                  symbol, typically consisting of parallel lines and a number,
                  which can be scanned to retrieve product information from a
                  database. Businesses utilize barcodes in several ways,
                  including:
                </p>
                <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                  {businessUses.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">
                  Types of Barcodes
                </h2>
                <p className="text-muted-foreground text-justify mb-4">
                  Below, we explore various types of barcodes commonly used in
                  different industries and applications:
                </p>
                <ul className="space-y-4">
                  {barcodeTypes.map((type, index) => (
                    <li key={index}>
                      <p className="font-semibold">{type.title}</p>
                      <p className="text-muted-foreground text-justify">
                        {type.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">
                  Who Needs Barcode Registration?
                </h2>
                <p className="text-muted-foreground text-justify mb-4">
                  Barcode registration is crucial for:
                </p>
                <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                  {whoNeedsIt.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">
                  Documents Required for Barcode Registration
                </h2>
                <p className="text-muted-foreground text-justify mb-4">
                  To apply for barcode registration, the following documents are
                  typically required:
                </p>
                <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                  {requiredDocs.map((doc, index) => (
                    <li key={index}>{doc}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">
                  Barcode Registration Process
                </h2>
                <ol className="space-y-3 list-decimal pl-5 text-muted-foreground">
                  {registrationSteps.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ol>
                <p className="text-muted-foreground text-justify mt-4">
                  The registration process typically takes 7-10 working days
                  after submitting the application and necessary documents.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">
                  Barcode registration Fees
                </h2>
                <p className="text-muted-foreground text-justify mb-4">
                  Please note that the barcode registration fees may vary
                  depending on the specific registration authority and the type
                  of barcode being registered. However, in general, the fees are
                  usually determined based on the following factors:
                </p>
                <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                  {feeFactors.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <p className="text-muted-foreground text-justify mt-4">
                  Based on these factors, the fees for barcode registration in
                  India can vary.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">
                  Benefits of Barcode Registration
                </h2>
                <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                  {benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">
                  Why Choose CACSFinacc for Your Barcode Registration?
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
