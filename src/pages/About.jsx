import { IoIosClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { FaStarOfLife } from "react-icons/fa6";
import { motion } from "framer-motion";

export default function About() {
  const navigate = useNavigate();

  const sections = [
    {
      title: "Location",
      content: ["India", "28° 36′ N 77° 13′ E"],
    },
    {
      title: "Socials",
      content: [
        { text: "Github", href: "#" },
        { text: "LinkedIn", href: "#" },
        { text: "Twitter", href: "#" },
      ],
      isLinks: true,
    },
    {
      title: "Stack",
      content: [
        // Languages
        "JavaScript",
        "TypeScript",
        "Java",
        "Python",

        // Frontend
        "React",
        "Next.js",
        "Tailwind CSS",

        // Backend
        "Node.js",
        "Express",
        "Spring Boot",

        // Databases
        "MongoDB",
        "PostgreSQL",

        // APIs & Auth
        "REST",
        "GraphQL",
        "gRPC",
        "Clerk",

        // Infra & DevOps
        "AWS (EC2, Lambda, S3)",
        "Docker",
        "Redis",
        "RabbitMQ",
        "Kafka",
      ],
    },
  ];

  return (
    <div className="uppercase text-[10px] font-semibold h-screen overflow-hidden flex flex-col gap-20 p-5">
      <div className="flex gap-20 items-center">
        <h1 className="text-6xl font-normal monoton">about</h1>
        <div
          onClick={() => navigate(-1)}
          className="gap-5 flex items-center cursor-pointer transition-all duration-100"
        >
          <div className="w-20 border-t border-black"></div>
          <IoIosClose size={24} />
          <p className="hover:underline">close</p>
        </div>
      </div>

      <div className="flex flex-row justify-between items-start">
        <div className="w-1/2 leading-relaxed tracking-wide">
          <p>
            I’m Nikesh, a developer focused on creating motion-based websites
            that combine aesthetics and performance. I care deeply about
            fine-tuned animations and smooth user interactions.
          </p>
          <p className="mt-4">
            From a strong background in React, Next.js, and creative coding
            (Three.js, GSAP), I constantly push boundaries in design and
            engineering. Outside of coding, I explore music and creative arts to
            keep my inspiration alive.
          </p>
        </div>
        <div className="flex gap-20">
          {sections.map((section, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.1 },
                },
              }}
            >
              <h2 className="mb-2 text-gray-500">{section.title}</h2>

              {section.isLinks ? (
                <ul>
                  {section.content.map((link, i) => (
                    <motion.li
                      key={i}
                      variants={{
                        hidden: { y: -30, opacity: 0 },
                        visible: { y: 0, opacity: 1 },
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <a href={link.href} className="hover:underline">
                        {link.text}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              ) : (
                <ul>
                  {section.content.map((item, i) => (
                    <motion.li
                      key={i}
                      variants={{
                        hidden: { y: -30, opacity: 0 },
                        visible: { y: 0, opacity: 1 },
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      <div className="h-full flex items-center">
        <FaStarOfLife size={96} />
      </div>

      <div className="flex justify-between mt-auto text-[11px]">
        <div>
          <a href="/resume.pdf" className="hover:underline">
            Download Resume
          </a>
          <p>@nikesh.dev</p>
        </div>
        <p>Frontend Dev</p>
      </div>
    </div>
  );
}
