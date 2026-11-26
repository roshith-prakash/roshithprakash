"use client";

import Image from "next/image";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import heroBg from "@/assets/hero-bg.jpg";

export default function PortalHero() {
  const { progress } = useScrollProgress(1.5);

  // Panel translation: travel outward from 0 to over 55vw
  const leftPanelX = progress * -55; // vw
  const rightPanelX = progress * 55; // vw

  // Image scale settles from 1.08 down to 1
  const imgScale = 1.08 - 0.08 * progress;

  // Duotone opacity rises from 0 to 0.22
  const duotoneOpacity = 0.22 * progress;

  // Title: grows and travels completely off the page as the portal opens
  const titleScale = 1 + 0.15 * progress;
  const titleTracking = -0.02 - 0.015 * progress; // em
  const travelProgress = Math.min(1.25, progress * 1.6);
  const titleLeftX = travelProgress * -82; // vw
  const titleRightX = travelProgress * 82; // vw

  // Revealed Background Statement
  const quoteOpacity = Math.min(1, Math.max(0, (progress - 0.32) / 0.22));
  const quoteScale =
    0.75 + 0.35 * Math.min(1, Math.max(0, (progress - 0.32) / 0.42));

  // Corner helper pins fade out as the portal opens
  const pinsOpacity = Math.max(0, 1 - progress * 2.2);

  // Two glowing accent dots at center parting toward opposite corners
  const dotAmberX = -40 * progress; // vw
  const dotAmberY = -35 * progress; // vh
  const dotTealX = 40 * progress; // vw
  const dotTealY = 35 * progress; // vh

  return (
    <section
      id="hero-scroll-root"
      className="relative w-full"
      style={{ height: "250vh" }}
    >
      <div
        id="hero-stage"
        className="sticky top-0 w-full h-screen overflow-hidden"
        style={{ isolation: "isolate" }}
      >
        {/* Layer 1: Full-bleed image with black transparent filter */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            transform: `scale(${imgScale})`,
            transformOrigin: "center center",
            willChange: "transform",
          }}
        >
          <Image
            id="hero-img"
            src={heroBg}
            alt="Mumbai Marine Drive at Night"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.32)",
            }}
          />
        </div>

        {/* Layer 2: Duotone wash */}
        <div
          id="hero-duotone"
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(135deg, var(--amber) 0%, var(--teal) 100%)",
            mixBlendMode: "overlay",
            opacity: duotoneOpacity,
            willChange: "opacity",
          }}
        />

        {/* Layer 3: Radial veil */}
        <div
          id="hero-veil"
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 40%, rgba(10, 12, 14, 0.88) 100%)",
          }}
        />

        {/* Layer 3.5: Revealed Background Statement */}
        <div
          id="hero-quote-reveal"
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 md:px-12 pointer-events-none select-none z-10"
          style={{
            opacity: quoteOpacity,
            transform: `scale(${quoteScale})`,
            willChange: "transform, opacity",
          }}
        >
          <div className="max-w-2xl flex flex-col items-center">
            <h2 className="font-syne font-semibold text-3xl sm:text-5xl md:text-6xl text-[#EDE7DC] leading-[1.14] tracking-[-0.025em] drop-shadow-[0_4px_30px_rgba(0,0,0,0.95)]">
              Turning coffee &amp; Mumbai midnights into code
              <span style={{ color: "var(--amber)" }}>.</span>
            </h2>
            <p className="font-sora text-xs sm:text-sm text-[#9EA5A8] mt-4 uppercase tracking-[0.2em] flex items-center gap-2 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E8913C]" />
              Always learning · Constantly building
            </p>
          </div>
        </div>

        {/* Layer 4: Two solid panels (left & right) */}
        <div
          id="panel-left"
          className="absolute top-0 left-0 h-full pointer-events-none"
          style={{
            width: "55%",
            backgroundColor: "var(--ground)",
            transform: `translateX(${leftPanelX}vw)`,
            willChange: "transform",
            borderRight: "1px solid var(--hair)",
          }}
        />
        <div
          id="panel-right"
          className="absolute top-0 right-0 h-full pointer-events-none"
          style={{
            width: "55%",
            backgroundColor: "var(--ground)",
            transform: `translateX(${rightPanelX}vw)`,
            willChange: "transform",
            borderLeft: "1px solid var(--hair)",
          }}
        />

        {/* Layer 5: Two accent dots traveling toward opposite corners */}
        <div
          id="dot-amber"
          className="absolute rounded-full pointer-events-none"
          style={{
            top: "50%",
            left: "50%",
            width: "6px",
            height: "6px",
            backgroundColor: "var(--amber)",
            boxShadow: "0 0 10px 2px var(--amber)",
            transform: `translate(calc(-50% + ${dotAmberX}vw), calc(-50% + ${dotAmberY}vh))`,
            willChange: "transform",
            opacity: progress > 0.01 ? 1 : 0.8,
          }}
        />
        <div
          id="dot-teal"
          className="absolute rounded-full pointer-events-none"
          style={{
            top: "50%",
            left: "50%",
            width: "6px",
            height: "6px",
            backgroundColor: "var(--teal)",
            boxShadow: "0 0 10px 2px var(--teal)",
            transform: `translate(calc(-50% + ${dotTealX}vw), calc(-50% + ${dotTealY}vh))`,
            willChange: "transform",
            opacity: progress > 0.01 ? 1 : 0.8,
          }}
        />

        {/* Layer 6: Wordmark on top split into two lines traveling completely off-page */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-20">
          <h1
            id="hero-title"
            className="font-syne font-semibold text-[clamp(3.2rem,9.5vw,8.5rem)] text-[#EDE7DC] flex flex-col items-center text-center leading-[0.9]"
            style={{
              transform: `scale(${titleScale})`,
              letterSpacing: `${titleTracking}em`,
              willChange: "transform, letter-spacing",
            }}
          >
            <span
              id="title-left"
              className="inline-block"
              style={{
                transform: `translateX(${titleLeftX}vw)`,
                willChange: "transform",
              }}
            >
              Roshith
            </span>
            <span
              id="title-right"
              className="inline-block"
              style={{
                transform: `translateX(${titleRightX}vw)`,
                willChange: "transform",
              }}
            >
              Prakash
            </span>
          </h1>
        </div>

        {/* Corner Metadata Pins */}
        <div
          className="absolute top-20 left-8 md:left-12 font-sora text-[10.5px] uppercase tracking-[0.15em] text-[#9EA5A8] select-none z-30 pointer-events-none"
          style={{ opacity: pinsOpacity, willChange: "opacity" }}
        >
          Full Stack Developer
        </div>
        <div
          className="absolute top-20 right-8 md:right-12 font-sora text-[10.5px] uppercase tracking-[0.15em] text-[#9EA5A8] select-none z-30 pointer-events-none"
          style={{ opacity: pinsOpacity, willChange: "opacity" }}
        >
          Mumbai · India
        </div>
        <div
          className="absolute bottom-8 left-8 md:left-12 font-sora text-[10.5px] uppercase tracking-[0.15em] text-[#6C7378] select-none z-30 flex items-center gap-2 pointer-events-none"
          style={{ opacity: pinsOpacity, willChange: "opacity" }}
        >
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#E8913C]" />
          Scroll to unveil portal
        </div>
        <div
          className="absolute bottom-8 right-8 md:right-12 font-sora text-[10.5px] uppercase tracking-[0.15em] text-[#9EA5A8] select-none z-30 pointer-events-none"
          style={{ opacity: pinsOpacity, willChange: "opacity" }}
        >
          MERN Stack
        </div>
      </div>
    </section>
  );
}
