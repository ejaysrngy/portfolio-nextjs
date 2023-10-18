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
    <div className="border-1 border-solid p-4 flex">
      <div
        className="mx-4 h-[27rem] w-[27rem] bg-cover bg-center"
        style={{ backgroundImage: `url(${project.image.src})` }}
      />
      <div className="flex flex-col justify-start gap-4">
        <div className="font-poppins font-bold text-3xl">{project.name}</div>
        <div className="flex gap-6">
          {project.techStack.map((tech, index) => {
            return (
              <button className="px-6 py-2 font-medium bg-red-accents text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] cursor-default">
                {tech}
              </button>
            );
          })}
        </div>
        <div className="font-poppins w-[25em]">{project.description}</div>
        <div className="flex flex-col gap-1">
          <a href={project.links.repo}>
            <button className="px-6 py-2 font-medium bg-red-accents text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
              Code
            </button>
          </a>
          <a href={project.links.demo}>
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
