"use client";

import Image from "next/image";
import Script from "next/script";

export default function AIProjectsPage() {
  return (
    <>
    <section className="page-shell">
      <p className="page-kicker">AI & Machine Learning</p>
      <h1 className="page-title">AI Projects</h1>
      <p className="page-sub">
        Exploring the frontiers of artificial intelligence and machine learning.
      </p>

      {/* HERO IMAGE - 2/3 layout with DemoNats */}
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', height: '500px' }}>
        <div style={{ flex: '2', height: '100%' }}>
          <Image
            src="/projects/ai-projects/hero.png"
            alt="AI Projects Hero Image"
            width={1200}
            height={700}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        <div style={{ flex: '1', height: '100%' }}>
          <Image
            src="/projects/ai-projects/demoNats.png"
            alt="Cyclocross National Championships Collegiate Race Demo"
            width={400}
            height={711}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      </div>

      {/* INTRO */}
      <article className="detail-body">
        <p>
          <strong>AI Projects</strong> showcases my work leveraging artificial
          intelligence to solve real-world problems—from automating video
          production workflows to streamlining business operations.
        </p>

        <p>
          These projects demonstrate practical applications of AI and automation,
          focusing on tools that enhance productivity and create value for users
          and businesses.
        </p>

        <p>
          Each project combines modern AI technologies with domain-specific
          knowledge to deliver solutions that are both functional and scalable.
        </p>
      </article>

      {/* PROJECT 1 - Cycling Overlay */}
      <h2>Cycling Telemetry Overlay Generator</h2>

      {/* YouTube Video - Boulder Cup */}
      <div className="detail-hero" style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
        <iframe
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
          src="https://www.youtube.com/embed/3ofbPLSPUEA?start=5"
          title="Boulder Cup Cyclocross Race with Telemetry Overlay"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      <article className="detail-body">
        <p>
          A Python-based tool that transforms FIT file data from cycling
          computers into professional video overlays. The system generates
          green-screen compatible videos displaying real-time metrics
          synchronized with ride data.
        </p>

        <p>
          As both a cyclist and developer, I wanted to create a tool that would
          make it easy to produce engaging cycling videos with professional
          telemetry overlays—without expensive software or manual editing.
        </p>

        <h3>Key Features</h3>
        <ul>
          <li>Power output visualization with color gradients</li>
          <li>Speed gauge showing velocity in km/h</li>
          <li>Cadence display indicating RPM values</li>
          <li>Heart rate monitor displaying BPM</li>
          <li>GPS map with route tracking and trail visualization</li>
          <li>Smooth animations using easing functions</li>
        </ul>

        <h3>Technology Stack</h3>
        <ul>
          <li>Python 3.7+ for core processing</li>
          <li>fitparse for parsing cycling computer data</li>
          <li>Pillow (PIL) for image rendering</li>
          <li>OpenCV for video generation</li>
          <li>NumPy for data interpolation</li>
        </ul>

        <h3>How It Works</h3>
        <ul>
          <li>
            Processes FIT files by interpolating sensor data (1-second intervals)
            to generate frames at 30 fps
          </li>
          <li>
            Renders each frame with current metric values and smooth transitions
          </li>
          <li>
            Outputs MP4 video with pure green background (RGB: 0, 255, 0) for
            chromakey compositing
          </li>
          <li>
            Processes a 45-minute ride (~81,000 frames) in 5-10 minutes
          </li>
        </ul>

      </article>

      {/* Vertical Layout Section */}
      <h3>Vertical Layout for Social Media</h3>
      <article className="detail-body">
        <p>
          Created a vertical layout optimized for Instagram and other social
          media platforms. This version maintains all telemetry features while
          fitting the 9:16 aspect ratio for mobile viewing.
        </p>
      </article>

      {/* Instagram Reel - Nationals */}
      <div style={{ display: 'flex', justifyContent: 'center', padding: '2rem 0' }}>
        <blockquote
          className="instagram-media"
          data-instgrm-captioned
          data-instgrm-permalink="https://www.instagram.com/reel/DSVEfI7kW2Z/?utm_source=ig_embed&amp;utm_campaign=loading"
          data-instgrm-version="14"
          style={{
            background: '#FFF',
            border: 0,
            borderRadius: '3px',
            boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
            margin: '1px',
            maxWidth: '540px',
            minWidth: '326px',
            padding: 0,
            width: '99.375%'
          }}
        >
          <div style={{ padding: '16px' }}>
            <a
              href="https://www.instagram.com/reel/DSVEfI7kW2Z/?utm_source=ig_embed&amp;utm_campaign=loading"
              style={{
                background: '#FFFFFF',
                lineHeight: 0,
                padding: '0 0',
                textAlign: 'center',
                textDecoration: 'none',
                width: '100%'
              }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <div style={{ backgroundColor: '#F4F4F4', borderRadius: '50%', flexGrow: 0, height: '40px', marginRight: '14px', width: '40px' }}></div>
                <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'center' }}>
                  <div style={{ backgroundColor: '#F4F4F4', borderRadius: '4px', flexGrow: 0, height: '14px', marginBottom: '6px', width: '100px' }}></div>
                  <div style={{ backgroundColor: '#F4F4F4', borderRadius: '4px', flexGrow: 0, height: '14px', width: '60px' }}></div>
                </div>
              </div>
              <div style={{ padding: '19% 0' }}></div>
              <div style={{ display: 'block', height: '50px', margin: '0 auto 12px', width: '50px' }}>
                <svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="http://www.w3.org/2000/svg">
                  <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g transform="translate(-511.000000, -20.000000)" fill="#000000">
                      <g>
                        <path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path>
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
              <div style={{ paddingTop: '8px' }}>
                <div style={{ color: '#3897f0', fontFamily: 'Arial,sans-serif', fontSize: '14px', fontStyle: 'normal', fontWeight: 550, lineHeight: '18px' }}>View this post on Instagram</div>
              </div>
              <div style={{ padding: '12.5% 0' }}></div>
              <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '14px', alignItems: 'center' }}>
                <div>
                  <div style={{ backgroundColor: '#F4F4F4', borderRadius: '50%', height: '12.5px', width: '12.5px', transform: 'translateX(0px) translateY(7px)' }}></div>
                  <div style={{ backgroundColor: '#F4F4F4', height: '12.5px', transform: 'rotate(-45deg) translateX(3px) translateY(1px)', width: '12.5px', flexGrow: 0, marginRight: '14px', marginLeft: '2px' }}></div>
                  <div style={{ backgroundColor: '#F4F4F4', borderRadius: '50%', height: '12.5px', width: '12.5px', transform: 'translateX(9px) translateY(-18px)' }}></div>
                </div>
                <div style={{ marginLeft: '8px' }}>
                  <div style={{ backgroundColor: '#F4F4F4', borderRadius: '50%', flexGrow: 0, height: '20px', width: '20px' }}></div>
                  <div style={{ width: 0, height: 0, borderTop: '2px solid transparent', borderLeft: '6px solid #f4f4f4', borderBottom: '2px solid transparent', transform: 'translateX(16px) translateY(-4px) rotate(30deg)' }}></div>
                </div>
                <div style={{ marginLeft: 'auto' }}>
                  <div style={{ width: '0px', borderTop: '8px solid #F4F4F4', borderRight: '8px solid transparent', transform: 'translateY(16px)' }}></div>
                  <div style={{ backgroundColor: '#F4F4F4', flexGrow: 0, height: '12px', width: '16px', transform: 'translateY(-4px)' }}></div>
                  <div style={{ width: 0, height: 0, borderTop: '8px solid #F4F4F4', borderLeft: '8px solid transparent', transform: 'translateY(-4px) translateX(8px)' }}></div>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'center', marginBottom: '24px' }}>
                <div style={{ backgroundColor: '#F4F4F4', borderRadius: '4px', flexGrow: 0, height: '14px', marginBottom: '6px', width: '224px' }}></div>
                <div style={{ backgroundColor: '#F4F4F4', borderRadius: '4px', flexGrow: 0, height: '14px', width: '144px' }}></div>
              </div>
            </a>
            <p style={{ color: '#c9c8cd', fontFamily: 'Arial,sans-serif', fontSize: '14px', lineHeight: '17px', marginBottom: 0, marginTop: '8px', overflow: 'hidden', padding: '8px 0 7px', textAlign: 'center', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              <a href="https://www.instagram.com/reel/DSVEfI7kW2Z/?utm_source=ig_embed&amp;utm_campaign=loading" style={{ color: '#c9c8cd', fontFamily: 'Arial,sans-serif', fontSize: '14px', fontStyle: 'normal', fontWeight: 'normal', lineHeight: '17px', textDecoration: 'none' }} target="_blank" rel="noopener noreferrer">A post shared by Alek Feehan-Schuler (@itzalek_)</a>
            </p>
          </div>
        </blockquote>
      </div>

      {/* Full Documentation Section */}
      <h3>Full Documentation</h3>
      <article className="detail-body">
        <p>
          For complete technical documentation, installation instructions, and
          source code, visit the project repository on GitHub. The repository
          includes detailed setup guides, configuration options, and example
          files to help you get started.
        </p>
        <p>
          <a
            href="https://github.com/alekfs/Cycling-Overlay"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              padding: '0.75rem 1.5rem',
              background: '#24292e',
              color: '#fff',
              borderRadius: '6px',
              textDecoration: 'none',
              fontWeight: '600',
              marginTop: '1rem'
            }}
          >
            View on GitHub →
          </a>
        </p>
      </article>

      {/* PROJECT 2 - BuyTheMojo AI Automation */}
      <h2>AI Sales Automation at BuyTheMojo</h2>
      <div className="detail-hero">
        <Image
          src="/projects/ai-projects/buythemojo-automation.jpg"
          alt="BuyTheMojo AI Automation"
          width={1200}
          height={700}
        />
      </div>

      <article className="detail-body">
        <p>
          Developed AI-powered automation tools to streamline sales detail
          record management for e-commerce shipments, integrating with eBay and
          Shopify APIs to eliminate manual data entry and reduce errors.
        </p>

        <p>
          Working at BuyTheMojo, I identified opportunities to automate
          time-consuming manual processes in our shipment workflow. The solution
          saves hours of manual work daily while improving data accuracy.
        </p>

        <h3>Key Features</h3>
        <ul>
          <li>Automated extraction of sales data from eBay and Shopify</li>
          <li>AI-powered data normalization and validation</li>
          <li>Intelligent matching of orders across platforms</li>
          <li>Automated generation of shipment detail records</li>
          <li>Error detection and reporting system</li>
          <li>Bulk processing for high-volume operations</li>
        </ul>

        <h3>Technologies Used</h3>
        <ul>
          <li>Python for automation scripts</li>
          <li>eBay and Shopify REST APIs</li>
          <li>AI/ML for data parsing and pattern recognition</li>
          <li>Database integration for record management</li>
          <li>Automated scheduling and monitoring</li>
        </ul>

        <h3>Business Impact</h3>
        <ul>
          <li>Reduced manual data entry time by 80%</li>
          <li>Improved data accuracy and consistency</li>
          <li>Enabled faster shipment processing</li>
          <li>Freed up team capacity for higher-value tasks</li>
          <li>Scalable solution supporting business growth</li>
        </ul>

        <h3>Challenges Solved</h3>
        <ul>
          <li>
            Handling inconsistent data formats across different platforms
          </li>
          <li>
            Building robust error handling for API rate limits and failures
          </li>
          <li>
            Creating intelligent matching algorithms for duplicate detection
          </li>
          <li>
            Ensuring data security and compliance with platform policies
          </li>
        </ul>
      </article>
    </section>

    {/* Instagram Embed Script */}
    <Script
      src="//www.instagram.com/embed.js"
      strategy="lazyOnload"
      onLoad={() => {
        if ((window as any).instgrm) {
          (window as any).instgrm.Embeds.process();
        }
      }}
    />
    </>
  );
}
