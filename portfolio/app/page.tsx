// app/page.tsx
import InteractiveHero from "@/app/components/InteractiveHero";
import ProjectGrid from "@/app/components/ProjectGrid";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <InteractiveHero />
      <section className="page-shell" aria-label="Featured projects">
        <p className="page-kicker">Selected projects</p>
        <h2 className="page-title">Featured projects</h2>
        <p className="page-sub">
          UX audits, capstone prototypes, brand work, and experiments in
          JavaScript and motion.
        </p>
        <ProjectGrid limit={2} />
        <div style={{ marginTop: "2rem", textAlign: "center" }}>
          <Link href="/projects" className="button-primary">
            View all projects
          </Link>
        </div>
      </section>
    </>
  );
}
