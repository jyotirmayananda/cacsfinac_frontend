"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { getStoredUser } from "../../lib/auth";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { LogIn, UserRound, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function ServicesGatekeeper({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const user = getStoredUser();
    const guestAccess = localStorage.getItem("services_guest_access");

    if (user || guestAccess === "true") {
      setIsAuthorized(true);
      setShowModal(false);
    } else {
      setIsAuthorized(false);
      setShowModal(true);
    }
  }, [pathname]);

  if (!isMounted) {
     return <div className="min-h-screen bg-background" />;
  }

  const handleContinueAsGuest = () => {
    localStorage.setItem("services_guest_access", "true");
    setIsAuthorized(true);
    setShowModal(false);
  };

  const handleLogin = () => {
    router.push(`/login?redirect=${encodeURIComponent(pathname)}`);
    setShowModal(false);
  };

  return (
    <>
      {isAuthorized ? (
        children
      ) : (
        <div className="min-h-screen bg-transparent flex items-center justify-center p-4">
           {/* Fallback view if something goes wrong or while modal is opening */}
           <div className="animate-pulse text-muted-foreground uppercase tracking-widest text-[10px]">
             Preparing Services Page...
           </div>
        </div>
      )}

      <Dialog open={showModal} onOpenChange={(open) => {
        if (!open && !isAuthorized) {
          // If they close the modal without choosing, treat it as guest access
          // or at least let them close it if they want to "remove" it
          handleContinueAsGuest();
        }
        setShowModal(open);
      }}>
        <DialogContent 
          onPointerDownOutside={(e) => {
            // Keep the restriction to force a choice, but allow the close button to work
            e.preventDefault();
          }} 
          onEscapeKeyDown={(e) => {
             // Keep the restriction
             e.preventDefault();
          }}
          className="sm:max-w-[480px] p-0 border-none bg-transparent shadow-2xl max-h-[95vh] overflow-y-auto scrollbar-hide [&>button]:top-6 [&>button]:right-6 [&>button]:w-10 [&>button]:h-10 [&>button]:bg-white dark:[&>button]:bg-slate-900 [&>button]:rounded-full [&>button]:shadow-2xl [&>button]:border [&>button]:border-slate-100 dark:[&>button]:border-slate-800 [&>button]:flex [&>button]:items-center [&>button]:justify-center [&>button]:z-[100] [&>button]:opacity-100"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/95 dark:bg-slate-950/95 backdrop-blur-2xl border border-white/40 dark:border-white/10 rounded-[2.5rem] overflow-hidden relative shadow-2xl mx-4 sm:mx-0"
          >
            {/* Glossy Overlay Effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/5 via-transparent to-blue-500/5 pointer-events-none" />
            
            {/* Top Accent Line */}
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 animate-gradient-x" />
            
            {/* Animated Blobs for Depth */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-cyan-400/20 rounded-full blur-[80px] pointer-events-none animate-pulse" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] pointer-events-none animate-pulse" style={{ animationDelay: '2s' }} />

            <div className="p-8 md:p-12 relative z-10">
              <DialogHeader className="space-y-6">
                <div className="mx-auto relative group">
                  <div className="absolute inset-0 bg-cyan-500/20 rounded-[2rem] blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
                  <div className="relative w-20 h-20 bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 rounded-[2rem] flex items-center justify-center shadow-[0_10px_25px_-5px_rgba(0,0,0,0.1)] border border-white/50 dark:border-white/10">
                    <div className="w-10 h-10 rounded-full bg-cyan-500/10 dark:bg-cyan-400/20 flex items-center justify-center">
                      <UserRound className="w-6 h-6 text-cyan-500 dark:text-cyan-400" />
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <DialogTitle className="text-3xl md:text-4xl font-extrabold text-center tracking-tight text-slate-900 dark:text-white leading-tight">
                    Access Services
                  </DialogTitle>
                  <DialogDescription className="text-center text-slate-600 dark:text-slate-400 text-lg leading-relaxed max-w-[320px] mx-auto">
                    Choose how you'd like to proceed to view our professional solutions.
                  </DialogDescription>
                </div>
              </DialogHeader>

              <div className="mt-12 space-y-4">
                <Button
                  onClick={handleLogin}
                  className="w-full h-16 text-lg font-bold bg-[#00B4D8] hover:bg-[#0096B4] text-white rounded-2xl shadow-[0_15px_30px_-10px_rgba(0,180,216,0.3)] group transition-all duration-500 flex items-center justify-center gap-3 active:scale-95"
                >
                  <LogIn className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  <span>Login to Account</span>
                  <ArrowRight className="w-4 h-4 ml-auto opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </Button>

                <Button
                  variant="outline"
                  onClick={handleContinueAsGuest}
                  className="w-full h-16 text-lg font-bold bg-white dark:bg-slate-900 hover:bg-cyan-500 active:bg-cyan-600 border-2 border-cyan-100 dark:border-slate-800 hover:border-cyan-500 active:border-cyan-600 text-cyan-600 dark:text-cyan-400 hover:text-white active:text-white rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 shadow-sm group active:scale-95"
                >
                  <div className="w-8 h-8 rounded-full bg-cyan-50 dark:bg-slate-800 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <UserRound className="w-4 h-4 text-cyan-500 group-hover:text-white transition-colors" />
                  </div>
                  <span>Continue as Guest</span>
                  <div className="ml-auto w-4" /> {/* Spacer to mirror login icon */}
                </Button>
              </div>

              <div className="mt-10 flex flex-col items-center gap-4">
                <p className="text-xs font-medium text-slate-400 dark:text-slate-500 tracking-wider uppercase text-center">
                  Secure Access Guaranteed
                </p>
                <div className="flex items-center gap-1.5 text-[13px] text-slate-500 dark:text-slate-400">
                  <span>By continuing, you agree to our</span>
                  <a href="/terms" className="font-bold text-cyan-600 dark:text-cyan-400 hover:underline underline-offset-4 decoration-2 transition-colors">
                    Terms
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </DialogContent>
      </Dialog>
    </>
  );
}
