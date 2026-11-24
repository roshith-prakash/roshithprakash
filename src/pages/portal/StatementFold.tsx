import { useEffect, useRef, useState } from "react";
import profileImg from "../../assets/cropped-image.png";

export default function StatementFold() {
  const sectionRef = useRef<HTMLElement>(null);
  const [driftOffset, setDriftOffset] = useState({ y: 0, rot: 0 });
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    // Single-fire reveal via IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setRevealed(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(el);

    // Image scroll drift
    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const windowH = window.innerHeight;
      if (rect.top < windowH && rect.bottom > 0) {
        const factor = (windowH - rect.top) / (windowH + rect.height);
        setDriftOffset({
          y: -40 * factor,
          rot: 6 * factor,
        });
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`min-h-screen relative flex items-center px-6 md:px-16 lg:px-24 py-28 overflow-hidden will-reveal ${
        revealed ? "revealed" : ""
      }`}
      style={{
        background: "var(--ground)",
        borderTop: "1px solid var(--hair)",
      }}
    >
      <div className="max-w-5xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        <div className="lg:col-span-8 space-y-6">
          <p className="font-sora text-[10.5px] uppercase tracking-[0.15em] text-[#6C7378] flex items-center gap-2">
            <span className="w-4 h-[1px] bg-[#E8913C]" />
            Philosophy
          </p>

          <h2
            className="font-syne font-bold text-[#EDE7DC] leading-[1.25]"
            style={{
              fontSize: "clamp(24px, 3.6vw, 52px)",
              maxWidth: "24ch",
            }}
          >
            Building the web, one commit at a time.{" "}
            <span style={{ color: "var(--amber)" }}>
              To live is to learn.
            </span>
          </h2>

          <p className="font-sora text-sm md:text-base text-[#9EA5A8] max-w-xl leading-relaxed pt-2">
            Seeking opportunities where engineering rigor and creative design meet
            to develop resilient, interesting solutions that elevate user
            experiences.
          </p>
        </div>

        {/* Floating circular image with subtle scroll drift */}
        <div className="lg:col-span-4 flex justify-center lg:justify-end relative">
          <div
            className="relative pointer-events-none select-none"
            style={{
              transform: `translateY(${driftOffset.y}px) rotate(${driftOffset.rot}deg)`,
              transition: "transform 0.1s ease-out",
              willChange: "transform",
            }}
          >
            <div className="w-52 h-52 sm:w-64 sm:h-64 rounded-full overflow-hidden border border-[rgba(237,231,220,0.13)] p-1.5 opacity-40 hover:opacity-70 transition-opacity">
              <img
                src={profileImg}
                alt="Roshith"
                className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Outlined index numeral */}
      <span
        className="index-numeral select-none pointer-events-none"
        style={{
          fontFamily: "'Syne', system-ui",
          fontWeight: 800,
          fontSize: "clamp(90px, 16vw, 200px)",
          color: "transparent",
          WebkitTextStroke: "1px var(--hair)",
          position: "absolute",
          right: "2rem",
          bottom: "-1rem",
          lineHeight: 1,
          opacity: 0.6,
        }}
      >
        01
      </span>
    </section>
  );
}

