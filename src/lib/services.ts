import type { LucideIcon } from "lucide-react";
import {
  FileText,
  CheckSquare,
  Globe,
  ShieldCheck,
  PieChart,
  UserPlus,
  BookOpen,
  Search,
  Wallet,
  Building,
} from "lucide-react";

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceFeature {
  title: string;
  items: string[];
}

export interface ServiceDetail {
  pageTitle: string;
  heroTitle: string;
  heroSubtitle: string;
  heroButton: string;
  introductionTitle: string;
  introductionParagraphs: string[];
  idealForHeading?: string;
  idealForIntro?: string;
  idealFor: string[];
  ourServicesHeading: string;
  serviceGroups: ServiceFeature[];
  howWeWorkHeading?: string;
  processHeading: string;
  process: string[];
  whyChooseUsHeading: string;
  whyChooseUs: string[];
  faqHeading: string;
  faqs: ServiceFAQ[];
  ctaTitle: string;
  ctaDescription: string;
  ctaButton: string;
  ctaSmallText: string;
}

export interface Service {
  title: string;
  slug: string;
  description: string;
  icon: LucideIcon;
  details: ServiceDetail;
}

export const services: Service[] = [
  {
    title: "Income Tax Filing & Tax Advisory Services",
    slug: "income-tax-filing",
    description:
      "Structured income tax filing and advisory support for individuals, professionals, businesses, and NRIs—ensuring accuracy, compliance, and clarity.",
    icon: FileText,
    details: {
      pageTitle:
        "Income Tax Filing Services in Bengaluru & Across India (Including NRI Clients)",
      heroTitle: "Income Tax Filing & Tax Advisory Services",
      heroSubtitle:
        "Structured income tax filing and advisory support for individuals, professionals, businesses, and NRIs—ensuring accuracy, compliance, and clarity.",
      heroButton: "Schedule Consultation",
      introductionTitle: "Introduction",
      introductionParagraphs: [
        "Managing income tax can be complex, especially with multiple income sources, changing regulations, and compliance requirements.",
        "We provide structured income tax filing services in Bengaluru and across India, supporting individuals, professionals, business owners, and NRI clients with accurate filings, proper documentation, and practical tax guidance.",
        "Our approach focuses on timely compliance, risk reduction, and clarity in financial reporting.",
        "Services are delivered through structured processes in collaboration with qualified professionals, ensuring consistency and reliability.",
        "Serving clients in Bengaluru and across India.",
      ],
      idealForIntro: "This service is ideal for:",
      idealFor: [
        "Salaried individuals",
        "Freelancers and consultants",
        "Business owners and professionals",
        "Startup founders",
        "NRIs with Indian income",
        "Investors (capital gains, crypto, F&O trading)",
      ],
      ourServicesHeading: "OUR SERVICES",
      serviceGroups: [
        {
          title: "Direct Tax Advisory & Filing",
          items: [
            "Income tax return filing for individuals and businesses",
            "Capital gains reporting (shares, mutual funds, property)",
            "Presumptive taxation (44AD / 44ADA)",
            "Tax planning and optimization",
            "Multiple income source reporting",
          ],
        },
        {
          title: "NRI Taxation & Compliance",
          items: [
            "NRI income tax filing in India",
            "DTAA (Double Taxation Avoidance Agreement) advisory",
            "Foreign income reporting",
            "Residential status determination",
            "Capital gains for NRI property transactions",
          ],
        },
        {
          title: "Tax Notices & Compliance Support",
          items: [
            "Income tax notice handling and response",
            "Rectification and revised filings",
            "Compliance review and correction",
            "Ongoing support for tax-related queries",
          ],
        },
      ],
      processHeading: "Our Process:",
      process: [
        "Share your details securely",
        "Review and validation of documents",
        "Tax computation and optimization",
        "Filing and confirmation",
        "Post-filing support and assistance",
      ],
      whyChooseUsHeading: "WHY CHOOSE US",
      whyChooseUs: [
        "Structured and process-driven approach",
        "Collaboration with qualified professionals",
        "Clear communication and practical guidance",
        "Reliable and timely execution",
      ],
      faqHeading: "FAQ",
      faqs: [
        {
          question: "Who is required to file an income tax return in India?",
          answer:
            "Individuals earning above the prescribed limit, businesses, professionals, and NRIs with taxable income in India are required to file returns.",
        },
        {
          question: "What documents are required for income tax filing?",
          answer:
            "Common documents include PAN, Aadhaar, Form 16, bank statements, investment proofs, and details of income sources.",
        },
        {
          question: "Can NRIs file income tax returns in India?",
          answer:
            "Yes, NRIs earning income in India (such as rent, capital gains, or interest) are required to file returns.",
        },
        {
          question: "What happens if I do not file my income tax return?",
          answer:
            "Non-filing can result in penalties, interest, and notices from the income tax department.",
        },
        {
          question: "Can you help with multiple income sources?",
          answer:
            "Yes, we handle salary, business income, capital gains, crypto, and other income sources.",
        },
      ],
      ctaTitle: "Need help with your income tax filing?",
      ctaDescription:
        "We provide structured and reliable support to ensure your returns are filed accurately and on time.",
      ctaButton: "Schedule Consultation",
      ctaSmallText: "Confidential • Structured approach • Timely response",
    },
  },
  {
    title: "GST Registration & Compliance Services",
    slug: "gst-services",
    description:
      "Structured GST registration, filing, and compliance support for businesses, startups, and professionals—ensuring accuracy, timely filing, and regulatory compliance.",
    icon: CheckSquare,
    details: {
      pageTitle:
        "GST Registration & Compliance Services in Bengaluru & Across India",
      heroTitle: "GST Registration & Compliance Services",
      heroSubtitle:
        "Structured GST registration, filing, and compliance support for businesses, startups, and professionals—ensuring accuracy, timely filing, and regulatory compliance.",
      heroButton: "Schedule Consultation",
      introductionTitle: "Introduction",
      introductionParagraphs: [
        "Goods and Services Tax (GST) compliance is critical for businesses operating in India.",
        "Managing registrations, returns, and ongoing compliance can become complex without a structured approach.",
        "We provide GST registration and compliance services in Bengaluru and across India, supporting businesses, startups, and professionals with accurate filings, proper documentation, and timely compliance.",
        "Our focus is on ensuring regulatory adherence, minimizing risks, and maintaining consistency in GST processes.",
        "Services are delivered through structured processes in collaboration with qualified professionals, ensuring consistency and reliability.",
        "Serving clients in Bengaluru and across India.",
      ],
      idealForIntro: "This service is ideal for:",
      idealFor: [
        "Startups and newly registered businesses",
        "Small and medium enterprises (SMEs)",
        "E-commerce sellers and online businesses",
        "Service providers and consultants",
        "Businesses requiring GST registration",
        "Companies with multi-state operations",
      ],
      ourServicesHeading: "OUR SERVICES",
      serviceGroups: [
        {
          title: "GST Registration & Setup",
          items: [
            "GST registration for businesses and professionals",
            "Advisory on GST applicability and thresholds",
            "Multi-state registration support",
            "Amendment and modification of GST details",
          ],
        },
        {
          title: "GST Return Filing & Compliance",
          items: [
            "Monthly and quarterly GST return filing",
            "GSTR-1, GSTR-3B, and annual returns",
            "Input Tax Credit (ITC) reconciliation",
            "GST ledger review and compliance checks",
          ],
        },
        {
          title: "GST Advisory & Support",
          items: [
            "GST compliance review and guidance",
            "Handling GST notices and responses",
            "Support for GST audits",
            "Ongoing advisory for business transactions",
          ],
        },
      ],
      howWeWorkHeading: "HOW WE WORK",
      processHeading: "Our Process:",
      process: [
        "Understanding your business and GST requirements",
        "Document collection and validation",
        "GST registration / return preparation",
        "Filing and compliance tracking",
        "Ongoing support and advisory",
      ],
      whyChooseUsHeading: "WHY CHOOSE US",
      whyChooseUs: [
        "Structured and process-driven approach",
        "Collaboration with qualified professionals",
        "Clear communication and compliance guidance",
        "Reliable and timely execution",
      ],
      faqHeading: "FAQ",
      faqs: [
        {
          question: "Who needs GST registration in India?",
          answer:
            "Businesses exceeding the prescribed turnover limits, e-commerce sellers, and certain service providers are required to register under GST.",
        },
        {
          question: "What documents are required for GST registration?",
          answer:
            "PAN, Aadhaar, business address proof, bank details, and incorporation documents are commonly required.",
        },
        {
          question: "How often are GST returns filed?",
          answer:
            "GST returns are typically filed monthly or quarterly depending on the scheme applicable to the business.",
        },
        {
          question: "What is Input Tax Credit (ITC)?",
          answer:
            "ITC allows businesses to claim credit for GST paid on purchases against their GST liability.",
        },
        {
          question: "Can you help with GST notices?",
          answer:
            "Yes, we provide support for handling GST notices, responses, and compliance issues.",
        },
      ],
      ctaTitle: "Need support with GST registration or compliance?",
      ctaDescription:
        "We provide structured and reliable GST services to help your business stay compliant and operate smoothly.",
      ctaButton: "Schedule Consultation",
      ctaSmallText: "Confidential • Structured approach • Timely response",
    },
  },
  {
    title: "Virtual CFO & Financial Advisory Services",
    slug: "virtual-cfo",
    description:
      "Strategic financial management and advisory support for startups, SMEs, and growing businesses—helping you gain clarity, control, and direction in your financial operations.",
    icon: PieChart,
    details: {
      pageTitle:
        "Virtual CFO Services in Bengaluru & Across India for Startups & Growing Businesses",
      heroTitle: "Virtual CFO & Financial Advisory Services",
      heroSubtitle:
        "Strategic financial management and advisory support for startups, SMEs, and growing businesses—helping you gain clarity, control, and direction in your financial operations.",
      heroButton: "Schedule Consultation",
      introductionTitle: "Introduction",
      introductionParagraphs: [
        "As businesses grow, managing finances becomes more complex—ranging from cash flow challenges and financial reporting to strategic decision-making.",
        "Our Virtual CFO services provide businesses with structured financial oversight and advisory support without the need for a full-time in-house CFO.",
        "We work with startups and growing businesses across Bengaluru and India to bring financial discipline, visibility, and strategic direction to their operations.",
        "Services are delivered through structured processes in collaboration with qualified professionals, ensuring consistency and reliability.",
        "Serving clients in Bengaluru and across India.",
      ],
      idealForHeading: "WHO THIS SERVICE IS FOR",
      idealForIntro: "This service is ideal for:",
      idealFor: [
        "Startups and early-stage companies",
        "Small and medium businesses (SMEs)",
        "Founders managing finances without a finance team",
        "Businesses preparing for funding or investor discussions",
        "Companies facing cash flow or profitability challenges",
        "Growing businesses needing structured financial systems",
      ],
      ourServicesHeading: "OUR SERVICES",
      serviceGroups: [
        {
          title: "Financial Planning & Analysis",
          items: [
            "Budgeting and financial forecasting",
            "Cash flow planning and monitoring",
            "Profitability and cost analysis",
            "Financial performance tracking (MIS reporting)",
          ],
        },
        {
          title: "Business Financial Management",
          items: [
            "Structuring financial processes and controls",
            "Expense tracking and optimization",
            "Working capital management",
            "Financial reporting and insights",
          ],
        },
        {
          title: "Strategic Advisory & Decision Support",
          items: [
            "Business growth planning",
            "Pricing and cost strategy",
            "Support in key financial decisions",
            "Risk identification and mitigation",
          ],
        },
        {
          title: "Investor & Funding Support",
          items: [
            "Financial data preparation for investors",
            "Support in fundraising discussions",
            "Due diligence support",
            "Financial projections and valuation inputs",
          ],
        },
      ],
      howWeWorkHeading: "HOW WE WORK",
      processHeading: "Our Process:",
      process: [
        "Understanding your business and financial structure",
        "Reviewing existing financial data and processes",
        "Setting up structured reporting and controls",
        "Ongoing monitoring and advisory support",
        "Continuous improvement and strategic guidance",
      ],
      whyChooseUsHeading: "WHY CHOOSE US",
      whyChooseUs: [
        "Structured and process-driven approach",
        "Collaboration with qualified professionals",
        "Clear financial insights and practical guidance",
        "Reliable and consistent advisory support",
      ],
      faqHeading: "FAQ",
      faqs: [
        {
          question: "What is a Virtual CFO?",
          answer:
            "A Virtual CFO provides financial strategy, reporting, and advisory support without being a full-time employee.",
        },
        {
          question: "Do startups need a Virtual CFO?",
          answer:
            "Yes, especially during growth stages where financial planning, investor readiness, and cash flow management are critical.",
        },
        {
          question: "How is this different from an accountant?",
          answer:
            "Accounting focuses on recording transactions, while a Virtual CFO focuses on financial strategy, planning, and decision-making.",
        },
        {
          question: "Can you help with investor readiness?",
          answer:
            "Yes, we assist with financial reporting, projections, and preparation required for investor discussions.",
        },
        {
          question: "Is this service suitable for small businesses?",
          answer:
            "Yes, it is ideal for businesses that need structured financial guidance without hiring a full-time CFO.",
        },
      ],
      ctaTitle:
        "Looking for structured financial guidance for your business?",
      ctaDescription:
        "We provide ongoing financial advisory and Virtual CFO support to help you manage growth, improve clarity, and make better business decisions.",
      ctaButton: "Schedule Consultation",
      ctaSmallText: "Confidential • Structured approach • Ongoing support",
    },
  },
  {
    title: "NRI Taxation & Compliance Services",
    slug: "nri-taxation",
    description:
      "Specialized tax advisory and compliance support for Non-Resident Indians (NRIs) with income, investments, or assets in India—ensuring accurate reporting and regulatory compliance.",
    icon: Globe,
    details: {
      pageTitle: "NRI Taxation Services in India (Bengaluru & Across India)",
      heroTitle: "NRI Taxation & Compliance Services",
      heroSubtitle:
        "Specialized tax advisory and compliance support for Non-Resident Indians (NRIs) with income, investments, or assets in India—ensuring accurate reporting and regulatory compliance.",
      heroButton: "Schedule Consultation",
      introductionTitle: "Introduction",
      introductionParagraphs: [
        "Managing taxation as a Non-Resident Indian (NRI) can be complex due to residential status rules, foreign income reporting, and applicable tax regulations in India.",
        "We provide structured NRI taxation services across Bengaluru and India, supporting individuals with income from property, investments, business interests, and other sources.",
        "Our approach focuses on accurate compliance, clarity in tax obligations, and practical advisory aligned with regulatory requirements.",
        "Services are delivered through structured processes in collaboration with qualified professionals, ensuring consistency and reliability.",
        "Serving clients in Bengaluru and across India.",
      ],
      idealForHeading: "WHO THIS SERVICE IS FOR",
      idealForIntro: "This service is ideal for:",
      idealFor: [
        "NRIs earning income in India (rent, interest, capital gains)",
        "Individuals with property transactions in India",
        "NRIs with investments in shares, mutual funds, or other assets",
        "Professionals working abroad with Indian income sources",
        "Individuals requiring DTAA (Double Taxation Avoidance Agreement) guidance",
        "Returning NRIs needing tax transition support",
      ],
      ourServicesHeading: "OUR SERVICES",
      serviceGroups: [
        {
          title: "NRI Income Tax Filing",
          items: [
            "Income tax return filing for NRIs in India",
            "Reporting of rental income and property income",
            "Capital gains reporting (property, shares, mutual funds)",
            "Interest income reporting (NRO/NRE accounts)",
          ],
        },
        {
          title: "DTAA & Tax Advisory",
          items: [
            "Double Taxation Avoidance Agreement (DTAA) advisory",
            "Tax residency and applicability analysis",
            "Foreign income reporting guidance",
            "Tax optimization within legal framework",
          ],
        },
        {
          title: "Property & Investment Taxation",
          items: [
            "Tax implications on property sale and purchase",
            "Capital gains calculation for NRI property transactions",
            "TDS implications for NRI transactions",
            "Investment-related tax advisory",
          ],
        },
        {
          title: "Compliance & Notice Handling",
          items: [
            "Income tax notice response and handling",
            "Rectification and revised filings",
            "Compliance review and corrections",
            "Ongoing advisory support",
          ],
        },
      ],
      howWeWorkHeading: "HOW WE WORK",
      processHeading: "Our Process:",
      process: [
        "Understanding your residency status and income sources",
        "Reviewing financial documents and tax applicability",
        "Tax computation and compliance planning",
        "Filing and reporting as per regulations",
        "Ongoing support and advisory",
      ],
      whyChooseUsHeading: "WHY CHOOSE US",
      whyChooseUs: [
        "Structured and process-driven approach",
        "Collaboration with qualified professionals",
        "Clear financial insights and practical guidance",
        "Reliable and consistent advisory support",
      ],
      faqHeading: "FAQ",
      faqs: [
        {
          question: "Do NRIs need to file income tax returns in India?",
          answer:
            "Yes, NRIs are required to file returns if they have taxable income in India such as rent, capital gains, or interest income.",
        },
        {
          question: "What is DTAA and how does it help NRIs?",
          answer:
            "DTAA (Double Taxation Avoidance Agreement) helps avoid being taxed twice on the same income in two countries.",
        },
        {
          question: "How is NRI residential status determined?",
          answer:
            "Residential status is determined based on the number of days an individual stays in India during a financial year.",
        },
        {
          question: "Is TDS applicable for NRI property transactions?",
          answer:
            "Yes, TDS provisions apply differently for NRIs, especially in property transactions and certain income types.",
        },
        {
          question: "Can you help NRIs with tax notices?",
          answer:
            "Yes, we provide support in handling notices, compliance issues, and rectifications.",
        },
      ],
      ctaTitle: "Need support with your NRI taxation in India?",
      ctaDescription:
        "We provide structured and reliable advisory to help you stay compliant and manage your Indian tax obligations effectively.",
      ctaButton: "Schedule Consultation",
      ctaSmallText: "Confidential • Structured approach • NRI-focused support",
    },
  },
  {
    title: "Company Registration & Business Setup Services",
    slug: "company-registration",
    description:
      "Structured support for starting your business with the right legal structure, registrations, and compliance—ensuring a smooth and compliant setup from day one.",
    icon: UserPlus,
    details: {
      pageTitle:
        "Company Registration & Business Setup Services in Bengaluru & Across India",
      heroTitle: "Company Registration & Business Setup Services",
      heroSubtitle:
        "Structured support for starting your business with the right legal structure, registrations, and compliance—ensuring a smooth and compliant setup from day one.",
      heroButton: "Schedule Consultation",
      introductionTitle: "Introduction",
      introductionParagraphs: [
        "Starting a business involves multiple decisions—choosing the right structure, completing registrations, and ensuring compliance with legal and regulatory requirements.",
        "We provide company registration and business setup services in Bengaluru and across India, supporting startups, entrepreneurs, and professionals in establishing their businesses with clarity and proper structuring.",
        "Our approach focuses on choosing the right entity, ensuring regulatory compliance, and setting a strong foundation for growth.",
        "Services are delivered through structured processes in collaboration with qualified professionals, ensuring consistency and reliability.",
        "Serving clients in Bengaluru and across India.",
      ],
      idealForHeading: "WHO THIS SERVICE IS FOR",
      idealForIntro: "This service is ideal for:",
      idealFor: [
        "Entrepreneurs starting a new business",
        "Startups and early-stage founders",
        "Professionals (consultants, freelancers, doctors)",
        "Businesses transitioning from proprietorship to company/LLP",
        "Individuals planning to formalize their operations",
        "Businesses expanding into new structures",
      ],
      ourServicesHeading: "OUR SERVICES",
      serviceGroups: [
        {
          title: "Business Structure Advisory",
          items: [
            "Guidance on selecting the right business structure",
            "Comparison of Private Limited, LLP, and Proprietorship",
            "Understanding compliance, taxation, and scalability",
            "Structuring aligned with business goals",
          ],
        },
        {
          title: "Company & LLP Registration",
          items: [
            "Private Limited Company incorporation",
            "Limited Liability Partnership (LLP) registration",
            "One Person Company (OPC) registration",
            "Partnership firm setup",
          ],
        },
        {
          title: "Registrations & Licenses",
          items: [
            "PAN, TAN, and basic registrations",
            "GST registration",
            "MSME (Udyam) registration",
            "Shop & Establishment / Trade license support",
          ],
        },
        {
          title: "Post-Registration Compliance Support",
          items: [
            "ROC compliance and filings",
            "Basic accounting and compliance setup",
            "Advisory on statutory requirements",
            "Ongoing compliance support",
          ],
        },
      ],
      howWeWorkHeading: "HOW WE WORK",
      processHeading: "Our Process:",
      process: [
        "Understanding your business idea and requirements",
        "Advising on the right structure",
        "Document collection and preparation",
        "Registration and approval process",
        "Post-registration guidance and compliance setup",
      ],
      whyChooseUsHeading: "WHY CHOOSE US",
      whyChooseUs: [
        "Structured and process-driven approach",
        "Collaboration with qualified professionals",
        "Clear guidance on business structuring",
        "Reliable and timely execution",
      ],
      faqHeading: "FAQ",
      faqs: [
        {
          question: "Which business structure is best for startups?",
          answer:
            "It depends on your business goals, funding plans, and compliance preferences. Private Limited and LLP are commonly used structures.",
        },
        {
          question: "How long does company registration take?",
          answer:
            "Typically, it takes 7–15 working days depending on documentation and approvals.",
        },
        {
          question: "What documents are required for company registration?",
          answer:
            "Common documents include PAN, Aadhaar, address proof, and business details.",
        },
        {
          question: "Is GST registration mandatory for all businesses?",
          answer:
            "GST registration is required based on turnover thresholds and business type.",
        },
        {
          question: "Do you provide post-registration support?",
          answer:
            "Yes, we provide ongoing compliance, accounting, and advisory support after registration.",
        },
      ],
      ctaTitle: "Looking to start your business with the right structure?",
      ctaDescription:
        "We provide structured support to help you register and set up your business with clarity and compliance.",
      ctaButton: "Schedule Consultation",
      ctaSmallText: "Confidential • Structured approach • End-to-end support",
    },
  },
  {
    title: "NGO & Trust Registration",
    slug: "ngo-trust-registration",
    description:
      "Structured registration and compliance support for trusts, NGOs, and non-profit organizations.",
    icon: Building,
    details: {
      pageTitle: "NGO & Trust Registration",
      heroTitle: "NGO & Trust Registration",
      heroSubtitle:
        "Structured registration and compliance support for trusts, NGOs, and non-profit organizations.",
      heroButton: "Schedule Consultation",
      introductionTitle: "Introduction",
      introductionParagraphs: [
        "Establishing a non-profit organization (NGO), trust, or society requires adherence to specific legal frameworks and regulatory requirements.",
        "We provide registration and compliance support for non-profit entities in Bengaluru and across India.",
      ],
      idealForIntro: "This service is ideal for:",
      idealFor: [
        "Social entrepreneurs and philanthropists",
        "Groups planning to start a non-profit organization",
        "Trustees and board members",
      ],
      ourServicesHeading: "OUR SERVICES",
      serviceGroups: [
        {
          title: "Registration & Incorporation",
          items: [
            "Public and Private Trust registration",
            "Society registration under applicable Acts",
            "Section 8 Company incorporation",
            "Drafting of Trust Deeds and Bye-laws",
          ],
        },
        {
          title: "Regulatory Registrations",
          items: [
            "12A and 80G registration for tax exemptions",
            "CSR (Corporate Social Responsibility) registration",
            "DARPAN (NITI Aayog) registration",
            "FCRA registration advisory",
          ],
        },
        {
          title: "Compliance & Advisory",
          items: [
            "Ongoing statutory compliance for NGOs",
            "Annual filing and reporting support",
            "Advisory on tax-exempt status",
            "Governance and structural guidance",
          ],
        },
      ],
      processHeading: "Our Process:",
      process: [
        "Consultation on the right legal structure",
        "Documentation and drafting of required deeds",
        "Submission and filing with regulatory authorities",
        "Approval and registration certificate",
        "Post-registration compliance setup",
      ],
      whyChooseUsHeading: "WHY CHOOSE US",
      whyChooseUs: [
        "Structured and process-driven approach",
        "Collaboration with qualified professionals",
        "Specialized knowledge in non-profit regulations",
        "Reliable and timely execution",
      ],
      faqHeading: "FAQ",
      faqs: [
        {
          question: "What is the difference between a Trust and a Society?",
          answer:
            "Trusts are generally governed by the Indian Trusts Act, while Societies are registered under the Societies Registration Act, each having different governance structures.",
        },
        {
          question: "What is 12A and 80G registration?",
          answer:
            "12A provides tax exemption to the NGO, while 80G allow donors to claim tax deductions on their contributions.",
        },
        {
          question: "How long does NGO registration take?",
          answer:
            "It typically takes 15–30 days depending on the structure and regulatory approvals.",
        },
        {
          question: "Can I register an NGO in a Section 8 format?",
          answer:
            "Yes, Section 8 is a popular format for NGOs as it provides a corporate structure with non-profit objectives.",
        },
        {
          question: "Do you help with annual NGO filings?",
          answer:
            "Yes, we provide ongoing support for annual returns and compliance requirements.",
        },
      ],
      ctaTitle: "Planning to start a non-profit or register a trust?",
      ctaDescription:
        "We provide structured support for NGO, trust, and society registration.",
      ctaButton: "Schedule Consultation",
      ctaSmallText: "Confidential • Structured approach • Specialized NGO support",
    },
  },
  {
    title: "Accounting & Bookkeeping Services",
    slug: "accounting-bookkeeping",
    description:
      "Structured accounting, bookkeeping, and financial reporting support for businesses, startups, and professionals—ensuring accurate records, compliance, and financial clarity.",
    icon: BookOpen,
    details: {
      pageTitle:
        "Accounting & Bookkeeping Services in Bengaluru & Across India for Businesses & Professionals",
      heroTitle: "Accounting & Bookkeeping Services",
      heroSubtitle:
        "Structured accounting, bookkeeping, and financial reporting support for businesses, startups, and professionals—ensuring accurate records, compliance, and financial clarity.",
      heroButton: "Schedule Consultation",
      introductionTitle: "Introduction",
      introductionParagraphs: [
        "Maintaining accurate financial records is essential for every business—not only for compliance but also for making informed decisions and managing growth effectively.",
        "We provide accounting and bookkeeping services in Bengaluru and across India, supporting businesses, startups, and professionals with structured record-keeping, financial reporting, and compliance-ready data.",
        "Our approach focuses on accuracy, consistency, and clear financial visibility across your operations.",
        "Services are delivered through structured processes in collaboration with qualified professionals, ensuring consistency and reliability.",
        "Serving clients in Bengaluru and across India.",
      ],
      idealForHeading: "WHO THIS SERVICE IS FOR",
      idealForIntro: "This service is ideal for:",
      idealFor: [
        "Startups and growing businesses",
        "Small and medium enterprises (SMEs)",
        "Business owners requiring monthly accounting support",
        "Professionals (consultants, freelancers, doctors)",
        "Companies needing structured financial reporting (MIS)",
        "Businesses with GST and compliance requirements",
      ],
      ourServicesHeading: "OUR SERVICES",
      serviceGroups: [
        {
          title: "Bookkeeping & Accounting",
          items: [
            "Recording of financial transactions",
            "Maintenance of books of accounts",
            "Bank and ledger reconciliation",
            "Expense tracking and categorization",
          ],
        },
        {
          title: "Financial Reporting & MIS",
          items: [
            "Monthly financial statements",
            "Profit & Loss and Balance Sheet preparation",
            "MIS reports for business insights",
            "Cash flow tracking and analysis",
          ],
        },
        {
          title: "Compliance-Ready Accounting",
          items: [
            "Accounting aligned with GST and tax requirements",
            "Data preparation for income tax filing",
            "Support for audits and compliance reviews",
            "Documentation and record management",
          ],
        },
        {
          title: "Accounting Advisory & Support",
          items: [
            "Guidance on accounting systems and processes",
            "Support in setting up accounting workflows",
            "Coordination with tax and compliance requirements",
            "Ongoing financial support",
          ],
        },
      ],
      howWeWorkHeading: "HOW WE WORK",
      processHeading: "Our Process:",
      process: [
        "Understanding your business and accounting requirements",
        "Setting up or reviewing accounting systems",
        "Recording and organizing financial data",
        "Preparing reports and compliance-ready data",
        "Ongoing support and regular updates",
      ],
      whyChooseUsHeading: "WHY CHOOSE US",
      whyChooseUs: [
        "Structured and process-driven approach",
        "Collaboration with qualified professionals",
        "Consistent and accurate reporting",
        "Reliable and timely support",
      ],
      faqHeading: "FAQ",
      faqs: [
        {
          question: "Do small businesses need bookkeeping services?",
          answer:
            "Yes, maintaining proper books is essential for compliance, tax filing, and understanding business performance.",
        },
        {
          question: "How often should accounting be updated?",
          answer:
            "Ideally, accounting should be updated monthly to ensure accurate reporting and compliance.",
        },
        {
          question: "Can you handle GST-related accounting?",
          answer:
            "Yes, our accounting is aligned with GST compliance, including reconciliation and reporting.",
        },
        {
          question: "Will I get financial reports regularly?",
          answer:
            "Yes, we provide structured reports such as Profit & Loss, Balance Sheet, and MIS reports.",
        },
        {
          question: "Do you support audit requirements?",
          answer:
            "Yes, we prepare data and support coordination for audits and compliance reviews.",
        },
      ],
      ctaTitle: "Looking for structured accounting and financial clarity?",
      ctaDescription:
        "We provide reliable bookkeeping and accounting support to help your business stay organized, compliant, and informed.",
      ctaButton: "Discuss Your Requirement",
      ctaSmallText: "Confidential • Structured approach • Ongoing support",
    },
  },
  {
    title: "ROC Compliance & Corporate Filing Services",
    slug: "roc-compliance",
    description:
      "Structured support for company law compliance, ROC filings, and regulatory requirements—ensuring your business stays compliant, organized, and risk-free.",
    icon: ShieldCheck,
    details: {
      pageTitle:
        "ROC Compliance & Corporate Filing Services in Bengaluru & Across India",
      heroTitle: "ROC Compliance & Corporate Filing Services",
      heroSubtitle:
        "Structured support for company law compliance, ROC filings, and regulatory requirements—ensuring your business stays compliant, organized, and risk-free.",
      heroButton: "Schedule Consultation",
      introductionTitle: "Introduction",
      introductionParagraphs: [
        "Companies and LLPs in India are required to comply with various regulatory filings under the Companies Act and related laws. Missing deadlines or incorrect filings can lead to penalties, disqualification of directors, and legal complications.",
        "We provide ROC compliance and corporate filing services in Bengaluru and across India, supporting companies, LLPs, and business entities with structured compliance management and timely filings.",
        "Our approach focuses on ensuring accuracy, consistency, and complete adherence to statutory requirements.",
        "Services are delivered through structured processes in collaboration with qualified professionals, ensuring consistency and reliability.",
        "Serving clients in Bengaluru and across India.",
      ],
      idealForHeading: "WHO THIS SERVICE IS FOR",
      idealForIntro: "This service is ideal for:",
      idealFor: [
        "Private Limited Companies",
        "Limited Liability Partnerships (LLPs)",
        "Startups and growing businesses",
        "Companies requiring annual ROC compliance",
        "Businesses needing ongoing secretarial support",
        "Directors managing statutory obligations",
      ],
      ourServicesHeading: "OUR SERVICES",
      serviceGroups: [
        {
          title: "Annual ROC Filings",
          items: [
            "Filing of annual returns (AOC-4, MGT-7)",
            "Financial statement filing",
            "Director’s report and related compliance",
            "LLP annual filings (Form 8, Form 11)",
          ],
        },
        {
          title: "Event-Based Filings",
          items: [
            "Director appointment and resignation filings",
            "Change in registered office",
            "Shareholding and capital changes",
            "Other MCA-based filings and updates",
          ],
        },
        {
          title: "Corporate Compliance Management",
          items: [
            "Compliance calendar and tracking",
            "Advisory on Companies Act requirements",
            "Maintenance of statutory records",
            "Ongoing compliance monitoring",
          ],
        },
        {
          title: "Secretarial & Advisory Support",
          items: [
            "Support in board resolutions and documentation",
            "Coordination with qualified professionals",
            "Guidance on regulatory requirements",
            "Assistance in compliance-related queries",
          ],
        },
      ],
      howWeWorkHeading: "HOW WE WORK",
      processHeading: "Our Process:",
      process: [
        "Understanding your business structure and compliance needs",
        "Reviewing current compliance status",
        "Preparing required documents and filings",
        "Submission and tracking of filings",
        "Ongoing compliance monitoring and support",
      ],
      whyChooseUsHeading: "WHY CHOOSE US",
      whyChooseUs: [
        "Structured and process-driven approach",
        "Collaboration with qualified professionals",
        "Clear guidance on business structuring",
        "Reliable and timely execution",
      ],
      faqHeading: "FAQ",
      faqs: [
        {
          question: "What is ROC compliance?",
          answer:
            "ROC compliance refers to mandatory filings and regulatory requirements that companies and LLPs must follow under the Companies Act.",
        },
        {
          question: "What are annual ROC filings?",
          answer:
            "Annual filings include submission of financial statements and annual returns such as AOC-4 and MGT-7.",
        },
        {
          question: "What happens if ROC filings are missed?",
          answer:
            "Delays can result in penalties, additional fees, and potential disqualification of directors.",
        },
        {
          question: "Is ROC compliance required for LLPs?",
          answer:
            "Yes, LLPs must file annual returns and statements of accounts under applicable regulations.",
        },
        {
          question: "Do you provide ongoing compliance support?",
          answer:
            "Yes, we provide continuous monitoring, reminders, and filing support to ensure timely compliance.",
        },
      ],
      ctaTitle: "Need support with your company’s ROC compliance?",
      ctaDescription:
        "We provide structured and reliable support to ensure your filings are completed accurately and on time.",
      ctaButton: "Schedule Consultation",
      ctaSmallText: "Confidential • Structured approach • Ongoing compliance support",
    },
  },
  {
    title: "Payroll & HR Compliance Services",
    slug: "payroll-hr-compliance",
    description:
      "Structured payroll processing and statutory compliance support for businesses—ensuring accurate salary management, timely filings, and adherence to labour regulations.",
    icon: Wallet,
    details: {
      pageTitle:
        "Payroll & HR Compliance Services in Bengaluru & Across India",
      heroTitle: "Payroll & HR Compliance Services",
      heroSubtitle:
        "Structured payroll processing and statutory compliance support for businesses—ensuring accurate salary management, timely filings, and adherence to labour regulations.",
      heroButton: "Schedule Consultation",
      introductionTitle: "Introduction",
      introductionParagraphs: [
        "Managing payroll and employee-related compliance is essential for businesses to ensure smooth operations and regulatory adherence. Errors or delays in payroll processing and statutory filings can lead to penalties and employee dissatisfaction.",
        "We provide payroll and HR compliance services in Bengaluru and across India, supporting businesses with structured payroll processing and compliance under applicable labour laws.",
        "Our approach focuses on accuracy, consistency, and timely compliance with statutory requirements.",
        "Services are delivered through structured processes in collaboration with qualified professionals, ensuring consistency and reliability.",
        "Serving clients in Bengaluru and across India.",
      ],
      idealForHeading: "WHO THIS SERVICE IS FOR",
      idealForIntro: "This service is ideal for:",
      idealFor: [
        "Startups and growing businesses with employees",
        "SMEs managing payroll and compliance internally",
        "Companies requiring PF, ESI, and payroll support",
        "Businesses expanding workforce and operations",
        "Organizations needing structured HR compliance processes",
      ],
      ourServicesHeading: "OUR SERVICES",
      serviceGroups: [
        {
          title: "Payroll Processing & Management",
          items: [
            "Monthly salary computation and processing",
            "Payslip generation and payroll reports",
            "Leave, bonus, and reimbursement tracking",
            "Salary structuring and breakdown",
          ],
        },
        {
          title: "PF (Provident Fund) Compliance",
          items: [
            "PF registration and setup",
            "Monthly PF return filing",
            "Employee and employer contribution management",
            "PF compliance and documentation support",
          ],
        },
        {
          title: "ESI (Employee State Insurance) Compliance",
          items: [
            "ESI registration and setup",
            "Monthly ESI return filing",
            "Contribution calculation and reporting",
            "ESI compliance support",
          ],
        },
        {
          title: "Labour Law & Statutory Compliance",
          items: [
            "Compliance with applicable labour laws",
            "Maintenance of statutory records and registers",
            "Advisory on employee-related compliance",
            "Ongoing compliance tracking and support",
          ],
        },
      ],
      howWeWorkHeading: "HOW WE WORK",
      processHeading: "Our Process:",
      process: [
        "Understanding your workforce and payroll structure",
        "Setting up payroll and compliance systems",
        "Monthly payroll processing and statutory calculations",
        "Filing returns and maintaining records",
        "Ongoing compliance monitoring and support",
      ],
      whyChooseUsHeading: "WHY CHOOSE US",
      whyChooseUs: [
        "Structured and process-driven approach",
        "Collaboration with qualified professionals",
        "Accurate and timely payroll processing",
        "Reliable compliance support",
      ],
      faqHeading: "FAQ",
      faqs: [
        {
          question: "Is payroll compliance mandatory for all businesses?",
          answer:
            "Yes, businesses with employees must comply with applicable payroll and labour laws such as PF and ESI.",
        },
        {
          question: "What is PF and who needs to comply?",
          answer:
            "Provident Fund (PF) is a statutory requirement for eligible businesses and employees as per government regulations.",
        },
        {
          question: "What is ESI compliance?",
          answer:
            "ESI is a social security scheme requiring contributions from employers and employees for medical and related benefits.",
        },
        {
          question: "Can you handle monthly payroll processing?",
          answer:
            "Yes, we provide end-to-end payroll processing including salary computation, payslips, and statutory filings.",
        },
        {
          question: "Do you provide ongoing compliance support?",
          answer:
            "Yes, we provide continuous support for payroll, PF, ESI, and related compliance requirements.",
        },
      ],
      ctaTitle: "Need support with payroll and employee compliance?",
      ctaDescription:
        "We provide structured payroll and compliance services to help your business manage employees efficiently and stay compliant.",
      ctaButton: "Talk to Our Team",
      ctaSmallText: "Confidential • Structured approach • Ongoing support",
    },
  },
  {
    title: "Audit Support & Financial Review Services",
    slug: "audit-support",
    description:
      "Structured support for audit preparation, financial review, and compliance coordination—delivered in collaboration with qualified professionals.",
    icon: Search,
    details: {
      pageTitle:
        "Audit Support & Financial Review Services in Bengaluru & Across India",
      heroTitle: "Audit Support & Financial Review Services",
      heroSubtitle:
        "Structured support for audit preparation, financial review, and compliance coordination—delivered in collaboration with qualified professionals.",
      heroButton: "Schedule Consultation",
      introductionTitle: "Introduction",
      introductionParagraphs: [
        "Audit processes require accurate financial records, proper documentation, and coordination with qualified professionals to ensure smooth completion.",
        "We provide audit support and financial review services in Bengaluru and across India, assisting businesses in preparing for audits, organizing financial data, and ensuring compliance readiness.",
        "Services are delivered through structured processes in collaboration with qualified professionals, ensuring consistency and reliability.",
        "Serving clients in Bengaluru and across India.",
      ],
      idealForIntro: "This service is ideal for:",
      idealFor: [
        "Businesses undergoing statutory audits",
        "Companies requiring audit preparation support",
        "Startups preparing for due diligence",
        "Businesses needing financial review and clean-up",
        "Companies coordinating with auditors",
      ],
      ourServicesHeading: "OUR SERVICES",
      serviceGroups: [
        {
          title: "Audit Preparation & Support",
          items: [
            "Preparation of financial records for audit",
            "Organization of books and documentation",
            "Support during audit process",
            "Coordination with auditors",
          ],
        },
        {
          title: "Financial Review & Clean-Up",
          items: [
            "Review of books and financial records",
            "Identification of discrepancies and corrections",
            "Data reconciliation and validation",
            "Improving financial accuracy",
          ],
        },
        {
          title: "Compliance & Documentation Support",
          items: [
            "Preparation of compliance-related documents",
            "Supporting schedules and working papers",
            "Assistance in audit queries and clarifications",
            "Ensuring documentation readiness",
          ],
        },
        {
          title: "Due Diligence & Review Support",
          items: [
            "Financial data preparation for due diligence",
            "Support in investor or transaction reviews",
            "Financial analysis and reporting",
            "Coordination with stakeholders",
          ],
        },
      ],
      howWeWorkHeading: "HOW WE WORK",
      processHeading: "Our Process:",
      process: [
        "Understanding audit requirements and scope",
        "Reviewing financial records and documentation",
        "Preparing audit-ready data and reports",
        "Coordinating with auditors and stakeholders",
        "Supporting closure and follow-ups",
      ],
      whyChooseUsHeading: "WHY CHOOSE US",
      whyChooseUs: [],
      faqHeading: "FAQ",
      faqs: [
        {
          question: "Do you conduct audits?",
          answer:
            "We provide audit support and coordination services in collaboration with qualified Chartered Accountants.",
        },
        {
          question: "What is audit support?",
          answer:
            "Audit support involves preparing financial records, documentation, and assisting throughout the audit process.",
        },
        {
          question: "Can you help prepare for statutory audits?",
          answer:
            "Yes, we assist in organizing financial data and ensuring audit readiness.",
        },
        {
          question: "Do you assist with due diligence?",
          answer:
            "Yes, we support financial preparation and coordination for due diligence processes.",
        },
        {
          question: "Is this service suitable for startups?",
          answer:
            "Yes, especially for startups preparing for funding or financial reviews.",
        },
      ],
      ctaTitle: "Preparing for an audit or financial review?",
      ctaDescription:
        "We provide structured support to ensure your audit process is smooth, organized, and compliant.",
      ctaButton: "Schedule Consultation",
      ctaSmallText: "Confidential • Structured approach • Professional coordination",
    },
  },
];

export const quoteFormServices = services.map((s) => s.title).concat("Other Services");
