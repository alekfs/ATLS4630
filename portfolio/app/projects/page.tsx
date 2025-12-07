// app/projects/page.tsx
import type { Metadata } from "next";
import ProjectGrid from "@/app/components/ProjectGrid";

export const metadata: Metadata = {
  title: "Projects | Alek Feehan-Schuler",
};

export default function ProjectsPage() {
  return (
    <section className="page-shell">
      <p className="page-kicker">Projects</p>
      <h1 className="page-title">Personal projects &amp; case studies</h1>
      <p className="page-sub">
        From UX audits and capstone research to playful overlays and branding,
        these projects represent the things I&apos;m most excited about right
        now.
      </p>

      <ProjectGrid />
    </section>
  );
}