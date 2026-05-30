"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import NarrativeLens from "./NarrativeLens";
import CtaButtons from "./CtaButtons";

const YELLOW = "#F5C518";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 0.55,
    ease: [0.22, 1, 0.36, 1] as const,
    delay,
  },
});

function LogoGlow({ size = 500 }: { size?: number }) {
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{
        width: size,
        height: size,
        top: "50%",
        left: "50%",
        marginTop: -size / 2,
        marginLeft: -size / 2,
        borderRadius: "50%",
        background:
          "radial-gradient(circle, rgba(245,197,24,0.32) 0%, rgba(245,197,24,0.12) 35%, transparent 65%)",
        zIndex: 0,
      }}
      animate={{ opacity: [0.4, 1, 0.4], scale: [0.88, 1.15, 0.88] }}
      transition={{ duration: 2.2, ease: "easeInOut", repeat: Infinity }}
    />
  );
}

export default function HeroSection() {
  const [variant, setVariant] = useState<"A" | "B">("A");

  return (
    <section
      className="relative flex-1 grid lg:grid-cols-2"
      style={{
        // On mobile: full viewport minus the bottom tab bar (~64px)
        // On desktop: full viewport minus the top nav (~53px)
        minHeight: "calc(100vh - 64px)",
      }}
    >
      {/* ── Code tag decorations — desktop only ── */}
      <span
        className="hidden lg:block absolute top-6 left-8 text-[11px] tracking-widest select-none pointer-events-none"
        style={{ color: YELLOW, fontFamily: "monospace", opacity: 0.5 }}
      >
        {"<body>"}
      </span>
      <span
        className="hidden lg:block absolute bottom-10 left-8 text-[11px] tracking-widest select-none pointer-events-none"
        style={{ color: YELLOW, fontFamily: "monospace", opacity: 0.5 }}
      >
        {"</body>"}
      </span>
      <span
        className="hidden lg:block absolute bottom-4 left-8 text-[11px] tracking-widest select-none pointer-events-none"
        style={{ color: YELLOW, fontFamily: "monospace", opacity: 0.5 }}
      >
        {"</html>"}
      </span>

      {/* ── LEFT COLUMN ── */}
      <div
        className="relative flex flex-col justify-center pr-[4rem] md:pr-0 sm:px-10 lg:px-14 pt-10 pb-20 lg:py-0"
        style={{ zIndex: 2 }}
      >
        {/* Mobile logo */}
        <motion.div
          className="flex lg:hidden justify-center mb-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        >
        </motion.div>

        {/* Eyebrow */}
        <motion.p
          className="text-[11px] tracking-[0.22em] uppercase mb-3"
          style={{ color: YELLOW, fontFamily: "monospace" }}
          {...fadeUp(0.18)}
        >
          Hi I&apos;m
        </motion.p>

        {/* Name */}
        <motion.h1
          className="leading-[0.9] tracking-tight text-white mb-5 sm:mb-7"
          style={{
            fontFamily: "'Bebas Neue', 'Arial Black', sans-serif",
            fontSize: "clamp(52px, 13vw, 108px)",
          }}
          {...fadeUp(0.22)}
        >
          Gary McCart
        </motion.h1>

        <motion.div {...fadeUp(0.1)}>
          <NarrativeLens
            variant={variant}
            onToggle={() => setVariant((v) => (v === "A" ? "B" : "A"))}
          />
        </motion.div>

        {/* Divider */}
        <motion.div
          className="w-12 h-px mt-3 mb-1"
          style={{ background: YELLOW, opacity: 0.6 }}
          {...fadeUp(0.28)}
        />

        {/* CTAs — extra bottom padding on mobile to clear tab bar */}
        <motion.div className="pb-4 lg:pb-0" {...fadeUp(0.34)}>
          <CtaButtons />
        </motion.div>
      </div>

      {/* ── RIGHT COLUMN — desktop only ── */}
      <div
        className="hidden lg:flex items-center justify-center relative"
        style={{ zIndex: 2 }}
      >
        {/* Dot grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            maskImage:
              "radial-gradient(ellipse 75% 75% at 50% 50%, black 40%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 75% 75% at 50% 50%, black 40%, transparent 100%)",
          }}
        />

        <div className="relative flex items-center justify-center">
          <LogoGlow size={700} />

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
            whileHover={{ scale: 1.06, rotate: -2 }}
            style={{
              cursor: "pointer",
              position: "relative",
              zIndex: 1,
              filter:
                "drop-shadow(0 0 48px rgba(245,197,24,0.2)) drop-shadow(0 0 90px rgba(245,197,24,0.08))",
              transition: "filter 0.4s ease",
            }}
            onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
              e.currentTarget.style.filter =
                "drop-shadow(0 0 90px rgba(245,197,24,0.75)) drop-shadow(0 0 180px rgba(245,197,24,0.45)) drop-shadow(0 0 300px rgba(245,197,24,0.2))";
            }}
            onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
              e.currentTarget.style.filter =
                "drop-shadow(0 0 48px rgba(245,197,24,0.2)) drop-shadow(0 0 90px rgba(245,197,24,0.08))";
            }}
          >
            <Image
              src="/G-light.png"
              alt="Gary McCart logo mark"
              width={500}
              height={500}
              priority
              style={{
                maxWidth: "min(500px, 60vw)",
                height: "auto",
                display: "block",
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}