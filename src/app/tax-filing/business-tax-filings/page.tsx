
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

const whoShouldFile = [
    "Sole Proprietorship",
    "Partnership Firm",
    "Limited Liability Partnership (LLP)",
    "Companies – Private Limited Company, One Person Company",
];

const filingTypes = [
    "Partnership Firm Tax Return Filing",
    "Proprietorship Tax Return Filing",
    "Limited Liability Partnership Tax Return Filing",
    "Company Tax Return Filing",
];

const taxSlabsLessThan60 = [
    { range: "Up to Rs.2,50,000", rate: "-" },
    { range: "Rs.2,50,001 to Rs. 5,00,000", rate: "5%" },
    { range: "Rs. 5,00,001 to Rs. 10,00,000", rate: "20%" },
    { range: "Above Rs. 10,00,000", rate: "30%" },
];

const taxSlabs60to80 = [
    { range: "Up to Rs. 3,00,000", rate: "-" },
    { range: "Rs. 3,00,001 to Rs. 5,00,000", rate: "5%" },
    { range: "Rs. 5,00,001 to Rs. 10,00,000", rate: "20%" },
    { range: "Above Rs. 10,00,000", rate: "30%" },
];

const taxSlabsAbove80 = [
    { range: "up to Rs. 5,00,000", rate: "-" },
    { range: "Rs. 5,00,001 to Rs. 10,00,000", rate: "20%" },
    { range: "Above Rs. 10,00,000", rate: "30%" },
];

const surchargeRates = [
    { range: "Rs. 50 Lakhs to Rs. 1 Crore", rate: "10%" },
    { range: "Rs. 1 Crore to Rs. 2 Crores", rate: "15%" },
    { range: "Rs. 2 Crores to Rs. 5 Crores", rate: "25%" },
    { range: "Above Rs. 5 Crore", rate: "37%" },
];

const ourServices = [
    {
        title: "Income Tax Filing for Businesses",
        items: [
            "Filing of ITR-5, ITR-6, and ITR-7 for Partnership Firms, LLPs, Companies, Trusts, and NGOs.",
            "Proper classification of business income, deductions, and adjustments for seamless processing.",
            "MAT (Minimum Alternate Tax) Calculation for companies as applicable.",
            "Strategic tax planning to leverage all eligible deductions under Sections 80IA, 80IB, 80JJAA, and more."
        ]
    },
    {
        title: "TDS & TCS Compliance",
        items: [
            "Quarterly TDS/TCS Return Filing (Form 24Q, 26Q, 27Q, and 27EQ).",
            "Generation and submission of Form 16/16A for employee and vendor payments.",
            "Timely deposit of TDS/TCS to avoid interest and penalties."
        ]
    },
    {
        title: "Advance Tax & Self-Assessment Tax Planning",
        items: [
            "Accurate calculation and timely payment of Advance Tax to avoid interest under Sections 234B and 234C.",
            "Strategic planning to optimize cash flow and reduce tax burden throughout the financial year."
        ]
    },
    {
        title: "Representation & Litigation Support",
        items: [
            "Expert representation for Assessments, Appeals, and Tax Notices under Sections 143(2), 148, 154, and 263.",
            "End-to-end support for scrutiny assessments and dispute resolutions.",
            "Assistance in DRT, ITAT, and High Court Proceedings."
        ]
    }
];

const whyChooseUs = [
    "Expert-Led Compliance: Managed by seasoned Chartered Accountants with expertise in business taxation and ICAI norms.",
    "Minimized Risk: Robust verification processes to eliminate errors and avoid penalties.",
    "Proactive Filing: Early reminders and strategic planning to prevent last-minute rush and fines.",
    "End-to-End Support: From filing to representation, we cover all aspects of business tax compliance.",
    "Data Security and Confidentiality: Your financial information is protected with industry-leading security measures.",
];

export default function BusinessTaxFilingPage() {
  return (
    <main>
      <div className="py-6 bg-secondary">
        <div className="container mx-auto px-4">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Tax Filing', href: '/tax-filing' },
              { label: 'Business Tax Filing' },
            ]}
          />
        </div>
      </div>

      <section id="service-details" className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <h1 className="text-3xl md:text-4xl font-bold font-headline mb-4">
                Business Tax Filing Services
              </h1>

              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Business Tax Return Filing</h2>
                <p className="text-muted-foreground text-justify">
                  CACSFinacc provides expert business tax filing services for all
                  types of business entities in India, including proprietorships,
                  partnership firms, LLPs, and companies. We ensure your tax
                  returns are filed accurately and on time, helping you stay
                  compliant and avoid penalties.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">What is a business tax return?</h2>
                <p className="text-muted-foreground text-justify mb-4">
                  A business tax return refers to an income tax return for
                  businesses. A business income tax return is a comprehensive
                  report that outlines a business's income, expenses, and
                  pertinent tax details, all presented in a designated form. It
                  entails the submission of income tax returns for businesses,
                  with the added requirement of reporting Tax Deducted at Source
                  (TDS). This process must be carried out annually.
                </p>
                <p className="text-muted-foreground text-justify">
                  This return serves as a financial statement detailing earnings.
                  It outlays and is a documentation of additional financial
                  components like fixed assets, loans obtained, loans extended,
                  debtors, and creditors within the business. It is important to
                  meet the income tax return filing last date for business.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Who should file a Business Income Tax Return?</h2>
                <p className="text-muted-foreground text-justify mb-4">
                  Filing a business income tax return is mandatory for all
                  eligible businesses operating within the framework of Indian tax
                  regulations. The need to do a business tax return filing is
                  contingent upon the structure of the business:
                </p>
                <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                  {whoShouldFile.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Types of Business Income Tax Return Filing</h2>
                <p className="text-muted-foreground text-justify mb-4">
                  The different categories for filing business income tax returns
                  are determined based on the types of business entities allowed
                  to submit them. These categories correspond to other business
                  structures and their respective designations. Ensure to follow
                  the guidelines designed for how to file taxes for small business
                  owners.
                </p>
                <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                  {filingTypes.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              
              <div className="space-y-6">
                <h2 className="text-2xl font-bold font-headline text-primary">Proprietorship Tax Return Filing</h2>
                <p className="text-muted-foreground text-justify">
                  Any individual with business income is said to be operating a
                  proprietorship firm. Proprietorships operating in India are
                  required to file income tax returns each year. Since
                  proprietorships are considered the same as proprietors, a
                  proprietorship's income tax return filing procedure is similar
                  to individual income tax return filing.
                </p>
                <div>
                  <h3 className="font-semibold mb-2">Requirement for Filing Proprietorship Tax Return</h3>
                  <p className="text-muted-foreground text-justify">
                    All proprietors below 60 years are required to file income tax
                    returns if total income exceeds Rs. 2.5 lakhs. For proprietors
                    over 60 years but below 80 years, income tax filing is mandatory
                    if total income exceeds Rs.3 lakhs. Proprietors over 80 years
                    and above must file income tax returns if the total income
                    exceeds Rs.5 lakhs.
                  </p>
                </div>
                 <div>
                  <h3 className="font-semibold mb-2">Income Tax Rate for Proprietorship</h3>
                  <p className="text-muted-foreground text-justify">
                    The income tax rate for proprietorship is the same as the income
                    tax rate for individuals. Unlike the income tax rate for LLP or
                    Company, which are flat rates, proprietorships are taxed on slab
                    rates. The following is the income tax rate applicable for
                    proprietorships for the assessment year 2023-24, wherein the
                    Proprietor's age is less than 60.
                  </p>
                </div>
                
                <div className="space-y-4">
                    <h4 className="font-medium">Proprietorship Tax Rate AY 2024-25 | FY 2023-24 under Normal Tax Regime</h4>
                    <p className="text-sm text-muted-foreground">Proprietor's age is less than 60 years</p>
                     <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Net Income Range</TableHead>
                                <TableHead>Rate of income-tax (%)</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {taxSlabsLessThan60.map((item, index) => (
                                <TableRow key={index}>
                                    <TableCell className="font-medium">{item.range}</TableCell>
                                    <TableCell>{item.rate}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                     </Table>
                </div>
                <div className="space-y-4">
                    <p className="text-sm text-muted-foreground">The Proprietor's age is between 60 and 80 years</p>
                     <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Net Income Range</TableHead>
                                <TableHead>Rate of income-tax (%)</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {taxSlabs60to80.map((item, index) => (
                                <TableRow key={index}>
                                    <TableCell className="font-medium">{item.range}</TableCell>
                                    <TableCell>{item.rate}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                     </Table>
                </div>
                 <div className="space-y-4">
                    <p className="text-sm text-muted-foreground">Proprietor's age is above 80 years</p>
                     <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Net Income Range</TableHead>
                                <TableHead>Rate of income-tax (%)</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {taxSlabsAbove80.map((item, index) => (
                                <TableRow key={index}>
                                    <TableCell className="font-medium">{item.range}</TableCell>
                                    <TableCell>{item.rate}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                     </Table>
                </div>
                 <div className="space-y-4">
                    <h3 className="font-semibold mb-2">Rates of surcharge</h3>
                    <p className="text-muted-foreground text-justify">
                        In respect of a Proprietor, the rate of surcharge for the
                        Assessment Year 2023-24 is tabulated here:
                    </p>
                     <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Range of Income</TableHead>
                                <TableHead>Surcharge Rate</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {surchargeRates.map((item, index) => (
                                <TableRow key={index}>
                                    <TableCell className="font-medium">{item.range}</TableCell>
                                    <TableCell>{item.rate}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                     </Table>
                      <p className="text-muted-foreground text-justify text-sm">
                        The rate of surcharge in case of the Proprietor opting for an
                        alternate tax regime as per section 115BAC will be 25% instead
                        of 37% for AY 2023-24.
                    </p>
                </div>
                 <div>
                  <h3 className="font-semibold mb-2">Tax Audit for Proprietorship</h3>
                  <p className="text-muted-foreground text-justify">
                    A proprietorship firm would require an audit if the total sales
                    turnover is over Rs.1 crore during the financial year. In the
                    case of a professional, an audit would be required if total
                    gross receipts are more than Rs.50 lakhs during the financial
                    year under assessment.
                  </p>
                </div>
                 <div>
                  <h3 className="font-semibold mb-2">Due Date for Filing Proprietorship Tax Return</h3>
                  <p className="text-muted-foreground text-justify">
                    The income tax return of a proprietorship that doesn't require
                    audit is due on July 31. If the return needs to be audited as
                    per the Income Tax Act, it is due on September 30. Ideally, it
                    is important to file on or before income tax return filing last
                    date for business.
                  </p>
                </div>
                 <div>
                  <h3 className="font-semibold mb-2">ITR Form for Proprietorships Return Filings</h3>
                  <p className="text-muted-foreground text-justify">
                    Proprietorship firms would be required to file Form ITR-3 or
                    Form ITR-4-Sugam. Form ITR-3 can be filed by a proprietor or a
                    Hindu Undivided Family carrying out a proprietary business or
                    profession. Form ITR-4-Sugam can be filed by a proprietor who
                    wants to pay income tax under the presumptive taxation scheme.
                  </p>
                </div>
              </div>

               <div className="space-y-6">
                <h2 className="text-2xl font-bold font-headline text-primary">Partnership Firm Tax Return Filing</h2>
                <p className="text-muted-foreground text-justify">
                    All partnership firms must file ITR for business income,
                    regardless of income or loss. Partnership firms are taxed as a
                    separate legal entity under the Income Tax Act. Hence, the
                    income tax rate applicable for partnership firms is similar to
                    that of LLPs and companies registered in India.
                </p>
                <div>
                  <h3 className="font-semibold mb-2">Requirement for Filing Partnership Firm Tax Return</h3>
                   <p className="text-muted-foreground text-justify">
                    All partnership firms are required to file income tax returns
                    each year, irrespective of income or loss. If there was no
                    business activity, a NIL income tax return must be filed before
                    the due date for a partnership firm.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Income Tax Rate for Partnership Firms</h3>
                  <p className="text-muted-foreground text-justify">
                    Partnership firms must pay income tax at 30% of total income. In
                    addition to the income tax, a partnership firm is liable to pay
                    an income tax surcharge on the amount of income tax at the rate
                    of 12% when total income exceeds Rs.1 crores. In addition to the
                    income tax and taxation, a partnership firm must pay a Health
                    and education cess. Health & Education Cess is applicable on the
                    amount of income tax and the appropriate surcharge at 4%.
                  </p>
                </div>
                 <div>
                  <h3 className="font-semibold mb-2">Minimum Alternate Tax for Partnership Firms</h3>
                  <p className="text-muted-foreground text-justify">
                    Similar to income tax applicable for a company, partnership
                    firms are subject to minimum alternate Tax. A minimum alternate
                    tax of 18.5% of adjusted total income is applicable. Hence,
                    income tax payable by a partnership firm's profits cannot be
                    less than 18.5 percent (increased by income tax surcharge,
                    education cess, and secondary and higher education cess).
                  </p>
                </div>
                 <div>
                  <h3 className="font-semibold mb-2">Tax Audit for Partnership Firm</h3>
                  <p className="text-muted-foreground text-justify">
                    Partnership firms carrying on business with total sales of over
                    Rs.1 crore are required to obtain tax audits. Similarly,
                    partnership firms carrying on a profession wherein gross
                    receipts exceed Rs.50 lakhs in the previous year are required to
                    obtain tax audits. In addition, other applicable conditions
                    could make an audit mandatory for a partnership firm.
                  </p>
                </div>
                 <div>
                  <h3 className="font-semibold mb-2">Due Date for Filing Partnership Firm Tax Return</h3>
                   <p className="text-muted-foreground text-justify">
                    Most partnership firms' income tax return due date is July 31 of
                    the assessment year. Partnership firms required to get their
                    accounts audited under the Income Tax Act must file the income
                    tax return before the September 30 business tax return filing
                    deadline.
                  </p>
                </div>
                 <div>
                  <h3 className="font-semibold mb-2">Business Income ITR Form For Partnership Firm Return Filing</h3>
                   <p className="text-muted-foreground text-justify">
                    Partnership firms are required to file income tax returns in
                    form ITR 5. Like all other income tax forms, ITR 5 is an
                    attachment-less form, and there is no requirement for submitting
                    any documents or statements along with a partnership firm tax
                    return. However, the taxpayer must save all records about the
                    business and produce the same before tax authorities when
                    requested.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-bold font-headline text-primary">LLP Tax Return Filing</h2>
                 <p className="text-muted-foreground text-justify">
                    All LLPs are required to file an income tax return, irrespective
                    of the amount of income or loss. LLPs are a separate legal
                    entity and are taxed separately from the Partners of the LLP.
                    The income tax rate applicable for LLPs is similar to companies
                    registered in India.
                </p>
                 <div>
                  <h3 className="font-semibold mb-2">Requirement for Filing LLP Tax Return</h3>
                   <p className="text-muted-foreground text-justify">
                    All LLPs are required to file income tax returns each year,
                    irrespective of income or loss. If there was no business
                    activity, then a NIL income tax return must be filed before the
                    due date.
                  </p>
                </div>
                 <div>
                  <h3 className="font-semibold mb-2">Income Tax Rate for LLPs</h3>
                  <p className="text-muted-foreground text-justify">
                    The income tax rate applicable for LLP registered in India is
                    30% of the total income. In addition to the income tax, a
                    surcharge is levied on the income tax payable at 12% when the
                    total income exceeds Rs.1 crore. In addition to the income tax
                    surcharge, a Health and education cess at 4% applies to the
                    income tax and surcharge of an LLP.
                  </p>
                </div>
                 <div>
                  <h3 className="font-semibold mb-2">Minimum Alternate Tax for LLP</h3>
                  <p className="text-muted-foreground text-justify">
                    Similar to income tax applicable for a company, LLP is also
                    subject to minimum alternate Tax. A minimum alternate tax of
                    18.5% of adjusted total income is applicable for LLP. Hence,
                    income tax payable by LLP cannot be less than 18.5 percent
                    (increased by income tax surcharge, education cess, and
                    secondary and higher education cess).
                  </p>
                </div>
                 <div>
                  <h3 className="font-semibold mb-2">Tax Audit for LLP</h3>
                  <p className="text-muted-foreground text-justify">
                    LLP whose turnover exceeded Rs. 40 Lakh or whose contribution
                    exceeded Rs. 25 Lakh are required to get their accounts audited
                    by a practicing Chartered Accountant. In addition, LLPs that
                    entered into an international transaction with associated
                    enterprises or undertook certain Specified Domestic Transactions
                    must file Form 3CEB. Form 3CEB must be certified by a Chartered
                    Accountant. LLPs required to file Business income ITR Form 3CEB
                    have November 30 as the deadline for LLP tax filing.
                  </p>
                </div>
                 <div>
                  <h3 className="font-semibold mb-2">Due Date for Filing LLP Tax Return</h3>
                  <p className="text-muted-foreground text-justify">
                    The deadline for LLP tax filing in India is July 31. LLPs
                    required to obtain a tax audit have September 30 as the business
                    tax return filing deadline.
                  </p>
                </div>
                 <div>
                  <h3 className="font-semibold mb-2">ITR Form for LLP Return Filing</h3>
                   <p className="text-muted-foreground text-justify">
                    LLPs must file income tax returns using Form ITR 5. Form ITR 5
                    must be filed online using the digital signature of one of the
                    designated partners of the LLP.
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <h2 className="text-2xl font-bold font-headline text-primary">Company Tax Return Filing</h2>
                 <p className="text-muted-foreground text-justify">
                    All companies registered in India are required to file income
                    tax returns each year. Under the Income Tax Act, company tax
                    return filing falls under two categories, namely domestic
                    company or foreign company. Companies registered with the
                    Ministry of Corporate Affairs, like Private Limited, Personal,
                    or Limited Companies, are classified as domestic companies.
                </p>
                 <div>
                  <h3 className="font-semibold mb-2">Requirement for Filing Company Tax Return</h3>
                   <p className="text-muted-foreground text-justify">
                    All companies registered in India must do business tax return
                    filing yearly, irrespective of income, profit, or loss. Hence,
                    even dormant companies with no transactions are required to file
                    income tax returns each year.
                  </p>
                </div>
                 <div>
                  <h3 className="font-semibold mb-2">Income Tax Rate for Company</h3>
                  <p className="text-muted-foreground text-justify">
                    For Assessment Year 2024-25, the Income tax rate of 25% of total
                    income is applicable for domestic companies with a total
                    turnover of less than Rs.400 crores in 2020-21. For companies
                    with a turnover of more than Rs.400 crores in the year 2020-21,
                    an income tax rate of 30% is applicable. In addition to the
                    income tax, companies must pay a surcharge and Health and
                    Education Cess at 7% income tax and surcharge.
                  </p>
                </div>
                 <div>
                  <h3 className="font-semibold mb-2">Minimum Alternate Tax for Company</h3>
                  <p className="text-muted-foreground text-justify">
                    All companies are required to pay a minimum alternate tax at the
                    rate of 15% of book profit plus surcharge and education cess if
                    the company's tax liability is less than 15% of book profit.
                  </p>
                </div>
                 <div>
                  <h3 className="font-semibold mb-2">Tax Audit for Company</h3>
                  <p className="text-muted-foreground text-justify">
                    A company's accounts must be audited each year by a Chartered
                    Accountant, irrespective of turnover or profit/loss.
                  </p>
                </div>
                 <div>
                  <h3 className="font-semibold mb-2">Due Date for Filing Company Tax Return</h3>
                  <p className="text-muted-foreground text-justify">
                    All companies registered in India are required to file income
                    tax returns on or before September 30. Companies incorporated
                    between January - March can file MCA annual returns after 18
                    months in the first year. However, the same type of exemption is
                    not available under the Income Tax Act. Hence, even companies
                    registered from January - to March must file income tax returns
                    on or before September 30 of the same calendar year.
                  </p>
                </div>
                 <div>
                  <h3 className="font-semibold mb-2">Business Income ITR Form For Company Tax Filings</h3>
                   <p className="text-muted-foreground text-justify">
                    Companies registered in India and operating a business for
                    profit must file Form ITR 6. Hence, private limited companies,
                    limited companies, and one-person companies would be required to
                    file Form ITR6.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Our Business Tax Filing Services Include:</h2>
                <ol className="space-y-4 list-decimal pl-5">
                    {ourServices.map((service, index) => (
                        <li key={index}>
                            <p className="font-semibold">{service.title}</p>
                            <ul className='list-disc pl-5 text-muted-foreground'>
                                {service.items.map((item, subIndex) => (
                                    <li key={subIndex}>{item}</li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ol>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Why Choose CACSFinacc?</h2>
                <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                  {whyChooseUs.map((item, index) => (
                    <li key={index}>{item}</li>
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

