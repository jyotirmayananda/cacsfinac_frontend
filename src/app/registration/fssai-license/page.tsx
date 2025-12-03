
'use client';

import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { QuoteForm } from '@/components/quote-form';
import { Phone, Mail, CheckCircle2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const fssaiRegistrationConditions = [
  "Annual Turnover: The turnover should be less than Rs. 12 lakhs.",
  "Production Capacity: Food products (excluding milk, meat, and fish) should not exceed 100 liters or kg daily.",
  "Milk Procurement: The milk procurement, handling, and collection should be limited to 500 liters daily.",
  "Slaughtering Capacity: Slaughtering capacity should be up to ten small animals, two large animals, or 50 poultry birds per day or less.",
  "Food Distribution: Engaging in food distribution at religious or social gatherings, except as a caterer.",
];

const benefits = [
  "Compliance: Ensures adherence to food safety laws.",
  "Consumer Trust: Enhances brand credibility and consumer confidence.",
  "Business Expansion: Facilitates smooth expansion and access to new markets.",
  "Government Support: Eligibility for government schemes and subsidies.",
];

const nonManufacturingDocs = [
  "A list of Directors, Partners, Proprietor, and Executive members of Society/Trust, including full addresses and contact details, along with the nomination of the authorized Signatory.",
  "Photo ID and address proof issued by a government authority for the Proprietor, Partner, Directors, and Authorized Signatory.",
  "Proof of possession of premises, which can include a Sale Deed, Rent Agreement, or Electricity Bill.",
  "Partnership Deed or Self Declaration for Proprietorship, Memorandum, and Article of Association related to the constitution of the firm.",
  "Copy of the Certificate obtained under the Coop Act, 1861.",
  "Form IX - Nomination of a Person.",
];

const manufacturingKoBDocs = [
    "Hotels, Restaurants, Food Vending Establishments, Club/Canteen - Analysis report of water to be used as an ingredient in food from a recognized/public health laboratory.",
    "Importer - Importer Export Code and Recall Pan.",
    "Merchant Exporter - Importer Export Code and a declaration that products meant for export only shall not be exposed for sale and consumption in the domestic market.",
    "Head office/Registered office/e-Commerce - Recall Pan.",
    "Transporters - List of Vehicle Registration Numbers.",
];

const manufacturingProcessorDocs = [
    "List of Directors, Partners, Proprietor, and Executive Members of Society/Trust, including full addresses and contact details, along with the nomination of the authorized Signatory.",
    "Photo ID and address proof issued by the Government authority for the Proprietor, Partner, Directors, and authorized Signatory.",
    "Proof of Possession of premises, which can include a Sale Deed, Rent Agreement, or Electricity Bill.",
    "Partnership Deed or Self Declaration for Proprietorship, Memorandum, and Article of Association related to the constitution of the firm.",
    "Copy of the certificate obtained under the Coop Act-1861.",
    "Form IX - Nomination of a person as per the FSS Rules, 2008.",
    "Blueprint/layout plan of the processing unit showing the dimensions in meters/square meters and operation-wise area location.",
    "Production unit photographs.",
    "Name and list of equipment and machinery, including the number, installed capacity, and horsepower used.",
    "Analysis report (Chemical and bacteriological) of water to be used as an ingredient in food from a recognized/public health laboratory.",
];

const penalties = [
    "Imprisonment: The offender may face imprisonment for a period that has the potential to extend up to six months.",
    "Monetary Fine: In addition to imprisonment, the offender can be imposed with a fine, potentially extending up to five lakh rupees.",
];

const whyChooseUs = [
  "Expert Guidance: Our experienced professionals ensure compliance with all legal requirements.",
  "End-to-End Support: From documentation to obtaining necessary licenses, we handle it all.",
  "Transparent Pricing: No hidden charges; clear breakdown of all costs involved.",
  "Timely Delivery: We prioritize prompt processing to get your business up and running swiftly.",
];

export default function FssaiLicensePage() {
  return (
    <main>
      <div className="py-6 bg-secondary">
        <div className="container mx-auto px-4">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Registration', href: '/registration' },
              { label: 'FSSAI License' },
            ]}
          />
        </div>
      </div>

      <section id="service-details" className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <h1 className="text-3xl md:text-4xl font-bold font-headline mb-4">
                FSSAI License Registration in India: State & Central License
              </h1>

              <div>
                <p className="text-muted-foreground text-justify">
                  If your business sells food or edible items, adhering to the FSSAI (Food Safety and Standards Authority of India) Act regulations is crucial. This legal framework requires your business to be officially registered with the government and obtain a license from the Food Safety Department. Whether you are a small-scale or large-scale food business engaged in manufacturing, storing, transporting, or distributing food, obtaining FSSAI registration or a license, depending on your business's size and nature, is essential. Obtaining food registration and complying with these regulations ensures the safety and quality of the country's food products.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Licensing and Registration for Food Businesses in India</h2>
                <p className="text-muted-foreground text-justify">
                  According to Section 31(1) of the Food Safety and Standards Act, 2006, all Food Business Operators in India must obtain an FSSAI license from the Food Safety & Standards Authority of India. This legal requirement is governed by the Food Safety & Standards (Licensing and Registration of Food Business) Regulations, 2011. Any food manufacturing, storage, transportation, or distribution business must hold a valid FSSAI License or Registration. The specific type of authorization, whether registration or license, depends on the scale and nature of the food business.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Who Requires an FSSAI License?</h2>
                 <p className="text-muted-foreground text-justify">
                  In India, any business engaged in activities such as making, storing, distributing, selling, or importing food products is obligated to secure an FSSAI (Food Safety and Standards Authority of India) license. This encompasses restaurants, catering services, food processing factories, food delivery ventures, and online food sellers requiring FSSAI license apply online. Both individuals and companies participating in these operations must obtain an FSSAI license online to operate lawfully within India. After applying, ensure to engage in the FSSAI license check process to find the status of your application.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">FSSAI Registration</h2>
                 <p className="text-muted-foreground text-justify mb-4">
                  FSSAI Registration is mandatory for small-scale food manufacturers or Food Business Operators (FBOs) whose turnover is below Rs. 12 Lakhs unless the FBO falls under the category of compulsory licensing. Petty FBOs involved in producing or selling food items, such as hawkers, petty retailers, itinerant vendors, temporary stall-holders, or small-scale food industry enterprises, need to obtain an FSSAI registration certificate if they meet the following conditions:
                </p>
                 <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                  {fssaiRegistrationConditions.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                 <p className="text-muted-foreground text-justify mt-4">
                  The FSSAI registration number, consisting of 14 digits, is issued by the State Licensing Authority. Notably, the first digit of the registration number begins with the digit 2.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">FSSAI License for Food Businesses</h2>
                 <p className="text-muted-foreground text-justify mb-4">
                  An FSSAI License is a crucial requirement for enterprises with a turnover exceeding Rs. 12 lakhs and for Food Business Operators (FBOs) engaged in food processing and manufacturing. This license is divided into two primary types: Central FSSAI License and State FSSAI License. The FSSAI license is identified by a 14-digit code with the initial digit 1. The choice between a State or central license depends on the scale of the business. The validity of the license must be maintained through FSSAI License Renewal. With the FSSAI license online check, you can check the authenticity and validity of your license.
                </p>
                <div className="space-y-4">
                    <div>
                        <h3 className="font-semibold text-lg">State License:</h3>
                        <p className="text-muted-foreground text-justify">
                            FBOs such as medium-scale processors, manufacturers, traders, marketers, or transporters fall within the jurisdiction of the FSSAI state license, which the respective state government grants. Medium-sized FBOs with an annual turnover surpassing Rs. 12 lakhs but not exceeding Rs. 20 Crores are required to obtain a state license. A central license becomes mandatory if an FBO's annual turnover exceeds Rs. 20 Crores.
                        </p>
                    </div>
                     <div>
                        <h3 className="font-semibold text-lg">Central License:</h3>
                        <p className="text-muted-foreground text-justify">
                            Large-scale enterprises involved in food processing, transportation, manufacturing, and international trade of food products are obligated to obtain the FSSAI central license. An FBO is classified as a large business if its annual turnover exceeds Rs. 20 Crores, necessitating acquiring the FSSAI central license from the Central Government.
                        </p>
                    </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Benefits of FSSAI License</h2>
                <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                  {benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </div>

               <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Documents Required</h2>
                 <p className="text-muted-foreground text-justify mb-4">
                  Documents Required for FSSAI license apply online is listed as follows:
                </p>
                <div className="space-y-4">
                    <div>
                        <h3 className="font-semibold text-lg">Mandatory Documents for Non-Manufacturing KoBs:</h3>
                         <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                            {nonManufacturingDocs.map((doc, index) => (
                                <li key={index}>{doc}</li>
                            ))}
                        </ul>
                    </div>
                     <div>
                        <h3 className="font-semibold text-lg">Documents for Manufacturing KoBs:</h3>
                         <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                            {manufacturingKoBDocs.map((doc, index) => (
                                <li key={index}>{doc}</li>
                            ))}
                        </ul>
                    </div>
                     <div>
                        <h3 className="font-semibold text-lg">Documents Required for Manufacturers/Processors:</h3>
                         <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                            {manufacturingProcessorDocs.map((doc, index) => (
                                <li key={index}>{doc}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                 <p className="text-muted-foreground text-justify mt-4">
                  Additionally, certain supplementary documents and FSSAI license fees are necessary to obtain FSSAI registration. These documents are necessary to initiate the Food registration process. After applying, track your FSSAI application status with the help of FSSAI license check. Our expert team will provide guidance and assistance during the process of food licence apply online.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Validity & FSSAI License Renewal</h2>
                <p className="text-muted-foreground text-justify">
                  The FSSAI License / Registration is issued for 1 to 5 years, as the Food Business Operator chooses. This validity period begins from the date of issuance. FSSAI License Renewal is essential for the Food Business Operator (FBO) to initiate the renewal process for the license or registration at least 30 days before the current authorization is set to expire.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Penalties for Conducting Business without an FSSAI License</h2>
                <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                  {penalties.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <p className="text-muted-foreground text-justify mt-4">
                  It is important to note that carrying out food-related business activities without the appropriate FSSAI license can lead to legal consequences, including imprisonment and significant financial penalties. Timely FSSAI license check can help you to reduce the risk of non-compliance penalties and issues.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Why Choose CACSFinacc for Your FSSAI License Registration?</h2>
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
