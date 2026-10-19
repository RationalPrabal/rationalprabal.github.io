import { useEffect, useMemo, useRef, useState } from "react";
import {
  LuSearch,
  LuHash,
  LuCopy,
  LuSunMoon,
  LuFileText,
  LuMail,
  LuCornerDownLeft,
  LuArrowUpRight,
} from "react-icons/lu";
import { nav, profile, socials } from "../data";
import { useTheme } from "../hooks";
import { socialIcons } from "./Icons";
import "./CommandPalette.css";

const openUrl = (href) => window.open(href, "_blank", "noopener,noreferrer");

export default function CommandPalette({ open, setOpen }) {
  const { toggle } = useTheme();
  const dialogRef = useRef(null);
  const inputRef = useRef(null);
  const [query, setQuery] = useState("");
  const [index, setIndex] = useState(0);
  const [toast, setToast] = useState("");

  const commands = useMemo(
    () => [
      ...nav.map((n) => ({
        id: `go-${n.id}`,
        group: "Navigate",
        label: `Go to ${n.label}`,
        icon: LuHash,
        run: () => document.getElementById(n.id)?.scrollIntoView({ behavior: "smooth" }),
      })),
      {
        id: "copy-email",
        group: "Actions",
        label: "Copy email address",
        hint: profile.email,
        icon: LuCopy,
        keep: true,
        run: async () => {
          try {
            await navigator.clipboard.writeText(profile.email);
            setToast("Email copied to clipboard");
          } catch {
            setToast(profile.email);
          }
        },
      },
      { id: "theme", group: "Actions", label: "Toggle light / dark theme", icon: LuSunMoon, run: toggle },
      { id: "resume", group: "Actions", label: "Open résumé", icon: LuFileText, external: true, run: () => openUrl(profile.resume) },
      { id: "mail", group: "Actions", label: "Send an email", icon: LuMail, run: () => (location.href = `mailto:${profile.email}`) },
      ...socials
        .filter((s) => s.id !== "email")
        .map((s) => ({
          id: `social-${s.id}`,
          group: "Elsewhere",
          label: s.label,
          hint: s.handle,
          icon: socialIcons[s.id],
          external: true,
          run: () => openUrl(s.href),
        })),
    ],
    [toggle]
  );

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return commands;
    return commands.filter((c) => `${c.label} ${c.group} ${c.hint ?? ""}`.toLowerCase().includes(q));
  }, [commands, query]);

  // Global shortcut: Cmd/Ctrl+K toggles, "/" opens when not typing.
  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      } else if (e.key === "/" && !/^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement?.tagName)) {
        e.preventDefault();
        setOpen(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [setOpen]);

  // Sync React state with the native <dialog>.
  useEffect(() => {
    const d = dialogRef.current;
    if (!d) return;
    if (open && !d.open) {
      setQuery("");
      setIndex(0);
      setToast("");
      d.showModal();
      requestAnimationFrame(() => inputRef.current?.focus());
    } else if (!open && d.open) {
      d.close();
    }
  }, [open]);

  useEffect(() => setIndex(0), [query]);

  useEffect(() => {
    document.getElementById(`cmd-${results[index]?.id}`)?.scrollIntoView({ block: "nearest" });
  }, [index, results]);

  function run(cmd) {
    if (!cmd) return;
    if (!cmd.keep) setOpen(false);
    // Let the dialog close before scrolling/navigating.
    requestAnimationFrame(() => cmd.run());
  }

  function onKeyDown(e) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setIndex((i) => (i + 1) % Math.max(results.length, 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setIndex((i) => (i - 1 + results.length) % Math.max(results.length, 1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      run(results[index]);
    }
  }

  let lastGroup = null;

  return (
    <dialog
      ref={dialogRef}
      className="palette"
      aria-label="Command menu"
      onClose={() => setOpen(false)}
      onClick={(e) => e.target === dialogRef.current && setOpen(false)}
    >
      <div className="palette-box">
        <div className="palette-search">
          <LuSearch aria-hidden="true" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={onKeyDown}
            placeholder="Type a command or search…"
            role="combobox"
            aria-expanded="true"
            aria-controls="palette-list"
            aria-activedescendant={results[index] ? `cmd-${results[index].id}` : undefined}
            aria-autocomplete="list"
            spellCheck="false"
          />
          <kbd>esc</kbd>
        </div>

        <ul id="palette-list" className="palette-list" role="listbox" aria-label="Commands">
          {results.length === 0 && <li className="palette-empty">No results for “{query}”</li>}
          {results.map((c, i) => {
            const showGroup = c.group !== lastGroup;
            lastGroup = c.group;
            const Icon = c.icon;
            return (
              <li key={c.id} role="presentation">
                {showGroup && (
                  <p className="palette-group" aria-hidden="true">
                    {c.group}
                  </p>
                )}
                <div
                  id={`cmd-${c.id}`}
                  role="option"
                  aria-selected={i === index}
                  className="palette-item"
                  onMouseMove={() => setIndex(i)}
                  onClick={() => run(c)}
                >
                  <Icon aria-hidden="true" />
                  <span className="pi-label">{c.label}</span>
                  {c.hint && <span className="pi-hint">{c.hint}</span>}
                  {c.external ? (
                    <LuArrowUpRight className="pi-enter" aria-hidden="true" />
                  ) : (
                    <LuCornerDownLeft className="pi-enter" aria-hidden="true" />
                  )}
                </div>
              </li>
            );
          })}
        </ul>

        <div className="palette-foot">
          <span>
            <kbd>↑</kbd>
            <kbd>↓</kbd> navigate
          </span>
          <span>
            <kbd>↵</kbd> select
          </span>
          <span className="palette-toast" role="status" aria-live="polite">
            {toast}
          </span>
        </div>
      </div>
    </dialog>
  );
}
