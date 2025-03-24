
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/providers/ThemeProvider";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  // Avoid hydration mismatch by only rendering after mount
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="rounded-full w-9 h-9 p-0 overflow-hidden relative"
      aria-label="Toggle theme"
    >
      <span className="sr-only">Toggle theme</span>
      <Sun 
        className={`h-5 w-5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ${
          theme === "light" 
            ? "opacity-100 rotate-0 scale-100" 
            : "opacity-0 rotate-90 scale-50"
        }`} 
      />
      <Moon 
        className={`h-5 w-5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ${
          theme === "dark" 
            ? "opacity-100 rotate-0 scale-100" 
            : "opacity-0 rotate-90 scale-50"
        }`} 
      />
    </Button>
  );
}
