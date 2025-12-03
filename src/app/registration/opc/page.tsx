
'use client';

import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { QuoteForm } from '@/components/quote-form';
import { Phone, Mail, CheckCircle2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const eligibilityCriteria = [
    "Only a natural person who is an Indian citizen can establish an OPC. Legal entities like companies or LLPs cannot create an OPC.",
    "The promoter must be a resident in India, meaning they should have lived in India for at least 182 days during the previous calendar year.",
    "The OPC must have a minimum authorized capital of Rs 1,00,000, the amount stated in the company's capital clause during the OPC Company registration.",
    "The promoter must appoint a nominee during the OPC's incorporation. This nominee would become a member of the OPC in the event of the promoter's death or incapacity.",
    "Businesses involved in financial activities such as banking, insurance, or investments are not eligible for OPC company registration.",
    "If the OPC's paid-up share capital exceeds 50 lakhs or its average annual turnover surpasses 2 Crores, it must be converted into a private limited company to comply with the regulatory requirements for larger companies.",
];

const registrationSteps = [
    {
        title: "Obtain Digital Signature Certificate (DSC)",
        description: "The sole promoter must acquire a Class 3 DSC to sign electronic documents on the Ministry of Corporate Affairs (MCA) portal. This can be obtained from government-recognized certifying authorities and typically takes 1–2 business days."
    },
    {
        title: "Apply for Director Identification Number (DIN)",
        description: "DIN is a unique identification number for directors. For new companies, DIN can be applied for within the SPICe+ form during the incorporation process."
    },
    {
        title: "Reserve Company Name via SPICe+ Part A",
        description: "Propose a unique name for your OPC using Part A of the SPICe+ form. Ensure the name complies with the Companies (Incorporation) Rules, 2014. Upon approval, the name is reserved for 20 days."
    },
    {
        title: "File SPICe+ Part B for Incorporation",
        description: "Complete Part B of the SPICe+ form, which integrates various services:",
        items: [
            "Company incorporation",
            "DIN allotment",
            "PAN and TAN application",
            "EPFO and ESIC registration",
            "Professional Tax registration (for applicable states)",
            "Opening of company bank account",
            "GSTIN allotment (optional)",
        ],
        extra: "This consolidated approach simplifies the registration process."
    },
    {
        title: "Draft e-MoA (INC-33) and e-AoA (INC-34)",
        description: "Prepare the electronic Memorandum of Association (e-MoA) and Articles of Association (e-AoA), which define the company's constitution and internal rules. These documents must be digitally signed by the sole promoter."
    },
    {
        title: "Submit Form INC-3 for Nominee Consent",
        description: "Appoint a nominee who will take over the OPC in case of the promoter's death or incapacity. The nominee must provide consent using Form INC-3, which should be filed along with the incorporation documents."
    },
    {
        title: "Obtain Certificate of Incorporation (COI)",
        description: "Upon successful verification, the Registrar of Companies (ROC) issues the COI, which includes the company's Corporate Identification Number (CIN), PAN, and TAN. These documents are sent via email to the registered address."
    }
];

const requiredDocsPromoter = [
    "PAN card",
    "Aadhaar card",
    "Passport-sized photograph",
    "Proof of identity (e.g., Voter ID, Passport, Driving License)",
    "Proof of address (e.g., utility bill not older than 2 months)",
];

const requiredDocsOffice = [
    "Proof of registered office address (e.g., utility bill)",
    "Rent agreement (if applicable)",
    "No Objection Certificate (NOC) from the property owner",
];

const recentAmendments = [
    "Non-Resident Indians (NRIs) are now permitted to incorporate OPCs in India.",
    "The residency period for an Indian citizen to incorporate an OPC has been reduced from 182 days to 120 days.",
    "OPCs can now convert into any other type of company (except Section 8 Company) at any time, removing the earlier mandatory two-year waiting period.",
    "The previous restrictions on paid-up capital (₹50 lakhs) and annual turnover (₹2 crores) for OPCs have been removed, allowing for greater scalability.",
];

const whyChooseUs = [
    "Expert Guidance: Our experienced professionals ensure compliance with all legal requirements.",
    "End-to-End Support: From DSC acquisition to post-incorporation compliance, we handle it all.",
    "Transparent Pricing: No hidden charges; clear breakdown of all costs involved.",
    "Timely Delivery: We prioritize prompt processing to get your OPC up and running swiftly.",
];

export default function OpcRegistrationPage() {
  return (
    <main>
      <div className="py-6 bg-secondary">
        <div className="container mx-auto px-4">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Registration', href: '/registration' },
              { label: 'One Person Company' },
            ]}
          />
        </div>
      </div>

      <section id="service-details" className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <h1 className="text-3xl md:text-4xl font-bold font-headline mb-4">
                One-Person Company (OPC) Registration
              </h1>

              <div>
                <p className="text-muted-foreground text-justify">
                  A One Person Company (OPC) is a unique business structure in India that allows a single individual to operate a corporate entity with limited liability and fewer compliance requirements. Introduced under the Companies Act, 2013, OPCs are ideal for solo entrepreneurs, consultants, and small business owners seeking the benefits of a private limited company without the complexities of multiple shareholders.
                </p>
                 <p className="text-muted-foreground text-justify mt-4">
                  At CACSFinacc, we specialize in simplifying the OPC registration process, ensuring that entrepreneurs can smoothly navigate the complexities of legal formalities with reasonable One person company registration fees. Our experienced team is dedicated to assisting you at every step to register one person company, from document preparation to filing, we offer expert guidance to help you make informed decisions regarding your One Person Company Registration.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Eligibility Criteria to Register One Person Company</h2>
                 <p className="text-muted-foreground text-justify mb-4">
                  Before you go ahead and engage in single person company registration process, it's crucial to understand the specific eligibility criteria and limitations that govern its formation. The Companies Act sets out clear requirements that must be met to ensure that the individual promoting the 1-person company is eligible to do so.
                </p>
                <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                  {eligibilityCriteria.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Step-by-Step Process for OPC Registration</h2>
                <ol className="space-y-4 list-decimal pl-5">
                    {registrationSteps.map((step, index) => (
                        <li key={index}>
                            <p className="font-semibold">{step.title}</p>
                            <p className="text-muted-foreground">{step.description}</p>
                            {step.items && (
                                <ul className="list-disc pl-5 text-muted-foreground mt-2">
                                    {step.items.map((item, subIndex) => (
                                        <li key={subIndex}>{item}</li>
                                    ))}
                                </ul>
                            )}
                             {step.extra && <p className="text-muted-foreground mt-2">{step.extra}</p>}
                        </li>
                    ))}
                </ol>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Documents Required for OPC Registration</h2>
                <div className="space-y-4">
                    <div>
                        <h3 className="font-semibold">For the Sole Promoter and Nominee:</h3>
                        <ul className="space-y-2 pl-5 list-disc text-muted-foreground">
                            {requiredDocsPromoter.map((doc, index) => (
                                <li key={index}>{doc}</li>
                            ))}
                        </ul>
                    </div>
                     <div>
                        <h3 className="font-semibold">For Registered Office:</h3>
                        <ul className="space-y-2 pl-5 list-disc text-muted-foreground">
                            {requiredDocsOffice.map((doc, index) => (
                                <li key={index}>{doc}</li>
                            ))}
                        </ul>
                    </div>
                </div>
              </div>

               <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Government Fees & Timeline</h2>
                <ul className="space-y-2 pl-5 list-disc text-muted-foreground">
                    <li><strong>Government Fees:</strong> No minimum capital requirement; fees vary based on authorized capital and state-specific stamp duty.</li>
                    <li><strong>Timeline:</strong> The entire registration process typically takes 7–10 working days, subject to document verification and approval.</li>
                </ul>
              </div>

               <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Recent Amendments Impacting OPCs (Effective April 1, 2021)</h2>
                <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                  {recentAmendments.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
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

    