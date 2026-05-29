import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const YELLOW = "#F5C518";
const SANS = "'DM Sans', ui-sans-serif, sans-serif";

export default function CtaButtons() {
  return (
    <div className="flex items-center gap-4 mt-10">
      <Link
        href="/case-studies"
        className="inline-flex items-center gap-2 border border-white/20 px-6 py-3 text-[11px] tracking-[0.18em] uppercase text-white transition-all hover:border-white/50 hover:bg-white/5"
        style={{ fontFamily: SANS, borderRadius: "2px" }}
      >
        View Case Studies
      </Link>
      <Link
        href="/contact"
        className="inline-flex items-center gap-2 px-6 py-3 text-[11px] tracking-[0.18em] uppercase text-black font-semibold transition-all hover:opacity-90 hover:-translate-y-px"
        style={{ background: YELLOW, fontFamily: SANS, borderRadius: "2px" }}
      >
        Contact Me
        <ArrowUpRight size={12} />
      </Link>
    </div>
  );
}
