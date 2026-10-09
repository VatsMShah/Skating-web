"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  ArrowUpRight,
  Clock,
  ShieldCheck,
  Sparkles,
  Phone,
  Mail,
  ArrowRight,
  Search,
  Trophy,
  Activity,
  Layers,
  CheckCircle2,
  ChevronRight,
  School,
  Building2,
  Medal,
} from "lucide-react";

export const TRAINING_CENTERS = [
  // =========================================================================
  // ZONE 1: THANE WEST & CENTRAL HEADQUARTERS (10 Centers)
  // =========================================================================
  {
    id: "amber-international",
    name: "Amber International School",
    zone: "Thane",
    zoneLabel: "Thane West",
    tagline: "Flagship Speed Rink & Drills Arena",
    landmark: "Kolshet Road, Dhokali, Thane West - 400607",
    fullAddress: "Near Highland Park, near TMC Tank West, Dhokali, Thane West, Maharashtra 400607",
    image: "/images/places/amber-international-school-7-years-till-present.jpg",
    badge: "7+ YEARS LEGACY",
    isHero: true,
    timings: "Morning (6:30 AM – 8:30 AM) & Evening (5:00 PM – 7:30 PM)",
    surface: "Smooth Concrete & Polyurethane Coated Speed Court",
    skillLevels: "Beginner Foundations (Ages 4+) to National Speed Racers",
    mapUrl: "https://maps.app.goo.gl/iPuRK5ZCttr5KGbE7",
    highlights: ["Safety Guard Rails", "Speed Timing Sprints", "Certified Head Coach Supervision"],
  },
  {
    id: "siddheshwar-garden",
    name: "Siddheshwar Garden Complex",
    zone: "Thane",
    zoneLabel: "Dhokali Naka, Thane West",
    tagline: "Podium Tennis & Dedicated Roller Skating Rink",
    landmark: "Kolshet Road, Dhokali Naka, Thane West - 400607",
    fullAddress: "Podium Court, Siddheshwar Garden, Kolshet Road, Dhokali Naka, Thane West, Maharashtra 400607",
    image: "/images/places/siddeshwar-garden-complex-thane-20-yrs-till-present.jpg",
    badge: "20+ YEARS RUNNING",
    isHero: true,
    timings: "Morning (6:00 AM – 8:30 AM) & Evening (5:30 PM – 8:30 PM)",
    surface: "Elevated Podium Court with Enclosed Perimeter Fencing",
    skillLevels: "All Skill Levels • Quads, Inlines & State Squads",
    mapUrl: "https://maps.app.goo.gl/8Wii7PcMc8Vk2Fgz5",
    highlights: ["20+ Yrs Academy Legacy", "Dedicated Enclosed Arena", "Weekend Intensive Batches"],
  },
  {
    id: "shreerang-vidyalaya",
    name: "Shreerang Vidyalaya",
    zone: "Thane",
    zoneLabel: "Shrirang Society, Thane West",
    tagline: "Central Thane Foundation & Junior Development",
    landmark: "Shrirang Society, Thane West - 400601",
    fullAddress: "P.P. Hathyogi Nikam Guruji Marg, Shrirang Society, Thane West, Maharashtra 400601",
    image: "/images/places/shreerang-vidyalaya.jpg",
    badge: "CENTRAL THANE HUB",
    isHero: false,
    timings: "Evening (5:00 PM – 7:30 PM) & Weekend Batches",
    surface: "Level Sports Ground & Hard-surface Practice Court",
    skillLevels: "Junior Foundations, Kids Beginner & Intermediate",
    mapUrl: "https://maps.app.goo.gl/o8e5RXjS1vwGPw6DA",
    highlights: ["School Team Coaching", "Posture Alignment", "Quad & Inline Drills"],
  },
  {
    id: "pratap-sarnaik",
    name: "Pratap Sarnaik International School",
    zone: "Thane",
    zoneLabel: "Kasarvadavali, Thane West",
    tagline: "Ghodbunder Corridor In-School & Open Academy",
    landmark: "Empress Park, Kasarvadavali - 400615",
    fullAddress: "Plot No. 7/13 & 7/19, near Children Traffic Park, Kasarvadavali, Thane West, Maharashtra 400615",
    image: "/images/places/pratap-sarnaik-school.jpg",
    badge: "GB ROAD HUB",
    isHero: false,
    timings: "Morning (6:30 AM – 8:00 AM) & Evening (5:00 PM – 7:00 PM)",
    surface: "Spacious Multi-sport Surface with Banked Track Drills",
    skillLevels: "Beginner (Ages 4+) to Advanced School Competitors",
    mapUrl: "https://maps.app.goo.gl/iem4cdkthKAtbV9r7",
    highlights: ["Extensive Track Space", "Curriculum Drills", "Evening Batches"],
  },
  {
    id: "piramal-vaikunth",
    name: "Piramal Vaikunth",
    zone: "Thane",
    zoneLabel: "Balkum Naka, Thane West",
    tagline: "Premium Residential Sports Arena",
    landmark: "Old Mumbai-Agra Road, Balkum Naka - 400607",
    fullAddress: "Bayer Near Shivaji Nagar Ram Maruti Nagar, Balkum Naka, Thane West, Maharashtra 400607",
    image: "/images/places/piramal-vaikunth.webp",
    badge: "BALKUM CORRIDOR",
    isHero: false,
    timings: "Weekend Masterclasses & Evening Batches",
    surface: "Ultra-Smooth High-Grip Sports Flooring",
    skillLevels: "Kids Starters, Agility & Speed Fundamentals",
    mapUrl: "https://maps.app.goo.gl/ytQovR2huQ4Phpfi7",
    highlights: ["Ultra-smooth Surface", "Parent Viewing Zone", "Beginner Safe Fencing"],
  },
  {
    id: "tmc-mini-stadium",
    name: "TMC Mini Stadium / Rink",
    zone: "Thane",
    zoneLabel: "Thane Municipal Sports Area",
    tagline: "Municipal Championship Arena & Speed Rink",
    landmark: "Thane Municipal Corporation Stadium Area - 400602",
    fullAddress: "TMC Sports Complex, Thane West, Maharashtra 400602",
    image: "/images/places/tmc-mini-stadium-thane-2-years-till-present.jpg",
    badge: "MUNICIPAL ARENA",
    isHero: false,
    timings: "Morning Speed Sprints & Evening State Squad",
    surface: "Official Standard Banked Roller Skating Track",
    skillLevels: "Competitive Racers, National Squad & Speed Trials",
    mapUrl: "https://maps.google.com/?q=Thane+Municipal+Corporation+Stadium",
    highlights: ["Official Speed Dimensions", "Banked Curves", "Time Trial Testing"],
  },
  {
    id: "dav-thane",
    name: "D.A.V. Public School, Thane",
    zone: "Thane",
    zoneLabel: "Tulsidham, Thane West",
    tagline: "Institutional Partner & Trophy-Winning Squad",
    landmark: "Tulsidham, Thane West - 400610",
    fullAddress: "D.A.V. Public School, Tulsidham, Thane West, Maharashtra 400610",
    image: "/images/places/dav-thane.jpg",
    badge: "PREMIER SCHOOL",
    isHero: false,
    timings: "After-school Training & Weekend Intensives",
    surface: "Paved Enclosed School Sports Court",
    skillLevels: "School Tournament Players & Intermediate Racers",
    mapUrl: "https://maps.google.com/?q=DAV+Public+School+Thane",
    highlights: ["Inter-School Champions", "Stamina Training", "Balance Drills"],
  },
  {
    id: "little-flower",
    name: "Little Flower High School",
    zone: "Thane",
    zoneLabel: "Upvan / Pokharan, Thane West",
    tagline: "Grassroots Foundation & Youth Starter Center",
    landmark: "Pokharan Road No. 1, Upvan, Thane West - 400606",
    fullAddress: "Pokharan Road No. 1, Upvan, Thane West, Maharashtra 400606",
    image: "/images/places/little-flower-high-school-1495092299-1.jpg",
    badge: "UPVAN HUB",
    isHero: false,
    timings: "Evening Sessions & Summer Bootcamps",
    surface: "Protected Level Ground Flooring",
    skillLevels: "Starter Quad & Inline Skating Basics",
    mapUrl: "https://maps.google.com/?q=Little+Flower+High+School+Thane",
    highlights: ["Confidence Building", "Braking & Turning Drills", "Safe Padded Sessions"],
  },
  {
    id: "pes-new-english",
    name: "PES New English School & Jr. College",
    zone: "Thane",
    zoneLabel: "Ram Maruti Road, Naupada",
    tagline: "Historic Sports Partnership & Core Training",
    landmark: "Naupada, Thane West - 400602",
    fullAddress: "Ram Maruti Road, Naupada, Thane West, Maharashtra 400602",
    image: "/images/places/pes-new-english-school-jr-college.jpg",
    badge: "HERITAGE PARTNER",
    isHero: false,
    timings: "Evening Batches & Weekend Workouts",
    surface: "Hard-court Practice Area",
    skillLevels: "Novice to Intermediate Skating Athletes",
    mapUrl: "https://maps.google.com/?q=PES+New+English+School+Thane",
    highlights: ["Core Strengthening", "Foundational Pumping", "Certified Coaches"],
  },
  {
    id: "smt-naupada",
    name: "SMT School, Naupada",
    zone: "Thane",
    zoneLabel: "Naupada, Thane Central",
    tagline: "Community Starter Program & Novice Skating",
    landmark: "Naupada, Thane Central - 400602",
    fullAddress: "SMT School Campus, Naupada, Thane West, Maharashtra 400602",
    image: "/images/places/smt-naupada.png",
    badge: "NAUPADA CENTER",
    isHero: false,
    timings: "Weekend Morning Sessions",
    surface: "Protected Court with Coach Supervised Stations",
    skillLevels: "Young Starters (Ages 4-10) & Quad Basics",
    mapUrl: "https://maps.google.com/?q=SMT+School+Naupada+Thane",
    highlights: ["Low Coach-to-Skater Ratio", "Agility Cones", "Fun Skill Games"],
  },

  // =========================================================================
  // ZONE 2: MUMBAI CITY & SUBURBS (6 Centers)
  // =========================================================================
  {
    id: "sports-foundry",
    name: "The Sports Foundry (TSF)",
    zone: "Mumbai",
    zoneLabel: "Bhandup West, Mumbai",
    tagline: "High-Performance Speed Track & Athletic Conditioning",
    landmark: "LBS Marg, Bhandup West, Mumbai - 400078",
    fullAddress: "Rolex Metal Industries Compound, Village Road, LBS Marg, Bhandup West, Mumbai 400078",
    image: "/images/places/tsf.jpg",
    badge: "⚡ OLYMPIC-GRADE FACILITY",
    isHero: true,
    timings: "Morning (6:00 AM – 9:00 AM) & Evening (4:30 PM – 8:30 PM)",
    surface: "Specialized High-Grip Speed Floor with Plyometrics & Gym Zone",
    skillLevels: "National Speed Squad, Inline Racers & Athletic Conditioning",
    mapUrl: "https://maps.app.goo.gl/brq8GMmmJL3Dvq8F7",
    highlights: ["Speed Track Sprints", "Plyometrics Conditioning", "Strength & Core Workouts"],
  },
  {
    id: "matunga-gymkhana",
    name: "Matunga Gymkhana",
    zone: "Mumbai",
    zoneLabel: "Matunga East, South/Central Mumbai",
    tagline: "Premier Heritage Sports Club & Roller Rink",
    landmark: "Lakhamshi Napoo Road, Matunga East - 400019",
    fullAddress: "Matunga Gymkhana, Lakhamshi Napoo Road, Matunga East, Mumbai, Maharashtra 400019",
    image: "/images/places/matunga-gymkhana-matunga-east-mumbai-gyms-43t5rl6.avif",
    badge: "PREMIER CLUB",
    isHero: false,
    timings: "Morning (7:00 AM – 9:00 AM) & Evening Member Batches",
    surface: "Smooth Polished Hard-court Roller Rink",
    skillLevels: "Club Members, Open Batches & Speed Training",
    mapUrl: "https://maps.google.com/?q=Matunga+Gymkhana+Mumbai",
    highlights: ["Club Class Amenities", "Floodlit Evening Sessions", "State Team Mentorship"],
  },
  {
    id: "chembur-gymkhana",
    name: "The Chembur Gymkhana",
    zone: "Mumbai",
    zoneLabel: "Chembur East, Eastern Suburbs",
    tagline: "Dedicated Club Roller Skating Arena",
    landmark: "16th Road, Chembur East, Mumbai - 400071",
    fullAddress: "The Chembur Gymkhana, 16th Road, Chembur East, Mumbai, Maharashtra 400071",
    image: "/images/places/the-chembur-gymkhana-chembur-east-mumbai-gyms-mys60cxzjg.avif",
    badge: "EASTERN MUMBAI ARENA",
    isHero: false,
    timings: "Evening Sessions (5:00 PM – 8:00 PM) & Weekends",
    surface: "Enclosed Roller Skating Rink with Perimeter Railings",
    skillLevels: "All Ages • Recreational, Freestyle & Speed Quad",
    mapUrl: "https://maps.google.com/?q=The+Chembur+Gymkhana+Mumbai",
    highlights: ["Dedicated Rink Space", "Beginner Handrail Support", "Championship Coaching"],
  },
  {
    id: "ghatkopar-ymca",
    name: "Ghatkopar YMCA",
    zone: "Mumbai",
    zoneLabel: "Ghatkopar East, Central Suburbs",
    tagline: "Community Sports Arena & Youth Coaching",
    landmark: "Pant Nagar, Ghatkopar East - 400075",
    fullAddress: "Ghatkopar YMCA Branch, Pant Nagar, Ghatkopar East, Mumbai, Maharashtra 400075",
    image: "/images/places/ghatkopar-ymca.jpeg",
    badge: "YMCA HUB",
    isHero: false,
    timings: "Regular Evening Batches (5:30 PM – 7:30 PM)",
    surface: "Level Outdoor Sports Court",
    skillLevels: "Beginners, Intermediate Racers & Fitness Enthusiasts",
    mapUrl: "https://maps.google.com/?q=YMCA+Ghatkopar+Mumbai",
    highlights: ["Affordable Training", "Structured Levels", "Physical Fitness Drills"],
  },
  {
    id: "bombay-ymca",
    name: "Bombay YMCA",
    zone: "Mumbai",
    zoneLabel: "Mumbai Central & Greater Network",
    tagline: "Long-standing Sports Partner with Multi-city Legacy",
    landmark: "Mumbai Central Regional Campus",
    fullAddress: "Bombay YMCA Head Center, Mumbai, Maharashtra",
    image: "/images/places/ymca-bombay.png",
    badge: "HERITAGE YMCA",
    isHero: false,
    timings: "Seasonal Camps & Weekend Academy Programs",
    surface: "Multi-purpose Indoor & Outdoor Facilities",
    skillLevels: "Youth Foundation, Beginner Skaters & Camps",
    mapUrl: "https://maps.google.com/?q=Bombay+YMCA+Mumbai",
    highlights: ["Multi-decade Partnership", "Summer Sports Camps", "Certified Instructors"],
  },
  {
    id: "marble-arch",
    name: "Marble Arch School",
    zone: "Mumbai",
    zoneLabel: "Oshiwara / Andheri West, Mumbai",
    tagline: "Western Suburbs Foundation Center",
    landmark: "Oshiwara, Andheri West, Mumbai",
    fullAddress: "Marble Arch School Campus, Oshiwara, Andheri West, Mumbai, Maharashtra",
    image: "/images/places/marble-arch.jpg",
    badge: "WESTERN SUBURBS",
    isHero: false,
    timings: "After-school Training & Saturday Batches",
    surface: "Smooth Protected School Ground",
    skillLevels: "Early Childhood (Ages 4+) to Junior Quad Speed",
    mapUrl: "https://maps.google.com/?q=Marble+Arch+School+Mumbai",
    highlights: ["Early Age Balance", "Safe Impact Mats", "Crossover Drills"],
  },

  // =========================================================================
  // ZONE 3: NAVI MUMBAI EDUCATIONAL ARENAS (4 Centers)
  // =========================================================================
  {
    id: "dav-airoli",
    name: "D.A.V. Public School, Airoli",
    zone: "Navi Mumbai",
    zoneLabel: "Sector 10, Airoli, Navi Mumbai",
    tagline: "Navi Mumbai North Championship Wing",
    landmark: "Sector 10, Airoli, Navi Mumbai - 400708",
    fullAddress: "Plot No. 11, Sector 10, Airoli, Navi Mumbai, Maharashtra 400708",
    image: "/images/places/dav-airoli.jpg",
    badge: "AIROLI HUB",
    isHero: false,
    timings: "Morning (6:30 AM – 8:30 AM) & Evening (5:00 PM – 7:30 PM)",
    surface: "Expansive Hard-court Skating Track",
    skillLevels: "School District, State Medalists & Speed Squad",
    mapUrl: "https://maps.google.com/?q=DAV+Public+School+Airoli",
    highlights: ["High Medal Output", "Speed Endurance", "National Qualification Prep"],
  },
  {
    id: "dav-nerul",
    name: "D.A.V. Public School, Nerul",
    zone: "Navi Mumbai",
    zoneLabel: "Sector 48, Seawoods / Nerul",
    tagline: "Seawoods & Nerul Competitive Skating Center",
    landmark: "Sector 48, Nerul / Seawoods, Navi Mumbai - 400706",
    fullAddress: "Plot No. 34, Sector 48, Nerul, Navi Mumbai, Maharashtra 400706",
    image: "/images/places/dav-nerul.jpg",
    badge: "SEAWOODS HUB",
    isHero: false,
    timings: "Evening Sessions (5:00 PM – 7:30 PM)",
    surface: "Level Outdoor Sports Court with Fenced Boundary",
    skillLevels: "Junior to Senior Inline & Quad Racers",
    mapUrl: "https://maps.google.com/?q=DAV+Public+School+Nerul",
    highlights: ["District Medalists", "Speed Drills", "Knee Bend Posture Training"],
  },
  {
    id: "cbd-ymca",
    name: "CBD Belapur YMCA",
    zone: "Navi Mumbai",
    zoneLabel: "Sector 8, CBD Belapur, Navi Mumbai",
    tagline: "Central Navi Mumbai Sports & Conditioning Rink",
    landmark: "Sector 8, CBD Belapur - 400614",
    fullAddress: "YMCA Complex, Sector 8, CBD Belapur, Navi Mumbai, Maharashtra 400614",
    image: "/images/places/cbd-ymca.jpg",
    badge: "BELAPUR ARENA",
    isHero: false,
    timings: "Morning & Evening Weekend Batches",
    surface: "Dedicated Outdoor YMCA Skating & Multi-court",
    skillLevels: "All Skill Levels • Novice to Fitness Racers",
    mapUrl: "https://maps.google.com/?q=YMCA+CBD+Belapur",
    highlights: ["Open Air Rink", "Adult & Kids Batches", "Stamina Building"],
  },
  {
    id: "north-point",
    name: "North Point School",
    zone: "Navi Mumbai",
    zoneLabel: "Sector 6, Kopar Khairane",
    tagline: "Kopar Khairane Foundation & Speed Training",
    landmark: "Sector 6, Kopar Khairane, Navi Mumbai - 400709",
    fullAddress: "North Point School, Sector 6, Kopar Khairane, Navi Mumbai, Maharashtra 400709",
    image: "/images/places/north-point-board.jpeg",
    badge: "KOPAR KHAIRANE",
    isHero: false,
    timings: "Regular After-school Batches",
    surface: "Paved Enclosed School Sports Ground",
    skillLevels: "Foundations, Balance & Inter-school Team",
    mapUrl: "https://maps.google.com/?q=North+Point+School+Kopar+Khairane",
    highlights: ["Step-by-step Progression", "Safe Braking", "School Tournament Prep"],
  },
];

export default function FacilitiesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeZone, setActiveZone] = useState("all");

  // Filter centers based on search query and active zone
  const filteredCenters = useMemo(() => {
    return TRAINING_CENTERS.filter((center) => {
      const matchesSearch =
        searchQuery === "" ||
        center.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        center.zoneLabel.toLowerCase().includes(searchQuery.toLowerCase()) ||
        center.landmark.toLowerCase().includes(searchQuery.toLowerCase()) ||
        center.tagline.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesZone = activeZone === "all" || center.zone.toLowerCase() === activeZone.toLowerCase();

      return matchesSearch && matchesZone;
    });
  }, [searchQuery, activeZone]);

  // Group filtered centers by zone
  const thaneCenters = useMemo(
    () => filteredCenters.filter((c) => c.zone === "Thane"),
    [filteredCenters]
  );
  const mumbaiCenters = useMemo(
    () => filteredCenters.filter((c) => c.zone === "Mumbai"),
    [filteredCenters]
  );
  const naviMumbaiCenters = useMemo(
    () => filteredCenters.filter((c) => c.zone === "Navi Mumbai"),
    [filteredCenters]
  );

  const scrollToZone = (zoneId) => {
    setActiveZone("all");
    const el = document.getElementById(zoneId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#0F172A]">
      
      {/* =====================================================================
          HERO SECTION: NAVY BLUE & CHAMPION GOLD WITH ACTION BG & SQUARE FRAME
          ===================================================================== */}
      <section className="relative w-full overflow-hidden bg-[#0A1931] text-white pt-32 pb-20 md:pt-40 md:pb-28 border-b border-slate-800">
        
        {/* Background Action Image with Navy Gradient Overlays */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/gallery/2026-09-28.jpg"
            alt="Dehiya Roller Skating Academy Speed Skaters Training"
            fill
            className="size-full object-cover object-center opacity-60 brightness-90 contrast-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A1931]/85 via-[#0A1931]/65 to-[#0A1931]/95" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1931]/80 via-transparent to-[#0A1931]/80" />
        </div>

        {/* Ambient background glows */}
        <div className="absolute top-0 right-1/4 size-[500px] bg-[#F59E0B]/12 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 size-[450px] bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

        {/* Decorative Gold Framing Square Accents (From Home & About Us) */}
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
            <span className="text-[#FBBF24] font-semibold">Training Centers</span>
          </nav>

          {/* Gold Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#FEF3C7]/15 border border-[#F59E0B]/60 text-[#FBBF24] text-xs font-mono font-bold uppercase tracking-widest shadow-lg backdrop-blur-md mb-6">
            <MapPin className="size-4 text-[#F59E0B]" />
            <span>20+ Training Centers &amp; Professional Rinks</span>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">

            {/* Main Page Title */}
            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight text-white leading-tight text-balance">
              Find Your Nearest <span className="text-[#FBBF24] underline decoration-[#F59E0B]/50 decoration-4 underline-offset-8">Skating Arena</span>
            </h1>

            {/* Subtitle */}
            <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto font-sans leading-relaxed">
              Explore 20 premier skating hubs across <strong>Thane, Mumbai, and Navi Mumbai</strong> — equipped with precision speed courts, certified coach ratios, and flexible morning/evening batch schedules.
            </p>

            {/* Instant Locality Search Bar */}
            <div className="pt-4 max-w-xl mx-auto">
              <div className="relative flex items-center">
                <Search className="absolute left-4 size-5 text-[#F59E0B]" />
                <input
                  type="text"
                  placeholder="Search by center name, neighborhood (e.g. Dhokali, Bhandup, Airoli...)"
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

            {/* Quick stats ribbon */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto">
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs text-center">
                <span className="block font-serif text-2xl sm:text-3xl font-black text-[#FBBF24]">20+</span>
                <span className="text-[11px] font-mono uppercase text-slate-300 tracking-wider">Active Centers</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs text-center">
                <span className="block font-serif text-2xl sm:text-3xl font-black text-[#FBBF24]">30+</span>
                <span className="text-[11px] font-mono uppercase text-slate-300 tracking-wider">Years Legacy</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs text-center">
                <span className="block font-serif text-2xl sm:text-3xl font-black text-[#FBBF24]">600+</span>
                <span className="text-[11px] font-mono uppercase text-slate-300 tracking-wider">Medalists</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs text-center">
                <span className="block font-serif text-2xl sm:text-3xl font-black text-[#FBBF24]">3</span>
                <span className="text-[11px] font-mono uppercase text-slate-300 tracking-wider">City Regions</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================================
          TRAINING CENTERS BENTO SHOWCASE
          ===================================================================== */}
      <div className="container mx-auto max-w-[1320px] px-4 sm:px-6 md:px-8 lg:px-12 py-12 md:py-16 space-y-20">

        {/* -------------------------------------------------------------------
            ZONE 1: THANE WEST & CENTRAL HEADQUARTERS
            ------------------------------------------------------------------- */}
        {thaneCenters.length > 0 && (
          <section id="zone-thane" className="scroll-mt-28 space-y-8">
            
            {/* Zone Section Title */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b-2 border-slate-200">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#FEF3C7] border border-[#F59E0B]/60 text-[#0A1931] text-xs font-mono font-bold uppercase tracking-wider mb-2">
                  <Trophy className="size-3.5 text-[#D97706]" />
                  <span>Academy Headquarters &amp; Flagship Hub</span>
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase text-[#0A1931] tracking-tight">
                  Thane West &amp; Central Centers <span className="text-[#D97706]">({thaneCenters.length})</span>
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 font-mono">
                Dhokali &bull; Kolshet &bull; Balkum &bull; Naupada &bull; Upvan &bull; Kasarvadavali
              </p>
            </div>

            {/* Bento Grid: 2 Hero Spotlight Cards + Regular Bento Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {thaneCenters.map((center) => (
                <CenterBentoCard key={center.id} center={center} />
              ))}
            </div>

          </section>
        )}

        {/* -------------------------------------------------------------------
            ZONE 2: MUMBAI CITY & SUBURBS
            ------------------------------------------------------------------- */}
        {mumbaiCenters.length > 0 && (
          <section id="zone-mumbai" className="scroll-mt-28 space-y-8">
            
            {/* Zone Section Title */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b-2 border-slate-200">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-300 text-[#0A1931] text-xs font-mono font-bold uppercase tracking-wider mb-2">
                  <Activity className="size-3.5 text-blue-600" />
                  <span>Olympic Speed Track &amp; Premier Gymkhanas</span>
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase text-[#0A1931] tracking-tight">
                  Mumbai City &amp; Suburbs <span className="text-blue-700">({mumbaiCenters.length})</span>
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 font-mono">
                Bhandup &bull; Matunga &bull; Chembur &bull; Ghatkopar &bull; Andheri
              </p>
            </div>

            {/* Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {mumbaiCenters.map((center) => (
                <CenterBentoCard key={center.id} center={center} />
              ))}
            </div>

          </section>
        )}

        {/* -------------------------------------------------------------------
            ZONE 3: NAVI MUMBAI EDUCATIONAL ARENAS
            ------------------------------------------------------------------- */}
        {naviMumbaiCenters.length > 0 && (
          <section id="zone-navimumbai" className="scroll-mt-28 space-y-8">
            
            {/* Zone Section Title */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b-2 border-slate-200">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-50 border border-emerald-300 text-emerald-950 text-xs font-mono font-bold uppercase tracking-wider mb-2">
                  <School className="size-3.5 text-emerald-600" />
                  <span>Institutional Campuses &amp; Sports Complex</span>
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase text-[#0A1931] tracking-tight">
                  Navi Mumbai Centers <span className="text-emerald-700">({naviMumbaiCenters.length})</span>
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 font-mono">
                Airoli &bull; Nerul / Seawoods &bull; CBD Belapur &bull; Kopar Khairane
              </p>
            </div>

            {/* Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {naviMumbaiCenters.map((center) => (
                <CenterBentoCard key={center.id} center={center} />
              ))}
            </div>

          </section>
        )}

        {/* No Search Results Fallback */}
        {filteredCenters.length === 0 && (
          <div className="p-12 text-center bg-white rounded-3xl border border-slate-200 shadow-sm space-y-4 max-w-lg mx-auto">
            <div className="size-16 rounded-full bg-slate-100 flex items-center justify-center mx-auto text-slate-400">
              <Search className="size-8" />
            </div>
            <h3 className="font-serif text-xl font-bold uppercase text-[#0A1931]">No centers found</h3>
            <p className="text-sm text-slate-600">
              We couldn’t find any location matching &ldquo;{searchQuery}&rdquo;. Try searching for a neighborhood like &ldquo;Thane&rdquo;, &ldquo;Bhandup&rdquo;, or &ldquo;Airoli&rdquo;.
            </p>
            <button
              onClick={() => setSearchQuery("")}
              className="px-5 py-2 rounded-lg bg-[#0A1931] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#F59E0B] hover:text-[#0A1931] transition-all"
            >
              Show All 20 Centers
            </button>
          </div>
        )}

        {/* ===================================================================
            SAFETY & INFRASTRUCTURE STANDARDS BANNER
            =================================================================== */}
        <section className="rounded-3xl bg-[#0A1931] text-white p-8 sm:p-12 border-2 border-[#F59E0B]/40 shadow-2xl relative overflow-hidden">
          <div className="absolute -top-24 -right-24 size-72 bg-[#F59E0B]/15 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FEF3C7]/15 border border-[#F59E0B]/50 text-[#FBBF24] text-xs font-mono font-bold uppercase tracking-wider">
                <ShieldCheck className="size-3.5 text-[#F59E0B]" />
                <span>Standardized Academy Infrastructure</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase leading-tight text-white">
                World-Class Safety &amp; Training Standards
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Every single D.R.S.A center follows strict athlete-first protocols. From protective gear checks to calibrated sprint timers, your child trains in a professional sports environment.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs space-y-2">
                <div className="size-10 rounded-xl bg-[#F59E0B]/20 border border-[#F59E0B] flex items-center justify-center text-[#FBBF24]">
                  <ShieldCheck className="size-5" />
                </div>
                <h4 className="font-serif text-base font-bold uppercase text-white">Enclosed Perimeter Safety</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Certified safety railings, impact barrier cushions, and smooth non-skid polyurethane surfaces.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs space-y-2">
                <div className="size-10 rounded-xl bg-[#F59E0B]/20 border border-[#F59E0B] flex items-center justify-center text-[#FBBF24]">
                  <Clock className="size-5" />
                </div>
                <h4 className="font-serif text-base font-bold uppercase text-white">Dedicated Batch Timings</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Morning 6:00 AM – 8:30 AM &amp; Evening 5:00 PM – 8:30 PM segregated by beginner, intermediate, and speed racers.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs space-y-2">
                <div className="size-10 rounded-xl bg-[#F59E0B]/20 border border-[#F59E0B] flex items-center justify-center text-[#FBBF24]">
                  <Medal className="size-5" />
                </div>
                <h4 className="font-serif text-base font-bold uppercase text-white">1:8 Coach Ratio</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Personalized attention ensuring correct knee-bend, crossover technique, and sprint acceleration posture.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs space-y-2">
                <div className="size-10 rounded-xl bg-[#F59E0B]/20 border border-[#F59E0B] flex items-center justify-center text-[#FBBF24]">
                  <CheckCircle2 className="size-5" />
                </div>
                <h4 className="font-serif text-base font-bold uppercase text-white">On-Court First Aid</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Certified staff with full first-aid kits and emergency protocol compliance across every location.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            CALL TO ACTION: FINAL BLUE CARD ON WHITE BACKGROUND (MATCHES HOME)
            =================================================================== */}
        <section
          id="facilities-cta"
          className="pt-8"
        >
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
        </section>

      </div>



    </main>
  );
}

// ===========================================================================
// SUBCOMPONENT: BENTO CARD WITH DESIGNER HALF-CIRCLE / ARCH IMAGE HOLDER
// ===========================================================================
function CenterBentoCard({ center }) {
  return (
    <div
      className="group relative flex flex-col justify-between bg-white border border-slate-200 hover:border-[#F59E0B] transition-all duration-300 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1"
    >
      {/* Top Accent Strip */}
      <div className="h-1.5 w-full bg-slate-200 group-hover:bg-[#F59E0B] transition-colors" />

      <div className="p-6 sm:p-7 space-y-6 flex-1 flex flex-col justify-between">
        
        {/* DESIGNER SCULPTED IMAGE PORTAL (HALF-CIRCLE / ARCH DESIGN) */}
        <div className="space-y-4">
          <div className="relative mx-auto w-full aspect-[4/3] max-h-[260px] overflow-hidden rounded-t-[100px] rounded-b-2xl bg-[#0A1931] border-2 border-[#F59E0B]/50 shadow-inner group-hover:border-[#F59E0B] group-hover:shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-all duration-500">
            
            {/* High-res Image with hover zoom */}
            <Image
              src={center.image}
              alt={center.name}
              fill
              className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out brightness-95 group-hover:brightness-105"
            />

            {/* Subtle Gradient Scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

            {/* Decorative Arch Contour Ring */}
            <div className="absolute inset-1 rounded-t-[96px] rounded-b-xl border border-white/25 pointer-events-none" />

            {/* Center Legacy Badge Floating on Top Arch */}
            <div className="absolute top-3.5 inset-x-0 flex justify-center z-10 pointer-events-none">
              <span className="text-[10px] sm:text-xs font-mono font-bold bg-[#0A1931]/95 text-[#FBBF24] border border-[#F59E0B] px-3.5 py-1 rounded-full shadow-lg uppercase tracking-wider backdrop-blur-md">
                {center.badge}
              </span>
            </div>

            {/* Bottom Tagline on Scrim */}
            <div className="absolute bottom-2.5 inset-x-3 text-center pointer-events-none z-10">
              <span className="text-[11px] font-mono text-[#FBBF24] font-semibold tracking-wide drop-shadow-md line-clamp-1">
                {center.tagline}
              </span>
            </div>
          </div>

          {/* Title & Zone Header */}
          <div className="space-y-1">
            <div className="flex items-center justify-between text-xs font-mono font-semibold text-[#D97706]">
              <span className="inline-flex items-center gap-1">
                <MapPin className="size-3.5 text-[#D97706]" />
                {center.zoneLabel}
              </span>
              <span className="text-slate-400 uppercase tracking-wider">{center.zone}</span>
            </div>
            
            <h3 className="font-serif text-xl sm:text-2xl font-extrabold uppercase text-[#0A1931] tracking-tight group-hover:text-[#D97706] transition-colors leading-tight">
              {center.name}
            </h3>
          </div>

          {/* Location Description */}
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans line-clamp-2">
            {center.fullAddress}
          </p>

          {/* Key Specs Breakdown */}
          <div className="space-y-2 pt-3 border-t border-slate-100 text-xs font-sans">
            <div className="flex items-start gap-2 text-slate-700">
              <Clock className="size-3.5 text-[#D97706] shrink-0 mt-0.5" />
              <span><strong>Batches:</strong> {center.timings}</span>
            </div>
            <div className="flex items-start gap-2 text-slate-700">
              <Layers className="size-3.5 text-[#D97706] shrink-0 mt-0.5" />
              <span><strong>Surface:</strong> {center.surface}</span>
            </div>
          </div>
        </div>

        {/* Card Footer: Action Links */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
          <Link
            href="/contact"
            className="text-xs font-mono font-bold uppercase tracking-wider text-[#0A1931] hover:text-[#D97706] transition-colors inline-flex items-center gap-1"
          >
            <span>Inquire Batch</span>
            <ChevronRight className="size-3.5 text-[#D97706]" />
          </Link>

          <a
            href={center.mapUrl}
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
  );
}
