"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Menu, X, ChevronDown, LogOut, User as UserIcon } from "lucide-react";
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
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { serviceCategories } from "@/lib/services";
import { ThemeToggle } from "@/components/theme-toggle";
import { getStoredUser, clearStoredUser, type User } from "@/lib/auth";

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
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setLogoSrc(
      theme === "dark" ? "/Image/darklogo.png" : "/Image/cacslogonew.png"
    );
  }, [theme]);

  useEffect(() => {
    // Get user from localStorage
    const storedUser = getStoredUser();
    setUser(storedUser);
    setIsLoading(false);

    // Listen for auth state changes
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
    const path = pathname || "";
    // Robust match: match /slug or /slug/... (avoid partial matches)
    return serviceCategories.some((category) => {
      const re = new RegExp(`/${category.slug}(?:/|$)`);
      return re.test(path);
    });
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
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
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
