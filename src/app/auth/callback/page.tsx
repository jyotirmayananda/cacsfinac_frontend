"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { createClient } from "@/lib/supabase";
import { Loader2 } from "lucide-react";

export default function AuthCallbackPage() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [error, setError] = useState<string | null>(null);
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
                    router.replace(next);
                    return;
                } catch (err) {
                    console.error("Auth callback exception:", err);
                    router.replace("/auth/auth-code-error");
                    return;
                }
            }

            // No code parameter - check if there's a hash fragment (implicit flow)
            // The Supabase client automatically handles hash fragments on init
            // Wait a moment for it to process
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
