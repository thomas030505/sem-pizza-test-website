"use client";

import { useState, useEffect } from "react";

const FOODORA_URL = "https://www.foodora.no/restaurant/yxd5/sem-pizza-and-grill";

export default function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div
      className={`md:hidden fixed bottom-0 left-0 right-0 z-50 transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="bg-[#111111] border-t border-white/10 px-4 py-3 flex gap-2">
        <a
          href="tel:91006106"
          className="flex-none flex items-center justify-center gap-2 border border-white/20 text-white font-semibold px-5 py-3 text-sm uppercase tracking-wider transition-colors hover:border-white/50"
        >
          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
            <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
          </svg>
          Ring
        </a>
        <a
          href={FOODORA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center bg-[#FBC02D] hover:bg-yellow-400 text-[#1A1A1A] font-bold py-3 text-sm uppercase tracking-wider transition-colors"
        >
          Bestill via Foodora
        </a>
      </div>
    </div>
  );
}
