"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Camera } from "lucide-react";

// List of official academy photos from the drive/gallery
const galleryPhotos = [
  {
    id: 1,
    src: "/images/gallery/unnamed-1.webp",
    title: "D.R.S.A Champions & Coaches",
    category: "Championship Team",
    desc: "State & National medal winners with Head Coaches Rajinder Singh & Navjeet Singh Dehiya",
  },
  {
    id: 2,
    src: "/images/gallery/2024-02-11-1.jpg",
    title: "State Championship Podium",
    category: "Medal Ceremony",
    desc: "Gold & Silver medalists celebrating victory on the official state podium",
  },
  {
    id: 3,
    src: "/images/gallery/2024-02-11-2.jpg",
    title: "Trophy Presentation Ceremony",
    category: "Accolades",
    desc: "Annual felicitation of top-performing speed racers across Mumbai & Thane",
  },
  {
    id: 4,
    src: "/images/gallery/2024-02-11.jpg",
    title: "Speed Inliners in Action",
    category: "Speed Racing",
    desc: "High-velocity speed skating drills on the championship racing track",
  },
  {
    id: 5,
    src: "/images/gallery/2024-08-18.jpg",
    title: "Academy Practice Drills",
    category: "Coaching Session",
    desc: "Rigorous posture conditioning and balance training at TMC Stadium center",
  },
  {
    id: 6,
    src: "/images/gallery/2025-04-08.jpg",
    title: "Quad Skating Formation",
    category: "Artistic & Quad",
    desc: "Synchronized artistic maneuvering and precision footwork coaching",
  },
  {
    id: 7,
    src: "/images/gallery/2025-05-17-1.jpg",
    title: "Youth Trophy Winners",
    category: "Junior Champions",
    desc: "Grassroots skaters winning their first district tournament medals",
  },
  {
    id: 8,
    src: "/images/gallery/2025-05-17-2.jpg",
    title: "Rink Training Session",
    category: "Weekend Batch",
    desc: "Full rink speed laps and relay drills across evening training sessions",
  },
  {
    id: 9,
    src: "/images/gallery/2025-05-17.jpg",
    title: "Coach Navjeet with Medalists",
    category: "Mentorship",
    desc: "Individual coaching guidance leading students to podium finishes",
  },
  {
    id: 10,
    src: "/images/gallery/2025-10-18.jpg",
    title: "Indoor Sprint Challenge",
    category: "Tournament Day",
    desc: "High-octane sprint heats clocking record lap split times",
  },
  {
    id: 11,
    src: "/images/gallery/2026-02-10.jpg",
    title: "State Championship Squad",
    category: "Team DRSA",
    desc: "The official D.R.S.A contingent representing Thane district",
  },
  {
    id: 12,
    src: "/images/gallery/2026-02-13.jpg",
    title: "Speed Slalom & Agility",
    category: "Advanced Skills",
    desc: "Cone slalom drills developing elite balance and quick edge control",
  },
  {
    id: 13,
    src: "/images/gallery/2026-09-28.jpg",
    title: "Annual Awards Day",
    category: "Celebration",
    desc: "Honoring outstanding student skaters and parent community",
  },
  {
    id: 14,
    src: "/images/gallery/me-and-papa.jpg",
    title: "Founders & Head Coaches",
    category: "Heritage",
    desc: "Mr. Rajinder Singh Dehiya and Mr. Navjeet Singh Dehiya — 36 years of dedication",
  },
  {
    id: 15,
    src: "/images/gallery/unnamed-2.webp",
    title: "Championship Sprint Finish",
    category: "Track Action",
    desc: "Elite inline racers crossing the finish line in championship finals",
  },
];

export default function PhotoCarousel3D() {
  const [rotation, setRotation] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [cardWidth, setCardWidth] = useState(190);
  const [cardHeight, setCardHeight] = useState(250);
  const [radius, setRadius] = useState(440);

  const containerRef = useRef(null);
  const startXRef = useRef(0);
  const dragDistanceRef = useRef(0);
  const currentRotationRef = useRef(0);
  const autoPlayRef = useRef(null);

  const totalCards = galleryPhotos.length;
  const angleStep = 360 / totalCards; // 24 degrees per card

  // Sync ref with state
  currentRotationRef.current = rotation;

  // Exact geometric chord radius so adjacent cards never collide or overlap
  useEffect(() => {
    const updateDimensions = () => {
      const w = window.innerWidth;
      let width = 190;
      let height = 250;

      if (w < 480) {
        width = 125;
        height = 170;
      } else if (w < 768) {
        width = 150;
        height = 205;
      } else if (w < 1024) {
        width = 170;
        height = 230;
      } else if (w < 1440) {
        width = 190;
        height = 250;
      } else {
        width = 205;
        height = 270;
      }

      setCardWidth(width);
      setCardHeight(height);

      // Geometric chord radius: R = (W/2) / tan(angleStep/2)
      const halfAngleRad = (angleStep / 2) * (Math.PI / 180);
      const calculatedRadius = Math.round((width / 2) / Math.tan(halfAngleRad)) + 12;
      setRadius(calculatedRadius);
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, [angleStep]);

  // Smooth Auto-Play Continuous Rotation
  useEffect(() => {
    if (isDragging) {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
      return;
    }

    autoPlayRef.current = setInterval(() => {
      setRotation((prev) => prev - angleStep);
    }, 3200);

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isDragging, angleStep]);

  // Touch / Pointer Drag Handlers
  const handlePointerDown = (e) => {
    setIsDragging(true);
    dragDistanceRef.current = 0;
    startXRef.current = e.clientX || (e.touches && e.touches[0].clientX) || 0;
  };

  const handlePointerMove = (e) => {
    if (!isDragging) return;
    const clientX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
    const deltaX = clientX - startXRef.current;
    dragDistanceRef.current += Math.abs(deltaX);

    // Smooth drag sensitivity
    const sensitivity = 0.28;
    setRotation(currentRotationRef.current + deltaX * sensitivity);
    startXRef.current = clientX;
  };

  const handlePointerUp = () => {
    if (!isDragging) return;
    setIsDragging(false);

    // Snap to nearest card angle
    setRotation((prev) => {
      const nearestStep = Math.round(prev / angleStep);
      return nearestStep * angleStep;
    });
  };

  // Click on a card to rotate it directly to the front (no popup!)
  const handleCardClick = (index) => {
    // If user dragged more than 8px, ignore click
    if (dragDistanceRef.current > 8) return;

    const cardAngle = index * angleStep;
    const currentAngle = currentRotationRef.current;
    const targetOffset = -cardAngle;
    
    // Find closest rotation angle equivalent
    const diff = ((targetOffset - currentAngle) % 360 + 540) % 360 - 180;
    setRotation(currentAngle + diff);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") {
        setRotation((prev) => prev + angleStep);
      }
      if (e.key === "ArrowRight") {
        setRotation((prev) => prev - angleStep);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [angleStep]);

  return (
    <section
      id="photo-gallery"
      className="relative py-14 md:py-20 bg-[#0A1931] text-white overflow-hidden border-t border-slate-800 select-none"
    >
      {/* Dynamic Background Ambient Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#F59E0B]/10 rounded-full blur-[130px]" />
        <div className="absolute -bottom-20 -left-20 w-[350px] h-[350px] bg-blue-600/10 rounded-full blur-[110px]" />
        <div className="absolute -bottom-20 -right-20 w-[350px] h-[350px] bg-[#FBBF24]/10 rounded-full blur-[110px]" />
      </div>

      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-[#F59E0B]/50 backdrop-blur-md text-[#FBBF24] text-xs font-mono font-bold uppercase tracking-widest shadow-sm mb-3">
            <Camera className="size-3.5 text-[#F59E0B]" />
            <span>Academy Highlights &amp; Accolades</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-white leading-tight">
            Moments of Passion &amp; <span className="text-[#FBBF24]">Excellence</span>
          </h2>

          <p className="mt-3 text-xs sm:text-sm md:text-base text-slate-300 font-sans max-w-xl leading-relaxed">
            State championship podiums, intensive training sessions, and celebratory medal ceremonies across our 7 training centers in Mumbai and Thane.
          </p>
        </div>

        {/* 3D Cylindrical Carousel Viewport Container */}
        <div
          ref={containerRef}
          className="relative w-full h-[290px] sm:h-[330px] md:h-[360px] flex items-center justify-center cursor-grab active:cursor-grabbing"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerUp}
          style={{ perspective: "1500px" }}
        >
          {/* Ground Level Neon Ring Reflection */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] sm:w-[580px] h-[140px] sm:h-[180px] bg-gradient-to-r from-transparent via-[#F59E0B]/15 to-transparent rounded-full blur-2xl pointer-events-none" />

          {/* Rotating 3D Cylinder */}
          <div
            className="relative size-full flex items-center justify-center transition-transform"
            style={{
              transformStyle: "preserve-3d",
              transform: `rotateY(${rotation}deg)`,
              transition: isDragging ? "none" : "transform 0.65s cubic-bezier(0.2, 0.8, 0.2, 1)",
            }}
          >
            {galleryPhotos.map((photo, i) => {
              const cardAngle = i * angleStep;
              // Angle relative to camera front: -180 to +180 deg
              const facingAngle = (((cardAngle + rotation) % 360) + 540) % 360 - 180;
              const absAngle = Math.abs(facingAngle);

              // Hide cards on the back half of the cylinder (prevents all ghost strips / bleed-through)
              if (absAngle > 88) {
                return null;
              }

              const isFront = absAngle < angleStep / 2;
              // Smooth opacity curve from center to edges
              const cardOpacity = Math.max(0.25, 1 - Math.pow(absAngle / 90, 1.8));
              const zIndex = Math.round(100 - absAngle);

              return (
                <div
                  key={photo.id}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCardClick(i);
                  }}
                  className={`absolute rounded-xl overflow-hidden border transition-all duration-300 group cursor-pointer bg-[#0A1931] ${
                    isFront
                      ? "border-[#F59E0B] shadow-[0_0_25px_rgba(245,158,11,0.5)] ring-2 ring-[#FBBF24]/60 scale-102"
                      : "border-white/20 hover:border-[#F59E0B]/80 shadow-md scale-95"
                  }`}
                  style={{
                    width: `${cardWidth}px`,
                    height: `${cardHeight}px`,
                    transform: `rotateY(${cardAngle}deg) translateZ(${radius}px)`,
                    opacity: cardOpacity,
                    zIndex: zIndex,
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                  }}
                >
                  {/* Photo Container */}
                  <div className="relative size-full bg-[#0A1931]">
                    <Image
                      src={photo.src}
                      alt={photo.title}
                      fill
                      sizes="(max-width: 640px) 140px, 220px"
                      className="size-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      priority={i < 4}
                      loading={i < 4 ? "eager" : "lazy"}
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1931] via-[#0A1931]/15 to-transparent" />

                    {/* Top Tag */}
                    <div className="absolute top-2 left-2 right-2 flex items-center justify-between">
                      <span className="px-2 py-0.5 rounded-full bg-[#0A1931]/90 backdrop-blur-md border border-white/20 text-[#FBBF24] text-[9px] font-mono font-bold uppercase tracking-wider">
                        {photo.category}
                      </span>
                    </div>

                    {/* Bottom Caption */}
                    <div className="absolute bottom-0 inset-x-0 p-2.5 bg-gradient-to-t from-[#0A1931] to-transparent">
                      <h3 className="font-serif text-[11px] sm:text-xs font-bold uppercase text-white leading-tight drop-shadow-md truncate">
                        {photo.title}
                      </h3>
                      <p className="text-[9px] sm:text-[10px] text-slate-300 mt-0.5 line-clamp-1 leading-normal">
                        {photo.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
