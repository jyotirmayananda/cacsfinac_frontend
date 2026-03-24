"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";
import { createClient } from "@/lib/supabase";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../components/ui/form";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../components/ui/dialog";
import { CheckCircle2 } from "lucide-react";

import { useRouter } from "next/navigation";
import { isAuthenticated } from "../../lib/auth";

const planFormSchema = z.object({
  firstName: z.string().min(1, "First name is required."),
  lastName: z.string().min(1, "Last name is required."),
  email: z.string().email("Invalid email address."),
  mobile: z.string().min(10, "Mobile number must be at least 10 digits."),
  panNumber: z.string().optional(),
});

interface PlanLeadFormProps {
  planTitle: string;
  planPrice: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function PlanLeadForm({ planTitle, planPrice, open, onOpenChange }: PlanLeadFormProps) {
  const router = useRouter();
  const { toast } = useToast();
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof planFormSchema>>({
    resolver: zodResolver(planFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
      panNumber: "",
    },
  });

  async function onSubmit(values: z.infer<typeof planFormSchema>) {
    if (!isAuthenticated()) {
      toast({
        title: "Authentication Required",
        description: "Please log in to submit your plan details.",
        variant: "destructive",
      });
      // Optionally route them to login
      router.push("/login");
      return;
    }

    setIsSubmitting(true);
    try {
      const supabase = createClient();

      const { error } = await supabase.from('quote_submissions').insert({
        first_name: values.firstName,
        last_name: values.lastName,
        email: values.email,
        mobile: values.mobile,
        service: planTitle,
        form_type: 'plan_purchase',
      });

      if (error) {
        throw error;
      }

      setIsSuccessOpen(true);
      form.reset();
      onOpenChange(false); // Close the plan form dialog
    } catch (error) {
      console.error("Failed to submit form", error);
      toast({
        title: "Error",
        description: "Failed to submit your request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="max-w-[95vw] md:max-w-4xl w-full p-6 md:p-10 bg-card border-cyan-500/20 rounded-3xl shadow-[0_0_50px_-12px_rgba(0,180,216,0.2)]">
          <DialogHeader className="mb-6 flex flex-col items-center justify-center text-center">
            <DialogTitle className="text-3xl md:text-4xl font-extrabold font-headline uppercase tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 w-full text-center">
              Get Started with {planTitle}
            </DialogTitle>
            <DialogDescription className="text-muted-foreground text-sm md:text-lg max-w-2xl mx-auto font-medium text-center mt-2">
              Please provide your details below. Our team will contact you to initiate the process.
              {planPrice && <span className="block mt-4 font-bold text-2xl text-foreground">Amount: ₹{planPrice}</span>}
            </DialogDescription>
          </DialogHeader>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 py-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="First Name*" className="bg-background h-12 text-md transition-all hover:border-cyan-400 focus:border-cyan-500" {...field} />
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
                        <Input placeholder="Last Name*" className="bg-background h-12 text-md transition-all hover:border-cyan-400 focus:border-cyan-500" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="md:col-span-1">
                      <FormControl>
                        <Input type="email" placeholder="E-mail Id*" className="bg-background h-12 text-md transition-all hover:border-cyan-400 focus:border-cyan-500" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="mobile"
                  render={({ field }) => (
                    <FormItem className="md:col-span-1">
                      <FormControl>
                        <Input placeholder="Mobile*" className="bg-background h-12 text-md transition-all hover:border-cyan-400 focus:border-cyan-500" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="panNumber"
                  render={({ field }) => (
                    <FormItem className="md:col-span-2">
                      <FormControl>
                        <Input placeholder="PAN Number (Optional)" className="bg-background h-12 text-md transition-all hover:border-cyan-400 focus:border-cyan-500" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="pt-6 flex justify-center">
                <Button type="submit" size="lg" className="w-full md:w-2/3 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-bold rounded-xl text-lg h-14 shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:-translate-y-0.5" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Submit Details to CA"}
                </Button>
              </div>
            </form>
          </Form>
        </DialogContent>
      </Dialog>

      <Dialog open={isSuccessOpen} onOpenChange={setIsSuccessOpen}>
        <DialogContent className="sm:max-w-md border-green-500/20 rounded-2xl">
          <DialogHeader className="flex flex-col items-center justify-center text-center space-y-4 pt-4">
            <div className="rounded-full bg-green-100 p-3">
              <CheckCircle2 className="h-8 w-8 text-green-600" />
            </div>
            <DialogTitle className="text-2xl text-green-600 font-headline">Request Received!</DialogTitle>
            <DialogDescription className="text-center text-base">
              Thank you for choosing <span className="font-semibold text-foreground">{planTitle}</span>.
              <br />
              <span className="block mt-2">
                Our expert CA will contact you shortly on your mobile or email to begin the process.
              </span>
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center pb-4">
            <Button onClick={() => setIsSuccessOpen(false)} className="px-8 bg-green-600 hover:bg-green-700 text-white">
              Done
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
