"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Sparkles,
  ChevronRight,
  Send,
  CheckCircle2,
  Trophy,
  Users,
  ShieldCheck,
  HelpCircle,
  ArrowRight,
  Instagram,
  Youtube,
  Facebook,
  MessageSquare,
  Compass,
} from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    center: "Siddheshwar Garden, Thane West",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Coach Rajinder & Navjeet,\n\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nPreferred Center: ${formData.center}\nMessage: ${formData.message || "I would like to inquire about skating training / trial session."}`
  );

  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#0F172A]">
      
      {/* =====================================================================
          HERO SECTION: ACTION BG + SIGNATURE GOLD FRAME + BREADCRUMBS
          ===================================================================== */}
      <section className="relative w-full overflow-hidden bg-[#0A1931] text-white pt-32 pb-20 md:pt-40 md:pb-28 border-b border-slate-800">
        
        {/* Background Action Image with Navy Gradient Overlays */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/siddeshwar-garden-complex-thane-20-yrs-till-present.jpg"
            alt="Dehiya Roller Skating Academy Rink Practice Center"
            fill
            className="size-full object-cover object-center opacity-55 brightness-90 contrast-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A1931]/85 via-[#0A1931]/65 to-[#0A1931]/95" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1931]/80 via-transparent to-[#0A1931]/80" />
        </div>

        {/* Ambient background glows */}
        <div className="absolute top-0 right-1/4 size-[500px] bg-[#F59E0B]/12 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 size-[450px] bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

        {/* Decorative Gold Framing Square Accents (Matching Home, About Us, Facilities) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-6 inset-y-8 md:inset-x-12 md:inset-y-12 z-10 border border-[#F59E0B]/20 hidden sm:block"
        >
          <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#F59E0B]" />
          <span className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#F59E0B]" />
          <span className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#F59E0B]" />
          <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#F59E0B]" />
        </div>

        <div className="container relative z-20 mx-auto max-w-[1320px] px-4 sm:px-6 md:px-8 lg:px-12 flex flex-col items-center text-center">
          
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-6 uppercase tracking-wider">
            <Link href="/" className="hover:text-[#FBBF24] transition-colors">
              Home
            </Link>
            <ChevronRight className="size-3.5 text-[#F59E0B]" />
            <span className="text-[#FBBF24] font-semibold">Contact Us</span>
          </nav>

          {/* Gold Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#FEF3C7]/15 border border-[#F59E0B]/60 text-[#FBBF24] text-xs font-mono font-bold uppercase tracking-widest shadow-lg backdrop-blur-md mb-6">
            <MapPin className="size-4 text-[#F59E0B]" />
            <span>20+ Training Centers Across Thane, Mumbai &amp; Navi Mumbai</span>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight text-white leading-tight text-balance">
              Connect With Our <span className="text-[#FBBF24] underline decoration-[#F59E0B]/50 decoration-4 underline-offset-8">Master Coaches</span>
            </h1>

            <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto font-sans leading-relaxed">
              Book a complimentary trial session, get batch timings, or speak directly with Head Coaches <strong>Mr. Rajinder Singh Dehiya</strong> and <strong>Mr. Navjeet Singh Dehiya</strong>.
            </p>

            {/* Quick stats ribbon (Matching About Us, Facilities, Products) */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto w-full">
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs text-center">
                <span className="block font-serif text-2xl sm:text-3xl font-black text-[#FBBF24]">24/7</span>
                <span className="text-[11px] font-mono uppercase text-slate-300 tracking-wider">Inquiry Response</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs text-center">
                <span className="block font-serif text-2xl sm:text-3xl font-black text-[#FBBF24]">20+</span>
                <span className="text-[11px] font-mono uppercase text-slate-300 tracking-wider">Active Centers</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs text-center">
                <span className="block font-serif text-2xl sm:text-3xl font-black text-[#FBBF24]">Free</span>
                <span className="text-[11px] font-mono uppercase text-slate-300 tracking-wider">Trial Sessions</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs text-center">
                <span className="block font-serif text-2xl sm:text-3xl font-black text-[#FBBF24]">Direct</span>
                <span className="text-[11px] font-mono uppercase text-slate-300 tracking-wider">Coach Line</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================================
          MAIN SECTION: 2-COLUMN SPLIT (COACH CONTACT CARDS & INTERACTIVE FORM)
          ===================================================================== */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-[1320px] px-4 sm:px-6 md:px-8 lg:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* ---------------------------------------------------------------
                LEFT COLUMN: COACH CONTACT INFO & ACADEMY CHANNELS
                --------------------------------------------------------------- */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Head Coach 1 Card: Mr. Rajinder Singh Dehiya */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#F59E0B] transition-all shadow-sm hover:shadow-md space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="relative size-14 rounded-full overflow-hidden border-2 border-[#F59E0B] shadow-xs">
                      <Image
                        src="/images/rajinder-singh-dehiya.jpg"
                        alt="Mr. Rajinder Singh Dehiya"
                        fill
                        className="size-full object-cover"
                      />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase font-bold text-[#D97706] tracking-wider block">Founder &amp; Head Coach</span>
                      <h3 className="font-serif text-lg font-bold uppercase text-[#0A1931]">Mr. Rajinder Singh Dehiya</h3>
                      <p className="text-xs text-slate-500">36+ Years of Skating Excellence</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 pt-2 border-t border-slate-100 text-xs font-mono">
                  <a
                    href="tel:9323861266"
                    className="flex items-center gap-2 text-slate-700 hover:text-[#D97706] transition-colors p-2 rounded-lg bg-slate-50 hover:bg-[#FEF3C7]/40"
                  >
                    <Phone className="size-4 text-[#F59E0B]" />
                    <span className="font-bold text-sm">+91 93238 61266</span>
                  </a>
                  <a
                    href="mailto:rajinderdehiya@gmail.com"
                    className="flex items-center gap-2 text-slate-700 hover:text-[#D97706] transition-colors p-2 rounded-lg bg-slate-50 hover:bg-[#FEF3C7]/40"
                  >
                    <Mail className="size-4 text-[#F59E0B]" />
                    <span>rajinderdehiya@gmail.com</span>
                  </a>
                </div>
              </div>

              {/* Head Coach 2 Card: Mr. Navjeet Singh Dehiya */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#F59E0B] transition-all shadow-sm hover:shadow-md space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="relative size-14 rounded-full overflow-hidden border-2 border-[#F59E0B] shadow-xs">
                      <Image
                        src="/images/navjeet-singh-dehiya.jpg"
                        alt="Mr. Navjeet Singh Dehiya"
                        fill
                        className="size-full object-cover"
                      />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase font-bold text-[#D97706] tracking-wider block">Head Coach &amp; Speed Specialist</span>
                      <h3 className="font-serif text-lg font-bold uppercase text-[#0A1931]">Mr. Navjeet Singh Dehiya</h3>
                      <p className="text-xs text-slate-500">National Speed Coach &amp; Choreographer</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 pt-2 border-t border-slate-100 text-xs font-mono">
                  <a
                    href="tel:8693817112"
                    className="flex items-center gap-2 text-slate-700 hover:text-[#D97706] transition-colors p-2 rounded-lg bg-slate-50 hover:bg-[#FEF3C7]/40"
                  >
                    <Phone className="size-4 text-[#F59E0B]" />
                    <span className="font-bold text-sm">+91 86938 17112</span>
                  </a>
                  <a
                    href="mailto:navjeetdehiya@gmail.com"
                    className="flex items-center gap-2 text-slate-700 hover:text-[#D97706] transition-colors p-2 rounded-lg bg-slate-50 hover:bg-[#FEF3C7]/40"
                  >
                    <Mail className="size-4 text-[#F59E0B]" />
                    <span>navjeetdehiya@gmail.com</span>
                  </a>
                </div>
              </div>

              {/* Operating Hours & Rink Schedules */}
              <div className="p-6 rounded-2xl bg-slate-900 text-white border border-slate-800 space-y-3">
                <div className="flex items-center gap-2 text-[#FBBF24]">
                  <Clock className="size-4.5" />
                  <h4 className="font-serif text-sm font-bold uppercase tracking-wide text-white">Academy Operating Hours</h4>
                </div>
                <div className="space-y-2 text-xs text-slate-300 font-sans">
                  <div className="flex justify-between border-b border-slate-800 pb-1.5">
                    <span>Morning Batches:</span>
                    <span className="font-bold text-white font-mono">6:00 AM – 9:00 AM</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-800 pb-1.5">
                    <span>Evening Batches:</span>
                    <span className="font-bold text-white font-mono">4:30 PM – 8:30 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday Championship Drills:</span>
                    <span className="font-bold text-[#FBBF24] font-mono">Special Timings</span>
                  </div>
                </div>
              </div>

              {/* Instant WhatsApp Quick Button */}
              <a
                href={`https://wa.me/919323861266?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-serif text-sm font-bold uppercase tracking-wider transition-all shadow-md hover:shadow-lg"
              >
                <MessageSquare className="size-4.5" />
                <span>Chat Instantly on WhatsApp</span>
              </a>

            </div>

            {/* ---------------------------------------------------------------
                RIGHT COLUMN: INTERACTIVE ADMISSION & TRIAL FORM
                --------------------------------------------------------------- */}
            <div className="lg:col-span-7">
              <div className="p-6 sm:p-8 md:p-10 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-6">
                
                {/* Form Header */}
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FEF3C7] border border-[#F59E0B]/60 text-[#0A1931] text-xs font-mono font-bold uppercase tracking-wider">
                    <Sparkles className="size-3.5 text-[#D97706]" />
                    <span>Free Trial Session &amp; Admissions</span>
                  </div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-extrabold uppercase text-[#0A1931]">
                    Book Your Session or Send an Inquiry
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Fill out the form below. Head Coach Rajinder Singh Dehiya will review your student details and confirm your trial session time slot within 2 hours.
                  </p>
                </div>

                {submitted ? (
                  <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4 animate-in fade-in duration-300">
                    <div className="size-16 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-lg">
                      <CheckCircle2 className="size-8" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold uppercase text-emerald-900">Message Sent Successfully!</h3>
                    <p className="text-sm text-emerald-700 max-w-md mx-auto">
                      Thank you, <strong>{formData.name || "there"}</strong>. We have received your inquiry for <strong>{formData.center}</strong>. Coach Rajinder Singh Dehiya will contact you shortly on <strong>{formData.phone}</strong>.
                    </p>
                    <div className="pt-2">
                      <a
                        href={`https://wa.me/919323861266?text=${whatsappMessage}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0A1931] text-[#FBBF24] hover:bg-[#F59E0B] hover:text-[#0A1931] text-xs font-mono font-bold uppercase tracking-wider transition-all"
                      >
                        <span>Chat on WhatsApp Directly</span>
                        <ArrowRight className="size-4" />
                      </a>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                    
                    {/* Full Name Input */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono font-bold uppercase text-slate-700 tracking-wider block">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-[#0A1931] placeholder-slate-400 text-sm focus:outline-none focus:border-[#F59E0B] focus:ring-2 focus:ring-[#F59E0B]/30 transition-all"
                      />
                    </div>

                    {/* Mobile Number & Email Address */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-mono font-bold uppercase text-slate-700 tracking-wider block">
                          Mobile Number / WhatsApp *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="e.g. 98200 12345"
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-[#0A1931] placeholder-slate-400 text-sm focus:outline-none focus:border-[#F59E0B] focus:ring-2 focus:ring-[#F59E0B]/30 transition-all"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-mono font-bold uppercase text-slate-700 tracking-wider block">
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="e.g. name@example.com"
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-[#0A1931] placeholder-slate-400 text-sm focus:outline-none focus:border-[#F59E0B] focus:ring-2 focus:ring-[#F59E0B]/30 transition-all"
                        />
                      </div>
                    </div>

                    {/* Preferred Training Center Selector */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono font-bold uppercase text-slate-700 tracking-wider block">
                        Select Nearest Center
                      </label>
                      <select
                        name="center"
                        value={formData.center}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-[#0A1931] text-sm focus:outline-none focus:border-[#F59E0B] focus:ring-2 focus:ring-[#F59E0B]/30 transition-all"
                      >
                        <optgroup label="Thane Centers (10)">
                          <option>Siddheshwar Garden, Kolshet Road, Thane West</option>
                          <option>Amber International School, Dhokali, Thane West</option>
                          <option>TMC Mini Stadium, Thane Central</option>
                          <option>Shreerang Vidyalaya, Castle Mill, Thane</option>
                          <option>Pratap Sarnaik International School, Thane</option>
                          <option>Piramal Vaikunth, Balkum, Thane</option>
                          <option>DAV Public School, Thane West</option>
                          <option>Little Flower High School, Upvan, Thane</option>
                          <option>PES New English School, Naupada, Thane</option>
                          <option>SMT School, Naupada, Thane</option>
                        </optgroup>
                        <optgroup label="Mumbai City & Suburbs (6)">
                          <option>The Sports Foundry (TSF), Bhandup West</option>
                          <option>Matunga Gymkhana, Matunga East, Mumbai</option>
                          <option>The Chembur Gymkhana, Chembur East</option>
                          <option>Ghatkopar YMCA, Ghatkopar East</option>
                          <option>YMCA Bombay Central, Mumbai</option>
                          <option>Marble Arch School, Oshiwara, Andheri West</option>
                        </optgroup>
                        <optgroup label="Navi Mumbai (4)">
                          <option>DAV Public School, Sector 10, Airoli</option>
                          <option>DAV Public School, Sector 48, Nerul</option>
                          <option>CBD Belapur YMCA, Sector 8, Navi Mumbai</option>
                          <option>North Point School, Kopar Khairane</option>
                        </optgroup>
                      </select>
                    </div>

                    {/* Message Input */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono font-bold uppercase text-slate-700 tracking-wider block">
                        Your Message / Inquiry
                      </label>
                      <textarea
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Write your message here (e.g. Inquiring for child trial session, weekend batch timings, equipment questions...)"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-[#0A1931] placeholder-slate-400 text-sm focus:outline-none focus:border-[#F59E0B] focus:ring-2 focus:ring-[#F59E0B]/30 transition-all"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[#F59E0B] text-[#0A1931] hover:bg-[#FBBF24] font-serif text-sm sm:text-base font-extrabold uppercase tracking-wider transition-all shadow-lg shadow-[#F59E0B]/30 hover:shadow-[#F59E0B]/50 hover:-translate-y-0.5 cursor-pointer"
                    >
                      <Send className="size-4" />
                      <span>Send Message</span>
                    </button>

                  </form>
                )}

              </div>
            </div>

          </div>

          {/* -----------------------------------------------------------------
              FREQUENTLY ASKED QUESTIONS (FAQ ACCORDION)
              ----------------------------------------------------------------- */}
          <div className="mt-16 pt-12 border-t border-slate-200">
            <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FEF3C7] border border-[#F59E0B]/60 text-[#0A1931] text-xs font-mono font-bold uppercase tracking-wider">
                <HelpCircle className="size-3.5 text-[#D97706]" />
                <span>Common Questions</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-extrabold uppercase text-[#0A1931]">
                Frequently Asked Questions by Parents
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
                <h4 className="font-serif text-base font-bold uppercase text-[#0A1931] flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-[#D97706] shrink-0" />
                  <span>What should my child wear for their first trial?</span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-6">
                  Comfortable sports wear (track pants/shorts and cotton t-shirt) and long socks. Full safety gear (helmet, knee, elbow, and wrist guards) is strictly provided on-site.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
                <h4 className="font-serif text-base font-bold uppercase text-[#0A1931] flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-[#D97706] shrink-0" />
                  <span>Do we need our own skates for the trial session?</span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-6">
                  No, trial skates can be arranged at the center upon prior confirmation. Our coaches will measure your child&apos;s foot size before recommending the right setup.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
                <h4 className="font-serif text-base font-bold uppercase text-[#0A1931] flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-[#D97706] shrink-0" />
                  <span>What is the coach-to-student batch ratio?</span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-6">
                  We maintain an attentive coach ratio (maximum 8-10 students per coach) with personal assistance for beginners to guarantee safety and fast balance learning.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
                <h4 className="font-serif text-base font-bold uppercase text-[#0A1931] flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-[#D97706] shrink-0" />
                  <span>How quickly can a beginner learn to skate?</span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-6">
                  With our structured balance exercises, most beginners learn the basic forward push and safe stopping within their first 3 classes.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =====================================================================
          SECTION: FINAL CALL-TO-ACTION (WHITE BACKGROUND & BLUE CTA CARD)
          ===================================================================== */}
      <section
        id="contact-cta"
        className="py-20 md:py-28 bg-white border-t border-slate-200"
      >
        <div className="mx-auto max-w-[1320px] px-6 md:px-8 lg:px-12">
          <div className="relative rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#0A1931] via-[#0E2954] to-[#1E3A8A] text-white p-6 sm:p-10 md:p-14 shadow-2xl overflow-hidden text-center max-w-4xl mx-auto border border-[#F59E0B]/30">
            {/* Decorative Top Accent Bar */}
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#F59E0B] via-[#FBBF24] to-transparent" />

            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-[#F59E0B]/40 text-[#FBBF24] text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-xs">
              <Compass className="size-3.5 text-[#F59E0B]" />
              <span>Explore 20 Training Centers</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-white leading-tight">
              Looking for Center Addresses &amp; Maps?
            </h2>

            <p className="mt-6 text-base sm:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed">
              View high-definition photos, landmarks, surface types, and Google Maps GPS navigation pins for all 20 academy centers across Thane, Mumbai, and Navi Mumbai.
            </p>

            {/* Single CTA Action Button */}
            <div className="mt-8 sm:mt-10 flex justify-center">
              <Link
                href="/facilities"
                data-slot="button"
                className="w-full sm:w-auto sm:min-w-[280px] max-w-sm inline-flex items-center justify-center gap-2.5 py-3.5 sm:py-4 px-6 sm:px-8 rounded-xl bg-[#F59E0B] text-[#0A1931] hover:bg-[#FBBF24] font-serif text-xs sm:text-sm md:text-base font-extrabold uppercase tracking-wider transition-all duration-200 shadow-xl shadow-[#F59E0B]/30 hover:shadow-[#F59E0B]/50 hover:-translate-y-0.5 active:translate-y-0 text-center"
              >
                <span>View All 20 Training Centers</span>
                <ArrowRight className="size-4 sm:size-5 text-[#0A1931] shrink-0" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
