"use client";
import { useState, useEffect } from "react";
import { BarWipeAnimation } from "../components";
import { uiSlice } from "../store";
import NavBar from "./NavBar";

export default function Main() {
  const { visitedMain, setVisitedMain } = uiSlice((state) => state);

  const navLinkArray = [
    {
      text: "Home",
      link: "#home",
    },
    {
      text: "About",
      link: "#about",
    },
    {
      text: "Projects",
      link: "#projects",
    },
    {
      text: "Contact",
      link: "#contact",
    },
  ];

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
      <NavBar navLinks={navLinkArray} />
      <div></div>
    </div>
  );
}
