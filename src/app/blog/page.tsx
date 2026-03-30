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
      question: "Why am I receiving tax notices even after filing returns?",
      answer:
        "Tax notices are often triggered by data mismatches across GST filings, AIS, and income tax returns rather than non-compliance.",
    },
    {
      question: "How can I reduce GST compliance risks?",
      answer:
        "By implementing structured reconciliation processes, vendor tracking systems, and periodic reviews before filing.",
    },
    {
      question: "Do growing businesses need financial reporting beyond accounting?",
      answer:
        "Yes. Accounting reflects past transactions, while structured financial reporting provides decision-making clarity and risk visibility.",
    },
    {
      question: "How can NRIs optimize taxation in India?",
      answer:
        "Through proper structuring, DTAA utilization, and accurate reporting of income and capital gains.",
    },
    {
      question: "What causes compliance failures in businesses?",
      answer:
        "Most compliance failures result from lack of systems, not lack of knowledge—such as missing calendars, processes, and accountability.",
    },
    {
      question: "What are the common financial mistakes made by startups?",
      answer:
        "Startups often: <ul class='list-disc pl-6 my-2'><li>Focus only on revenue growth without understanding profitability</li><li>Lack structured cash flow planning</li><li>Do not maintain consistent financial reporting</li><li>Delay building financial controls</li></ul> These gaps can impact long-term sustainability.",
    },
    {
      question: "Why is financial visibility important for business decisions?",
      answer:
        "Without structured financial visibility, decisions are based on assumptions rather than data. Clear financial reporting enables businesses to understand performance, manage risks, and allocate resources efficiently.",
    },
    {
      question: "How can businesses improve their financial visibility?",
      answer:
        "By integrating accounting, GST, and income tax systems, performing regular reconciliations, and using modern financial dashboards that provide real-time data for strategic decision-making.",
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
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white/90 text-[10px] font-bold tracking-widest uppercase border border-white/10 mb-4">
                          Featured Insight
                        </span>
                        <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white leading-tight">
                          {item.title}
                        </h2>
                        <div className="pt-4 flex items-center justify-center gap-2 text-white/60 text-sm">
                          <span className="flex items-center gap-1"><Calendar size={16} /> {item.date}</span>
                          <span className="w-1 h-1 bg-white/30 rounded-full" />
                          <span className="flex items-center gap-1"><User size={16} /> {item.author}</span>
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
      <section id="blog-posts" className="py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-600 dark:text-white mb-6">
              Latest from CACS
            </h2>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-medium max-w-2xl mx-auto leading-relaxed">
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
                      <span className="bg-white/90 dark:bg-black/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold tracking-widest text-primary shadow-sm">
                        Financial
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-8 flex flex-col flex-grow">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground tracking-widest font-semibold mb-4">
                      <span className="flex items-center gap-1.5"><Calendar size={14} className="text-primary/70" /> {post.date}</span>
                      <span className="w-1 h-1 bg-muted-foreground/30 rounded-full" />
                      <span className="flex items-center gap-1.5"><User size={14} className="text-primary/70" /> {post.author}</span>
                    </div>
                    <h3 className="text-2xl font-bold font-headline text-foreground mb-4 leading-tight group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed line-clamp-3 mb-6">
                      {post.summary}
                    </p>
                    <div className="mt-auto pt-6 border-t border-muted-foreground/10 flex items-center justify-between">
                      <span className="text-primary font-bold flex items-center gap-2 group-hover:gap-4 transition-all text-sm tracking-widest">
                        Read Analysis <ArrowRight size={20} />
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
      <section id="faq" className="py-24 md:py-32 bg-slate-50 dark:bg-slate-900 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,rgba(59,130,246,0.05),transparent)] pointer-events-none" />
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <div className="text-center mb-16 space-y-6">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold tracking-widest uppercase mb-4">
              Financial Wisdom
            </span>
            <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-slate-600 dark:text-white leading-tight mb-6">
              Answering Critical Queries
            </h2>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-medium max-w-2xl mx-auto leading-relaxed">
              A repository of regulatory frameworks, tax compliance, and financial management queries answered by our experts.
            </p>
          </div>
          
          <Accordion type="single" collapsible className="w-full space-y-6">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-white/5 rounded-3xl group shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.05)] transition-all duration-300"
              >
                <AccordionTrigger className="text-left px-8 py-7 hover:no-underline font-bold text-lg md:text-2xl text-slate-600 dark:text-white hover:text-primary transition-colors data-[state=open]:text-primary">
                  <div className="flex items-center gap-6">
                    <span className="text-2xl md:text-4xl font-bold text-slate-100 dark:text-slate-600/50 group-data-[state=open]:text-primary/20 transition-colors leading-none">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    {faq.question}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-8 text-muted-foreground leading-relaxed text-base md:text-lg border-t border-slate-100 dark:border-white/5 pt-6">
                  <div className="pl-10" dangerouslySetInnerHTML={{ __html: faq.answer }} />
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-20 text-center">
            <div className="bg-white dark:bg-slate-900 backdrop-blur-xl p-8 rounded-[2.5rem] border border-slate-100 dark:border-white/10 shadow-xl inline-flex flex-col md:flex-row items-center gap-8">
              <p className="text-slate-600 dark:text-slate-400 font-medium">Still have questions? Our experts are here to help.</p>
              <Button className="rounded-full px-10 py-6 h-auto text-lg shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all font-bold" asChild>
                <Link href="/contact">Ask a Question</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
