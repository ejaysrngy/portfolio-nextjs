"use client";
import About from "./About";
import HeroSection from "./Hero";
import NavBar from "./NavBar";

import { useEffect } from "react";
import { BarWipeAnimation } from "../components";
import { uiSlice } from "../store";

import { NAV_LINKS } from "../constants/const";

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

  return (
    // this div sets the grid to be centered
    <div className="flex h-full flex-col">
      <BarWipeAnimation start={!visitedMain} reverse={true} />
      {/* this holds the grid styles */}
      <NavBar navLinks={NAV_LINKS} />
      <div className="flex flex-col pt-3 justify-evenly z-40 gap-48">
        <HeroSection />
        <About/>
      </div>
    </div>
  );
}
