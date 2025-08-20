import { use, useEffect, useRef, useState } from "react";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

function ProjectCarousel({
  projects,
  setProjectSelected,
  githubUrlRef,
  liveUrlRef,
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const activeCardRef = useRef(null);
  const previosCardRef = useRef(null);
  const nextCardRef = useRef(null);
  const previousButtonRef = useRef(null);
  const nextButtonRef = useRef(null);

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % projects.length);
    setProjectSelected((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
    setProjectSelected((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  useEffect(() => {
    function handleClickOutside(event) {
      const clickedInside =
        (activeCardRef.current &&
          activeCardRef.current.contains(event.target)) ||
        (previosCardRef.current &&
          previosCardRef.current.contains(event.target)) ||
        (nextCardRef.current && nextCardRef.current.contains(event.target)) ||
        (previousButtonRef.current &&
          previousButtonRef.current.contains(event.target)) ||
        (nextButtonRef.current &&
          nextButtonRef.current.contains(event.target)) ||
        (githubUrlRef.current && githubUrlRef.current.contains(event.target)) ||
        (liveUrlRef.current && liveUrlRef.current.contains(event.target));

      if (!clickedInside) {
        setProjectSelected(null);
      }
    }

    if (window.innerWidth > 768) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      if (window.innerWidth > 768) {
        document.removeEventListener("mousedown", handleClickOutside);
      }
    };
  }, [setProjectSelected]);

  const variants = {
    enter: (direction) => ({
      scale: 0.5,
      y: direction > 0 ? 400 : -400,
      opacity: 0,
      position: "absolute",
    }),
    center: {
      y: 0,
      scale: 1,
      opacity: 1,
      position: "absolute",
    },
    exit: (direction) => ({
      y: direction > 0 ? -400 : 400,
      opacity: 0,
      scale: 0.5,
      position: "absolute",
    }),
  };

  return (
    <div className="fixed sm:flex flex-col hidden z-10 top-0 h-screen items-center justify-center w-1/2 overflow-hidden">
      <div className="relative w-full h-full flex flex-col items-center justify-center">
        <motion.div
          key={`prev-${activeIndex}`}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 0.5, scale: 0.9 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute -top-20 w-[50%] h-[200px] bg-gray-500/20 cursor-pointer flex items-center justify-center"
          onClick={handlePrev}
          ref={previosCardRef}
        >
          {projects[(activeIndex - 1 + projects.length) % projects.length]
            .imageUrl ? (
            <img
              src={
                projects[(activeIndex - 1 + projects.length) % projects.length]
                  .imageUrl
              }
              alt="preview"
              className="w-full h-full aspect-video object-cover"
            />
          ) : (
            <div className="w-full h-full bg-black flex items-center justify-center text-white text-lg font-semibold">
              {
                projects[(activeIndex - 1 + projects.length) % projects.length]
                  .name
              }
            </div>
          )}
        </motion.div>

        <MdOutlineKeyboardArrowUp
          size={28}
          className="absolute top-[170px] left-[50%] -translate-x-1/2 text-gray-500 cursor-pointer"
          onClick={handlePrev}
          ref={previousButtonRef}
        />

        <div className="relative w-full h-[450px]">
          <AnimatePresence custom={direction}>
            <motion.div
              key={activeIndex}
              ref={activeCardRef}
              variants={variants}
              custom={direction}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.6 }}
              className="w-full h-full flex items-center justify-center"
            >
              {projects[activeIndex].imageUrl ? (
                <img
                  src={projects[activeIndex].imageUrl}
                  alt="active"
                  className="w-full h-full object-contain aspect-video"
                />
              ) : (
                <div className="w-full h-full bg-black flex items-center justify-center text-white text-5xl font-bold">
                  {projects[activeIndex].name}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        <MdOutlineKeyboardArrowDown
          size={28}
          className="absolute bottom-[170px] left-[50%] -translate-x-1/2 text-gray-500 cursor-pointer"
          onClick={handleNext}
          ref={nextButtonRef}
        />

        <motion.div
          key={`next-${activeIndex}`}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 0.5, scale: 0.9 }}
          exit={{ y: 50, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute -bottom-20 w-[50%] h-[200px] bg-gray-500/20 cursor-pointer flex items-center justify-center"
          onClick={handleNext}
          ref={nextCardRef}
        >
          {projects[(activeIndex + 1) % projects.length].imageUrl ? (
            <img
              src={projects[(activeIndex + 1) % projects.length].imageUrl}
              alt="preview"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-black flex items-center justify-center text-white text-lg font-semibold">
              {projects[(activeIndex + 1) % projects.length].name}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}

export default ProjectCarousel;
