"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight } from "lucide-react";
import placeholderImages from "@/lib/placeholder-images.json";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import blogimg1 from "../../../public/Image/blog/gst.jpg";
import blogimg2 from "../../../public/Image/blog/Payroll & HR Compliance for a Mid-Sized IT Firm.jpg";
import blogimg3 from "../../../public/Image/blog3.jpg";
import blogimg4 from "../../../public/Image/blog/Overcoming TDS Mismatch.jpg";
import blogimg5 from "../../../public/Image/blog/Huge ITC Loss Due to GST Late Filing.jpg";
import blogimg6 from "../../../public/Image/blog/Recovering ITC.jpg";
import blogimg7 from "../../../public/Image/blog/Provident FundPF.jpg";
import blogimg8 from "../../../public/Image/blog/PF Audit.jpg";
import blogimg9 from "../../../public/Image/blog/Employee Grievances.jpg";
import blogimg10 from "../../../public/Image/blog/capital gst.jpg";
import blogimg11 from "../../../public/Image/blog/Denied on Residential Property Sale Due to Missed CGAS Deposit.jpg";
import blogimg12 from "../../../public/Image/blog/Penny Stock.jpg";
import blogimg13 from "../../../public/Image/blog/Agricultural Land Sale.jpg";
import blogimg14 from "../../../public/Image/blog/Crypto Transactions.jpg";

const sliderItems = [
  {
    title:
      "Overcoming GST Compliance Challenges for a Fast-Growing E-Commerce Business",
    description:
      "How a fast-growing e-commerce business overcame GST compliance hurdles and ensured smooth operations.",
    image: blogimg1,
  },
  {
    title: "Streamlining Payroll & HR Compliance for a Mid-Sized IT Firm",
    description:
      "How a mid-sized IT company automated payroll and HR compliance, reducing errors and saving time.",
    image: blogimg2,
  },
  {
    title:
      "Overcoming TDS Mismatch and Avoiding Penalty Under Income Tax Scrutiny",
    description:
      "How to resolve TDS mismatches and avoid scrutiny-related penalties from the Income Tax Department.",
    image: blogimg4,
  },
  {
    title:
      "How Timely Intervention Prevented Huge ITC Loss Due to GST Late Filing",
    description:
      "Case study on saving significant Input Tax Credit by addressing GST late filing issues promptly.",
    image: blogimg5,
  },
];

const blogPosts = [
  {
    id: "gst-challenges",
    image: blogimg1,
    title:
      "Overcoming GST Compliance Challenges for a Fast-Growing E-Commerce Business",
    date: "June 2025",
    author: "Admin",
    summary:
      "How a fast-growing e-commerce business overcame GST compliance hurdles and ensured smooth operations.",
    fullContent: () => (
      <>
        <DialogHeader>
          <DialogTitle className="text-2xl mb-4">
            Overcoming GST Compliance Challenges for a Fast-Growing E-Commerce
            Business
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4 text-sm text-muted-foreground">
          <p>
            <strong>Introduction</strong>
          </p>
          <p>
            In today’s dynamic digital marketplace, e-commerce businesses in
            India face a host of tax-related challenges, especially in
            navigating the Goods and Services Tax (GST) regime. A rapidly
            growing online retail business encountered significant hurdles
            related to multi-state GST compliance, invoicing, and timely return
            filings. Here's how expert support helped turn things around.
          </p>
          <p>
            <strong>Background</strong>
          </p>
          <p>
            The business was expanding its operations across various Indian
            states, each with unique GST implications. The lack of centralized
            compliance processes led to inconsistent filings, delayed payments,
            and notices from tax authorities. Moreover, the internal team lacked
            clarity on Input Tax Credit (ITC) reconciliation and invoice
            structuring.
          </p>
          <p>
            <strong>Challenges Identified</strong>
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Multiple GST Registrations required due to operations in different
              states.
            </li>
            <li>
              Delayed Return Filings and penalties due to manual processes.
            </li>
            <li>
              Incorrect Input Tax Credit Claims resulting from mismatched data.
            </li>
            <li>
              Lack of a Standardized Invoicing System leading to reporting
              errors.
            </li>
          </ul>
          <p>
            <strong>Solution Implemented</strong>
          </p>
          <p>
            A professional compliance and advisory team stepped in to provide a
            structured approach:
          </p>
          <ol className="list-decimal pl-5 space-y-3">
            <li>
              <strong>GST Health Check</strong>
              <p>
                A comprehensive audit of all existing GST filings, input
                credits, and vendor invoices was conducted to identify
                discrepancies and compliance gaps.
              </p>
            </li>
            <li>
              <strong>Multi-State GST Registration</strong>
              <p>
                All required GST registrations were streamlined and completed,
                ensuring the company was compliant in each operational state.
              </p>
            </li>
            <li>
              <strong>Automated Invoicing System</strong>
              <p>
                A GST-compliant invoicing solution was integrated with the
                company's sales platform, ensuring real-time invoice generation
                with HSN codes, tax rates, and digital signatures.
              </p>
            </li>
            <li>
              <strong>Monthly Compliance Calendar</strong>
              <p>
                A customized compliance calendar was set up, along with
                reminders and monthly filing support for GSTR-1, GSTR-3B, and
                GSTR-9.
              </p>
            </li>
            <li>
              <strong>Input Tax Credit (ITC) Reconciliation</strong>
              <p>
                Advanced reconciliation tools were deployed to cross-verify
                GSTR-2B data with purchase invoices, ensuring accurate ITC
                claims.
              </p>
            </li>
          </ol>
          <p>
            <strong>Results Achieved</strong>
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>100% On-time Return Filings for six consecutive months.</li>
            <li>Reduction in Penalties and notices from tax authorities.</li>
            <li>Improved Cash Flow through proper ITC management.</li>
            <li>
              Increased Operational Efficiency by eliminating manual processes.
            </li>
          </ul>
          <p>
            <strong>Conclusion</strong>
          </p>
          <p>
            With expert GST support, the e-commerce business not only became
            fully compliant but also improved its internal financial systems. A
            structured compliance strategy helped the business regain control,
            reduce financial risk, and focus on growth.
          </p>
          <p>
            <strong>Why Businesses Choose CACSFinAcc</strong>
          </p>
          <p>
            For startups and growth-stage companies, tax compliance should not
            be a bottleneck. Our GST experts combine technical know-how with
            practical execution — from registrations to reconciliations and
            ongoing advisory.
          </p>
          <p>
            At CACSFinAcc, we don’t just file returns — we build systems that
            grow with your business.
          </p>
          <p>
            <strong>Need Help With GST?</strong>
          </p>
          <p>
            Whether you're an emerging business or an established player
            expanding into new regions, our team ensures your GST compliance is
            timely, accurate, and stress-free.
          </p>
          <p>
            Let’s simplify your compliance.{" "}
            <a href="/contact" className="text-primary hover:underline">
              Contact us
            </a>
          </p>
        </div>
      </>
    ),
  },
  {
    id: "payroll-hr",
    image: blogimg2,
    title: "Streamlining Payroll & HR Compliance for a Mid-Sized IT Firm",
    date: "June 2025",
    author: "Admin",
    summary:
      "How a mid-sized IT company automated payroll and HR compliance, reducing errors and saving time.",
    fullContent: () => (
      <>
        <DialogHeader>
          <DialogTitle className="text-2xl mb-4">
            Streamlining Payroll & HR Compliance for a Mid-Sized IT Firm
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4 text-sm text-muted-foreground">
          <p>
            <strong>Overview</strong>
          </p>
          <p>
            Managing payroll goes far beyond calculating salaries. For any
            business with a growing workforce, especially in sectors like IT and
            services, payroll is deeply connected with statutory compliance,
            employee satisfaction, and risk management. One mid-sized tech firm
            in India faced repeated challenges with PF and ESI compliance, TDS
            filing, and labor law obligations — all of which were efficiently
            resolved through structured payroll outsourcing and HR compliance
            services.
          </p>
          <p>
            <strong>The Compliance Challenge</strong>
          </p>
          <p>
            The company had expanded rapidly across states, increasing its
            headcount to over 100 employees. However, its in-house HR team was
            unequipped to deal with the operational and regulatory load. The
            main issues included:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Inconsistent payroll processing with last-minute corrections
            </li>
            <li>Incorrect Provident Fund and ESI calculations</li>
            <li>Delays in TDS return filing and generation of Form 16</li>
            <li>No centralized compliance dashboard</li>
            <li>Lack of documentation for labor law inspections</li>
          </ul>
          <p>
            These issues resulted in employee dissatisfaction, exposure to
            government penalties, and a growing administrative burden.
          </p>
          <p>
            <strong>Strategic Implementation</strong>
          </p>
          <p>
            After a detailed review, a structured payroll and compliance plan
            was implemented, covering:
          </p>
          <p>
            <strong>Monthly Payroll Processing</strong>
          </p>
          <p>
            Accurate computation of salaries, overtime, bonuses, and leave
            encashments — all integrated with digital payslips and employee
            self-service access.
          </p>
          <p>
            <strong>Statutory Deductions</strong>
          </p>
          <p>
            Automation of all deductions including EPF, ESI, and Professional
            Tax, along with timely challan payments and returns.
          </p>
          <p>
            <strong>TDS Compliance</strong>
          </p>
          <p>
            Monthly salary TDS calculations were synced with quarterly TDS
            return filing (Form 24Q), and timely Form 16 issuance.
          </p>
          <p>
            <strong>Labor Law Registers</strong>
          </p>
          <p>
            Up-to-date maintenance of all required registers under the Shops &
            Establishments Act, along with state-specific wage compliance and
            LWF contributions.
          </p>
          <p>
            <strong>Audit-Ready Records</strong>
          </p>
          <p>
            Prepared the firm for future inspections by maintaining consolidated
            compliance files, payment proofs, and reconciliations.
          </p>
          <p>
            <strong>Results Achieved</strong>
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Zero late payments or return filing penalties after onboarding.
            </li>
            <li>100% payroll accuracy within two cycles.</li>
            <li>
              Improved employee trust due to timely salaries and TDS
              documentation.
            </li>
            <li>Saved over 30+ hours per month for the internal HR team.</li>
          </ul>
          <p>
            <strong>Conclusion</strong>
          </p>
          <p>
            For SMEs and mid-sized firms, payroll and HR compliance can quickly
            become a silent risk factor — affecting both finances and
            reputation. Ensuring alignment with EPF, ESI, TDS, and labor laws is
            not just good practice; it’s essential for sustainable growth.
          </p>
          <p>
            <strong>Need Reliable Payroll & HR Compliance Support?</strong>
          </p>
          <p>At CACS FinAcc, we specialize in:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Payroll outsourcing in India</li>
            <li>EPF & ESI compliance filing</li>
            <li>TDS return filing for salaries</li>
            <li>Labor law compliance and register maintenance</li>
            <li>Comprehensive HR statutory services for SMEs and startups</li>
          </ul>
          <p>
            Whether you're setting up your payroll for the first time or scaling
            your compliance systems, our expert team is here to help.
          </p>
          <p>
            Reach out to us today to streamline your payroll and stay 100%
            compliant — effortlessly.
          </p>
        </div>
      </>
    ),
  },
  {
    id: "section-148",
    image: blogimg3,
    title:
      "Successfully Handling a Section 148 Reassessment Notice under the Income Tax Act",
    date: "June 2025",
    author: "Admin",
    summary:
      "Step-by-step approach to responding to a Section 148 notice and avoiding penalties.",
    fullContent: () => (
      <>
        <DialogHeader>
          <DialogTitle className="text-2xl mb-4">
            Successfully Handling a Section 148 Reassessment Notice under the
            Income Tax Act
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4 text-sm text-muted-foreground">
          <p>
            <strong>Background</strong>
          </p>
          <p>
            In late 2023, a small business owner received a Section 148 notice
            from the Income Tax Department. The notice stated that income for AY
            2020–21 had escaped assessment, and the case was reopened for
            reassessment. The client had already filed their ITR that year but
            had underreported some capital gains due to incorrect brokerage
            entries.
          </p>
          <p>
            The client approached in panic, uncertain about the implications and
            how to respond legally and strategically.
          </p>
          <p>
            <strong>Issues Identified</strong>
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Capital gains were omitted due to incorrect third-party reporting
              in AIS/26AS
            </li>
            <li>
              Books of accounts had errors in ledger postings of demat
              transactions
            </li>
            <li>
              No adequate documentation for purchase cost of certain long-term
              listed shares
            </li>
            <li>
              A risk of 50% or higher penalty if the case was lost on
              reassessment
            </li>
          </ul>
          <p>
            <strong>Strategic Actions Taken</strong>
          </p>
          <p>
            <strong>Representation Filing under Section 148A</strong>
          </p>
          <p>
            We submitted a reply under Section 148A(b) with facts, calculations,
            and reconciliations — demonstrating that any omission was due to
            system mismatch, not concealment.
          </p>
          <p>
            <strong>Capital Gains Recalculation</strong>
          </p>
          <p>
            Recomputed long-term capital gains using demat holding reports,
            contract notes, and historic purchase price data — properly indexed
            for cost inflation.
          </p>
          <p>
            <strong>Revised Statement of Facts</strong>
          </p>
          <p>
            Filed a comprehensive response with a legal explanation, capital
            gain annexure, and supporting evidence to argue against any willful
            misreporting.
          </p>
          <p>
            <strong>Assisted in Face-to-Face Hearing</strong>
          </p>
          <p>
            Accompanied the assessee’s authorized representative during the
            hearing with the AO and supported with prepared documentation and
            case law references.
          </p>
          <p>
            <strong>Outcome</strong>
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>The reassessment was concluded without penalty.</li>
            <li>
              Only a minor additional tax liability was accepted under revised
              computation.
            </li>
            <li>No concealment penalty or prosecution was initiated.</li>
            <li>
              The client avoided stress, financial loss, and reputational
              damage.
            </li>
          </ul>
          <p>
            <strong>Conclusion</strong>
          </p>
          <p>
            CBDT notices under Section 148, 143(2), or 142(1) require expert
            handling — with facts, law, and documentation aligned. Errors or
            delays in response can lead to heavy penalties and prolonged
            litigation.
          </p>
          <p>
            <strong>Facing a Tax Notice or Scrutiny?</strong>
          </p>
          <p>
            At CACS FinAcc, we help businesses and individuals across India
            with:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Section 148 & reassessment representation</li>
            <li>
              Reply to income tax notices under 139(9), 143(1), 142(1), 143(2)
            </li>
            <li>Rectification, revision & documentation support</li>
            <li>TDS mismatch resolution</li>
            <li>CBDT compliance advisory & litigation support</li>
          </ul>
          <p>
            Contact us to protect your financials and stay fully compliant with
            CBDT regulations.
          </p>
          <p>Would you like more case studies like:</p>
          <ol className="list-decimal pl-5 space-y-2">
            <li>TDS mismatch under 26AS vs. books</li>
            <li>Scrutiny under Section 143(2) for cash deposits</li>
            <li>Penalty waiver under Section 273A</li>
            <li>Notice under Section 133(6) – financial transaction query</li>
          </ol>
        </div>
      </>
    ),
  },
  {
    id: "tds-mismatch",
    image: blogimg4,
    title:
      "Overcoming TDS Mismatch and Avoiding Penalty Under Income Tax Scrutiny",
    date: "June 2025",
    author: "Admin",
    summary:
      "How to resolve TDS mismatches and avoid scrutiny-related penalties from the Income Tax Department.",
    fullContent: () => (
      <>
        <DialogHeader>
          <DialogTitle className="text-2xl mb-4">
            Overcoming TDS Mismatch and Avoiding Penalty Under Income Tax
            Scrutiny
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4 text-sm text-muted-foreground">
          <p>
            <strong>Client Profile</strong>
          </p>
          <p>
            A mid-sized service-based firm in Mumbai with 60+ vendors and a high
            monthly transaction volume approached us in early FY 2023–24 after
            receiving a notice under Section 143(1) for TDS mismatch in Form
            26AS.
          </p>
          <p>
            <strong>The Problem</strong>
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Incorrect mapping of PANs in quarterly TDS returns (Form 26Q)
            </li>
            <li>
              Non-linking of TDS with vendor payments, leading to mismatch in
              26AS
            </li>
            <li>
              No in-house tax team to verify Form 16A/26Q/26AS reconciliation
            </li>
            <li>
              Risk of disallowance under Section 40(a)(ia) and interest penalty
            </li>
          </ul>
          <p>
            <strong>Our Intervention</strong>
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>TDS Ledger Audit:</strong> Month-wise reconciliation of
              all vendor payments with TDS ledgers, bank challans, and Form
              26AS.
            </li>
            <li>
              <strong>Revised TDS Return Filing:</strong> Incorrect PAN entries
              were rectified and revised Form 26Q returns were filed on the
              TRACES portal.
            </li>
            <li>
              <strong>Demand Explanation Letter:</strong> Filed an online
              response with supporting annexures and prepared a legally
              structured submission under Section 143(1)(a).
            </li>
            <li>
              <strong>Preventive Framework:</strong> Implemented a TDS tracker
              system for monthly checks, automated due date reminders, and
              reporting formats to avoid future mismatches.
            </li>
          </ul>
          <p>
            <strong>Results Achieved</strong>
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>₹2.8 lakh unjust demand was nullified</li>
            <li>No penalty levied</li>
            <li>100% TDS reconciliation achieved for the year</li>
            <li>Future notices prevented with proactive vendor mapping</li>
          </ul>
          <p>
            <strong>Why This Matters</strong>
          </p>
          <p>
            Thousands of businesses receive Income Tax demand notices every year
            due to TDS mismatches. In most cases, these are avoidable — caused
            by basic filing errors, incorrect PANs, or poor reconciliation.
          </p>
          <p>
            <strong>Need Help With TDS Compliance?</strong>
          </p>
          <p>At CACS FinAcc, we help you with:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>TDS return filing and correction</li>
            <li>Vendor PAN mapping and reconciliation</li>
            <li>Notice response and penalty mitigation</li>
            <li>Setting up preventive compliance systems</li>
          </ul>
          <p>
            Contact us to ensure your TDS compliance is accurate and
            penalty-free.
          </p>
        </div>
      </>
    ),
  },
  {
    id: "itc-loss",
    image: blogimg5,
    title:
      "How Timely Intervention Prevented Huge ITC Loss Due to GST Late Filing",
    date: "June 2025",
    author: "Admin",
    summary:
      "Case study on saving significant Input Tax Credit by addressing GST late filing issues promptly.",
    fullContent: () => (
      <>
        <DialogHeader>
          <DialogTitle className="text-2xl mb-4">
            How Timely Intervention Prevented Huge ITC Loss Due to GST Late
            Filing
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4 text-sm text-muted-foreground">
          <p>
            <strong>Client Profile</strong>
          </p>
          <p>
            A growing manufacturing SME based in Pune, operating in multiple
            states, approached us in Q3 FY 2023–24. The client had missed GST
            filing deadlines for consecutive months, leading to significant
            Input Tax Credit (ITC) reversal and potential penalties — impacting
            their working capital.
          </p>
          <p>
            <strong>The Challenge</strong>
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Multiple GSTR-1 and GSTR-3B returns were filed late for three
              consecutive tax periods.
            </li>
            <li>
              Automatic ITC reversal triggered under Section 16(4) due to late
              filing, causing loss of eligible credit.
            </li>
            <li>
              Confusion over revised return filing provisions and penalty
              calculations.
            </li>
            <li>
              Lack of a structured GST compliance calendar led to recurring
              delays.
            </li>
            <li>
              Risk of interest and late fees accumulating over the financial
              year.
            </li>
          </ul>
          <p>
            <strong>Our Approach</strong>
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Detailed GST Compliance Audit:</strong> We analyzed the
              client's GST return filing history, ITC claims, and payment
              records to identify periods of non-compliance and quantify the ITC
              impact.
            </li>
            <li>
              <strong>Strategic Late Return Filing:</strong> Filed all pending
              GSTR-1 and GSTR-3B returns under the late filing provisions
              available, minimizing penalties by utilizing available
              concessions.
            </li>
            <li>
              <strong>ITC Reversal Rectification:</strong> Prepared and
              submitted rectification forms to reverse only the actual
              ineligible ITC, preventing unnecessary credit loss.
            </li>
            <li>
              <strong>Customized GST Calendar & Alerts:</strong> Implemented a
              GST compliance calendar integrated with reminder systems to ensure
              timely filing going forward.
            </li>
            <li>
              <strong>Advisory on ITC Compliance:</strong> Provided guidance on
              eligibility criteria for ITC, invoice matching, and timely
              reconciliation to prevent future ITC disallowance.
            </li>
          </ul>
          <p>
            <strong>Results Delivered</strong>
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Prevented ITC loss of over ₹10 lakhs through careful assessment
              and filing.
            </li>
            <li>
              Reduced late filing penalties by 40% using correct legal
              provisions.
            </li>
            <li>
              Established a robust GST compliance system, eliminating future
              delays.
            </li>
            <li>Improved cash flow management due to restored ITC claims.</li>
          </ul>
          <p>
            <strong>Why Timely GST Filing Matters</strong>
          </p>
          <p>
            Delays in GST filing not only attract penalties but also risk
            reversing your Input Tax Credit, which directly affects your
            liquidity. With GST laws becoming increasingly stringent, staying
            compliant is critical for uninterrupted business operations.
          </p>
          <p>
            <strong>Looking for Expert GST Compliance Support?</strong>
          </p>
          <p>At CACS FinAcc, we help businesses with:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>GST return filing and late return management</li>
            <li>ITC reconciliation and reversal advisory</li>
            <li>GST audit and compliance calendar setup</li>
            <li>Penalty and interest mitigation strategies</li>
          </ul>
          <p>
            Contact CACS FinAcc today for stress-free GST compliance and to
            safeguard your Input Tax Credit.
          </p>
        </div>
      </>
    ),
  },
  {
    id: "recovering-itc",
    image: blogimg6,
    title:
      "Recovering ITC and Minimizing Penalties After Multiple GST Late Filings for a Wholesale Distributor",
    date: "June 2025",
    author: "Admin",
    summary:
      "How a wholesale distributor recovered ITC and reduced penalties after repeated GST late filings.",
    fullContent: () => (
      <>
        <DialogHeader>
          <DialogTitle className="text-2xl mb-4">
            Recovering ITC and Minimizing Penalties After Multiple GST Late
            Filings for a Wholesale Distributor
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4 text-sm text-muted-foreground">
          <p>
            <strong>Client Profile</strong>
          </p>
          <p>
            A wholesale distributor of electronic components based in Chennai,
            supplying across Tamil Nadu and Karnataka, struggled with GST
            compliance due to lack of in-house expertise. Repeated late filings
            of GSTR-1 and GSTR-3B returns caused ITC denials and mounting
            penalties.
          </p>
          <p>
            <strong>Challenges Faced</strong>
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Delayed GSTR-1 and GSTR-3B filings for four tax periods, affecting
              timely ITC claims.
            </li>
            <li>
              Automatic ITC blockage under Section 16(4) due to late return
              filing.
            </li>
            <li>
              Large outstanding GST liabilities with penalties and interest
              accumulating.
            </li>
            <li>
              No clear understanding of the filing rectification process or
              options for waiver.
            </li>
            <li>
              Risk of adverse impact on working capital and business credit.
            </li>
          </ul>
          <p>
            <strong>Our Solution</strong>
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Comprehensive GST Compliance Review:</strong> We conducted
              a thorough review of past GST returns, payment history, and ITC
              claims, identifying exact periods of non-compliance and penalties
              incurred.
            </li>
            <li>
              <strong>Timely Filing of Pending Returns:</strong> Filed all
              pending GST returns under applicable late filing provisions,
              leveraging legal reliefs and minimizing penalties wherever
              possible.
            </li>
            <li>
              <strong>ITC Reconciliation and Correction:</strong> Cross-verified
              vendor invoices and ITC eligibility to prepare a revised ITC claim
              plan, recovering as much credit as possible within compliance.
            </li>
            <li>
              <strong>Penalty Representation:</strong> Drafted and submitted
              penalty waiver requests supported by valid reasons such as IT
              system challenges and first-time non-compliance to the GST
              authorities.
            </li>
            <li>
              <strong>Process Improvement Setup:</strong> Implemented a GST
              compliance calendar with automated reminders and periodic reviews
              to prevent future lapses.
            </li>
          </ul>
          <p>
            <strong>Results Achieved</strong>
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Recovered ₹7 lakhs of ITC that was initially blocked due to late
              filing.
            </li>
            <li>
              Reduced overall penalties and interest by 35% through
              representation.
            </li>
            <li>Cleared pending filings, restoring compliance status.</li>
            <li>
              Helped the client improve cash flow and working capital
              substantially.
            </li>
            <li>Set up a foolproof compliance process to avoid recurrence.</li>
          </ul>
          <p>
            <strong>Why GST Compliance Cannot Be Delayed</strong>
          </p>
          <p>
            Late GST filing can lead to blocked Input Tax Credit, penalties,
            interest, and compliance risks that disrupt your business flow and
            financial health. Proactive management of GST compliance ensures
            smooth operations and maximum credit utilization.
          </p>
          <p>
            <strong>Need Help with GST Late Filing or ITC Loss?</strong>
          </p>
          <p>CACS FinAcc provides expert services in:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>GST return filing and correction</li>
            <li>ITC reconciliation and recovery</li>
            <li>Penalty waiver and representation</li>
            <li>Compliance calendar and audit support</li>
          </ul>
          <p>
            Contact us now to protect your Input Tax Credit and avoid costly GST
            penalties.
          </p>
        </div>
      </>
    ),
  },
  {
    id: "pf-compliance-delayed",
    image: blogimg7,
    title:
      "Provident Fund (PF) compliance: Avoiding Heavy Penalties Due to Delayed PF Deposit for a Manufacturing Unit",
    date: "June 2025",
    author: "Admin",
    summary:
      "How a manufacturing unit avoided heavy penalties by addressing delayed PF deposits.",
    fullContent: () => (
      <>
        <DialogHeader>
          <DialogTitle className="text-2xl mb-4">
            Provident Fund (PF) compliance Case 1: Avoiding Heavy Penalties Due
            to Delayed PF Deposit for a Manufacturing Unit
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4 text-sm text-muted-foreground">
          <p>
            <strong>Client Profile</strong>
          </p>
          <p>
            A mid-sized manufacturing unit employing 120 workers in Gujarat
            delayed PF deposits for two consecutive months due to cash flow
            problems.
          </p>
          <p>
            <strong>The Challenge</strong>
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              PF contributions for employees and employer share were deposited
              late.
            </li>
            <li>
              The PF department issued a show-cause notice under Section 14B,
              demanding interest and a penalty.
            </li>
            <li>
              The client faced potential prosecution risks and heavy monetary
              penalties.
            </li>
            <li>
              Lack of clarity on the correct interest calculation and notice
              response procedure.
            </li>
          </ul>
          <p>
            <strong>Our Intervention</strong>
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Conducted a thorough review of contribution timelines and
              payments.
            </li>
            <li>
              Calculated interest due on late payments accurately using EPFO’s
              prescribed rates.
            </li>
            <li>
              Drafted a detailed reply to the show-cause notice, explaining the
              cash flow issue and demonstrating good faith.
            </li>
            <li>
              Assisted the client in voluntary deposit of outstanding PF and
              interest to minimize penalties.
            </li>
            <li>
              Coordinated with the PF authorities for a reasonable penalty
              waiver based on past compliance and genuine hardship.
            </li>
          </ul>
          <p>
            <strong>Outcome</strong>
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Client avoided prosecution and received a reduced penalty order.
            </li>
            <li>Fully regularized PF deposits with interest.</li>
            <li>Improved internal controls for future timely payments.</li>
          </ul>
        </div>
      </>
    ),
  },
  {
    id: "pf-audit-discrepancies",
    image: blogimg8,
    title: "Resolving PF Audit Discrepancies for a Construction Company",
    date: "June 2025",
    author: "Admin",
    summary:
      "Resolution of PF audit discrepancies for a construction company and ensuring compliance.",
    fullContent: () => (
      <>
        <DialogHeader>
          <DialogTitle className="text-2xl mb-4">
            Case Study 2: Resolving PF Audit Discrepancies for a Construction
            Company
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4 text-sm text-muted-foreground">
          <p>
            <strong>Client Profile</strong>
          </p>
          <p>
            A construction firm with multiple sites across Maharashtra was
            selected for a routine PF audit.
          </p>
          <p>
            <strong>The Challenge</strong>
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              EPFO auditors found mismatches between payroll records and PF
              contribution reports.
            </li>
            <li>
              Some workers were not enrolled in PF despite being eligible.
            </li>
            <li>
              The company faced a demand for arrears in PF contributions and
              penalties.
            </li>
            <li>
              Compliance gaps risked further inspections and legal action.
            </li>
          </ul>
          <p>
            <strong>Our Intervention</strong>
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Conducted a comprehensive payroll and PF compliance audit to
              identify unregistered employees.
            </li>
            <li>Helped register missing employees retroactively with EPFO.</li>
            <li>
              Prepared a detailed reconciliation report to present to auditors.
            </li>
            <li>
              Assisted in submission of corrective filings and payments for
              missing PF contributions.
            </li>
            <li>
              Developed an ongoing compliance checklist and payroll integration
              to avoid future mismatches.
            </li>
          </ul>
          <p>
            <strong>Outcome</strong>
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Audit completed successfully with no further enforcement action.
            </li>
            <li>Client avoided heavy penalties by proactive compliance.</li>
            <li>
              Enhanced compliance processes minimized risk of future audits.
            </li>
          </ul>
          <hr className="my-6" />
          <h3 className="text-xl font-bold">
            Case Study 5: Handling Contractor PF Non-Compliance for a Facility
            Management Firm
          </h3>
          <p>
            <strong>Client Profile</strong>
          </p>
          <p>
            A facility management company managing outsourced manpower across
            multiple sites in NCR region faced scrutiny over PF compliance by
            its contractors.
          </p>
          <p>
            <strong>The Challenge</strong>
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Contractors were not depositing PF for their deployed employees.
            </li>
            <li>
              Principal employer (our client) received a notice holding them
              liable under the EPF Act.
            </li>
            <li>
              Lack of documentation trail and third-party compliance monitoring.
            </li>
          </ul>
          <p>
            <strong>Our Intervention</strong>
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Conducted a PF compliance audit of all contractors.</li>
            <li>
              Created a due diligence checklist and contractor compliance
              declaration format.
            </li>
            <li>
              Assisted in drafting a strong legal response to EPFO with
              documentary evidence.
            </li>
            <li>
              Helped initiate compliance action against defaulting contractors.
            </li>
          </ul>
          <p>
            <strong>Outcome</strong>
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Client avoided direct liability by proving they had exercised
              reasonable due diligence.
            </li>
            <li>
              Revised contractor agreements to include strict PF compliance
              clauses.
            </li>
            <li>Implemented ongoing monitoring of contractor compliance.</li>
          </ul>
          <hr className="my-6" />
          <h3 className="text-xl font-bold">Why PF Compliance is Critical</h3>
          <p>
            Non-compliance with PF rules can result in heavy financial
            penalties, interest liabilities, legal scrutiny, and harm to
            employee relations. Businesses must maintain accurate records,
            timely deposits, and proactive communication with EPFO to avoid
            risks.
          </p>
          <h3 className="text-xl font-bold">
            Need Expert PF Compliance Support?
          </h3>
          <p>At CACS FinAcc, we provide:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Timely PF deposit advisory and audit support</li>
            <li>Help with PF audit and show-cause notices</li>
            <li>PF settlement and grievance handling</li>
            <li>End-to-end PF compliance management for all sectors</li>
          </ul>
          <p>
            Contact us to protect your business from PF penalties and ensure
            smooth employee fund management.
          </p>
        </div>
      </>
    ),
  },
  {
    id: "pf-settlement-delays",
    image: blogimg9,
    title:
      "Navigating PF Settlement Delays and Employee Grievances for an IT Firm",
    date: "June 2025",
    author: "Admin",
    summary:
      "How an IT firm managed PF settlement delays and resolved employee grievances.",
    fullContent: () => (
      <>
        <DialogHeader>
          <DialogTitle className="text-2xl mb-4">
            Case Study 3: Navigating PF Settlement Delays and Employee
            Grievances for an IT Firm
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4 text-sm text-muted-foreground">
          <p>
            <strong>Client Profile</strong>
          </p>
          <p>
            A fast-growing IT company with 250+ employees faced multiple
            employee complaints due to delays in PF claim settlements.
          </p>
          <p>
            <strong>The Challenge</strong>
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Employees were unable to withdraw PF amounts due to improper
              documentation and inconsistent KYC records.
            </li>
            <li>
              High volume of settlement requests overwhelmed the HR and finance
              teams.
            </li>
            <li>Negative employee sentiment and attrition risks.</li>
            <li>
              Client needed a streamlined, compliant PF settlement process.
            </li>
          </ul>
          <p>
            <strong>Our Intervention</strong>
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Performed a document audit to identify gaps in employee PF files.
            </li>
            <li>
              Coordinated with EPFO to clarify KYC and claim submission
              requirements.
            </li>
            <li>
              Established a centralized digital PF claim management system for
              quick processing.
            </li>
            <li>
              Provided training to HR on PF compliance, documentation, and
              grievance redressal.
            </li>
            <li>
              Advised on regular PF account reconciliation to prevent future
              issues.
            </li>
          </ul>
          <p>
            <strong>Outcome</strong>
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Reduced PF claim processing time by over 50%.</li>
            <li>Improved employee satisfaction and reduced complaints.</li>
            <li>Strengthened PF compliance governance.</li>
          </ul>
          <hr className="my-6" />
          <h3 className="text-xl font-bold">
            Case Study 4: PF Registration and Compliance Setup for a Startup
          </h3>
          <p>
            <strong>Client Profile</strong>
          </p>
          <p>
            A newly incorporated tech startup in Bengaluru with 22 employees
            wanted to ensure full PF compliance from the outset.
          </p>
          <p>
            <strong>The Challenge</strong>
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>No prior experience with PF compliance or registration.</li>
            <li>Risk of late registration and non-compliance penalties.</li>
            <li>Lack of structured payroll and documentation systems.</li>
          </ul>
          <p>
            <strong>Our Intervention</strong>
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Completed end-to-end PF registration under EPFO within the
              startup's first payroll cycle.
            </li>
            <li>
              Advised on salary structuring to optimize employer and employee PF
              contributions.
            </li>
            <li>Set up an automated PF calculation and reporting mechanism.</li>
            <li>
              Trained HR personnel on routine PF filings and documentation best
              practices.
            </li>
          </ul>
          <p>
            <strong>Outcome</strong>
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Startup became fully PF compliant from the first month.</li>
            <li>
              Avoided future risks of penalties or disqualification from
              tenders.
            </li>
            <li>Boosted employee confidence and professional HR branding.</li>
          </ul>
        </div>
      </>
    ),
  },
  {
    id: "capital-gains-tax",
    image: blogimg10,
    title: "Understanding Capital Gains Tax in India",
    date: "June 2025",
    author: "Admin",
    summary:
      "Overview of capital gains tax rules, exemptions, and planning strategies in India.",
    fullContent: () => (
      <>
        <DialogHeader>
          <DialogTitle className="text-2xl mb-4">
            Understanding Capital Gains Tax in India
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4 text-sm text-muted-foreground">
          <p>
            <strong>Capital gains</strong> arise when an individual or entity
            sells a capital asset—such as property, shares, bonds, mutual funds,
            or digital assets—at a price higher than the purchase price. The
            difference is taxed as 'capital gain'.
          </p>
          <p>
            Depending on the holding period, capital gains are classified as:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Short-Term Capital Gain (STCG):</strong>
              <ul className="list-disc pl-5">
                <li>Listed equity shares held for less than 12 months</li>
                <li>
                  Other assets (property, gold, etc.) held for less than 24/36
                  months
                </li>
              </ul>
            </li>
            <li>
              <strong>Long-Term Capital Gain (LTCG):</strong>
              <ul className="list-disc pl-5">
                <li>Equity shares held for over 12 months</li>
                <li>
                  Real estate or other assets held for more than 24/36 months
                </li>
              </ul>
            </li>
          </ul>
          <h4 className="text-lg font-semibold text-foreground">
            Amended Capital Gain Tax Rates (AY 2025–26)
          </h4>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Asset Type</TableHead>
                <TableHead>Holding Period</TableHead>
                <TableHead>Tax Rate</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Listed Equity Shares</TableCell>
                <TableCell>&gt;12 months</TableCell>
                <TableCell>10% LTCG (above ₹1 lakh)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Listed Equity Shares</TableCell>
                <TableCell>≤12 months</TableCell>
                <TableCell>15% STCG</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Property (Real Estate)</TableCell>
                <TableCell>&gt;24 months</TableCell>
                <TableCell>20% with indexation</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Property (Real Estate)</TableCell>
                <TableCell>≤24 months</TableCell>
                <TableCell>As per slab (STCG)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Unlisted Shares</TableCell>
                <TableCell>&gt;24 months</TableCell>
                <TableCell>20% with indexation</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Debt Mutual Funds (post 01-04-23)</TableCell>
                <TableCell>Any period</TableCell>
                <TableCell>As per slab (no LTCG benefit)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Digital Assets (Crypto, NFT)</TableCell>
                <TableCell>Any holding period</TableCell>
                <TableCell>30% flat tax (no deduction)</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <p>
            <em>
              Note: Surcharge and cess apply. Benefit of indexation is only
              allowed on LTCG of non-equity assets.
            </em>
          </p>
          <h4 className="text-lg font-semibold text-foreground">
            Key Sections for Exemptions
          </h4>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Section 54</strong> – LTCG from residential property sale
              used to buy another house
            </li>
            <li>
              <strong>Section 54F</strong> – LTCG from any asset other than
              residential house reinvested in a house
            </li>
            <li>
              <strong>Section 54EC</strong> – LTCG invested in notified bonds
              (e.g., NHAI/REC)
            </li>
            <li>
              <strong>Section 54B</strong> – Agricultural land proceeds used to
              buy other agricultural land
            </li>
          </ul>
        </div>
      </>
    ),
  },
  {
    id: "cgas-deposit-denied",
    image: blogimg11,
    title:
      "Exemption Denied on Residential Property Sale Due to Missed CGAS Deposit",
    date: "June 2025",
    author: "Admin",
    summary:
      "Real-life case where exemption was denied for missing the CGAS deposit deadline after property sale.",
    fullContent: () => (
      <>
        <DialogHeader>
          <DialogTitle className="text-2xl mb-4">
            Case Study 1: Exemption Denied on Residential Property Sale Due to
            Missed CGAS Deposit
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4 text-sm text-muted-foreground">
          <p>
            <strong>Real Incident</strong>
          </p>
          <p>
            In 2023, a Mumbai-based individual sold a flat for ₹1.75 crore,
            incurring a long-term capital gain of ₹78 lakhs. The taxpayer
            intended to claim an exemption under Section 54 by purchasing
            another property in Pune but couldn’t finalize the deal before the
            due date for filing the ITR.
          </p>
          <p>
            <strong>Issue</strong>
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>No deposit made in the Capital Gains Account Scheme (CGAS).</li>
            <li>
              Exemption denied during scrutiny, despite proof of booking the
              flat.
            </li>
            <li>Tax demand of ₹17.8 lakhs raised.</li>
          </ul>
          <p>
            <strong>Our Solution</strong>
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Collected builder receipts, agreement drafts, and intent evidence.
            </li>
            <li>
              Filed rectification with reference to CBDT Circular No. 743.
            </li>
            <li>Highlighted genuine hardship and prior similar CBDT relief.</li>
          </ul>
          <p>
            <strong>Outcome</strong>
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Partial relief granted; tax reduced by ₹10 lakhs.</li>
            <li>Client advised to proactively use CGAS in future.</li>
          </ul>
        </div>
      </>
    ),
  },
  {
    id: "ltcg-penny-stock",
    image: blogimg12,
    title: "LTCG on Shares Challenged Over Penny Stock Classification",
    date: "June 2025",
    author: "Admin",
    summary:
      "Case where LTCG exemption was challenged due to shares being classified as penny stocks.",
    fullContent: () => (
      <>
        <DialogHeader>
          <DialogTitle className="text-2xl mb-4">
            Case Study 2: LTCG on Shares Challenged Over Penny Stock
            Classification
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4 text-sm text-muted-foreground">
          <p>
            <strong>Real Incident</strong>
          </p>
          <p>
            A retired government employee had sold shares of a little-known
            company in 2022 with a declared LTCG of ₹21 lakhs. The IT department
            flagged it as a suspicious penny stock transaction.
          </p>
          <p>
            <strong>Issue</strong>
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Suspicion of bogus LTCG to avoid tax under Section 10(38).</li>
            <li>
              Scrutiny notice issued; transaction classified as accommodation
              entry.
            </li>
          </ul>
          <p>
            <strong>Our Solution</strong>
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Provided full demat statement, bank trail, and SEBI compliance
              history.
            </li>
            <li>
              Referenced landmark ITAT rulings allowing genuine transactions in
              similar stocks.
            </li>
            <li>
              Attended online hearings and rebutted department's generic
              allegations.
            </li>
          </ul>
          <p>
            <strong>Outcome</strong>
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Assessment closed with LTCG accepted.</li>
            <li>Client’s clean record preserved and no penalty levied.</li>
          </ul>
        </div>
      </>
    ),
  },
  {
    id: "agri-land-sale",
    image: blogimg13,
    title: "Agricultural Land Sale and Section 54B Confusion",
    date: "June 2025",
    author: "Admin",
    summary:
      "Real incident involving confusion over Section 54B exemption on agricultural land sale.",
    fullContent: () => (
      <>
        <DialogHeader>
          <DialogTitle className="text-2xl mb-4">
            Case Study 3: Agricultural Land Sale and Section 54B Confusion
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4 text-sm text-muted-foreground">
          <p>
            <strong>Real Incident</strong>
          </p>
          <p>
            A farmer from rural Karnataka sold agricultural land and received a
            notice from the tax department because the land was located within 8
            km of municipal limits, making it a taxable capital asset.
          </p>
          <p>
            <strong>Issue</strong>
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              The taxpayer wrongly assumed all agricultural land sales are
              exempt from tax.
            </li>
            <li>
              They failed to reinvest the capital gains in new agricultural land
              within the specified two-year period to claim exemption under
              Section 54B.
            </li>
          </ul>
          <p>
            <strong>Our Solution</strong>
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              We verified the land’s classification and confirmed it was a
              taxable asset.
            </li>
            <li>
              We advised the client on late compliance options and calculated
              the tax liability, including interest.
            </li>
            <li>
              Filed a revised ITR declaring the capital gain and paid the tax to
              avoid further penalties.
            </li>
          </ul>
          <p>
            <strong>Outcome</strong>
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>The case was closed with the payment of tax and interest.</li>
            <li>
              The client was educated on the nuances of agricultural land
              taxation, preventing future non-compliance.
            </li>
          </ul>
        </div>
      </>
    ),
  },
  {
    id: "crypto-transactions",
    image: blogimg14,
    title: "Crypto-to-Crypto Transactions Misreported as LTCG",
    date: "June 2025",
    author: "Admin",
    summary:
      "Case where crypto-to-crypto trades were misreported as LTCG, leading to tax complications.",
    fullContent: () => (
      <>
        <DialogHeader>
          <DialogTitle className="text-2xl mb-4">
            Case Study 4: Crypto-to-Crypto Transactions Misreported as LTCG
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4 text-sm text-muted-foreground">
          <p>
            <strong>Real Incident</strong>
          </p>
          <p>
            A young investor from Bengaluru traded multiple cryptocurrencies and
            filed LTCG on Bitcoin profits in FY 2022-23. The department issued a
            notice for mismatch in reported crypto volume vs. tax paid.
          </p>
          <p>
            <strong>Issue</strong>
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Misclassified crypto gains as LTCG instead of business income.
            </li>
            <li>No breakup between crypto-to-crypto and INR withdrawals.</li>
            <li>Risk of penalty under misreporting.</li>
          </ul>
          <p>
            <strong>Our Solution</strong>
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Recalculated gains using exchange history & INR equivalency.
            </li>
            <li>
              Filed a revised return under business income with adjusted P&L.
            </li>
            <li>
              Cited lack of CBDT clarity during the period and evolving crypto
              laws.
            </li>
          </ul>
          <p>
            <strong>Outcome</strong>
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Penalty proceedings dropped.</li>
            <li>Additional tax paid with interest; client fully compliant.</li>
          </ul>
          <h4 className="font-semibold text-foreground">
            Importance of Proper Capital Gains Compliance
          </h4>
          <p>
            From property sales to share trading and even digital assets,
            capital gain taxation is full of technicalities. Many clients face
            scrutiny due to wrong section claims, late CGAS deposits, or
            classification issues. Working with seasoned tax experts ensures:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Correct application of Sections 54, 54F, 54B, 112A</li>
            <li>Timely investments and CGAS deposits</li>
            <li>Error-free ITR disclosures</li>
            <li>Expert representation in assessments and appeals</li>
          </ul>
          <h4 className="font-semibold text-foreground">
            CACS FinAcc Can Help You Navigate Complex Capital Gain Tax Matters
          </h4>
          <p>We specialize in:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Capital gains computation & exemption advisory</li>
            <li>Property sale reinvestment compliance</li>
            <li>Crypto and equity taxation strategy</li>
            <li>Income tax notice replies and representation</li>
          </ul>
          <p>
            Connect With Us to safeguard your gains and optimize your tax
            liability.
          </p>
        </div>
      </>
    ),
  },
];

const faqs = [
  {
    question: "How can I save tax legally in FY 2024-25?",
    answer:
      "By investing in ELSS, PPF, NPS, claiming deductions under 80C to 80U, and optimizing HRA/LTA benefits.",
  },
  {
    question: "What are the latest changes in ITR forms for AY 2025-26?",
    answer:
      "Updated ITR-1 to ITR-7 now include new AIS/TIS reconciliation, capital gains details, and digital asset disclosures.",
  },
  {
    question:
      "How do I compute capital gains on inherited property for FY 2024-25?",
    answer:
      "To calculate capital gains on inherited assets, use the Indexed Cost of Acquisition from the previous owner. Even though inheritance isn’t taxable, selling the property will attract Long-Term Capital Gains (LTCG) under Section 112.",
  },
  {
    question:
      "Can I save LTCG tax under Section 54, 54EC, and 54F simultaneously?",
    answer:
      "Yes, but each has specific conditions—e.g., Section 54 applies to residential properties; 54EC requires investment in NHAI/REC bonds within 6 months. Simultaneous claims must not overlap the same gain portion.",
  },
  {
    question:
      "I received a GST notice for mismatch in GSTR-2B and ITC claimed. What should I do?",
    answer:
      "Reconcile GSTR-2B with your purchase register. If genuine mismatch exists, revise future ITC claims. Failure to respond to GST notices can lead to suspension of registration under Rule 21A.",
  },
  {
    question:
      "Can I avail GST input on blocked credits like office furniture and staff food?",
    answer:
      "No. As per Section 17(5) of CGST Act, input tax credit is disallowed on personal consumption, food & beverages, and office furniture unless used exclusively for taxable supplies.",
  },
  {
    question:
      "What are the consequences of non-compliance with Section 185 and 186 of Companies Act?",
    answer:
      "Violation of loan and investment provisions can attract heavy penalties. Loans to directors or investment beyond limits without Board/Shareholder approval are prosecutable offences.",
  },
  {
    question:
      "Can a Pvt Ltd company issue shares at premium without valuation report?",
    answer:
      "No. Income Tax Section 56(2)(viib) and Companies Act require a valuation report from a merchant banker or CA to justify premium and avoid angel tax liability.",
  },
  {
    question:
      "What is the process and timeline for filing FLA (Foreign Liabilities and Assets) Return?",
    answer:
      "Every Indian company receiving FDI or ODI must file FLA Return by July 15 annually through RBI's portal. Late filing attracts compliance penalties and affects creditworthiness.",
  },
  {
    question: "How do I report ECB (External Commercial Borrowing) with RBI?",
    answer:
      "You must obtain a Loan Registration Number (LRN) via ECB-Form 83 submission and report drawdowns through Form ECB-2 monthly.",
  },
  {
    question:
      "Who is liable if a contractor defaults on PF contributions of workers?",
    answer:
      "The principal employer is liable under EPF Act to ensure contractors comply. Failure leads to joint liability and prosecution under Section 14B of EPF Act.",
  },
  {
    question:
      "How can startups automate PF/ESI compliance to avoid human error?",
    answer:
      "Use dedicated payroll & compliance software with direct API filing. Or, outsource to experts like CACSFinacc who track deadlines, ECR uploads, and DSCR auto-checks.",
  },
  {
    question:
      "I got a notice under Section 148 for reassessment. What does it mean?",
    answer:
      "This means the department has reason to believe escaped income exists. You must respond with justification. Non-compliance may result in penalty under Section 270A.",
  },
  {
    question: "How to handle income mismatch in AIS/TIS vs ITR for FY 2024-25?",
    answer:
      "Discrepancies between Annual Information Statement (AIS) and filed ITR may trigger CPC queries. File a revised return or use grievance redressal with justification.",
  },
  {
    question:
      "What is the compliance checklist post angel investment round in India?",
    answer:
      "<ul><li>File MCA allotment forms (PAS-3)</li><li>Update register of members & valuation report</li><li>RBI’s FC-GPR filing under FEMA</li><li>Shareholder agreements, ROC & income tax reporting</li></ul>",
  },
  {
    question:
      "Is it mandatory for a DPIIT-recognized startup to be GST registered?",
    answer:
      "Yes, if turnover exceeds threshold or interstate sales exist—even if under tax holiday. DPIIT recognition doesn’t provide GST exemption.",
  },
];

export default function BlogPage() {
  const [openDialogs, setOpenDialogs] = useState<Record<string, boolean>>({});

  const handleOpenDialog = (id: string) => {
    setOpenDialogs((prev) => ({ ...prev, [id]: true }));
  };

  const handleCloseDialog = (id: string) => {
    setOpenDialogs((prev) => ({ ...prev, [id]: false }));
  };

  return (
    <main>
      <section id="slider" className="w-full py-12">
        <div className="container mx-auto px-4">
          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent>
              {sliderItems.map((item, index) => (
                <CarouselItem key={index}>
                  <div className="relative h-[400px] w-full rounded-2xl overflow-hidden group">
                    <Image
                      src={item.image.src}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      data-ai-hint={item.image.hint}
                    />
                    <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center p-4">
                      <h2 className="text-2xl md:text-3xl font-bold font-headline text-white uppercase">
                        {item.title}
                      </h2>
                      <p className="mt-4 text-md text-white/90 max-w-2xl">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white bg-black/50 hover:bg-black/70 border-none" />
            <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white bg-black/50 hover:bg-black/70 border-none" />
          </Carousel>
        </div>
      </section>

      <section id="blog-posts" className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline uppercase">
              Our Blog
            </h2>
            <p className="mt-2 text-lg text-muted-foreground">
              Insights and updates from CACS Finacc
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <React.Fragment key={post.id}>
                <Card className="flex flex-col group overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
                  <div className="relative w-full h-48">
                    <Image
                      src={post.image.src}
                      alt={post.title}
                      fill
                      className="object-cover"
                      data-ai-hint={post.image.hint}
                    />
                  </div>
                  <CardContent className="p-6 flex flex-col flex-grow">
                    <h3 className="text-lg font-semibold font-headline text-primary mb-2 group-hover:underline">
                      <button
                        onClick={() => handleOpenDialog(post.id)}
                        className="text-left"
                      >
                        {post.title}
                      </button>
                    </h3>
                    <p className="text-xs text-muted-foreground mb-3">
                      {post.date} | By {post.author}
                    </p>
                    <p className="text-sm text-muted-foreground flex-grow">
                      {post.summary}
                    </p>
                    <Button
                      variant="link"
                      className="p-0 h-auto mt-4 self-start text-primary font-semibold"
                      onClick={() => handleOpenDialog(post.id)}
                    >
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
                <Dialog
                  open={openDialogs[post.id] || false}
                  onOpenChange={() => handleCloseDialog(post.id)}
                >
                  <DialogContent className="max-w-4xl max-h-[90svh] overflow-y-auto p-8">
                    {post.fullContent()}
                  </DialogContent>
                </Dialog>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">
              Frequently Asked Questions
            </h2>
            <p className="mt-2 text-lg text-muted-foreground">
              Find answers to common queries about our services
            </p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>
                  <div
                    className="prose prose-sm max-w-none"
                    dangerouslySetInnerHTML={{ __html: faq.answer }}
                  />
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </main>
  );
}
