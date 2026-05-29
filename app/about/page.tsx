"use client";

import { motion } from "framer-motion";
import Sidebar from "@/components/Sidebar";
import FooterBar from "@/components/FooterBar";

const YELLOW = "#F5C518";
const SANS = "'DM Sans', ui-sans-serif, sans-serif";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 0.5,
    ease: [0.22, 1, 0.36, 1] as const,
    delay,
  },
});

const SKILLS = [
  {
    category: "Engineering",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "Spring Boot",
      "Django REST",
      "PostgreSQL",
      "AWS S3",
      "JWT Auth",
      "HTML/CSS",
      "Git",
    ],
  },
  {
    category: "Analytics & Data",
    items: [
      "GA4",
      "Google Tag Manager",
      "Google Search Console",
      "SQL",
      "Python (Pandas, NumPy)",
      "Tableau",
      "Excel (Pivot Tables)",
      "Hotjar",
      "Funnel Analysis",
    ],
  },
  {
    category: "Growth & Marketing",
    items: [
      "A/B Testing",
      "CRO",
      "Paid Social (Meta, TikTok)",
      "Google Ads",
      "SEO/SEM",
      "Lifecycle Marketing",
      "Referral Programs",
      "User Acquisition",
      "Retargeting",
    ],
  },
  {
    category: "Tools",
    items: [
      "HubSpot",
      "SEMrush",
      "Meta Ads Manager",
      "TikTok Ads Manager",
      "Shopify",
      "Stripe",
      "Canva",
      "Figma",
      "Vercel",
    ],
  },
];

const CERTIFICATIONS = [
  "Google Analytics 4 (GA4)",
  "HubSpot Digital Marketing",
  "SEMrush SEO Fundamentals",
  "AWS Cloud Practitioner",
  "Machine Learning Specialization (Coursera)",
];

const TIMELINE = [
  {
    year: "2025",
    title: "Founder & Engineer — Trasora",
    body:
      "Building a social music platform from zero. Architected the full stack (Next.js, Spring Boot, PostgreSQL), implemented GA4 event schemas, and drove 100+ organic users within 90 days of launch.",
  },
  {
    year: "2025",
    title: "Web Developer (Contract) — Founders In Focus",
    body:
      "Built a conversion-focused podcast website with GA4, Google Search Console, and mobile-first UX. Integrated automated distribution pipelines for Spotify and YouTube.",
  },
  {
    year: "2024",
    title: "Baylor University — BBA Marketing, Summa Cum Laude",
    body:
      "GPA 3.97/4.0. 2024 Marketing Student of the Year. Presidential Scholar. Led a $10K integrated media campaign for Kid's R Kids as a client project.",
  },
  {
    year: "2023",
    title: "Founder & Marketing Lead — Desentify.com",
    body:
      "Managed $5K+ in paid media across TikTok, Meta, and Google Ads. Improved ROAS by 22% and conversion rate by 18% through A/B testing, Hotjar analysis, and 50+ ad creative iterations.",
  },
];

const STATS = [
  { value: "22%", label: "ROAS improvement" },
  { value: "18%", label: "Conversion rate lift" },
  { value: "100+", label: "Organic users in 90 days" },
  { value: "3.97", label: "GPA — Summa Cum Laude" },
];

export default function AboutPage() {
  return (
    <main
      className="min-h-screen bg-[#0e0e0e] text-white selection:bg-[#F5C518] selection:text-black antialiased flex"
      style={{ fontFamily: SANS }}
    >
      <Sidebar activeLabel="About" />

      <div className="ml-[72px] flex-1 flex flex-col min-h-screen">
        <div className="flex-1 px-14 py-20 max-w-5xl w-full mx-auto">
          {/* Header */}
          <motion.div className="mb-16" {...fadeUp(0.1)}>
            <p
              className="text-[11px] tracking-[0.22em] uppercase mb-3"
              style={{ color: YELLOW, fontFamily: "monospace" }}
            >
              About Me
            </p>

            <h1
              className="leading-[0.9] tracking-tight text-white"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(56px, 7vw, 88px)",
              }}
            >
              Engineer. Marketer.
              <br />
              <span style={{ color: "rgba(255,255,255,0.3)" }}>
                Raleigh-Durham, NC.
              </span>
            </h1>

            <div
              className="w-12 h-px mt-6"
              style={{ background: YELLOW, opacity: 0.6 }}
            />
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-px mb-16 border border-white/5 rounded-sm overflow-hidden"
            {...fadeUp(0.15)}
          >
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="px-6 py-5"
                style={{ background: "rgba(255,255,255,0.02)" }}
              >
                <p
                  className="text-[32px] font-medium leading-none mb-1"
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    color: YELLOW,
                  }}
                >
                  {stat.value}
                </p>

                <p
                  className="text-[11px] tracking-[0.1em] uppercase font-light"
                  style={{ color: "rgba(255,255,255,0.35)" }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-16">
            {/* Left */}
            <div className="lg:col-span-7 flex flex-col gap-12">
              {/* Bio */}
              <motion.div {...fadeUp(0.2)}>
                <p
                  className="text-[16px] leading-[1.85] font-light"
                  style={{ color: "rgba(255,255,255,0.6)" }}
                >
                  I&apos;m a full-stack engineer and growth marketer who
                  operates at the intersection of clean architecture and
                  measurable outcomes. I build products end-to-end — from
                  Django backends and React frontends to the GA4
                  instrumentation that tracks how users actually behave
                  inside them.
                </p>

                <p
                  className="text-[16px] leading-[1.85] font-light mt-5"
                  style={{ color: "rgba(255,255,255,0.38)" }}
                >
                  Currently building Trasora, a social music platform,
                  where I own everything from the Spring Boot API to paid
                  acquisition strategy. Summa Cum Laude graduate from
                  Baylor University, 2024 Marketing Student of the Year,
                  with certifications in GA4, HubSpot, SEMrush, and AWS.
                </p>
              </motion.div>

              {/* Timeline */}
              <motion.div {...fadeUp(0.28)}>
                <p
                  className="text-[11px] tracking-[0.22em] uppercase mb-8"
                  style={{
                    color: "rgba(255,255,255,0.2)",
                    fontFamily: "monospace",
                  }}
                >
                  Experience & Education
                </p>

                <div className="flex flex-col">
                  {TIMELINE.map((item, i) => (
                    <div
                      key={item.year + item.title}
                      className="relative grid grid-cols-12 gap-4 pb-10 last:pb-0"
                    >
                      {i < TIMELINE.length - 1 && (
                        <div
                          className="absolute left-[calc(1/12*100%+6px)] top-6 bottom-0 w-px"
                          style={{
                            background: "rgba(255,255,255,0.05)",
                          }}
                        />
                      )}

                      <div className="col-span-2 pt-0.5">
                        <span
                          className="text-[11px] tracking-widest font-medium"
                          style={{
                            color: YELLOW,
                            fontFamily: "monospace",
                          }}
                        >
                          {item.year}
                        </span>
                      </div>

                      <div className="col-span-1 flex justify-center pt-1.5">
                        <div
                          className="w-2 h-2 rounded-full flex-shrink-0"
                          style={{
                            background: "rgba(255,255,255,0.12)",
                            border:
                              "1px solid rgba(255,255,255,0.2)",
                          }}
                        />
                      </div>

                      <div className="col-span-9">
                        <p
                          className="text-[14px] font-medium mb-1.5"
                          style={{
                            color: "rgba(255,255,255,0.8)",
                          }}
                        >
                          {item.title}
                        </p>

                        <p
                          className="text-[13px] leading-[1.7] font-light"
                          style={{
                            color: "rgba(255,255,255,0.35)",
                          }}
                        >
                          {item.body}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right */}
            <div className="lg:col-span-5">
              <motion.div
                className="flex flex-col gap-10"
                {...fadeUp(0.3)}
              >
                {/* Skills */}
                <div>
                  <p
                    className="text-[11px] tracking-[0.22em] uppercase mb-7"
                    style={{
                      color: "rgba(255,255,255,0.2)",
                      fontFamily: "monospace",
                    }}
                  >
                    Skills & Stack
                  </p>

                  <div className="flex flex-col gap-7">
                    {SKILLS.map((group) => (
                      <div key={group.category}>
                        <p
                          className="text-[10px] tracking-[0.18em] uppercase mb-3"
                          style={{
                            color: YELLOW,
                            fontFamily: "monospace",
                          }}
                        >
                          {group.category}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {group.items.map((skill) => (
                            <span
                              key={skill}
                              className="text-[12px] px-3 py-1.5 border border-white/8 rounded-sm font-light"
                              style={{
                                color: "rgba(255,255,255,0.5)",
                                background:
                                  "rgba(255,255,255,0.03)",
                              }}
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Certifications */}
                <div className="pt-8 border-t border-white/5">
                  <p
                    className="text-[11px] tracking-[0.22em] uppercase mb-5"
                    style={{
                      color: "rgba(255,255,255,0.2)",
                      fontFamily: "monospace",
                    }}
                  >
                    Certifications
                  </p>

                  <div className="flex flex-col gap-2.5">
                    {CERTIFICATIONS.map((cert) => (
                      <div
                        key={cert}
                        className="flex items-center gap-2.5"
                      >
                        <span
                          className="w-1 h-1 rounded-full flex-shrink-0"
                          style={{ background: YELLOW }}
                        />

                        <span
                          className="text-[12px] font-light"
                          style={{
                            color: "rgba(255,255,255,0.45)",
                          }}
                        >
                          {cert}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Resume */}
                <div className="pt-8 border-t border-white/5">
                  <p
                    className="text-[11px] tracking-[0.22em] uppercase mb-5"
                    style={{
                      color: "rgba(255,255,255,0.2)",
                      fontFamily: "monospace",
                    }}
                  >
                    Download Résumé
                  </p>

                  <div className="flex flex-col gap-3">
                    {[
                      {
                        label: "Engineering / Analyst",
                        file: "/Gary_McCart_Analyst.pdf",
                      },
                      {
                        label: "Growth Marketing",
                        file:
                          "/Gary_McCart_Growth_Marketing.pdf",
                      },
                      {
                        label: "Digital Marketing",
                        file:
                          "/Gary_McCart_Digital_Marketing.pdf",
                      },
                      {
                        label: "SEO & Paid Media",
                        file:
                          "/Gary_McCart_SEO_Paid_Marketer.pdf",
                      },
                    ].map(({ label, file }) => (
                      <a
                        key={label}
                        href={file}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-between px-4 py-3 border border-white/8 rounded-sm text-[11px] tracking-[0.1em] uppercase transition-all hover:border-[#F5C518] hover:text-[#F5C518] group"
                        style={{
                          color: "rgba(255,255,255,0.4)",
                          fontFamily: "monospace",
                        }}
                      >
                        {label}

                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          className="opacity-50 group-hover:opacity-100 transition-all group-hover:translate-y-0.5"
                        >
                          <path d="M12 5v14M5 12l7 7 7-7" />
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <FooterBar />
      </div>
    </main>
  );
}