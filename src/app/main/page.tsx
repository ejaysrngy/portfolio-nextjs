"use client";
import { useState, useEffect } from "react";
import { BarWipeAnimation } from "../components";
import { uiSlice } from "../store";

export default function Main() {
  const { visitedMain, setVisitedMain } = uiSlice((state) => state);

  useEffect(() => {
    // sets the animation to stop
    // IF the had already came from
    // the landing page even if they refresh
    const animationStop = setTimeout(() => {
      setVisitedMain(true);
    }, 1500);

    return () => clearTimeout(animationStop);
  }, [window.location.pathname]);

  const gridStyles = [
    "auto-rows-[5rem]",
    "gap-8",
    "grid",
    "items-center",
    "justify-center",
  ].join(" ");

  return (
    // this div sets the grid to be centered
    <div className="flex h-full justify-center items-center">
      <BarWipeAnimation start={!visitedMain} reverse={true} />
      {/* this holds the grid styles */}
      <div className={gridStyles}>hatdog</div>
    </div>
  );
}
