export interface SocialLink {
  name: string;
  url: string;
  label: string;
  icon: string;
}

export interface SiteConfig {
  name: string;
  monogram: string;
  title: string;
  headline: string;
  subheadline: string;
  tagline: string;
  bio: string;
  aboutQuote: string;
  email: string;
  location: string;
  status: string;
  socials: SocialLink[];
}

export const siteConfig: SiteConfig = {
  name: "C.A. AAJAY KUMAR",
  monogram: "CA",
  title: "3D Artist | Texture Artist | Motion Graphics Designer",
  headline: "BUILT IN 3D.",
  subheadline: "FINISHED WITH IMPACT.",
  tagline: "BUILT IN 3D. FINISHED WITH IMPACT.",
  bio: "I transform creative ideas into detailed 3D assets, realistic materials, cinematic renders, and dynamic motion visuals — from the first blockout to the final frame.",
  aboutQuote: "Details matter. Feeling matters more.",
  email: "contact@aajaykumar.art",
  location: "India • Available Worldwide",
  status: "OPEN FOR CONTRACTS & AAA PROJECTS",
  socials: [
    {
      name: "ArtStation",
      url: "https://www.artstation.com",
      label: "Portfolio & 3D Breakdowns",
      icon: "artstation",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com",
      label: "Professional Profile",
      icon: "linkedin",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com",
      label: "Work in Progress & Motion Tests",
      icon: "instagram",
    },
    {
      name: "Behance",
      url: "https://www.behance.net",
      label: "Creative Case Studies",
      icon: "behance",
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com",
      label: "Showreels & Turntables",
      icon: "youtube",
    },
  ],
};
