import Image from "next/image";

export default function VeloVizPage() {
  return (
    <section className="page-shell">
      <p className="page-kicker">Capstone Project</p>
      <h1 className="page-title">Velo Viz</h1>
      <p className="page-sub">
        A bike-mounted LED visibility system for safer riding.
      </p>

      {/* HERO IMAGE */}
      <div className="detail-hero">
        <Image
          src="/projects/velo-viz/hero.jpg"
          alt="Velo Viz Hero Image"
          width={1200}
          height={700}
        />
      </div>

      {/* INTRO */}
      <article className="detail-body">
        <p>
          <strong>Velo Viz</strong> is a bike-mounted LED system designed to
          enhance visibility and safety. It combines dynamic lighting with
          proximity sensors to provide real-time feedback for cars when passing.
        </p>

        <p>
          I’ve experienced firsthand the challenges of bike safety, especially
          the risk of collisions with cars. This system is built for riders who
          want increased security and visibility during nighttime rides.
        </p>

        <p>
          Velo Viz is more than a product; it's a community-driven safety
          solution. With detailed, cost-effective open-source documentation,
          anyone can build and customize their own version.
        </p>
      </article>

      {/* ITERATION 1 */}
      <h2>Iteration 1</h2>
      <div className="detail-hero">
        <Image
          src="/projects/velo-viz/iteration1-1.jpg"
          alt="Iteration 1 photo 1"
          width={1200}
          height={700}
        />
      </div>
      <div className="detail-hero">
        <Image
          src="/projects/velo-viz/iteration1-2.jpg"
          alt="Iteration 1 photo 2"
          width={1200}
          height={700}
        />
      </div>

      <article className="detail-body">
        <p>
          Tested the first iteration with cycling friends and gathered great
          insights for Prototype 2.
        </p>

        <h3>What I learned</h3>
        <ul>
          <li>
            Indoor testers weren’t sure what the device was meant to do (testing
            outdoors is necessary).
          </li>
          <li>
            Users followed instructions well and understood how to power on the
            device.
          </li>
          <li>
            Confusion around power source, switch placement, and lack of mounting.
          </li>
        </ul>

        <h3>Next Steps</h3>
        <ul>
          <li>Test outdoors on an actual bike.</li>
          <li>Switch from power bank to a lightweight 9V battery.</li>
          <li>Place LEDs in dynamic bike components (spokes, cranks, pedals).</li>
          <li>Add wearable LEDs via Bluetooth (wrist/leg bands).</li>
          <li>
            Additional function: prevent pant legs from catching in the chain.
          </li>
        </ul>
      </article>

      {/* ITERATION 2 */}
      <h2>Iteration 2</h2>

      <div className="detail-hero">
        <Image
          src="/projects/velo-viz/iteration2.gif"
          alt="Iteration 2 main GIF"
          width={1200}
          height={700}
          unoptimized
        />
      </div>

      {/* Four GIFs */}
      <div className="projects-grid">
        <div className="detail-hero">
          <Image
            src="/projects/velo-viz/iteration2-1.gif"
            width={420}
            height={420}
            className="iteration-gif"
            alt="Iteration 2 GIF 1"
            unoptimized
          />
        </div>
        <div className="detail-hero">
          <Image
            src="/projects/velo-viz/iteration2-2.gif"
            width={420}
            height={420}
            className="iteration-gif"
            alt="Iteration 2 GIF 2"
            unoptimized
          />
        </div>
        <div className="detail-hero">
          <Image
            src="/projects/velo-viz/iteration2-3.gif"
            width={420}
            height={420}
            className="iteration-gif"
            alt="Iteration 2 GIF 3"
            unoptimized
          />
        </div>
        <div className="detail-hero">
          <Image
            src="/projects/velo-viz/iteration2-4.gif"
            width={420}
            height={420}
            className="iteration-gif"
            alt="Iteration 2 GIF 4"
            unoptimized
          />
        </div>
      </div>

      <article className="detail-body">
        <p>
          Fully functional LED patterns connected to an Arduino Uno R3. The new
          iteration improves visibility from all angles.
        </p>
        <p>
          Additional spoke-mounted LEDs add movement and enhance the cyclist’s
          side visibility, especially at intersections where car visibility is
          critical.
        </p>
      </article>

      {/* ITERATION 3 */}
      <h2>Iteration 3</h2>

      <div className="detail-hero">
        <Image
          src="/projects/velo-viz/iteration3.jpg"
          alt="Iteration 3 photo"
          width={1200}
          height={700}
        />
      </div>
    </section>
  );
}
