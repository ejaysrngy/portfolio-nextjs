"use client";
import { useState } from "react";
import { BarWipeAnimation } from "./components";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [startAnimation, setStartAnimation] = useState(false);

  const gridStyles = [
    "auto-rows-[5rem]",
    "gap-8",
    "grid",
    "items-center",
    "justify-center",
  ].join(" ");

  const headerStyles = ["font-bold", "font-poppins", "text-8xl"].join(" ");

  const inputStyles = [
    "bg-transparent",
    "border-solid",
    "border-black",
    "border-[1.5px]",
    "h-24",
    "w-[30rem]",
    "placeholder: text-white",
    "placeholder: font-bold",
    "placeholder: font-poppins",
    "placeholder: p-2",
    "placeholder: text-6xl",
  ].join(" ");

  return (
    // this div sets the grid to be centered
    <div className="flex h-full justify-center items-center">
      {/* added wipe animation on page itself
          since React rerenders the page once a state has been changed
          and runs the whole transition animation again
      */}
      <BarWipeAnimation start={startAnimation} reverse={false}/>
      {/* this holds the grid styles */}
      <div className={gridStyles}>
        <span className={headerStyles}> Hey, </span>
        <input
          type="text"
          className={`${inputStyles} `}
          placeholder="your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button
          className="font-poppins text-2xl font-bold text-center disabled:opacity-50 transition ease-in-out 1000ms"
          disabled={!name}
          onClick={() => {
            setStartAnimation(true);
            // added delay to finish animation transition to finish
            // before navgiating to main page
            setTimeout(() => {
              router.push("/main");
            }, 1500);
          }}
        >
          {" "}
          let's go.{" "}
        </button>
      </div>
    </div>
  );
}
