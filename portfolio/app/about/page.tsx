// app/about/page.tsx
import type { Metadata } from "next";
import ImageCarousel from "@/app/components/ImageCarousel";
import StravaActivity from "@/app/components/StravaActivity";
import StravaSummary from "@/app/components/StravaSummary";

const carouselImages = [
    { src: "/about/bike-1.jpg", alt: "Growler XC race" },
    { src: "/about/bike-2.jpg", alt: "Crested Butte DH race" },
    { src: "/about/bike-3.jpg", alt: "CX race cross of the north" },
  ];
  

export const metadata: Metadata = {
  title: "About | Alek Feehan-Schuler",
};

export default function AboutPage() {
  return (
    <section className="page-shell">
      <p className="page-kicker">About</p>
      <h1 className="page-title">Hi, I&apos;m Alek.</h1>
      <p className="page-sub">
        I split my time between creative technology, UX, and lots of riding.
      </p>

      <div className="about-grid">
        {/* Top left: about text */}
        <article className="card">
          <h2>About me</h2>
          <p>
            I&apos;m an undergraduate in Creative Technology &amp; Design at CU
            Boulder, with a background in cycling, visual arts, and digital
            fabrication. I like projects that live somewhere between screens and
            streets: things you can ride, click, or interact with in physically
            interesting ways.
          </p>
          <p>
            I grew up between Boulder and Berlin, and I&apos;m bilingual in
            English and German. A lot of my work blends that international
            perspective.
          </p>
          <p>
            When I&apos;m not creating I&apos;m usually riding my biking. Even on the bike 
            I experiment with projects like overlays on cycling footage.
          </p>
        </article>

        {/* Top right: image carousel */}
        <div className="card">
          <h2>Rides in pictures</h2>
          <ImageCarousel images={carouselImages} />
        </div>

        {/* Bottom left: activity log */}
        <div className="card">
          <h2>Activity log</h2>
          <p style={{ fontSize: "0.9rem", color: "var(--muted)" }}>
            A running feed of my latest rides. If you ride in Boulder or the
            Front Range, there&apos;s a good chance you&apos;ll recognize some of
            these routes.
          </p>
          <StravaActivity />
        </div>

        {/* Bottom right: summary widget */}
        <div className="card">
          <h2>Summary</h2>
          <p style={{ fontSize: "0.9rem", color: "var(--muted)" }}>
            Quick snapshot of recent distance, ride time, and elevation from my
            Strava profile.
          </p>
          <StravaSummary />
        </div>
      </div>
    </section>
  );
}
