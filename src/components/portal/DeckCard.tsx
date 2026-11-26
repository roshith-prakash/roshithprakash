"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export interface DeckCardProps {
  project: {
    title: string;
    description: string;
    imageSrc: string;
    navigateTo?: string;
    siteLink?: string;
  };
  index: number;
  isTop: boolean;
  dragOffset: { x: number; y: number };
  isDragging: boolean;
  isThrowing: boolean;
  throwDirection: "left" | "right" | null;
  onPointerDown: (e: React.PointerEvent) => void;
  onPointerMove: (e: React.PointerEvent) => void;
  onPointerUp: (e: React.PointerEvent) => void;
  onPointerCancel: (e: React.PointerEvent) => void;
}

export default function DeckCard({
  project,
  index,
  isTop,
  dragOffset,
  isDragging,
  isThrowing,
  throwDirection,
  onPointerDown,
  onPointerMove,
  onPointerUp,
  onPointerCancel,
}: DeckCardProps) {
  let transform = "";
  const zIndex = 20 - index;
  let opacity = index > 3 ? 0 : 1 - index * 0.15;

  if (isTop) {
    if (isThrowing) {
      const travelX = throwDirection === "right" ? 500 : -500;
      const rot = throwDirection === "right" ? 22 : -22;
      transform = `translate3d(${travelX}px, -40px, 0) rotate(${rot}deg) scale(1.05)`;
      opacity = 0;
    } else if (isDragging) {
      const rot = dragOffset.x / 24;
      transform = `translate3d(${dragOffset.x}px, ${dragOffset.y}px, 0) rotate(${rot}deg) scale(1.03)`;
    } else {
      transform = "translate3d(0, 0, 0) rotate(0deg) scale(1)";
    }
  } else {
    const offsetX = index * 6;
    const offsetY = index * -6;
    const scale = Math.max(0.85, 1 - index * 0.04);
    const rot = (index % 2 === 0 ? 1 : -1) * index * 1.5;
    transform = `translate3d(${offsetX}px, ${offsetY}px, 0) rotate(${rot}deg) scale(${scale})`;
  }

  const destination = project.navigateTo || project.siteLink || "#";
  const isExternal = !!project.siteLink && !project.navigateTo;

  return (
    <div
      className={`absolute inset-0 rounded-2xl overflow-hidden select-none ${
        isTop ? "cursor-grab active:cursor-grabbing" : "pointer-events-none"
      }`}
      style={{
        backgroundColor: "var(--ground-2)",
        border: "1px solid var(--hair)",
        transform,
        zIndex,
        opacity,
        boxShadow:
          isTop && isDragging
            ? "0 28px 60px rgba(0,0,0,0.85)"
            : "0 18px 45px rgba(0,0,0,0.65)",
        transition:
          isTop && isDragging
            ? "none"
            : "transform 0.35s cubic-bezier(0.2, 0.8, 0.2, 1), opacity 0.35s ease",
        willChange: "transform, opacity",
      }}
      onPointerDown={isTop ? onPointerDown : undefined}
      onPointerMove={isTop ? onPointerMove : undefined}
      onPointerUp={isTop ? onPointerUp : undefined}
      onPointerCancel={isTop ? onPointerCancel : undefined}
    >
      {/* Project Image */}
      <div className="relative w-full h-[58%] overflow-hidden bg-[#0A0C0E]">
        <Image
          src={project.imageSrc}
          alt={project.title}
          fill
          sizes="(max-width: 640px) 100vw, 400px"
          className="object-cover object-top pointer-events-none"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#101317] via-transparent to-transparent opacity-80" />
      </div>

      {/* Card Body */}
      <div className="p-5 flex flex-col justify-between h-[42%]">
        <div>
          <div className="flex items-center justify-between gap-2">
            <h3 className="font-syne font-bold text-lg md:text-xl text-[#EDE7DC] truncate">
              {project.title}
            </h3>
            {isExternal ? (
              <a
                href={destination}
                target="_blank"
                rel="noreferrer"
                className="p-1.5 rounded-full hover:bg-[rgba(232,145,60,0.15)] text-[#E8913C] transition-colors"
                aria-label={`Open ${project.title}`}
                onClick={(e) => e.stopPropagation()}
              >
                <ArrowUpRight className="w-4 h-4" />
              </a>
            ) : (
              <Link
                href={destination}
                className="p-1.5 rounded-full hover:bg-[rgba(232,145,60,0.15)] text-[#E8913C] transition-colors"
                aria-label={`View ${project.title}`}
                onClick={(e) => e.stopPropagation()}
              >
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            )}
          </div>
          <p className="font-sora text-xs text-[#9EA5A8] line-clamp-2 mt-2 leading-relaxed">
            {project.description}
          </p>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-[rgba(237,231,220,0.08)]">
          <span className="font-sora text-[10px] uppercase tracking-[0.14em] text-[#6C7378]">
            Card {index === 0 ? "Top" : `+${index}`}
          </span>
          {isExternal ? (
            <a
              href={destination}
              target="_blank"
              rel="noreferrer"
              className="font-sora text-[10.5px] uppercase tracking-[0.12em] text-[#E8913C] flex items-center gap-1 hover:underline"
              onClick={(e) => e.stopPropagation()}
            >
              Launch Site <ArrowUpRight className="w-3 h-3" />
            </a>
          ) : (
            <Link
              href={destination}
              className="font-sora text-[10.5px] uppercase tracking-[0.12em] text-[#E8913C] flex items-center gap-1 hover:underline"
              onClick={(e) => e.stopPropagation()}
            >
              Case Study <ArrowUpRight className="w-3 h-3" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
