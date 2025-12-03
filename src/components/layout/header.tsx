"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Menu, X, ChevronDown, User, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { serviceCategories } from "@/lib/services";
import { ThemeToggle } from "@/components/theme-toggle";
import { getStoredUser, clearStoredUser } from "@/lib/auth";

const navLinks = [
  { href: "/", label: "Home" },
  {
    href: "#",
    label: "Services",
    dropdown: true,
    items: serviceCategories,
  },
  { href: "/about", label: "Company" },
  { href: "/blog", label: "Blog" },
  // { href: '/contact', label: 'Contact' },
];

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme } = useTheme();
  const [logoSrc, setLogoSrc] = useState("/Image/cacslogonew.png");
  const [user, setUser] = useState<{ fullName: string; email: string } | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setLogoSrc(
      theme === "dark" ? "/Image/darklogo.png" : "/Image/cacslogonew.png"
    );
  }, [theme]);

  // Function to check and update user state
  const checkUser = React.useCallback(() => {
    const storedUser = getStoredUser();
    if (storedUser) {
      console.log("Header: User found", storedUser);
      setUser(storedUser);
      return true;
    } else {
      console.log("Header: No user found");
      setUser(null);
      return false;
    }
  }, []);

  // Check user immediately on mount
  useEffect(() => {
    setMounted(true);
    checkUser();
  }, []);

  // Check user on route changes
  useEffect(() => {
    checkUser();
  }, [pathname, checkUser]);

  // Listen for login events and storage changes
  useEffect(() => {
    // Listen for custom login event (fired when user logs in)
    const handleUserLogin = (event: any) => {
      console.log("Header: User login event received:", event.detail);
      if (event.detail && event.detail.fullName) {
        console.log("Header: Setting user from event:", event.detail);
        setUser(event.detail);
      } else {
        console.log("Header: Event has no detail, checking localStorage");
        checkUser();
      }
    };

    // Listen for auth state changes
    const handleAuthStateChange = () => {
      console.log("Header: Auth state change event received");
      checkUser();
    };

    // Listen for storage changes (when localStorage is updated from other tabs)
    const handleStorageChange = () => {
      console.log("Header: Storage change event received");
      checkUser();
    };

    if (typeof window !== "undefined") {
      // Check immediately when event listeners are set up
      checkUser();
      
      window.addEventListener("userLogin", handleUserLogin as EventListener);
      window.addEventListener("authStateChange", handleAuthStateChange);
      window.addEventListener("storage", handleStorageChange);
      
      return () => {
        window.removeEventListener("userLogin", handleUserLogin as EventListener);
        window.removeEventListener("authStateChange", handleAuthStateChange);
        window.removeEventListener("storage", handleStorageChange);
      };
    }
  }, [checkUser]);

  const handleLogout = () => {
    clearStoredUser();
    setUser(null);
    router.push("/");
    router.refresh();
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  const isServicesActive = () => {
    const path = pathname || "";
    // Robust match: match /slug or /slug/... (avoid partial matches)
    return serviceCategories.some((category) => {
      const re = new RegExp(`/${category.slug}(?:/|$)`);
      return re.test(path);
    });
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
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
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
                <div key={link.label} className="listing-dropdown relative">
                  <a
                    href="#"
                    data-active={isServicesActive()}
                    className={cn(
                      "flex items-center gap-1 font-nav text-base font-medium transition-colors hover:text-primary",
                      isServicesActive() ? "text-primary" : "text-foreground"
                    )}
                  >
                    <span>{link.label}</span>
                    <ChevronDown className="h-4 w-4" />
                  </a>
                  <ul className="w-max">
                    {link.items?.map((category) => (
                      <li key={category.slug}>
                        <h3>{category.title}</h3>
                        {category.services.map((service) => (
                          <Link
                            key={service.slug}
                            href={`/${category.slug}/${service.slug}`}
                          >
                            <service.icon />
                            {service.title}
                          </Link>
                        ))}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <NavLink key={link.label} {...link} />
              )
            )}
          </nav>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            {mounted && user && user.fullName ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback>{getInitials(user.fullName)}</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">{user.fullName}</p>
                      <p className="text-xs leading-none text-muted-foreground">
                        {user.email}
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout}>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                <Button asChild variant="outline" size="sm">
                  <Link href="/login">Login</Link>
                </Button>
                <Button asChild size="sm">
                  <Link href="/signup">Sign Up</Link>
                </Button>
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
                <nav className="flex flex-col gap-12">
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
                            {link.items?.map((category) => (
                              <div key={category.slug} className="mb-4">
                                <h5 className="font-semibold mb-2 pl-4 text-primary">
                                  {category.title}
                                </h5>
                                <div className="flex flex-col gap-3 pl-8">
                                  {category.services.map((item) => (
                                    <Link
                                      key={item.slug}
                                      href={`/${category.slug}/${item.slug}`}
                                      className="flex items-center gap-2 text-muted-foreground hover:text-primary"
                                      onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                      <item.icon className="h-4 w-4" />
                                      <span>{item.title}</span>
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}
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
                  {mounted && user && user.fullName ? (
                    <>
                      {/* User Info with Icon and Name */}
                      <div className="flex items-center gap-3 p-3 rounded-lg bg-muted">
                        <User className="h-5 w-5 text-primary" />
                        <div className="flex flex-col">
                          <span className="text-sm font-semibold">{user.fullName}</span>
                          <span className="text-xs text-muted-foreground">{user.email}</span>
                        </div>
                      </div>
                      {/* Logout Button */}
                      <Button
                        variant="outline"
                        onClick={() => {
                          handleLogout();
                          setIsMobileMenuOpen(false);
                        }}
                        className="w-full"
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
