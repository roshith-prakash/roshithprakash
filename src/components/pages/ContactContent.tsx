"use client";

import { ArrowUpRight } from "lucide-react";
import PortalNav from "@/components/PortalNav";
import CloseFold from "@/components/portal/CloseFold";
import { useReveal } from "@/hooks/useReveal";

export default function ContactContent() {
  const heroReveal = useReveal(0.1);
  const rowsReveal = useReveal<HTMLDivElement>(0.1);

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
        className={`min-h-[60vh] max-h-[70vh] flex flex-col justify-end px-6 md:px-16 lg:px-24 pb-14 pt-28 border-b border-[rgba(237,231,220,0.13)] will-reveal ${
          heroReveal.revealed ? "revealed" : ""
        }`}
      >
        <div className="max-w-5xl mx-auto w-full">
          <p className="font-sora text-[10.5px] uppercase tracking-[0.15em] text-[#6C7378] flex items-center gap-2 mb-4">
            <span className="w-4 h-[1px] bg-[#E8913C]" />
            Contact
          </p>
          <h1
            className="font-syne font-extrabold text-[#EDE7DC] tracking-[-0.03em] leading-[1.05] mb-4"
            style={{ fontSize: "clamp(2.75rem, 6.5vw, 5.5rem)" }}
          >
            Let&apos;s build something
            <span style={{ color: "var(--amber)" }}>.</span>
          </h1>
          <p className="font-sora text-base sm:text-xl text-[#9EA5A8] tracking-[-0.01em] max-w-2xl leading-relaxed">
            Interested in collaborating, discussing new engineering
            opportunities, or exploring ideas? Reach out directly through any of
            the channels below.
          </p>
        </div>
      </header>

      {/* Main Section */}
      <main className="max-w-5xl mx-auto px-6 md:px-16 lg:px-24 py-20">
        <div
          ref={rowsReveal.ref}
          className={`space-y-12 will-reveal ${
            rowsReveal.revealed ? "revealed" : ""
          }`}
        >
          {/* Three Hairline-Ruled Rows */}
          <div className="divide-y divide-[rgba(237,231,220,0.13)] border-y border-[rgba(237,231,220,0.13)]">
            {/* 1. LinkedIn */}
            <div className="py-8 px-2 grid grid-cols-1 md:grid-cols-12 gap-6 items-center hover:bg-[#101317] -mx-2 transition-colors">
              <div className="md:col-span-8 space-y-1">
                <h2 className="font-syne font-bold text-xl sm:text-2xl text-[#EDE7DC]">
                  LinkedIn
                </h2>
                <p className="font-sora text-sm text-[#9EA5A8]">
                  /in/roshith-prakash · Professional background, career timeline,
                  and recommendations
                </p>
              </div>
              <div className="md:col-span-4 flex md:justify-end">
                <a
                  href="https://www.linkedin.com/in/roshith-prakash/"
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-2.5 rounded-full font-sora text-xs uppercase tracking-[0.13em] border border-[#E8913C] text-[#E8913C] hover:border-[#EDE7DC] hover:text-[#EDE7DC] bg-transparent transition-colors inline-flex items-center gap-2"
                >
                  Connect <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* 2. Email */}
            <div className="py-8 px-2 grid grid-cols-1 md:grid-cols-12 gap-6 items-center hover:bg-[#101317] -mx-2 transition-colors">
              <div className="md:col-span-8 space-y-1">
                <h2 className="font-syne font-bold text-xl sm:text-2xl text-[#EDE7DC]">
                  Email
                </h2>
                <p className="font-sora text-sm text-[#9EA5A8]">
                  roshithprakash07@gmail.com · Direct inbox for roles,
                  inquiries, and technical discussions
                </p>
              </div>
              <div className="md:col-span-4 flex md:justify-end">
                <a
                  href="mailto:roshithprakash07@gmail.com"
                  className="px-6 py-2.5 rounded-full font-sora text-xs uppercase tracking-[0.13em] border border-[#E8913C] text-[#E8913C] hover:border-[#EDE7DC] hover:text-[#EDE7DC] bg-transparent transition-colors inline-flex items-center gap-2"
                >
                  Send Email <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* 3. GitHub */}
            <div className="py-8 px-2 grid grid-cols-1 md:grid-cols-12 gap-6 items-center hover:bg-[#101317] -mx-2 transition-colors">
              <div className="md:col-span-8 space-y-1">
                <h2 className="font-syne font-bold text-xl sm:text-2xl text-[#EDE7DC]">
                  GitHub
                </h2>
                <p className="font-sora text-sm text-[#9EA5A8]">
                  github.com/roshith-prakash · Source repositories, open-source
                  projects, and commit history
                </p>
              </div>
              <div className="md:col-span-4 flex md:justify-end">
                <a
                  href="https://github.com/roshith-prakash"
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-2.5 rounded-full font-sora text-xs uppercase tracking-[0.13em] border border-[#E8913C] text-[#E8913C] hover:border-[#EDE7DC] hover:text-[#EDE7DC] bg-transparent transition-colors inline-flex items-center gap-2"
                >
                  View Code <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Fine print line */}
          <div className="pt-2">
            <p className="font-sora text-xs text-[#6C7378] tracking-[0.02em] leading-relaxed">
              Available for full-time software engineering roles and
              collaborations · Replies typically sent within 24 to 48 hours.
            </p>
          </div>
        </div>
      </main>

      <CloseFold />
    </div>
  );
}
