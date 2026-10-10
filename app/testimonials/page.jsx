"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Star,
  Quote,
  Trophy,
  Sparkles,
  ChevronRight,
  Phone,
  Mail,
  ArrowRight,
  CheckCircle2,
  MapPin,
  HeartHandshake,
  Award,
  Users,
  Search,
  ExternalLink,
  MessageSquare,
} from "lucide-react";

export const TESTIMONIALS_DATA = [
  {
    id: "terjinder-singh",
    name: "Terjinder Singh",
    role: "Parent of National Medalist",
    category: "parents",
    categoryLabel: "Parent of Champion",
    location: "Thane West",
    yearsWithDRSA: "10+ Years",
    rating: 5,
    avatar: "/images/mintu-mama.png",
    achievementBadge: "🥇 National Gold Medalist Parent",
    badgeColor: "bg-amber-500/15 text-[#FBBF24] border-[#F59E0B]/60",
    quote:
      "My daughter started skating under Dehiya Sir when she was 6 years old. She won multiple medals and we recognized her talent. It was just a start — she won countless medals at state and national level for the next 10 years. Thanks to Dehiya Sir for building her talent in skating and fostering champions with immense discipline.",
    skaterName: "Gurleen Kaur (Speed Inline Racer)",
    keyTakeaway: "Transformed from beginner at age 6 to a decade of national podium medals",
  },
  {
    id: "gayatri-ivaturi",
    name: "Gayatri Ivaturi",
    role: "Adult Skating Student",
    category: "beginners",
    categoryLabel: "Adult Beginner",
    location: "Mumbai",
    yearsWithDRSA: "2 Years",
    rating: 5,
    avatar: "/images/ivaturi.webp",
    achievementBadge: "⚡ Skated in 3 Sessions",
    badgeColor: "bg-emerald-500/15 text-emerald-400 border-emerald-500/60",
    quote:
      "Rajinder Singh and Navjeet Singh are amazing coaches! Despite my age and zero sports background, they gave me immense confidence to roll on skates in a few minutes and I was able to skate smoothly in just 3 sessions. The balance techniques and core exercises are exceptional. Watching the father-son duo on skates is pure beauty — looks completely effortless!",
    skaterName: "Gayatri (Fitness & Balance Batch)",
    keyTakeaway: "Zero-fear learning method that gets adults skating confidently in 3 classes",
  },
  {
    id: "amol-gowda",
    name: "Amol Gowda",
    role: "Long-Time Alumni & Academy Supporter",
    category: "alumni",
    categoryLabel: "Alumni & Supporter",
    location: "Siddheshwar Garden, Thane",
    yearsWithDRSA: "15+ Years",
    rating: 5,
    avatar: "/images/dore.png",
    achievementBadge: "🌟 15-Year Academy Family",
    badgeColor: "bg-blue-500/15 text-blue-400 border-blue-500/60",
    quote:
      "I have known the Dehiya Family teach skating since I was a kid growing up in Thane. I would highly recommend all parents to get their children trained by this academy. They are absolutely professional, deeply dedicated, and bring out the best in every child with unmatched patience and safety standards.",
    skaterName: "Alumni Network Member",
    keyTakeaway: "Consistent 36-year legacy trusted by multiple generations of Thane families",
  },
  {
    id: "priya-deshmukh",
    name: "Priya & Rajesh Deshmukh",
    role: "Parents of 7-Year-Old Quad Skater",
    category: "parents",
    categoryLabel: "Junior Parent",
    location: "Amber International School, Thane",
    yearsWithDRSA: "3 Years",
    rating: 5,
    avatar: "/images/gallery/2025-05-17-1.jpg",
    achievementBadge: "🏆 District Championship Medalist",
    badgeColor: "bg-purple-500/15 text-purple-400 border-purple-500/60",
    quote:
      "Our son Aryan was extremely hesitant and shy when he first stepped on the rink. Coach Navjeet's positive reinforcement and structured stride drills gave him incredible balance. Within six months, he participated in his first inter-school championship and brought home a bronze medal!",
    skaterName: "Aryan Deshmukh (Quad Speed Batch)",
    keyTakeaway: "Exceptional confidence building for young children through positive coaching",
  },
  {
    id: "vikram-mehta",
    name: "Vikram Mehta",
    role: "Parent of Speed Inline Racer",
    category: "parents",
    categoryLabel: "Speed Inline Parent",
    location: "Sports Foundry, Bhandup",
    yearsWithDRSA: "5 Years",
    rating: 5,
    avatar: "/images/gallery/2024-02-11.jpg",
    achievementBadge: "🥇 State Inline 500m Gold",
    badgeColor: "bg-amber-500/15 text-[#FBBF24] border-[#F59E0B]/60",
    quote:
      "The precision training at Sports Foundry under Rajinder Sir is second to none. He understands speed skating biomechanics down to the millimeter — from wheel selection to banking corner physics. My daughter went from local races to state gold under his dedicated mentorship.",
    skaterName: "Ananya Mehta (State Inline Squad)",
    keyTakeaway: "Olympic-grade technical coaching for high-velocity competitive inline racing",
  },
  {
    id: "rohit-sharma-parent",
    name: "Sneha Sharma",
    role: "Parent of 5-Year-Old Novice Skater",
    category: "beginners",
    categoryLabel: "Starter Parent",
    location: "Siddheshwar Garden, Thane",
    yearsWithDRSA: "1 Year",
    rating: 5,
    avatar: "/images/gallery/2025-10-18.jpg",
    achievementBadge: "👶 Safest Starter Program",
    badgeColor: "bg-cyan-500/15 text-cyan-400 border-cyan-500/60",
    quote:
      "As a mother, my biggest concern was safety and falling down. The DRSA coaching team enforces 100% protective gear protocol and teaches kids how to fall safely without any injury. My 5-year-old now looks forward to every single weekend skating class with huge excitement!",
    skaterName: "Kabir Sharma (Starter Quad Batch)",
    keyTakeaway: "Uncompromised safety protocols and zero-injury progressive learning framework",
  },
  {
    id: "siddharth-kulkarni",
    name: "Siddharth Kulkarni",
    role: "Former Student & State Medalist",
    category: "alumni",
    categoryLabel: "Academy Alumni",
    location: "TMC Stadium, Thane",
    yearsWithDRSA: "8 Years",
    rating: 5,
    avatar: "/images/gallery/2026-02-10.jpg",
    achievementBadge: "🎖️ Former State Champion",
    badgeColor: "bg-blue-500/15 text-blue-400 border-blue-500/60",
    quote:
      "What sets DRSA apart is the life values you learn along with skating — discipline, resilience after a fall, and true sportsmanship. The Dehiya family treat every student like their own child. The lessons I learned on the rink still guide me in my professional life.",
    skaterName: "Siddharth (Alumni 2018 Batch)",
    keyTakeaway: "Character building, physical endurance, and sportsmanship that lasts a lifetime",
  },
  {
    id: "manisha-patil",
    name: "Dr. Manisha Patil",
    role: "Parent & Sports Medicine Physician",
    category: "parents",
    categoryLabel: "Medical Professional",
    location: "CBD Belapur YMCA, Navi Mumbai",
    yearsWithDRSA: "4 Years",
    rating: 5,
    avatar: "/images/gallery/2026-09-28.jpg",
    achievementBadge: "🩺 Doctor & Parent Endorsement",
    badgeColor: "bg-emerald-500/15 text-emerald-400 border-emerald-500/60",
    quote:
      "From a sports medicine perspective, the warm-up routines, core stabilization, and knee posture drills taught at DRSA are ergonomically sound. Both my children have developed fantastic posture, lung stamina, and coordination without joint stress.",
    skaterName: "Rohan & Riya Patil (Intermediate Inlines)",
    keyTakeaway: "Ergonomically sound warm-ups and safe joint biomechanics endorsed by doctors",
  },
];

const FILTER_TABS = [
  { id: "all", label: "All Stories", count: 8, icon: MessageSquare },
  { id: "parents", label: "Parents of Champions", count: 4, icon: Trophy },
  { id: "beginners", label: "Beginners & Adults", count: 2, icon: HeartHandshake },
  { id: "alumni", label: "Alumni & Legacy", count: 2, icon: Award },
];

export default function TestimonialsPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredReviews = useMemo(() => {
    return TESTIMONIALS_DATA.filter((item) => {
      const matchesTab = activeTab === "all" || item.category === activeTab;
      const matchesSearch =
        searchQuery === "" ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.quote.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.achievementBadge.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesTab && matchesSearch;
    });
  }, [activeTab, searchQuery]);

  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#0F172A]">
      
      {/* =====================================================================
          HERO SECTION: ACTION BG + SIGNATURE GOLD FRAME + STATS RIBBON
          ===================================================================== */}
      <section className="relative w-full overflow-hidden bg-[#0A1931] text-white pt-32 pb-20 md:pt-40 md:pb-28 border-b border-slate-800">
        
        {/* Background Action Image with Navy Gradient Overlays */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/gallery/2024-02-11.jpg"
            alt="Dehiya Roller Skating Academy Champions & Coaches Podium Celebration"
            fill
            sizes="100vw"
            className="size-full object-cover object-[center_35%] opacity-55 brightness-90 contrast-105"
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
            <span className="text-[#FBBF24] font-semibold">Testimonials</span>
          </nav>

          {/* Gold Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#FEF3C7]/15 border border-[#F59E0B]/60 text-[#FBBF24] text-xs font-mono font-bold uppercase tracking-widest shadow-lg backdrop-blur-md mb-6">
            <Star className="size-4 text-[#F59E0B] fill-[#F59E0B]" />
            <span>36+ Years of Trust • Real Experiences</span>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight text-white leading-tight text-balance">
              Voices of Our <span className="text-[#FBBF24] underline decoration-[#F59E0B]/50 decoration-4 underline-offset-8">Skating Family</span>
            </h1>

            <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto font-sans leading-relaxed">
              Read authentic reviews from parents, adult learners, and state &amp; national medalists who have trained under Head Coaches <strong>Mr. Rajinder Singh Dehiya</strong> and <strong>Mr. Navjeet Singh Dehiya</strong>.
            </p>

            {/* Instant Review Search Bar */}
            <div className="pt-4 max-w-xl mx-auto w-full">
              <div className="relative flex items-center">
                <Search className="absolute left-4 size-5 text-[#F59E0B]" />
                <input
                  type="text"
                  placeholder="Search reviews (e.g. National Medalist, Adult, Siddheshwar, 3 Sessions...)"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-slate-400 text-sm md:text-base focus:outline-none focus:border-[#F59E0B] focus:ring-2 focus:ring-[#F59E0B]/40 transition-all shadow-xl"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3.5 text-xs text-slate-400 hover:text-white bg-white/10 px-2 py-1 rounded-md"
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>

            {/* Quick stats ribbon (Matching About Us, Facilities, Products) */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto w-full">
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs text-center">
                <span className="block font-serif text-2xl sm:text-3xl font-black text-[#FBBF24]">5.0 ★</span>
                <span className="text-[11px] font-mono uppercase text-slate-300 tracking-wider">Parent Rating</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs text-center">
                <span className="block font-serif text-2xl sm:text-3xl font-black text-[#FBBF24]">100+</span>
                <span className="text-[11px] font-mono uppercase text-slate-300 tracking-wider">State &amp; Nat Medals</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs text-center">
                <span className="block font-serif text-2xl sm:text-3xl font-black text-[#FBBF24]">36+</span>
                <span className="text-[11px] font-mono uppercase text-slate-300 tracking-wider">Years Heritage</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs text-center">
                <span className="block font-serif text-2xl sm:text-3xl font-black text-[#FBBF24]">3</span>
                <span className="text-[11px] font-mono uppercase text-slate-300 tracking-wider">Generations Trained</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION: REVIEWS WITH FILTER TABS & COMPACT CARDS
          ===================================================================== */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-[1320px] px-4 sm:px-6 md:px-8 lg:px-12 space-y-8 sm:space-y-10">
          
          {/* Filter Tabs Bar */}
          <div className="flex flex-col items-center gap-3">
            <div className="flex items-center justify-start sm:justify-center gap-1.5 sm:gap-2 p-1.5 rounded-2xl sm:rounded-full bg-slate-200/80 border border-slate-300/80 shadow-xs max-w-full overflow-x-auto no-scrollbar">
              {FILTER_TABS.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 py-2 rounded-xl sm:rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all duration-200 shrink-0 cursor-pointer ${
                      isActive
                        ? "bg-[#0A1931] text-[#FBBF24] border border-[#F59E0B] shadow-sm scale-102"
                        : "bg-white/80 text-slate-700 hover:text-[#0A1931] hover:bg-white border border-transparent"
                    }`}
                  >
                    <Icon className={`size-3.5 sm:size-4 ${isActive ? "text-[#F59E0B]" : "text-slate-500"}`} />
                    <span>{tab.label}</span>
                    <span
                      className={`text-[10px] sm:text-[11px] px-1.5 py-0.2 rounded-full ${
                        isActive ? "bg-[#F59E0B]/25 text-[#FBBF24]" : "bg-slate-200 text-slate-600"
                      }`}
                    >
                      {tab.count}
                    </span>
                  </button>
                );
              })}
            </div>

            <p className="text-[11px] sm:text-xs font-mono text-slate-500">
              Showing {filteredReviews.length} of {TESTIMONIALS_DATA.length} verified testimonials
            </p>
          </div>

          {/* Testimonial Cards Grid (Compact & Responsive) */}
          {filteredReviews.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredReviews.map((item) => (
                <div
                  key={item.id}
                  className="group relative flex flex-col justify-between bg-white border border-slate-200 hover:border-[#F59E0B] transition-all duration-300 rounded-2xl p-6 shadow-xs hover:shadow-xl hover:-translate-y-1"
                >
                  {/* Top Accent Strip */}
                  <div className="absolute top-0 inset-x-0 h-1 bg-slate-100 group-hover:bg-[#F59E0B] transition-colors rounded-t-2xl" />

                  <div className="space-y-4">
                    {/* Top Header: Badge & Star Rating */}
                    <div className="flex items-center justify-between gap-2 pt-1">
                      <span className={`text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full border shadow-xs uppercase tracking-wider ${item.badgeColor}`}>
                        {item.achievementBadge}
                      </span>
                      <div className="flex items-center gap-0.5 text-[#F59E0B]">
                        {[...Array(item.rating)].map((_, i) => (
                          <Star key={i} className="size-3.5 fill-[#F59E0B] text-[#F59E0B]" />
                        ))}
                      </div>
                    </div>

                    {/* Direct Quote */}
                    <div className="relative">
                      <Quote className="size-6 text-[#F59E0B]/20 absolute -top-2 -left-1 -z-0" />
                      <p className="relative z-10 text-xs sm:text-sm text-slate-700 italic leading-relaxed font-sans pt-1">
                        &ldquo;{item.quote}&rdquo;
                      </p>
                    </div>

                    {/* Key Takeaway Chip */}
                    <div className="p-2 rounded-lg bg-slate-50 border border-slate-100 text-[11px] text-slate-600 flex items-start gap-1.5">
                      <CheckCircle2 className="size-3.5 text-[#D97706] shrink-0 mt-0.5" />
                      <span>{item.keyTakeaway}</span>
                    </div>
                  </div>

                  {/* Card Author Info */}
                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="relative size-11 rounded-full overflow-hidden border-2 border-[#F59E0B] bg-slate-100 shadow-xs shrink-0">
                        <Image
                          src={item.avatar}
                          alt={item.name}
                          fill
                          sizes="44px"
                          loading="lazy"
                          className="size-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-serif text-sm font-bold uppercase text-[#0A1931] group-hover:text-[#D97706] transition-colors">
                          {item.name}
                        </h4>
                        <p className="text-[11px] text-slate-500 font-sans">{item.role}</p>
                        <span className="text-[10px] font-mono text-[#D97706] block">
                          📍 {item.location} • {item.yearsWithDRSA}
                        </span>
                      </div>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          ) : (
            <div className="p-8 sm:p-12 text-center bg-white rounded-2xl border border-slate-200 shadow-xs space-y-4 max-w-lg mx-auto">
              <div className="size-14 rounded-full bg-slate-100 flex items-center justify-center mx-auto text-slate-400">
                <Search className="size-6" />
              </div>
              <h3 className="font-serif text-lg font-bold uppercase text-[#0A1931]">No reviews found</h3>
              <p className="text-xs sm:text-sm text-slate-600">
                No testimonials match &ldquo;{searchQuery}&rdquo;. Try resetting your filters.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setActiveTab("all");
                }}
                className="px-4 py-2 rounded-lg bg-[#0A1931] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#F59E0B] hover:text-[#0A1931] transition-all"
              >
                Reset Filters
              </button>
            </div>
          )}

          {/* -----------------------------------------------------------------
              PARENT TRUST & COACHING PHILOSOPHY BANNER
              ----------------------------------------------------------------- */}
          <section className="rounded-2xl sm:rounded-3xl bg-slate-900 text-white p-6 sm:p-10 border-2 border-[#F59E0B]/40 shadow-xl relative overflow-hidden">
            <div className="absolute -top-24 -right-24 size-72 bg-[#F59E0B]/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
              <div className="lg:col-span-5 space-y-3 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FEF3C7]/15 border border-[#F59E0B]/50 text-[#FBBF24] text-[11px] font-mono font-bold uppercase tracking-wider">
                  <HeartHandshake className="size-3 text-[#F59E0B]" />
                  <span>Why Parents Choose D.R.S.A</span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-extrabold uppercase leading-tight text-white">
                  A Second Home on Wheels for Every Child
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  For over 36 years, our coaching philosophy goes far beyond trophies. We nurture confidence in hesitant children, instill Olympic-standard discipline, and ensure open rink-side parent communication at every practice session.
                </p>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs space-y-1.5">
                  <div className="flex items-center gap-2">
                    <div className="size-7 rounded-lg bg-[#F59E0B]/20 border border-[#F59E0B] flex items-center justify-center text-[#FBBF24] shrink-0">
                      <Trophy className="size-3.5" />
                    </div>
                    <h4 className="font-serif text-xs sm:text-sm font-bold uppercase text-white">10-Year Progression Pathway</h4>
                  </div>
                  <p className="text-[11px] text-slate-300 leading-relaxed">
                    Clear journey from 4-wheel starter quads to 110mm inline blades and national medal championship squads.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs space-y-1.5">
                  <div className="flex items-center gap-2">
                    <div className="size-7 rounded-lg bg-[#F59E0B]/20 border border-[#F59E0B] flex items-center justify-center text-[#FBBF24] shrink-0">
                      <CheckCircle2 className="size-3.5" />
                    </div>
                    <h4 className="font-serif text-xs sm:text-sm font-bold uppercase text-white">100% Mandatory Safety Protocol</h4>
                  </div>
                  <p className="text-[11px] text-slate-300 leading-relaxed">
                    Zero compromise on certified helmets, wrist splints, and EVA knee padding for injury-free confidence.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs space-y-1.5">
                  <div className="flex items-center gap-2">
                    <div className="size-7 rounded-lg bg-[#F59E0B]/20 border border-[#F59E0B] flex items-center justify-center text-[#FBBF24] shrink-0">
                      <Users className="size-3.5" />
                    </div>
                    <h4 className="font-serif text-xs sm:text-sm font-bold uppercase text-white">Direct Head Coach Mentorship</h4>
                  </div>
                  <p className="text-[11px] text-slate-300 leading-relaxed">
                    Head Coaches Rajinder Singh &amp; Navjeet Singh Dehiya lead sessions personally on the rink floor.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs space-y-1.5">
                  <div className="flex items-center gap-2">
                    <div className="size-7 rounded-lg bg-[#F59E0B]/20 border border-[#F59E0B] flex items-center justify-center text-[#FBBF24] shrink-0">
                      <Award className="size-3.5" />
                    </div>
                    <h4 className="font-serif text-xs sm:text-sm font-bold uppercase text-white">State Association Affiliation</h4>
                  </div>
                  <p className="text-[11px] text-slate-300 leading-relaxed">
                    Official association accreditation providing genuine certificates for school sports credits and college admissions.
                  </p>
                </div>
              </div>
            </div>
          </section>

        </div>
      </section>

      {/* =====================================================================
          SECTION: FINAL CALL-TO-ACTION (WHITE BACKGROUND & BLUE CTA CARD)
          ===================================================================== */}
      <section
        id="testimonials-cta"
        className="py-20 md:py-28 bg-white border-t border-slate-200"
      >
        <div className="mx-auto max-w-[1320px] px-6 md:px-8 lg:px-12">
          <div className="relative rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#0A1931] via-[#0E2954] to-[#1E3A8A] text-white p-6 sm:p-10 md:p-14 shadow-2xl overflow-hidden text-center max-w-4xl mx-auto border border-[#F59E0B]/30">
            {/* Decorative Top Accent Bar */}
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#F59E0B] via-[#FBBF24] to-transparent" />

            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-[#F59E0B]/40 text-[#FBBF24] text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-xs">
              <Sparkles className="size-3.5 text-[#F59E0B]" />
              <span>Begin Your Champion Journey</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-white leading-tight">
              Ready to Start Your Child&apos;s Skating Story?
            </h2>

            <p className="mt-6 text-base sm:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed">
              Book a complimentary trial session at your nearest Thane or Mumbai rink with Head Coaches <strong className="text-[#FBBF24]">Mr. Rajinder Singh Dehiya</strong> and <strong className="text-[#FBBF24]">Mr. Navjeet Singh Dehiya</strong>.
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
            </div>

            {/* Single CTA Action Button */}
            <div className="mt-8 sm:mt-10 flex justify-center">
              <Link
                href="/contact"
                data-slot="button"
                className="w-full sm:w-auto sm:min-w-[280px] max-w-sm inline-flex items-center justify-center gap-2.5 py-3.5 sm:py-4 px-6 sm:px-8 rounded-xl bg-[#F59E0B] text-[#0A1931] hover:bg-[#FBBF24] font-serif text-xs sm:text-sm md:text-base font-extrabold uppercase tracking-wider transition-all duration-200 shadow-xl shadow-[#F59E0B]/30 hover:shadow-[#F59E0B]/50 hover:-translate-y-0.5 active:translate-y-0 text-center"
              >
                <span>Book a Free Trial Session</span>
                <ArrowRight className="size-4 sm:size-5 text-[#0A1931] shrink-0" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
