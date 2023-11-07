"use client";

import { useAnimate, stagger } from "framer-motion";
import { useEffect, useRef } from "react";

function useAnimation(start: boolean, reverse: boolean) {
  const [scope, animate] = useAnimate();

  const staggerBars = stagger(0.1, { startDelay: 0.1 });

  // fn to reverse animation if reverse props
  // is true; to remove the need to have another
  // animation hook to render transition animation
  const transformAnimation = (reverse: boolean): any => {
    let animation: Object;
    if (reverse) {
      animation = { transform: ["translateX(0%)", "translateX(100%)"] };
    } else {
      animation = {
        transform: ["translateX(-100%)", "translateX(0%)"],
      };
    }

    return animation;
  };

  useEffect(() => {
    animate(".stagger-bar", start ? transformAnimation(reverse) : {}, {
      duration: 1,
      ease: "easeInOut",
      delay: staggerBars,
    });
  });

  return scope;
}

export default function BarWipeAnimation(props: {
  start: boolean;
  reverse: boolean;
}) {
  const { start, reverse } = props;
  const scope = useAnimation(start, reverse);

  return (
    <div
      className={`absolute h-full overflow-hidden top-0 left-0 right-0 bottom-0 pointer-events-none z-50 ${
        start ? "visible" : "hidden"
      }`}
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
