"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  ShoppingBag,
  ShieldCheck,
  ChevronRight,
  Phone,
  Mail,
  ArrowRight,
  Search,
  CheckCircle2,
  Trophy,
  Flame,
  Layers,
  Award,
  Zap,
  HelpCircle,
  Clock,
  Compass,
} from "lucide-react";

export const PRODUCTS_CATALOGUE = [
  // =========================================================================
  // CATEGORY 1: STARTER KITS & SAFETY ESSENTIALS
  // =========================================================================
  {
    id: "basic-adjustable-skates",
    name: "Adjustable Quad Starter Skates",
    category: "starter",
    categoryLabel: "Starter Skates",
    badge: "👶 STARTER KIT (AGES 4-8)",
    badgeColor: "bg-amber-500/15 text-[#FBBF24] border-[#F59E0B]/60",
    image: "/images/basic-adjustable-skates.png",
    subtitle: "Size-expandable quad skates with high-impact polymer chassis",
    description:
      "Engineered specifically for beginners taking their first strides. The multi-size expandable chassis grows with your child, featuring smooth-rolling 58mm PU wheels and dual safety buckles.",
    specs: [
      { label: "Chassis", value: "Multi-size Expandable Polymer Frame" },
      { label: "Wheels", value: "58mm High-Rebound 82A Polyurethane" },
      { label: "Bearings", value: "ABEC-5 Smooth Rolling" },
      { label: "Brakes", value: "Front Replaceable Toe-Stop Plugs" },
    ],
    highlights: ["Expands across 4 shoe sizes", "Double safety buckle + lace lock", "Official D.R.S.A beginner stock"],
    idealFor: "Beginners (Ages 4–8) mastering balance, stride, and safe stops",
  },
  {
    id: "basic-safety-gear",
    name: "Complete 6-Piece Safety Pack",
    category: "starter",
    categoryLabel: "Protective Gear",
    badge: "🛡️ MANDATORY SAFETY GEAR",
    badgeColor: "bg-emerald-500/15 text-emerald-400 border-emerald-500/60",
    image: "/images/basic-safety-gear.png",
    subtitle: "Heavy-duty EVA padded knee, elbow & wrist splint guards",
    description:
      "Comprehensive impact protection required for all academy training sessions. Ergonomic hard PE outer caps over thick shock-absorbing EVA foam with breathable mesh sleeves and dual Velcro straps.",
    specs: [
      { label: "Coverage", value: "2x Knee, 2x Elbow, 2x Wrist Guards" },
      { label: "Materials", value: "Hard PE Impact Shell + High-Density EVA" },
      { label: "Straps", value: "Elastic Sleeve + Double Velcro Lock" },
      { label: "Ventilation", value: "Anti-sweat Breathable Mesh Lining" },
    ],
    highlights: ["Rigid palm & wrist splint", "High-impact fall absorption", "Comfortable all-session fit"],
    idealFor: "All skaters — Mandatory for daily track and rink sessions",
  },
  {
    id: "hard-helmets",
    name: "Hard Shell Aerodynamic Helmet",
    category: "starter",
    categoryLabel: "Head Protection",
    badge: "⛑️ IMPACT CERTIFIED",
    badgeColor: "bg-blue-500/15 text-blue-400 border-blue-500/60",
    image: "/images/hard-helmets.jpg",
    subtitle: "Lightweight ventilated helmet with dial-fit micro adjustment",
    description:
      "High-density ABS outer shell paired with a shock-dispersing EPS core liner. Features 11 aerodynamic cooling air channels and a 360-degree rear dial adjustment knob for a snug, secure fit.",
    specs: [
      { label: "Shell", value: "High-Density Lightweight ABS Outer Shell" },
      { label: "Core", value: "Shock-Absorbing EPS Foam Liner" },
      { label: "Adjustment", value: "360° Rear Dial-Fit Micro Knob" },
      { label: "Airflow", value: "11 Aerodynamic Cooling Vents" },
    ],
    highlights: ["Dial-fit sizing knob", "Washable moisture-wicking pads", "Certified sports impact rating"],
    idealFor: "All skaters — Essential head protection for quads and inlines",
  },

  // =========================================================================
  // CATEGORY 2: COMPETITION SPEED SKATES
  // =========================================================================
  {
    id: "professional-speed-inline-skates",
    name: "Professional Carbon Speed Inlines",
    category: "speed",
    categoryLabel: "Speed Inlines",
    badge: "🥇 NATIONAL SQUAD SPEC",
    badgeColor: "bg-amber-500/20 text-[#FBBF24] border-[#F59E0B]",
    image: "/images/professional-speed-inline-skates.png",
    subtitle: "Heat-moldable 100% carbon-fiber racing boots with CNC extruded frames",
    description:
      "The flagship racing skate trusted by D.R.S.A state and national medalists. Low-cut carbon shell provides uncompromised power transfer, mounted on 7075-T6 CNC aluminum frames with 110mm speed wheels.",
    specs: [
      { label: "Boot", value: "100% Carbon Fiber Low-Cut Heat-Moldable" },
      { label: "Frame", value: "7075-T6 CNC Extruded Aluminum (3x110 / 4x100)" },
      { label: "Wheels", value: "100mm / 110mm 86A Dual-Durometer PU" },
      { label: "Bearings", value: "Swiss Ceramic / ABEC-9 Race Bearings" },
    ],
    highlights: ["Custom heat-moldable fit", "Ultra-low center of gravity", "Maximum sprint acceleration"],
    idealFor: "District, State, and National Speed Championship competitors",
  },
  {
    id: "speed-quad-skates",
    name: "Custom Leather Speed Quads",
    category: "speed",
    categoryLabel: "Speed Quads",
    badge: "⚡ SPEED QUAD SPRINT",
    badgeColor: "bg-orange-500/15 text-orange-400 border-orange-500/60",
    image: "/images/speed-quad-skates.png",
    subtitle: "Low-cut genuine leather speed boots on lightweight racing alloy plates",
    description:
      "Handcrafted for agility, high-velocity straightaways, and precision cornering. Features low-cut leather uppers for maximum ankle freedom, mounted on micro-adjustable aluminum plates.",
    specs: [
      { label: "Boot", value: "Genuine Leather Low-Cut Racing Profile" },
      { label: "Plate", value: "Aircraft Aluminum Alloy with Micro Trucks" },
      { label: "Wheels", value: "62mm High-Rebound Aluminum Hub Speed Wheels" },
      { label: "Bearings", value: "ABEC-9 Precision Chrome Bearings" },
    ],
    highlights: ["Maximum ankle flexibility", "Ultra-fast cornering grip", "Adjustable sprint toe-stop"],
    idealFor: "Quad speed racing, track sprints, and slalom agility competitions",
  },
  {
    id: "recreational-inline-skates",
    name: "Semi-Speed Fitness Inlines",
    category: "speed",
    categoryLabel: "Fitness Inlines",
    badge: "🚀 INTERMEDIATE STEP-UP",
    badgeColor: "bg-cyan-500/15 text-cyan-400 border-cyan-500/60",
    image: "/images/recreational-inline-skates.png",
    subtitle: "Supportive composite ankle cuff with high-speed aluminum frame",
    description:
      "The perfect transition skate for intermediate skaters advancing from quads to inline racing. Combines firm lateral ankle support with 84mm-90mm speed wheels on an extruded aluminum chassis.",
    specs: [
      { label: "Cuff", value: "Reinforced Lateral Support Composite Cuff" },
      { label: "Frame", value: "Monocoque Aircraft Aluminum Frame" },
      { label: "Wheels", value: "84mm – 90mm 85A High-Elasticity Wheels" },
      { label: "Bearings", value: "ABEC-7 / ABEC-9 Smooth Spin Bearings" },
    ],
    highlights: ["Confidence-building ankle support", "Fast 90mm wheel setup", "Breathable comfort liner"],
    idealFor: "Intermediate skaters transitioning to inline speed & fitness cruising",
  },

  // =========================================================================
  // CATEGORY 3: OFFICIAL TEAM WEAR & GEAR BAGS
  // =========================================================================
  {
    id: "club-bodysuits",
    name: "D.R.S.A Official Race Skinsuit",
    category: "apparel",
    categoryLabel: "Team Apparel",
    badge: "👕 OFFICIAL CLUB UNIFORM",
    badgeColor: "bg-purple-500/15 text-purple-400 border-purple-500/60",
    image: "/images/club-bodysuits.jpg",
    subtitle: "Aerodynamic Italian Lycra skinsuit with breathable compression panels",
    description:
      "The official competition suit worn by D.R.S.A athletes on podiums across India. Laser-cut Italian speed Lycra with flatlock anti-chafing seams and breathable underarm mesh in our champion Navy & Gold colors.",
    specs: [
      { label: "Fabric", value: "80% Italian Polyamide + 20% Elastane Lycra" },
      { label: "Stitching", value: "Ergonomic Flatlock Anti-Chafing Seams" },
      { label: "Ventilation", value: "Aerodynamic Mesh Underarm & Side Panels" },
      { label: "Sizing", value: "Ages 4 to Adults (Youth to Adult XXL)" },
    ],
    highlights: ["Wind-tunnel tested aerodynamic cut", "Official D.R.S.A Navy & Gold livery", "UV 50+ sun protection"],
    idealFor: "Academy athletes representing D.R.S.A in district, state & national races",
  },
  {
    id: "skate-bags",
    name: "Heavy-Duty Skate Gear Backpack",
    category: "apparel",
    categoryLabel: "Gear Bags",
    badge: "🎒 TRAVEL & RINK GEAR",
    badgeColor: "bg-indigo-500/15 text-indigo-400 border-indigo-500/60",
    image: "/images/skate-bags.jpg",
    subtitle: "Waterproof Cordura bag with dual ventilated skate holders",
    description:
      "Purpose-built for skaters traveling between rinks and competitions. Features dedicated external ventilated side holders for inlines or quads, a central gear compartment for helmets, and padded shoulder straps.",
    specs: [
      { label: "Fabric", value: "Waterproof 600D Heavy-Duty Cordura Nylon" },
      { label: "Holders", value: "Dual External Ventilated Skate Slots" },
      { label: "Storage", value: "Helmet, Pads, Skinsuit & Spare Parts Pockets" },
      { label: "Harness", value: "Padded Ergonomic Shoulder Straps + Chest Lock" },
    ],
    highlights: ["Fits both quad and inline skates", "Moisture-draining ventilation", "Reinforced heavy-duty zippers"],
    idealFor: "Daily academy commute and outstation championship travel",
  },

  // =========================================================================
  // CATEGORY 4: HARDWARE, WHEELS & BEARINGS
  // =========================================================================
  {
    id: "wheels-bearings-and-spare-parts",
    name: "Racing Wheels & Swiss Bearings Kit",
    category: "hardware",
    categoryLabel: "Hardware & Spares",
    badge: "⚙️ PRECISION TUNING",
    badgeColor: "bg-yellow-500/15 text-yellow-400 border-yellow-500/60",
    image: "/images/wheels-bearings-and-spare-parts.jpg",
    subtitle: "High-rebound racing wheels, Swiss ceramic bearings & replacement hardware",
    description:
      "Curated replacement and tuning kits to keep your skates rolling at peak velocity. High-rebound dual-durometer urethane speed wheels, ultra-fast Swiss ceramic bearings, precision spacers, and axle bolts.",
    specs: [
      { label: "Wheels", value: "90mm / 100mm / 110mm High-Rebound PU (85A–88A)" },
      { label: "Bearings", value: "Swiss Ceramic & ABEC-9 Precision Chrome" },
      { label: "Hardware", value: "8mm Racing Axle Bolts + Aluminum Spacers" },
      { label: "Shields", value: "Removable Low-Friction Rubber Dust Seals" },
    ],
    highlights: ["Zero-friction smooth spin", "High-grip cornering traction", "Complete maintenance kit"],
    idealFor: "Routine race maintenance, wheel upgrades, and high-speed tuning",
  },
];

const FILTER_TABS = [
  { id: "all", label: "All Equipment", count: 9, icon: ShoppingBag },
  { id: "starter", label: "Starter & Safety", count: 3, icon: ShieldCheck },
  { id: "speed", label: "Speed Skates", count: 3, icon: Zap },
  { id: "apparel", label: "Team Apparel & Bags", count: 2, icon: Award },
  { id: "hardware", label: "Wheels & Hardware", count: 1, icon: Layers },
];

export default function MerchandisePage() {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Filter products based on active tab and search query
  const filteredProducts = useMemo(() => {
    return PRODUCTS_CATALOGUE.filter((item) => {
      const matchesTab = activeTab === "all" || item.category === activeTab;
      const matchesSearch =
        searchQuery === "" ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesTab && matchesSearch;
    });
  }, [activeTab, searchQuery]);

  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#0F172A]">
      
      {/* =====================================================================
          HERO SECTION: ACTION BG + DECORATIVE SQUARE FRAME + BREADCRUMBS
          ===================================================================== */}
      <section className="relative w-full overflow-hidden bg-[#0A1931] text-white pt-32 pb-20 md:pt-40 md:pb-28 border-b border-slate-800">
        
        {/* Background Action Image with Navy Gradient Overlays */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/gallery/2025-10-18.jpg"
            alt="Dehiya Roller Skating Academy Skaters with Quad & Inline Gear"
            fill
            className="size-full object-cover object-[center_60%] opacity-55 brightness-90 contrast-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A1931]/85 via-[#0A1931]/65 to-[#0A1931]/95" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1931]/80 via-transparent to-[#0A1931]/80" />
        </div>

        {/* Ambient background glows */}
        <div className="absolute top-0 right-1/4 size-[500px] bg-[#F59E0B]/12 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 size-[450px] bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

        {/* Decorative Gold Framing Square Accents (Matching Home, About Us, Training Centers) */}
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
            <span className="text-[#FBBF24] font-semibold">Products</span>
          </nav>

          {/* Gold Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#FEF3C7]/15 border border-[#F59E0B]/60 text-[#FBBF24] text-xs font-mono font-bold uppercase tracking-widest shadow-lg backdrop-blur-md mb-6">
            <ShoppingBag className="size-4 text-[#F59E0B]" />
            <span>Coach-Curated Skating Equipment &amp; Gear</span>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight text-white leading-tight text-balance">
              Official Gear &amp; <span className="text-[#FBBF24] underline decoration-[#F59E0B]/50 decoration-4 underline-offset-8">Pro Equipment</span>
            </h1>

            <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto font-sans leading-relaxed">
              Certified protective gear, race-spec inline and quad skates, speed wheels, and official D.R.S.A team uniforms — tested and approved by Head Coaches <strong>Mr. Rajinder Singh Dehiya</strong> and <strong>Mr. Navjeet Singh Dehiya</strong>.
            </p>

            {/* Instant Equipment Search Bar */}
            <div className="pt-4 max-w-xl mx-auto w-full">
              <div className="relative flex items-center">
                <Search className="absolute left-4 size-5 text-[#F59E0B]" />
                <input
                  type="text"
                  placeholder="Search gear (e.g. Carbon Inlines, Safety Pack, Helmets...)"
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

            {/* Quick stats ribbon (Matching About Us and Facilities) */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto w-full">
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs text-center">
                <span className="block font-serif text-2xl sm:text-3xl font-black text-[#FBBF24]">100%</span>
                <span className="text-[11px] font-mono uppercase text-slate-300 tracking-wider">Coach Verified</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs text-center">
                <span className="block font-serif text-xl sm:text-2xl font-black text-[#FBBF24]">4 to Adults</span>
                <span className="text-[11px] font-mono uppercase text-slate-300 tracking-wider">All Age Groups</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs text-center">
                <span className="block font-serif text-2xl sm:text-3xl font-black text-[#FBBF24]">9+</span>
                <span className="text-[11px] font-mono uppercase text-slate-300 tracking-wider">Pro Equipment</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs text-center">
                <span className="block font-serif text-2xl sm:text-3xl font-black text-[#FBBF24]">Rink</span>
                <span className="text-[11px] font-mono uppercase text-slate-300 tracking-wider">Direct Delivery</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================================
          MAIN CATALOGUE SECTION WITH FILTER TABS
          ===================================================================== */}
      <section className="py-8 sm:py-12 md:py-16">
        <div className="container mx-auto max-w-[1320px] px-4 sm:px-6 md:px-8 lg:px-12 space-y-8 sm:space-y-10">
          
          {/* -----------------------------------------------------------------
              FILTER TABS CAPSULE BAR
              ----------------------------------------------------------------- */}
          <div className="flex flex-col items-center gap-3">
            <div className="flex items-center justify-start sm:justify-center gap-1.5 sm:gap-2 p-1.5 rounded-2xl sm:rounded-full bg-slate-200/80 border border-slate-300/80 shadow-xs max-w-full overflow-x-auto no-scrollbar">
              {FILTER_TABS.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-xl sm:rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all duration-200 shrink-0 cursor-pointer ${
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

            {/* Results counter */}
            <p className="text-[11px] sm:text-xs font-mono text-slate-500">
              Showing {filteredProducts.length} of {PRODUCTS_CATALOGUE.length} official items
            </p>
          </div>

          {/* -----------------------------------------------------------------
              PRODUCT CARDS GRID (COMPACT & BALANCED ACROSS ALL SCREENS)
              ----------------------------------------------------------------- */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="group relative flex flex-col justify-between bg-white border border-slate-200 hover:border-[#F59E0B] transition-all duration-300 rounded-2xl overflow-hidden shadow-xs hover:shadow-xl hover:-translate-y-1"
                >
                  {/* Top Accent Strip */}
                  <div className="h-1 w-full bg-slate-100 group-hover:bg-[#F59E0B] transition-colors" />

                  <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-4">
                    
                    <div className="space-y-3">
                      {/* Compact Product Image Window with Smooth Hover Zoom */}
                      <div className="relative mx-auto w-full h-44 sm:h-48 rounded-xl bg-gradient-to-b from-slate-50 to-slate-100/60 border border-slate-100 flex items-center justify-center p-3 overflow-hidden group-hover:border-[#F59E0B]/30 transition-colors">
                        
                        {/* Floating Top Category Badge */}
                        <div className="absolute top-2.5 inset-x-2.5 flex items-center justify-between z-10 pointer-events-none">
                          <span className={`text-[9px] sm:text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full border shadow-xs uppercase tracking-wider backdrop-blur-md ${product.badgeColor}`}>
                            {product.badge}
                          </span>
                        </div>

                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-contain p-3 group-hover:scale-105 transition-transform duration-300 ease-out"
                        />
                      </div>

                      {/* Title & Category Label */}
                      <div className="space-y-1">
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#D97706]">
                            {product.categoryLabel}
                          </span>
                          <span className="text-[10px] font-mono text-slate-400">Official Stock</span>
                        </div>
                        <h3 className="font-serif text-base sm:text-lg font-bold uppercase text-[#0A1931] tracking-tight group-hover:text-[#D97706] transition-colors leading-snug line-clamp-1">
                          {product.name}
                        </h3>
                        <p className="text-xs text-slate-500 font-sans line-clamp-1">
                          {product.subtitle}
                        </p>
                      </div>

                      {/* Compact Specs Grid (2 Top Specs) */}
                      <div className="grid grid-cols-2 gap-1.5 py-2 border-y border-slate-100 text-[11px]">
                        {product.specs.slice(0, 2).map((spec, i) => (
                          <div key={i} className="bg-slate-50 p-2 rounded-lg border border-slate-100/80">
                            <span className="text-[9px] uppercase font-mono text-slate-400 block font-medium leading-none mb-0.5">{spec.label}</span>
                            <span className="text-[11px] font-semibold text-[#0A1931] truncate block">{spec.value}</span>
                          </div>
                        ))}
                      </div>

                      {/* Best For Highlight */}
                      <div className="flex items-center gap-1.5 text-[11px] text-slate-600">
                        <Trophy className="size-3 text-[#D97706] shrink-0" />
                        <span className="truncate"><strong>Best For:</strong> {product.idealFor}</span>
                      </div>
                    </div>

                    {/* Card Footer: Action Buttons & Navjeet Singh Direct Info */}
                    <div className="pt-2 space-y-2">
                      <div className="flex items-stretch gap-2">
                        <a
                          href={`https://wa.me/918693817112?text=${encodeURIComponent(`Hello Coach Navjeet Singh, I would like to inquire about sizing and availability for the ${product.name} from D.R.S.A.`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-[#0A1931] text-white hover:bg-[#F59E0B] hover:text-[#0A1931] text-xs sm:text-sm font-serif font-bold uppercase tracking-wider transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 text-center group/btn cursor-pointer"
                        >
                          <Phone className="size-3.5 sm:size-4 text-[#FBBF24] group-hover/btn:text-[#0A1931] shrink-0" />
                          <span>Inquire Sizing</span>
                        </a>

                        <Link
                          href="/contact"
                          aria-label="Order details and inquiries"
                          className="inline-flex items-center justify-center p-3 rounded-xl bg-slate-100 text-[#0A1931] hover:bg-[#FEF3C7] hover:text-[#0A1931] border border-slate-200 transition-all shadow-xs shrink-0"
                        >
                          <ArrowRight className="size-4 text-[#D97706]" />
                        </Link>
                      </div>

                      {/* Coach Navjeet Singh Name & Number below the Inquiry Sizing Button */}
                      <div className="flex items-center justify-between text-[11px] font-mono pt-1 px-1 border-t border-slate-100">
                        <span className="font-semibold text-slate-700">Navjeet Singh:</span>
                        <a
                          href="tel:8693817112"
                          className="text-[#D97706] hover:text-[#0A1931] font-bold hover:underline transition-colors"
                        >
                          +91 86938 17112
                        </a>
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
              <h3 className="font-serif text-lg font-bold uppercase text-[#0A1931]">No equipment found</h3>
              <p className="text-xs sm:text-sm text-slate-600">
                We couldn’t find any gear matching &ldquo;{searchQuery}&rdquo;. Try searching for &ldquo;Inlines&rdquo;, &ldquo;Helmets&rdquo;, or &ldquo;Quads&rdquo;.
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
              COACH-ASSISTED SIZING & BUYER'S GUIDE BANNER (COMPACT)
              ----------------------------------------------------------------- */}
          <section className="rounded-2xl sm:rounded-3xl bg-slate-900 text-white p-6 sm:p-10 border-2 border-[#F59E0B]/40 shadow-xl relative overflow-hidden">
            <div className="absolute -top-24 -right-24 size-72 bg-[#F59E0B]/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
              <div className="lg:col-span-5 space-y-3 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FEF3C7]/15 border border-[#F59E0B]/50 text-[#FBBF24] text-[11px] font-mono font-bold uppercase tracking-wider">
                  <HelpCircle className="size-3 text-[#F59E0B]" />
                  <span>Coach-Assisted Selection</span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-extrabold uppercase leading-tight text-white">
                  Not Sure Which Skates to Choose?
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  Avoid buying the wrong wheel durometer or boot size. Our coaches measure every student directly at the rink to recommend the exact skate geometry suited to their age, weight, and competition aspirations.
                </p>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs space-y-1.5">
                  <div className="flex items-center gap-2">
                    <div className="size-7 rounded-lg bg-[#F59E0B]/20 border border-[#F59E0B] flex items-center justify-center text-[#FBBF24] shrink-0">
                      <Trophy className="size-3.5" />
                    </div>
                    <h4 className="font-serif text-xs sm:text-sm font-bold uppercase text-white">Quad vs. Inline Selection</h4>
                  </div>
                  <p className="text-[11px] text-slate-300 leading-relaxed">
                    Starters (Ages 4-7) usually begin with 4-wheel quads for stability, transitioning to 3-wheel speed inlines around ages 7+.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs space-y-1.5">
                  <div className="flex items-center gap-2">
                    <div className="size-7 rounded-lg bg-[#F59E0B]/20 border border-[#F59E0B] flex items-center justify-center text-[#FBBF24] shrink-0">
                      <Layers className="size-3.5" />
                    </div>
                    <h4 className="font-serif text-xs sm:text-sm font-bold uppercase text-white">Wheel Diameter Guide</h4>
                  </div>
                  <p className="text-[11px] text-slate-300 leading-relaxed">
                    90mm for junior speed development, 100mm for intermediate youth racing, and 110mm for national senior sprints.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs space-y-1.5">
                  <div className="flex items-center gap-2">
                    <div className="size-7 rounded-lg bg-[#F59E0B]/20 border border-[#F59E0B] flex items-center justify-center text-[#FBBF24] shrink-0">
                      <ShieldCheck className="size-3.5" />
                    </div>
                    <h4 className="font-serif text-xs sm:text-sm font-bold uppercase text-white">Precision Boot Fit</h4>
                  </div>
                  <p className="text-[11px] text-slate-300 leading-relaxed">
                    Carbon racing boots are heat-molded to the skater&apos;s exact foot contour for 100% blister-free power transfer.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs space-y-1.5">
                  <div className="flex items-center gap-2">
                    <div className="size-7 rounded-lg bg-[#F59E0B]/20 border border-[#F59E0B] flex items-center justify-center text-[#FBBF24] shrink-0">
                      <Clock className="size-3.5" />
                    </div>
                    <h4 className="font-serif text-xs sm:text-sm font-bold uppercase text-white">Rink-Side Delivery</h4>
                  </div>
                  <p className="text-[11px] text-slate-300 leading-relaxed">
                    Equipment is assembled, precision-aligned, and handed over directly during your child&apos;s regular training session.
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
        id="merchandise-cta"
        className="py-20 md:py-28 bg-white border-t border-slate-200"
      >
        <div className="mx-auto max-w-[1320px] px-6 md:px-8 lg:px-12">
          <div className="relative rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#0A1931] via-[#0E2954] to-[#1E3A8A] text-white p-6 sm:p-10 md:p-14 shadow-2xl overflow-hidden text-center max-w-4xl mx-auto border border-[#F59E0B]/30">
            {/* Decorative Top Accent Bar */}
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#F59E0B] via-[#FBBF24] to-transparent" />

            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-[#F59E0B]/40 text-[#FBBF24] text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-xs">
              <Sparkles className="size-3.5 text-[#F59E0B]" />
              <span>Get Sized &amp; Geared Up</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-white leading-tight">
              Ready to Order Official D.R.S.A Equipment?
            </h2>

            <p className="mt-6 text-base sm:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed">
              Connect directly with Head Coaches <strong className="text-[#FBBF24]">Mr. Rajinder Singh Dehiya</strong> and <strong className="text-[#FBBF24]">Mr. Navjeet Singh Dehiya</strong> for personalized skate sizing, skin suit fittings, and recommendations.
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
                <span>Send Equipment Inquiry</span>
                <ArrowRight className="size-4 sm:size-5 text-[#0A1931] shrink-0" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
