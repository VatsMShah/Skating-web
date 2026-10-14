"use client";

import Image from "next/image";
import { useState, useEffect, useRef, useCallback } from "react";
import {
  Video,
  ChevronLeft,
  ChevronRight,
  Play,
  Maximize2,
} from "lucide-react";

export const ACADEMY_VIDEOS = [
  {
    id: "champion",
    src: "/videos/champion.mp4",
    poster: "/images/gallery/2026-09-28.jpg",
    badge: "🥇 1. CHAMPIONSHIP GLORY",
    title: "National Champions & Medalists",
    description: "Podium finishes & elite speed milestones from our gold-winning academy skaters.",
  },
  {
    id: "creates-champions",
    src: "/videos/creates-champions.mp4",
    poster: "/images/unnamed-1.webp",
    badge: "⚡ 2. RACE SPEED & POWER",
    title: "Creates Champions — Speed Racing",
    description: "High-velocity straightaways, crossover mastery, and track dominance at full speed.",
  },
  {
    id: "psis-curriculum",
    src: "/videos/psis-curriculum.mp4",
    poster: "/images/gallery/2025-05-17.jpg",
    badge: "📋 3. ACADEMY DRILLS",
    title: "PSIS Academy — Form & Posture",
    description: "Systematic foundation drills, knee-bend techniques, and body balance coaching.",
  },
  {
    id: "khopoli-camp",
    src: "/videos/khopoli-camp.mp4",
    poster: "/images/gallery/2024-08-18.jpg",
    badge: "⛺ 4. TRAINING CAMP",
    title: "Khopoli Camp — Endurance Bootcamp",
    description: "Intensive stamina building, outdoor incline training, and mental endurance conditioning.",
  },
  {
    id: "sports-foundry",
    src: "/videos/sports-foundry.mp4",
    poster: "/images/gallery/2026-02-10.jpg",
    badge: "🏋️ 5. ATHLETIC FOUNDRY",
    title: "Sports Foundry — Strength & Agility",
    description: "Core strengthening, plyometrics, and athletic functional training tailored for skaters.",
  },
];

// 5 sets of 5 videos (25 items) for seamless infinite sliding with zero blank spaces
const EXTENDED_VIDEOS = [
  ...ACADEMY_VIDEOS,
  ...ACADEMY_VIDEOS,
  ...ACADEMY_VIDEOS,
  ...ACADEMY_VIDEOS,
  ...ACADEMY_VIDEOS,
];

export default function VideoGallery() {
  // Start at middle set (index 10 = video 0)
  const [currentIndex, setCurrentIndex] = useState(10);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [visibleCards, setVisibleCards] = useState(3);
  const [isHovered, setIsHovered] = useState(false);

  // Key of the video currently playing inline (e.g. "champion-10")
  const [activePlayingKey, setActivePlayingKey] = useState(null);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const videoRefs = useRef({});

  // Responsive visible cards count
  useEffect(() => {
    const handleResize = () => {
      if (typeof window === "undefined") return;
      if (window.innerWidth >= 1024) {
        setVisibleCards(3);
      } else if (window.innerWidth >= 640) {
        setVisibleCards(2);
      } else {
        setVisibleCards(1);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Stop & reset all video audio instantly (prevents overlapping music/audio completely)
  const stopAllVideos = useCallback(() => {
    Object.values(videoRefs.current).forEach((videoEl) => {
      if (videoEl) {
        try {
          videoEl.pause();
          videoEl.currentTime = 0;
        } catch (_) {}
      }
    });
    setActivePlayingKey(null);
  }, []);

  // Smooth slide navigation - stops active video so sound doesn't trail off
  const handleNext = useCallback(() => {
    stopAllVideos();
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  }, [stopAllVideos]);

  const handlePrev = useCallback(() => {
    stopAllVideos();
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  }, [stopAllVideos]);

  // Jump to specific slide relative to current set
  const jumpToSlide = (originalIndex) => {
    stopAllVideos();
    setIsTransitioning(true);
    setCurrentIndex(10 + originalIndex);
  };

  // Seamless boundary normalization on transition end
  const handleTransitionEnd = () => {
    if (currentIndex >= 15) {
      setIsTransitioning(false);
      setCurrentIndex((prev) => prev - 5);
    } else if (currentIndex < 10) {
      setIsTransitioning(false);
      setCurrentIndex((prev) => prev + 5);
    }
  };

  // Automatic slide interval - STRICTLY PAUSED while user is watching a video inline or hovering
  useEffect(() => {
    if (activePlayingKey !== null || isHovered) return;

    const interval = setInterval(() => {
      handleNext();
    }, 4500);

    return () => clearInterval(interval);
  }, [activePlayingKey, isHovered, handleNext]);

  // Touch Swipe Handlers for Mobile
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 45) {
      handleNext();
    } else if (diff < -45) {
      handlePrev();
    }
  };

  // Start inline video playback right in the card (cuts all other audio)
  const startPlayingInline = (uniqueKey) => {
    // 1. Pause and reset all other videos first
    Object.entries(videoRefs.current).forEach(([k, el]) => {
      if (k !== uniqueKey && el) {
        try {
          el.pause();
          el.currentTime = 0;
        } catch (_) {}
      }
    });

    // 2. Set this card active
    setActivePlayingKey(uniqueKey);

    // 3. Play the video immediately
    setTimeout(() => {
      const videoEl = videoRefs.current[uniqueKey];
      if (videoEl) {
        videoEl.play().catch(() => {});
      }
    }, 30);
  };

  // Fullscreen trigger helper
  const triggerFullscreen = (videoEl) => {
    if (!videoEl) return;
    try {
      if (videoEl.requestFullscreen) {
        videoEl.requestFullscreen();
      } else if (videoEl.webkitEnterFullscreen) {
        // iOS Safari native player
        videoEl.webkitEnterFullscreen();
      } else if (videoEl.webkitRequestFullscreen) {
        videoEl.webkitRequestFullscreen();
      } else if (videoEl.msRequestFullscreen) {
        videoEl.msRequestFullscreen();
      }
    } catch (err) {
      console.warn("Fullscreen request error:", err);
    }
  };

  // Handle Expand button click
  const handleExpand = (e, uniqueKey) => {
    e.stopPropagation();
    const videoEl = videoRefs.current[uniqueKey];

    if (!videoEl) {
      // If video element is not yet active, start playing and then expand
      startPlayingInline(uniqueKey);
      setTimeout(() => {
        const el = videoRefs.current[uniqueKey];
        if (el) triggerFullscreen(el);
      }, 80);
      return;
    }

    triggerFullscreen(videoEl);
  };

  // Active original video index (0-4)
  const activeOriginalIndex = ((currentIndex % 5) + 5) % 5;

  // Percentage width per card based on breakpoint
  const getCardWidthPercent = () => {
    if (visibleCards === 3) return 33.333333;
    if (visibleCards === 2) return 50;
    return 84; // 84% on mobile for elegant edge peeking
  };

  const cardWidthPercent = getCardWidthPercent();
  const mobileCenterOffset = visibleCards === 1 ? (100 - cardWidthPercent) / 2 : 0;

  return (
    <section
      id="video-showcase"
      className="py-16 md:py-24 bg-[#0A1931] text-white relative overflow-hidden border-t border-slate-800 select-none"
    >
      {/* Ambient background glows */}
      <div className="absolute top-0 right-1/4 size-96 bg-[#F59E0B]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/4 size-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 md:px-8 lg:px-12 relative z-10 space-y-10">
        
        {/* Main Showcase Section Title */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FEF3C7]/15 border border-[#F59E0B]/60 text-[#FBBF24] text-xs font-bold font-mono uppercase tracking-widest mb-3">
            <Video className="w-3.5 h-3.5 text-[#F59E0B]" aria-hidden="true" />
            <span>Official Academy Video Footage</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-white leading-tight">
            Champions in Action
          </h2>
          <div className="flex items-center justify-center my-3.5">
            <div className="h-1 w-14 bg-[#F59E0B] rounded-full shadow-[0_0_10px_rgba(245,158,11,0.8)]" />
          </div>
          <p className="mt-2 text-slate-300 text-sm sm:text-base md:text-lg font-sans leading-relaxed">
            Watch real race victories, structured curriculum drills, and conditioning camps led by our Head Coaches.
          </p>
        </div>

        {/* Sliding Window Reel Container with Floating Navigation Arrows */}
        <div
          className="relative w-full group/gallery"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Floating Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute -left-2 sm:left-2 top-1/2 -translate-y-1/2 z-30 size-11 sm:size-12 rounded-full bg-[#0A1931]/90 backdrop-blur-md border border-[#F59E0B]/70 text-white flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:bg-[#F59E0B] hover:text-[#0A1931] hover:border-[#FBBF24] hover:scale-105 transition-all cursor-pointer group"
            aria-label="Previous Video"
          >
            <ChevronLeft className="size-6 group-hover:-translate-x-0.5 transition-transform" />
          </button>

          {/* Floating Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute -right-2 sm:right-2 top-1/2 -translate-y-1/2 z-30 size-11 sm:size-12 rounded-full bg-[#0A1931]/90 backdrop-blur-md border border-[#F59E0B]/70 text-white flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:bg-[#F59E0B] hover:text-[#0A1931] hover:border-[#FBBF24] hover:scale-105 transition-all cursor-pointer group"
            aria-label="Next Video"
          >
            <ChevronRight className="size-6 group-hover:translate-x-0.5 transition-transform" />
          </button>

          {/* Reel Viewport */}
          <div
            className="relative w-full overflow-hidden py-4"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Edge fade overlays */}
            <div className="absolute left-0 inset-y-0 w-8 md:w-16 bg-gradient-to-r from-[#0A1931] to-transparent z-20 pointer-events-none" />
            <div className="absolute right-0 inset-y-0 w-8 md:w-16 bg-gradient-to-l from-[#0A1931] to-transparent z-20 pointer-events-none" />

            {/* Endless Smooth Sliding Track */}
            <div
              className="flex items-stretch"
              style={{
                transform: `translateX(calc(-${currentIndex * cardWidthPercent}% + ${mobileCenterOffset}%))`,
                transition: isTransitioning
                  ? "transform 750ms cubic-bezier(0.2, 0.8, 0.2, 1)"
                  : "none",
                willChange: "transform",
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {EXTENDED_VIDEOS.map((video, idx) => {
                const uniqueKey = `${video.id}-${idx}`;
                const isCenterInView =
                  visibleCards === 1
                    ? idx === currentIndex
                    : idx === currentIndex + Math.floor(visibleCards / 2);
                const isCurrentlyPlaying = activePlayingKey === uniqueKey;

                return (
                  <div
                    key={uniqueKey}
                    style={{
                      flex: `0 0 ${cardWidthPercent}%`,
                      maxWidth: `${cardWidthPercent}%`,
                    }}
                    className="px-2.5 sm:px-3.5 box-border"
                  >
                    <div
                      className={`group relative w-full aspect-[9/16] max-h-[580px] bg-black rounded-2xl border-2 overflow-hidden transition-all duration-300 shadow-xl ${
                        isCenterInView
                          ? "border-[#F59E0B] shadow-[0_0_30px_rgba(245,158,11,0.5)] ring-1 ring-[#FBBF24]/60 scale-[1.01]"
                          : "border-slate-800/90 hover:border-[#F59E0B]/80 hover:shadow-[0_0_20px_rgba(245,158,11,0.25)]"
                      }`}
                    >
                      {/* Corner Accent Tech Brackets */}
                      <span className="absolute top-0 left-0 w-3.5 h-3.5 border-t-2 border-l-2 border-[#FBBF24] z-20 pointer-events-none" />
                      <span className="absolute bottom-0 right-0 w-3.5 h-3.5 border-b-2 border-r-2 border-[#FBBF24] z-20 pointer-events-none" />

                      {/* Top Badge */}
                      <div className="absolute top-3.5 left-3.5 z-20 pointer-events-none">
                        <span className="bg-[#0A1931]/95 backdrop-blur-md text-[#FBBF24] border border-[#F59E0B]/80 text-[10px] sm:text-xs font-mono font-bold px-2.5 py-1 rounded-md uppercase tracking-wider shadow-lg">
                          {video.badge}
                        </span>
                      </div>

                      {/* Expand Button (Top Right) */}
                      <button
                        onClick={(e) => handleExpand(e, uniqueKey)}
                        className="absolute top-3.5 right-3.5 z-25 flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#0A1931]/95 backdrop-blur-md border border-[#F59E0B]/80 text-[#FBBF24] hover:bg-[#F59E0B] hover:text-[#0A1931] text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider shadow-lg transition-all cursor-pointer"
                        title="Expand to Fullscreen"
                        aria-label={`Expand ${video.title} to full screen`}
                      >
                        <Maximize2 className="size-3.5" />
                        <span>Expand</span>
                      </button>

                      {/* Inline Video Player OR High-res Poster */}
                      {isCurrentlyPlaying ? (
                        <video
                          ref={(el) => {
                            videoRefs.current[uniqueKey] = el;
                          }}
                          controls
                          autoPlay
                          playsInline
                          preload="metadata"
                          className="w-full h-full object-cover bg-black"
                          src={video.src}
                          onPlay={() => setActivePlayingKey(uniqueKey)}
                          onPause={() => {
                            // Only reset if this exact video was active
                            if (activePlayingKey === uniqueKey) {
                              // keep paused without auto-scrolling away immediately
                            }
                          }}
                          onEnded={() => {
                            setActivePlayingKey(null);
                          }}
                        />
                      ) : (
                        <div
                          className="relative w-full h-full cursor-pointer"
                          onClick={() => startPlayingInline(uniqueKey)}
                        >
                          <Image
                            src={video.poster}
                            alt={video.title}
                            fill
                            sizes="(max-width: 640px) 84vw, (max-width: 1024px) 50vw, 33vw"
                            className="object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-90"
                            loading="lazy"
                          />

                          {/* Central Glowing Play Button */}
                          <div className="absolute inset-0 z-15 flex items-center justify-center bg-black/25 group-hover:bg-black/10 transition-colors">
                            <div className="size-16 sm:size-18 rounded-full bg-[#0A1931]/95 border-2 border-[#F59E0B] text-[#FBBF24] flex items-center justify-center shadow-[0_0_25px_rgba(245,158,11,0.7)] group-hover:scale-110 group-hover:bg-[#F59E0B] group-hover:text-[#0A1931] group-hover:shadow-[0_0_35px_rgba(245,158,11,0.9)] transition-all">
                              <Play className="size-7 sm:size-8 fill-current translate-x-0.5" />
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Bottom Details Scrim - Only shown when NOT playing so controls are never covered */}
                      {!isCurrentlyPlaying && (
                        <div
                          className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#0A1931]/98 via-[#0A1931]/85 to-transparent pt-20 pb-5 px-4 sm:px-5 z-10 cursor-pointer pointer-events-auto"
                          onClick={() => startPlayingInline(uniqueKey)}
                        >
                          <h3 className="font-serif text-base sm:text-lg md:text-xl font-extrabold uppercase text-white tracking-wide leading-snug drop-shadow-lg text-balance group-hover:text-[#FBBF24] transition-colors">
                            {video.title}
                          </h3>
                          <p className="mt-1.5 text-xs sm:text-sm text-slate-300 line-clamp-2 leading-relaxed font-sans">
                            {video.description}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Minimal Navigation Indicator Pills */}
        <div className="flex items-center justify-center gap-2 sm:gap-2.5 pt-1">
          {ACADEMY_VIDEOS.map((video, idx) => {
            const isActive = activeOriginalIndex === idx;
            return (
              <button
                key={video.id}
                onClick={() => jumpToSlide(idx)}
                className={`h-2.5 rounded-full transition-all duration-400 cursor-pointer ${
                  isActive
                    ? "w-10 bg-[#F59E0B] shadow-[0_0_12px_rgba(245,158,11,0.9)]"
                    : "w-2.5 bg-slate-700 hover:bg-slate-500"
                }`}
                aria-label={`Jump to video ${idx + 1}: ${video.title}`}
                title={`${idx + 1}. ${video.title}`}
              />
            );
          })}
        </div>

      </div>
    </section>
  );
}
