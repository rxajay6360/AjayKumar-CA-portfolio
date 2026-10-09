"use client";

import { useState } from "react";
import { siteConfig } from "@/data/site-config";

export default function Contact() {
  const [service, setService] = useState("3D Modeling");
  const [budget, setBudget] = useState("$1K — $5K");
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [details, setDetails] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    const subject = encodeURIComponent(`[Project Inquiry: ${service}] from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nService: ${service}\nBudget: ${budget}\n\nProject Details:\n${details}`
    );
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
  };

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="contact html-section" id="contact">
      <h2 className="chrome">
        Let&apos;s create
        <br />
        together
      </h2>
      <p className="l">
        Available for freelance 3D modeling, texturing, environments, and motion graphics projects worldwide. Send a message below to start your project.
      </p>

      <form className="form" id="f" onSubmit={handleSubmit}>
        <span className="tag">LET&apos;S CONNECT</span>
        <h3>START A PROJECT</h3>

        <div className="row">
          <div>
            <label>Your name</label>
            <input
              required
              placeholder="Jane Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label>Email address</label>
            <input
              type="email"
              required
              placeholder="jane@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <label>Service required</label>
        <div className="chips">
          {["3D Modeling", "Texturing", "Environments", "Motion Graphics", "Other"].map(
            (item) => (
              <button
                key={item}
                type="button"
                className={service === item ? "on" : ""}
                onClick={() => setService(item)}
              >
                {item}
              </button>
            )
          )}
        </div>

        <label>Expected budget</label>
        <div className="chips">
          {["< $1K", "$1K — $5K", "$5K — $10K", "$10K+"].map((tier) => (
            <button
              key={tier}
              type="button"
              className={budget === tier ? "on" : ""}
              onClick={() => setBudget(tier)}
            >
              {tier}
            </button>
          ))}
        </div>

        <label>Project details</label>
        <textarea
          rows={3}
          placeholder="Tell me about your idea…"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        />

        <button className="pill" type="submit">
          Submit inquiry →
        </button>

        <p
          className="ok"
          id="ok"
          style={{ display: submitted ? "block" : "none" }}
        >
          Thanks! I&apos;ll get back to you within 24 hours.
        </p>
      </form>

      <div className="connect">
        <div className="avatar">
          <svg>
            <use href="#face" />
          </svg>
        </div>
        <h2 className="chrome">Let&apos;s connect</h2>
      </div>

      <small>
        Available for freelance 3D &amp; motion projects worldwide •{" "}
        <a
          href="#"
          onClick={scrollToTop}
          style={{ color: "var(--lime)", cursor: "pointer", textDecoration: "none" }}
        >
          Back to top
        </a>
      </small>
    </section>
  );
}
