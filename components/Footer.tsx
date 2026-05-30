const SANS = "'DM Sans', ui-sans-serif, sans-serif";

const WORK_ITEMS = ["Trasora Platform", "Growth Systems", "Analytics Engineering"];

export default function FooterBar() {
  return (
    <footer
      className="border-t border-white/5 px-12 py-4 flex items-center justify-between"
      style={{ fontFamily: SANS }}
    >
      <div className="flex items-center gap-6">
        {WORK_ITEMS.map((item) => (
          <span
            key={item}
            className="text-[11px] tracking-wide text-white/20 hover:text-white/55 cursor-pointer transition-colors uppercase"
            style={{ letterSpacing: "0.08em" }}
          >
            {item}
          </span>
        ))}
      </div>
      <span className="text-[11px] text-white/18" style={{ letterSpacing: "0.06em" }}>
        Raleigh-Durham, NC · © 2026
      </span>
    </footer>
  );
}
