import Image from "next/image";

import waveAccents from "../../../../public/wave-accents.svg";

export default function HeroSection() {
  const heroHeaderStyles = [
    "font-helvetica",
    "font-black",
    "text-[16.5em]",
    "2xl:text-[20em]",
    "leading-[0.75em]",
    "inline-block",
    "px-2",
    "tracking-[-0.1em]",
    "relative",
    "z-10",
  ].join(" ");

  return (
    <div className="relative w-full">
      <div className={heroHeaderStyles}>EJAY SARANGAY</div>
      <div className="px-10 pt-1 flex flex-col font-poppins italic text-3xl font-light">
        <div>
          {" "}
          // junior fullstack developer{" "}
        </div>
        <div>
          {" "}
          // licensed physiotherapist{" "}
        </div>
      </div>
      <div className="absolute w-fit flex gap-10 overflow-hidden xl:bottom-[10em] xl:left-[45em] 2xl:left-[60em] 2xl:bottom-[15em]">
        <Image src={waveAccents} height="175" alt="waves" />
        <Image className="rotate-90" src={waveAccents} height="175" alt="waves" />
        <Image className="rotate-180" src={waveAccents} height="175" alt="waves" />
      </div>
    </div>
  );
}
