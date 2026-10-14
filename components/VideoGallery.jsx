"use client";

import Image from "next/image";
import { useState, useEffect, useRef, useCallback } from "react";
import {
  Video,
  ChevronLeft,
  ChevronRight,
  Play,
  X,
  Sparkles,
  MessageSquare,
  Film,
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

  // Modal Player State (stores original index: 0 - 4, or null if closed)
  const [modalVideoIndex, setModalVideoIndex] = useState(null);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const modalVideoRef = useRef(null);

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

  // Smooth slide navigation
  const handleNext = useCallback(() => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  }, []);

  const handlePrev = useCallback(() => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  }, []);

  // Jump to specific slide relative to current set
  const jumpToSlide = (originalIndex) => {
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

  // Automatic slide interval - STRICTLY PAUSED when user is hovering or watching in the modal
  useEffect(() => {
    if (modalVideoIndex !== null || isHovered) return;

    const interval = setInterval(() => {
      handleNext();
    }, 4500);

    return () => clearInterval(interval);
  }, [modalVideoIndex, isHovered, handleNext]);

  // Touch Swipe Handlers for Mobile Carousel
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

  // Open Video Theater Modal (Pauses any playing audio and locks body scroll)
  const openVideoModal = (originalIndex) => {
    // Immediately stop and reset any previous video audio
    if (modalVideoRef.current) {
      try {
        modalVideoRef.current.pause();
        modalVideoRef.current.currentTime = 0;
      } catch (_) {}
    }
    setModalVideoIndex(originalIndex);
    if (typeof document !== "undefined") {
      document.body.style.overflow = "hidden";
    }
  };

  // Close Video Theater Modal (Cuts audio immediately and restores body scroll)
  const closeVideoModal = () => {
    if (modalVideoRef.current) {
      try {
        modalVideoRef.current.pause();
        modalVideoRef.current.currentTime = 0;
      } catch (_) {}
    }
    setModalVideoIndex(null);
    if (typeof document !== "undefined") {
      document.body.style.overflow = "";
    }
  };

  // Modal Next / Previous Switcher (Cleanly cuts audio from previous video before opening next)
  const switchModalVideo = (newIndex) => {
    if (modalVideoRef.current) {
      try {
        modalVideoRef.current.pause();
        modalVideoRef.current.currentTime = 0;
      } catch (_) {}
    }
    const safeIndex = (newIndex + ACADEMY_VIDEOS.length) % ACADEMY_VIDEOS.length;
    setModalVideoIndex(safeIndex);
  };

  // Keyboard Navigation & Escape Listener for Video Modal
  useEffect(() => {
    if (modalVideoIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeVideoModal();
      } else if (e.key === "ArrowRight") {
        switchModalVideo(modalVideoIndex + 1);
      } else if (e.key === "ArrowLeft") {
        switchModalVideo(modalVideoIndex - 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [modalVideoIndex]);

  // Clean up body overflow if component unmounts while modal is open
  useEffect(() => {
    return () => {
      if (typeof document !== "undefined") {
        document.body.style.overflow = "";
      }
    };
  }, []);

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

  const currentModalVideo =
    modalVideoIndex !== null ? ACADEMY_VIDEOS[modalVideoIndex] : null;

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
                const originalIdx = idx % ACADEMY_VIDEOS.length;
                const uniqueKey = `${video.id}-${idx}`;
                const isCenterInView =
                  visibleCards === 1
                    ? idx === currentIndex
                    : idx === currentIndex + Math.floor(visibleCards / 2);

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
                      onClick={() => openVideoModal(originalIdx)}
                      className={`group relative w-full aspect-[9/16] max-h-[580px] bg-black rounded-2xl border-2 overflow-hidden transition-all duration-300 shadow-xl cursor-pointer ${
                        isCenterInView
                          ? "border-[#F59E0B] shadow-[0_0_30px_rgba(245,158,11,0.5)] ring-1 ring-[#FBBF24]/60 scale-[1.01]"
                          : "border-slate-800/90 hover:border-[#F59E0B]/80 hover:shadow-[0_0_20px_rgba(245,158,11,0.25)]"
                      }`}
                    >
                      {/* Corner Accent Tech Brackets */}
                      <span className="absolute top-0 left-0 w-3.5 h-3.5 border-t-2 border-l-2 border-[#FBBF24] z-20 pointer-events-none" />
                      <span className="absolute bottom-0 right-0 w-3.5 h-3.5 border-b-2 border-r-2 border-[#FBBF24] z-20 pointer-events-none" />

                      {/* High-res Video Poster */}
                      <div className="relative w-full h-full">
                        <Image
                          src={video.poster}
                          alt={video.title}
                          fill
                          sizes="(max-width: 640px) 84vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-90"
                          loading="lazy"
                        />
                      </div>

                      {/* Top Floating Badge */}
                      <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10 pointer-events-none">
                        <span className="bg-[#0A1931]/95 backdrop-blur-md text-[#FBBF24] border border-[#F59E0B]/80 text-[10px] sm:text-xs font-mono font-bold px-2.5 py-1 rounded-md uppercase tracking-wider shadow-lg">
                          {video.badge}
                        </span>
                      </div>

                      {/* Central Glowing Play Button Overlay */}
                      <div className="absolute inset-0 z-15 flex items-center justify-center bg-black/30 group-hover:bg-black/15 transition-colors">
                        <div className="size-16 sm:size-18 rounded-full bg-[#0A1931]/95 border-2 border-[#F59E0B] text-[#FBBF24] flex items-center justify-center shadow-[0_0_25px_rgba(245,158,11,0.7)] group-hover:scale-110 group-hover:bg-[#F59E0B] group-hover:text-[#0A1931] group-hover:shadow-[0_0_35px_rgba(245,158,11,0.9)] transition-all">
                          <Play className="size-7 sm:size-8 fill-current translate-x-0.5" />
                        </div>
                      </div>

                      {/* Bottom Gradient Scrim with Highlighted Big Heading */}
                      <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#0A1931]/98 via-[#0A1931]/85 to-transparent pt-20 pb-5 px-4 sm:px-5 z-10 pointer-events-none">
                        <h3 className="font-serif text-base sm:text-lg md:text-xl font-extrabold uppercase text-white tracking-wide leading-snug drop-shadow-lg text-balance group-hover:text-[#FBBF24] transition-colors">
                          {video.title}
                        </h3>
                        <p className="mt-1.5 text-xs sm:text-sm text-slate-300 line-clamp-2 leading-relaxed font-sans">
                          {video.description}
                        </p>
                      </div>
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

      {/* =====================================================================
          PREMIUM D.R.S.A THEATER MODAL (LIGHTBOX)
          - Single isolated video player eliminates GPU crashes & blackouts
          - Explicit pause & reset prevents overlapping music/audio
          - Carousel auto-scrolling is completely frozen while viewing
          ===================================================================== */}
      {currentModalVideo && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={currentModalVideo.title}
          className="fixed inset-0 z-50 bg-black/92 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              closeVideoModal();
            }
          }}
        >
          {/* Main Modal Card */}
          <div className="relative w-full max-w-4xl max-h-[92vh] bg-[#0A1931] border border-[#F59E0B]/60 rounded-2xl sm:rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.9)] overflow-hidden flex flex-col">
            
            {/* Top Modal Header */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 sm:py-4 bg-[#0A1931] border-b border-slate-800 text-white shrink-0">
              <div className="flex items-center gap-2 sm:gap-3 overflow-hidden">
                <span className="bg-[#FEF3C7]/15 text-[#FBBF24] border border-[#F59E0B]/70 text-[10px] sm:text-xs font-mono font-bold px-2.5 py-1 rounded-md uppercase tracking-wider shrink-0">
                  {currentModalVideo.badge}
                </span>
                <span className="text-xs sm:text-sm font-serif font-bold text-slate-300 truncate">
                  {currentModalVideo.title}
                </span>
              </div>

              {/* Close Button */}
              <button
                onClick={closeVideoModal}
                className="size-9 sm:size-10 rounded-full bg-slate-800/80 hover:bg-[#F59E0B] text-white hover:text-[#0A1931] flex items-center justify-center transition-all cursor-pointer shrink-0 ml-2"
                aria-label="Close Video Player (Esc)"
                title="Close (Esc)"
              >
                <X className="size-5" />
              </button>
            </div>

            {/* Video Player Display Container */}
            <div className="relative flex-1 bg-black flex items-center justify-center min-h-[300px] sm:min-h-[460px] max-h-[68vh] overflow-hidden">
              
              {/* Left Arrow Button in Modal */}
              <button
                onClick={() => switchModalVideo(modalVideoIndex - 1)}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 size-10 sm:size-12 rounded-full bg-[#0A1931]/80 backdrop-blur-md border border-[#F59E0B]/70 text-white hover:bg-[#F59E0B] hover:text-[#0A1931] flex items-center justify-center shadow-lg transition-all cursor-pointer"
                aria-label="Previous Video"
                title="Previous Video (Left Arrow)"
              >
                <ChevronLeft className="size-6" />
              </button>

              {/* Right Arrow Button in Modal */}
              <button
                onClick={() => switchModalVideo(modalVideoIndex + 1)}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 size-10 sm:size-12 rounded-full bg-[#0A1931]/80 backdrop-blur-md border border-[#F59E0B]/70 text-white hover:bg-[#F59E0B] hover:text-[#0A1931] flex items-center justify-center shadow-lg transition-all cursor-pointer"
                aria-label="Next Video"
                title="Next Video (Right Arrow)"
              >
                <ChevronRight className="size-6" />
              </button>

              {/* The Dedicated Video Element */}
              <video
                key={currentModalVideo.src}
                ref={modalVideoRef}
                src={currentModalVideo.src}
                controls
                autoPlay
                playsInline
                preload="auto"
                className="w-full h-full max-h-[68vh] object-contain"
                onEnded={() => switchModalVideo(modalVideoIndex + 1)}
              />
            </div>

            {/* Bottom Modal Footer with Details & WhatsApp Call-To-Action */}
            <div className="px-4 sm:px-6 py-3.5 sm:py-4 bg-[#0A1931] border-t border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shrink-0">
              <div className="space-y-1 max-w-xl">
                <h4 className="font-serif text-sm sm:text-base font-bold uppercase text-white">
                  {currentModalVideo.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 line-clamp-2">
                  {currentModalVideo.description}
                </p>
              </div>

              {/* Quick WhatsApp Action Button */}
              <a
                href={`https://wa.me/918693817112?text=${encodeURIComponent(
                  `Hello Coach Navjeet Singh, I was watching the video "${currentModalVideo.title}" on your website and would like to inquire about enrolling in this training program.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-mono font-bold uppercase tracking-wider transition-all shadow-md shrink-0"
              >
                <MessageSquare className="size-3.5" />
                <span>Inquire on WhatsApp</span>
              </a>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
