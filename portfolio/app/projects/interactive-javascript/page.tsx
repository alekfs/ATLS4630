import Image from "next/image";

export default function InteractiveJavaScriptPage() {
  return (
    <section className="page-shell">
      <p className="page-kicker">Frontend Experiments</p>
      <h1 className="page-title">Interactive JavaScript</h1>
      <p className="page-sub">
        Small, focused experiments with HTML, CSS, and JavaScript to explore motion,
        interaction, and playful UI.
      </p>

      {/* HERO GIF */}
      <div className="detail-hero">
        <Image
          src="/projects/interactive-javascript/hero.gif"
          alt="Interactive text following cursor"
          width={1200}
          height={700}
          unoptimized
        />
      </div>

      <article className="detail-body">
        <h2>Cursor-following text</h2>
        <p>
          This project combines HTML, CSS, and JavaScript to display interactive text
          (my name) that follows the user&apos;s cursor around the screen. It&apos;s a
          simple but fun way to explore event listeners, transform updates, and
          micro-animations driven by pointer movement.
        </p>
        <p>
          The core idea is to treat the text as a lightweight, responsive layer that
          responds to user input in real time, without feeling jittery or distracting.
        </p>

        <div className="hero-cta-row" style={{ marginTop: "1rem" }}>
          {/* You can replace "#" with the real URL to the live demo */}
          <a href="https://alekfs.github.io/js/js.html" className="button-primary">
            Try it out yourself 
          </a>
          {/* And this one with your full write-up or repo */}
          <a href="https://github.com/alekfs/alekfs.github.io/tree/main/js" className="button-ghost">
            Full documentation
          </a>
        </div>
      </article>

      <h2>More interactive JavaScript projects</h2>

      <article className="detail-body">
        <h3>Coin Flip Volume Slider</h3>
        <p>
          A playful UI idea that combines a coin flip concept with a volume slider.
          The interface reacts to user input with subtle motion and visual feedback,
          making simple controls feel more dynamic and game-like.
        </p>
      </article>

      <div className="detail-hero">
        <Image
          src="/projects/interactive-javascript/coin-flip.gif"
          alt="Coin flip volume slider animation"
          width={1200}
          height={700}
          unoptimized
        />
      </div>

      <article className="detail-body">
        <p>
          This experiment focuses on timing, easing, and how micro-interactions can
          make even basic controls feel more satisfying to use.
        </p>

        <div className="hero-cta-row" style={{ marginTop: "0.5rem" }}>
          {/* Point this to the GitHub repo or CodePen when ready */}
          <a href="https://alekfs.github.io/wa/wa13/wa13.html" className="button-primary">
            Try it out yourself
          </a>
        </div>
      </article>
    </section>
  );
}
