"use client";

import Link from "next/link";
import Image from "next/image";
import whatsapp from "../../public/Image";

export function WhatsAppButton() {
  return (
    <Link
      href="https://wa.me/9591633648"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className={
        "fixed bottom-6 right-6 z-50 p-3 bg-emerald-600 text-white rounded-full shadow-lg transition-transform hover:scale-110 active:scale-70 " +
        // keep same placement on larger screens but ensure it doesn't take extra layout space on small screens
        "sm:bottom-6 sm:right-6 lg:bottom-3 lg:right-2"
      }
    >
      <Image
        src={whatsapp}
        alt="WhatsApp"
        width={52}
        height={52}
        className="h-10 w-10"
      />
    </Link>
  );
}
