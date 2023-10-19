import React from "react";

interface ProjectCardsType {
  project: {
    image: any;
    name: string;
    description: string;
    links: { repo: string; demo: string };
    techStack: Array<string>;
  };
}

function ProjectCards(props: ProjectCardsType) {
  const { project } = props;
  return (
    <div className="p-4 flex gap-4">
      <div
        className="mx-4 h-[27rem] w-[27rem] bg-cover bg-center"
        style={{ backgroundImage: `url(${project.image.src})` }}
      />
      <div className="flex flex-col justify-between gap-4 w-[50em]">
        <div className="font-bigshoulders font-black text-7xl">{project.name.toUpperCase()}</div>
        <div className="flex gap-4">
          {project.techStack.map((tech, index) => {
            return (
              <span className="font-helvetica font-black tracking-wide text-black px-4 py-2 text-sm cursor-default border-[1px] border-solid border-black border-t-0 border-b-0">
                {tech.toUpperCase()}
              </span>
            );
          })}
        </div>
        <div className="font-poppins flex-[4]">{project.description}</div>
        <div className="flex gap-4">
          <a href={project.links.repo} className="inline w-fit">
            <button className="px-6 py-2 font-medium bg-red-accents text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
              Code
            </button>
          </a>
          <a href={project.links.demo} className="inline w-fit cursor-pointer">
            <button className="px-6 py-2 font-medium bg-red-accents text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
              Live Demo
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCards;
