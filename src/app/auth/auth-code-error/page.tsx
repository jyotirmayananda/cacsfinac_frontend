"use client";

import Link from "next/link";
import { Button } from "../../../components/ui/button";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "../../../components/ui/card";
import { AlertTriangle } from "lucide-react";

export default function AuthCodeErrorPage() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-background">
            <Card className="w-full max-w-md text-center">
                <CardHeader className="space-y-4">
                    <div className="mx-auto w-16 h-16 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center">
                        <AlertTriangle className="h-8 w-8 text-red-600 dark:text-red-500" />
                    </div>
                    <CardTitle className="text-2xl font-bold">
                        Link Expired or Invalid
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    <p className="text-muted-foreground">
                        The email link you clicked is invalid or has expired.
                        Please request a new one.
                    </p>
                    <div className="flex flex-col gap-3">
                        <Button asChild className="w-full">
                            <Link href="/forgot-password">
                                Request New Reset Link
                            </Link>
                        </Button>
                        <Button asChild variant="outline" className="w-full">
                            <Link href="/login">
                                Back to Login
                            </Link>
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
