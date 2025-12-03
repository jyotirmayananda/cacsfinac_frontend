
'use client';

import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { QuoteForm } from '@/components/quote-form';
import { Phone, Mail } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const whoNeedsToEFile = [
    { title: "Salaried Individuals", description: "If your total annual income exceeds the basic exemption limit, you are required to file IT returns online." },
    { title: "Self-Employed Professionals", description: "Freelancers, consultants, doctors, lawyers, designers, and other independent professionals with income above the exemption threshold must e-file. Business-related expenses can also be claimed as deductions." },
    { title: "Business Owners (including SMEs & MSMEs)", description: "All business entities—including sole proprietorships, partnerships, LLPs, and private limited companies—must file IT returns online annually, irrespective of profit or loss." },
    { title: "Directors and Partners", description: "Individuals who serve as directors in private limited companies or partners in LLPs are mandated to file ITRs reflecting their share of income and financial involvement in the entity." },
    { 
        title: "Dividend, Interest, and Capital Gains Earners", 
        description: "If you receive income from dividends, interest, or capital gains, it’s mandatory to report and pay applicable taxes through ITR.",
        items: ["Dividends (mutual funds, equities, etc.)", "Interest (from FDs, bonds, etc.)", "Capital gains (from stocks, crypto, F&O, mutual funds)"]
    },
    { 
        title: "NRIs and RNORs", 
        description: "",
        items: [
            "NRIs (Non-Resident Indians): with income arising in India exceeding the exemption limit must file IT returns online.",
            "RNORs (Resident Not Ordinarily Residents): with foreign income or assets may also be required to file based on disclosure obligations."
        ]
    },
    { title: "Foreign Asset or Income Holders", description: "Indian residents holding foreign assets (like overseas bank accounts, shares, or property) or earning foreign income are required to file ITR, even if their taxable income is below the exemption limit." },
    { 
        title: "High-Value Transaction Individuals", 
        description: "Even if your income is below the basic exemption limit, you must file ITR if you have:",
        items: [
            "Deposited Rs. 1 crore or more in a bank account",
            "Spent over Rs. 2 lakh on foreign travel",
            "Paid more than Rs. 1 lakh in electricity bills in a year"
        ]
    },
    { title: "Claiming Tax Refunds", description: "If you've paid excess tax (through TDS, advance tax, etc.), you must file an ITR to claim your tax refund." },
    { title: "Charitable and Religious Trusts", description: "Organisations that manage charity funds, religious institutions, or voluntary contributions must file ITRs annually to maintain financial transparency and tax compliance." },
];

const oldTaxSlabs = [
    { range: "Up to Rs. 2,50,000", rate: "Nil" },
    { range: "Rs. 2,50,001 to Rs. 5,00,000", rate: "5%" },
    { range: "Rs. 5,00,001 to Rs. 10,00,000", rate: "20%" },
    { range: "Above Rs. 10,00,000", rate: "30%" },
];

const newTaxSlabs = [
    { range: "Up to 4,00,000", rate: "NIL" },
    { range: "4,00,001 - 8,00,000", rate: "5%" },
    { range: "8,00,001 - 12,00,000", rate: "10%" },
    { range: "12,00,001 - 16,00,000", rate: "15%" },
    { range: "16,00,001 - 20,00,000", rate: "20%" },
    { range: "20,00,001 - 24,00,000", rate: "25%" },
    { range: "Above 24,00,000", rate: "30%" },
];

const highValueTransactions = [
    "Deposited Rs 1 crore or more in one or more current bank accounts.",
    "Deposited Rs 50 lakh or more in one or more savings bank accounts.",
    "Spent over Rs 2 lakh on foreign travel.",
    "Incurred electricity expenses exceeding Rs 1 lakh during the financial year.",
    "Had TDS (Tax Deducted at Source) or TCS (Tax Collected at Source) exceeding Rs 25,000 (or Rs 50,000 for senior citizens).",
];

const businessProfessionalIncome = [
    { title: "Businesses", description: "Mandatory if your total sales, turnover, or gross receipts exceed Rs 60 lakh during the financial year." },
    { title: "Professionals", description: "Mandatory if gross receipts exceed Rs 10 lakh during the financial year." },
];

const keyUpdates = [
    "Revised ITR Forms Released: The Income Tax Department has released all seven ITR forms for AY 2025–26, incorporating significant changes to accommodate recent tax reforms. Notably, ITR-1 and ITR-4 now allow reporting of long-term capital gains (LTCG) up to ₹1.25 lakh from listed equity shares and equity mutual funds, aligning with the updated exemption limit under Section 112A.",
    "Mandatory Aadhaar Linking: Filing ITRs now requires mandatory linking of Aadhaar numbers. Taxpayers must ensure their Aadhaar is linked with their PAN to successfully file returns.",
    "Enhanced Capital Gains Reporting: Taxpayers must now provide detailed information on capital gains, including scrip-wise details for listed shares and mutual funds. This aims to improve transparency and accuracy in tax reporting.",
    "Digital Form 16 for Salaried Individuals: Employers are now issuing Digital Form 16, an electronic version generated directly from the TRACES portal. This ensures accurate salary and TDS details, simplifying the tax filing process for salaried individuals.",
    "Increased Disclosure for Trusts and Institutions: The revised ITR-7 form mandates increased disclosure by political parties, charitable trusts, universities, and research institutions regarding foreign contributions, voluntary donations, accumulated income, and the utilization of funds. This move aims to enhance transparency and accountability in financial reporting.",
];

const dueDates = [
    "ITR Filing for Individuals and Entities Not Liable for Tax Audit: Due by July 31, 2025.",
    "ITR Filing for Taxpayers Under Tax Audit (excluding those involved in transfer pricing): Due by October 31, 2025.",
    "ITR Filing for Taxpayers Covered Under Transfer Pricing: Due by November 30, 2025.",
    "Income Tax Return filing last date for Revised/Belated Return of Income for FY 2024-25: December 31, 2025.",
];

const incomeDocs = [
    "Salary Slips: To verify your income from employment.",
    "Rent Receipts: If you are claiming House Rent Allowance (HRA).",
    "Form 16: Issued by your employer, detailing the tax deducted at source on your salary.",
    "Form-16A: For TDS on Income other than salary.",
    "Form-16B: For TDS on the sale of the property.",
    "Form-16C: For TDS on rent.",
    "Form 26AS: Your tax credit statement, which shows all taxes that have been deposited against your PAN.",
];

const deductionDocs = [
    "Interest Certificates: These are from banks and post offices for savings accounts and fixed deposits.",
    "Home Loan Details: If you're claiming deductions on home loan interest.",
    "Proof of Tax-Saving Instruments: Includes life insurance, health insurance, Public Provident Fund (PPF), National Savings Certificates (NSC), ELSS mutual funds, etc.",
    "Income from Capital Gains: Documents related to the sale of assets like stocks or property.",
    "Rental Income: Lease agreements and rent receipts if you have rental property.",
    "Foreign Income and Dividend Income Proofs: Documents verifying income from foreign sources and dividends.",
];

const whyChooseUs = [
    "Expertise: Our team stays updated with the latest tax regulations to provide accurate and timely services.",
    "Customized Solutions: We tailor our services to meet your specific financial needs.",
    "Compliance Assurance: We ensure your filings adhere to all compliance requirements, minimizing risks of penalties.",
    "Secure Handling: We prioritize the confidentiality and security of your financial data.",
];


export default function IncomeTaxReturnFilingPage() {
  return (
    <main>
       <div className="py-6 bg-secondary">
        <div className="container mx-auto px-4">
            <Breadcrumbs
            items={[
                { label: 'Home', href: '/' },
                { label: 'Tax Filing', href: '/tax-filing' },
                { label: 'Income Tax Return Filing' },
            ]}
            />
        </div>
      </div>

      <section id="service-details" className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
                <h1 className="text-3xl md:text-4xl font-bold font-headline mb-4">
                    Income Tax Return (ITR) Filing
                </h1>

                <div>
                    <h2 className="text-2xl font-bold font-headline mb-4 text-primary">What is an Income Tax Return (ITR)?</h2>
                    <p className="text-muted-foreground text-justify">
                        An Income Tax Return (ITR) is a form used by taxpayers to report their income details and tax payments to the Income Tax Department. There are seven different ITR forms available for ITR e-filing: ITR 1 through ITR 7. The appropriate form for a taxpayer depends on various factors, including their sources of income, the total amount earned, and the type of taxpayer they are (such as individuals, Hindu Undivided Families (HUFs), companies, etc.). Each taxpayer must accurately complete their income tax filing within the specified deadline to comply with the Income Tax Law.
                    </p>
                </div>
                
                <div>
                    <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Who Needs to e-File an ITR Income Tax Return?</h2>
                    <p className="text-muted-foreground text-justify mb-4">
                        Income tax filing is not just a legal obligation but also a financial responsibility. It applies to individuals and entities across various categories and income levels. Below is a clear overview of who must e-file their ITR income tax return in India:
                    </p>
                    <ol className="space-y-4 list-decimal pl-5">
                        {whoNeedsToEFile.map((item, index) => (
                            <li key={index}>
                                <p className="font-semibold">{item.title}</p>
                                {item.description && <p className="text-muted-foreground">{item.description}</p>}
                                {item.items && (
                                    <ul className="list-disc pl-5 text-muted-foreground mt-2 space-y-1">
                                        {item.items.map((subItem, subIndex) => (
                                            <li key={subIndex}>{subItem}</li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ol>
                </div>
                
                <div>
                    <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Eligibility for Income Tax e-filing in India</h2>
                    <p className="text-muted-foreground text-justify mb-4">
                        In India, the obligation to do ITR online filing arises under certain conditions. Primarily, if your gross total income exceeds the basic exemption limits, you're required to e-file your return - and the limits vary based on your age and the tax regime chosen.
                    </p>
                    <p className="text-muted-foreground text-justify">
                        A tax regime refers to the structure under which your income is taxed. As of the latest updates, taxpayers can opt for either the Old Tax Regime, which allows various deductions and exemptions, or the New Tax Regime, which offers reduced slab rates but restricts most deductions.
                    </p>
                </div>

                <div className="space-y-6">
                    <h3 className="text-xl font-bold font-headline">Old Tax Regime</h3>
                    <p className="text-muted-foreground text-justify">The following criteria apply to the old tax regime:</p>
                    <ul className="space-y-2 pl-5 list-disc text-muted-foreground">
                        <li>Individuals under 60 years: Rs 2.5 lakh</li>
                        <li>Individuals between 60 and 80 years: Rs 3.0 lakh</li>
                        <li>Individuals over 80 years: Rs 5.0 lakh</li>
                    </ul>
                    <p className="text-muted-foreground text-justify">In the table below, we have provided the income tax slab under the old tax regime for income tax filing:</p>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Income range</TableHead>
                                <TableHead>Income Tax Slab Rates</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {oldTaxSlabs.map((slab, index) => (
                                <TableRow key={index}>
                                    <TableCell className="font-medium">{slab.range}</TableCell>
                                    <TableCell>{slab.rate}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>

                <div className="space-y-6">
                    <h3 className="text-xl font-bold font-headline">New Tax Regime</h3>
                    <p className="text-muted-foreground text-justify">The Union Budget 2025 introduced significant changes to the income tax slabs under the New Tax Regime. Below, we have provided the updated income tax slabs for the New Tax Regime for income tax filing.</p>
                     <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Income Range (Rs.)</TableHead>
                                <TableHead>Tax Rate (%)</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {newTaxSlabs.map((slab, index) => (
                                <TableRow key={index}>
                                    <TableCell className="font-medium">{slab.range}</TableCell>
                                    <TableCell>{slab.rate}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>

                <div>
                    <p className="text-muted-foreground text-justify mb-4">However, there are other specific circumstances that require you to file ITR, even if your income is below these thresholds:</p>
                    <h4 className="font-semibold text-lg mb-2">High-value Transactions:</h4>
                    <p className="text-muted-foreground text-justify mb-4">You are required to do Income tax filing if you have:</p>
                    <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                        {highValueTransactions.map((item, index) => <li key={index}>{item}</li>)}
                    </ul>
                </div>
                
                <div>
                     <h4 className="font-semibold text-lg mb-2">Business and Professional Income:</h4>
                    <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                        {businessProfessionalIncome.map((item, index) => <li key={index}><strong>{item.title}:</strong> {item.description}</li>)}
                    </ul>
                </div>

                <div>
                    <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Key Updates for Assessment Year (AY) 2025–26</h2>
                    <ol className="space-y-3 list-decimal pl-5 text-muted-foreground">
                        {keyUpdates.map((item, index) => <li key={index}>{item}</li>)}
                    </ol>
                </div>
                
                <div>
                    <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Due Date for ITR e-Filing</h2>
                    <p className="text-muted-foreground text-justify mb-4">It's important for taxpayers to note that merely paying taxes does not fulfil all obligations; timely income tax e-filing in India is also mandatory to avoid penalties. Here's a summary of the key Income tax e-filing last dates or due dates for various categories of taxpayers for the Financial Year (FY) 2024-25:</p>
                    <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                        {dueDates.map((item, index) => <li key={index}>{item}</li>)}
                    </ul>
                </div>

                <div className="space-y-6">
                    <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Required Documents</h2>
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Income-Related Documents</h3>
                        <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                            {incomeDocs.map((doc, index) => <li key={index}>{doc}</li>)}
                        </ul>
                    </div>
                     <div>
                        <h3 className="font-semibold text-lg mb-2">Deductions and Exemptions-Related Documents</h3>
                        <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                            {deductionDocs.map((doc, index) => <li key={index}>{doc}</li>)}
                        </ul>
                    </div>
                </div>
                
                <div>
                    <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Why Choose CACSFinacc Services?</h2>
                    <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                        {whyChooseUs.map((item, index) => <li key={index}>{item}</li>)}
                    </ul>
                    <p className="text-muted-foreground text-justify mt-4">Stay ahead in tax compliance with CACSFinacc Services. Contact us today to streamline your ITR filing process.</p>
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
