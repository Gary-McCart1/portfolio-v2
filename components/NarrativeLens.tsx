"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const YELLOW = "#F5C518";

interface NarrativeLensProps {
  variant: "A" | "B";
  onToggle: () => void;
}

const COPY = {
  A: {
    subtitle: "Full-Stack Engineer · Technical Builder · Architect",
    body: "I build and scale digital systems through clean architecture, maintainability, and products that feel intentional from the ground up — across React, Django, and Spring Boot.",
  },
  B: {
    subtitle: "Growth Marketer · SEO Strategist · Analytics Engineer",
    body: "I design analytics-driven products using GA4 instrumentation, funnel tracking, and conversion-focused architecture to surface real user behavior and improve retention at scale.",
  },
};

export default function NarrativeLens({ variant, onToggle }: NarrativeLensProps) {
  return (
    <div>
      {/* Toggle row */}
      <div className="flex items-center gap-3 mb-3">
        <span
          className="text-[12px] tracking-[0.22em] uppercase select-none"
          style={{ color: "rgba(255, 255, 255, 0.938)", fontFamily: "monospace" }}
        >
          Narrative Lens
        </span>
        <span style={{ color: "rgba(255, 255, 255, 0.448)" }}>·</span>
        <button
          onClick={onToggle}
          className="group inline-flex items-center gap-2 transition-colors text-white/50 hover:text-white"
          style={{ fontFamily: "monospace", fontSize: "13px", letterSpacing: "0.08em" }}
        >
          <span
            className="inline-flex items-center justify-center w-5 h-5 rounded-sm text-black text-[10px] font-bold"
            style={{ background: YELLOW }}
          >
            {variant}
          </span>
          View {variant === "A" ? "Marketing" : "Engineering"} angle
          <ArrowUpRight
            size={11}
            className="opacity-40 group-hover:opacity-100 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </button>
      </div>

      {/* Swappable subtitle + body */}
      <div className="min-h-[140px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={variant}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            <p
              className="text-[21px] md:text-[22px] leading-snug mb-3 font-medium"
              style={{
                color: "rgba(255, 255, 255, 0.801)",
                fontFamily: "'DM Sans', ui-sans-serif, sans-serif",
                letterSpacing: "0.01em",
              }}
            >
              {COPY[variant].subtitle}
            </p>
            <p
              className="text-[17px] leading-[1.85] max-w-md font-light"
              style={{
                color: "rgba(255, 255, 255, 0.471)",
                fontFamily: "'DM Sans', ui-sans-serif, sans-serif",
              }}
            >
              {COPY[variant].body}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
