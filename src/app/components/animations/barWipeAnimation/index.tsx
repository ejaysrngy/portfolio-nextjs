"use client";

import { useAnimate, stagger } from "framer-motion";
import { useEffect, useRef } from "react";

function useAnimation(start: boolean) {
  const [scope, animate] = useAnimate();

  const staggerBars = stagger(0.1, { startDelay: 0.1 });

  useEffect(() => {
    animate(
      ".stagger-bar",
      start
        ? {
            transform: [
              "translateX(-100%)",
              "translateX(0%)",
            ],
          }
        : {},
      { duration: 1, ease: "easeInOut", delay: staggerBars }
    );
  });

  return scope;
}

export default function BarWipeAnimation(props: { start: boolean }) {
  const { start } = props;
  const scope = useAnimation(start);

  return (
    <div
      className={`absolute h-full overflow-hidden top-0 left-0 right-0 bottom-0 pointer-events-none z-10 ${start ? "visible" : "hidden"}`}
      ref={scope}
    >
      <div className="stagger-bar h-[20%] bar-styles"></div>
      <div className="stagger-bar h-[20%] bar-styles"></div>
      <div className="stagger-bar h-[20%] bar-styles"></div>
      <div className="stagger-bar h-[20%] bar-styles"></div>
      <div className="stagger-bar h-[20%] bar-styles"></div>
    </div>
  );
}
