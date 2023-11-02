import React, { useRef } from "react";
import ProjectCards from "./Cards";

import { motion, useTransform, useScroll } from "framer-motion";

import { PROJECTS } from "@/app/constants";

function Projects() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

  return (
    <div id="projects" className="flex flex-col py-8">
      <div className="font-bigshoulders text-9xl tracking-[0.8em] w-full text-center">
        PROJECTS
      </div>
      {/* projects container */}
      <section ref={targetRef} className="relative h-[300vh]">
        {/* individual projects */}
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div style={{ x }} className="flex gap-[31em]">
            {PROJECTS.map((project, index) => {
              return <ProjectCards project={project} key={index} />;
            })}
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Projects;
