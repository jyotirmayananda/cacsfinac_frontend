"use client";

import Link from "next/link";
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";
import { Mail, Lock, ArrowRight } from "lucide-react";
import { createClient } from "@/lib/supabase";

import { useRouter, useSearchParams } from "next/navigation";
import { setStoredUser } from "../../../lib/auth";
import { Suspense } from "react";
import { Button } from "../../components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../../components/ui/form";
import { Input } from "../../components/ui/input";
import { Checkbox } from "../../components/ui/checkbox";
// import logo from "../../../public/Image/cacslogonew.png";
// import loginimg from "../../../public/Image/loginbackground.jpg";
const logo = "/Image/cacslogonew.png";
const loginimg = "/Image/loginbackground.jpg";

const loginFormSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(1, {
    message: "Password is required.",
  }),
  remember: z.boolean().optional(),
});

function LoginForm() {
  const { toast } = useToast();
  const router = useRouter();
  const searchParams = useSearchParams();
  const supabase = createClient();

  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
      remember: false,
    },
  });

  async function onSubmit(values: z.infer<typeof loginFormSchema>) {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: values.email,
        password: values.password,
      });

      if (error) {
        toast({
          variant: "destructive",
          title: "Login Failed",
          description: error.message,
        });
        return;
      }

      if (data.user) {
        const user = {
          id: data.user.id,
          email: data.user.email!,
          fullName: data.user.user_metadata?.full_name || data.user.email?.split('@')[0] || "User",
          isAdmin: false, // Default to false, logic for admin check can be added later
        };

        setStoredUser(user, data.session?.access_token || "");

        toast({
          title: "Login Successful!",
          description: "Welcome back!",
        });

        const redirectUrl = searchParams.get("redirect") || "/";
        router.push(redirectUrl);
      }
    } catch (error: any) {
      console.error("Login error:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "An unexpected error occurred.",
      });
    }
  }

  return (
    <div className="min-h-screen w-full bg-background lg:grid lg:grid-cols-2">
      <div className="relative hidden lg:flex flex-col items-center justify-center bg-blue-900 text-white p-12 text-center">
        <Image
          src={loginimg}
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
          <h2 className="text-4xl font-bold font-headline mb-4">
            Welcome Back!
          </h2>
          <p className="text-blue-200 max-w-sm mx-auto">
            Your one-stop solution for accounting, financial, and compliance
            needs. Log in to access your dashboard.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div className="animate-in slide-in-from-bottom-4 duration-500">
            <h2 className="mt-6 text-center text-4xl font-bold font-headline tracking-tight text-primary bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Welcome Back
            </h2>
            <p className="mt-2 text-center text-sm text-muted-foreground">
              Please enter your details to sign in.
            </p>
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
                          placeholder="Email or username"
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
                          type="password"
                          placeholder="Password"
                          className="pl-10"
                          {...field}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex items-center justify-between">
                <FormField
                  control={form.control}
                  name="remember"
                  render={({ field }) => (
                    <FormItem className="flex items-center space-x-2 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <label
                        htmlFor="remember"
                        className="text-sm font-medium leading-none text-muted-foreground peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Remember me
                      </label>
                    </FormItem>
                  )}
                />
                <div className="text-sm">
                  <Link
                    href="/forgot-password"
                    className="font-medium text-primary hover:text-primary/80"
                  >
                    Forgot your password?
                  </Link>
                </div>
              </div>
              <Button
                type="submit"
                className="w-full text-lg relative overflow-hidden group h-12 transition-all hover:scale-[1.01]"
                size="lg"
                disabled={form.formState.isSubmitting}
              >
                <div className="relative z-10 flex items-center justify-center">
                  {form.formState.isSubmitting ? (
                    "Signing In..."
                  ) : (
                    <>
                      Sign In
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-10 transition-opacity" />
              </Button>
            </form>
          </Form>
          <div className="text-center text-sm text-muted-foreground">
            Don't have an account?{" "}
            <Link
              href="/signup"
              className="font-medium text-primary hover:text-primary/80"
            >
              Create account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LoginForm />
    </Suspense>
  );
}
