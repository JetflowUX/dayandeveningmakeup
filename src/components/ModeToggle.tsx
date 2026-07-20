import { useMode } from "../theme/ModeContext";

/**
 * Editorial mode control — "DAY / EVENING" as an issue selector rather than a
 * gadget. A real button with aria-pressed (pressed = evening).
 */
export function ModeToggle({ onImage = false }: { onImage?: boolean }) {
  const { mode, toggle } = useMode();
  const evening = mode === "evening";
  return (
    <button
      type="button"
      className={`mode-toggle${onImage ? " mode-toggle--on-image" : ""}`}
      onClick={toggle}
      aria-pressed={evening}
      aria-label={`Currently ${evening ? "Evening" : "Day"}. Switch to ${evening ? "Day" : "Evening"}.`}
    >
      <span className={`mode-toggle__opt${!evening ? " is-on" : ""}`}>Day</span>
      <span className="mode-toggle__sep" aria-hidden="true" />
      <span className={`mode-toggle__opt${evening ? " is-on" : ""}`}>Evening</span>
    </button>
  );
}
