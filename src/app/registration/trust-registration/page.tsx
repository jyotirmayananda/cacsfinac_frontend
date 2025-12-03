
'use client';

import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { QuoteForm } from '@/components/quote-form';
import { Phone, Mail } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const partiesInvolved = [
    { 
        title: "Trustor",
        description: "The trustor is the person who establishes the trust. They are typically the owner of the assets or property being placed in the trust."
    },
    {
        title: "Trustee",
        description: "The trustee is an individual or entity entrusted with the responsibility of managing and overseeing the trust. They hold and administer the trust property on behalf of the trustor and for the benefit of the beneficiary."
    },
    {
        title: "Beneficiary",
        description: "The beneficiary is the person for whom the trust is created. They are the intended recipient of the benefits, assets, or property held within the trust. The beneficiary can be a third party, known to both the trustor and trustee, and they are entitled to receive the benefits according to the terms and conditions of the trust."
    }
];

const trustTypes = [
    { title: "Public Trust" },
    { title: "Private Trust" },
    { title: "Public Cum-Private Trust" },
];

const registrationRequirements = [
    "A trust must be formed by at least two or more individuals.",
    "The trust must be established in accordance with the Indian Trusts Act of 1882.",
    "None of the parties involved should be disqualified under any prevailing law in India.",
    "The objectives of the trust must not contravene any existing laws in India.",
    "The trustee must conduct activities in a fair and just manner.",
    "The trust formation should not be contrary to public interest or any other applicable laws.",
    "The activities carried out by the trust must not cause harm to any individual.",
    "The trust activities should align with the objectives stated in the trust deed.",
    "The trust deed must be drafted appropriately, reflecting the genuine interests of the parties involved.",
    "If the trust has more than two purposes, both must be valid. If one is invalid, the trust cannot be formed.",
];

const trustDeedContents = [
    "Period or term for which the trust will remain in operation.",
    "The registered office address of the trust.",
    "The geographical area or region where the trust will carry out its activities.",
    "The goals and objectives that the trust aims to achieve.",
    "Information about the settlor and details of the assets or property being transferred to the trust.",
    "Information about the board of trustees, including their membership, qualifications, terms, and tenure.",
    "The roles, responsibilities, and powers of the trustees.",
    "Procedures for amending the trust deed and provisions for closure or termination of the trust.",
];

const requiredDocs = [
    "Trust Deed with the respective stamp value",
    "Two photographs of the parties involved in the trust",
    "PAN cards of the individuals associated with the trust",
    "Address proof of the individuals",
    "Identity proof of the individuals",
    "Objectives & Activity Plan (for 12A/80G)",
    "Audited Financials (for trusts with receipts > ₹1 crore)",
    "Authentication from the partners (if applicable)",
    "No Objection Certificate for using the premises (if applicable)",
    "Any form of a utility bill as proof of address",
    "Address proof of the trust registered office",
    "12A Registration and 80G Certificates from the respective income tax authorities to claim deductions (if applicable)",
];

const registrationProcedure = [
    "Draft Trust Deed: Include name, objectives, settlor(s), trustee(s), beneficiaries",
    "Execute & Stamp Deed: On e-stamp portal at appropriate state rate",
    "Apply to Registrar: Submit deed, ID & address proofs of trustees, and NOC (if any)",
    "Obtain Trust PAN & TAN: File Form 49A (PAN) and Form 49B (TAN) online",
    "Apply for 12A & 80G: Submit application to Income Tax Department with audit report",
    "(If needed) FCRA Registration: Apply/renew on Sinha portal for foreign funding",
];

const keyBenefits = [
    "Legal Validity & Asset Protection",
    "Income Tax Exemptions: Section 12A registration; 80G donor deductions",
    "Grant Eligibility: Access to CSR funds, government grants, and foreign contributions",
    "Credibility & Transparency: Mandatory annual filings (Form 10B, Form 9A for 80G) boost donor confidence",
    "Succession Planning: Private trusts secure family assets with clear beneficiary rules",
];

export default function TrustRegistrationPage() {
  return (
    <main>
       <div className="py-6 bg-secondary">
        <div className="container mx-auto px-4">
            <Breadcrumbs
            items={[
                { label: 'Home', href: '/' },
                { label: 'Registration', href: '/registration' },
                { label: 'Trust Registration' },
            ]}
            />
        </div>
      </div>

      <section id="service-details" className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
                <h1 className="text-3xl md:text-4xl font-bold font-headline mb-4">
                    Trust Registration in India
                </h1>

                <div>
                    <p className="text-muted-foreground text-justify">
                        Trusts are a business structure created with noble intentions to promote the development of sciences, literature, and other worthy causes. They serve purposes such as alleviating scarcity, providing education to those in need, and offering medical support. Trust registration is officially registering a trust under the Trusts Act of 1882. This legal step ensures that the trust is recognized and operates within the framework of the law. Trust registration online provides legal validity and establishes its existence as a separate entity.
                    </p>
                </div>
                
                <div>
                    <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Parties Involved in the Trust Registration Process</h2>
                     <p className="text-muted-foreground mb-4">The trust registration process involves the following parties:</p>
                    <ul className="space-y-4 pl-5 list-disc text-muted-foreground">
                        {partiesInvolved.map((party, index) => (
                            <li key={index}><strong>{party.title}:</strong> {party.description}</li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Types of Trusts</h2>
                    <p className="text-muted-foreground mb-4">Trusts can be classified into various categories based on the activities they undertake. You need to understand these types to navigate how to register a trust in India. Here are the different types of trusts:</p>
                    <ul className="space-y-3 pl-5 list-disc text-muted-foreground mb-4">
                        {trustTypes.map((type, index) => <li key={index}>{type.title}</li>)}
                    </ul>
                    <div className="space-y-4">
                        <h3 className="font-semibold">Private Limited Trusts:</h3>
                        <p className="text-muted-foreground text-justify">Private Limited Trusts are established to carry out activities for specific individuals, families, or close associates. These trusts can have beneficiaries closely related to the trust's founders. Private limited trusts are governed by The Trusts Act of 1882.</p>
                        <h3 className="font-semibold">Public Limited Trusts:</h3>
                        <p className="text-muted-foreground text-justify">Public limited trusts are typically created to benefit the general public. They are often established for charitable, educational, and religious purposes and are governed by specific statutes such as the Religious Endowments Act of 1863, the Charitable and Religious Trust Act of 1920, or the Bombay Public Trust Act of 1950. Charitable and religious trusts are the most common types of public trusts in India.</p>
                        <h3 className="font-semibold">Public Cum-Private Trust:</h3>
                        <p className="text-muted-foreground text-justify">This type of trust serves both public and private purposes. It can utilize its income for the benefit of the public and specific individuals or families. The beneficiaries of a public cum-private trust can be a combination of public and private individuals.</p>
                    </div>
                </div>

                <div>
                    <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Registration Requirements for the Trust</h2>
                     <p className="text-muted-foreground mb-4">To be eligible to obtain a certificate of trust registration, the following criteria must be met:</p>
                    <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                        {registrationRequirements.map((req, index) => <li key={index}>{req}</li>)}
                    </ul>
                </div>
                
                <div>
                    <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Contents of a Trust Deed</h2>
                     <p className="text-muted-foreground mb-4">A trust deed is a crucial document that outlines the key details and provisions of a trust. It encompasses the following clauses:</p>
                    <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                        {trustDeedContents.map((content, index) => <li key={index}>{content}</li>)}
                    </ul>
                    <p className="text-muted-foreground text-justify mt-4">The trust deed serves as a legally binding document that governs the operations and functioning of the trust, providing clarity and guidance to all parties involved.</p>
                </div>
                
                <div>
                    <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Documents Required for Trust Registration Online</h2>
                     <p className="text-muted-foreground mb-4">Ensure to have these documents before engaging on the procedure for registration of Trust:</p>
                    <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                        {requiredDocs.map((doc, index) => <li key={index}>{doc}</li>)}
                    </ul>
                </div>
                
                <div>
                    <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Procedure for Registration of Trust</h2>
                    <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                        {registrationProcedure.map((step, index) => <li key={index}>{step}</li>)}
                    </ul>
                </div>
                
                <div>
                    <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Key Benefits of Trust Registration</h2>
                    <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                        {keyBenefits.map((benefit, index) => <li key={index}>{benefit}</li>)}
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
