import { BiExpandAlt } from "react-icons/bi";
import ProjectCarousel from "./ProjectCarousel";
import { GoArrowUpRight } from "react-icons/go";
import { useRef } from "react";
import { MdArrowBackIos } from "react-icons/md";

export default function ProjectDetails({
  projectSelected,
  projects,
  setProjectSelected,
  setHoveredIndex,
}) {
  const githubUrlRef = useRef(null);
  const liveUrlRef = useRef(null);

  return (
    <div className="uppercase p-5 text-[10px] flex font-semibold flex-col gap-8 overflow-hidden h-screen">
      <div className="flex justify-between items-center">
        <h1 className="sm:text-6xl text-3xl monoton font-normal tracking-wide">
          {projects[projectSelected].name}
        </h1>
        <div className="sm:text-6xl text-3xl font-bold">
          0{1 + projectSelected}
        </div>
      </div>

      <div className="sm:hidden">
        <div className="flex items-center justify-end py-2">
          <MdArrowBackIos />
          <p
            onClick={() => {
              setProjectSelected(null);
              setHoveredIndex(null);
            }}
          >
            back
          </p>
        </div>
        <img
          src={projects[projectSelected].imageUrl}
          alt={projects[projectSelected].name}
          className="w-full h-full object-contain aspect-video"
        />
      </div>
      <div className="flex justify-center items-center sm:flex-row flex-col-reverse sm:flex-1 gap-5 relative">
        <div className="sm:w-1/4 flex h-1/2 flex-col sm:pr-5">
          <div className="sm:w-[75%] flex sm:flex-col  sm:gap-10">
            <div className="sm:flex justify-between hidden">
              <p className="text-gray-500 ">00{1 + projectSelected}</p>
              <p>{projects[projectSelected].name}</p>
            </div>
            <div className="flex flex-col gap-10">
              <p className="text-justify  leading-relaxed ">
                {projects[projectSelected].description}
              </p>
              <div className="flex gap-5 flex-col sm:flex-row justify-between">
                <p className="text-gray-500">Tools</p>
                <div className="sm:text-right">
                  {projects[projectSelected].tools.map((tool, i) => (
                    <p key={i}>{tool}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-1/2 hidden sm:block" />
        <ProjectCarousel
          projects={projects}
          setProjectSelected={setProjectSelected}
          githubUrlRef={githubUrlRef}
          liveUrlRef={liveUrlRef}
        />

        <div className="sm:w-1/4 flex w-full sm:flex-col justify-between flex-row sm:pb-15 sm:h-1/2 h-10 sm:items-end">
          <div
            onClick={() =>
              window.open(projects[projectSelected].githubUrl, "_blank")
            }
            ref={githubUrlRef}
            className="flex items-center gap-3"
          >
            <p className="hover:underline cursor-pointer">Github</p>
            <BiExpandAlt className="text-base" />
            <div className="w-8 border-t border-black hidden sm:block"></div>
          </div>
          {projects[projectSelected].liveUrl && (
            <div
              onClick={() =>
                window.open(projects[projectSelected].liveUrl, "_blank")
              }
              ref={liveUrlRef}
              className="flex items-center gap-3"
            >
              <p className="hover:underline cursor-pointer">View Live</p>
              <GoArrowUpRight className="text-base" />
              <div className="w-8 border-t border-black hidden sm:block"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
