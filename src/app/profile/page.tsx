"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Mail, User as UserIcon, LogOut, Edit2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { getStoredUser, clearStoredUser, type User } from "@/lib/auth";

export default function ProfilePage() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedUser = getStoredUser();
    if (!storedUser) {
      router.push("/login");
    } else {
      setUser(storedUser);
    }
    setIsLoading(false);
  }, [router]);

  const handleLogout = () => {
    clearStoredUser();
    router.push("/");
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold font-headline uppercase mb-2">
              My Profile
            </h1>
            <p className="text-muted-foreground text-lg">
              Manage your account information
            </p>
          </div>

          {/* Profile Card */}
          <Card className="shadow-xl border-0 overflow-hidden">
            {/* Background Gradient */}
            <div className="h-32 bg-gradient-to-r from-primary to-primary/60"></div>

            {/* Profile Content */}
            <CardContent className="pt-0">
              <div className="flex flex-col items-center -mt-16 mb-6">
                {/* Avatar */}
                <Avatar className="h-32 w-32 border-4 border-white shadow-lg">
                  <AvatarFallback className="bg-primary text-primary-foreground text-4xl font-bold">
                    {getInitials(user.fullName)}
                  </AvatarFallback>
                </Avatar>

                {/* User Name */}
                <h2 className="text-3xl font-bold mt-4">{user.fullName}</h2>
                <p className="text-muted-foreground text-sm">User Account</p>
              </div>

              {/* Details Section */}
              <div className="space-y-4 mt-8">
                {/* Email */}
                <div className="flex items-center p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                  <Mail className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">
                      Email Address
                    </p>
                    <p className="font-medium text-foreground">{user.email}</p>
                  </div>
                </div>

                {/* Account Status */}
                <div className="flex items-center p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                  <UserIcon className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">
                      Account Status
                    </p>
                    <p className="font-medium text-foreground">Active</p>
                  </div>
                </div>

                {/* User ID (if available) */}
                {user.id && (
                  <div className="flex items-center p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                    <UserIcon className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground">User ID</p>
                      <p className="font-medium text-foreground font-mono text-sm">
                        {user.id}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Actions Section */}
              <div className="flex flex-col sm:flex-row gap-3 mt-8 pt-6 border-t">
                <Button className="flex-1 rounded-lg" variant="outline">
                  <Edit2 className="h-4 w-4 mr-2" />
                  Edit Profile
                </Button>
                <Button
                  onClick={handleLogout}
                  className="flex-1 rounded-lg"
                  variant="destructive"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Additional Info Card */}
          <Card className="mt-8 shadow-lg border-0">
            <CardHeader>
              <CardTitle className="font-headline">
                Account Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">
                    Member Since
                  </p>
                  <p className="font-medium">
                    {new Date().toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">
                    Subscription
                  </p>
                  <p className="font-medium">Free Plan</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
