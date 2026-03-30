"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";
import { createClient } from "@/lib/supabase";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../components/ui/form";
import { Input } from "../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Button } from "../components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../components/ui/dialog";
import { CheckCircle2 } from "lucide-react";

const quoteFormSchema = z.object({
  firstName: z.string().min(1, "First name is required."),
  lastName: z.string().min(1, "Last name is required."),
  email: z.string().email("Invalid email address."),
  mobile: z.string().min(10, "Mobile number must be at least 10 digits."),
  service: z.string().min(1, "Please select a service."),
});

const quoteFormServices = [
  "1.Accounting & Bookkeeping (Monthly)",
  "2.GST Returns / Compliance",
  "3.Income Tax Filing",
  "4.Startup / Company Compliance",
  "5.Virtual CFO / Advisory",
  "6.Not Sure – Need Guidance",
];

export function QuoteForm() {
  const { toast } = useToast();
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof quoteFormSchema>>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
      service: "",
    },
  });

  async function onSubmit(values: z.infer<typeof quoteFormSchema>) {
    setIsSubmitting(true);
    try {
      const supabase = createClient();

      const { error } = await supabase.from('quote_submissions').insert({
        first_name: values.firstName,
        last_name: values.lastName,
        email: values.email,
        mobile: values.mobile,
        service: values.service,
        form_type: 'quote',
      });

      if (error) {
        throw error;
      }

      setIsSuccessOpen(true);
      form.reset();
    } catch (error) {
      console.error("Failed to submit form", error);
      toast({
        title: "Error",
        description: "Failed to submit your request. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <Card className="w-full shadow-lg">
        <CardHeader className="space-y-4 pb-8">
          <CardTitle className="text-3xl font-black text-center tracking-tight text-slate-600 dark:text-white">
            Request a Consultation
          </CardTitle>
          <CardDescription className="text-center text-slate-600 dark:text-slate-400 text-sm font-medium leading-relaxed max-w-[280px] mx-auto">
            Share your requirements and we will get back with a structured approach to support your financial and compliance needs.
          </CardDescription>
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
                name="service"
                render={({ field }) => (
                  <FormItem>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="h-12 rounded-xl border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
                          <SelectValue placeholder="Service Requirement" />
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
              <Button type="submit" size="lg" className="w-full h-14 rounded-xl text-lg font-bold bg-primary hover:bg-primary/90 shadow-xl shadow-primary/20 transition-all active:scale-[0.98]" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Schedule Consultation"}
              </Button>
            </form>
          </Form>

          <p className="mt-8 text-[10px] text-center text-slate-400 dark:text-slate-500 font-medium leading-relaxed">
            Services delivered through structured processes and in collaboration with qualified professionals.
          </p>
        </CardContent>
      </Card>

      <Dialog open={isSuccessOpen} onOpenChange={setIsSuccessOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader className="flex flex-col items-center justify-center text-center space-y-4 pt-4">
            <div className="rounded-full bg-green-100 p-3">
              <CheckCircle2 className="h-8 w-8 text-green-600" />
            </div>
            <DialogTitle className="text-2xl">Thank You!</DialogTitle>
            <DialogDescription className="text-center text-base">
              Your consultation request has been received successfully.
              <br />
              <span className="block mt-2">
                Our team will review your details and get back to you shortly to schedule your free consultation.
              </span>
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center pb-4">
            <Button onClick={() => setIsSuccessOpen(false)} className="px-8">
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
