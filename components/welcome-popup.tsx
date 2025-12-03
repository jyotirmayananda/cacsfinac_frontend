
'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Building2, Briefcase, X } from 'lucide-react';
import type { DialogProps } from '@radix-ui/react-dialog';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const popupServices = [
  {
    icon: FileText,
    title: "Post-Tax Season Business Solutions",
    description:
      "From GST filings to TDS returns & financial advisory—we help you stay ahead with complete compliance support",
    buttonText: "Book Now",
    href: "/contact",
  },
  {
    icon: Building2,
    title: 'Corporate Tax & Compliance',
    description: 'GST, TDS, ROC filings & audit support for your business.',
    buttonText: 'Explore Services',
    href: '/tax-filing/business-tax-filings',
  },
  {
    icon: Briefcase,
    title: 'Virtual CFO',
    description: 'Expert MIS, cash flow strategies, and growth planning for your business success.',
    buttonText: 'Learn More',
    href: '/compliance/cfo-services',
  },
];

export function WelcomePopup({ open, onOpenChange }: DialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className={cn(
        "max-w-6xl p-10 max-h-[90svh] overflow-y-auto"
      )}>
        <DialogHeader className="text-center">
          <DialogTitle className="text-4xl text-center font-bold font-headline mb-2 text-primary">
            File taxes stress-free.
          </DialogTitle>
          <DialogDescription className="text-lg text-center text-muted-foreground">
            Experience the confidence of expert-led tax and financial services.
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {popupServices.map((service, index) => (
            <Card key={index} className="p-6 shadow-lg hover:shadow-xl transition-shadow bg-background/80">
              <CardContent className="flex flex-col items-center justify-between h-full p-0 text-center">
                <div className='flex flex-col items-center'>
                  <div className="bg-muted p-4 rounded-full mb-4">
                    <service.icon className="h-10 w-10 text-foreground" />
                  </div>
                  <h3 className="text-xl font-headline font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm mb-6 flex-grow">{service.description}</p>
                </div>
                <Button asChild className="w-full mt-auto">
                  <a href={service.href}>{service.buttonText}</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
