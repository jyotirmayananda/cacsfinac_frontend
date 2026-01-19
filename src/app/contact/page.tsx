import type { Metadata } from 'next'
import ContactContent from './contact-content'
import React from 'react'

export const metadata: Metadata = {
  title: 'Contact Us | CACS FinAcc - Free Financial Consultation',
  description: 'Connect with CACS FinAcc for expert tax filing, Virtual CFO services, and business compliance. Get a free 15-minute consultation today.',
  keywords: ['Contact CACS FinAcc', 'Financial Consultation Bangalore', 'Tax Experts Contact', 'Chartered Accountant Number', 'Business Advisory Contact'],
  openGraph: {
    title: 'Contact Us | CACS FinAcc',
    description: 'Get in touch for expert financial advice and compliance services.',
    url: 'https://cacsfinacc.com/contact',
    images: [
      {
        url: '/Image/who-we-are-img.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact CACS FinAcc',
      },
    ],
  },
}

export default function ContactPage() {
  return <ContactContent />
}
