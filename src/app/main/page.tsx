"use client";
import { useState } from "react";
import { BarWipeAnimationReverse } from "../components";

export default function Main() {
  const [name, setName] = useState("");

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
      <BarWipeAnimationReverse start={true} />
      {/* this holds the grid styles */}
      <div className={gridStyles}>
        hatdog
      </div>
    </div>
  );
}
