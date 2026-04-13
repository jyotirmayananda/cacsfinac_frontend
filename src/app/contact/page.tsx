import type { Metadata } from 'next'
import ContactContent from './contact-content'
import React from 'react'

export const metadata: Metadata = {
  title: 'Contact Us | CACS FinAcc - Free Financial Consultation',
  description: 'Connect with CACS FinAcc for expert tax filing, Virtual CFO services, and business compliance. Get a free 15-minute consultation today.',
  keywords: [
    'Contact CACS FinAcc',
    'Financial Consultation Bangalore',
    'Tax Experts Contact',
    'Chartered Accountant Number',
    'Business Advisory Contact',
    'CACS',
    'CA',
    'Tax',
    'GST',
    'ITR',
    'CFO',
    "FinAcc",
    "Audit"
  ],
  alternates: {
    canonical: 'https://cacsfinaccservices.com/contact',
  },
  openGraph: {
    title: 'Contact Us | CACS FinAcc',
    description: 'Get in touch for expert financial advice and compliance services.',
    url: 'https://cacsfinaccservices.com/contact',
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
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AccountingService",
            "name": "CACS FinAcc Services",
            "image": "https://cacsfinaccservices.com/Image/logo.png",
            "@id": "https://cacsfinaccservices.com/contact",
            "url": "https://cacsfinaccservices.com",
            "telephone": "+91-9591633648",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "HSR Layout",
              "addressLocality": "Bengaluru",
              "addressRegion": "Karnataka",
              "postalCode": "560102",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 12.9141,
              "longitude": 77.6309
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
              ],
              "opens": "09:30",
              "closes": "20:00"
            }
          })
        }}
      />
      <ContactContent />
    </>
  )
}
