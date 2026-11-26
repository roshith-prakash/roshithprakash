"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import PortalNav from "./PortalNav";
import CloseFold from "./portal/CloseFold";
import { useReveal } from "@/hooks/useReveal";
import type { CaseStudyData } from "@/data/caseStudies";

export type CaseStudyProps = Omit<CaseStudyData, "slug"> & {
  imageAlt?: string;
};

export default function CaseStudyLayout({
  title,
  oneLiner,
  techChipText,
  siteLink,
  imageSrc,
  imageAlt,
  overview,
  note,
  features,
  techStack,
  extraSections,
}: CaseStudyProps) {
  const heroReveal = useReveal(0.1);
  const overviewReveal = useReveal(0.1);
  const featuresReveal = useReveal(0.1);
  const stackReveal = useReveal(0.1);
  const extraReveal = useReveal<HTMLDivElement>(0.1);

  const overviewParagraphs = Array.isArray(overview) ? overview : [overview];

  return (
    <div
      className="relative w-full min-h-screen font-sora selection:bg-[#E8913C] selection:text-[#0A0C0E]"
      style={{
        backgroundColor: "var(--ground)",
        color: "var(--ink)",
      }}
    >
      <PortalNav />

      {/* Hero Strip (55–70vh) */}
      <header
        ref={heroReveal.ref}
        className={`min-h-[58vh] max-h-[70vh] flex flex-col justify-end px-6 md:px-16 lg:px-24 pb-12 pt-28 border-b border-[rgba(237,231,220,0.13)] will-reveal ${
          heroReveal.revealed ? "revealed" : ""
        }`}
      >
        <div className="max-w-5xl mx-auto w-full space-y-6">
          <p className="font-sora text-[10.5px] uppercase tracking-[0.15em] text-[#6C7378] flex items-center gap-2">
            <span className="w-4 h-[1px] bg-[#E8913C]" />
            Case Study
          </p>

          <h1
            className="font-syne font-extrabold text-[#EDE7DC] tracking-[-0.03em] leading-[1.05]"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            {title}
            <span style={{ color: "var(--amber)" }}>.</span>
          </h1>

          <p className="font-sora text-base sm:text-xl text-[#9EA5A8] tracking-[-0.01em] max-w-3xl leading-relaxed">
            {oneLiner}
          </p>

          {/* Two Inline Metadata Chips */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <div className="px-4 py-1.5 rounded-full border border-[rgba(237,231,220,0.13)] font-sora text-[10.5px] uppercase tracking-[0.14em] text-[#9EA5A8]">
              {techChipText}
            </div>

            {siteLink ? (
              <a
                href={siteLink}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-1.5 rounded-full border border-[rgba(237,231,220,0.13)] hover:border-[#E8913C] font-sora text-[10.5px] uppercase tracking-[0.14em] text-[#E8913C] flex items-center gap-1.5 transition-colors"
              >
                Live Application <ArrowUpRight className="w-3 h-3" />
              </a>
            ) : (
              <span className="px-4 py-1.5 rounded-full border border-[rgba(237,231,220,0.13)] font-sora text-[10.5px] uppercase tracking-[0.14em] text-[#6C7378]">
                Offline / Dismantled
              </span>
            )}
          </div>
        </div>
      </header>

      {/* Featured Screenshot in Sleek Browser Showcase Frame */}
      <section className="relative w-full max-w-5xl mx-auto px-6 md:px-16 lg:px-24 pt-12 pb-4">
        <div className="rounded-2xl overflow-hidden border border-[rgba(237,231,220,0.13)] bg-[#101317] shadow-[0_24px_50px_rgba(0,0,0,0.6)]">
          {/* Minimal Browser Bezel Bar */}
          <div className="h-10 px-4 bg-[#14181D] border-b border-[rgba(237,231,220,0.08)] flex items-center justify-between">
            {/* macOS Window Controls */}
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]/60 inline-block shadow-sm" />
              <span className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]/60 inline-block shadow-sm" />
              <span className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]/60 inline-block shadow-sm" />
            </div>
            <div className="font-sora text-[11px] tracking-[0.06em] text-[#6C7378] truncate max-w-[260px] text-center font-medium">
              {siteLink
                ? siteLink.replace(/^https?:\/\//, "").replace(/\/$/, "")
                : `${title.toLowerCase().replace(/[^a-z0-9]/g, "")}.vercel.app`}
            </div>
            <div className="w-12" aria-hidden="true" />
          </div>

          {/* Screenshot Container - Full Image Preserved */}
          <div className="relative w-full bg-[#101317]">
            <Image
              src={imageSrc}
              alt={imageAlt || `${title} preview`}
              width={1860}
              height={920}
              sizes="(max-width: 1024px) 100vw, 900px"
              priority
              className="w-full h-auto block object-contain"
            />
          </div>
        </div>
      </section>

      {/* Main Content Body */}
      <main className="max-w-5xl mx-auto px-6 md:px-16 lg:px-24">
        {/* Section 1: Overview */}
        <section
          ref={overviewReveal.ref}
          className={`py-16 border-b border-[rgba(237,231,220,0.13)] will-reveal ${
            overviewReveal.revealed ? "revealed" : ""
          }`}
        >
          <div className="flex items-center gap-2 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E8913C]" />
            <span className="font-sora text-[10.5px] uppercase tracking-[0.15em] text-[#6C7378]">
              Overview
            </span>
          </div>

          <div className="space-y-4 max-w-3xl">
            {overviewParagraphs.map((paragraph, index) => (
              <p
                key={index}
                className="font-sora text-base sm:text-lg text-[#9EA5A8] leading-relaxed"
              >
                {paragraph}
              </p>
            ))}

            {note && (
              <div className="pt-4 mt-6 border-t border-[rgba(237,231,220,0.08)]">
                <p className="font-sora text-xs sm:text-sm text-[#6C7378] italic">
                  {note}
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Section 2: Key Features */}
        <section
          ref={featuresReveal.ref}
          className={`py-16 border-b border-[rgba(237,231,220,0.13)] will-reveal ${
            featuresReveal.revealed ? "revealed" : ""
          }`}
        >
          <div className="flex items-center gap-2 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E8913C]" />
            <span className="font-sora text-[10.5px] uppercase tracking-[0.15em] text-[#6C7378]">
              Key Features
            </span>
          </div>

          <div className="divide-y divide-[rgba(237,231,220,0.13)] border-y border-[rgba(237,231,220,0.13)]">
            {features.map((feature, index) => (
              <div
                key={index}
                className="py-4 px-2 flex items-start gap-4 hover:bg-[#101317] -mx-2 transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#E8913C] mt-2 flex-shrink-0" />
                <span className="font-sora text-sm sm:text-base text-[#EDE7DC] leading-relaxed">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Tech Stack */}
        <section
          ref={stackReveal.ref}
          className={`py-16 border-b border-[rgba(237,231,220,0.13)] will-reveal ${
            stackReveal.revealed ? "revealed" : ""
          }`}
        >
          <div className="flex items-center gap-2 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E8913C]" />
            <span className="font-sora text-[10.5px] uppercase tracking-[0.15em] text-[#6C7378]">
              Tech Stack
            </span>
          </div>

          <div className="divide-y divide-[rgba(237,231,220,0.13)] border-y border-[rgba(237,231,220,0.13)]">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="py-3.5 px-2 grid grid-cols-12 items-center hover:bg-[#101317] transition-colors group"
              >
                <div className="col-span-3 sm:col-span-2 font-sora text-[10.5px] uppercase tracking-[0.13em] text-[#6C7378] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E8913C] inline-block opacity-70 group-hover:opacity-100" />
                  Stack
                </div>
                <div className="col-span-6 sm:col-span-7 font-syne font-semibold text-base sm:text-xl text-[#EDE7DC] group-hover:text-[#E8913C] transition-colors">
                  {tech.name}
                </div>
                <div className="col-span-3 sm:col-span-3 text-right font-sora text-[10.5px] uppercase tracking-[0.13em] text-[#9EA5A8]">
                  {tech.category || "Tool"}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Optional Extra Sections */}
        {extraSections && extraSections.length > 0 && (
          <div
            ref={extraReveal.ref}
            className={`will-reveal ${extraReveal.revealed ? "revealed" : ""}`}
          >
            {extraSections.map((extra) => (
              <section
                key={extra.title}
                className="py-16 border-b border-[rgba(237,231,220,0.13)]"
              >
                <div className="flex items-center gap-2 mb-8">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E8913C]" />
                  <span className="font-sora text-[10.5px] uppercase tracking-[0.15em] text-[#6C7378]">
                    {extra.title}
                  </span>
                </div>

                <div className="divide-y divide-[rgba(237,231,220,0.13)] border-y border-[rgba(237,231,220,0.13)]">
                  {extra.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="py-3.5 px-2 flex items-start gap-4 hover:bg-[#101317] -mx-2 transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2E6B72] mt-2 flex-shrink-0" />
                      <span className="font-sora text-sm text-[#EDE7DC] leading-relaxed">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        )}

        {/* Bottom Navigation Links */}
        <section className="py-16 flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/projects"
            className="px-6 py-2.5 rounded-full font-sora text-xs uppercase tracking-[0.13em] border border-[rgba(237,231,220,0.13)] text-[#EDE7DC] hover:border-[#E8913C] hover:text-[#E8913C] transition-all inline-flex items-center gap-2"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> All Projects
          </Link>

          {siteLink && (
            <a
              href={siteLink}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-2.5 rounded-full font-sora text-xs uppercase tracking-[0.13em] border border-[#E8913C] text-[#E8913C] hover:border-[#EDE7DC] hover:text-[#EDE7DC] bg-transparent transition-colors inline-flex items-center gap-2"
            >
              Visit Live Site <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          )}
        </section>
      </main>

      <CloseFold />
    </div>
  );
}
