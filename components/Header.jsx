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
      data-nav="dark"
      className={`dark sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border/60 shadow-lg shadow-black/40 py-1"
          : "bg-background/60 backdrop-blur-sm border-b border-border/20 py-2"
      }`}
    >
      <div className="mx-auto flex h-16 sm:h-18 max-w-[1320px] items-center justify-between px-6 md:px-8 lg:px-12">
        {/* Logo */}
        <div className="flex items-center">
          <Link
            href="/"
            className="group inline-flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md transition-transform duration-300 hover:scale-105"
          >
            <div className="relative size-10 sm:size-11 overflow-hidden rounded-full border border-primary/40 bg-card p-0.5 shadow-[0_0_12px_rgba(249,115,22,0.3)]">
              <Image
                src="/images/logo.png"
                alt="Dehiya Roller Skating Academy"
                width={44}
                height={44}
                className="size-full object-cover rounded-full"
                priority
              />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-serif text-lg sm:text-xl font-extrabold uppercase tracking-tight text-foreground group-hover:text-primary transition-colors">
                D.R.S.A
              </span>
              <span className="text-[10px] sm:text-xs font-mono font-medium tracking-widest text-muted-foreground uppercase -mt-1">
                Skating Academy
              </span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center justify-center">
          <nav className="flex items-center gap-1.5 rounded-full border border-border/40 bg-card/40 backdrop-blur-xs px-3 py-1.5 shadow-inner">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-1.5 text-sm font-semibold tracking-wide rounded-full transition-all duration-200 ${
                    isActive
                      ? "text-primary bg-primary/15 border border-primary/30 shadow-[0_0_12px_rgba(249,115,22,0.25)] font-bold"
                      : "text-foreground/75 hover:text-foreground hover:bg-white/5"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-primary rounded-full" />
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
            className="group relative inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-bold uppercase tracking-wider outline-none focus-visible:ring-2 focus-visible:ring-primary bg-primary text-primary-foreground hover:bg-primary/90 h-9.5 px-5 py-2 rounded-md transition-all duration-200 shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/35 hover:-translate-y-0.5 active:translate-y-0 active:scale-95"
          >
            <MapPin className="size-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 text-primary-foreground" aria-hidden="true" />
            <span>Find Us</span>
            <ArrowUpRight className="size-3.5 opacity-60 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-foreground/80 hover:text-foreground hover:bg-card border border-border/40 transition-colors"
          >
            {open ? <X className="size-5 text-primary" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {open && (
        <nav className="lg:hidden border-t border-border/60 bg-background/95 backdrop-blur-xl px-6 py-5 flex flex-col gap-2 shadow-2xl animate-in fade-in duration-200">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`flex items-center justify-between px-4 py-3 text-sm font-medium rounded-md transition-all duration-150 ${
                  isActive
                    ? "bg-primary/15 text-primary border border-primary/30 font-bold"
                    : "text-foreground/80 hover:text-foreground hover:bg-muted/60"
                }`}
              >
                <span>{link.label}</span>
                <span className="text-xs text-muted-foreground font-mono">→</span>
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
}
