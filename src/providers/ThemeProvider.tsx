
import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const initialState: ThemeProviderState = {
  theme: "light",
  setTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = "light",
  storageKey = "maj-studio-theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
  );

  useEffect(() => {
    const root = window.document.documentElement;
    
    // First add the fade-out class to animate out the current theme
    root.classList.add('theme-fade-out');
    
    // After a short delay, change the theme and animate in
    setTimeout(() => {
      // Remove the previous theme class
      root.classList.remove("light", "dark");
      // Add the new theme class
      root.classList.add(theme);
      // Save the theme in localStorage
      localStorage.setItem(storageKey, theme);
      
      // Remove fade-out and add fade-in
      root.classList.remove('theme-fade-out');
      root.classList.add('theme-fade-in');
      
      // Remove the fade-in class after animation completes
      setTimeout(() => {
        root.classList.remove('theme-fade-in');
      }, 500);
    }, 150); // Short delay for fade-out before changing theme
    
  }, [theme, storageKey]);

  const value = {
    theme,
    setTheme: (theme: Theme) => setTheme(theme),
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");

  return context;
};
