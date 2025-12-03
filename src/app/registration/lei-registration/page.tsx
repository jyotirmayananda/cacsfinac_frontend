"use client";

import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { QuoteForm } from "@/components/quote-form";
import { Phone, Mail, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const structure = [
  { char: "8", class: "border" },
  { char: "9", class: "border" },
  { char: "4", class: "border" },
  { char: "5", class: "border" },
  { char: "0", class: "border" },
  { char: "0", class: "border" },
  { char: "2", class: "border" },
  { char: "7", class: "border" },
  { char: "A", class: "border" },
  { char: "K", class: "border" },
  { char: "4", class: "border" },
  { char: "L", class: "border" },
  { char: "S", class: "border" },
  { char: "O", class: "border" },
  { char: "G", class: "border" },
  { char: "X", class: "border" },
  { char: "G", class: "border" },
  { char: "Y", class: "border" },
  { char: "1", class: "border" },
  { char: "8", class: "border" },
];

const structureDesc = [
  { desc: "LOU identification code", colspan: 4, class: "border" },
  { desc: "Always 00", colspan: 2, class: "border" },
  { desc: "Unique identifier", colspan: 12, class: "border" },
  { desc: "Control numbers", colspan: 2, class: "border" },
];

const structurePoints = [
  "Characters 1-4: These always represent the identifier of the Local Operating Unit (LOU) that issued the LEI.",
  "Characters 5-6: These are always set to '00'.",
  "Characters 7-18: These characters are unique to each entity and differ from one LEI to another.",
  "Characters 19-20: These are check digits used for LEI verification purposes.",
];

const applicability = [
  "Financial Institutions: Banks, insurance companies, and non-banking financial companies must have an LEI to facilitate the monitoring and regulation of financial transactions.",
  "Stock Market Participants: Entities listed on stock exchanges or those participating in the depository system are subjected to LEI applicability, as mandated by the Securities and Exchange Board of India (SEBI).",
  "Derivatives and Forex Markets: Participants in over-the-counter derivatives and foreign exchange markets are required to possess an LEI to help track transactions and manage counterparty risk.",
  "High-Value Transaction Entities: Any legal entity involved in transactions exceeding Rs.50 crore through systems like the Real Time Gross Settlement (RTGS) are subjected to LEI registration applicability.",
  "Large Borrowers: Entities with fund-based or non-fund-based exposures of Rs.5 crore or more, as well as corporations with financial exposures of Rs.50 crore or more sourced from banks, UCBs, NBFCs, and AIFIs, necessitates the LEI Code Applicability.",
  "Public Securities Transactions: Issuers, guarantors, borrowers, or security providers dealing with securities issued to the public, listed on a stock exchange, or included in the depository system must secure an LEI.",
];

const whoNeedsIt = [
  "Large Borrowers: Entities with fund and non-fund-based credit exposure of ₹5 crore and above from banks and financial institutions.",
  "Participants in Derivative Markets: Entities dealing in Over-the-Counter (OTC) derivatives, including interest rate, forex, and credit derivatives.",
  "Entities in Non-Derivative Markets: Participants in government securities, money markets, and non-derivative forex markets.",
  "Large Value Transactions: Entities undertaking single payment transactions of ₹50 crore and above through Real Time Gross Settlement (RTGS) and National Electronic Funds Transfer (NEFT) systems.",
  "Listed Companies and Their Subsidiaries: All companies listed on Indian stock exchanges and their subsidiaries.",
  "Regulated Entities: Banks, Non-Banking Financial Companies (NBFCs), insurance companies, and pension funds.",
  "Entities Engaged in Cross-Border Transactions: Businesses involved in international trade and cross-border financial transactions.",
];

const requiredDocs = [
  "Proof of Legal Existence: Certificate of Incorporation, Partnership Deed, or Registration Certificate.",
  "PAN Card: Permanent Account Number of the entity.",
  "Proof of Address: Utility bills, lease agreements, or bank statements not older than three months.",
  "Authorized Signatory Details: Identity proof (Aadhaar, PAN, or Passport) and authorization letter or board resolution.",
  "Ownership Structure: Details of parent and ultimate parent entities, if applicable.",
];

const registrationSteps = [
  "Choose an Accredited Local Operating Unit (LOU): In India, LEIL is the authorized LOU for issuing LEIs.",
  "Submit Application: Fill out the LEI application form available on the LEIL website.",
  "Upload Documents: Provide the necessary documents as listed above.",
  "Pay Fees: The application fee is typically between ₹3,000 and ₹5,000, depending on the service provider.",
  "Verification and Issuance: Upon successful verification, the LEI is issued, usually within 1 to 2 working days.",
];

const renewalProcess = [
  "Annual Renewal: LEIs must be renewed every year to maintain their active status.",
  "Update Information: Any changes in the entity's legal structure, ownership, or address must be updated during renewal.",
  "Avoid Lapse: Failure to renew the LEI can lead to its status becoming 'Lapsed,' which may hinder financial transactions.",
];

const benefits = [
  "Regulatory Compliance: Meets RBI and global regulatory requirements for financial transactions.",
  "Enhanced Transparency: Provides clear identification of legal entities, reducing financial fraud.",
  "Global Recognition: Facilitates international trade and cross-border transactions.",
  "Improved Risk Management: Assists in assessing counterparty risks in financial dealings.",
];

const whyChooseUs = [
  "Expert Assistance: Our team ensures accurate and timely LEI registration and renewal.",
  "End-to-End Support: From document preparation to application submission, we handle the entire process.",
  "Transparent Pricing: No hidden charges; clear breakdown of all costs involved.",
  "Timely Delivery: We prioritize prompt processing to get your LEI issued swiftly.",
];

export default function LeiRegistrationPage() {
  return (
    <main>
      <div className="py-6 bg-secondary">
        <div className="container mx-auto px-4">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Registration", href: "/registration" },
              { label: "LEI Registration" },
            ]}
          />
        </div>
      </div>

      <section id="service-details" className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <h1 className="text-3xl md:text-4xl font-bold font-headline mb-4">
                Legal Entity Identifier (LEI) Registration
              </h1>

              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">
                  What is LEI Registration?
                </h2>
                <p className="text-muted-foreground text-justify">
                  The Legal Entity Identifier (LEI) is a unique 20-character
                  alphanumeric code based on the ISO 17442 standard, designed to
                  uniquely identify legal entities participating in financial
                  transactions worldwide. In India, the LEI system is overseen
                  by the Legal Entity Identifier India Ltd. (LEIL), a
                  wholly-owned subsidiary of the Clearing Corporation of India
                  Ltd. (CCIL), and is accredited by the Global Legal Entity
                  Identifier Foundation (GLEIF).
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">
                  Structure of an LEI Code
                </h2>
                <p className="text-muted-foreground text-justify mb-4">
                  The structure of a Legal Entity Identifier Code, which is
                  standardized under ISO 17442, comprises a 20-character
                  alphanumeric sequence. Here is a LEI code example:
                </p>
                <div className="overflow-x-auto">
                  <Table className="min-w-[500px]">
                    <TableBody>
                      <TableRow>
                        {structure.map((item, index) => (
                          <TableCell key={index} className={item.class}>
                            {item.char}
                          </TableCell>
                        ))}
                      </TableRow>
                      <TableRow>
                        {structureDesc.map((item, index) => (
                          <TableCell
                            key={index}
                            colSpan={item.colspan}
                            className={item.class}
                          >
                            {item.desc}
                          </TableCell>
                        ))}
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
                <ul className="space-y-3 pl-5 list-disc text-muted-foreground mt-4">
                  {structurePoints.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">
                  Purpose of LEI Registration Code
                </h2>
                <p className="text-muted-foreground text-justify">
                  The primary purpose of an LEI - Legal Entity Identifier code
                  is to enhance transparency and improve risk management in the
                  global financial system. By providing a unique identifier for
                  each legal entity that engages in financial transactions, the
                  LEI Code helps to ensure that entities can be easily and
                  distinctly identified worldwide, facilitating more accurate
                  and efficient tracking of financial transactions. This,
                  registering and obtaining the LEI certificate registration,
                  helps the entities for a quicker identification globally.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">
                  Applicability of LEI Register Code
                </h2>
                <p className="text-muted-foreground text-justify mb-4">
                  The LEI registration applicability spans a wide spectrum of
                  entities involved in significant financial transactions.
                  Here's a detailed overview of who needs an LEI number in
                  India:
                </p>
                <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                  {applicability.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">
                  Who Needs an LEI in India?
                </h2>
                <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                  {whoNeedsIt.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <p className="text-muted-foreground text-justify mt-4 text-sm">
                  <strong>Note:</strong> Entities with exposure above ₹5 crore
                  and up to ₹10 crore need to obtain an LEI by April 30, 2025.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">
                  Documents Required for LEI Registration
                </h2>
                <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                  {requiredDocs.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <p className="text-muted-foreground text-justify mt-4">
                  Additional documents may be required based on the entity type
                  and specific circumstances.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">
                  LEI Registration Process
                </h2>
                <ol className="space-y-3 list-decimal pl-5 text-muted-foreground">
                  {registrationSteps.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ol>
                <p className="text-muted-foreground text-justify mt-4 text-sm">
                  <strong>Note:</strong> The LEI is valid for one year and must
                  be renewed annually.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">
                  LEI Renewal Process
                </h2>
                <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                  {renewalProcess.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <p className="text-muted-foreground text-justify mt-4">
                  Renewal fees are similar to the initial registration fees and
                  vary based on the service provider.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">
                  Benefits of Obtaining an LEI
                </h2>
                <ul className="space-y-3 pl-5 list-disc text-muted-foreground">
                  {benefits.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-headline mb-4 text-primary">
                  Why Choose CACSFinacc for Your LEI Registration?
                </h2>
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
                  <CardTitle className="font-headline text-2xl mt-2">
                    Have a Question?
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="flex items-center justify-center gap-2 mt-2 mb-1">
                    <Phone className="h-4 w-4" />
                    <span>+91 95916 33648</span>
                  </p>
                  <p className="flex items-center justify-center gap-2">
                    <Mail className="h-4 w-4" />
                    <a
                      href="mailto:info@cacsfinaccservices.com"
                      className="hover:text-primary"
                    >
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
