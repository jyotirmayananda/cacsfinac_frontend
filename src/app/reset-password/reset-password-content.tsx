"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardFooter,
} from "../../components/ui/card";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "../../components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { createClient } from "@/lib/supabase";
import { Lock, CheckCircle2, ShieldCheck, Eye, EyeOff } from "lucide-react";

const loginimg = "/Image/loginbackground.jpg";

const resetPasswordSchema = z
    .object({
        password: z.string().min(6, {
            message: "Password must be at least 6 characters long.",
        }),
        confirmPassword: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords don't match.",
        path: ["confirmPassword"],
    });

export default function ResetPasswordPage() {
    const { toast } = useToast();
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const supabase = createClient();

    const form = useForm<z.infer<typeof resetPasswordSchema>>({
        resolver: zodResolver(resetPasswordSchema),
        defaultValues: {
            password: "",
            confirmPassword: "",
        },
    });

    useEffect(() => {
        const checkSession = async () => {
            const { data: { session } } = await supabase.auth.getSession();
            if (!session) {
                // Session will be set by the Supabase client from the hash fragment
            }
        };
        checkSession();
    }, [supabase.auth]);

    async function onSubmit(values: z.infer<typeof resetPasswordSchema>) {
        setIsLoading(true);
        try {
            const { error } = await supabase.auth.updateUser({
                password: values.password,
            });

            if (error) {
                throw error;
            }

            setIsSuccess(true);
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
            <div className="relative flex items-center justify-center min-h-screen overflow-hidden bg-background">
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
                            <ShieldCheck className="h-8 w-8 text-green-600 dark:text-green-500" />
                        </div>
                        <CardTitle className="text-2xl font-bold tracking-tight">
                            Password Updated Successfully
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 text-center">
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            Your password has been changed successfully. You can now log in with your new credentials.
                        </p>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            We remain committed to maintaining the highest standards of confidentiality and compliance.
                        </p>
                    </CardContent>
                    <CardFooter className="flex flex-col space-y-3 pb-6">
                        <Button asChild className="w-full h-11 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                            <Link href="/login">Sign In Now</Link>
                        </Button>
                        <div className="text-center text-xs text-muted-foreground pt-2 space-y-1">
                            <p className="font-medium">CACS FinAcc Services</p>
                            <p>+91-9591633648 · cacsfinacc@gmail.com</p>
                            <p>Bengaluru, Karnataka</p>
                        </div>
                    </CardFooter>
                </Card>
            </div>
        );
    }

    return (
        <div className="relative flex items-center justify-center min-h-screen overflow-hidden bg-background">
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
                <CardHeader className="space-y-2 text-center">
                    <div className="mx-auto w-14 h-14 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center mb-2">
                        <Lock className="h-7 w-7 text-blue-600 dark:text-blue-400" />
                    </div>
                    <CardTitle className="text-2xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                        Reset Your Password
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">
                        Enter your new password below to secure your account.
                    </p>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
                                                    placeholder="New Password"
                                                    className="pl-10 pr-10 h-12 bg-background/50"
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
                                                    placeholder="Confirm New Password"
                                                    className="pl-10 pr-10 h-12 bg-background/50"
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
                                className="w-full h-12 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all font-semibold text-lg shadow-lg"
                                disabled={isLoading}
                            >
                                {isLoading ? "Updating..." : "Update Password"}
                            </Button>
                        </form>
                    </Form>
                </CardContent>
                <CardFooter className="flex justify-center pb-6 pt-2">
                    <Link href="/login" className="text-sm font-medium text-primary hover:text-primary/80 transition-colors">
                        Back to Login
                    </Link>
                </CardFooter>
            </Card>
        </div>
    );
}
