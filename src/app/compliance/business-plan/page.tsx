
'use client';

import { Button } from '@/components/ui/button';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { QuoteForm } from '@/components/quote-form';
import { CheckCircle2, Phone, Mail } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const complianceAreas = [
  { area: "Business Model Mapping", details: "Match proposed activities with GST codes, NIC codes, licensing laws" },
  { area: "Entity Structuring", details: "Choose between Proprietorship, LLP, Pvt. Ltd., or OPC" },
  { area: "Startup India/DPIIT Eligibility", details: "Business innovation certification and tax holiday planning" },
  { area: "Income Tax Strategy", details: "Presumptive vs. normal taxation, depreciation planning" },
  { area: "ROC & MCA Mapping", details: "Alignment of authorized capital, shareholder funding, MOA activities" },
  { area: "GST Registration & Mapping", details: "HSN/SAC codes, reverse charge mechanism, e-invoicing thresholds" },
  { area: "FEMA/FDI Alignment", details: "If foreign investment or overseas expansion is involved" },
  { area: "Bankable Financial Forecasts", details: "Projections aligned with RBI, MCA & Income Tax compliance" },
  { area: "TDS/TCS & Payroll Readiness", details: "Applicable sections under 194, 194C, 192, PF, ESI, PT" },
  { area: "Industry-Specific Licenses", details: "FSSAI, IEC, MSME Udyam, Labour Registration, etc." },
];

const keyMilestones = [
  { stage: "Pre-Incorporation", compliances: "Business plan legal vetting, MCA name reservation, licensing matrix" },
  { stage: "Post-Incorporation", compliances: "PAN, TAN, GST, MSME, ESIC/PF, bank account setup, MCA filings" },
  { stage: "First 6 Months", compliances: "Monthly GST, TDS, accounting, payroll setup, Form 26Q/24Q" },
  { stage: "First Financial Year", compliances: "Audit, ITR filing, Form MGT-7, AOC-4 (if company), SFT/Form 61A if applicable" },
];

const whoNeedsIt = [
    "raise funds from VCs, angels, or banks",
    "Scale across India or go global",
    "Participate in government tenders or grants",
    "Onboard investors or strategic partners",
    "Get registered under DPIIT/Startup India"
];

const keyComponents = [
    {
        title: "Entity Structuring & Incorporation Compliance",
        items: [
            "Private Limited, LLP, OPC, or Partnership selection based on scalability, taxation, investor readiness",
            "PAN, TAN, GST, MSME, Shop Act registrations"
        ]
    },
    {
        title: "Financial & Tax Compliance",
        items: [
            "Forecasts aligned with Section 44AA (Books of Account) and Section 44AB (Audit)",
            "Capital structure and profit sharing models compliant with Income Tax Act and Companies Act",
            "Startup plans structured to leverage Section 80 IAC exemption and Angel Tax exemption"
        ]
    },
    {
        title: "Regulatory & ROC Filings",
        items: [
            "Regular filings like AOC 4, MGT 7, DPT 3, MSME 1, DIR 3 KYC",
            "Ensuring business models comply with MCA, SEBI (if listed), DPIIT, and RBI"
        ]
    },
    {
        title: "GST & Indirect Tax Mapping",
        items: [
            "Forecasting GST applicability on projected sales/services",
            "Determining registration requirements and reverse charge mechanisms",
            "Preparing for GSTR-1, GSTR-3B, and Annual Returns (GSTR-9)"
        ]
    },
    {
        title: "FEMA & FDI Compliance (If Foreign Investment Included)",
        items: [
            "FC-GPR/FC-TRS planning within business roadmap",
            "Mapping timelines for investor onboarding, valuation, and share allotment",
            "RBI filings and sectoral cap checks"
        ]
    },
    {
        title: "Labour, PF, and Payroll Compliance",
        items: [
            "Statutory payroll setup with PF, ESI, Gratuity, Bonus compliance",
            "TDS on salaries (Section 192), Form 24Q, Form 16 issuance"
        ]
    },
    {
        title: "Documentation for Due Diligence & Funding",
        items: [
            "Valuation reports, cap tables, cash flow analysis",
            "Legal contracts, NDAs, founders' agreement, ESOP policy",
            "CA/CFA-vetted financial projections for 3–5 years"
        ]
    }
];

const ourSuite = [
    { title: "Entity Structuring & Registration", description: "Choose and register the best-fit business structure (Pvt Ltd, LLP, OPC)" },
    { title: "Startup Business Plan Preparation", description: "3–5 year financials, market research, breakeven analysis, and funding roadmap" },
    { title: "ROC & MCA Compliance", description: "Annual returns, director KYC, statutory registers, and AGM/board meeting guidance" },
    { title: "Tax Forecasting & Registration", description: "PAN, TAN, GST, TDS, PF/ESI registrations with mapped tax outflows" },
    { title: "Investor & FDI Compliance", description: "FC-GPR/FDI reporting via RBI FIRMS, valuation support, and share capital planning" },
    { title: "HR & Payroll Setup", description: "Automated payroll, PF/ESI registration, payslip generation, and Form 24Q" },
    { title: "Compliance Calendar Setup", description: "Auto-reminders for TDS, GST, ROC filings, and advance tax dues" }
];

const howWeEnsure = [
    "Complete Compliance Mapping across GST, Income Tax, MCA & RBI",
    "Industry-Specific Advisory based on your business model",
    "Forecast Vetting: Legal-proof revenue and cost estimates",
    "Investor-Ready Plans: Align with RBI/FEMA/SEBI expectations",
    "Startup India & Tax Holiday Support: For eligible ventures",
    "Annual & Monthly Compliance Monitoring with timely alerts",
];

export default function BusinessPlanPage() {
  return (
    <main>
       <div className="py-6 bg-secondary">
        <div className="container mx-auto px-4">
            <Breadcrumbs
            items={[
                { label: 'Home', href: '/' },
                { label: 'Compliance', href: '/compliance' },
                { label: 'Business Plan' },
            ]}
            />
        </div>
      </div>

      <section id="service-details" className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
                <h1 className="text-3xl md:text-4xl font-bold font-headline mb-4">
                    Business Plan Compliance Services
                </h1>
                <p className="text-muted-foreground text-justify mb-4">
                    A business plan is more than just a document—it’s a strategic tool that outlines your company’s objectives, provides a roadmap for achieving them, and acts as a persuasive document for potential investors and stakeholders. Whether you're a startup seeking your first round of funding or an established business looking to expand, having a well-structured business plan is critical for success.
                </p>

                <h2 className="text-2xl font-bold font-headline mt-8 mb-4 text-primary">What is a Business Plan?</h2>
                <p className="text-muted-foreground text-justify mb-4">
                    A business plan is a formal document that defines your business objectives, strategies, market research, financial projections, and more. It serves as a guiding document for securing funding and setting internal goals and benchmarks. In simple terms, a business plan offers a complete overview of your business model, from market analysis to long-term vision.
                </p>
                <ul className="space-y-2 pl-5 list-disc text-muted-foreground mb-4">
                    <li>Where is the business now?</li>
                    <li>Where does the business want to go?</li>
                    <li>How will it get there?</li>
                </ul>
                <p className="text-muted-foreground text-justify mb-4">
                    For startups and established businesses alike, this document is invaluable for short-term and long-term decision making. It also helps keep the business on track, ensuring that the team remains aligned with the company’s objectives and growth strategy.
                </p>
                <ul className="space-y-2 pl-5 list-disc text-muted-foreground mb-4">
                    <li>Clarify your business goals</li>
                    <li>Secure funding from investors or financial institutions</li>
                    <li>Identify market opportunities and potential pitfalls</li>
                    <li>Serve as a framework for tracking progress</li>
                </ul>
                 <p className="text-muted-foreground text-justify mb-8">
                    Whether you're working on a startup business plan or need to update your plan for a growing business, a well crafted business plan is essential for success.
                </p>
                
                <div className="space-y-8">
                    <div>
                        <h2 className="text-2xl font-bold font-headline mb-4 text-primary">What Does Business Plan Compliance Cover?</h2>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Compliance Area</TableHead>
                                    <TableHead>Details Included</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {complianceAreas.map((item, index) => (
                                    <TableRow key={index}>
                                        <TableCell className="font-medium">{item.area}</TableCell>
                                        <TableCell>{item.details}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                         </Table>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Key Compliance Milestones for Early-Stage Businesses</h2>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Stage</TableHead>
                                    <TableHead>Key Compliances</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {keyMilestones.map((item, index) => (
                                    <TableRow key={index}>
                                        <TableCell className="font-medium">{item.stage}</TableCell>
                                        <TableCell>{item.compliances}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                         </Table>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Who Needs Business Plan Compliance?</h2>
                        <p className="font-semibold text-muted-foreground">Startups, MSMEs, and established businesses looking to:</p>
                        <ul className="space-y-3 pl-5 list-disc text-muted-foreground mb-4">
                            {whoNeedsIt.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                         <p className="text-muted-foreground text-justify">
                            Business plan compliance is essential for credibility, regulatory clearance, and long-term scalability.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Key Components of Business Plan Compliance</h2>
                        <ol className="space-y-4 list-decimal pl-5">
                            {keyComponents.map((component, index) => (
                                <li key={index}>
                                    <p className="font-semibold">{component.title}</p>
                                    <ul className='list-disc pl-5 text-muted-foreground'>
                                        {component.items.map((item, subIndex) => (
                                            <li key={subIndex}>{item}</li>
                                        ))}
                                    </ul>
                                </li>
                            ))}
                        </ol>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold font-headline mb-4 text-primary">CACSFinacc’s Business Plan Compliance Suite</h2>
                        <ol className="space-y-4 list-decimal pl-5">
                            {ourSuite.map((service, index) => (
                                <li key={index}>
                                    <p className="font-semibold">{service.title}</p>
                                    <p className='text-muted-foreground'>{service.description}</p>
                                </li>
                            ))}
                        </ol>
                    </div>
                    
                    <div>
                        <h2 className="text-2xl font-bold font-headline mb-4 text-primary">How CACSFinacc Ensures Business Plan Compliance</h2>
                         <ul className="space-y-3">
                            {howWeEnsure.map((item, index) => (
                            <li key={index} className="flex items-center gap-3">
                                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                                <span className="text-muted-foreground">{item}</span>
                            </li>
                            ))}
                        </ul>
                    </div>

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
