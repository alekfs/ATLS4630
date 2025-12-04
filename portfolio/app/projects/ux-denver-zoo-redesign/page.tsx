import Image from "next/image";

export default function UXZooPage() {
  return (
    <section className="page-shell">
      <p className="page-kicker">UX Case Study</p>
      <h1 className="page-title">Denver Zoo Website Redesign</h1>
      <p className="page-sub">Streamlining ticketing for a clearer, faster user experience.</p>

      {/* HERO IMAGE */}
      <div className="detail-hero">
        <Image
          src="/projects/ux-denver-zoo-redesign/hero.jpg"
          alt="Denver Zoo UX Redesign Hero"
          width={1200}
          height={700}
        />
      </div>

      {/* INTRODUCTION */}
      <article className="detail-body">
        <h2>Introduction</h2>
        <p>
          For this project, I assessed the user experience of the Denver Zoo's website and proposed a redesign.
          The current site is confusing and time-consuming, making it difficult for users to buy tickets. 
          The redesigned version streamlines the ticket purchasing process, making it more efficient and user-friendly.
        </p>

        <h3>My role</h3>
        <p>
          I was the only designer and researcher for this project. My responsibilities included conducting user 
          tests and creating low, mid, and high-fidelity designs.
        </p>

        <h3>Challenge</h3>
        <p>
          Denver Zoo visitors need a way to purchase tickets quickly and easily online because the current process 
          can be confusing and time-consuming. They want to streamline the experience so they can enjoy more of 
          their time at the zoo.
        </p>
      </article>

      {/* RESEARCH */}
      <h2>Research</h2>

      <article className="detail-body">
        <h3>User testing of the current experience</h3>
        <p>
          To evaluate the Denver Zoo’s ticketing experience, I conducted usability testing with five participants 
          who met the screening criteria. Each participant walked through the ticket-buying flow while I observed 
          their interactions and captured feedback.
        </p>

        <p><strong>Key pain points:</strong></p>
        <ul>
          <li>Overcrowded homepage made it difficult to prioritize actions</li>
          <li>Unclear ticket categories and inconsistent visibility of important buttons</li>
          <li>Frustration with the calendar interaction</li>
          <li>Lack of confirmation feedback when adding items to the cart</li>
          <li>Users often lost track of progress; the process took too long</li>
        </ul>

        <p>
          These findings revealed opportunities to streamline navigation, clarify ticket options and add-ons,
          improve purchase-flow feedback, and declutter the cart summary for a smoother experience.
        </p>
      </article>

      {/* Sticky Note Image */}
      <div className="detail-hero">
        <Image
          src="/projects/ux-denver-zoo-redesign/sticky-notes.jpg"
          alt="User research sticky notes"
          width={1200}
          height={700}
        />
      </div>

      {/* COMPETITIVE ANALYSIS */}
      <article className="detail-body">
        <h3>Competitive analysis</h3>
        <p>
          I compared the Denver Zoo site to the Denver Museum of Nature & Science, Meow Wolf, and Elitch Gardens 
          to identify strengths and opportunities.
        </p>

        <p><strong>How might we…</strong></p>
        <ol>
          <li>Make the homepage and ticketing navigation clearer?</li>
          <li>Improve the add-ons page with better visuals and intuitive selection?</li>
          <li>Streamline the cart and checkout process to reduce confusion?</li>
        </ol>
      </article>

      <div className="detail-hero">
        <Image
          src="/projects/ux-denver-zoo-redesign/analysis.jpg"
          alt="Competitive analysis"
          width={1200}
          height={700}
        />
      </div>

      {/* DESIGN */}
      <h2>Design</h2>

      <article className="detail-body">
        <h3>User flow</h3>
        <p>
          I designed a simplified ticket-buying flow starting from the homepage and guiding users through tickets, 
          add-ons, a review step, and confirmation. A Login/Guest Checkout option reduces friction, while a dedicated 
          Review Cart screen improves transparency and confidence.
        </p>
      </article>

      <div className="detail-hero">
        <Image
          src="/projects/ux-denver-zoo-redesign/userflow.jpg"
          alt="User flow sketches"
          width={1200}
          height={700}
        />
      </div>

      {/* LOW-FI */}
      <h3>Low-fidelity wireframes</h3>
      <div className="detail-hero">
        <Image
          src="/projects/ux-denver-zoo-redesign/lofi.jpg"
          alt="Low fidelity wireframes"
          width={1200}
          height={700}
        />
      </div>

      {/* MID-FIDELITY WIREFRAMES (8 PNG IMAGES) */}
      <h3>Mid-fidelity wireframes</h3>
      <div className="projects-grid">
        {Array.from({ length: 8 }).map((_, i) => (
          <div className="detail-hero" key={i}>
            <Image
              src={`/projects/ux-denver-zoo-redesign/midfi${i + 1}.png`}
              width={600}
              height={400}
              alt={`Mid fidelity wireframe ${i + 1}`}
            />
          </div>
        ))}
      </div>

      {/* HIGH-FI (NOW PNG) */}
      <h3>High-fidelity interactive prototype</h3>
      <div className="projects-grid">
        {Array.from({ length: 8 }).map((_, i) => (
          <div className="detail-hero" key={i}>
            <Image
              src={`/projects/ux-denver-zoo-redesign/hifi${i + 1}.png`}
              width={600}
              height={400}
              alt={`High fidelity ${i + 1}`}
            />
          </div>
        ))}
      </div>

      {/* INSTRUCTOR FEEDBACK */}
      <h2>Instructor feedback</h2>
      <article className="detail-body">
        <p>
          Throughout the design process, I received valuable feedback across all fidelity levels.
        </p>

        <h3>Low-fidelity</h3>
        <ul>
          <li>Use sentence case for text</li>
          <li>Wireframe full pages, not partials</li>
          <li>Use a progress stepper instead of accordions</li>
          <li>Improve quantity input usability</li>
          <li>Include both empty and filled versions of forms</li>
        </ul>

        <h3>Mid-fidelity</h3>
        <ul>
          <li>Maintain consistent spacing (multiples of 8)</li>
          <li>Ensure 72px padding between final element and footer</li>
          <li>Clarify text hierarchy</li>
        </ul>

        <h3>High-fidelity</h3>
        <ul>
          <li>Use sentence case throughout</li>
          <li>Ensure AA color contrast compliance</li>
          <li>Left-align all text</li>
          <li>Improve structure of Review page</li>
        </ul>
      </article>

      {/* USER TESTING RESULTS */}
      <h2>Evaluation & Results</h2>
      <article className="detail-body">
        <h3>User testing process & pain points</h3>
        <p>
          I conducted two usability tests on the high-fidelity prototype. Participants evaluated each screen while I
          observed interaction patterns and captured pain points.
        </p>

        <p><strong>Key findings:</strong></p>
        <ul>
          <li>User #1 was confused by the nav bar and expected to buy tickets from “Visit.”</li>
          <li>The homepage felt overwhelming but informative.</li>
          <li>
            User #2 found the pricing/ticketing process chaotic and unclear—especially selecting quantities before
            entering information.
          </li>
          <li>
            The Confirmation page layout needed clearer hierarchy and more visual communication.
          </li>
        </ul>
      </article>

      <div className="detail-hero">
        <Image
          src="/projects/ux-denver-zoo-redesign/usertest.jpg"
          width={1200}
          height={700}
          alt="User test documentation"
        />
      </div>

      {/* UPDATES */}
      <h2>Updates</h2>
      <article className="detail-body">
        <p>
          Based on user feedback, I plan to redesign the homepage navigation with a clearer “Get Tickets” button and
          stronger color contrast.
        </p>

        <p>
          I will reorganize spacing and hierarchy on the pricing page for better clarity—avoiding table-like layouts and
          simplifying the information order.
        </p>

        <p>
          For the Confirmation page, I will restructure the layout so information appears in the order users provided it:
          tickets → add-ons → total price → customer info.
        </p>
      </article>

      {/* REFLECTION */}
      <h2>Reflection</h2>
      <article className="detail-body">
        <p>
          If I had more time, I would incorporate more visual branding from the Denver Zoo, experiment with richer UI 
          patterns, and refine the progress stepper and input system.
        </p>

        <p>
          As my first UX project, this experience taught me the importance of research, iteration, and consistent 
          usability testing. Even small changes can dramatically improve the user experience.
        </p>
      </article>

      <h2>Conclusion</h2>
      <article className="detail-body">
        <p>
          This project strengthened my understanding of user-centered design. I gained confidence in synthesizing 
          insights, designing structured flows, and applying feedback to build a more intuitive, accessible, and 
          enjoyable digital experience for zoo visitors.
        </p>
      </article>
    </section>
  );
}