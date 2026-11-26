"use client";

import { useState, useRef, useCallback } from "react";

export interface DeckState {
  currentIndex: number;
  dragOffset: { x: number; y: number };
  isDragging: boolean;
  isThrowing: boolean;
  throwDirection: "left" | "right" | null;
}

export function useDeck(totalCards: number) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [isThrowing, setIsThrowing] = useState(false);
  const [throwDirection, setThrowDirection] = useState<"left" | "right" | null>(
    null
  );

  const startPos = useRef({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const isThrowingRef = useRef(false);
  isThrowingRef.current = isThrowing;

  const throwCard = useCallback(
    (direction: "left" | "right") => {
      if (isThrowingRef.current || totalCards <= 1) return;
      setIsThrowing(true);
      setThrowDirection(direction);

      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % totalCards);
        setDragOffset({ x: 0, y: 0 });
        setIsThrowing(false);
        setThrowDirection(null);
      }, 380);
    },
    [totalCards]
  );

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    if (isThrowingRef.current) return;
    if ((e.target as HTMLElement).closest("a, button")) return;
    const target = e.currentTarget as HTMLElement;
    target.setPointerCapture(e.pointerId);
    startPos.current = { x: e.clientX, y: e.clientY };
    setIsDragging(true);
  }, []);

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!isDragging || isThrowingRef.current) return;
      const dx = e.clientX - startPos.current.x;
      const dy = (e.clientY - startPos.current.y) * 0.3;
      setDragOffset({ x: dx, y: dy });
    },
    [isDragging]
  );

  const handlePointerUp = useCallback(
    (e: React.PointerEvent) => {
      if (!isDragging || isThrowingRef.current) return;
      setIsDragging(false);
      try {
        const target = e.currentTarget as HTMLElement;
        target.releasePointerCapture(e.pointerId);
      } catch {
        // ignore if pointer capture was already released
      }

      const threshold = containerRef.current
        ? Math.max(40, containerRef.current.clientWidth * 0.12)
        : 45;

      if (dragOffset.x > threshold) {
        throwCard("right");
      } else if (dragOffset.x < -threshold) {
        throwCard("left");
      } else {
        setDragOffset({ x: 0, y: 0 });
      }
    },
    [isDragging, dragOffset.x, throwCard]
  );

  const handlePointerCancel = useCallback(
    (e: React.PointerEvent) => {
      if (!isDragging) return;
      setIsDragging(false);
      try {
        const target = e.currentTarget as HTMLElement;
        target.releasePointerCapture(e.pointerId);
      } catch {
        // ignore
      }
      setDragOffset({ x: 0, y: 0 });
    },
    [isDragging]
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (isThrowingRef.current) return;
      if (e.key === "ArrowRight") {
        e.preventDefault();
        throwCard("right");
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        throwCard("left");
      }
    },
    [throwCard]
  );

  const goToCard = useCallback(
    (index: number) => {
      if (isThrowingRef.current) return;
      setCurrentIndex(index % totalCards);
      setDragOffset({ x: 0, y: 0 });
    },
    [totalCards]
  );

  return {
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
  };
}
