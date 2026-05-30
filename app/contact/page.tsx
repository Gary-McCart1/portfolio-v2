"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Sidebar from "@/components/Sidebar";

const YELLOW = "#F5C518";
const SANS = "'DM Sans', ui-sans-serif, sans-serif";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 0.55,
    ease: [0.22, 1, 0.36, 1] as const,
    delay,
  },
});

const CONTACT_LINKS = [
  {
    label: "Email",
    value: "gwmccart3@gmail.com",
    href: "mailto:gwmccart3@gmail.com",
    mono: true,
  },
  {
    label: "LinkedIn",
    value: "Gary McCart",
    href: "https://www.linkedin.com/in/gary-mccart-4b4b881bb/",
    mono: false,
  },
  {
    label: "GitHub",
    value: "@Gary-McCart1",
    href: "https://github.com/Gary-McCart1",
    mono: false,
  },
];

type FormState = "idle" | "sending" | "sent" | "error";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [status, setStatus] = useState<FormState>("idle");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("sent");
  }

  return (
    <main
      className="min-h-screen bg-[#0e0e0e] text-white selection:bg-[#F5C518] selection:text-black antialiased flex"
      style={{ fontFamily: SANS }}
    >
      <Sidebar activeLabel="Contact" />

      <div className="lg:ml-[72px] flex-1 flex flex-col min-h-screen">
        <div className="flex-1 px-5 sm:px-8 lg:px-14 py-12 lg:py-20 pb-24 lg:pb-20 max-w-5xl w-full mx-auto">
          {/* Header */}
          <motion.div className="mb-16" {...fadeUp(0.1)}>
            <p
              className="text-[11px] tracking-[0.22em] uppercase mb-3"
              style={{ color: YELLOW, fontFamily: "monospace" }}
            >
              Open To Work
            </p>
            <h1
              className="leading-[0.9] tracking-tight text-white"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(56px, 7vw, 88px)",
              }}
            >
              Let&apos;s Work
              <br />
              <span style={{ color: "rgba(255,255,255,0.35)" }}>Together.</span>
            </h1>
            <div
              className="w-12 h-px mt-6"
              style={{ background: YELLOW, opacity: 0.6 }}
            />
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-16">
            {/* Left — form */}
            <motion.div className="lg:col-span-7" {...fadeUp(0.2)}>
              {status === "sent" ? (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col gap-4 py-16"
                >
                  <div
                    className="w-10 h-10 rounded-sm flex items-center justify-center text-black font-bold text-lg"
                    style={{ background: YELLOW }}
                  >
                    ✓
                  </div>
                  <p className="text-[20px] font-medium">Message sent.</p>
                  <p
                    className="text-[14px] font-light"
                    style={{ color: "rgba(255,255,255,0.4)" }}
                  >
                    I&apos;ll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  {/* Name + Email row */}
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label
                        className="text-[11px] tracking-[0.15em] uppercase"
                        style={{
                          color: "rgba(255,255,255,0.3)",
                          fontFamily: "monospace",
                        }}
                      >
                        Name
                      </label>
                      <input
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="bg-transparent border border-white/10 px-4 py-3 text-[14px] text-white placeholder:text-white/20 outline-none focus:border-white/30 transition-colors rounded-sm"
                        style={{ fontFamily: SANS }}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label
                        className="text-[11px] tracking-[0.15em] uppercase"
                        style={{
                          color: "rgba(255,255,255,0.3)",
                          fontFamily: "monospace",
                        }}
                      >
                        Email
                      </label>
                      <input
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className="bg-transparent border border-white/10 px-4 py-3 text-[14px] text-white placeholder:text-white/20 outline-none focus:border-white/30 transition-colors rounded-sm"
                        style={{ fontFamily: SANS }}
                      />
                    </div>
                  </div>

                  {/* Company (bonus field for recruiters) */}
                  <div className="flex flex-col gap-2">
                    <label
                      className="text-[11px] tracking-[0.15em] uppercase"
                      style={{
                        color: "rgba(255,255,255,0.3)",
                        fontFamily: "monospace",
                      }}
                    >
                      Company
                    </label>
                    <input
                      name="company"
                      type="text"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Where do you work? (optional)"
                      className="bg-transparent border border-white/10 px-4 py-3 text-[14px] text-white placeholder:text-white/20 outline-none focus:border-white/30 transition-colors rounded-sm"
                      style={{ fontFamily: SANS }}
                    />
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-2">
                    <label
                      className="text-[11px] tracking-[0.15em] uppercase"
                      style={{
                        color: "rgba(255,255,255,0.3)",
                        fontFamily: "monospace",
                      }}
                    >
                      Message
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={6}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell me about the role or team..."
                      className="bg-transparent border border-white/10 px-4 py-3 text-[14px] text-white placeholder:text-white/20 outline-none focus:border-white/30 transition-colors resize-none rounded-sm"
                      style={{ fontFamily: SANS }}
                    />
                  </div>

                  {/* Submit */}
                  <div>
                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="inline-flex items-center gap-2 px-7 py-3 text-[11px] tracking-[0.18em] uppercase font-semibold text-black transition-all hover:opacity-90 disabled:opacity-50"
                      style={{ background: YELLOW, borderRadius: "2px" }}
                    >
                      {status === "sending" ? "Sending..." : "Reach Out"}
                      {status !== "sending" && (
                        <svg
                          width="11"
                          height="11"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                        >
                          <path d="M7 17L17 7M7 7h10v10" />
                        </svg>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </motion.div>

            {/* Right — direct links + availability */}
            <motion.div
              className="lg:col-span-5 flex flex-col gap-10"
              {...fadeUp(0.28)}
            >
              {/* Availability badge */}
              <div
                className="inline-flex items-center gap-2.5 px-4 py-2.5 border border-white/8 rounded-sm self-start"
                style={{ background: "rgba(255,255,255,0.02)" }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0 animate-pulse"
                  style={{
                    background: "#4ade80",
                    boxShadow: "0 0 6px rgba(74,222,128,0.6)",
                  }}
                />
                <span
                  className="text-[12px] font-light"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                >
                  Open to full-time roles
                </span>
              </div>

              {/* Blurb */}
              <div className="flex flex-col gap-4">
                <p
                  className="text-[15px] leading-[1.8] font-light"
                  style={{ color: "rgba(255,255,255,0.45)" }}
                >
                  I&apos;m actively looking for full-time opportunities in
                  engineering, growth, or a hybrid role where both matter. If
                  you&apos;re building something and need someone who can own
                  the technical side and drive results — I&apos;d love to talk.
                </p>
                <p
                  className="text-[13px] leading-[1.8] font-light"
                  style={{ color: "rgba(255,255,255,0.25)" }}
                >
                  Based in Raleigh-Durham, NC. Open to remote or relocation for
                  the right role.
                </p>
              </div>

              {/* What I'm looking for */}
              <div className="flex flex-col gap-3">
                <p
                  className="text-[11px] tracking-[0.22em] uppercase"
                  style={{
                    color: "rgba(255,255,255,0.2)",
                    fontFamily: "monospace",
                  }}
                >
                  Roles I&apos;m targeting
                </p>
                {[
                  "Full-Stack Engineer",
                  "Growth Engineer",
                  "Marketing Engineer / Analyst",
                  "Product Engineer",
                ].map((role) => (
                  <div key={role} className="flex items-center gap-2.5">
                    <span
                      className="w-1 h-1 rounded-full flex-shrink-0"
                      style={{ background: YELLOW }}
                    />
                    <span
                      className="text-[13px] font-light"
                      style={{ color: "rgba(255,255,255,0.45)" }}
                    >
                      {role}
                    </span>
                  </div>
                ))}
              </div>

              {/* Direct links */}
              <div className="flex flex-col gap-5 pt-2">
                <p
                  className="text-[11px] tracking-[0.22em] uppercase"
                  style={{
                    color: "rgba(255,255,255,0.2)",
                    fontFamily: "monospace",
                  }}
                >
                  Direct
                </p>
                {CONTACT_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={
                      link.href.startsWith("mailto") ? undefined : "_blank"
                    }
                    rel="noreferrer"
                    className="group flex items-center justify-between border-b border-white/5 pb-4 transition-colors hover:border-white/15"
                  >
                    <span
                      className="text-[11px] tracking-[0.15em] uppercase"
                      style={{ color: "rgba(255,255,255,0.25)" }}
                    >
                      {link.label}
                    </span>
                    <span
                      className="text-[13px] group-hover:text-[#F5C518] transition-colors"
                      style={{
                        color: "rgba(255,255,255,0.55)",
                        fontFamily: link.mono ? "monospace" : SANS,
                      }}
                    >
                      {link.value}
                    </span>
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}
