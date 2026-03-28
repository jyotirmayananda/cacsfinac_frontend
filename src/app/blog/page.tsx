"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel";
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";
import { ArrowRight, Calendar, User } from "lucide-react";
import { blogPosts } from "@/lib/blog-data";

export default function BlogPage() {
  const sliderItems = blogPosts.slice(0, 5);

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

  return (
    <main className="bg-background min-h-screen">
      {/* Featured Articles Slider */}
      <section id="slider" className="w-full py-12 md:py-16">
        <div className="container mx-auto px-4">
          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent>
              {sliderItems.map((item, index) => (
                <CarouselItem key={index}>
                  <Link href={`/blog/${item.id}`} className="group block h-[450px] relative rounded-[2rem] overflow-hidden">
                    <Image
                      src={item.image.src}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col items-center justify-end text-center p-8 md:p-12 pb-16">
                      <div className="space-y-4 max-w-3xl">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white/90 text-[10px] font-semibold border border-white/10 mb-2">
                          Featured Insight
                        </span>
                        <h2 className="text-2xl md:text-5xl font-bold font-headline text-white leading-tight">
                          {item.title}
                        </h2>
                        <div className="pt-4 flex items-center justify-center gap-2 text-white/60 text-xs">
                          <span className="flex items-center gap-1"><Calendar size={14} /> {item.date}</span>
                          <span className="w-1 h-1 bg-white/30 rounded-full" />
                          <span className="flex items-center gap-1"><User size={14} /> {item.author}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 text-white bg-black/20 hover:bg-white/10 backdrop-blur-md border-white/10 rounded-full transition-all" />
            <CarouselNext className="absolute right-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 text-white bg-black/20 hover:bg-white/10 backdrop-blur-md border-white/10 rounded-full transition-all" />
          </Carousel>
        </div>
      </section>

      {/* Main Grid */}
      <section id="blog-posts" className="py-12 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-primary font-bold tracking-widest text-xs mb-4 block">Our Perspectives</span>
            <h2 className="text-3xl md:text-6xl font-bold font-headline text-foreground tracking-tight">
              Latest from CACS
            </h2>
            <p className="mt-6 text-xl text-muted-foreground/80 max-w-2xl mx-auto">
              Strategic advisory, compliance engineering, and high-impact financial insights.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-left">
            {blogPosts.map((post) => (
              <Card key={post.id} className="flex flex-col group overflow-hidden border-none bg-card hover:bg-card/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-500 rounded-[2rem]">
                <Link href={`/blog/${post.id}`}>
                  <div className="relative w-full aspect-[16/10] overflow-hidden">
                    <Image
                      src={post.image.src}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 dark:bg-black/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest text-primary shadow-sm">
                        Financial
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-8 flex flex-col flex-grow">
                    <div className="flex items-center gap-4 text-[10px] text-muted-foreground tracking-widest font-semibold mb-4">
                      <span className="flex items-center gap-1.5"><Calendar size={12} className="text-primary/70" /> {post.date}</span>
                      <span className="w-1 h-1 bg-muted-foreground/30 rounded-full" />
                      <span className="flex items-center gap-1.5"><User size={12} className="text-primary/70" /> {post.author}</span>
                    </div>
                    <h3 className="text-2xl font-bold font-headline text-foreground mb-4 leading-tight group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed line-clamp-3 mb-6">
                      {post.summary}
                    </p>
                    <div className="mt-auto pt-6 border-t border-muted-foreground/10 flex items-center justify-between">
                      <span className="text-primary font-bold flex items-center gap-2 group-hover:gap-4 transition-all text-xs tracking-widest">
                        Read Analysis <ArrowRight size={18} />
                      </span>
                    </div>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-[350px_1fr] gap-16">
            <div className="space-y-6">
              <span className="text-primary font-bold tracking-widest text-xs block">Knowledge Hub</span>
              <h2 className="text-3xl md:text-5xl font-bold font-headline leading-tight">
                Answering Critical Queries
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                A repository of regulatory frameworks, tax compliance, and financial management queries answered by our experts.
              </p>
              <Button className="rounded-full px-8 py-6 h-auto" variant="outline" asChild>
                <Link href="/contact">Ask a Question</Link>
              </Button>
            </div>
            
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`} 
                  className="bg-card px-6 rounded-2xl border-none shadow-sm hover:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="text-left py-6 hover:no-underline font-semibold text-lg hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 text-muted-foreground leading-relaxed text-md">
                    <div
                      dangerouslySetInnerHTML={{ __html: faq.answer }}
                    />
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </main>
  );
}
