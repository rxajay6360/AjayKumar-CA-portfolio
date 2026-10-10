"use client";

import { useState, useEffect } from "react";
import { siteConfig } from "@/data/site-config";
import { sendContactEmail } from "@/lib/emailjs";

export default function Contact() {
  const [service, setService] = useState("3D Modeling");
  const [budget, setBudget] = useState("$1K — $5K");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [details, setDetails] = useState("");
  const [statusMessage, setStatusMessage] = useState("");

  useEffect(() => {
    const handleServiceSelect = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      if (customEvent.detail) {
        setService(customEvent.detail);
      }
    };
    window.addEventListener("portfolio-select-service", handleServiceSelect);
    return () => {
      window.removeEventListener("portfolio-select-service", handleServiceSelect);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setStatusMessage("");

    try {
      await sendContactEmail({
        name,
        email,
        service,
        budget,
        details,
      });

      setStatus("success");
      setStatusMessage(
        `Thank you ${name}! Your inquiry has been sent directly to rxajay9196@gmail.com. I will get back to you within 24 hours.`
      );
      setName("");
      setEmail("");
      setDetails("");
    } catch (err: unknown) {
      console.warn("EmailJS sending error or missing config:", err);
      // If EmailJS template/key is still pending or failed, open mail client as seamless fallback
      const subject = encodeURIComponent(`[Project Inquiry: ${service}] from ${name}`);
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\nService: ${service}\nBudget: ${budget}\n\nProject Details:\n${details}`
      );
      window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;

      setStatus("success");
      setStatusMessage(
        `Thanks ${name}! Your message was drafted to rxajay9196@gmail.com. I will review it and reply within 24 hours.`
      );
    }
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

        <button
          className="pill"
          type="submit"
          disabled={status === "loading"}
          style={{ opacity: status === "loading" ? 0.7 : 1 }}
        >
          {status === "loading"
            ? "Sending inquiry... ✦"
            : status === "success"
            ? "Inquiry sent! ✓"
            : "Submit inquiry →"}
        </button>

        {statusMessage && (
          <p
            className="ok"
            id="ok"
            style={{
              display: "block",
              background: "rgba(255, 42, 59, 0.08)",
              border: "1px solid rgba(255, 42, 59, 0.3)",
              padding: "12px 16px",
              borderRadius: "10px",
              lineHeight: 1.5,
              fontSize: "13px",
              color: "#111",
            }}
          >
            {statusMessage}
          </p>
        )}
      </form>

      <div className="connect">
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
