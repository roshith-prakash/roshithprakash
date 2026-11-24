import { ArrowUpRight } from "lucide-react";

export default function CloseFold() {
  return (
    <section
      id="close"
      className="relative pt-24 pb-0 px-6 md:px-16 lg:px-24 overflow-hidden"
      style={{
        background: "var(--ground)",
        borderTop: "1px solid var(--hair)",
      }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end mb-20">
          <div>
            <p className="font-sora text-[10.5px] uppercase tracking-[0.15em] text-[#6C7378] flex items-center gap-2 mb-3">
              <span className="w-4 h-[1px] bg-[#E8913C]" />
              Connect
            </p>
            <h2 className="font-syne font-bold text-3xl md:text-5xl text-[#EDE7DC] leading-tight">
              Let's build something<span style={{ color: "var(--amber)" }}>.</span>
            </h2>
            <a
              href="mailto:roshithprakash07@gmail.com"
              className="inline-block mt-4 font-sora text-sm md:text-base text-[#9EA5A8] hover:text-[#E8913C] transition-colors"
            >
              roshithprakash07@gmail.com
            </a>
          </div>

          <div className="flex flex-wrap md:justify-end gap-4">
            <a
              href="https://www.linkedin.com/in/roshith-prakash/"
              target="_blank"
              rel="noreferrer"
              className="font-sora text-xs uppercase tracking-[0.12em] px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300"
              style={{
                color: "var(--ink)",
                border: "1px solid var(--hair)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--amber)";
                e.currentTarget.style.color = "var(--amber)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--hair)";
                e.currentTarget.style.color = "var(--ink)";
              }}
            >
              LinkedIn <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <a
              href="https://github.com/roshith-prakash"
              target="_blank"
              rel="noreferrer"
              className="font-sora text-xs uppercase tracking-[0.12em] px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300"
              style={{
                color: "var(--ink)",
                border: "1px solid var(--hair)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--amber)";
                e.currentTarget.style.color = "var(--amber)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--hair)";
                e.currentTarget.style.color = "var(--ink)";
              }}
            >
              GitHub <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Hairline footer strip */}
        <div className="py-6 border-t border-[rgba(237,231,220,0.13)] flex flex-col sm:flex-row justify-between items-center gap-4 font-sora text-[10.5px] uppercase tracking-[0.13em] text-[#6C7378]">
          <span>© 2025 Roshith Prakash</span>
          <span>Built with React · Deployed on Vercel</span>
        </div>
      </div>

      {/* Oversized cropped wordmark */}
      <div
        className="w-full text-center overflow-hidden pointer-events-none select-none -mb-6 md:-mb-10"
        aria-hidden="true"
      >
        <span
          className="inline-block font-syne font-extrabold whitespace-nowrap text-[#EDE7DC] opacity-15"
          style={{
            fontSize: "clamp(4.5rem, 13vw, 15rem)",
            letterSpacing: "-0.03em",
            transform: "translateY(35%)",
            color: "transparent",
            WebkitTextStroke: "1px var(--hair)",
            lineHeight: 0.8,
          }}
        >
          Roshith Prakash
        </span>
      </div>
    </section>
  );
}

