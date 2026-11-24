import React, { createContext, useContext, useEffect, useState } from "react";

interface DarkModeContextType {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

// Create the context
const DarkModeContext = createContext<DarkModeContextType | null>(null);

// Provide the context
export const DarkModeProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    // Load initial theme from localStorage or default to light mode
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

// Custom hook to use the context
export const useDarkMode = () => {
  const context = useContext(DarkModeContext);
  if (!context) {
    return { isDarkMode: false, toggleDarkMode: () => {} };
  }
  return context;
};
