
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
      className="rounded-full w-9 h-9 p-0 transition-colors duration-300"
    >
      <span className="sr-only">Toggle theme</span>
      <Sun className={`h-[1.2rem] w-[1.2rem] transition-transform duration-500 ${theme === "dark" ? "rotate-0" : "rotate-90 opacity-0 scale-0"} absolute`} />
      <Moon className={`h-[1.2rem] w-[1.2rem] transition-transform duration-500 ${theme === "light" ? "rotate-0" : "rotate-90 opacity-0 scale-0"} absolute`} />
    </Button>
  );
}
