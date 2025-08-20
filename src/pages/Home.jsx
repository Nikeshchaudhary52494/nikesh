import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { HiArrowTurnRightDown } from "react-icons/hi2";
import ProjectDetails from "../components/ProjectDetails";
import { Link } from "react-router-dom";
import { projects } from "../data/data";

export default function Home() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [projectSelected, setProjectSelected] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleProjectSelect = (index) => {
    setProjectSelected(index);
  };

  if (projectSelected !== null) {
    return (
      <ProjectDetails
        projects={projects}
        projectSelected={projectSelected}
        setProjectSelected={setProjectSelected}
        setHoveredIndex={setHoveredIndex}
      />
    );
  }

  return (
    <div className="relative sm:h-screen min-h-screen w-full sm:overflow-hidden">
      <motion.div
        className="uppercase sm:p-8 p-4 text-[10px] font-semibold flex flex-col gap-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="flex justify-between">
          <h1 className="sm:text-6xl text-3xl font-normal monoton">
            Nikesh <br />
            Chaudhary
          </h1>
          <div className="gap-10 flex flex-col transition-all duration-100">
            <div className="hidden sm:block">
              <p className="hover:underline">download resume</p>
              <p className="hover:underline">@nikeshchaudhary</p>
            </div>
            <div>
              <Link to="/about">about</Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between gap-5">
          <motion.div
            className="sm:flex flex-col sm:mt-20 w-1/4 gap-10 "
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.1 },
              },
            }}
          >
            <div className="flex items-center gap-2">
              <p>projects</p>
              <HiArrowTurnRightDown />
            </div>
            <div className="hover:text-gray-500">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { y: -50, opacity: 0 },
                    visible: { y: 0, opacity: 1 },
                  }}
                  transition={{ duration: 0.6 }}
                  className={`sm:flex gap-20 w-fit hover:text-black hidden cursor-pointer`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onClick={() => handleProjectSelect(index)}
                >
                  <span>{101 + index}</span>
                  <span>{project.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col w-full sm:mt-20 gap-5"
            initial={{ rotateX: 90, opacity: 0, y: 100 }}
            animate={{ rotateX: 0, opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {projects.map((project, index) => (
              <div className="mx-auto w-full sm:w-96">
                <div className="flex justify-between sm:hidden">
                  <p>{project.name}</p>
                  <p className="text-gray-500">00{index + 1}</p>
                </div>
                <motion.div
                  key={index}
                  className={`h-20 w-full sm:w-md flex items-center justify-center gap-10 text-white font-semibold transition-all duration-300 ease-in-out relative overflow-hidden cursor-pointer
              ${hoveredIndex === index ? "scale-110" : "scale-100"}`}
                  style={{
                    backgroundImage: `url(${project.homeUrl})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  onClick={() => handleProjectSelect(index)}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  initial={{ rotateX: 90, opacity: 0 }}
                  animate={{ rotateX: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <div
                    className={`absolute inset-0 transition-all duration-300 ease-in-out  ${
                      hoveredIndex === index ? "bg-transparent" : "bg-black/50"
                    } `}
                  ></div>
                </motion.div>
              </div>
            ))}
          </motion.div>

          <div className="w-1/4 hidden sm:block"></div>
        </div>

        <div className="flex mt-auto justify-between w-full">
          <div>{time}</div>
          <div>Full stack developer</div>
        </div>
      </motion.div>
    </div>
  );
}
