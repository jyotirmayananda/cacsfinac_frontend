"use client";

import Link from "next/link";
import whatsappimg from "../../public/Image/WhatsApp_Image.png";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <img src={whatsappimg.src} alt="WhatsApp Icon" className={className} />
);

export function WhatsAppButton() {
  return (
    <Link
      href="https://wa.me/9591633648"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className={
        "fixed bottom-6 right-6 z-50 p-3 sm:p-2 transition-transform hover:scale-110 active:scale-1 " +
        // keep same placement on larger screens but ensure it doesn't take extra layout space on small screens
        "sm:bottom-6 sm:right-6 lg:bottom-3 lg:right-2"
      }
    >
      <WhatsAppIcon className="h-7 w-7 sm:h-9 sm:w-9" />
    </Link>
  );
}
