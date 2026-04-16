// components/InteractiveHero.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import type { MouseEvent } from "react";

type OrbitPos = {
  x: number;
  y: number;
};

export default function InteractiveHero() {
  const [orbitPos, setOrbitPos] = useState<OrbitPos>({ x: 50, y: 40 });

  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setOrbitPos({ x, y });
  };

  return (
    <section
      className="hero-shell"
      onMouseMove={handleMouseMove}
      aria-label="Intro section"
    >
      <article className="hero-card">
        <div
          className="cursor-orb"
          style={{
            left: `${orbitPos.x}%`,
            top: `${orbitPos.y}%`,
          }}
        />
        <p className="hero-tagline">Creative Technology · UX · Cycling</p>
        <h1 className="hero-title">
          I design{" "}
          <span className="hero-highlight">digital and playful </span>
          experiences.
        </h1>
        <p className="hero-sub">
          I&apos;m Alek, a Creative Technology &amp; Design student at CU
          Boulder. I like mixing bikes, maps, LEDs, and thoughtful UX to make
          tools that feel a little magical and very usable.
        </p>

        {/* <div className="hero-pills">
          <span className="pill">Velo Viz · bike safety capstone</span>
          <span className="pill">UX: Denver Zoo redesign</span>
          <span className="pill">KELA Boba brand &amp; site</span>
          <span className="pill">Interactive JS overlays</span>
        </div> */}

        <div className="hero-cta-row">
          <Link href="/projects" className="button-primary">
            View selected work
          </Link>
          <Link href="/about" className="button-ghost">
            More about me
          </Link>
        </div>
      </article>

      <aside className="hero-side-card">
        <p className="hero-side-title">Play a volume slider game I made while you&apos;re here</p>
        <iframe
          src="https://alekfs.github.io/wa/wa13/wa13.html"
          style={{
            width: "100%",
            height: "100%",
            border: "none",
            borderRadius: "8px",
          }}
          title="Coin Flip Volume Slider Game"
        />
      </aside>
    </section>
  );
}
