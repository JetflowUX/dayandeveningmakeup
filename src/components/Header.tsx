import { useEffect, useState } from "react";
import { List, X } from "@phosphor-icons/react";
import { NAV } from "../data/content";
import { ModeToggle } from "./ModeToggle";

/** Editorial masthead bar. Transparent over the hero, inks in on scroll. */
export function Header() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > window.innerHeight * 0.72);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className={`masthead${solid ? " is-solid" : ""}`}>
      <div className="masthead__bar">
        <a href="#top" className="masthead__brand" aria-label="Day and Evening Makeup — home">
          Day <em>&amp;</em> Evening
        </a>

        <nav className="masthead__nav" aria-label="Primary">
          {NAV.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </nav>

        <div className="masthead__right">
          <ModeToggle onImage={!solid} />
          <button
            type="button"
            className="masthead__burger"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <List size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="masthead__mobile" aria-label="Mobile">
          {NAV.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
          ))}
        </nav>
      )}
    </header>
  );
}
