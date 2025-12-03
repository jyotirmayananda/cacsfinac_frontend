"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const quoteFormSchema = z.object({
  firstName: z.string().min(1, "First name is required."),
  lastName: z.string().min(1, "Last name is required."),
  email: z.string().email("Invalid email address."),
  mobile: z.string().min(10, "Mobile number must be at least 10 digits."),
  city: z.string().optional(),
  service: z.string().min(1, "Please select a service."),
});

const quoteFormServices = [
  "ITR-1 Return Filing",
  "ITR-2 Return Filing",
  "ITR-3 Return Filing",
  "ITR-4 Return Filing",
  "ITR-5 Return Filing",
  "ITR-6 Return Filing",
  "ITR-7 Return Filing",
  "Income Tax Notice",
  "Bookkeeping & Accounting",
  "12A & 80G Registration",
  "Tax Savings & Filings",
  "Pvt. Ltd. Registration",
  "LLP Registration",
  "Trademark Registration",
  "GST Registration",
  "MSME Registration",
  "Section 8 Company Registration and Compliances",
  "Society and Trust and AOP Registration",
  "Trade mark",
  "Other Services",
];

export function QuoteForm() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof quoteFormSchema>>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
      city: "",
      service: "",
    },
  });

  async function onSubmit(values: z.infer<typeof quoteFormSchema>) {
    try {
      const apiBase =
        process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

      const resp = await fetch(`${apiBase}/api/forms/submit`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          mobile: values.mobile,
          city: values.city,
          service: values.service,
          formType: "quote",
        }),
      });

      const data = await resp.json();
      if (!resp.ok) {
        console.error("Form submission failed", data);
        toast({
          title: "Error",
          description: data?.message || "Failed to submit your request.",
          variant: "destructive",
        });
        return;
      }

      toast({
        title: "Quote Request Sent!",
        description:
          data?.message ||
          "Thank you! We will get back to you with a quote shortly.",
      });
      form.reset();
    } catch (error) {
      console.error("Failed to submit form", error);
      toast({
        title: "Error",
        description: "Failed to submit your request. Please try again later.",
        variant: "destructive",
      });
    }
  }

  return (
    <Card className="w-full shadow-lg">
      <CardHeader>
        <CardTitle className="font-headline text-2xl text-center uppercase">
          Get Started in Just a Minute
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
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
                  <FormItem>
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
              Get Started Now
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
