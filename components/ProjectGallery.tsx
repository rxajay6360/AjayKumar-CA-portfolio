"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export type ProjectCategory = "3D ART" | "PHOTOSHOP" | "PREMIER PRO";

export interface ProjectItem {
  n: number;
  num: string;
  cat: string;
  title: string;
  link: string;
  leftText: string;
  leftClass: string;
  image: string;
  category: ProjectCategory;
}

export default function ProjectGallery() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("3D ART");

  const categories: ProjectCategory[] = ["3D ART", "PHOTOSHOP", "PREMIER PRO"];

  // Projects list: Currently all projects belong to "3D ART".
  // You can easily add Photoshop or Premiere Pro projects below by specifying category: "PHOTOSHOP" or "PREMIER PRO".
  const projectList: ProjectItem[] = [
    {
      n: 0,
      num: "01",
      cat: "3D HERO PROP",
      title: "HANUMAN GADHA",
      link: "/work/hanuman-gadha",
      leftText: "Gadha",
      leftClass: "p1a",
      image: "/images/projects/hanuman-gadha/closeup.jpg",
      category: "3D ART",
    },
    {
      n: 1,
      num: "02",
      cat: "ENVIRONMENT ART",
      title: "KGF NARACHI GATE INDIA",
      link: "/work/kgf-narachi-gate",
      leftText: "Narachi",
      leftClass: "p2a",
      image: "/images/projects/kgf-narachi/narachi-front-gate.jpg",
      category: "3D ART",
    },
    {
      n: 2,
      num: "03",
      cat: "THE FUTURE MOVES DIFFERENTLY",
      title: "Futuristic Single Wheel Bike",
      link: "/work/futuristic-single-wheel-bike",
      leftText: "Monowheel",
      leftClass: "p3a",
      image: "/images/projects/futuristic-bike/front-low-angle.jpg",
      category: "3D ART",
    },
    {
      n: 3,
      num: "04",
      cat: "STYLIZED 3D",
      title: "Banana Car",
      link: "/work/banana-car",
      leftText: "Velocity",
      leftClass: "p1a",
      image: "/images/projects/banana-car/hero.svg",
      category: "3D ART",
    },
    {
      n: 4,
      num: "05",
      cat: "WHERE MUSIC BECOMES MEMORY",
      title: "VINTAGE GRAMOPHONE",
      link: "/work/vintage-gramophone",
      leftText: "Acoustic",
      leftClass: "p2a",
      image: "/images/projects/vintage-gramophone/front-view.jpg",
      category: "3D ART",
    },
    {
      n: 5,
      num: "06",
      cat: "NIGHT HAS A NEW ADDRESS",
      title: "AFTER DARK",
      link: "/work/after-dark",
      leftText: "Lounge",
      leftClass: "p3a",
      image: "/images/projects/after-dark/front-closeup-angle.jpg",
      category: "3D ART",
    },
    {
      n: 6,
      num: "07",
      cat: "GOD OF THUNDER",
      title: "THOR’S HAMMER",
      link: "/work/thors-hammer",
      leftText: "Mjolnir",
      leftClass: "p1a",
      image: "/images/projects/thors-hammer/front-wide-view.jpg",
      category: "3D ART",
    },
    {
      n: 7,
      num: "08",
      cat: "BUILT FOR THE STREET",
      title: "THE STREET SKATE",
      link: "/work/the-street-skate",
      leftText: "Skate",
      leftClass: "p2a",
      image: "/images/projects/the-street-skate/corner-view.jpg",
      category: "3D ART",
    },
    {
      n: 8,
      num: "09",
      cat: "EVERY TEXTURE TELLS A STORY",
      title: "COOKIE JAR",
      link: "/work/cookie-jar",
      leftText: "Cookies",
      leftClass: "p3a",
      image: "/images/projects/cookie-jar/front-view.jpg",
      category: "3D ART",
    },
    {
      n: 9,
      num: "10",
      cat: "SMALL SIZE, BIG IMPACT",
      title: "FRAG GRENADE",
      link: "/work/frag-grenade",
      leftText: "Tactical",
      leftClass: "p1a",
      image: "/images/projects/frag-grenade/front-side-corner.jpg",
      category: "3D ART",
    },
  ];

  const getCount = (cat: ProjectCategory) => {
    return projectList.filter((p) => p.category === cat).length;
  };

  const filteredProjects = projectList.filter(
    (p) => p.category === activeCategory
  );

  return (
    <section className="projects html-section" id="work">
      <span
        id="projects"
        style={{ position: "absolute", top: 0, opacity: 0, pointerEvents: "none" }}
      />
      <h2 className="chrome section-heading">Project</h2>

      {/* Category Filter Switcher */}
      <div className="project-category-tabs" role="tablist" aria-label="Project categories">
        {categories.map((cat) => {
          const count = getCount(cat);
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              role="tab"
              aria-selected={isActive}
              type="button"
              className={`category-tab-btn ${isActive ? "active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              <span>{cat}</span>
              <span className="category-tab-count">{count}</span>
            </button>
          );
        })}
      </div>

      {/* Project Cards or Empty Category State */}
      {filteredProjects.length > 0 ? (
        <div className="stack">
          {filteredProjects.map((p, idx) => (
            <article
              key={p.num}
              className="proj"
              style={{ "--n": idx } as React.CSSProperties}
            >
              <header>
                <div>
                  <b>{p.num}</b>
                  <span>
                    <small>{p.cat}</small>
                    <h3>{p.title}</h3>
                  </span>
                </div>
                <Link className="pill o" href={p.link}>
                  View project
                </Link>
              </header>
              <div className="shots">
                <div className={p.leftClass}>{p.leftText}</div>
                <div className="p1b relative overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 800px) 100vw, 800px"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="category-empty-state">
          <div className={`empty-state-badge ${activeCategory === "PHOTOSHOP" ? "ps" : "pr"}`}>
            {activeCategory === "PHOTOSHOP" ? "Ps" : "Pr"}
          </div>
          <h3>{activeCategory} PROJECTS</h3>
          <p>
            {activeCategory === "PHOTOSHOP"
              ? "Photoshop design projects, matte paintings, and digital artwork will be added here soon."
              : "Premiere Pro video projects, motion edits, and showreels will be added here soon."}
          </p>
          <div className="empty-state-tag">✦ Coming Soon · In Production ✦</div>
          <button
            type="button"
            className="category-tab-btn active"
            onClick={() => setActiveCategory("3D ART")}
            style={{ marginTop: "24px" }}
          >
            ← View 3D Art ({getCount("3D ART")})
          </button>
        </div>
      )}
    </section>
  );
}
