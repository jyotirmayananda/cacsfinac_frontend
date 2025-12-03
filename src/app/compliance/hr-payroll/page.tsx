
'use client';

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

const complianceChecklist = [
    { item: "Salary Calculation & Payslip", frequency: "Monthly", rule: "As per employment agreement" },
    { item: "TDS Deduction & Deposit", frequency: "Monthly", rule: "By 7th of following month (Section 192)" },
    { item: "TDS Return (Form 24Q)", frequency: "Quarterly", rule: "31st Jul / 31st Oct / 31st Jan / 31st May" },
    { item: "Form 16 Issuance", frequency: "Annual", rule: "By 15th June 2025 for FY 2024-25" },
    { item: "PF Contribution (EPF)", frequency: "Monthly", rule: "By 15th of following month" },
    { item: "ESI Contribution", frequency: "Monthly", rule: "By 15th of following month" },
    { item: "Professional Tax (PT)", frequency: "Monthly/Quarterly", rule: "Varies by State (e.g., 20th monthly in MH)" },
    { item: "Labour Welfare Fund (LWF)", frequency: "Half-Yearly", rule: "June & December (varies by State)" },
    { item: "Leave & Attendance Record", frequency: "Ongoing", rule: "Maintain for 5 years minimum" },
    { item: "Employment Agreements", frequency: "At hiring", rule: "Signed & stamped at onboarding" },
];

const payrollInclusions = [
    { area: "Payroll Processing", inclusions: "Salary computation, bonuses, arrears" },
    { area: "TDS on Salaries (Section 192)", inclusions: "Calculation, deduction, Form 24Q, Form 16" },
    { area: "Provident Fund (PF)", inclusions: "Employee + Employer contribution, ECR filing" },
    { area: "Employee State Insurance (ESI)", inclusions: "Deductions, return filing" },
    { area: "Professional Tax", inclusions: "State-wise deduction and payment" },
    { area: "Gratuity & Bonus", inclusions: "Compliance with Bonus Act and Gratuity Act" },
    { area: "Labour Welfare Fund", inclusions: "Deduction/payment as per state rules" },
    { area: "Leave Encashment, LTA, HRA", inclusions: "Tax calculation and declaration verification" },
    { area: "Employment Registers", inclusions: "Attendance, wage, muster rolls (for audit/inspection)" },
];

const businessCategories = [
    { category: "Startups", considerations: "Payroll outsourcing, ESOP taxation, flexible CTC structures" },
    { category: "SMEs/Manufacturing", considerations: "Shift allowances, wage code readiness, shop floor compliance" },
    { category: "IT/ITES", considerations: "TDS on remote employees, hybrid work policy formalization" },
    { category: "Contract Workforce", considerations: "CLRA registration, monthly contractor ECR/ESI follow-up" },
];

const nonComplianceConsequences = [
    { area: "TDS on Salary", penalty: "Interest @ 1.5% p.m. + ₹200/day late fee + penalty u/s 271H" },
    { area: "EPF / ESI Non-payment", penalty: "Damages up to 25% + interest + prosecution in extreme cases" },
    { area: "Professional Tax Default", penalty: "₹1,000 – ₹5,000 per month (varies by State)" },
    { area: "Labour Law Violation", penalty: "₹10,000 – ₹1,00,000 + imprisonment (depending on Act and severity)" },
    { area: "No Form 16 Issued", penalty: "₹100/day delay under Section 272A" },
];

const dueDates = [
    { compliance: "TDS Payment (Salaries)", dueDate: "7th of every month" },
    { compliance: "TDS Return (Form 24Q, Q1–Q4)", dueDate: "31st Jul / 31st Oct / 31st Jan / 31st May" },
    { compliance: "Form 16 Issuance", dueDate: "15th June 2025" },
    { compliance: "PF Payment", dueDate: "15th of every month" },
    { compliance: "ESI Payment", dueDate: "15th of every month" },
    { compliance: "Professional Tax", dueDate: "Varies state-wise (monthly/annually)" },
    { compliance: "Bonus & Gratuity Payment", dueDate: "As per respective Acts within prescribed timelines" },
];

const requiredDocs = [
    "Employee master data (PAN, Aadhaar, DOB, bank details)",
    "Salary structure (CTC components)",
    "Investment declarations (80C, 80D, HRA, etc.)",
    "Attendance and leave records",
    "TDS challans and previous Form 24Q filings",
    "PF, ESI, PT registration numbers and login credentials",
    "Any voluntary deductions or advances",
];

const howWeSimplify = [
    { title: "Complete Payroll Processing", description: "Salary, tax, bonus, reimbursements, and payslip generation" },
    { title: "TDS Computation & Filing (24Q)", description: "Monthly TDS calculation and quarterly returns with Form 16 issuance" },
    { title: "PF, ESI & PT Filing", description: "Monthly challan creation, payment, and compliance documentation" },
    { title: "Labour Law Registers & Returns", description: "Maintenance of wage, muster, bonus, and overtime registers" },
    { title: "Audit & Inspection Support", description: "End-to-end assistance during EPFO, ESIC, Income Tax, and Labour inspections" },
    { title: "Custom Software Integration", description: "We work with Zoho Payroll, GreytHR, Keka, QuickBooks, and Tally ERP HRMS" },
];

const whyChooseUs = [
    "One-Stop Solution – Payroll, TDS, EPF, ESI, PT, Bonus, Gratuity – all covered",
    "Expert Advisory – Tax-optimized payroll structuring for different industries",
    "Automation Ready – Tally, Zoho Payroll, GreytHR, RazorpayX, and other tools supported",
    "Secure & Confidential – 100% data protection and employee privacy compliance",
    "Monthly HR Reports – HRMIS dashboards, employee cost analysis, attrition logs",
];


export default function HRPayrollPage() {
  return (
    <main>
       <div className="py-6 bg-secondary">
        <div className="container mx-auto px-4">
            <Breadcrumbs
            items={[
                { label: 'Home', href: '/' },
                { label: 'Compliance', href: '/compliance' },
                { label: 'HR & Payroll' },
            ]}
            />
        </div>
      </div>

      <section id="service-details" className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
                <h1 className="text-3xl md:text-4xl font-bold font-headline mb-4">
                    HR & Payroll Compliance Services
                </h1>

                <div>
                    <h2 className="text-2xl font-bold font-headline mb-4 text-primary">HR & Payroll Service</h2>
                    <p className="text-muted-foreground text-justify mb-4">
                        Managing HR and payroll efficiently is crucial for any business, and CACSFinacc simplifies this process with an all-in-one, cloud-based payroll software designed to streamline employee management systems, payroll processing, PF and ESI compliance, and automated salary tax calculation. Whether you're a startup seeking affordable payroll software or an enterprise requiring advanced HR management software features, our solution ensures accuracy, efficiency, and full compliance with Indian labour laws, making payroll seamless and hassle-free.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-bold font-headline mb-4 text-primary">What is HR & Payroll Compliance?</h2>
                    <p className="text-muted-foreground text-justify mb-4">
                        HR & Payroll Compliance involves the accurate processing of employee salaries, deductions, benefits, and reporting in accordance with applicable labour laws, tax regulations, and statutory frameworks in India.
                    </p>
                    <p className="text-muted-foreground text-justify mb-2">For any organization—whether a startup, SME, or large enterprise—non-compliance with payroll rules can result in:</p>
                     <ul className="space-y-2 pl-5 list-disc text-muted-foreground mb-4">
                        <li>Heavy penalties</li>
                        <li>Employee disputes</li>
                        <li>Labour law litigation</li>
                        <li>Reputational damage</li>
                    </ul>
                    <p className="text-muted-foreground text-justify">
                        AY 2025-26 has brought several important amendments in TDS, PF, ESI, and gratuity thresholds, making timely payroll compliance more critical than ever.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Payroll Compliance Checklist – AY 2025-26</h2>
                     <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Compliance Item</TableHead>
                                <TableHead>Frequency</TableHead>
                                <TableHead>Due Date / Rule</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {complianceChecklist.map((item, index) => (
                                <TableRow key={index}>
                                    <TableCell className="font-medium">{item.item}</TableCell>
                                    <TableCell>{item.frequency}</TableCell>
                                    <TableCell>{item.rule}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                     </Table>
                </div>
                
                <div>
                    <h2 className="text-2xl font-bold font-headline mb-4 text-primary">What Does Payroll Compliance Include?</h2>
                     <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Compliance Area</TableHead>
                                <TableHead>Key Inclusions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {payrollInclusions.map((item, index) => (
                                <TableRow key={index}>
                                    <TableCell className="font-medium">{item.area}</TableCell>
                                    <TableCell>{item.inclusions}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                     </Table>
                </div>
                
                <div>
                    <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Payroll Compliance in Different Business Categories</h2>
                     <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Category</TableHead>
                                <TableHead>Key Considerations</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {businessCategories.map((item, index) => (
                                <TableRow key={index}>
                                    <TableCell className="font-medium">{item.category}</TableCell>
                                    <TableCell>{item.considerations}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                     </Table>
                </div>

                <div>
                    <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Consequences of Non-Compliance</h2>
                     <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Non-Compliance Area</TableHead>
                                <TableHead>Penalty / Consequence</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {nonComplianceConsequences.map((item, index) => (
                                <TableRow key={index}>
                                    <TableCell className="font-medium">{item.area}</TableCell>
                                    <TableCell>{item.penalty}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                     </Table>
                </div>

                <div>
                    <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Essential Payroll Compliance Due Dates AY 2025-26</h2>
                     <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Compliance</TableHead>
                                <TableHead>Due Date</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {dueDates.map((item, index) => (
                                <TableRow key={index}>
                                    <TableCell className="font-medium">{item.compliance}</TableCell>
                                    <TableCell>{item.dueDate}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                     </Table>
                </div>

                <div>
                    <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Documents & Information Required</h2>
                    <ul className="space-y-3 text-muted-foreground">
                        {requiredDocs.map((doc, index) => (
                            <li key={index} className="flex items-start gap-3">
                                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                                <span>{doc}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                
                <div>
                    <h2 className="text-2xl font-bold font-headline mb-4 text-primary">How CACSFinacc Simplifies HR & Payroll Compliance</h2>
                    <ol className="space-y-4 list-decimal pl-5">
                        {howWeSimplify.map((step, index) => (
                            <li key={index}>
                                <p className="font-semibold">{step.title}</p>
                                <p className='text-muted-foreground'>{step.description}</p>
                            </li>
                        ))}
                    </ol>
                </div>
                
                 <div>
                    <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Why Choose CACSFinacc for HR & Payroll Compliance?</h2>
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

    