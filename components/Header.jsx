"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { MapPin, Menu, X, ArrowUpRight } from "lucide-react";

const NAV_LINKS = [
  { href: "/about", label: "About Us" },
  { href: "/#training-centers", label: "Training Centers" },
  { href: "/#merchandise", label: "Products / Merchandise" },
  { href: "/#testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact Us" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      id="header"
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-sm shadow-slate-900/5 py-1.5"
          : "bg-white/80 backdrop-blur-sm border-b border-slate-200/50 py-2.5"
      }`}
    >
      <div className="mx-auto flex h-16 sm:h-18 max-w-[1320px] items-center justify-between px-6 md:px-8 lg:px-12">
        {/* Logo & Brand Identity */}
        <div className="flex items-center">
          <Link
            href="/"
            className="group inline-flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A1931] rounded-md transition-transform duration-300 hover:scale-105"
          >
            <div className="relative size-11 sm:size-12 overflow-hidden rounded-full border-2 border-[#F59E0B] bg-white p-0.5 shadow-[0_0_14px_rgba(245,158,11,0.35)]">
              <Image
                src="/images/logo.png"
                alt="Dehiya Roller Skating Academy (D.R.S.A)"
                width={48}
                height={48}
                className="size-full object-cover rounded-full"
                priority
              />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-serif text-lg sm:text-xl font-extrabold uppercase tracking-tight text-[#0A1931] group-hover:text-[#1D4ED8] transition-colors">
                D.R.S.A
              </span>
              <span className="text-[10px] sm:text-xs font-mono font-semibold tracking-wider text-[#D97706] uppercase -mt-0.5">
                Skating Academy
              </span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center justify-center">
          <nav className="flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-100/90 backdrop-blur-xs px-3 py-1.5 shadow-inner">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-1.5 text-sm font-semibold tracking-wide rounded-full transition-all duration-200 ${
                    isActive
                      ? "text-[#0A1931] bg-[#F59E0B]/25 border border-[#F59E0B]/60 shadow-[0_0_10px_rgba(245,158,11,0.2)] font-bold"
                      : "text-slate-600 hover:text-[#0A1931] hover:bg-white/80"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-[#F59E0B] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            data-slot="button"
            className="group relative inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-bold uppercase tracking-wider outline-none bg-[#0A1931] text-white hover:bg-[#0E2954] border border-[#F59E0B]/50 h-10 px-5 py-2 rounded-md transition-all duration-200 shadow-md shadow-slate-900/10 hover:shadow-lg hover:shadow-[#F59E0B]/30 hover:-translate-y-0.5 active:translate-y-0"
          >
            <MapPin className="size-4 text-[#F59E0B] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" aria-hidden="true" />
            <span>Find Us</span>
            <ArrowUpRight className="size-3.5 text-[#F59E0B] opacity-75 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:text-[#0A1931] hover:bg-slate-100 border border-slate-200 transition-colors"
          >
            {open ? <X className="size-5 text-[#0A1931]" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {open && (
        <nav className="lg:hidden border-t border-slate-200 bg-white/95 backdrop-blur-xl px-6 py-5 flex flex-col gap-2 shadow-xl animate-in fade-in duration-200">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`flex items-center justify-between px-4 py-3 text-sm font-medium rounded-md transition-all duration-150 ${
                  isActive
                    ? "bg-[#FEF3C7] text-[#0A1931] border border-[#F59E0B]/50 font-bold"
                    : "text-slate-700 hover:text-[#0A1931] hover:bg-slate-100"
                }`}
              >
                <span>{link.label}</span>
                <span className="text-xs text-[#D97706] font-mono font-bold">→</span>
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
}
