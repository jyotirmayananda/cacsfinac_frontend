
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

const keyCompliances = [
    {
        title: "Income Tax Filing (ITR-5)",
        items: [
            "Partnership firms must file ITR-5 every year, whether they have income or not.",
            "Mandatory e-filing if: Turnover exceeds ₹5 crore (with digital compliance) or Tax audit is applicable."
        ]
    },
    {
        title: "Tax Audit (Section 44AB)",
        items: [
            "Compulsory if: Business turnover > ₹1 crore, Profession receipts > ₹50 lakhs, or Turnover > ₹10 crore with <5% cash transactions (as per Rule 6G).",
            "Form 3CA-3CD or 3CB-3CD to be filed by a Chartered Accountant."
        ]
    },
    {
        title: "Presumptive Taxation (44AD/44ADA)",
        items: [
            "Eligible for small firms with turnover ≤ ₹2 crore (business) or ₹50 lakh (profession).",
            "Declare profit @ 8% or 6% (digital) or 50% (profession).",
            "File ITR-4 (not ITR-5) if presumptive scheme is opted."
        ]
    },
    {
        title: "TDS Compliance",
        items: [
            "TAN registration is mandatory if the firm pays salary, rent, commission, contractor fees, or professional charges.",
            "File quarterly TDS returns (24Q/26Q) and issue Form 16/16A."
        ]
    },
    {
        title: "GST Compliance",
        items: [
            "GST registration required if: Turnover exceeds ₹20 lakh (services) or ₹40 lakh (goods), or Dealing in inter-state trade, e-commerce, or imports/exports.",
            "File monthly/quarterly GSTR-1, GSTR-3B, and GSTR-9 (if applicable)."
        ]
    },
    {
        title: "Partnership Deed Compliance",
        items: [
            "Must clearly mention: Partners’ details, Profit-sharing ratio, Capital contributions, Interest on capital/salary clauses.",
            "Should be stamped and registered (optional but recommended)."
        ]
    },
    {
        title: "Capital Account Maintenance",
        items: [
            "Each partner must have a capital account showing: Contribution, Salary, Drawings, Interest, Share of profits/losses."
        ]
    },
    {
        title: "Books of Accounts (Section 44AA)",
        items: [
            "Mandatory maintenance of books if: Business income > ₹2.5 lakh or Turnover > ₹10 lakh.",
            "Should include cash book, ledgers, journal, bills, invoices, etc."
        ]
    },
    {
        title: "Partner’s Remuneration Deduction (Section 40(b))",
        items: [
            "Allowed only if partnership deed authorizes it.",
            "Deduction limited to: ₹1.5 lakh or 90% of profit for first ₹3 lakh, and 60% of profit above ₹3 lakh."
        ]
    },
    {
        title: "Registration with State Authorities",
        items: [
            "Professional Tax",
            "Shop & Establishment registration",
            "MSME Udyam registration (optional but useful)"
        ]
    }
];

const registrationSteps = [
    {
        title: "Draft a Partnership Deed",
        items: ["Name and address of the firm and partners", "Nature of business", "Profit sharing ratio", "Capital contribution by partners", "Roles and responsibilities"]
    },
    {
        title: "Apply for PAN Card",
        items: ["Submit Form 49A online at the NSDL portal."]
    },
    {
        title: "Partnership Deed Notarization",
        items: ["Get the deed notarized on a non-judicial stamp paper."]
    },
    {
        title: "Firm Registration (Optional)",
        items: ["Register with the Registrar of Firms (RoF) in the respective state."]
    },
    {
        title: "Open a Bank Account",
        items: ["Submit the notarized deed, PAN, and registration certificate (if applicable) to open a current account."]
    }
];

const penalties = [
    { default: "Late ITR Filing", penalty: "₹5,000 under Section 234F" },
    { default: "Failure to Audit", penalty: "₹1,50,000 or 0.5% of turnover (Section 271B)" },
    { default: "Non-registration", penalty: "Loss of legal rights to enforce claims" },
    { default: "Non-maintenance of Books", penalty: "₹25,000 under Section 271A" },
];

const ourCoverage = [
    { title: "End-to-End Tax Filing", description: "ITR-5 preparation, tax computation, e-filing with DSC" },
    { title: "Tax Audit Assistance", description: "Preparation of Form 3CD, audit finalization, and tax planning" },
    { title: "TDS & GST Compliance", description: "Quarterly return filing, reconciliation, and advisory" },
    { title: "Partner Capital & Remuneration Structuring", description: "Optimize tax treatment under Section 40(b)" },
    { title: "Business Registrations", description: "GST, MSME, Professional Tax, Shop Act, etc." },
    { title: "Notices & Representation", description: "Handle income tax notices u/s 139(9), 143(2), 142(1), 148, etc." },
];

const whyChooseUs = [
    "Complete Registration Support – from deed drafting to registration",
    "Audit and Compliance Management – 100% IT and GST compliance",
    "Tax Planning and Filing – optimize tax liability with expert filing",
    "Legal Representation – expert handling of legal notices and disputes",
    "Digital Record-Keeping – secure and organized maintenance of records",
];


export default function PartnershipCompliancePage() {
  return (
    <main>
       <div className="py-6 bg-secondary">
        <div className="container mx-auto px-4">
            <Breadcrumbs
            items={[
                { label: 'Home', href: '/' },
                { label: 'Compliance', href: '/compliance' },
                { label: 'Partnership Firm Compliance' },
            ]}
            />
        </div>
      </div>

      <section id="service-details" className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
                <h1 className="text-3xl md:text-4xl font-bold font-headline mb-4">
                    Partnership Firm Compliance Services
                </h1>

                <div>
                    <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Partnership Firm Compliances</h2>
                    <p className="text-muted-foreground text-justify mb-4">
                        Partnership firms, a prevalent business structure in India, offer an attractive option for small and medium-sized businesses. They combine the ease of setup with the flexibility of shared ownership and management. Here, we’ll delve into what partnership firms are, how to register one, and the essential compliances to navigate.
                    </p>
                    <p className="text-muted-foreground text-justify mb-4">
                        A partnership firm is a business entity formed by an agreement between two or more individuals (partners) who come together to carry on a business and share the profits or losses. The key aspects of a partnership firm include:
                    </p>
                    <ul className="space-y-3 pl-5 list-disc text-muted-foreground text-justify">
                        <li><strong>Minimum and Maximum Partners:</strong> A minimum of two partners is required to form a partnership firm, and the maximum number of partners cannot exceed 20 (except for banking firms).</li>
                        <li><strong>Shared Ownership and Management:</strong> Partners share ownership of the firm’s assets and liabilities in accordance with the partnership deed, a legal document outlining the rights, responsibilities, profit-sharing ratio, and dispute resolution mechanisms between partners.</li>
                        <li><strong>Unlimited Liability:</strong> A crucial characteristic of partnership firms is unlimited liability. This means that partners are personally liable for the firm’s debts and obligations beyond the extent of their capital contribution.</li>
                    </ul>
                </div>
                
                <div>
                    <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Types of Partnership Firms</h2>
                    <ol className="space-y-2 pl-5 list-decimal text-muted-foreground">
                        <li><strong>Registered Partnership Firm:</strong> Registered with the Registrar of Firms, offering legal protection and the right to sue third parties.</li>
                        <li><strong>Unregistered Partnership Firm:</strong> Operates without formal registration, but faces limitations like the inability to enforce rights against partners or third parties.</li>
                    </ol>
                </div>

                <div>
                    <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Why Are Partnership Compliances Important?</h2>
                    <p className="text-muted-foreground text-justify mb-4">
                        A partnership firm, whether registered or unregistered, must comply with various legal, tax, and regulatory requirements under the Indian Partnership Act, 1932, and the Income Tax Act, 1961. These compliances ensure legal recognition, tax benefits, and avoidance of penalties.
                    </p>
                    <p className="text-muted-foreground text-justify">
                        Whether you're a startup, traditional family business, or growing enterprise, non-compliance can result in loss of deductions, scrutiny, and interest/penalties from authorities.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Key Compliances for Partnership Firms</h2>
                    <ol className="space-y-4 list-decimal pl-5">
                        {keyCompliances.map((compliance, index) => (
                            <li key={index}>
                                <p className="font-semibold">{compliance.title}</p>
                                <ul className='list-disc pl-5 text-muted-foreground'>
                                    {compliance.items.map((item, subIndex) => (
                                        <li key={subIndex}>{item}</li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ol>
                </div>
                
                <div>
                    <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Partnership Firm Taxation</h2>
                    <ul className="space-y-2 pl-5 list-disc text-muted-foreground">
                        <li><strong>Tax Rate:</strong> Partnership Firms are taxed at a flat rate of 30% on total income.</li>
                        <li><strong>Surcharge:</strong> 12% surcharge if total income exceeds ₹1 crore.</li>
                        <li><strong>Health & Education Cess:</strong> 4% on tax and surcharge.</li>
                        <li><strong>Remuneration to Partners:</strong> Allowed as a deduction under Section 40(b) up to the prescribed limits.</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-2xl font-bold font-headline mb-4 text-primary">How to Register a Partnership Firm?</h2>
                    <ol className="space-y-4 list-decimal pl-5">
                        {registrationSteps.map((step, index) => (
                            <li key={index}>
                                <p className="font-semibold">{step.title}</p>
                                <ul className='list-disc pl-5 text-muted-foreground'>
                                    {step.items.map((item, subIndex) => (
                                        <li key={subIndex}>{item}</li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ol>
                </div>

                <div>
                    <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Penalties for Non-Compliance</h2>
                     <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Nature of Default</TableHead>
                                <TableHead>Penalty</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {penalties.map((item, index) => (
                                <TableRow key={index}>
                                    <TableCell className="font-medium">{item.default}</TableCell>
                                    <TableCell>{item.penalty}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                     </Table>
                </div>

                <div>
                    <h2 className="text-2xl font-bold font-headline mb-4 text-primary">CACSFinacc's Compliance Coverage for Partnership Firms</h2>
                    <ol className="space-y-4 list-decimal pl-5">
                        {ourCoverage.map((item, index) => (
                            <li key={index}>
                                <p className="font-semibold">{item.title}</p>
                                <p className="text-muted-foreground">{item.description}</p>
                            </li>
                        ))}
                    </ol>
                </div>

                 <div>
                    <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Why Choose CACSFinacc Services?</h2>
                    <ul className="space-y-3 text-muted-foreground">
                        {whyChooseUs.map((item, index) => (
                             <li key={index} className="flex items-start gap-3">
                                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                                <span>{item}</span>
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

