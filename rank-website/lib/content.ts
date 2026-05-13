export const site = {
  brand: "RANK",
  fullName: "RANK ENGINEERING SERVICES",
  tagline: "Engineering Excellence, Built to Rank.",
  nav: [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "About", href: "#about" },
  ],
  contactHref: "#contact",
} as const;

export const hero = {
  eyebrow: "RANK Engineering Services",
  titleLine1: "Contractor, Civil Works",
  titleLine2: "Electrical & Mechanical Works Services",
  subtitle:
    "Building the future with the expertise, precision, and excellence that puts every project in a league of its own.",
  ctaLabel: "Learn More",
  ctaHref: "#services",
  backgroundImage:
    "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=2400&q=80",
  established: "EST. 2024",
  stats: [
    { value: "5+", label: "Engineering Specialties" },
    { value: "10+", label: "Projects Delivered" },
    { value: "100%", label: "Licensed & Insured" },
    { value: "24/7", label: "Client Support" },
  ],
} as const;

export type ServiceCard = {
  title: string;
  body: string;
  image: string;
  icon: "infrastructure" | "commercial" | "urban";
};

export const services: ServiceCard[] = [
  {
    title: "Infrastructure Development",
    body: "Bridges, highways, and transit corridors engineered for resilience, longevity, and the communities they serve.",
    image:
      "https://images.unsplash.com/photo-1473042904451-00171c69419d?auto=format&fit=crop&w=1400&q=80",
    icon: "infrastructure",
  },
  {
    title: "Commercial Buildings",
    body: "Smart, sustainable commercial structures designed to elevate brands and inspire the people inside them.",
    image:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1400&q=80",
    icon: "commercial",
  },
  {
    title: "Urban Solutions",
    body: "End-to-end urban planning and engineering that turns growing cities into liveable, future-ready places.",
    image:
      "https://images.unsplash.com/photo-1494522855154-9297ac14b55f?auto=format&fit=crop&w=1400&q=80",
    icon: "urban",
  },
];

export const about = {
  heading: "About Us",
  body: "RANK Engineering Services is a multidisciplinary engineering and construction firm trusted by leading developers, public agencies, and global brands. For more than two decades we have delivered landmark projects on time, on budget, and built to last.",
  image:
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80",
  expertiseHeading: "Our Expertise",
  expertise: [
    {
      title: "Advanced Engineering",
      body: "Structural, civil, MEP, and digital engineering under one roof.",
      icon: "engineering" as const,
    },
    {
      title: "Strategic Planning",
      body: "Master planning and feasibility studies that de-risk every project.",
      icon: "strategy" as const,
    },
    {
      title: "Sustainable Solutions",
      body: "Low-carbon design, materials, and certification expertise.",
      icon: "sustainable" as const,
    },
    {
      title: "Scalable Solutions",
      body: "Repeatable systems and BIM workflows that scale from one site to fifty.",
      icon: "scalable" as const,
    },
  ],
  ctaLabel: "Global Reach",
  ctaHref: "#projects",
};

export const projectsSection = {
  heading: "Featured Projects",
  body: "A snapshot of recent builds delivered by RANK Engineering Services — from residential apartments to modern homes and mixed-use commercial developments.",
  projects: [
    {
      title: "Brown Apartment",
      category: "Residential — Apartment Building",
      image: "/project-brown-apartment.png",
    },
    {
      title: "Modern Residence",
      category: "Residential — Two-Storey Home",
      image: "/project-modern-residence.png",
    },
    {
      title: "Mixed-Use Commercial Building",
      category: "Commercial — Retail & Office",
      image: "/project-commercial-building.png",
    },
  ],
};

export const showcase = {
  eyebrow: "Case Study",
  heading: "From Planning to Outcome",
  body: "Every RANK project starts as a precise design and ends as a structure you can walk into. Here is one of our recent single-storey residences shown side-by-side as the concept render and the completed build.",
  projectTitle: "Modern Single-Storey Residence",
  stages: [
    {
      stage: "Plan",
      label: "Design Render",
      caption: "Architectural concept and 3D visualization.",
      image: "/showcase-render.png",
    },
    {
      stage: "Outcome",
      label: "Built & Delivered",
      caption: "Constructed, finished, and turned over on site.",
      image: "/showcase-built.png",
    },
  ],
};
