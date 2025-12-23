
'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { useToast } from '@/hooks/use-toast';
import { API_ENDPOINTS } from '@/lib/api';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';

const quoteFormSchema = z.object({
  firstName: z.string().min(1, 'First name is required.'),
  lastName: z.string().min(1, 'Last name is required.'),
  email: z.string().email('Invalid email address.'),
  mobile: z.string().min(10, 'Mobile number must be at least 10 digits.'),
  city: z.string().optional(),
  service: z.string().min(1, 'Please select a service.'),
});

const quoteFormServices = [
  'Accounting & Bookkeeping (Monthly)',
  'GST Returns / Compliance',
  'Income Tax Filing',
  'Startup / Company Compliance',
  'Virtual CFO / Advisory',
  'Not Sure – Need Guidance',
];

export function QuoteForm() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof quoteFormSchema>>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      mobile: '',
      city: '',
      service: '',
    },
  });

  async function onSubmit(values: z.infer<typeof quoteFormSchema>) {
    try {
      const response = await fetch(API_ENDPOINTS.SUBMIT_FORM, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          mobile: values.mobile,
          city: values.city,
          service: values.service,
          formType: 'quote',
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
    toast({
      title: 'Quote Request Sent!',
          description: 'Thank you! We will get back to you with a quote shortly. Check your email for confirmation.',
    });
    form.reset();
      } else {
        toast({
          variant: 'destructive',
          title: 'Submission Failed',
          description: data.message || 'An error occurred. Please try again.',
        });
      }
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Network Error',
        description: 'Could not connect to the server. Please try again later.',
      });
      console.error('Form submission error:', error);
    }
  }

  return (
    <Card className="w-full shadow-lg">
      <CardHeader>
        <CardTitle className="font-headline text-2xl text-center uppercase">
          Get a Free CA-Led Consultation (15 Minutes)
        </CardTitle>
        <p className="text-center text-muted-foreground mt-2">
          Speak with our accounting team to understand compliance, costs, and next steps — no obligation.
        </p>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="flex gap-4">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormControl>
                      <Input placeholder="First Name*" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormControl>
                      <Input placeholder="Last Name*" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input type="email" placeholder="E-mail Id*" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="mobile"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Mobile*" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="City" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="service"
              render={({ field }) => (
                <FormItem>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Looking For*" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {quoteFormServices.map((service) => (
                        <SelectItem key={service} value={service}>
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" size="lg" className="w-full">
              Book Free Consultation
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
