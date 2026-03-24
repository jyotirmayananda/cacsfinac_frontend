"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  ArrowRight,
  FileText,
  Quote,
  Book,
  Landmark,
  Receipt,
  User,
  Calculator,
  Users,
  Building2,
  Lightbulb,
  FileWarning,
  Fingerprint,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "../components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";
import { Avatar, AvatarFallback } from "../components/ui/avatar";
import { WelcomePopup } from "../components/welcome-popup";
import { ITRPlansPopup } from "../components/itr-plans-popup";
import { AddonServicesPopup } from "../components/addon-services-popup";
import placeholderImages from "../lib/placeholder-images.json";
import { AnimatedQuoteForm } from "../components/animated-quote-form";
import Autoplay from "embla-carousel-autoplay";
import sliderimg1 from "../../public/Image/income tax filing services.jpg";
import sliderimg2 from "../../public/Image/Virtual CFO.jpg";
import sliderimg3 from "../../public/Image/who-we-are-img2.jpg";
import sliderimg4 from "../../public/Image/accounting & book keeping2.jpg";
import sliderimg5 from "../../public/Image/strategic tax & wealth advisory2.jpg";
import whoweare1 from "../../public/Image/who-we-are-img.jpg";
import whoweare2 from "../../public/Image/who-we-are-img2.jpg";
import { PricingSection } from "../components/pricing-section";


const testimonials = [
  {
    name: "Divya S",
    company: "HR Manager",
    avatar: "DS",
    text: "I always found tax filing stressful. CACS FinAcc made it seamless filed in hours, explained every section. Never going elsewhere again.",
  },
  {
    name: "Shankar Narayan",
    company: "Retired Professional",
    avatar: "SN",
    text: "After selling my flat, I had no Idea about the exemptions. Their advice helped me reinvest smarty and save over $45 lakhs in capital gains tax.",
  },
  {
    name: "Amit L",
    company: "UX Designer: Freelancer",
    avatar: "AL",
    text: "I work across platforms and had income from multiple sources. CACS sorted it all with precision and helped me claim every eligible deduction.",
  },
  {
    name: "Souparna",
    company: "Tech Startup Founder, Bengaluru",
    avatar: "S",
    text: "From incorporation to GST and payroll, they handled it all. As a Bengaluru-based tech startup, this was a game-changer. They helped us structure our investments and saved over ₹15 Lakhs in taxes.",
  },
  {
    name: "Harish T",
    company: "UK-based Engineer",
    avatar: "HT",
    text: "As an NRI, I had confusion over indian taxation. They filed my returns and also advised on DTAA benefits. Transparent and efficient service.",
  },
  {
    name: "Sneha S",
    company: "Co-Founder, Hotel Startup",
    avatar: "SS",
    text: "Their virtual CFO service helped us fix our cash fiow issues and prepare for investor due diligence.",
  },
  {
    name: "N. S",
    company: "HR Manager, Constant Business",
    avatar: "NS",
    text: "We now have full visibility over our finances. Monthly reporting is consistent and accurate.",
  },
  {
    name: "M. Rajeev",
    company: "Tech Startup",
    avatar: "MR",
    text: "Saved us time, penalties. and late fees. We're fully compliant thanks to CACS FinAcc.",
  },
  {
    name: "Ankita J",
    company: "Logistics Company",
    avatar: "AJ",
    text: "All our statutory filings are timely and error-free. I don't need to chase CA firms anymore.",
  },
];

const homeServices = [
  {
    icon: Book,
    title: "Online Accounting & Bookkeeping",
    href: "/compliance/bookkeeping",
  },
  {
    icon: Landmark,
    title: "Business Tax Filing Services (Income Tax & GST)",
    href: "/tax-filing/business-tax-filings",
  },
  {
    icon: Receipt,
    title: "TDS Return Filing, Interest Calculation & Form 26Q/24Q Support",
    href: "/tax-filing/tds-return-filings",
  },
  {
    icon: User,
    title: "ITR-1 (Sahaj) Filing Services",
    href: "/tax-filing/itr-1-filing",
  },
  {
    icon: FileText,
    title: "ITR-2 Filing Services",
    href: "/tax-filing/itr-2-filing",
  },
  {
    icon: Calculator,
    title: "ITR-3 Filing for Professionals & Business Owners",
    href: "/tax-filing/itr-3-filing",
  },
  {
    icon: FileText,
    title: "ITR-4 (Sugam) Presumptive Scheme Filing",
    href: "/tax-filing/itr-4-filing",
  },
  {
    icon: Users,
    title: "ITR-5 Filing for Firms, LLPs & AOPs",
    href: "/tax-filing/itr-5-filing",
  },
  {
    icon: Building2,
    title: "ITR-6 Filing for Private Limited & Companies",
    href: "/tax-filing/itr-6-filing",
  },
  {
    icon: Lightbulb,
    title: "GST Registration, Monthly Filing & ITC Reconciliation",
    href: "/registration/gst-pf-pt-registration",
  },
  {
    icon: FileWarning,
    title: "Income Tax Notice Response & Rectification Services",
    href: "/tax-filing/income-tax-notice",
  },
  {
    icon: Fingerprint,
    title: "PAN/TAN Allotment & Digital Signature (DSC) Services",
    href: "/tax-filing/tan-registration",
  },
];

const sliderItems = [
  {
    title: "Hassle-Free ITR Filing for Individuals & Professionals",
    description:
      "Leave the confusion behind. Our experts ensure accurate ITR filing, TDS reconciliation, and Form 26AS matching—on time, every time.",
    image: sliderimg1,
    href: "https://wa.me/9591633648",
  },
  {
    title: "Smart Financial Leadership Without a Full-Time CFO",
    description:
      "Gain CFO-level insights to manage cash flow, investor decks, MIS reports, and financial health — tailored for your startup growth.",
    image: sliderimg2,
    href: "https://wa.me/9591633648",
  },
  {
    title: "Compliance Made Simple for Private Limited & LLPs",
    description:
      "From company registration to annual returns, get full secretarial support under Companies Act, 2013 — with no hidden delays.",
    image: sliderimg3,
    href: "https://wa.me/9591633648",
  },
  {
    title: "Stay GST Compliant with Professional Bookkeeping",
    description:
      "Ensure timely GSTR filing, maintain accurate ledgers, and get ITC maximized — all handled by dedicated professionals.",
    image: sliderimg4,
    href: "https://wa.me/9591633648",
  },
  {
    title: "Build Wealth with Expert Tax Planning & Advice",
    description:
      "Plan capital gains, reduce tax outflows, and structure your income with high-impact tax-saving strategies led by experts.",
    image: sliderimg5,
    href: "https://wa.me/9591633648",
  },
];

const whoWeAreServices = [
  "Full-Spectrum Financial and Tax Advisory – covering tax planning, GST compliance, income tax filing, and strategic tax optimization.",
  "Internal Audits and Compliance Reviews – strengthening internal controls, managing risks, and ensuring legal compliance.",
  "Company Formation & Corporate Secretarial Support – handling company registration, LLP incorporation, ROC filings, and MCA compliance.",
  "Compliance with the Companies Act, 2013, and Other Statutory Requirements – including FEMA labour law, and regulatory filings.",
  "Financial and Business Restructuring Guidance – assisting with mergers, acquisitions, debt restructuring, and capital optimization.",
];

export default function Home() {
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);
  const [isItrOpen, setIsItrOpen] = React.useState(false);
  const [isAddonOpen, setIsAddonOpen] = React.useState(false);
  const [isQuoteFormPopupOpen, setIsQuoteFormPopupOpen] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsPopupOpen(true);
    }, 1000); // Show popup after 1 second
    return () => clearTimeout(timer);
  }, []);

  const handleWelcomeClose = (open: boolean) => {
    setIsPopupOpen(open);
    if (!open) {
      setTimeout(() => {
        setIsItrOpen(true);
      }, 300); // Small delay before opening the second popup
    }
  };

  const handleItrClose = (open: boolean) => {
    setIsItrOpen(open);
    if (!open) {
      setTimeout(() => {
        setIsAddonOpen(true);
      }, 300); // Small delay before opening the third popup
    }
  };

  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  return (
    <div className="flex flex-col">
      <WelcomePopup open={isPopupOpen} onOpenChange={handleWelcomeClose} />
      <ITRPlansPopup open={isItrOpen} onOpenChange={handleItrClose} />
      <AddonServicesPopup open={isAddonOpen} onOpenChange={setIsAddonOpen} />
      <section id="hero" className="w-full">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-12">
            <div className="flex flex-col justify-center text-center lg:text-left items-center lg:items-start">
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-6 uppercase leading-tight">
                <span className="text-gradient bg-gradient-to-r from-blue-600 via-blue-400 to-cyan-400">
                  Virtual CFO, NRI Tax & Compliance
                </span>
                <br />
                <span className="text-foreground text-3xl md:text-5xl">— Expert Services in Bengaluru</span>
              </h1>
              <p className="mt-4 text-2xl text-muted-foreground max-w-3xl">
                Helping Startups, NRIs & SMEs in Bengaluru & across India with Taxation, ROC, MIS &
                Financial Strategy.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4 mt-8 w-full sm:w-auto justify-center lg:justify-start">
                <Button asChild size="lg" className="w-full sm:w-auto">
                  <Link href="/contact">
                    Contact Us <ArrowRight className="ml-2" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="w-full max-w-md">
                <AnimatedQuoteForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Authority Signals Banner for SEO */}
      <section className="w-full py-12 md:py-16 relative overflow-hidden bg-gradient-to-b from-transparent via-secondary/60 to-transparent">
        {/* Subtle background decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[150px] bg-cyan-500/10 dark:bg-cyan-500/5 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="container mx-auto px-4 relative z-10">
          <p className="text-center text-xs md:text-sm font-bold text-muted-foreground/80 uppercase tracking-widest md:tracking-[0.25em] mb-10">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-600 via-gray-400 to-gray-600 dark:from-gray-400 dark:via-gray-100 dark:to-gray-400">
              Trusted by industry leaders & compliant with Indian regulatory bodies
            </span>
          </p>
        </div>

        {/* Marquee Animation Container */}
        <div className="relative flex overflow-hidden group w-full before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-[50px] md:before:w-[150px] before:bg-gradient-to-r before:from-background before:to-transparent before:content-[''] after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-[50px] md:after:w-[150px] after:bg-gradient-to-l after:from-background after:to-transparent after:content-['']">
          <div className="flex animate-marquee gap-4 md:gap-6 lg:gap-8 group-hover:[animation-play-state:paused] w-max select-none">
            {/* Semantic trust anchors for SEO Authority repeated multiple times for seamless looping */}
            {[...Array(2)].map((_, i) => (
              <React.Fragment key={i}>
                <div className="flex items-center gap-3 px-5 py-3 md:px-6 md:py-4 rounded-full bg-background/40 border border-border/50 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_-4px_rgba(6,182,212,0.3)] hover:-translate-y-1 hover:border-cyan-500/50 hover:bg-background/80 transition-all duration-300 cursor-default backdrop-blur-xl">
                  <div className="p-2.5 rounded-full bg-cyan-100/80 dark:bg-cyan-900/40 text-cyan-600 dark:text-cyan-400">
                    <Building2 className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <span className="font-bold text-sm md:text-base text-foreground/90 whitespace-nowrap pr-2">MCA Registered</span>
                </div>
                
                <div className="flex items-center gap-3 px-5 py-3 md:px-6 md:py-4 rounded-full bg-background/40 border border-border/50 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_-4px_rgba(34,197,94,0.3)] hover:-translate-y-1 hover:border-green-500/50 hover:bg-background/80 transition-all duration-300 cursor-default backdrop-blur-xl">
                  <div className="p-2.5 rounded-full bg-green-100/80 dark:bg-green-900/40 text-green-600 dark:text-green-400">
                    <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <span className="font-bold text-sm md:text-base text-foreground/90 whitespace-nowrap pr-2">Startup India</span>
                </div>
                
                <div className="flex items-center gap-3 px-5 py-3 md:px-6 md:py-4 rounded-full bg-background/40 border border-border/50 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_-4px_rgba(59,130,246,0.3)] hover:-translate-y-1 hover:border-blue-500/50 hover:bg-background/80 transition-all duration-300 cursor-default backdrop-blur-xl">
                  <div className="p-2.5 rounded-full bg-blue-100/80 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400">
                    <ShieldCheck className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <span className="font-bold text-sm md:text-base text-foreground/90 whitespace-nowrap pr-2">GST Compliant</span>
                </div>
                
                <div className="flex items-center gap-3 px-5 py-3 md:px-6 md:py-4 rounded-full bg-background/40 border border-border/50 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_-4px_rgba(99,102,241,0.3)] hover:-translate-y-1 hover:border-indigo-500/50 hover:bg-background/80 transition-all duration-300 cursor-default backdrop-blur-xl">
                  <div className="p-2.5 rounded-full bg-indigo-100/80 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400">
                    <User className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <span className="font-bold text-sm md:text-base text-foreground/90 whitespace-nowrap pr-2">MSME Recognized</span>
                </div>
                
                <div className="flex items-center gap-3 px-5 py-3 md:px-6 md:py-4 rounded-full bg-background/40 border border-border/50 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_-4px_rgba(249,115,22,0.3)] hover:-translate-y-1 hover:border-orange-500/50 hover:bg-background/80 transition-all duration-300 cursor-default backdrop-blur-xl">
                  <div className="p-2.5 rounded-full bg-orange-100/80 dark:bg-orange-900/40 text-orange-600 dark:text-orange-400">
                    <Landmark className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <span className="font-bold text-sm md:text-base text-foreground/90 whitespace-nowrap pr-2">Income Tax Dept.</span>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="w-full py-10 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline uppercase">
              OUR CORE SERVICES
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {homeServices.map((service, index) => (
              <Link key={index} href={service.href}>
                <Card className="group relative flex flex-col items-start justify-between p-6 text-left rounded-3xl glass-panel text-card-foreground transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.2)] overflow-hidden h-56 w-full cursor-pointer border-opacity-40">
                  <div className="absolute inset-0 bg-primary transform scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500 ease-in-out"></div>
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative z-10 flex flex-col h-full w-full">
                    <div className="rounded-full bg-primary/10 backdrop-blur-sm p-3 transition-all duration-300 group-hover:bg-white group-hover:text-primary w-fit shadow-inner">
                      <service.icon className="h-8 w-8 text-primary transition-colors duration-300 group-hover:text-primary" />
                    </div>
                    <div className="flex-grow flex flex-col justify-center">
                      <h3 className="text-xl font-semibold font-headline">
                        {service.title}
                      </h3>
                    </div>
                    <Button
                      variant="secondary"
                      size="sm"
                      className="mt-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300 self-start"
                      asChild
                    >
                      <span>Know More</span>
                    </Button>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="image-slider" className="w-full py-6">
        <div className="container mx-auto px-4">
          <Carousel
            plugins={[plugin.current]}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              {sliderItems.map((item, index) => (
                <CarouselItem key={index}>
                  <Link href={item.href} target="_blank">
                    <div className="relative h-[500px] w-full rounded-2xl overflow-hidden group">
                      <Image
                        src={item.image.src}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        data-ai-hint={item.image}
                      />
                      <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center p-4">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-headline text-white uppercase">
                          {item.title}
                        </h2>
                        <p className="mt-4 text-lg text-white/90 max-w-3xl">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white bg-black/50 hover:bg-black/70 border-none" />
            <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white bg-black/50 hover:bg-black/70 border-none" />
          </Carousel>
        </div>
      </section>

      <section id="who-we-are" className="w-full py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline text-gray-500 dark:text-white tracking-wider uppercase">
              WHO WE ARE
            </h2>
          </div>
          <p className=" text-justify text-muted-foreground mb-12">
            At CACS FinAcc, a trusted firm based in Bengaluru, we provide a one-stop solution for all your
            accounting, financial, compliance, and corporate governance needs across India.
            Our network of qualified professionals, including experienced
            Chartered Accountants, Company Secretaries, and finance experts,
            ensures a holistic and strategic approach to solving your business
            challenges. Whether you require income tax return filing, GST
            registration and compliance, TDS management, corporate governance
            solutions, or regulatory compliance support, we deliver expert
            insights that help you make informed decisions, reduce risks, and
            optimize your operations.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-primary font-headline uppercase">
                OUR SERVICES INCLUDE
              </h3>
              <ul className="space-y-4">
                {whoWeAreServices.map((service, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <p className="text-muted-foreground">{service}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-[450px]">
              <Image
                src={whoweare1}
                alt="CA Consultation for Bengaluru Startups and SMEs"
                width={400}
                height={200}
                className="rounded-2xl shadow-lg object-cover w-full h-full"
                data-ai-hint={placeholderImages.homepage.whoWeAre.primary.hint}
              />
              <div className="absolute -bottom-8 -left-8 w-48 h-48">
                <Image
                  src={whoweare2}
                  alt="Expert Tax Filing & Corporate Compliance in Bengaluru"
                  width={200}
                  height={200}
                  className="rounded-2xl shadow-xl border-4 border-white object-cover"
                  data-ai-hint={
                    placeholderImages.homepage.whoWeAre.secondary.hint
                  }
                />
              </div>
              <div className="absolute -bottom-8 right-8 glass-panel bg-blue-600/90 text-white p-6 rounded-2xl shadow-2xl text-center backdrop-blur-xl border border-white/20">
                <p className="text-5xl font-bold mb-1">10+</p>
                <p className="text-sm font-medium tracking-wide opacity-90">
                  Years of experience in business service
                </p>
              </div>
            </div>
          </div>
          <p className="text-justify text-muted-foreground mt-16">
            Our goal is simple — to keep your business compliant, efficient, and
            profitable, while we handle the complexities of finance and legal
            regulations. With CACS FinAcc as your trusted partner, you can focus
            on growth while we ensure your business meets every legal, tax, and
            compliance requirement with precision and professionalism.
          </p>
        </div>
      </section>

      <PricingSection />

      <section id="how-we-solve-problems" className="w-full py-16 md:py-24 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl md:text-5xl font-extrabold font-headline uppercase tracking-tight mb-6 text-primary">
              How CACS FinAcc Solves Your Business Problems
            </h2>
            <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We don't just crunch numbers; we engineer financial scalability and compliance safety for startups, SMEs, and MSMEs across Bengaluru and India.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 xl:gap-8 max-w-7xl mx-auto">
            {/* Card 1 */}
            <Card className="relative h-full bg-card border-[1.5px] border-blue-100/80 dark:border-blue-900/40 rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.08)] dark:hover:shadow-[0_12px_40px_rgb(0,0,0,0.3)] hover:-translate-y-1 transition-all duration-300">
              <CardContent className="p-8 md:p-10 flex flex-col h-full relative z-10">
                <div className="absolute top-4 right-6 text-[120px] font-black text-blue-50/80 dark:text-white/10 select-none z-0 leading-none">01</div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-50 dark:bg-blue-900/40 mb-8 border border-blue-100 dark:border-blue-800">
                    <FileWarning className="w-8 h-8 text-blue-600" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-8 text-foreground leading-snug">Eliminating Compliance Blindspots</h3>
                  
                  <div className="space-y-6 flex-grow flex flex-col justify-between">
                    <div className="p-5 rounded-lg bg-blue-50/50 dark:bg-blue-900/10 border-l-4 border-l-blue-400">
                      <h4 className="text-[11px] font-bold text-blue-600 uppercase tracking-widest mb-3">
                        THE PROBLEM
                      </h4>
                      <p className="text-muted-foreground text-[14px] leading-relaxed">
                        Missing statutory deadlines for GST, TDS, or ROC filings leads to frozen bank accounts, severe penalties, and director disqualifications.
                      </p>
                    </div>
                    
                    <div className="p-5 rounded-lg bg-blue-50/50 dark:bg-blue-900/10 border-l-4 border-l-blue-600">
                      <h4 className="text-[11px] font-bold text-blue-700 dark:text-blue-400 uppercase tracking-widest mb-3">
                        OUR SOLUTION
                      </h4>
                      <p className="text-muted-foreground text-[14px] leading-relaxed">
                        Our dedicated CS and CA team utilize a proactive compliance calendar tailored to your business structure, acting as an impenetrable firewall against tax notices.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Card 2 */}
            <Card className="relative h-full bg-card border-[1.5px] border-blue-100/80 dark:border-blue-900/40 rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.08)] dark:hover:shadow-[0_12px_40px_rgb(0,0,0,0.3)] hover:-translate-y-1 transition-all duration-300">
              <CardContent className="p-8 md:p-10 flex flex-col h-full relative z-10">
                <div className="absolute top-4 right-6 text-[120px] font-black text-blue-50/80 dark:text-white/10 select-none z-0 leading-none">02</div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-50 dark:bg-blue-900/40 mb-8 border border-blue-100 dark:border-blue-800">
                    <Landmark className="w-8 h-8 text-blue-600" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-8 text-foreground leading-snug">Fixing Cash Flow Hemorrhaging</h3>
                  
                  <div className="space-y-6 flex-grow flex flex-col justify-between">
                    <div className="p-5 rounded-lg bg-blue-50/50 dark:bg-blue-900/10 border-l-4 border-l-blue-400">
                      <h4 className="text-[11px] font-bold text-blue-600 uppercase tracking-widest mb-3">
                        THE PROBLEM
                      </h4>
                      <p className="text-muted-foreground text-[14px] leading-relaxed">
                        Rapidly scaling startups often burn through their Series-A funding prematurely due to invisible operational inefficiencies and poor working capital cycles.
                      </p>
                    </div>
                    
                    <div className="p-5 rounded-lg bg-blue-50/50 dark:bg-blue-900/10 border-l-4 border-l-blue-600">
                      <h4 className="text-[11px] font-bold text-blue-700 dark:text-blue-400 uppercase tracking-widest mb-3">
                        OUR SOLUTION
                      </h4>
                      <p className="text-muted-foreground text-[14px] leading-relaxed">
                        Through our <em className="text-foreground/80 font-medium not-italic font-semibold">Virtual CFO services</em>, we establish granular Unit Economics reporting, optimize your CAC to LTV ratios, and enforce strict controls.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Card 3 */}
            <Card className="relative h-full bg-card border-[1.5px] border-blue-100/80 dark:border-blue-900/40 rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.08)] dark:hover:shadow-[0_12px_40px_rgb(0,0,0,0.3)] hover:-translate-y-1 transition-all duration-300">
              <CardContent className="p-8 md:p-10 flex flex-col h-full relative z-10">
                <div className="absolute top-4 right-6 text-[120px] font-black text-blue-50/80 dark:text-white/10 select-none z-0 leading-none">03</div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-50 dark:bg-blue-900/40 mb-8 border border-blue-100 dark:border-blue-800">
                    <Calculator className="w-8 h-8 text-blue-600" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-8 text-foreground leading-snug">Optimizing High-Tax Burdens</h3>
                  
                  <div className="space-y-6 flex-grow flex flex-col justify-between">
                    <div className="p-5 rounded-lg bg-blue-50/50 dark:bg-blue-900/10 border-l-4 border-l-blue-400">
                      <h4 className="text-[11px] font-bold text-blue-600 uppercase tracking-widest mb-3">
                        THE PROBLEM
                      </h4>
                      <p className="text-muted-foreground text-[14px] leading-relaxed">
                        Sole Proprietors, Freelancers, and HNIs often pay maximum slab rates failing to utilize strategic deductions and presumptive taxation schemes.
                      </p>
                    </div>
                    
                    <div className="p-5 rounded-lg bg-blue-50/50 dark:bg-blue-900/10 border-l-4 border-l-blue-600">
                      <h4 className="text-[11px] font-bold text-blue-700 dark:text-blue-400 uppercase tracking-widest mb-3">
                        OUR SOLUTION
                      </h4>
                      <p className="text-muted-foreground text-[14px] leading-relaxed">
                        We deploy advanced tax planning frameworks. Whether restructuring salary, crypto-tax loss harvesting, or DTAA benefits for NRIs, we legally minimize outflows.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section
        id="testimonials"
        className="relative w-full py-12 md:py-20 overflow-hidden"
      >
        <div className="container mx-auto px-4 relative z-5">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline uppercase">
              WHAT OUR CLIENTS SAY
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Real stories from businesses we've helped succeed.
            </p>
          </div>
          <div className="relative flex justify-center items-center">
            <div className="absolute w-[400px] h-[400px] md:w-[600px] md:h-[600px] border rounded-full border-border/50 animate-spin-slow"></div>
            <div className="absolute w-[500px] h-[500px] md:w-[800px] md:h-[800px] border rounded-full border-border/50 animate-spin-very-slow"></div>
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full max-w-4xl mx-auto"
            >
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem
                    key={index}
                    className="md:basis-1/2 lg:basis-1/2 p-4"
                  >
                    <div className="h-full">
                      <Card className="h-full flex flex-col glass-panel border-white/20 p-6 hover:scale-[1.02] transition-transform duration-300">
                        <CardContent className="pt-6 flex-grow flex flex-col justify-between">
                          <div>
                            <Quote className="h-8 w-8 text-primary mb-4" />
                            <p className="text-muted-foreground italic">
                              "{testimonial.text}"
                            </p>
                          </div>
                          <div className="mt-6 flex items-center">
                            <Avatar className="glossy-blue-background">
                              <AvatarFallback className="bg-transparent">
                                <User className="h-5 w-5 text-white" />
                              </AvatarFallback>
                            </Avatar>
                            <div className="ml-4">
                              <p className="font-semibold">
                                {testimonial.name}
                              </p>
                              <p className="text-sm text-muted-foreground">
                                {testimonial.company}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </section>

      <section id="cta" className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="glossy-blue-background text-primary-foreground rounded-3xl p-8 md:p-12 text-center">
            <div className="space-y-6 max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold font-headline uppercase">
                Get Expert Financial Advice — Free 15-Minute Consultation
              </h2>
              <p className="text-lg">
                Our team of qualified professionals supports businesses with
                accounting, taxation, and compliance — so you can focus on
                growth, not deadlines.
              </p>
              <div className="pt-4">
                <Dialog
                  open={isQuoteFormPopupOpen}
                  onOpenChange={setIsQuoteFormPopupOpen}
                >
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      size="lg"
                      className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary rounded-full px-8 py-6 text-lg font-semibold"
                    >
                      Book Free Consultation
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-md">
                    <AnimatedQuoteForm />
                  </DialogContent>
                </Dialog>
                <p className="text-sm mt-4 text-white/80">
                  No obligation • Confidential discussion • Response within 24
                  hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
