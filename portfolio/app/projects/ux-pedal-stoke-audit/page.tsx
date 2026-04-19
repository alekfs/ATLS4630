import Image from "next/image";

export default function PedalStokeAuditPage() {
  return (
    <section className="page-shell">
      <p className="page-kicker">UX Case Study</p>
      <h1 className="page-title">Pedal Stoke UX Audit</h1>
      <p className="page-sub">A comprehensive usability evaluation of a Boulder-area custom bike bag company.</p>

      {/* HERO IMAGE */}
      <div className="detail-hero">
        <Image
          src="/projects/ux-pedal-stoke-audit/hero.jpg"
          alt="Pedal Stoke website homepage"
          width={1200}
          height={700}
        />
      </div>

      {/* INTRODUCTION */}
      <article className="detail-body">
        <h2>Introduction</h2>
        <p>
          Pedal Stoke is a Boulder-area custom bike bag company operating at pedalstoke.com. The site's primary
          function is to sell and facilitate orders for a range of customized cycling bags, racks, and mounting
          systems. As an avid cyclist local to Colorado, I approached this audit both as a practitioner of user
          experience design and as a prospective customer, a vantage point that revealed substantial gaps between
          the site's communicative ambitions and the experience it actually delivers.
        </p>

        <h3>Objective</h3>
        <p>
          This audit evaluates Pedal Stoke's website across six dimensions: first impressions and business context,
          persona-driven analysis, heuristic evaluation, information architecture, user journey, and accessibility.
          Together, these lenses reveal a site with a clearly defined product and dedicated audience, but one whose
          visual design, navigational structure, and content strategy consistently undermine user trust and conversion.
        </p>

        <h3>My role</h3>
        <p>
          I was the sole auditor and UX researcher for this project. My responsibilities included conducting
          business context analysis, persona development, heuristic evaluation, card sorting exercises, user
          journey mapping, and accessibility testing.
        </p>
      </article>

      {/* BUSINESS CONTEXT */}
      <h2>Business Context</h2>

      <article className="detail-body">
        <h3>First impressions</h3>
        <ul>
          <li>Oversized elements across the site (large navbar, big text)</li>
          <li>Dominant gray color scheme gives a bold, in-your-face appearance</li>
          <li>Immediate visual focus on product customization and variety</li>
        </ul>

        <h3>Target audience</h3>
        <p><strong>Primary audience:</strong></p>
        <ul>
          <li>Cyclists, particularly Americans in the Boulder area</li>
          <li>Age range: 20–50, with interests in cycling and commuting by bike</li>
        </ul>

        <p><strong>Secondary audience:</strong></p>
        <ul>
          <li>Gift buyers looking for bags for cyclist friends</li>
          <li>Individuals who may not be cyclists but need a bag for their bike</li>
        </ul>

        <h3>Competitors</h3>
        <p>Main competitors include JPaks, Green Guru Gear, Oveja Negra, and Ortlieb.</p>
      </article>

      {/* PERSONA */}
      <h2>Persona-Driven Analysis</h2>

      <article className="detail-body">
        <p>
          To evaluate the site's communication effectiveness beyond my own frame of reference, I constructed
          a user persona: Shufu Shiota, a 21-year-old student and UI/UX intern from Broomfield who is tech-savvy
          and prefers desktop browsing with dynamic screen brightness settings.
        </p>

        <h3>Key insights from persona analysis</h3>
        <ul>
          <li>Homepage feels cluttered with a dark mode aesthetic that is overwhelming</li>
          <li>Key information is hard to locate due to shifting text and UI elements</li>
          <li>Overly large fonts, images, and misaligned objects create a distracting experience</li>
          <li>Accessibility issues include partially clickable navigation and confusing hover effects</li>
          <li>Excessive text and poor visual design make it hard to digest important product information</li>
        </ul>

        <h3>Emotional journey</h3>
        <ul>
          <li><strong>Moment 1:</strong> First impression on the Orbiter page—appreciates detailed info and gifs but is overwhelmed by lengthy text</li>
          <li><strong>Moment 2:</strong> While navigating the Orbiter page—faces frustration due to large text and overwhelming information</li>
          <li><strong>Moment 3:</strong> On the Half Frame Bag section—encounters misaligned text and hover issues, leading to confusion</li>
        </ul>
      </article>

      {/* PERSONA IMAGE */}
      <div className="detail-hero">
        <Image
          src="/projects/ux-pedal-stoke-audit/persona.jpg"
          alt="User persona: Shufu Shiota"
          width={1200}
          height={700}
        />
      </div>

      {/* HEURISTIC EVALUATION */}
      <h2>Heuristic Evaluation</h2>

      <article className="detail-body">
        <p>
          Evaluated against Nielsen's established usability heuristics, Pedal Stoke presents a mixed picture
          with both strengths and critical weaknesses.
        </p>

        <h3>What works well</h3>
        <ul>
          <li>Immediate visual cues (hover effects, clickable color options, navigable images)</li>
          <li>Uses familiar icons and language (shopping cart, social media logos, underlined links)</li>
          <li>Detailed product information is provided</li>
        </ul>
      </article>

      {/* FEEDBACK IMAGE */}
      <div className="detail-hero">
        <Image
          src="/projects/ux-pedal-stoke-audit/feedback.jpg"
          alt="Immediate visual feedback and interaction examples"
          width={1200}
          height={700}
        />
      </div>

      {/* ICONS IMAGE */}
      <div className="detail-hero">
        <Image
          src="/projects/ux-pedal-stoke-audit/icons.jpg"
          alt="Familiar icons and consistent design elements"
          width={1200}
          height={700}
        />
      </div>

      <article className="detail-body">
        <h3>Critical issues</h3>
        <ul>
          <li>Shopping cart is broken and continuously loading</li>
          <li>Some links misbehave (e.g., redirecting to the top of the page)</li>
          <li>Limited options for undoing actions</li>
          <li>Minimal error prevention measures and lack of clear error messages</li>
          <li>Mobile navigation is problematic due to cluttered layouts</li>
        </ul>
      </article>

      {/* LINKS IMAGE */}
      <div className="detail-hero">
        <Image
          src="/projects/ux-pedal-stoke-audit/links.jpg"
          alt="Links that misbehave and redirect incorrectly"
          width={1200}
          height={700}
        />
      </div>

      {/* BROKEN CART IMAGE */}
      <div className="detail-hero">
        <Image
          src="/projects/ux-pedal-stoke-audit/brokencart.jpg"
          alt="Broken shopping cart continuously loading"
          width={1200}
          height={700}
        />
      </div>

      {/* NEWSLETTER IMAGE */}
      <div className="detail-hero">
        <Image
          src="/projects/ux-pedal-stoke-audit/newsletter.jpg"
          alt="Newsletter signup error handling issues"
          width={1200}
          height={700}
        />
      </div>

      {/* VISUAL DESIGN */}
      <h2>Visual Design & Cognitive Biases</h2>

      <article className="detail-body">
        <h3>Cognitive biases identified</h3>
        <ul>
          <li><strong>Confirmation Bias:</strong> Homepage emphasizes free shipping over $150 and highlights rack products, reinforcing assumptions about user priorities</li>
          <li><strong>Anchoring Bias:</strong> The $150 shipping threshold sets a pricing anchor, influencing perceived value and spending decisions</li>
          <li><strong>False Consensus Bias:</strong> Product names like "Li-BAR-ator" lack context, assuming user familiarity with internal naming</li>
          <li><strong>Framing Bias:</strong> Promotions styled to highlight gains (e.g., free shipping), nudging impulse decisions</li>
        </ul>

        <h3>Visual design evaluation</h3>
        <ul>
          <li><strong>Layout & Structure:</strong> Grid-based and logically structured, though mobile product cards feel tight</li>
          <li><strong>Color & Contrast:</strong> Mostly meets accessibility standards, but red usage and icon hover feedback could be improved</li>
          <li><strong>Typography:</strong> Clear hierarchy with limited font use and good readability</li>
          <li><strong>Feedback & Affordances:</strong> Some buttons lack visual cues; hover states inconsistent</li>
        </ul>
      </article>

      {/* LAYOUT ISSUE IMAGES */}
      <div className="detail-hero">
        <Image
          src="/projects/ux-pedal-stoke-audit/layoutissue1.jpg"
          alt="Layout issue example 1: Misaligned elements and spacing problems"
          width={1200}
          height={700}
        />
      </div>

      <div className="detail-hero">
        <Image
          src="/projects/ux-pedal-stoke-audit/layoutissue2.jpg"
          alt="Layout issue example 2: Visual hierarchy and cluttered design"
          width={1200}
          height={700}
        />
      </div>

      {/* INFORMATION ARCHITECTURE */}
      <h2>Information Architecture</h2>

      <article className="detail-body">
        <h3>Card sorting exercise</h3>
        <p>
          I conducted a card sorting exercise with two participants to evaluate the site's navigation structure.
          The exercise revealed strong agreement on primary categories (Racks, Custom Frame Bags, Accessories)
          but confusion around ambiguous product names.
        </p>

        <h3>Areas of confusion</h3>
        <ul>
          <li>Product names like "Clampy", "Components", and "Tools" lacked clarity and caused inconsistent placement</li>
          <li>Both users ignored the "Order Instructions" category, indicating low perceived relevance or unclear labeling</li>
          <li>Users confidently categorized internally named items despite ambiguity, suggesting potential overfamiliarity on the part of the brand</li>
        </ul>

        <h3>Recommendations</h3>
        <ul>
          <li>Clarify product labels—use more intuitive names or hover/tooltips for terms like "Clampy" and "Zip-geist"</li>
          <li>Revise or remove "Order Instructions"—rename to "How to Order" or integrate within relevant product pages</li>
          <li>Test with more users using think-aloud protocols to better understand decision logic</li>
        </ul>
      </article>

      {/* INFORMATION ARCHITECTURE IMAGE */}
      <div className="detail-hero">
        <Image
          src="/projects/ux-pedal-stoke-audit/infoarchitecture.jpg"
          alt="Information architecture and card sorting results"
          width={1200}
          height={700}
        />
      </div>

      {/* USER JOURNEY */}
      <h2>User Journey Evaluation</h2>

      <article className="detail-body">
        <p>
          Mapping the primary user journey from homepage entry through product selection, cart, and checkout
          revealed a workflow that is functional in its broad strokes but compromised by specific, addressable failures.
        </p>

        <h3>What works well</h3>
        <ul>
          <li>Navigation and basic functionality (selecting bags, adding to cart, checking out) are mostly clear and functional</li>
          <li>Checkout and form filling (billing, shipping, payment) are straightforward</li>
          <li>Error handling and form feedback like auto-populating addresses work well</li>
          <li>Final confirmation after order placement is present and effective</li>
        </ul>

        <h3>Biggest pain points</h3>
        <ul>
          <li>Color selection is missing or unclear when adding a bag to the cart</li>
          <li>Visual overlap issues when hovering in navigation and on product details</li>
          <li>Users enter billing info before shipping, which is unconventional and may cause confusion</li>
          <li>Cart viewing is inefficient if users want to immediately check bag details after adding</li>
          <li>Inconsistency in design between pages like payment page vs. homepage</li>
        </ul>
      </article>

      {/* USER JOURNEY IMAGE */}
      <div className="detail-hero">
        <Image
          src="/projects/ux-pedal-stoke-audit/userjourney.jpg"
          alt="User journey map from homepage to checkout"
          width={1200}
          height={700}
        />
      </div>

      {/* ACCESSIBILITY */}
      <h2>Accessibility Evaluation</h2>

      <article className="detail-body">
        <p>
          Accessibility represents the audit's most significant area of concern, and one with direct
          implications for both usability and legal compliance.
        </p>

        <h3>Key issues identified</h3>
        <ol>
          <li>
            <strong>Color Contrast Problems:</strong> Hover text and underlined links fail WCAG contrast
            standards, making them hard to read for users with low vision
          </li>
          <li>
            <strong>Screen Reader Limitations:</strong> Buttons like "home," "checkout," and image arrows
            lack accessible labels. Some text moves unpredictably or is not read aloud
          </li>
          <li>
            <strong>Keyboard Navigation Issues:</strong> Navigation bar is not fully accessible by keyboard;
            some buttons can't be activated, and focus indicators are inconsistent
          </li>
        </ol>

        <h3>Impact</h3>
        <p>
          Many visual features were not accessible by assistive technologies. These gaps can prevent users
          with disabilities from navigating the site or making purchases, reducing usability and inclusivity
          while creating potential legal compliance issues.
        </p>
      </article>

      {/* RECOMMENDATIONS */}
      <h2>Strategic Recommendations</h2>

      <article className="detail-body">
        <h3>High priority</h3>
        <ul>
          <li>Fix the broken shopping cart—this is a critical conversion blocker</li>
          <li>Allow color and add-on selections directly on the product page before adding to cart</li>
          <li>Add alt text to all images and descriptive labels to all interactive elements</li>
          <li>Ensure full keyboard access and visible focus states for all interactive elements</li>
          <li>Adjust color contrast for all interactive text elements to meet WCAG standards</li>
        </ul>

        <h3>Medium priority</h3>
        <ul>
          <li>Reorder form fields to place shipping info before billing</li>
          <li>Fix hover interactions and overlapping UI elements</li>
          <li>Standardize naming and formatting site-wide</li>
          <li>Streamline navigation by adding clearer labels or categories</li>
          <li>Improve content layout with better use of headings</li>
        </ul>

        <h3>Lower priority</h3>
        <ul>
          <li>A/B test featured products and pricing banners to reduce anchoring bias</li>
          <li>Enhance hover/active states and button clarity for stronger feedback</li>
          <li>Adjust mobile padding and layout tightness for better readability</li>
          <li>Promote product diversity beyond rack items and shipping thresholds</li>
          <li>Add a live bag preview or mockup based on selected options</li>
        </ul>
      </article>

      {/* REFLECTION */}
      <h2>Reflection</h2>
      <article className="detail-body">
        <p>
          This audit process highlighted the importance of systematic UX evaluation. By analyzing the site
          through multiple lenses—heuristics, personas, information architecture, and accessibility—I was
          able to identify patterns of issues that likely stem from a lack of user testing and iterative design.
        </p>

        <p>
          The exercise of creating and analyzing through Shufu's persona was particularly valuable. It confirmed
          known issues like clutter and slow performance while uncovering new pain points such as excessive text
          and UI misalignment. This broadened my perspective by considering differences between desktop and
          mobile experiences and built empathy for diverse users.
        </p>

        <p>
          If I were to continue this work, I would conduct additional usability testing with actual Pedal Stoke
          customers to validate these findings and prioritize recommendations based on business impact and
          implementation effort.
        </p>
      </article>

      {/* CONCLUSION */}
      <h2>Conclusion</h2>
      <article className="detail-body">
        <p>
          Pedal Stoke has a clearly defined product and dedicated audience, but critical usability and
          accessibility issues prevent the site from reaching its full potential. The broken shopping cart,
          unclear product customization flow, and accessibility barriers create significant friction in the
          user journey.
        </p>

        <p>
          By addressing the high-priority recommendations—particularly fixing core functionality and improving
          accessibility—Pedal Stoke could dramatically improve user trust, conversion rates, and inclusivity.
          The site's bold visual identity and detailed product information provide a strong foundation; what's
          needed now is a user-centered approach to refining the experience.
        </p>
      </article>
    </section>
  );
}
