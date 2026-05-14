"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

type LightboxProps = {
  photos: string[];
  basePath: string;
  alt: string;
};

export function Lightbox({ photos, basePath, alt }: LightboxProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [slideDirection, setSlideDirection] = useState<"next" | "prev" | "none">("none");

  const open = useCallback((index: number) => {
    setSlideDirection("none");
    setActiveIndex(index);
  }, []);

  const close = useCallback(() => {
    setActiveIndex(null);
  }, []);

  const goTo = useCallback(
    (direction: "next" | "prev") => {
      setActiveIndex((current) => {
        if (current === null) return current;
        setSlideDirection(direction);
        const total = photos.length;
        return direction === "next" ? (current + 1) % total : (current - 1 + total) % total;
      });
    },
    [photos.length],
  );

  useEffect(() => {
    if (activeIndex === null) return;
    function handleKey(event: KeyboardEvent) {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") goTo("next");
      if (event.key === "ArrowLeft") goTo("prev");
    }
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [activeIndex, close, goTo]);

  return (
    <>
      <div className="photo-grid" aria-label="Fotografie realizácií Betonax">
        {photos.map((photo, index) => (
          <button
            type="button"
            className="photo-slot photo-slot-button"
            key={photo}
            onClick={() => open(index)}
            aria-label={`Otvoriť fotografiu ${index + 1}`}
          >
            <Image
              src={`${basePath}/${photo}`}
              alt={`${alt} ${index + 1}`}
              width={1200}
              height={900}
              sizes="(max-width: 640px) 100vw, (max-width: 980px) 50vw, 25vw"
            />
          </button>
        ))}
      </div>

      {activeIndex !== null ? (
        <div
          className="lightbox-backdrop"
          role="dialog"
          aria-modal="true"
          aria-label="Náhľad fotografie"
          onClick={(event) => {
            if (event.target === event.currentTarget) close();
          }}
        >
          <button
            type="button"
            className="lightbox-close"
            onClick={close}
            aria-label="Zavrieť náhľad"
          >
            <X size={22} aria-hidden="true" />
          </button>

          <button
            type="button"
            className="lightbox-nav lightbox-nav-prev"
            onClick={() => goTo("prev")}
            aria-label="Predchádzajúca fotografia"
          >
            <ChevronLeft size={28} aria-hidden="true" />
          </button>

          <div className="lightbox-stage">
            <div
              key={activeIndex}
              className={`lightbox-frame lightbox-frame-${slideDirection}`}
            >
              <Image
                src={`${basePath}/${photos[activeIndex]}`}
                alt={`${alt} ${activeIndex + 1}`}
                width={2400}
                height={1800}
                sizes="100vw"
                priority
              />
            </div>
          </div>

          <button
            type="button"
            className="lightbox-nav lightbox-nav-next"
            onClick={() => goTo("next")}
            aria-label="Nasledujúca fotografia"
          >
            <ChevronRight size={28} aria-hidden="true" />
          </button>

          <p className="lightbox-counter" aria-live="polite">
            {activeIndex + 1} / {photos.length}
          </p>
        </div>
      ) : null}
    </>
  );
}
