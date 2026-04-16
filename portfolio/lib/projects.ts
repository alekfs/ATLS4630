// lib/projects.ts

export type Project = {
    slug: string;
    title: string;
    role: string;
    tagline: string;
    heroSrc: string;
  };
  
  export const projects: Project[] = [
    {
      slug: "ux-denver-zoo-redesign",
      title: "UX Denver Zoo Redesign",
      role: "UX · interaction design",
      tagline: "Accessibility-focused ticketing & nav audit.",
      heroSrc: "/projects/denver-zoo.jpg",
    },
    {
      slug: "velo-viz-capstone-project",
      title: "Velo Viz: Capstone Project",
      role: "Creative tech · hardware",
      tagline: "Bike-mounted LEDs + LiDAR for safer urban rides.",
      heroSrc: "/projects/velo-viz.jpg",
    },
    {
      slug: "kela-boba-tea",
      title: "KELA Boba Tea",
      role: "Brand · web",
      tagline: "Visual identity and responsive landing page.",
      heroSrc: "/projects/kela-boba.jpg",
    },
    {
        slug: "interactive-javascript",
        title: "Interactive JavaScript",
        role: "Frontend · motion",
        tagline: "Tiny experiments in JS, HUD overlays and games.",
        heroSrc: "/projects/interactive-js.gif",
      },
      {
        slug: "ai-projects",
        title: "AI Projects",
        role: "AI · machine learning",
        tagline: "Exploring artificial intelligence and machine learning applications.",
        heroSrc: "/projects/ai-projects/hero.png",
      },

  ];
  
  export function getProjects(): Project[] {
    return projects;
  }
  
  export function getProjectBySlug(slug: string): Project | undefined {
    return projects.find((p) => p.slug === slug);
  }
  