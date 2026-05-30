import Link from "next/link";
import { Home, Zap, User, Mail } from "lucide-react";
import Image from "next/image";

const YELLOW = "#F5C518";

const NAV_ITEMS = [
  { icon: Home, label: "Home", href: "/" },
  { icon: Zap, label: "Work", href: "/work" },
  { icon: User, label: "About", href: "/about" },
  { icon: Mail, label: "Contact", href: "/contact" },
];

interface SidebarProps {
  activeLabel?: string;
}

export default function Sidebar({ activeLabel = "Home" }: SidebarProps) {
  return (
    <>
      {/* ── Desktop sidebar — lg and up only ── */}
      <aside className="hidden lg:fixed lg:flex lg:left-0 lg:top-0 lg:h-full lg:w-[72px] bg-[#090909] border-r border-white/5 flex-col items-center justify-between py-6 z-50">
        {/* Top: logo + nav */}
        <div className="flex flex-col items-center gap-8">
          <Link href="/">
            <Image height={45} width={45} alt="GM3DEV" src="/G-light.png" />
          </Link>

          <nav className="flex flex-col items-center gap-2 mt-2">
            {NAV_ITEMS.map(({ icon: Icon, label, href }) => (
              <Link
                key={label}
                href={href}
                title={label}
                className={`w-10 h-10 flex items-center justify-center rounded-md transition-colors ${
                  activeLabel === label
                    ? "text-[#F5C518]"
                    : "text-white/25 hover:text-white/65 hover:bg-white/5"
                }`}
              >
                <Icon size={17} />
              </Link>
            ))}
          </nav>
        </div>

        {/* Bottom: social icons */}
        <div className="flex flex-col items-center gap-4">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            title="LinkedIn"
            className="text-white/25 hover:text-white/65 transition-colors"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
            </svg>
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            title="GitHub"
            className="text-white/25 hover:text-white/65 transition-colors"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
          </a>
        </div>
      </aside>

      {/* ── Mobile bottom tab bar — below lg only ── */}
      <nav
        className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#090909] border-t border-white/5 flex items-center justify-around px-2 pt-3"
       
      >
        {NAV_ITEMS.map(({ icon: Icon, label, href }) => {
          const active = activeLabel === label;
          return (
            <Link
              key={label}
              href={href}
              className="flex flex-col items-center gap-1 px-4 py-1 rounded-md transition-colors"
            >
              <Icon
                size={19}
                style={{ color: active ? YELLOW : "rgba(255,255,255,0.35)" }}
              />
              <span
                className="text-[9px] tracking-[0.12em] uppercase"
                style={{
                  color: active ? YELLOW : "rgba(255,255,255,0.3)",
                  fontFamily: "monospace",
                }}
              >
                {label}
              </span>
            </Link>
          );
        })}
      </nav>
    </>
  );
}
