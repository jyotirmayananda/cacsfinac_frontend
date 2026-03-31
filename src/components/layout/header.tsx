"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { Menu, X, ChevronDown, LogOut, User as UserIcon, ArrowRight } from "lucide-react";
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

const serviceGroups = [
  {
    title: "Taxation & Regulatory Compliance",
    slugs: ["income-tax-filing", "gst-services", "nri-taxation"],
  },
  {
    title: "Corporate & Business Compliance",
    slugs: ["company-registration", "roc-compliance", "payroll-hr-compliance"],
  },
  {
    title: "Financial Advisory & Business Support",
    slugs: ["virtual-cfo", "accounting-bookkeeping", "audit-support"],
  },
];

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false);
  const servicesCloseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

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

  const clearServicesCloseTimer = useCallback(() => {
    if (servicesCloseTimerRef.current) {
      clearTimeout(servicesCloseTimerRef.current);
      servicesCloseTimerRef.current = null;
    }
  }, []);

  const openServicesMenu = useCallback(() => {
    clearServicesCloseTimer();
    setServicesMenuOpen(true);
  }, [clearServicesCloseTimer]);

  const scheduleCloseServicesMenu = useCallback(() => {
    clearServicesCloseTimer();
    servicesCloseTimerRef.current = setTimeout(() => {
      setServicesMenuOpen(false);
      servicesCloseTimerRef.current = null;
    }, 220);
  }, [clearServicesCloseTimer]);

  useEffect(() => {
    return () => clearServicesCloseTimer();
  }, [clearServicesCloseTimer]);

  useEffect(() => {
    setServicesMenuOpen(false);
    clearServicesCloseTimer();
  }, [pathname, clearServicesCloseTimer]);

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
      <div className="mx-auto flex h-24 max-w-full items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src={logoSrc}
              alt="CACS FinAcc Logo"
              width={260}
              height={100}
              priority
              style={{ height: "100px", width: "auto" }}
            />
          </Link>
        </div>
        <div className="hidden lg:flex items-center gap-6">
          <nav className="navmenu flex items-center gap-6">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.label} className="relative">
                  <Link
                    href={link.href}
                    data-active={isServicesActive()}
                    onMouseEnter={openServicesMenu}
                    onMouseLeave={scheduleCloseServicesMenu}
                    className={cn(
                      "flex items-center gap-1 font-nav text-base font-medium transition-colors hover:text-primary",
                      isServicesActive() ? "text-primary" : "text-foreground"
                    )}
                  >
                    <span>{link.label}</span>
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 transition-transform duration-200",
                        servicesMenuOpen && "rotate-180"
                      )}
                    />
                  </Link>
                  {/* Invisible hit-area between nav link and fixed panel (fixed children don’t extend parent hover box) */}
                  {servicesMenuOpen ? (
                    <div
                      aria-hidden
                      onMouseEnter={openServicesMenu}
                      onMouseLeave={scheduleCloseServicesMenu}
                      className="fixed left-1/2 top-24 z-[99] h-14 w-[min(calc(100vw-2rem),1150px)] max-w-[1150px] -translate-x-1/2"
                    />
                  ) : null}
                  <ul
                    className={cn(
                      "fixed left-1/2 top-24 z-[100] mt-2 w-[min(calc(100vw-2rem),1150px)] max-w-[1150px] -translate-x-1/2 list-none p-10",
                      "grid grid-cols-3 gap-8 rounded-[1.5rem] border shadow-2xl backdrop-blur-3xl",
                      "bg-background/95 border-border",
                      "dark:bg-slate-950/95 dark:border-white/10 dark:shadow-black/50",
                      "max-h-[min(70vh,600px)] overflow-y-auto overflow-x-hidden",
                      "transition-[opacity,visibility] duration-200",
                      servicesMenuOpen
                        ? "visible pointer-events-auto opacity-100"
                        : "invisible pointer-events-none opacity-0"
                    )}
                    onMouseEnter={openServicesMenu}
                    onMouseLeave={scheduleCloseServicesMenu}
                  >

                    {serviceGroups.map((group) => (
                      <li key={group.title} className="space-y-6">
                        <div className="px-4 space-y-1.5 w-fit">
                          <h4 className="text-[11px] md:text-[12px] font-black tracking-[0.15em] md:tracking-[0.18em] text-primary uppercase leading-snug max-w-[14rem]">
                            {group.title}
                          </h4>
                          <div className="h-0.5 w-full bg-primary rounded-full shadow-sm shadow-primary/20" />
                        </div>
                        <div className="flex flex-col gap-3">
                          {group.slugs.map((slug) => {
                            const service = services.find(s => s.slug === slug);
                            if (!service) return null;
                            return (
                              <Link
                                key={service.slug}
                                href={`/services/${service.slug}`}
                                className={cn(
                                  "group/item flex items-center gap-4 rounded-3xl border border-transparent p-4 transition-all duration-500",
                                  "hover:border-primary/20 hover:bg-muted/80",
                                  "dark:hover:border-white/20 dark:hover:bg-white/5"
                                )}
                              >
                                <span
                                  className={cn(
                                    "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border transition-all duration-300",
                                    "border-border bg-background",
                                    "dark:border-white/10 dark:bg-white/5",
                                    "group-hover/item:border-primary group-hover/item:bg-primary shadow-lg shadow-black/5"
                                  )}
                                >
                                  <service.icon className="h-6 w-6 text-primary transition-colors group-hover/item:text-primary-foreground" />
                                </span>
                                <span className="min-w-0 flex-1 text-left text-[15px] font-bold leading-snug tracking-tight text-slate-600 dark:text-white group-hover/item:text-primary transition-colors">
                                  {service.title}
                                </span>
                              </Link>
                            );
                          })}
                        </div>
                      </li>
                    ))}
                    <li className="col-span-3 mt-12 mb-2 bg-primary/[0.03] rounded-[2rem] p-10 border border-primary/10 dark:bg-white/[0.02] dark:border-white/10">
                      <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="max-w-[300px]">
                          <h5 className="text-xl font-bold tracking-tight text-foreground">Not sure where to start?</h5>
                          <p className="mt-2 text-muted-foreground text-sm leading-relaxed">
                            Get expert guidance based on your requirement.
                          </p>
                        </div>
                        
                        <div className="flex-1 grid grid-cols-2 gap-12">
                          <Link href="/services/income-tax-filing" className="group/help block p-1 transition-all">
                            <h6 className="font-bold text-primary text-base group-hover/help:underline underline-offset-4">Income Tax Filing & Tax Advisory Services</h6>
                            <p className="mt-2 text-sm text-muted-foreground/80 leading-snug">Structured income tax filing and advisory support</p>
                          </Link>
                          
                          <Link href="/services/gst-services" className="group/help block p-1 transition-all">
                            <h6 className="font-bold text-primary text-base group-hover/help:underline underline-offset-4">GST Registration & Compliance Services</h6>
                            <p className="mt-2 text-sm text-muted-foreground/80 leading-snug">Structured GST registration, filing, and compliance support</p>
                          </Link>
                        </div>
                      </div>
                    </li>

                    <li className="col-span-3 mt-8 flex justify-center">
                      <Link
                        href="/services"
                        className={cn(
                          "group/all flex items-center gap-4 rounded-full bg-primary/5 px-10 py-5 transition-all duration-500",
                          "hover:bg-primary hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-1 active:scale-95",
                          "dark:bg-white/5 dark:hover:bg-primary"
                        )}
                      >
                        <span className="text-[13px] font-black tracking-[0.2em] text-primary group-hover/all:text-primary-foreground transition-colors uppercase">
                          Explore All Services
                        </span>
                        <ArrowRight className="h-5 w-5 text-primary group-hover/all:text-primary-foreground transform group-hover/all:translate-x-1 transition-all" />
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
                            <div className="flex flex-col gap-8 pl-4 pt-4">

                              {serviceGroups.map((group) => (
                                <div key={group.title} className="space-y-4">
                                  <div className="space-y-1.5 w-fit">
                                    <h4 className="text-[11px] font-black tracking-[0.12em] text-muted-foreground uppercase opacity-80 leading-snug max-w-[16rem]">
                                      {group.title}
                                    </h4>
                                    <div className="h-0.5 w-full bg-primary/40 rounded-full" />
                                  </div>
                                  <div className="flex flex-col gap-4">
                                    {group.slugs.map((slug) => {
                                      const service = services.find(s => s.slug === slug);
                                      if (!service) return null;
                                      return (
                                        <Link
                                          key={service.slug}
                                          href={`/services/${service.slug}`}
                                          className="flex items-center gap-4 text-foreground/80 hover:text-primary group transition-colors"
                                          onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                          <div className="bg-primary/5 p-2 rounded-lg group-hover:bg-primary/10 transition-colors">
                                            <service.icon className="h-5 w-5 text-primary" />
                                          </div>
                                          <span className="font-semibold text-base">{service.title}</span>
                                        </Link>
                                      );
                                    })}
                                  </div>
                                </div>
                              ))}
                              <Link
                                href="/services"
                                className="flex items-center justify-center gap-2 rounded-xl bg-primary/5 p-5 font-bold text-primary tracking-widest text-xs uppercase transition-colors hover:bg-primary/10"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                Explore All Services
                                <ArrowRight size={16} />
                              </Link>
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
