import {
  createContext, useCallback, useContext, useEffect, useMemo, useState,
  type ReactNode,
} from "react";

/**
 * Day / Evening mode — the site's signature and its theme system in one.
 * Applied as [data-mode] on <html>; every colour token in tokens.css keys off it.
 */
export type Mode = "day" | "evening";

interface ModeContextValue {
  mode: Mode;
  toggle: () => void;
  setMode: (m: Mode) => void;
}

const ModeContext = createContext<ModeContextValue | null>(null);
const STORAGE_KEY = "dem-mode";

/** First-visit default: match the time of day the visitor is actually in. */
function initialMode(): Mode {
  if (typeof window === "undefined") return "day";
  const saved = window.localStorage.getItem(STORAGE_KEY);
  if (saved === "day" || saved === "evening") return saved;
  const hour = new Date().getHours();
  return hour >= 6 && hour < 18 ? "day" : "evening";
}

export function ModeProvider({ children }: { children: ReactNode }) {
  const [mode, setModeState] = useState<Mode>(initialMode);

  useEffect(() => {
    document.documentElement.setAttribute("data-mode", mode);
    window.localStorage.setItem(STORAGE_KEY, mode);
  }, [mode]);

  const setMode = useCallback((m: Mode) => setModeState(m), []);
  const toggle = useCallback(
    () => setModeState((m) => (m === "day" ? "evening" : "day")),
    [],
  );

  const value = useMemo(() => ({ mode, toggle, setMode }), [mode, toggle, setMode]);
  return <ModeContext.Provider value={value}>{children}</ModeContext.Provider>;
}

export function useMode(): ModeContextValue {
  const ctx = useContext(ModeContext);
  if (!ctx) throw new Error("useMode must be used within <ModeProvider>");
  return ctx;
}
