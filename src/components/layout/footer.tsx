"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import {
  ChevronRight,
  Linkedin,
  Twitter,
  Youtube,
  Instagram,
} from "lucide-react";

const socialLinks = [
  {
    name: "Twitter",
    href: "https://x.com/CaCsFinacc?t=BAzzWWF7AdW47d7N1OUNHg&s=09",
    icon: Twitter,
  },
  {
    name: "Youtube",
    href: "https://www.youtube.com/@cacsfinacc",
    icon: Youtube,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/cacsfinacc?igsh=bTRzNTZtMDV5ZHJl",
    icon: Instagram,
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/cacs-finacc-4385b8359/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    icon: Linkedin,
  },
];

export function Footer() {
  const { theme } = useTheme();
  const [logoSrc, setLogoSrc] = useState("/Image/cacslogonew.png");

  useEffect(() => {
    setLogoSrc(
      theme === "dark" ? "/Image/darklogo.png" : "/Image/cacslogonew.png"
    );
  }, [theme]);

  const legalLinks = [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/disclaimer", label: "Disclaimer" },
  ];

  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "Company" },
    { href: "/contact", label: "Contact" },
    ...legalLinks,
  ];

  const servicesLinks = [
    { href: "/registration/private-ltd", label: "Private Limited" },
    { href: "/compliance/bookkeeping", label: "Bookkeeping" },
    { href: "/compliance/hr-payroll", label: "Hr & Payroll" },
    { href: "/tax-filing/income-tax-notice", label: "Income Tax Notice" },
    { href: "/compliance/business-plan", label: "Business Plan" },
    { href: "/registration/trust-registration", label: "Trust Registration" },
  ];

  return (
    <footer className="bg-background text-foreground border-t mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex  mb-4">
              <Image
                src={logoSrc}
                alt="CACS FinAcc Logo"
                width={200}
                height={50}
                className="h-auto"
              />
            </Link>
            <div className="text-sm space-y-2">
              <p>Bengaluru, Karnataka, India</p>
              <p>
                <span className="font-bold">Phone:</span> +91 95916 33648
              </p>
              <p>
                <span className="font-bold">Email:</span>{" "}
                info@cacsfinaccservices.com
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-headline font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href} className="flex items-center">
                  <ChevronRight className="h-4 w-4 text-primary mr-1" />
                  <Link
                    href={link.href}
                    className="text-sm hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-headline font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {servicesLinks.map((link) => (
                <li key={link.href} className="flex items-center">
                  <ChevronRight className="h-4 w-4 text-primary mr-1" />
                  <Link
                    href={link.href}
                    className="text-sm hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-headline font-semibold mb-4">Get in Touch</h3>
            <p className="text-sm mb-4">
              Contact us for more information about our services.
            </p>
            <Link
              href="/contact"
              className="text-primary font-medium hover:underline text-sm block mb-4"
            >
              Contact
            </Link>

            <a
              href="https://g.page/Bengaluru-Office-CACS-FinAcc-Services/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-cyan-500/30 text-xs font-semibold px-4 py-3 rounded-xl transition-all shadow-sm group mb-6 w-full"
            >
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path fill="#4285F4" d="M23.7449 12.27C23.7449 11.48 23.6849 10.73 23.5549 10H12.2549V14.51H18.7249C18.4349 15.99 17.5849 17.24 16.3249 18.09V21.09H20.1849C22.4449 19.01 23.7449 15.92 23.7449 12.27Z" />
                <path fill="#34A853" d="M12.2549 24C15.4949 24 18.2049 22.92 20.1849 21.09L16.3249 18.09C15.2449 18.81 13.8749 19.25 12.2549 19.25C9.1349 19.25 6.47491 17.14 5.52491 14.29H1.54492V17.38C3.51492 21.3 7.5649 24 12.2549 24Z" />
                <path fill="#FBBC05" d="M5.52491 14.29C5.27491 13.57 5.14491 12.8 5.14491 12C5.14491 11.2 5.28491 10.43 5.52491 9.71V6.62H1.54492C0.724915 8.24 0.254913 10.06 0.254913 12C0.254913 13.94 0.724915 15.76 1.54492 17.38L5.52491 14.29Z" />
                <path fill="#EA4335" d="M12.2549 4.75C14.0249 4.75 15.6049 5.36 16.8549 6.55L20.2749 3.13C18.2049 1.19 15.4949 0 12.2549 0C7.5649 0 3.51492 2.7 1.54492 6.62L5.52491 9.71C6.47491 6.86 9.1349 4.75 12.2549 4.75Z" />
              </svg>
              <span>Review our Bengaluru Office</span>
            </a>

            <div className="flex space-x-3 mt-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="text-muted-foreground hover:text-primary"
                >
                  <social.icon className="h-6 w-6" />
                  <span className="sr-only">{social.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="border-t">
        <div className="container mx-auto px-4 py-6 text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} CACS FinAcc Services™. All rights
            reserved.
          </p>
          <p className="mt-2">
            “CACS FinAcc Services” and its logo are trademarks of CACS FinAcc.
            All other trademarks belong to their respective owners.
          </p>
        </div>
      </div>
    </footer>
  );
}
