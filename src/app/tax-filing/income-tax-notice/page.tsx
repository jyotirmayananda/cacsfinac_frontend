
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

const reasonsForNotice = [
    { title: "Discrepancies in Tax Returns [Section 139(9) / 143(1)(a)]", description: "A mismatch between declared income, claimed deductions, and the data available with the Income Tax Department can lead to a notice requesting clarification." },
    { title: "Non-Filing of Tax Returns [Section 142(1)]", description: "Failure to file your income tax return by the due date may prompt the department to send a reminder notice." },
    { title: "High-Value Transactions [Section 148A]", description: "Engaging in high-value transactions that don't align with your reported income might result in a notice seeking an explanation of these transactions." },
    { title: "TDS/TCS Mismatch [Compliance Notice]", description: "Discrepancies between the tax deducted at source (TDS) or tax collected at source (TCS) as per your Form 26AS and the income declared in your tax return can trigger a notice." },
    { title: "Investments/Deposits in Your Name", description: "Significant investments or large deposits that are inconsistent with your reported income may lead the department to inquire about the source of funds." },
    { title: "Property Transactions", description: "Property transactions, especially if the declared value is lower than the guideline value determined by the state, can trigger a notice." },
    { title: "Scrutiny of Returns [Section 143(2), 147]", description: "Random selection of returns for scrutiny ensures compliance. If your return is chosen, you'll receive a notice requiring detailed documentation and explanations." },
    { title: "Demand for Tax", description: "If the department calculates unpaid taxes based on your return or adjustments, they'll issue a notice demanding the due tax." },
    { title: "Refund Claims", description: "Claiming a refund in your tax return may lead to a verification notice before the refund is processed." },
    { title: "Foreign Assets or Income", description: "Holding foreign assets or income might prompt a notice if the department requires additional information or if there are reporting discrepancies." },
];

const noticeTypes = [
    { title: "Notice u/s 143(1): Intimation", items: ["Issued after return processing.", "Shows refund, tax demand, or adjustment.", "Must be acted upon if tax demand is raised."] },
    { title: "Notice u/s 139(9): Defective Return", items: ["Issued if ITR is filed incorrectly (e.g., balance sheet missing).", "Must be revised within 15 days."] },
    { title: "Notice u/s 142(1): Inquiry Before Assessment", items: ["Request for documents or accounts before scrutiny.", "Non-response may lead to best judgment assessment."] },
    { title: "Notice u/s 143(2): Scrutiny Assessment", items: ["Detailed investigation into income, expenses, exemptions claimed.", "Requires legal representation and document submission."] },
    { title: "Notice u/s 148/148A: Income Escaped Assessment", items: ["Sent when income is not disclosed or underreported.", "Comes with a show cause opportunity under 148A(b)."] },
    { title: "Section 245: Adjustment of Refund", items: ["Notice of refund adjustment against old tax dues."] },
];

const deadlines = [
    { section: "139(9)", time: "15 days from receipt" },
    { section: "142(1)", time: "15–30 days or as specified" },
    { section: "143(2)", time: "Within timeline on portal" },
    { section: "148A(b)", time: "7 days (can be extended)" },
    { section: "245", time: "30 days to respond for refund adjustment" },
];

const requiredDocs = [
    "PAN, Aadhaar, ITR Acknowledgment",
    "Form 26AS, AIS, TIS",
    "Financial statements or P&L",
    "Bank statements and investment proofs",
    "TDS certificates",
    "Income computation sheets",
    "Contracts, invoices, rental agreements",
    "Previous correspondence with ITD",
];

const responseSteps = [
    "Log in to the Income Tax e-Filing Portal.",
    "Navigate to e-Proceedings > e-Assessment/Response to IT Notice.",
    "Select the relevant notice under 'View Notices'.",
    "Download the notice and understand the requirement.",
    "Prepare your response, along with necessary documentation.",
    "Submit the response online and download the acknowledgment.",
];

const penalties = [
    { section: "Under Section 272A", penalty: "₹10,000 per default for non-compliance." },
    { section: "Under Section 234F", penalty: "Late filing fees up to ₹5,000." },
    { section: "Under Section 271(1)(c)", penalty: "50% to 200% of the tax sought to be evaded for misreporting or concealment of income." },
    { section: "Prosecution for Willful Default", penalty: "In extreme cases, imprisonment of 3 months to 7 years." },
];

const recentAmendments = [
    "All notices and responses are now processed electronically through the Income Tax e-Filing Portal.",
    "Scrutiny and verification are conducted digitally, reducing personal interface.",
    "Notices under Section 148 for income escaping assessment can be issued up to 6 years for significant cases of tax evasion.",
    "All communications are authenticated with Digital Signature Certificates (DSC) or e-verification via OTP.",
    "Failure to respond within the stipulated timeline can lead to penalties up to ₹10,000 per default under Section 272A.",
];

const ourServices = [
    "Expert Assessment: Our tax professionals analyze the notice and prepare a robust response.",
    "Timely Filing: We ensure all submissions are made within the prescribed deadlines.",
    "Document Verification: Complete verification of financials and documentation for accurate representation.",
    "Faceless Representation: Seamless handling of faceless assessments without any hassle.",
    "End-to-End Support: From initial notice analysis to final resolution, we handle it all.",
];


export default function IncomeTaxNoticePage() {
  return (
    <main>
      <div className="py-6 bg-secondary">
        <div className="container mx-auto px-4">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Tax Filing', href: '/tax-filing' },
              { label: 'Income Tax Notice' },
            ]}
          />
        </div>
      </div>

      <section id="service-details" className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <h1 className="text-3xl md:text-4xl font-bold font-headline mb-4">
                Income Tax Notices
              </h1>

              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">What is an Income Tax Notice?</h2>
                <p className="text-muted-foreground text-justify">
                  An Income Tax Notice is an official communication from the Income Tax Department, alerting taxpayers about potential discrepancies, non-compliance, or the necessity for additional information. It's crucial to understand that receiving a notice doesn’t automatically imply a tax liability; often, it's a part of routine verification or a request for information.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Reasons for Receiving an Income Tax Notice</h2>
                <p className="text-muted-foreground text-justify mb-4">
                  Several reasons can trigger an income tax notice. Here are some common scenarios:
                </p>
                <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                  {reasonsForNotice.map((item, index) => (
                    <li key={index}><strong>{item.title}:</strong> {item.description}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Types of Income Tax Notices</h2>
                <p className="text-muted-foreground text-justify mb-4">
                  Understanding the type of notice is crucial for an appropriate response. Here are some common types:
                </p>
                <ol className="space-y-4 list-decimal pl-5">
                    {noticeTypes.map((item, index) => (
                        <li key={index}>
                            <p className="font-semibold">{item.title}</p>
                            <ul className="list-disc pl-5 text-muted-foreground mt-2">
                                {item.items.map((subItem, subIndex) => <li key={subIndex}>{subItem}</li>)}
                            </ul>
                        </li>
                    ))}
                </ol>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Respond Within Deadline to Avoid Penalties</h2>
                 <p className="text-muted-foreground text-justify mb-4">
                  Timely response is critical to avoid penalties. Here are typical response times:
                </p>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Section</TableHead>
                      <TableHead>Response Time</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {deadlines.map((item, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{item.section}</TableCell>
                        <TableCell>{item.time}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              
               <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Required Documents for Responding to Tax Notices</h2>
                <p className="text-muted-foreground text-justify mb-4">
                  Gathering the necessary documents is essential for a comprehensive response. Typical documents include:
                </p>
                <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                  {requiredDocs.map((doc, index) => (
                    <li key={index}>{doc}</li>
                  ))}
                </ul>
              </div>
              
               <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">How to Respond to an Income Tax Notice?</h2>
                <p className="text-muted-foreground text-justify mb-4">
                  Follow these steps to respond effectively:
                </p>
                <ol className="space-y-3 list-decimal pl-5 text-muted-foreground">
                  {responseSteps.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ol>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Penalties for Non-Compliance</h2>
                 <p className="text-muted-foreground text-justify mb-4">
                  Non-compliance or delayed response to an Income Tax Notice can attract the following penalties:
                </p>
                <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                  {penalties.map((item, index) => (
                    <li key={index}><strong>{item.section}:</strong> {item.penalty}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Recent Amendments for AY 2025-26</h2>
                <p className="text-muted-foreground text-justify mb-4">
                  The Finance Act, 2024, has introduced significant changes:
                </p>
                <ol className="space-y-3 list-decimal pl-5 text-muted-foreground">
                  {recentAmendments.map((amendment, index) => (
                    <li key={index}>{amendment}</li>
                  ))}
                </ol>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">How Can CACSFinacc Services Help?</h2>
                 <p className="text-muted-foreground text-justify mb-4">
                  CACSFinacc Services offers comprehensive support to navigate income tax notices effectively:
                </p>
                <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                  {ourServices.map((service, index) => (
                    <li key={index}>{service}</li>
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
