import { useEffect } from "react";
import PortalNav from "../components/PortalNav";
import CloseFold from "./portal/CloseFold";
import dp from "../assets/cropped-image.png";
import { useReveal } from "../hooks/useReveal";

export default function About() {
  const heroReveal = useReveal(0.1);
  const bioReveal = useReveal(0.1);
  const expReveal = useReveal(0.1);
  const eduReveal = useReveal(0.1);
  const personalReveal = useReveal(0.1);

  useEffect(() => {
    document.title = "About — Roshith Prakash";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className="relative w-full min-h-screen selection:bg-[#E8913C] selection:text-[#0A0C0E]"
      style={{
        backgroundColor: "var(--ground)",
        color: "var(--ink)",
        fontFamily: "'Sora', system-ui, sans-serif",
      }}
    >
      <PortalNav />

      {/* Hero Strip (55–70vh) */}
      <header
        ref={heroReveal.ref}
        className={`min-h-[60vh] max-h-[70vh] flex flex-col justify-end px-6 md:px-16 lg:px-24 pb-14 pt-28 border-b border-[rgba(237,231,220,0.13)] will-reveal ${heroReveal.revealed ? "revealed" : ""
          }`}
      >
        <div className="max-w-5xl mx-auto w-full">
          <p className="font-sora text-[10.5px] uppercase tracking-[0.15em] text-[#6C7378] flex items-center gap-2 mb-4">
            <span className="w-4 h-[1px] bg-[#E8913C]" />
            About
          </p>
          <h1
            className="font-syne font-extrabold text-[#EDE7DC] tracking-[-0.03em] leading-[1.05] mb-4"
            style={{ fontSize: "clamp(2.75rem, 6.5vw, 5.5rem)" }}
          >
            Roshith Prakash<span style={{ color: "var(--amber)" }}>.</span>
          </h1>
          <p className="font-sora text-base sm:text-xl text-[#9EA5A8] tracking-[-0.01em]">
            Full Stack Developer · Mumbai, India
          </p>
        </div>
      </header>

      {/* Main Content Body */}
      <main className="max-w-5xl mx-auto px-6 md:px-16 lg:px-24">
        {/* Section 1: Bio */}
        <section
          ref={bioReveal.ref}
          className={`py-20 border-b border-[rgba(237,231,220,0.13)] will-reveal ${bioReveal.revealed ? "revealed" : ""
            }`}
        >
          <div className="flex items-center gap-2 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E8913C]" />
            <span className="font-sora text-[10.5px] uppercase tracking-[0.15em] text-[#6C7378]">
              Bio
            </span>
          </div>

          <div className="flow-root">
            <div className="float-right ml-6 sm:ml-8 mb-4">
              <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border border-[rgba(237,231,220,0.13)] p-1 opacity-70 hover:opacity-100 transition-opacity duration-300">
                <img
                  src={dp}
                  alt="Roshith Prakash"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
            <p className="font-sora text-base text-[#9EA5A8] leading-relaxed">
              Hi, I am an avid learner and full stack developer who uses the
              MERN Stack to develop exciting web applications. I aspire to
              learn each and every day, for to live is to learn. Seeking
              opportunities where skills can be creatively utilized to develop
              interesting solutions while being resourceful and attaining
              professional growth.
            </p>
          </div>
        </section>

        {/* Section 2: Experience */}
        <section
          ref={expReveal.ref}
          className={`py-20 border-b border-[rgba(237,231,220,0.13)] will-reveal ${expReveal.revealed ? "revealed" : ""
            }`}
        >
          <div className="flex items-center gap-2 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E8913C]" />
            <span className="font-sora text-[10.5px] uppercase tracking-[0.15em] text-[#6C7378]">
              Experience
            </span>
          </div>

          <div className="divide-y divide-[rgba(237,231,220,0.13)] border-y border-[rgba(237,231,220,0.13)]">
            <div className="py-6 grid grid-cols-1 md:grid-cols-12 gap-3 items-baseline hover:bg-[#101317] px-2 -mx-2 transition-colors">
              <div className="md:col-span-6 flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E8913C] flex-shrink-0" />
                <h3 className="font-syne font-bold text-lg sm:text-xl text-[#EDE7DC]">
                  MERN Developer
                </h3>
              </div>
              <div className="md:col-span-6 flex flex-col sm:flex-row sm:justify-between items-baseline gap-1 text-right">
                <span className="font-sora text-sm text-[#EDE7DC]">
                  WhatCode
                </span>
                <span className="font-sora text-xs uppercase tracking-[0.12em] text-[#6C7378]">
                  October 2023 – March 2024
                </span>
              </div>
              <div className="md:col-span-12 pl-4 pt-2">
                <ul className="space-y-1.5 text-xs sm:text-sm font-sora text-[#9EA5A8]">
                  <li className="flex items-start gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#6C7378] mt-2 flex-shrink-0" />
                    <span>Developed interactive and responsive front-end applications using React and Tailwind CSS.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#6C7378] mt-2 flex-shrink-0" />
                    <span>Built backend web servers and API endpoints with Node.js and Express.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#6C7378] mt-2 flex-shrink-0" />
                    <span>Implemented data persistence with MongoDB and Prisma ORM, integrating Firebase Authentication.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Education */}
        <section
          ref={eduReveal.ref}
          className={`py-20 border-b border-[rgba(237,231,220,0.13)] will-reveal ${eduReveal.revealed ? "revealed" : ""
            }`}
        >
          <div className="flex items-center gap-2 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E8913C]" />
            <span className="font-sora text-[10.5px] uppercase tracking-[0.15em] text-[#6C7378]">
              Education
            </span>
          </div>

          <div className="divide-y divide-[rgba(237,231,220,0.13)] border-y border-[rgba(237,231,220,0.13)]">
            {/* MCA */}
            <div className="py-5 grid grid-cols-1 md:grid-cols-12 gap-2 items-center hover:bg-[#101317] px-2 -mx-2 transition-colors">
              <div className="md:col-span-6 flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E8913C] flex-shrink-0" />
                <div>
                  <h3 className="font-syne font-bold text-lg sm:text-xl text-[#EDE7DC]">
                    MCA · <span className="text-[#E8913C] font-normal text-base">CGPA 9.80</span>
                  </h3>
                </div>
              </div>
              <div className="md:col-span-6 flex flex-col sm:flex-row sm:justify-between items-baseline gap-1 text-right">
                <span className="font-sora text-sm text-[#EDE7DC]">
                  NMIMS MPSTME, Mumbai
                </span>
                <span className="font-sora text-xs uppercase tracking-[0.12em] text-[#6C7378]">
                  2025 – 2027 · Ongoing
                </span>
              </div>
            </div>

            {/* BSc. IT */}
            <div className="py-5 grid grid-cols-1 md:grid-cols-12 gap-2 items-center hover:bg-[#101317] px-2 -mx-2 transition-colors">
              <div className="md:col-span-6 flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E8913C] flex-shrink-0" />
                <div>
                  <h3 className="font-syne font-bold text-lg sm:text-xl text-[#EDE7DC]">
                    BSc.(I.T.) · <span className="text-[#E8913C] font-normal text-base">CGPA 9.78</span>
                  </h3>
                </div>
              </div>
              <div className="md:col-span-6 flex flex-col sm:flex-row sm:justify-between items-baseline gap-1 text-right">
                <span className="font-sora text-sm text-[#EDE7DC]">
                  Bhavans College, Mumbai
                </span>
                <span className="font-sora text-xs uppercase tracking-[0.12em] text-[#6C7378]">
                  2020 – 2023
                </span>
              </div>
            </div>

            {/* HSC */}
            <div className="py-5 grid grid-cols-1 md:grid-cols-12 gap-2 items-center hover:bg-[#101317] px-2 -mx-2 transition-colors">
              <div className="md:col-span-6 flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E8913C] flex-shrink-0" />
                <div>
                  <h3 className="font-syne font-bold text-lg sm:text-xl text-[#EDE7DC]">
                    HSC Science (I.T.) · <span className="text-[#E8913C] font-normal text-base">77.78%</span>
                  </h3>
                </div>
              </div>
              <div className="md:col-span-6 flex flex-col sm:flex-row sm:justify-between items-baseline gap-1 text-right">
                <span className="font-sora text-sm text-[#EDE7DC]">
                  Bhavans College, Mumbai
                </span>
                <span className="font-sora text-xs uppercase tracking-[0.12em] text-[#6C7378]">
                  2018 – 2020
                </span>
              </div>
            </div>

            {/* SSC */}
            <div className="py-5 grid grid-cols-1 md:grid-cols-12 gap-2 items-center hover:bg-[#101317] px-2 -mx-2 transition-colors">
              <div className="md:col-span-6 flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E8913C] flex-shrink-0" />
                <div>
                  <h3 className="font-syne font-bold text-lg sm:text-xl text-[#EDE7DC]">
                    SSC · <span className="text-[#E8913C] font-normal text-base">92.20%</span>
                  </h3>
                </div>
              </div>
              <div className="md:col-span-6 flex flex-col sm:flex-row sm:justify-between items-baseline gap-1 text-right">
                <span className="font-sora text-sm text-[#EDE7DC]">
                  Marol Education Academy's High School
                </span>
                <span className="font-sora text-xs uppercase tracking-[0.12em] text-[#6C7378]">
                  2018
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Personal */}
        <section
          ref={personalReveal.ref}
          className={`py-20 will-reveal ${personalReveal.revealed ? "revealed" : ""
            }`}
        >
          <div className="flex items-center gap-2 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E8913C]" />
            <span className="font-sora text-[10.5px] uppercase tracking-[0.15em] text-[#6C7378]">
              Personal
            </span>
          </div>

          <div className="divide-y divide-[rgba(237,231,220,0.13)] border-y border-[rgba(237,231,220,0.13)]">
            <div className="py-4 grid grid-cols-1 md:grid-cols-12 gap-2 items-center hover:bg-[#101317] px-2 -mx-2 transition-colors">
              <div className="md:col-span-4 font-syne font-bold text-base sm:text-lg text-[#EDE7DC]">
                Location
              </div>
              <div className="md:col-span-8 font-sora text-sm text-[#9EA5A8] md:text-right">
                Andheri, Mumbai, Maharashtra, India
              </div>
            </div>

            <div className="py-4 grid grid-cols-1 md:grid-cols-12 gap-2 items-center hover:bg-[#101317] px-2 -mx-2 transition-colors">
              <div className="md:col-span-4 font-syne font-bold text-base sm:text-lg text-[#EDE7DC]">
                Languages
              </div>
              <div className="md:col-span-8 font-sora text-sm text-[#9EA5A8] md:text-right">
                English, Hindi, Marathi, Malayalam
              </div>
            </div>

            <div className="py-4 grid grid-cols-1 md:grid-cols-12 gap-2 items-center hover:bg-[#101317] px-2 -mx-2 transition-colors">
              <div className="md:col-span-4 font-syne font-bold text-base sm:text-lg text-[#EDE7DC]">
                Interests & Hobbies
              </div>
              <div className="md:col-span-8 font-sora text-sm text-[#9EA5A8] md:text-right">
                Writing, Football, Formula 1, Gaming
              </div>
            </div>
          </div>
        </section>
      </main>

      <CloseFold />
    </div>
  );
}
