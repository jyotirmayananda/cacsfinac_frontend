"use client";

import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import placeholderImages from "@/lib/placeholder-images.json";
import companyhero from "../../../public/Image/company-hero-img.jpg";
import about from "../../../public/Image/about-us-img.jpg";

const services = [
  {
    title: "Full-Spectrum Financial and Tax Advisory",
    description:
      "From income tax planning and ITR filing to GST registration, GST returns, TDS compliance, and strategic tax optimization, we ensure you meet all tax obligations while maximizing savings under applicable laws.",
  },
  {
    title: "Internal and Statutory Audits",
    description:
      "Our internal audits help identify operational inefficiencies and improve internal controls, while our statutory audits ensure full compliance with the Companies Act, 2013 and other regulatory standards.",
  },
  {
    title: "Company Formation & Corporate Secretarial Services",
    description:
      "We handle Private Limited Company registration, LLP incorporation, ROC filings, and MCA compliance, ensuring your business is structured right from day one.",
  },
  {
    title:
      "Compliance with the Companies Act, 2013 & Other Statutory Regulations",
    description:
      "We manage complete corporate compliance including annual returns, board meeting documentation, FEMA filings, and labour law compliance, keeping your company penalty-free and audit-ready.",
  },
  {
    title: "Our goal",
    description:
      "Our goal is to ensure that your business stays compliant, efficient, and profitable, while we handle the complexities of financial and legal matters. Trust us to be your dedicated partners in navigating today’s dynamic business world.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <section id="hero" className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="flex flex-col text-center lg:text-left items-center lg:items-start">
              <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tight uppercase">
                <span className="text-primary">
                  Virtual CFO, NRI Tax & Compliance
                </span>
                <br />
                <span className="text-foreground">— All in One Place</span>
              </h1>
              <p className="mt-4 text-lg text-muted-foreground max-w-lg">
                Helping Startups, NRIs & SMEs with Taxation, ROC, MIS &
                Financial Strategy
              </p>
              <Button asChild size="lg" className="mt-6">
                <Link href="/contact">Get Started</Link>
              </Button>
            </div>
            <div className="flex justify-center">
              <motion.div
                animate={{
                  y: ["0rem", "-1rem", "0rem"],
                }}
                transition={{
                  duration: 4,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
              >
                <Image
                  src={companyhero}
                  alt="Business team in a meeting"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-lg object-cover"
                  data-ai-hint={placeholderImages.companyPage.hero.hint}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline uppercase">
              About Us
            </h2>
            <div className="max-w-4xl mx-auto mt-4 text-muted-foreground space-y-4 text-justify">
              <p>
                At CACS FinAcc Services, we are more than just accountants — we
                are your strategic partner for all accounting, taxation,
                compliance, and corporate governance needs. With a strong
                foundation built on the expertise of Chartered Accountants,
                Company Secretaries, and finance professionals, we provide a
                holistic approach that blends accuracy, compliance, and business
                strategy.
              </p>
              <p>
                With 10+ years of experience serving individuals, startups,
                SMEs, and established corporations, we understand the unique
                challenges businesses face in today’s highly regulated
                environment. Our mission is simple — to keep your business
                compliant, financially strong, and growth-ready while we handle
                the complexities of finance, law, and governance with precision.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <Image
                src={about}
                alt="Financial documents and analysis"
                width={500}
                height={500}
                className="rounded-2xl shadow-lg object-cover"
                data-ai-hint={placeholderImages.companyPage.about.hint}
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-primary font-headline uppercase">
                Our services include
              </h3>
              <p className="text-muted-foreground">
                We provide end-to-end solutions across multiple domains so you
                can focus on running your business while we ensure compliance
                and efficiency.
              </p>
              <ul className="space-y-4">
                {services.map((service, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-foreground font-semibold">
                        {service.title}
                      </p>
                      <p className="text-muted-foreground text-sm">
                        {service.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
              <p className="text-muted-foreground">
                Financial & Business Restructuring Solutions Our experts assist
                with mergers, acquisitions, debt restructuring, and capital
                optimization, ensuring smooth transitions while protecting
                business value.
              </p>
            </div>
          </div>
          <p className="text-center text-muted-foreground mt-12 max-w-4xl mx-auto">
            At CACS FinAcc Services, we don’t just provide services — we build
            lasting partnerships based on trust, transparency, and results.
            Whether you’re looking to streamline your accounting, improve
            compliance, or restructure your business, we are here to guide you
            every step of the way.
          </p>
        </div>
      </section>
    </main>
  );
}
