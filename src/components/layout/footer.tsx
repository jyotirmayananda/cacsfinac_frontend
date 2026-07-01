"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronRight,
  Linkedin,
  Twitter,
  Youtube,
  Instagram,
} from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

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
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const logoSrc = mounted && (theme === "dark" || resolvedTheme === "dark")
    ? "/Image/darklogo.png"
    : "/Image/cacslogonew.png";

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
    { href: "/services/income-tax-filing", label: "Income Tax" },
    { href: "/services/gst-services", label: "GST" },
    { href: "/services/nri-taxation", label: "NRI Tax" },
    { href: "/services/company-registration", label: "Company Setup" },
    { href: "/services/roc-compliance", label: "ROC Compliance" },
    { href: "/services/payroll-hr-compliance", label: "Payroll" },
    { href: "/services/virtual-cfo", label: "Virtual CFO" },
    { href: "/services/accounting-bookkeeping", label: "Accounting" },
    { href: "/services/audit-support", label: "Audit" },
  ];

  return (
    <footer className="w-full bg-white dark:bg-slate-950 text-muted-foreground pt-16 pb-6 md:pb-8 border-t border-border/50 relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-h-[280px] h-[280px] bg-primary/5 blur-[100px] rounded-full pointer-events-none opacity-40" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-10">
          {/* Brand Column */}
          <div className="lg:col-span-3 space-y-8">
            <Link href="/" className="inline-block transition-transform hover:scale-105">
              <Image
                src={logoSrc}
                alt="CACS FinAcc Logo"
                width={300}
                height={80}
                className="h-20 w-auto object-contain"
              />
            </Link>
            <p className="text-lg font-medium leading-relaxed max-w-sm">
              Strategic financial and compliance support for startups, SMEs, and professionals across India.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4, scale: 1.1 }}
                  className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 shadow-sm"
                >
                  <social.icon className="h-5 w-5" />
                  <span className="sr-only">{social.name}</span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-foreground font-bold tracking-widest text-sm mb-8">Navigation</h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-base font-bold hover:text-primary transition-colors flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-primary mr-0 group-hover:mr-2 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div className="lg:col-span-4">
            <div className="grid grid-cols-2 gap-x-4 mb-8">
              <h3 className="text-foreground font-bold tracking-widest text-sm">Core Services</h3>
              <h3 className="text-foreground font-bold tracking-widest text-sm">Core Services</h3>
            </div>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-4">
              {servicesLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-base font-bold hover:text-primary transition-colors flex items-center group whitespace-nowrap"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-primary mr-0 group-hover:mr-2 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-3 space-y-8">
            <h3 className="text-foreground font-bold tracking-widest text-sm mb-8">Get In Touch</h3>
            <div className="space-y-4 text-base font-bold">
              <div className="flex gap-3 items-start">
                <div className="w-5 h-5 rounded-md bg-primary/10 flex items-center justify-center mt-0.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                </div>
                <p>Bengaluru, Karnataka, India</p>
              </div>
              <div className="flex gap-3 items-start">
                <div className="w-5 h-5 rounded-md bg-primary/10 flex items-center justify-center mt-0.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                </div>
                <a
                  href="tel:+919591633648"
                  className="no-underline hover:text-primary transition-colors lining-nums"
                >
                  +91 95916 33648
                </a>
              </div>
              <div className="flex gap-3 items-start">
                <div className="w-5 h-5 rounded-md bg-primary/10 flex items-center justify-center mt-0.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                </div>
                <a
                  href="mailto:info@cacsfinaccservices.com"
                  className="no-underline hover:text-primary transition-colors"
                >
                  info@cacsfinaccservices.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-bold tracking-widest">
          <div className="flex items-center gap-4">
            <span>&copy; {new Date().getFullYear()} CACS FinAcc Services™</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span className="opacity-50">All Rights Reserved</span>
          </div>
          
          <div className="flex items-center gap-8 opacity-50">
            <Link href="/privacy" className="hover:opacity-100 transition-opacity">Privacy Policy</Link>
            <Link href="/disclaimer" className="hover:opacity-100 transition-opacity">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
