
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { ChevronRight, Linkedin, Twitter, Youtube, Instagram } from 'lucide-react';

const socialLinks = [
    { name: 'Twitter', href: '#', icon: Twitter },
    { name: 'Youtube', href: '#', icon: Youtube },
    { name: 'Instagram', href: '#', icon: Instagram },
    { name: 'Linkedin', href: '#', icon: Linkedin },
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
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/disclaimer', label: 'Disclaimer' },
  ];

  const quickLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'Company' },
    { href: '/contact', label: 'Contact' },
    ...legalLinks,
  ];

  const servicesLinks = [
    { href: '/registration/private-ltd', label: 'Private Limited' },
    { href: '/compliance/bookkeeping', label: 'Bookkeeping' },
    { href: '/compliance/hr-payroll', label: 'Hr & Payroll' },
    { href: '/tax-filing/income-tax-notice', label: 'Income Tax Notice' },
    { href: '/compliance/business-plan', label: 'Business Plan' },
    { href: '/registration/trust-registration', label: 'Trust Registration' },
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
                <p><span className="font-bold">Phone:</span> +91 95916 33648</p>
                <p><span className="font-bold">Email:</span> info@cacsfinaccservices.com</p>
            </div>
          </div>

          <div>
            <h3 className="font-headline font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href} className="flex items-center">
                  <ChevronRight className="h-4 w-4 text-primary mr-1" />
                  <Link href={link.href} className="text-sm hover:text-primary transition-colors">
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
                  <Link href={link.href} className="text-sm hover:text-primary transition-colors">
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
            <Link href="/contact" className="text-primary font-medium hover:underline text-sm">Contact</Link>
            <div className="flex space-x-2 mt-4">
              {socialLinks.map((social) => (
                 <Link key={social.name} href={social.href} className="text-muted-foreground hover:text-primary">
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
            &copy; {new Date().getFullYear()} CACS FinAcc Services™. All rights reserved.
          </p>
          <p className="mt-2">
            “CACS FinAcc Services” and its logo are trademarks of CACS FinAcc. All other trademarks belong to their respective owners.
          </p>
        </div>
      </div>
    </footer>
  );
}
