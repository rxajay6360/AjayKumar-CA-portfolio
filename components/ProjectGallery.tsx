"use client";

import Link from "next/link";
import Image from "next/image";

export default function ProjectGallery() {
  const projectList = [
    {
      n: 0,
      num: "01",
      cat: "3D HERO PROP",
      title: "HANUMAN GADHA",
      link: "/work/hanuman-gadha",
      leftText: "Gadha",
      leftClass: "p1a",
      image: "/images/projects/hanuman-gadha/closeup.jpg",
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
    },
  ];

  return (
    <section className="projects html-section" id="work">
      <span id="projects" style={{ position: "absolute", top: 0, opacity: 0, pointerEvents: "none" }} />
      <h2 className="chrome section-heading">Project</h2>
      <div className="stack">
        {projectList.map((p) => (
          <article
            key={p.num}
            className="proj"
            style={{ "--n": p.n } as React.CSSProperties}
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
    </section>
  );
}
