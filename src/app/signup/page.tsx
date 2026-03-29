"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";
import { User, Mail, Lock, ArrowRight, CheckCircle2, Eye, EyeOff } from "lucide-react";
import { createClient } from "@/lib/supabase";

import { Button } from "../../components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../../components/ui/form";
import { Input } from "../../components/ui/input";
// import logo from "../../../public/Image/cacslogonew.png";
// import signupimg from "../../../public/Image/loginbackground.jpg";
const logo = "/Image/darklogo.png";
const signupimg = "/Image/loginbackground.jpg";

const signupFormSchema = z
  .object({
    fullName: z.string().min(1, { message: "Full name is required." }),
    email: z.string().email({
      message: "Please enter a valid email address.",
    }),
    password: z.string().min(6, {
      message: "Password must be at least 6 characters long.",
    }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match.",
    path: ["confirmPassword"],
  });

export default function SignupPage() {
  const { toast } = useToast();
  const supabase = createClient();
  const [isSuccess, setIsSuccess] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const form = useForm<z.infer<typeof signupFormSchema>>({
    resolver: zodResolver(signupFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  async function onSubmit(values: z.infer<typeof signupFormSchema>) {
    try {
      const { data, error } = await supabase.auth.signUp({
        email: values.email,
        password: values.password,
        options: {
          emailRedirectTo: `${window.location.origin}/auth/callback`,
          data: {
            full_name: values.fullName,
          },
        },
      });

      if (error) {
        toast({
          variant: "destructive",
          title: "Signup Failed",
          description: error.message,
        });
        return;
      }

      if (data.user) {
        setUserEmail(values.email);
        setIsSuccess(true);
        toast({
          title: "Signup Successful!",
          description: "Please check your email for a verification link.",
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "An unexpected error occurred.",
      });
      console.error("Signup error:", error);
    }
  }

  if (isSuccess) {
    return (
      <div className="min-h-screen w-full bg-background lg:grid lg:grid-cols-2">
        <div className="relative hidden lg:flex flex-col items-center justify-center bg-blue-900 text-white p-12 text-center">
          <Image
            src={signupimg}
            alt="Decorative background"
            fill
            className="object-cover opacity-30 mix-blend-overlay"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-900/70 to-indigo-900/90" />
          <div className="relative z-10 animate-in fade-in zoom-in duration-700">
            <Link href="/" className="inline-block mb-8">
              <Image
                src={logo}
                alt="CACSFINACC Logo"
                width={280}
                height={70}
                style={{ width: "auto", height: "auto" }}
                priority
              />
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-md space-y-6 text-center animate-in fade-in slide-in-from-bottom-6 duration-700">
            <div className="mx-auto w-20 h-20 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mb-4">
              <CheckCircle2 className="h-10 w-10 text-green-600 dark:text-green-500" />
            </div>
            <h2 className="text-2xl font-extrabold font-headline tracking-tight text-foreground">
              Account Successfully Created
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed">
              Welcome to <span className="font-semibold text-foreground">CACS FinAcc Services</span> — Chartered Accountancy driven solutions for finance, taxation, and regulatory compliance.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Your registration has been completed successfully. Please verify your registered email address to activate your account.
            </p>
            <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <p className="text-sm text-blue-800 dark:text-blue-300">
                A verification link has been sent to <br />
                <span className="font-semibold">{userEmail}</span>
              </p>
              <p className="text-xs text-blue-600 dark:text-blue-400 mt-2">
                Email verification is mandatory to ensure secure access to your compliance records.
              </p>
            </div>
            <div className="pt-4 space-y-3">
              <Button asChild className="w-full">
                <Link href="/login">Return to Login</Link>
              </Button>
            </div>
            <div className="text-xs text-muted-foreground pt-2 space-y-1">
              <p className="font-medium">CACS FinAcc Services</p>
              <p>+91-9591633648 · info@cacsfinaccservices.com</p>
              <p>Bengaluru, Karnataka</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-background lg:grid lg:grid-cols-2">
      <div className="relative hidden lg:flex flex-col items-center justify-center bg-blue-900 text-white p-12 text-center">
        <Image
          src={signupimg}
          alt="Decorative background"
          fill
          className="object-cover opacity-30 mix-blend-overlay"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-900/70 to-indigo-900/90" />
        <div className="relative z-10 animate-in fade-in zoom-in duration-700">
          <Link href="/" className="inline-block mb-8">
            <Image
              src={logo}
              alt="CACSFINACC Logo"
              width={280}
              height={70}
              style={{ width: "auto", height: "auto" }}
              priority
            />
          </Link>
          <h2 className="text-2xl md:text-3xl font-extrabold font-headline mb-4">
            Join Us Today
          </h2>
          <p className="text-blue-200 max-w-sm mx-auto">
            Create an account to manage your financial services, track
            compliance, and get expert advice.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div className="animate-in slide-in-from-bottom-4 duration-500">
            <h2 className="mt-6 text-center text-2xl md:text-3xl font-extrabold font-headline tracking-tight text-primary bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Create Account
            </h2>
            <p className="mt-2 text-center text-sm text-muted-foreground">
              Enter your information to get started.
            </p>
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        <Input
                          placeholder="Full Name"
                          className="pl-10"
                          {...field}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        <Input
                          type="email"
                          placeholder="Email"
                          className="pl-10"
                          {...field}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        <Input
                          type={showPassword ? "text" : "password"}
                          placeholder="Password"
                          className="pl-10 pr-10"
                          {...field}
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                          tabIndex={-1}
                        >
                          {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                        </button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        <Input
                          type={showConfirmPassword ? "text" : "password"}
                          placeholder="Confirm Password"
                          className="pl-10 pr-10"
                          {...field}
                        />
                        <button
                          type="button"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                          tabIndex={-1}
                        >
                          {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                        </button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="w-full text-lg relative overflow-hidden group h-12 transition-all hover:scale-[1.01]"
                size="lg"
                disabled={form.formState.isSubmitting}
              >
                <div className="relative z-10 flex items-center justify-center">
                  {form.formState.isSubmitting ? (
                    "Creating..."
                  ) : (
                    <>
                      Create Account
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-10 transition-opacity" />
              </Button>
            </form>
          </Form>
          <div className="text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-medium text-primary hover:text-primary/80"
            >
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
