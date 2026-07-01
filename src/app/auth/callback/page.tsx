"use client";

import { Suspense, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { createClient } from "@/lib/supabase";
import { Loader2, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { Button } from "../../../components/ui/button";

function AuthCallbackContent() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [error, setError] = useState<string | null>(null);
    const [verified, setVerified] = useState(false);
    const supabase = createClient();

    useEffect(() => {
        const handleCallback = async () => {
            const code = searchParams.get("code");
            const next = searchParams.get("next") ?? "/";

            if (code) {
                try {
                    const { error } = await supabase.auth.exchangeCodeForSession(code);
                    if (error) {
                        console.error("Auth callback error:", error.message);
                        router.replace("/auth/auth-code-error");
                        return;
                    }

                    // If redirect is to reset-password, go directly
                    if (next === "/reset-password") {
                        router.replace(next);
                        return;
                    }

                    // Show verified screen for email confirmations
                    setVerified(true);
                    return;
                } catch (err) {
                    console.error("Auth callback exception:", err);
                    router.replace("/auth/auth-code-error");
                    return;
                }
            }

            const { data: { session } } = await supabase.auth.getSession();
            if (session) {
                const next = searchParams.get("next") ?? "/";
                router.replace(next);
            } else {
                router.replace("/auth/auth-code-error");
            }
        };

        handleCallback();
    }, [searchParams, supabase.auth, router]);

    if (verified) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-background to-blue-50/30 dark:to-blue-950/10">
                <div className="w-full max-w-md mx-4 text-center space-y-6 animate-in fade-in slide-in-from-bottom-6 duration-700">
                    <div className="mx-auto w-20 h-20 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center">
                        <ShieldCheck className="h-10 w-10 text-green-600 dark:text-green-500" />
                    </div>
                    <h1 className="text-3xl font-bold tracking-tight text-foreground">
                        Login Successful
                    </h1>
                    <p className="text-muted-foreground text-base leading-relaxed">
                        You are now securely logged in to your client compliance dashboard.
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                        Stay updated on filings, statutory deadlines, documentation, and advisory support — all in one place.
                    </p>
                    <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg p-3">
                        <p className="text-xs text-amber-800 dark:text-amber-300">
                            If this login was not initiated by you, please secure your account immediately.
                        </p>
                    </div>
                    <div className="pt-2">
                        <Button asChild className="w-full h-11 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                            <Link href="/">Go to Dashboard</Link>
                        </Button>
                    </div>
                    <div className="text-xs text-muted-foreground pt-2 space-y-1">
                        <p className="font-medium">CACS FinAcc Services</p>
                        <p>+91-9591633648 · info@cacsfinaccservices.com</p>
                        <p>Bengaluru, Karnataka</p>
                    </div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-background">
                <div className="text-center space-y-4">
                    <p className="text-destructive">{error}</p>
                    <a href="/login" className="text-primary underline">
                        Back to Login
                    </a>
                </div>
            </div>
        );
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-background">
            <div className="text-center space-y-4">
                <Loader2 className="h-8 w-8 animate-spin mx-auto text-primary" />
                <p className="text-muted-foreground">Verifying your account...</p>
            </div>
        </div>
    );
}

export default function AuthCallbackPage() {
    return (
        <Suspense
            fallback={
                <div className="flex items-center justify-center min-h-screen bg-background">
                    <div className="text-center space-y-4">
                        <Loader2 className="h-8 w-8 animate-spin mx-auto text-primary" />
                        <p className="text-muted-foreground">Verifying your account...</p>
                    </div>
                </div>
            }
        >
            <AuthCallbackContent />
        </Suspense>
    );
}
