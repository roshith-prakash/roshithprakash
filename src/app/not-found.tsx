"use client";

import Link from "next/link";
import PortalNav from "@/components/PortalNav";
import CloseFold from "@/components/portal/CloseFold";
import { useReveal } from "@/hooks/useReveal";

export default function NotFound() {
  const { ref, revealed } = useReveal(0.1);

  return (
    <div
      className="relative w-full min-h-screen flex flex-col justify-between font-sora selection:bg-[#E8913C] selection:text-[#0A0C0E]"
      style={{
        backgroundColor: "var(--ground)",
        color: "var(--ink)",
      }}
    >
      <PortalNav />

      {/* Main Full-Height Centered Layout */}
      <main
        ref={ref}
        className={`flex-grow min-h-[75vh] flex flex-col items-center justify-center text-center px-6 pt-24 pb-16 will-reveal ${
          revealed ? "revealed" : ""
        }`}
      >
        <div className="max-w-2xl mx-auto space-y-6">
          {/* Outlined 404 Numeral */}
          <div
            className="font-syne font-extrabold select-none pointer-events-none leading-none tracking-[-0.04em]"
            style={{
              fontSize: "clamp(10rem, 25vw, 22rem)",
              color: "transparent",
              WebkitTextStroke: "1px var(--hair)",
            }}
            aria-hidden="true"
          >
            404
          </div>

          <div className="space-y-3 -mt-6 sm:-mt-10">
            <h1 className="font-syne font-bold text-3xl sm:text-4xl text-[#EDE7DC] tracking-[-0.02em]">
              Page not found<span style={{ color: "var(--amber)" }}>.</span>
            </h1>
            <p className="font-sora text-sm sm:text-base text-[#9EA5A8] max-w-md mx-auto leading-relaxed">
              The page you&apos;re looking for doesn&apos;t exist or has been
              moved.
            </p>
          </div>

          {/* Two Pill Buttons Side by Side */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
            <Link
              href="/"
              className="px-6 py-2.5 rounded-full font-sora text-xs uppercase tracking-[0.13em] border border-[#E8913C] text-[#E8913C] hover:border-[#EDE7DC] hover:text-[#EDE7DC] bg-transparent transition-colors inline-flex items-center"
            >
              Go Home
            </Link>
            <Link
              href="/projects"
              className="px-6 py-2.5 rounded-full font-sora text-xs uppercase tracking-[0.13em] border border-[rgba(237,231,220,0.13)] text-[#EDE7DC] hover:border-[#E8913C] hover:text-[#E8913C] transition-all inline-flex items-center"
            >
              View Projects
            </Link>
          </div>
        </div>
      </main>

      <CloseFold />
    </div>
  );
}
