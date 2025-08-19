import { BiExpandAlt } from "react-icons/bi";
import ProjectCarousel from "./ProjectCarousel";
import { GoArrowUpRight } from "react-icons/go";

export default function ProjectDetails({
  projectSelected,
  projects,
  setProjectSelected,
}) {
  return (
    <div className="uppercase p-5 text-[10px] flex font-semibold flex-col gap-8 overflow-hidden h-screen">
      <div className="flex justify-between items-center">
        <h1 className="text-5xl monoton font-normal tracking-wide">
          {projects[projectSelected]}
        </h1>
        <div className="text-6xl font-bold">0{1 + projectSelected}</div>
      </div>

      <div className="flex justify-center items-center flex-1 gap-5 relative">
        <div className="w-1/4 flex h-1/2 flex-col pr-5">
          <div className="w-[75%] flex flex-col gap-10">
            <div className="flex justify-between ">
              <p className="text-gray-500">00{1 + projectSelected}</p>
              <p>{projects[projectSelected]}</p>
            </div>
            <p className="text-justify leading-relaxed ">
              This is a project description. It provides an overview of the
              project, its features, and its purpose. The project aims to solve
              specific problems or provide certain functionalities.
            </p>
            <div className="flex justify-between">
              <p className="text-gray-500">Tools</p>
              <div className="text-right">
                <p>Next.js</p>
                <p>React</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-1/2"></div>
        <ProjectCarousel
          projects={projects}
          setProjectSelected={setProjectSelected}
        />

        <div className="w-1/4 flex flex-col justify-between pb-15 h-1/2 items-end">
          <div className="flex items-center gap-3">
            <p className="hover:underline cursor-pointer">Open</p>
            <BiExpandAlt className="text-base" />
            <div className="w-8 border-t border-black"></div>
          </div>
          <div className="flex items-center gap-3">
            <p className="hover:underline cursor-pointer">View Live</p>
            <GoArrowUpRight className="text-base" />
            <div className="w-8 border-t border-black"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
