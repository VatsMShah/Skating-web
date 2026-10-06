"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Trophy,
  Flame,
  Award,
  Users,
  ShieldCheck,
  Star,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  GraduationCap,
  Clock,
  HeartHandshake,
  Compass,
  ChevronRight,
  ExternalLink,
} from "lucide-react";

export default function AboutPage() {
  const pillars = [
    {
      id: "fast-learning",
      icon: Flame,
      badge: "RAPID PROGRESSION",
      title: "Skate in 3 Sessions",
      description:
        "Our proven balance and center-of-gravity exercises eliminate beginner anxiety. Students learn proper stance, forward push, and safe stopping within their first three classes.",
    },
    {
      id: "progressive-pathway",
      icon: Trophy,
      badge: "STRUCTURED CURRICULUM",
      title: "Grassroots to National Podium",
      description:
        "Clear step-by-step progression from basic four-wheel quad skates to 110mm inline speed blades, tailored drills, and competition strategy for district, state, and national events.",
    },
    {
      id: "safety-character",
      icon: ShieldCheck,
      badge: "SAFETY & INTEGRITY",
      title: "Strict Safety & Character",
      description:
        "Mandatory protective gear protocol with certified helmets and pads. We build unshakeable confidence, discipline, sportsmanship, and mental stamina that serve skaters for life.",
    },
    {
      id: "inclusive-culture",
      icon: HeartHandshake,
      badge: "FAMILY & COMMUNITY",
      title: "Parent-Inclusive Rinks",
      description:
        "Parents are always welcome at trackside to observe daily sessions, cheer on progress, and stay directly connected with head coaches regarding their child's athletic growth.",
    },
  ];

  const milestones = [
    { value: "36+", label: "Years of Legacy", sub: "Coaching since 1988" },
    { value: "100+", label: "State & National Medals", sub: "Podium finishes" },
    { value: "6", label: "Active Centers", sub: "Across Mumbai & Thane" },
    { value: "15+", label: "Partner Institutions", sub: "Top schools & gymkhanas" },
  ];

  const institutions = [
    {
      name: "Siddheshwar Garden Complex",
      location: "Kolshet Road, Thane West",
      badge: "20+ YEARS RUNNING",
      image: "/images/siddeshwar-garden-complex-thane-20-yrs-till-present.jpg",
      highlight: "Longest continuous academy center",
      description: "Podium Tennis & Skating Court, Siddheshwar Garden, Kolshet Road, Dhokali Naka.",
      tenure: "20+ Years till present",
    },
    {
      name: "Amber International School",
      location: "Dhokali, Thane West",
      badge: "7+ YEARS LEGACY",
      image: "/images/amber-international-school-7-years-till-present.jpg",
      highlight: "In-school certified skating curriculum",
      description: "Near Highland Park, near TMC Tank West, Dhokali, Thane West 400607.",
      tenure: "7+ Years till present",
    },
    {
      name: "TMC Mini Stadium",
      location: "Thane",
      badge: "2+ YEARS RUNNING",
      image: "/images/tmc-mini-stadium-thane-2-years-till-present.avif",
      highlight: "Municipal sports complex speed track",
      description: "Thane Municipal Corporation certified speed training track.",
      tenure: "2+ Years till present",
    },
    {
      name: "DAV Public Schools",
      location: "Airoli, Nerul & Thane",
      badge: "MULTI-YEAR TIE-UP",
      image: "/images/dav-airoli.jpg",
      highlight: "Hundreds of school skaters trained",
      description: "Annual accredited skating coaching programs across DAV branches.",
      tenure: "Multi-year partnership",
    },
    {
      name: "Matunga Gymkhana",
      location: "Matunga East, Mumbai",
      badge: "PREMIER CLUB",
      image: "/images/matunga-gymkhana-matunga-east-mumbai-gyms-43t5rl6.avif",
      highlight: "Weekend club coaching batches",
      description: "Premier sports club coaching batches for juniors and advanced athletes.",
      tenure: "Club coaching batch",
    },
    {
      name: "The Chembur Gymkhana",
      location: "Chembur East, Mumbai",
      badge: "PRESTIGIOUS CLUB",
      image: "/images/the-chembur-gymkhana-chembur-east-mumbai-gyms-mys60cxzjg.avif",
      highlight: "Junior roller & inline programs",
      description: "Dedicated junior roller and inline training program batches.",
      tenure: "Club coaching batch",
    },
    {
      name: "YMCA Bombay, Ghatkopar & CBD",
      location: "Mumbai & Navi Mumbai",
      badge: "HISTORIC VENUE",
      image: "/images/ymca-bombay.png",
      highlight: "Decades of grassroots youth camps",
      description: "Historic coaching centers where generations of skaters learned their basics.",
      tenure: "Legacy institutional centers",
    },
    {
      name: "Sports Foundry & PSIS",
      location: "Bhandup & Kasarvadavali",
      badge: "ACTIVE HUBS",
      image: "/images/pes-new-english-school-jr-college.jpg",
      highlight: "Indoor speed training & drills",
      description: "State-of-the-art indoor and banked tracks for high-velocity speed drills.",
      tenure: "Current active centers",
    },
  ];

  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#0F172A]">
      {/* =====================================================================
          SECTION 1: HERO HEADER (NAVY BLUE & CHAMPION GOLD)
          ===================================================================== */}
      <section
        id="about-hero"
        className="relative w-full overflow-hidden bg-[#0A1931] pt-32 pb-20 md:pt-40 md:pb-28"
      >
        {/* Background Action Image with Navy Gradient Overlays */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/gallery/2024-02-11-2.jpg"
            alt="Dehiya Roller Skating Academy Speed Skaters on Track"
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

        <div className="container relative z-20 mx-auto px-6 sm:px-8 lg:px-12 max-w-[1320px] flex flex-col items-center text-center">
          {/* Breadcrumb navigation */}
          <nav className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-6 uppercase tracking-wider">
            <Link href="/" className="hover:text-[#FBBF24] transition-colors">
              Home
            </Link>
            <ChevronRight className="size-3.5 text-[#F59E0B]" />
            <span className="text-[#FBBF24] font-semibold">About Us</span>
          </nav>

          {/* Gold Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#F59E0B]/60 bg-[#FEF3C7]/15 backdrop-blur-md px-4 py-1.5 text-[#FBBF24] text-xs sm:text-sm font-bold tracking-widest uppercase shadow-sm mb-6">
            <Trophy className="size-4 text-[#F59E0B]" aria-hidden="true" />
            <span>36+ Years of Skating Heritage • Established 1988</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-extrabold uppercase tracking-tight text-white max-w-5xl leading-[1.08]">
            Mastering the Art of Skating.{" "}
            <span className="text-[#FBBF24] underline decoration-[#F59E0B]/60 underline-offset-8">
              Forging Champions.
            </span>
          </h1>

          <p className="mt-6 max-w-3xl text-base sm:text-lg md:text-xl text-slate-300 font-sans leading-relaxed">
            Dehiya Roller Skating Academy (D.R.S.A) is Maharashtra’s premier institution for roller and inline skating. For over three decades, our master coaches have transformed raw enthusiasm into disciplined athleticism and national podium triumphs.
          </p>

          {/* Quick Metrics Bar */}
          <div className="mt-12 pt-8 border-t border-slate-700/80 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 w-full max-w-4xl text-left">
            {milestones.map((m, i) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs flex flex-col"
              >
                <span className="text-2xl sm:text-3xl font-extrabold text-[#FBBF24] font-serif">
                  {m.value}
                </span>
                <span className="text-sm font-bold text-white mt-1">{m.label}</span>
                <span className="text-xs text-slate-400 mt-0.5">{m.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 2: THE D.R.S.A STORY & HERITAGE (ORIGINS & VISION)
          ===================================================================== */}
      <section
        id="our-story"
        className="py-20 md:py-28 lg:py-32 bg-white relative overflow-hidden border-b border-slate-200"
      >
        <div className="mx-auto max-w-[1320px] px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Visual Showcase Card with Gold Framing */}
            <div className="lg:col-span-6 relative">
              <div className="absolute -top-3 left-4 z-20 h-1.5 w-16 bg-[#F59E0B] rounded-xs shadow-[0_0_8px_rgba(245,158,11,0.6)]" />
              <div className="relative rounded-2xl border border-slate-200 bg-[#0A1931] p-3 sm:p-4 shadow-2xl overflow-hidden">
                <div className="pointer-events-none absolute top-2 left-2 z-10 size-5 border-t-2 border-l-2 border-[#F59E0B]" />
                <div className="pointer-events-none absolute top-2 right-2 z-10 size-5 border-t-2 border-r-2 border-[#F59E0B]" />
                <div className="pointer-events-none absolute bottom-2 left-2 z-10 size-5 border-b-2 border-l-2 border-[#F59E0B]" />
                <div className="pointer-events-none absolute bottom-2 right-2 z-10 size-5 border-b-2 border-r-2 border-[#F59E0B]" />

                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-slate-900">
                  <Image
                    src="/images/gallery/2024-02-11.jpg"
                    alt="Head Coaches Mr. Rajinder Singh Dehiya and Mr. Navjeet Singh Dehiya with D.R.S.A Trophy Winners"
                    fill
                    className="size-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1931] via-transparent to-transparent opacity-85" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="inline-block px-2.5 py-1 rounded bg-[#F59E0B] text-[#0A1931] text-[11px] font-extrabold uppercase tracking-wider mb-1.5">
                      Championship Victory
                    </span>
                    <p className="font-serif text-sm sm:text-base font-bold text-white">
                      Head Coaches Mr. Rajinder Singh Dehiya &amp; Mr. Navjeet Singh Dehiya celebrating with academy trophy &amp; medal winners
                    </p>
                  </div>
                </div>

                {/* Sub-card: Official Emblem Note */}
                <div className="mt-3 p-3.5 rounded-lg bg-white/5 border border-white/10 flex items-center gap-3">
                  <div className="relative size-12 shrink-0 rounded-full overflow-hidden bg-white p-1 border border-[#F59E0B]/50">
                    <Image
                      src="/images/logo.png"
                      alt="D.R.S.A Emblem"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <p className="font-serif text-xs font-bold uppercase tracking-wider text-[#FBBF24]">
                      Official Motto: &ldquo;Dance on Wheels&rdquo;
                    </p>
                    <p className="text-xs text-slate-300">
                      Instilling rhythm, poise, speed, and endurance across generations of skaters.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Story Text Content */}
            <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="h-1 w-10 bg-[#F59E0B] rounded-full" />
                  <span className="font-sans text-xs md:text-sm font-extrabold uppercase tracking-widest text-[#D97706]">
                    Our Origins &amp; Evolution
                  </span>
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-[#0A1931] leading-[1.12]">
                  From a Passionate Dream to Maharashtra&apos;s Elite Academy
                </h2>
              </div>

              <div className="space-y-4 text-slate-600 font-sans text-base md:text-lg leading-relaxed">
                <p>
                  Founded over <strong className="text-slate-900 font-semibold">36 years ago</strong> by master coach <strong className="text-slate-900 font-semibold">Mr. Rajinder Singh Dehiya</strong>, Dehiya Roller Skating Academy (D.R.S.A) was established with a singular vision: to bring structured, safe, and world-class roller skating training to children and youth across Mumbai and Thane.
                </p>
                <p>
                  What started as an energetic local coaching batch quickly blossomed into one of the region&apos;s most respected sports institutions. Driven by the philosophy of <strong className="text-[#D97706] font-semibold">&ldquo;Dance on Wheels&rdquo;</strong>, D.R.S.A treats roller skating not merely as recreation, but as a discipline that refines coordination, explosive leg power, balance, and unyielding character.
                </p>
                <p>
                  Together with Co-founder and National Gold Medalist <strong className="text-slate-900 font-semibold">Mr. Navjeet Singh Dehiya</strong>, the academy has expanded to <strong className="text-slate-900 font-semibold">6 active training centers</strong> and long-standing partnerships with prestigious educational institutions like Amber International School, Siddheshwar Garden, and the YMCA.
                </p>
              </div>

              {/* Key Values List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2.5 text-sm font-semibold text-slate-800">
                  <CheckCircle2 className="size-4.5 text-[#D97706] shrink-0" />
                  <span>3 Decades of Trusted Coaching</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm font-semibold text-slate-800">
                  <CheckCircle2 className="size-4.5 text-[#D97706] shrink-0" />
                  <span>100+ State &amp; National Medals</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm font-semibold text-slate-800">
                  <CheckCircle2 className="size-4.5 text-[#D97706] shrink-0" />
                  <span>Quad &amp; Speed Inline Pathways</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm font-semibold text-slate-800">
                  <CheckCircle2 className="size-4.5 text-[#D97706] shrink-0" />
                  <span>Open 7 Days with Flexible Batches</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 3: MASTER COACHES & LEADERSHIP SPOTLIGHT
          ===================================================================== */}
      <section
        id="meet-coaches"
        className="py-20 md:py-28 lg:py-32 bg-[#0A1931] relative overflow-hidden text-white"
      >
        {/* Subtle Decorative Background Lines */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.08),transparent_50%)] pointer-events-none" />

        <div className="mx-auto max-w-[1320px] px-6 md:px-8 lg:px-12 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FEF3C7]/10 border border-[#F59E0B]/40 text-[#FBBF24] text-xs font-bold uppercase tracking-widest mb-4">
              <Award className="size-4 text-[#F59E0B]" />
              <span>Leadership &amp; Mentorship</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white leading-tight">
              Meet the Master Coaches
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-300 font-sans leading-relaxed">
              Decades of national accolades, professional coaching certifications, and personal commitment to every student&apos;s athletic journey.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
            {/* Coach 1: Mr. Rajinder Singh Dehiya */}
            <div className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 sm:p-8 flex flex-col justify-between hover:border-[#F59E0B]/50 hover:bg-white/[0.07] transition-all duration-300 shadow-2xl">
              <div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-6">
                  {/* Portrait with Gold Border */}
                  <div className="relative size-32 sm:size-36 shrink-0 rounded-2xl overflow-hidden border-2 border-[#F59E0B] shadow-xl bg-slate-800">
                    <Image
                      src="/images/rajinder-singh-dehiya.jpg"
                      alt="Mr. Rajinder Singh Dehiya - Owner & Head Coach"
                      fill
                      className="size-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div>
                    <span className="inline-block px-3 py-1 rounded bg-[#FEF3C7]/15 border border-[#F59E0B]/50 text-[#FBBF24] text-xs font-bold uppercase tracking-wider mb-2">
                      36+ Years Coaching Legacy
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-extrabold uppercase text-white">
                      Mr. Rajinder Singh Dehiya
                    </h3>
                    <p className="text-sm font-semibold text-[#F59E0B] mt-0.5">
                      Owner &amp; Head Coach • Master Mentor
                    </p>
                  </div>
                </div>

                <div className="space-y-3 text-slate-300 text-sm sm:text-base leading-relaxed border-t border-white/10 pt-4">
                  <p>
                    A revered pioneer of roller skating in Mumbai and Thane, Rajinder Sir has personally guided over 5,000 skaters from their very first steps to state and national championship podiums.
                  </p>
                  <p>
                    Renowned for his patience and master techniques, he specializes in building unshakeable confidence in young beginners, quad skating footwork, posture alignment, and competitive mindset.
                  </p>
                </div>
              </div>

              {/* Direct Contact Links */}
              <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
                <a
                  href="tel:9323861266"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white/10 hover:bg-[#F59E0B] hover:text-[#0A1931] text-white font-semibold transition-colors"
                >
                  <Phone className="size-3.5 text-[#FBBF24] group-hover:text-[#0A1931]" />
                  <span>+91 93238 61266</span>
                </a>
                <a
                  href="mailto:rajinderdehiya@gmail.com"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white/10 hover:bg-[#F59E0B] hover:text-[#0A1931] text-white font-semibold transition-colors"
                >
                  <Mail className="size-3.5 text-[#FBBF24] group-hover:text-[#0A1931]" />
                  <span>rajinderdehiya@gmail.com</span>
                </a>
              </div>
            </div>

            {/* Coach 2: Mr. Navjeet Singh Dehiya */}
            <div className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 sm:p-8 flex flex-col justify-between hover:border-[#F59E0B]/50 hover:bg-white/[0.07] transition-all duration-300 shadow-2xl">
              <div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-6">
                  {/* Portrait with Gold Border */}
                  <div className="relative size-32 sm:size-36 shrink-0 rounded-2xl overflow-hidden border-2 border-[#F59E0B] shadow-xl bg-slate-800">
                    <Image
                      src="/images/navjeet-singh-dehiya.jpg"
                      alt="Mr. Navjeet Singh Dehiya - Co-founder & Head Coach"
                      fill
                      className="size-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div>
                    <span className="inline-block px-3 py-1 rounded bg-[#FEF3C7]/15 border border-[#F59E0B]/50 text-[#FBBF24] text-xs font-bold uppercase tracking-wider mb-2">
                      National &amp; State Gold Medalist
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-extrabold uppercase text-white">
                      Mr. Navjeet Singh Dehiya
                    </h3>
                    <p className="text-sm font-semibold text-[#F59E0B] mt-0.5">
                      Co-founder &amp; Head Coach • Speed Specialist
                    </p>
                  </div>
                </div>

                <div className="space-y-3 text-slate-300 text-sm sm:text-base leading-relaxed border-t border-white/10 pt-4">
                  <p>
                    A decorated National and State medalist, Navjeet Sir brings elite racing mechanics, aerodynamic posture conditioning, and contemporary speed training methodologies to D.R.S.A.
                  </p>
                  <p>
                    He directs the PSIS speed skating curriculum, tactical cornering techniques, 110mm inline speed training, and the academy&apos;s renowned high-altitude outdoor conditioning camps in Khopoli.
                  </p>
                </div>
              </div>

              {/* Direct Contact Links */}
              <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
                <a
                  href="tel:8693817112"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white/10 hover:bg-[#F59E0B] hover:text-[#0A1931] text-white font-semibold transition-colors"
                >
                  <Phone className="size-3.5 text-[#FBBF24] group-hover:text-[#0A1931]" />
                  <span>+91 86938 17112</span>
                </a>
                <a
                  href="mailto:navjeetdehiya@gmail.com"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white/10 hover:bg-[#F59E0B] hover:text-[#0A1931] text-white font-semibold transition-colors"
                >
                  <Mail className="size-3.5 text-[#FBBF24] group-hover:text-[#0A1931]" />
                  <span>navjeetdehiya@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 4: THE D.R.S.A COACHING PHILOSOPHY (4 PILLARS)
          ===================================================================== */}
      <section
        id="philosophy"
        className="py-20 md:py-28 lg:py-32 bg-[#F1F5F9] relative overflow-hidden border-b border-slate-200"
      >
        <div className="mx-auto max-w-[1320px] px-6 md:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="h-1 w-10 bg-[#F59E0B] rounded-full" />
              <span className="font-sans text-xs md:text-sm font-extrabold uppercase tracking-widest text-[#D97706]">
                The D.R.S.A Standard
              </span>
              <span className="h-1 w-10 bg-[#F59E0B] rounded-full" />
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-[#0A1931] leading-tight">
              Our 4 Core Coaching Pillars
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 font-sans leading-relaxed">
              Every training session at D.R.S.A is structured around four fundamental commitments to ensure rapid growth, complete safety, and athletic excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {pillars.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.id}
                  className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 flex flex-col justify-between hover:border-[#F59E0B] hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
                >
                  <div className="absolute top-0 inset-x-0 h-1 bg-slate-100 group-hover:bg-[#F59E0B] transition-colors" />

                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="size-12 rounded-xl bg-[#FEF3C7] border border-[#F59E0B]/30 flex items-center justify-center text-[#D97706] group-hover:bg-[#F59E0B] group-hover:text-[#0A1931] transition-all">
                        <Icon className="size-6" />
                      </div>
                      <span className="font-mono text-xs font-bold text-slate-400">
                        0{idx + 1}
                      </span>
                    </div>

                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#D97706] block mb-1.5">
                      {p.badge}
                    </span>

                    <h3 className="font-serif text-xl font-bold uppercase text-[#0A1931] tracking-tight mb-3">
                      {p.title}
                    </h3>

                    <p className="text-sm text-slate-600 font-sans leading-relaxed">
                      {p.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-[#0A1931] group-hover:text-[#D97706] transition-colors">
                    <span>D.R.S.A Standard</span>
                    <ArrowRight className="size-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 5: PLACES OF WORK & INSTITUTIONAL PARTNERSHIPS
          ===================================================================== */}
      <section
        id="institutions"
        className="relative overflow-hidden py-20 md:py-28 lg:py-32 bg-[#F1F5F9] border-t border-slate-200"
      >
        <div className="container relative z-10 mx-auto max-w-[1320px] px-6 md:px-8 lg:px-12">
          <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FEF3C7] border border-[#F59E0B]/60 text-[#0A1931] text-xs font-bold uppercase tracking-widest mb-4 shadow-xs">
              <MapPin className="w-3.5 h-3.5 text-[#D97706]" aria-hidden="true" />
              <span>Institutional Trust &amp; Legacy</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight uppercase text-[#0A1931] leading-tight">
              Trusted by Premier <span className="text-[#D97706]">Schools &amp; Sports Clubs</span>
            </h2>
            <div className="flex items-center justify-center my-4">
              <div className="h-1 w-14 bg-[#F59E0B] rounded-full shadow-[0_0_8px_rgba(245,158,11,0.6)]" />
            </div>
            <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto font-sans leading-relaxed">
              Over the last 36+ years, Dehiya Roller Skating Academy has conducted accredited skating programs, annual sports day exhibitions, and championship batches across prestigious institutions in Mumbai, Thane, and Navi Mumbai.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {institutions.map((inst, index) => (
              <div
                key={index}
                data-slot="card"
                className="flex flex-col justify-between bg-white border border-slate-200 rounded-xl overflow-hidden p-6 hover:border-[#F59E0B] transition-all duration-200 shadow-md"
              >
                <div className="space-y-4">
                  <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg bg-slate-100">
                    <Image
                      src={inst.image}
                      alt={`${inst.name}, Mumbai & Thane`}
                      fill
                      className="size-full object-cover"
                    />
                    <span className="absolute top-2 left-2 text-[10px] font-mono font-bold bg-[#0A1931] text-[#FBBF24] border border-[#F59E0B]/50 px-2.5 py-0.5 rounded shadow-sm">
                      {inst.badge}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold uppercase text-[#0A1931] leading-snug">
                      {inst.name}
                    </h3>
                    <p className="text-xs text-[#D97706] font-mono font-bold mt-0.5">
                      {inst.location}
                    </p>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {inst.description}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-500">{inst.tenure}</span>
                  <span className="text-xs font-mono font-bold text-[#D97706] uppercase tracking-wider">
                    D.R.S.A Partner
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Places Mention Ribbon */}
          <div className="mt-12 rounded-xl border border-slate-200 bg-white p-6 text-center shadow-xs">
            <p className="text-xs uppercase font-mono tracking-wider text-[#D97706] font-bold mb-2">
              Additional Past &amp; Present Training Centers
            </p>
            <p className="font-serif text-sm sm:text-base font-bold uppercase text-[#0A1931] tracking-wide">
              Little Flower High School • Marble Arch School • SMT Naupada • PES New English School &amp; Jr College • North Point School • CBD YMCA • Ghatkopar YMCA
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 6: FINAL CALL TO ACTION (JOIN D.R.S.A)
          ===================================================================== */}
      <section
        id="about-cta"
        className="py-20 md:py-28 bg-[#0A1931] text-white relative overflow-hidden"
      >
        <div className="mx-auto max-w-[1320px] px-6 md:px-8 lg:px-12 relative z-10">
          <div className="relative rounded-3xl border border-[#F59E0B]/30 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-md p-8 sm:p-12 md:p-16 shadow-2xl overflow-hidden text-center max-w-4xl mx-auto">
            {/* Top Accent Line */}
            <div className="absolute top-0 inset-x-0 h-1.5 bg-[#F59E0B]" />

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FEF3C7]/15 border border-[#F59E0B]/50 text-[#FBBF24] text-xs font-bold uppercase tracking-widest mb-6">
              <Sparkles className="size-4 text-[#F59E0B]" />
              <span>Enroll Today at D.R.S.A</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-white leading-tight">
              Ready to Roll with the Champions?
            </h2>

            <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Whether you are a 4-year-old beginner stepping onto skates for the first time or an ambitious athlete aiming for the National podium, our master coaches are ready to welcome you.
            </p>

            {/* Direct Contact Numbers Pill */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-sm font-mono">
              <a
                href="tel:9323861266"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white hover:bg-[#F59E0B] hover:text-[#0A1931] transition-all font-semibold"
              >
                <Phone className="size-4 text-[#FBBF24]" />
                <span>Rajinder Sir: +91 93238 61266</span>
              </a>
              <a
                href="tel:8693817112"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white hover:bg-[#F59E0B] hover:text-[#0A1931] transition-all font-semibold"
              >
                <Phone className="size-4 text-[#FBBF24]" />
                <span>Navjeet Sir: +91 86938 17112</span>
              </a>
            </div>

            {/* Action Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/#training-centers"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-base font-extrabold uppercase tracking-wider bg-[#F59E0B] text-[#0A1931] hover:bg-[#FBBF24] h-13 px-9 rounded-md transition-all duration-200 shadow-xl shadow-[#F59E0B]/30 hover:-translate-y-0.5 w-full sm:w-auto"
              >
                <span>Explore 6 Training Centers</span>
                <ArrowRight className="size-5 text-[#0A1931]" aria-hidden="true" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-base font-bold uppercase tracking-wider border-2 border-white/30 text-white hover:border-[#F59E0B] hover:text-[#FBBF24] h-13 px-9 rounded-md transition-all duration-200 w-full sm:w-auto"
              >
                <span>Send an Inquiry</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
