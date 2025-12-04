import Image from "next/image";

export default function KelaBobaTeaPage() {
  return (
    <section className="page-shell">
      <p className="page-kicker">Brand &amp; Product Design</p>
      <h1 className="page-title">KELA Boba Tea</h1>
      <p className="page-sub">
        A boba brand that blends illustration, typography, and personal identity.
      </p>

      {/* HERO IMAGE */}
      <div className="detail-hero">
        <Image
          src="/projects/kela-boba-tea/hero.png"
          alt="KELA Boba Tea hero branding"
          width={1200}
          height={700}
        />
      </div>

      {/* INTRO */}
      <article className="detail-body">
        <h2>Overview</h2>
        <p>
          For KELA Boba Tea, I designed a product and brand system that reflects my
          personal identity and visual style. I aimed for a well-balanced design
          that integrates typography and illustration in a way that feels expressive,
          playful, and like something I would genuinely pick up and drink.
        </p>
        <p>
          The brand explores how packaging can communicate personality at a glance,
          using color, shape, and character design to tell a story before anyone even
          takes a sip.
        </p>
      </article>

      {/* PROCESS */}
      <h2>Process</h2>

      <article className="detail-body">
        <p>
          I began by sketching early layout explorations, focusing on how typography
          and illustration would coexist on a small can surface without disrupting
          clarity. These early steps allowed me to balance structure with personality.
        </p>
        <p>
          I experimented with vibrant color palettes and line styles to create a visual
          language that feels playful but still clean and intentional.
        </p>
      </article>

      <div className="detail-hero">
        <Image
            src="/projects/kela-boba-tea/process-1.png"
            alt="Initial sketch and layout exploration"
            width={1200}
            height={700}
        />
        </div>

        <div className="detail-hero" style={{ marginTop: "1.5rem" }}>
        <Image
            src="/projects/kela-boba-tea/process-2.png"
            alt="Refined illustration and color exploration"
            width={1200}
            height={700}
        />
        </div>


      {/* MOCKUPS */}
      <h2>Mockups</h2>

      <article className="detail-body">
        <p>
          After finalizing the brand system, I created product mockups to visualize
          how KELA Boba would appear in real-world settings. These were essential for
          checking visual hierarchy, readability, and brand impact on packaging.
        </p>
      </article>

      <div className="detail-hero">
        <Image
            src="/projects/kela-boba-tea/mockup-1.png"
            alt="KELA Boba Tea can mockup"
            width={1200}
            height={700}
        />
        </div>

        <div className="detail-hero" style={{ marginTop: "1.5rem" }}>
        <Image
            src="/projects/kela-boba-tea/mockup-2.png"
            alt="KELA Boba Tea cup and packaging mockup"
            width={1200}
            height={700}
        />
        </div>


      {/* RENDERS */}
      <h2>Renders in project grid</h2>

      <article className="detail-body">
        <p>
          Final renders show how KELA Boba functions as a complete visual identity: on
          shelves, in promotional scenes, and as part of a cohesive brand world. These
          emphasize consistency, color harmony, and personality.
        </p>
      </article>

      {/* 9 RENDERS */}
      <div className="projects-grid">
        {Array.from({ length: 9 }).map((_, i) => (
          <div className="detail-hero" key={i}>
            <Image
              src={`/projects/kela-boba-tea/render-${i + 1}.png`}
              width={600}
              height={400}
              alt={`KELA Boba Tea render ${i + 1}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
