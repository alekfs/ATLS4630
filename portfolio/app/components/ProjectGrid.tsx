// components/ProjectGrid.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/lib/projects";
import { projects } from "@/lib/projects";

interface ProjectGridProps {
  limit?: number;
}

export default function ProjectGrid({ limit }: ProjectGridProps) {
  const list: Project[] =
    typeof limit === "number" ? projects.slice(0, limit) : projects;

  return (
    <div className="projects-grid">
      {list.map((project) => (
        <Link
          key={project.slug}
          href={`/projects/${project.slug}`}
          className="project-card"
        >
          <div className="project-image-wrap">
            <Image
                src={project.heroSrc}
                alt={project.title}
                width={800}
                height={450}
                unoptimized={project.heroSrc.endsWith(".gif")}
            />
          </div>
          <div className="project-content">
            <p className="project-tagline">{project.role}</p>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-meta">{project.tagline}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
