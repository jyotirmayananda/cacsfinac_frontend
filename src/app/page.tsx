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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { WelcomePopup } from "@/components/welcome-popup";
import placeholderImages from "@/lib/placeholder-images.json";
import { AnimatedQuoteForm } from "@/components/animated-quote-form";
import Autoplay from "embla-carousel-autoplay";
import sliderimg1 from "../../public/Image/income tax filing services.jpg";
import sliderimg2 from "../../public/Image/Virtual CFO.jpg";
import sliderimg3 from "../../public/Image/who-we-are-img2.jpg";
import sliderimg4 from "../../public/Image/accounting & book keeping2.jpg";
import sliderimg5 from "../../public/Image/strategic tax & wealth advisory2.jpg";
import whoweare1 from "../../public/Image/who-we-are-img.jpg";
import whoweare2 from "../../public/Image/who-we-are-img2.jpg";

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
    company: "Tech Startup Founder",
    avatar: "S",
    text: "From incorporation to GST and payroll, they handled it all. As a solo founder, this was a game-changer. Saved time and prevented costly delays.",
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
  },
  {
    icon: Landmark,
    title: "Business Tax Filing Services (Income Tax & GST)",
  },
  {
    icon: Receipt,
    title: "TDS Return Filing, Interest Calculation & Form 26Q/24Q Support",
  },
  {
    icon: User,
    title: "ITR-1 (Sahaj) Filing Services",
  },
  {
    icon: FileText,
    title: "ITR-2 Filing Services",
  },
  {
    icon: Calculator,
    title: "ITR-3 Filing for Professionals & Business Owners",
  },
  {
    icon: FileText,
    title: "ITR-4 (Sugam) Presumptive Scheme Filing",
  },
  {
    icon: Users,
    title: "ITR-5 Filing for Firms, LLPs & AOPs",
  },
  {
    icon: Building2,
    title: "ITR-6 Filing for Private Limited & Companies",
  },
  {
    icon: Lightbulb,
    title: "GST Registration, Monthly Filing & ITC Reconciliation",
  },
  {
    icon: FileWarning,
    title: "Income Tax Notice Response & Rectification Services",
  },
  {
    icon: Fingerprint,
    title: "PAN/TAN Allotment & Digital Signature (DSC) Services",
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
  const [isQuoteFormPopupOpen, setIsQuoteFormPopupOpen] = React.useState(false);

  React.useEffect(() => {
    const popupShown = sessionStorage.getItem("popupShown");
    if (!popupShown) {
      const timer = setTimeout(() => {
        setIsPopupOpen(true);
        sessionStorage.setItem("popupShown", "true");
      }, 1000); // Show popup after 1 second
      return () => clearTimeout(timer);
    }
  }, []);

  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  return (
    <div className="flex flex-col">
      <WelcomePopup open={isPopupOpen} onOpenChange={setIsPopupOpen} />
      <section id="hero" className="w-full">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-12">
            <div className="flex flex-col justify-center text-center lg:text-left items-center lg:items-start">
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-4 uppercase">
                <span className="text-primary">
                  Virtual CFO, NRI Tax & Compliance
                </span>
                <br />
                <span className="text-foreground">— All in One Place</span>
              </h1>
              <p className="mt-4 text-2xl text-muted-foreground max-w-3xl">
                Helping Startups, NRIs & SMEs with Taxation, ROC, MIS &
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

      <section id="services" className="w-full py-10 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline uppercase">
              OUR CORE SERVICES
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {homeServices.map((service, index) => (
              <Card
                key={index}
                className="group relative flex flex-col items-start justify-between p-4 text-left rounded-2xl bg-card text-card-foreground shadow-lg transition-all duration-300 ease-in-out hover:text-white hover:shadow-2xl overflow-hidden h-48 w-full"
              >
                <div className="absolute inset-0 bg-primary transform scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500 ease-in-out"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10 flex flex-col h-full w-full">
                  <div className="rounded-full bg-primary/10 p-2 transition-all duration-300 group-hover:bg-white group-hover:text-primary w-fit">
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
                  >
                    Know More
                  </Button>
                </div>
              </Card>
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
            At CACS FinAcc, we provide a one-stop solution for all your
            accounting, financial, compliance, and corporate governance needs.
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
                alt="Business meeting with laptops and papers"
                width={400}
                height={200}
                className="rounded-2xl shadow-lg object-cover w-full h-full"
                data-ai-hint={placeholderImages.homepage.whoWeAre.primary.hint}
              />
              <div className="absolute -bottom-8 -left-8 w-48 h-48">
                <Image
                  src={whoweare2}
                  alt="Close up of financial documents"
                  width={200}
                  height={200}
                  className="rounded-2xl shadow-xl border-4 border-white object-cover"
                  data-ai-hint={
                    placeholderImages.homepage.whoWeAre.secondary.hint
                  }
                />
              </div>
              <div className="absolute -bottom-8 right-8 bg-blue-600 text-white p-4 rounded-lg shadow-xl text-center">
                <p className="text-4xl font-bold">10+</p>
                <p className="text-sm">
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
                    className="md:basis-1/2 lg:basis-1/2"
                  >
                    <div className="p-1">
                      <Card className="h-full flex flex-col bg-background/80 backdrop-blur-sm">
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
                GET EXPERT FINANCIAL ADVICE TAILORED TO YOUR BUSINESS
              </h2>
              <p className="text-lg">
                Our team of qualified professionals is here to help you with
                accounting, taxation, and financial compliance — so you can
                focus on growing your business.
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
                      Book a Free Consultation
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-md">
                    <AnimatedQuoteForm />
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
