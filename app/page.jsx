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
  Award,
  Zap,
  Star,
  Quote,
  CheckCircle2,
  Phone,
  Mail,
  Navigation,
  Sparkles,
} from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* =====================================================================
          SECTION 1: HERO SECTION
          ===================================================================== */}
      <section
        id="hero"
        data-nav="dark"
        className="dark bg-background text-foreground relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-32 pb-24 md:pt-44 md:pb-36"
      >
        {/* Background Layer with Dark Gradient Overlays */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://destined-weevil.10web.cloud/wp-content/uploads/2026/09/skater_ramp_warehouse.webp"
            alt="Dehiya Roller Skating Academy Speed Skaters on Track"
            fill
            className="h-full w-full object-cover object-center brightness-60 contrast-110"
            priority
          />
          <div className="absolute inset-0 bg-background/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-transparent to-background/90" />
        </div>

        {/* Decorative Framing Accents */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-6 inset-y-8 md:inset-x-12 md:inset-y-12 z-10 border border-border/20 hidden sm:block"
        >
          <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-primary" />
          <span className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-primary" />
          <span className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-primary" />
          <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-primary" />
        </div>

        {/* Hero Content */}
        <div className="container relative z-20 mx-auto px-6 sm:px-8 lg:px-12 max-w-[1320px] flex flex-col items-center text-center">
          <div className="flex flex-col items-center gap-3 mb-6">
            <span className="h-[3px] w-12 bg-primary rounded-full" />
            <div className="inline-flex items-center gap-2 rounded-sm border border-primary/30 bg-primary/10 px-3 py-1 text-primary text-xs sm:text-sm font-bold tracking-widest uppercase">
              <Flame className="size-3.5 text-primary" aria-hidden="true" />
              <span>36+ Years of Skating Excellence • Mumbai &amp; Thane</span>
            </div>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold uppercase tracking-tight text-foreground max-w-5xl leading-[1.04]">
            Forging <span className="text-primary underline decoration-primary/40 underline-offset-8">National Champions</span> &amp; Passionate Skaters
          </h1>

          <p className="mt-6 max-w-3xl text-base sm:text-lg md:text-xl text-muted-foreground font-sans leading-relaxed">
            Under the master mentorship of decorated National and State medalists{" "}
            <strong className="text-foreground font-semibold">Mr. Rajinder Singh Dehiya</strong> and{" "}
            <strong className="text-foreground font-semibold">Mr. Navjeet Singh Dehiya</strong>, D.R.S.A provides championship-level coaching across 6 premier centers in Thane and Mumbai.
          </p>

          {/* Hero CTA Button: Jump to Training Centers */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <div className="w-full sm:w-auto">
              <a
                href="#training-centers"
                data-slot="button"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap outline-none rounded-md w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 font-bold uppercase tracking-wider h-13 px-8 text-base shadow-lg transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Jump to Training Centers</span>
                <ArrowRight className="size-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Key Metric Highlights Grid */}
          <div className="mt-14 sm:mt-16 pt-8 border-t border-border/40 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 w-full max-w-4xl text-left">
            <div data-index="0" className="flex flex-col">
              <span className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Legacy</span>
              <span className="text-sm sm:text-base font-bold text-foreground">36+ Years of Excellence</span>
            </div>
            <div data-index="1" className="flex flex-col">
              <span className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Centers</span>
              <span className="text-sm sm:text-base font-bold text-foreground">6 Active Centers</span>
            </div>
            <div data-index="2" className="flex flex-col">
              <span className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Accolades</span>
              <span className="text-sm sm:text-base font-bold text-foreground">100+ State &amp; National Medals</span>
            </div>
            <div data-index="3" className="flex flex-col">
              <span className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Fast Learning</span>
              <span className="text-sm sm:text-base font-bold text-foreground">Skate Confidently in 3 Sessions</span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 2: ABOUT D.R.S.A SNAPSHOT (COACHES & ACADEMY LEGACY)
          ===================================================================== */}
      <section
        id="about-snapshot"
        data-nav="dark"
        className="dark bg-background text-foreground relative overflow-hidden py-20 md:py-28 lg:py-32 border-t border-border/40"
      >
        <div className="mx-auto max-w-[1320px] px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Coach Spotlight Media Card */}
            <div className="relative lg:col-span-6">
              <div className="absolute -top-3 left-4 z-20 h-1.5 w-12 bg-primary rounded-xs" />
              <div className="relative rounded-lg border border-border bg-card p-2 sm:p-3 shadow-2xl">
                <div className="pointer-events-none absolute top-2 left-2 z-10 size-4 border-t-2 border-l-2 border-primary/70" />
                <div className="pointer-events-none absolute top-2 right-2 z-10 size-4 border-t-2 border-r-2 border-primary/70" />
                <div className="pointer-events-none absolute bottom-2 left-2 z-10 size-4 border-b-2 border-l-2 border-primary/70" />
                <div className="pointer-events-none absolute bottom-2 right-2 z-10 size-4 border-b-2 border-r-2 border-primary/70" />

                <div className="grid grid-cols-2 gap-2 overflow-hidden rounded-md bg-muted">
                  <div className="relative aspect-4/5 w-full overflow-hidden bg-muted">
                    <Image
                      src="/images/rajinder-singh-dehiya.jpg"
                      alt="Mr. Rajinder Singh Dehiya - Owner & Head Coach"
                      fill
                      className="size-full object-cover object-top hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-background/95 via-background/70 to-transparent p-3">
                      <p className="text-xs font-serif font-bold uppercase text-foreground leading-tight">Mr. Rajinder Singh Dehiya</p>
                      <p className="text-[10px] font-mono text-primary uppercase">Owner &amp; Head Coach</p>
                    </div>
                  </div>

                  <div className="relative aspect-4/5 w-full overflow-hidden bg-muted">
                    <Image
                      src="/images/navjeet-singh-dehiya.jpg"
                      alt="Mr. Navjeet Singh Dehiya - Co-founder & Head Coach"
                      fill
                      className="size-full object-cover object-top hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-background/95 via-background/70 to-transparent p-3">
                      <p className="text-xs font-serif font-bold uppercase text-foreground leading-tight">Mr. Navjeet Singh Dehiya</p>
                      <p className="text-[10px] font-mono text-primary uppercase">Co-founder &amp; Head Coach</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-3 flex items-center justify-between px-2 text-xs font-mono tracking-wider text-muted-foreground uppercase">
                <span>ESTABLISHED 1988 // D.R.S.A</span>
                <span>THANE &amp; MUMBAI</span>
              </div>
            </div>

            {/* About Copy & Content */}
            <div className="flex flex-col items-start lg:col-span-6">
              <div className="mb-4 inline-flex items-center gap-3">
                <span className="h-0.5 w-6 bg-primary" />
                <span className="text-primary text-xs font-bold uppercase tracking-widest sm:text-sm">
                  About D.R.S.A
                </span>
              </div>

              <h2 className="font-serif text-3xl font-extrabold uppercase tracking-tight sm:text-4xl lg:text-5xl text-foreground">
                36 Years of Passion, <br className="hidden sm:inline" />
                Discipline &amp; Championship Excellence.
              </h2>

              <p className="mt-6 text-base sm:text-lg leading-relaxed text-muted-foreground">
                Nestled across premier sports facilities in Thane and Mumbai, <strong className="text-foreground">Dehiya Roller Skating Academy</strong> is a beacon for aspiring skaters of all ages. With over 36 years of dedication, our prestigious academy has nurtured grassroots talent and forged medal-winning State and National champions.
              </p>

              <p className="mt-4 text-base sm:text-lg leading-relaxed text-muted-foreground">
                Parents are welcomed with open arms to watch as their children master fundamental balance, progress to high-speed aerodynamics, and develop lifelong confidence under personalized coaching.
              </p>

              {/* 3 Pillars */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
                <div className="p-3 rounded-md bg-card border border-border/60">
                  <Trophy className="size-4 text-primary mb-1" />
                  <p className="text-xs font-bold uppercase text-foreground">Proven Champion Record</p>
                  <p className="text-[11px] text-muted-foreground">100+ district, state &amp; national medalists.</p>
                </div>
                <div className="p-3 rounded-md bg-card border border-border/60">
                  <ShieldCheck className="size-4 text-primary mb-1" />
                  <p className="text-xs font-bold uppercase text-foreground">Safety-First Methods</p>
                  <p className="text-[11px] text-muted-foreground">Strict posture, pad gear &amp; fall drills.</p>
                </div>
                <div className="p-3 rounded-md bg-card border border-border/60">
                  <Users className="size-4 text-primary mb-1" />
                  <p className="text-xs font-bold uppercase text-foreground">Supportive Community</p>
                  <p className="text-[11px] text-muted-foreground">Encouraging family environment for all ages.</p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4 sm:mt-10">
                <Link
                  href="/about"
                  data-slot="button"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm h-10 rounded-md px-6 bg-primary text-primary-foreground font-bold uppercase tracking-wider transition-all duration-200 hover:bg-primary/90"
                >
                  <span>Our Story</span>
                  <ArrowUpRight className="size-4" aria-hidden="true" />
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
        data-nav="dark"
        className="dark bg-background text-foreground py-20 md:py-28 lg:py-32 border-t border-border/40"
      >
        <div className="mx-auto max-w-[1320px] px-6 md:px-8 lg:px-12">
          <div className="mb-14 md:mb-20 max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-[3px] w-12 bg-primary inline-block" />
              <span className="text-xs md:text-sm font-extrabold uppercase tracking-widest text-primary">
                Comprehensive Coaching
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-foreground leading-[1.08]">
              Training Programs Built For Every Age &amp; Ambition
            </h2>
            <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              From toddlers stepping onto quad skates for the first time to competitive athletes clocking national record times on professional inline skates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-6">
            {/* Card 1: Beginner Foundation */}
            <div data-index="0" className="flex">
              <div
                data-slot="card"
                className="text-card-foreground gap-6 py-6 pt-0 relative flex flex-col justify-between w-full overflow-hidden rounded-lg border border-border bg-card shadow-lg hover:border-border/80 transition-all duration-200 hover:shadow-2xl"
              >
                <div className="h-[3px] w-full bg-primary" />
                <div className="relative aspect-[16/11] w-full overflow-hidden bg-muted">
                  <Image
                    src="/images/basic-adjustable-skates.png"
                    alt="Beginner Foundation Skating"
                    fill
                    className="size-full object-cover object-center"
                  />
                  <div className="absolute top-3 left-3 rounded-sm bg-background/90 backdrop-blur-xs px-2.5 py-1 border border-border/60">
                    <span className="text-xs font-mono font-semibold tracking-wider text-primary uppercase">
                      AGES 3+ // FOUNDATION
                    </span>
                  </div>
                </div>
                <div data-slot="card-content" className="flex flex-col flex-1 p-5 md:p-6">
                  <div className="mb-2">
                    <h3 className="font-serif text-xl font-bold uppercase tracking-tight text-card-foreground">
                      Beginner Foundation
                    </h3>
                  </div>
                  <p className="text-xs font-mono text-primary font-medium tracking-wide mb-3">
                    Balance • Safety Falls • Basic Strides
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                    Structured beginner clinic designed to eliminate fear, teach correct posture, stopping mechanics, and build self-assurance in just 3 sessions.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2: Speed Quad Skating */}
            <div data-index="1" className="flex">
              <div
                data-slot="card"
                className="text-card-foreground gap-6 py-6 pt-0 relative flex flex-col justify-between w-full overflow-hidden rounded-lg border border-border bg-card shadow-lg hover:border-border/80 transition-all duration-200 hover:shadow-2xl"
              >
                <div className="h-[3px] w-full bg-primary" />
                <div className="relative aspect-[16/11] w-full overflow-hidden bg-muted">
                  <Image
                    src="/images/speed-quad-skates.png"
                    alt="Speed Quad Skating"
                    fill
                    className="size-full object-cover object-center"
                  />
                  <div className="absolute top-3 left-3 rounded-sm bg-background/90 backdrop-blur-xs px-2.5 py-1 border border-border/60">
                    <span className="text-xs font-mono font-semibold tracking-wider text-primary uppercase">
                      TRACK SPEED // QUADS
                    </span>
                  </div>
                </div>
                <div data-slot="card-content" className="flex flex-col flex-1 p-5 md:p-6">
                  <div className="mb-2">
                    <h3 className="font-serif text-xl font-bold uppercase tracking-tight text-card-foreground">
                      Speed Quad Skating
                    </h3>
                  </div>
                  <p className="text-xs font-mono text-primary font-medium tracking-wide mb-3">
                    Cornering • Sprint Starts • Cadence
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                    Mastering four-wheel track agility, high-torque acceleration, corner crossovers, and competitive heat management.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3: Professional Speed Inline */}
            <div data-index="2" className="flex">
              <div
                data-slot="card"
                className="text-card-foreground gap-6 py-6 pt-0 relative flex flex-col justify-between w-full overflow-hidden rounded-lg border border-border bg-card shadow-lg hover:border-border/80 transition-all duration-200 hover:shadow-2xl"
              >
                <div className="h-[3px] w-full bg-primary" />
                <div className="relative aspect-[16/11] w-full overflow-hidden bg-muted">
                  <Image
                    src="/images/professional-speed-inline-skates.png"
                    alt="Professional Speed Inline Skating"
                    fill
                    className="size-full object-cover object-center"
                  />
                  <div className="absolute top-3 left-3 rounded-sm bg-background/90 backdrop-blur-xs px-2.5 py-1 border border-border/60">
                    <span className="text-xs font-mono font-semibold tracking-wider text-primary uppercase">
                      ELITE SPEED // INLINE
                    </span>
                  </div>
                </div>
                <div data-slot="card-content" className="flex flex-col flex-1 p-5 md:p-6">
                  <div className="mb-2">
                    <h3 className="font-serif text-xl font-bold uppercase tracking-tight text-card-foreground">
                      Professional Speed Inline
                    </h3>
                  </div>
                  <p className="text-xs font-mono text-primary font-medium tracking-wide mb-3">
                    Aerodynamics • 110mm Wheels • Drafting
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                    High-velocity inline racing focusing on low-drag posture, powerful double-push technique, and racing frame tuning.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 4: Championship & National Prep */}
            <div data-index="3" className="flex">
              <div
                data-slot="card"
                className="text-card-foreground gap-6 py-6 pt-0 relative flex flex-col justify-between w-full overflow-hidden rounded-lg border border-border bg-card shadow-lg hover:border-border/80 transition-all duration-200 hover:shadow-2xl"
              >
                <div className="h-[3px] w-full bg-primary" />
                <div className="relative aspect-[16/11] w-full overflow-hidden bg-muted">
                  <Image
                    src="/images/club-bodysuits.jpg"
                    alt="National Championship Prep"
                    fill
                    className="size-full object-cover object-center"
                  />
                  <div className="absolute top-3 left-3 rounded-sm bg-background/90 backdrop-blur-xs px-2.5 py-1 border border-border/60">
                    <span className="text-xs font-mono font-semibold tracking-wider text-primary uppercase">
                      TOURNAMENTS // NATIONALS
                    </span>
                  </div>
                </div>
                <div data-slot="card-content" className="flex flex-col flex-1 p-5 md:p-6">
                  <div className="mb-2">
                    <h3 className="font-serif text-xl font-bold uppercase tracking-tight text-card-foreground">
                      Championship Prep
                    </h3>
                  </div>
                  <p className="text-xs font-mono text-primary font-medium tracking-wide mb-3">
                    Intensive Camps • Tactical Racing • Stamina
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                    Elite tournament conditioning, 7 AM track sessions, Khopoli camps, and mental race preparation to produce podium winners.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 4: TRAINING CENTERS (ALL 6 LOCATIONS WITH DIRECT MAPS)
          ===================================================================== */}
      <section
        id="training-centers"
        data-nav="dark"
        className="dark bg-background text-foreground relative overflow-hidden py-20 md:py-28 lg:py-32 border-t border-border/40"
      >
        <div className="container relative z-10 mx-auto max-w-[1320px] px-6 md:px-8 lg:px-12">
          <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-primary/10 border border-primary/25 text-primary text-xs font-bold uppercase tracking-widest mb-4">
              <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Locations &amp; Batches</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight uppercase text-foreground leading-tight">
              Our 6 Training Centers in <span className="text-primary">Thane &amp; Mumbai</span>
            </h2>
            <div className="flex items-center justify-center my-4">
              <div className="h-0.5 w-12 bg-primary rounded-full" />
            </div>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto font-sans leading-relaxed">
              Equipped with professional skate-friendly surfaces, safety fencing, and dedicated batch timings under certified coaches.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Center 1: Amber International School */}
            <div data-slot="card" className="flex flex-col justify-between bg-card border border-border rounded-lg overflow-hidden p-6 hover:border-primary/50 transition-all duration-200">
              <div className="space-y-4">
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-md bg-muted">
                  <Image
                    src="/images/amber-international-school-7-years-till-present.jpg"
                    alt="Amber International School, Thane"
                    fill
                    className="size-full object-cover"
                  />
                  <span className="absolute top-2 left-2 text-[10px] font-mono font-bold bg-background/90 text-primary border border-primary/30 px-2 py-0.5 rounded">
                    7+ YEARS LEGACY
                  </span>
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold uppercase text-foreground">Amber International School</h3>
                  <p className="text-xs text-primary font-mono mt-0.5">Kolshet Road, Dhokali, Thane West</p>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Near Highland Park, near TMC Tank West, Dhokali, Thane West 400607.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-border flex items-center justify-between">
                <span className="text-xs font-mono text-muted-foreground">Morning &amp; Evening Batches</span>
                <a
                  href="https://maps.app.goo.gl/iPuRK5ZCttr5KGbE7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline"
                >
                  <span>Google Map</span>
                  <ArrowUpRight className="size-3.5" />
                </a>
              </div>
            </div>

            {/* Center 2: Siddeshwar Garden */}
            <div data-slot="card" className="flex flex-col justify-between bg-card border border-border rounded-lg overflow-hidden p-6 hover:border-primary/50 transition-all duration-200">
              <div className="space-y-4">
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-md bg-muted">
                  <Image
                    src="/images/siddeshwar-garden-complex-thane-20-yrs-till-present.jpg"
                    alt="Siddeshwar Garden, Thane"
                    fill
                    className="size-full object-cover"
                  />
                  <span className="absolute top-2 left-2 text-[10px] font-mono font-bold bg-background/90 text-primary border border-primary/30 px-2 py-0.5 rounded">
                    20+ YEARS RUNNING
                  </span>
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold uppercase text-foreground">Siddeshwar Garden</h3>
                  <p className="text-xs text-primary font-mono mt-0.5">Dhokali Naka, Thane West</p>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Podium Tennis &amp; Skating Court, Siddeshwar Garden, Kolshet Road, Dhokali Naka, Thane West 400607.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-border flex items-center justify-between">
                <span className="text-xs font-mono text-muted-foreground">All Skill Levels</span>
                <a
                  href="https://maps.app.goo.gl/8Wii7PcMc8Vk2Fgz5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline"
                >
                  <span>Google Map</span>
                  <ArrowUpRight className="size-3.5" />
                </a>
              </div>
            </div>

            {/* Center 3: Shreerang Vidyalaya */}
            <div data-slot="card" className="flex flex-col justify-between bg-card border border-border rounded-lg overflow-hidden p-6 hover:border-primary/50 transition-all duration-200">
              <div className="space-y-4">
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-md bg-muted">
                  <Image
                    src="/images/dav-thane.jpg"
                    alt="Shreerang Vidyalaya, Thane"
                    fill
                    className="size-full object-cover"
                  />
                  <span className="absolute top-2 left-2 text-[10px] font-mono font-bold bg-background/90 text-primary border border-primary/30 px-2 py-0.5 rounded">
                    THANE WEST
                  </span>
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold uppercase text-foreground">Shreerang Vidyalaya</h3>
                  <p className="text-xs text-primary font-mono mt-0.5">Shrirang Society, Thane West</p>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  P.P, Hathyogi Nikam Guruji Marg, Shrirang Society, Thane West, Maharashtra 400601.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-border flex items-center justify-between">
                <span className="text-xs font-mono text-muted-foreground">Junior &amp; Senior Batches</span>
                <a
                  href="https://maps.app.goo.gl/o8e5RXjS1vwGPw6DA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline"
                >
                  <span>Google Map</span>
                  <ArrowUpRight className="size-3.5" />
                </a>
              </div>
            </div>

            {/* Center 4: Sports Foundry, Bhandup */}
            <div data-slot="card" className="flex flex-col justify-between bg-card border border-border rounded-lg overflow-hidden p-6 hover:border-primary/50 transition-all duration-200">
              <div className="space-y-4">
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-md bg-muted">
                  <Image
                    src="/images/the-chembur-gymkhana-chembur-east-mumbai-gyms-mys60cxzjg.avif"
                    alt="Sports Foundry, Bhandup West"
                    fill
                    className="size-full object-cover"
                  />
                  <span className="absolute top-2 left-2 text-[10px] font-mono font-bold bg-background/90 text-primary border border-primary/30 px-2 py-0.5 rounded">
                    BHANDUP // MUMBAI
                  </span>
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold uppercase text-foreground">Sports Foundry</h3>
                  <p className="text-xs text-primary font-mono mt-0.5">Lal Bahadur Shastri Marg, Bhandup West</p>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Rolex Metal Industries Compound, Village Road, LBS Marg, Bhandup West, Mumbai 400078.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-border flex items-center justify-between">
                <span className="text-xs font-mono text-muted-foreground">High Speed Track</span>
                <a
                  href="https://maps.app.goo.gl/brq8GMmmJL3Dvq8F7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline"
                >
                  <span>Google Map</span>
                  <ArrowUpRight className="size-3.5" />
                </a>
              </div>
            </div>

            {/* Center 5: Pratap Sarnaik International School */}
            <div data-slot="card" className="flex flex-col justify-between bg-card border border-border rounded-lg overflow-hidden p-6 hover:border-primary/50 transition-all duration-200">
              <div className="space-y-4">
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-md bg-muted">
                  <Image
                    src="/images/dav-airoli.jpg"
                    alt="Pratap Sarnaik International School, Thane"
                    fill
                    className="size-full object-cover"
                  />
                  <span className="absolute top-2 left-2 text-[10px] font-mono font-bold bg-background/90 text-primary border border-primary/30 px-2 py-0.5 rounded">
                    KASARVADAVALI
                  </span>
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold uppercase text-foreground">Pratap Sarnaik Int. School</h3>
                  <p className="text-xs text-primary font-mono mt-0.5">Empress Park, Kasarvadavali, Thane West</p>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Plot No. 7/13 &amp; 7/19, near Children Traffic Park, next to Cosmos, Kasarvadavali 400615.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-border flex items-center justify-between">
                <span className="text-xs font-mono text-muted-foreground">Curriculum &amp; Training</span>
                <a
                  href="https://maps.app.goo.gl/iem4cdkthKAtbV9r7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline"
                >
                  <span>Google Map</span>
                  <ArrowUpRight className="size-3.5" />
                </a>
              </div>
            </div>

            {/* Center 6: Piramal Vaikunth */}
            <div data-slot="card" className="flex flex-col justify-between bg-card border border-border rounded-lg overflow-hidden p-6 hover:border-primary/50 transition-all duration-200">
              <div className="space-y-4">
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-md bg-muted">
                  <Image
                    src="/images/matunga-gymkhana-matunga-east-mumbai-gyms-43t5rl6.avif"
                    alt="Piramal Vaikunth, Balkum Naka"
                    fill
                    className="size-full object-cover"
                  />
                  <span className="absolute top-2 left-2 text-[10px] font-mono font-bold bg-background/90 text-primary border border-primary/30 px-2 py-0.5 rounded">
                    BALKUM NAKA
                  </span>
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold uppercase text-foreground">Piramal Vaikunth</h3>
                  <p className="text-xs text-primary font-mono mt-0.5">Old Mumbai-Agra Road, Balkum, Thane</p>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Bayer Near Shivaji Nagar Ram Maruti Nagar, Balkum Naka, Thane West, Maharashtra 400607.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-border flex items-center justify-between">
                <span className="text-xs font-mono text-muted-foreground">Premier Facility</span>
                <a
                  href="https://maps.app.goo.gl/ytQovR2huQ4Phpfi7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline"
                >
                  <span>Google Map</span>
                  <ArrowUpRight className="size-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 5: OFFICIAL PRO GEAR & MERCHANDISE PREVIEW
          ===================================================================== */}
      <section
        id="merchandise"
        data-nav="dark"
        className="dark bg-background text-foreground py-20 md:py-28 relative overflow-hidden border-t border-border/40"
      >
        <div className="mx-auto max-w-[1320px] px-6 md:px-8 lg:px-12">
          <div className="mb-12 md:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-12 h-[3px] bg-primary block" />
                <span className="font-sans text-xs md:text-sm font-extrabold uppercase tracking-widest text-primary">
                  Coach-Curated Equipment
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight uppercase leading-[1.08] text-foreground">
                Official Gear &amp; Merchandise
              </h2>
              <p className="mt-3 font-sans text-muted-foreground text-base md:text-lg max-w-2xl">
                Certified protective gear, race-spec inline and quad skates, speed wheels, and official D.R.S.A team uniforms.
              </p>
            </div>
            <div className="shrink-0">
              <Link
                href="/contact"
                data-slot="button"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap bg-secondary text-secondary-foreground hover:bg-accent border border-border font-sans font-bold uppercase tracking-wider text-xs md:text-sm px-6 py-3 rounded-md transition-all duration-200 hover:border-primary/50"
              >
                <span>Inquire About Equipment</span>
                <ArrowRight className="size-4 text-primary" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {/* Product 1: Basic Adjustable Skates */}
            <div data-slot="card" className="bg-card border border-border rounded-lg p-4 flex flex-col justify-between hover:border-primary/50 transition-all duration-200">
              <div>
                <div className="relative aspect-square w-full rounded-md overflow-hidden bg-muted mb-3">
                  <Image
                    src="/images/basic-adjustable-skates.png"
                    alt="Basic Adjustable Skates"
                    fill
                    className="size-full object-contain p-2"
                  />
                </div>
                <h4 className="font-serif text-sm sm:text-base font-bold uppercase text-foreground">Adjustable Skates</h4>
                <p className="text-xs text-muted-foreground mt-1">Beginner-friendly size-expandable skates for children.</p>
              </div>
              <span className="text-[11px] font-mono text-primary font-semibold mt-3 block">Official DRSA Stock</span>
            </div>

            {/* Product 2: Basic Safety Gear */}
            <div data-slot="card" className="bg-card border border-border rounded-lg p-4 flex flex-col justify-between hover:border-primary/50 transition-all duration-200">
              <div>
                <div className="relative aspect-square w-full rounded-md overflow-hidden bg-muted mb-3">
                  <Image
                    src="/images/basic-safety-gear.png"
                    alt="Basic Safety Gear"
                    fill
                    className="size-full object-contain p-2"
                  />
                </div>
                <h4 className="font-serif text-sm sm:text-base font-bold uppercase text-foreground">Complete Safety Gear</h4>
                <p className="text-xs text-muted-foreground mt-1">Impact-absorbing knee, elbow, and wrist guards.</p>
              </div>
              <span className="text-[11px] font-mono text-primary font-semibold mt-3 block">High Impact Protection</span>
            </div>

            {/* Product 3: Club Bodysuits */}
            <div data-slot="card" className="bg-card border border-border rounded-lg p-4 flex flex-col justify-between hover:border-primary/50 transition-all duration-200">
              <div>
                <div className="relative aspect-square w-full rounded-md overflow-hidden bg-muted mb-3">
                  <Image
                    src="/images/club-bodysuits.jpg"
                    alt="Club Bodysuits"
                    fill
                    className="size-full object-contain p-2"
                  />
                </div>
                <h4 className="font-serif text-sm sm:text-base font-bold uppercase text-foreground">D.R.S.A Team Bodysuit</h4>
                <p className="text-xs text-muted-foreground mt-1">Aerodynamic competition race skin suit with breathable mesh.</p>
              </div>
              <span className="text-[11px] font-mono text-primary font-semibold mt-3 block">Official Team Wear</span>
            </div>

            {/* Product 4: Hard Helmets */}
            <div data-slot="card" className="bg-card border border-border rounded-lg p-4 flex flex-col justify-between hover:border-primary/50 transition-all duration-200">
              <div>
                <div className="relative aspect-square w-full rounded-md overflow-hidden bg-muted mb-3">
                  <Image
                    src="/images/hard-helmets.jpg"
                    alt="Hard Helmets"
                    fill
                    className="size-full object-contain p-2"
                  />
                </div>
                <h4 className="font-serif text-sm sm:text-base font-bold uppercase text-foreground">Hard Shell Helmets</h4>
                <p className="text-xs text-muted-foreground mt-1">Lightweight ventilated helmets with adjustable dial strap.</p>
              </div>
              <span className="text-[11px] font-mono text-primary font-semibold mt-3 block">Certified Safety</span>
            </div>

            {/* Product 5: Speed Quad Skates */}
            <div data-slot="card" className="bg-card border border-border rounded-lg p-4 flex flex-col justify-between hover:border-primary/50 transition-all duration-200">
              <div>
                <div className="relative aspect-square w-full rounded-md overflow-hidden bg-muted mb-3">
                  <Image
                    src="/images/speed-quad-skates.png"
                    alt="Speed Quad Skates"
                    fill
                    className="size-full object-contain p-2"
                  />
                </div>
                <h4 className="font-serif text-sm sm:text-base font-bold uppercase text-foreground">Speed Quad Skates</h4>
                <p className="text-xs text-muted-foreground mt-1">Precision track quads with reinforced plates and racing boots.</p>
              </div>
              <span className="text-[11px] font-mono text-primary font-semibold mt-3 block">Competition Ready</span>
            </div>

            {/* Product 6: Professional Speed Inline Skates */}
            <div data-slot="card" className="bg-card border border-border rounded-lg p-4 flex flex-col justify-between hover:border-primary/50 transition-all duration-200">
              <div>
                <div className="relative aspect-square w-full rounded-md overflow-hidden bg-muted mb-3">
                  <Image
                    src="/images/professional-speed-inline-skates.png"
                    alt="Professional Speed Inline Skates"
                    fill
                    className="size-full object-contain p-2"
                  />
                </div>
                <h4 className="font-serif text-sm sm:text-base font-bold uppercase text-foreground">Pro Speed Inlines</h4>
                <p className="text-xs text-muted-foreground mt-1">Carbon fiber racing shell, CNC aluminum chassis, speed wheels.</p>
              </div>
              <span className="text-[11px] font-mono text-primary font-semibold mt-3 block">Championship Grade</span>
            </div>

            {/* Product 7: Wheels, Bearings & Spare Parts */}
            <div data-slot="card" className="bg-card border border-border rounded-lg p-4 flex flex-col justify-between hover:border-primary/50 transition-all duration-200">
              <div>
                <div className="relative aspect-square w-full rounded-md overflow-hidden bg-muted mb-3">
                  <Image
                    src="/images/wheels-bearings-and-spare-parts.jpg"
                    alt="Wheels, Bearings & Spare Parts"
                    fill
                    className="size-full object-contain p-2"
                  />
                </div>
                <h4 className="font-serif text-sm sm:text-base font-bold uppercase text-foreground">Bearings &amp; Wheels</h4>
                <p className="text-xs text-muted-foreground mt-1">High-spin ABEC bearings, high-rebound PU race wheels.</p>
              </div>
              <span className="text-[11px] font-mono text-primary font-semibold mt-3 block">Spares &amp; Tuning</span>
            </div>

            {/* Product 8: Official Skate Bags */}
            <div data-slot="card" className="bg-card border border-border rounded-lg p-4 flex flex-col justify-between hover:border-primary/50 transition-all duration-200">
              <div>
                <div className="relative aspect-square w-full rounded-md overflow-hidden bg-muted mb-3">
                  <Image
                    src="/images/skate-bags.jpg"
                    alt="Official Skate Bags"
                    fill
                    className="size-full object-contain p-2"
                  />
                </div>
                <h4 className="font-serif text-sm sm:text-base font-bold uppercase text-foreground">D.R.S.A Skate Bags</h4>
                <p className="text-xs text-muted-foreground mt-1">Heavy-duty triangle skate bags with helmet compartment.</p>
              </div>
              <span className="text-[11px] font-mono text-primary font-semibold mt-3 block">Travel Gear</span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 6: TESTIMONIALS & REVIEWS
          ===================================================================== */}
      <section
        id="testimonials"
        data-nav="dark"
        className="dark bg-background text-foreground py-20 md:py-28 relative overflow-hidden border-t border-border/40"
      >
        <div className="mx-auto max-w-[1320px] px-6 md:px-8 lg:px-12">
          <div className="text-center mb-14 md:mb-18 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-primary/10 border border-primary/25 text-primary text-xs font-bold uppercase tracking-widest mb-4">
              <Quote className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Real Experiences</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight uppercase text-foreground leading-tight">
              What Our Skating Family Says
            </h2>
            <div className="flex items-center justify-center my-4">
              <div className="h-0.5 w-12 bg-primary rounded-full" />
            </div>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto font-sans leading-relaxed">
              Decades of trust, transforming curious beginners into decorated national medalists.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Testimonial 1 */}
            <div data-slot="card" className="bg-card border border-border rounded-lg p-6 sm:p-8 flex flex-col justify-between hover:border-primary/50 transition-all duration-200">
              <div className="space-y-4">
                <div className="flex items-center gap-1 text-primary">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="size-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-sm sm:text-base text-foreground/90 italic leading-relaxed">
                  &ldquo;My daughter started skating under Dehiya Sir when she was 6 years old. She won multiple medals and we recognized her talent. It was just a start — she won countless medals at state and national level for the next 10 years. Thanks to Dehiya Sir for building her talent in skating.&rdquo;
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-border flex items-center gap-3">
                <div className="size-10 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center text-primary font-bold font-serif">
                  TS
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold uppercase text-foreground">Terjinder Singh</h4>
                  <p className="text-xs text-muted-foreground font-mono">Proud Parent of National Medalist</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div data-slot="card" className="bg-card border border-border rounded-lg p-6 sm:p-8 flex flex-col justify-between hover:border-primary/50 transition-all duration-200">
              <div className="space-y-4">
                <div className="flex items-center gap-1 text-primary">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="size-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-sm sm:text-base text-foreground/90 italic leading-relaxed">
                  &ldquo;Rajinder Sir and Navjeet Sir are amazing coaches! Despite the age, they gave me immense confidence to roll on skates in a few minutes and I was able to skate in just 3 sessions. The techniques and exercises are very helpful. Watching the father-son duo on skates is a beauty — looks so effortless!&rdquo;
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-border flex items-center gap-3">
                <div className="relative size-10 rounded-full overflow-hidden border border-primary/40">
                  <Image
                    src="/images/ivaturi.webp"
                    alt="Gayatri Ivaturi"
                    fill
                    className="size-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold uppercase text-foreground">Gayatri Ivaturi</h4>
                  <p className="text-xs text-muted-foreground font-mono">Adult Skating Student</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div data-slot="card" className="bg-card border border-border rounded-lg p-6 sm:p-8 flex flex-col justify-between hover:border-primary/50 transition-all duration-200">
              <div className="space-y-4">
                <div className="flex items-center gap-1 text-primary">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="size-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-sm sm:text-base text-foreground/90 italic leading-relaxed">
                  &ldquo;I have known the Dehiya Family teach skating since I was a kid. I would highly recommend all beginners to get trained by this academy, they are absolutely professional, dedicated, and bring out the best in every skater.&rdquo;
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-border flex items-center gap-3">
                <div className="size-10 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center text-primary font-bold font-serif">
                  AG
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold uppercase text-foreground">Amol Gowda</h4>
                  <p className="text-xs text-muted-foreground font-mono">Long-time Academy Supporter</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 7: FINAL CALL-TO-ACTION (ONLY "SEND AN INQUIRY" BUTTON)
          ===================================================================== */}
      <section
        id="cta-section"
        data-nav="dark"
        className="dark bg-background text-foreground py-20 md:py-28 relative overflow-hidden border-t border-border/40"
      >
        <div className="mx-auto max-w-[1320px] px-6 md:px-8 lg:px-12">
          <div className="relative rounded-2xl border border-border bg-card/80 backdrop-blur-md p-8 sm:p-12 md:p-16 shadow-2xl overflow-hidden text-center max-w-4xl mx-auto">
            {/* Decorative Top Accent Bar */}
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-primary via-primary to-transparent" />

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-primary/10 border border-primary/25 text-primary text-xs font-bold uppercase tracking-widest mb-6">
              <Sparkles className="size-3.5 text-primary" />
              <span>Join The D.R.S.A Family</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-foreground leading-tight">
              Ready to Start Your Skating Journey?
            </h2>

            <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Connect directly with Head Coaches <strong className="text-foreground">Mr. Rajinder Singh Dehiya</strong> and <strong className="text-foreground">Mr. Navjeet Singh Dehiya</strong> to find the right batch, equipment, and schedule at your nearest training center.
            </p>

            {/* Direct Contact Numbers Pill */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-sm font-mono">
              <a
                href="tel:9323861266"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-secondary/80 border border-border text-foreground hover:text-primary hover:border-primary/40 transition-colors"
              >
                <Phone className="size-4 text-primary" />
                <span>Rajinder Sir: +91 93238 61266</span>
              </a>
              <a
                href="tel:8693817112"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-secondary/80 border border-border text-foreground hover:text-primary hover:border-primary/40 transition-colors"
              >
                <Phone className="size-4 text-primary" />
                <span>Navjeet Sir: +91 86938 17112</span>
              </a>
            </div>

            {/* Single CTA Action Button */}
            <div className="mt-10 flex justify-center">
              <Link
                href="/contact"
                data-slot="button"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-base font-bold uppercase tracking-wider outline-none bg-primary text-primary-foreground hover:bg-primary/90 h-13 px-10 rounded-md transition-all duration-200 shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/40 hover:-translate-y-0.5"
              >
                <span>Send an Inquiry</span>
                <ArrowRight className="size-5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
