"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { Menu, X, ChevronDown, LogOut, User as UserIcon } from "lucide-react";
import { Button } from "../../components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";
import { Sheet, SheetContent, SheetTrigger } from "../../components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "../../components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "../../components/ui/avatar";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { services } from "@/lib/services";
import { ThemeToggle } from "../../components/theme-toggle";
import { getStoredUser, clearStoredUser, type User } from "../../../lib/auth";

const navLinks = [
  { href: "/", label: "Home" },
  {
    href: "/services",
    label: "Services",
    dropdown: true,
    items: services,
  },
  { href: "/about", label: "Company" },
  { href: "/blog", label: "Blog" },
  { href: "/calculators", label: "Calculators" },
];

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const logoSrc = mounted && (theme === "dark" || resolvedTheme === "dark")
    ? "/Image/darklogo.png"
    : "/Image/cacslogonew.png";


  useEffect(() => {
    const storedUser = getStoredUser();
    setUser(storedUser);
    setIsLoading(false);

    const handleAuthChange = () => {
      setUser(getStoredUser());
    };

    window.addEventListener("authStateChange", handleAuthChange);
    window.addEventListener("storage", handleAuthChange);

    return () => {
      window.removeEventListener("authStateChange", handleAuthChange);
      window.removeEventListener("storage", handleAuthChange);
    };
  }, []);


  const isServicesActive = () => {
    return pathname?.startsWith("/services");
  };

  const handleLogout = () => {
    clearStoredUser();
    setUser(null);
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

  const NavLink = ({ href, label }: { href: string; label: string }) => {
    const isActive =
      label === "Services" ? isServicesActive() : pathname === href;
    return (
      <Link
        href={href}
        className={cn(
          "font-nav text-base font-medium transition-colors hover:text-primary",
          isActive ? "text-primary" : "text-foreground"
        )}
      >
        {label}
      </Link>
    );
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/70 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-20 max-w-full items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src={logoSrc}
              alt="CACS FinAcc Logo"
              width={240}
              height={80}
              priority
              style={{ height: "80px", width: "auto" }}
            />
          </Link>
        </div>
        <div className="hidden lg:flex items-center gap-6">
          <nav className="navmenu flex items-center gap-6">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div
                  key={link.label}
                  className="group/services-nav relative"
                >
                  <Link
                    href={link.href}
                    data-active={isServicesActive()}
                    className={cn(
                      "flex items-center gap-1 font-nav text-base font-medium transition-colors hover:text-primary",
                      isServicesActive() ? "text-primary" : "text-foreground"
                    )}
                  >
                    <span>{link.label}</span>
                    <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover/services-nav:rotate-180" />
                  </Link>
                  <ul
                    className={cn(
                      "absolute left-1/2 -translate-x-1/2 top-full z-50 mt-1 w-[min(calc(100vw-2rem),700px)] max-w-[700px] list-none p-4",
                      "before:pointer-events-auto before:absolute before:inset-x-0 before:bottom-full before:h-4 before:content-['']",
                      "grid grid-cols-2 gap-2 rounded-[1.5rem] border shadow-2xl backdrop-blur-3xl",
                      "bg-background/95 border-border",
                      "dark:bg-slate-950/95 dark:border-white/10 dark:shadow-black/50",
                      "pointer-events-none opacity-0 transition-all duration-300 delay-75",
                      "invisible group-hover/services-nav:pointer-events-auto group-hover/services-nav:visible group-hover/services-nav:opacity-100 group-hover/services-nav:delay-0",
                      "max-h-[min(70vh,520px)] overflow-y-auto overflow-x-hidden"
                    )}
                  >
                    <li className="col-span-2 -mt-0.5 border-b border-border pb-3 dark:border-white/10">
                      <p className="text-primary font-bold tracking-widest text-[10px]">
                        Exclusive Services
                      </p>
                      <p className="mt-1 font-bold tracking-tight text-foreground text-sm">
                        Explore Offerings
                      </p>
                    </li>
                    {link.items?.map((service) => (
                      <li key={service.slug} className="min-w-0">
                        <Link
                          href={`/services/${service.slug}`}
                          className={cn(
                            "group/item flex items-center gap-3 rounded-2xl border border-transparent p-2.5 transition-all duration-300",
                            "bg-muted/50 hover:border-border hover:bg-muted",
                            "dark:border-white/5 dark:bg-white/5 dark:hover:border-white/10 dark:hover:bg-white/10"
                          )}
                        >
                          <span
                            className={cn(
                              "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border transition-all duration-300",
                              "border-border bg-background",
                              "dark:border-white/10 dark:bg-white/5",
                              "group-hover/item:border-primary group-hover/item:bg-primary"
                            )}
                          >
                            <service.icon className="h-5 w-5 text-primary transition-colors group-hover/item:text-primary-foreground" />
                          </span>
                          <span className="min-w-0 flex-1 text-left text-[11px] font-bold leading-snug tracking-tight text-foreground group-hover/item:text-primary">
                            {service.title}
                          </span>
                        </Link>
                      </li>
                    ))}
                    <li className="col-span-2 mt-1 border-t border-border pt-3 dark:border-white/10">
                      <Link
                        href="/services"
                        className="inline-flex text-[10px] font-bold tracking-widest text-primary transition-colors hover:text-primary/80"
                      >
                        View All Services
                      </Link>
                    </li>
                  </ul>
                </div>
              ) : (
                <NavLink key={link.label} {...link} />
              )
            )}
          </nav>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            {!isLoading && (
              <>
                {user ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        className="relative h-10 w-10 rounded-full"
                      >
                        <Avatar className="h-10 w-10">
                          <AvatarFallback className="bg-primary text-primary-foreground font-semibold">
                            {getInitials(user.fullName)}
                          </AvatarFallback>
                        </Avatar>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-56">
                      <div className="flex flex-col space-y-1 p-2">
                        <p className="text-sm font-medium text-foreground">
                          {user.fullName}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {user.email}
                        </p>
                      </div>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem asChild>
                        <Link href="/profile" className="cursor-pointer">
                          <UserIcon className="mr-2 h-4 w-4" />
                          <span>Profile</span>
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem onClick={handleLogout}>
                        <LogOut className="mr-2 h-4 w-4" />
                        <span>Logout</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <>
                    <Button asChild variant="outline">
                      <Link href="/login">Login</Link>
                    </Button>
                    <Button asChild>
                      <Link href="/signup">Sign Up</Link>
                    </Button>
                  </>
                )}
              </>
            )}
          </div>
        </div>
        <div className="lg:hidden flex items-center gap-2">
          <ThemeToggle />
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] sm:w-[400px] overflow-y-auto"
            >
              <div className="p-4">
                <div className="flex justify-between items-center mb-6">
                  <Link
                    href="/"
                    className="flex items-center gap-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Image
                      src={logoSrc}
                      alt="CACS FinAcc Logo"
                      width={240}
                      height={80}
                      priority
                      style={{ height: "80px", width: "auto" }}
                    />
                  </Link>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <X className="h-6 w-6" />
                    <span className="sr-only">Close menu</span>
                  </Button>
                </div>
                <nav className="flex flex-col gap-8">
                  {navLinks.map((link) =>
                    link.dropdown ? (
                      <Accordion type="single" collapsible key={link.label}>
                        <AccordionItem value="services" className="border-b-0">
                          <AccordionTrigger
                            data-active={isServicesActive()}
                            className={cn(
                              "font-nav text-lg font-medium hover:no-underline hover:text-primary [&[data-state=open]]:text-primary",
                              isServicesActive() ? "text-primary" : ""
                            )}
                          >
                            {link.label}
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="flex flex-col gap-4 pl-4 pt-2">
                              <Link
                                href="/services"
                                className="flex items-center gap-2 font-semibold text-primary underline"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                View All Services
                              </Link>
                              {link.items?.map((service) => (
                                <Link
                                  key={service.slug}
                                  href={`/services/${service.slug}`}
                                  className="flex items-center gap-2 text-muted-foreground hover:text-primary"
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  <service.icon className="h-4 w-4" />
                                  <span>{service.title}</span>
                                </Link>
                              ))}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    ) : (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={cn(
                          "font-nav text-lg font-medium transition-colors hover:text-primary py-2",
                          pathname === link.href
                            ? "text-primary"
                            : "text-foreground"
                        )}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    )
                  )}
                </nav>
                <div className="flex flex-col gap-2 mt-8">
                  {user ? (
                    <>
                      <div className="px-2 py-2 border rounded-md">
                        <p className="text-sm font-medium">{user.fullName}</p>
                        <p className="text-xs text-muted-foreground">
                          {user.email}
                        </p>
                      </div>
                      <Button asChild variant="outline">
                        <Link
                          href="/profile"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <UserIcon className="mr-2 h-4 w-4" />
                          Profile
                        </Link>
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => {
                          handleLogout();
                          setIsMobileMenuOpen(false);
                        }}
                      >
                        <LogOut className="mr-2 h-4 w-4" />
                        Logout
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button asChild>
                        <Link
                          href="/login"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          Login
                        </Link>
                      </Button>
                      <Button asChild variant="outline">
                        <Link
                          href="/signup"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          Sign Up
                        </Link>
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
