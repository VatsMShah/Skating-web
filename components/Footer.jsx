import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock, Instagram, Youtube, Facebook, ArrowRight } from "lucide-react";

const NAV_LINKS = [
  { href: "/about", label: "About" },
  { href: "/facilities", label: "Facilities" },
  { href: "/events", label: "Events" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer
      id="footer"
      data-nav="dark"
      className="dark bg-background text-foreground border-t border-border/80 pt-16 pb-12 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 h-[3px] w-32 bg-gradient-to-r from-primary via-primary to-transparent shadow-[0_0_12px_rgba(249,115,22,0.8)]" />
      <div className="max-w-[1320px] mx-auto px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-16">
          <div className="lg:col-span-4 flex flex-col items-start pr-0 lg:pr-6">
            <Link
              href="/"
              className="group inline-block mb-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md transition-transform duration-300 hover:scale-105"
            >
              <Image
                src="https://destined-weevil.10web.cloud/wp-content/uploads/2026/09/curbtrick.svg"
                alt="CURBTRICK"
                width={140}
                height={32}
                className="h-8 w-auto transition-all duration-300 group-hover:brightness-110 drop-shadow-[0_0_10px_rgba(249,115,22,0.2)]"
                unoptimized
              />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
              Roller skating rink and indoor skatepark built for concrete lines, street obstacles, vert ramps, and community sessions for every skater.
            </p>
            <div className="mt-6 flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-card border border-border/60 w-fit">
              <span className="size-2 rounded-full bg-chart-3 animate-pulse shadow-[0_0_8px_#22c55e]" />
              <span className="text-xs font-mono uppercase tracking-wider text-foreground/90 font-medium">
                Park open for open skate &amp; lessons
              </span>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-5 flex items-center gap-2">
              <span className="h-1 w-2.5 bg-primary rounded-xs shadow-[0_0_6px_rgba(249,115,22,0.6)]" />
              Navigation
            </h3>
            <div className="w-full space-y-3">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-all duration-200 hover:translate-x-1.5"
                >
                  <ArrowRight className="size-3 text-primary opacity-0 -ml-4 transition-all duration-200 group-hover:opacity-100 group-hover:ml-0" />
                  <span>{link.label}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-5 flex items-center gap-2">
              <span className="h-1 w-2.5 bg-primary rounded-xs shadow-[0_0_6px_rgba(249,115,22,0.6)]" />
              Location &amp; Contact
            </h3>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex items-start gap-3 group">
                <MapPin className="size-4 text-primary shrink-0 mt-0.5 transition-transform duration-200 group-hover:scale-110" aria-hidden="true" />
                <span className="group-hover:text-foreground transition-colors">123 Skatepark Avenue, Cityville, State, ZIP</span>
              </li>
              <li className="flex items-center gap-3 group">
                <Phone className="size-4 text-primary shrink-0 transition-transform duration-200 group-hover:scale-110" aria-hidden="true" />
                <a href="tel:5559876543" className="hover:text-primary transition-all duration-200 hover:translate-x-1 focus-visible:outline-none focus-visible:text-primary">
                  (555) 987-6543
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <Mail className="size-4 text-primary shrink-0 transition-transform duration-200 group-hover:scale-110" aria-hidden="true" />
                <a href="mailto:contact@curbtrick.com" className="hover:text-primary transition-all duration-200 hover:translate-x-1 focus-visible:outline-none focus-visible:text-primary">
                  contact@curbtrick.com
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-5 flex items-center gap-2">
              <span className="h-1 w-2.5 bg-primary rounded-xs shadow-[0_0_6px_rgba(249,115,22,0.6)]" />
              Operating Hours
            </h3>
            <div className="space-y-2.5 text-sm text-muted-foreground mb-6">
              <div className="flex items-start gap-2.5 p-2 rounded-md hover:bg-card transition-colors">
                <Clock className="size-4 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="text-foreground font-medium">Monday – Friday</p>
                  <p className="text-xs text-muted-foreground font-mono">3:00 PM – 10:00 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5 p-2 rounded-md hover:bg-card transition-colors">
                <Clock className="size-4 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="text-foreground font-medium">Saturday – Sunday</p>
                  <p className="text-xs text-muted-foreground font-mono">12:00 PM – 8:00 PM</p>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-foreground block mb-3">
                Follow The Park
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="inline-flex items-center justify-center bg-card text-foreground/80 shadow-md size-10 rounded-lg border border-border/80 hover:border-primary hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_15px_rgba(249,115,22,0.4)] hover:-translate-y-1 transition-all duration-200"
                >
                  <Instagram className="size-4.5" aria-hidden="true" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="inline-flex items-center justify-center bg-card text-foreground/80 shadow-md size-10 rounded-lg border border-border/80 hover:border-primary hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_15px_rgba(249,115,22,0.4)] hover:-translate-y-1 transition-all duration-200"
                >
                  <Youtube className="size-4.5" aria-hidden="true" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="inline-flex items-center justify-center bg-card text-foreground/80 shadow-md size-10 rounded-lg border border-border/80 hover:border-primary hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_15px_rgba(249,115,22,0.4)] hover:-translate-y-1 transition-all duration-200"
                >
                  <Facebook className="size-4.5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="h-px w-full bg-border/60" />

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} CURBTRICK. All rights reserved. Built for roller skaters, inline, and street riders.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/contact" className="hover:text-primary hover:underline underline-offset-4 transition-colors">Session Inquiries</Link>
            <Link href="/facilities" className="hover:text-primary hover:underline underline-offset-4 transition-colors">Safety Rules &amp; Pads</Link>
            <Link href="/events" className="hover:text-primary hover:underline underline-offset-4 transition-colors">Community Calendar</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
