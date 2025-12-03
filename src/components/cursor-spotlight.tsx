"use client";

import { useEffect } from "react";

export function CursorSpotlight() {
  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      const { clientX, clientY } = ev;
      // document.documentElement.style.setProperty('--mouse-x', `${clientX}px`);
      // document.documentElement.style.setProperty('--mouse-y', `${clientY}px`);
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return null;
}
