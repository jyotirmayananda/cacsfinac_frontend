
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

const gstReturns = [
    { name: "GSTR-1", description: "Filed for disclosing details of outward supplies, essentially the sales." },
    { name: "GSTR-3B", description: "A summarised return that outlines both sales and purchases, inclusive of tax payments." },
    { name: "GSTR-4", description: "Applicable to those under the Composition Scheme, summarizing turnover and corresponding tax." },
    { name: "GSTR-5", description: "For non-resident taxpayers conducting taxable transactions in India." },
    { name: "GSTR-5A", description: "For providers of online information and database access or retrieval services." },
    { name: "GSTR-6", description: "Used by Input Service Distributors for detailing input tax credit distribution." },
    { name: "GSTR-7", description: "For entities required to deduct TDS under GST." },
    { name: "GSTR-8", description: "To be filed by e-commerce operators reporting transactions on their platform." },
    { name: "GSTR-9", description: "An annual comprehensive return summarizing all periodical filings over the fiscal year." },
    { name: "GSTR-10", description: "The final return upon cancellation or surrender of GST registration." },
    { name: "GSTR-11", description: "For those with a Unique Identity Number, claiming refunds on their purchases." },
    { name: "CMP-08", description: "A quarterly statement for Composition Scheme taxpayers detailing tax liability." },
    { name: "ITC-04", description: "For manufacturers to declare details about goods dispatched to and received from a job worker." },
];

const dueDates = [
    { return: "GSTR-1", taxpayer: "Regular Taxpayer", dueDate: "Monthly: 11th of the following month\nQuarterly: 13th of the month following the quarter" },
    { return: "GSTR-2A (Auto-generated)", taxpayer: "All Taxpayers", dueDate: "Auto-generated, utilized for reconciliation purposes" },
    { return: "GSTR-3B", taxpayer: "Regular Taxpayer", dueDate: "Monthly: 20th of the following month" },
    { return: "GSTR-4", taxpayer: "Composition Scheme Dealer", dueDate: "Annually: 30th of April following the end of the financial year" },
    { return: "GSTR-5", taxpayer: "Non-Resident Foreign Taxpayer", dueDate: "20th of the following month" },
    { return: "GSTR-6", taxpayer: "Input Service Distributor", dueDate: "13th of the following month" },
    { return: "GSTR-7", taxpayer: "Tax Deducted at Source (TDS)", dueDate: "10th of the following month" },
    { return: "GSTR-8", taxpayer: "E-commerce Operator", dueDate: "10th of the following month" },
    { return: "GSTR-9", taxpayer: "Regular Taxpayer (Annual)", dueDate: "31st December of the following financial year" },
    { return: "GSTR-9C", taxpayer: "Regular Taxpayer (Annual)", dueDate: "Filed along with GSTR-9, by 31st December of the following financial year" },
];

const penaltyInfo = [
    "Filing Returns is Required: Every registered taxpayer has to file GST returns regularly, even if there's no business activity.",
    "Delays Lead to More Delays: If you miss a filing deadline, you can't file for the next period until you've filed for the previous one. This can lead to a pile-up of late returns.",
    "Penalties for Late Filing: If you file GSTR-1 late, for example, you'll get a penalty that shows up when you file GSTR-3B. You are required to pay GST filing charges for delayed filing.",
    "Interest on Late Tax Payments: If you owe taxes and pay late, you'll be charged 18% interest per year on the amount you owe, starting from the day after the due date until you pay.",
    "Late GST return filing fees: The law sets the late GST return filing fees at Rs. 100 per day for each CGST and SGST, with a maximum of Rs. 5,000.",
    "Annual Return Late Fees: For yearly returns like GSTR-9 and GSTR-9C, the late fee is capped at 0.25% of your turnover in your state or UT unless the government provides relief or changes the fees.",
];

const gstUpdates = [
    "Mandatory Multi-Factor Authentication (MFA): To enhance security, the GST portal now requires multi-factor authentication for all users, irrespective of turnover. This measure aims to safeguard sensitive financial data from unauthorized access.",
    "E-Way Bill (EWB) Restrictions: E-Way Bills can only be generated for documents (invoices or delivery challans) dated within the preceding 180 days. Additionally, extensions are capped at 360 days from the original generation date. These changes aim to curb backdating practices and ensure the legitimate movement of goods.",
    "Simplified Refund Process: The GST refund process has been revamped to expedite approvals, featuring auto-population of data, reduced documentation requirements, and faster credit of refunds to bank accounts, benefiting cash flow management for businesses.",
    "Enhanced Input Tax Credit (ITC) Reconciliation: The updated GST portal offers improved reconciliation of input tax credit claims. Mismatches between a taxpayer’s GSTR-2B and the supplier’s GSTR-1 filings are flagged instantly, reducing disputes and ensuring accurate credit claims.",
    "Penalty Relief Scheme: To encourage compliance, the government has introduced a penalty waiver scheme in 2025. Taxpayers with overdue returns can clear their backlogs by paying reduced late fees within a designated window, helping businesses get back on track without significant financial burdens.",
    "Revised Time Limit for E-Invoice Reporting: Businesses with an annual aggregate turnover (AATO) of ₹10 crores or more must report their e-invoices within 30 days from the invoice date. Previously, this requirement applied only to businesses with an AATO of ₹100 crores and above. The Invoice Registration Portal (IRP) will reject invoices older than 30 days, making timely reporting crucial for compliance.",
    "Updated HSN Code Reporting in GSTR-1/1A: Starting April 2025, Table 12 in GSTR-1/1A is split into B2B and B2C sections for HSN-wise summary reporting. Manual HSN code entry is discontinued; taxpayers must select codes from a predefined dropdown list. The “Description as per HSN Code” field auto-fills based on the selected code.",
    "Mandatory Input Service Distributor (ISD) Registration: From April 2025, businesses with multiple GST registrations under one PAN must use the ISD mechanism to distribute Input Tax Credit (ITC). Cross-charge methods are no longer permitted. ISD invoices must be issued, and monthly GSTR-6 filings are mandatory.",
    "Revised Compliance for Hospitality Sector: Hotels charging more than ₹7,500/day must levy an 18% GST on meals served in their restaurants (up from 5%), with full ITC eligibility. The “Declared Tariff” concept has been abolished; taxes will now apply to actual transaction value instead of pre-declared rates.",
    "Uniform GST Rate for Used Cars: A flat 18% GST applies to margin values (selling price minus purchase price) for all categories of used cars. No tax is levied if the margin is negative.",
];


export default function GstReturnsPage() {
  return (
    <main>
       <div className="py-6 bg-secondary">
        <div className="container mx-auto px-4">
            <Breadcrumbs
            items={[
                { label: 'Home', href: '/' },
                { label: 'Tax Filing', href: '/tax-filing' },
                { label: 'GST Returns' },
            ]}
            />
        </div>
      </div>

      <section id="service-details" className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
                <h1 className="text-3xl md:text-4xl font-bold font-headline mb-4">
                    GST Return Filing
                </h1>

                <div>
                    <p className="text-muted-foreground text-justify">
                        A GST Return is a detailed statement that captures all the financial transactions of a person registered under GST, reflecting revenues and expenditures. GST filing online is a mandatory submission for every holder of GSTIN to the tax authorities, allowing them to determine the net tax liability with precision.
                    </p>
                    <p className="text-muted-foreground text-justify mt-4">
                        The GST return filing online encompasses several critical elements:
                    </p>
                    <ul className="space-y-3 pl-5 list-disc text-muted-foreground mt-4">
                        <li><strong>Purchases:</strong> It records in detail the purchases the taxpayer has made.</li>
                        <li><strong>Sales:</strong> It provides a comprehensive log of the taxpayer's sales activities.</li>
                        <li><strong>Output GST (On Sales):</strong> It notes the GST charged on the taxpayer's sales.</li>
                        <li><strong>Input Tax Credit (GST Paid on Purchases):</strong> It lists the GST paid on purchases, which is eligible to be deducted from the GST owed on sales.</li>
                    </ul>
                    <p className="text-muted-foreground text-justify mt-4">
                        At CACSFinacc Services, we offer expert GST return filing services, ensuring your business remains compliant with the latest regulations.
                    </p>
                </div>
                
                <div>
                    <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Who Should File GST Returns?</h2>
                    <p className="text-muted-foreground text-justify">
                        GST returns must be filed by any business or individual registered under the GST regime. This obligation applies to entities whose annual aggregate turnover surpasses the specified threshold, which is set by the tax authorities and may differ for various classifications of taxpayers, such as standard taxpayers and those opting for the composition scheme. All those applicable entities must file GST returns before the due date to avoid late GST filing charges.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-bold font-headline mb-4 text-primary">How Many Returns are there under GST?</h2>
                    <p className="text-muted-foreground text-justify mb-4">
                        Within the Goods and Services Tax (GST) system, 13 returns cater to different facets of a taxpayer's financial dealings. It's important to recognize that not all taxpayers must file every type of return; the specific returns that need to be filed depend on the taxpayer's category and the particulars of their GST registration.
                    </p>
                    <p className="text-muted-foreground text-justify mb-4">
                        Below is a snapshot of the 13 GST returns:
                    </p>
                    <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                        {gstReturns.map((item, index) => (
                            <li key={index}><strong>{item.name}:</strong> {item.description}</li>
                        ))}
                    </ul>
                     <p className="text-muted-foreground text-justify mt-4">
                        Additionally, there are return-related statements for input tax credits:
                    </p>
                     <ul className="space-y-3 pl-5 list-disc text-muted-foreground mt-4">
                        <li><strong>GSTR-2A (dynamic):</strong> Offers a real-time perspective of inward supplies as suppliers report.</li>
                        <li><strong>GSTR-2B (static):</strong> Provides a fixed snapshot of inward supplies based on the suppliers' filings.</li>
                    </ul>
                    <p className="text-muted-foreground text-justify mt-4">
                        For small taxpayers enrolled in the Quarterly Return Monthly Payment (QRMP) scheme, the Invoice Furnishing Facility (IFF) permits the declaration of B2B sales during the first two months of a quarter. Nonetheless, these taxpayers are obligated to remit taxes monthly using Form PMT-06.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Due dates for various types of GST returns</h2>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>GST Return</TableHead>
                                <TableHead>Type of Taxpayer</TableHead>
                                <TableHead>Due Date</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {dueDates.map((item, index) => (
                                <TableRow key={index}>
                                    <TableCell className="font-medium">{item.return}</TableCell>
                                    <TableCell>{item.taxpayer}</TableCell>
                                    <TableCell className="whitespace-pre-line">{item.dueDate}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>

                <div>
                    <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Penalty for Late Filing GST Returns</h2>
                    <p className="text-muted-foreground text-justify mb-4">
                        If you submit GST returns late, you could face penalties and additional GST filing charges. Businesses should submit on time to avoid these costs. Here's what you need to know about late GST returns:
                    </p>
                    <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                        {penaltyInfo.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Key GST Updates Effective April 1, 2025</h2>
                    <ol className="space-y-3 list-decimal pl-5 text-muted-foreground">
                        {gstUpdates.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ol>
                </div>

                <div>
                    <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Why Choose CACSFinacc Services?</h2>
                    <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                        <li><strong>Expertise:</strong> Our team stays updated with the latest GST regulations to provide accurate and timely services.</li>
                        <li><strong>Customized Solutions:</strong> We tailor our services to meet your specific business needs.</li>
                        <li><strong>Compliance Assurance:</strong> We ensure your business adheres to all GST compliance requirements, minimizing risks of penalties.</li>
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
