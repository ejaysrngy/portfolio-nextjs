import React from "react";
import Image from "next/image";

import logos from "./images";

export default function About() {
  return (
    <div id="about" className="flex w-full px-4 pt-10 pb-8 gap-4 justify-evenly">
      <div className="w-[20%] flex justify-center items-center rotate-[270deg]">
        <div className="flex font-bigshoulders text-[20rem]">
          ABOUT
        </div>{" "}
      </div>
      <div className="w-[50%] p-6 font-poppins text-lg">
        I’m Ejay Sarangay, a junior full stack developer and a licensed
        physiotherapist. <br />
        <br />I career shifted into tech from being a fatigued allied medical
        professional. With the drive and motivation to create things that people
        can see and appreciate, this propelled me to pursue a career in
        front-end development. <br />
        <br /> Just as I dive into the rabbit-hole that is front-end
        development, I came to realize that I was barely scratching the surface
        of creating web applications. <br />
        <br /> This curiosity drove me to continue the free fall into web
        development and discover more processes that happen behind the scenes in
        creating a full-scale web app. <br />
        <br />
        Constantly striving to improve myself by keeping up with the latest
        technologies and best practices, allowing me to stand out among the
        competition and deliver only the best solutions for each and every
        client.
      </div>
      <div className="w-[30%] flex flex-col justify-center">
        <div className="font-poppins uppercase font-black text-8xl leading-[0.75em] tracking-[-0.025em]">
          {" "}
          TECH STACK{" "}
        </div>
        <div className="logo-section w-[90%] flex flex-wrap pt-6">
          {logos.map((logo, index) => {
            return (
              <a
                href={logo.link}
                key={index}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2"
              >
                <Image src={logo.src} alt="logo" width={90} />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
