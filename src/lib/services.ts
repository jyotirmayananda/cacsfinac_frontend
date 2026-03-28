import type { LucideIcon } from "lucide-react";
import {
  FileText,
  CheckSquare,
  Briefcase,
  Globe,
  Building,
  Calculator,
  ShieldCheck,
  Users,
  Search,
  PieChart,
  UserPlus,
  BookOpen,
  ClipboardCheck,
  CreditCard,
  FileSearch,
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
  heroTitle: string;
  heroSubtitle: string;
  introduction: string;
  idealFor: string[];
  serviceGroups: ServiceFeature[];
  process: string[];
  whyChooseUs: string[];
  faqs: ServiceFAQ[];
  ctaTitle: string;
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
    title: "Income Tax Filing",
    slug: "income-tax-filing",
    description: "Income Tax Filing & Tax Advisory Services for individuals and businesses.",
    icon: FileText,
    details: {
      heroTitle: "Income Tax Filing & Tax Advisory Services",
      heroSubtitle: "Structured income tax filing and advisory support for individuals, professionals, businesses, and NRIs—ensuring accuracy, compliance, and clarity.",
      introduction: "Managing income tax can be complex, especially with multiple income sources, changing regulations, and compliance requirements. We provide structured income tax filing services in Bengaluru and across India, supporting individuals, professionals, business owners, and NRI clients with accurate filings, proper documentation, and practical tax guidance.",
      idealFor: [
        "Salaried individuals",
        "Freelancers and consultants",
        "Business owners and professionals",
        "Startup founders",
        "NRIs with Indian income",
        "Investors (capital gains, crypto, F&O trading)"
      ],
      serviceGroups: [
        {
          title: "Direct Tax Advisory & Filing",
          items: [
            "Income tax return filing for individuals and businesses",
            "Capital gains reporting (shares, mutual funds, property)",
            "Presumptive taxation (44AD / 44ADA)",
            "Tax planning and optimization",
            "Multiple income source reporting"
          ]
        },
        {
          title: "NRI Taxation & Compliance",
          items: [
            "NRI income tax filing in India",
            "DTAA (Double Taxation Avoidance Agreement) advisory",
            "Foreign income reporting",
            "Residential status determination",
            "Capital gains for NRI property transactions"
          ]
        },
        {
          title: "Tax Notices & Compliance Support",
          items: [
            "Income tax notice handling and response",
            "Rectification and revised filings",
            "Compliance review and correction",
            "Ongoing support for tax-related queries"
          ]
        }
      ],
      process: [
        "Share your details securely",
        "Review and validation of documents",
        "Tax computation and optimization",
        "Filing and confirmation",
        "Post-filing support and assistance"
      ],
      whyChooseUs: [
        "Structured and process-driven approach",
        "Collaboration with qualified professionals",
        "Clear communication and practical guidance",
        "Reliable and timely execution"
      ],
      faqs: [
        {
          question: "Who is required to file an income tax return in India?",
          answer: "Individuals earning above the prescribed limit, businesses, professionals, and NRIs with taxable income in India are required to file returns."
        },
        {
          question: "What documents are required for income tax filing?",
          answer: "Common documents include PAN, Aadhaar, Form 16, bank statements, investment proofs, and details of income sources."
        },
        {
          question: "Can NRIs file income tax returns in India?",
          answer: "Yes, NRIs earning income in India (such as rent, capital gains, or interest) are required to file returns."
        },
        {
          question: "What happens if I do not file my income tax return?",
          answer: "Non-filing can result in penalties, interest, and notices from the income tax department."
        },
        {
          question: "Can you help with multiple income sources?",
          answer: "Yes, we handle salary, business income, capital gains, crypto, and other income sources."
        }
      ],
      ctaTitle: "Need help with your income tax filing?",
      ctaButton: "Schedule Consultation",
      ctaSmallText: "Confidential • Structured approach • Timely response"
    }
  },
  {
    title: "GST Compliance",
    slug: "gst-services",
    description: "Structured GST registration, filing, and compliance support for businesses.",
    icon: CheckSquare,
    details: {
      heroTitle: "GST Registration & Compliance Services",
      heroSubtitle: "Structured GST registration, filing, and compliance support for businesses, startups, and professionals—ensuring accuracy, timely filing, and regulatory compliance.",
      introduction: "Goods and Services Tax (GST) compliance is critical for businesses operating in India. Managing registrations, returns, and ongoing compliance can become complex without a structured approach. We provide GST registration and compliance services in Bengaluru and across India.",
      idealFor: [
        "Startups and newly registered businesses",
        "Small and medium enterprises (SMEs)",
        "E-commerce sellers and online businesses",
        "Service providers and consultants",
        "Businesses requiring GST registration",
        "Companies with multi-state operations"
      ],
      serviceGroups: [
        {
          title: "GST Registration & Setup",
          items: [
            "GST registration for businesses and professionals",
            "Advisory on GST applicability and thresholds",
            "Multi-state registration support",
            "Amendment and modification of GST details"
          ]
        },
        {
          title: "GST Return Filing & Compliance",
          items: [
            "Monthly and quarterly GST return filing",
            "GSTR-1, GSTR-3B, and annual returns",
            "Input Tax Credit (ITC) reconciliation",
            "GST ledger review and compliance checks"
          ]
        },
        {
          title: "GST Advisory & Support",
          items: [
            "GST compliance review and guidance",
            "Handling GST notices and responses",
            "Support for GST audits",
            "Ongoing advisory for business transactions"
          ]
        }
      ],
      process: [
        "Understanding your business and GST requirements",
        "Document collection and validation",
        "GST registration / return preparation",
        "Filing and compliance tracking",
        "Ongoing support and advisory"
      ],
      whyChooseUs: [
        "Structured and process-driven approach",
        "Collaboration with qualified professionals",
        "Clear communication and compliance guidance",
        "Reliable and timely execution"
      ],
      faqs: [
        {
          question: "Who needs GST registration in India?",
          answer: "Businesses exceeding the prescribed turnover limits, e-commerce sellers, and certain service providers are required to register under GST."
        },
        {
          question: "What documents are required for GST registration?",
          answer: "PAN, Aadhaar, business address proof, bank details, and incorporation documents are commonly required."
        },
        {
          question: "How often are GST returns filed?",
          answer: "GST returns are typically filed monthly or quarterly depending on the scheme applicable to the business."
        },
        {
          question: "What is Input Tax Credit (ITC)?",
          answer: "ITC allows businesses to claim credit for GST paid on purchases against their GST liability."
        },
        {
          question: "Can you help with GST notices?",
          answer: "Yes, we provide support for handling GST notices, responses, and compliance issues."
        }
      ],
      ctaTitle: "Need support with GST registration or compliance?",
      ctaButton: "Schedule Consultation",
      ctaSmallText: "Confidential • Structured approach • Timely response"
    }
  },
  {
    title: "Virtual CFO",
    slug: "virtual-cfo",
    description: "Strategic financial management and advisory for startups and SMEs.",
    icon: PieChart,
    details: {
      heroTitle: "Virtual CFO & Financial Advisory Services",
      heroSubtitle: "Strategic financial management and advisory support for startups, SMEs, and growing businesses—helping you gain clarity, control, and direction in your financial operations.",
      introduction: "As businesses grow, managing finances becomes more complex—ranging from cash flow challenges and financial reporting to strategic decision-making. Our Virtual CFO services provide businesses with structured financial oversight and advisory support without the need for a full-time in-house CFO.",
      idealFor: [
        "Startups and early-stage companies",
        "Small and medium businesses (SMEs)",
        "Founders managing finances without a finance team",
        "Businesses preparing for funding or investor discussions",
        "Companies facing cash flow or profitability challenges",
        "Growing businesses needing structured financial systems"
      ],
      serviceGroups: [
        {
          title: "Financial Planning & Analysis",
          items: [
            "Budgeting and financial forecasting",
            "Cash flow planning and monitoring",
            "Profitability and cost analysis",
            "Financial performance tracking (MIS reporting)"
          ]
        },
        {
          title: "Business Financial Management",
          items: [
            "Structuring financial processes and controls",
            "Expense tracking and optimization",
            "Working capital management",
            "Financial reporting and insights"
          ]
        },
        {
          title: "Strategic Advisory & Decision Support",
          items: [
            "Business growth planning",
            "Pricing and cost strategy",
            "Support in key financial decisions",
            "Risk identification and mitigation"
          ]
        },
        {
          title: "Investor & Funding Support",
          items: [
            "Financial data preparation for investors",
            "Support in fundraising discussions",
            "Due diligence support",
            "Financial projections and valuation inputs"
          ]
        }
      ],
      process: [
        "Understanding your business and financial structure",
        "Reviewing existing financial data and processes",
        "Setting up structured reporting and controls",
        "Ongoing monitoring and advisory support",
        "Continuous improvement and strategic guidance"
      ],
      whyChooseUs: [
        "Structured and process-driven approach",
        "Collaboration with qualified professionals",
        "Clear financial insights and practical guidance",
        "Reliable and consistent advisory support"
      ],
      faqs: [
        {
          question: "What is a Virtual CFO?",
          answer: "A Virtual CFO provides financial strategy, reporting, and advisory support without being a full-time employee."
        },
        {
          question: "Do startups need a Virtual CFO?",
          answer: "Yes, especially during growth stages where financial planning, investor readiness, and cash flow management are critical."
        },
        {
          question: "How is this different from an accountant?",
          answer: "Accounting focuses on recording transactions, while a Virtual CFO focuses on financial strategy, planning, and decision-making."
        },
        {
          question: "Can you help with investor readiness?",
          answer: "Yes, we assist with financial reporting, projections, and preparation required for investor discussions."
        },
        {
          question: "Is this service suitable for small businesses?",
          answer: "Yes, it is ideal for businesses that need structured financial guidance without hiring a full-time CFO."
        }
      ],
      ctaTitle: "Looking for structured financial guidance for your business?",
      ctaButton: "Schedule Consultation",
      ctaSmallText: "Confidential • Structured approach • Ongoing support"
    }
  },
  {
    title: "NRI Taxation",
    slug: "nri-taxation",
    description: "Specialized tax advisory for NRIs with income or assets in India.",
    icon: Globe,
    details: {
      heroTitle: "NRI Taxation & Compliance Services",
      heroSubtitle: "Specialized tax advisory and compliance support for Non-Resident Indians (NRIs) with income, investments, or assets in India—ensuring accurate reporting and regulatory compliance.",
      introduction: "Managing taxation as a Non-Resident Indian (NRI) can be complex due to residential status rules, foreign income reporting, and applicable tax regulations in India. We provide structured NRI taxation services across Bengaluru and India.",
      idealFor: [
        "NRIs earning income in India (rent, interest, capital gains)",
        "Individuals with property transactions in India",
        "NRIs with investments in shares, mutual funds, or other assets",
        "Professionals working abroad with Indian income sources",
        "Individuals requiring DTAA (Double Taxation Avoidance Agreement) guidance",
        "Returning NRIs needing tax transition support"
      ],
      serviceGroups: [
        {
          title: "NRI Income Tax Filing",
          items: [
            "Income tax return filing for NRIs in India",
            "Reporting of rental income and property income",
            "Capital gains reporting (property, shares, mutual funds)",
            "Interest income reporting (NRO/NRE accounts)"
          ]
        },
        {
          title: "DTAA & Tax Advisory",
          items: [
            "Double Taxation Avoidance Agreement (DTAA) advisory",
            "Tax residency and applicability analysis",
            "Foreign income reporting guidance",
            "Tax optimization within legal framework"
          ]
        },
        {
          title: "Property & Investment Taxation",
          items: [
            "Tax implications on property sale and purchase",
            "Capital gains calculation for NRI property transactions",
            "TDS implications for NRI transactions",
            "Investment-related tax advisory"
          ]
        },
        {
          title: "Compliance & Notice Handling",
          items: [
            "Income tax notice response and handling",
            "Rectification and revised filings",
            "Compliance review and corrections",
            "Ongoing advisory support"
          ]
        }
      ],
      process: [
        "Understanding your residency status and income sources",
        "Reviewing financial documents and tax applicability",
        "Tax computation and compliance planning",
        "Filing and reporting as per regulations",
        "Ongoing support and advisory"
      ],
      whyChooseUs: [
        "Structured and process-driven approach",
        "Collaboration with qualified professionals",
        "Clear financial insights and practical guidance",
        "Reliable and consistent advisory support"
      ],
      faqs: [
        {
          question: "Do NRIs need to file income tax returns in India?",
          answer: "Yes, NRIs are required to file returns if they have taxable income in India such as rent, capital gains, or interest income."
        },
        {
          question: "What is DTAA and how does it help NRIs?",
          answer: "DTAA (Double Taxation Avoidance Agreement) helps avoid being taxed twice on the same income in two countries."
        },
        {
          question: "How is NRI residential status determined?",
          answer: "Residential status is determined based on the number of days an individual stays in India during a financial year."
        },
        {
          question: "Is TDS applicable for NRI property transactions?",
          answer: "Yes, TDS provisions apply differently for NRIs, especially in property transactions and certain income types."
        },
        {
          question: "Can you help NRIs with tax notices?",
          answer: "Yes, we provide support in handling notices, compliance issues, and rectifications."
        }
      ],
      ctaTitle: "Need support with your NRI taxation in India?",
      ctaButton: "Schedule Consultation",
      ctaSmallText: "Confidential • Structured approach • NRI-focused support"
    }
  },
  {
    title: "Company Setup",
    slug: "company-registration",
    description: "End-to-end support for business registration and initial setup.",
    icon: UserPlus,
    details: {
      heroTitle: "Company Registration & Business Setup Services",
      heroSubtitle: "Structured support for starting your business with the right legal structure, registrations, and compliance—ensuring a smooth and compliant setup from day one.",
      introduction: "Starting a business involves multiple decisions—choosing the right structure, completing registrations, and ensuring compliance with legal and regulatory requirements. We provide company registration and business setup services in Bengaluru and across India.",
      idealFor: [
        "Entrepreneurs starting a new business",
        "Startups and early-stage founders",
        "Professionals (consultants, freelancers, doctors)",
        "Businesses transitioning from proprietorship to company/LLP",
        "Individuals planning to formalize their operations",
        "Businesses expanding into new structures"
      ],
      serviceGroups: [
        {
          title: "Business Structure Advisory",
          items: [
            "Guidance on selecting the right business structure",
            "Comparison of Private Limited, LLP, and Proprietorship",
            "Understanding compliance, taxation, and scalability",
            "Structuring aligned with business goals"
          ]
        },
        {
          title: "Company & LLP Registration",
          items: [
            "Private Limited Company incorporation",
            "Limited Liability Partnership (LLP) registration",
            "One Person Company (OPC) registration",
            "Partnership firm setup"
          ]
        },
        {
          title: "Registrations & Licenses",
          items: [
            "PAN, TAN, and basic registrations",
            "GST registration",
            "MSME (Udyam) registration",
            "Shop & Establishment / Trade license support"
          ]
        },
        {
          title: "Post-Registration Compliance Support",
          items: [
            "ROC compliance and filings",
            "Basic accounting and compliance setup",
            "Advisory on statutory requirements",
            "Ongoing compliance support"
          ]
        }
      ],
      process: [
        "Understanding your business idea and requirements",
        "Advising on the right structure",
        "Document collection and preparation",
        "Registration and approval process",
        "Post-registration guidance and compliance setup"
      ],
      whyChooseUs: [
        "Structured and process-driven approach",
        "Collaboration with qualified professionals",
        "Clear guidance on business structuring",
        "Reliable and timely execution"
      ],
      faqs: [
        {
          question: "Which business structure is best for startups?",
          answer: "It depends on your business goals, funding plans, and compliance preferences. Private Limited and LLP are commonly used structures."
        },
        {
          question: "How long does company registration take?",
          answer: "Typically, it takes 7–15 working days depending on documentation and approvals."
        },
        {
          question: "What documents are required for company registration?",
          answer: "Common documents include PAN, Aadhaar, address proof, and business details."
        },
        {
          question: "Is GST registration mandatory for all businesses?",
          answer: "GST registration is required based on turnover thresholds and business type."
        },
        {
          question: "Do you provide post-registration support?",
          answer: "Yes, we provide ongoing compliance, accounting, and advisory support after registration."
        }
      ],
      ctaTitle: "Looking to start your business with the right structure?",
      ctaButton: "Schedule Consultation",
      ctaSmallText: "Confidential • Structured approach • End-to-end support"
    }
  },
  {
    title: "NGO & Trust Registration",
    slug: "ngo-trust-registration",
    description: "Specialized registrations for non-profits, trusts, and societies.",
    icon: Building,
    details: {
      heroTitle: "NGO, Trust & Society Registration Services",
      heroSubtitle: "Structured support for setting up non-profit organizations, trusts, and societies—ensuring legal compliance and regulatory registration.",
      introduction: "Establishing a non-profit organization (NGO), trust, or society requires adherence to specific legal frameworks and regulatory requirements. We provide end-to-end registration and compliance support for non-profit entities in Bengaluru and across India.",
      idealFor: [
        "Social entrepreneurs and philanthropists",
        "Groups planning to start a non-profit organization",
        "Trustees and board members",
        "Individuals starting educational or charitable societies",
        "Entities requiring 12A and 80G registrations"
      ],
      serviceGroups: [
        {
          title: "Registration & Incorporation",
          items: [
            "Public and Private Trust registration",
            "Society registration under applicable Acts",
            "Section 8 Company incorporation",
            "Drafting of Trust Deeds and Bye-laws"
          ]
        },
        {
          title: "Regulatory Registrations",
          items: [
            "12A and 80G registration for tax exemptions",
            "CSR (Corporate Social Responsibility) registration",
            "DARPAN (NITI Aayog) registration",
            "FCRA registration advisory"
          ]
        },
        {
          title: "Compliance & Advisory",
          items: [
            "Ongoing statutory compliance for NGOs",
            "Annual filing and reporting support",
            "Advisory on tax-exempt status",
            "Governance and structural guidance"
          ]
        }
      ],
      process: [
        "Consultation on the right legal structure",
        "Documentation and drafting of required deeds",
        "Submission and filing with regulatory authorities",
        "Approval and registration certificate",
        "Post-registration compliance setup"
      ],
      whyChooseUs: [
        "Structured and process-driven approach",
        "Collaboration with qualified professionals",
        "Specialized knowledge in non-profit regulations",
        "Reliable and timely execution"
      ],
      faqs: [
        {
          question: "What is the difference between a Trust and a Society?",
          answer: "Trusts are generally governed by the Indian Trusts Act, while Societies are registered under the Societies Registration Act, each having different governance structures."
        },
        {
          question: "What is 12A and 80G registration?",
          answer: "12A provides tax exemption to the NGO, while 80G allow donors to claim tax deductions on their contributions."
        },
        {
          question: "How long does NGO registration take?",
          answer: "It typically takes 15–30 days depending on the structure and regulatory approvals."
        },
        {
          question: "Can I register an NGO in a Section 8 format?",
          answer: "Yes, Section 8 is a popular format for NGOs as it provides a corporate structure with non-profit objectives."
        },
        {
          question: "Do you help with annual NGO filings?",
          answer: "Yes, we provide ongoing support for annual returns and compliance requirements."
        }
      ],
      ctaTitle: "Planning to start a non-profit or register a trust?",
      ctaButton: "Schedule Consultation",
      ctaSmallText: "Confidential • Structured approach • Specialized NGO support"
    }
  },
  {
    title: "ROC Compliance",
    slug: "roc-compliance",
    description: "Mandatory company law filings and regulatory compliance.",
    icon: ShieldCheck,
    details: {
      heroTitle: "ROC Compliance & Corporate Filing Services",
      heroSubtitle: "Structured support for company law compliance, ROC filings, and regulatory requirements—ensuring your business stays compliant, organized, and risk-free.",
      introduction: "Companies and LLPs in India are required to comply with various regulatory filings under the Companies Act and related laws. Missing deadlines or incorrect filings can lead to penalties, disqualification of directors, and legal complications.",
      idealFor: [
        "Private Limited Companies",
        "Limited Liability Partnerships (LLPs)",
        "Startups and growing businesses",
        "Companies requiring annual ROC compliance",
        "Businesses needing ongoing secretarial support",
        "Directors managing statutory obligations"
      ],
      serviceGroups: [
        {
          title: "Annual ROC Filings",
          items: [
            "Filing of annual returns (AOC-4, MGT-7)",
            "Financial statement filing",
            "Director’s report and related compliance",
            "LLP annual filings (Form 8, Form 11)"
          ]
        },
        {
          title: "Event-Based Filings",
          items: [
            "Director appointment and resignation filings",
            "Change in registered office",
            "Shareholding and capital changes",
            "Other MCA-based filings and updates"
          ]
        },
        {
          title: "Corporate Compliance Management",
          items: [
            "Compliance calendar and tracking",
            "Advisory on Companies Act requirements",
            "Maintenance of statutory records",
            "Ongoing compliance monitoring"
          ]
        },
        {
          title: "Secretarial & Advisory Support",
          items: [
            "Support in board resolutions and documentation",
            "Coordination with qualified professionals",
            "Guidance on regulatory requirements",
            "Assistance in compliance-related queries"
          ]
        }
      ],
      process: [
        "Understanding your business structure and compliance needs",
        "Reviewing current compliance status",
        "Preparing required documents and filings",
        "Submission and tracking of filings",
        "Ongoing compliance monitoring and support"
      ],
      whyChooseUs: [
        "Structured and process-driven approach",
        "Collaboration with qualified professionals",
        "Clear guidance on business structuring",
        "Reliable and timely execution"
      ],
      faqs: [
        {
          question: "What is ROC compliance?",
          answer: "ROC compliance refers to mandatory filings and regulatory requirements that companies and LLPs must follow under the Companies Act."
        },
        {
          question: "What are annual ROC filings?",
          answer: "Annual filings include submission of financial statements and annual returns such as AOC-4 and MGT-7."
        },
        {
          question: "What happens if ROC filings are missed?",
          answer: "Delays can result in penalties, additional fees, and potential disqualification of directors."
        },
        {
          question: "Is ROC compliance required for LLPs?",
          answer: "Yes, LLPs must file annual returns and statements of accounts under applicable regulations."
        },
        {
          question: "Do you provide ongoing compliance support?",
          answer: "Yes, we provide continuous monitoring, reminders, and filing support to ensure timely compliance."
        }
      ],
      ctaTitle: "Need support with your company’s ROC compliance?",
      ctaButton: "Schedule Consultation",
      ctaSmallText: "Confidential • Structured approach • Ongoing compliance support"
    }
  },
  {
    title: "Audit Support",
    slug: "audit-support",
    description: "Preparation and coordination for statutory and internal audits.",
    icon: Search,
    details: {
      heroTitle: "Audit Support & Financial Review Services",
      heroSubtitle: "Structured support for audit preparation, financial review, and compliance coordination—delivered in collaboration with qualified professionals.",
      introduction: "Audit processes require accurate financial records, proper documentation, and coordination with qualified professionals to ensure smooth completion. We provide audit support and financial review services in Bengaluru and across India.",
      idealFor: [
        "Businesses undergoing statutory audits",
        "Companies requiring audit preparation support",
        "Startups preparing for due diligence",
        "Businesses needing financial review and clean-up",
        "Companies coordinating with auditors"
      ],
      serviceGroups: [
        {
          title: "Audit Preparation & Support",
          items: [
            "Preparation of financial records for audit",
            "Organization of books and documentation",
            "Support during audit process",
            "Coordination with auditors"
          ]
        },
        {
          title: "Financial Review & Clean-Up",
          items: [
            "Review of books and financial records",
            "Identification of discrepancies and corrections",
            "Data reconciliation and validation",
            "Improving financial accuracy"
          ]
        },
        {
          title: "Compliance & Documentation Support",
          items: [
            "Preparation of compliance-related documents",
            "Supporting schedules and working papers",
            "Assistance in audit queries and clarifications",
            "Ensuring documentation readiness"
          ]
        },
        {
          title: "Due Diligence & Review Support",
          items: [
            "Financial data preparation for due diligence",
            "Support in investor or transaction reviews",
            "Financial analysis and reporting",
            "Coordination with stakeholders"
          ]
        }
      ],
      process: [
        "Understanding audit requirements and scope",
        "Reviewing financial records and documentation",
        "Preparing audit-ready data and reports",
        "Coordinating with auditors and stakeholders",
        "Supporting closure and follow-ups"
      ],
      whyChooseUs: [
        "Structured and process-driven approach",
        "Collaboration with qualified professionals",
        "High degree of accuracy and reliability",
        "Smooth audit coordination"
      ],
      faqs: [
        {
          question: "Do you conduct audits?",
          answer: "We provide audit support and coordination services in collaboration with qualified Chartered Accountants."
        },
        {
          question: "What is audit support?",
          answer: "Audit support involves preparing financial records, documentation, and assisting throughout the audit process."
        },
        {
          question: "Can you help prepare for statutory audits?",
          answer: "Yes, we assist in organizing financial data and ensuring audit readiness."
        },
        {
          question: "Do you assist with due diligence?",
          answer: "Yes, we support financial preparation and coordination for due diligence processes."
        },
        {
          question: "Is this service suitable for startups?",
          answer: "Yes, especially for startups preparing for funding or financial reviews."
        }
      ],
      ctaTitle: "Preparing for an audit or financial review?",
      ctaButton: "Schedule Consultation",
      ctaSmallText: "Confidential • Structured approach • Professional coordination"
    }
  },
  {
    title: "Other Registrations",
    slug: "other-registrations",
    description: "FSSAI, MSME, Import Export Code, and other business licenses.",
    icon: Calculator,
    details: {
      heroTitle: "Business Licenses & Other Statutory Registrations",
      heroSubtitle: "Comprehensive support for obtaining essential business licenses, registrations, and certifications—ensuring your business is fully compliant and operational.",
      introduction: "Depending on the industry and nature of operations, businesses require various licenses and registrations to operate legally in India. Managing multiple registrations can be overwhelming. We provide structured support for all essential business licenses and registrations.",
      idealFor: [
        "Startups and newly incorporated businesses",
        "Manufacturers and food business operators",
        "Exporters and importers",
        "SMEs requiring specialized licenses",
        "Retailers and service providers"
      ],
      serviceGroups: [
        {
          title: "Essential Business Registrations",
          items: [
            "MSME (Udyam) registration",
            "Import Export Code (IEC) registration",
            "FSSAI (Food License) registration",
            "MSME and Startup India registration"
          ]
        },
        {
          title: "Statutory & Labor Registrations",
          items: [
            "EPF and ESI registration",
            "Professional Tax (PT) registration",
            "Shop & Establishment registration",
            "Trade license support"
          ]
        },
        {
          title: "Other Compliance Certificates",
          items: [
            "Udyam registration and benefits",
            "PF/ESI compliance setup",
            "Regulatory certificates as per industry",
            "Guidance on statutory requirements"
          ]
        }
      ],
      process: [
        "Assessment of required licenses for your business",
        "Collection and review of documents",
        "Filing and submission with authorities",
        "Tracking and obtaining certificates",
        "Guidance on license maintenance"
      ],
      whyChooseUs: [
        "Structured and process-driven approach",
        "Collaboration with qualified professionals",
        "Single platform for multiple registrations",
        "Reliable and timely execution"
      ],
      faqs: [
        {
          question: "What is MSME (Udyam) registration?",
          answer: "Udyam registration is for micro, small, and medium enterprises to avail government benefits and subsidies."
        },
        {
          question: "Who needs an Import Export Code (IEC)?",
          answer: "Anyone planning to export or import goods or services from/to India requires an IEC."
        },
        {
          question: "What is FSSAI license?",
          answer: "FSSAI registration is mandatory for any business involved in food manufacturing, processing, or distribution."
        },
        {
          question: "Is Professional Tax mandatory for all states?",
          answer: "Professional Tax is a state-level tax and its requirement varies across states in India."
        },
        {
          question: "Can you help with PF/ESI registration?",
          answer: "Yes, we handle statutory registrations for employees including Provident Fund and State Insurance."
        }
      ],
      ctaTitle: "Need help with any business license or registration?",
      ctaButton: "Get Registered Now",
      ctaSmallText: "Confidential • Structured approach • Fast-track support"
    }
  }
];

export const quoteFormServices = services.map(s => s.title).concat("Other Services");
