"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

type Theme = "light" | "dark";
type TransitionOrigin = { x: number; y: number };
type ViewTransition = {
  ready: Promise<void>;
  finished: Promise<void>;
};
type ViewTransitionDocument = Document & {
  startViewTransition?: (callback: () => void) => ViewTransition;
};

interface ThemeContextType {
  theme: Theme;
  toggleTheme: (
    trigger?: HTMLElement | React.MouseEvent<HTMLElement> | MouseEvent | null,
  ) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const getElementCenter = (
  element: HTMLElement | null,
): TransitionOrigin | null => {
  if (!element) return null;
  const rect = element.getBoundingClientRect();
  if (rect.width === 0 || rect.height === 0) return null;
  return {
    x: rect.left + rect.width / 2,
    y: rect.top + rect.height / 2,
  };
};

const resolveTransitionOrigin = (
  trigger?: HTMLElement | null,
): TransitionOrigin => {
  const originFromTrigger = getElementCenter(trigger ?? null);
  if (originFromTrigger) return originFromTrigger;

  const buttons =
    typeof document !== "undefined"
      ? Array.from(
          document.querySelectorAll<HTMLElement>("[data-theme-toggle]"),
        )
      : [];

  for (const btn of buttons) {
    const center = getElementCenter(btn);
    if (center) return center;
  }

  return {
    x: typeof window !== "undefined" ? window.innerWidth - 64 : 0,
    y: 44,
  };
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") return "light";
    const storedTheme = localStorage.getItem("mrpl_theme") as Theme | null;
    if (storedTheme) return storedTheme;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });
  const [mounted, setMounted] = useState(false);
  const isTransitioningRef = useRef(false);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    const timer = setTimeout(() => setMounted(true), 0);

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem("mrpl_theme")) {
        const nextTheme = e.matches ? "dark" : "light";
        setTheme(nextTheme);
        if (nextTheme === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      }
    };

    mediaQuery.addEventListener("change", handleSystemThemeChange);
    return () => {
      clearTimeout(timer);
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
    };
  }, [theme]);

  const applyThemeChange = (nextTheme: Theme) => {
    setTheme(nextTheme);
    localStorage.setItem("mrpl_theme", nextTheme);
    if (nextTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const toggleTheme = (
    trigger?: HTMLElement | React.MouseEvent<HTMLElement> | MouseEvent | null,
  ) => {
    let targetElement: HTMLElement | null = null;

    if (trigger && "nodeType" in trigger && trigger.nodeType === 1) {
      targetElement = trigger as HTMLElement;
    } else if (
      trigger &&
      "currentTarget" in trigger &&
      trigger.currentTarget &&
      "nodeType" in (trigger.currentTarget as object)
    ) {
      targetElement = trigger.currentTarget as HTMLElement;
    } else if (
      trigger &&
      "target" in trigger &&
      trigger.target &&
      "nodeType" in (trigger.target as object)
    ) {
      targetElement =
        (trigger.target as HTMLElement).closest("[data-theme-toggle]") ||
        (trigger.target as HTMLElement);
    }

    const origin = resolveTransitionOrigin(targetElement);
    const nextTheme = theme === "light" ? "dark" : "light";

    if (
      typeof document === "undefined" ||
      !("startViewTransition" in document) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      applyThemeChange(nextTheme);
      return;
    }

    if (isTransitioningRef.current) {
      return;
    }

    isTransitioningRef.current = true;

    const x = origin.x;
    const y = origin.y;
    const w = window.innerWidth || 1;
    const h = window.innerHeight || 1;

    const xPct = ((x / w) * 100).toFixed(3);
    const yPct = ((y / h) * 100).toFixed(3);

    const endRadius = Math.hypot(Math.max(x, w - x), Math.max(y, h - y));

    const isLaptopOrScaled =
      typeof window !== "undefined" &&
      (window.devicePixelRatio > 1.1 || window.innerWidth <= 1536);

    let keyframes: Keyframe[];
    let transitionDuration: number;
    let transitionEasing: string;

    if (isLaptopOrScaled) {
      // Laptop / Scaled GPU optimization:
      // Multi-step sine ease-out keyframe progression with 6% over-expansion buffer
      // ensures ultra-fluid, lag-free expansion without mid-way stalling or tail-end snapping.
      const steps = 12;
      keyframes = [];
      const targetRadius = endRadius * 1.06;
      for (let i = 0; i <= steps; i++) {
        const p = i / steps;
        const progressCurve = Math.sin((p * Math.PI) / 2);
        const r = (targetRadius * progressCurve).toFixed(1);
        keyframes.push({
          clipPath: `circle(${r}px at ${xPct}% ${yPct}%)`,
        });
      }
      transitionDuration = 440;
      transitionEasing = "linear";
    } else {
      // External desktop monitor (original standard animation)
      keyframes = [
        { clipPath: `circle(0px at ${x}px ${y}px)` },
        { clipPath: `circle(${endRadius}px at ${x}px ${y}px)` },
      ];
      transitionDuration = 500;
      transitionEasing = "cubic-bezier(0.4, 0, 0.2, 1)";
    }

    try {
      const transition = (
        document as ViewTransitionDocument
      ).startViewTransition?.(() => {
        applyThemeChange(nextTheme);
      });

      if (!transition) {
        isTransitioningRef.current = false;
        applyThemeChange(nextTheme);
        return;
      }

      transition.ready
        .then(() => {
          document.documentElement.animate(keyframes, {
            duration: transitionDuration,
            easing: transitionEasing,
            pseudoElement: "::view-transition-new(root)",
            fill: "forwards",
          });
        })
        .catch(() => {
          isTransitioningRef.current = false;
        });

      transition.finished
        .catch(() => undefined)
        .finally(() => {
          isTransitioningRef.current = false;
        });
    } catch {
      isTransitioningRef.current = false;
      applyThemeChange(nextTheme);
    }
  };

  return (
    <ThemeContext.Provider
      value={{ theme: mounted ? theme : "light", toggleTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
