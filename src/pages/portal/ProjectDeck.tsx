import { Link } from "react-router-dom";
import { projects } from "../../data/projects";
import { useDeck } from "../../hooks/useDeck";
import DeckCard from "./DeckCard";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

export default function ProjectDeck() {
  const total = projects.length;
  const {
    currentIndex,
    dragOffset,
    isDragging,
    isThrowing,
    throwDirection,
    containerRef,
    handlePointerDown,
    handlePointerMove,
    handlePointerUp,
    handlePointerCancel,
    handleKeyDown,
    throwCard,
    goToCard,
  } = useDeck(total);

  // Stack of 4 visible cards starting from currentIndex
  const visibleIndices: number[] = [];
  for (let i = 0; i < Math.min(4, total); i++) {
    visibleIndices.push((currentIndex + i) % total);
  }

  return (
    <section
      id="projects"
      className="py-24 md:py-32 px-6 md:px-16 lg:px-24 relative overflow-hidden"
      style={{
        background: "var(--ground)",
        borderTop: "1px solid var(--hair)",
      }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Left Column: Headline, Lede, Buttons */}
        <div className="lg:col-span-5 space-y-6">
          <p className="font-sora text-[10.5px] uppercase tracking-[0.15em] text-[#6C7378] flex items-center gap-2">
            <span className="w-4 h-[1px] bg-[#E8913C]" />
            Selected Work
          </p>

          <h2 className="font-syne font-bold text-4xl md:text-5xl text-[#EDE7DC] tracking-[-0.02em]">
            Projects<span style={{ color: "var(--amber)" }}>.</span>
          </h2>

          <p className="font-sora text-sm md:text-base text-[#9EA5A8] leading-relaxed">
            Nine things built in public, shipped on Vercel. Swipe or use the arrow
            controls to flip through the sleeve stack.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Link
              to="/projects"
              className="font-sora text-xs uppercase tracking-[0.12em] px-5 py-2.5 rounded-full flex items-center gap-2 transition-all duration-300"
              style={{
                color: "var(--ink)",
                border: "1px solid var(--hair)",
                background: "transparent",
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
              View All Projects <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>

            <a
              href="https://github.com/roshith-prakash"
              target="_blank"
              rel="noreferrer"
              className="font-sora text-xs uppercase tracking-[0.12em] px-5 py-2.5 rounded-full flex items-center gap-2 transition-all duration-300 text-[#9EA5A8] hover:text-[#EDE7DC]"
              style={{
                border: "1px solid var(--hair)",
              }}
            >
              GitHub
            </a>
          </div>

          {/* Controls helper */}
          <div className="hidden lg:flex items-center gap-3 pt-6">
            <button
              onClick={() => throwCard("left")}
              className="p-2.5 rounded-full border border-[rgba(237,231,220,0.13)] text-[#9EA5A8] hover:text-[#E8913C] hover:border-[#E8913C] transition-colors"
              aria-label="Previous Project Card"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => throwCard("right")}
              className="p-2.5 rounded-full border border-[rgba(237,231,220,0.13)] text-[#9EA5A8] hover:text-[#E8913C] hover:border-[#E8913C] transition-colors"
              aria-label="Next Project Card"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
            <span className="font-sora text-[11px] text-[#6C7378] ml-2">
              {currentIndex + 1} of {total}
            </span>
          </div>
        </div>

        {/* Right Column: Throwable Deck */}
        <div className="lg:col-span-7 flex flex-col items-center">
          <div
            ref={containerRef}
            id="deck-container"
            tabIndex={0}
            onKeyDown={handleKeyDown}
            aria-label="Project cards. Use arrow keys to browse."
            className="relative w-full max-w-[390px] aspect-[4/5] sm:aspect-square outline-none"
            style={{
              touchAction: "pan-y",
            }}
          >
            {/* Render cards in reverse order so top card is on top */}
            {visibleIndices
              .slice()
              .reverse()
              .map((projIdx) => {
                const stackOffset = (projIdx - currentIndex + total) % total;
                const isTop = stackOffset === 0;
                return (
                  <DeckCard
                    key={projects[projIdx].title}
                    project={projects[projIdx]}
                    index={stackOffset}
                    isTop={isTop}
                    dragOffset={dragOffset}
                    isDragging={isDragging}
                    isThrowing={isThrowing}
                    throwDirection={throwDirection}
                    onPointerDown={handlePointerDown}
                    onPointerMove={handlePointerMove}
                    onPointerUp={handlePointerUp}
                    onPointerCancel={handlePointerCancel}
                  />
                );
              })}
          </div>

          {/* Hint line and progress dots */}
          <div className="mt-8 flex flex-col items-center gap-3">
            <p className="font-sora text-[11px] uppercase tracking-[0.14em] text-[#6C7378]">
              Drag or use ← → to browse
            </p>

            <div className="flex items-center gap-1.5">
              {projects.map((p, idx) => (
                <button
                  key={p.title}
                  onClick={() => goToCard(idx)}
                  className="w-2 h-2 rounded-full transition-all duration-300"
                  style={{
                    backgroundColor:
                      idx === currentIndex ? "var(--amber)" : "var(--hair)",
                    transform: idx === currentIndex ? "scale(1.2)" : "scale(1)",
                  }}
                  aria-label={`Go to project ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

