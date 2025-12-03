
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

const whoNeedsIt = [
  "Exporters of Scheduled Products: Such as fruits, vegetables, meat, dairy products, and processed foods.",
  "Manufacturers and Processors: Engaged in the production of scheduled products for export.",
  "Merchant Exporters: Trading in agricultural and processed food products internationally.",
];

const firstSchedule = [
    "Fruits, Vegetables, and their Products",
    "Meat and Meat Products",
    "Poultry and Poultry Products",
    "Dairy Products",
    "Chocolates, Cocoa, and its Products",
    "Cereals and Cereal Products",
    "Groundnuts, Peanuts, and Walnuts",
    "Pickles, Chutneys, and Papads",
    "De-oiled Rice Bran",
    "Alcoholic and Non-Alcoholic Beverages",
    "Green Pepper in Brine",
    "Guar Gum",
    "Floriculture and Floriculture Products",
    "Herbal and Medicinal Plants",
    "Confectionery, Biscuits, and Bakery Products",
    "Honey, Jaggery, and Sugar Products",
];

const secondSchedule = [
    "Basmati Rice"
];

const whyRequired = [
    "Legal Compliance: Ensures adherence to government regulations for exporting scheduled products.",
    "Market Access: Acts as a gateway to international markets, allowing legal export of products.",
    "Financial Assistance: Eligibility for APEDA’s financial schemes to reduce costs related to packaging, branding, marketing, and infrastructure development.",
    "Quality Assurance: Access to guidelines and training programs to enhance product quality and competitiveness.",
    "Market Development Support: Assistance in promoting products globally through trade fairs, buyer-seller meets, and other promotional activities.",
    "Information Access: Updates on international trade policies, market intelligence, and emerging opportunities.",
    "Certification and Accreditation: Prerequisite for obtaining other necessary certifications for specific markets.",
    "Export Facilitation: Streamlines export procedures by providing necessary support and guidance.",
    "Regulatory Benefits: Access to government initiatives aimed at boosting exports, including tax exemptions and subsidies.",
    "Dispute Resolution: Acts as an intermediary in resolving disputes between exporters and importers.",
];

const allExporterDocs = [
    "Import-Export Code (IEC): Issued by the Directorate General of Foreign Trade (DGFT).",
    "Bank Certificate: Confirming the applicant's account details.",
    "Bank Account Statement: For the last two months.",
    "Cancelled Cheque: Of the applicant's bank account.",
    "Business Registration Proof: Such as partnership deed, incorporation certificate, or registration certificate.",
    "Address Proof: Of the business premises.",
    "Duly Signed APEDA RCMC Registration Form.",
];

const manufacturerDocs = [
    "Central FSSAI Registration (Food Safety and Standards Authority of India)",
    "DIS/SIA Certificate issued by the Department of Horticulture for food products listed under the APEDA Act",
    "Certificate of Incorporation of the firm (including partnership deed if applicable)",
    "No Objection Certificate (NOC) from the Pollution Control Board",
    "MSME Certificate (if applicable)",
    "Halal Certificate (if required)",
];

const registrationSteps = [
    "Visit the APEDA Website: Navigate to the APEDA official website.",
    "Register/Login: Create an account or log in using your credentials.",
    "Fill Application Form: Provide details about your business, such as name, address, IEC, and bank details.",
    "Upload Required Documents: Ensure all necessary documents are uploaded in the specified format.",
    "Pay Application Fee: The application fee is ₹5,000 (excluding GST), payable through the online portal.",
    "Submit Application: After verifying all details, submit the application.",
    "Receive Registration Certificate: Upon successful verification, the APEDA Registration-Cum-Membership Certificate (RCMC) will be issued electronically within 7 working days.",
];

const penalties = [
    "Imprisonment: Up to six months for violating or attempting to breach provisions.",
    "Fines: Rs.1,000 for initial offences and an additional Rs.50 per day for repeat offences from the date of the first infringement until conviction.",
    "Corporate Liability: If a company commits an offence, every person in charge at the time shall be deemed guilty along with the company and punished accordingly.",
];

const cancellationConditions = [
    "Non-Activity: Failure to conduct the export business of scheduled food products for 12 consecutive months.",
    "Incorrect Information: Providing false or misleading information during the registration process.",
    "Regulatory Violations: Non-compliance with APEDA rules and regulations.",
];

const benefits = [
    "Legal Compliance: Mandatory for exporting scheduled products from India.",
    "Market Development Assistance: Eligibility for financial assistance schemes for market development.",
    "Export Promotion: Access to various promotional schemes and events organized by APEDA.",
    "Quality Assurance: Guidance on improving product quality and packaging standards.",
    "Global Market Access: Facilitates entry into international markets with recognized certification.",
];

const whyChooseUs = [
    "Expert Guidance: Our experienced professionals ensure compliance with all legal requirements.",
    "End-to-End Support: From documentation to obtaining the APEDA certificate, we handle it all.",
    "Transparent Pricing: No hidden charges; clear breakdown of all costs involved.",
    "Timely Delivery: We prioritize prompt processing to get your business up and running swiftly.",
];

export default function ApedaRegistrationPage() {
  return (
    <main>
      <div className="py-6 bg-secondary">
        <div className="container mx-auto px-4">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Registration', href: '/registration' },
              { label: 'APEDA Registration' },
            ]}
          />
        </div>
      </div>

      <section id="service-details" className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <h1 className="text-3xl md:text-4xl font-bold font-headline mb-4">
                APEDA Registration
              </h1>

              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">What is APEDA Registration?</h2>
                <p className="text-muted-foreground text-justify">
                  The Agricultural and Processed Food Products Export Development Authority (APEDA) registration is mandatory for exporters dealing with scheduled products in India. Established under the APEDA Act, this registration facilitates the export of agricultural and processed food products, ensuring compliance with international standards.
                </p>
                <p className="text-muted-foreground text-justify mt-4">
                  APEDA Registration is an essential certificate for Indian importers and exporters seeking to access international markets in the agricultural and processed food sectors. It signifies regulatory compliance and provides access to an array of incentives and opportunities designed to propel exports and catalyze growth.
                </p>
                <p className="text-muted-foreground text-justify mt-4">
                  In a world increasingly valuing organic, authentic, and diverse food products, APEDA Registration has become an indispensable asset for Indian exporters.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Who Needs APEDA Registration?</h2>
                <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                  {whoNeedsIt.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Scheduled Food Products Under the APEDA Act</h2>
                <h3 className="font-semibold mt-4 mb-2">First Schedule:</h3>
                <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                    {firstSchedule.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <h3 className="font-semibold mt-4 mb-2">Second Schedule:</h3>
                <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                    {secondSchedule.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                 <p className="text-muted-foreground text-justify mt-4">
                    By obtaining APEDA Registration, exporters of these scheduled products can ensure compliance with export regulations and gain access to various benefits offered by APEDA.
                </p>
              </div>

               <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Why APEDA Registration is Required?</h2>
                <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                  {whyRequired.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Timeframe for Obtaining APEDA Registration</h2>
                <p className="text-muted-foreground text-justify">
                    Exporters are expected to acquire APEDA Registration within one month of the incorporation of their business. Timely registration ensures uninterrupted access to APEDA benefits and compliance with export regulations.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">APEDA Registration Documents</h2>
                 <p className="text-muted-foreground text-justify mb-4">
                    Exporters must submit the following documents when applying for APEDA license Registration:
                </p>
                <h3 className="font-semibold mt-4 mb-2">For All Exporters:</h3>
                <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                    {allExporterDocs.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <h3 className="font-semibold mt-4 mb-2">Additional Documents for Manufacturer Exporters:</h3>
                <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                    {manufacturerDocs.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">APEDA Registration Process</h2>
                <ol className="space-y-3 list-decimal pl-5 text-muted-foreground">
                  {registrationSteps.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ol>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Validity and APEDA Registration Renewal Online</h2>
                <p className="text-muted-foreground text-justify">
                  The Registration-Cum-Membership Certificate (RCMC) issued by APEDA is valid for a period of five years from the date of issuance. After this duration, the RCMC APEDA license is auto-renewed every five years upon the submission of the required renewal fee. Exporters are not required to submit any additional documents or undergo further formalities for the APEDA renewal process once the fee is paid. This APEDA online registration procedure ensures a seamless renewal experience, allowing exporters to maintain their registration without administrative delays.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Penalties for Non-Compliance with the APEDA Act</h2>
                <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                  {penalties.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Cancellation of APEDA (RCMC) Registration</h2>
                <p className="text-muted-foreground text-justify">
                    APEDA License Registration can be cancelled under the following conditions as specified in Section 11 of the APEDA Act:
                </p>
                <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                  {cancellationConditions.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                 <p className="text-muted-foreground text-justify mt-4">
                    Maintaining active business operations and adhering to regulatory guidelines are crucial to retaining your APEDA Registration and its associated benefits.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Government Fees & Timeline</h2>
                <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                  <li><strong>Application Fee:</strong> ₹5,000 (excluding GST).</li>
                  <li><strong>Processing Time:</strong> Typically, 7 working days after submission and verification.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Benefits of APEDA Registration</h2>
                <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                  {benefits.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Why Choose CACSFinacc for Your APEDA Registration?</h2>
                <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                  {whyChooseUs.map((item, index) => (
                    <li key={index}>{item}</li>
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
