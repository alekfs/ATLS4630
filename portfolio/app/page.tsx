// app/page.tsx
import InteractiveHero from "@/app/components/InteractiveHero";
import ProjectGrid from "@/app/components/ProjectGrid";

export default function HomePage() {
  return (
    <>
      <InteractiveHero />
      <section className="page-shell" aria-label="Featured projects">
        <p className="page-kicker">Selected projects</p>
        <h2 className="page-title">A small selection of work</h2>
        <p className="page-sub">
          UX audits, capstone prototypes, brand work, and experiments in
          JavaScript and motion.
        </p>
        <ProjectGrid limit={2} />
      </section>
    </>
  );
}
