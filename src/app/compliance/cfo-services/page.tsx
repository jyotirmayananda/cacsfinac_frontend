
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { QuoteForm } from '@/components/quote-form';
import { CheckCircle2, Phone, Mail } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const cfoServiceFeatures = [
  {
    title: 'Financial Planning & Strategy',
    description: 'We help you define long-term goals, optimize resource allocation, and guide your business towards sustainable profitability.',
  },
  {
    title: 'Cash Flow & Budget Management',
    description: 'Real-time monitoring, forecasting, and control of your cash flow—so you never run out of runway.',
  },
  {
    title: 'Management Information Systems (MIS)',
    description: 'Customized MIS reports, KPIs, and dashboards for founders, investors, and stakeholders.',
  },
  {
    title: 'Investor-Ready Financials',
    description: 'Ensure due diligence-ready financials for fundraising, mergers, or scale-up investments.',
  },
  {
    title: 'Compliance & Risk Advisory',
    description: 'Stay ahead of regulatory risks with timely GST, TDS, and ROC compliance tracking and execution.',
  },
];

const whyChooseUs = [
  'Tailored financial solutions for your industry',
  'Weekly/Monthly review calls with actionable insights',
  'Transparent pricing & scalable engagement models',
  'Dedicated team of CA, CS & compliance experts',
  'Trusted by founders, bootstrapped ventures & angel-backed startups',
];

const whoIsItFor = [
  'Early-stage startups managing rapid growth',
  'Founders preparing for fundraising rounds',
  'MSMEs without a full-time finance head',
  'Freelancers and professionals scaling into businesses',
];


export default function VirtualCFOPage() {
  return (
    <main>
       <div className="py-6 bg-secondary">
        <div className="container mx-auto px-4">
            <Breadcrumbs
            items={[
                { label: 'Home', href: '/' },
                { label: 'Compliance', href: '/compliance' },
                { label: 'Virtual CFO' },
            ]}
            />
        </div>
      </div>

      <section id="service-details" className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
                <h1 className="text-3xl md:text-4xl font-bold font-headline mb-4">
                    Strategic Finance Leadership for Startups & Growing Businesses
                </h1>
                <p className="text-muted-foreground text-justify mb-6">
                    In today's fast-moving business environment, startups and SMEs need more than just accounting support—they need strategic financial insight, cost control, and cash flow clarity. CACSFinacc's Virtual CFO services are designed to deliver expert-level financial management without the full-time cost of a traditional CFO.
                </p>
                <p className="text-muted-foreground text-justify mb-8">
                    We partner with founders, solopreneurs, and scaling enterprises to provide data-driven insights, investor-ready reports, and financial systems that grow with you.
                </p>

                <div className="space-y-8">
                    <div>
                        <h2 className="text-2xl font-bold font-headline mb-4 text-primary">What We Offer</h2>
                        <ul className="space-y-4">
                            {cfoServiceFeatures.map((feature, index) => (
                            <li key={index} className="flex items-start gap-3">
                                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                                <div>
                                    <p className="font-semibold">{feature.title}</p>
                                    <p className="text-muted-foreground">{feature.description}</p>
                                </div>
                            </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Why Choose CACSFinacc as Your Virtual CFO?</h2>
                         <ul className="space-y-3">
                            {whyChooseUs.map((item, index) => (
                            <li key={index} className="flex items-center gap-3">
                                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                                <span className="text-muted-foreground">{item}</span>
                            </li>
                            ))}
                        </ul>
                    </div>
                    
                    <div>
                        <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Who It's For</h2>
                        <ul className="space-y-3">
                            {whoIsItFor.map((item, index) => (
                            <li key={index} className="flex items-center gap-3">
                                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                                <span className="text-muted-foreground">{item}</span>
                            </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="mt-12">
                    <p className="text-lg font-semibold">Ready to scale smart? Let's transform your numbers into decisions.</p>
                     <Button asChild size="lg" className="mt-4">
                        <Link href="https://wa.me/9591633648" target="_blank">Book a Free Consultation</Link>
                    </Button>
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
