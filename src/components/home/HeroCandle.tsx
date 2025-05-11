"use client";
import { useUiContext } from "@/contexts/UiProvider";
import "../../styles/heroCandle.css";

export default function HeroCandle() {
  const { theme } = useUiContext();
  return (
    <div className="holder  lg:w-1/3 ">
      <div className="candle">
        {theme === "dark" && 
        <div className="blinking-glow"></div>}

        <div className="thread"></div>

        {theme === "dark" && (
          <>
            <div className="glow"></div>
            <div className="flame"></div>
          </>
        )}
      </div>
    </div>
  );
}
