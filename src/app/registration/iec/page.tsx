
'use client';

import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { QuoteForm } from '@/components/quote-form';
import { Phone, Mail } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const importancePoints = [
  "International market unlocks: As the DGFT IEC Code is a requirement for the import and export business, it allows the products to reach the global market. IE code makes the entry of the international Indian company smoother and opens doors for growth and expansion.",
  "Online DGFT IEC registration: The process to find the import and export code is entirely online and hassle-free with short document submission.",
  "Less document requirement: It is not required to submit many documents to for the process of IEC Code apply and obtain an import and export license.",
  "Lifetime Validity: IE Code is a lifetime registration valid as long as the business exists. Hence, there are no issues with updating, filing, and renewing Import Export Code registration. The IEC registration is valid until the company exists or the registration is not revoked or surrendered.",
  "Reduces illegal goods transportation: The most basic requirement for the import export license is that you need to provide authentic information. Without giving proper information, IE code cannot be obtained. This criterion makes the transportation of illegal goods impossible.",
  "Availing Several Benefits: Import and Export code registration has enormous benefits for importers and exporters. The registered business entities can get help through subsidies from the Customs, Export Promotion Council or other authorities. With LUT filing under GST, the exporters can make exports without paying taxes. If the exports are made with tax payment, the exporter can claim the refunds of the paid tax amount.",
  "Compliances: Unlike other tax registration, the person carrying import or export does not require to fulfill any specific compliance requirements such as the annual filing or the return filings.",
];

const firmTypes = [
  "Proprietorship Firm",
  "Partnership Firm",
  "Limited Liability Partnership",
  "Limited Company",
  "Trust",
  "Hindu Undivided Family (HUF)",
  "Society",
];

const prerequisites = [
  "Valid DGFT IEC Login Credentials to DGFT Portal (After Registering on DGFT Portal)",
  "IEC may be applied on behalf of a firm which may be a Proprietorship, Partnership, LLP, Limited Company, Trust, HUF, and Society.",
  "The Firm must have an active Firm's Permanent Account Number (PAN) and details like Name as per Pan, Date of Birth, or Incorporation.",
  "The Firm must also have a bank account in the Name of the Firm and a valid address before the procedure of IEC Code apply.",
];

const requiredDocs = [
    { 
        title: "Proof of establishment/incorporation/registration:",
        items: ["Partnership", "Registered Society", "Trust", "HUF", "Other"]
    },
    {
        title: "Proof of Address (any one):",
        items: ["Sale Deed", "Rent agreement", "Lease deed", "Electricity bill", "Telephone landline bill", "Mobile, post-paid bill", "MoU", "Partnership deed", "Other acceptable documents (for proprietorship only): Aadhar card, Passport, Voter id"]
    },
    {
        title: "Proof of Firm's Bank Account:",
        items: ["Canceled Cheque", "Bank Certificate"]
    },
    {
        title: "Other requirements:",
        items: ["User should have an active DSC or Aadhaar of the Firm's member for submission.", "Active Firm's Bank accounts for entering its details in the Application and making online payment of the application fee."]
    }
];

const registrationSteps = [
  "Visit the DGFT Website: Navigate to the DGFT official website.",
  "Register/Login: Create an account or log in using your credentials.",
  "Apply for IEC: Under the 'Services' section, select 'IEC Profile Management' and click on 'Apply for IEC'.",
  "Fill Application Form (ANF 2A): Provide details about your business, such as name, address, PAN, and bank details.",
  "Upload Required Documents: Ensure all necessary documents are uploaded in the specified format.",
  "Pay Application Fee: The application fee is ₹500, payable through the online portal.",
  "Submit Application: After verifying all details, submit the application.",
  "Receive IEC Certificate: Upon successful verification, the IEC certificate will be issued electronically within 1-2 working days.",
];

export default function IecRegistrationPage() {
  return (
    <main>
      <div className="py-6 bg-secondary">
        <div className="container mx-auto px-4">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Registration', href: '/registration' },
              { label: 'Importer Exporter Code' },
            ]}
          />
        </div>
      </div>

      <section id="service-details" className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <h1 className="text-3xl md:text-4xl font-bold font-headline mb-4">
                IEC (Importer Exporter Code) Registration
              </h1>

              <div>
                <p className="text-muted-foreground text-justify">
                  International trade is a gateway to a world of opportunities for businesses in India. Whether you're looking to import goods, export products, or expand your business globally, having an Importer Exporter Code (IEC) is your key to entering the international market. This import and export code is issued by the Directorate General of Foreign Trade (DGFT), under the Ministry of Commerce. All the importers and exporters in India must know what is IEC Code. For importers, the DGFT IEC and import and export license are indispensable for the clearance of customs and facilitating payments to foreign banks, ensuring smooth international trade transactions. Similarly, exporters rely on the IEC to streamline the process of sending shipments and receiving payments from overseas clients. The Importer Exporter Code (IEC) is a mandatory 10-digit identification number issued by the Directorate General of Foreign Trade (DGFT), Ministry of Commerce and Industry, Government of India. It is essential for businesses and individuals engaged in international trade, including import and export activities.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">What is IEC Code (Import Export Code)?</h2>
                <p className="text-muted-foreground text-justify">
                  IEC Code Full Form is "Importer Exporter Code". Import and Export Code is to be obtained by the business entity for import into or export from India. Import & Export Code is popularly known as the IEC number. Import & Export Code is a ten-digit unique number issued by the Directorate General of Foreign Trade (DGFT).
                </p>
                <p className="text-muted-foreground text-justify mt-4">
                  DGFT IEC registration certificate is mandatory for a business involved in import and export. Hence, before initiating an import of goods into India, an importer must ensure that the importing entity has GST registration and IE code, both of which are required to clear customs. If an importer does not have both GST and import and export license, the goods will be stuck at the port and start incurring demurrage charges or could be destroyed. Ensure to follow the key rules and regulations while engaging in the process of IEC Code Apply through IEC Code Login.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Importance of Import Export Code</h2>
                <p className="text-muted-foreground text-justify mb-4">
                  Businesses have a great option to enter the international market with the export and import of the products and the services they are involved in. The IE code is an essential requirement while entering the global market as it supports the growth and development of the business to a certain extent. There are various advantages of getting an import and export code. Here we have listed a few of them:
                </p>
                <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                  {importancePoints.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Validity of DGFT IEC Code</h2>
                <p className="text-muted-foreground text-justify">
                  As mentioned above, IEC Code registration is permanent and valid for a lifetime. Hence, there will be no hassles with updating, filing, and renewing the import export license. It is valid till the business exists or the registration is not revoked or surrendered. Further, unlike tax registrations like GST registration or PF registration, the importer or exporter does not require to file any filings or follow any other compliance requirements like annual filing.
                </p>
                <p className="text-muted-foreground text-justify mt-4">
                  As IE code registration is one-time and requires no additional compliance, it is recommended for all exporters & importers to obtain IE code after incorporation.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Nature of the Firm obtaining an IEC</h2>
                <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                  {firmTypes.map((type, index) => (
                    <li key={index}>{type}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Pre-Requisites for Applying for Import Export License/ Registration</h2>
                <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                  {prerequisites.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                 <p className="text-muted-foreground text-sm mt-2">
                    <strong>Note:</strong> These details will be validated with the Income Tax Department site.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Documents required for IEC Code registration</h2>
                 <p className="text-muted-foreground text-justify mb-4">
                  The list of scanned documents required for IEC apply and obtaining an IEC certificate is listed as follows:
                </p>
                <ul className="space-y-4 pl-5 list-disc text-muted-foreground">
                  {requiredDocs.map((doc, index) => (
                    <li key={index}>
                        <strong>{doc.title}</strong>
                        <ul className="list-disc pl-5 mt-1">
                           {doc.items.map((item, subIndex)=>(
                                <li key={subIndex}>{item}</li>
                           ))}
                        </ul>
                    </li>
                  ))}
                </ul>
                 <p className="text-muted-foreground text-sm mt-4">
                    <strong>Note:</strong> In case the address proof is not in the Name of the applicant firm, a no objection certificate (NOC) by the firm premises owner in favor of the Firm, along with the address proof, is to be submitted as a single PDF document to obtain import export license.
                </p>
                 <p className="text-muted-foreground text-justify mt-4">
                  Once you have all the required documents, you can initiate the IEC code registration process through a valid IEC Code login credentials. Ensure to engage in the IEC Code check to track your application status.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Process for IEC Registration</h2>
                <ol className="space-y-3 list-decimal pl-5 text-muted-foreground">
                  {registrationSteps.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ol>
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
