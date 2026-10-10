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

      {/* WhatsApp Quick Direct Banner */}
      <div className="wa-direct-banner">
        <a
          href="https://wa.me/916360294419?text=Hi%20Ajay%2C%20I%20saw%20your%203D%20portfolio%20and%20would%20like%20to%20discuss%20a%20project!"
          target="_blank"
          rel="noopener noreferrer"
          className="wa-direct-link"
          aria-label="Direct WhatsApp Chat with Ajay Kumar"
        >
          <div className="wa-icon-box">
            <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 00-3.48-8.413Z"/>
            </svg>
          </div>
          <div className="wa-text-group">
            <span className="wa-tagline">Need a quick response?</span>
            <span className="wa-headline">
              Chat on WhatsApp: <strong>+91 63602 94419</strong>
            </span>
          </div>
          <span className="wa-action-badge">
            <span className="wa-pulse-dot" />
            Connect ↗
          </span>
        </a>
      </div>

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

        <div className="form-submit-row">
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

          <a
            href="https://wa.me/916360294419?text=Hi%20Ajay%2C%20I%20saw%20your%203D%20portfolio%20and%20would%20like%20to%20discuss%20a%20project!"
            target="_blank"
            rel="noopener noreferrer"
            className="form-wa-link"
            title="Chat directly on WhatsApp"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 00-3.48-8.413Z"/>
            </svg>
            <span>Or WhatsApp me</span>
          </a>
        </div>

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
        <div className="connect-channels">
          <a
            href="https://wa.me/916360294419?text=Hi%20Ajay%2C%20I%20saw%20your%203D%20portfolio%20and%20would%20like%20to%20discuss%20a%20project!"
            target="_blank"
            rel="noopener noreferrer"
            className="connect-chip wa"
          >
            <span className="connect-chip-icon">
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 00-3.48-8.413Z"/>
              </svg>
            </span>
            <div className="connect-chip-text">
              <span className="connect-chip-lbl">WhatsApp</span>
              <span className="connect-chip-val">+91 63602 94419</span>
            </div>
            <span className="connect-chip-arrow">↗</span>
          </a>

          <a
            href="mailto:rxajay9196@gmail.com"
            className="connect-chip mail"
          >
            <span className="connect-chip-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
                <rect width="20" height="16" x="2" y="4" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
            </span>
            <div className="connect-chip-text">
              <span className="connect-chip-lbl">Email</span>
              <span className="connect-chip-val">rxajay9196@gmail.com</span>
            </div>
            <span className="connect-chip-arrow">↗</span>
          </a>
        </div>
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
