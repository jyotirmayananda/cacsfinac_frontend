"use client";

import { createClient } from "@/lib/supabase";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { CheckCircle2, Mail } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../../components/ui/form";
import { useToast } from "@/hooks/use-toast";

import Image from "next/image";

const forgotPasswordSchema = z.object({
  email: z.string().email("Invalid email address."),
});

const loginimg = "/Image/loginbackground.jpg";

export default function ForgotPasswordPage() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [sentEmail, setSentEmail] = useState("");
  const supabase = createClient();
  const form = useForm<z.infer<typeof forgotPasswordSchema>>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(values: z.infer<typeof forgotPasswordSchema>) {
    setIsLoading(true);
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(values.email, {
        redirectTo: `${window.location.origin}/auth/callback?next=/reset-password`,
      });

      if (error) {
        throw error;
      }

      setSentEmail(values.email);
      setIsSuccess(true);
      form.reset();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }

  if (isSuccess) {
    return (
      <div className="relative flex items-center justify-center h-[calc(100vh-5rem)] overflow-hidden bg-background">
        <div className="absolute inset-0 z-0">
          <Image
            src={loginimg}
            alt="Background"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
        </div>
        <Card className="relative z-10 w-full max-w-md shadow-2xl border-muted/20 bg-card/95 backdrop-blur-sm mx-4">
          <CardHeader className="space-y-4 text-center pt-8">
            <div className="mx-auto w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center">
              <Mail className="h-8 w-8 text-green-600 dark:text-green-500" />
            </div>
            <CardTitle className="text-2xl font-bold tracking-tight">
              Password Reset Request Received
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-center">
            <p className="text-muted-foreground text-sm leading-relaxed">
              If the email <span className="font-semibold text-foreground">{sentEmail}</span> is registered with us, a secure reset link has been sent.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Please follow the instructions in your inbox to proceed.
            </p>
            <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg p-3 mt-4">
              <p className="text-xs text-amber-800 dark:text-amber-300">
                If this request was not made by you, please ignore this message.
              </p>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-3 pb-6">
            <Button asChild className="w-full h-11 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
              <Link href="/login">Return to Login</Link>
            </Button>
            <div className="text-center text-xs text-muted-foreground pt-2 space-y-1">
              <p className="font-medium">CACS FinAcc Services</p>
              <p>+91-9591633648 · info@cacsfinaccservices.com</p>
              <p>Bengaluru, Karnataka</p>
            </div>
          </CardFooter>
        </Card>
      </div>
    );
  }

  return (
    <div className="relative flex items-center justify-center h-[calc(100vh-5rem)] overflow-hidden bg-background">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={loginimg}
          alt="Background"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
      </div>

      <Card className="relative z-10 w-full max-w-md shadow-2xl border-muted/20 bg-card/95 backdrop-blur-sm mx-4">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-3xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Forgot Password?
          </CardTitle>
          <CardDescription className="text-base">
            Enter your email address and we'll send you a link to reset your password.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="name@example.com"
                        className="pl-4 h-12 bg-background/50"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="w-full h-12 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all font-semibold text-lg shadow-lg"
                disabled={isLoading}
              >
                {isLoading ? "Sending Link..." : "Send Reset Link"}
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-2 pb-8 text-center text-sm text-muted-foreground">
          <div className="text-center w-full">
            Remember your password?{" "}
            <a href="/login" className="font-semibold text-primary hover:text-primary/80 transition-colors">
              Sign in
            </a>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
