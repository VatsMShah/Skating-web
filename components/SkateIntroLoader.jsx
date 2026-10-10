"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function SkateIntroLoader() {
  // Starts true immediately so hero never flashes
  const [shouldShow, setShouldShow] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Lock body scroll during intro
    document.body.style.overflow = "hidden";

    // Total journey time: ~4.5s glide + smooth fade out (5.0s total)
    const exitTimer = setTimeout(() => {
      setIsExiting(true);

      setTimeout(() => {
        setShouldShow(false);
        document.body.style.overflow = "";
      }, 500);
    }, 4500);

    return () => {
      clearTimeout(exitTimer);
      document.body.style.overflow = "";
    };
  }, []);

  if (!shouldShow) return null;

  return (
    <div
      role="dialog"
      aria-label="Loading"
      className={`fixed inset-0 z-[999999] flex items-center justify-center bg-[#070F1E] select-none overflow-hidden transition-opacity duration-600 ease-out will-change-opacity ${
        isExiting ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Background Ambient Floor Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85vw] h-[320px] bg-gradient-to-r from-transparent via-[#F59E0B]/12 to-transparent rounded-full blur-[110px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#2563EB]/10 rounded-full blur-[130px]" />
      </div>

      {/* Dynamic Golden Skating Floor Track - Perfectly straight horizon */}
      <div className="absolute top-1/2 inset-x-0 -translate-y-[-52px] sm:-translate-y-[-67px] md:-translate-y-[-82px] h-[2px] bg-gradient-to-r from-transparent via-[#F59E0B]/60 to-transparent pointer-events-none shadow-[0_0_25px_#F59E0B]" />

      {/* Golden Skate Container with Pure Straight-Line Hardware-Accelerated Motion */}
      <div className="absolute inset-0 pointer-events-none flex items-center">
        <div className="skate-track-stage w-full h-full relative flex items-center">
          
          <div className="skate-hero-chariot">
            
            {/* Floor Contact Glow */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-52 h-4 bg-[#F59E0B]/40 rounded-full blur-sm" />

            {/* Glowing Golden Wake Trail extending behind wheels */}
            <div className="skate-trail-glow" />

            {/* Complete Skate Assembly */}
            <div className="relative w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 filter drop-shadow-[0_12px_30px_rgba(245,158,11,0.6)]">
              
              {/* Boot & Chassis Frame */}
              <Image
                src="/images/gold-boot-body.png"
                alt="Golden Roller Skate Boot"
                fill
                sizes="(max-width: 768px) 224px, 256px"
                className="object-contain select-none pointer-events-none relative z-10"
                priority
              />

              {/* Front Wheel (Continuously spinning around axle) */}
              <div
                className="absolute z-20 animate-wheel-roll"
                style={{
                  left: "59.3%",
                  top: "71.0%",
                  width: "22%",
                  height: "22%",
                }}
              >
                <Image
                  src="/images/gold-wheel.png"
                  alt="Front Spinning Wheel"
                  fill
                  sizes="64px"
                  className="object-contain"
                  priority
                />
              </div>

              {/* Rear Wheel (Continuously spinning around axle) */}
              <div
                className="absolute z-20 animate-wheel-roll"
                style={{
                  left: "10.9%",
                  top: "70.8%",
                  width: "22%",
                  height: "22%",
                }}
              >
                <Image
                  src="/images/gold-wheel.png"
                  alt="Rear Spinning Wheel"
                  fill
                  sizes="64px"
                  className="object-contain"
                  priority
                />
              </div>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
