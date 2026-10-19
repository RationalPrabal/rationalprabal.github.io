import { useEffect, useState } from "react";
import { LuArrowUpRight, LuMenu, LuX, LuMoon, LuSun, LuSearch } from "react-icons/lu";
import { nav, profile } from "../data";
import { useActiveSection, useTheme } from "../hooks";
import "./Nav.css";

const ids = nav.map((n) => n.id);

export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const next = theme === "dark" ? "light" : "dark";
  return (
    <button className="icon-btn theme-toggle" onClick={toggle} aria-label={`Switch to ${next} theme`}>
      {theme === "dark" ? <LuSun /> : <LuMoon />}
    </button>
  );
}

export default function Nav({ onOpenPalette }) {
  const active = useActiveSection(ids);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const isMac = typeof navigator !== "undefined" && /Mac|iPhone|iPad/.test(navigator.platform);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className={`nav ${scrolled ? "is-scrolled" : ""} ${open ? "is-open" : ""}`}>
      <div className="container nav-inner">
        <a href="#top" className="brand">
          <span className="brand-mark" aria-hidden="true">
            p<i>.</i>
          </span>
          <span className="brand-name">{profile.shortName}</span>
        </a>

        <nav className="nav-links" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={active === item.id ? "is-active" : undefined}
              aria-current={active === item.id ? "true" : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <button className="palette-trigger" onClick={onOpenPalette} aria-label={`Quick jump ${isMac ? "⌘" : "Ctrl"} K`}>
            <LuSearch aria-hidden="true" />
            <span>Quick jump</span>
            <kbd>{isMac ? "⌘" : "Ctrl"}</kbd>
            <kbd>K</kbd>
          </button>
          <ThemeToggle />
          <a className="btn btn-primary btn-sm nav-resume" href={profile.resume} target="_blank" rel="noreferrer">
            Resume <LuArrowUpRight aria-hidden="true" />
          </a>
          <button
            className="icon-btn nav-menu-btn"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <LuX /> : <LuMenu />}
          </button>
        </div>
      </div>

      <div id="mobile-menu" className="mobile-menu" hidden={!open}>
        <nav className="container" aria-label="Mobile">
          {nav.map((item, i) => (
            <a key={item.id} href={`#${item.id}`} onClick={() => setOpen(false)} style={{ "--i": i }}>
              <span className="mm-num">0{i + 1}</span>
              {item.label}
            </a>
          ))}
          <a
            href={profile.resume}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary mm-resume"
            style={{ "--i": nav.length }}
          >
            View résumé <LuArrowUpRight aria-hidden="true" />
          </a>
        </nav>
      </div>
    </header>
  );
}
