"use client";

import { useState } from "react";
import Image from "next/image";
import { siteConfig } from "@/data/site-config";
import { Mail, Copy, Check, ArrowUp, Send, ArrowUpRight } from "lucide-react";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [service, setService] = useState("3D Asset Modeling");
  const [budget, setBudget] = useState("$1K — $3K");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const servicesList = [
    "3D Asset Modeling",
    "PBR Texturing",
    "Environment Art",
    "Motion Graphics",
    "Full 3D Pipeline",
  ];

  const budgetTiers = ["< $1K", "$1K — $3K", "$3K — $7K", "$7K+"];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteConfig.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    const subject = encodeURIComponent(`[Project Inquiry: ${service}] from ${formData.name}`);
    const body = encodeURIComponent(
      `Hello Aajay,\n\nName: ${formData.name}\nEmail: ${formData.email}\nService: ${service}\nBudget: ${budget}\n\nProject Scope:\n${formData.message}\n\nLooking forward to your response!`
    );
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section id="contact" className="relative pt-28 pb-16 px-4 sm:px-8 md:px-12 bg-[#050505] border-b border-[#171717] overflow-hidden select-none">
      {/* Background Volumetric Bloom */}
      <div
        className="absolute left-1/2 bottom-1/4 -translate-x-1/2 w-[70vw] h-[50vh] bg-[#ff2a3b]/10 blur-[150px] rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto relative z-10 text-center">
        {/* Section Label */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="text-[#ff2a3b] font-mono text-xs tracking-[0.25em]">06</span>
          <div className="w-6 h-[1px] bg-[#ff2a3b]/40" />
          <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-[#888888]">
            DIRECT COLLABORATION &bull; INQUIRIES
          </span>
        </div>

        {/* Big Editorial Chrome Headline matching Reference HTML */}
        <h2 className="chrome text-[clamp(44px,11vw,160px)] leading-[0.9] tracking-[-0.03em] mb-6">
          Let&apos;s create<br />together
        </h2>

        <p className="max-w-lg mx-auto text-sm sm:text-base text-[#9a9a9a] leading-relaxed mb-12">
          Available for freelance 3D modeling, texturing, environments, and motion graphics projects worldwide. Send an inquiry below to launch your project.
        </p>

        {/* The Inquiry Form matching Reference HTML .form */}
        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto bg-[#101014] text-white rounded-[28px] p-7 sm:p-10 text-left border-r-8 border-b-8 border-[#ff2a3b] shadow-[0_30px_80px_rgba(0,0,0,0.85)] relative"
        >
          {/* Tag Pill */}
          <div className="flex items-center justify-between mb-4">
            <span className="inline-block bg-[#ff2a3b] text-white px-3.5 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase shadow-[0_0_12px_rgba(255,42,59,0.5)]">
              LET&apos;S CONNECT
            </span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff2a3b] animate-beacon" />
          </div>

          <h3 className="font-syne font-extrabold text-2xl sm:text-3xl text-white tracking-tight mb-8">
            START A 3D PROJECT
          </h3>

          {/* Name & Email Row matching HTML .row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-[11px] font-mono uppercase tracking-wider text-[#777777] mb-2 font-semibold">
                Your Name
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Alex Vance"
                className="w-full bg-transparent border-0 border-b-2 border-white/20 pb-2.5 pt-1 text-sm text-white placeholder-[#555555] focus:outline-none focus:border-[#ff2a3b] transition-colors"
              />
            </div>

            <div>
              <label className="block text-[11px] font-mono uppercase tracking-wider text-[#777777] mb-2 font-semibold">
                Email Address
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="alex@studio.com"
                className="w-full bg-transparent border-0 border-b-2 border-white/20 pb-2.5 pt-1 text-sm text-white placeholder-[#555555] focus:outline-none focus:border-[#ff2a3b] transition-colors"
              />
            </div>
          </div>

          {/* Service Required Chips matching HTML .chips */}
          <div className="mb-6">
            <label className="block text-[11px] font-mono uppercase tracking-wider text-[#777777] mb-3 font-semibold">
              Service Required
            </label>
            <div className="flex flex-wrap gap-2">
              {servicesList.map((item) => (
                <button
                  type="button"
                  key={item}
                  onClick={() => setService(item)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all cursor-pointer ${
                    service === item
                      ? "bg-[#ff2a3b] text-white font-bold border border-[#ff2a3b] shadow-[0_0_12px_rgba(255,42,59,0.4)]"
                      : "bg-transparent text-[#888888] border border-white/15 hover:text-white hover:border-white/30"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Expected Budget Chips matching HTML .chips */}
          <div className="mb-6">
            <label className="block text-[11px] font-mono uppercase tracking-wider text-[#777777] mb-3 font-semibold">
              Expected Budget
            </label>
            <div className="flex flex-wrap gap-2">
              {budgetTiers.map((tier) => (
                <button
                  type="button"
                  key={tier}
                  onClick={() => setBudget(tier)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all cursor-pointer ${
                    budget === tier
                      ? "bg-[#ff2a3b] text-white font-bold border border-[#ff2a3b] shadow-[0_0_12px_rgba(255,42,59,0.4)]"
                      : "bg-transparent text-[#888888] border border-white/15 hover:text-white hover:border-white/30"
                  }`}
                >
                  {tier}
                </button>
              ))}
            </div>
          </div>

          {/* Project Details Textarea */}
          <div className="mb-8">
            <label className="block text-[11px] font-mono uppercase tracking-wider text-[#777777] mb-2 font-semibold">
              Project Details
            </label>
            <textarea
              rows={3}
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Tell me about your 3D asset needs, references, or timeline…"
              className="w-full bg-transparent border-0 border-b-2 border-white/20 pb-2.5 pt-1 text-sm text-white placeholder-[#555555] focus:outline-none focus:border-[#ff2a3b] transition-colors resize-none"
            />
          </div>

          {/* Submit Button & Direct Email Copy */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
            <button type="submit" className="pill cursor-pointer flex items-center gap-2">
              <span>SUBMIT INQUIRY</span>
              <Send className="w-3.5 h-3.5" />
            </button>

            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 text-xs font-mono text-[#888888] hover:text-white transition-colors cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-green-400" />
                  <span className="text-green-400">COPIED TO CLIPBOARD</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-[#ff2a3b]" />
                  <span>COPY: {siteConfig.email}</span>
                </>
              )}
            </button>
          </div>

          {submitted && (
            <p className="mt-4 text-xs font-mono text-[#ff2a3b] font-semibold">
              ✓ Email inquiry launched in your default mail application!
            </p>
          )}
        </form>

        {/* The Final Closing Reveal matching Reference HTML .connect */}
        <div className="relative mt-24 sm:mt-32 pt-16 flex flex-col items-center justify-center">
          {/* Avatar Monogram Emblem Centerpiece */}
          <div className="relative w-24 sm:w-32 aspect-square rounded-full border-2 border-[#ff2a3b]/40 bg-gradient-to-b from-[#200407] to-[#0a0a0d] shadow-[0_0_50px_rgba(255,42,59,0.4)] flex items-center justify-center mb-6 group cursor-pointer overflow-hidden">
            <Image
              src="/images/hero-bg.jpeg"
              alt="C.A. Aajay Kumar"
              fill
              className="object-cover object-top opacity-50 filter contrast-125 group-hover:scale-110 transition-transform duration-500"
              sizes="128px"
            />
            <span className="relative z-10 font-syne font-extrabold text-2xl sm:text-3xl text-white group-hover:text-[#ff2a3b] transition-colors">
              CA
            </span>
          </div>

          {/* Giant Chrome "Let's connect" Headline matching Reference HTML .connect h2 */}
          <h2 className="chrome text-[clamp(48px,12.5vw,190px)] leading-[0.88] tracking-[-0.03em] uppercase drop-shadow-[0_4px_30px_rgba(0,0,0,0.9)]">
            Let&apos;s connect
          </h2>

          {/* Social Platform Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            {siteConfig.socials.map((soc) => (
              <a
                key={soc.name}
                href={soc.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-[#121216] border border-white/10 text-xs font-mono text-[#aaaaaa] hover:text-white hover:border-[#ff2a3b] hover:shadow-[0_0_15px_rgba(255,42,59,0.3)] transition-all flex items-center gap-1.5"
              >
                <span>{soc.name}</span>
                <ArrowUpRight className="w-3 h-3 text-[#ff2a3b]" />
              </a>
            ))}
          </div>

          {/* Availability & Back to Top link matching Reference HTML .connect small */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3 text-xs font-mono text-[#777777] uppercase tracking-wider">
            <span>AVAILABLE FOR 3D &amp; MOTION CONTRACTS WORLDWIDE</span>
            <span className="hidden sm:inline">&bull;</span>
            <button
              onClick={scrollToTop}
              className="text-[#ff2a3b] hover:underline flex items-center gap-1 cursor-pointer font-bold"
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
