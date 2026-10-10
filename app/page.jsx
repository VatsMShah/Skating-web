"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Flame,
  ArrowRight,
  ArrowUpRight,
  MapPin,
  Trophy,
  Users,
  ShieldCheck,
  Star,
  Quote,
  Phone,
  Mail,
  Sparkles,
  Play,
  ShoppingBag,
} from "lucide-react";
import VideoGallery from "@/components/VideoGallery";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#0F172A]">
      {/* =====================================================================
          SECTION 1: HERO SECTION (NAVY & GOLDEN YELLOW SPEED ENERGY)
          ===================================================================== */}
      <section
        id="hero"
        className="relative min-h-[90vh] md:min-h-screen w-full flex items-center justify-center overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28 bg-[#0A1931]"
      >
        {/* Background Action Image with Navy Gradient Overlays */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/unnamed-1.webp"
            alt="Dehiya Roller Skating Academy Champions & Coaches"
            fill
            className="size-full object-cover object-center opacity-65 brightness-90 contrast-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A1931]/80 via-[#0A1931]/60 to-[#0A1931]/95" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1931]/75 via-transparent to-[#0A1931]/75" />
        </div>

        {/* Decorative Gold Framing Accents */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-6 inset-y-8 md:inset-x-12 md:inset-y-12 z-10 border border-[#F59E0B]/20 hidden sm:block"
        >
          <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#F59E0B]" />
          <span className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#F59E0B]" />
          <span className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#F59E0B]" />
          <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#F59E0B]" />
        </div>

        {/* Hero Content */}
        <div className="container relative z-20 mx-auto px-6 sm:px-8 lg:px-12 max-w-[1320px] flex flex-col items-center text-center">
          <div className="flex flex-col items-center gap-3 mb-6">
            <span className="h-1 w-14 bg-[#F59E0B] rounded-full shadow-[0_0_10px_rgba(245,158,11,0.8)]" />
            <div className="inline-flex items-center gap-2 rounded-full border border-[#F59E0B]/60 bg-[#FEF3C7]/15 backdrop-blur-md px-4 py-1.5 text-[#FBBF24] text-xs sm:text-sm font-bold tracking-widest uppercase shadow-sm">
              <Flame className="size-4 text-[#F59E0B]" aria-hidden="true" />
              <span>36+ Years of Skating Excellence • Mumbai &amp; Thane</span>
            </div>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold uppercase tracking-tight text-white max-w-5xl leading-[1.04]">
            Forging <span className="text-[#FBBF24] underline decoration-[#F59E0B]/60 underline-offset-8">National Champions</span> &amp; Passionate Skaters
          </h1>

          <p className="mt-6 max-w-3xl text-base sm:text-lg md:text-xl text-slate-300 font-sans leading-relaxed">
            Under the master mentorship of decorated National and State medalists{" "}
            <strong className="text-white font-semibold">Mr. Rajinder Singh Dehiya</strong> and{" "}
            <strong className="text-white font-semibold">Mr. Navjeet Singh Dehiya</strong>, D.R.S.A provides premier roller and inline skating training across 7 active centers.
          </p>

          {/* Hero CTA Button: Jump to Training Centers */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <a
              href="#training-centers"
              data-slot="button"
              className="inline-flex items-center justify-center gap-2.5 whitespace-nowrap outline-none rounded-md w-full sm:w-auto bg-[#F59E0B] text-[#0A1931] hover:bg-[#FBBF24] font-serif font-extrabold uppercase tracking-wider h-13 px-9 text-base shadow-xl shadow-[#F59E0B]/30 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Jump to Training Centers</span>
              <ArrowRight className="size-4.5 text-[#0A1931]" aria-hidden="true" />
            </a>
          </div>

          {/* Key Metric Highlights Grid */}
          <div className="mt-14 sm:mt-16 pt-8 border-t border-slate-700/80 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 w-full max-w-4xl text-left">
            <div data-index="0" className="p-3.5 rounded-lg bg-white/5 border border-white/10 backdrop-blur-xs flex flex-col">
              <span className="text-xs uppercase tracking-wider text-[#F59E0B] font-mono font-semibold">Legacy</span>
              <span className="text-sm sm:text-base font-bold text-white mt-0.5">36+ Years of Coaching</span>
            </div>
            <div data-index="1" className="p-3.5 rounded-lg bg-white/5 border border-white/10 backdrop-blur-xs flex flex-col">
              <span className="text-xs uppercase tracking-wider text-[#F59E0B] font-mono font-semibold">Centers</span>
              <span className="text-sm sm:text-base font-bold text-white mt-0.5">7 Active Centers</span>
            </div>
            <div data-index="2" className="p-3.5 rounded-lg bg-white/5 border border-white/10 backdrop-blur-xs flex flex-col">
              <span className="text-xs uppercase tracking-wider text-[#F59E0B] font-mono font-semibold">Accolades</span>
              <span className="text-sm sm:text-base font-bold text-white mt-0.5">100+ State &amp; National Medals</span>
            </div>
            <div data-index="3" className="p-3.5 rounded-lg bg-white/5 border border-white/10 backdrop-blur-xs flex flex-col">
              <span className="text-xs uppercase tracking-wider text-[#F59E0B] font-mono font-semibold">Fast Learning</span>
              <span className="text-sm sm:text-base font-bold text-white mt-0.5">Skate in 3 Sessions</span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 2: ABOUT D.R.S.A SNAPSHOT (COACHES & ACADEMY LEGACY)
          ===================================================================== */}
      <section
        id="about-snapshot"
        className="relative overflow-hidden py-20 md:py-28 lg:py-32 bg-[#F1F5F9] border-t border-slate-200"
      >
        <div className="mx-auto max-w-[1320px] px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Coach Spotlight Media Card */}
            <div className="relative lg:col-span-6">
              <div className="absolute -top-3 left-4 z-20 h-1.5 w-14 bg-[#F59E0B] rounded-xs shadow-[0_0_8px_rgba(245,158,11,0.6)]" />
              <div className="relative rounded-xl border border-slate-200 bg-white p-3 sm:p-4 shadow-xl">
                <div className="pointer-events-none absolute top-2 left-2 z-10 size-4 border-t-2 border-l-2 border-[#0A1931]" />
                <div className="pointer-events-none absolute top-2 right-2 z-10 size-4 border-t-2 border-r-2 border-[#0A1931]" />
                <div className="pointer-events-none absolute bottom-2 left-2 z-10 size-4 border-b-2 border-l-2 border-[#0A1931]" />
                <div className="pointer-events-none absolute bottom-2 right-2 z-10 size-4 border-b-2 border-r-2 border-[#0A1931]" />

                <div className="grid grid-cols-2 gap-3 overflow-hidden rounded-lg bg-slate-100">
                  <div className="relative aspect-4/5 w-full overflow-hidden rounded-md bg-slate-200">
                    <Image
                      src="/images/rajinder-singh-dehiya.jpg"
                      alt="Mr. Rajinder Singh Dehiya - Owner & Head Coach"
                      fill
                      className="size-full object-cover object-top hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#0A1931]/95 via-[#0A1931]/75 to-transparent p-3">
                      <p className="text-xs font-serif font-bold uppercase text-white leading-tight">Mr. Rajinder Singh Dehiya</p>
                      <p className="text-[10px] font-mono text-[#FBBF24] font-semibold uppercase">Owner &amp; Head Coach</p>
                    </div>
                  </div>

                  <div className="relative aspect-4/5 w-full overflow-hidden rounded-md bg-slate-200">
                    <Image
                      src="/images/navjeet-singh-dehiya.jpg"
                      alt="Mr. Navjeet Singh Dehiya - Co-founder & Head Coach"
                      fill
                      className="size-full object-cover object-top hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#0A1931]/95 via-[#0A1931]/75 to-transparent p-3">
                      <p className="text-xs font-serif font-bold uppercase text-white leading-tight">Mr. Navjeet Singh Dehiya</p>
                      <p className="text-[10px] font-mono text-[#FBBF24] font-semibold uppercase">Co-founder &amp; Head Coach</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-3 flex items-center justify-between px-2 text-xs font-mono font-semibold tracking-wider text-slate-500 uppercase">
                <span>ESTABLISHED 1988 // D.R.S.A</span>
                <span>THANE &amp; MUMBAI</span>
              </div>
            </div>

            {/* About Copy & Content */}
            <div className="flex flex-col items-start lg:col-span-6">
              <div className="mb-4 inline-flex items-center gap-3">
                <span className="h-1 w-8 bg-[#F59E0B] rounded-full" />
                <span className="text-[#0A1931] text-xs font-bold uppercase tracking-widest sm:text-sm">
                  About D.R.S.A
                </span>
              </div>

              <h2 className="font-serif text-3xl font-extrabold uppercase tracking-tight sm:text-4xl lg:text-5xl text-[#0A1931]">
                36 Years of Passion, <br className="hidden sm:inline" />
                Discipline &amp; Championship Excellence.
              </h2>

              <p className="mt-6 text-base sm:text-lg leading-relaxed text-slate-600">
                Nestled across premier sports facilities in Thane and Mumbai, <strong className="text-[#0A1931]">Dehiya Roller Skating Academy</strong> is a beacon for aspiring skaters of all ages. With over 36 years of dedication, our prestigious academy has nurtured grassroots talent and forged medal-winning State and National champions.
              </p>

              <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-600">
                Parents are welcomed with open arms to watch as their children master fundamental balance, progress to high-speed aerodynamics, and develop lifelong confidence under personalized coaching.
              </p>

              {/* 3 Pillars */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3.5 w-full">
                <div className="p-3.5 rounded-lg bg-white border border-slate-200 shadow-xs hover:border-[#F59E0B] transition-colors">
                  <Trophy className="size-4.5 text-[#F59E0B] mb-1.5" />
                  <p className="text-xs font-bold uppercase text-[#0A1931]">Proven Record</p>
                  <p className="text-[11px] text-slate-500 mt-0.5">100+ district, state &amp; national medalists.</p>
                </div>
                <div className="p-3.5 rounded-lg bg-white border border-slate-200 shadow-xs hover:border-[#F59E0B] transition-colors">
                  <ShieldCheck className="size-4.5 text-[#0A1931] mb-1.5" />
                  <p className="text-xs font-bold uppercase text-[#0A1931]">Safety First</p>
                  <p className="text-[11px] text-slate-500 mt-0.5">Strict posture, pad gear &amp; fall mechanics.</p>
                </div>
                <div className="p-3.5 rounded-lg bg-white border border-slate-200 shadow-xs hover:border-[#F59E0B] transition-colors">
                  <Users className="size-4.5 text-[#F59E0B] mb-1.5" />
                  <p className="text-xs font-bold uppercase text-[#0A1931]">Family Spirit</p>
                  <p className="text-[11px] text-slate-500 mt-0.5">Encouraging community for all ages.</p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4 sm:mt-10">
                <Link
                  href="/about"
                  data-slot="button"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm h-11 rounded-md px-7 bg-[#0A1931] text-white font-bold uppercase tracking-wider transition-all duration-200 hover:bg-[#0E2954] hover:shadow-md hover:shadow-[#F59E0B]/20"
                >
                  <span>Our Story</span>
                  <ArrowUpRight className="size-4 text-[#FBBF24]" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 3: TRAINING DISCIPLINES & PROGRAMS
          ===================================================================== */}
      <section
        id="disciplines"
        className="py-20 md:py-28 lg:py-32 bg-white border-t border-slate-200"
      >
        <div className="mx-auto max-w-[1320px] px-6 md:px-8 lg:px-12">
          <div className="mb-14 md:mb-20 max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-1 w-12 bg-[#F59E0B] rounded-full inline-block" />
              <span className="text-xs md:text-sm font-extrabold uppercase tracking-widest text-[#0A1931]">
                Comprehensive Coaching
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-[#0A1931] leading-[1.08]">
              Training Programs Built For Every Age &amp; Ambition
            </h2>
            <p className="mt-5 text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl">
              From toddlers stepping onto quad skates for the first time to competitive athletes clocking national record times on professional inline skates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1: Beginner Foundation */}
            <div data-index="0" className="flex">
              <div
                data-slot="card"
                className="gap-6 py-6 pt-0 relative flex flex-col justify-between w-full overflow-hidden rounded-xl border border-slate-200 bg-[#F8FAFC] shadow-md hover:border-[#F59E0B] transition-all duration-200 hover:shadow-xl"
              >
                <div className="h-1 w-full bg-[#F59E0B]" />
                <div className="relative aspect-[16/11] w-full overflow-hidden bg-white p-3">
                  <Image
                    src="/images/basic-adjustable-skates.png"
                    alt="Beginner Foundation Skating"
                    fill
                    className="size-full object-contain"
                  />
                  <div className="absolute top-3 left-3 rounded-md bg-[#0A1931]/90 backdrop-blur-xs px-2.5 py-1 border border-[#F59E0B]/40">
                    <span className="text-xs font-mono font-bold tracking-wider text-[#FBBF24] uppercase">
                      AGES 4+ // FOUNDATION
                    </span>
                  </div>
                </div>
                <div data-slot="card-content" className="flex flex-col flex-1 p-5 md:p-6 bg-white border-t border-slate-100">
                  <div className="mb-2">
                    <h3 className="font-serif text-xl font-bold uppercase tracking-tight text-[#0A1931]">
                      Beginner Foundation
                    </h3>
                  </div>
                  <p className="text-xs font-mono text-[#D97706] font-bold tracking-wide mb-3">
                    Balance • Safety Falls • Basic Strides
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed flex-1">
                    Structured beginner clinic designed to eliminate fear, teach correct posture, stopping mechanics, and build self-assurance in just 3 sessions.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2: Speed Quad Skating */}
            <div data-index="1" className="flex">
              <div
                data-slot="card"
                className="gap-6 py-6 pt-0 relative flex flex-col justify-between w-full overflow-hidden rounded-xl border border-slate-200 bg-[#F8FAFC] shadow-md hover:border-[#F59E0B] transition-all duration-200 hover:shadow-xl"
              >
                <div className="h-1 w-full bg-[#F59E0B]" />
                <div className="relative aspect-[16/11] w-full overflow-hidden bg-white p-3">
                  <Image
                    src="/images/speed-quad-skates.png"
                    alt="Speed Quad Skating"
                    fill
                    className="size-full object-contain"
                  />
                  <div className="absolute top-3 left-3 rounded-md bg-[#0A1931]/90 backdrop-blur-xs px-2.5 py-1 border border-[#F59E0B]/40">
                    <span className="text-xs font-mono font-bold tracking-wider text-[#FBBF24] uppercase">
                      TRACK SPEED // QUADS
                    </span>
                  </div>
                </div>
                <div data-slot="card-content" className="flex flex-col flex-1 p-5 md:p-6 bg-white border-t border-slate-100">
                  <div className="mb-2">
                    <h3 className="font-serif text-xl font-bold uppercase tracking-tight text-[#0A1931]">
                      Speed Quad Skating
                    </h3>
                  </div>
                  <p className="text-xs font-mono text-[#D97706] font-bold tracking-wide mb-3">
                    Cornering • Sprint Starts • Cadence
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed flex-1">
                    Mastering four-wheel track agility, high-torque acceleration, corner crossovers, and competitive heat management.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3: Professional Speed Inline */}
            <div data-index="2" className="flex">
              <div
                data-slot="card"
                className="gap-6 py-6 pt-0 relative flex flex-col justify-between w-full overflow-hidden rounded-xl border border-slate-200 bg-[#F8FAFC] shadow-md hover:border-[#F59E0B] transition-all duration-200 hover:shadow-xl"
              >
                <div className="h-1 w-full bg-[#F59E0B]" />
                <div className="relative aspect-[16/11] w-full overflow-hidden bg-white p-3">
                  <Image
                    src="/images/professional-speed-inline-skates.png"
                    alt="Professional Speed Inline Skating"
                    fill
                    className="size-full object-contain"
                  />
                  <div className="absolute top-3 left-3 rounded-md bg-[#0A1931]/90 backdrop-blur-xs px-2.5 py-1 border border-[#F59E0B]/40">
                    <span className="text-xs font-mono font-bold tracking-wider text-[#FBBF24] uppercase">
                      ELITE SPEED // INLINE
                    </span>
                  </div>
                </div>
                <div data-slot="card-content" className="flex flex-col flex-1 p-5 md:p-6 bg-white border-t border-slate-100">
                  <div className="mb-2">
                    <h3 className="font-serif text-xl font-bold uppercase tracking-tight text-[#0A1931]">
                      Pro Speed Inline
                    </h3>
                  </div>
                  <p className="text-xs font-mono text-[#D97706] font-bold tracking-wide mb-3">
                    Aerodynamics • 110mm Wheels • Drafting
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed flex-1">
                    High-velocity inline racing focusing on low-drag posture, powerful double-push technique, and racing chassis tuning.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 4: Championship & National Prep */}
            <div data-index="3" className="flex">
              <div
                data-slot="card"
                className="gap-6 py-6 pt-0 relative flex flex-col justify-between w-full overflow-hidden rounded-xl border border-slate-200 bg-[#F8FAFC] shadow-md hover:border-[#F59E0B] transition-all duration-200 hover:shadow-xl"
              >
                <div className="h-1 w-full bg-[#F59E0B]" />
                <div className="relative aspect-[16/11] w-full overflow-hidden bg-white p-3">
                  <Image
                    src="/images/club-bodysuits.jpg"
                    alt="National Championship Prep"
                    fill
                    className="size-full object-contain"
                  />
                  <div className="absolute top-3 left-3 rounded-md bg-[#0A1931]/90 backdrop-blur-xs px-2.5 py-1 border border-[#F59E0B]/40">
                    <span className="text-xs font-mono font-bold tracking-wider text-[#FBBF24] uppercase">
                      TOURNAMENTS // NATIONALS
                    </span>
                  </div>
                </div>
                <div data-slot="card-content" className="flex flex-col flex-1 p-5 md:p-6 bg-white border-t border-slate-100">
                  <div className="mb-2">
                    <h3 className="font-serif text-xl font-bold uppercase tracking-tight text-[#0A1931]">
                      Championship Prep
                    </h3>
                  </div>
                  <p className="text-xs font-mono text-[#D97706] font-bold tracking-wide mb-3">
                    Intensive Camps • Race Tactics • Stamina
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed flex-1">
                    Elite tournament conditioning, early morning track sessions, Khopoli camps, and mental race preparation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 4: CHAMPIONS IN ACTION (5 VIDEOS SLIDING WINDOW GALLERY)
          ===================================================================== */}
      <VideoGallery />

      {/* =====================================================================
          SECTION 5: TRAINING CENTERS (6 FEATURED LOCATIONS WITH DIRECT MAPS)
          ===================================================================== */}
      <section
        id="training-centers"
        className="relative overflow-hidden py-20 md:py-28 lg:py-32 bg-[#F1F5F9] border-t border-slate-200"
      >
        <div className="container relative z-10 mx-auto max-w-[1320px] px-6 md:px-8 lg:px-12">
          <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FEF3C7] border border-[#F59E0B]/60 text-[#0A1931] text-xs font-bold uppercase tracking-widest mb-4 shadow-xs">
              <MapPin className="w-3.5 h-3.5 text-[#D97706]" aria-hidden="true" />
              <span>Locations &amp; Batches</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight uppercase text-[#0A1931] leading-tight">
              Our 7 Training Centers in <span className="text-[#D97706]">Thane &amp; Mumbai</span>
            </h2>
            <div className="flex items-center justify-center my-4">
              <div className="h-1 w-14 bg-[#F59E0B] rounded-full shadow-[0_0_8px_rgba(245,158,11,0.6)]" />
            </div>
            <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto font-sans leading-relaxed">
              Equipped with professional skate-friendly surfaces, safety fencing, and dedicated batch timings under certified coaches.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Center 1: Amber International School */}
            <div className="group relative flex flex-col justify-between bg-white border border-slate-200 hover:border-[#F59E0B] transition-all duration-300 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1">
              <div className="h-1.5 w-full bg-slate-200 group-hover:bg-[#F59E0B] transition-colors" />
              <div className="p-6 sm:p-7 space-y-5 flex-1 flex flex-col justify-between">
                <div className="space-y-4">
                  {/* DESIGNER SCULPTED ARCH IMAGE PORTAL */}
                  <div className="relative mx-auto w-full aspect-[4/3] max-h-[240px] overflow-hidden rounded-t-[100px] rounded-b-2xl bg-[#0A1931] border-2 border-[#F59E0B]/50 shadow-inner group-hover:border-[#F59E0B] group-hover:shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-all duration-500">
                    <Image
                      src="/images/places/amber-international-school-7-years-till-present.jpg"
                      alt="Amber International School, Thane"
                      fill
                      className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out brightness-95 group-hover:brightness-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />
                    <div className="absolute inset-1 rounded-t-[96px] rounded-b-xl border border-white/25 pointer-events-none" />

                    {/* Center Legacy Badge Floating in Middle */}
                    <div className="absolute top-3.5 inset-x-0 flex justify-center z-10 pointer-events-none">
                      <span className="text-[10px] sm:text-xs font-mono font-bold bg-[#0A1931]/95 text-[#FBBF24] border border-[#F59E0B] px-3.5 py-1 rounded-full shadow-lg uppercase tracking-wider backdrop-blur-md">
                        7+ YEARS LEGACY
                      </span>
                    </div>

                    {/* Bottom Tagline on Scrim */}
                    <div className="absolute bottom-2.5 inset-x-3 text-center pointer-events-none z-10">
                      <span className="text-[11px] font-mono text-[#FBBF24] font-semibold tracking-wide drop-shadow-md line-clamp-1">
                        Flagship Speed Rink &amp; Drills Arena
                      </span>
                    </div>
                  </div>

                  {/* Title & Zone Header */}
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-xs font-mono font-semibold text-[#D97706]">
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="size-3.5 text-[#D97706]" />
                        Dhokali, Thane West
                      </span>
                      <span className="text-slate-400 uppercase tracking-wider">Thane</span>
                    </div>
                    <h3 className="font-serif text-xl sm:text-2xl font-extrabold uppercase text-[#0A1931] tracking-tight group-hover:text-[#D97706] transition-colors leading-tight">
                      Amber International School
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans line-clamp-2">
                    Near Highland Park, near TMC Tank West, Dhokali, Thane West 400607.
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <Link
                    href="/contact"
                    className="text-xs font-mono font-bold uppercase tracking-wider text-[#0A1931] hover:text-[#D97706] transition-colors inline-flex items-center gap-1"
                  >
                    <span>Inquire Batch</span>
                    <ArrowRight className="size-3.5 text-[#D97706]" />
                  </Link>
                  <a
                    href="https://maps.app.goo.gl/iPuRK5ZCttr5KGbE7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#FEF3C7] text-[#0A1931] border border-[#F59E0B]/60 hover:bg-[#F59E0B] hover:text-[#0A1931] text-xs font-mono font-bold transition-all shadow-xs group/btn"
                  >
                    <span>Google Map</span>
                    <ArrowUpRight className="size-3.5 text-[#D97706] group-hover/btn:text-[#0A1931] group-hover/btn:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </div>

            {/* Center 2: Siddheshwar Garden */}
            <div className="group relative flex flex-col justify-between bg-white border border-slate-200 hover:border-[#F59E0B] transition-all duration-300 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1">
              <div className="h-1.5 w-full bg-slate-200 group-hover:bg-[#F59E0B] transition-colors" />
              <div className="p-6 sm:p-7 space-y-5 flex-1 flex flex-col justify-between">
                <div className="space-y-4">
                  {/* DESIGNER SCULPTED ARCH IMAGE PORTAL */}
                  <div className="relative mx-auto w-full aspect-[4/3] max-h-[240px] overflow-hidden rounded-t-[100px] rounded-b-2xl bg-[#0A1931] border-2 border-[#F59E0B]/50 shadow-inner group-hover:border-[#F59E0B] group-hover:shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-all duration-500">
                    <Image
                      src="/images/places/siddeshwar-garden-complex-thane-20-yrs-till-present.jpg"
                      alt="Siddheshwar Garden Complex, Thane"
                      fill
                      className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out brightness-95 group-hover:brightness-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />
                    <div className="absolute inset-1 rounded-t-[96px] rounded-b-xl border border-white/25 pointer-events-none" />

                    {/* Center Legacy Badge Floating in Middle */}
                    <div className="absolute top-3.5 inset-x-0 flex justify-center z-10 pointer-events-none">
                      <span className="text-[10px] sm:text-xs font-mono font-bold bg-[#0A1931]/95 text-[#FBBF24] border border-[#F59E0B] px-3.5 py-1 rounded-full shadow-lg uppercase tracking-wider backdrop-blur-md">
                        20+ YEARS RUNNING
                      </span>
                    </div>

                    {/* Bottom Tagline on Scrim */}
                    <div className="absolute bottom-2.5 inset-x-3 text-center pointer-events-none z-10">
                      <span className="text-[11px] font-mono text-[#FBBF24] font-semibold tracking-wide drop-shadow-md line-clamp-1">
                        Podium Tennis &amp; Dedicated Roller Rink
                      </span>
                    </div>
                  </div>

                  {/* Title & Zone Header */}
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-xs font-mono font-semibold text-[#D97706]">
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="size-3.5 text-[#D97706]" />
                        Dhokali Naka, Thane West
                      </span>
                      <span className="text-slate-400 uppercase tracking-wider">Thane</span>
                    </div>
                    <h3 className="font-serif text-xl sm:text-2xl font-extrabold uppercase text-[#0A1931] tracking-tight group-hover:text-[#D97706] transition-colors leading-tight">
                      Siddheshwar Garden
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans line-clamp-2">
                    Podium Court, Siddheshwar Garden, Kolshet Road, Dhokali Naka, Thane West 400607.
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <Link
                    href="/contact"
                    className="text-xs font-mono font-bold uppercase tracking-wider text-[#0A1931] hover:text-[#D97706] transition-colors inline-flex items-center gap-1"
                  >
                    <span>Inquire Batch</span>
                    <ArrowRight className="size-3.5 text-[#D97706]" />
                  </Link>
                  <a
                    href="https://maps.app.goo.gl/8Wii7PcMc8Vk2Fgz5"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#FEF3C7] text-[#0A1931] border border-[#F59E0B]/60 hover:bg-[#F59E0B] hover:text-[#0A1931] text-xs font-mono font-bold transition-all shadow-xs group/btn"
                  >
                    <span>Google Map</span>
                    <ArrowUpRight className="size-3.5 text-[#D97706] group-hover/btn:text-[#0A1931] group-hover/btn:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </div>

            {/* Center 3: Shreerang Vidyalaya */}
            <div className="group relative flex flex-col justify-between bg-white border border-slate-200 hover:border-[#F59E0B] transition-all duration-300 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1">
              <div className="h-1.5 w-full bg-slate-200 group-hover:bg-[#F59E0B] transition-colors" />
              <div className="p-6 sm:p-7 space-y-5 flex-1 flex flex-col justify-between">
                <div className="space-y-4">
                  {/* DESIGNER SCULPTED ARCH IMAGE PORTAL */}
                  <div className="relative mx-auto w-full aspect-[4/3] max-h-[240px] overflow-hidden rounded-t-[100px] rounded-b-2xl bg-[#0A1931] border-2 border-[#F59E0B]/50 shadow-inner group-hover:border-[#F59E0B] group-hover:shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-all duration-500">
                    <Image
                      src="/images/places/shreerang-vidyalaya.jpg"
                      alt="Shreerang Vidyalaya, Thane"
                      fill
                      className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out brightness-95 group-hover:brightness-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />
                    <div className="absolute inset-1 rounded-t-[96px] rounded-b-xl border border-white/25 pointer-events-none" />

                    {/* Center Legacy Badge Floating in Middle */}
                    <div className="absolute top-3.5 inset-x-0 flex justify-center z-10 pointer-events-none">
                      <span className="text-[10px] sm:text-xs font-mono font-bold bg-[#0A1931]/95 text-[#FBBF24] border border-[#F59E0B] px-3.5 py-1 rounded-full shadow-lg uppercase tracking-wider backdrop-blur-md">
                        CENTRAL THANE HUB
                      </span>
                    </div>

                    {/* Bottom Tagline on Scrim */}
                    <div className="absolute bottom-2.5 inset-x-3 text-center pointer-events-none z-10">
                      <span className="text-[11px] font-mono text-[#FBBF24] font-semibold tracking-wide drop-shadow-md line-clamp-1">
                        Central Thane Foundation &amp; Junior Development
                      </span>
                    </div>
                  </div>

                  {/* Title & Zone Header */}
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-xs font-mono font-semibold text-[#D97706]">
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="size-3.5 text-[#D97706]" />
                        Shrirang Society, Thane West
                      </span>
                      <span className="text-slate-400 uppercase tracking-wider">Thane</span>
                    </div>
                    <h3 className="font-serif text-xl sm:text-2xl font-extrabold uppercase text-[#0A1931] tracking-tight group-hover:text-[#D97706] transition-colors leading-tight">
                      Shreerang Vidyalaya
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans line-clamp-2">
                    P.P. Hathyogi Nikam Guruji Marg, Shrirang Society, Thane West 400601.
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <Link
                    href="/contact"
                    className="text-xs font-mono font-bold uppercase tracking-wider text-[#0A1931] hover:text-[#D97706] transition-colors inline-flex items-center gap-1"
                  >
                    <span>Inquire Batch</span>
                    <ArrowRight className="size-3.5 text-[#D97706]" />
                  </Link>
                  <a
                    href="https://maps.app.goo.gl/o8e5RXjS1vwGPw6DA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#FEF3C7] text-[#0A1931] border border-[#F59E0B]/60 hover:bg-[#F59E0B] hover:text-[#0A1931] text-xs font-mono font-bold transition-all shadow-xs group/btn"
                  >
                    <span>Google Map</span>
                    <ArrowUpRight className="size-3.5 text-[#D97706] group-hover/btn:text-[#0A1931] group-hover/btn:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </div>

            {/* Center 4: Sports Foundry, Bhandup */}
            <div className="group relative flex flex-col justify-between bg-white border border-slate-200 hover:border-[#F59E0B] transition-all duration-300 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1">
              <div className="h-1.5 w-full bg-slate-200 group-hover:bg-[#F59E0B] transition-colors" />
              <div className="p-6 sm:p-7 space-y-5 flex-1 flex flex-col justify-between">
                <div className="space-y-4">
                  {/* DESIGNER SCULPTED ARCH IMAGE PORTAL */}
                  <div className="relative mx-auto w-full aspect-[4/3] max-h-[240px] overflow-hidden rounded-t-[100px] rounded-b-2xl bg-[#0A1931] border-2 border-[#F59E0B]/50 shadow-inner group-hover:border-[#F59E0B] group-hover:shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-all duration-500">
                    <Image
                      src="/images/places/tsf.jpg"
                      alt="Sports Foundry, Bhandup West, Mumbai"
                      fill
                      className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out brightness-95 group-hover:brightness-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />
                    <div className="absolute inset-1 rounded-t-[96px] rounded-b-xl border border-white/25 pointer-events-none" />

                    {/* Center Legacy Badge Floating in Middle */}
                    <div className="absolute top-3.5 inset-x-0 flex justify-center z-10 pointer-events-none">
                      <span className="text-[10px] sm:text-xs font-mono font-bold bg-[#0A1931]/95 text-[#FBBF24] border border-[#F59E0B] px-3.5 py-1 rounded-full shadow-lg uppercase tracking-wider backdrop-blur-md">
                        OLYMPIC SPEED TRACK
                      </span>
                    </div>

                    {/* Bottom Tagline on Scrim */}
                    <div className="absolute bottom-2.5 inset-x-3 text-center pointer-events-none z-10">
                      <span className="text-[11px] font-mono text-[#FBBF24] font-semibold tracking-wide drop-shadow-md line-clamp-1">
                        High-Performance Speed Track &amp; Conditioning
                      </span>
                    </div>
                  </div>

                  {/* Title & Zone Header */}
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-xs font-mono font-semibold text-[#D97706]">
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="size-3.5 text-[#D97706]" />
                        LBS Marg, Bhandup West
                      </span>
                      <span className="text-slate-400 uppercase tracking-wider">Mumbai</span>
                    </div>
                    <h3 className="font-serif text-xl sm:text-2xl font-extrabold uppercase text-[#0A1931] tracking-tight group-hover:text-[#D97706] transition-colors leading-tight">
                      The Sports Foundry (TSF)
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans line-clamp-2">
                    Rolex Metal Industries Compound, Village Road, LBS Marg, Bhandup West 400078.
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <Link
                    href="/contact"
                    className="text-xs font-mono font-bold uppercase tracking-wider text-[#0A1931] hover:text-[#D97706] transition-colors inline-flex items-center gap-1"
                  >
                    <span>Inquire Batch</span>
                    <ArrowRight className="size-3.5 text-[#D97706]" />
                  </Link>
                  <a
                    href="https://maps.app.goo.gl/brq8GMmmJL3Dvq8F7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#FEF3C7] text-[#0A1931] border border-[#F59E0B]/60 hover:bg-[#F59E0B] hover:text-[#0A1931] text-xs font-mono font-bold transition-all shadow-xs group/btn"
                  >
                    <span>Google Map</span>
                    <ArrowUpRight className="size-3.5 text-[#D97706] group-hover/btn:text-[#0A1931] group-hover/btn:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </div>

            {/* Center 5: Pratap Sarnaik International School */}
            <div className="group relative flex flex-col justify-between bg-white border border-slate-200 hover:border-[#F59E0B] transition-all duration-300 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1">
              <div className="h-1.5 w-full bg-slate-200 group-hover:bg-[#F59E0B] transition-colors" />
              <div className="p-6 sm:p-7 space-y-5 flex-1 flex flex-col justify-between">
                <div className="space-y-4">
                  {/* DESIGNER SCULPTED ARCH IMAGE PORTAL */}
                  <div className="relative mx-auto w-full aspect-[4/3] max-h-[240px] overflow-hidden rounded-t-[100px] rounded-b-2xl bg-[#0A1931] border-2 border-[#F59E0B]/50 shadow-inner group-hover:border-[#F59E0B] group-hover:shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-all duration-500">
                    <Image
                      src="/images/places/pratap-sarnaik-school.jpg"
                      alt="Pratap Sarnaik International School, Thane"
                      fill
                      className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out brightness-95 group-hover:brightness-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />
                    <div className="absolute inset-1 rounded-t-[96px] rounded-b-xl border border-white/25 pointer-events-none" />

                    {/* Center Legacy Badge Floating in Middle */}
                    <div className="absolute top-3.5 inset-x-0 flex justify-center z-10 pointer-events-none">
                      <span className="text-[10px] sm:text-xs font-mono font-bold bg-[#0A1931]/95 text-[#FBBF24] border border-[#F59E0B] px-3.5 py-1 rounded-full shadow-lg uppercase tracking-wider backdrop-blur-md">
                        GB ROAD HUB
                      </span>
                    </div>

                    {/* Bottom Tagline on Scrim */}
                    <div className="absolute bottom-2.5 inset-x-3 text-center pointer-events-none z-10">
                      <span className="text-[11px] font-mono text-[#FBBF24] font-semibold tracking-wide drop-shadow-md line-clamp-1">
                        Ghodbunder Corridor In-School &amp; Open Academy
                      </span>
                    </div>
                  </div>

                  {/* Title & Zone Header */}
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-xs font-mono font-semibold text-[#D97706]">
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="size-3.5 text-[#D97706]" />
                        Empress Park, Kasarvadavali
                      </span>
                      <span className="text-slate-400 uppercase tracking-wider">Thane</span>
                    </div>
                    <h3 className="font-serif text-xl sm:text-2xl font-extrabold uppercase text-[#0A1931] tracking-tight group-hover:text-[#D97706] transition-colors leading-tight">
                      Pratap Sarnaik Int. School
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans line-clamp-2">
                    Plot No. 7/13 &amp; 7/19, near Children Traffic Park, Kasarvadavali 400615.
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <Link
                    href="/contact"
                    className="text-xs font-mono font-bold uppercase tracking-wider text-[#0A1931] hover:text-[#D97706] transition-colors inline-flex items-center gap-1"
                  >
                    <span>Inquire Batch</span>
                    <ArrowRight className="size-3.5 text-[#D97706]" />
                  </Link>
                  <a
                    href="https://maps.app.goo.gl/iem4cdkthKAtbV9r7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#FEF3C7] text-[#0A1931] border border-[#F59E0B]/60 hover:bg-[#F59E0B] hover:text-[#0A1931] text-xs font-mono font-bold transition-all shadow-xs group/btn"
                  >
                    <span>Google Map</span>
                    <ArrowUpRight className="size-3.5 text-[#D97706] group-hover/btn:text-[#0A1931] group-hover/btn:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </div>

            {/* Center 6: Piramal Vaikunth */}
            <div className="group relative flex flex-col justify-between bg-white border border-slate-200 hover:border-[#F59E0B] transition-all duration-300 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1">
              <div className="h-1.5 w-full bg-slate-200 group-hover:bg-[#F59E0B] transition-colors" />
              <div className="p-6 sm:p-7 space-y-5 flex-1 flex flex-col justify-between">
                <div className="space-y-4">
                  {/* DESIGNER SCULPTED ARCH IMAGE PORTAL */}
                  <div className="relative mx-auto w-full aspect-[4/3] max-h-[240px] overflow-hidden rounded-t-[100px] rounded-b-2xl bg-[#0A1931] border-2 border-[#F59E0B]/50 shadow-inner group-hover:border-[#F59E0B] group-hover:shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-all duration-500">
                    <Image
                      src="/images/places/piramal-vaikunth.webp"
                      alt="Piramal Vaikunth, Balkum Naka, Thane"
                      fill
                      className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out brightness-95 group-hover:brightness-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />
                    <div className="absolute inset-1 rounded-t-[96px] rounded-b-xl border border-white/25 pointer-events-none" />

                    {/* Center Legacy Badge Floating in Middle */}
                    <div className="absolute top-3.5 inset-x-0 flex justify-center z-10 pointer-events-none">
                      <span className="text-[10px] sm:text-xs font-mono font-bold bg-[#0A1931]/95 text-[#FBBF24] border border-[#F59E0B] px-3.5 py-1 rounded-full shadow-lg uppercase tracking-wider backdrop-blur-md">
                        BALKUM CORRIDOR
                      </span>
                    </div>

                    {/* Bottom Tagline on Scrim */}
                    <div className="absolute bottom-2.5 inset-x-3 text-center pointer-events-none z-10">
                      <span className="text-[11px] font-mono text-[#FBBF24] font-semibold tracking-wide drop-shadow-md line-clamp-1">
                        Premium Residential Sports Arena
                      </span>
                    </div>
                  </div>

                  {/* Title & Zone Header */}
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-xs font-mono font-semibold text-[#D97706]">
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="size-3.5 text-[#D97706]" />
                        Old Mumbai-Agra Road, Balkum
                      </span>
                      <span className="text-slate-400 uppercase tracking-wider">Thane</span>
                    </div>
                    <h3 className="font-serif text-xl sm:text-2xl font-extrabold uppercase text-[#0A1931] tracking-tight group-hover:text-[#D97706] transition-colors leading-tight">
                      Piramal Vaikunth
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans line-clamp-2">
                    Bayer Near Shivaji Nagar Ram Maruti Nagar, Balkum Naka, Thane West 400607.
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <Link
                    href="/contact"
                    className="text-xs font-mono font-bold uppercase tracking-wider text-[#0A1931] hover:text-[#D97706] transition-colors inline-flex items-center gap-1"
                  >
                    <span>Inquire Batch</span>
                    <ArrowRight className="size-3.5 text-[#D97706]" />
                  </Link>
                  <a
                    href="https://maps.app.goo.gl/ytQovR2huQ4Phpfi7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#FEF3C7] text-[#0A1931] border border-[#F59E0B]/60 hover:bg-[#F59E0B] hover:text-[#0A1931] text-xs font-mono font-bold transition-all shadow-xs group/btn"
                  >
                    <span>Google Map</span>
                    <ArrowUpRight className="size-3.5 text-[#D97706] group-hover/btn:text-[#0A1931] group-hover/btn:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </div>

            {/* Center 7: TMC Mini Stadium / Rink */}
            <div className="group relative flex flex-col justify-between bg-white border border-slate-200 hover:border-[#F59E0B] transition-all duration-300 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1 md:col-span-2 lg:col-span-1">
              <div className="h-1.5 w-full bg-slate-200 group-hover:bg-[#F59E0B] transition-colors" />
              <div className="p-6 sm:p-7 space-y-5 flex-1 flex flex-col justify-between">
                <div className="space-y-4">
                  {/* DESIGNER SCULPTED ARCH IMAGE PORTAL */}
                  <div className="relative mx-auto w-full aspect-[4/3] max-h-[240px] overflow-hidden rounded-t-[100px] rounded-b-2xl bg-[#0A1931] border-2 border-[#F59E0B]/50 shadow-inner group-hover:border-[#F59E0B] group-hover:shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-all duration-500">
                    <Image
                      src="/images/places/tmc-mini-stadium-thane-2-years-till-present.jpg"
                      alt="TMC Mini Stadium, Thane"
                      fill
                      className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out brightness-95 group-hover:brightness-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />
                    <div className="absolute inset-1 rounded-t-[96px] rounded-b-xl border border-white/25 pointer-events-none" />

                    {/* Center Legacy Badge Floating in Middle */}
                    <div className="absolute top-3.5 inset-x-0 flex justify-center z-10 pointer-events-none">
                      <span className="text-[10px] sm:text-xs font-mono font-bold bg-[#0A1931]/95 text-[#FBBF24] border border-[#F59E0B] px-3.5 py-1 rounded-full shadow-lg uppercase tracking-wider backdrop-blur-md">
                        MUNICIPAL ARENA
                      </span>
                    </div>

                    {/* Bottom Tagline on Scrim */}
                    <div className="absolute bottom-2.5 inset-x-3 text-center pointer-events-none z-10">
                      <span className="text-[11px] font-mono text-[#FBBF24] font-semibold tracking-wide drop-shadow-md line-clamp-1">
                        Municipal Championship Speed Track
                      </span>
                    </div>
                  </div>

                  {/* Title & Zone Header */}
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-xs font-mono font-semibold text-[#D97706]">
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="size-3.5 text-[#D97706]" />
                        TMC Sports Complex
                      </span>
                      <span className="text-slate-400 uppercase tracking-wider">Thane</span>
                    </div>
                    <h3 className="font-serif text-xl sm:text-2xl font-extrabold uppercase text-[#0A1931] tracking-tight group-hover:text-[#D97706] transition-colors leading-tight">
                      TMC Mini Stadium / Rink
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans line-clamp-2">
                    Thane Municipal Corporation official speed training banked track &amp; championship arena.
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <Link
                    href="/contact"
                    className="text-xs font-mono font-bold uppercase tracking-wider text-[#0A1931] hover:text-[#D97706] transition-colors inline-flex items-center gap-1"
                  >
                    <span>Inquire Batch</span>
                    <ArrowRight className="size-3.5 text-[#D97706]" />
                  </Link>
                  <a
                    href="https://maps.google.com/?q=Thane+Municipal+Corporation+Stadium"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#FEF3C7] text-[#0A1931] border border-[#F59E0B]/60 hover:bg-[#F59E0B] hover:text-[#0A1931] text-xs font-mono font-bold transition-all shadow-xs group/btn"
                  >
                    <span>Google Map</span>
                    <ArrowUpRight className="size-3.5 text-[#D97706] group-hover/btn:text-[#0A1931] group-hover/btn:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Quick jump to see all 7 centers */}
          <div className="mt-10 text-center">
            <Link
              href="/facilities"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0A1931] text-[#FBBF24] hover:bg-[#F59E0B] hover:text-[#0A1931] text-xs font-mono font-bold uppercase tracking-wider transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              <span>Explore All 7 Active Training Centers with Maps &amp; Schedules</span>
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 6: OFFICIAL PRO GEAR & MERCHANDISE PREVIEW
          ===================================================================== */}
      <section
        id="merchandise"
        className="py-20 md:py-28 bg-white border-t border-slate-200"
      >
        <div className="mx-auto max-w-[1320px] px-6 md:px-8 lg:px-12">
          <div className="mb-12 md:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-12 h-1 bg-[#F59E0B] rounded-full block" />
                <span className="font-sans text-xs md:text-sm font-extrabold uppercase tracking-widest text-[#0A1931]">
                  Coach-Curated Equipment
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight uppercase leading-[1.08] text-[#0A1931]">
                Official Gear &amp; Merchandise
              </h2>
              <p className="mt-3 font-sans text-slate-600 text-base md:text-lg max-w-2xl">
                Certified protective gear, race-spec inline and quad skates, speed wheels, and official D.R.S.A team uniforms.
              </p>
            </div>
            <div className="shrink-0">
              <Link
                href="/merchandise"
                data-slot="button"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap bg-[#0A1931] text-white hover:bg-[#F59E0B] hover:text-[#0A1931] border border-[#F59E0B]/50 font-sans font-bold uppercase tracking-wider text-xs md:text-sm px-6 py-3 rounded-md transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                <span>Explore Full Equipment Catalogue</span>
                <ArrowRight className="size-4 text-[#FBBF24] group-hover:text-[#0A1931]" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {/* Product 1: Basic Adjustable Skates */}
            <div data-slot="card" className="bg-[#F8FAFC] border border-slate-200 rounded-xl p-4 flex flex-col justify-between hover:border-[#F59E0B] transition-all duration-200 shadow-xs hover:shadow-md">
              <div>
                <div className="relative aspect-square w-full rounded-lg overflow-hidden bg-white mb-3 p-2 border border-slate-100">
                  <Image
                    src="/images/basic-adjustable-skates.png"
                    alt="Basic Adjustable Skates"
                    fill
                    className="size-full object-contain"
                  />
                </div>
                <h4 className="font-serif text-sm sm:text-base font-bold uppercase text-[#0A1931]">Adjustable Skates</h4>
                <p className="text-xs text-slate-500 mt-1">Beginner-friendly size-expandable skates for children.</p>
              </div>
              <span className="text-[11px] font-mono text-[#D97706] font-bold mt-3 block">Official DRSA Stock</span>
            </div>

            {/* Product 2: Basic Safety Gear */}
            <div data-slot="card" className="bg-[#F8FAFC] border border-slate-200 rounded-xl p-4 flex flex-col justify-between hover:border-[#F59E0B] transition-all duration-200 shadow-xs hover:shadow-md">
              <div>
                <div className="relative aspect-square w-full rounded-lg overflow-hidden bg-white mb-3 p-2 border border-slate-100">
                  <Image
                    src="/images/basic-safety-gear.png"
                    alt="Basic Safety Gear"
                    fill
                    className="size-full object-contain"
                  />
                </div>
                <h4 className="font-serif text-sm sm:text-base font-bold uppercase text-[#0A1931]">Complete Safety Gear</h4>
                <p className="text-xs text-slate-500 mt-1">Impact-absorbing knee, elbow, and wrist guards.</p>
              </div>
              <span className="text-[11px] font-mono text-[#D97706] font-bold mt-3 block">High Impact Protection</span>
            </div>

            {/* Product 3: Club Bodysuits */}
            <div data-slot="card" className="bg-[#F8FAFC] border border-slate-200 rounded-xl p-4 flex flex-col justify-between hover:border-[#F59E0B] transition-all duration-200 shadow-xs hover:shadow-md">
              <div>
                <div className="relative aspect-square w-full rounded-lg overflow-hidden bg-white mb-3 p-2 border border-slate-100">
                  <Image
                    src="/images/club-bodysuits.jpg"
                    alt="Club Bodysuits"
                    fill
                    className="size-full object-contain"
                  />
                </div>
                <h4 className="font-serif text-sm sm:text-base font-bold uppercase text-[#0A1931]">D.R.S.A Team Bodysuit</h4>
                <p className="text-xs text-slate-500 mt-1">Aerodynamic competition race skin suit with breathable mesh.</p>
              </div>
              <span className="text-[11px] font-mono text-[#D97706] font-bold mt-3 block">Official Team Wear</span>
            </div>

            {/* Product 4: Hard Helmets */}
            <div data-slot="card" className="bg-[#F8FAFC] border border-slate-200 rounded-xl p-4 flex flex-col justify-between hover:border-[#F59E0B] transition-all duration-200 shadow-xs hover:shadow-md">
              <div>
                <div className="relative aspect-square w-full rounded-lg overflow-hidden bg-white mb-3 p-2 border border-slate-100">
                  <Image
                    src="/images/hard-helmets.jpg"
                    alt="Hard Helmets"
                    fill
                    className="size-full object-contain"
                  />
                </div>
                <h4 className="font-serif text-sm sm:text-base font-bold uppercase text-[#0A1931]">Hard Shell Helmets</h4>
                <p className="text-xs text-slate-500 mt-1">Lightweight ventilated helmets with adjustable dial strap.</p>
              </div>
              <span className="text-[11px] font-mono text-[#D97706] font-bold mt-3 block">Certified Safety</span>
            </div>

            {/* Product 5: Speed Quad Skates */}
            <div data-slot="card" className="bg-[#F8FAFC] border border-slate-200 rounded-xl p-4 flex flex-col justify-between hover:border-[#F59E0B] transition-all duration-200 shadow-xs hover:shadow-md">
              <div>
                <div className="relative aspect-square w-full rounded-lg overflow-hidden bg-white mb-3 p-2 border border-slate-100">
                  <Image
                    src="/images/speed-quad-skates.png"
                    alt="Speed Quad Skates"
                    fill
                    className="size-full object-contain"
                  />
                </div>
                <h4 className="font-serif text-sm sm:text-base font-bold uppercase text-[#0A1931]">Speed Quad Skates</h4>
                <p className="text-xs text-slate-500 mt-1">Precision track quads with reinforced plates and racing boots.</p>
              </div>
              <span className="text-[11px] font-mono text-[#D97706] font-bold mt-3 block">Competition Ready</span>
            </div>

            {/* Product 6: Professional Speed Inline Skates */}
            <div data-slot="card" className="bg-[#F8FAFC] border border-slate-200 rounded-xl p-4 flex flex-col justify-between hover:border-[#F59E0B] transition-all duration-200 shadow-xs hover:shadow-md">
              <div>
                <div className="relative aspect-square w-full rounded-lg overflow-hidden bg-white mb-3 p-2 border border-slate-100">
                  <Image
                    src="/images/professional-speed-inline-skates.png"
                    alt="Professional Speed Inline Skates"
                    fill
                    className="size-full object-contain"
                  />
                </div>
                <h4 className="font-serif text-sm sm:text-base font-bold uppercase text-[#0A1931]">Pro Speed Inlines</h4>
                <p className="text-xs text-slate-500 mt-1">Carbon fiber racing shell, CNC aluminum chassis, speed wheels.</p>
              </div>
              <span className="text-[11px] font-mono text-[#D97706] font-bold mt-3 block">Championship Grade</span>
            </div>

            {/* Product 7: Wheels, Bearings & Spare Parts */}
            <div data-slot="card" className="bg-[#F8FAFC] border border-slate-200 rounded-xl p-4 flex flex-col justify-between hover:border-[#F59E0B] transition-all duration-200 shadow-xs hover:shadow-md">
              <div>
                <div className="relative aspect-square w-full rounded-lg overflow-hidden bg-white mb-3 p-2 border border-slate-100">
                  <Image
                    src="/images/wheels-bearings-and-spare-parts.jpg"
                    alt="Wheels, Bearings & Spare Parts"
                    fill
                    className="size-full object-contain"
                  />
                </div>
                <h4 className="font-serif text-sm sm:text-base font-bold uppercase text-[#0A1931]">Bearings &amp; Wheels</h4>
                <p className="text-xs text-slate-500 mt-1">High-spin ABEC bearings, high-rebound PU race wheels.</p>
              </div>
              <span className="text-[11px] font-mono text-[#D97706] font-bold mt-3 block">Spares &amp; Tuning</span>
            </div>

            {/* Product 8: Official Skate Bags */}
            <div data-slot="card" className="bg-[#F8FAFC] border border-slate-200 rounded-xl p-4 flex flex-col justify-between hover:border-[#F59E0B] transition-all duration-200 shadow-xs hover:shadow-md">
              <div>
                <div className="relative aspect-square w-full rounded-lg overflow-hidden bg-white mb-3 p-2 border border-slate-100">
                  <Image
                    src="/images/skate-bags.jpg"
                    alt="Official Skate Bags"
                    fill
                    className="size-full object-contain"
                  />
                </div>
                <h4 className="font-serif text-sm sm:text-base font-bold uppercase text-[#0A1931]">D.R.S.A Skate Bags</h4>
                <p className="text-xs text-slate-500 mt-1">Heavy-duty triangle skate bags with helmet compartment.</p>
              </div>
              <span className="text-[11px] font-mono text-[#D97706] font-bold mt-3 block">Travel Gear</span>
            </div>
          </div>

          {/* Quick jump to full catalogue with filter tabs */}
          <div className="mt-10 p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-xl bg-[#F59E0B]/20 border border-[#F59E0B] flex items-center justify-center text-[#D97706] shrink-0">
                <ShoppingBag className="size-5" />
              </div>
              <div>
                <h4 className="font-serif text-base font-bold uppercase text-[#0A1931]">Need custom sizing or speed quad &amp; inline setups?</h4>
                <p className="text-xs text-slate-500">Filter all equipment by category, view technical specs, and check the coach sizing guide.</p>
              </div>
            </div>
            <Link
              href="/merchandise"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0A1931] text-[#FBBF24] hover:bg-[#F59E0B] hover:text-[#0A1931] text-xs font-mono font-bold uppercase tracking-wider transition-all duration-200 shrink-0 shadow-xs"
            >
              <span>View Filter Tabs &amp; Sizing Guide</span>
              <ArrowRight className="size-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 7: TESTIMONIALS & REVIEWS
          ===================================================================== */}
      <section
        id="testimonials"
        className="py-20 md:py-28 bg-[#F1F5F9] border-t border-slate-200"
      >
        <div className="mx-auto max-w-[1320px] px-6 md:px-8 lg:px-12">
          <div className="text-center mb-14 md:mb-18 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FEF3C7] border border-[#F59E0B]/60 text-[#0A1931] text-xs font-bold uppercase tracking-widest mb-4 shadow-xs">
              <Quote className="w-3.5 h-3.5 text-[#D97706]" aria-hidden="true" />
              <span>Real Experiences</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight uppercase text-[#0A1931] leading-tight">
              What Our Skating Family Says
            </h2>
            <div className="flex items-center justify-center my-4">
              <div className="h-1 w-14 bg-[#F59E0B] rounded-full shadow-[0_0_8px_rgba(245,158,11,0.6)]" />
            </div>
            <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto font-sans leading-relaxed">
              Decades of trust, transforming curious beginners into decorated national medalists.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Testimonial 1 */}
            <div data-slot="card" className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 flex flex-col justify-between hover:border-[#F59E0B] transition-all duration-200 shadow-md">
              <div className="space-y-4">
                <div className="flex items-center gap-1 text-[#F59E0B]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="size-4.5 fill-[#F59E0B] text-[#F59E0B]" />
                  ))}
                </div>
                <p className="text-sm sm:text-base text-slate-700 italic leading-relaxed">
                  &ldquo;My daughter started skating under Dehiya Sir when she was 6 years old. She won multiple medals and we recognized her talent. It was just a start — she won countless medals at state and national level for the next 10 years. Thanks to Dehiya Sir for building her talent in skating.&rdquo;
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-3">
                <div className="relative size-11 rounded-full overflow-hidden border-2 border-[#F59E0B] shadow-xs">
                  <Image
                    src="/images/mintu-mama.png"
                    alt="Terjinder Singh"
                    fill
                    className="size-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold uppercase text-[#0A1931]">Terjinder Singh</h4>
                  <p className="text-xs text-slate-500 font-mono">Parent of National Medalist</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div data-slot="card" className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 flex flex-col justify-between hover:border-[#F59E0B] transition-all duration-200 shadow-md">
              <div className="space-y-4">
                <div className="flex items-center gap-1 text-[#F59E0B]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="size-4.5 fill-[#F59E0B] text-[#F59E0B]" />
                  ))}
                </div>
                <p className="text-sm sm:text-base text-slate-700 italic leading-relaxed">
                  &ldquo;Rajinder Singh and Navjeet Singh are amazing coaches! Despite the age, they gave me immense confidence to roll on skates in a few minutes and I was able to skate in just 3 sessions. The techniques and exercises are very helpful. Watching the father-son duo on skates is a beauty — looks so effortless!&rdquo;
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-3">
                <div className="relative size-11 rounded-full overflow-hidden border-2 border-[#F59E0B] shadow-xs">
                  <Image
                    src="/images/ivaturi.webp"
                    alt="Gayatri Ivaturi"
                    fill
                    className="size-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold uppercase text-[#0A1931]">Gayatri Ivaturi</h4>
                  <p className="text-xs text-slate-500 font-mono">Adult Skating Student</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div data-slot="card" className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 flex flex-col justify-between hover:border-[#F59E0B] transition-all duration-200 shadow-md">
              <div className="space-y-4">
                <div className="flex items-center gap-1 text-[#F59E0B]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="size-4.5 fill-[#F59E0B] text-[#F59E0B]" />
                  ))}
                </div>
                <p className="text-sm sm:text-base text-slate-700 italic leading-relaxed">
                  &ldquo;I have known the Dehiya Family teach skating since I was a kid. I would highly recommend all beginners to get trained by this academy, they are absolutely professional, dedicated, and bring out the best in every skater.&rdquo;
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-3">
                <div className="relative size-11 rounded-full overflow-hidden border-2 border-[#F59E0B] shadow-xs">
                  <Image
                    src="/images/dore.png"
                    alt="Amol Gowda"
                    fill
                    className="size-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold uppercase text-[#0A1931]">Amol Gowda</h4>
                  <p className="text-xs text-slate-500 font-mono">Long-time Supporter</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick jump to full testimonials */}
          <div className="mt-10 text-center">
            <Link
              href="/testimonials"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0A1931] text-[#FBBF24] hover:bg-[#F59E0B] hover:text-[#0A1931] text-xs font-mono font-bold uppercase tracking-wider transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              <span>Read All Parent &amp; Champion Stories</span>
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 8: FINAL CALL-TO-ACTION (EYE-SOOTHING NAVY & GOLD HEROIC BANNER)
          ===================================================================== */}
      <section
        id="cta-section"
        className="py-20 md:py-28 bg-white border-t border-slate-200"
      >
        <div className="mx-auto max-w-[1320px] px-6 md:px-8 lg:px-12">
          <div className="relative rounded-2xl bg-gradient-to-br from-[#0A1931] via-[#0E2954] to-[#1E3A8A] text-white p-8 sm:p-12 md:p-16 shadow-2xl overflow-hidden text-center max-w-4xl mx-auto border border-[#F59E0B]/30">
            {/* Decorative Top Accent Bar */}
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#F59E0B] via-[#FBBF24] to-transparent" />

            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-[#F59E0B]/40 text-[#FBBF24] text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-xs">
              <Sparkles className="size-3.5 text-[#F59E0B]" />
              <span>Join The D.R.S.A Family</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-white leading-tight">
              Ready to Start Your Skating Journey?
            </h2>

            <p className="mt-6 text-base sm:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed">
              Connect directly with Head Coaches <strong className="text-[#FBBF24]">Mr. Rajinder Singh Dehiya</strong> and <strong className="text-[#FBBF24]">Mr. Navjeet Singh Dehiya</strong> to find the right batch, equipment, and schedule at your nearest training center.
            </p>

            {/* Direct Contact Numbers & Emails Pill */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-sm font-mono">
              <a
                href="tel:9323861266"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white hover:text-[#FBBF24] hover:border-[#F59E0B]/60 transition-colors"
              >
                <Phone className="size-4 text-[#F59E0B]" />
                <span>Rajinder Singh: +91 93238 61266</span>
              </a>
              <a
                href="tel:8693817112"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white hover:text-[#FBBF24] hover:border-[#F59E0B]/60 transition-colors"
              >
                <Phone className="size-4 text-[#F59E0B]" />
                <span>Navjeet Singh: +91 86938 17112</span>
              </a>
              <a
                href="mailto:rajinderdehiya@gmail.com"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white hover:text-[#FBBF24] hover:border-[#F59E0B]/60 transition-colors"
              >
                <Mail className="size-4 text-[#F59E0B]" />
                <span>rajinderdehiya@gmail.com</span>
              </a>
              <a
                href="mailto:navjeetdehiya@gmail.com"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white hover:text-[#FBBF24] hover:border-[#F59E0B]/60 transition-colors"
              >
                <Mail className="size-4 text-[#F59E0B]" />
                <span>navjeetdehiya@gmail.com</span>
              </a>
            </div>

            {/* Single CTA Action Button */}
            <div className="mt-8 sm:mt-10 flex justify-center">
              <Link
                href="/contact"
                data-slot="button"
                className="w-full sm:w-auto sm:min-w-[280px] max-w-sm inline-flex items-center justify-center gap-2.5 py-3.5 sm:py-4 px-6 sm:px-8 rounded-xl bg-[#F59E0B] text-[#0A1931] hover:bg-[#FBBF24] font-serif text-xs sm:text-sm md:text-base font-extrabold uppercase tracking-wider transition-all duration-200 shadow-xl shadow-[#F59E0B]/30 hover:shadow-[#F59E0B]/50 hover:-translate-y-0.5 active:translate-y-0 text-center"
              >
                <span>Send an Inquiry</span>
                <ArrowRight className="size-4 sm:size-5 text-[#0A1931] shrink-0" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
