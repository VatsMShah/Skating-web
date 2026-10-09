import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock, Instagram, Youtube, Facebook, ArrowRight } from "lucide-react";

const NAV_LINKS = [
  { href: "/about", label: "About Us" },
  { href: "/facilities", label: "Training Centers" },
  { href: "/merchandise", label: "Products" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact Us" },
];

export default function Footer() {
  return (
    <footer
      id="footer"
      className="bg-[#0A1931] text-slate-200 border-t border-slate-800 pt-16 pb-12 relative overflow-hidden"
    >
      {/* Golden Accent Glow Line */}
      <div className="absolute top-0 left-0 h-[3px] w-40 bg-gradient-to-r from-[#F59E0B] via-[#FBBF24] to-transparent shadow-[0_0_14px_rgba(245,158,11,0.9)]" />

      <div className="max-w-[1320px] mx-auto px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-16">
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-4 flex flex-col items-start pr-0 lg:pr-6">
            <Link
              href="/"
              className="group inline-flex items-center gap-3 mb-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B] rounded-md transition-transform duration-300 hover:scale-105"
            >
              <div className="relative size-12 overflow-hidden rounded-full border-2 border-[#F59E0B] bg-white p-0.5 shadow-[0_0_12px_rgba(245,158,11,0.4)]">
                <Image
                  src="/images/logo.png"
                  alt="Dehiya Roller Skating Academy"
                  width={48}
                  height={48}
                  className="size-full object-cover rounded-full"
                />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-serif text-xl font-extrabold uppercase tracking-tight text-white group-hover:text-[#FBBF24] transition-colors">
                  D.R.S.A
                </span>
                <span className="text-[10px] font-mono font-semibold tracking-widest text-[#F59E0B] uppercase -mt-0.5">
                  Dance on Wheels
                </span>
              </div>
            </Link>
            <p className="text-slate-300 text-sm leading-relaxed max-w-sm">
              Dehiya Roller Skating Academy (D.R.S.A) — 36 years of excellence in transforming beginners into State and National Champions across Mumbai and Thane.
            </p>
            <div className="mt-6 flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#0E2954] border border-[#F59E0B]/30 w-fit shadow-xs">
              <span className="size-2 rounded-full bg-[#F59E0B] animate-pulse shadow-[0_0_8px_#F59E0B]" />
              <span className="text-xs font-mono uppercase tracking-wider text-slate-200 font-medium">
                6 Active Centers Across Thane &amp; Mumbai
              </span>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-5 flex items-center gap-2">
              <span className="h-1 w-2.5 bg-[#F59E0B] rounded-xs shadow-[0_0_6px_rgba(245,158,11,0.8)]" />
              Navigation
            </h3>
            <div className="w-full space-y-3">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group flex items-center gap-2 text-sm text-slate-300 hover:text-[#FBBF24] transition-all duration-200 hover:translate-x-1.5"
                >
                  <ArrowRight className="size-3 text-[#F59E0B] opacity-0 -ml-4 transition-all duration-200 group-hover:opacity-100 group-hover:ml-0" />
                  <span>{link.label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3: Coaches & Contact */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-5 flex items-center gap-2">
              <span className="h-1 w-2.5 bg-[#F59E0B] rounded-xs shadow-[0_0_6px_rgba(245,158,11,0.8)]" />
              Coaches &amp; Contact
            </h3>
            <ul className="space-y-4 text-sm text-slate-300">
              <li className="flex items-start gap-3 group">
                <MapPin className="size-4 text-[#F59E0B] shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-slate-300">Thane West &amp; Bhandup, Mumbai, Maharashtra</span>
              </li>
              <li className="flex flex-col gap-0.5 group">
                <div className="flex items-center gap-3">
                  <Phone className="size-4 text-[#F59E0B] shrink-0" aria-hidden="true" />
                  <a href="tel:9323861266" className="hover:text-[#FBBF24] transition-all duration-200 font-semibold text-white">
                    +91 93238 61266
                  </a>
                </div>
                <span className="text-xs text-slate-400 pl-7 font-mono">Mr. Rajinder Singh Dehiya (Head Coach)</span>
              </li>
              <li className="flex flex-col gap-0.5 group">
                <div className="flex items-center gap-3">
                  <Phone className="size-4 text-[#F59E0B] shrink-0" aria-hidden="true" />
                  <a href="tel:8693817112" className="hover:text-[#FBBF24] transition-all duration-200 font-semibold text-white">
                    +91 86938 17112
                  </a>
                </div>
                <span className="text-xs text-slate-400 pl-7 font-mono">Mr. Navjeet Singh Dehiya (Head Coach)</span>
              </li>
              <li className="flex items-start gap-3 group">
                <Mail className="size-4 text-[#F59E0B] shrink-0 mt-1" aria-hidden="true" />
                <div className="flex flex-col gap-1 text-sm">
                  <a href="mailto:rajinderdehiya@gmail.com" className="hover:text-[#FBBF24] transition-all duration-200 text-slate-300">
                    rajinderdehiya@gmail.com
                  </a>
                  <a href="mailto:navjeetdehiya@gmail.com" className="hover:text-[#FBBF24] transition-all duration-200 text-slate-300">
                    navjeetdehiya@gmail.com
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 4: Training Centers & Socials */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-5 flex items-center gap-2">
              <span className="h-1 w-2.5 bg-[#F59E0B] rounded-xs shadow-[0_0_6px_rgba(245,158,11,0.8)]" />
              Training Centers
            </h3>
            <div className="space-y-2 text-xs text-slate-300 mb-6">
              <p className="hover:text-[#FBBF24] transition-colors">• Amber International School, Thane</p>
              <p className="hover:text-[#FBBF24] transition-colors">• Siddeshwar Garden, Thane (20 yrs)</p>
              <p className="hover:text-[#FBBF24] transition-colors">• Shreerang Vidyalaya, Thane</p>
              <p className="hover:text-[#FBBF24] transition-colors">• Sports Foundry, Bhandup West</p>
              <p className="hover:text-[#FBBF24] transition-colors">• Pratap Sarnaik School, Thane</p>
              <p className="hover:text-[#FBBF24] transition-colors">• Piramal Vaikunth, Thane</p>
            </div>
            <div className="pt-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-white block mb-3">
                Connect With D.R.S.A
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="inline-flex items-center justify-center bg-[#0E2954] text-[#F59E0B] size-10 rounded-lg border border-slate-700 hover:border-[#F59E0B] hover:bg-[#F59E0B] hover:text-[#0A1931] hover:shadow-[0_0_15px_rgba(245,158,11,0.4)] hover:-translate-y-1 transition-all duration-200"
                >
                  <Instagram className="size-4.5" aria-hidden="true" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="inline-flex items-center justify-center bg-[#0E2954] text-[#F59E0B] size-10 rounded-lg border border-slate-700 hover:border-[#F59E0B] hover:bg-[#F59E0B] hover:text-[#0A1931] hover:shadow-[0_0_15px_rgba(245,158,11,0.4)] hover:-translate-y-1 transition-all duration-200"
                >
                  <Youtube className="size-4.5" aria-hidden="true" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="inline-flex items-center justify-center bg-[#0E2954] text-[#F59E0B] size-10 rounded-lg border border-slate-700 hover:border-[#F59E0B] hover:bg-[#F59E0B] hover:text-[#0A1931] hover:shadow-[0_0_15px_rgba(245,158,11,0.4)] hover:-translate-y-1 transition-all duration-200"
                >
                  <Facebook className="size-4.5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="h-px w-full bg-slate-800" />

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} Dehiya Roller Skating Academy (D.R.S.A). All rights reserved. 36 Years of Excellence.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/contact" className="hover:text-[#FBBF24] hover:underline underline-offset-4 transition-colors">Send an Inquiry</Link>
            <Link href="/facilities" className="hover:text-[#FBBF24] hover:underline underline-offset-4 transition-colors">Training Centers</Link>
            <Link href="/about" className="hover:text-[#FBBF24] hover:underline underline-offset-4 transition-colors">About Us</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
