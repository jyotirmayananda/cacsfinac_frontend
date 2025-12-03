
import type { LucideIcon } from 'lucide-react';
import { Briefcase, FileText, CheckSquare, File, Barcode, Shield, FileSignature, FileUp, Building, Wallet, FileBarChart, FileCheck, FileSearch, FileX2, Repeat, Import, FileCode, Users, PersonStanding, Building2, User, Landmark, FileClock } from 'lucide-react';

export interface Service {
  title: string;
  slug: string;
  description: string;
  icon: LucideIcon;
}

export interface ServiceCategory {
  title: string;
  slug: string;
  description: string;
  icon: LucideIcon;
  services: Service[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    title: 'Registrations',
    slug: 'registration',
    description: 'Establish your business legally.',
    icon: Briefcase,
    services: [
      { title: 'APEDA Registration', slug: 'apeda', description: 'For agricultural and processed food products export.', icon: File },
      { title: 'Barcode Registration', slug: 'barcode-registration', description: 'Unique product identification codes.', icon: Barcode },
      { title: 'ESI Registration', slug: 'esi-registration', description: 'Employee State Insurance scheme registration.', icon: Shield },
      { title: 'FSSAI Registration', slug: 'fssai-registration', description: 'Mandatory for food business operators.', icon: FileSignature },
      { title: 'FSSAI License', slug: 'fssai-license', description: 'License for food business operation.', icon: FileUp },
      { title: 'GST, PF, PT Registration', slug: 'gst-pf-pt-registration', description: 'Multiple tax and fund registrations.', icon: Building },
      { title: 'Import Export Code', slug: 'iec', description: 'IEC for import/export businesses.', icon: Import },
      { title: 'Legal Entity Identifier Code', slug: 'lei-registration', description: 'LEI code registration.', icon: FileCode },
      { title: 'Limited Liability Partnership', slug: 'llp', description: 'LLP registration.', icon: Users },
      { title: 'MSME Registration', slug: 'msme-registration', description: 'MSME registration for small businesses.', icon: Building2 },
      { title: 'One Person Company', slug: 'opc', description: 'Registration for one-person companies.', icon: PersonStanding },
      { title: 'Private Limited', slug: 'private-ltd', description: 'Private limited company registration.', icon: Building },
      { title: 'Sole Proprietorship', slug: 'sole-proprietorship', description: 'For single-owner businesses.', icon: User },
      { title: 'Trade License', slug: 'trade-license', description: 'License to operate a business.', icon: FileText },
      { title: 'Trust Registration', slug: 'trust-registration', description: 'Registration of a trust.', icon: Landmark },
    ],
  },
  {
    title: 'Tax Filings',
    slug: 'tax-filing',
    description: 'Stay compliant with tax regulations.',
    icon: FileText,
    services: [
      { title: '15CA & 15CB Filing', slug: '15ca-15cb-filing', description: 'For foreign remittances.', icon: Wallet },
      { title: 'Business Tax Filings', slug: 'business-tax-filings', description: 'Corporate and business tax return filings.', icon: Briefcase },
      { title: 'ESI Return Filings', slug: 'esi-return-filings', description: 'ESI return filings.', icon: FileBarChart },
      { title: 'GST Returns', slug: 'gst-returns', description: 'Monthly, quarterly, and annual GST return filings.', icon: FileCheck },
      { title: 'Income Tax Notice', slug: 'income-tax-notice', description: 'Responding to income tax notices.', icon: FileSearch },
      { title: 'Income Tax Return Filing', slug: 'income-tax-return-filing', description: 'Filing of income tax returns.', icon: FileText },
      { title: 'ITR-1 Return Filing', slug: 'itr-1-filing', description: 'ITR-1 return filing services.', icon: FileText },
      { title: 'ITR-2 Return Filing', slug: 'itr-2-filing', description: 'ITR-2 return filing services.', icon: FileText },
      { title: 'ITR-3 Return Filing', slug: 'itr-3-filing', description: 'ITR-3 return filing services.', icon: FileText },
      { title: 'ITR-4 Return Filing', slug: 'itr-4-filing', description: 'ITR-4 return filing services.', icon: FileText },
      { title: 'ITR-5 Return Filing', slug: 'itr-5-filing', description: 'ITR-5 return filing services.', icon: FileText },
      { title: 'ITR-6 Return Filing', slug: 'itr-6-filing', description: 'ITR-6 return filing services.', icon: FileText },
      { title: 'ITR-7 Return Filing', slug: 'itr-7-filing', description: 'ITR-7 return filing services.', icon: FileText },
      { title: 'PF & PT Return Filings', slug: 'pf-pt-return-filings', description: 'PF and PT return filings.', icon: FileCheck },
      { title: 'TAN Registration', slug: 'tan-registration', description: 'TAN registration for TDS.', icon: FileSignature },
      { title: 'TDS Return Filings', slug: 'tds-return-filings', description: 'TDS return filing services.', icon: FileCheck },
    ],
  },
  {
    title: 'Compliances',
    slug: 'compliance',
    description: 'Manage your ongoing compliance.',
    icon: CheckSquare,
    services: [
      { title: 'Bookkeeping', slug: 'bookkeeping', description: 'Maintain accurate and up-to-date financial records.', icon: File },
      { title: 'Business Plan', slug: 'business-plan', description: 'Strategic business planning.', icon: FileBarChart },
      { title: 'Virtual CFO Services', slug: 'cfo-services', description: 'Strategic financial leadership for your business.', icon: Briefcase },
      { title: 'DPT-3 Filings', slug: 'dpt-3-filings', description: 'Return of deposits filing.', icon: FileCheck },
      { title: 'FDI Filing with RBI', slug: 'fdi-filing-rbi', description: 'Foreign Direct Investment reporting to RBI.', icon: FileSearch },
      { title: 'FLA Return Filing', slug: 'fla-return-filing', description: 'Foreign Liabilities and Assets return filing.', icon: FileX2 },
      { title: 'HR & Payroll', slug: 'hr-payroll', description: 'Manage payroll processing and HR compliance.', icon: Repeat },
      { title: 'Partnership Compliance', slug: 'partnership-compliance', description: 'Compliance for partnership firms.', icon: Users },
      { title: 'Private Limited Compliances', slug: 'private-ltd-compliances', description: 'Annual compliances for private limited companies.', icon: Building },
      { title: 'Proprietorship', slug: 'proprietorship', description: 'Compliance for sole proprietorships.', icon: User },
      { title: 'SFT Return Filing Services', slug: 'sft-return-filing', description: 'Statement of Financial Transactions filing.', icon: FileClock },
      { title: 'Section 8 Company Compliance', slug: 'section-8-compliance', description: 'Compliance for Section 8 companies.', icon: Landmark },
    ],
  },
];

export const quoteFormServices = [
    "ITR-1 Return Filing",
    "ITR-2 Return Filing",
    "ITR-3 Return Filing",
    "ITR-4 Return Filing",
    "ITR-5 Return Filing",
    "ITR-6 Return Filing",
    "ITR-7 Return Filing",
    "Income Tax Notice",
    "Bookkeeping & Accounting",
    "12A & 80G Registration",
    "Tax Savings & Filings",
    "Pvt. Ltd. Registration",
    "LLP Registration",
    "Trademark Registration",
    "GST Registration",
    "MSME Registration",
    "Virtual CFO Services",
    "Section 8 Company Registration and Compliances",
    "Society and Trust and AOP Registration",
    "Trade mark",
    "Other Services",
];

  
