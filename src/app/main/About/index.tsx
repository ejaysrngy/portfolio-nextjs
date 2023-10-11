import React from "react";

export default function About() {
  return (
    <div id="about" className="flex w-full px-4 py-8 gap-4 justify-evenly">
      <div className="w-[20%] flex justify-center items-center">
        <div className="vertical-text bg-red-accents font-poppins font-black tracking-[-0.55em] text-[7rem] cursor-default clipped-text h-[4.75em] w-[1em] flex items-center">ABOUT</div>{" "}
      </div>
      <div className="w-[50%] px-6 font-poppins text-lg">
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
        competition and deliver only the best solutions for each and every client.
      </div>
      <div className="w-[30%]">
        <div className="font-poppins uppercase font-black text-8xl leading-[0.75em] tracking-[-0.025em]">
          {" "}
          TECH STACK{" "}
        </div>
      </div>
    </div>
  );
}
