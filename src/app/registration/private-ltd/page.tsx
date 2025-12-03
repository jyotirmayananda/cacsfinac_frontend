
'use client';

import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { QuoteForm } from '@/components/quote-form';
import { Phone, Mail } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const keyCharacteristics = [
    {
        title: "Limited Liability Protection",
        description: "Shareholders of a private limited company are liable only to the extent of their shareholding. Their assets remain safeguarded, even in cases of financial setbacks incurred by the company."
    },
    {
        title: "Separate Legal Entity",
        description: "A private company possesses its own distinct legal identity. It can own property, engage in contracts, and initiate or defend legal actions under its unique name."
    },
    {
        title: "Minimum Number of Shareholders",
        description: "A private company must have a minimum of two shareholders and cannot exceed 200 shareholders."
    },
    {
        title: "Minimum Number of Directors",
        description: "A private limited company necessitates a minimum of two directors. At least one of these directors must be an Indian citizen."
    },
    {
        title: "Minimum Share Capital",
        description: "The company must maintain a minimum paid-up capital of Rs. 1 lakh or a higher amount as specified."
    },
    {
        title: "Name of the Firm",
        description: "The private limited company's name must conclude with the words 'Private Limited'."
    },
    {
        title: "Restrictions on Share Transfer",
        description: "The right to transfer shares within a private limited company is restricted. Shares can only be transferred with the approval of the Board of Directors or following the company's Articles of Association."
    },
    {
        title: "Prohibition on Public Invitation",
        description: "Private limited companies are prohibited from inviting the public to subscribe to their shares or debentures."
    },
    {
        title: "Compliance Requirements",
        description: "Private limited companies are obligated to adhere to various legal and regulatory obligations, including maintaining proper financial records, conducting annual general meetings, and filing annual returns with the ROC."
    }
];

const companyTypes = [
    {
        title: "Company Limited by Shares",
        description: "Shareholders' liability is limited to the nominal share amount mentioned in the Memorandum of Association."
    },
    {
        title: "Company Limited by Guarantee",
        description: "Member liability is limited to the amount of guarantee specified in the Memorandum of Association. This guarantee is invoked only during winding up."
    },
    {
        title: "Unlimited Companies",
        description: "Members of unlimited companies have unlimited personal liability for the company's debts and liabilities. However, they are still considered a separate legal entity, and individual members cannot be sued."
    }
];

const registrationSteps = [
    {
        title: "Obtain Digital Signature Certificate (DSC)",
        description: "All proposed directors and subscribers must acquire a Class 3 DSC to sign electronic documents on the MCA portal. This can be obtained from government-recognized certifying authorities and typically takes 1–2 business days."
    },
    {
        title: "Apply for Director Identification Number (DIN)",
        description: "DIN is a unique identification number for directors. For new companies, DINs for up to three directors can be applied for within the SPICe+ form. If there are more than three directors, additional DINs must be obtained separately using Form DIR-3 after incorporation."
    },
    {
        title: "Reserve Company Name via SPICe+ Part A",
        description: "Propose up to two unique names for your company using Part A of the SPICe+ form. Ensure the names comply with the Companies (Incorporation) Rules, 2014. Upon approval, the name is reserved for 20 days."
    },
    {
        title: "File SPICe+ Part B for Incorporation",
        description: "Complete Part B of the SPICe+ form, which integrates various services:",
        items: [
            "Company incorporation",
            "DIN allotment",
            "PAN and TAN application",
            "EPFO and ESIC registration",
            "Professional Tax registration (for Maharashtra)",
            "Opening of company bank account",
            "GSTIN allotment (optional)",
        ],
        extra: "This consolidated approach simplifies the registration process."
    },
    {
        title: "Draft e-MoA (INC-33) and e-AoA (INC-34)",
        description: "Prepare the electronic Memorandum of Association (e-MoA) and Articles of Association (e-AoA), which define the company's constitution and internal rules. These documents must be digitally signed by all subscribers."
    },
    {
        title: "Submit Form AGILE-PRO (INC-35)",
        description: "This form facilitates the application for:",
        items: [
            "GSTIN (if applicable)",
            "EPFO registration",
            "ESIC registration",
            "Professional Tax registration (for Maharashtra)",
            "Opening of a bank account",
        ],
        extra: "AGILE-PRO is submitted alongside the SPICe+ form."
    },
    {
        title: "Obtain Certificate of Incorporation (COI)",
        description: "Upon successful verification, the Registrar of Companies (ROC) issues the COI, which includes the company's Corporate Identification Number (CIN), PAN, and TAN. These documents are sent via email to the registered address."
    }
];

const requiredDocsIndian = [
    "PAN card",
    "Aadhaar card",
    "Passport-sized photograph",
    "Proof of address (e.g., utility bill not older than 2 months)",
    "Proof of registered office address (e.g., rental agreement, NOC from owner)",
];

const requiredDocsForeign = [
    "Passport",
    "Proof of address (e.g., bank statement, utility bill)",
    "Photograph",
    "All documents must be notarized and apostilled",
];

const whyChooseUs = [
    "Expert Guidance: Our experienced professionals ensure compliance with all legal requirements.",
    "End-to-End Support: From DSC acquisition to post-incorporation compliance, we handle it all.",
    "Transparent Pricing: No hidden charges; clear breakdown of all costs involved.",
    "Timely Delivery: We prioritize prompt processing to get your company up and running swiftly.",
];

export default function PrivateLimitedPage() {
  return (
    <main>
      <div className="py-6 bg-secondary">
        <div className="container mx-auto px-4">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Registration', href: '/registration' },
              { label: 'Private Limited' },
            ]}
          />
        </div>
      </div>

      <section id="service-details" className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <h1 className="text-3xl md:text-4xl font-bold font-headline mb-4">
                Private Limited Company Registration in India
              </h1>

              <div>
                <p className="text-muted-foreground text-justify">
                  Establishing a Private Limited Company (Pvt Ltd) in India offers
                  entrepreneurs a structured business model with benefits like
                  limited liability, separate legal identity, and ease of
                  fundraising. The Ministry of Corporate Affairs (MCA) has
                  streamlined the incorporation process, making it more efficient
                  and entirely online.
                </p>
                <p className="text-muted-foreground text-justify mt-4">
                  At CACSFinacc, we offer a cost-effective service to register new
                  company, registration of startup in India and facilitate
                  seamless private limited company registration in India. We
                  handle all legal formalities for online PVT LTD company
                  registration in India, ensuring strict compliance with the
                  Ministry of Corporate Affairs (MCA) regulations.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">What is a Private Limited Company?</h2>
                 <p className="text-muted-foreground text-justify mb-4">
                  In India, a private limited company is a privately held entity
                  with limited liability, and it ranks among the nation's most
                  favored business structures. This popularity is primarily
                  attributed to its numerous advantages, including limited
                  liability protection, ease of formation and maintenance, and its
                  status as a distinct legal entity. This encourages a prospective
                  businessman to engage in the incorporation of private limited
                  company. A private limited company enjoys legal separation from
                  its owners and necessitates a minimum of two members and two
                  directors for its operation. Here are the key characteristics of
                  a private limited company in India, which justify the PVT LTD
                  company registration:
                </p>
                <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                    {keyCharacteristics.map((item, index) => (
                        <li key={index}><strong>{item.title}:</strong> {item.description}</li>
                    ))}
                </ul>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Types of Private Limited Companies</h2>
                 <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                    {companyTypes.map((item, index) => (
                        <li key={index}><strong>{item.title}:</strong> {item.description}</li>
                    ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Step-by-Step Process for Private Limited Company Registration</h2>
                <ol className="space-y-4 list-decimal pl-5">
                    {registrationSteps.map((step, index) => (
                        <li key={index}>
                            <p className="font-semibold">{step.title}</p>
                            <p className="text-muted-foreground text-justify">{step.description}</p>
                            {step.items && (
                                <ul className="list-disc pl-5 text-muted-foreground mt-2 space-y-1">
                                    {step.items.map((item, subIndex) => (
                                        <li key={subIndex}>{item}</li>
                                    ))}
                                </ul>
                            )}
                            {step.extra && <p className="text-muted-foreground text-justify mt-2">{step.extra}</p>}
                        </li>
                    ))}
                </ol>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Documents Required for Registration</h2>
                <div className="space-y-4">
                    <div>
                        <h3 className="font-semibold">For Indian Nationals:</h3>
                        <ul className="space-y-2 pl-5 list-disc text-muted-foreground">
                            {requiredDocsIndian.map((doc, index) => (
                                <li key={index}>{doc}</li>
                            ))}
                        </ul>
                    </div>
                     <div>
                        <h3 className="font-semibold">For Foreign Nationals:</h3>
                        <ul className="space-y-2 pl-5 list-disc text-muted-foreground">
                            {requiredDocsForeign.map((doc, index) => (
                                <li key={index}>{doc}</li>
                            ))}
                        </ul>
                    </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Why Choose Our CACSFinacc Services?</h2>
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
