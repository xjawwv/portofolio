"use client";

import { createContext, useContext, useEffect, useState } from "react";

interface ThemeContextType {
  mounted: boolean;
}

const ThemeContext = createContext<ThemeContextType>({
  mounted: false,
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Always set dark mode
    document.documentElement.classList.add("dark");
  }, []);

  // Avoid hydration mismatch
  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <ThemeContext.Provider value={{ mounted }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
