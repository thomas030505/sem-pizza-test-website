"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Meny", href: "#meny" },
  { label: "Om oss", href: "#om-oss" },
  { label: "Anmeldelser", href: "#anmeldelser" },
  { label: "Finn oss", href: "#finn-oss" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#1A1A1A]/96 backdrop-blur-md shadow-xl" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between h-18 py-3">
        {/* Logo */}
        <Link href="#hjem" className="flex flex-col leading-none group">
          <span className="text-2xl font-black tracking-[0.18em] text-white uppercase text-center">
            SEM
          </span>
          <span className="text-[10px] font-semibold tracking-[0.22em] text-[#FBC02D] uppercase">
            Grill og Pizza
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium tracking-wide text-white/70 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href="tel:91006106"
              className="bg-[#C62828] hover:bg-[#b71c1c] text-white text-sm font-semibold px-5 py-2 transition-colors"
            >
              Ring oss
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setOpen(!open)}
          aria-label="Åpne meny"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span
              className={`block h-0.5 bg-white transition-transform origin-center ${
                open ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-0.5 bg-white transition-opacity ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 bg-white transition-transform origin-center ${
                open ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#1A1A1A] border-t border-white/10">
          <ul className="flex flex-col px-6 py-4 gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-white/75 hover:text-white font-medium border-b border-white/5 transition-colors tracking-wide"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-3">
              <a
                href="tel:91006106"
                className="block text-center bg-[#C62828] text-white font-semibold py-3 tracking-wide"
              >
                Ring oss
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
