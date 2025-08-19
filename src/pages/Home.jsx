import { useEffect, useState } from "react";
import { HiArrowTurnRightDown } from "react-icons/hi2";
import ProjectDetails from "../components/ProjectDetails";
import { Link } from "react-router-dom";

export default function Home() {
  const projects = ["Microfeed", "ping", "harmonic", "byte", "replino.ai"];
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [projectSelected, setProjectSelected] = useState(null);

  const handleProjectSelect = (index) => {
    setProjectSelected(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (projectSelected !== null) {
    return (
      <ProjectDetails
        projects={projects}
        projectSelected={projectSelected}
        setProjectSelected={setProjectSelected}
      />
    );
  }

  return (
    <div className="uppercase p-8 text-[10px] font-semibold flex flex-col gap-10 overflow-hidden h-screen">
      <div className="flex justify-between">
        <h1 className="text-6xl font-normal monoton">
          Nikesh <br />
          Chaudhary
        </h1>
        <div className="gap-10 flex flex-col transition-all duration-100">
          <div>
            <p className="hover:underline">download resume</p>
            <p className="hover:underline">@nikeshchaudhary</p>
          </div>
          <div>
            <Link to="/about">about</Link>
          </div>
        </div>
      </div>

      <div className="flex">
        <div className="flex flex-col gap-10 mt-20 w-1/4">
          <div className="flex items-center gap-2">
            <p>projects</p>
            <HiArrowTurnRightDown />
          </div>

          <div className="flex flex-col transition-all text-black hover:text-gray-500 duration-200">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`flex gap-20 w-fit cursor-pointer ${
                  hoveredIndex === index && "hover:text-black"
                }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => handleProjectSelect(index)}
              >
                <span>{101 + index}</span>
                <span>{project}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col mx-auto mt-20 gap-5">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`w-96 h-20 flex items-center justify-center gap-10 hover:bg-red-500 hover:scale-110 text-white transition-all duration-300 ease-in-out
                ${
                  hoveredIndex === index
                    ? "bg-red-500 scale-110"
                    : "bg-gray-500/20"
                }`}
              onClick={() => handleProjectSelect(index)}
            >
              {project}
            </div>
          ))}
        </div>

        <div className="w-1/4"></div>
      </div>

      <div className="flex mt-auto justify-between w-full">
        <div>{time}</div>
        <div>Full stack developer</div>
      </div>
    </div>
  );
}
