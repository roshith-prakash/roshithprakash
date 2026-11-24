import { useEffect, useRef, useState } from "react";
import { languages } from "../../data/languages";

// Map category tags for skills
const skillCategories: Record<string, string> = {
  Java: "Language",
  JavaScript: "Language",
  TypeScript: "Language",
  React: "Frontend",
  "Next.js": "Frontend",
  "Node.js": "Backend",
  "Express.js": "Backend",
  MongoDB: "Database",
  SQL: "Database",
  "Prisma ORM": "ORM",
  "Tailwind CSS": "Styling",
  Redux: "State Management",
  Git: "Version Control",
  GitHub: "DevOps",
  "AWS (EC2, S3)": "Cloud",
  Jest: "Testing",
  Python: "Language",
  "Machine Learning": "AI / Data",
};

export default function SkillsAndExp() {
  const sectionRef = useRef<HTMLElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setRevealed(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`py-28 px-6 md:px-16 lg:px-24 relative overflow-hidden will-reveal ${revealed ? "revealed" : ""
        }`}
      style={{
        background: "var(--ground)",
        borderTop: "1px solid var(--hair)",
      }}
    >
      <div className="max-w-5xl mx-auto space-y-24">
        {/* Section 1: Skills Roster */}
        <div>
          <div className="mb-10">
            <p className="font-sora text-[10.5px] uppercase tracking-[0.15em] text-[#6C7378] flex items-center gap-2">
              <span className="w-4 h-[1px] bg-[#E8913C]" />
              Repository of Tools
            </p>
            <h2 className="font-syne font-bold text-3xl md:text-4xl text-[#EDE7DC] mt-2">
              Stack & Technologies<span style={{ color: "var(--amber)" }}>.</span>
            </h2>
          </div>

          <div className="divide-y divide-[rgba(237,231,220,0.13)] border-y border-[rgba(237,231,220,0.13)]">
            {languages.map((item) => {
              const category = item.category || skillCategories[item.name] || "Tool";
              return (
                <div
                  key={item.id}
                  className="py-3.5 px-2 grid grid-cols-12 items-center hover:bg-[#101317] transition-colors group"
                >
                  <div className="col-span-3 sm:col-span-2 font-sora text-[10.5px] uppercase tracking-[0.13em] text-[#6C7378] flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E8913C] inline-block opacity-70 group-hover:opacity-100" />
                    Stack
                  </div>
                  <div className="col-span-6 sm:col-span-7 font-syne font-semibold text-base sm:text-xl text-[#EDE7DC] group-hover:text-[#E8913C] transition-colors">
                    {item.name}
                  </div>
                  <div className="col-span-3 sm:col-span-3 text-right font-sora text-[10.5px] uppercase tracking-[0.13em] text-[#9EA5A8]">
                    {category}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Section 2: Experience & Education Table */}
        <div>
          <div className="mb-10">
            <p className="font-sora text-[10.5px] uppercase tracking-[0.15em] text-[#6C7378] flex items-center gap-2">
              <span className="w-4 h-[1px] bg-[#2E6B72]" />
              Timeline
            </p>
            <h2 className="font-syne font-bold text-3xl md:text-4xl text-[#EDE7DC] mt-2">
              Experience & Education<span style={{ color: "var(--teal)" }}>.</span>
            </h2>
          </div>

          {/* Table for Desktop */}
          <div className="hidden sm:block overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-[rgba(237,231,220,0.13)] pb-3">
                  <th className="font-sora text-[10.5px] uppercase tracking-[0.14em] text-[#6C7378] font-normal pb-4">
                    Role / Degree
                  </th>
                  <th className="font-sora text-[10.5px] uppercase tracking-[0.14em] text-[#6C7378] font-normal pb-4">
                    Organization
                  </th>
                  <th className="font-sora text-[10.5px] uppercase tracking-[0.14em] text-[#6C7378] font-normal pb-4 text-right">
                    Period
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[rgba(237,231,220,0.13)]">
                <tr className="hover:bg-[#101317] transition-colors">
                  <td className="py-5 font-syne font-bold text-lg md:text-2xl text-[#EDE7DC]">
                    MERN Developer
                  </td>
                  <td className="py-5 font-sora text-sm text-[#9EA5A8]">
                    WhatCode
                  </td>
                  <td className="py-5 font-sora text-xs uppercase tracking-[0.12em] text-[#6C7378] text-right">
                    Oct 2023 – Mar 2024
                  </td>
                </tr>
                <tr className="hover:bg-[#101317] transition-colors">
                  <td className="py-5 font-syne font-bold text-lg md:text-2xl text-[#EDE7DC]">
                    MCA · <span className="text-[#E8913C]">CGPA 9.80</span>
                  </td>
                  <td className="py-5 font-sora text-sm text-[#9EA5A8]">
                    NMIMS MPSTME
                  </td>
                  <td className="py-5 font-sora text-xs uppercase tracking-[0.12em] text-[#6C7378] text-right">
                    2025 – 2027
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Cards for Mobile */}
          <div className="sm:hidden space-y-4">
            <div className="p-5 rounded-xl border border-[rgba(237,231,220,0.13)] bg-[#101317] space-y-2">
              <span className="font-sora text-[10px] uppercase tracking-[0.12em] text-[#E8913C]">
                Oct 2023 – Mar 2024
              </span>
              <h3 className="font-syne font-bold text-xl text-[#EDE7DC]">
                MERN Developer
              </h3>
              <p className="font-sora text-xs text-[#9EA5A8]">WhatCode</p>
            </div>
            <div className="p-5 rounded-xl border border-[rgba(237,231,220,0.13)] bg-[#101317] space-y-2">
              <span className="font-sora text-[10px] uppercase tracking-[0.12em] text-[#E8913C]">
                2025 – 2027
              </span>
              <h3 className="font-syne font-bold text-xl text-[#EDE7DC]">
                MCA · <span className="text-[#E8913C]">CGPA 9.80</span>
              </h3>
              <p className="font-sora text-xs text-[#9EA5A8]">
                NMIMS MPSTME
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

