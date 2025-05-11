"use client";
import { createContext, ReactNode, useContext, useState } from "react";
type UiContextType = {
  theme: "light" | "dark";
  handleTheme: (selectedTheme: "light" | "dark") => void;
  isAsideOpen: boolean;
  toggleAside: () => void;
};

const UiContext = createContext<UiContextType | null>(null);

export default function UiProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [isAsideOpen, setIsAsideOpen] = useState<boolean>(false);

  const handleTheme = (selectedTheme: "light" | "dark") => {
    setTheme(selectedTheme);
  };
  const toggleAside = () => {
    setIsAsideOpen((prev) => !prev);
  };

  return (
    <UiContext.Provider
      value={{ handleTheme, theme, isAsideOpen, toggleAside }}
    >
     <div
        data-theme={theme}
        className=" w-full bg-Background transition-all duration-700"
      >
        {children}
      </div>
    </UiContext.Provider>
  );
}
export const useUiContext = (): UiContextType => {
  const context = useContext(UiContext);
  if (context === null) {
    throw new Error("useUiContext must be used within a UiProvider");
  }
  return context;
};
