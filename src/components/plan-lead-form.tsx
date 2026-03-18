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
        <DialogContent className="sm:max-w-md bg-card border-cyan-500/20 rounded-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-headline uppercase text-foreground">
              Get Started with {planTitle}
            </DialogTitle>
            <DialogDescription className="text-muted-foreground mt-2">
              Please provide your details below. Our team will contact you to initiate the process.
              {planPrice && <span className="block mt-2 font-semibold text-primary">Amount: ₹{planPrice}</span>}
            </DialogDescription>
          </DialogHeader>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 py-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="First Name*" className="bg-background" {...field} />
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
                        <Input placeholder="Last Name*" className="bg-background" {...field} />
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
                      <Input type="email" placeholder="E-mail Id*" className="bg-background" {...field} />
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
                      <Input placeholder="Mobile*" className="bg-background" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="panNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="PAN Number (Optional)" className="bg-background" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" size="lg" className="w-full bg-[#00B4D8] hover:bg-cyan-600 text-white" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit Details"}
              </Button>
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
