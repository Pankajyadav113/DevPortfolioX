import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import { DevOpsTerminal } from "../components/ui/DevOpsTerminal";
import ScrollToTop from "../components/ui/ScrollToTop";
import ScrollProgress from "../components/ui/ScrollProgress";

export function MainLayout() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
  const [isTerminalOpen, setIsTerminalOpen] = useState<boolean>(false);

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkMode ? "bg-[#0B0F19] text-slate-100" : "bg-[#F4F9F6] text-slate-900"
    }`}>
      <ScrollProgress />

      {/* Floating Centered Navbar */}
      <Navbar
        isDarkMode={isDarkMode}
        onToggleTheme={toggleTheme}
        onToggleTerminal={() => setIsTerminalOpen(true)}
      />

      <main>
        <Outlet context={{ isDarkMode, onOpenTerminal: () => setIsTerminalOpen(true) }} />
      </main>

      <ScrollToTop />

      {/* Global DevOps CLI Terminal Drawer */}
      <DevOpsTerminal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
      />
    </div>
  );
}

export default MainLayout;