// components/ImageCarousel.tsx
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type CarouselImage = {
  src: string;
  alt: string;
};

interface ImageCarouselProps {
  images: CarouselImage[];
  autoAdvanceMs?: number;
}

export default function ImageCarousel({
  images,
  autoAdvanceMs = 5000,
}: ImageCarouselProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const id = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, autoAdvanceMs);

    return () => window.clearInterval(id);
  }, [images.length, autoAdvanceMs]);

  const go = (direction: "next" | "prev") => {
    setIndex((prev) => {
      if (direction === "next") return (prev + 1) % images.length;
      return (prev - 1 + images.length) % images.length;
    });
  };

  if (!images || images.length === 0) return null;

  // key bit: width is N * 100%, translate is 100 / N per slide
  const trackWidth = images.length * 100;
  const offset = (index * 100) / images.length;

  return (
    <div className="carousel-shell">
      <div
        className="carousel-track"
        style={{
          width: `${trackWidth}%`,
          transform: `translateX(-${offset}%)`,
        }}
      >
        {images.map((img, i) => (
          <div className="carousel-slide" key={img.src + i}>
            <Image
              src={img.src}
              alt={img.alt}
              width={1200}
              height={800}
              priority={i === 0}
            />
          </div>
        ))}
      </div>

      <div className="carousel-controls">
        <button
          type="button"
          className="carousel-button"
          onClick={() => go("prev")}
        >
          ◀
        </button>
        <div className="carousel-dots" aria-hidden="true">
          {images.map((_, i) => (
            <div
              key={i}
              className={
                "carousel-dot" + (i === index ? " carousel-dot--active" : "")
              }
            />
          ))}
        </div>
        <button
          type="button"
          className="carousel-button"
          onClick={() => go("next")}
        >
          ▶
        </button>
      </div>
    </div>
  );
}