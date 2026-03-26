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
import { motion } from "framer-motion";

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
    <footer className="w-full bg-slate-950 text-slate-400 pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-8 mb-20">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-8">
            <Link href="/" className="inline-block transition-transform hover:scale-105">
              <Image
                src={logoSrc}
                alt="CACS FinAcc Logo"
                width={200}
                height={50}
                className="h-12 w-auto object-contain brightness-110"
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
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all duration-300"
                >
                  <social.icon className="h-5 w-5" />
                  <span className="sr-only">{social.name}</span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-black uppercase tracking-[0.2em] text-xs mb-8">Navigation</h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-bold hover:text-primary transition-colors flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-primary mr-0 group-hover:mr-2 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-black uppercase tracking-[0.2em] text-xs mb-8">Core Services</h3>
            <ul className="space-y-4">
              {servicesLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-bold hover:text-primary transition-colors flex items-center group"
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
            <h3 className="text-white font-black uppercase tracking-[0.2em] text-xs mb-8">Get In Touch</h3>
            <div className="space-y-4 text-sm font-bold">
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
                <p>+91 95916 33648</p>
              </div>
              <div className="flex gap-3 items-start underline underline-offset-4 decoration-primary/30 hover:decoration-primary transition-all">
                <div className="w-5 h-5 rounded-md bg-primary/10 flex items-center justify-center mt-0.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                </div>
                <a href="mailto:info@cacsfinaccservices.com">info@cacsfinaccservices.com</a>
              </div>
            </div>

            <a
              href="https://g.page/Bengaluru-Office-CACS-FinAcc-Services/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 px-6 py-4 rounded-2xl transition-all group w-full text-xs font-black uppercase tracking-wider text-white"
            >
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path fill="#4285F4" d="M23.7449 12.27C23.7449 11.48 23.6849 10.73 23.5549 10H12.2549V14.51H18.7249C18.4349 15.99 17.5849 17.24 16.3249 18.09V21.09H20.1849C22.4449 19.01 23.7449 15.92 23.7449 12.27Z" />
                <path fill="#34A853" d="M12.2549 24C15.4949 24 18.2049 22.92 20.1849 21.09L16.3249 18.09C15.2449 18.81 13.8749 19.25 12.2549 19.25C9.1349 19.25 6.47491 17.14 5.52491 14.29H1.54492V17.38C3.51492 21.3 7.5649 24 12.2549 24Z" />
                <path fill="#FBBC05" d="M5.52491 14.29C5.27491 13.57 5.14491 12.8 5.14491 12C5.14491 11.2 5.28491 10.43 5.52491 9.71V6.62H1.54492C0.724915 8.24 0.254913 10.06 0.254913 12C0.254913 13.94 0.724915 15.76 1.54492 17.38L5.52491 14.29Z" />
                <path fill="#EA4335" d="M12.2549 4.75C14.0249 4.75 15.6049 5.36 16.8549 6.55L20.2749 3.13C18.2049 1.19 15.4949 0 12.2549 0C7.5649 0 3.51492 2.7 1.54492 6.62L5.52491 9.71C6.47491 6.86 9.1349 4.75 12.2549 4.75Z" />
              </svg>
              Review our Bengaluru Office
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-black uppercase tracking-[0.2em]">
          <div className="flex items-center gap-4">
            <span>&copy; {new Date().getFullYear()} CACS FinAcc Services™</span>
            <span className="w-1 h-1 rounded-full bg-slate-800" />
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
