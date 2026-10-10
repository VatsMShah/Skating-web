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
    { value: "7", label: "Active Centers", sub: "Across Mumbai & Thane" },
    { value: "15+", label: "Partner Institutions", sub: "Top schools & gymkhanas" },
  ];

  const institutions = [
    {
      name: "Siddheshwar Garden Complex",
      location: "Kolshet Road, Thane West",
      badge: "20+ YEARS RUNNING",
      tagline: "Podium Tennis & Dedicated Roller Rink",
      image: "/images/places/siddeshwar-garden-complex-thane-20-yrs-till-present.jpg",
      highlight: "Longest continuous academy center",
      description: "Podium Court, Siddheshwar Garden, Kolshet Road, Dhokali Naka, Thane West 400607.",
      tenure: "20+ Years till present",
      mapUrl: "https://maps.app.goo.gl/8Wii7PcMc8Vk2Fgz5",
    },
    {
      name: "Amber International School",
      location: "Dhokali, Thane West",
      badge: "7+ YEARS LEGACY",
      tagline: "In-School Certified Skating Curriculum",
      image: "/images/places/amber-international-school-7-years-till-present.jpg",
      highlight: "In-school certified skating curriculum",
      description: "Near Highland Park, near TMC Tank West, Dhokali, Thane West 400607.",
      tenure: "7+ Years till present",
      mapUrl: "https://maps.app.goo.gl/iPuRK5ZCttr5KGbE7",
    },
    {
      name: "TMC Mini Stadium",
      location: "Thane Municipal Sports Area",
      badge: "2+ YEARS RUNNING",
      tagline: "Municipal Championship Speed Track",
      image: "/images/places/tmc-mini-stadium-thane-2-years-till-present.jpg",
      highlight: "Municipal sports complex speed track",
      description: "Thane Municipal Corporation official speed training banked track.",
      tenure: "2+ Years till present",
      mapUrl: "https://maps.google.com/?q=Thane+Municipal+Corporation+Stadium",
    },
    {
      name: "DAV Public Schools",
      location: "Airoli, Nerul & Thane",
      badge: "MULTI-YEAR TIE-UP",
      tagline: "Accredited In-School Skating Academy",
      image: "/images/places/dav-airoli.jpg",
      highlight: "Hundreds of school skaters trained",
      description: "Annual accredited skating coaching programs across DAV branches.",
      tenure: "Multi-year partnership",
      mapUrl: "https://maps.google.com/?q=DAV+Public+School+Airoli",
    },
    {
      name: "Matunga Gymkhana",
      location: "Matunga East, Mumbai",
      badge: "PREMIER CLUB",
      tagline: "Historic Heritage Sports Club",
      image: "/images/places/matunga-gymkhana-matunga-east-mumbai-gyms-43t5rl6.avif",
      highlight: "Weekend club coaching batches",
      description: "Premier sports club coaching batches for juniors and advanced athletes.",
      tenure: "Club coaching batch",
      mapUrl: "https://maps.google.com/?q=Matunga+Gymkhana+Mumbai",
    },
    {
      name: "The Chembur Gymkhana",
      location: "Chembur East, Mumbai",
      badge: "PRESTIGIOUS CLUB",
      tagline: "Enclosed Roller Skating Rink",
      image: "/images/places/the-chembur-gymkhana-chembur-east-mumbai-gyms-mys60cxzjg.avif",
      highlight: "Junior roller & inline programs",
      description: "Dedicated junior roller and inline training program batches.",
      tenure: "Club coaching batch",
      mapUrl: "https://maps.google.com/?q=The+Chembur+Gymkhana+Mumbai",
    },
    {
      name: "YMCA Bombay, Ghatkopar & CBD",
      location: "Mumbai & Navi Mumbai",
      badge: "HISTORIC VENUE",
      tagline: "Multi-Decade Youth Sports Partner",
      image: "/images/places/ymca-bombay.png",
      highlight: "Decades of grassroots youth camps",
      description: "Historic coaching centers where generations of skaters learned their basics.",
      tenure: "Legacy institutional centers",
      mapUrl: "https://maps.google.com/?q=Bombay+YMCA+Mumbai",
    },
    {
      name: "The Sports Foundry & PSIS",
      location: "Bhandup & Kasarvadavali",
      badge: "ACTIVE HUBS",
      tagline: "Olympic Grade High-Velocity Track",
      image: "/images/places/tsf.jpg",
      highlight: "Indoor speed training & drills",
      description: "State-of-the-art indoor and banked tracks for high-velocity speed drills.",
      tenure: "Current active centers",
      mapUrl: "https://maps.app.goo.gl/brq8GMmmJL3Dvq8F7",
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
            sizes="100vw"
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
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    loading="lazy"
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
                      sizes="48px"
                      loading="lazy"
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
                  Together with Co-founder and National Gold Medalist <strong className="text-slate-900 font-semibold">Mr. Navjeet Singh Dehiya</strong>, the academy has expanded to <strong className="text-slate-900 font-semibold">7 active training centers</strong> and long-standing partnerships with prestigious educational institutions like Amber International School, Siddheshwar Garden, and the YMCA.
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
                      sizes="(max-width: 640px) 128px, 144px"
                      loading="lazy"
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
                    A revered pioneer of roller skating in Mumbai and Thane, Rajinder Singh has personally guided over 5,000 skaters from their very first steps to state and national championship podiums.
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
                      sizes="(max-width: 640px) 128px, 144px"
                      loading="lazy"
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
                    A decorated National and State medalist, Navjeet Singh brings elite racing mechanics, aerodynamic posture conditioning, and contemporary speed training methodologies to D.R.S.A.
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {institutions.map((inst, index) => (
              <div
                key={index}
                className="group relative flex flex-col justify-between bg-white border border-slate-200 hover:border-[#F59E0B] transition-all duration-300 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1"
              >
                {/* Top Accent Strip */}
                <div className="h-1.5 w-full bg-slate-200 group-hover:bg-[#F59E0B] transition-colors" />

                <div className="p-6 sm:p-7 space-y-5 flex-1 flex flex-col justify-between">
                  <div className="space-y-4">
                    {/* DESIGNER SCULPTED ARCH IMAGE PORTAL */}
                    <div className="relative mx-auto w-full aspect-[4/3] max-h-[240px] overflow-hidden rounded-t-[100px] rounded-b-2xl bg-[#0A1931] border-2 border-[#F59E0B]/50 shadow-inner group-hover:border-[#F59E0B] group-hover:shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-all duration-500">
                      <Image
                        src={inst.image}
                        alt={`${inst.name}, Mumbai & Thane`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        loading="lazy"
                        className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out brightness-95 group-hover:brightness-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />
                      <div className="absolute inset-1 rounded-t-[96px] rounded-b-xl border border-white/25 pointer-events-none" />

                      {/* Center Legacy Badge Floating in Middle */}
                      <div className="absolute top-3.5 inset-x-0 flex justify-center z-10 pointer-events-none">
                        <span className="text-[10px] sm:text-xs font-mono font-bold bg-[#0A1931]/95 text-[#FBBF24] border border-[#F59E0B] px-3.5 py-1 rounded-full shadow-lg uppercase tracking-wider backdrop-blur-md">
                          {inst.badge}
                        </span>
                      </div>

                      {/* Bottom Tagline on Scrim */}
                      <div className="absolute bottom-2.5 inset-x-3 text-center pointer-events-none z-10">
                        <span className="text-[11px] font-mono text-[#FBBF24] font-semibold tracking-wide drop-shadow-md line-clamp-1">
                          {inst.tagline}
                        </span>
                      </div>
                    </div>

                    {/* Title & Location Header */}
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-xs font-mono font-semibold text-[#D97706]">
                        <span className="inline-flex items-center gap-1">
                          <MapPin className="size-3.5 text-[#D97706]" />
                          {inst.location}
                        </span>
                        <span className="text-slate-400 uppercase tracking-wider text-[11px]">{inst.tenure}</span>
                      </div>
                      <h3 className="font-serif text-lg sm:text-xl font-extrabold uppercase text-[#0A1931] tracking-tight group-hover:text-[#D97706] transition-colors leading-tight">
                        {inst.name}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans line-clamp-2">
                      {inst.description}
                    </p>
                  </div>

                  {/* Card Footer: Action Links */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                    <Link
                      href="/facilities"
                      className="text-xs font-mono font-bold uppercase tracking-wider text-[#0A1931] hover:text-[#D97706] transition-colors inline-flex items-center gap-1"
                    >
                      <span>View Center</span>
                      <ArrowRight className="size-3.5 text-[#D97706]" />
                    </Link>
                    <a
                      href={inst.mapUrl}
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
            ))}
          </div>

          {/* Additional Places Mention Ribbon */}
          <div className="mt-12 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 text-center shadow-xs">
            <p className="text-xs uppercase font-mono tracking-wider text-[#D97706] font-bold mb-2">
              Additional Past &amp; Present Training Centers
            </p>
            <p className="font-serif text-sm sm:text-base font-bold uppercase text-[#0A1931] tracking-wide max-w-3xl mx-auto leading-relaxed">
              Little Flower High School • Marble Arch School • SMT Naupada • PES New English School &amp; Jr College • North Point School • CBD Belapur YMCA • Ghatkopar YMCA
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 6: FINAL CALL-TO-ACTION (WHITE BACKGROUND & BLUE CTA CARD)
          ===================================================================== */}
      <section
        id="about-cta"
        className="py-20 md:py-28 bg-white border-t border-slate-200"
      >
        <div className="mx-auto max-w-[1320px] px-6 md:px-8 lg:px-12">
          <div className="relative rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#0A1931] via-[#0E2954] to-[#1E3A8A] text-white p-6 sm:p-10 md:p-14 shadow-2xl overflow-hidden text-center max-w-4xl mx-auto border border-[#F59E0B]/30">
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
